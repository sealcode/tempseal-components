# team component

Komponent generujący informacje o zespole na podstawie listy osób i tytułu.

### Przykład użycia:

```javascript
team({ title, members });
```

### Argumenty:

-   **title**: `string` - nagłówek.
-   **members**: `Array` - tablica zawierająca członków zespołu, którzy posiadają odpowiednie atrybuty.

#### Atrybuty osób:

-   **image_path**: `string` - ścieżka do zdjęcia
-   **name**: `string` - imię i nazwisko osoby
-   **role**: `string` - rola osoby w zespole
-   **area_of_expertise**: `string` - specjalność
-   **key_skill**: `string` - główna umiejętność
-   **opinion**: `string` - opinia
-   **proud_of**: `string` - dumny z
-   **heard_saying**: `string` - powiedzenie
-   **email**: `string` - email
-   **telephone**: `string` - telefon
-   **facebook**: `string` - link do facebook'a
-   **linkedin**: `string` - link do linkedin
-   **gender**: `string` - płeć
