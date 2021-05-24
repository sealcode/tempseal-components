# wave component

Komponent zawierający przerywnik na strone w postaci fali.

### Przykład użycia

```javascript
wave({ rotated, color, negative });
```
### Argumenty

-    **rotated** bool - odwrócona fala będzie biegła z prawej do lewej a jej podstawa znajdzie się u góry, domyślnie 'false'
-    **color** string - kolor fali, domyślnie '#6c4478'

-    **negative** boolean - jeżeli ustawione na true, to fala ma ustawiony ujemny górny margines równy dokładnie swojej wysokości, dzięki czemu przykleja się do dolnej krawędzi komponentu który go poprzedza
