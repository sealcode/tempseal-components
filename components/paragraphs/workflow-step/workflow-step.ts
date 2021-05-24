import { resolve } from "path";
import { IComponent, SideEffects, embedComponent } from "@sealcode/tempseal";

import button, { IButtonProps } from "../../elements/button/button";
import photoInLogo from "../../elements/photo-in-logo/photo-in-logo";
import wave from "../../ornaments/wave/wave";

let WorkflowStep: IComponent<IWorkflowStepProps>;

export interface IWorkflowStepProps {
	number: number;
	title: string;
	content: string;
	button_primary: IButtonProps;
	button_secondary: IButtonProps;
	image_path: string;
	upper_color: string;
	lower_color: string;
	photo_direction: "left" | "right";
	flip_wave: boolean;
	alt: string;
	id: string;
}

WorkflowStep = async (
	context,
	{
		number,
		title,
		content,
		button_primary,
		button_secondary,
		image_path,
		upper_color = "#5294a1",
		lower_color = "#488894",
		photo_direction = "right",
		flip_wave,
		id,
		alt,
	}
) => {
	const html = /* HTML */ `
		<section
			class="workflow-step"
			style="background-image: linear-gradient(${upper_color} 70%, ${lower_color} 30%);"
		>
			${id
				? `<div class="workflow-step__anchor-point" id="${id}"></div>`
				: ""}
			<div class="workflow-step__bg">
				${await embedComponent(
					context,
					{
						flip_horizontally: flip_wave,
						rotated: false,
						wave_color: lower_color,
					},
					wave
				)}
			</div>
			<div
				class="workflow-step__container ${number
					? ""
					: "workflow-step__container--no-circle"}"
			>
				${number
					? `
				<div class="workflow-step__upper-line"></div>
				<div class="workflow-step__circle-container">
					<span class="workflow-step__circle">` +
					  number +
					  `</span>
				</div>
				<div class="workflow-step__lower-line"></div>`
					: ""}
				<div class="workflow-step__title">
					<h2>
						${title || ""}
					</h2>
				</div>
				<div class="workflow-step__description">
					${content || ""}
				</div>

				<div class="workflow-step__buttons">
					${await embedComponent(
						context,
						{ ...button_primary, color: "primary" },
						button
					)}
					${button_secondary
						? await embedComponent(
								context,
								{ ...button_secondary, color: "primary" },
								button
						  )
						: ""}
				</div>

				${await embedComponent(
					context,
					{
						direction: photo_direction,
						image_path,
						alt,
					},
					photoInLogo
				)}
			</div>
		</section>
	`;
	await Promise.all([
		SideEffects.Scss.addFromPath(
			context,
			resolve(__dirname, "workflow-step.scss")
		),
		context.add_effect(new SideEffects.HtmlChunk(html)),
	]);
};

WorkflowStep.identifier = "workflow-step";

export default WorkflowStep;
