import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  searchProduct:any="as"
  isMacBookAirSearched: boolean = true;
  isNikonSearched: boolean = true;
  isIpadSearched: boolean = true;
  isHeadphonesSearched: boolean = true;
  products = [
    { title: 'Macbook Air', price: 649, availability: 10, /* other properties */ },
    { title: 'Nikon DSLR', price: 250, availability: 5, /* other properties */ },
    // Add more products here
  ];


  applyFilter() {
    // Convert the search term and product title to lowercase for case-insensitive comparison
    const searchTermLower = this.searchProduct.toLowerCase();
    const macbookAirTitleLower = 'macbook air'.toLowerCase();
    const nikonDSLRTitleLower = 'nikon dslr'.toLowerCase();
    const headPhonesTitleLower = 'Sony Headphone'.toLowerCase();
    const ipadTitleLower = 'Apple iPad'.toLowerCase();

    this.isMacBookAirSearched = searchTermLower === macbookAirTitleLower;
    this.isNikonSearched = searchTermLower === nikonDSLRTitleLower;
    this.isIpadSearched = searchTermLower === ipadTitleLower;
    this.isHeadphonesSearched = searchTermLower === headPhonesTitleLower;
  }

 
macbook={
title:"Mac"
}
ipadVal:number=10;
headphonesdVal:number=10;
macBookVal:number=10;
nikonVal:number=10;

isIpadAvailable(val: number): boolean {
  return val > 0;
}
isHeadphonesAvailable(val: number): boolean {
  return val > 0;
}
isMacBookAvailable(val: number): boolean {
  return val > 0;
}
isnikonAvailable(val: number): boolean {
  return val > 0;
}
ipadDec():void {
  console.log(" ipad clicked")
  this.ipadVal--;
}
headphonesDec():void{
  console.log(" headphones clicked")
  this.headphonesdVal--;
}


macBookDec():void{
  console.log(" mackbook clicked")
  this.macBookVal--;
}


nikonDec():void{
  console.log(" nikon clicked")
  this.nikonVal--;
}


outOfStock(val:number):boolean{
if(val>0){
  return true;
}
else{
  return false
}
}
// isSearchedProduct():boolean{

// }

addToChartPopUp(){
  alert("Added To Chart");
}
}
