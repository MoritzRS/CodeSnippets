<script lang="ts">
	import SearchIcon from "$lib/icons/SearchIcon.svelte";
	import { ExplorerStates, EXPLORER } from "$lib/modules/explorer/explorer";
</script>

<template>
	<div class="w-16 h-16">
		<button
			type="button"
			class="btn btn-ghost w-full h-full"
			class:btn-active={$EXPLORER == ExplorerStates.ContentSearch}
			title="Content Search"
			on:click={EXPLORER.toggleContentSearch}
		>
			<SearchIcon size={32} />
		</button>
	</div>
</template>

<style lang="scss">
</style>
