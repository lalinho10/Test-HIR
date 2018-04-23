import { Component, OnInit }				  from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Usuario }							  from 'app/core/models/acceso/usuario';

import { AuthenticationService }			  from 'app/core/services/authentication/authentication.service';

import { ContrasenaValidator }				  from 'app/core/validators/contrasena.validator';

@Component({
	selector: 'pehir-login',
	templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
	frmLogin: FormGroup;

	private usuario: Usuario;

	constructor(
		private authenticationService: AuthenticationService,
		private fb: FormBuilder
	){}

	ngOnInit() {
		this.frmLogin = this.fb.group({
			'nombre': ['', Validators.compose([
				Validators.required,
				Validators.email
			])],
			'clave': ['', Validators.compose([
				Validators.required,
				ContrasenaValidator()
			])]
		});
	}

	private crearModeloUsuario() {
		this.usuario = new Usuario();
		this.usuario.nombre = this.frmLogin.controls[ 'nombre' ].value;
		this.usuario.clave = this.frmLogin.controls[ 'clave' ].value;
	}

	fnIngresar(): void {
		this.crearModeloUsuario();
		this.authenticationService.login( this.usuario );
	}
}