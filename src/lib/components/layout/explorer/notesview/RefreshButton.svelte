<script lang="ts">
	import RefreshIcon from "$lib/icons/RefreshIcon.svelte";
	import { refreshFileTree } from "$lib/modules/filetree/fileTree";
</script>

<template>
	<button type="button" class="btn btn-sm btn-ghost btn-square" title="Create new File" on:click={refreshFileTree}>
		<RefreshIcon size={24} />
	</button>
</template>

<style lang="scss">
</style>
