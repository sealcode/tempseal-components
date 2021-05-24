import { INavbarProps } from "./navbar";

export = {
	context: {
		items: [
			{ href: "#", title: "Lorem" },
			{ href: "#", title: "Ipsum" },
			{ href: "#", title: "Sit dolomet" },
		],
		variant: "primary",
	} as INavbarProps,
	variants: [
		{
			name: "With prenavbar CTA",
			context: {
				prenavbar_config: {
					content:
						"Sit asperiores sunt cumque qui dolor sed aut. Recusandae aut pariatur sit itaque accusamus. Ut quia aut numquam quae optio suscipit delectus!" +
						Math.random(),
					href: "#",
					cta: "Et vero sunt",
				},
			},
		},
		{ name: "primary", context: { variant: "primary" } },
		{ name: "secondary", context: { variant: "secondary" } },
		{ name: "white", context: { variant: "white" } },
	],
};
