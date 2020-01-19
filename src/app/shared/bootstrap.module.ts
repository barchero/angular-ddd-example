import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {
    AccordionModule,
    AlertModule,
    BsDropdownModule,
    ButtonsModule,
    CarouselModule,
    ModalModule,
    PopoverModule,
    ProgressbarModule,
    TabsModule,
    TooltipModule
} from "ngx-bootstrap";


@NgModule({
  imports: [
    CommonModule,

    ModalModule.forRoot(),
    ButtonsModule.forRoot(),
    TooltipModule.forRoot(),
    BsDropdownModule.forRoot(),
    ProgressbarModule.forRoot(),
    AlertModule.forRoot(),
    TabsModule.forRoot(),
    AccordionModule.forRoot(),
    CarouselModule.forRoot(),

    PopoverModule.forRoot()
  ],
  exports: [
    ModalModule,
    ButtonsModule,
    TooltipModule,
    BsDropdownModule,
    ProgressbarModule,
    AlertModule,
    TabsModule,
    AccordionModule,
    CarouselModule,
  ],
  declarations: []
})
export class BootstrapModule {}
