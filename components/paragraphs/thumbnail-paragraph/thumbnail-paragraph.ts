import { resolve } from "path";
import { IComponent, SideEffects, Fragments } from "@sealcode/tempseal";

let ThumbnailParagraph: IComponent<IThumbnailParagraphProps>;

export interface IThumbnailParagraphProps {
	image_path: string;
	img_side: "left" | "right";
	headline: string;
	title: string;
	description?: string;
	alt_text: string;
	sticky?: boolean;
	size_variant?: "small" | "large";
	image_align: "top" | "left" | "right" | "bottom" | "center";
	image_url_prefix?: string;
}

ThumbnailParagraph = async (
	context,
	{
		image_path,
		img_side,
		headline,
		title,
		description,
		alt_text,
		sticky = false,
		size_variant = "large",
		image_align = "center",
		image_url_prefix = "",
	}
) => {
	const html = /* HTML */ `
		<div
			class="thumbnail-paragraph thumbnail-paragraph--${img_side ||
			"right"} thumbnail-paragraph--${size_variant} ${description
				? ""
				: "thumbnail-paragraph--no-paragraph"}"
			id="${headline.toLowerCase().replace(" ", "-")}"
		>
			<div class="thumbnail ${sticky ? "thumbnail--sticky" : ""}">
				${await Fragments.Image(context, {
					alt: alt_text,
					path: image_path,
					target_width:
						parseInt(context.config.layout["container-width"]) / 2,
					img_style: `object-position: ${image_align}`,
					url_prefix: image_url_prefix || "",
				})}
			</div>
			<div class="header">
				<div class="headline">
					${headline || ""}
				</div>
				<h3>
					${title || ""}
				</h3>
			</div>
			${description
				? `<div class="paragraph">
				${description || ""}
		 </div>`
				: ""}
		</div>
	`;
	await Promise.all([
		SideEffects.Scss.addFromPath(
			context,
			resolve(__dirname, "thumbnail-paragraph.scss")
		),
		context.add_effect(new SideEffects.HtmlChunk(html)),
	]);
};

ThumbnailParagraph.identifier = "thumbnail-paragraph";

export default ThumbnailParagraph;
