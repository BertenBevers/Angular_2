import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';


import { HomeComponent } from '../home/home.component';
import { LoginComponent } from'../login/login.component';


const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent}
]

export const appRoutingProviders: any[] = [{provide: LocationStrategy, useClass: HashLocationStrategy}];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);