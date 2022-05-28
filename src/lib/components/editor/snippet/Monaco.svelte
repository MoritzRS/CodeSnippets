<script lang="ts">
	import { BUFFER } from "$lib/modules/buffer/buffer";

	import { SETTINGS } from "$lib/modules/settings/settings";
	import { Storage } from "$lib/modules/storage/storage";

	import type { Note, Snippet } from "$lib/modules/types";
	import * as monaco from "monaco-editor/esm/vs/editor/editor.api";
	import { onDestroy, onMount } from "svelte";

	export let snippet: Snippet;
	export let length = 0;
	let container: HTMLElement;
	let editor: monaco.editor.IStandaloneCodeEditor;

	// dynamic theme update
	$: {
		monaco.editor.setTheme($SETTINGS.darkMode ? "vs-dark" : "vs");
	}

	// dynamic language update
	$: {
		if (editor) {
			monaco.editor.setModelLanguage(editor.getModel(), snippet.language);
			editor.updateOptions({
				minimap: {
					enabled: $SETTINGS.minimap
				},
				fontSize: $SETTINGS.fontSize
			});
		}
	}

	onMount(() => {
		editor = monaco.editor.create(container, {
			theme: "vs-dark",
			automaticLayout: true,
			scrollBeyondLastLine: false,
			fontSize: 16,
			minimap: {
				enabled: false
			},
			value: snippet.content,
			language: snippet.language
		});
		length = snippet.content.length;

		editor.getModel().onDidChangeContent(() => {
			snippet.content = editor.getModel().getValue();
			length = snippet.content.length;
			if ($SETTINGS.autoSave) {
				const save = async (buffer: Note) => Storage.writeNote(buffer);
				save($BUFFER);
			}
		});
	});

	onDestroy(() => {
		editor?.dispose();
	});
</script>

<template>
	<div class="w-full h-96" bind:this={container} />
</template>

<style lang="scss">
</style>
