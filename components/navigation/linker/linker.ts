import { resolve } from "path";
import { IComponent, SideEffects } from "@sealcode/tempseal";

let Linker: IComponent;

interface IItem {
	href: string;
	content: string;
}

const renderItem = ({ href, content }: IItem) => {
	return /* HTML */ `
		<div class="legend"><a href="${href}">${content}</a></div>
	`;
};

Linker = async (context, items: IItem[]) => {
	const html = /* HTML */ `
		<section class="linker">
			<div class="linker__body">
				${items.map(renderItem).join("")}
			</div>
		</section>
	`;
	await Promise.all([
		SideEffects.Scss.addFromPath(
			context,
			resolve(__dirname, "linker.scss")
		),
		context.add_effect(new SideEffects.HtmlChunk(html)),
	]);
};

Linker.identifier = "linker";

export default Linker;
