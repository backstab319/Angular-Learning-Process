import { NgModule } from '@angular/core';
import { Routes, RouterModule, RoutesRecognized } from '@angular/router';
import { AppComponent } from './app.component';
import { TestAppComponent } from './test-app/test-app.component';
import { HelloAppComponent } from './hello-app/hello-app.component';

const routes: Routes = [
  {path: 'testapp', component: TestAppComponent},
  {path: 'helloapp', component: HelloAppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
