import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: [],
})
export class AppComponent {
  li_list = [
    { href: 'https://angular.io/tutorial', content: 'Tour of Heroes' },
    { href: 'https://angular.io/cli', content: 'CLI Documentation' },
    { href: 'https://blog.angular.io/', content: 'Angular blog' },
  ];

  show(content: string | undefined) {
    alert(content);
  }
}
