import { Component, Input } from '@angular/core';
import { Categories } from '../../../interfaces/categories.interface';

@Component({
  selector: 'app-cardsec3',
  imports: [],
  templateUrl: './cardsec3.component.html',
  styleUrl: './cardsec3.component.css',
})
export class Cardsec3Component {
//  @Input() post!:blogData;
  @Input() category!: Categories;
}
