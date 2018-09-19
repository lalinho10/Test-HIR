import { Component, OnInit }							 from '@angular/core';
import { FormArray, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router }										 from '@angular/router';
import { Observable }									 from 'rxjs/Observable';
import														  'rxjs/add/observable/forkJoin';

import { ApindividualP1Service }						 from './apindividual-p1.service';

import { ESTADOSCIVILES }								 from 'app/core/data/estadosCiviles';
import { GENEROS }										 from 'app/core/data/generos';
import { FECNACOPTIONS }								 from 'app/core/data/calendarios/fecNacOptions';

import { Colonia }										 from 'app/core/models/colonia';
import { Estado }										 from 'app/core/models/estado';
import { Municipio }									 from 'app/core/models/municipio';
import { PreguntaConocimiento }							 from 'app/core/models/pregunta-conocimiento';

import { WSClientService }								 from 'app/core/services/ws-client.service';

import { ApellidoValidator } 							 from 'app/core/validators/apellido.validator';
import { CelularValidator }								 from 'app/core/validators/celular.validator';
import { CodigoPostalValidator }						 from 'app/core/validators/codigo-postal.validator';
import { NombreValidator }								 from 'app/core/validators/nombre.validator';
import { RfcValidator }									 from 'app/core/validators/rfc.validator';
import { EntreEdadesValidator }							 from 'app/core/validators/entre-edades.validator';

@Component({
	selector: 'pehir-apindividual-p1',
	templateUrl: 'apindividual-p1.component.html'
})

export class ApindividualP1Component implements OnInit {
	selMunicipioCP: boolean = false;
	selColoniaCP: boolean = false;

	idMunicipioCP: string = '';
	idColoniaCP: string = '';

	frmApindividualP1: FormGroup;

	colonias: Colonia[];
	estados: Estado[];
	municipios: Municipio[];
	preguntasConocimiento: PreguntaConocimiento[];

	generos = GENEROS;
	fecNacOptions = FECNACOPTIONS;
	estadosCiviles = ESTADOSCIVILES;

	constructor(
		private apindividualP1Service: ApindividualP1Service,
		private fb: FormBuilder,
		private router: Router,
		private wsClientService: WSClientService
	){}

	get preguntas(): FormArray {
		return this.frmApindividualP1.controls[ 'preguntas' ] as FormArray;
	}

	ngOnInit() {
		this.crearFormulario();
		this.registrarEventos();
		this.leerCatalogos();
	}

