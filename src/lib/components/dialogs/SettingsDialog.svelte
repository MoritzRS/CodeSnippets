<script lang="ts">
	import { DIALOG } from "$lib/modules/dialogs/dialog";
	import { SettingManager, SETTINGS } from "$lib/modules/settings/settings";
	import { onMount } from "svelte";
	import Dialog from "./Dialog.svelte";

	onMount(() => {
		return SETTINGS.subscribe(async () => {
			SettingManager.saveSettings();
		});
	});

	function reset() {
		SettingManager.resetSettings();
		SettingManager.saveSettings();
	}
</script>

<template>
	<Dialog toggle={DIALOG.toggleSettings}>
		<h1 class="text-4xl font-bold pb-4">Settings</h1>

		<table class="table">
			<thead>
				<tr>
					<td />
					<th>Name</th>
					<th>Value</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td />
					<th>Dark Mode</th>
					<td>
						<input type="checkbox" class="toggle toggle-primary" bind:checked={$SETTINGS.darkMode} />
					</td>
				</tr>

				<tr>
					<td />
					<th>Show Minimap</th>
					<td>
						<input type="checkbox" class="toggle toggle-primary" bind:checked={$SETTINGS.minimap} />
					</td>
				</tr>

				<tr>
					<td />
					<th>Editor Font Size</th>
					<td>
						<input type="number" class="input input-bordered" bind:value={$SETTINGS.fontSize} />
					</td>
				</tr>

				<tr>
					<td />
					<th>Autosave</th>
					<td>
						<input type="checkbox" class="toggle toggle-primary" bind:checked={$SETTINGS.autoSave} />
					</td>
				</tr>
			</tbody>
		</table>

		<div class="flex justify-end gap-3">
			<button type="button" class="btn btn-ghost" on:click={reset}>Reset</button>
		</div>
	</Dialog>
</template>

<style lang="scss">
</style>
