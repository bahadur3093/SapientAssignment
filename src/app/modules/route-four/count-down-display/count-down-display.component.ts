import { Component, OnInit } from '@angular/core';
import { CountdownTimerService } from '../coundown-timer.service';
import { ICountdownTimer } from '../models/countdown-timmer.interface';

@Component({
  selector: 'app-count-down-display',
  templateUrl: './count-down-display.component.html',
  styleUrls: ['./count-down-display.component.scss']
})
export class CountDownDisplayComponent implements OnInit {
  counterTimeStamp;

  constructor(private timerService: CountdownTimerService) { }

  ngOnInit(): void {
    this.timerService.getCountdownTimerDetails().subscribe(
      data => this.counterTimeStamp = data.startPauseTimeStamp
    );
  }

}
