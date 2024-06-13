import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { JobService } from '../../job.service';

@Component({
  selector: 'app-client-jobDetail',
  templateUrl: './jobdetail.component.html',
  styleUrls: ['./jobdetail.component.css'],
})
export class JobDetail {
  job: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private jobService: JobService
  ) {}
  ngOnInit() {
    // The "1" is parsed as a string within the code. So may need to convert into a number if you try to access in code & expects a number.
    // const id = this.activatedRoute.snapshot.params['id'];
    this.activatedRoute.params.subscribe(
      (params: Params) =>
        (this.job = this.jobService.getJobById(parseInt(params['id'])))
    );
    console.log('job', this.job);
  }
}
