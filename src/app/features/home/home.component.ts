import {Component, OnInit} from '@angular/core';
import {Offer} from '@app/_model/02-entitieslayer/offers/offer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  offer: Offer;

  constructor() { }

  refresh(){
    console.log(JSON.stringify(this.offer));
  }

  ngOnInit() {
    this.offer = new Offer();
  }

}
