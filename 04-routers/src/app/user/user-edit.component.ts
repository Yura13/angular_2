import { Component } from '@angular/core';
import { Observable } from "rxjs/Rx";

@Component({
    selector: 'app-user-edit',
    template: `
        <h3>User Edit</h3>
        <button (click)="done = true">Done</button>
        <button class="btn btn-alert" (click)="onNavigate()">Go Home</button>
    `
})
export class UserEditComponent {
    done = false;

    constructor() {}

    onNavigate() {

    }
}
