import { resolve } from "path";
import { IComponent, SideEffects } from "@sealcode/tempseal";

let ArticleListItem: IComponent<IArticleItemProps>;

export interface IArticleItemProps {
	number: string;
	name: string;
	description: string;
	modifier: "primary" | "secondary" | "white";
	icon_path: string;
	icon_alt: string;
	header_mode: "above" | "below";
}

ArticleListItem = async function (
	context,
	{
		number,
		name,
		description,
		modifier,
		icon_path,
		icon_alt,
		header_mode = "below",
	}
) {
	let image;
	if (icon_path) {
		image = SideEffects.File.fromPath(icon_path);
	}
	await Promise.all([
		image ? context.add_effect(image) : null,
		SideEffects.Scss.addFromPath(
			context,
			resolve(__dirname, "./article-list-item.scss")
		),
		context.add_effect(
			new SideEffects.HtmlChunk(/* HTML */ `
				<li
					class="article-list-item article-list-item--${modifier} article-list-item--${header_mode}"
				>
					<div class="header">
						${image
							? `<div class="article-list-item__image"><img src="${await image.getUrlPlaceholder()}" alt="${icon_alt}"/></div>`
							: `<span class="article-list-item__number">${number}</span>`}
						<h3>${name || ""}</h3>
					</div>
					<p>${description || ""}</p>
				</li>
			`)
		),
	]);
};

ArticleListItem.identifier = "article-list-item";

export default ArticleListItem;
