<script lang="ts">
	import { setBuffer } from "$lib/modules/buffer/buffer";

	import { DIALOG_CREATE, DialogManager } from "$lib/modules/dialogs/dialog";
	import { refreshFileTree } from "$lib/modules/filetree/fileTree";
	import { Storage } from "$lib/modules/storage/storage";
	import type { Note } from "$lib/modules/types";
	import Dialog from "./Dialog.svelte";

	let name = "";

	function check(name: string) {
		return Storage.hasNote(name) || !name;
	}

	function close() {
		name = "";
		DialogManager.toggleDialogCreate();
	}

	function create() {
		let note: Note = {
			title: name,
			snippets: [
				{
					title: "Sample",
					language: "javascript",
					content: 'console.log("Test");'
				}
			]
		};
		Storage.writeNote(note);
		refreshFileTree();
		setBuffer(Storage.getNote(name));
		name = "";
		DialogManager.toggleDialogCreate();
	}
</script>

<template>
	{#if $DIALOG_CREATE}
		<Dialog toggle={DialogManager.toggleDialogCreate}>
			<h2 class="text-xl font-bold">Create Note</h2>
			<input
				type="text"
				placeholder="Name"
				class="input input-bordered my-3"
				class:input-error={check(name)}
				autofocus
				bind:value={name}
			/>

			<div class="flex flex-row flex-wrap gap-1 justify-end">
				<button type="button" class="btn btn-ghost" on:click={close}>
					<span>Cancel</span>
				</button>
				<button type="button" class="btn btn-primary" on:click={create} disabled={check(name)}>Create</button>
			</div>
		</Dialog>
	{/if}
</template>

<style lang="scss">
</style>
