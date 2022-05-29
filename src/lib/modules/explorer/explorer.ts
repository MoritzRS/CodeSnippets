import { writable } from "svelte/store";

export enum ExplorerStates {
	Closed,
	Files,
	FileSearch,
	ContentSearch
}

export const EXPLORER = (function () {
	const { subscribe, set, update } = writable<ExplorerStates>(ExplorerStates.Files);

	const toggleFiles = () =>
		update((state) => (state == ExplorerStates.Files ? ExplorerStates.Closed : ExplorerStates.Files));

	const toggleFileSearch = () =>
		update((state) => (state == ExplorerStates.FileSearch ? ExplorerStates.Closed : ExplorerStates.FileSearch));

	const toggleContentSearch = () =>
		update((state) =>
			state == ExplorerStates.ContentSearch ? ExplorerStates.Closed : ExplorerStates.ContentSearch
		);

	return {
		subscribe,
		set,
		update,
		toggleFiles,
		toggleFileSearch,
		toggleContentSearch
	};
})();
