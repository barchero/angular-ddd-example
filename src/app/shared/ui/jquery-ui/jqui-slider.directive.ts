import {Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[saJquiSlider]'
})
export class JquiSlider implements OnInit {

  @Input() saJquiSlider: any;

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    $(this.el.nativeElement).slider(this.saJquiSlider || {})

  }

}
