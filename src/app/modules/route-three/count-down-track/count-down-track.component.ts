import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-count-down-track',
  templateUrl: './count-down-track.component.html',
  styleUrls: ['./count-down-track.component.scss']
})
export class CountDownTrackComponent implements OnInit {
  @Input() countdownTimerDetails;
  countdownDetails;
  
  constructor() { }

  ngOnChanges(){
    this.countdownDetails = this.countdownTimerDetails;
  }

  ngOnInit(): void {
  }

}
