import { Component } from '@angular/core';
import { blogData } from '../../interfaces/blog-data';
import { BlogData } from './../../services/blog-data';
import { HomeArticleComponent } from './home-article/home-article.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-section2',
  imports: [HomeArticleComponent , RouterLink],
  templateUrl: './home-section2.html',
  styleUrl: './home-section2.css',
})
export class HomeSection2 {
  posts:blogData[] =[];
  constructor(private blogDataService:BlogData){

  }
  ngOnInit(): void {
    this.posts =  this.blogDataService.getArticles();
  }
}
