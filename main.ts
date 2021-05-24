export * from "./components";
import * as Components from "./components";

import { ComponentMap } from "@sealcode/tempseal";

export default new ComponentMap([
	...Object.keys(Components)
		.map(
			(
				key:
					| "CallToActions"
					| "Elements"
					| "Headers"
					| "Items"
					| "Lists"
					| "Navigation"
					| "Ornaments"
					| "Paragraphs"
			) => Object.values(Components[key]).map(e => e.default)
		)
		.reduce((acc, value) => acc.concat(value)),
]);
