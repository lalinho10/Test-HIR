import { Component, OnInit }				  from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AppModalService }					  from 'app/core/components/app-modal/app-modal.service';
import { WSClientService }					  from 'app/core/services/ws-client.service';

import { ApellidoValidator }				  from 'app/core/validators/apellido.validator';
import { CelularValidator }					  from 'app/core/validators/celular.validator';
import { ContrasenaValidator }				  from 'app/core/validators/contrasena.validator';
import { NombreValidator }					  from 'app/core/validators/nombre.validator';
import { TelefonoValidator }				  from 'app/core/validators/telefono.validator';
import { IgualdadContrasenasValidator }		  from 'app/core/validators/igualdad-contrasenas.validator';

@Component({
	selector: 'pehir-registro',
	templateUrl: 'registro.component.html'
})

export class RegistroComponent implements OnInit {
	private titulo: string = 'Registro';
	private frmRegistro: FormGroup;

	constructor(
		private appModalService: AppModalService,
		private fb: FormBuilder,
		private wsClientService: WSClientService
	) {}

	ngOnInit() {
		this.frmRegistro = this.fb.group({
			'nombre': ['', Validators.compose([
				Validators.required,
				Validators.maxLength(255),
				NombreValidator()
			])],
			'apaterno': ['', Validators.compose([
				Validators.required,
				Validators.maxLength(25),
				ApellidoValidator()
			])],
			'amaterno': ['', Validators.compose([
				Validators.maxLength(25),
				ApellidoValidator()
			])],
			'correoe': ['', Validators.compose([
				Validators.required,
				Validators.email,
				Validators.maxLength(50)
			])],
			'contrasena': ['', Validators.compose([
				Validators.required,
				ContrasenaValidator()
			])],
			'confcontrasena': ['', Validators.compose([
				Validators.required,
				ContrasenaValidator()
			])],
			'celular': ['', Validators.compose([
				Validators.required,
				CelularValidator()
			])],
			'telefono': ['', Validators.compose([
				TelefonoValidator()
			])]
		},
		{
			validator: IgualdadContrasenasValidator( 'contrasena', 'confcontrasena' )
		})
	}

	fnRegistrar(): void {
		this.wsClientService
			.getObject( '/registro' )
			.subscribe( response =>  {
				if( response.codigoRespuesta === 200 ) {
					this.appModalService.openModal( 'success', response.mensaje );
				}
			});
	}
}