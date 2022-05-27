<script lang="ts">
	import MoonIcon from "$lib/icons/MoonIcon.svelte";
	import SunIcon from "$lib/icons/SunIcon.svelte";
	import { SETTINGS, SettingManager } from "$lib/modules/settings/settings";
</script>

<template>
	<div class="w-16 h-16">
		<button
			type="button"
			class="btn btn-ghost w-full h-full"
			title="Toggle Color Theme"
			on:click={SettingManager.toggleDarkMode}
		>
			{#if $SETTINGS.darkMode}
				<MoonIcon size={48} />
			{:else}
				<SunIcon size={48} />
			{/if}
		</button>
	</div>
</template>

<style lang="scss">
</style>
