<script lang="ts">
	import TrashIcon from "$lib/icons/TrashIcon.svelte";
	import { BUFFER, removeSnippet } from "$lib/modules/buffer/buffer";
	import { SETTINGS } from "$lib/modules/settings/settings";
	import { Storage } from "$lib/modules/storage/storage";

	export let id: string;

	function remove() {
		removeSnippet(id);
		if ($SETTINGS.autoSave) Storage.writeNote($BUFFER);
	}
</script>

<template>
	<button type="button" class="btn btn-ghost btn-square" title="Remove Snippet" on:click={remove}>
		<TrashIcon />
	</button>
</template>

<style lang="scss">
</style>
