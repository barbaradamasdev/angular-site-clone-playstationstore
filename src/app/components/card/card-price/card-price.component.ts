import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-price',
  templateUrl: './card-price.component.html',
  styleUrls: ['./card-price.component.css']
})
export class CardPriceComponent {

  @Input()
  gameType:string =''
  @Input()
  gamePrice:string=''
  @Input()
  gameCTA:string=''
}
