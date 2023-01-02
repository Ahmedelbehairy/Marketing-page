import { product } from './../../core/inter-face/product';
import { Component, EventEmitter, Input, Output, } from '@angular/core';
import { ProductsService } from 'src/app/core/service/products.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
  @Input() data:any
  @Output() item = new EventEmitter()
  oneProduct: any;
  id: any ;
  numberOfCart:number = 0;
  constructor(private _ProductsService: ProductsService) { }

  ngOnInit(): void {
  }
  getIdProduct(id: any) {
    this.id = id
    this.getOneProduct()
  }
  getOneProduct() {
    this._ProductsService.getOneProducts(this.id).subscribe((res: any) => {
      this.oneProduct = res
    }, error => {
      alert('error')
    })
  }
  add(){
    this.item.emit({item:this.oneProduct , quantity:this.numberOfCart})
  }
}

