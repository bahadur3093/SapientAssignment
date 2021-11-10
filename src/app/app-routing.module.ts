import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationItemsComponent } from './common/navigation-items/navigation-items.component';
import { PageNotFoundComponent } from './common/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: NavigationItemsComponent},  
  {
    path: 'route-one',
    loadChildren: () =>
      import('./modules/route-one/route-one.module').then(
        (m) => m.RouteOneModule
      ),
  },

  {
    path: 'route-two',
    loadChildren: () =>
      import('./modules/route-two/route-two.module').then(
        (m) => m.RouteTwoModule
      ),
  },

  {
    path: 'route-three',
    loadChildren: () =>
      import('./modules/route-three/route-three.module').then(
        (m) => m.RouteThreeModule
      ),
  },

  {
    path: 'route-four',
    loadChildren: () =>
      import('./modules/route-four/route-four.module').then(
        (m) => m.RouteFourModule
      ),
  },

  {
    path: 'route-five',
    loadChildren: () =>
      import('./modules/route-five/route-five.module').then(
        (m) => m.RouteFiveModule
      ),
  },

  {
    path: 'route-six',
    loadChildren: () =>
      import('./modules/route-six/route-six.module').then(
        (m) => m.RouteSixModule
      ),
  },

  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
