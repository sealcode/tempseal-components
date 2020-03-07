import { resolve } from "path";
import { IComponent, SideEffects } from "@sealcode/tempseal";

let OrderedPictogramTiles: IComponent<IOrderedPictogramTilesProps>;

export type IOrderedPictogramTilesProps = Array<{
	title: string;
	description: string;
	icon_path: string;
	icon_alt: string;
	number: string;
	color: "primary" | "secondary" | "white";
}>;

OrderedPictogramTiles = async (add_effect, config, tiles) => {
	const tile_htmls = (
		await Promise.all(
			tiles.map(async tile => {
				const image = await add_effect(
					SideEffects.File.fromPath(tile.icon_path)
				);
				return /* HTML */ `
					<li
						class="pictogram-tiles__tile pictogram-tiles__tile--${tile.color}"
					>
						<div class="pictogram-tiles__content">
							<div class="pictogram-tiles__upperSection">
								<span>${tile.number}</span>
								<img
									src="${await image.getUrlPlaceholder()}"
									alt="${tile.icon_alt}"
								/>
							</div>
							<div class="pictogram-tiles__lowerSection">
								<h3>${tile.title}</h3>
								<p>${tile.description}</p>
							</div>
						</div>
					</li>
				`;
			})
		)
	).join("\n");
	const html = /* HTML */ `
		<section>
			<ol class="pictogram-tiles">
				${tile_htmls}
			</ol>
		</section>
	`;
	await Promise.all([
		SideEffects.Scss.addFromPath(
			add_effect,
			config,
			resolve(__dirname, "ordered-pictogram-tiles.scss")
		),
		add_effect(new SideEffects.HtmlChunk(html)),
	]);
};

OrderedPictogramTiles.identifier = "ordered-pictogram-tiles";

export default OrderedPictogramTiles;
