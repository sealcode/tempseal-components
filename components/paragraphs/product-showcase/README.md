# Product Showcase Component - przykład użycia

```javascript
await product({
	image_path: await asset("./dlaschro.jpg"),
	title: "Dla Schroniska",
	description: `Strona pomagajaca Fundacji Nasze Zoo zbieranie produktów
				dla potrzebujacych zwierzaków w schroniskach w całej
				Polsce. W projekcie odpowiedzialni byliśmy za projekt i
				wykonanie panelu administracyjnego.`,
	more_button_url: "#",
	visit_button_url: "#",
	features: [
		{
			header: "Zakres prac",
			content: "node, back-end, front-end",
		},
		{
			header: "Branża",
			content: "administracja, organizacje pozarządowe",
		},
		{
			header: "Technologie",
			content: "Sealious, Cosealious",
		},
	],
	extra_header_text:
		"Zobacz, jak nasze rozwiązania sprawdzają się w praktyce",
});
```

### Argumenty

-   **image_path:** ścieżka do obrazu podana w stringu,

-   **title:** nagłówek podany w stringu,

-   **description:** opis podany w stringu,

-   **more_button_url:** link do strony do której ma nas przekierować po wciśnięciu przycisku "Zaobacz więcej" podany w stringu,

-   **visit_button_url:** link do strony do której ma nas przekierować po wciśnięciu przycisku "Odwiedź stronę" podany w stringu,

-   **features:** lista obiektów zawierających pola header oraz contetnt które podajemy w stringu,

-   **extra_header_text:** (opcjonalne), jeżeli podamy te pole to w komponencie pojawi się dodatkowy nagłówek na samej górze komponentu w przeciwnym wypadku nic się w tym miejscu nie pojawi

- **variant** - wariant kolorystyczny komponentu, do wyboru `light` lub `dark` (domyślnie `light`)
