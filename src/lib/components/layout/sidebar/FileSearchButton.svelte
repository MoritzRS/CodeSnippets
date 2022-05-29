<script lang="ts">
	import DocumentSearchIcon from "$lib/icons/DocumentSearchIcon.svelte";
	import { ExplorerStates, EXPLORER } from "$lib/modules/explorer/explorer";
</script>

<template>
	<div class="w-16 h-16">
		<button
			type="button"
			class="btn btn-ghost w-full h-full"
			class:btn-active={$EXPLORER == ExplorerStates.FileSearch}
			title="File Search"
			on:click={EXPLORER.toggleFileSearch}
		>
			<DocumentSearchIcon size={48} />
		</button>
	</div>
</template>

<style lang="scss">
</style>
