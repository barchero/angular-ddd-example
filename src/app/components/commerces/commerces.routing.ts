import {RouterModule, Routes} from "@angular/router";
import {CommercesListComponent} from "./list/commerces-list.components";
import {ModuleWithProviders} from "@angular/compiler/src/core";
import {CommercesDetailsComponent} from "./detail/commerces-details.components";

export const routes: Routes = [
    {
        path: '',
        component: CommercesListComponent,
        data: {
            pageTitle: 'Commerces'
        }
    },
    {
        path: 'detail',
        component: CommercesDetailsComponent,
        data: {
            pageTitle: 'Create Commerce'
        }
    },
    {
        path: 'detail/:id',
        component: CommercesDetailsComponent,
        data: {
            pageTitle: 'Edit Commerce'
        }
    }
];

export const commercesRouting: ModuleWithProviders = RouterModule.forChild(routes);