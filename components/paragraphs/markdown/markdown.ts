import { resolve } from "path";
import { IComponent, SideEffects } from "@sealcode/tempseal";
import * as _md from "markdown-it";
const md_anchor = require("markdown-it-anchor");

let Markdown: IComponent<IMarkdownProps>;

export interface IMarkdownProps {
	content: string;
}

Markdown = async (context, { content }) => {
	const md = _md({
		html: true,
		linkify: true,
		typographer: true,
		quotes: context.language == "pl" ? "„”«»" : "“”‘’",
	}).use(md_anchor);
	const html_content = md.render(content, { header_level: 2 }); // header_level so far not used, will be used in the future. Headers should in future be rendered by the Headings Fregment
	const html = /* HTML */ ` <section class="md">${html_content}</section> `;
	await Promise.all([
		SideEffects.Scss.addFromPath(
			context,
			resolve(__dirname, "markdown.scss")
		),
		context.add_effect(new SideEffects.HtmlChunk(html)),
	]);
};

Markdown.identifier = "markdown";

export default Markdown;
