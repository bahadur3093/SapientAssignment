import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICountdownTimer } from '../../route-four/models/countdown-timmer.interface';

@Component({
  selector: 'app-count-down-timer',
  templateUrl: './count-down-timer.component.html',
  styleUrls: ['./count-down-timer.component.scss'],
})
export class CountDownTimerComponent implements OnInit {
  @Input() timerValue: number;
  @Input() toggletimer;
  @Output() countdownTimerDetails = new EventEmitter();

  counter = 0;
  current = 0;
  isTimerPaused = true;
  interval;
  countArray = [];
  countdownTimerObj: ICountdownTimer;
  startedCount = 0;
  pausedCount = 0;
  counterTimeStamp = [];

  constructor() {}

  ngOnInit(): void {}

  toggleTimer(timerCount) {
    if (timerCount !== this.current) {
      this.isTimerPaused = true;
    }

    if (this.isTimerPaused) {
      if (timerCount !== this.current) {
        this.current = timerCount;
        this.counter = timerCount;
        this.startCountdown();
        this.startedCount = 0;
        this.pausedCount = 0;

        this.countArray = [];
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

    this.countdownTimerDetails.emit(this.countdownTimerObj);
  }

  resetTimmerDetails() {
    this.isTimerPaused = true;
    this.counter = 0;
    clearInterval(this.interval);
    this.countdownTimerObj = {
      passedAt: null,
      startPauseTimeStamp: null,
      startClickCount: null,
      pauseClickCount: null,
    };

    this.countdownTimerDetails.emit(this.countdownTimerObj);
  }

  startCountdown() {
    this.interval = setInterval(() => {
      this.counter--;
      if (this.counter <= 0) {
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
}
