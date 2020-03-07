import { resolve } from "path";
import { IComponent, SideEffects, embedComponent } from "@sealcode/tempseal";

import button, { IButtonProps } from "../../elements/button/button";

let CustomizableHeader: IComponent;

export interface ICustomizableHeader {
	content: string;
	btn_config: IButtonProps;
	header_text: string;
	description: string;
}

CustomizableHeader = async (
	add_effect,
	config,
	{ content, btn_config, header_text, description }
) => {
	const html = /* HTML */ `
		<div class="customizable-header">
			${content}
			<div class="customizable-header__description">
				<h2>${header_text}</h2>
				<p class="customizable-header__paragraph">
					${description}
				</p>
				${await embedComponent(add_effect, config, btn_config, button)}
			</div>
		</div>
	`;
	await Promise.all([
		SideEffects.Scss.addFromPath(
			add_effect,
			config,
			resolve(__dirname, "customizable-header.scss")
		),
		add_effect(new SideEffects.HtmlChunk(html)),
	]);
};

CustomizableHeader.identifier = "customizable-header";

export default CustomizableHeader;
