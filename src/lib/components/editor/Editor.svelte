<script lang="ts">
	import PlusCircleIcon from "$lib/icons/PlusCircleIcon.svelte";
	import { BUFFER } from "$lib/modules/buffer/buffer";
	import { SETTINGS } from "$lib/modules/settings/settings";
	import { Storage } from "$lib/modules/storage/storage";
	import Bar from "./bar/Bar.svelte";
	import Snippet from "./snippet/Snippet.svelte";

	function addSnippet() {
		BUFFER.update((buffer) => {
			let snippet = {
				id: buffer.snippets.length.toString(),
				title: "untitled.js",
				language: "javascript",
				content: "console.log('Hello World');"
			};
			return { ...buffer, snippets: [...buffer.snippets, snippet] };
		});
		if ($SETTINGS.autoSave) Storage.writeNote($BUFFER);
	}
</script>

<template>
	{#if $BUFFER}
		<Bar />
		<div class="flex-1 py-12 px-4 overflow-y-auto">
			<div class="flex flex-col gap-12 items-center justify-center">
				{#key $BUFFER.snippets}
					{#each $BUFFER.snippets as snippet}
						<Snippet {snippet} />
					{/each}
				{/key}
				<button type="button" class="btn btn-primary gap-1" on:click={addSnippet}>
					<PlusCircleIcon />
					<span>Add Snippet</span>
				</button>
			</div>
		</div>
	{/if}
</template>

<style lang="scss">
</style>
