import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, LoadingController, ModalController } from 'ionic-angular';
import {RequestHistoryPage} from '../request-history/request-history';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public loadingCtrl: LoadingController, public modalCtr: ModalController) {
    this.service = this.navParams.data;
    console.log(this.navParams.data);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WaitingServiceDetailPage');
  }

/*
  dismiss() {
    this.viewCtrl.dismiss();
  }
*/
  fetchHistory(service){
    let modal = this.modalCtr.create(RequestHistoryPage, service);
    modal.present();
  }

}
