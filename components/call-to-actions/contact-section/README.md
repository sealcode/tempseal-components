# contact-section component - przykład użycia

```javascript
await contact_section({
	headline,
	contact_params,
	description,
	email_address,
});
```

### Argumenty

-   **headline**: string, nagłówek sekcji,

-   **contact_params**: obiekt, właściwości komponentu contact,

*   **description**: string, opis,

*   **email_address**: string, adres mailowy do którego odsyła link

#### Właściwości obiektu w contact_params:

-   **name:** string, nazwa instytucji,
-   **address:** string, adres,
-   **post_code:** string, kod pocztowy,
-   **city:** string, miasto,
-   **email:** string, adres email,
-   **phone_number:** string, numer telefonu
