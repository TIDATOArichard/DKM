# ASKY DKM - Site Vitrine

## 📑 Description

ASKY DKM est un site vitrine pour une ferme d'élevage de volailles traditionnelle, fondée en 1985. Ce site one-page présente les produits, la philosophie d'élevage naturel, et permet aux visiteurs de découvrir l'exploitation agricole familiale.

## 🚀 Technologies utilisées

- **Next.js 15** - Framework React avec rendu côté serveur
- **React** - Bibliothèque UI
- **Tailwind CSS** - Framework CSS utilitaire
- **DaisyUI** - Composants UI pour Tailwind
- **Lucide React** - Icônes modernes

## 🛠️ Installation et démarrage

1. **Cloner le dépôt**
   ```bash
   git clone https://github.com/votre-nom/asky_dkm.git
   cd asky_dkm
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Démarrer le serveur de développement**
   ```bash
   npm run dev
   ```
   Le site sera disponible sur [http://localhost:3000](http://localhost:3000)

4. **Construire pour la production**
   ```bash
   npm run build
   npm start
   ```

## 📂 Structure du projet

```
asky_dkm/
├── app/
│   ├── components/
│   │   ├── ContactSection.tsx    # Section de contact
│   │   ├── FaqSection.tsx        # Section FAQ
│   │   ├── FarmSection.tsx       # Section sur la ferme
│   │   ├── FooterSection.tsx     # Pied de page
│   │   ├── HomeSection.tsx       # Section d'accueil
│   │   ├── NavbarSection.tsx     # Navigation
│   │   ├── ProductButton.tsx     # Bouton client pour la navigation
│   │   └── ProductSection.tsx    # Section des produits
│   ├── globals.css               # Styles globaux
│   └── page.tsx                  # Page principale
├── public/
│   └── images/                   # Images du site
├── tailwind.config.js           # Configuration Tailwind
└── README.md                     # Ce fichier
```

## 🧭 Navigation

Le site utilise une navigation par défilement (smooth scrolling) avec des liens d'ancrage. Chaque section possède un ID unique qui permet la navigation directe:

- `#accueil` - Section d'accueil
- `#produits` - Catalogue de produits
- `#ferme` - Présentation de la ferme
- `#faq` - Questions fréquentes
- `#contact` - Formulaire de contact

## ✨ Fonctionnalités

- Design responsive adapté à tous les appareils
- Navigation fluide entre les sections
- Optimisation des images avec Next.js Image
- Sections modulaires facilement modifiables
- Interface utilisateur intuitive avec DaisyUI
- Architecture orientée composants

## 🔄 Déploiement

Le site peut être déployé sur diverses plateformes compatibles avec Next.js:

- Vercel (recommandé)


## 📝 Licence

Ce projet est sous licence MIT.

---

