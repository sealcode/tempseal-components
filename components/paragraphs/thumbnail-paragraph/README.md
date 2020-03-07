# thumnail-paragraph

## Przykład użycia:
```js
await thumbnail_paragraph({
		url: "../../homepage/komp.svg",
		img_side: "left",
		headline: "Problem 01",
		title: "Niewykorzystany potencjał komputerów",
		description:
			"Ludzie są kreatywni, ale mają małą moc obliczeniową. Komputery nie są kreatywne, ale liczą bardzo szybko. Wierzymy, że oprogramowanie powinno dawać użytkownikom swobodę tam, gdzie liczy się intuicja i doświadczenie - a zastępować ich tylko tam, gdzie potrzebna jest moc obliczeniowa, agregacja danych i pamięć trwała.</br></br>Oprogramowanie jest pośrednikiem pomiędzy mocnymi stronami ludzi i komputerów.",
 		sticky: true,
	})
```

## Argumenty

* url: string, ścieżka do obrazka na miniaturce
* img_side: right|left, strona po której występuje miniaturka
* headline: string, treść nagłówka
* title: string, treść tytułu
* description: string, treść opisu
* sticky: boolean, jeśli true, miniaturka podąża razem ze scrollem (position: sticky)
