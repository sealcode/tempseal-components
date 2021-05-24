import { resolve } from "path";
import { IComponent, SideEffects, Fragments } from "@sealcode/tempseal";

let GridGallery: IComponent<IGridGalleryProps>;

interface IGridGalleryItem {
	type: string; //"photo" or "video". video not yet supported
	path: string;
	alt: string;
}

export interface IGridGalleryProps {
	items: IGridGalleryItem[];
	title: string;
}

GridGallery = async (context, { items, title }) => {
	console.log(Date.now(), "gallery begin");
	const image_effects: Promise<any>[] = [];
	let item_promises = [];
	let first_time = true;
	for (let item of items) {
		const full_image = new SideEffects.Image(
			item.path,
			"original",
			"original",
			"gallery"
		);
		if (first_time) {
			first_time = false;
			console.log(Date.now(), "first add_effect in gallery!");
		}
		image_effects.push(context.add_effect(full_image));
		item_promises.push(
			Promise.all([
				Fragments.Image(context, {
					path: item.path,
					alt: item.alt,
					target_width: 400,
					url_prefix: "gallery",
					fit: "cover",
				}),
				full_image.getUrlPlaceholder(),
			]).then(
				([img_fragment, full_url]) => /* HTML */ `<a href="${full_url}"
					>${img_fragment}</a
				>`
			)
		);
	}

	await Promise.all([
		...image_effects,
		SideEffects.Scss.addFromPath(
			context,
			resolve(__dirname, "grid-gallery.scss")
		),
		Promise.all(item_promises).then((items) =>
			context.add_effect(
				new SideEffects.HtmlChunk(/* HTML */ `<div class="grid-gallery">
					<div class="grid-gallery__grid">
						<h2>${title}</h2>
						${items.join("\n")}
					</div>
				</div>`)
			)
		),
	]);
};

GridGallery.identifier = "grid-gallery";

export default GridGallery;
