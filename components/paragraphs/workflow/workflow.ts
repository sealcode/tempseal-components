import { resolve } from "path";
import { IComponent, SideEffects } from "@sealcode/tempseal";

let Workflow: IComponent<IWorkflowProps>;

export interface IWorkflowProps {
	image_path: string;
	image_alt: string;
	title: string;
	texts: string[];
}

Workflow = async (
	add_effect,
	config,
	{ image_path, image_alt, title, texts }
) => {
	const html = /* HTML */ `
		<div class="workflow">
			<div class="workflow__inner-wraper">
				<div class="workflow__image">
					${await SideEffects.ResponsiveImage(add_effect, {
						image_path: image_path,
						resolutions: [1000, 750, 500, 400],
						sizes_attr: "(max-width: 1000px) 100vw, 1000px",
						alt: image_alt || "",
					})}
				</div>
				<div class="workflow__text">
					<h2>${title || ""}</h2>
					${texts
						.map(
							text => /* HTML */ `
								<p>${text}</p>
							`
						)
						.join("")}
				</div>
			</div>
		</div>
	`;
	await Promise.all([
		SideEffects.Scss.addFromPath(
			add_effect,
			config,
			resolve(__dirname, "workflow.scss")
		),
		add_effect(new SideEffects.HtmlChunk(html)),
	]);
};

Workflow.identifier = "workflow";

export default Workflow;
