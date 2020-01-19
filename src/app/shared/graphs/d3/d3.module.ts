import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {D3MapComponent} from './d3-map.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [D3MapComponent],
  exports: [D3MapComponent],
})
export class D3Module { }
