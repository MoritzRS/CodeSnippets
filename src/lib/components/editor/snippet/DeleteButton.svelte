<script lang="ts">
	import TrashIcon from "$lib/icons/TrashIcon.svelte";
	import { BUFFER } from "$lib/modules/buffer/buffer";
	import { FILESYSTEM } from "$lib/modules/filesystem/filesystem";
	import { SETTINGS } from "$lib/modules/settings/settings";

	export let id: number;

	function remove() {
		BUFFER.removeSnippet(id);
		if ($SETTINGS.autoSave) FILESYSTEM.write($BUFFER);
	}
</script>

<template>
	<button type="button" class="btn btn-ghost btn-square" title="Remove Snippet" on:click={remove}>
		<TrashIcon />
	</button>
</template>

<style lang="scss">
</style>
