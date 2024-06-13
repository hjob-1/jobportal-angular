import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-client-jobList',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class JobList {
  @Input() job: any;
}
