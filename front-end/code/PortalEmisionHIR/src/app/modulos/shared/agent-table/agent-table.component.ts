import { Component, EventEmitter, OnInit, Output }		 from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { NombreValidator }								 from 'app/core/validators/nombre.validator';
import { PorcentajeValidator }							 from 'app/core/validators/porcentaje.validator';

import { Agente }										 from 'app/core/models/agente';

@Component({
	selector: 'pehir-agent-table',
	templateUrl: 'agent-table.component.html',
	styleUrls: [ 'agent-table.component.css' ]
})

export class AgentTableComponent implements OnInit {
	@Output()
	onValidateTable: EventEmitter<boolean> = new EventEmitter<boolean>();

	frmAgente: FormGroup;
	agentes: Agente[] = [];

	isValidSum: boolean = false;
	porcentaje: number = 0;
	sumErrorMsg: string = 'Los porcentajes de participación no dan un total de 100%';

	constructor( private fb: FormBuilder ) {}

	get gruposEdicion(): FormArray {
		return this.frmAgente.controls[ 'gruposEdicion' ] as FormArray;
	}

	ngOnInit() {
		this.frmAgente = this.fb.group({
			'grupoAlta': this.crearGrupo(),
			'gruposEdicion': this.fb.array( [] )
		});
	}

	private crearGrupo(): FormGroup {
		return this.fb.group({
			'agente': ['', Validators.compose([
				Validators.required,
				Validators.maxLength(50),
				NombreValidator()
			])],
			'cliente': ['', Validators.compose([
				Validators.required,
				Validators.maxLength(50),
				NombreValidator()
			])],
			'correoe': ['', Validators.compose([
				Validators.required,
				Validators.email,
				Validators.maxLength(50)
			])],
			'porcentajeParticipacion': ['', Validators.compose([
				Validators.required,
				Validators.min(1),
				Validators.max(100),
				PorcentajeValidator()
			])],
			'edicion': false
		});
	}

	private eliminarGrupoEdicion( idGrupo: number ): void {
		let gruposEdicion: FormArray = this.frmAgente.controls[ 'gruposEdicion' ] as FormArray;
		gruposEdicion.removeAt( idGrupo );
	}

	private cancelarEdicion( idAgente: number ): void {
		let gruposEdicion: FormArray = this.frmAgente.controls[ 'gruposEdicion' ] as FormArray;
		let grupoEdicion = gruposEdicion.at( idAgente ) as FormGroup;
		grupoEdicion.reset();
		grupoEdicion.controls[ 'edicion' ].setValue( false );
	}

	private modificarGrupoEdicion( idAgente: number ): void {
		let gruposEdicion: FormArray = this.frmAgente.controls[ 'gruposEdicion' ] as FormArray;
		let grupoEdicion = gruposEdicion.at( idAgente ) as FormGroup;

		if( grupoEdicion.valid ) {
			this.modificarAgente( idAgente, grupoEdicion );
			grupoEdicion.reset();
			grupoEdicion.controls[ 'edicion' ].setValue( false );
		} else {

		}
	}

	private agregarGrupoEdicion(): void {
		let gruposEdicion: FormArray = this.frmAgente.controls[ 'gruposEdicion' ] as FormArray;
		let grupoEdicion: FormGroup = this.crearGrupo();
		gruposEdicion.push( grupoEdicion );
	}

	private eliminarAgente( idAgente: number ): void {
		this.agentes.splice( idAgente, 1 );
		this.validarSumatoriaPorcentajes();
	}

	private editarAgente( idAgente: number ): void {
		let gruposEdicion: FormArray = this.frmAgente.controls[ 'gruposEdicion' ] as FormArray;
		let grupoEdicion = gruposEdicion.at( idAgente ) as FormGroup;

		grupoEdicion.controls[ 'agente' ].setValue( this.agentes[ idAgente ].agente );
		grupoEdicion.controls[ 'cliente' ].setValue( this.agentes[ idAgente ].cliente );
		grupoEdicion.controls[ 'correoe' ].setValue( this.agentes[ idAgente ].correoe );
		grupoEdicion.controls[ 'porcentajeParticipacion' ].setValue( this.agentes[ idAgente ].porcentajeParticipacion * 100 );
		grupoEdicion.controls[ 'edicion' ].setValue( true );
	}

	private modificarAgente( idAgente: number, grupoEdicion: FormGroup ): void {
		this.agentes[ idAgente ].agente = grupoEdicion.get( 'agente' ).value;
		this.agentes[ idAgente ].cliente = grupoEdicion.get( 'cliente' ).value;
		this.agentes[ idAgente ].correoe = grupoEdicion.get( 'correoe' ).value;
		this.agentes[ idAgente ].porcentajeParticipacion = grupoEdicion.get( 'porcentajeParticipacion' ).value / 100;

		this.validarSumatoriaPorcentajes();
	}

	private agregarAgente(): void {
		let agente: Agente = new Agente();

		agente.agente = this.frmAgente.get( 'grupoAlta.agente' ).value;
		agente.cliente = this.frmAgente.get( 'grupoAlta.cliente' ).value;
		agente.correoe = this.frmAgente.get( 'grupoAlta.correoe' ).value;
		agente.porcentajeParticipacion = this.frmAgente.get( 'grupoAlta.porcentajeParticipacion' ).value / 100;

		this.agentes.push( agente );

		this.validarSumatoriaPorcentajes();
	}

	private eliminarRegistro( idRegistro: number ): void {
		this.eliminarAgente( idRegistro );
		this.eliminarGrupoEdicion( idRegistro );
	}

	private limpiarControlesAlta(): void {
		let grupoAlta: FormGroup = this.frmAgente.get( 'grupoAlta' ) as FormGroup;
		grupoAlta.reset();
	}

	private mostrarErroresAlta(): void {
		let grupoAlta: FormGroup = this.frmAgente.get( 'grupoAlta' ) as FormGroup;

		Object.keys( grupoAlta.controls ).forEach( field => {
			const control = grupoAlta.get( field );
			control.markAsDirty( { onlySelf: true } );
		});
	}

	private validarSumatoriaPorcentajes(): void {
		this.porcentaje = this.agentes
			.map( function( agente ) { return agente.porcentajeParticipacion } )
			.reduce( function( a, b ) { return a + b; }, 0 );

		this.isValidSum = ( this.porcentaje === 1 );

		this.onValidateTable.emit( this.isValidSum );

		if( !this.isValidSum ) {
			this.frmAgente.get( 'grupoAlta.agente' ).enable();
			this.frmAgente.get( 'grupoAlta.cliente' ).enable();
			this.frmAgente.get( 'grupoAlta.correoe' ).enable();
			this.frmAgente.get( 'grupoAlta.porcentajeParticipacion' ).enable();
		} else {
			this.frmAgente.get( 'grupoAlta.agente' ).disable();
			this.frmAgente.get( 'grupoAlta.cliente' ).disable();
			this.frmAgente.get( 'grupoAlta.correoe' ).disable();
			this.frmAgente.get( 'grupoAlta.porcentajeParticipacion' ).disable();
		}
	}

	private validarGrupoAlta(): void {
		let grupoAlta: FormGroup = this.frmAgente.get( 'grupoAlta' ) as FormGroup;

		if( grupoAlta.valid ) {
			this.agregarAgente();
			this.agregarGrupoEdicion();
			this.limpiarControlesAlta();
		} else {
			this.mostrarErroresAlta();
		}
	}
}