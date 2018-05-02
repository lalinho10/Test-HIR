import { Component, OnInit }				  from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router }							  from '@angular/router';

import { WSClientService }					  from 'app/core/services/ws-client.service';

import { ApellidoValidator } 				  from 'app/core/validators/apellido.validator';
import { CelularValidator }					  from 'app/core/validators/celular.validator';
import { CodigoPostalValidator }			  from 'app/core/validators/codigo-postal.validator';
import { NombreValidator }					  from 'app/core/validators/nombre.validator';
import { RfcValidator }						  from 'app/core/validators/rfc.validator';
import { TelefonoValidator }				  from 'app/core/validators/telefono.validator';
import { EntreEdadesValidator }				  from 'app/core/validators/entre-edades.validator';
import { DiferenciaTelefonosValidator }		  from 'app/core/validators/diferencia-telefonos.validator';

import { GENEROS }							  from 'app/core/data/generos';
import { ESTADOSCIVILES }					  from 'app/core/data/estadosCiviles';
import { FECNACOPTIONS }					  from 'app/core/data/fecNacOptions';

import { Estado }							  from 'app/core/models/estado';
import { Municipio }						  from 'app/core/models/municipio';
import { Ocupacion }						  from 'app/core/models/ocupacion';

@Component({
	selector: 'pehir-seguhir-vida-p1',
	templateUrl: 'seguhir-vida-p1.component.html'
})

export class SeguhirVidaP1Component implements OnInit {
	frmSeguhirVidaP1: FormGroup;

	estados: Estado[];
	municipiosCon: Municipio[];
	municipiosTit: Municipio[];
	ocupaciones: Ocupacion[];

	generos = GENEROS;
	fecNacOptions = FECNACOPTIONS;
	estadosCiviles = ESTADOSCIVILES;

	constructor(
		private router: Router,
		private fb: FormBuilder,
		private wsClientService: WSClientService
	){}

	ngOnInit() {
		this.leerCatalogos();
		this.crearFormulario();
		this.registrarEventos();
	}

	private leerCatalogos(): void {
		this.wsClientService.getObject( '/consultaOcupaciones' )
							.subscribe( data => this.ocupaciones = data );
		this.wsClientService.getObject( '/consultaEstados' )
							.subscribe( data => this.estados = data );
	}

	private crearFormulario(): void {
		this.frmSeguhirVidaP1 = this.fb.group({
			'nombreCon': ['', Validators.compose([
				Validators.required,
				Validators.maxLength(50),
				NombreValidator()
			])],
			'apaternoCon': ['', Validators.compose([
				Validators.required,
				Validators.maxLength(50),
				ApellidoValidator()
			])],
			'amaternoCon': ['', Validators.compose([
				Validators.required,
				Validators.maxLength(50),
				ApellidoValidator()
			])],
			'fechanacCon': ['', Validators.compose([
				Validators.required,
				EntreEdadesValidator(18,70)
			])],
			'nacionalidadCon': ['', Validators.compose([
				Validators.required
			])],
			'ocupacionCon': ['', Validators.compose([
				Validators.required
			])],
			'rfcCon': ['', Validators.compose([
				Validators.required,
				RfcValidator()
			])],
			'estadoCivilCon':['', Validators.compose([
				Validators.required
			])],
			'generoCon': ['', Validators.compose([
				Validators.required
			])],

			'calleNumeroCon': ['', Validators.compose([
				Validators.required
			])],
			'coloniaPoblacionCon': ['', Validators.compose([
				Validators.required
			])],
			'delegacionMunicipioCon': ['', Validators.compose([
				Validators.required
			])],
			'estadoCon': ['', Validators.compose([
				Validators.required
			])],
			'cpCon': ['', Validators.compose([
				Validators.required,
				CodigoPostalValidator()
			])],
			'telefonosCon': this.fb.group({
				'telefonoCon': ['', Validators.compose([
				Validators.required,
				TelefonoValidator()
				])],
				'celularCon': ['', Validators.compose([
					Validators.required,
					CelularValidator()
				])]
			},
			{
				validator: DiferenciaTelefonosValidator( 'telefonoCon', 'celularCon' )
			}),
			'correoeCon': ['', Validators.compose([
				Validators.required,
				Validators.email,
				Validators.maxLength(50)
			])],

			'nombreTit': ['', Validators.compose([
				Validators.required,
				Validators.maxLength(50),
				NombreValidator()
			])],
			'apaternoTit': ['', Validators.compose([
				Validators.required,
				Validators.maxLength(50),
				ApellidoValidator()
			])],
			'amaternoTit': ['', Validators.compose([
				Validators.required,
				Validators.maxLength(50),
				ApellidoValidator()
			])],
			'fechanacTit': ['', Validators.compose([
				Validators.required
			])],
			'nacionalidadTit': ['', Validators.compose([
				Validators.required
			])],
			'ocupacionTit': ['', Validators.compose([
				Validators.required
			])],
			'rfcTit': ['', Validators.compose([
				Validators.required,
				RfcValidator()
			])],
			'estadoCivilTit':['', Validators.compose([
				Validators.required
			])],
			'generoTit': ['', Validators.compose([
				Validators.required
			])],

			'calleNumeroTit': ['', Validators.compose([
				Validators.required
			])],
			'coloniaPoblacionTit': ['', Validators.compose([
				Validators.required
			])],
			'delegacionMunicipioTit': ['', Validators.compose([
				Validators.required
			])],
			'estadoTit': ['', Validators.compose([
				Validators.required
			])],
			'cpTit': ['', Validators.compose([
				Validators.required,
				CodigoPostalValidator()
			])],
			'telefonosTit': this.fb.group({
				'telefonoTit': ['', Validators.compose([
				Validators.required,
				TelefonoValidator()
				])],
				'celularTit': ['', Validators.compose([
					Validators.required,
					CelularValidator()
				])]
			},
			{
				validator: DiferenciaTelefonosValidator( 'telefonoTit', 'celularTit' )
			}),
			'correoeTit': ['', Validators.compose([
				Validators.required,
				Validators.email,
				Validators.maxLength(50)
			])],
		});
	}

	private registrarEventos(): void {
		this.frmSeguhirVidaP1.get( 'estadoCon' ).valueChanges.subscribe( estado => {
			if( estado.idEstado !== null && typeof estado.idEstado !== 'undefined' ) {
				this.wsClientService.getObject( '/consultaMunicipiosEstado/' + estado.idEstado )
									.subscribe( response => this.municipiosCon = response.data );
			} else {
				this.municipiosCon = [];
			}
			this.frmSeguhirVidaP1.get( 'delegacionMunicipioCon' ).setValue( '' );
		});

		this.frmSeguhirVidaP1.get( 'estadoTit' ).valueChanges.subscribe( estado => {
			if( estado.idEstado !== null && typeof estado.idEstado !== 'undefined' ) {
				this.wsClientService.getObject( '/consultaMunicipiosEstado/' + estado.idEstado )
									.subscribe( response => this.municipiosTit = response.data );
			} else {
				this.municipiosTit = [];
			}
			this.frmSeguhirVidaP1.get( 'delegacionMunicipioTit' ).setValue( '' );
		});
	}

	fnAvanzarP2(): void {
		this.router.navigateByUrl( '/emision/seguhirvida/seguro' );
	}
}