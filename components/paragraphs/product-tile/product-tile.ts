import { resolve } from "path";
import { IComponent, SideEffects, embedComponent } from "@sealcode/tempseal";

import button, { IButtonProps } from "../../elements/button/button";

let ProductTile: IComponent<IProductTileProps>;

export interface IProductTileProps {
	modifier: string;
	image_path: string;
	image_alt: string;
	title: string;
	content: string;
	button_params: IButtonProps;
	href?: string;
}

ProductTile = async (
	add_effect,
	config,
	{ modifier, image_path, image_alt, title, content, button_params, href }
) => {
	const html = /* HTML */ `
		<article class="product-tile product-tile--${modifier}">
			<${href ? `a href="${href}"` : "div"} class="product-tile__image">
		${await SideEffects.ResponsiveImage(add_effect, {
			image_path: image_path,
			resolutions: [242, 448],
			sizes_attr: "242px",
			alt: image_alt,
		})}
			</${href ? "a" : "div"}>
			<h3 class="product-tile__header">
				${href ? `<a class="product-tile__header" href="${href}">${title}</a>` : title}
			</h3>
			<p>${content}</p>
	${
		button_params
			? await embedComponent(add_effect, config, button_params, button)
			: ""
	}
		</article>
	`;
	await Promise.all([
		SideEffects.Scss.addFromPath(
			add_effect,
			config,
			resolve(__dirname, "product-tile.scss")
		),
		add_effect(new SideEffects.HtmlChunk(html)),
	]);
};

ProductTile.identifier = "product-tile";

export default ProductTile;
