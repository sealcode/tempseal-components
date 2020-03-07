import { resolve } from "path";
import { IComponent, SideEffects } from "@sealcode/tempseal";

let TechnologyTile: IComponent<ITechnologyTileProps>;

export interface ITechnologyTileProps {
	name: string;
	image_path: string;
	alt: string;
}

TechnologyTile = async (add_effect, config, { name, image_path, alt }) => {
	const image = await SideEffects.File.fromPath(image_path);
	const html = /* HTML */ `
		<div class="technology-tile technology-tile--${name}">
			<img
				src="${await image.getUrlPlaceholder()}"
				alt="${alt}"
				height="100"
			/>
		</div>
	`;
	await Promise.all([
		add_effect(image),
		SideEffects.Scss.addFromPath(
			add_effect,
			config,
			resolve(__dirname, "technology-tile.scss")
		),
		add_effect(new SideEffects.HtmlChunk(html)),
	]);
};

TechnologyTile.identifier = "technology-tile";

export default TechnologyTile;
