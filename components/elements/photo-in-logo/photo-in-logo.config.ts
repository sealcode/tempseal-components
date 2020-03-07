import { resolve } from "path";

export = {
	variants: [
		{ name: "left", context: { direction: "left" } },
		{ name: "right", context: { direction: "right" } },
	],
	context: {
		image_path: resolve(__dirname, "./photo-in-logo.jpg"),
		img_color_mode: "normal",
	},
};
