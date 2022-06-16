import { Component, OnInit ,Input} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICoin } from '../models/Icoin.model';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() coins!:ICoin[]
    constructor(private http:HttpClient){}

    getPrices(){
       

     this.http.get<any>("http://localhost:3000/").subscribe(data=>{
       
      this.coins=data.prices
      console.log(this.coins)

     })
      
    }
    ngOnInit(): void {
      setInterval(()=>{
      this.getPrices()
      },2000)
       
    }

}
