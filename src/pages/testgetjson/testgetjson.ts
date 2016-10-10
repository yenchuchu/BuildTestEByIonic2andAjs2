import {Component} from '@angular/core';
import {Http} from '@angular/http';
import {NavController} from 'ionic-angular';
 
@Component({
  templateUrl: 'testgetjson.html'
})
export class HomePage {
  title = 'Test get data from api';
  http:any;
  items:any;
  constructor(public navCtrl: NavController,http: Http) {
    this.http = http;
        this.http.get("http://api.randomuser.me/?results=10")
            .subscribe(data =>{
              console.log(data);
              this.items=JSON.parse(data._body).results;//Bind data to items object
              console.log(this.items);
            },error=>{
                console.log(error);// Error getting the data
            } );
  }
  // http://api.randomuser.me/?results=10 ->this.items=JSON.parse(data._body).results;
  // http://localhost/allProjects/TestEnglishOnline/public/userssss
 
  buttonClick(event){
   console.log("button clicked");
   console.log(event);
  }
 
  itemClicked(event,itemData){
    console.log("item clicked");
    console.log(event);
    console.log(itemData);
  }
}