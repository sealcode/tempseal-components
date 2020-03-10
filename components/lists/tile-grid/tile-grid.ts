import { resolve } from "path";
import { IComponent, SideEffects, embedComponent } from "@sealcode/tempseal";

import TechnologyTile, {
	ITechnologyTileProps,
} from "../../elements/technology-tile/technology-tile";

let TileGrid: IComponent<ITileGridProps>;

export interface ITileGridProps {
	title: string;
	tiles: ITechnologyTileProps[];
}

TileGrid = async (add_effect, config, { title, tiles }) => {
	const tiles_html = (
		await Promise.all(
			tiles.map(tile =>
				embedComponent(
					add_effect,
					config,
					{ wrapping_element: "li", ...tile },
					TechnologyTile
				)
			)
		)
	).join("\n");
	const html = /* HTML */ `
		<div class="tile-grid">
			<h2>${title}</h2>
			<ul>
				${tiles_html}
			</ul>
		</div>
	`;
	await Promise.all([
		SideEffects.Scss.addFromPath(
			add_effect,
			config,
			resolve(__dirname, "tile-grid.scss")
		),
		add_effect(new SideEffects.HtmlChunk(html)),
	]);
};

TileGrid.identifier = "tile-grid";

export default TileGrid;
