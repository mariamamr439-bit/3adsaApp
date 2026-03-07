import { Component , Input} from '@angular/core';
import { blogData } from '../../interfaces/blog-data';
import { RouterLink } from "@angular/router";
@Component({
  selector: 'app-card-list',
  imports: [RouterLink],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css',
})
export class CardListComponent {
  @Input() data!:blogData;
}
