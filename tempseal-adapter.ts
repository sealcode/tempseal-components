import * as path from "path";
const Adapter = require("@frctl/fractal").Adapter;
import { ComponentMap } from "@sealcode/tempseal";
import { emitEffects } from "@sealcode/tempseal/compile-pipeline";
import {
	combineHtml,
	write,
	replaceUrlPlaceholders,
	downloadFonts,
} from "@sealcode/tempseal/compile-pipeline/operators";

class TempsealAdapter extends Adapter {
	constructor(source: any, app: any) {
		super({}, source);
		this._app = app;
	}

	async render(
		input_file_path: string,
		_str: string,
		context: any,
		_meta: any
	) {
		if (Array.isArray(context)) {
			if (context[context.length - 1] === null) {
				context = context.slice(0, context.length - 1);
			}
		}
		for (let module_path of [
			input_file_path,
			require.resolve("./config.js"),
		]) {
			if (require.cache[module_path]) delete require.cache[module_path];
		}

		const { config } = require("./config.js");
		try {
			const start = Date.now();
			if (!input_file_path) {
				return "";
			}
			const component = require(input_file_path).default;
			const output_path = path.resolve(__dirname, "public");
			let resolve_html_body: Function;
			let resolve_write: Function;
			let reject: Function;
			const promises = [
				new Promise(resolve => {
					resolve_html_body = resolve;
				}),
				new Promise((resolve, _reject) => {
					resolve_write = resolve;
					reject = _reject;
				}),
			];

			emitEffects(new ComponentMap([component]), config, [
				{
					component_name: component.identifier,
					props: context,
				},
			])
				.pipe(
					replaceUrlPlaceholders("/"),
					downloadFonts(output_path),

					combineHtml(content => resolve_html_body(content)),
					write(output_path)
				)
				.subscribe(
					e => console.log(e.file_name),
					er =>
						reject(
							`Error: <code><pre>${
								er.formatted ? er.formatted : er
							}\n${er.stack?.replace(/</g, "&lt;")}</pre></code>`
						),
					() => {
						console.log("RESOLVING WRITE");
						resolve_write();
					}
				);
			const [html_body] = await Promise.all(promises);
			console.log(`Done in ${Date.now() - start}ms`);
			return html_body;
		} catch (e) {
			console.error(e);
			throw e;
		}
	}
}

export default {
	register: (source: any, app: any) => new TempsealAdapter(source, app),
};
