import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CountdownTimerService } from '../coundown-timer.service';
import { ICountdownTimer } from '../models/countdown-timmer.interface';

@Component({
  selector: 'app-count-down-display',
  templateUrl: './count-down-display.component.html',
  styleUrls: ['./count-down-display.component.scss'],
})
export class CountDownDisplayComponent implements OnInit, OnDestroy {
  counterTimeStamp;
  countdownTimerDetailsSubscription: Subscription;

  constructor(private timerService: CountdownTimerService) {}

  ngOnInit(): void {
    this.countdownTimerDetailsSubscription = this.timerService
      .getCountdownTimerDetails()
      .subscribe((data) => (this.counterTimeStamp = data.startPauseTimeStamp));
  }

  ngOnDestroy() {
    this.countdownTimerDetailsSubscription.unsubscribe();
  }
}
