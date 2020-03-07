import { resolve } from "path";
import { IComponent, SideEffects } from "@sealcode/tempseal";

let TextImageBlock: IComponent<ITextImageBlockProps>;

export interface ITextImageBlockProps {
	title: string;
	small_title: string;
	description: string;
	image_path: string;
	img_side: "right" | "left";
	alt: string;
}

TextImageBlock = async (
	add_effect,
	config,
	{ title, small_title, description, image_path, img_side, alt }
) => {
	const responsive_image_params = {
		image_path: image_path,
		resolutions: [1152, 576],
		alt: alt,
		sizes_attr: "100vw",
	};
	const html = /* HTML */ `
		<section class="tib">
			<div class="tib__body tib__body--image-on-${img_side}">
				<article class="tib__body-left">
					<h2>${title}</h2>
					<h3>${small_title}</h3>
					<p>
						${description}
					</p>
				</article>
				<div class="tib__body-right">
					${await SideEffects.ResponsiveImage(
						add_effect,
						responsive_image_params
					)}
				</div>
			</div>
			<hr />
		</section>
	`;
	await Promise.all([
		SideEffects.Scss.addFromPath(
			add_effect,
			config,
			resolve(__dirname, "text-image-block.scss")
		),
		add_effect(new SideEffects.HtmlChunk(html)),
	]);
};

TextImageBlock.identifier = "text-image-block";

export default TextImageBlock;
