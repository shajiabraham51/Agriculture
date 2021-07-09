import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  constructor(private _adminlogin:SharedService, private _router:Router, private _fb: FormBuilder) { }
  adminDetails : any=[];
  adminloginForm = this._fb.group({
    username: ['',Validators.required],
    password: ['',Validators.required]

  });
 

  ngOnInit(): void {
  }
  onSubmit(){
    if(this.adminloginForm.valid){
      console.log(this.adminloginForm.value)
      this._adminlogin.adminlogin(this.adminloginForm.value).subscribe(
        (res:any) => {
          console.log(res);
          if(res.sts == true){
            this._router.navigateByUrl('/addtools')
          }
        },
        (error: any) =>{
          alert(error);
        }
        
      )
    }
    else{
      alert("All fields are required");
    }
  }
  // onSubmit(){
  //   if(this.customerloginForm.valid){
  //     console.log(this.customerloginForm.value)
  //     this._login.customerlogin(this.customerloginForm.value).subscribe(
  //       (res:any) => {
  //         console.log(res);
  //         if(res.sts == true){
  //         this._router.navigateByUrl('/customerhome')
  //       }
  //     },
  //   (error: any) =>{
  //       alert(error);
  //     }
  //     )
  //   }
  //   else {
  //      alert("All fields are required");
  //   }
  // }

}
