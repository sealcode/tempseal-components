import { resolve } from "path";
import { IComponent, SideEffects } from "@sealcode/tempseal";

let ConfigDemo: IComponent;

ConfigDemo = async ({ add_effect, config }) => {
	const fonts_html = `<ul>
	${Object.entries(config.fonts)
		.map(
			([font_type_name, font_family]) => /* HTML */ `
				<li>
					${font_type_name}:
					<span class="font-${font_type_name}">${font_family}</span>
				</li>
			`
		)
		.join("\n")}
	</ul>`;
	let colors_html = "";
	for (let color_name in config.colors) {
		const color_value = config.colors[color_name];
		colors_html += /* HTML */ `
			<div
				class="color-tile"
				style="background-color: ${color_value}"
				title="${color_name}"
			></div>
		`;
	}
	const html = /* HTML */ `
		<div>
			<h2>Config demo</h2>
			<h3>Fonts</h3>
			${fonts_html}
			<h3>Colors</h3>
			<div class="color-grid">
				${colors_html}
			</div>
		</div>
	`;
	await Promise.all([
		SideEffects.Scss.addFromPath(
			{ add_effect, config },
			resolve(__dirname, "config-demo.scss")
		),
		add_effect(new SideEffects.HtmlChunk(html)),
	]);
};

ConfigDemo.identifier = "config-demo";

export default ConfigDemo;
