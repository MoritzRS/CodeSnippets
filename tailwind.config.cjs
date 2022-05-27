const daisyui = require("daisyui");

module.exports = {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		extend: {}
	},
	plugins: [daisyui],
	daisyui: {
		themes: ["light", "dark"]
	}
};
