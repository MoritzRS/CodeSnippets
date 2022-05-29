import { writable } from "svelte/store";

export enum DialogStates {
	None,
	Settings,
	ImportExport,
	Create
}

export const DIALOG = (function () {
	const { subscribe, set, update } = writable<DialogStates>(DialogStates.None);

	const toggleCreate = () =>
		update((state) => (state == DialogStates.Create ? DialogStates.None : DialogStates.Create));

	const toggleSettings = () =>
		update((state) => (state == DialogStates.Settings ? DialogStates.None : DialogStates.Settings));

	const toggleImportExport = () =>
		update((state) => (state == DialogStates.ImportExport ? DialogStates.None : DialogStates.ImportExport));

	return {
		subscribe,
		set,
		update,
		toggleCreate,
		toggleSettings,
		toggleImportExport
	};
})();
