
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class Product {
    pro:any;
    constructor(){
        this.pro = [
            {id:'1',name:"Áo sơ mi",price:"100$",Category_id:1},
            {id:'2',name:"Áo khoác",price:"500$",Category_id:1},
            {id:'3',name:"Quần đùi",price:"500$",Category_id:2},
            {id:'4',name:"Quần dài",price:"1000$",Category_id:2},
            {id:'5',name:"Giày Gucci",price:"10000$",Category_id:3},
            {id:'6',name:"Giày LV",price:"1000$",Category_id:3},
        ]
    }
}
