import { Storage } from "$lib/modules/storage/storage";
import type { Note } from "$lib/modules/types";
import { writable } from "svelte/store";

export const FILE_TREE = writable<Note[]>([]);

export function refreshFileTree() {
	FILE_TREE.set(Storage.getNotes());
}
