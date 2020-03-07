import { resolve } from "path";
import { IComponent, SideEffects, embedComponent } from "@sealcode/tempseal";

import wave from "../../ornaments/wave/wave";

let NewsletterForm: IComponent<INewsletterFormProps>;

export interface INewsletterFormProps {
	list_id: string;
}

NewsletterForm = async (add_effect, config, list_id) => {
	const sygnet = await add_effect(
		SideEffects.File.fromPath(resolve(__dirname, "sygnet-mietowy.svg"))
	);
	const html = /* HTML */ `
		${await embedComponent(
			add_effect,
			config,
			{ rotated: false, negative: true },
			wave
		)}
		<section class="newsletter-form">
			<h2 class="newsletter-form__header">
				Zapisz się do naszego newslettera i otrzymuj najciekawsze wieści
				z Sealcode!
				<img
					src="${await sygnet.getUrlPlaceholder()}"
					alt="logo-sealcode"
				/>
			</h2>
			<div class="newsletter-form__newsletter-info">
				Nie obawiaj się spamu, wysyłamy tylko takie wieści, jakie sami
				chcelibyśmy otrzymywać. Raz w miesiącu dowiedz się o nowych
				projektach, technologiach które przykuły naszą uwagę czy
				terminach spotkaniach integracyjnych.
				<em class="newsletter-form__data-disclaimer">
					Adres e-mail będzie przechowywany przez Sealcode sp. z o. o.
					w celu wysyłania aktualności, na czas istnienia listy
					mailingowej lub do momentu wypisania się z niej.
				</em>
			</div>

			<div
				data-mailtrain-subscription-widget
				data-url="https://mailing.sealcode.org/subscription/${list_id}/widget"
			>
				<label for="email">Adres email</label>
			</div>
		</section>
		<script src="https://mailing.sealcode.org/subscription/widget.js"></script>
	`;
	await Promise.all([
		SideEffects.Scss.addFromPath(
			add_effect,
			config,
			resolve(__dirname, "newsletter-form.scss")
		),
		add_effect(new SideEffects.HtmlChunk(html)),
	]);
};

NewsletterForm.identifier = "newsletter-form";

export default NewsletterForm;
