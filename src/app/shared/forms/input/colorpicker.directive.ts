import {Directive, ElementRef, Input, OnInit} from "@angular/core";

import "bootstrap-colorpicker/dist/js/bootstrap-colorpicker.js";

@Directive({
  selector: "[saColorpicker]"
})
export class ColorpickerDirective implements OnInit {
  @Input() saColorpicker: any;
  constructor(private el: ElementRef) {}

  ngOnInit() {
    $(this.el.nativeElement).colorpicker(this.saColorpicker || {});
  }
}
