import { Component, EventEmitter, OnInit, Output }		 from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { FECNACOPTIONS }								 from 'app/core/data/calendarios/fecNacOptions';

import { Beneficiario }									 from 'app/core/models/beneficiario';
import { Parentesco }									 from 'app/core/models/parentesco';

import { WSClientService }								 from 'app/core/services/ws-client.service';

import { ApellidoValidator } 							 from 'app/core/validators/apellido.validator';
import { NombreValidator }								 from 'app/core/validators/nombre.validator';
import { PorcentajeValidator }							 from 'app/core/validators/porcentaje.validator';

@Component({
	selector: 'pehir-policyholder-table',
	templateUrl: 'policyholder-table.component.html',
	styleUrls: [ 'policyholder-table.component.css' ]
})

export class PolicyHolderTableComponent implements OnInit {
	@Output()
	onValidateTable: EventEmitter<boolean> = new EventEmitter<boolean>();

	frmBeneficiario: FormGroup;
	beneficiarios: Beneficiario[] = [];

	parentescos: Parentesco[];

	fecNacOptions = FECNACOPTIONS;

	isValidSum: boolean = false;
	porcentaje: number = 0;
	sumErrorMsg: string = 'Los porcentajes de suma asegurada no dan un total de 100%'

	constructor(
		private fb: FormBuilder,
		private wsClientService: WSClientService
	) {}

	get gruposEdicion(): FormArray {
		return this.frmBeneficiario.controls[ 'gruposEdicion' ] as FormArray;
	}

	ngOnInit() {
		this.leerCatalogos();

		this.frmBeneficiario = this.fb.group({
			'grupoAlta': this.crearGrupo(),
			'gruposEdicion': this.fb.array( [] )
		});
	}

	cargarDatosCapturados(): void {
		for( let i: number = 0; i < this.beneficiarios.length; i++ ) {
			this.agregarGrupoEdicion();
		}
		this.validarSumatoriaPorcentajes();
	}

	private leerCatalogos(): void {
		this.wsClientService
			.postObject( '/catalogoTipoParentesco', {} )
			.subscribe( response => {
				if( response.code === 200 ) {
					this.parentescos = response.data;
				}
			});
	}

	private crearGrupo(): FormGroup {
		return this.fb.group({
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

		grupoEdicion.controls[ 'nombre' ].setValue( this.beneficiarios[ idBeneficiario ].nombre );
		grupoEdicion.controls[ 'apaterno' ].setValue( this.beneficiarios[ idBeneficiario ].apaterno );
		grupoEdicion.controls[ 'amaterno' ].setValue( this.beneficiarios[ idBeneficiario ].amaterno );
		grupoEdicion.controls[ 'fechanac' ].patchValue( this.beneficiarios[ idBeneficiario ].fechaNacimiento );
		grupoEdicion.controls[ 'parentesco' ].setValue( this.beneficiarios[ idBeneficiario ].parentesco );
		grupoEdicion.controls[ 'porcentajeSuma' ].setValue( this.beneficiarios[ idBeneficiario ].porcentajeSuma );
		grupoEdicion.controls[ 'edicion' ].setValue( true );
	}

	private modificarBeneficiario( idBeneficiario: number, grupoEdicion: FormGroup ): void {
		this.beneficiarios[ idBeneficiario ].nombre = grupoEdicion.get( 'nombre' ).value;
		this.beneficiarios[ idBeneficiario ].apaterno = grupoEdicion.get( 'apaterno' ).value;
		this.beneficiarios[ idBeneficiario ].amaterno = grupoEdicion.get( 'amaterno' ).value;
		this.beneficiarios[ idBeneficiario ].fechaNacimiento = grupoEdicion.get( 'fechanac' ).value;
		this.beneficiarios[ idBeneficiario ].parentesco = grupoEdicion.get( 'parentesco' ).value;
		this.beneficiarios[ idBeneficiario ].porcentajeSuma = grupoEdicion.get( 'porcentajeSuma' ).value;

		this.validarSumatoriaPorcentajes();
	}

	private agregarBeneficiario(): void {
		let beneficiario: Beneficiario = new Beneficiario();

		beneficiario.nombre = this.frmBeneficiario.get( 'grupoAlta.nombre' ).value;
		beneficiario.apaterno = this.frmBeneficiario.get( 'grupoAlta.apaterno' ).value;
		beneficiario.amaterno = this.frmBeneficiario.get( 'grupoAlta.amaterno' ).value;
		beneficiario.fechaNacimiento = this.frmBeneficiario.get( 'grupoAlta.fechanac' ).value;
		beneficiario.parentesco = this.frmBeneficiario.get( 'grupoAlta.parentesco' ).value;
		beneficiario.porcentajeSuma = this.frmBeneficiario.get( 'grupoAlta.porcentajeSuma' ).value;

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
			.map( function( beneficiario ) { return beneficiario.porcentajeSumaDec } )
			.reduce( function( a, b ) { return a + b; }, 0 );

		this.isValidSum = ( this.porcentaje === 1 );

		this.onValidateTable.emit( this.isValidSum );

		if( !this.isValidSum ) {
			this.frmBeneficiario.get( 'grupoAlta.nombre' ).enable();
			this.frmBeneficiario.get( 'grupoAlta.apaterno' ).enable();
			this.frmBeneficiario.get( 'grupoAlta.amaterno' ).enable();
			this.frmBeneficiario.get( 'grupoAlta.fechanac' ).enable();
			this.frmBeneficiario.get( 'grupoAlta.parentesco' ).enable();
			this.frmBeneficiario.get( 'grupoAlta.porcentajeSuma' ).enable();
		} else {
			this.frmBeneficiario.get( 'grupoAlta.nombre' ).disable();
			this.frmBeneficiario.get( 'grupoAlta.apaterno' ).disable();
			this.frmBeneficiario.get( 'grupoAlta.amaterno' ).disable();
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