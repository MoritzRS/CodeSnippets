<script lang="ts">
	import CogIcon from "$lib/icons/CogIcon.svelte";
	import { DIALOG } from "$lib/modules/dialogs/dialog";
</script>

<template>
	<div class="w-14 h-14 p-2">
		<button
			type="button"
			class="btn btn-xs btn-ghost w-full h-full"
			title="Settings"
			on:click={DIALOG.toggleSettings}
		>
			<CogIcon size={24} />
		</button>
	</div>
</template>

<style lang="scss">
</style>
