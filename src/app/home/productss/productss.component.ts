import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-productss',
  templateUrl: './productss.component.html',
  styleUrls: ['./productss.component.css']
})
export class ProductssComponent implements OnInit {
  productList: any;
  imgSrc!: string;
  

  constructor(private _productss:SharedService) { }

  ngOnInit(): void {
    
    this._productss.viewproduct().subscribe((data)=>{this.productList=data;console.log(this.productList),(err:any) =>{console.log(err)}
  let blob= new Blob([data['_body']],{type: 'image/jpg'});
  const imgUrl= URL.createObjectURL(blob);
  console.log(imgUrl);
  this.imgSrc= imgUrl;
  
  })
   // console.log("product",data);
   
  }

}
function data(arg0: string, data: any) {
  throw new Error('Function not implemented.');
}

