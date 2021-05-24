import { resolve } from "path";
import Bluebird from "bluebird";
import { IComponent, SideEffects } from "@sealcode/tempseal";

let BlogNewsTiles: IComponent;

interface ITile {
	imagePath: string;
	imageAlt: string;
	readingTime: string;
	title: string;
	avatarPath: string;
	author: string;
	date: string;
	url: string;
}

BlogNewsTiles = async (context, tiles: ITile[]) => {
	const icon = SideEffects.File.fromPath(resolve(__dirname, "clock.svg"));
	const icon_url: string = await icon.getUrlPlaceholder();

	const tile_htmls = await Bluebird.map(
		tiles.filter((e) => e),
		async function (tile) {
			const [thumbnail_html, avatar_html] = await Promise.all([
				SideEffects.ResponsiveImage(context, {
					image_path: tile.imagePath,
					sizes_attr:
						"(max-width: 448px) 100vw, (max-width: 500px) calc(100vw - 88px), (max-width: 711px) 418px, (max-width: 950px) calc( (100vw - 3rem) / 2 ), (max-width: 1040px) 418px, 352px",
					alt: tile.imageAlt,
				}),
				SideEffects.ResponsiveImage(context, {
					image_path: tile.avatarPath,
					resolutions: [56, 28],
					sizes_attr: "28px",
					alt: "Avatar",
				}),
			]);

			return /* HTML */ `
				<article class="blog-news-tiles__tile">
					<a href="${tile.url}" class="blog-news-tiles__image">
						${thumbnail_html}
					</a>
					<span class="blog-news-tiles__reading-time">
						<img src="${icon_url}" alt="" />
						${tile.readingTime}
					</span>
					<a href="${tile.url}" class="blog-news-tiles__title">
						${tile.title}
					</a>
					<div class="blog-news-tiles__description">
						<span class="blog-news-tiles__author">
							${avatar_html} by ${tile.author}
						</span>
						<span class="blog-news-tiles__date">
							${tile.date}
						</span>
					</div>
				</article>
			`;
		}
	);

	const html = /* HTML */ `
		<section class="blog-news-tiles">${tile_htmls.join("\n")}</section>
	`;
	await Promise.all([
		context.add_effect(icon),
		SideEffects.Scss.addFromPath(
			context,
			resolve(__dirname, "blog-news-tiles.scss")
		),
		context.add_effect(new SideEffects.HtmlChunk(html)),
	]);
};

BlogNewsTiles.identifier = "blog-news-tiles";
export default BlogNewsTiles;
