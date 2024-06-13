import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobDetail } from './pages/jobDetailPage/jobdetail.component';
import { Home } from './pages/home/home.component';
import { ClientComponent } from './client.component';

const routes: Routes = [
  {
    path: '',
    component: ClientComponent,
    children: [
      {
        path: '',
        component: Home,
      },
      {
        path: 'jobs/:id',
        component: JobDetail,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRoutingModule {}
