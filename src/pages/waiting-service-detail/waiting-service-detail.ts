import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, LoadingController } from 'ionic-angular';

/*
  Generated class for the WaitingServiceDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-waiting-service-detail',
  templateUrl: 'waiting-service-detail.html'
})
export class WaitingServiceDetailPage {
  service: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public loadingCtrl: LoadingController) {
    this.service = this.navParams.data;
    console.log(this.navParams.data);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WaitingServiceDetailPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
