export type Snippet = {
	id: string;
	title: string;
	language: string;
	content: string;
};

export type Note = {
	title: string;
	snippets: Snippet[];
};

export type Settings = {
	darkMode: boolean;
	minimap: boolean;
	fontSize: number;
	autoSave: boolean;
};
