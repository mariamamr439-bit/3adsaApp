import { Component,Input } from '@angular/core';
import { blogData } from '../../../interfaces/blog-data';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-article',
  imports: [RouterLink],
  templateUrl: './home-article.component.html',
  styleUrl: './home-article.component.css',
})
export class HomeArticleComponent {
  @Input() post!:blogData;
}
