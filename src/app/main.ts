import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';
import { environment } from '../environments/environment';
import { KeycloakService } from './keycloak/keycloak.service';


if (environment.production) {
  enableProdMode();
}

KeycloakService.init()
  .then(() => { 
    platformBrowserDynamic().bootstrapModule(AppModule); 
  })
  .catch(() => { 
    window.location.reload(); 
  });

