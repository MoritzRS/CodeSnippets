import type { Note } from "../types";

export function openDB() {
	return new Promise<IDBDatabase>((resolve, reject) => {
		const request = window.indexedDB.open("filestorage", 1);
		request.onupgradeneeded = () => {
			const db = request.result;
			db.createObjectStore("files");
		};

		request.onerror = () => reject();
		request.onsuccess = () => {
			resolve(request.result);
		};
	});
}

export function getAllDBEntries() {
	return new Promise<Note[]>((resolve, reject) => {
		openDB().then((db) => {
			const transaction = db.transaction("files", "readwrite");
			const objectStore = transaction.objectStore("files");
			const request = objectStore.getAll();
			request.onerror = () => reject();
			request.onsuccess = () => resolve(request.result);
		});
	});
}

export function writeToDB(key: string, value: Note) {
	return new Promise<void>((resolve, reject) => {
		openDB().then((db) => {
			const transaction = db.transaction("files", "readwrite");
			const objectStore = transaction.objectStore("files");
			const request = objectStore.put(value, key);
			request.onerror = () => reject();
			request.onsuccess = () => resolve();
		});
	});
}

export function deleteFromDB(note: Note) {
	return new Promise<void>((resolve, reject) => {
		openDB().then((db) => {
			const transaction = db.transaction("files", "readwrite");
			const objectStore = transaction.objectStore("files");
			const request = objectStore.delete(note.title);
			request.onerror = () => reject();
			request.onsuccess = () => resolve();
		});
	});
}

export function clearDB() {
	return new Promise<void>((resolve, reject) => {
		openDB().then((db) => {
			const transaction = db.transaction("files", "readwrite");
			const objectStore = transaction.objectStore("files");
			const request = objectStore.clear();
			request.onerror = () => reject();
			request.onsuccess = () => resolve();
		});
	});
}

export function databaseHasEntry(key: string) {
	return new Promise<boolean>((resolve, reject) => {
		openDB().then((db) => {
			const transaction = db.transaction("files", "readwrite");
			const objectStore = transaction.objectStore("files");
			const request = objectStore.get(key);
			request.onerror = () => reject();
			request.onsuccess = () => resolve(!!request.result);
		});
	});
}
