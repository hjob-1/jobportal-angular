import { Component } from '@angular/core';
import { JobService } from '../../job.service';

@Component({
  selector: 'app-client-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class Home {
  jobs: any;
  constructor(private jobService: JobService) {}
  ngOnInit() {
    this.jobs = this.jobService.getJobs();
    console.log('jobs', this.jobs);
  }
}
