import { HomeSection3Component } from './../home-section3/home-section3.component';
import { Component } from '@angular/core';
import { HomeSection2 } from '../home-section2/home-section2';
import { HomeSection4Component } from '../home-section4/home-section4.component';
import { HomeSection5Component } from "../home-section5/home-section5.component";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-home',
  imports: [HomeSection2, HomeSection3Component, HomeSection4Component, HomeSection5Component, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
