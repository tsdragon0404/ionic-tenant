import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, LoadingController } from 'ionic-angular';

/*
  Generated class for the RentalPayment page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-rental-payment',
  templateUrl: 'rental-payment.html'
})
export class RentalPaymentPage {

  isInFull: boolean = true;
  payAmount: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public loadingCtrl: LoadingController) {}

  onSubmit(){
    let loader = this.loadingCtrl.create({
      content: "Saving...",
      duration: 2000
    });
    loader.present().then(() => {
        /*
        this.viewCtrl.dismiss();
        */
        this.navCtrl.pop();
    });
  }

  ionViewDidLoad() {
    var previous = this.navParams.get('previous');
    if(previous) this.viewCtrl.setBackButtonText(previous);
    console.log('ionViewDidLoad RentalPaymentPage');
  }

}
