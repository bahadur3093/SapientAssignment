import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { CountdownTimerService } from '../coundown-timer.service';
import { ICountdownTimer } from '../models/countdown-timmer.interface';

@Component({
  selector: 'app-count-down-timer',
  templateUrl: './count-down-timer.component.html',
  styleUrls: ['./count-down-timer.component.scss'],
})
export class CountDownTimerComponent implements OnInit, OnDestroy {
  counter = 0;
  isTimerPaused = true;
  interval;
  timerServiceSubscription: Subscription;
  resetTimerValuesSubscription: Subscription;

  countArray = [];

  countdownTimerObj: ICountdownTimer;

  startedCount = 0;
  pausedCount = 0;
  counterTimeStamp = [];

  constructor(private timerService: CountdownTimerService) {}

  ngOnInit(): void {
    let current = 0;
    this.timerServiceSubscription = this.timerService.toggleTimer.subscribe(() => {
      let value = this.timerService.getTimerValue();

      if (value !== current) {
        this.isTimerPaused = true;
        clearInterval(this.interval);
      }

      if (this.isTimerPaused) {
        if (value !== current) {
          current = value;
          this.counter = value;
          this.startCountdown();
          this.startedCount = 0;
          this.pausedCount = 0;

          this.countArray=[];
          this.counterTimeStamp = [];
        } else {
          this.startCountdown();
        }
        this.counterTimeStamp.push({
          value: `Started ${this.getDateAndTime()}`,
        });
        this.startedCount++;
      } else {
        this.pauseCountdown();
        this.pausedCount++;
        this.counterTimeStamp.push({
          value: `Paused ${this.getDateAndTime()}`,
        });
        this.countArray.push(this.counter);
      }

      this.isTimerPaused = !this.isTimerPaused;

      this.countdownTimerObj = {
        passedAt: this.countArray,
        startPauseTimeStamp: this.counterTimeStamp,
        startClickCount: this.startedCount,
        pauseClickCount: this.pausedCount,
      };

      this.timerService.setCountdownTimerDetails(this.countdownTimerObj);

    });

    this.resetTimerValuesSubscription = this.timerService.resetTimerValues.subscribe(() =>{
      this.isTimerPaused = true;
      this.counter = 0;
      clearInterval(this.interval);
      this.countdownTimerObj = {
        passedAt: null,
        startPauseTimeStamp: null,
        startClickCount: null,
        pauseClickCount: null,
      };
      this.timerService.setCountdownTimerDetails(this.countdownTimerObj);
    });
  }

  startCountdown() {
    this.interval = setInterval(() => {
      this.counter--;
      if (this.counter == 0) {
        clearInterval(this.interval);
      }
    }, 1000);
  }

  pauseCountdown() {
    clearInterval(this.interval);
  }

  getDateAndTime() {
    const date = new Date();
    const dd = date.getDate();
    const mm = date.getMonth() + 1;
    const yyyy = date.getFullYear();

    return `${dd}/${mm}/${yyyy} ${date.toLocaleTimeString()}`;
  }

  ngOnDestroy() {
    this.timerServiceSubscription.unsubscribe();
    this.resetTimerValuesSubscription.unsubscribe();
  }
}
