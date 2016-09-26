import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { routing, appRoutingProviders } from './routing/app.routing';
import { HttpModule } from '@angular/http';
import { HttpClient } from './common/httpClient';

import { AppComponent } from './main/app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
    imports: [BrowserModule, routing, HttpModule],
    exports: [],
    declarations: [AppComponent, HomeComponent, LoginComponent, NavigationComponent],
    providers: [appRoutingProviders, HttpClient],
    bootstrap: [AppComponent]
})
export class AppModule { }
