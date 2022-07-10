import { writable } from "svelte/store";
import type { Note } from "../types";
import { clearDB, databaseHasEntry, deleteFromDB, getAllDBEntries, writeToDB } from "./dbhelper";

export const FILESYSTEM = (function () {
	const { subscribe, set, update } = writable<Note[]>([]);

	const scan = async () => set(await getAllDBEntries());

	const write = async (note: Note, rescan = true) => {
		await writeToDB(note.title, note);
		if (rescan) await scan();
	};

	const remove = async (note: Note) => {
		await deleteFromDB(note);
		await scan();
	};

	const clear = async () => {
		await clearDB();
		await scan();
	};

	const exists = async (title: string) => await databaseHasEntry(title);

	const find = async (search: string, caseSensitive: boolean) => {
		const entries = await getAllDBEntries();
		return entries.filter((note) => {
			if (caseSensitive && !note.title.includes(search)) return false;
			if (!caseSensitive && !note.title.toLowerCase().includes(search.toLowerCase())) return false;
			return true;
		});
	};

	const findContent = async (search: string, caseSensitive: boolean) => {
		const entries = await getAllDBEntries();
		return entries.filter((note) => {
			for (let j = 0; j < note.snippets.length; j++) {
				if (caseSensitive && !note.snippets[j].content.includes(search)) return false;
				if (!caseSensitive && !note.snippets[j].content.toLowerCase().includes(search.toLowerCase()))
					return false;
			}
			return true;
		});
	};

	return {
		subscribe,
		set,
		update,
		scan,
		write,
		remove,
		clear,
		exists,
		find,
		findContent
	};
})();
