import { product } from './../../core/inter-face/product';
import { Component } from '@angular/core';
import { ProductsService } from 'src/app/core/service/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  constructor(private _ProductsService: ProductsService) { }
  products: product[] = [];
  Categories: string[] = [];
  loading: boolean = false;
  cartProduct:any[]=[] ;
  ngOnInit(): void {
    this.getAllProduct()
    this.getAllCategories()
  }
  // get api of product and put it  in product array
  getAllProduct() {
    this.loading = true
    this._ProductsService.getAllProducts().subscribe((res: any) => {
      this.products = res
      this.loading = false
    }, error => {
      alert('error')
    })
  }
  // get api of Categories and put it  in Categories array
  getAllCategories() {
    this._ProductsService.getAllCategories().subscribe((res: any) => {
      this.Categories = res
    }, error => {
      alert('error')
    })
  }
  // change products by name
  changeProduct(event: any) {
    let value = event.target.value;
    (value == 'All') ? this.getAllProduct() : this.getProductByName(value)
  }
  // get all product that has the same name from api and put it in product array
  getProductByName(data: string) {
    this.loading = true
    this._ProductsService.getProductByName(data).subscribe((res: any) => {
      this.products = res
      this.loading = false
    }, error => {
      alert('error')
    })
  }
  // add products to local storage
  addToCart(event:any){
    if ("cart" in localStorage) { // check products to local storage
      this.cartProduct = JSON.parse(localStorage.getItem("cart")!)
      let product = this.cartProduct.find(item => item.item.id == event.item.id)
      if  (product){
        alert ( "you already buy it" )
      }else{
        this.cartProduct.push(event)
        localStorage.setItem("cart", JSON.stringify(this.cartProduct))
      }
    }else{
      this.cartProduct.push(event)
      localStorage.setItem("cart", JSON.stringify(this.cartProduct))
      }
  }
}
