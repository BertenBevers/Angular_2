import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from './authenticationService';

@Injectable()
export class Authorize implements CanActivate {
    constructor(private _authService: AuthenticationService, private _router: Router) {
    }
    canActivate() {
        if (!this._authService.isAuthenticated()) {
            this._router.navigateByUrl('/login');
            return false;
        }
        return true;
    }
}
@Injectable()
export class AllowAnonymous implements CanActivate {
    constructor(private _authService: AuthenticationService, private _router: Router) {
    }
    canActivate() {
        if (this._authService.isAuthenticated()) {
            this._router.navigateByUrl('');
            return false;
        }
        return true;
    }
}