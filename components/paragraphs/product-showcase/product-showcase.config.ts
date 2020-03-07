import { resolve } from "path";

export = {
	context: {
		image_path: resolve(__dirname, "test-img.jpg"),
		title: "Lorem Ipsum",
		description:
			"Integer nisl ante, pretium non lobortis a, elementum quis mauris. Maecenas et luctus purus. In porttitor tincidunt enim eu maximus.",
		more_button_url: "#",
		visit_button_url: "#",
		features: [
			{ header: "Nullam eget", content: "iaculis, quis, pellentesque" },
			{
				header: "Sed sed fermentum ex",
				content: "In ut nulla a elit luctus bibendum",
			},
			{
				header: "Nullam in ipsum sed mauris sollicitudin ",
				content: "Phasellus ullamcorper turpis sed dictum maximus",
			},
		],
	},
	variants: [
		{
			name: "primary",
			context: {
				variant: "primary",
			},
		},
		{
			name: "secondary",
			context: {
				variant: "secondary",
			},
		},
		{
			name: "white",
			context: {
				variant: "white",
			},
		},
	],
};
