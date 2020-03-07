# workflow-step component

Komponent tworzący gotowy segment podstrony `products`

### Przykład użycia:

```javascript
workflow_step({
	number,
	title,
	content,
	button_primary,
	button_secondary,
	dirName,
	image,
	upper_color,
	lower_color,
	photo_direction,
	flip_wave,
	id,
});
```

### Argumenty:

-   **number:** string - wartość, która znajdzie się w okręgu - w wypadku braku wartości dla argumentu okręg i pionowe linie są wyłączone
-   **title:** string - tekst znajdujący się w nagłówku
-   **content:** string - **umieszczony w znacznikach** tekst wyświetlający się pod nagłówkiem
-   **button_primary:** obiekt - zawiera właściwości pierwszego przycisku (komponentu button)
-   **button_secondary:** obiekt - zawiera właściwości drugiego przycisku (komponentu button)
-   **dirName** string - ścieżka do folderu zawierającego zdjęcie, domyślnie: `__dirname`
-   **image:** string - nazwa zdjęcia
-   **upper_color:** string - kod html koloru tła powyżej fali - domyślnie darker-cyan (#5294a1)
-   **lower_color:** string - kod html koloru tła poniżej fali - domyślnie #488894
-   **photo_direction:** string (left / right) - kierunek zdjęcia - domyślnie right
-   **flip_wave:** bool - zmiana poziomego kierunku fali - domyślnie false
-   **id:** string - dodany jako ID w wyrenderowanym HTMLu, aby można było kotwicować do konkretnego stepu

#### Właściwości obiektu button:

-   **text:** string - wartość wyświetlana w przycisku
-   **link:** string - link strony do której odsyła przycisk
