import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from "@angular/router";
import { blogData } from '../../interfaces/blog-data';
import { CategoriesService } from '../../services/categories.service';
import { CardComponent } from '../card/card.component';
import { Categories } from './../../interfaces/categories.interface';
import { BlogData } from './../../services/blog-data';
import { CardListComponent } from '../card-list/card-list.component';

@Component({
  selector: 'app-blog-body',
  imports: [FormsModule, CardComponent, RouterLink , CardListComponent],
  templateUrl: './blog-body.component.html',
  styleUrl: './blog-body.component.css',
})
export class BlogBodyComponent implements OnInit {
  allcategories: Categories[] = [];
  selectedCat!: Categories;
  posts: blogData[] = [];
  filteredPosts: blogData[] = [];
  paginatedPosts: blogData[] = [];
  pageNumbers: number[] = [];
  currentPage: number = 1;
  postsPerPage: number = 6;
  totalPages: number = 0;
  searchTerm:string = '';
  viewMode: 'grid'| 'list' = 'grid';
  constructor(
    private categoriesService: CategoriesService,
    private blogDataService: BlogData,
    private activatedRoute : ActivatedRoute,
  ) {}
  ngOnInit(): void {

  this.allcategories = this.categoriesService.getCategory();
  this.posts = this.blogDataService.getArticles();

  this.activatedRoute.queryParams.subscribe((params)=>{

    const category = params['category'];

    if(category){
      this.selectedCat = this.allcategories.find(c => c.name === category)!;
      this.filterPost(category);
    }else{
      this.selectedCat = this.allcategories[0];
      this.filterPost();
    }

  });

}
  // ngOnInit(): void {
  //   this.allcategories = this.categoriesService.getCategory();
  //   this.selectedCat = this.allcategories[0];
  //   this.posts = this.blogDataService.getArticles();
  //   this.filterPost();
  //   this.activatedRoute.queryParams.subscribe((params)=>{
  //     const category = params['category'];
  //     this.filterPost(category)
  //   })
  // }
  selectCategory(category: Categories) {
    this.selectedCat = category;
  }
  filterPost(categoryName?: string) {
  if (categoryName === 'جميع المقالات' || !categoryName) {
    this.filteredPosts = [...this.posts];
  } else {
    this.filteredPosts = this.posts.filter(post => post.category === categoryName);
  }
  if (this.searchTerm && this.searchTerm.trim() !== '') {
    const searchLower = this.searchTerm.toLowerCase();
    this.filteredPosts = this.filteredPosts.filter(post => 
      post.title.toLowerCase().includes(searchLower) ||
      post.excerpt.toLowerCase().includes(searchLower)
    );
  }
  this.currentPage = 1;            // العودة لأول صفحة
  this.setupPagination();
}
resetFilters() {
  this.searchTerm = '';
  this.selectedCat = this.allcategories[0];
  this.filterPost();
}
// تجهيز أرقام الصفحات والبوستات المعروضة
setupPagination() {
  this.totalPages = Math.ceil(this.filteredPosts.length / this.postsPerPage);
  this.pageNumbers = Array.from({length: this.totalPages}, (_, i) => i + 1);
  this.paginatePosts(this.currentPage);
}

// تغيير الصفحة عند الضغط على رقم
paginatePosts(page: number) {
  this.currentPage = page;
  const start = (page - 1) * this.postsPerPage;
  const end = start + this.postsPerPage;
  this.paginatedPosts = this.filteredPosts.slice(start, end);
}
setView(mode : 'grid' | 'list'){
  this.viewMode = mode;
}
}
