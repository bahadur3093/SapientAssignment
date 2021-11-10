import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteThreeComponent } from './route-three.component';
import { RouteThreeRoutingModule } from './route-three-routing.module';
import { CountDownDisplayComponent } from './count-down-display/count-down-display.component';
import { CountDownInputComponent } from './count-down-input/count-down-input.component';
import { CountDownTimerComponent } from './count-down-timer/count-down-timer.component';
import { CountDownTrackComponent } from './count-down-track/count-down-track.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RouteThreeComponent,
    CountDownDisplayComponent,
    CountDownInputComponent,
    CountDownTimerComponent,
    CountDownTrackComponent,
  ],
  imports: [CommonModule, FormsModule, RouteThreeRoutingModule],
})
export class RouteThreeModule {}
