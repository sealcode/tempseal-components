import { resolve } from "path";
import {
	IComponent,
	SideEffects,
	embedComponent,
	THeaderLevel,
} from "@sealcode/tempseal";

import button, { IButtonProps } from "../../elements/button/button";

let CustomizableHeader: IComponent;

export interface ICustomizableHeader {
	content: string;
	btn_config: IButtonProps;
	header_text: string;
	description: string;
	header_level?: THeaderLevel;
}

CustomizableHeader = async (
	context,
	{ content, btn_config, header_text, description, header_level = 2 }
) => {
	const h = header_level;
	const html = /* HTML */ `
		<div class="customizable-header">
			${content}
			<div class="customizable-header__description">
				<h${h}>${header_text}</h${h}>
				<p class="customizable-header__paragraph">
					${description}
				</p>
${await embedComponent(context, btn_config, button)}
			</div>
		</div>
	`;
	await Promise.all([
		SideEffects.Scss.addFromPath(
			context,
			resolve(__dirname, "customizable-header.scss")
		),
		context.add_effect(new SideEffects.HtmlChunk(html)),
	]);
};

CustomizableHeader.identifier = "customizable-header";

export default CustomizableHeader;
