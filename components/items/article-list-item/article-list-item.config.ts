import { resolve } from "path";

module.exports = {
	variants: [
		{
			name: "default",
			label: "Below",
			context: { header_mode: "below" },
		},
		{ name: "above", context: { header_mode: "above" } },
		{ name: "primary", context: { modifier: "primary" } },
		{ name: "white", context: { modifier: "white" } },
		{
			name: "default with image",
			context: {
				modifier: "primary",
				icon_path: resolve(__dirname, "book.svg"),
				icon_alt: "książka",
			},
		},
		{
			name: "white with image",
			context: {
				modifier: "white",
				icon_path: resolve(__dirname, "book.svg"),
				alt: "książka",
			},
		},
	],
	context: {
		number: "01",
		name: "Neque porro quisquam est qui dolorem ipsum",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent varius, lacus quis mollis semper, eros enim dignissim felis, nec scelerisque velit nibh sit amet enim. Suspendisse potenti. Aenean ornare finibus mauris vel ultrices. Integer purus risus, vulputate id finibus nec, facilisis at sem.",

		modifier: "primary",
	},
};
