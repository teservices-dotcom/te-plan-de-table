# T&E plan de table — Guide de déploiement

## Ce que vous avez
- `index.html` — Site vitrine
- `login.html` — Connexion / Inscription
- `admin-dashboard.html` — Espace administrateur (organisateur)
- `user-dashboard.html` — Espace invité
- `invite.html` — Page d'inscription via lien d'invitation
- `style.css` — Design commun
- `firebase.js` — Configuration Firebase (à remplir)

---

## ÉTAPE 1 — Créer un projet Firebase (gratuit)

1. Allez sur https://console.firebase.google.com
2. Cliquez sur **"Ajouter un projet"**
3. Nommez-le `te-plan-de-table`
4. Désactivez Google Analytics (pas nécessaire)
5. Cliquez sur **"Créer le projet"**

---

## ÉTAPE 2 — Activer l'Authentification

1. Dans votre projet Firebase, cliquez sur **"Authentication"** (menu gauche)
2. Cliquez sur **"Commencer"**
3. Allez dans l'onglet **"Sign-in method"**
4. Cliquez sur **"Email/Mot de passe"** → activez-le → **Enregistrer**

---

## ÉTAPE 3 — Créer la base de données Firestore

1. Cliquez sur **"Firestore Database"** (menu gauche)
2. Cliquez sur **"Créer une base de données"**
3. Choisissez **"Démarrer en mode test"** (pour commencer)
4. Choisissez la région **"europe-west1"** (Paris)
5. Cliquez sur **"Activer"**

---

## ÉTAPE 4 — Récupérer vos clés Firebase

1. Dans Firebase, cliquez sur l'icône ⚙️ (Paramètres du projet)
2. Faites défiler jusqu'à **"Vos applications"**
3. Cliquez sur **"</>"`** (Web) pour ajouter une app web
4. Nommez-la `te-plan-de-table-web`
5. Copiez le bloc `firebaseConfig` qui apparaît :

```js
const firebaseConfig = {
  apiKey: "AIza...",
  authDomain: "te-plan-de-table.firebaseapp.com",
  projectId: "te-plan-de-table",
  storageBucket: "te-plan-de-table.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123..."
};
```

---

## ÉTAPE 5 — Coller vos clés dans firebase.js

Ouvrez le fichier `firebase.js` et remplacez :

```js
const FIREBASE_CONFIG = {
  apiKey: "VOTRE_API_KEY",           // ← remplacez
  authDomain: "VOTRE_PROJECT...",    // ← remplacez
  projectId: "VOTRE_PROJECT_ID",    // ← remplacez
  storageBucket: "VOTRE_PROJECT...",// ← remplacez
  messagingSenderId: "VOTRE_...",   // ← remplacez
  appId: "VOTRE_APP_ID"             // ← remplacez
};
```

Par les vraies valeurs copiées depuis Firebase.

---

## ÉTAPE 6 — Déployer sur GitHub Pages

1. Allez sur https://github.com → **New repository**
2. Nom : `te-plan-de-table` · Visibilité : **Public** · Cochez **Add README**
3. Cliquez **Create repository**
4. Cliquez **Add file → Upload files**
5. Glissez-déposez **TOUS les fichiers** du dossier
6. Cliquez **Commit changes**
7. Allez dans **Settings → Pages → Branch : main → Save**
8. Votre site est en ligne sur :
   `https://VOTRE-PSEUDO.github.io/te-plan-de-table`

---

## ÉTAPE 7 — Autoriser votre domaine GitHub dans Firebase

1. Dans Firebase → **Authentication → Settings → Domaines autorisés**
2. Ajoutez : `VOTRE-PSEUDO.github.io`
3. Enregistrez

---

## Utilisation

### En tant qu'administrateur
1. Allez sur `login.html`
2. Créez un compte avec le rôle **"Administrateur"**
3. Créez un événement → copiez le lien d'invitation
4. Partagez le lien à vos invités
5. Gérez les tables, placez les invités, exportez le PDF

### En tant qu'invité
1. Cliquez sur le lien d'invitation reçu
2. Remplissez vos informations + menu
3. Accédez à votre espace pour voir votre table

---

## Structure des données Firestore

```
users/
  {userId}/
    name, email, role (admin|user)

events/
  {eventId}/
    name, date, location, tablesCount, tableCapacity
    collectMenus, adminId, guestsCount, placedCount
    guests/
      {guestId}/
        firstname, lastname, email, menu, allergies
        tableId, tableName, confirmed, userId
```
