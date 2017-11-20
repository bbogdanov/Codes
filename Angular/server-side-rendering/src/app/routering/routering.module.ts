import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InfoComponent } from '../info/info.component';
import { AboutusComponent } from '../aboutus/aboutus.component';
import { HomeComponent } from '../home/home.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: ''       , component: HomeComponent    },
            { path: 'info'   , component: InfoComponent    },
            { path: 'aboutus', component: AboutusComponent },
        ]),
    ],
    exports: [
        RouterModule
    ]
})
export class RouteringModule {
}
