<script lang="ts">
	import CogIcon from "$lib/icons/CogIcon.svelte";
	import { DIALOG } from "$lib/modules/dialogs/dialog";
</script>

<template>
	<div class="w-16 h-16">
		<button type="button" class="btn btn-ghost w-full h-full" title="Settings" on:click={DIALOG.toggleSettings}>
			<CogIcon size={48} />
		</button>
	</div>
</template>

<style lang="scss">
</style>
