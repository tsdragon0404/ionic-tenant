import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the StatisticServiceOrdering page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-statistic-service-ordering',
  templateUrl: 'statistic-service-ordering.html'
})
export class StatisticServiceOrderingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad StatisticServiceOrderingPage');
  }

}
