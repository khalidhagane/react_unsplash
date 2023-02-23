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

# Rapport de test technique - Projet de liste de photos avec l'API Unsplash


## Introduction :

>Le projet consistait à créer une application web qui affiche une liste de photos à l'aide de l'API Unsplash. Les utilisateurs devraient être en mesure de rechercher des photos par mot-clé et de voir une grille d'images affichées sur la page. L'application devait être construite avec React.js et stylée à l'aide du framework Tailwind CSS.


## Approche :
>Pour commencer, j'ai décidé d'utiliser les outils recommandés pour la construction de l'application - React.js, Tailwind CSS et l'API Unsplash. J'ai utilisé la bibliothèque Axios pour interroger l'API Unsplash et récupérer les résultats de la recherche en fonction du mot-clé entré par l'utilisateur. J'ai choisi de faire cela car Axios est facile à utiliser et peut être utilisé pour effectuer des requêtes HTTP en utilisant les méthodes GET, POST, PUT et DELETE.


>En utilisant l'API Unsplash, j'ai pu récupérer les informations relatives aux photos, y compris leur URL, leur description, leur auteur, etc. J'ai ensuite utilisé React pour afficher les résultats de la recherche sous forme de grille avec une limite de 20 photos par page. J'ai également utilisé le framework Tailwind CSS pour styliser l'application et rendre l'interface utilisateur attrayante.


>J'ai également mis en place une fonction de pagination pour que les utilisateurs puissent accéder aux résultats de recherche suivants. J'ai utilisé la bibliothèque React Paginate pour gérer la pagination, car elle est facile à intégrer avec React et permet une personnalisation facile de l'apparence de la pagination.


>En somme, j'ai essayé de créer une application web conviviale en utilisant des outils modernes et des bibliothèques populaires pour fournir une expérience utilisateur satisfaisante.


## Défis :

>Les principaux défis que j'ai rencontrés étaient liés à l'intégration de Tailwind CSS dans le projet. Bien que j'ai une bonne expérience de travail avec React.js, j'ai dû apprendre à utiliser cette bibliothèque pour styliser l'application. Cela a pris un peu plus de temps que prévu, mais j'ai finalement réussi à intégrer Tailwind CSS et à créer une interface utilisateur agréable. De plus, j'ai également été confronté à des difficultés en raison de mon projet de formation en cours qui avait un impact sur ma charge de travail. Cela signifiait que j'ai dû gérer mes priorités et trouver du temps supplémentaire pour travailler sur ce projet dans le délai imparti. Malgré ces défis, j'ai été en mesure de mener à bien ce projet en utilisant les outils recommandés et en respectant les exigences énoncées dans les instructions. J'espère que ce rapport vous donnera une meilleure compréhension de ma réflexion et de mon approche du projet.


## Conclusion :

>Je suis satisfait de l'application que j'ai créée et je pense qu'elle répond aux exigences du projet. J'ai utilisé Docker pour fournir une méthode simple et portable pour exécuter l'application. Je suis également compétent en matière de tests unitaires et je suis prêt à fournir des exemples de code pour le prouver. J'espère que ce rapport vous donnera une meilleure compréhension de ma réflexion et de mon approche du projet.