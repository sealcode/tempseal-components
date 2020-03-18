import { resolve } from "path";
import {
	IComponent,
	SideEffects,
	embedComponent,
	THeaderLevel,
} from "@sealcode/tempseal";

import photoInLogo from "../../elements/photo-in-logo/photo-in-logo";
import button, { IButtonProps } from "../../elements/button/button";

let NiceHeader: IComponent<INiceHeaderProps>;

export interface INiceHeaderProps {
	image_path: string;
	image_direction: "left" | "right";
	image_color_mode: "normal" | "grayscale";
	header_text: string;
	description: string;
	alt: string;
	btn_config: IButtonProps;
	shape_outside: boolean;
	img_side: "left" | "right";
	header_level: THeaderLevel;
}

NiceHeader = async (
	add_effect,
	config,
	{
		image_direction,
		image_path = resolve(__dirname, "./nice-header.jpg"),
		image_color_mode,
		header_text,
		description,
		alt,
		btn_config,
		shape_outside = false,
		img_side = "left",
		header_level = 2,
	}
) => {
	const h = header_level;
	const html = /* HTML */ `
		<section
			class="nice-header ${
				shape_outside ? `nice-header--shaped` : ``
			} nice-header--image-on-${img_side}"
		>
			${await embedComponent(
				add_effect,
				config,
				{
					direction: image_direction,
					image_path,
					image_color_mode,
					alt,
				},
				photoInLogo
			)}
			<div class="nice-header__description">
				<h${h}>${header_text}</h${h}>
				<p>
					${description}
				</p>
				${
					btn_config
						? await embedComponent(
								add_effect,
								config,
								btn_config,
								button
						  )
						: ""
				}
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
