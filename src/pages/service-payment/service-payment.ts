import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';

import { ServiceDetailPage } from '../service-detail/service-detail';

/*
  Generated class for the ServicePayment page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-service-payment',
  templateUrl: 'service-payment.html'
})
export class ServicePaymentPage {

  currentItems : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.currentItems = [
      {
        "serviceName": "Laundry",
        "dateOfService": "01/03/2017",
        "staff": "Anh Hung",
        "amount": "10",
        "due": "21/03/2017"
       },
       {
         "serviceName": "House Cleaning",
         "dateOfService": "03/03/2017",
         "staff": "Co Tam",
         "amount": "15",
         "due": "23/03/2017"
       },
       {
         "serviceName": "Grass Cutting",
         "dateOfService": "02/03/2017",
         "staff": "Chu Tam",
         "amount": "5",
         "due": "22/03/2017"
       }
     ];
  }

  openDetails(item){
    let modal = this.modalCtrl.create(ServiceDetailPage, item);
    modal.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServicePaymentPage');
  }

}
