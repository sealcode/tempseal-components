import { resolve } from "path";
import { IComponent, SideEffects } from "@sealcode/tempseal";

let Quote: IComponent<IQuoteProps>;

export interface IQuoteProps {
	background_color: string;
	paragraph: string;
	author: string;
}

Quote = async (context, { background_color, paragraph, author }) => {
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
		context.add_effect(quote_image),
		SideEffects.Scss.addFromPath(context, resolve(__dirname, "quote.scss")),
		context.add_effect(new SideEffects.HtmlChunk(html)),
	]);
};

Quote.identifier = "quote";

export default Quote;
