import { Component, OnInit }				  from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router }							  from '@angular/router';

import { ApindividualP1Service }			  from './apindividual-p1.service';

import { ESTADOSCIVILES }					  from 'app/core/data/estadosCiviles';
import { GENEROS }							  from 'app/core/data/generos';
import { FECNACOPTIONS }					  from 'app/core/data/calendarios/fecNacOptions';

import { Estado }							  from 'app/core/models/estado';
import { Municipio }						  from 'app/core/models/municipio';

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
	selector: 'pehir-apindividual-p1',
	templateUrl: 'apindividual-p1.component.html'
})

export class ApindividualP1Component implements OnInit {
	frmApindividualP1: FormGroup;

	estados: Estado[];
	municipios: Municipio[];

	generos = GENEROS;
	fecNacOptions = FECNACOPTIONS;
	estadosCiviles = ESTADOSCIVILES;

	constructor(
		private apindividualP1Service: ApindividualP1Service,
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
		this.wsClientService
			.postObject( '/catalogoEstado', {} )
			.subscribe( response => {
				if( response.code === 200 ) {
					this.estados = response.data;
				}
			});
	}

	private crearFormulario(): void {
		this.frmApindividualP1 = this.fb.group({
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
				EntreEdadesValidator(12,64)
			])],
			'nacionalidad': ['', Validators.compose([
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
			'fumador': ['', Validators.compose([
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
			])],
			'vigenciaPoliza': ['', Validators.compose([
				Validators.required
			])],
			'gobierno': ['', Validators.compose([
				Validators.required
			])],
			'especifiqueGob': ['', Validators.compose([
				Validators.required
			])],
			'parienteGob': ['', Validators.compose([
				Validators.required
			])],
			'especifiqueParGob': ['', Validators.compose([
				Validators.required
			])]
		});
	}

	private registrarEventos(): void {
		this.frmApindividualP1.get( 'estado' ).valueChanges.subscribe( estado => {
			if( estado !== null && typeof estado !== 'undefined' ) {
				if( estado.idEntidad !== null && typeof estado.idEntidad !== 'undefined' ) {
					this.wsClientService.getObject( '/consultaMunicipiosEstado/' + estado.idEntidad )
										.subscribe( response => this.municipios = response.data );
				} else {
					this.municipios = [];
				}
				this.frmApindividualP1.get( 'delegacionMunicipio' ).setValue( '' );
			}
		});
	}

	fnCambiarGobierno(): void {
		this.frmApindividualP1.controls[ 'especifiqueGob' ].setValue( '' );

		if( this.frmApindividualP1.controls[ 'gobierno' ].value ) {
			this.frmApindividualP1.controls[ 'especifiqueGob' ].enable();
		} else {
			this.frmApindividualP1.controls[ 'especifiqueGob' ].disable();
		}
	}

	fnCambiarParienteGob(): void {
		this.frmApindividualP1.controls[ 'especifiqueParGob' ].setValue( '' );

		if( this.frmApindividualP1.controls[ 'parienteGob' ].value ) {
			this.frmApindividualP1.controls[ 'especifiqueParGob' ].enable();
		} else {
			this.frmApindividualP1.controls[ 'especifiqueParGob' ].disable();
		}
	}

	fnAvanzarP2(): void {
		this.apindividualP1Service.setModelP1( this.frmApindividualP1.value );
		this.router.navigateByUrl( '/emision/apindividual/seguro' );
	}
}