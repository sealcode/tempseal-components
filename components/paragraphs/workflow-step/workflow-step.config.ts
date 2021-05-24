import { resolve } from "path";

export = {
	variants: [
		{
			name: "default",
		},
		{
			name: "without_wave",
			context: {
				lower_color: "#5294a1",
			},
		},
		{
			name: "no_circle",
			context: {
				number: "",
			},
		},
	],
	context: {
		number: "00",
		title: "Lorem ipsum dolor sit amet",
		content:
			"<p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>",
		button_primary: {
			text: "Lorem ipsum",
			link: "#",
		},
		button_secondary: {
			text: "Lorem ipsum",
			link: "#",
		},
		image_path: resolve(__dirname, "placeholder.png"),
	},
};
