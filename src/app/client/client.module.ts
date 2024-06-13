import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client.component';
import { ClientRoutingModule } from './client.routing.module';
import { Home } from './pages/home/home.component';
import { Navbar } from './components/navBar/navbar.component';
import { Hero } from './components/hero/hero.component';
import { JobList } from './components/card/card.component';
import { JobDetail } from './pages/jobDetailPage/jobdetail.component';
import { JobService } from './job.service';

@NgModule({
  declarations: [ClientComponent, Home, Navbar, Hero, JobList, JobDetail],
  imports: [CommonModule, ClientRoutingModule],
  providers: [JobService],
  //   exports: [ClientComponent, Home, Navbar, Hero, JobList, JobDetail],
})
export class ClientModule {}
