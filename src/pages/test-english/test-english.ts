import {Component} from '@angular/core';
import {Http} from '@angular/http';
import {NavController} from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { DataService } from './data.service';


@Component({
  templateUrl: 'test-english.html'
})
export class TestenglIonicPage {
	http:any;
	items:any;
	questions: Object[]; 
	correct: number;

  	constructor(public navCtrl: NavController,http: Http, public alertCtrl: AlertController) {
    	this.http = http;
        this.http.get("assets/data/test.json")
            .subscribe(data =>{
              this.items=JSON.parse(data._body);//Bind data to items object
              this.questions = this.items;
            },error=>{
                console.log(error);// Error getting the data
            } );
	}
	title = 'This Is Test Online';

	saveStatus(question: Object, choiced:String) {
		question['choiced'] = choiced;

	}

	check() { 
		this.correct = 0;
		for (let i = 0; i < this.questions.length; i ++){
		  if(this.questions[i]['choiced'] == this.questions[i]['answer']){
		    this.correct++;
		    //Xem cau tra loi dung hay sai
		    this.questions[i]['status'] = "correct";
		  }else{
		    this.questions[i]['status'] = "incorrect";
		  }
		}

		let alert = this.alertCtrl.create({
	      title: 'Your result:',
	      subTitle: 'You have ' + this.correct + ' sentences correct',
	      buttons: ['OK']
	    });
	    alert.present();

	}
}
