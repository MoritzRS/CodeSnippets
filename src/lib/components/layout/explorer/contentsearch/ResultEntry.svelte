<script lang="ts">
	import { BUFFER } from "$lib/modules/buffer/buffer";
	import type { Note } from "$lib/modules/types";

	export let note: Note;

	function open() {
		BUFFER.set(note);
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
