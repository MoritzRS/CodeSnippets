<script lang="ts">
	import RefreshIcon from "$lib/icons/RefreshIcon.svelte";
	import { FILESYSTEM } from "$lib/modules/filesystem/filesystem";

	function refresh() {
		FILESYSTEM.scan();
	}
</script>

<template>
	<button type="button" class="btn btn-sm btn-ghost btn-square" title="Refresh" on:click={refresh}>
		<RefreshIcon size={24} />
	</button>
</template>

<style lang="scss">
</style>
