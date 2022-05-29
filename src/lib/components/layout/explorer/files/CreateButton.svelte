<script lang="ts">
	import PlusCircleIcon from "$lib/icons/PlusCircleIcon.svelte";
	import { DIALOG } from "$lib/modules/dialogs/dialog";
</script>

<template>
	<button
		type="button"
		class="btn btn-sm btn-ghost btn-square"
		title="Create new File"
		on:click={DIALOG.toggleCreate}
	>
		<PlusCircleIcon size={24} />
	</button>
</template>

<style lang="scss">
</style>
