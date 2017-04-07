import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading } from 'ionic-angular';
import { KeycloakService } from '../../app/keycloak/keycloak.service';
import { HomePage } from '../home/home';
 
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  loading: Loading;
  registerCredentials = {email: '', password: ''};
 
  constructor(private nav: NavController, private alertCtrl: AlertController, private loadingCtrl: LoadingController) {
    if(KeycloakService.auth.loggedIn){
      this.nav.setRoot(HomePage);
    }
  }
 
  login() {

    KeycloakService.init()
        .then(() => { 
          this.nav.setRoot(HomePage);
        })
        .catch(() => { 
          window.location.reload();
        });
  }
 
  showError(text) {
    setTimeout(() => {
      this.loading.dismiss();
    });
 
    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  }
}