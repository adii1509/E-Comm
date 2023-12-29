import { Component, ɵinternalCreateApplication } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  cartItems=0;
  grandTotal=0;
  itemsList:any;

   ngOnInit():void{

     if (localStorage.getItem("cart")){

     let items:any= localStorage.getItem("cart")

    //    console.log(items);
    //  console.log(JSON.parse(items))

     let itemsArray= JSON.parse(items);
     this.itemsList=itemsArray;
     this.cartItems= itemsArray.length;

    //  console.log("items list", this.itemsList);

     this.grandTotalCartItems();

     }
   }


   increasQnty(index:any){
    // console.log("Index No.:", index);
    // console.log("item+1");

     if( this.itemsList[index].qnty < 10){
      this.itemsList[index].qnty =  this.itemsList[index].qnty +1;
      this.grandTotalCartItems();

     }    else{
      alert("Maximum 10 Qnt")
     }
   }

   decreasQnty(index:any){
    console.log("Index No.:", index);
    console.log("item -1");


     if( this.itemsList[index].qnty== 1){
      return alert("Minimum 1 Qnt")
     }
     else{
      this.itemsList[index].qnty =  this.itemsList[index].qnty -1;

      this.grandTotalCartItems();
     }  

   }

    grandTotalCartItems(){
   
      // console.log(this.itemsList);
      this.grandTotal=0;

      for(let i=0; i< this.itemsList.length; i++){
        //  console.log(`product ${i}: `, this.itemsList[i]);
             this.grandTotal= (this.grandTotal)+(this.itemsList[i].price * this.itemsList[i].qnty)
      }

    }
}
