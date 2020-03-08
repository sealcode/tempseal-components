export interface IPrenavbarProps {
	content: string;
	cta: string;
	href: string;
}

export default async ({ content, cta, href }: IPrenavbarProps) => /* HTML */ `
	<aside id="dev-preheader" class="preheader-cta">
		<p class="preheader-cta__content">
			${content || ""}
		</p>
		<div class="preheader-cta__btn">
			<a href="${href || ""}" class="preheader-cta__link">${cta || ""}</a>
		</div>
		<button
			title="Close preheader"
			role="button"
			class="cross"
			onclick="close_preheader()"
		>
			<div class="cross__stick cross__stick--left"></div>
			<div class="cross__stick cross__stick--right"></div>
		</button>
	</aside>
	<script class="no-desierotkify">
		var msg = "clicked-" + "${content}";
		var preheader = document.querySelector(".preheader-cta");

		function close_preheader() {
			localStorage.setItem(msg, true);
			preheader.classList.add("preheader-cta--hidden");
		}

		if (localStorage.getItem(msg)) close_preheader();
	</script>
`;
