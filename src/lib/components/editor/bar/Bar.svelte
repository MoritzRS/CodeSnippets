<script lang="ts">
	import CheckIcon from "$lib/icons/CheckIcon.svelte";
	import { BUFFER } from "$lib/modules/buffer/buffer";
	import { FILESYSTEM } from "$lib/modules/filesystem/filesystem";

	function save() {
		FILESYSTEM.write($BUFFER);
	}

	function close() {
		BUFFER.clear();
	}
</script>

<template>
	<div class="flex flex-row justify-between items-center w-full bg-base-300 p-3 shadow-md">
		<span>{$BUFFER.title}</span>

		<span class="flex gap-3">
			<button type="button" class="btn btn-outline btn-secondary" title="Close without Saving" on:click={close}>
				<span>Close</span>
			</button>
			<button type="button" class="btn btn-primary" title="Save Changes" on:click={save}>
				<CheckIcon />
				<span>Save</span>
			</button>
		</span>
	</div>
</template>

<style lang="scss">
</style>
