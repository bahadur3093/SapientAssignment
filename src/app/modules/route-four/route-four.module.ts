import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountDownTimerComponent } from './count-down-timer/count-down-timer.component';
import { CountDownInputComponent } from './count-down-input/count-down-input.component';
import { CountDownDisplayComponent } from './count-down-display/count-down-display.component';
import { CountDownTrackComponent } from './count-down-track/count-down-track.component';
import { FormsModule } from '@angular/forms';
import { CountdownTimerService } from './coundown-timer.service';
import { RouteFourComponent } from './route-four.component';
import { RouteFourRoutingModule } from './route-four-routing.module';


@NgModule({
  declarations: [
    RouteFourComponent,
    CountDownTimerComponent,
    CountDownInputComponent,
    CountDownDisplayComponent,
    CountDownTrackComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouteFourRoutingModule
  ],
  providers: [CountdownTimerService]
})
export class RouteFourModule { }
