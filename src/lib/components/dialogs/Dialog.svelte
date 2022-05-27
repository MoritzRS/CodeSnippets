<script lang="ts">
	import { fade, scale } from "svelte/transition";
	export let toggle = () => {};
</script>

<template>
	<div
		class="w-full h-full fixed z-50 inset-0 flex justify-center items-center bg-black/75 px-4 py-12"
		transition:fade={{ duration: 150 }}
		on:click|self={toggle}
	>
		<div
			class="bg-base-100 rounded p-4 max-h-full overflow-y-auto"
			transition:scale={{ start: 0.75, opacity: 1, duration: 150 }}
		>
			<slot />
		</div>
	</div>
</template>

<style lang="scss">
</style>
