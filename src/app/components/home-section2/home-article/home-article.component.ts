import { Component,Input } from '@angular/core';
import { blogData } from '../../../interfaces/blog-data';

@Component({
  selector: 'app-home-article',
  imports: [],
  templateUrl: './home-article.component.html',
  styleUrl: './home-article.component.css',
})
export class HomeArticleComponent {
  @Input() post!:blogData;
}
