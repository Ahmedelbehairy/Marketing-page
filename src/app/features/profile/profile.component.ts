import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  show: boolean = false
  Successfully: boolean = false
  cartProduct: any[] = [];
  total: any = 0

  ngOnInit(): void {
    this.getCartProduct()
  }
  // get product to cart page
  getCartProduct() {
    if ("cart" in localStorage) {
      this.cartProduct = JSON.parse(localStorage.getItem("cart")!)
      this.getCartTotalPrice()
    } else {
      this.show = false
    }
  }
  //collect total price of all product
  getCartTotalPrice() {
    this.total = 0
    this.show = false
    for (let i in this.cartProduct) {
      this.total += this.cartProduct[i].item.price * this.cartProduct[i].quantity;
    }
    if (this.total == 0) {
      this.show = true
    }
  }
  //check for any change input
  detectChange() {
    this.getCartTotalPrice()
    localStorage.setItem("cart", JSON.stringify(this.cartProduct))
  }
  //delete product
  deleteProduct(index: number) {
    this.cartProduct.splice(index, 1)
    localStorage.setItem("cart", JSON.stringify(this.cartProduct))
    this.getCartTotalPrice()
  }
  //delete all product and remove cart from local storage
  deleteAllProduct() {
    this.cartProduct = []
    localStorage.removeItem("cart")
    this.getCartTotalPrice()
    this.show = true
}
}
