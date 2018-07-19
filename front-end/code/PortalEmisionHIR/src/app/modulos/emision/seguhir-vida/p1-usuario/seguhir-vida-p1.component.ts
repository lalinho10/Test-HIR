import { Component, OnInit }				  from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router }							  from '@angular/router';

import { SeguhirVidaP1Service }				  from './seguhir-vida-p1.service';

import { ESTADOSCIVILES }					  from 'app/core/data/estadosCiviles';
import { GENEROS }							  from 'app/core/data/generos';
import { FECNACOPTIONS }					  from 'app/core/data/calendarios/fecNacOptions';

import { Estado }							  from 'app/core/models/estado';
import { Municipio }						  from 'app/core/models/municipio';
import { Ocupacion }						  from 'app/core/models/ocupacion';

import { WSClientService }					  from 'app/core/services/ws-client.service';

import { ApellidoValidator } 				  from 'app/core/validators/apellido.validator';
import { CelularValidator }					  from 'app/core/validators/celular.validator';
import { CodigoPostalValidator }			  from 'app/core/validators/codigo-postal.validator';
import { NombreValidator }					  from 'app/core/validators/nombre.validator';
import { RfcValidator }						  from 'app/core/validators/rfc.validator';
import { TelefonoValidator }				  from 'app/core/validators/telefono.validator';
import { EntreEdadesValidator }				  from 'app/core/validators/entre-edades.validator';
import { DiferenciaTelefonosValidator }		  from 'app/core/validators/diferencia-telefonos.validator';

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
		private fb: FormBuilder,
		private router: Router,
		private seguhirVidaP1Service: SeguhirVidaP1Service,
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

		this.wsClientService
			.postObject( '/catalogoEstado', {} )
			.subscribe( response => {
				if( response.code === 200 ) {
					this.estados = response.data;
				}
			});
	}

	private crearFormulario(): void {
		this.frmSeguhirVidaP1 = this.fb.group({
			'contratante': this.fb.group({
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
					Validators.required,
					EntreEdadesValidator(18,70)
				])],
				'nacionalidad': ['', Validators.compose([
					Validators.required
				])],
				'ocupacion': ['', Validators.compose([
					Validators.required
				])],
				'rfc': ['', Validators.compose([
					Validators.required,
					RfcValidator()
				])],
				'estadoCivil':['', Validators.compose([
					Validators.required
				])],
				'genero': ['', Validators.compose([
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
				'telefonos': this.fb.group({
					'telefono': ['', Validators.compose([
					Validators.required,
					TelefonoValidator()
					])],
					'celular': ['', Validators.compose([
						Validators.required,
						CelularValidator()
					])]
				},
				{
					validator: DiferenciaTelefonosValidator( 'telefono', 'celular' )
				}),
				'correoe': ['', Validators.compose([
					Validators.required,
					Validators.email,
					Validators.maxLength(50)
				])]
			}),
			'contratanteTitular': [''],
			'titular': this.fb.group({
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
				'nacionalidad': ['', Validators.compose([
					Validators.required
				])],
				'ocupacion': ['', Validators.compose([
					Validators.required
				])],
				'rfc': ['', Validators.compose([
					Validators.required,
					RfcValidator()
				])],
				'estadoCivil':['', Validators.compose([
					Validators.required
				])],
				'genero': ['', Validators.compose([
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
				'telefonos': this.fb.group({
					'telefono': ['', Validators.compose([
					Validators.required,
					TelefonoValidator()
					])],
					'celular': ['', Validators.compose([
						Validators.required,
						CelularValidator()
					])]
				},
				{
					validator: DiferenciaTelefonosValidator( 'telefono', 'celular' )
				}),
				'correoe': ['', Validators.compose([
					Validators.required,
					Validators.email,
					Validators.maxLength(50)
				])]
			})
		});
	}

	private registrarEventos(): void {
		this.frmSeguhirVidaP1.get( 'contratante.estado' ).valueChanges.subscribe( estado => {
			if( estado !== null && typeof estado !== 'undefined' ) {
				if( estado.idEntidad !== null && typeof estado.idEntidad !== 'undefined' ) {
					this.wsClientService.getObject( '/consultaMunicipiosEstado/' + estado.idEntidad )
										.subscribe( response => this.municipiosCon = response.data );
				} else {
					this.municipiosCon = [];
				}
				this.frmSeguhirVidaP1.get( 'contratante.delegacionMunicipio' ).setValue( '' );
			}
		});

		this.frmSeguhirVidaP1.get( 'titular.estado' ).valueChanges.subscribe( estado => {
			if( estado !== null && typeof estado !== 'undefined' ) {
				if( estado.idEntidad !== null && typeof estado.idEntidad !== 'undefined' ) {
					this.wsClientService.getObject( '/consultaMunicipiosEstado/' + estado.idEntidad )
										.subscribe( response => this.municipiosTit = response.data );
				} else {
					this.municipiosTit = [];
				}
				this.frmSeguhirVidaP1.get( 'titular.delegacionMunicipio' ).setValue( '' );
			}
		});
	}

	fnToggleTitular( event ): void {
		this.frmSeguhirVidaP1.get( 'titular' ).reset();

		if( event.target.checked ) {
			this.frmSeguhirVidaP1.get( 'titular' ).disable();
		} else {
			this.frmSeguhirVidaP1.get( 'titular' ).enable();
		}
	}

	fnAvanzarP2(): void {
		this.seguhirVidaP1Service.setModelP1( this.frmSeguhirVidaP1.value );
		this.router.navigateByUrl( '/emision/seguhirvida/seguro' );
	}
}