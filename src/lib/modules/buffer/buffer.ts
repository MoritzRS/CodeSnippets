import { writable } from "svelte/store";
import type { Note } from "../types";

/**
 * Contains the currently accessed note
 */
export const BUFFER = writable<Note>(null);

export function clearBuffer() {
	BUFFER.set(null);
}

export function setBuffer(note: Note) {
	BUFFER.set(note);
}

export function removeSnippet(id: string) {
	BUFFER.update((buffer) => {
		return { ...buffer, snippets: buffer.snippets.filter((s) => s.id !== id) };
	});
}
