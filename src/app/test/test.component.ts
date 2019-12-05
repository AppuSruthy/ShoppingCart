import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
message;
products;
showedit;
pname;
newc;
pprice;
  constructor(private http:HttpClient) { }

  ngOnInit() {
  }
connect(){
  var url="http://localhost:5000/data";
  this.http.get(url).subscribe(data=>{
    console.log(data);
    this.products=data;
  })
}
Delete(name){
  var data={pName:name}
  var url="http://localhost:5000/delete";
  this.http.post(url,data).subscribe(res=>{
    console.log(res);
  })
}
edit(name,cmp,price){
  this.showedit=true;
  this.pname=name;
  this.newc=cmp;
  this.pprice=price;
}
update(){
  this.showedit=false;
 // this.router.navigateByUrl("/server")
 var url="http://localhost:5000/update"
 var data={Name:this.pname,newComp:this.newc,newPrice:this.pprice}
 this.http.post(url,data).subscribe(data=>{})
}
  

}
