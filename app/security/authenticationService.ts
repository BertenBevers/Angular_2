import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationService {
    constructor() {

    }

    isAuthenticated(): boolean {    
        //check if user is authenticated
      return false;
    }
}