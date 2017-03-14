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

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController,
    public modalCtrl: ModalController, public viewCtrl: ViewController) {
    this.initializeItems();
  }

  initializeItems(){
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

  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  ionViewDidLoad() {
    var previous = this.navParams.get('previous');
    if(previous) this.viewCtrl.setBackButtonText(previous);
    console.log('ionViewDidLoad HousingServiceOrderingPage');
  }

  commonServiceSelect(item){
    let modal = this.modalCtrl.create(CommonServiceDetailPage, item);
    modal.present();
  }

}
