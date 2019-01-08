import { Injectable } from '@angular/core';
import { Response } from '@angular/http';

import { DataService } from '../../shared/services/data.service';
import { ConfigurationService } from '../../shared/services/configuration.service';
import { IUser } from '../../shared/models/user.model';

import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/map';

@Injectable()
export class RegisterService {
    private identityProfileUrl: string;
    constructor(private service: DataService, private configurationService: ConfigurationService) {
        if (configurationService.serverSettings) {
            this.identityProfileUrl = configurationService.serverSettings.identityProfileUrl;
        }
        configurationService.settingsLoaded$.subscribe(x => {
            this.identityProfileUrl = configurationService.serverSettings.identityProfileUrl;
        });
    }

    public register(user: IUser): Observable<boolean> {
        const url = `${this.identityProfileUrl}/api/v1/UserProfiles/createProvider`;
        return this.service.postWithId(url, user).map(res => { return res.ok });
    }

//    this.identityProfileService.Register(this.agent).subscribe(response => console.log(response), error => {
//    this.IsValid = false;
//    this.ErrorMessage = (error.messages[0] as string).replace("\n","-Test-");
//      });
}