import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, ViewController } from 'ionic-angular';

/*
  Generated class for the EmergencyRepair page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-emergency-repair',
  templateUrl: 'emergency-repair.html'
})
export class EmergencyRepairPage {

  services: Array<{value: string, name: string}>;
  order: {serviceName: string, comment: string};

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController,
        public viewCtrl: ViewController) {
    this.services = [
      {value: 'gas', name: 'Gas leaking'},
      {value: 'elec', name: 'Electrics'},
      {value: 'light', name: 'Lighting failure'},
      {value: 'sewage', name: 'Sewage overflowing'}
    ];
    this.order = {serviceName: '', comment: ''};
  }

  onSubmit(value: any){
    console.log(value);
    let toast = this.toastCtrl.create({
      message: 'Service ordered successfully',
      position: 'top',
      duration: 3000
    });
    toast.present();
  }

  ionViewDidLoad() {
    var previous = this.navParams.get('previous');
    if(previous) this.viewCtrl.setBackButtonText(previous);
    console.log('ionViewDidLoad HousingServiceOrderingPage');
  }

}
