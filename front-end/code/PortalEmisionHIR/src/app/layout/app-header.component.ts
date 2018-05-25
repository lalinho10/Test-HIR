import { Component, OnDestroy }	 from '@angular/core';
import { Subscription }			 from 'rxjs/Subscription';

import { environment }			 from '../../environments/environment';

import { AuthenticationService } from 'app/core/services/authentication/authentication.service';

@Component({
	selector: 'pehir-header',
	templateUrl: 'app-header.component.html'
})

export class AppHeaderComponent implements OnDestroy {
	authenticated: boolean;
	isProduction: boolean = environment.production;
	environmentName: string = environment.environmentName;

	private subscription: Subscription;

	constructor( private authenticationService: AuthenticationService ){
		this.subscription = this.authenticationService
								.getAuthenticated()
								.subscribe( authenticated => this.authenticated = authenticated );
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}
}