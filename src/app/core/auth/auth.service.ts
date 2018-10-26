import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';

@Injectable()
export class AuthService {
    private isLoggedIn = false;

    public isAuthenticated(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(this.isLoggedIn), 1000);
        });
    }

    public login(email: string, password: string) {
        if (email === environment.user.email && password === environment.user.password) {
            this.isLoggedIn = true;
        }
    }

    public logout() {
        this.isLoggedIn = false;
    }

}
