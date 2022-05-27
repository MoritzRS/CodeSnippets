import { writable } from "svelte/store";

export const DIALOG_CREATE = writable(false);

function toggleDialogCreate() {
	DIALOG_CREATE.update((state) => !state);
}

export const DialogManager = {
	toggleDialogCreate
};
