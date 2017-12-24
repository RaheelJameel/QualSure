import { Component, OnInit } from '@angular/core';
import { Degree } from '../../../common/degree-form/degree';
import { DegreeService } from '../degree.service';
import {Router} from '@angular/router';



@Component({
  selector: 'app-degrees',
  templateUrl: './degrees.component.html',
  styleUrls: ['./degrees.component.css']
})
export class DegreesComponent implements OnInit {
  degrees: Degree[];

  constructor(private degreeService: DegreeService,
              private router: Router) { }

  ngOnInit() {
    this.getDegrees();
  }
  goToDetail(id: number): void {
    this.router.navigateByUrl('university/detail/' + id);

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
