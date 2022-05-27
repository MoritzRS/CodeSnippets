<script lang="ts">
	import { setBuffer } from "$lib/modules/buffer/buffer";
	import { Storage } from "$lib/modules/storage/storage";

	import type { Note } from "$lib/modules/types";

	export let note: Note;

	function open() {
		setBuffer(Storage.getNote(note.title));
	}
</script>

<template>
	<button type="button" class="py-1 px-2 text-sm text-left hover:bg-base-300" on:click={open}>
		<span>{note.title}</span>
	</button>
</template>

<style lang="scss">
</style>
