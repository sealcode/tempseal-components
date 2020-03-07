import { resolve } from "path";
import { IComponent, SideEffects } from "@sealcode/tempseal";

let LittleHeader: IComponent;

LittleHeader = async (
	add_effect,
	config,
	{ header, description, img_path = resolve(__dirname, "./logo-purple.svg") }
) => {
	const image: SideEffects.File = await SideEffects.File.fromPath(img_path);
	const html = /* HTML */ `
		<section class="little-header">
			<div class="little-header__body">
				<div class="little-header__body-inner">
					<div class="little-header__body-left">
						${header ? `<h2>${header}</h2>` : ``}
						<img
							src="${await image.getUrlPlaceholder()}"
							alt="img"
						/>
					</div>
					<div class="little-header__body-right">
						<p>${description || ""}</p>
					</div>
				</div>
			</div>
		</section>
	`;
	await Promise.all([
		add_effect(image),
		SideEffects.Scss.addFromPath(
			add_effect,
			config,
			resolve(__dirname, "little-header.scss")
		),
		add_effect(new SideEffects.HtmlChunk(html)),
	]);
};

LittleHeader.identifier = "little-header";

export default LittleHeader;
