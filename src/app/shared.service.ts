import { Injectable } from '@angular/core';
import  {HttpClient} from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  // readonly APIUrl = "";
  // readonly photoUrl=""; 

  constructor(public _http:HttpClient) { }
  private headers=new Headers({
    'Accept' : 'application/json',
    'Content-type':'application/json; charset=ut-8',
    'Access-control-Allow-Origin':"*"
  })
  signup(data:any)
  {
    // console.log('running')
    console.log("signup",data);
    return this._http.post("http://127.0.0.1:8000/"+'farmerreg' ,{"name":"value","email":"value","phone":"value","location":"value","adharnumber":"value","password":"value"});
   
  }
  farmer(arg0: string, farmer: any) {
    throw new Error('Method not implemented.');
  }
}
 