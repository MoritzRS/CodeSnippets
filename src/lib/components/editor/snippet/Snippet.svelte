<script lang="ts">
	import { BUFFER } from "$lib/modules/buffer/buffer";

	export let index: number;
</script>

<template>
	<div class="w-full max-w-5xl border">
		<div class="w-full p-2 flex flex-row justify-between">
			<span>{$BUFFER.snippets[index].title}</span>
			<span>{$BUFFER.snippets[index].language}</span>
		</div>
		<div class="w-full p-4">
			<span>{$BUFFER.snippets[index].content}</span>
		</div>
	</div>
</template>

<style lang="scss">
</style>
