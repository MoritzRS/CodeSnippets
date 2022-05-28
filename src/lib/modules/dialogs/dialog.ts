import { writable } from "svelte/store";

export const DIALOG_CREATE = writable(false);

function toggleDialogCreate() {
	DIALOG_CREATE.update((state) => !state);
}

export const DIALOG_SETTINGS = writable(false);

function toggleDialogSettings() {
	DIALOG_SETTINGS.update((state) => !state);
}

export const DIALOG_IMPORT_EXPORT = writable(false);

function toggleImportExportDialog() {
	DIALOG_IMPORT_EXPORT.update((state) => !state);
}

export const DialogManager = {
	toggleDialogCreate,
	toggleDialogSettings,
	toggleImportExportDialog
};
