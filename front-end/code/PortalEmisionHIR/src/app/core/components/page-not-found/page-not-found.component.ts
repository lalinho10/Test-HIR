import { Component }			 from '@angular/core';
import { Router }				 from '@angular/router';

import { AuthenticationService } from 'app/core/services/authentication/authentication.service';

@Component({
	selector: 'pehir-page-not-found',
	templateUrl: 'page-not-found.component.html',
	styleUrls: [ 'page-not-found.component.css' ]
})

export class PageNotFoundComponent {
	constructor(
		private autheticationService: AuthenticationService,
		private router: Router
	){}

	irInicio(): void {
		if( !this.autheticationService.isAuthenticated() ) {
			this.router.navigateByUrl( '/acceso/login' );
		} else {
			this.router.navigateByUrl( '/inicio' );
		}
	}
}