import { resolve } from "path";
import { IComponent, SideEffects } from "@sealcode/tempseal";

let Prefooter: IComponent<IPrefooterProps>;

export interface IPrefooterProps {
	small_text_list: string[];
	large_text: string;
}

Prefooter = async (
	add_effect,
	config,
	{ small_text_list = [], large_text = "" }
) => {
	const html = /* HTML */ `
		<section class="prefooter">
			<div class="prefooter__container">
				<ul class="prefooter__small-text">
					${small_text_list
						.map(
							li => `
						<li>${li}</li>`
						)
						.join("")}
				</ul>
				<div class="prefooter__large-text">
					${large_text}
				</div>
			</div>
		</section>
	`;
	await Promise.all([
		SideEffects.Scss.addFromPath(
			add_effect,
			config,
			resolve(__dirname, "prefooter.scss")
		),
		add_effect(new SideEffects.HtmlChunk(html)),
	]);
};

Prefooter.identifier = "prefooter";

export default Prefooter;
