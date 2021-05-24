import { resolve } from "path";

export = {
	variants: [
		{
			name: "default",
			label: "Image on left side",
			context: {
				img_side: "left",
			},
		},
		{
			name: "image_on_right_side",
			context: {
				img_side: "right",
			},
		},
		{
			name: "sticky",
			args: {
				sticky: true,
				offset: "20px",
				description:
					"Proin at lacus at nisi elementum venenatis. Quisque non ante sollicitudin, efficitur ligula non, ultrices tellus. In vitae turpis a arcu viverra pharetra in condimentum tortor. Ut sed dignissim lorem. Nullam euismod feugiat lorem a scelerisque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras et tellus quis arcu faucibus scelerisque. Vivamus blandit ex sed ex varius, eu egestas tellus tempor.Proin at lacus at nisi elementum venenatis. Quisque non ante sollicitudin, efficitur ligula non, ultrices tellus. In vitae turpis a arcu viverra pharetra in condimentum tortor. Ut sed dignissim lorem. Nullam euismod feugiat lorem a scelerisque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras et tellus quis arcu faucibus scelerisque. Vivamus blandit ex sed ex varius, eu egestas tellus tempor.Proin at lacus at nisi elementum venenatis. Quisque non ante sollicitudin, efficitur ligula non, ultrices tellus. In vitae turpis a arcu viverra pharetra in condimentum tortor. Ut sed dignissim lorem. Nullam euismod feugiat lorem a scelerisque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras et tellus quis arcu faucibus scelerisque. Vivamus blandit ex sed ex varius, eu egestas tellus tempor.Proin at lacus at nisi elementum venenatis. Quisque non ante sollicitudin, efficitur ligula non, ultrices tellus. In vitae turpis a arcu viverra pharetra in condimentum tortor. Ut sed dignissim lorem. Nullam euismod feugiat lorem a scelerisque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras et tellus quis arcu faucibus scelerisque. Vivamus blandit ex sed ex varius, eu egestas tellus tempor.Proin at lacus at nisi elementum venenatis. Quisque non ante sollicitudin, efficitur ligula non, ultrices tellus. In vitae turpis a arcu viverra pharetra in condimentum tortor. Ut sed dignissim lorem. Nullam euismod feugiat lorem a scelerisque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras et tellus quis arcu faucibus scelerisque. Vivamus blandit ex sed ex varius, eu egestas tellus temporProin at lacus at nisi elementum venenatis. Quisque non ante sollicitudin, efficitur ligula non, ultrices tellus. In vitae turpis a arcu viverra pharetra in condimentum tortor. Ut sed dignissim lorem. Nullam euismod feugiat lorem a scelerisque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras et tellus quis arcu faucibus scelerisque. Vivamus blandit ex sed ex varius, eu egestas tellus tempor.",
			},
		},
	],
	context: {
		image_path: resolve(__dirname, "./240x180.svg"),
		headline: "Lorem ipsum",
		title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		description:
			"Proin at lacus at nisi elementum venenatis. Quisque non ante sollicitudin, efficitur ligula non, ultrices tellus. In vitae turpis a arcu viverra pharetra in condimentum tortor. Ut sed dignissim lorem. Nullam euismod feugiat lorem a scelerisque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras et tellus quis arcu faucibus scelerisque. Vivamus blandit ex sed ex varius, eu egestas tellus tempor.",
		alt_text: "foo bar",
	},
};
