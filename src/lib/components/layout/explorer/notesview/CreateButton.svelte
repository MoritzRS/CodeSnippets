<script lang="ts">
	import PlusCircleIcon from "$lib/icons/PlusCircleIcon.svelte";
	import { DialogManager } from "$lib/modules/dialogs/dialog";
</script>

<template>
	<button
		type="button"
		class="btn btn-sm btn-ghost btn-square"
		title="Create new File"
		on:click={DialogManager.toggleDialogCreate}
	>
		<PlusCircleIcon size={24} />
	</button>
</template>

<style lang="scss">
</style>
