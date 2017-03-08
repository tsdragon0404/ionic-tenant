import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the UtilitiesPayment page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-utilities-payment',
  templateUrl: 'utilities-payment.html'
})
export class UtilitiesPaymentPage {

  isInFull: boolean = true;
  payAmount: number = 0;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad UtilitiesPaymentPage');
  }

}
