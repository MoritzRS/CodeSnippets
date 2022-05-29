<script lang="ts">
	import DatabaseIcon from "$lib/icons/DatabaseIcon.svelte";
	import { DIALOG } from "$lib/modules/dialogs/dialog";
</script>

<template>
	<div class="w-14 h-14 p-2">
		<button
			type="button"
			class="btn btn-xs btn-ghost w-full h-full"
			title="Import/Export"
			on:click={DIALOG.toggleImportExport}
		>
			<DatabaseIcon size={24} />
		</button>
	</div>
</template>

<style lang="scss">
</style>
