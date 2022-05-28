<script lang="ts">
	import { BUFFER, setBuffer } from "$lib/modules/buffer/buffer";
	import { Storage } from "$lib/modules/storage/storage";

	import type { Note } from "$lib/modules/types";

	export let note: Note;

	function open() {
		setBuffer(Storage.getNote(note.title));
	}
</script>

<template>
	<button
		type="button"
		class="p-2 text-sm text-left hover:bg-base-300"
		class:bg-base-300={$BUFFER?.title == note.title}
		on:click={open}
	>
		<span>{note.title}</span>
	</button>
</template>

<style lang="scss">
</style>
