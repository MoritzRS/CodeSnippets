import { writable } from "svelte/store";
import type { Window } from "../types";

export const WINDOW = (function () {
	const preferredColorScheme = window.matchMedia("(prefers-color-scheme: dark)");

	const defaultWindow: Window = {
		width: window?.innerWidth,
		height: window?.outerHeight,
		prefersDarkMode: preferredColorScheme.matches
	};

	const { subscribe, set } = writable(defaultWindow);
	const update = () =>
		set({
			width: window?.innerWidth,
			height: window?.outerHeight,
			prefersDarkMode: preferredColorScheme.matches
		});

	window.onresize = update;
	preferredColorScheme.onchange = update;
	return {
		subscribe,
		set,
		update
	};
})();
