# feature-tiles component

Komponent generujący kafelki zależnie od podanych w tablicy obiektów.

### Przykład użycia:

```javascript
feature_tiles({ tiles });
```

### Argumenty:

- **tiles**: `Array` - tablica zawierająca obiekty, które określają poszczególne kafelki.

#### Własności obiektu:

- **imagePath**: `string` - ścieżka do obrazu
- **imageAlt**: `string` - wartość atrybutu `alt` zdjęcia
- **header**: `string` - wartość znajdująca się w nagłówku kafelka
- **content**: `string` - opis kafelka