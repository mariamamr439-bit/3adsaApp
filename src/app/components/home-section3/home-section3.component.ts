import { Component } from '@angular/core';
import { blogData } from '../../interfaces/blog-data';
import { BlogData } from './../../services/blog-data';
import { Cardsec3Component } from './cardsec3/cardsec3.component';
import { Categories } from '../../interfaces/categories.interface';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-home-section3',
  imports: [Cardsec3Component],
  templateUrl: './home-section3.component.html',
  styleUrl: './home-section3.component.css',
})
export class HomeSection3Component {
  // posts:blogData[] =[];
  //   constructor(private blogDataService:BlogData){
  
  //   }
  //   ngOnInit(): void {
  //     this.posts =  this.blogDataService.getArticles();
  //   }
  allcategories:Categories[] =[];
  constructor(private categoriesService:CategoriesService){

  }
  ngOnInit(): void {
    this.allcategories = this.categoriesService.getCategory();
  }
}

