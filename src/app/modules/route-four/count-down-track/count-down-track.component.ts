import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CountdownTimerService } from '../coundown-timer.service';
import { ICountdownTimer } from '../models/countdown-timmer.interface';

@Component({
  selector: 'app-count-down-track',
  templateUrl: './count-down-track.component.html',
  styleUrls: ['./count-down-track.component.scss'],
})
export class CountDownTrackComponent implements OnInit, OnDestroy {
  countdownDetails:ICountdownTimer;
  subscription: Subscription;

  constructor(private timmerService: CountdownTimerService) {}

  ngOnInit(): void {
   this.subscription = this.timmerService.getCountdownTimerDetails().subscribe((data) => this.countdownDetails = data);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
