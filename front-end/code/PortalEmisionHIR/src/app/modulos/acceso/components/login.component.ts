import { Component, OnInit }				  from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router }							  from '@angular/router';

import { AccesoService }					  from '../services/acceso.service';

import { AuthenticationService }			  from 'app/core/services/authentication/authentication.service';

import { Usuario }							  from 'app/core/models/acceso/usuario';

import { ContrasenaValidator }				  from 'app/core/validators/contrasena.validator';

@Component({
	selector: 'pehir-login',
	templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
	frmLogin: FormGroup;

	private usuario: Usuario;

	constructor(
		private accesoService: AccesoService,
		private authenticationService: AuthenticationService,
		private fb: FormBuilder,
		private router: Router
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
		this.accesoService.setLogin( this.usuario.nombre, this.usuario.clave );
		//this.router.navigateByUrl( '/acceso/codigo' );
		this.authenticationService.login( this.usuario );
	}
}