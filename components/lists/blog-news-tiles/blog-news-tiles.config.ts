import { resolve } from "path";

const placeholder = resolve(__dirname, "placeholder.png");
const clock = resolve(__dirname, "clock.svg");
const blog_example = resolve(__dirname, "blog-example.jpg");

export = {
	context: [
		{
			imagePath: blog_example,
			imageAlt: "",
			iconPath: clock,
			iconAlt: "",
			readingTime: "10 minut",
			title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
			avatarPath: placeholder,
			author: "Jan Kowalski",
			date: "22 sierpnia",
			url: "#",
		},
		{
			imagePath: blog_example,
			imageAlt: "",
			iconPath: clock,
			iconAlt: "",
			readingTime: "10 minut",
			title:
				"Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus",
			avatarPath: placeholder,
			author: "Jan Kowalski",
			date: "22 sierpnia",
			url: "#",
		},
		// {
		// 	imagePath: blog_example,
		// 	imageAlt: "",
		// 	iconPath: clock,
		// 	iconAlt: "",
		// 	readingTime: "10 minut",
		// 	title:
		// 		"Donec faucibus, orci sit amet molestie euismod, leo nulla pellentesque erat, a consequat purus lorem eu dui. Aenean ornare magna aliquam lacinia pellentesque",
		// 	avatarPath: placeholder,
		// 	author: "Jan Kowalski",
		// 	date: "22 sierpnia",
		// 	url: "#",
		// },
	],
};
