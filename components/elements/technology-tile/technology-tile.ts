import { resolve } from "path";
import { IComponent, SideEffects, Fragments } from "@sealcode/tempseal";

let TechnologyTile: IComponent<ITechnologyTileProps>;

export interface ITechnologyTileProps {
	name: string;
	image_path: string;
	alt: string;
	wrapping_element?: string;
	target_width?: number;
	custom_style?: string;
	image_url_prefix?: string;
}

TechnologyTile = async (
	context,
	{
		name,
		image_path,
		alt,
		wrapping_element = "div",
		target_width = 200,
		custom_style = "",
		image_url_prefix = "",
	}
) => {
	const e = wrapping_element;
	const html = /* HTML */ `
		<${e} class="technology-tile technology-tile--${name}" title="${name}" style="${custom_style}">
		    ${await Fragments.Image(context, {
				path: image_path,
				alt,
				target_width,
				url_prefix: image_url_prefix,
			})}
		</${e}>
	`;
	await Promise.all([
		SideEffects.Scss.addFromPath(
			context,
			resolve(__dirname, "technology-tile.scss")
		),
		context.add_effect(new SideEffects.HtmlChunk(html)),
	]);
};

TechnologyTile.identifier = "technology-tile";

export default TechnologyTile;
