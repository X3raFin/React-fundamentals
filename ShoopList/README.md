---

## Wyzwanie: Prosta Aplikacja E-commerce z Koszykiem Zakupowym

**Cel:** Stwórz prostą aplikację do przeglądania produktów i dodawania ich do koszyka. Skupimy się na funkcjonalnościach koszyka.

**Czego się nauczysz (główne punkty):**

- **Złożone zarządzanie stanem:** Produkty, koszyk (produkty w koszyku, ich ilość, suma).
- **Wielokomponentowa architektura:** Organizowanie aplikacji w wiele komponentów.
- **Routing (React Router DOM):** Nawigacja między różnymi widokami/stronami.
- **Pobieranie danych (tym razem z lokalnego JSON-a):** Symulowanie API poprzez wczytywanie danych z lokalnego pliku.
- **Interakcje użytkownika:** Dodawanie do koszyka, zmiana ilości, usuwanie z koszyka.
- **Współdzielenie stanu (Context API lub Prop Drilling):** Przekazywanie danych o koszyku do różnych komponentów.

---

### Funkcjonalności do zaimplementowania:

**A. Podstawy:**

1.  **Pobieranie listy produktów (ZMIENIONO NA LOKALNY PLIK JSON\!):**

    - Stwórz plik **`public/products.json`** w swoim projekcie.
    - Wklej do niego kilka przykładowych produktów (każdy z `id`, `nazwą`, `ceną`, `opisem`, `url_obrazka` - obrazki mogą być z https://www.google.com/search?q=Placeholder.com lub z Pixabay/Unsplash).
    - Przy starcie aplikacji (w `useEffect` z pustą tablicą zależności `[]`) pobierz tę listę produktów (`fetch('/products.json')`) i zapisz ją w stanie (np. `allProducts`).

2.  **Struktura komponentów i routing (`react-router-dom`):**

    - Zainstaluj `react-router-dom`: `npm install react-router-dom`.
    - Stwórz co najmniej dwa komponenty/widoki dla stron:
      - **`ProductListPage` (lub `Home`):** Będzie wyświetlać listę wszystkich produktów.
      - **`CartPage`:** Będzie wyświetlać zawartość koszyka.
    - Zaimplementuj podstawową nawigację (np. w komponencie `Navbar` lub `Header`) z linkami do tych stron.

3.  **Wyświetlanie listy produktów (`ProductList` i `ProductCard`):**

    - Komponent `ProductList` (użyty na `ProductListPage`) będzie renderował pobraną tablicę `allProducts`.
    - Dla każdego produktu w tablicy `allProducts` utwórz oddzielny komponent `ProductCard`, który wyświetli szczegóły produktu (nazwę, cenę, obrazek, opis).
    - Na każdej karcie produktu (`ProductCard`) dodaj przycisk **"Dodaj do koszyka"**.

**B. Funkcjonalność Koszyka:**

1.  **Zarządzanie stanem koszyka:**

    - W komponencie nadrzędnym (np. `App.jsx` lub najlepiej w dedykowanym komponencie `CartProvider` jeśli używasz Context API) utwórz stan dla koszyka.
    - Stan koszyka powinien być tablicą obiektów, gdzie każdy obiekt to pozycja w koszyku, zawierająca: `id` produktu, `nazwę`, `cenę` i `ilość`.

2.  **Dodawanie do koszyka:**

    - Kliknięcie "Dodaj do koszyka" na `ProductCard` powinno wywołać funkcję (przekazaną z góry lub z Contextu), która:
      - Jeśli produkt jest już w koszyku, zwiększy jego `ilość`.
      - Jeśli produkt nie jest w koszyku, doda go z `ilością: 1`.
    - **Pamiętaj o niemutowalnych aktualizacjach stanu\!** Zawsze tworzymy nowe tablice/obiekty.

3.  **Wyświetlanie koszyka (`CartPage` i `CartItem`):**

    - `CartPage` będzie renderować zawartość stanu koszyka.
    - Dla każdego produktu w koszyku utwórz komponent `CartItem`, który wyświetli: nazwę produktu, cenę jednostkową, aktualną `ilość` oraz wartość pozycji (`cena * ilość`).
    - Oblicz i wyświetl **całkowitą sumę wartości produktów** w koszyku na `CartPage`.

4.  **Modyfikacja ilości w koszyku (`CartItem`):**

    - Na każdym `CartItem` dodaj przyciski (np. `+` i `-`) do zwiększania i zmniejszania `ilości` danego produktu w koszyku.
    - Zmniejszenie `ilości` do zera powinno automatycznie usunąć produkt z koszyka.

5.  **Usuwanie z koszyka (`CartItem`):**

    - Na każdym `CartItem` dodaj przycisk "Usuń", który całkowicie usunie daną pozycję z koszyka.

6.  **Wskaźnik koszyka w nawigacji (`Navbar`):**

    - W komponencie nawigacyjnym (`Navbar` lub `Header`) wyświetl aktualną liczbę **unikalnych produktów** w koszyku (np. "(3)") lub **całkowitą liczbę sztuk** (np. "(5 sztuk)").

---

To wyzwanie pozwoli Ci skonsolidować wiedzę o podstawach i zanurzyć się w bardziej zaawansowane aspekty zarządzania stanem i architekturą aplikacji React. Powodzenia\!
