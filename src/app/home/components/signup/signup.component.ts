import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';
import { FormBuilder, Validators} from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(private _signup:SharedService, private _router:Router, private _fb: FormBuilder) { }

  signupForm = this._fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    phone: ['', Validators.required],
    location: ['', Validators.required],
    adharnumber: ['', Validators.required],
    password: ['', Validators.required],
  });

  ngOnInit(): void {

  }
  onSubmit()
  {
    if(this.signupForm.valid) {
      console.log(this.signupForm.value)
      this._signup.signup(this.signupForm.value).subscribe(
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
