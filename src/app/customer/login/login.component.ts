import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _login:SharedService, private _router:Router, private _fb: FormBuilder) { }
  customerDetails :any =[];

  customerloginForm = this._fb.group({
    username: ['',Validators.required],
    password: ['',Validators.required]

  });
 

  ngOnInit(): void {
  }
onSubmit(){
  if(this.customerloginForm.valid){
    console.log(this.customerloginForm.value)
    this._login.customerlogin(this.customerloginForm.value).subscribe(
      (res:any) => {
        console.log(res);
        if(res.sts == true){
          const userDetails = {
            type: 'customer',
            last_login: new Date()
          }
          localStorage.setItem('loggedUserDetails', userDetails);
        this._router.navigateByUrl('/customerhome')
      }
    },
  (error: any) =>{
      alert(error);
    }
    )
  }
  else {
     alert("All fields are required");
  }
}
}


