import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-change-products',
  templateUrl: './change-products.component.html',
  styleUrls: ['./change-products.component.scss']
})
export class ChangeProductsComponent {
@Input() data:any[] =[]
@Output() selectedValue = new EventEmitter()

itemsChange(event:any){
this.selectedValue.emit(event)
}
}
