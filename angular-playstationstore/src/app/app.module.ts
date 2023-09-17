import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { CardComponent } from './components/card/card.component';
import { CardLabelComponent } from './components/card/card-label/card-label.component';
import { CardImgComponent } from './components/card/card-img/card-img.component';
import { CardPriceComponent } from './components/card/card-price/card-price.component';
import { BannerComponent } from './components/banner/banner.component';
import { BannerInfoComponent } from './components/banner/banner-info/banner-info.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CardComponent,
    CardLabelComponent,
    CardImgComponent,
    CardPriceComponent,
    BannerComponent,
    BannerInfoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
