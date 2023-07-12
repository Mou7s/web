import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  timerValue: number = 0;
  timerSubscription: Subscription | undefined;

  ngOnInit() {
    this.startTimer();
  }

  ngOnDestroy() {
    this.stopTimer();
  }

  startTimer() {
    this.timerSubscription = interval(1000).subscribe(() => {
      this.timerValue++;
    });
  }

  stopTimer() {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }
}
