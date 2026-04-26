import intrakoreUIPreset from "intrakore-ui/src/tailwind/preset"

export default {
	presets: [intrakoreUIPreset],
	content: [
		"./index.html",
		"./src/**/*.{vue,js,ts,jsx,tsx}",
		"./node_modules/intrakore-ui/src/components/**/*.{vue,js,ts,jsx,tsx}",
	],
	theme: {
		extend: {},
	},
	plugins: [],
}
