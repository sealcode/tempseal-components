import { Config } from "@sealcode/tempseal";

const primary = "#6d4477";
const secondary = "#55a4b4";

export const config = new Config.Config({
	colors: {
		primary,
		secondary,
		"title-text-on-primary": "white",
		"body-text-on-primary": "white",
		"title-text-on-secondary": "white",
		"body-text-on-secondary": "white",
		"title-text-on-white": secondary,
		"body-text-on-white": "#333",
	},
	fonts: {
		body: "Zilla Slab",
		title: "Raleway",
	},
	layout: {
		"container-width": "1200px",
	},
});
