import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { ExtendServicesDetailPage } from '../extend-services-detail/extend-services-detail';

/*
  Generated class for the ExtendServicesList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-extend-services-list',
  templateUrl: 'extend-services-list.html'
})
export class ExtendServicesListPage {
  items: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public viewCtrl: ViewController, 
    public modalCtrl: ModalController) {

    this.items = this.navParams.data;
  
}

  ionViewDidLoad() {
    this.viewCtrl.setBackButtonText('');
    console.log('ionViewDidLoad ExtendServicesListPage');
  }

  extendServiceDetail(item){
    let modal = this.modalCtrl.create(ExtendServicesDetailPage, item);
    modal.present();    
  }

}
