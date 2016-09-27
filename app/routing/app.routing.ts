import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { Authorize, AllowAnonymous } from '../security/authGuard';


import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';


const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [Authorize]},
    { path: 'login', component: LoginComponent, canActivate: [AllowAnonymous]},
    { path: '**', redirectTo:'', pathMatch:'full'}
]

export const appRoutingProviders: any[] = [{ provide: LocationStrategy, useClass: HashLocationStrategy }];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);