import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: '[activitiesMessage]',
  templateUrl: './activities-message.component.html',
})
export class ActivitiesMessageComponent implements OnInit {

  @Input()  item: any;
  constructor()
  {

  }

  ngOnInit() {
  }

}
