import { resolve } from "path";
import { SideEffects, IComponent } from "@sealcode/tempseal";

let button: IComponent<IButtonProps>;

export interface IButtonProps {
	text: string;
	color: string;
	link: string;
}

button = async function(context, { text, color, link }) {
	context.add_effect(
		new SideEffects.HtmlChunk(`
		<a href="${link}" class="button ${color ? "button--" + color : ""}">
			${text}
		</a>
	`)
	);

	await SideEffects.Scss.addFromPath(
		context,
		resolve(__dirname, "./button.scss")
	);
};
button.identifier = "button";

export default button;
