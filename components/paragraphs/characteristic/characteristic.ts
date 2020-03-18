import { resolve } from "path";
import { IComponent, SideEffects } from "@sealcode/tempseal";

interface IFeature {
	number: string;
	title: string;
	description: string;
}

const row = ({
	number,
	title,
	description,
}: IFeature) => `<div class=" row our-philosophy">
	<div class="cell our-philosophy__number">
		${number}
	</div>
	<div class="cell our-philosophy__title">
		<span>${title}</span>
	</div>
	<div class="cell our-philosophy__description">
		<span>${description}</span>
	</div>
</div>`;

let Characteristic: IComponent;

Characteristic = async (context, { title, text, features }) => {
	const html = /* HTML */ `
		<div class="characteristic-component">
			<div class="characteristic">
				<div class="characteristic__center-wrapper">
					<div class="characteristic__philosophy-and-operate">
						<div class="characteristic__philosophy">
							<h2>${title}</h2>
						</div>
						<div class="characteristic__operate">
							<p>${text}</p>
						</div>
					</div>
					<div class="our-philosophy__table">
						${features.map(row).join("")}
					</div>
				</div>
			</div>
		</div>
	`;
	await Promise.all([
		SideEffects.Scss.addFromPath(
			context,
			resolve(__dirname, "characteristic.scss")
		),
		context.add_effect(new SideEffects.HtmlChunk(html)),
	]);
};

Characteristic.identifier = "characteristic";

export default Characteristic;
