import { resolve } from "path";

export = {
	context: {
		text_primary: "Lorem",
		text_secondary: "Ipsum",
		image_config: {
			image_path: resolve(__dirname, "../../../assets/image.jpg"),
			sizes_attr: "(max-width: 1200px) calc(100vw - 72px), 546px",
			custom_class: "segment-1__preview",
		},
	},
};
