<script lang="ts">
	import TrashIcon from "$lib/icons/TrashIcon.svelte";
	import { removeSnippet } from "$lib/modules/buffer/buffer";

	export let id: string;

	function remove() {
		removeSnippet(id);
	}
</script>

<template>
	<button type="button" class="btn btn-ghost btn-square" title="Remove Snippet" on:click={remove}>
		<TrashIcon />
	</button>
</template>

<style lang="scss">
</style>
