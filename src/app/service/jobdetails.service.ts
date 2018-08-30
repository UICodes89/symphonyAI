import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/observable";
import {jobs} from "../models/job.module";
import { BehaviorSubject } from 'rxjs';


@Injectable()
export class JobdetailsService {
  private URL ="../../assets/data.json";
  public shortlisted = new BehaviorSubject<any>("");
  currentshortlisted = this.shortlisted.asObservable();
  public interviews = new BehaviorSubject<any>("");
  currentInterviews= this.interviews.asObservable();
  
  constructor(private http:HttpClient) { }

  getJobs(): Observable<jobs[]>{
         return this.http.get<jobs[]>(this.URL);
  }

  /**
   *
   * @param message
   */
  activateShortlisted(data: any) {
    this.shortlisted.next(data);
  }

  /**
   *
   * @param message
   */
  activateInterviews(data: any) {
    this.interviews.next(data);
  }

}
