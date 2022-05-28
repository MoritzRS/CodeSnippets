<script lang="ts">
	import DatabaseIcon from "$lib/icons/DatabaseIcon.svelte";
	import { DialogManager } from "$lib/modules/dialogs/dialog";
</script>

<template>
	<div class="w-16 h-16">
		<button
			type="button"
			class="btn btn-ghost w-full h-full"
			title="Import/Export"
			on:click={DialogManager.toggleImportExportDialog}
		>
			<DatabaseIcon size={48} />
		</button>
	</div>
</template>

<style lang="scss">
</style>
