<script lang="ts">
	import { FILESYSTEM } from "$lib/modules/filesystem/filesystem";
	import type { Note } from "$lib/modules/types";
	import { WINDOW } from "$lib/modules/window/window";
	import { onDestroy, onMount } from "svelte";
	import ResultEntry from "./ResultEntry.svelte";

	let searchString = "";

	let results: Note[] = [];

	async function search() {
		results = await FILESYSTEM.findContent(searchString, false);
	}

	onMount(() => {
		WINDOW.update();
	});

	onDestroy(() => {
		WINDOW.update();
	});
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

	<div class="overflow-y-auto">
		<div class="flex flex-col">
			{#each results as note}
				<ResultEntry {note} />
			{/each}
		</div>
	</div>
</template>

<style lang="scss">
</style>
