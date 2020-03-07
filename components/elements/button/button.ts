import { resolve } from "path";
import { SideEffects, IComponent } from "@sealcode/tempseal";

let button: IComponent<IButtonProps>;

export interface IButtonProps {
	text: string;
	color: string;
	link: string;
}

button = async function(add_effect, config, { text, color, link }) {
	add_effect(
		new SideEffects.HtmlChunk(`
		<a href="${link}" class="button ${color ? "button--" + color : ""}">
			${text}
		</a>
	`)
	);

	await SideEffects.Scss.addFromPath(
		add_effect,
		config,
		resolve(__dirname, "./button.scss")
	);
};
button.identifier = "button";

export default button;
