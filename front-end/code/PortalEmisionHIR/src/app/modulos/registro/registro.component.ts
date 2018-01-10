import { Component, OnInit } 				  from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AppModalService }					  from '../shared/app-modal/app-modal.service';

import { ApellidoValidator } 				  from '../../core/validators/apellido.validator';
import { CelularValidator } 				  from '../../core/validators/celular.validator';
import { ContrasenaValidator } 				  from '../../core/validators/contrasena.validator';
import { NombreValidator } 					  from '../../core/validators/nombre.validator';
import { TelefonoValidator } 				  from '../../core/validators/telefono.validator';

@Component({
	selector: 'pehir-registro',
	templateUrl: 'registro.component.html'
})

export class RegistroComponent implements OnInit {
	private titulo: string = 'Registro';
	private frmRegistro: FormGroup;

	constructor(
		private appModalService: AppModalService,
		private fb: FormBuilder
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
		})
	}

	fnRegistrar(): void {
		this.appModalService.openModal( 'info', 'Llamada a servicio de registro' );
	}
}