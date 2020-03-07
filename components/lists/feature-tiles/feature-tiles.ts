import * as Bluebird from "bluebird";
import { resolve } from "path";
import { IComponent, SideEffects } from "@sealcode/tempseal";

let FeatureTiles: IComponent;

interface ITile {
	header: string;
	content: string;
	imageAlt: string;
	imagePath: string;
}

FeatureTiles = async (add_effect, config, { tiles }: { tiles: ITile[] }) => {
	const tiles_html = await Bluebird.map(tiles, async tile => {
		const image = await SideEffects.File.fromPath(tile.imagePath);
		await add_effect(image);
		return /* HTML */ `
			<dl class="feature-tiles__tile">
				<img
					src="${await image.getUrlPlaceholder()}"
					alt="${tile.imageAlt}"
				/>
				<dt>${tile.header}</dt>
				<dd>${tile.content}</dd>
			</dl>
		`;
	});
	const html = `<section class="feature-tiles">
		${tiles_html.join("\n")}
		</section>
	`;
	await Promise.all([
		SideEffects.Scss.addFromPath(
			add_effect,
			config,
			resolve(__dirname, "feature-tiles.scss")
		),
		add_effect(new SideEffects.HtmlChunk(html)),
	]);
};

FeatureTiles.identifier = "feature-tiles";

export default FeatureTiles;
