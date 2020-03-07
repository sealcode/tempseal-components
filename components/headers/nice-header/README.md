# nice-header component - przykład użycia

```javascript
await nice_header({
	img_direction: "right",
	img_path: "../../homepage/DSC_5746a.jpg",
	btn_config: {
		color: "white",
		text: "text",
		link: "#",
	},
	header_text: "Dołącz do naszej społeczności developerów!",
	description:
		"Sealcode to coś więcej niż tylko zespół programistów. Staramy się tworzyć otwartą społeczność developerów - zarówno naszych pracowników, jak i&nbsp;entuzjastów technologii open source i&nbsp;osób chcących rozpocząć swoją przygodę z&nbsp;programowaniem. Sam decydujesz, jak bardzo chcesz się zaangażować w nasze działania.",
});
```

### Argumenty

-   **img_direction**: kierunek podany w stringu w jaki obrócony ma być obrazek w logo

-   **img_path**: string, ścieżka do obrazu, dla którego chcemy wygenerować komponent,

*   **dirname**: (opcjonalne) katalog w którym znajduje się zdjęcie - domyslnie jest to folder nice-header w komponentach,

*   **btn_config**: konfiguracja przycisku zgodnie z komponentem `Button`. W przypadku nie podania konfiguracji, przycisk nie zostanie wyświetlony.

*   **header_text**: string,tekst znajdujący się w nagłówku,

*   **description**: string, opis,

*   **shape_outside**: (opcjonalnie) boolean, domyslnie ustawiony na false. Jeżeli nadamy mu true to tekst będzie opływał obrazek,

*   **img_side**: (opcjonalnie) string, domyślnie ustawiony na left. Jeżeli ustawimy na right to obrazek wyrenderuje się z prawej strony.
