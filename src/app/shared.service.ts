import { Injectable } from '@angular/core';
import  {HttpClient} from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
 readonly APIUrl = "http://127.0.0.1:8000/";
  // readonly photoUrl=""; 

  constructor(public _http:HttpClient) { }
  private headers=new Headers({
    'Accept' : 'application/json',
    'Content-type':'application/json; charset=ut-8',
    'Access-control-Allow-Origin':"*"
  })
  signup(data:any)
  {
    // {"name":"value","email":"value","phone":"value","location":"value","adharnumber":"value","password":"value"}
    // console.log('running')
    console.log("signup",data);
    return this._http.post(this.APIUrl+'farmerreg/',data);
   
  }
  farmerlogin(data:any)
  {
    console.log("login",data);
    return this._http.post(this.APIUrl+'farmerlog/',data);
  }
  addproduct(data:any){
    console.log("product",data);
    return this._http.post(this.APIUrl+'addproduct/',data)
  
  }
  farmer(arg0: string, farmer: any) {
    throw new Error('Method not implemented.');
  }

  getFarmerDetails(){
      return this._http.get(this.APIUrl+'farmerview/');
  }
  customersignup(data: any){
    console.log("register",data);
    return this._http.post(this.APIUrl+'customerreg/',data)

  }
  customerlogin(data:any)
  {
    console.log("login",data);
    return this._http.post(this.APIUrl+'customerlog/',data);
  }
  adminlogin(data:any)
  {
    console.log("login",data);
    return this._http.post(this.APIUrl+'adminlog/',data);
  }
  addtools(data:any){
    console.log("addtools",data);
    return this._http.post(this.APIUrl+'addtool/',data);
  }
 viewproduct()
 {
   return this._http.get<any>(this.APIUrl+'productview');
 }
 UploadPhoto(data:any){
   return this._http.post(this.APIUrl+'SaveFile/',data);

 }
}
 