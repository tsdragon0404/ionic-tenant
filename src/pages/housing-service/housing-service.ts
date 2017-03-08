import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { RequestPage } from '../request/request';
import { ProcessingPage } from '../processing/processing';
import { HistoryPage } from '../history/history';

/*
  Generated class for the HousingService page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-housing-service',
  templateUrl: 'housing-service.html'
})
export class HousingServicePage {

  tab1: any;
  tab2: any;
  tab3: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tab1 = RequestPage;
    this.tab2 = ProcessingPage;
    this.tab3 = HistoryPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HousingServicePage');
  }

}
