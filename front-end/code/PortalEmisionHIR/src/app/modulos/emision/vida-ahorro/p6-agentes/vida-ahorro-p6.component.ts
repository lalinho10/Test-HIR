import { Component, OnInit }				  from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router }							  from '@angular/router';

import { WSClientService }					  from 'app/core/services/ws-client.service';

import { ApellidoValidator } 				  from 'app/core/validators/apellido.validator';
import { CodigoPostalValidator }			  from 'app/core/validators/codigo-postal.validator';
import { FormatoMonedaValidator }			  from 'app/core/validators/formato-moneda.validator';
import { NombreValidator }					  from 'app/core/validators/nombre.validator';
import { RfcValidator }						  from 'app/core/validators/rfc.validator';
import { TelefonoValidator }				  from 'app/core/validators/telefono.validator';

import { IDENTIFICACIONES }					  from 'app/core/data/identificaciones';

import { Estado }							  from 'app/core/models/estado';
import { Municipio }						  from 'app/core/models/municipio';

@Component({
	selector: 'pehir-vida-ahorro-p6',
	templateUrl: 'vida-ahorro-p6.component.html'
})

export class VidaAhorroP6Component implements OnInit {
	isValidTableAgentes: boolean = false;

	frmVidaAhorroP6: FormGroup;

	estados: Estado[];
	municipios: Municipio[];

	identificaciones = IDENTIFICACIONES;

	constructor(
		private fb: FormBuilder,
		private router: Router,
		private wsClientService: WSClientService
	){}

	ngOnInit() {
		this.leerCatalogos();
		this.crearFormulario();
		this.registrarEventos();
	}

	private leerCatalogos(): void {
		this.wsClientService.getObject( '/consultaEstados' )
							.subscribe( data => this.estados = data );
	}

	private crearFormulario(): void {
		this.frmVidaAhorroP6 = this.fb.group({
			'identificacion': ['', Validators.compose([
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
				Validators.required,
				FormatoMonedaValidator()
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

	private registrarEventos(): void {
		this.frmVidaAhorroP6.get( 'estado' ).valueChanges.subscribe( estado => {
			if( estado !== null && typeof estado !== 'undefined' ) {
				if( estado.idEstado !== null && typeof estado.idEstado !== 'undefined' ) {
					this.wsClientService.getObject( '/consultaMunicipiosEstado/' + estado.idEstado )
										.subscribe( response => this.municipios = response.data );
				} else {
					this.municipios = [];
				}
				this.frmVidaAhorroP6.get( 'delegacionMunicipio' ).setValue( '' );
			}
		});
	}

	onValidateTableAgentes( isValidTableAgentes ): void {
		this.isValidTableAgentes = isValidTableAgentes
	}

	fnAvanzarP7(): void {

	}
}