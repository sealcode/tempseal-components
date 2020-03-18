import { resolve } from "path";
import {
	embedComponent,
	IComponent,
	SideEffects,
	THeaderLevel,
} from "@sealcode/tempseal";
import { default as obfuscate } from "@sealcode/obfuscate-html-attr";

import contact from "../contact/contact";

let ContactSection: IComponent;

export interface IContactSectionProps {
	headline: string;
	contact_params: string;
	description: string;
	email_address: string;
	header_level: THeaderLevel;
}

ContactSection = async (
	add_effect,
	config,
	{ headline, contact_params, description, email_address, header_level }
) => {
	const h = header_level;
	const html = /* HTML */ `
		<section class="contact-section">
			<div class="contact-section__body">
				<div class="contact-section__left-side">
					${headline
						? `<h${h} class='contact-section__headline'>` +
						  headline +
						  `</h${h}>`
						: ""}
					${await embedComponent(
						add_effect,
						config,
						contact_params,
						contact
					)}
				</div>
				<div class="contact-section__right-side">
					${description ? "<p>" + description + "</p>" : ""}
					<div class="contact-section__right-side--mail">
						<span
							class="contact-section__right-side--mail-icon"
						></span>
						<a href="mailto:${obfuscate(email_address)}"
							>${obfuscate(email_address)}</a
						>
					</div>
				</div>
			</div>
		</section>
	`;
	await Promise.all([
		SideEffects.Scss.addFromPath(
			add_effect,
			config,
			resolve(__dirname, "contact-section.scss")
		),
		add_effect(new SideEffects.HtmlChunk(html)),
	]);
};

ContactSection.identifier = "contact-section";

export default ContactSection;
