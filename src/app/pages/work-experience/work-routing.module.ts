import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WorkPage } from './work';

const routes: Routes = [
  {
    path: '',
    component: WorkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkPageRoutingModule { }
