import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {MainLayoutComponent} from "./shared/layout/app-layouts/main-layout.component";
import {LoginComponent} from "./components/login/login.component";

const routes: Routes = [
  {
    path: "",
    component: MainLayoutComponent,
/*    canActivateChild: [AuthGuard2],
    canActivate: [AuthGuard2],*/
    children: [
      {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
      },
      {
        path: "home",
        loadChildren: "./features/home/home.module#HomeModule",
        data:{
          expectedRole: 'AppUser'
        }

      },
      {
        path: "commerces",
        loadChildren: "./components/commerces/commerces.module#CommercesModule"
      }
    ]
  },
  {
    path: "login",
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
