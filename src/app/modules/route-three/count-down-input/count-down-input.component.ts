import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-count-down-input',
  templateUrl: './count-down-input.component.html',
  styleUrls: ['./count-down-input.component.scss'],
})
export class CountDownInputComponent implements OnInit {
  @ViewChild('timerForm') timerForm;

  @Input() countdownTimerDetails;
  @Output() pushTimerValue = new EventEmitter<number>();
  @Output() toggletimer = new EventEmitter();
  @Output() resetTimerDetails = new EventEmitter();

  seconds: number;
  timerValue: number = null;
  pausedAt: number[];

  constructor() {}

  ngOnChanges() {
    this.pausedAt = this.countdownTimerDetails
      ? this.countdownTimerDetails.passedAt
      : null;
  }

  ngOnInit(): void {}

  toggleTimer(form: NgForm): void {
    this.pushTimerValue.emit(form.value.timer);
    this.toggletimer.emit();
  }

  validteValue(form: NgForm) {
    let roundedValue = Math.trunc(form.value.timer);
    this.timerValue = roundedValue == 0 ? null : roundedValue;
  }

  resetTimer(form: NgForm): void {
    form.resetForm();
    this.resetTimerDetails.emit();
  }
}
