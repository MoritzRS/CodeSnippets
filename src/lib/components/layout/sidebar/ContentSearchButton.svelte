<script lang="ts">
	import SearchIcon from "$lib/icons/SearchIcon.svelte";
	import { ExplorerStates, EXPLORER } from "$lib/modules/explorer/explorer";
</script>

<template>
	<div class="w-14 h-14 p-2">
		<button
			type="button"
			class="btn btn-xs {$EXPLORER == ExplorerStates.ContentSearch ? 'btn-primary' : 'btn-ghost'} w-full h-full"
			title="Content Search"
			on:click={EXPLORER.toggleContentSearch}
		>
			<SearchIcon size={16} />
		</button>
	</div>
</template>

<style lang="scss">
</style>
