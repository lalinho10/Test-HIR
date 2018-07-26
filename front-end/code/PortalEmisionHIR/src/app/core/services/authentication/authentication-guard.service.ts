import { Injectable }			 from '@angular/core';
import { Router, CanActivate }	 from '@angular/router';

import { AuthenticationService } from 'app/core/services/authentication/authentication.service';

@Injectable()
export class AuthenticationGuardService implements CanActivate {

	constructor(
		private authentication: AuthenticationService,
		private router: Router
	){}

	canActivate(): boolean {
		if ( !this.authentication.isAuthenticated() ) {
			this.router.navigate( [ '/acceso/login' ] );
			return false;
		}
		return true;
	}

}