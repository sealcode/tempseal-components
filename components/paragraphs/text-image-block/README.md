# text-image-block component - przykład użycia

```javascript
await text_image_block({
	title: "Lorem ipsum dolor sit amet ",
	small_title: "Lorem ipsum",
	img_path: "pages-src/components/text-image-block/placeholder.png",
	description:
		"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
	alt: "placeholder",
	img_side: "right",
});
```

### Argumenty

-   **title**: string, tekst znajdujący się w nagłówku,

-   **small_title**: string, tekst znajdujący się pod nagłówkiem

-   **img_path**: string, ścieżka do obrazu, dla którego chcemy wygenerować komponent,

*   **description**: string, opis,

*   **alt**: opis obrazku

*   **img_side**: (opcjonalnie) string, domyślnie ustawiony na right. Jeżeli ustawimy na right to obrazek wyrenderuje się z prawej strony.
