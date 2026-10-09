# Yanis Touloum — Portfolio professionnel

Portfolio présentant le parcours, les expériences et les compétences de Yanis Touloum dans la finance et l’audit. Ce dépôt porte le site d’un tiers, distinct du portfolio personnel du propriétaire du compte GitHub.

## Fonctionnalités

- Présentation du parcours académique, des missions et des compétences.
- Sections consacrées à la vision professionnelle et aux valeurs.
- Téléchargement du CV et accès aux coordonnées de contact.
- Traductions et sélecteur de langue.
- Animations, navigation entre sections et métadonnées de partage.

## Technologies

React 18 · TypeScript · Vite · Tailwind CSS · shadcn/ui · Framer Motion · React Router · i18next.

## Installation

```bash
git clone https://github.com/RayaneTks/portfolio-yanistouloum.git
cd portfolio-yanistouloum
npm ci
npm run dev
```

Utiliser l’URL indiquée par Vite dans le terminal.

## Commandes

```bash
npm run lint     # Vérifier le code
npm run build    # Compiler le site
npm run preview  # Prévisualiser la version compilée
```

## Organisation

| Chemin | Rôle |
|---|---|
| `src/components/` | Sections du portfolio et composants d’interface. |
| `src/pages/` | Pages et navigation. |
| `src/i18n/` | Configuration et fichiers de traduction. |
| `public/` | Photographies, logos, CV et fichiers de référencement. |

## Documentation

Les textes et traductions sont regroupés dans [`src/i18n/locales/`](src/i18n/locales/). Vérifier leur cohérence lors de toute modification éditoriale.
