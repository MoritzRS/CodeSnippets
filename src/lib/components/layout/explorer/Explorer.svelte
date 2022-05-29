<script lang="ts">
	import { ExplorerStates, EXPLORER } from "$lib/modules/explorer/explorer";
	import FileSearch from "./filesearch/FileSearch.svelte";
	import Files from "./files/Files.svelte";
	import ContentSearch from "./contentsearch/ContentSearch.svelte";
</script>

<template>
	{#if $EXPLORER !== ExplorerStates.Closed}
		<div
			class="flex flex-col h-full w-96 flex-shrink-0 overflow-hidden bg-base-200 fixed left-16 lg:static lg:left-0 z-10"
		>
			{#if $EXPLORER == ExplorerStates.Files}
				<Files />
			{:else if $EXPLORER == ExplorerStates.FileSearch}
				<FileSearch />
			{:else if $EXPLORER == ExplorerStates.ContentSearch}
				<ContentSearch />
			{/if}
		</div>
	{/if}
</template>

<style lang="scss">
</style>
