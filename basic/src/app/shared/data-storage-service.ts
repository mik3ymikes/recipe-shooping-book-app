import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";


@Injectable({providedIn: 'root'})



export class DatastorageService{
  constructor (private http: HttpClient) {}
}
