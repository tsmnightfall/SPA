import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/category';
@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.css']
})
export class MoreComponent implements OnInit {
  pro:any = [];
  constructor(private ActRoute: ActivatedRoute, private Pro: Product) { 
    
  }

  ngOnInit(): void {
    this.pro = [];
    let id_cat = this.ActRoute.snapshot.params["id"];
    this.Pro.pro.map((item:any)=>{
      if(item.Category_id == id_cat){
        this.pro.push(item);
      }else{

      }
    })
    
  }
  

}
