import { writable } from "svelte/store";

export enum ExplorerStates {
	Closed,
	NotesView,
	NoteSearch,
	SnippetSearch
}

export const EXPLORER_STATE = writable<ExplorerStates>(ExplorerStates.NotesView);

function toggleNoteView() {
	EXPLORER_STATE.update((state) =>
		state == ExplorerStates.NotesView ? ExplorerStates.Closed : ExplorerStates.NotesView
	);
}

function toggleNoteSearch() {
	EXPLORER_STATE.update((state) =>
		state == ExplorerStates.NoteSearch ? ExplorerStates.Closed : ExplorerStates.NoteSearch
	);
}

function toggleSnippetSearch() {
	EXPLORER_STATE.update((state) =>
		state == ExplorerStates.SnippetSearch ? ExplorerStates.Closed : ExplorerStates.SnippetSearch
	);
}

export const ExplorerStateManager = {
	toggleNoteView,
	toggleNoteSearch,
	toggleSnippetSearch
};
