import { NgModule } from '@angular/core';
import { InfoComponent } from '../info/info.component';
import { AboutusComponent } from '../aboutus/aboutus.component';
import { HomeComponent } from '../home/home.component';
import { TestrComponent } from '../testr/testr.component';

@NgModule({
    declarations: [
        InfoComponent,
        AboutusComponent,
        HomeComponent,
        TestrComponent
    ],
    exports:      [
        InfoComponent,
        AboutusComponent,
        HomeComponent,
        TestrComponent
    ]
})
export class CoreModule {
}
