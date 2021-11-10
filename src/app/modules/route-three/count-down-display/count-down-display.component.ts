import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-count-down-display',
  templateUrl: './count-down-display.component.html',
  styleUrls: ['./count-down-display.component.scss'],
})
export class CountDownDisplayComponent implements OnInit, OnChanges {
  @Input() countdownTimerDetails;
  counterTimeStamp;

  constructor() {}

  ngOnChanges() {
    this.counterTimeStamp = this.countdownTimerDetails
      ? this.countdownTimerDetails.startPauseTimeStamp
      : null;
  }

  ngOnInit(): void {}
}
