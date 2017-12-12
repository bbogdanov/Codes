import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';
import { NgModule, InjectionToken } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppModule } from './../app.module';
import { AppComponent } from './../app.component';

@NgModule({
  imports: [
    AppModule,
    ServerModule
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}