# React Unsplash

> Ce projet est une application web construite en utilisant React.js et l'API Unsplash qui permet aux utilisateurs de rechercher des photos de haute qualité en fonction de mots-clés. L'application offre une interface conviviale qui permet aux utilisateurs d'entrer facilement leurs requêtes de recherche et de visualiser les résultats dans une disposition en grille. L'API Unsplash fournit un accès à des millions de photos provenant d'une vaste gamme de catégories, notamment la nature, l'architecture, la technologie, et plus encore, assurant que les utilisateurs puissent trouver l'image parfaite pour leurs besoins.

# Comment Exécuter Le Projet

## Déjà installé l'environnement nodejs 

> `Remarque:`Ces instructions supposent que vous avez déjà obtenu une clé API Unsplash. Si ce n'est pas le cas, veuillez créer un compte gratuit sur le site Web Unsplash et obtenir une clé avant de continuer.

- Ouvrez votre terminal préféré et exécutez ces commandes :
  - `git clone https://github.com/khalidhagane/react_unsplash.git`
  - `cd react_unsplash`
  - `npm install`
-   Créez un fichier .env dans le répertoire racine du projet et ajoutez les variables d'environnement suivantes :
  - `REACT_APP_API_KEY=your_unsplash_api_key`
- Remplacez "votre_clé_api_unsplash" par votre véritable clé API Unsplash, que vous pouvez obtenir en créant un compte gratuit sur le site Web Unsplash.
- Retournez au terminal et exécutez

  - `npm start`

## Exécution à l'aide de l'image Docker

-   Assurez-vous que Docker est installé sur votre machine.
-   Récupérez l'image Docker depuis Docker Hub en exécutant :
    - `docker pull khalidhagane/react_unsplash`
-   Ensuite, vous pouvez exécuter l'image en utilisant la commande :
    -   `docker run --name react_unsplash_container -p 3000:3000 khalidhagane/react_unsplash`
-   Ouvrez votre navigateur Web et accédez à http://localhost:3000 pour afficher l'application.
