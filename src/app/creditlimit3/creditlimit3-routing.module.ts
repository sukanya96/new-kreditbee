import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Creditlimit3Page } from './creditlimit3.page';

const routes: Routes = [
  {
    path: '',
    component: Creditlimit3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Creditlimit3PageRoutingModule {}
