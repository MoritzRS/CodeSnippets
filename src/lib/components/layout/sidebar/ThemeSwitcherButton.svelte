<script lang="ts">
	import MoonIcon from "$lib/icons/MoonIcon.svelte";
	import SunIcon from "$lib/icons/SunIcon.svelte";
	import { COLOR_THEME, toggleColorTheme } from "$lib/modules/theme/theme";
</script>

<template>
	<div class="w-16 h-16">
		<button
			type="button"
			class="btn btn-ghost w-full h-full"
			title="Toggle Color Theme"
			on:click={toggleColorTheme}
		>
			{#if $COLOR_THEME == "dark"}
				<MoonIcon size={48} />
			{:else}
				<SunIcon size={48} />
			{/if}
		</button>
	</div>
</template>

<style lang="scss">
</style>
