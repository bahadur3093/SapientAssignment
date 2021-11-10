import { Component, OnInit, ViewChild } from '@angular/core';
import { CountDownTimerComponent } from './count-down-timer/count-down-timer.component';

@Component({
  selector: 'app-route-three',
  templateUrl: './route-three.component.html',
  styleUrls: ['./route-three.component.scss'],
})
export class RouteThreeComponent implements OnInit {
  @ViewChild(CountDownTimerComponent)
  countDownTimerComponent: CountDownTimerComponent;

  timerValue = 0;
  countTimerData;

  constructor() {}

  ngOnInit(): void {}

  getTimerValue(value) {
    this.timerValue = value;
  }

  toggletimer() {
    this.countDownTimerComponent.toggleTimer(this.timerValue);
  }

  pushCountdownTimerDetails(data) {
    this.countTimerData = data;
  }

  resetTimerDetails(){
    this.countDownTimerComponent.resetTimmerDetails();
  }
}
