<script lang="ts">
	import { FILE_TREE, refreshFileTree } from "$lib/modules/filetree/fileTree";
	import { onMount } from "svelte";
	import CreateButton from "./CreateButton.svelte";
	import Empty from "./Empty.svelte";
	import NoteEntry from "./NoteEntry.svelte";
	import RefreshButton from "./RefreshButton.svelte";

	onMount(() => {
		refreshFileTree();
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
		{#each $FILE_TREE as note}
			<NoteEntry {note} />
		{:else}
			<Empty />
		{/each}
	</div>
</template>

<style lang="scss">
</style>
