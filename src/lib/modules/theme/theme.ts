import { writable } from "svelte/store";

type ThemeType = "light" | "dark";

export const COLOR_THEME = writable<ThemeType>("dark");

export function toggleColorTheme() {
	COLOR_THEME.update((theme) => (theme == "dark" ? "light" : "dark"));
}
