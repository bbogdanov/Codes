import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NfoComponent } from './nfo/nfo.component';
import { FnoComponent } from './fno/fno.component';

@NgModule({
  declarations: [NfoComponent, FnoComponent]
})
export class LazyModule { }
