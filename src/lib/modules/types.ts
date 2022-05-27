export type Snippet = {
	title: string;
	language: string;
	content: string;
};

export type Note = {
	title: string;
	snippets: Snippet[];
};
