<script lang="ts">
	import { supportedLanguages } from "$lib/modules/languages";

	export let language: string;
</script>

<template>
	<select class="select select-bordered" bind:value={language}>
		{#each supportedLanguages as language}
			<option value={language.id}>{language.name}</option>
		{/each}
	</select>
</template>

<style lang="scss">
</style>
