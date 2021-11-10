import {
  Component,
  HostListener,
  OnDestroy,
  OnInit,
  Renderer2,
} from '@angular/core';

@Component({
  selector: 'app-route-six',
  templateUrl: './route-six.component.html',
  styleUrls: ['./route-six.component.scss'],
})
export class RouteSixComponent implements OnInit, OnDestroy {
  scrollTop = 0;
  previousScrolledTop = 0;
  initialDivs = 9;

  constructor() {}

  ngOnInit() {}

  ngOnDestroy(): void {}

  numSequence(): Array<number> {
    return Array(this.initialDivs);
  }

  onScroll(event) {
    let current = event.target.scrollTop;
    if (
      event.target.offsetHeight + event.target.scrollTop >=
      event.target.scrollHeight - 50
    ) {
      if (this.scrollTop != current) {
        if (current > this.scrollTop) {
          if (current - this.scrollTop > 180) {
            this.scrollTop = current;
            this.initialDivs += 3;
            this.numSequence();
          }
        }
      }
    }
  }

  showAlert(i: number) {
    alert(`Button ‘${i + 1}’ is clicked`);
  }
}
