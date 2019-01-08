import { Component, OnInit, Inject, ElementRef, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatChipInputEvent } from '@angular/material';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { User } from '../user.model';
import { DataService } from '../../../shared/services/data.service';
import { Observable } from 'rxjs';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { startWith, map } from 'rxjs/operators';
import { ConfigurationService } from '../../../shared/services/configuration.service';

@Component({
    selector: 'app-user-dialog',
    templateUrl: './user-dialog.component.html',
    styleUrls: ['./user-dialog.component.scss']
})

export class UserDialogComponent implements OnInit {
    public form: FormGroup;
    @ViewChild('file') file;
    public files: Set<File> = new Set();
    public passwordHide: boolean = true;
    locationControl: FormControl = new FormControl();
    private baseUrl:string;
    locations = [
        'usa',
        'canada',
        'mexico'
    ];
    medicalDevices = [
        'a',
        'b',
        'c'
    ];
    manufacturingEngineers = [
        'adam',
        'r',
        'h'
    ];
    devices = [
        { value: 'steak-0', viewValue: 'Steak' },
        { value: 'pizza-1', viewValue: 'Pizza' },
        { value: 'tacos-2', viewValue: 'Tacos' }
    ];
    skills = [
        { name: 'C#' },
        { name: 'C++' },
        { name: 'Php' }
    ];

    skill = [
        { name: 'c#' },
        { name: 'c++' },
        { name: 'php' }
    ];
    autoTicks = false;
    disabled = false;
    invert = false;
    max = 100;
    min = 0;
    showTicks = false;
    step = 1;
    thumbLabel = true;
    value = 0;
    vertical = false;
    filteredLocations: Observable<string[]>;

    visible: boolean = true;
    selectable: boolean = true;
    removable: boolean = true;
    addOnBlur: boolean = true;
    separatorKeysCodes = [ENTER, COMMA];

    constructor(public dialogRef: MatDialogRef<UserDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public user: User,
        private dataService: DataService,
        private configurationService:ConfigurationService,
        public fb: FormBuilder) {
        this.form = this.fb.group({
            id: null,
            name: [null, Validators.compose([Validators.required, Validators.minLength(3)])],
            lastName: [null, Validators.compose([Validators.required, Validators.minLength(3)])],
            imageUrl: null,
            resumeUrl: null,
            lookingForNext: null,
            startTime: null,
            prescreeningLastVerified: null,
            minimumRate: null,
            maximumRate: null,
            locationId: null,
            medicalDevice: null,
            manufacturingEngineer: null,
            qualityEngineer: null,
            validationEngineer: null,
            SkillDtos: null
        });
    }

    ngOnInit() {
        this.filteredLocations = this.locationControl.valueChanges.
            pipe(
                startWith(''),
                map(val => this.filter(val))
            );
     
            if (this.user) {
            this.form.setValue(this.user);
        }
        else {
            this.user = new User();
        }
     }

    filter(val): string[] {
        return this.locations.filter(option => option.toLowerCase().indexOf(val.toLowerCase()) === 0);
    }
    showUploadDialog() {
        console.log("click");
        this.file.nativeElement.click();
    }
    add(event: MatChipInputEvent): void {
        let input = event.input;
        let value = event.value;

        if ((value || '').trim()) {
            this.skills.push({ name: value.trim() });
        }

        if (input) {
            input.value = '';
        }
    }

    remove(fruit: any): void {
        let index = this.skills.indexOf(fruit);

        if (index >= 0) {
            this.skills.splice(index, 1);
        }
    }

  
    onSubmit() {
        let url = `${this.configurationService.serverSettings.agentUrl}/api/v1/Candiate/createCanidate`;
        console.log("submit called", JSON.stringify(this.form.value));
        this.dataService.post(url, this.form.value, true).subscribe(
            res => console.log("Response", res.json),
            err => console.log("Error in Post", err)
        );
    }

    close(): void {
        this.dialogRef.close();
    }
    get tickInterval(): number | 'auto' {
        return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : 0;
    }
    set tickInterval(v) {
        this._tickInterval = Number(v);
    }
    private _tickInterval = 1;
}
