<script lang="ts">
	import { DialogManager, DIALOG_SETTINGS } from "$lib/modules/dialogs/dialog";
	import { SETTINGS } from "$lib/modules/settings/settings";
	import Dialog from "./Dialog.svelte";
</script>

<template>
	{#if $DIALOG_SETTINGS}
		<Dialog toggle={DialogManager.toggleDialogSettings}>
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
		</Dialog>
	{/if}
</template>

<style lang="scss">
</style>
