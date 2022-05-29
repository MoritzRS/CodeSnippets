<script lang="ts">
	import { FILESYSTEM } from "$lib/modules/filesystem/filesystem";
	import type { Note } from "$lib/modules/types";
	import ResultEntry from "./ResultEntry.svelte";

	let searchString = "";

	let results: Note[] = [];

	function search() {
		results = FILESYSTEM.findContent(searchString, false);
	}
</script>

<template>
	<div class="flex flex-row flex-wrap gap-3 justify-between p-3">
		<span class="text-lg font-bold">Content Search</span>
	</div>
	<div class="flex flex-col gap-3">
		<form class="input-group justify-center items-center">
			<input type="text" class="input input-sm input-bordered" placeholder="Search" bind:value={searchString} />
			<button type="submit" class="btn btn-sm btn-primary" on:click|preventDefault={search}>Search</button>
		</form>
	</div>

	<div class="divider">Results</div>

	<div class="flex flex-col overflow-y-auto min-h-full">
		{#each results as note}
			<ResultEntry {note} />
		{/each}
	</div>
</template>

<style lang="scss">
</style>
