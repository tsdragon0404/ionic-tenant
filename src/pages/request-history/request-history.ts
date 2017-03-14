import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

/*
  Generated class for the RequestHistory page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-request-history',
  templateUrl: 'request-history.html'
})
export class RequestHistoryPage {
  items: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.items = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RequestHistoryPage');
  }

  dismiss(){
    this.viewCtrl.dismiss();
  }

  getColor(status){
    if(status == 'create')
      return 'primary';
    if(status == 'reject')
      return 'danger';
    if(status == 'modify')
      return 'primary';
    if(status == 'approved')
      return 'secondary';
  }

}
