### Przykład użycia

```javascript
const content = {
	header: "Ludzie +<br />Komputery",
	description: `Jesteśmy zespołem, który specjalizuje się w&nbsp;tworzeniu aplikacji internetowych wspomagających pracę zespołu. Jesteśmy fanami wolnego i&nbsp;otwartego oprogramowania i&nbsp;etycznego podejścia do procesu i&nbsp;rezultatów naszej pracy.`,
};

await little_header(content);
```

### Argumenty

-   **header:** string, nagłówek wyświtlany z lewej strony komponentu,
-   **description:** string, opis wyświetlany z prawej strony komponentu
