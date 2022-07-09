const daisyui = require("daisyui");

module.exports = {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		extend: {}
	},
	plugins: [daisyui],
	daisyui: {
		themes: [
			"acid",
			"autumn",
			"bumblebee",
			"cmyk",
			"corporate",
			"cupcake",
			"emerald",
			"fantasy",
			"garden",
			"lemonade",
			"light",
			"lofi",
			"pastel",
			"valentine",
			"winter",
			"wireframe",

			"aqua",
			"black",
			"business",
			"coffee",
			"cyberpunk",
			"dark",
			"dracula",
			"forest",
			"halloween",
			"luxury",
			"night",
			"retro",
			"synthwave"
		]
	}
};
