<script lang="ts">
	import TrashIcon from "$lib/icons/TrashIcon.svelte";
	import { BUFFER } from "$lib/modules/buffer/buffer";
	import { refreshFileTree } from "$lib/modules/filetree/fileTree";
	import { Storage } from "$lib/modules/storage/storage";

	import type { Note } from "$lib/modules/types";

	export let note: Note;

	function open() {
		BUFFER.set(Storage.getNote(note.title));
	}

	function remove() {
		if ($BUFFER?.title == note.title) BUFFER.clear();
		Storage.deleteNote(note.title);
		refreshFileTree();
	}
</script>

<template>
	<button
		type="button"
		class="flex flex-row justify-between items-center p-2 text-sm text-left hover:bg-base-300"
		class:bg-base-300={$BUFFER?.title == note.title}
		on:click|self={open}
	>
		<span>{note.title}</span>
		<button type="button" class="btn btn-sm btn-square btn-ghost" on:click={remove}>
			<TrashIcon size={16} />
		</button>
	</button>
</template>

<style lang="scss">
</style>
