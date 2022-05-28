<script lang="ts">
	import { SETTINGS } from "$lib/modules/settings/settings";

	import type { Snippet } from "$lib/modules/types";
	import * as monaco from "monaco-editor/esm/vs/editor/editor.api";
	import { onDestroy, onMount } from "svelte";

	export let snippet: Snippet;
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

		editor.getModel().onDidChangeContent(() => {
			snippet.content = editor.getModel().getValue();
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
