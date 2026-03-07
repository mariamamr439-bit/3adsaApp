import { Component } from '@angular/core';
import { CardComponent } from "../card/card.component";
import { blogData } from '../../interfaces/blog-data';
import { BlogData } from '../../services/blog-data';

@Component({
  selector: 'app-home-section4',
  imports: [CardComponent],
  templateUrl: './home-section4.component.html',
  styleUrl: './home-section4.component.css',
})
export class HomeSection4Component {
  posts:blogData[] =[];
  constructor(private blogDataService:BlogData){
  }
  ngOnInit(): void {
    const allPosts =  this.blogDataService.getArticles();
    this.posts = allPosts.filter((p)=> p.id >=4 && p.id < 7);
  }
}
