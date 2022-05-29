<script lang="ts">
	import DocumentSearchIcon from "$lib/icons/DocumentSearchIcon.svelte";
	import { ExplorerStates, EXPLORER } from "$lib/modules/explorer/explorer";
</script>

<template>
	<div class="w-14 h-14 p-2">
		<button
			type="button"
			class="btn btn-xs {$EXPLORER == ExplorerStates.FileSearch ? 'btn-primary' : 'btn-ghost'} w-full h-full"
			title="File Search"
			on:click={EXPLORER.toggleFileSearch}
		>
			<DocumentSearchIcon size={24} />
		</button>
	</div>
</template>

<style lang="scss">
</style>
