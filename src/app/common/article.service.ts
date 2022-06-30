import { Injectable } from "@angular/core";
import { Article } from "./article";

@Injectable({
  providedIn: "root",
})
export class ArticleService {
  articles: Article[];
  articlesDeleted: Article[] = [];

  constructor() {
    this.articles = this.getFromLocalStorage();
  }

  /**
   * Création d'un nouvel article et ajout au tableau
   * @param article Nouvelle article
   */
  createArticle(article: Article) {
    // Ajout de l'article à la liste des articles
    this.articles.push(article);
    // on sauvegarde dans le localStorage
    this.saveInLocalStorage()
  }

  /**
   * Suppression d'un article
   * @param article Article à supprimer
   */
  deleteArticle(article: Article) {
    // Récupération de l'index de l'article à supprimer
    const index = this.articles.findIndex((x) => x.id === article.id);
    // Suppression de l'article du tableau
    this.articles.splice(index, 1);
    // on va ajouter l'article à la liste d'articles supprimés
    this.articlesDeleted.push(article);
    // on sauvegarde dans le localStorage
    this.saveInLocalStorage()
  }

  restoreArticle(article: Article): void {
    // Récupération de l'index de l'article à supprimer
    const index = this.articlesDeleted.findIndex((x) => x.id === article.id);
    // Suppréssion de l'article du tableau
    this.articlesDeleted.splice(index, 1);
    // Ajout de l'article à la liste des articles
    this.articles.push(article);
    // on sauvegarde dans le localStorage
    this.saveInLocalStorage()
  }

  saveInLocalStorage(){
    const articlesStr = JSON.stringify(this.articles)
    localStorage.setItem('articles', articlesStr)
  }

  /**
   * Récupération du tableau d'articles stocké dans le local storage
   */
  getFromLocalStorage(): Article[] {
    // Récupération des artciles en format 'string'
    const stringData = localStorage.getItem("articles");
    // Converstion des données de type 'string' en objet Javascript
    const articles: Article[] = JSON.parse(stringData);

    return articles;
  }
}
