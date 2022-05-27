<script lang="ts">
	import DocumentDuplicateIcon from "$lib/icons/DocumentDuplicateIcon.svelte";
	import { ExplorerStateManager, ExplorerStates, EXPLORER_STATE } from "$lib/modules/explorer/explorer";
</script>

<template>
	<div class="w-16 h-16">
		<button
			type="button"
			class="btn btn-ghost w-full h-full"
			class:btn-active={$EXPLORER_STATE == ExplorerStates.NotesView}
			title="Explorer"
			on:click={ExplorerStateManager.toggleNoteView}
		>
			<DocumentDuplicateIcon size={48} />
		</button>
	</div>
</template>

<style lang="scss">
</style>
