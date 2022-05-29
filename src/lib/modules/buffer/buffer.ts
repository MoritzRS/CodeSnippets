import { writable } from "svelte/store";
import type { Note } from "../types";

/**
 * Contains the currently accessed note
 */
export const BUFFER = (function () {
	const { subscribe, set, update } = writable<Note>(null);

	const clear = () => update((state) => null);

	const removeSnippet = (id: string) =>
		update((state) => ({ ...state, snippets: state.snippets.filter((s) => s.id !== id) }));

	return {
		subscribe,
		set,
		update,
		clear,
		removeSnippet
	};
})();
