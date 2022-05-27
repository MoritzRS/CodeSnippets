import { get, writable } from "svelte/store";
import type { Settings } from "../types";

/**
 * Key to find settings in storage
 */
const SETTING_KEY = "settings";

/**
 * default settings
 */
const defaultSettings: Settings = {
	darkMode: true
};

/**
 * Contains the current Settings object
 */
export const SETTINGS = writable<Settings>(defaultSettings);

/**
 * Reset settings to defaults
 */
function resetSettings() {
	SETTINGS.set({ ...defaultSettings });
}

/**
 * Load settings from storage
 */
function loadSettings() {
	SETTINGS.set({ ...defaultSettings, ...JSON.parse(localStorage.getItem(SETTING_KEY)) });
}

function saveSettings() {
	localStorage.setItem(SETTING_KEY, JSON.stringify(get(SETTINGS)));
}

/**
 * Switch between light and dark mode
 */
function toggleDarkMode() {
	SETTINGS.update((settings) => ({ ...settings, darkMode: !settings.darkMode }));
}

export const SettingManager = {
	resetSettings,
	loadSettings,
	saveSettings,
	toggleDarkMode
};
