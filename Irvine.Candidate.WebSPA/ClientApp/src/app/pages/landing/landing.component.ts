import { Component } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';


import { AppSettings } from '../../app.settings';
import { Settings } from '../../app.settings.model';
import { SecurityService } from '../../shared/services/security.service';


@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
    public authenticated: boolean = false;
    public settings: Settings;

    private subscription: Subscription;
    private userName: string = '';
    constructor(public appSettings: AppSettings,private router: Router, private securityService: SecurityService) {
        this.settings = this.appSettings.settings;
    }

    ngOnInit() {
        this.subscription = this.securityService.authenticationChallenge$.subscribe(res => {
            this.authenticated = res;
            this.redirectIfAuthenticated();
        });

        if (window.location.hash) {
            this.securityService.AuthorizedCallback();
        }

        this.settings.rtl = false;
        this.authenticated = this.securityService.IsAuthorized;

        if (this.authenticated) {
            if (this.securityService.UserData)
                this.userName = this.securityService.UserData.email;
        }
       // this.redirectIfAuthenticated();
    }

    ngAfterViewInit() {
        this.settings.loadingSpinner = false;
    }

    public login() {
        this.securityService.Authorize();
    }

    public changeLayout(menu, menuType, isRtl) {
        this.settings.menu = menu;
        this.settings.menuType = menuType;
        this.settings.rtl = isRtl;
        this.settings.theme = 'indigo-light';
    }

    public changeTheme(theme) {
        this.settings.theme = theme;
    }

    private redirectIfAuthenticated() {
        if (this.authenticated) {
            this.router.navigate(['/', 'users']);
        }
    }

}
