import { resolve } from "path";
import { IComponent, SideEffects } from "@sealcode/tempseal";

let Banner: IComponent;

interface IBannerProps {
	text_primary: string;
	text_secondary: string;
	image_config: {
		image_path: string;
		sizes_attr: string;
		alt: string;
		resolutions?: number[];
	};
	header_level: 1 | 2 | 3 | 4 | 5 | 6;
}

Banner = async (
	add_effect,
	config,
	{
		text_primary = "",
		text_secondary = "",
		image_config,
		header_level = 1,
	}: IBannerProps
) => {
	console.log(image_config);
	const responsive_image = await SideEffects.ResponsiveImage(
		add_effect,
		image_config
	);
	const h = header_level;
	await Promise.all([
		SideEffects.Scss.addFromPath(
			add_effect,
			config,
			resolve(__dirname, "banner.scss")
		),
		add_effect(
			new SideEffects.HtmlChunk(/* HTML */ `
				<section class="banner">
					<div class="banner__wrapper">
					<h${h} class="banner__title">
							<div class="banner__text-wrapper">
								<span class="banner__text banner__text--cyan"
									>${text_primary}</span
								>
							</div>
							<div class="banner__text-wrapper">
								<span class="banner__text"
									>${text_secondary}</span
								>
							</div>
					</h${h}>
						<div class="banner__preview-wrapper">
							${responsive_image}
						</div>
					</div>
				</section>
			`)
		),
	]);
};

Banner.identifier = "banner";

export default Banner;
