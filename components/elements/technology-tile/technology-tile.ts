import { resolve } from "path";
import { IComponent, SideEffects } from "@sealcode/tempseal";

let TechnologyTile: IComponent<ITechnologyTileProps>;

export interface ITechnologyTileProps {
	name: string;
	image_path: string;
	alt: string;
	wrapping_element?: string;
}

TechnologyTile = async (
	context,
	{ name, image_path, alt, wrapping_element = "div" }
) => {
	const image = await SideEffects.File.fromPath(image_path);
	const e = wrapping_element;
	const html = /* HTML */ `
		<${e} class="technology-tile technology-tile--${name}" title="${name}">
			<img
				src="${await image.getUrlPlaceholder()}"
				alt="${alt}"
				height="100"
			/>
		</${e}>
	`;
	await Promise.all([
		context.add_effect(image),
		SideEffects.Scss.addFromPath(
			context,
			resolve(__dirname, "technology-tile.scss")
		),
		context.add_effect(new SideEffects.HtmlChunk(html)),
	]);
};

TechnologyTile.identifier = "technology-tile";

export default TechnologyTile;
