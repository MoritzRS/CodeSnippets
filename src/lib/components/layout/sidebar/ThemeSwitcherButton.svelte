<script lang="ts">
	import MoonIcon from "$lib/icons/MoonIcon.svelte";
	import SunIcon from "$lib/icons/SunIcon.svelte";
	import { SETTINGS } from "$lib/modules/settings/settings";
</script>

<template>
	<div class="w-14 h-14 p-2">
		<button
			type="button"
			class="btn btn-xs {$SETTINGS.theme == 'auto' ? 'btn-ghost' : 'btn-accent'} w-full h-full"
			title="Toggle Color Theme"
			on:click={SETTINGS.toggleDarkMode}
		>
			{#if $SETTINGS.theme == "dark"}
				<MoonIcon size={24} />
			{:else if $SETTINGS.theme == "light"}
				<SunIcon size={24} />
			{:else if $SETTINGS.theme == "auto"}
				<span class="text-xl">A</span>
			{/if}
		</button>
	</div>
</template>

<style lang="scss">
</style>
