import { Injectable, EventEmitter } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ICountdownTimer } from './models/countdown-timmer.interface';

@Injectable({
  providedIn: 'root',
})
export class CountdownTimerService {
  seconds: number;
  toggleTimer = new EventEmitter();
  resetTimerValues = new EventEmitter();

  countdownTimerDetails = new Subject<ICountdownTimer>();

  constructor() {}

  setTimerValue(value: number): void {
    this.seconds = value;
  }

  getTimerValue(): number {
    return this.seconds;
  } 
  
  setCountdownTimerDetails(details: ICountdownTimer):void{
    this.countdownTimerDetails.next(details)
  }

  getCountdownTimerDetails():Observable<ICountdownTimer>{
    return this.countdownTimerDetails.asObservable();
  }  
}
