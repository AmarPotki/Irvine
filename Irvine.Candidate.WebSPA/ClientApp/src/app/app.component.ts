import { Component, ViewChild} from '@angular/core';
import { Subscription }   from 'rxjs/Subscription';

import { AppSettings } from './app.settings';
import { Settings } from './app.settings.model';
import { SecurityService } from './shared/services/security.service';
import { ConfigurationService } from './shared/services/configuration.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public settings: Settings;
  Authenticated: boolean = false;
  subscription: Subscription;
  constructor(public appSettings:AppSettings,private securityService: SecurityService, private configurationService: ConfigurationService){
      this.settings = this.appSettings.settings;
      this.Authenticated = this.securityService.IsAuthorized;
  } 

  ngOnInit() {
    console.log('app on init');
    this.subscription = this.securityService.authenticationChallenge$.subscribe(res => this.Authenticated = res);

    //Get configuration from server environment variables:
    console.log('configuration');
    this.configurationService.load();
   }
}