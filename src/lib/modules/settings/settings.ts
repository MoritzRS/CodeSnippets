import { writable, get } from "svelte/store";
import type { Settings } from "../types";

/**
 * Key to find settings in storage
 */
const SETTING_KEY = "settings";

/**
 * default settings
 */
const defaultSettings: Settings = {
	lightTheme: "light",
	darkTheme: "dark",
	theme: "auto",
	minimap: false,
	fontSize: 16,
	autoSave: true
};

export const SETTINGS = (function () {
	const { subscribe, set } = writable<Settings>(defaultSettings);

	const saveSet = (value: Settings) => {
		set(value);
		localStorage.setItem(SETTING_KEY, JSON.stringify(value));
	};

	const saveUpdate = (update: (state: Settings) => Settings) => {
		saveSet(update(get(SETTINGS)));
	};

	const reset = () => saveSet({ ...defaultSettings });

	const load = () => saveSet({ ...defaultSettings, ...JSON.parse(localStorage.getItem(SETTING_KEY)) });

	const toggleDarkMode = () =>
		saveUpdate((state) => {
			console.log(state.theme);
			let theme: typeof state.theme;
			if (state.theme == "auto") theme = "dark";
			else if (state.theme == "dark") theme = "light";
			else theme = "auto";

			return { ...state, theme: theme };
		});

	return {
		subscribe,
		set: saveSet,
		update: saveUpdate,
		reset,
		load,
		toggleDarkMode
	};
})();
