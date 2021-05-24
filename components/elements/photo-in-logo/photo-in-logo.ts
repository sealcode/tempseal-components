import { resolve } from "path";
import { IComponent, SideEffects } from "@sealcode/tempseal";

import { loadPhotoInLogo, IPhotoInLogoProps } from "./photo-in-logo-loader";

let PhotoInLogo: IComponent<IPhotoInLogoComponentProps>;

interface IPhotoInLogoComponentProps extends IPhotoInLogoProps {
	alt: string;
}

PhotoInLogo = async (context, props) => {
	const html = /* HTML */ `
		<div class="photo-in-logo">
			<img
				src="${await loadPhotoInLogo(context.add_effect, props)}"
				alt=${props.alt}
				height="300"
			/>
		</div>
	`;
	await Promise.all([
		SideEffects.Scss.addFromPath(
			context,
			resolve(__dirname, "photo-in-logo.scss")
		),
		context.add_effect(new SideEffects.HtmlChunk(html)),
	]);
};

PhotoInLogo.identifier = "photo-in-logo";
export default PhotoInLogo;
