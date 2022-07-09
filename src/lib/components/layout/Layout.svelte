<script lang="ts">
	import { SETTINGS } from "$lib/modules/settings/settings";
	import { WINDOW } from "$lib/modules/window/window";
	import Content from "./content/Content.svelte";
	import Explorer from "./explorer/Explorer.svelte";
	import Sidebar from "./sidebar/Sidebar.svelte";
</script>

<template>
	<div
		class="flex flex-row w-full h-full overflow-hidden"
		data-theme={$SETTINGS.theme == "dark" || ($SETTINGS.theme == "auto" && $WINDOW.prefersDarkMode)
			? $SETTINGS.darkTheme
			: $SETTINGS.lightTheme}
	>
		<Sidebar />
		<Explorer />
		<Content>
			<slot name="content" />
		</Content>

		<slot name="dialogs" />
	</div>
</template>

<style lang="scss">
</style>
