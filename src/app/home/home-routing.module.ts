import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitViewComponent } from './pages/init-view/init-view.component';

const routes: Routes = [
  {
    path: 'inicio',
    children: [
      {
        path: 'init',
        component: InitViewComponent,
      },
      {
        path: '**',
        redirectTo: 'init',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
