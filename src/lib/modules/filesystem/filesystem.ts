import { get, writable } from "svelte/store";
import type { Note } from "../types";

const file_prefix = "fs:";

export const FILESYSTEM = (function () {
	const { subscribe, set, update } = writable<Note[]>([]);

	const scan = () => {
		let notes: Note[] = [];
		for (let i = 0; i < localStorage.length; i++) {
			if (!localStorage.key(i).startsWith(file_prefix)) continue;

			const note: Note = JSON.parse(localStorage.getItem(localStorage.key(i)));
			notes = [...notes, note];
		}
		set(notes);
	};

	const write = (note: Note) => {
		localStorage.setItem(file_prefix + note.title, JSON.stringify(note));
		scan();
	};

	const remove = (note: Note) => {
		localStorage.removeItem(file_prefix + note.title);
		scan();
	};

	const clear = () => {
		get(FILESYSTEM).forEach((note) => localStorage.removeItem(file_prefix + note.title));
		scan();
	};

	const exists = (title: string) => localStorage.getItem(file_prefix + title) !== null;

	const find = (search: string, caseSensitive: boolean) => {
		scan();
		return get(FILESYSTEM).filter((note) => {
			if (caseSensitive && !note.title.includes(search)) return false;
			if (!caseSensitive && !note.title.toLowerCase().includes(search.toLowerCase())) return false;
			return true;
		});
	};

	const findContent = (search: string, caseSensitive: boolean) => {
		scan();
		return get(FILESYSTEM).filter((note) => {
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
