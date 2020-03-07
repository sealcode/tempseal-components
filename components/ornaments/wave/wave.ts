import { resolve } from "path";
import { IComponent, SideEffects } from "@sealcode/tempseal";

let Wave: IComponent<IWaveProps>;

interface IWaveProps {
	rotated?: boolean;
	flip_horizontally?: boolean;
	negative?: boolean;
	wave_color?: string;
}

Wave = async (
	add_effect,
	config,
	{ rotated, wave_color, flip_horizontally, negative = false }: IWaveProps
) => {
	const html = /* HTML */ `
		<svg
			class="wave ${(rotated && "wave--rotated") ||
				(flip_horizontally && "wave--flip-horizontally") ||
				""} ${negative ? "wave--negative" : ""}"
			viewBox="0 0 1400 160"
			preserveAspectRatio="none"
		>
			<path
				style="${(wave_color && `fill: ${wave_color};`) ||
					""};fill-opacity:1;stroke:none;stroke-width:1.00157475;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
				d="M 0,1e-5 C 347.75032,15.634529 567.58657,57.729383 676.89518,73.033657 786.2038,88.337927 1045.9983,122.75438 1440,120 v 40 l -1440,4e-5 z"
			/>
		</svg>
	`;
	await Promise.all([
		SideEffects.Scss.addFromPath(
			add_effect,
			config,
			resolve(__dirname, "wave.scss")
		),
		add_effect(new SideEffects.HtmlChunk(html)),
	]);
};

Wave.identifier = "wave";

export default Wave;
