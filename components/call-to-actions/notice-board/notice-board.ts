import { resolve } from "path";
import {
	IComponent,
	SideEffects,
	SideEffect,
	THeaderLevel,
} from "@sealcode/tempseal";

let NoticeBoard: IComponent;

interface IContact {
	title?: string;
	href: string;
	icon_path: string;
	name: string;
	header_level?: THeaderLevel;
}

const renderContact = async (
	add_effect: (effect: SideEffect) => Promise<SideEffect>,
	{ href, name, icon_path, title }: IContact
): Promise<string> => {
	const icon = SideEffects.File.fromPath(icon_path);
	await add_effect(icon);
	return /* HTML */ `
		<div class="notice-board__contact">
			<a
				class="notice-board__contact-icon"
				href="${href}"
				${title ? `title="${title}"` : ""}
			>
				<img
					src="${await icon.getUrlPlaceholder()}"
					alt="${name}"
					height="100"
				/>
				<span>${name}</span>
			</a>
		</div>
	`;
};

NoticeBoard = async (
	context,
	{ leftheader, rightheader, image_path, links, id, header_level }
) => {
	const h = header_level;
	const html = /* HTML */ `
		<section class="nb-root">
			<div class="notice-board">
				${id ? `<div class="notice-board__anchor-point" id="${id}"></div>` : ""}
				<div class="notice-board__background">
					${await SideEffects.ResponsiveImage(context, {
						image_path: image_path,
						alt: "Some alt text",
						resolutions: [800, 1000, 1200, 1500, 2000],
						sizes_attr: "100vw",
					})}
				</div>
				<div class="notice-board__body">
					<div class="notice-board__body-inner">
						<h${h} class="notice-board__header-main">${leftheader}</h${h}>

						<p class="notice-board__header-minor">${rightheader}</p>
						<address class="notice-board__contacts">
							${(
								await Promise.all(
									links.map((link: IContact) =>
										renderContact(context.add_effect, link)
									)
								)
							).join("")}
						</address>
					</div>
				</div>
			</div>
		</section>
	`;
	await Promise.all([
		SideEffects.Scss.addFromPath(
			context,
			resolve(__dirname, "notice-board.scss")
		),
		context.add_effect(new SideEffects.HtmlChunk(html)),
	]);
};

NoticeBoard.identifier = "notice-board";
export default NoticeBoard;
