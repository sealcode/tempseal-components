import { resolve } from "path";
import { IComponent, SideEffects, embedComponent } from "@sealcode/tempseal";

import photoInLogo from "../../elements/photo-in-logo/photo-in-logo";
import button from "../../elements/button/button";

let NiceHeader: IComponent;

NiceHeader = async (
	add_effect,
	config,
	{
		img_direction,
		img_path = resolve(__dirname, "./nice-header.jpg"),
		dirname = __dirname,
		img_color_mode,
		header_text,
		description,
		alt,
		btn_config,
		shape_outside = false,
		img_side = "left",
	}
) => {
	const html = /* HTML */ `
		<section
			class="nice-header ${shape_outside
				? `nice-header--shaped`
				: ``} nice-header--image-on-${img_side}"
		>
			${await embedComponent(
				add_effect,
				config,
				{
					direction: img_direction,
					image_path: img_path,
					img_color_mode: img_color_mode,
					dirname,
					alt: alt,
				},
				photoInLogo
			)}
			<div class="nice-header__description">
				<h2>${header_text}</h2>
				<p>
					${description}
				</p>
				${btn_config
					? await embedComponent(
							add_effect,
							config,
							btn_config,
							button
					  )
					: ""}
			</div>
		</section>
	`;
	await Promise.all([
		SideEffects.Scss.addFromPath(
			add_effect,
			config,
			resolve(__dirname, "nice-header.scss")
		),
		add_effect(new SideEffects.HtmlChunk(html)),
	]);
};

NiceHeader.identifier = "nice-header";
export default NiceHeader;
