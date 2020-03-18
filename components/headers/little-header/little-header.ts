import { resolve } from "path";
import { IComponent, SideEffects, THeaderLevel } from "@sealcode/tempseal";

let LittleHeader: IComponent;

export interface ILittleHeader {
	header: string;
	description: string;
	img_path: string;
	header_level: THeaderLevel;
}

LittleHeader = async (
	add_effect,
	config,
	{
		header,
		description,
		img_path = resolve(__dirname, "./logo-purple.svg"),
		header_level = 2,
	}
) => {
	const image: SideEffects.File = await SideEffects.File.fromPath(img_path);
	const h = header_level;
	const html = /* HTML */ `
		<section class="little-header">
			<div class="little-header__body">
				<div class="little-header__body-inner">
					<div class="little-header__body-left">
						${header ? `<h${h}>${header}</h${h}>` : ``}
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
