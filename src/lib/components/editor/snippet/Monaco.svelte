<script lang="ts">
	import { BUFFER } from "$lib/modules/buffer/buffer";
	import { FILESYSTEM } from "$lib/modules/filesystem/filesystem";
	import { SETTINGS } from "$lib/modules/settings/settings";
	import type { Note, Snippet } from "$lib/modules/types";
	import { WINDOW } from "$lib/modules/window/window";
	import * as monaco from "monaco-editor/esm/vs/editor/editor.api";
	import { onDestroy, onMount } from "svelte";

	export let snippet: Snippet;

	export let length = 0;
	export let lineNumber = 0;
	export let column = 0;

	let container: HTMLElement;
	let editor: monaco.editor.IStandaloneCodeEditor;

	// dynamic theme update
	$: {
		if (editor)
			monaco.editor.setTheme(
				$SETTINGS.theme == "dark" || ($SETTINGS.theme == "auto" && $WINDOW.prefersDarkMode) ? "vs-dark" : "vs"
			);
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
			const model = editor.getModel();
			snippet.content = model.getValue();
			length = model.getValueLength();

			if ($SETTINGS.autoSave) {
				FILESYSTEM.write($BUFFER, false);
			}
		});

		editor.onDidChangeCursorPosition(() => {
			const position = editor.getPosition();
			lineNumber = position.lineNumber;
			column = position.column;
		});

		// add custom commandline shortcut
		editor.addAction({
			id: "quickCommand",
			label: "Open Command Palette",
			keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyMod.Shift | monaco.KeyCode.KeyP],
			run: function () {
				editor.trigger(null, "editor.action.quickCommand", null);
			}
		});

		return WINDOW.subscribe(() => {
			if (editor) {
				editor.layout({ width: 0, height: 0 });
				editor.layout();
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
