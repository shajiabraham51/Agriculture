import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // 

  constructor(private _register:SharedService, private _router:Router, private _fb:FormBuilder) { }
  registerForm = this._fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    phone: ['', Validators.required],
    address: ['', Validators.required],
    password: ['', Validators.required],
  });

  ngOnInit(): void {
    
  }
  onSubmit()
  {
    if(this.registerForm.valid) {
      
      //this.registrationForm.value.photo = this.image_URl; 
      console.log(this.registerForm.value)
      this._register.customersignup(this.registerForm.value).subscribe(
        response => {
          alert("User registered sucessfully");
        
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



