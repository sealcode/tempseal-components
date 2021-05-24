import { resolve } from "path";
import { IComponent, SideEffects, embedComponent } from "@sealcode/tempseal";

import articleListItem, {
	IArticleItemProps,
} from "../../items/article-list-item/article-list-item";

import button, { IButtonProps } from "../../elements/button/button";
import wave from "../../ornaments/wave/wave";

export interface IOrderedBlocksProps {
	list_items: IArticleItemProps[];
	btn_config: IButtonProps;
	btn2_config: IButtonProps;
	header_mode: "above" | "below";
	starting_index: number;
	bg: boolean;
}

let OrderedBlocks: IComponent<IOrderedBlocksProps>;

OrderedBlocks = async (
	context,
	{
		list_items,
		btn_config,
		btn2_config,
		header_mode,
		starting_index = 0,
		bg = true,
	}
) => {
	const html = /* HTML */ `
		<section class="ordered-blocks">
			${bg
				? /* HTML */ `
						<div class="ordered-blocks__bg">
							${await embedComponent(
								context,
								{ rotated: true, wave_color: "#f6f6f6" },
								wave
							)}
						</div>
				  `
				: ""}
			<div class="ordered-blocks__body">
				<ol class="ordered-blocks__article-list">
					${(
						await Promise.all(
							list_items.map((item, index: number) =>
								embedComponent(
									context,
									{
										number: index + starting_index,
										...item,
										header_mode,
									},
									articleListItem
								)
							)
						)
					).join("")}
				</ol>
				<div class="ordered-blocks__buttons">
					${btn_config
						? `<div class="ordered-blocks__button-wrapper">
                     	${await embedComponent(context, btn_config, button)}
				</div>`
						: ""}
					${btn2_config
						? `<div class="ordered-blocks__button-wrapper">
					  ${await embedComponent(context, btn2_config, button)}
					</div>`
						: ""}
				</div>
			</div>
		</section>
	`;
	await Promise.all([
		SideEffects.Scss.addFromPath(
			context,
			resolve(__dirname, "ordered-blocks.scss")
		),
		context.add_effect(new SideEffects.HtmlChunk(html)),
	]);
};

OrderedBlocks.identifier = "ordered-blocks";

export default OrderedBlocks;
