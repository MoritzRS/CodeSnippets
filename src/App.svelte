<script lang="ts">
	import CreateNoteDialog from "$lib/components/dialogs/CreateNoteDialog.svelte";
	import HelloWorld from "$lib/components/helloworld/HelloWorld.svelte";
	import Layout from "$lib/components/layout/Layout.svelte";
	import { SettingManager } from "$lib/modules/settings/settings";
	import { onMount } from "svelte";

	onMount(() => {
		SettingManager.loadSettings();
	});
</script>

<template>
	<!-- Base Layout -->
	<Layout>
		<svelte:fragment slot="content">
			<HelloWorld />
		</svelte:fragment>

		<svelte:fragment slot="dialogs">
			<CreateNoteDialog />
		</svelte:fragment>
	</Layout>
</template>

<style lang="scss">
</style>
