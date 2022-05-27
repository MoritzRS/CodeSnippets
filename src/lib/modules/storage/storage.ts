import type { Note } from "../types";

/**
 * PREFIX to store notes in storage.
 * Gets prepended to the note id
 */
const FILE_PREFIX = "fp:";

/**
 * Finds all notes in storage
 * @returns Note IDs and Titles
 */
function getNotes(): Note[] {
	let notes: Note[] = [];
	for (let i = 0; i < localStorage.length; i++) {
		if (!localStorage.key(i).startsWith(FILE_PREFIX)) continue;

		const note: Note = JSON.parse(localStorage.getItem(localStorage.key(i)));
		notes = [...notes, note];
	}
	return notes;
}

/**
 * Imports notes to storage
 * @param notes List of notes to import
 */
function importNotes(notes: Note[]): void {
	for (let i = 0; i < notes.length; i++) {
		localStorage.setItem(FILE_PREFIX + notes[i].title, JSON.stringify(notes[i]));
	}
}

/**
 * Loads a note from storage
 * @param title Note title
 * @returns Note
 */
function getNote(title: string): Note {
	return JSON.parse(localStorage.getItem(FILE_PREFIX + title));
}

/**
 * Removed note from storage
 * @param title note title
 */
function deleteNote(title: string): void {
	localStorage.removeItem(FILE_PREFIX + title);
}

/**
 * Wirtes note to storage
 * @param note Note to write
 */
function writeNote(note: Note): void {
	localStorage.setItem(FILE_PREFIX + note.title, JSON.stringify(note));
}

/**
 * Checks if a note is in storage
 * @param title notes title
 * @returns Wether or not the note exists or not
 */
function hasNote(title: string): boolean {
	return localStorage.getItem(FILE_PREFIX + title) !== null;
}

/**
 * Finds all notes containing the search string in their title
 * @param search String to search for
 * @param caseSensitive Case Sensitivity
 * @returns List of found notes
 */
function findNotes(search: string, caseSensitive = false): Note[] {
	let notes = [];
	for (let i = 0; i < localStorage.length; i++) {
		if (!localStorage.key(i).startsWith(FILE_PREFIX)) continue;

		const note: Note = JSON.parse(localStorage.getItem(localStorage.key(i)));

		if (caseSensitive && !note.title.includes(search)) continue;
		if (!caseSensitive && !note.title.toLowerCase().includes(search.toLowerCase())) continue;

		notes = [...notes, note];
	}
	return notes;
}

/**
 * Finds all notes containing the search string in their snippets
 * @param search String to search for
 * @param caseSensitive Case Sensitivity
 * @returns List of found notes
 */
function findSnippets(search: string, caseSensitive = false): Note[] {
	let notes = [];
	for (let i = 0; i < localStorage.length; i++) {
		if (!localStorage.key(i).startsWith(FILE_PREFIX)) continue;

		const note: Note = JSON.parse(localStorage.getItem(localStorage.key(i)));

		for (let j = 0; j < note.snippets.length; j++) {
			if (caseSensitive && !note.snippets[j].content.includes(search)) continue;
			if (!caseSensitive && !note.snippets[j].content.toLowerCase().includes(search.toLowerCase())) continue;

			notes = [...notes, note];
			break;
		}
	}
	return notes;
}

export const Storage = {
	getNotes,
	importNotes,
	getNote,
	deleteNote,
	writeNote,
	hasNote,
	findNotes,
	findSnippets
};
