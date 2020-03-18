import { resolve } from "path";
import {
	IComponent,
	SideEffects,
	embedComponent,
	THeaderLevel,
} from "@sealcode/tempseal";

import TechnologyTile, {
	ITechnologyTileProps,
} from "../../elements/technology-tile/technology-tile";

let TileGrid: IComponent<ITileGridProps>;

export interface ITileGridProps {
	title: string;
	tiles: ITechnologyTileProps[];
	header_level: THeaderLevel;
}

TileGrid = async (add_effect, config, { title, tiles, header_level }) => {
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
	const h = header_level;
	const html = /* HTML */ `
		<div class="tile-grid">
			<h${h}>${title}</h${h}>
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
