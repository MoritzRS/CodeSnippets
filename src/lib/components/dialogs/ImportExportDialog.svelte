<script lang="ts">
	import RefreshIcon from "$lib/icons/RefreshIcon.svelte";
	import { BUFFER } from "$lib/modules/buffer/buffer";
	import { DIALOG } from "$lib/modules/dialogs/dialog";
	import { FILESYSTEM } from "$lib/modules/filesystem/filesystem";
	import { SETTINGS } from "$lib/modules/settings/settings";
	import { onMount } from "svelte";
	import Dialog from "./Dialog.svelte";

	let filename = "CodeSnippetsExport.json";
	let files: FileList;

	$: fileCount = ((cnt: number) => {
		if (cnt == 1) return cnt + " File";
		return cnt + " Files";
	})($FILESYSTEM.length);

	$: storageCount = ((size: number) => {
		if (size < 100000) return parseFloat((size / 1000).toFixed(1)) + " KB";
		return parseFloat((size / 1000000).toFixed(1)) + "MB";
	})(JSON.stringify($FILESYSTEM).length);

	async function importData() {
		const file = JSON.parse(await files[0].text());
		if (file.settings) {
			SETTINGS.set(file.settings);
		}

		if (file.notes && file.notes.length) {
			for (let i = 0; i < file.notes.length; i++) {
				let note = file.notes[i];
				if (!note.title || !note.snippets) continue;

				FILESYSTEM.write(note);
			}
		}

		BUFFER.clear();
		DIALOG.toggleImportExport();
	}

	function exportData() {
		const data = {
			settings: $SETTINGS,
			notes: $FILESYSTEM
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

		DIALOG.toggleImportExport();
	}

	function resetData() {
		localStorage.clear();
		SETTINGS.reset();
		FILESYSTEM.clear();
		BUFFER.clear();
	}

	onMount(() => {
		FILESYSTEM.scan();
	});
</script>

<template>
	<Dialog toggle={DIALOG.toggleImportExport}>
		<h1 class="text-4xl font-bold pb-4">Import / Export</h1>

		<div class="stats shadow-md">
			<div class="stat">
				<div class="stat-title">Filesystem</div>
				<div class="stat-value text-primary">{fileCount}</div>
				<div class="stat-desc">currently in storage</div>
			</div>
			<div class="stat">
				<div class="stat-title">Storage</div>
				<div class="stat-value text-primary">{storageCount}</div>
				<div class="stat-desc">of storage used</div>
			</div>
		</div>

		<div class="divider" />

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

		<div class="divider" />

		<div class="flex justify-end">
			<button type="button" class="btn gap-1" on:click={resetData}>
				<RefreshIcon size={16} />
				<span>Reset Storage</span>
			</button>
		</div>
	</Dialog>
</template>

<style lang="scss">
</style>
