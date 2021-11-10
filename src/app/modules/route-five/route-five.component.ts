import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-route-five',
  templateUrl: './route-five.component.html',
  styleUrls: ['./route-five.component.scss'],
})
export class RouteFiveComponent implements OnInit {
  clickCount = 0;
  studentsData;
  originalData;

  tableHeaders = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('assets/data/students-marks.json').subscribe((data) => {
      this.studentsData = data;
      this.tableHeaders = Object.keys(this.studentsData[0]);
      this.originalData = [...this.studentsData];
    });
  }

  dataSorting(column: string) {
    this.clickCount++;

    let direction: string;

    switch (this.clickCount) {
      case 1:
        direction = 'asc';
        this.sortData(column, direction);
        break;
      case 2:
        direction = 'desc';
        this.sortData(column, direction);
        break;
      case 3:
        this.clickCount = 0;
        this.studentsData = this.originalData;
        break;
    }
  }

  sortData(column, direction) {
    this.studentsData = (this.studentsData || []).sort((a, b) => {
      if (a[column] > b[column]) {
        return direction === 'asc' ? 1 : -1;
      }
      if (a[column] < b[column]) {
        return direction === 'asc' ? -1 : 1;
      }
      return 0;
    });
  }
}
