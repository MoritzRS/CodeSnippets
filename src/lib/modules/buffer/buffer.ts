import { writable } from "svelte/store";
import type { Note } from "../types";

/**
 * Contains the currently accessed note
 */
export const BUFFER = (function () {
	const { subscribe, set, update } = writable<Note>(null);

	const clear = () => update(() => null);

	const addSnippet = (title: string, language: string) =>
		update((state) => {
			const snippets = state.snippets.map((e, i) => ({ ...e, id: i }));
			const id = snippets.reduce((carry, current) => (carry > current.id ? carry : current.id), 0) + 1;
			const snippet = {
				id,
				title,
				language,
				content: ""
			};
			return { ...state, snippets: [...snippets, snippet] };
		});

	const removeSnippet = (id: number) =>
		update((state) => ({
			...state,
			snippets: state.snippets.filter((s) => s.id !== id).map((e, i) => ({ ...e, id: i }))
		}));

	return {
		subscribe,
		set,
		update,
		clear,
		addSnippet,
		removeSnippet
	};
})();
