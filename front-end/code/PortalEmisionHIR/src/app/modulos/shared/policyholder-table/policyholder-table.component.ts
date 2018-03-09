import { Component, OnInit }				  from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { WSClientService }					  from 'app/core/services/ws-client.service';

import { NombreValidator }					  from 'app/core/validators/nombre.validator';
import { PorcentajeValidator }				  from 'app/core/validators/porcentaje.validator';

import { Beneficiario }						  from 'app/core/models/beneficiario';

import { FECNACOPTIONS }					  from 'app/core/data/fecNacOptions';

import { Parentesco }						  from 'app/core/models/parentesco';

@Component({
	selector: 'pehir-policyholder-table',
	templateUrl: 'policyholder-table.component.html',
	styleUrls: [ 'policyholder-table.component.css' ]
})

export class PolicyHolderTableComponent implements OnInit {
	private frmBeneficiario: FormGroup;
	private beneficiarios: Beneficiario[] = [];

	private parentescos: Parentesco[];

	private fecNacOptions = FECNACOPTIONS;

	private isValidSum: boolean = false;
	private sumErrorMsg: string = 'Los porcentajes de suma asegurada no dan un total de 100%'

	constructor(
		private fb: FormBuilder,
		private wsClientService: WSClientService
	) {}

	readCatalogs(): void {
		this.wsClientService.getObject( '/consultaParentescos' )
							.subscribe( data => this.parentescos = data );
	}

	ngOnInit() {
		this.readCatalogs();

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
		this.validarSumatoriaPorcentajes();
	}

	private agregarBeneficiario(): void {
		let beneficiario: Beneficiario = new Beneficiario();

		beneficiario.nombre = this.frmBeneficiario.controls[ 'nombre' ].value;
		beneficiario.fechaNacimiento = new Date( this.frmBeneficiario.controls[ 'fechanac' ].value.epoc * 1000 );
		beneficiario.parentesco = this.frmBeneficiario.controls[ 'parentesco' ].value;
		beneficiario.porcentajeSuma = this.frmBeneficiario.controls[ 'porcentajeSuma' ].value / 100;

		this.beneficiarios.push( beneficiario );

		this.validarSumatoriaPorcentajes();
	}

	private limpiarControles(): void {
		this.frmBeneficiario.reset();
	}

	private mostrarErrores(): void {
		Object.keys( this.frmBeneficiario.controls ).forEach( field => {
			const control = this.frmBeneficiario.get( field );
			control.markAsDirty( { onlySelf: true } );
		});
	}

	private validarSumatoriaPorcentajes(): void {
		var sumatoriaPorcentaje = this.beneficiarios
			.map( function( beneficiario ) { return beneficiario.porcentajeSuma } )
			.reduce( function( a, b ) { return a + b; }, 0 );

		this.isValidSum = ( sumatoriaPorcentaje === 1 );
	}

	private validarFomulario(): void {
		if( this.frmBeneficiario.valid ) {
			this.agregarBeneficiario();
			this.limpiarControles();
		} else {
			this.mostrarErrores();
		}
	}
}