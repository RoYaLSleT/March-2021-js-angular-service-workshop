import { Component, OnInit } from '@angular/core';
import { Article } from '../common/article';
import { ArticleService } from '../common/article.service';

@Component({
  selector: 'app-articles-list-deleted',
  templateUrl: './articles-list-deleted.component.html',
  styleUrls: ['./articles-list-deleted.component.css']
})
export class ArticlesListDeletedComponent implements OnInit {
  // Liste des articles non disponible
  articlesDeleted: Article[];

  constructor(private articleService : ArticleService) { }

  ngOnInit() {
    // TODO récupération des articles non disponible à partir d'un service
    this.articlesDeleted = this.articleService.articlesDeleted
  }

  /**
   * Restaure un article supprimé
   */
  restore(article: Article) {
    // TODO restauration de l'article à partir d'un service
    this.articleService.restoreArticle(article)
  }
}
