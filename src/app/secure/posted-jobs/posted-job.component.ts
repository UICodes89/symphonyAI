import { Component, OnInit, Input, ViewChild} from '@angular/core';
import {JobdetailsService} from "../../service/jobdetails.service";
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material';
import {jobs} from "../../models/job.module"



@Component({
  selector: 'app-posted-job',
  templateUrl: './posted-job.component.html',
  styleUrls: ['./posted-job.component.scss']
})
export class PostedJobComponent implements OnInit {
  @Input() postedJobs:object;
  @ViewChild('filter') searchInput;
  dataSource;
  searchString:string="";
  selectedRowIndex:string="";
  closeFilter:boolean=false;
  openFilter:boolean=false;
  
  constructor(
    private http:JobdetailsService,
  ) { }

  ngOnInit() {
    this.http.getJobs().subscribe(data => {
        this.dataSource = new MatTableDataSource(data);
        this.http.activateShortlisted(data[0]["shortListed"]);
        this.http.activateInterviews(data[0]["shortListed"][0].interviews);
        this.selectedRowIndex = data[0].company;
      })
  }
  displayedColumns: string[] = ['Company', 'Title', 'Date Posted', 'Status'];
  
  applyFilter() {
    this.dataSource.filter = this.searchString.trim().toLowerCase();
    this.showDetails(this.dataSource.filteredData[0]);
  }
  

  showDetails(data){
    if(typeof data != "undefined" && Object.keys(data).length){
      this.http.activateShortlisted(data["shortListed"]);
      this.http.activateInterviews(data["shortListed"][0].interviews);
      this.selectedRowIndex = data.company;
    }else{
      this.http.activateShortlisted("");
      this.http.activateInterviews("");
    }
  }

  search(filterValue: string){
      this.searchString = filterValue;
  }

  toggleClosed(){
    this.closeFilter = (this.closeFilter)?false:true;
    this.openFilter = false;
    this.dataSource.filter = 'closed';
    this.showDetails(this.dataSource.filteredData[0]);
    this.removeFilters();
  } 
  toggleOpen(){
    this.openFilter = (this.openFilter)?false:true;
    this.closeFilter = false;
    this.dataSource.filter = 'open';
    this.showDetails(this.dataSource.filteredData[0]);
    this.removeFilters();
  }

  removeFilters(){
      if(!this.closeFilter && !this.openFilter){
        this.dataSource.filter = ' ';
        this.showDetails(this.dataSource.filteredData[0]);
      }
  }

  clearFilter(){
    this.searchString = "";
    this.searchInput.nativeElement.value = "";
    if(!this.searchString.length){
      this.dataSource.filter = ' ';
      this.showDetails(this.dataSource.filteredData[0]); 
    }
  }

  

}
