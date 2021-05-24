import { resolve } from "path";
import { ITileGridProps } from "./tile-grid";

export = {
	context: {
		title: "Lorem Ipsum",
		tiles: [
			{
				name: "Sit Dolomet",
				image_path: resolve(__dirname, "logo.png"),
				alt: "logo",
			},
			{
				name: "Sit Dolomet",
				image_path: resolve(__dirname, "logo2.png"),
				alt: "logo",
			},
			{
				name: "Sit Dolomet",
				image_path: resolve(__dirname, "logo3.png"),
				alt: "logo",
			},
			{
				name: "Sit Dolomet",
				image_path: resolve(__dirname, "logo.png"),
				alt: "logo",
			},
			{
				name: "Sit Dolomet",
				image_path: resolve(__dirname, "logo3.png"),
				alt: "logo",
			},
		],
	} as ITileGridProps,
};
