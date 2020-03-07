import { resolve } from "path";

import { default as obfuscate } from "@sealcode/obfuscate-html-attr";
import { IComponent, SideEffects } from "@sealcode/tempseal";

interface IContactProps {
	name: string;
	address: string;
	post_code: string;
	city: string;
	phone_number: string;
	email: string;
}

let Contact: IComponent;

Contact = async (
	add_effect,
	config,
	{ name, address, post_code, city, phone_number, email }: IContactProps
) => {
	const html = /* HTML */ `
		<address class="contact">
			<span class="contact__icon contact__icon--location-icon"></span>
			<address>
				${city}
				<strong>${name}</strong> <br />
				${address || ""} <br />
				${post_code ? post_code + "," : ""} ${city}
			</address>
			<span class="contact__icon contact__icon--mail-icon"></span>
			<a href="mailto:${obfuscate(email)}">${obfuscate(email)}</a>
			<span class="contact__icon contact__icon--phone-icon"></span>
			<a href="tel:${obfuscate(phone_number)}"
				>${obfuscate(phone_number)}</a
			>
		</address>
	`;
	await Promise.all([
		SideEffects.Scss.addFromPath(
			add_effect,
			config,
			resolve(__dirname, "contact.scss")
		),
		add_effect(new SideEffects.HtmlChunk(html)),
	]);
};
Contact.identifier = "contact";

export default Contact;
