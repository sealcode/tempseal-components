import { resolve } from "path";
import { IComponent, SideEffects } from "@sealcode/tempseal";

let ThumbnailParagraph: IComponent<IThumbnailParagraphProps>;

export interface IThumbnailParagraphProps {
	image_path: string;
	img_side: "left" | "right";
	headline: string;
	title: string;
	description?: string;
	alt_text: string;
	sticky?: boolean;
}

ThumbnailParagraph = async (
	add_effect,
	config,
	{
		image_path,
		img_side,
		headline,
		title,
		description,
		alt_text,
		sticky = false,
	}
) => {
	const image = await SideEffects.File.fromPath(image_path);
	const html = /* HTML */ `
		<div
			class="thumbnail-paragraph thumbnail-paragraph--${img_side ||
				"right"} ${description
				? ""
				: "thumbnail-paragraph--no-paragraph"}"
		>
			<div class="thumbnail ${sticky ? "thumbnail--sticky" : ""}">
				<img
					alt="${alt_text || ""}"
					src="${await image.getUrlPlaceholder()}"
				/>
			</div>
			<div class="header">
				<div class="headline">${headline || ""}</div>
				<h3>${title || ""}</h3>
			</div>
			${description
				? `<div class="paragraph">
				${description || ""}
		 </div>`
				: ""}
		</div>
	`;
	await Promise.all([
		add_effect(image),
		SideEffects.Scss.addFromPath(
			add_effect,
			config,
			resolve(__dirname, "thumbnail-paragraph.scss")
		),
		add_effect(new SideEffects.HtmlChunk(html)),
	]);
};

ThumbnailParagraph.identifier = "thumbnail-paragraph";

export default ThumbnailParagraph;
