import { Component } from '@angular/core';
import { BlogBodyComponent } from "../blog-body/blog-body.component";

@Component({
  selector: 'app-blog',
  imports: [BlogBodyComponent],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class Blog {

}