	private leerCatalogos(): void {
		Observable.forkJoin(
			this.wsClientService.postObject( '/catalogoEstado', {} ),
			this.wsClientService.postObject( '/catalogoCuestionarioConocimiento', {} )
		).subscribe( response => {
			if( response[ 0 ].code === 200 ) {
				this.estados = response[ 0 ].data;
			}
			if( response[ 1 ].code === 200 ) {
				this.preguntasConocimiento = response[ 1 ].data;
				for( let i: number = 0; i < this.preguntasConocimiento.length; i++ ) {
					this.agregarGrupoPregunta();
				}
			}

			if( this.apindividualP1Service.hasModelP1() ) {
				this.mostrarDatosCapturados();
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
			'cp': ['', Validators.compose([
				Validators.required,
				CodigoPostalValidator()
			])],
			'estado': ['', Validators.compose([
				Validators.required
			])],
			'delegacionMunicipio': ['', Validators.compose([
				Validators.required
			])],
			'coloniaPoblacion': ['', Validators.compose([
				Validators.required
			])],
			'calleNumero': ['', Validators.compose([
				Validators.required
			])],
			'preguntas': this.fb.array( [] )
		});
	}

	private agregarGrupoPregunta(): void {
		let gruposPreguntas: FormArray = this.frmApindividualP1.controls[ 'preguntas' ] as FormArray;
		let grupoPregunta: FormGroup = this.crearGrupoPregunta();
		gruposPreguntas.push( grupoPregunta );
	}

	private crearGrupoPregunta(): FormGroup {
		return this.fb.group({
			'confirmacion': ['', Validators.compose([
				Validators.required
			])],
			'especifique': ['', Validators.compose([
				Validators.required
			])]
		});
	}

	private registrarEventos(): void {
		this.frmApindividualP1.get( 'estado' ).valueChanges.subscribe( estado => {
			if( estado !== null && typeof estado !== 'undefined' ) {
				if( estado.claveEntidad !== null && typeof estado.claveEntidad !== 'undefined' ) {
					this.wsClientService
						.postObject( '/catalogoMunicipio', { 'clave': estado.claveEntidad } )
						.subscribe( response => {
							if( response.code === 200 ) {
								this.municipios = response.data;

								if( this.apindividualP1Service.hasModelP1() ) {
									let fMunicipio = this.municipios.filter( ( municipio: any ) => municipio.claveEntidad === this.apindividualP1Service.getModelP1().delegacionMunicipio.claveEntidad );
									this.frmApindividualP1.get( 'delegacionMunicipio' ).setValue( fMunicipio[ 0 ] );
								} else if( this.selMunicipioCP ) {
									let fMunicipio = this.municipios.filter( ( municipio: any ) => municipio.claveEntidad === this.idMunicipioCP );
									this.frmApindividualP1.get( 'delegacionMunicipio' ).setValue( fMunicipio[ 0 ] );
									this.selMunicipioCP = false;
								}
							}
						});
				} else {
					this.municipios = [];
				}
				this.frmApindividualP1.get( 'delegacionMunicipio' ).setValue( '' );
			}
		});

		this.frmApindividualP1.get( 'delegacionMunicipio' ).valueChanges.subscribe( municipio => {
			if( municipio !== null && typeof municipio !== 'undefined' ) {
				if( municipio.claveEntidad !== null && typeof municipio.claveEntidad !== 'undefined' ) {
					let estado = this.frmApindividualP1.get( 'estado' ).value;
					this.wsClientService
						.postObject( '/catalogoColonia', { 'clave': estado.claveEntidad, 'clave2': municipio.claveEntidad } )
						.subscribe( response => {
							if( response.code === 200 ) {
								this.colonias = response.data;

								if( this.apindividualP1Service.hasModelP1() ) {
									let fColonia = this.colonias.filter( ( colonia: any ) => colonia.claveEntidad === this.apindividualP1Service.getModelP1().coloniaPoblacion.claveEntidad );
									this.frmApindividualP1.get( 'coloniaPoblacion' ).setValue( fColonia[ 0 ] );
								} else if ( this.selColoniaCP ) {
									let fColonia = this.colonias.filter( ( colonia: any ) => colonia.claveEntidad === this.idColoniaCP );
									this.frmApindividualP1.get( 'coloniaPoblacion' ).setValue( fColonia[ 0 ] );
									this.selColoniaCP = false;
								}
							}
						});
				} else {
					this.colonias = [];
				}
				this.frmApindividualP1.get( 'coloniaPoblacion' ).setValue( '' );
			}
		});

		this.frmApindividualP1.get( 'cp' ).valueChanges.subscribe( cp => {
			if( cp !== null && typeof cp !== 'undefined' ) {
				if( !Number.isNaN( Number( cp ) ) && cp.length === 5 ) {
					this.wsClientService
						.postObject( '/catalogoPostal', { 'clave': cp } )
						.subscribe( response => {
							if( response.code === 200 ) {
								this.selMunicipioCP = true;
								this.idMunicipioCP = response.data[ 0 ].claveMunicipio;

								this.selColoniaCP = ( response.data.length === 1 );
								this.idColoniaCP = ( response.data.length === 1 ) ? response.data[ 0 ].claveColonia : '';

								let fEstados = this.estados.filter( ( estado: any ) => estado.claveEntidad == response.data[ 0 ].claveEstado );
								this.frmApindividualP1.get( 'estado' ).setValue( fEstados[ 0 ] );
							}
						});
				}
			}
		});
	}

	private fnCambioConfirmacion( i: number ) {
		let gruposPreguntas: FormArray = this.frmApindividualP1.controls[ 'preguntas' ] as FormArray;
		let grupoPregunta: FormGroup = gruposPreguntas.at( i ) as FormGroup;

		grupoPregunta.controls[ 'especifique' ].setValue( '' );

		if( grupoPregunta.controls[ 'confirmacion' ].value === 0 ) {
			grupoPregunta.controls[ 'especifique' ].disable();
		} else {
			grupoPregunta.controls[ 'especifique' ].enable();
		}
	}

	private mostrarDatosCapturados(): void {
		let gruposPreguntas: FormArray = this.frmApindividualP1.controls[ 'preguntas' ] as FormArray;
		let grupoGobierno: FormGroup = gruposPreguntas.at( 0 ) as FormGroup;
		let grupoParienteGobierno: FormGroup = gruposPreguntas.at( 1 ) as FormGroup;

		this.frmApindividualP1.get( 'nombre' ).setValue( this.apindividualP1Service.getModelP1().nombre );
		this.frmApindividualP1.get( 'apaterno' ).setValue( this.apindividualP1Service.getModelP1().apaterno );
		this.frmApindividualP1.get( 'amaterno' ).setValue( this.apindividualP1Service.getModelP1().amaterno );
		this.frmApindividualP1.get( 'fechanac' ).patchValue( this.apindividualP1Service.getModelP1().fechanac );
		this.frmApindividualP1.get( 'nacionalidad' ).setValue( this.apindividualP1Service.getModelP1().nacionalidad );
		this.frmApindividualP1.get( 'rfc' ).setValue( this.apindividualP1Service.getModelP1().rfc );
		this.frmApindividualP1.get( 'estadoCivil' ).setValue( this.apindividualP1Service.getModelP1().estadoCivil );
		this.frmApindividualP1.get( 'genero' ).setValue( this.apindividualP1Service.getModelP1().genero );
		this.frmApindividualP1.get( 'fumador' ).setValue( this.apindividualP1Service.getModelP1().fumador );
		this.frmApindividualP1.get( 'calleNumero' ).setValue( this.apindividualP1Service.getModelP1().calleNumero );
		this.frmApindividualP1.get( 'cp' ).setValue( this.apindividualP1Service.getModelP1().cp );

		grupoGobierno.get( 'confirmacion' ).setValue( this.apindividualP1Service.getModelP1().gobierno );
		grupoParienteGobierno.get( 'confirmacion' ).setValue( this.apindividualP1Service.getModelP1().parienteGob );

		for( let i: number = 0; i < this.preguntasConocimiento.length; i++ ) {
			this.fnCambioConfirmacion( i );
		}

		grupoGobierno.get( 'especifique' ).setValue( this.apindividualP1Service.getModelP1().especifiqueGob );
		grupoParienteGobierno.get( 'especifique' ).setValue( this.apindividualP1Service.getModelP1().especifiqueParGob );

		let fEstado = this.estados.filter( ( estado: any ) => estado.claveEntidad === this.apindividualP1Service.getModelP1().estado.claveEntidad );
		this.frmApindividualP1.get( 'estado' ).setValue( fEstado[ 0 ] );
	}

	fnAvanzarP2(): void {
		this.apindividualP1Service.setModelP1( this.frmApindividualP1.value );
		this.router.navigateByUrl( '/emision/apindividual/seguro' );
	}
}