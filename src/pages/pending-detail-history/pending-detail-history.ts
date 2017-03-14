import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

/*
  Generated class for the PendingDetailHistory page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-pending-detail-history',
  templateUrl: 'pending-detail-history.html'
})
export class PendingDetailHistoryPage {
  items: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.items = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PendingDetailHistoryPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  getColor(status){
    if(status == 'create')
      return 'primary';
    if(status == 'reject')
      return 'danger';
    if(status == 'modify')
      return 'primary';
  }

}
