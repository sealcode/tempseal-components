import { resolve } from "path";

export = {
	context: {
		leftheader: "Lorem ipsum dolor sit amet consectetur adipiscing elit?",
		rightheader:
			"Fusce egestas ante vel justo viverra, sed pulvinar mi gravida!",
		image_path: resolve(__dirname, "test-img.jpg"),
		links: [
			{
				href: "#",
				name: "WSZYSTKOSZPITALNY",
				icon_path: resolve(__dirname, "telegram.svg"),
				title: "Telegram title",
			},
			{
				href: "#",
				name: "Forum",
				icon_path: resolve(__dirname, "forum.svg"),
			},
			{
				href: "#",
				name: "IRC",
				icon_path: resolve(__dirname, "irc.svg"),
				title: "IRC title",
			},
			{
				href: "#",
				name: "Email",
				icon_path: resolve(__dirname, "email.svg"),
			},
		],
	},
};
