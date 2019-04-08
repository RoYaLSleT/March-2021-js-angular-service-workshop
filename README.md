# Angular-Services

Dans cet atelier, nous allons utiliser comme exemple une application de gestion d'article.
L'application affiche un tableau d'article où vous pouvez ajouter et supprimer des articles.
Un autre tableau affiche les articles supprimés où vous avez la possibilité de restaurer un article supprimé.

L'application est composée de trois components :
* `ArticleListComponent` : tableau pour l'affichage des articles disponibles
* `ArticleListDeletedComponent` : tableau pour l'affichage des articles supprimés
* `NavbarComponent` : barre de menu pour la navigation entre les components `ArticleListComponent` et `ArticleListDeletedComponent`

## Prérequis

* Cloner le repository
* `npm install` a la racine du projet

## Partie 1

**On ne tient pas compte du component `ArticleListDeletedComponent` dans cette première partie**

Actuellement le component `ArticleListComponent` manipule un tableau d'article en ajoutant, supprimant des articles.
Il est préférable de déporter toute manipulation de tableau, de localStorage etc dans un `Service`.

* Créer un service nommé `ArticleService` dans le répertoire `common`.
* Injecter le service `ArticleService` dans le component `ArticleListComponent`.
* Déporter toute la logique de gestion des articles dans `ArticleService`
* Refactoré `ArticleListComponent` afin qu'il n'y ait plus aucun `push`, `slice`, `findIndex`, `localStorage`, `JSON` etc dans ce component.
* La manipulation d'article (`push`, `slice` ...) dans le component `ArticleListComponent` doit uniquement se faire à travers le service `ArticleService`

## Partie 2

Le component `ArticleListDeletedComponent` n'est pas opérationnel, aucun article supprimé n'est affiché dans le tableau donc il nous est impossible de restaurer un article supprimé par erreur.

* Injecter le service `ArticleService` dans le component `ArticleListDeletedComponent`.
* codé la **récupération** des articles supprimés
* codé la **restauration** des articles supprimés

**Attention il a peut être d'autres choses à corriger dans le component `ArticleListComponent` et `ArticleListDeletedComponent` ;)**

## Keep Calm and Carry On !
