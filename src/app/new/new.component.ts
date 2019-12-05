import { Component, OnInit } from '@angular/core';
//import { SampleService } from '../sample.service';
import{HttpClient} from '@angular/common/http';



@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
message;
prd;
name:string;
company;
price;

  constructor(private http:HttpClient) { }

  ngOnInit() {
    // this.msg=this.ss.showmsg();
  }

  AddProduct(){
    var url="http://localhost:5000/insert";
    var data={"name":this.name,"company":this.company,"price":this.price};
    this.http.post(url,data).subscribe(data=>{
      console.log(data);
      this.message=data;
    })
  }
}
