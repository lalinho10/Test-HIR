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
	private beneficiarios: Beneficiario[] = [];

	private fecNacOptions = FECNACOPTIONS;

	private isValidSum: boolean = false;
	private sumErrorMsg: string = 'Los porcentajes de suma asegurada no dan un total de 100%'

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
	}

	private eliminarBeneficiario( idUsuario: number ): void {
		this.beneficiarios.splice( idUsuario, 1 );
	}

	private agregarBeneficiario(): void {
		let beneficiario: Beneficiario = new Beneficiario();

		beneficiario.nombre = this.frmBeneficiario.controls[ 'nombre' ].value;
		beneficiario.fechaNacimiento = new Date( this.frmBeneficiario.controls[ 'fechanac' ].value.epoc * 1000 );
		beneficiario.parentesco = this.frmBeneficiario.controls[ 'parentesco' ].value;
		beneficiario.porcentajeSuma = this.frmBeneficiario.controls[ 'porcentajeSuma' ].value / 100;

		this.beneficiarios.push( beneficiario );
	}

	private limpiarControles(): void {
		//this.frmBeneficiario.controls[ 'nombre' ].value = '';
		//this.frmBeneficiario.controls[ 'fechanac' ].value = '';
		//this.frmBeneficiario.controls[ 'parentesco' ].value = '';
		//this.frmBeneficiario.controls[ 'porcentajeSuma' ].value = '';
	}

	private validarSumatoriaPorcentajes(): void {

	}

	private validarFomulario(): void {
		debugger;

		if( this.frmBeneficiario.valid ) {
			this.agregarBeneficiario();
			this.limpiarControles();
		} else {
			Object.keys( this.frmBeneficiario.controls ).forEach( field => {
				debugger;
				const control = this.frmBeneficiario.get( field );
				control.markAsDirty( { onlySelf: true } );
			});
		}
	}
}