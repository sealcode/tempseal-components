import { resolve } from "path";
import { IComponent, SideEffects } from "@sealcode/tempseal";

let Recommendation: IComponent<IRecommendationProps>;

export interface IRecommendationProps {
	quotation: string;
	img_path: string;
	author: string;
	author_description: string;
	layout: "vertical" | "horizontal";
}

Recommendation = async (
	add_effect,
	config,
	{ quotation, img_path, author, author_description, layout = "vertical" }
) => {
	const quotation_mark = await SideEffects.File.fromPath(
		resolve(__dirname, "quotation_mark.svg")
	);
	const image = await SideEffects.File.fromPath(img_path);
	const html = /* HTML */ `
		<blockquote class="quote quote--${layout}">
			<div class="wrapper">
				<div class="quotation">
					<img
						src="${await quotation_mark.getUrlPlaceholder()}"
						alt=""
					/>
					<p class="content">${quotation || ""}</p>
				</div>
				<div class="author">
					<img
						src="${await image.getUrlPlaceholder()}"
						alt="${author || ""} - zdjęcie"
					/>
					<p>${author || ""}</p>
					<span>${author_description || ""}</span>
				</div>
			</div>
		</blockquote>
	`;
	await Promise.all([
		add_effect(image),
		add_effect(quotation_mark),
		SideEffects.Scss.addFromPath(
			add_effect,
			config,
			resolve(__dirname, "recommendation.scss")
		),
		add_effect(new SideEffects.HtmlChunk(html)),
	]);
};

Recommendation.identifier = "recommendation";

export default Recommendation;
