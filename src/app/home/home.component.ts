import { Component, OnInit } from '@angular/core';
import { CardService } from '../card.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cards: Object;

  constructor(private cardService: CardService) { }

  ngOnInit() {
    this.cardService.getCards().subscribe(data => {
      this.cards = data;
      console.log(this.cards);
    });
  }

}
