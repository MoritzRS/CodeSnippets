<script lang="ts">
	import HelloWorld from "$lib/components/helloworld/HelloWorld.svelte";
	import Layout from "$lib/components/layout/Layout.svelte";
	import { SettingManager } from "$lib/modules/settings/settings";
	import { onMount } from "svelte";

	onMount(() => {
		SettingManager.loadSettings();
	});
</script>

<template>
	<Layout>
		<HelloWorld />
	</Layout>
</template>

<style lang="scss">
</style>
