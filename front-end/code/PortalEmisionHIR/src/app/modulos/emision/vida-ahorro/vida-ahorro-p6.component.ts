import { Component, OnInit }				  from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router }							  from '@angular/router';

import { ApellidoValidator } 				  from 'app/core/validators/apellido.validator';
import { CodigoPostalValidator }			  from 'app/core/validators/codigo-postal.validator';
import { NombreValidator }					  from 'app/core/validators/nombre.validator';
import { RfcValidator }						  from 'app/core/validators/rfc.validator';
import { TelefonoValidator }				  from 'app/core/validators/telefono.validator';

@Component({
	selector: 'pehir-vida-ahorro-p6',
	templateUrl: 'vida-ahorro-p6.component.html'
})

export class VidaAhorroP6Component implements OnInit {
	private frmVidaAhorroP6: FormGroup;

	constructor(
		private fb: FormBuilder,
		private router: Router
	){}

	ngOnInit() {
		this.frmVidaAhorroP6 = this.fb.group({
			'tipoIdentificacion': ['', Validators.compose([
				Validators.required
			])],
			'numeroIdentificacion': ['', Validators.compose([
				Validators.required
			])],

			'nombreEmpresa': ['', Validators.compose([
				Validators.required
			])],
			'dependencia': ['', Validators.compose([
				Validators.required
			])],
			'calleNumero': ['', Validators.compose([
				Validators.required
			])],
			'coloniaPoblacion': ['', Validators.compose([
				Validators.required
			])],
			'delegacionMunicipio': ['', Validators.compose([
				Validators.required
			])],
			'estado': ['', Validators.compose([
				Validators.required
			])],
			'cp': ['', Validators.compose([
				Validators.required,
				CodigoPostalValidator()
			])],

			'nombre': ['', Validators.compose([
				Validators.required,
				Validators.maxLength(50),
				NombreValidator()
			])],
			'apaterno': ['', Validators.compose([
				Validators.required,
				Validators.maxLength(50),
				ApellidoValidator()
			])],
			'amaterno': ['', Validators.compose([
				Validators.required,
				Validators.maxLength(50),
				ApellidoValidator()
			])],
			'areaTrabajo': ['', Validators.compose([
				Validators.required
			])],
			'numeroEmpleado': ['', Validators.compose([
				Validators.required
			])],
			'retencionQuincenal': ['', Validators.compose([
				Validators.required
			])],
			'rfc': ['', Validators.compose([
				Validators.required,
				RfcValidator()
			])],
			'telefono': ['', Validators.compose([
				Validators.required,
				TelefonoValidator()
			])]
		});
	}

	fnAvanzarP7(): void {

	}
}