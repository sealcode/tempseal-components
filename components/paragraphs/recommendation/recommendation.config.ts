import { resolve } from "path";
export = {
	variants: [
		{
			name: "Horizontal",
			label: "Horizontal",
			context: {
				layout: "horizontal",
			},
		},
		{
			name: "default",
			label: "Vertical",
			context: {
				layout: "vertical",
			},
		},
	],
	context: {
		quotation:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		img_path: resolve(__dirname, "user.svg"),
		author: "Janina Kowalska",
		author_description: "CEO, Dla schroniska",
	},
};
