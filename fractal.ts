import * as path from "path";
const fractal = (module.exports = require("@frctl/fractal").create());
const myCustomisedTheme = require("@frctl/mandelbrot")({});

["assets", "styles", "fonts"].forEach(dir =>
	myCustomisedTheme.addStatic(path.resolve(__dirname, `public/${dir}`), dir)
);

import tmpseal from "./tempseal-adapter";

fractal.web.theme(myCustomisedTheme);

fractal.components.engine(tmpseal);
fractal.components.set("ext", ".js");
fractal.docs.engine(tmpseal);

/*
 * Give your project a title.
 */
fractal.set("project.title", "Sealcode Company Www Docs");
fractal.set("project.author", "Sealcode");

/*
 * Tell Fractal where to look for components.
 */
fractal.components.set("path", path.resolve("components"));

/*
 * Tell the Fractal web preview plugin where to look for static assets.
 */
// fractal.docs.set("path", path.resolve("components"));
fractal.web.set("static.path", path.resolve("public"));
