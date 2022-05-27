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
