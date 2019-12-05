import { Component, OnInit } from '@angular/core';
import {CalcService} from '../calc.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
s1:Number;
s2:Number;
calc;
products=[];
cart=[];
total:number=0;
  constructor(private cs:CalcService) { }

  ngOnInit() {
this.products=[{Title:"Printer",Price:9000},
{Title:"camera",Price:12000},
{Title:"Printer",Price:10000

}]
  

    }
    // Add(){
    // this.calc=this.cs.calculate(this.s1,this.s2);
    // }

    AddtoCart(prd){
      this.cart.push(prd);
      this.total+=prd.Price;
    }

    RemoveCart(p,i){
      this.cart.splice(i,1);
      this.total-=p.Price;
    }
  }


