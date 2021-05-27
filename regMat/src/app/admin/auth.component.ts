import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from "src/app/shared.service";

@Component({
templateUrl: 'auth.component.html'
})
export class AuthComponent {
     username: string;
    password: string='';
    public errorMessage: string;

    constructor(private router: Router,
                private auth: SharedService) {}

    authenticate(form: NgForm) {
        if (form.valid) {
        // perform authentication
            // this.router.navigateByUrl('/admin/main');
            const logindata=[
                this.username,
                this.password,
            ]
            this.auth.adminlogin(logindata)
                .subscribe(response => {
                if (response) {
                    this.router.navigateByUrl("/admin/main");
                }
                this.errorMessage = "Authentication Failed";
                })
        } else {
            this.errorMessage = 'Form Data Invalid';
        }
    }
}
