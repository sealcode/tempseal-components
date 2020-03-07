import { resolve } from "path";
import { IComponent, SideEffects, embedComponent } from "@sealcode/tempseal";

import button from "../../elements/button/button";

let BreakoutCTA: IComponent;

BreakoutCTA = async (
	add_effect,
	config,
	{ leftheader, rightheader, buttonlink }
) => {
	const button_params = {
		text: "Dowiedz się więcej",
		link: buttonlink,
		color: "purple",
	};
	const html = /* HTML */ `
		<section class="breakout-cta-element">
			<div class="breakout-cta-element__container">
				<div class="breakout-cta-element__container-left">
					<h2>${leftheader}</h2>
				</div>
				<div class="breakout-cta-element__container-right">
					<p>${rightheader}</p>
				</div>
				<div class="breakout-cta-element__button">
					${await embedComponent(
						add_effect,
						config,
						button_params,
						button
					)}
				</div>
			</div>
		</section>
	`;
	await Promise.all([
		SideEffects.Scss.addFromPath(
			add_effect,
			config,
			resolve(__dirname, "breakout-cta.scss")
		),
		add_effect(new SideEffects.HtmlChunk(html)),
	]);
};

BreakoutCTA.identifier = "breakout-cta";
export default BreakoutCTA;
