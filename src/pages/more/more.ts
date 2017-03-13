import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, ActionSheetController } from 'ionic-angular';

import { LoginPage } from '../login/login'
import { AccountPage } from '../account/account';
import { SettingsPage } from '../settings/settings';
import { AboutPage } from '../about/about';

/*
  Generated class for the More page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-more',
  templateUrl: 'more.html'
})
export class MorePage {

  pages: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController) {
    this.pages = [
      { icon: 'cog', title: 'Settings', component: SettingsPage },
      { icon: 'information-circle', title: 'About us', component: AboutPage }
    ];
  }

  openAccountPage(){
    this.navCtrl.push(AccountPage);
  }

  openPage(page){
    this.navCtrl.push(page.component);
  }

  logout(){
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Are you sure you want to log out?',
      buttons: [
        {
          text: 'Log Out',
          role: 'destructive',
          handler: () => {
            this.navCtrl.parent.parent.setRoot(LoginPage);
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => { }
        }
      ]
    });
    actionSheet.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MorePage');
  }

}
