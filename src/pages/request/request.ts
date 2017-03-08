import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ModalController, Platform, ViewController } from 'ionic-angular';

import { CreateRequestPage } from '../create-request/create-request';

/*
  Generated class for the Request page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-request',
  templateUrl: 'request.html'
})
export class RequestPage {

  items: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public modalCtrl: ModalController) {
    this.items = [
      {
        name: "Housing",
        services: [
          {
            name: "Dry cleaning"
          },
          {
            name: "Clean the Kitchen"
          }
        ]
      },
      {
        name: "Transporting",
        services: [
          {
            name: "Book Taxi"
          },
          {
            name: "Delivery Express"
          }
        ]
      }
    ];
  }

  serviceSelected(service){
    let modal = this.modalCtrl.create(CreateRequestPage, service);
    modal.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RequestPage');
  }

}
