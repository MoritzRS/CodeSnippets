import type { darkThemes, lightThemes } from "./themes";

export type Snippet = {
	id: number;
	title: string;
	language: string;
	content: string;
};

export type Note = {
	title: string;
	snippets: Snippet[];
};

export type Settings = {
	lightTheme: typeof lightThemes[number];
	darkTheme: typeof darkThemes[number];
	theme: "auto" | "light" | "dark";
	minimap: boolean;
	fontSize: number;
	autoSave: boolean;
};

export type Window = {
	width: number;
	height: number;
	prefersDarkMode: boolean;
};
