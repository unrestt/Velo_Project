# 🚀 Velo Project - Modern Chat Application

![Velo Logo Placeholder](readme_images/velo_logo.png)

Velo to nowoczesna, w pełni responsywna aplikacja do komunikacji w czasie rzeczywistym (real-time feel), zbudowana przy użyciu najnowocześniejszych technologii ekosystemu React. Projekt skupia się na wysokiej jakości UI/UX, wydajności oraz modularnej architekturze.

---

## ✨ Kluczowe Funkcjonalności

- **🔐 Autoryzacja i Profil**: Kompletny system logowania i rejestracji z walidacją oraz zarządzaniem sesją.
- **💬 Real-time Chat**: Intuicyjny interfejs wiadomości z podziałem na bąbelki (Twoje vs Innych).
- **😊 Obsługa Emotek**: Zintegrowany picker emotek (`emoji-picker-react`) z obsługą motywów.
- **🌓 Globalny Dark Mode**: Inteligentne przełączanie motywów (Light/Dark) z pamięcią w stanie aplikacji.
- **⚙️ Zaawansowane Ustawienia**: Możliwość zmiany nicku, hasła oraz dynamicznej aktualizacji awatara.
- **📱 Responsywny Design**: Perfekcyjny wygląd na każdym urządzeniu (Desktop, Tablet, Mobile).

---

## 🏗️ Architektura Systemu

Aplikacja została zaprojektowana zgodnie z zasadami **Feature-Sliced Design (Lite)**, co gwarantuje łatwą skalowalność i separację logiki biznesowej.

### Struktura Projektu:
- **`src/features/`**: Serce aplikacji. Każdy moduł (auth, chat, settings, users) zawiera własne api, komponenty, hooki i slice'y Reduxa.
- **`src/store/`**: Globalny magazyn stanu (Redux Toolkit) agregujący slice'y z poszczególnych feature'ów.
- **`src/layouts/`**: Definicje głównych szkieletów strony (np. `MainLayout` z paska bocznego).
- **`src/global-api/`**: Skonfigurowana instancja Axios z bazowym URL i interceptorami.

---

## 💻 Tech Stack

### Frontend:
| Technologia | Opis |
| :--- | :--- |
| **React 19** | Najnowsza biblioteka UI z obsługą Concurrent Rendering. |
| **Vite** | Next-generation frontend tooling dla błyskawicznego dev-servera. |
| **Tailwind CSS 4** | Ultra-wydajny silnik stylizacji z natywnym wsparciem dla zmiennych CSS. |
| **Redux Toolkit** | Przewidywalne zarządzanie stanem globalnym (Auth, Theme, Chat). |
| **TanStack Query (v5)** | Zarządzanie async-state, cache'owaniem i pobieraniem danych z API. |
| **React Router 7** | Deklaratywny routing z obsługą ścieżek chronionych. |

### Backend (Mock):
- **JSON Server**: Pełne REST API symulowane w oparciu o plik `db.json`.

---

## 📸 Zrzuty Ekranutu

> [!TIP]
> Poniżej znajdują się miejsca na zrzuty ekranu prezentujące kluczowe widoki aplikacji.

#### 1. Panel Logowania
![Dashboard Image Placeholder]

#### 2. Główny Interfejs Chatu (Dark Mode)
![Chat Dark Mode Placeholder]

#### 3. Ustawienia Profilu
![Settings Placeholder]

---

## 🛠️ Instalacja i Uruchomienie

### Wymagania:
- Node.js (wersja 18+)
- npm / yarn

### Pierwsze Kroki:

1. **Repozytorium:**
   ```bash
   git clone [url-repozytorium]
   cd Velo_Project
   ```

2. **Backend (JSON Server):**
   ```bash
   cd backend
   npm install
   npx json-server db.json --port 3001
   ```

3. **Frontend:**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

Aplikacja będzie dostępna pod adresem: `http://localhost:5173`

---

## 🚀 Plan Rozwoju (Roadmap)

- [ ] Obsługa przesyłania zdjęć i załączników.
- [ ] Statusy online/offline użytkowników.
- [ ] Powiadomienia push w przeglądarce.
- [ ] Implementacja WebSockets (Socket.io) dla prawdziwego czasu rzeczywistego.

---

Developed by Bartosz Kutnik
