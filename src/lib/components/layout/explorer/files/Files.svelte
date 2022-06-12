<script lang="ts">
	import { FILESYSTEM } from "$lib/modules/filesystem/filesystem";
	import { RESIZE_OBSERVER } from "$lib/modules/resizeobserver/resizeObserver";
	import { onDestroy, onMount } from "svelte";
	import CreateButton from "./CreateButton.svelte";
	import Empty from "./Empty.svelte";
	import Entry from "./Entry.svelte";
	import RefreshButton from "./RefreshButton.svelte";

	onMount(() => {
		FILESYSTEM.scan();
		RESIZE_OBSERVER.trigger();
	});

	onDestroy(() => {
		RESIZE_OBSERVER.trigger();
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
	<div class="overflow-y-auto">
		<div class="flex flex-col">
			{#each $FILESYSTEM as note}
				<Entry {note} />
			{:else}
				<Empty />
			{/each}
		</div>
	</div>
</template>

<style lang="scss">
</style>
