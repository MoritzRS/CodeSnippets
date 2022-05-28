<script lang="ts">
	import { ExplorerStates, EXPLORER_STATE } from "$lib/modules/explorer/explorer";
	import NoteSearch from "./notesearch/NoteSearch.svelte";
	import NotesView from "./notesview/NotesView.svelte";
	import SnippetSearch from "./snippetsearch/SnippetSearch..svelte";
</script>

<template>
	{#if $EXPLORER_STATE !== ExplorerStates.Closed}
		<div
			class="flex flex-col h-full w-96 flex-shrink-0 overflow-hidden bg-base-200 fixed left-16 lg:static lg:left-0 z-10"
		>
			{#if $EXPLORER_STATE == ExplorerStates.NotesView}
				<NotesView />
			{:else if $EXPLORER_STATE == ExplorerStates.NoteSearch}
				<NoteSearch />
			{:else if $EXPLORER_STATE == ExplorerStates.SnippetSearch}
				<SnippetSearch />
			{/if}
		</div>
	{/if}
</template>

<style lang="scss">
</style>
