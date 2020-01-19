import {AfterViewInit, Component, ElementRef} from '@angular/core';

import jarvisWidgetsDefaults from '../widget.defaults';

import 'smartadmin-plugins/smartwidgets/jarvis.widget.ng2.js'

declare var $: any;

@Component({

  selector: 'sa-widgets-grid',
  template: `
     <section id="widgets-grid" class="sortable-grid">
       <ng-content></ng-content>
     </section>
  `,
  styles: []
})
export class WidgetsGridComponent implements AfterViewInit {

  constructor(public el: ElementRef) {}

  ngAfterViewInit() {
      $('#widgets-grid', this.el.nativeElement).jarvisWidgets(jarvisWidgetsDefaults);
  }

}
