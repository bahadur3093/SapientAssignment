import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-route-one',
  templateUrl: './route-one.component.html',
  styleUrls: ['./route-one.component.scss']
})
export class RouteOneComponent implements OnInit {
  numberOfDivs = Array(8);

  constructor() { }

  ngOnInit(): void {

  }

}
