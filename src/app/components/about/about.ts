import { BlogData } from './../../services/blog-data';
import { Component, OnInit } from '@angular/core';
import { blogData } from '../../interfaces/blog-data';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-about',
  imports: [RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About implements OnInit{
  posts:blogData[]=[];
  constructor(private blogDataService:BlogData){}
  ngOnInit(): void {
    this.posts=this.blogDataService.getArticles();
  }

}
