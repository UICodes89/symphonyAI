import { Component, OnInit, Input } from '@angular/core';
import {JobdetailsService} from "../../service/jobdetails.service";


import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-intrviews',
  templateUrl: './intrviews.component.html',
  styleUrls: ['./intrviews.component.scss']
})
export class IntrviewsComponent implements OnInit {

  
  
  @Input() postedJobs:object;
  data;
  dataSource;
  constructor(private http:JobdetailsService) { }

  ngOnInit() {
      this.http.currentInterviews.subscribe(interviews => {
          this.data = interviews;
          this.dataSource = new MatTableDataSource(this.data);
      });
  }
  displayedColumns: string[] = ['Interview', 'Interviewer', 'Date Posted', 'Status'];
  


}
