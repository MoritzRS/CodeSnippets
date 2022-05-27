<script lang="ts">
	import ContentSearchButton from "./ContentSearchButton.svelte";
	import ExplorerButton from "./ExplorerButton.svelte";
	import ImportExportButton from "./ImportExportButton.svelte";
	import SettingsButton from "./SettingsButton.svelte";
	import SnippetSearchButton from "./SnippetSearchButton.svelte";
	import ThemeSwitcherButton from "./ThemeSwitcherButton.svelte";
</script>

<template>
	<div class="flex flex-col h-full w-16 flex-shrink-0 overflow-hidden bg-base-300">
		<ExplorerButton />
		<SnippetSearchButton />
		<ContentSearchButton />

		<div class="flex-1 min-h-16" />

		<SettingsButton />
		<ImportExportButton />
		<ThemeSwitcherButton />
	</div>
</template>

<style lang="scss">
</style>
