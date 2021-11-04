import { TestComponent } from './pages/test/test.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // redirect to `first-component`
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'test', loadChildren: () => import('./pages/test/test.module').then(m => m.TestModule) },
  // { path: 'test', component: TestComponent },
  // { path: 'second-component', component: SecondComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }, // redirect to `first-component`
  // { path: '**', component: 4o4Comp },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
