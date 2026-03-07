import { Injectable } from '@angular/core';
import { Categories } from '../interfaces/categories.interface';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  private cat : Categories[] = [
    { "name": "جميع المقالات", "count": 16, "color": "red" , "icon":'fa-solid fa-sun'},
    { "name": "إضاءة", "count": 3, "color": "emerald" , "icon":'fa-solid fa-sun' },
    { "name": "بورتريه", "count": 3, "color": "purple" , "icon":'fa-solid fa-user' },
    { "name": "مناظر طبيعية", "count": 2, "color": "blue" , "icon":'fa-solid fa-mountain-sun' },
    { "name": "تقنيات", "count": 5, "color": "orange" , "icon":'fa-solid fa-sliders' },
    { "name": "معدات", "count": 3, "color": "emerald" , "icon":'fa-solid fa-sun' }
  ];
   selectedCat = this.cat[0];
  getCategory():Categories[]{
    return this.cat;
  }

}
