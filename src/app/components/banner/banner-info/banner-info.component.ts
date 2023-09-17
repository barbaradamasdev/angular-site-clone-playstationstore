import { Component } from '@angular/core';

@Component({
  selector: 'app-banner-info',
  templateUrl: './banner-info.component.html',
  styleUrls: ['./banner-info.component.css']
})
export class BannerInfoComponent {

  bannerTitle:string = 'Balgur`s Gate 3'
  bannerSubtitle:string = "A D&D's experience"
  bannerCTA:string = 'Play it Now!'
  bannerPrice:string = '$ 69.99'
}
