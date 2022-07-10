<script lang="ts">
	import type { Snippet } from "$lib/modules/types";
	import CopyButton from "./CopyButton.svelte";
	import DeleteButton from "./DeleteButton.svelte";
	import LanguageSelector from "./LanguageSelector.svelte";
	import Monaco from "./Monaco.svelte";

	export let snippet: Snippet;

	let length = 0;
	let lineNumber = 0;
	let column = 0;

	function printSize(size: number) {
		if (size > 100000) return parseFloat((size / 1000000).toFixed(2)) + " MiB";
		if (size > 100) return parseFloat((size / 1000).toFixed(2)) + " KiB";
		return size + " Byte";
	}
</script>

<template>
	<div class="w-full max-w-5xl card card-bordered bg-base-300">
		<div class="w-full p-2 flex flex-row justify-between">
			<input type="text" class="input" bind:value={snippet.title} />
			<span>
				<CopyButton id={snippet.id} />
				<DeleteButton id={snippet.id} />
			</span>
		</div>
		<Monaco {snippet} bind:length bind:lineNumber bind:column />
		<div class="w-full flex flex-row justify-between items-center p-2">
			<span class="badge badge-outline text-xs" title="Position">
				<span>{printSize(length)}</span>
				<span class="px-1">|</span>
				<span>Ln {lineNumber}, Col {column}</span>
			</span>
			<LanguageSelector bind:language={snippet.language} />
		</div>
	</div>
</template>

<style lang="scss">
</style>
