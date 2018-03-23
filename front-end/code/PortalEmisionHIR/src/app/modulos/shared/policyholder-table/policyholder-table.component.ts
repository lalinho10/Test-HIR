import { Component, EventEmitter, OnInit, Output }		 from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { WSClientService }								 from 'app/core/services/ws-client.service';

import { NombreValidator }								 from 'app/core/validators/nombre.validator';
import { PorcentajeValidator }							 from 'app/core/validators/porcentaje.validator';

import { Beneficiario }									 from 'app/core/models/beneficiario';

import { FECNACOPTIONS }								 from 'app/core/data/fecNacOptions';

import { Parentesco }									 from 'app/core/models/parentesco';

@Component({
	selector: 'pehir-policyholder-table',
	templateUrl: 'policyholder-table.component.html',
	styleUrls: [ 'policyholder-table.component.css' ]
})

export class PolicyHolderTableComponent implements OnInit {
	@Output()
	onValidateTable: EventEmitter<boolean> = new EventEmitter<boolean>();

	private frmBeneficiario: FormGroup;
	private beneficiarios: Beneficiario[] = [];

	private parentescos: Parentesco[];

	private fecNacOptions = FECNACOPTIONS;

	private isValidSum: boolean = false;
	private porcentaje: number = 0;
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
			'grupoAlta': this.crearGrupo(),
			'gruposEdicion': this.fb.array( [] )
		});
	}

	private crearGrupo(): FormGroup {
		return this.fb.group({
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
				Validators.min(1),
				Validators.max(100),
				PorcentajeValidator()
			])],
			'edicion': false
		});
	}

	private eliminarGrupoEdicion( idGrupo: number ): void {
		let gruposEdicion: FormArray = this.frmBeneficiario.controls[ 'gruposEdicion' ] as FormArray;
		gruposEdicion.removeAt( idGrupo );
	}

	private cancelarEdicion( idBeneficiario: number ): void {
		let gruposEdicion: FormArray = this.frmBeneficiario.controls[ 'gruposEdicion' ] as FormArray;
		let grupoEdicion = gruposEdicion.at( idBeneficiario ) as FormGroup;
		grupoEdicion.reset();
		grupoEdicion.controls[ 'edicion' ].setValue( false );
	}

	private modificarGrupoEdicion( idBeneficiario: number ): void {
		let gruposEdicion: FormArray = this.frmBeneficiario.controls[ 'gruposEdicion' ] as FormArray;
		let grupoEdicion = gruposEdicion.at( idBeneficiario ) as FormGroup;

		if( grupoEdicion.valid ) {
			this.modificarBeneficiario( idBeneficiario, grupoEdicion );
			grupoEdicion.reset();
			grupoEdicion.controls[ 'edicion' ].setValue( false );
		} else {

		}
	}

	private agregarGrupoEdicion(): void {
		let gruposEdicion: FormArray = this.frmBeneficiario.controls[ 'gruposEdicion' ] as FormArray;
		let grupoEdicion: FormGroup = this.crearGrupo();
		gruposEdicion.push( grupoEdicion );
	}

	private eliminarBeneficiario( idBeneficiario: number ): void {
		this.beneficiarios.splice( idBeneficiario, 1 );
		this.validarSumatoriaPorcentajes();
	}

	private editarBeneficiario( idBeneficiario: number ): void {
		let gruposEdicion: FormArray = this.frmBeneficiario.controls[ 'gruposEdicion' ] as FormArray;
		let grupoEdicion = gruposEdicion.at( idBeneficiario ) as FormGroup;
		let fechaCapturada = this.beneficiarios[ idBeneficiario ].fechaNacimiento;
		let objetoFechaCal = {
			date: {
				year: fechaCapturada.getFullYear(),
				month: fechaCapturada.getMonth() + 1,
				day: fechaCapturada.getDate()
			},
			epoc: fechaCapturada.getTime() / 1000
		};

		grupoEdicion.controls[ 'nombre' ].setValue( this.beneficiarios[ idBeneficiario ].nombre );
		grupoEdicion.controls[ 'fechanac' ].patchValue( objetoFechaCal );
		grupoEdicion.controls[ 'parentesco' ].setValue( this.beneficiarios[ idBeneficiario ].idParentesco );
		grupoEdicion.controls[ 'porcentajeSuma' ].setValue( this.beneficiarios[ idBeneficiario ].porcentajeSuma * 100 );
		grupoEdicion.controls[ 'edicion' ].setValue( true );
	}

	private modificarBeneficiario( idBeneficiario: number, grupoEdicion: FormGroup ): void {
		this.beneficiarios[ idBeneficiario ].nombre = grupoEdicion.get( 'nombre' ).value;
		this.beneficiarios[ idBeneficiario ].fechaNacimiento = new Date( grupoEdicion.get( 'fechanac' ).value.epoc * 1000 );
		this.beneficiarios[ idBeneficiario ].idParentesco = grupoEdicion.get( 'parentesco' ).value;

		let parentesco = this.parentescos.filter( ( parentesco: Parentesco ) => parentesco.idParentesco == this.beneficiarios[ idBeneficiario ].idParentesco );

		this.beneficiarios[ idBeneficiario ].descParentesco = parentesco[0].descParentesco;
		this.beneficiarios[ idBeneficiario ].porcentajeSuma = grupoEdicion.get( 'porcentajeSuma' ).value / 100;

		this.validarSumatoriaPorcentajes();
	}

	private agregarBeneficiario(): void {
		let beneficiario: Beneficiario = new Beneficiario();

		beneficiario.nombre = this.frmBeneficiario.get( 'grupoAlta.nombre' ).value;
		beneficiario.fechaNacimiento = new Date( this.frmBeneficiario.get( 'grupoAlta.fechanac' ).value.epoc * 1000 );
		beneficiario.idParentesco = this.frmBeneficiario.get( 'grupoAlta.parentesco' ).value;

		let parentesco = this.parentescos.filter( ( parentesco: Parentesco ) => parentesco.idParentesco == beneficiario.idParentesco );

		beneficiario.descParentesco = parentesco[0].descParentesco;
		beneficiario.porcentajeSuma = this.frmBeneficiario.get( 'grupoAlta.porcentajeSuma' ).value / 100;

		this.beneficiarios.push( beneficiario );

		this.validarSumatoriaPorcentajes();
	}

	private eliminarRegistro( idRegistro: number ): void {
		this.eliminarBeneficiario( idRegistro );
		this.eliminarGrupoEdicion( idRegistro );
	}

	private limpiarControlesAlta(): void {
		let grupoAlta: FormGroup = this.frmBeneficiario.get( 'grupoAlta' ) as FormGroup;
		grupoAlta.reset();
	}

	private mostrarErroresAlta(): void {
		let grupoAlta: FormGroup = this.frmBeneficiario.get( 'grupoAlta' ) as FormGroup;

		Object.keys( grupoAlta.controls ).forEach( field => {
			const control = grupoAlta.get( field );
			control.markAsDirty( { onlySelf: true } );
		});
	}

	private validarSumatoriaPorcentajes(): void {
		this.porcentaje = this.beneficiarios
			.map( function( beneficiario ) { return beneficiario.porcentajeSuma } )
			.reduce( function( a, b ) { return a + b; }, 0 );

		this.isValidSum = ( this.porcentaje === 1 );

		this.onValidateTable.emit( this.isValidSum );

		if( !this.isValidSum ) {
			this.frmBeneficiario.get( 'grupoAlta.nombre' ).enable();
			this.frmBeneficiario.get( 'grupoAlta.fechanac' ).enable();
			this.frmBeneficiario.get( 'grupoAlta.parentesco' ).enable();
			this.frmBeneficiario.get( 'grupoAlta.porcentajeSuma' ).enable();
		} else {
			this.frmBeneficiario.get( 'grupoAlta.nombre' ).disable();
			this.frmBeneficiario.get( 'grupoAlta.fechanac' ).disable();
			this.frmBeneficiario.get( 'grupoAlta.parentesco' ).disable();
			this.frmBeneficiario.get( 'grupoAlta.porcentajeSuma' ).disable();
		}
	}

	private validarGrupoAlta(): void {
		let grupoAlta: FormGroup = this.frmBeneficiario.get( 'grupoAlta' ) as FormGroup;

		if( grupoAlta.valid ) {
			this.agregarBeneficiario();
			this.agregarGrupoEdicion();
			this.limpiarControlesAlta();
		} else {
			this.mostrarErroresAlta();
		}
	}
}