<script lang="ts">
	import ClipboardIcon from "$lib/icons/ClipboardIcon.svelte";
	import CopyIcon from "$lib/icons/CopyIcon.svelte";
	import { BUFFER } from "$lib/modules/buffer/buffer";

	export let id: number;
	let timeout: NodeJS.Timeout;
	let copied = false;

	function copy() {
		navigator.clipboard.writeText($BUFFER.snippets.find((e) => e.id == id).content);
		copied = true;
		if (timeout) clearTimeout(timeout);
		timeout = setTimeout(() => {
			copied = false;
		}, 500);
	}
</script>

<template>
	<button
		type="button"
		class="btn btn-square"
		class:btn-ghost={!copied}
		class:btn-accent={copied}
		on:click={copy}
		title="Copy to Clipboard"
	>
		{#if !copied}
			<CopyIcon />
		{:else}
			<ClipboardIcon />
		{/if}
	</button>
</template>

<style lang="scss">
</style>
