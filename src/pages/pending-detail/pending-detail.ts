import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, LoadingController } from 'ionic-angular';

/*
  Generated class for the PendingDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-pending-detail',
  templateUrl: 'pending-detail.html'
})
export class PendingDetailPage {

  service: any;
  personnel:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public loadingCtrl: LoadingController) {
    this.service = this.navParams.data;
    this.personnel = [
      {name: 'Anh Hung'},
      {name: 'Co Tam'},
      {name: 'Chi Thom'},
      {name: 'Chu Cao'},
      {name: 'Anh Tuan'}
    ];
    console.log(this.navParams.data);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PendingDetailPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  change(){
    let loader = this.loadingCtrl.create({
      content: "Request changing...",
      duration: 3000
    });
    loader.present().then(() => {
        this.viewCtrl.dismiss();
    });
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
