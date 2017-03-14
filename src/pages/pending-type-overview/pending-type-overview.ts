import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ModalController, Platform, ViewController } from 'ionic-angular';
import { PendingDetailPage } from '../pending-detail/pending-detail';

/*
  Generated class for the PendingTypeOverview page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-pending-type-overview',
  templateUrl: 'pending-type-overview.html'
})
export class PendingTypeOverviewPage {
  requests: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public modalCtrl: ModalController) {
    this.requests = navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PendingTypeOverviewPage');
  }

  onSelected(item){
    /*
    let modal = this.modalCtrl.create(PendingDetailPage, item);
    modal.present();
    */
    this.navCtrl.push(PendingDetailPage, item);
  }

  getColor(status){
    if(status == 'PENDING_RESPONSE')
      return 'secondary';
    if(status == 'REJECT')
      return 'danger';
    if(status == 'PENDING_APPROVAL')
      return 'primary';
  }

}
