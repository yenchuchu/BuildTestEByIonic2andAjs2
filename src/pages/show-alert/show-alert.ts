import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the ShowAlert page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-show-alert',
  templateUrl: 'show-alert.html'
})
export class ShowAlert {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello ShowAlert Page');
  }

}
