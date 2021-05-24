# Przykład użycia

```javascript
notice_board({
	leftheader: "Lorem ipsum dolor sit amet consectetur adipiscing elit?",
	rightheader:
		"Fusce egestas ante vel justo viverra, sed pulvinar mi gravida!",
	image_path: "pages-src/developers/developers.jpg",
	links: [
		{
			href: "#",
			name: "Telegram",
			icon_path: await asset("./telegram.svg"),
		},
		{ href: "#", name: "Forum", icon_path: await asset("./forum.svg") },
		{ href: "#", name: "IRC", icon_path: await asset("./irc.svg") },
		{ href: "#", name: "Email", icon_path: await asset("./email.svg") },
	],
});
```

### Argumenty

-   **leftheader:** treść wyświetlająca się z lewej strony komponentu podana w stringu

-   **rightheader:** treść wyświetlająca się z prawej strony komponentu podana w stringu

-   **image_path:** ścieżka do zdjęcia, które ma być wyświetlane w tle podana w stringu,

-   **links:** lista obiektów o polach
    -   **href:** link do którego ikona ma prowadzić po kliknięciu podany w stringu,
    -   **name:** tekst wyświetlany obok ikony podany w stringu,
    -   **icon_path:** ścieżka do ikony podana w stringu,
    -   **title:** opcjonalny string, jeżeli go podamy to po najechaniu kursorem na hiperłącze pojawi nam się tytuł jaki tu podamy w przeciwym wypadku nie

- **id**: do obsługi kotwicowych linków