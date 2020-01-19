import {Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[saJquiMenu]'
})
export class JquiMenu implements OnInit {

  @Input() saJquiMenu: any;

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    $(this.el.nativeElement).menu(this.saJquiMenu || {})

  }

}
