import { Component } from '@angular/core';
import { CartService } from 'src/app/core/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  show:boolean = false
  Successfully:boolean = false
  cartProduct:any [] = [];
  total:any = 0
  loading:boolean=false
  constructor(private _CartService: CartService){}
  ngOnInit(): void {
    this.getCartProduct()
  }
  // get product to cart page
  getCartProduct(){
    if ("cart" in localStorage) {
      this.show = true
      this.loading = true
      this.cartProduct = JSON.parse(localStorage.getItem("cart")!)
      this.getCartTotalPrice()
      this.loading = false
    }else{
      this.show = false
    }
  }
  //collect total price of all product
  getCartTotalPrice(){
    this.total = 0
    for(let i in this.cartProduct){
      this.total += this.cartProduct[i].item.price * this.cartProduct[i].quantity;
    }
    if (this.total == 0) {
      this.show = false
    }
  }
  // get one more product
  plusCart(index:number){
    this.cartProduct[index].quantity ++
    this.getCartTotalPrice()
    localStorage.setItem("cart", JSON.stringify(this.cartProduct))
  }
  // remove one more product
  minsCart(index:number){
    this.cartProduct[index].quantity --
    this.getCartTotalPrice()
    localStorage.setItem("cart", JSON.stringify(this.cartProduct))
  }
  //check for any change input
  detectChange(){
    this.getCartTotalPrice()
    localStorage.setItem("cart", JSON.stringify(this.cartProduct))
  }
  //delete product
  deleteProduct(index:number){
    this.cartProduct.splice(index , 1)
    localStorage.setItem("cart", JSON.stringify(this.cartProduct))
    this.getCartTotalPrice()
  }
  //delete all product and remove cart from local storage
  deleteAllProduct(){
    this.cartProduct = []
    localStorage.removeItem("cart")
    this.getCartTotalPrice()
    this.show = false
  }
  addCart(){
    let products = this.cartProduct.map(item => {
      return {productId: item.item.id, quantity:item.quantity}
    })
    let Model = {
      userId: 5,
      date: new Date(),
      products:products
    }
    console.log(Model);
    // this._CartService.createNewCart(Model).subscribe(res => { this.Successfully = true })
  }
}
