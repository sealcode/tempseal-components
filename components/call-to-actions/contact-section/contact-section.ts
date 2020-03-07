import { resolve } from "path";
import { embedComponent, IComponent, SideEffects } from "@sealcode/tempseal";
import { default as obfuscate } from "@sealcode/obfuscate-html-attr";

import contact from "../contact/contact";

let ContactSection: IComponent;

ContactSection = async (
	add_effect,
	config,
	{ headline, contact_params, description, email_address }
) => {
	const html = /* HTML */ `
		<section class="contact-section">
			<div class="contact-section__body">
				<div class="contact-section__left-side">
					${headline
						? "<h2 class='contact-section__headline'>" +
						  headline +
						  "</h2>"
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
