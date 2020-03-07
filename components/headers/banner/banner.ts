import { resolve } from "path";
import { IComponent, SideEffects } from "@sealcode/tempseal";

let Banner: IComponent;

Banner = async (
	add_effect,
	config,
	{ text_primary = "", text_secondary = "", image_config }
) => {
	console.log(image_config);
	const responsive_image = await SideEffects.ResponsiveImage(
		add_effect,
		image_config
	);
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
						<h1 class="banner__title">
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
						</h1>
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
