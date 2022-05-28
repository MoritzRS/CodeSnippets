<script lang="ts">
	import DocumentSearchIcon from "$lib/icons/DocumentSearchIcon.svelte";
	import { ExplorerStateManager, ExplorerStates, EXPLORER_STATE } from "$lib/modules/explorer/explorer";
</script>

<template>
	<div class="w-16 h-16">
		<button
			type="button"
			class="btn btn-ghost w-full h-full"
			class:btn-active={$EXPLORER_STATE == ExplorerStates.NoteSearch}
			title="Note Search"
			on:click={ExplorerStateManager.toggleNoteSearch}
		>
			<DocumentSearchIcon size={48} />
		</button>
	</div>
</template>

<style lang="scss">
</style>
