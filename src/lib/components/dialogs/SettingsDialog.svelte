<script lang="ts">
	import { DIALOG } from "$lib/modules/dialogs/dialog";
	import { SETTINGS } from "$lib/modules/settings/settings";
	import { darkThemes, lightThemes } from "$lib/modules/themes";
	import Dialog from "./Dialog.svelte";
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
					<th>Theming</th>
					<td>
						<select class="select select-bordered w-full" bind:value={$SETTINGS.theme}>
							<option value="auto">System</option>
							<option value="light">Light</option>
							<option value="dark">Dark</option>
						</select>
					</td>
				</tr>
				<tr>
					<td />
					<th>Light Theme</th>
					<td>
						<select class="select select-bordered w-full" bind:value={$SETTINGS.lightTheme}>
							{#each lightThemes as theme}
								<option value={theme}>{theme}</option>
							{/each}
						</select>
					</td>
				</tr>
				<tr>
					<td />
					<th>Dark Theme</th>
					<td>
						<select class="select select-bordered w-full" bind:value={$SETTINGS.darkTheme}>
							{#each darkThemes as theme}
								<option value={theme}>{theme}</option>
							{/each}
						</select>
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
			<button type="button" class="btn btn-ghost" on:click={SETTINGS.reset}>Reset</button>
		</div>
	</Dialog>
</template>

<style lang="scss">
</style>
