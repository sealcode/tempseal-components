import { resolve } from "path";
import { IComponent, SideEffects } from "@sealcode/tempseal";

import { loadPhotoInLogo, IPhotoInLogoProps } from "./photo-in-logo-loader";

let PhotoInLogo: IComponent<IPhotoInLogoComponentProps>;

interface IPhotoInLogoComponentProps extends IPhotoInLogoProps {
	alt: string;
}

PhotoInLogo = async (add_effect, config, props) => {
	const html = /* HTML */ `
		<div class="photo-in-logo">
			<img
				src="${await loadPhotoInLogo(add_effect, props)}"
				alt=${props.alt}
				height="300"
			/>
		</div>
	`;
	await Promise.all([
		SideEffects.Scss.addFromPath(
			add_effect,
			config,
			resolve(__dirname, "photo-in-logo.scss")
		),
		add_effect(new SideEffects.HtmlChunk(html)),
	]);
};

PhotoInLogo.identifier = "photo-in-logo";
export default PhotoInLogo;
