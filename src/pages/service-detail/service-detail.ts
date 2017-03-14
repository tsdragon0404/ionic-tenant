import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, LoadingController } from 'ionic-angular';

/*
  Generated class for the ServiceDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-service-detail',
  templateUrl: 'service-detail.html'
})
export class ServiceDetailPage {

  item: any;
  isInFull: boolean = true;
  payAmount: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public loadingCtrl: LoadingController) {
    this.item = this.navParams.data;
  }

  onSubmit(){
    let loader = this.loadingCtrl.create({
      content: "Saving...",
      duration: 2000
    });
    loader.present().then(() => {

        this.viewCtrl.dismiss();
    });
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServiceDetailPage');
  }

}
