import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouteringModule } from './routering/routering.module';
import { CoreModule } from './core/core.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports:      [
        BrowserModule.withServerTransition({ appId: 'test-app' }),
        CoreModule,
        RouteringModule
    ],
    providers:    [],
    bootstrap:    [AppComponent]
})
export class AppModule {
}
