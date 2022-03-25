import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ProjectPage } from './project';
import { PopoverPage } from '../about-popover/about-popover';
import { ProjectPageRoutingModule } from './project-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProjectPageRoutingModule
  ],
  declarations: [ProjectPage, PopoverPage],
  entryComponents: [PopoverPage],
  bootstrap: [ProjectPage],
})
export class ProjectModule { }
