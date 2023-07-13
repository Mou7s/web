import { Component, OnInit } from '@angular/core';
import { Observable, of, from, range, timer, interval, map, defer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    timer(1000, 100) // 首次等待3s，然后每隔1s开始发出数据
      .subscribe((value) => {
        console.log(Math.random());
      }); // 3s后开始输出0，然后每隔1s，依次输出1、2、3、……
  }
}
