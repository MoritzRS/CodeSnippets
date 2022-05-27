<script lang="ts">
	import { COLOR_THEME } from "$lib/modules/theme/theme";
	import Content from "./content/Content.svelte";
	import Explorer from "./explorer/Explorer.svelte";

	import Sidebar from "./sidebar/Sidebar.svelte";
</script>

<template>
	<div class="flex flex-row w-full h-full overflow-hidden" data-theme={$COLOR_THEME}>
		<Sidebar />
		<Explorer />
		<Content>
			<slot />
		</Content>
	</div>
</template>

<style lang="scss">
</style>
