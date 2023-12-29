import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  products:any=[]; 
  cart:any=[];

   getProductsService() {
     //throw new Error('Method not implemented.');
   }


   constructor(
    private _productService:ProductService
   ){

   }


   ngOnInit():void{

     this.getProduct();

   }
   
   c = this.getProductsService();

    getProduct(){
    const products= this._productService.getProductsService();

    console.log(products)
    this.products=products;

    


    }

    // add to cart function
      
    addTocart(id:any) {
      // console.log(id);

      let item = this.products.find((item: { id: any; })=> item.id=id);

      console.log(item);
      item.qnty=1;
      this.cart.push(item);

    console.log(this.cart);
    localStorage.setItem("cart", JSON.stringify(this.cart))
    }
}
