<script lang="ts">
	import { DIALOG } from "$lib/modules/dialogs/dialog";
</script>

<template>
	<div class="w-full h-full flex flex-col items-center justify-center">
		<div class="card card-bordered bg-base-200">
			<div class="card-body">
				<h1 class="text-6xl font-bold text-center">CodeSnippets</h1>

				<div class="divider">By Moritz R. S. and Lucas H.</div>

				<div class="flex flex-wrap justify-between">
					<button type="button" class="btn btn-sm btn-outline btn-primary" on:click={DIALOG.toggleCreate}>
						<span>Create Note</span>
					</button>
					<button
						type="button"
						class="btn btn-sm btn-outline btn-secondary"
						on:click={DIALOG.toggleImportExport}
					>
						<span>Import Data</span>
					</button>
					<button type="button" class="btn btn-sm btn-outline btn-accent" on:click={DIALOG.toggleSettings}>
						<span>Settings</span>
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
</style>
