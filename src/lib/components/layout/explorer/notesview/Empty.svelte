<script lang="ts">
	import { DIALOG } from "$lib/modules/dialogs/dialog";
</script>

<template>
	<div class="flex flex-col items-center justify-center">
		<span class="text-lg p-3">No Notes Found</span>
		<span class="text-sm">
			<button type="button" class="link" on:click={DIALOG.toggleCreate}>
				<span>Create</span>
			</button>
			or
			<button type="button" class="link" on:click={DIALOG.toggleImportExport}>
				<span>import</span>
			</button> notes
		</span>
	</div>
</template>

<style lang="scss">
</style>
