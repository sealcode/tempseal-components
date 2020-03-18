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
	}
) => {
	const html = /* HTML */ `
		<div
			class="thumbnail-paragraph thumbnail-paragraph--${img_side ||
				"right"} ${description
				? ""
				: "thumbnail-paragraph--no-paragraph"}"
		>
			<div class="thumbnail ${sticky ? "thumbnail--sticky" : ""}">
				${await Fragments.Image(context, {
					alt: alt_text,
					path: image_path,
				})}
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
		SideEffects.Scss.addFromPath(
			context,
			resolve(__dirname, "thumbnail-paragraph.scss")
		),
		context.add_effect(new SideEffects.HtmlChunk(html)),
	]);
};

ThumbnailParagraph.identifier = "thumbnail-paragraph";

export default ThumbnailParagraph;
