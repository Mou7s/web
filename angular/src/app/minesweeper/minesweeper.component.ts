import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-minesweeper',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      minesweeper works!
    </p>
  `,
  styleUrls: ['./minesweeper.component.css']
})
export class MinesweeperComponent {

}
