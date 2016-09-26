import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';


@Injectable()
export class HttpClient {
    constructor(private http: Http) {
    }

    //Add Authorization headers for each request
    private createAuthorizationHeader(headers: Headers) {
        //Get token
        headers.append('Authorization', 'Bearer sometoken');
    }

    get(url: string) {
        let headers = new Headers();
        this.createAuthorizationHeader(headers);
        return this.http.get(url, {
            headers: headers
        });
    }

    post(url: string, data: JSON) {
        let headers = new Headers();
        this.createAuthorizationHeader(headers);
        return this.http.post(url, data, {
            headers: headers
        });
    }

    put(url: string, data: JSON) {
        let headers = new Headers();
        this.createAuthorizationHeader(headers);
        return this.http.put(url, data, {
            headers: headers
        });
    }

    //Delete

    //Patch 

}
