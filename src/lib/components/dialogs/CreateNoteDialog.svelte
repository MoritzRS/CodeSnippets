<script lang="ts">
	import { BUFFER } from "$lib/modules/buffer/buffer";

	import { DIALOG } from "$lib/modules/dialogs/dialog";
	import { FILESYSTEM } from "$lib/modules/filesystem/filesystem";
	import type { Note } from "$lib/modules/types";
	import Dialog from "./Dialog.svelte";

	let name = "";

	function check(name: string) {
		return FILESYSTEM.exists(name) || !name;
	}

	function create() {
		let note: Note = {
			title: name,
			snippets: [
				{
					id: 0,
					title: "main.ts",
					language: "typescript",
					content: 'console.log("Test");'
				}
			]
		};
		FILESYSTEM.write(note);
		BUFFER.set(note);
		name = "";
		DIALOG.toggleCreate();
	}
</script>

<template>
	<Dialog toggle={DIALOG.toggleCreate}>
		<form>
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
				<button type="button" class="btn btn-ghost" on:click={DIALOG.toggleCreate}>
					<span>Cancel</span>
				</button>
				<button type="submit" class="btn btn-primary" on:click|preventDefault={create} disabled={check(name)}
					>Create</button
				>
			</div>
		</form>
	</Dialog>
</template>

<style lang="scss">
</style>
