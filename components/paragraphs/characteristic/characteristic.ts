import { resolve } from "path";
import { IComponent, SideEffects, embedComponent } from "@sealcode/tempseal";

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

Characteristic = async (add_effect, config, { title, text, features }) => {
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
						${features
							.map(
								(feature: IFeature) => /* HTML */ `
									<div class=" row our-philosophy">
										<div
											class="cell our-philosophy__number"
										>
											${feature.number}
										</div>
										<div class="cell our-philosophy__title">
											<span>${feature.title}</span>
										</div>
										<div
											class="cell our-philosophy__description"
										>
											<span>${feature.description}</span>
										</div>
									</div>
								`
							)
							.join("")}
					</div>
				</div>
			</div>
		</div>
	`;
	await Promise.all([
		SideEffects.Scss.addFromPath(
			add_effect,
			config,
			resolve(__dirname, "characteristic.scss")
		),
		add_effect(new SideEffects.HtmlChunk(html)),
	]);
};

Characteristic.identifier = "characteristic";

export default Characteristic;
