import { Component } from '@angular/core';
import { Router }	 from '@angular/router';

@Component({
	selector: 'pehir-login',
	templateUrl: 'login.component.html'
})

export class LoginComponent {
	constructor( private router: Router ) {}

	fnIngresar(): void {
		this.router.navigateByUrl( '/acceso/codigo' );
	}
}