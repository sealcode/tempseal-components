import { resolve } from "path";
import {
	IComponent,
	SideEffects,
	embedComponent,
	THeaderLevel,
} from "@sealcode/tempseal";

import button from "../../elements/button/button";

let ProductShowcase: IComponent<IProductShowcaseProps>;

export interface IProductShowcaseProps {
	image_path: string;
	image_alt: string;
	title: string;
	description: string;
	more_button_url: string;
	visit_button_url: string;
	features: Array<{ header: string; content: string }>;
	extra_header_text: string;
	variant: "primary" | "secondary" | "white";
	header_level: THeaderLevel;
}

ProductShowcase = async (
	add_effect,
	config,
	{
		image_path,
		image_alt,
		title,
		description,
		more_button_url,
		visit_button_url,
		features,
		extra_header_text,
		variant = "primary",
		header_level,
	}
) => {
	const image = await SideEffects.File.fromPath(image_path);
	const h = header_level;
	const html = /* HTML */ `
		<section class="ps-root">
			<div
				class="product-showcase ${
					variant ? `product-showcase--${variant}` : ""
				} product-showcase__container"
			>
				${extra_header_text ? `<h3>${extra_header_text}</h3>` : ``}
				<figure class="product-showcase__body">
					<img
						src="${await image.getUrlPlaceholder()}"
						alt="${image_alt}"
					/>
					<h${h}>${title}</h${h}>
					<figcaption class="product-showcase__details">
						<p>${description}</p>
						<ul>
							${features
								.map(feature => {
									return (
										"<li><strong>" +
										feature.header +
										"</strong><p>" +
										feature.content +
										"</p></li>"
									);
								})
								.join(" ")}
						</ul>
						<div class="product-showcase__details-buttons">
							${await embedComponent(
								add_effect,
								config,
								{
									text: "Zobacz więcej",
									link: more_button_url,
									color: "black",
								},
								button
							)}
							${await embedComponent(
								add_effect,
								config,
								{
									text: "Odwiedź stronę",
									link: visit_button_url,
									color: "white-on-darker-bg",
								},
								button
							)}
						</div>
					</figcaption>
				</figure>
			</div>
		</section>
	`;
	await Promise.all([
		add_effect(image),
		SideEffects.Scss.addFromPath(
			add_effect,
			config,
			resolve(__dirname, "product-showcase.scss")
		),
		add_effect(new SideEffects.HtmlChunk(html)),
	]);
};

ProductShowcase.identifier = "product-showcase";

export default ProductShowcase;
