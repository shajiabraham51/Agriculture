import { Component, OnInit } from '@angular/core';
import { FormBuilder,  Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-addtools',
  templateUrl: './addtools.component.html',
  styleUrls: ['./addtools.component.css']
})
export class AddtoolsComponent implements OnInit {

  constructor(private _addtools:SharedService, private _router:Router, private _fb: FormBuilder) { }
  image_URL :any;
  addtoolForm = this._fb.group({
    toolname: ['',Validators],
    category: ['',Validators],
    price: ['',Validators],
    photo: ['',Validators]

  });

  ngOnInit(): void {
  }
  onSubmit(){
    if(this.addtoolForm.valid)
    {
      this.addtoolForm.value.photo = this.image_URL;
      console.log(this.addtoolForm.value)
      this._addtools.addtools(this.addtoolForm.value).subscribe(
        response => {
          alert("tools added");
        },
        error => {
          alert("error");
        }

      )
    }
    else{
      alert("All fields are required");
    }
  }

  uploadFile(e:any){
    if(e.target.files){
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload=(event:any)=>{
          this.image_URL = event.target.result;
        }
    }
  }

}
