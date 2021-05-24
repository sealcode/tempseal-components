import { resolve } from "path";
import { IComponent, SideEffects } from "@sealcode/tempseal";

import expand_navbar_script from "./expand-navbar-script";
import { default as prenavbar_cta, IPrenavbarProps } from "./prenavbar-cta";

let Navbar: IComponent<INavbarProps>;

export interface INavbarItem {
	href: string;
	title: string;
}

export interface INavbarProps {
	prenavbar_config?: IPrenavbarProps;
	items: INavbarItem[];
	variant: "primary" | "secondary" | "white";
}

Navbar = async (context, { prenavbar_config, items, variant }) => {
	const html = /* HTML */ `
		${prenavbar_config ? await prenavbar_cta(prenavbar_config) : ""}

		<nav class="navigation no-desierotkify navigation--${variant}">
			<div class="navigation__body">
				<div class="navigation__header">
					<a href="/"> </a>
				</div>

				<input
					class="navigation__hamburger navigation__hamburger--for-keyboard"
					type="checkbox"
					id="hamburger"
				/>
				<input
					class="navigation__hamburger"
					tabindex="-1"
					type="checkbox"
					id="hamburger-cover"
				/>
				<span class="navigation__icon-wrapper"></span>
				<label class="navigation__label"> </label>
				<span class="navigation__caption">Menu</span>

				<ul class="navigation__wrapper" id="wrapper">
					${items
						.map(
							({ href, title }) => /* HTML */ `
								<li class="navigation__item">
									<a href="${href}">
										<span class="navigation__text"
											>${title}</span
										>
									</a>
								</li>
							`
						)
						.join("\n")}
				</ul>
			</div>
			<script type="text/javascript">
				${expand_navbar_script};
			</script>
		</nav>
	`;
	await Promise.all([
		SideEffects.Scss.addFromPath(
			context,
			resolve(__dirname, "navbar.scss")
		),
		context.add_effect(new SideEffects.HtmlChunk(html)),
	]);
};

Navbar.identifier = "navbar";

export default Navbar;
