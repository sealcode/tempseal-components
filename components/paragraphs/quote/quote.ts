import { resolve } from "path";
import { IComponent, SideEffects } from "@sealcode/tempseal";

let Quote: IComponent<IQuoteProps>;

export interface IQuoteProps {
	background_color: string;
	paragraph: string;
	author: string;
}

Quote = async (add_effect, config, { background_color, paragraph, author }) => {
	const quote_image = await SideEffects.File.fromPath(
		resolve(__dirname, "quote.svg")
	);
	const html = /* HTML */ `
		<section class="quote" style="background-color: ${background_color}">
			<div class="quote__container">
				<div class="quote__container__paragraph">
					<img
						class="quote__container__paragraph--left"
						src="${await quote_image.getUrlPlaceholder()}"
						alt="left quote"
					/>
					<p>
						${paragraph}
					</p>
					<img
						class="quote__container__paragraph--right"
						src="${await quote_image.getUrlPlaceholder()}"
						alt="right quote"
					/>
				</div>
				<div class="quote__container--autor">
					<p>${author}</p>
				</div>
			</div>
		</section>
	`;
	await Promise.all([
		add_effect(quote_image),
		SideEffects.Scss.addFromPath(
			add_effect,
			config,
			resolve(__dirname, "quote.scss")
		),
		add_effect(new SideEffects.HtmlChunk(html)),
	]);
};

Quote.identifier = "quote";

export default Quote;
