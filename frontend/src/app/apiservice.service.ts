import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private _http:HttpClient) { }

   // connect frontend to backend

   apiUrl='http://localhost:3000/studentlist';

   //get all data

   getAllData():Observable<any>
   {
      return this._http.get(`${this.apiUrl}`);
   }

   //create data

   createData(data:any):Observable<any>
   {
    console.log(data,'createapi=>');
    return this._http.post(`${this.apiUrl}`,data);
   }


   //delete data

   deleteData(id:any):Observable<any>
   {
    let ids=id;
    return this._http.delete(`${this.apiUrl}/${ids}`);
   }

   //updateData

  updateData(data:any,id:any):Observable<any>
  {
    let ids=id;
    console.log(`${this.apiUrl}`,'URL');
    console.log(`${ids}`,'IDD');
    console.log(data,'Yashaswi updateData=>',ids);
    console.log(this._http.put(`${this.apiUrl}/${ids}`,data));
    return this._http.put(`${this.apiUrl}/${ids}`,data);
  }


//get single data
getSingleData(id:any):Observable<any>
{
  let ids = id;
  return this._http.get(`${this.apiUrl}/${ids}`);
}

//search
searchData(data:any,rollnumber: string, name: string):Observable<any>
   {
    let f=data;
    let g = rollnumber;
    let h=name;
    console.log(data,'searchapi=>');
    console.log(rollnumber,'RLLLLLLLLLLLLLLLNUMMMMMMMMMMMMMMMM=>');
    console.log(name,'FULLLLLLLLLLLLLNAMEEEEEEEEE=>');
    console.log(this._http.post(`${this.apiUrl}/${g}/${h}`,f));
    console.log(`${f}`,'IDD');
    return this._http.post(`${this.apiUrl}/${g}/${h}`,f);
   }
}
