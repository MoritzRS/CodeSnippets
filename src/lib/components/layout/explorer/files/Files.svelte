<script lang="ts">
	import { FILESYSTEM } from "$lib/modules/filesystem/filesystem";
	import { onMount } from "svelte";
	import CreateButton from "./CreateButton.svelte";
	import Empty from "./Empty.svelte";
	import Entry from "./Entry.svelte";
	import RefreshButton from "./RefreshButton.svelte";

	onMount(() => {
		FILESYSTEM.scan();
	});
</script>

<template>
	<div class="flex flex-row flex-wrap gap-3 justify-between p-3">
		<span class="text-lg font-bold">Explorer</span>
		<div class="flex flex-row gap-1">
			<RefreshButton />
			<CreateButton />
		</div>
	</div>
	<div class="flex flex-col overflow-y-auto min-h-full">
		{#each $FILESYSTEM as note}
			<Entry {note} />
		{:else}
			<Empty />
		{/each}
	</div>
</template>

<style lang="scss">
</style>
