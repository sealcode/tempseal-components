import { resolve } from "path";

export = {
	variants: [
		{
			name: "Image on left side",
			context: {
				img_side: "left",
			},
		},
		{
			name: "Image on right side",
			context: {
				img_side: "right",
			},
		},
	],
	context: {
		title: "Lorem ipsum dolor sit amet",
		small_title: "Lorem ipsum",
		image_path: resolve(__dirname, "placeholder.png"),
		description:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		alt: "placeholder",
	},
};
