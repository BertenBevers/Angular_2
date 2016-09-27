import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class CanActivateIfLoggedIn implements CanActivate {
    constructor() {        
    }
    canActivate() {
        //check if user is logged in.
        return true;
    }
}
@Injectable()
export class CanAlwaysActivate implements CanActivate {
    constructor() {        
    }
    canActivate() {
        return true;
    }
}