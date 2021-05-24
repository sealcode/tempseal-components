import { resolve } from "path";

export = {
	context: {
		modifier: "white",
		image_path: resolve(__dirname, "test-img.jpg"),
		image_alt: "some alt",
		title: "System wspomagania agencji pracy tymczasowej",
		content:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		button_params: {
			text: "Zobacz więcej",
			link: "#",
			color: "white",
		},
		href: "https://example.com",
	},
	variants: [
		...["primary", "secondary", "white"].map(variant => ({
			name: variant,
			context: { modifier: variant },
		})),
	],
};
