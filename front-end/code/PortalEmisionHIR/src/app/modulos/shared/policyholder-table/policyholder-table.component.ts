import { Component, OnInit }				  from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { NombreValidator }					  from 'app/core/validators/nombre.validator';
import { PorcentajeValidator }				  from 'app/core/validators/porcentaje.validator';

import { Beneficiario }						  from 'app/core/models/beneficiario';

import { FECNACOPTIONS }					  from 'app/core/data/fecNacOptions';

@Component({
	selector: 'pehir-policyholder-table',
	templateUrl: 'policyholder-table.component.html',
	styleUrls: [ 'policyholder-table.component.css' ]
})

export class PolicyHolderTableComponent implements OnInit {
	private frmBeneficiario: FormGroup;
	private beneficiarios: Beneficiario[];

	private fecNacOptions = FECNACOPTIONS;

	constructor( private fb: FormBuilder ) {}

	ngOnInit() {
		this.frmBeneficiario = this.fb.group({
			'nombre': ['', Validators.compose([
				Validators.required,
				Validators.maxLength(50),
				NombreValidator()
			])],
			'fechanac': ['', Validators.compose([
				Validators.required
			])],
			'parentesco': ['', Validators.compose([
				Validators.required
			])],
			'porcentajeSuma': ['', Validators.compose([
				Validators.required,
				Validators.min( 1 ),
				Validators.max( 100 ),
				PorcentajeValidator()
			])]
		});

		this.beneficiarios = [
			{ nombre: 'Juan Pérez Rodriguez', fechaNacimiento: new Date( '2000-02-22' ), parentesco: 'Hijo', porcentajeSuma: 0.25 },
			{ nombre: 'Diana Pérez Rodríguez', fechaNacimiento: new Date( '2003-06-25' ), parentesco: 'Hija', porcentajeSuma: 0.25 },
			{ nombre: 'Daniela Rodríguez Santillán', fechaNacimiento: new Date( '1989-10-20' ), parentesco: 'Esposa', porcentajeSuma: 0.5 },
		]
	}

	private eliminarBeneficiario( idUsuario: number ): void {
		this.beneficiarios.splice( idUsuario, 1 );
	}

	private agregarBeneficiario(): void {
		debugger;
		/*for( var i = 0; i < this.frmBeneficiario.controls.length; i++ ) {
			this.frmBeneficiario.controls[ i ].markAsDirty();	
		}*/
		this.frmBeneficiario.markAsDirty();

		if( this.frmBeneficiario.valid ) {
			let beneficiario: Beneficiario = new Beneficiario();

			beneficiario.nombre = 'Juan Pérez Rosales';
			beneficiario.fechaNacimiento = new Date( '1985/09/19' );
			beneficiario.parentesco = 'Padre';
			beneficiario.porcentajeSuma = 0.6;

			this.beneficiarios.push( beneficiario );
		}
	}
}