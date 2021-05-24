import { resolve } from "path";
import { IComponent, SideEffects, embedComponent } from "@sealcode/tempseal";

import button from "../../elements/button/button";

let BreakoutCTA: IComponent;

BreakoutCTA = async (
	context,
	{ leftheader, rightheader, header_level = 2, button_params }
) => {
	const h = header_level;

	const html = /* HTML */ `
		<section class="breakout-cta-element ${
			button_params ? "breakout-cta-element--with-button" : ""
		}">
			<div class="breakout-cta-element__container">
				<div class="breakout-cta-element__container-left">
					<h${h}>${leftheader}</h${h}>
				</div>
				<div class="breakout-cta-element__container-right">
					<p>${rightheader}</p>
				</div>
				${
					button_params
						? /* HTML */ `<div class="breakout-cta-element__button">
								${await embedComponent(
									context,
									button_params,
									button
								)}
						  </div>`
						: ""
				}
			</div>
		</section>
	`;
	await Promise.all([
		SideEffects.Scss.addFromPath(
			context,
			resolve(__dirname, "breakout-cta.scss")
		),
		context.add_effect(new SideEffects.HtmlChunk(html)),
	]);
};

BreakoutCTA.identifier = "breakout-cta";
export default BreakoutCTA;
