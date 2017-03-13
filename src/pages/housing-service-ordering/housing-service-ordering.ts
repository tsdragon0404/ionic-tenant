import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ModalController, Platform, ViewController } from 'ionic-angular';
import { CommonServiceDetailPage } from '../common-service-detail/common-service-detail';

/*
  Generated class for the HousingServiceOrdering page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-housing-service-ordering',
  templateUrl: 'housing-service-ordering.html'
})
export class HousingServiceOrderingPage {
  items: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public modalCtrl: ModalController) {
    this.items = [
      {
        name: "House Repairs",
        services: [
          {
            name: "Painting"
          },
          {
            name: "Plumbing"
          }
        ]
      },
      {
        name: "Home Services",
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
      },
      {
        name: "Food",
        services: [
          {
            name: "Cooking"
          },
          {
            name: "Delivery"
          }
        ]
      }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HousingServiceOrderingPage');
  }

  commonServiceSelect(item){
    let modal = this.modalCtrl.create(CommonServiceDetailPage, item);
    modal.present();
  }

}
