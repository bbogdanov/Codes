import { InfoComponent } from '../info/info.component';
import { AboutUsComponent } from '../about-us/about-us.component';
import { HomeComponent } from '../home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot([
        { path: ''       , component: HomeComponent    },
        { path: 'aboutus', component: AboutUsComponent },
        { path: 'info'   , component: InfoComponent    },
        { path: 'lazy', loadChildren: '../lazy/lazy.module#LazyModule'}
    ])
  ],
  exports: [ RouterModule ]
})
export class RoutingModule { }
