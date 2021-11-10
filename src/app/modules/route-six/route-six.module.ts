import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouteSixRoutingModule } from './route-six-routing.module';
import { RouteSixComponent } from './route-six.component';


@NgModule({
  declarations: [
    RouteSixComponent
  ],
  imports: [
    CommonModule,
    RouteSixRoutingModule
  ]
})
export class RouteSixModule { }
