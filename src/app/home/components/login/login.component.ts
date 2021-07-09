import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';
import { FormBuilder, Validators} from '@angular/forms';
import { jsDocComment } from '@angular/compiler';
import { stripSummaryForJitFileSuffix } from '@angular/compiler/src/aot/util';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _login:SharedService, private _router:Router, private _fb: FormBuilder) { }
  farmerDetails :any = [];
  loginForm = this._fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
    
  });
  ngOnInit(): void {
    let val :any;
    val = this._login.farmerlogin(this.loginForm.value),
    alert(val);
    //this.getData();
    
    
  }
  // getData(){
  //   get.
  //   .map((res:Response) => (

  //   )
  // }
 
  onSubmit() {
    if(this.loginForm.valid) {
      console.log(this.loginForm.value)
      this._login.farmerlogin(this.loginForm.value).subscribe(
        (res:any) => {
          console.log(res);
          if(res.sts == true){  
            this._router.navigateByUrl('/signup');
          }
        },
        error => {
          alert(error);
        }

      )
    }
    else {
      alert("All fields are required");
    }
  }
    
  }


