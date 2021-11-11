import { ElementRef, EventEmitter, OnDestroy, Output, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CountdownTimerService } from '../coundown-timer.service';

@Component({
  selector: 'app-count-down-input',
  templateUrl: './count-down-input.component.html',
  styleUrls: ['./count-down-input.component.scss'],
})
export class CountDownInputComponent implements OnInit, OnDestroy {
  @ViewChild('timerForm') timerForm;
  countdownTimerDetailsSubscription: Subscription;
  
  timerValue: number;
  pausedAt:number[];

  constructor(private timerService: CountdownTimerService) {}

  ngOnInit(): void {}

  validteValue(form: NgForm) {
    let roundedValue = Math.trunc(form.value.timer);
    this.timerValue = roundedValue == 0 ? null : roundedValue;
  }


  toggleTimer(form: NgForm): void {
    this.timerService.setTimerValue(form.value.timer);
    this.timerService.toggleTimer.emit();
    this.countdownTimerDetailsSubscription = this.timerService.getCountdownTimerDetails().subscribe(
      data => this.pausedAt = data.passedAt
    );
  }

  resetTimer(form: NgForm): void {
    form.resetForm();
    this.timerService.resetTimerValues.emit();
  }

  ngOnDestroy() {
    this.countdownTimerDetailsSubscription.unsubscribe();
  }
}