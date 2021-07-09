import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators} from '@angular/forms';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  service: any;

  constructor(private _product:SharedService, private _router:Router, private _fb: FormBuilder) { }
  // productForm: FormGroup;
  image_URl :any;
  // PhotoFileName!: String;
  // PhotoFilePath!: String;
  productForm = this._fb.group({
    productname: ['', Validators.required],
    category: ['', Validators.required],
    price: ['', Validators.required],
    photo: ['', Validators.required],
    


  });

  ngOnInit(): void {
  }
  onSubmit()
  {
    if(this.productForm.valid) {
      this.productForm.value.photo = this.image_URl; 
      console.log(this.productForm.value)
      this._product.addproduct(this.productForm.value).subscribe(
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



  uploadFile(e:any){
    // var file=e.target.files[0];
    // const formData:FormData=new FormData();
    // formData.append('uploadedFile',file,file.name);
    // this.service.UploadPhoto(formData).subscribe((data:any)=>{
    //   this.PhotoFileName=data.toString();
    //   this.PhotoFilePath=this.service.photoUrl+this.PhotoFileName;
    // })

    if(e.target.files){
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload=(event:any)=>{
          this.image_URl = event.target.result;
          
        }
    }
  }

}


