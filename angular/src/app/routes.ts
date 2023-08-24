import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { MinesweeperComponent } from './minesweeper/minesweeper.component';

const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page',
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Home details',
  },
  {
    path: 'minesweeper',
    component: MinesweeperComponent,
    title: 'minesweeper',
  },
];

export default routeConfig;
