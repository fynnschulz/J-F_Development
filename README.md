# J&F Development Website

Eine moderne, professionelle Business-Website für J&F Development, entwickelt mit Next.js, TypeScript und Tailwind CSS.

## 🚀 Features

- **Modern Stack**: Next.js 16 mit App Router, TypeScript und Tailwind CSS
- **Responsive Design**: Optimiert für alle Bildschirmgrößen
- **SEO-Optimiert**: Optimale Suchmaschinenoptimierung
- **Professionelle Seiten**: 
  - Homepage mit Hero Section und Feature-Highlights
  - Über uns - Unternehmensgeschichte und Werte
  - Leistungen - Umfassende Service-Übersicht
  - Kontakt - Kontaktformular und Informationen

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/)
- **Sprache**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Icons**: Heroicons (SVG)
- **Package Manager**: npm

## 📦 Installation

```bash
# Dependencies installieren
npm install
```

## 🏃 Development

```bash
# Development Server starten
npm run dev
```

Öffnen Sie [http://localhost:3000](http://localhost:3000) im Browser.

## 🏗️ Build

```bash
# Production Build erstellen
npm run build

# Production Server starten
npm start
```

## 📁 Projektstruktur

```
jf-website/
├── src/
│   ├── app/              # App Router Pages
│   │   ├── about/        # Über uns Seite
│   │   ├── services/     # Leistungen Seite
│   │   ├── contact/      # Kontakt Seite
│   │   ├── layout.tsx    # Root Layout
│   │   └── page.tsx      # Homepage
│   └── components/       # React Komponenten
│       ├── Navigation.tsx
│       └── Footer.tsx
├── public/               # Statische Assets
└── .github/
    └── copilot-instructions.md
```

## 🎨 Anpassungen

### Farben ändern
Die Hauptfarbe (Blau) kann in den Tailwind-Klassen angepasst werden. Suchen Sie nach `blue-600` und ersetzen Sie es durch Ihre gewünschte Farbe.

### Inhalte anpassen
- **Unternehmensname**: Aktualisieren Sie "J&F Development" in den Komponenten
- **Kontaktdaten**: Passen Sie Email und Telefonnummer in `Footer.tsx` und `contact/page.tsx` an
- **Leistungen**: Bearbeiten Sie die Services in `services/page.tsx`

## 📝 Lizenz

Alle Rechte vorbehalten © 2025 J&F Development
