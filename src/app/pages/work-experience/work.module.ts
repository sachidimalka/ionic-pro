import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { WorkPage } from './work';
import { ScheduleFilterPage } from '../schedule-filter/schedule-filter';
import { WorkPageRoutingModule } from './work-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorkPageRoutingModule
  ],
  declarations: [
    WorkPage,
    ScheduleFilterPage
  ],
  entryComponents: [
    ScheduleFilterPage
  ]
})
export class WorkModule { }
