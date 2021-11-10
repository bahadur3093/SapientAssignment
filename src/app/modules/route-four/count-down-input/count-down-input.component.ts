import { ElementRef, EventEmitter, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { CountdownTimerService } from '../coundown-timer.service';

@Component({
  selector: 'app-count-down-input',
  templateUrl: './count-down-input.component.html',
  styleUrls: ['./count-down-input.component.scss'],
})
export class CountDownInputComponent implements OnInit {
  seconds: number;
  pausedAt:number[];

  constructor(private timerService: CountdownTimerService) {}

  ngOnInit(): void {}

  validteValue(e){
    this.seconds =  Math.trunc(e);
  }

  toggleTimer(): void {
    this.timerService.setTimerValue(this.seconds);
    this.timerService.toggleTimer.emit();
    this.timerService.getCountdownTimerDetails().subscribe(
      data => this.pausedAt = data.passedAt
    );
  }

  resetTimer(): void {
    this.seconds = null;
    this.timerService.resetTimerValues.emit();
  }
}