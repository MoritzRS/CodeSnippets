<script lang="ts">
	import CheckIcon from "$lib/icons/CheckIcon.svelte";
	import XIcon from "$lib/icons/XIcon.svelte";
	import { BUFFER } from "$lib/modules/buffer/buffer";
	import { FILESYSTEM } from "$lib/modules/filesystem/filesystem";
	import { onMount } from "svelte";

	let title: string;

	onMount(() => {
		return BUFFER.subscribe((b) => {
			if (b) title = b.title;
		});
	});

	function save() {
		FILESYSTEM.write($BUFFER);
	}

	function close() {
		BUFFER.clear();
	}

	function rename() {
		FILESYSTEM.remove($BUFFER);
		$BUFFER.title = title;
		FILESYSTEM.write($BUFFER);
	}
</script>

<template>
	<div class="flex flex-row justify-between items-center w-full bg-base-300 p-3 shadow-md">
		<input type="text" bind:value={title} on:change={() => rename()} class="input input-sm input-ghost" />

		<span class="flex gap-3">
			<button type="button" class="btn btn-sm btn-square btn-secondary" title="Close File" on:click={close}>
				<XIcon />
			</button>
			<button type="button" class="btn btn-sm btn-square btn-primary" title="Save Changes" on:click={save}>
				<CheckIcon />
			</button>
		</span>
	</div>
</template>

<style lang="scss">
</style>
