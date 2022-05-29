<script lang="ts">
	import CreateNoteDialog from "$lib/components/dialogs/CreateNoteDialog.svelte";
	import ImportExportDialog from "$lib/components/dialogs/ImportExportDialog.svelte";
	import SettingsDialog from "$lib/components/dialogs/SettingsDialog.svelte";
	import Editor from "$lib/components/editor/Editor.svelte";
	import HelloWorld from "$lib/components/helloworld/HelloWorld.svelte";
	import Layout from "$lib/components/layout/Layout.svelte";
	import { BUFFER } from "$lib/modules/buffer/buffer";
	import { DIALOG, DialogStates } from "$lib/modules/dialogs/dialog";
	import { SETTINGS } from "$lib/modules/settings/settings";
	import { onMount } from "svelte";

	onMount(() => {
		SETTINGS.load();
	});
</script>

<template>
	<!-- Base Layout -->
	<Layout>
		<svelte:fragment slot="content">
			{#if $BUFFER}
				<Editor />
			{:else}
				<HelloWorld />
			{/if}
		</svelte:fragment>

		<svelte:fragment slot="dialogs">
			{#if $DIALOG == DialogStates.Create}
				<CreateNoteDialog />
			{:else if $DIALOG == DialogStates.Settings}
				<SettingsDialog />
			{:else if $DIALOG == DialogStates.ImportExport}
				<ImportExportDialog />
			{/if}
		</svelte:fragment>
	</Layout>
</template>

<style lang="scss">
</style>
