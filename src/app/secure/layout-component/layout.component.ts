import { Component, OnInit } from '@angular/core';
import {JobdetailsService} from '../../service/jobdetails.service';

@Component({
  selector: 'app-layout-component',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})


export class LayoutComponent implements OnInit {

  public jobData;

  constructor(private http:JobdetailsService) { }

  ngOnInit() {
    this.getData();
  }

  getData(){
    this.http.getJobs().subscribe(data =>{
       this.jobData = data;
    });
  }


}
