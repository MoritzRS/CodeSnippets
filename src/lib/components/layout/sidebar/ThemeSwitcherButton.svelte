<script lang="ts">
	import MoonIcon from "$lib/icons/MoonIcon.svelte";
	import SunIcon from "$lib/icons/SunIcon.svelte";
	import { SETTINGS } from "$lib/modules/settings/settings";
</script>

<template>
	<div class="w-14 h-14 p-2">
		<button
			type="button"
			class="btn btn-xs {$SETTINGS.darkMode ? 'btn-accent' : 'btn-ghost'} w-full h-full"
			title="Toggle Color Theme"
			on:click={SETTINGS.toggleDarkMode}
		>
			{#if $SETTINGS.darkMode}
				<MoonIcon size={24} />
			{:else}
				<SunIcon size={24} />
			{/if}
		</button>
	</div>
</template>

<style lang="scss">
</style>
