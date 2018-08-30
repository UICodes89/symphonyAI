import { Component, OnInit, Input } from '@angular/core';
import {JobdetailsService} from "../../service/jobdetails.service";

import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-shorlisted',
  templateUrl: './shorlisted.component.html',
  styleUrls: ['./shorlisted.component.scss']
})
export class ShorlistedComponent implements OnInit {

  
  @Input() postedJobs:object;
  data;
  dataSource;
  selectedRowName:string="";
  constructor(private http:JobdetailsService) { }

  ngOnInit() {
      this.http.currentshortlisted.subscribe(shortListed => {
        this.data = shortListed;
        if(Object.keys(this.data).length){
          this.dataSource = new MatTableDataSource(this.data);
          this.selectedRowName = this.data[0].name;
        }else{
          this.dataSource = new MatTableDataSource();
        }
         
      });
  }
  displayedColumns: string[] = ['Name', 'Works At', 'Experience', 'CTC'];
  

  

  showDetails(data){
    this.http.activateInterviews(data.interviews);
    this.selectedRowName = data.name;
  }

}
