import { resolve } from "path";
import { default as obfuscate } from "@sealcode/obfuscate-html-attr";
import { IComponent, SideEffects } from "@sealcode/tempseal";

let Footer: IComponent;

Footer = async (add_effect, config, { contact_text }) => {
	if (contact_text === undefined) {
		throw new Error("component footer - contact_text not provided");
	}
	const html = /* HTML */ `
		<footer class="footer">
			<a class="footer__box" href="/contact-us">
				<p class="footer__box__title">${contact_text}</p>
			</a>
			<div class="footer__contact">
				<address class="footer__contact__contact-data">
					<a
						class="mail"
						href="mailto:${obfuscate("office@evolver.team")}"
					>
						${obfuscate("office@evolver.team")}
					</a>
					<a
						class="phone-number"
						href="tel:${obfuscate("+48 602 290 840")}"
					>
						${obfuscate("+48 602 290 840")}
					</a>
					<a href="privacy-policy">Privacy Policy</a>
				</address>
			</div>
		</footer>
	`;
	await Promise.all([
		SideEffects.Scss.addFromPath(
			add_effect,
			config,
			resolve(__dirname, "footer.scss")
		),
		add_effect(new SideEffects.HtmlChunk(html)),
	]);
};

Footer.identifier = "footer";
export default Footer;
