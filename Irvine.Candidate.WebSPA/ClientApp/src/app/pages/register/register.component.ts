import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { emailValidator, matchingPasswords } from '../../theme/utils/app-validators';
import { AppSettings } from '../../app.settings';
import { Settings } from '../../app.settings.model';
import { DataService } from "../../shared/services/data.service";
import { IUser } from "../../shared/models/user.model";
import { RegisterService } from "./register.service";
import { SecurityService } from "../../shared/services/security.service";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    providers: [RegisterService]
})
export class RegisterComponent {
    public form: FormGroup;
    public settings: Settings;
    public hasServerError: boolean;
    public serverError: string;

    constructor(public appSettings: AppSettings, public fb: FormBuilder, public router: Router, private service: DataService, private registerService: RegisterService, private securityService: SecurityService) {
        this.settings = this.appSettings.settings;
        this.form = this.fb.group({
            'name': [null, Validators.compose([Validators.required, Validators.minLength(3)])],
            'email': [null, Validators.compose([Validators.required, emailValidator])],
            'password': ['', Validators.required],
            'confirmPassword': ['', Validators.required]
        }, { validator: matchingPasswords('password', 'confirmPassword') });
    }

    public onSubmit(values: Object): void {
        this.hasServerError = false;
        if (this.form.valid) {
            const user: IUser = {
                name: this.form.controls["name"].value,
                email: this.form.controls["email"].value,
                password: this.form.controls["password"].value
            };
            this.registerService.register(user).subscribe(res => {
                console.log(res);
                this.securityService.Authorize();
            },
                errors => {
                    this.hasServerError = true;
                    this.serverError = errors.messages[0] as string;
                });
        }
    }

    ngAfterViewInit() {
        this.settings.loadingSpinner = false;
    }
}