# Intégration WhatsApp - ASKY DKM

## 📱 Fonctionnalités WhatsApp ajoutées

L'intégration WhatsApp avec le numéro **+228 71332345** a été implémentée dans plusieurs sections du site :

### 1. **Bouton WhatsApp flottant**
- Position : Fixe en bas à droite de l'écran
- Visible sur toutes les pages
- Message par défaut : "Bonjour, je suis intéressé par vos produits de volaille."
- Icône avec tooltip au survol

### 2. **Section d'accueil (Hero)**
- Bouton "Commander via WhatsApp" à côté du bouton "Voir nos produits"
- Message personnalisé pour la première impression
- Design responsive avec les boutons empilés sur mobile

### 3. **Section Produits**
- Bouton WhatsApp sur chaque carte produit
- Message personnalisé incluant le nom et le prix du produit
- Exemple : "Bonjour ! Je souhaiterais commander : Pintade Local - 7000 FCFA. Pourriez-vous me donner plus d'informations ?"

### 4. **Section Contact**
- Informations WhatsApp avec le numéro +228 71 33 23 45
- Bouton direct "Contacter maintenant"
- Intégré dans les moyens de contact avec icône dédiée

## 🔧 Composant WhatsAppButton

### Fonctionnalités du composant :
- **Props configurables** :
  - `phoneNumber` : Numéro WhatsApp (par défaut +22871332345)
  - `message` : Message pré-rempli personnalisable
  - `className` : Classes CSS supplémentaires
  - `children` : Texte du bouton
  - `variant` : 'floating' ou 'inline'

### Utilisation :
```tsx
// Bouton basique
<WhatsAppButton>Contacter via WhatsApp</WhatsAppButton>

// Bouton avec message personnalisé
<WhatsAppButton 
  message="Message personnalisé"
  className="w-full"
>
  Commander maintenant
</WhatsAppButton>

// Bouton flottant
<WhatsAppButton variant="floating" />
```

## 📱 Comportement WhatsApp

Quand un utilisateur clique sur un bouton WhatsApp :
1. **Sur mobile** : Ouvre directement l'application WhatsApp
2. **Sur desktop** : Ouvre WhatsApp Web dans un nouvel onglet
3. **Message pré-rempli** : Le champ de message contient déjà le texte personnalisé
4. **Numéro formaté** : Le numéro est automatiquement formaté pour WhatsApp (suppression des espaces et caractères spéciaux)

## 🎨 Styles et Design

- **Couleur verte WhatsApp** : `bg-green-500 hover:bg-green-600`
- **Icône Lucide** : `MessageCircle`
- **Transitions fluides** : Effets hover et animations
- **Responsive** : Adaptation mobile/desktop
- **Accessibilité** : Labels aria et navigation clavier

## 📞 Numéro configuré

- **Numéro principal** : +228 71332345
- **Format international** : Automatiquement converti en 22871332345 pour l'URL WhatsApp
- **Affiché dans le contact** : +228 71 33 23 45 (avec espaces pour la lisibilité)

## 🚀 Avantages business

1. **Conversion directe** : Passage immédiat du site à la conversation
2. **Messages contextuels** : Chaque bouton envoie des informations spécifiques
3. **Expérience mobile optimisée** : Native sur smartphone
4. **Réduction des frictions** : Plus simple qu'un formulaire de contact
5. **Suivi des conversations** : Toutes les demandes centralisées sur WhatsApp

## 🔄 Améliorations futures possibles

1. **Analytics** : Suivi des clics sur les boutons WhatsApp
2. **Horaires** : Affichage du statut en ligne/hors ligne
3. **Chatbot** : Réponses automatiques pour les questions fréquentes
4. **Multi-langues** : Messages en plusieurs langues selon la préférence
5. **Catalogue WhatsApp** : Intégration du catalogue produits WhatsApp Business
