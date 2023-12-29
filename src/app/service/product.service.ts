import { Injectable, ViewChild } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products:any =[
    {
      id:1,
      title:"Bear Hoodie ",
      category:"Fashion",
      subCategory:"Hood",
      price:1000,
      discount:0,
      thumbnailimage:"assets/Ecom.img/Bear.hoodimg.jpeg",
      Image:[],
      color:{
        value:'olive',
        viewValue:"Olive"
      },
      gender:"male",
      suitableFor:"Men",
      occasion:"Genral",
      eventType:"Casual",
     },
    {
        id:2,
      title:"Titan watch",
      category:"Fashion",
      subCategory:"Watch",
      price:1500,
      discount:0,
      thumbnailimage:"assets/Ecom.img/Titan.1img.jpeg",
      Image:[],
      color:{
        value:'Copper',
        viewValue:"Copper"
      },
      gender:"male",
      suitableFor:"MEn",
      occasion:"Genral",
      eventType:"Casual",
      },
       {
        id:3,
      title:"Etheos",
      category:"Fashion",
      subCategory:"Watch",
      price:1500,
      discount:0,
      thumbnailimage:"assets/Ecom.img/Ethoes.1img.jpeg",
      Image:[],
      color:{
        value:'Silver',
        viewValue:"Metalic"
      },
      gender:"male",
      suitableFor:"Men",
      occasion:"Genral",
      eventType:"Casual",
      },
    //    {
    //     id:4,
    //   title:"Samsung LED TV",
    //   category:"Electronic",
    //   subCategory:"TV",
    //   price:29999,
    //   discount:0,
    //   thumbnailimage:"assets/Ecom.img/Samsung-tv.avif",
    //   Image:[],
    //   color: {
    //     value:'Black',
    //   viewValue:"balck"
    //   }
    //  },
     {
      id:4,
    title:"Nikie Dunk High",
    category:"Fashion",
    subCategory:"Shoe",
    price:14195,
    discount:0,
    thumbnailimage:"assets/Ecom.img/Nikie.E.jpeg",
    Image:[],
    color:{
      value:'Blue-White',
      viewValue:"Fabric"
    },
    gender:"male",
    suitableFor:"Men",
    occasion:"Genral",
    eventType:"Casual",
    },
    {
      id:5,
    title:"Levis",
    category:"Fashion",
    subCategory:"Clothing",
    price:2000,
    discount:0,
    thumbnailimage:"assets/Ecom.img/LevisKids.E.jpg",
    Image:[],
    color:{
      value:'Blue-White',
      viewValue:"Cotton"
    },
    gender:"male",
    suitableFor:"Kids",
    occasion:"Genral",
    eventType:"Casual",
    },
    {
      id:6,
    title:"Levis",
    category:"Fashion",
    subCategory:"Clothing",
    price:1500,
    discount:0,
    thumbnailimage:"assets/Ecom.img/Levis.E.jpg",
    Image:[],
    color:{
      value:'Black',
      viewValue:"Cotton"
    },
    gender:"male",
    suitableFor:"men",
    occasion:"Genral",
    eventType:"Casual",
    },
    {
      id:7,
    title:"Shoetopia Black",
    category:"Fashion",
    subCategory:"Shoe",
    price:1200,
    discount:0,
    thumbnailimage:"assets/Ecom.img/shoe.ECom.jpeg",
    Image:[],
    color:{
      value:'Blue',
      viewValue:"Polyurethane"
    },
    gender:"female",
    suitableFor:"Women",
    occasion:"Genral",
    eventType:"Casual",
    },
    {
      id:8,
    title:"Mesh Whites",
    category:"Part Wear",
    subCategory:"Sports Shoe",
    price:1100,
    discount:0,
    thumbnailimage:"assets/Ecom.img/Shoe.3ECom.jpeg",
    Image:[],
    color:{
      value:'White',
      viewValue:"Rubber"
    },
    gender:"Female",
    suitableFor:"Women",
    occasion:"Party Wear",
    eventType:"Casual",
    }
  ];
  constructor() { }


  getProductsService(){
    
    return this.products;

  }
}
