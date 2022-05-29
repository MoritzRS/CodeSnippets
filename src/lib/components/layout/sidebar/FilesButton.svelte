<script lang="ts">
	import DocumentDuplicateIcon from "$lib/icons/DocumentDuplicateIcon.svelte";
	import { ExplorerStates, EXPLORER } from "$lib/modules/explorer/explorer";
</script>

<template>
	<div class="w-14 h-14 p-2">
		<button
			type="button"
			class="btn btn-xs {$EXPLORER == ExplorerStates.Files ? 'btn-primary' : 'btn-ghost'} w-full h-full"
			title="Files"
			on:click={EXPLORER.toggleFiles}
		>
			<DocumentDuplicateIcon size={24} />
		</button>
	</div>
</template>

<style lang="scss">
</style>
