import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {CommercesDetailsComponent} from "./detail/commerces-details.components";
import {CommercesDetailsFormComponent} from "./detail/components/commerces-details-form/commerces-details-form.components";
import {CommercesListComponent} from "./list/commerces-list.components";
import {SharedModule} from "@app/shared/shared.module";
import {commercesRouting} from "./commerces.routing";
import {SmartadminDatatableModule} from "@app/shared/ui/datatable/smartadmin-datatable.module";
import {CommercesListTableComponent} from "./list/components/comerces-list-table/commerces-list-table.component";
import {FilterPipe} from "./list/components/comerces-list-table/pipes/filter.pipe";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        CommercesDetailsComponent,
        CommercesListComponent,
        CommercesListTableComponent,
        CommercesDetailsFormComponent,
        FilterPipe],
    imports: [
        CommonModule,
        commercesRouting,
        SharedModule,
        SmartadminDatatableModule,
        ReactiveFormsModule
    ]
})
export class CommercesModule { }