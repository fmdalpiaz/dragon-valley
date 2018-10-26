import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from './../auth';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    hasSubmmited: boolean;
    hasFailed: boolean;
    isLoading: boolean;

    constructor(
        private fb: FormBuilder,
        private router: Router,
        private authService: AuthService
    ) { }

    ngOnInit() {
        this.hasSubmmited = false;
        this.hasFailed = false;
        this.isLoading = false;

        this.loginForm = this.fb.group({
            'email': ['', [Validators.required, Validators.email]],
            'password': ['', Validators.required],
        });
    }

    public submitForm() {
        this.hasSubmmited = true;
        this.hasFailed = false;

        if (this.loginForm.valid) {
            this.isLoading = true;
            this.authService.login(this.loginForm.get('email').value, this.loginForm.get('password').value);

            this.authService.isAuthenticated()
                .then((authenticated: boolean) => {
                    if (authenticated) {
                        this.router.navigate(['dragons']);
                    } else {
                        this.isLoading = false;
                        this.hasFailed = true;
                    }
                });
        }

    }

}
