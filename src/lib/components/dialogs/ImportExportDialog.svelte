<script lang="ts">
	import { DialogManager, DIALOG_IMPORT_EXPORT } from "$lib/modules/dialogs/dialog";
	import { refreshFileTree } from "$lib/modules/filetree/fileTree";
	import { SettingManager, SETTINGS } from "$lib/modules/settings/settings";
	import { Storage } from "$lib/modules/storage/storage";
	import Dialog from "./Dialog.svelte";

	let filename = "CodeSnippetsExport.json";
	let files: FileList;

	async function importData() {
		const file = JSON.parse(await files[0].text());
		if (file.settings) {
			$SETTINGS = file.settings;
			SettingManager.saveSettings();
		}

		if (file.notes && file.notes.length) {
			for (let i = 0; i < file.notes.length; i++) {
				let note = file.notes[i];
				if (!note.title || !note.snippets) continue;

				Storage.writeNote(note);
			}
			refreshFileTree();
		}

		DialogManager.toggleImportExportDialog();
	}

	function exportData() {
		const data = {
			settings: $SETTINGS,
			notes: Storage.getNotes()
		};
		const element = document.createElement("a");
		element.setAttribute(
			"href",
			"data:text/plain;charset=utf-8," + encodeURIComponent(JSON.stringify(data, null, 4))
		);
		element.setAttribute("download", filename + ".json");
		element.style.display = "none";

		document.body.appendChild(element);
		element.click();
		document.body.removeChild(element);

		DialogManager.toggleImportExportDialog();
	}
</script>

<template>
	{#if $DIALOG_IMPORT_EXPORT}
		<Dialog toggle={DialogManager.toggleImportExportDialog}>
			<h1 class="text-4xl font-bold pb-4">Import / Export</h1>

			<div class="input-group w-full">
				<label class="flex-1">
					<span class="btn btn-outline">Upload Import File</span>
					<input type="file" accept="application/json" class="hidden" bind:files />
				</label>
				<button type="button" class="btn" disabled={!files?.length} on:click={importData}>Import</button>
			</div>

			<div class="divider" />

			<div class="input-group w-full">
				<input type="text" class="input input-bordered" bind:value={filename} />
				<button type="button" class="btn" on:click={exportData}>Export</button>
			</div>
		</Dialog>
	{/if}
</template>

<style lang="scss">
</style>
