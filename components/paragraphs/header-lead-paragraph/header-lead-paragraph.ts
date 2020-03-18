import { resolve } from "path";
import { IComponent, SideEffects } from "@sealcode/tempseal";

let HeaderLeadParagraph: IComponent;

HeaderLeadParagraph = async (
	context,
	{ title, pitch, description, description_box, position, top }
) => {
	const html = /* HTML */ `
		<section
			class="header-lead-paragraph header-lead-paragraph--${position}"
		>
			<div class="header-lead-paragraph__caption">
				<div class="header-lead-paragraph__caption--${top}">
					<hr />
					<h3>${title}</h3>
					<p>${pitch}</p>
				</div>
			</div>
			<div class="header-lead-paragraph__description">
				<p>${description}</p>
			</div>
			<div class="header-lead-paragraph__description-box">
				<p>${description_box}</p>
			</div>
		</section>
	`;
	await Promise.all([
		SideEffects.Scss.addFromPath(
			context,
			resolve(__dirname, "header-lead-paragraph.scss")
		),
		context.add_effect(new SideEffects.HtmlChunk(html)),
	]);
};

HeaderLeadParagraph.identifier = "header-lead-paragraph";
export default HeaderLeadParagraph;
