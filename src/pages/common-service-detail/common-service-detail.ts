import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, LoadingController } from 'ionic-angular';

/*
  Generated class for the CommonServiceDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-common-service-detail',
  templateUrl: 'common-service-detail.html'
})
export class CommonServiceDetailPage {
  services: any;
  personnel:any;
  request = { name: "", service: "", useVIP: false, dateStart: null, timeStart: null, comments: "", worker: "", isAtHome: true };
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public loadingCtrl: LoadingController) {
    this.request.name = this.navParams.data.name;
    this.services = this.navParams.data.services;
    this.personnel = [
      {name: 'Anh Hung'},
      {name: 'Co Tam'},
      {name: 'Chi Thom'},
      {name: 'Chu Cao'}
    ];
    console.log(this.navParams.data);

  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  create(){
    let loader = this.loadingCtrl.create({
      content: "Request submitting...",
      duration: 3000
    });
    loader.present().then(() => {
        this.viewCtrl.dismiss();
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommonServiceDetailPage');
  }

}
