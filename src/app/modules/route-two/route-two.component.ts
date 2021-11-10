import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-route-two',
  templateUrl: './route-two.component.html',
  styleUrls: ['./route-two.component.scss'],
})
export class RouteTwoComponent implements OnInit {
  isListView = false;
  products;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('assets/data/products.json').subscribe((data) => {
      this.products = data;
    });
  }

  productSort(sortType) {
    this.sortData(sortType.target.value)
  }

  sortData(sortType) {
    this.products = (this.products || []).sort((a, b) => {
      if (a.price > b.price) {
        return sortType === 'asc' ? 1 : -1;
      }
      if (a.price < b.price) {
        return sortType === 'asc' ? -1 : 1;
      }
      return 0;
    });
  }

  toggleGridView() {
    this.isListView = !this.isListView;
  }
}
