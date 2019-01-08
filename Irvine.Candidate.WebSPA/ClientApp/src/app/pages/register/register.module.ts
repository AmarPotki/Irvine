import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { RegisterComponent } from './register.component';
import { RegisterService } from "./register.service";
import { DataService } from "../../shared/services/data.service";
import { ConfigurationService } from "../../shared/services/configuration.service";

export const routes = [
    { path: '', component: RegisterComponent, pathMatch: 'full' }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FormsModule,
        ReactiveFormsModule,
        SharedModule
    ],
    declarations: [
       // RegisterComponent
    ],
    providers: [
        RegisterService,
        DataService,
        ConfigurationService
    ]
})
export class RegisterModule { }