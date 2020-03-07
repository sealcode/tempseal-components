import { resolve } from "path";
import { IComponent, SideEffects } from "@sealcode/tempseal";

let PageHeader: IComponent<IPageHeaderProps>;

export interface IPageHeaderProps {
	header_primary: string;
	header_secondary: string;
	bg: "1" | "2";
}

PageHeader = async (
	add_effect,
	config,
	{ header_primary, header_secondary, bg = 1 }
) => {
	const background = await SideEffects.File.fromPath(
		resolve(__dirname, `background${bg}.svg`)
	);
	const seal_with_a_clock = await SideEffects.File.fromPath(
		resolve(__dirname, "seal-with-a-clock.svg")
	);
	const html = /* HTML */ `
		<div class="page-header page-header--bg${bg}">
			<div class="page-header__first_layer"></div>
			<div class="page-header__second_layer">
				<img
					src="${await background.getUrlPlaceholder()}"
					alt="Szczęśliwe foczki"
				/>
			</div>
			<div class="page-header__third_layer"></div>
			<h1 class="page-header__header">
				<p>
					${header_primary || ""} <br />
					<span class="header2">${header_secondary || ""}</span>
				</p>
			</h1>
			<div class="page-header__img">
				<img
					src="${await seal_with_a_clock.getUrlPlaceholder()}"
					alt=""
					height="250"
				/>
			</div>
		</div>
	`;
	await Promise.all([
		add_effect(background),
		add_effect(seal_with_a_clock),
		SideEffects.Scss.addFromPath(
			add_effect,
			config,
			resolve(__dirname, "page-header.scss")
		),
		add_effect(new SideEffects.HtmlChunk(html)),
	]);
};

PageHeader.identifier = "page-header";

export default PageHeader;
