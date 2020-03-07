import { SideEffects, SideEffect } from "@sealcode/tempseal";
import { basename, extname } from "path";
import { stat } from "fs";
import * as Sharp from "sharp";
import { promisify } from "util";
const asyncStat = promisify(stat);

export interface IPhotoInLogoProps {
	image_path: string;
	img_color_mode: "normal" | "grayscale";
	direction: "left" | "right";
}

export const loadPhotoInLogo = async (
	add_effect: (effect: SideEffect) => Promise<SideEffect>,
	props: IPhotoInLogoProps
): Promise<string> => {
	const file_info = await asyncStat(props.image_path);
	const file = new SideEffects.File(
		basename(props.image_path) + "in-logo.svg",
		() => render(props),
		[
			props.image_path,
			file_info.mtime,
			props.direction,
			props.img_color_mode,
		]
	);
	await add_effect(file);
	return await file.getUrlPlaceholder();
};

const extension_to_data_path: { [ext: string]: string } = {
	".jpg": "data:image/jpeg",
	".jpeg": "data:image/jpeg",
	".png": "data:image/png",
};

async function render({
	direction,
	image_path,
	img_color_mode,
}: IPhotoInLogoProps) {
	const image_extension = extname(image_path);
	const image_data_path = extension_to_data_path[image_extension];
	if (!image_data_path) {
		throw new Error(`Unknown image extension: ${image_extension}`);
	}

	return /* HTML */ `
		<svg
			xmlns:dc="http://purl.org/dc/elements/1.1/"
			xmlns:cc="http://creativecommons.org/ns#"
			xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
			xmlns:svg="http://www.w3.org/2000/svg"
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			id="svg20"
			version="1.1"
			viewBox="0 0 61.014999 47.285"
		>
			<defs id="defs24">
				<clipPath id="clipPath845" clipPathUnits="userSpaceOnUse">
					<path
						id="path847"
						d="M 23.798828,0 0,23.642578 23.798828,47.285156 30.507812,40.621094 37.216797,47.285156 61.015625,23.642578 37.216797,0 30.507812,6.6640625 Z"
						style="fill:#5294a1;fill-rule:evenodd"
					/>
				</clipPath>
			</defs>
			<image
				clip-path="url(#clipPath845)"
				width="61.138027"
				height="47.285"
				preserveAspectRatio="none"
				style="image-rendering:optimizeQuality"
				xlink:href="${image_data_path};base64,${await getEncodedImageData(
					image_path,
					img_color_mode
				)}"
				id="image21"
				x="-0.059999999"
				y="0"
			/>
			<g
				transform="translate(-0.052,-0.52200015)"
				style="fill:#ffffff;fill-rule:evenodd"
				id="g4627"
			/>
			<g
				transform="translate(-0.052,-0.52200015)"
				style="fill:#ffffff;fill-rule:evenodd"
				id="g4629"
			/>
			${direction === "left"
				? `
				<path
					id="path4"
					d="M 23.79883,47.285 47.59766,23.642422 23.79883,-1.5582259e-4 0,23.642422 Z M 30.51758,40.601406 13.44336,23.638516 30.51758,6.6775782 47.58985,23.638516 Z"
					style="opacity:0.65;fill:#5294a1;fill-rule:evenodd"
				/>
				<path
					d="m 29.201,23.587 8.352,-8.298 8.353,8.298 -8.353,8.297 z"
					id="path8"
					style="opacity:0.65;fill:#8bbac4;fill-rule:evenodd"
				/>`
				: `
				<path
				     id="path4"
				     d="M 37.21683,-1.5582259e-4 13.418,23.642422 37.21683,47.285 61.01566,23.642422 Z M 30.49808,6.6834379 47.5723,23.646328 30.49808,40.607266 13.42581,23.646328 Z"
				     style="opacity:0.65;fill:#5294a1;fill-rule:evenodd" />
				  <path
				     d="m 13.201,23.587 8.352,-8.298 8.353,8.298 -8.353,8.297 z"
				     id="path8"
				     style="opacity:0.65;fill:#8bbac4;fill-rule:evenodd" />`}
			<g
				transform="translate(-0.052,-0.522)"
				id="g12"
				style="fill:#ffffff;fill-rule:evenodd"
			/>
			<g
				transform="translate(-0.052,-0.522)"
				id="g16"
				style="fill:#ffffff;fill-rule:evenodd"
			/>
		</svg>
	`;
}

const photo_size = [662, 512];

async function getEncodedImageData(
	image_path: string,
	img_color_mode: "normal" | "grayscale"
) {
	const image = await Sharp(image_path)
		.resize({
			width: photo_size[0],
			height: photo_size[1],
			fit: Sharp.fit.cover,
		})
		.grayscale(img_color_mode == "grayscale")
		.toBuffer();

	const base64_image_data = image.toString("base64");

	return base64_image_data;
}
