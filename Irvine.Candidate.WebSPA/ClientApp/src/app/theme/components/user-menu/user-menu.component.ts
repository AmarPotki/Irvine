import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import {SecurityService} from "../../../shared/services/security.service"

@Component({
    selector: 'app-user-menu',
    templateUrl: './user-menu.component.html',
    styleUrls: ['./user-menu.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class UserMenuComponent implements OnInit {
    public userImage = '../assets/img/users/user.jpg';
    constructor(private securityService: SecurityService) { }

    ngOnInit() {
    }

    public logout() {
        this.securityService.Logoff();
    }

}
