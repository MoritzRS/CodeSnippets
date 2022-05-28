<script lang="ts">
	import type { Snippet } from "$lib/modules/types";
	import DeleteButton from "./DeleteButton.svelte";
	import LanguageSelector from "./LanguageSelector.svelte";
	import Monaco from "./Monaco.svelte";

	export let snippet: Snippet;
</script>

<template>
	<div class="w-full max-w-5xl card card-bordered bg-base-300">
		<div class="w-full p-2 flex flex-row justify-between">
			<input type="text" class="input" bind:value={snippet.title} />
			<span>
				<DeleteButton id={snippet.id} />
			</span>
		</div>
		<Monaco {snippet} />
		<div class="w-full flex flex-row justify-end p-1">
			<LanguageSelector bind:language={snippet.language} />
		</div>
	</div>
</template>

<style lang="scss">
</style>
