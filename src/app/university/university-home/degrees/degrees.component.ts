import { Component, OnInit } from '@angular/core';
import { Degree } from '../degree';
import { DegreeService } from '../degree.service';


@Component({
  selector: 'app-degrees',
  templateUrl: './degrees.component.html',
  styleUrls: ['./degrees.component.css']
})
export class DegreesComponent implements OnInit {
  degrees: Degree[];

  constructor(private degreeService: DegreeService) { }

  ngOnInit() {
    this.getDegrees();
  }

  getDegrees(): void {
    this.degreeService.getDegrees()
    .subscribe(degrees => this.degrees = degrees);
  }

  delete(degree: Degree): void {
    this.degrees = this.degrees.filter(h => h !== degree);
    this.degreeService.deleteDegree(degree).subscribe();
  }

}
