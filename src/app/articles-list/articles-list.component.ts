import { Component, OnInit } from '@angular/core';
import { Article } from '../common/article';
import { ArticleService } from '../common/article.service';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})
export class ArticlesListComponent implements OnInit {
  // Model de donnée d'un article
  article: Article;
  // Liste des articles disponible
  articles: Article[];

  constructor(private articleService : ArticleService) {}

  ngOnInit() {
    // Récupération des articles à partir du local storage
    this.articles = this.articleService.articles;
    // Initialisation du model de donnée
    this.article = new Article();
  }

 addArticle(){
  this.articleService.createArticle(this.article);
  this.article = new Article()
 }

deleteArticle(article:Article){
  this.articleService.deleteArticle(article);
}
}
