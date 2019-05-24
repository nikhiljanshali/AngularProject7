import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../../services/news-api.service'
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  mArticles: Array<any>;
  mSources: Array<any>;

  constructor(private newsapi: NewsApiService, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show();
    setTimeout(() => {
      //load articles
      this.newsapi.initArticles().subscribe(data => this.mArticles = data['articles']);
      this.spinner.hide();
    }, 2000);
    //load news sources
    this.newsapi.initSources().subscribe(data => this.mSources = data['sources']);
  }

  searchArticles(source) {
    this.spinner.show();
    setTimeout(() => {
      this.newsapi.getArticlesByID(source).subscribe(data => this.mArticles = data['articles']);
      this.spinner.hide();
    }, 2000);
  }

}
