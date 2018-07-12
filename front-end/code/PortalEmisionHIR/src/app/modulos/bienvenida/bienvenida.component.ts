import { Component, OnInit }	 from '@angular/core';

import { AuthenticationService } from 'app/core/services/authentication/authentication.service';

import { AuthenticatedUser }	 from 'app/core/services/authentication/authenticated-user';

@Component({
	selector: 'pehir-bienvenida',
	templateUrl: './bienvenida.component.html'
})

export class BienvenidaComponent implements OnInit {
	loggedUser: string;
	loginTime: Date;
	lastAccess: Date;

	private authenticatedUser: AuthenticatedUser;

	constructor(
		private authenticationService: AuthenticationService
	) {}

	ngOnInit() {
		this.loggedUser = this.authenticationService.authenticatedUser.nombreUsuario;
		this.loginTime = this.authenticationService.authenticatedUser.fechaOperacion;
		this.lastAccess = this.authenticationService.authenticatedUser.ultimoLogin;
	}
}