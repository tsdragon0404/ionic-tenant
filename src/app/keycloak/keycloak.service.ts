import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';

declare var Keycloak: any;

@Injectable()
export class KeycloakService {
  static auth: any = {};

  static init(): Promise<any> {
    
    const keycloakAuth: any = Keycloak({
      "realm": "2home",
      "url": "https://kc-ap.2homes.vn/auth",
      "clientId": "owner",
      "credentials": {
        "secret": "9c2f783d-6b2b-4d36-8e62-afc2cfe68ea3"
      }
    });
    
    KeycloakService.auth.loggedIn = false;

    return new Promise((resolve, reject) => {
      keycloakAuth.init({ onLoad: 'login-required', checkLoginIframe: false})
      .success(() => {
        KeycloakService.auth.loggedIn = true;
        KeycloakService.auth.authz = keycloakAuth;
        KeycloakService.auth.logoutUrl = keycloakAuth.authServerUrl
          + '/realms/2home/protocol/openid-connect/logout?redirect_uri='
          + document.baseURI;
        resolve();
      })
      .error(() => {
        reject();
      });
    });
  }

  logout() {
    console.log('*** LOGOUT');
    KeycloakService.auth.authz.logout();
    KeycloakService.auth.loggedIn = false;
    KeycloakService.auth.authz = null;
    
    //window.location.href = KeycloakService.auth.logoutUrl;
  }

  getToken(): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      if (KeycloakService.auth.authz.token) {
        KeycloakService.auth.authz
          .updateToken(5)
          .success(() => {
            resolve(<string>KeycloakService.auth.authz.token);
          })
          .error(() => {
            reject('Failed to refresh token');
          });
      } else {
        reject('Not loggen in');
      }
    });
  }
}
