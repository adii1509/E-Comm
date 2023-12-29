import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  product:any;

  constructor(
    private _actRoute:ActivatedRoute,
    private _productService:ProductService

    ){

  }
    
  ngOnInit():void{

    let id =  this._actRoute.snapshot.paramMap.get('id')

    console.log("product id ",id);
    
    this.getProducts(id);

  }

   getProducts(itemId:any){
    let productList= this._productService.getProductsService();

     console.log(productList);

     let item = productList.find((item: { id: number; })=> item.id==itemId);
      console.log(item);
      this.product = item;

       console.log("product", this.product);
       
      
   }
}
