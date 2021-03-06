import { resolve } from "path";
import { IComponent, SideEffects } from "@sealcode/tempseal";

let Teeth: IComponent<ITeethProps>;

export interface ITeethProps {
	color_left: string;
	color_right: string;
}

Teeth = async (context, { color_left, color_right }) => {
	const html = /* HTML */ `
		<div
			class="teeth-container"
			style="--color_left: ${color_left}; --color_right: ${color_right}"
		>
			<div class="teeth teeth--left"></div>
			<div class="teeth teeth--right"></div>
		</div>
	`;
	await Promise.all([
		SideEffects.Scss.addFromPath(context, resolve(__dirname, "teeth.scss")),
		context.add_effect(new SideEffects.HtmlChunk(html)),
	]);
};

Teeth.identifier = "teeth";

export default Teeth;
