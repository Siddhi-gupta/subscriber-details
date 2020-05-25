import { Component } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../_models/user';
import { AuthenticationService } from '../_services/authentication.service';
import { Router } from '@angular/router';

@Component(
    { 
        templateUrl: 'home.component.html',
        styleUrls: ['./home.component.scss']
    }
    )
export class HomeComponent {

    constructor(private authenticationService: AuthenticationService, private router:Router) { }

    ngOnInit() {
        
    }
    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
}