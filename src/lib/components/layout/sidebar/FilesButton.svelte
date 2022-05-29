<script lang="ts">
	import DocumentDuplicateIcon from "$lib/icons/DocumentDuplicateIcon.svelte";
	import { ExplorerStates, EXPLORER } from "$lib/modules/explorer/explorer";
</script>

<template>
	<div class="w-16 h-16">
		<button
			type="button"
			class="btn btn-ghost w-full h-full"
			class:btn-active={$EXPLORER == ExplorerStates.Files}
			title="Files"
			on:click={EXPLORER.toggleFiles}
		>
			<DocumentDuplicateIcon size={48} />
		</button>
	</div>
</template>

<style lang="scss">
</style>
