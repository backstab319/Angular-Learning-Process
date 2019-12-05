import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloAppComponent } from './hello-app/hello-app.component';
import { TestAppComponent } from './test-app/test-app.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloAppComponent,
    TestAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
