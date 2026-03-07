import { BlogData } from './../../services/blog-data';
import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { blogData } from '../../interfaces/blog-data';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog-details',
  imports: [RouterLink],
  templateUrl: './blog-details.component.html',
  styleUrl: './blog-details.component.css',
})
export class BlogDetailsComponent implements OnInit{
  post?: blogData;
  posts: blogData[] = [];
  constructor(private blogDataService:BlogData , private route : ActivatedRoute){};
  ngOnInit(): void {
      const slug = this.route.snapshot.paramMap.get('id');
      const foundPost = this.blogDataService.getArticles().find((p) => p.slug === slug);
      if (foundPost) {
        this.post = foundPost;
        this.splitContent(this.post.content)
      }
      this.posts = this.blogDataService.getArticles();
  }
  sections: {id:string, title:string , content: string}[]= [];
  splitContent(content: string){
    const parts = content.split('\n\n## ');
    this.sections = parts.map((part , index)=>{
      if (index === 0) return {id:'section' + index,title: 'مقدمة', content: part};
      const lines = part.split('\n\n');
      const title = lines[0];
      const body = lines.slice(1).join('\n\n');
      return {id:'section' + index,title, content: body};
    })
  }
  @ViewChildren('sectionRef') sectionElements!:QueryList<ElementRef>;
  scrollToSection(index:number){
    const element = this.sectionElements.get(index);
    element?.nativeElement.scrollIntoView({
      behavior:'smooth'
    })
  }
}
