<script lang="ts">
	import CheckIcon from "$lib/icons/CheckIcon.svelte";
	import XIcon from "$lib/icons/XIcon.svelte";
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
			<button type="button" class="btn btn-xs btn-circle btn-secondary" title="Close File" on:click={close}>
				<XIcon />
			</button>
			<button type="button" class="btn btn-xs btn-circle btn-primary" title="Save Changes" on:click={save}>
				<CheckIcon />
			</button>
		</span>
	</div>
</template>

<style lang="scss">
</style>
