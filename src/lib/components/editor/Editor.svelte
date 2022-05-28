<script lang="ts">
	import PlusCircleIcon from "$lib/icons/PlusCircleIcon.svelte";
	import { BUFFER } from "$lib/modules/buffer/buffer";
	import { Storage } from "$lib/modules/storage/storage";
	import Bar from "./bar/Bar.svelte";
	import Snippet from "./snippet/Snippet.svelte";

	function addSnippet() {
		let snippet = { title: "untitled", language: "javascript", content: "console.log('Hello World');" };
		BUFFER.update((buffer) => ({ ...buffer, snippets: [...buffer.snippets, snippet] }));

		Storage.writeNote($BUFFER);
	}
</script>

<template>
	<Bar />
	<div class="flex-1 py-12 overflow-y-auto">
		<div class="flex flex-col gap-12 items-center justify-center">
			{#each $BUFFER.snippets as _, i}
				<Snippet index={i} />
			{/each}
			<button type="button" class="btn btn-primary gap-1" on:click={addSnippet}>
				<PlusCircleIcon />
				<span>Add Snippet</span>
			</button>
		</div>
	</div>
</template>

<style lang="scss">
</style>
