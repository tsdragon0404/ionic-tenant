import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ModalController, ViewController } from 'ionic-angular';
import { WaitingServiceDetailPage } from '../waiting-service-detail/waiting-service-detail';

/*
  Generated class for the WaitingServiceOverview page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-waiting-service-overview',
  templateUrl: 'waiting-service-overview.html'
})
export class WaitingServiceOverviewPage {
  requests: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams, 
    public loadingCtrl: LoadingController, 
    public modalCtrl: ModalController,
    public viewCtrl: ViewController) {

    this.requests = navParams.data;

  }

  ionViewDidLoad() {
    this.viewCtrl.setBackButtonText('');
    console.log('ionViewDidLoad WaitingServiceOverviewPage');
  }

  onSelected(item){
    /*
    let modal = this.modalCtrl.create(WaitingServiceDetailPage, item);
    modal.present();
    */
    this.navCtrl.push(WaitingServiceDetailPage, item);
  }

}
