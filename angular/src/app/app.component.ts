import { Component, OnInit, AfterViewInit } from '@angular/core';
import {
  Observable,
  of,
  from,
  range,
  timer,
  interval,
  map,
  defer,
  tap,
  filter,
  concat,
  merge,
  concatMap,
  zip,
  take,
} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  constructor() {}

  ngAfterViewInit(): void {
    const observable = from(fetch('https://api.github.com/users/barda'));

    observable.subscribe((data) => {
      console.log(data);
    });
  }
}
