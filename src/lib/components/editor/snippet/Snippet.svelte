<script lang="ts">
	import type { Snippet } from "$lib/modules/types";
	import Monaco from "./Monaco.svelte";

	export let snippet: Snippet;
</script>

<template>
	<div class="w-full max-w-5xl border">
		<div class="w-full p-2 flex flex-row justify-between">
			<span>{snippet.title}</span>
			<select class="select select-bordered" bind:value={snippet.language}>
				<option value="javascript">javascript</option>
				<option value="typescript">typescript</option>
			</select>
		</div>
		<div class="w-full p-4">
			<Monaco {snippet} />
		</div>
	</div>
</template>

<style lang="scss">
</style>
