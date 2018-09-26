import { Component, OnInit }							 from '@angular/core';
import { FormArray, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router }										 from '@angular/router';
import { Observable }									 from 'rxjs/Observable';
import														  'rxjs/add/observable/forkJoin';

import { SegubiciP1Service }							 from './segubici-p1.service';

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
	selector: 'pehir-segubici-p1',
	templateUrl: 'segubici-p1.component.html'
})

export class SegubiciP1Component implements OnInit {
	selMunicipioCP: boolean = false;
	selColoniaCP: boolean = false;

	idMunicipioCP: string = '';
	idColoniaCP: string = '';

	frmSegubiciP1: FormGroup;

	colonias: Colonia[];
	estados: Estado[];
	municipios: Municipio[];
	preguntasConocimiento: PreguntaConocimiento[];

	generos = GENEROS;
	fecNacOptions = FECNACOPTIONS;
	estadosCiviles = ESTADOSCIVILES;

	constructor(
		private fb: FormBuilder,
		private router: Router,
		private segubiciP1Service: SegubiciP1Service,
		private wsClientService: WSClientService
	){}

	get preguntas(): FormArray {
		return this.frmSegubiciP1.controls[ 'preguntas' ] as FormArray;
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
					this.agregarGrupoPregunta( this.preguntasConocimiento[ i ].id );
				}
			}

			if( this.segubiciP1Service.hasModelP1() ) {
				this.mostrarDatosCapturados();
			}
		});
	}

	private crearFormulario(): void {
		this.frmSegubiciP1 = this.fb.group({
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
				EntreEdadesValidator(18,65)
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

	private agregarGrupoPregunta( idPregunta: number ): void {
		let gruposPreguntas: FormArray = this.frmSegubiciP1.controls[ 'preguntas' ] as FormArray;
		let grupoPregunta: FormGroup = this.crearGrupoPregunta();
		grupoPregunta.get( 'idPregunta' ).setValue( idPregunta );
		gruposPreguntas.push( grupoPregunta );
	}

	private crearGrupoPregunta(): FormGroup {
		return this.fb.group({
			'idPregunta': 0,
			'confirmacion': ['', Validators.compose([
				Validators.required
			])],
			'especifique': ['', Validators.compose([
				Validators.required
			])]
		});
	}

	private registrarEventos(): void {
		this.frmSegubiciP1.get( 'estado' ).valueChanges.subscribe( estado => {
			if( estado !== null && typeof estado !== 'undefined' ) {
				if( estado.claveEntidad !== null && typeof estado.claveEntidad !== 'undefined' ) {
					this.wsClientService
						.postObject( '/catalogoMunicipio', { 'clave': estado.claveEntidad } )
						.subscribe( response => {
							if( response.code === 200 ) {
								this.municipios = response.data;

								if( this.segubiciP1Service.hasModelP1() ) {
									let fMunicipio = this.municipios.filter( ( municipio: any ) => municipio.claveEntidad === this.segubiciP1Service.getModelP1().delegacionMunicipio.claveEntidad );
									this.frmSegubiciP1.get( 'delegacionMunicipio' ).setValue( fMunicipio[ 0 ] );
								} else if( this.selMunicipioCP ) {
									let fMunicipio = this.municipios.filter( ( municipio: any ) => municipio.claveEntidad === this.idMunicipioCP );
									this.frmSegubiciP1.get( 'delegacionMunicipio' ).setValue( fMunicipio[ 0 ] );
									this.selMunicipioCP = false;
								}
							}
						});
				} else {
					this.municipios = [];
				}
				this.frmSegubiciP1.get( 'delegacionMunicipio' ).setValue( '' );
			}
		});

		this.frmSegubiciP1.get( 'delegacionMunicipio' ).valueChanges.subscribe( municipio => {
			if( municipio !== null && typeof municipio !== 'undefined' ) {
				if( municipio.claveEntidad !== null && typeof municipio.claveEntidad !== 'undefined' ) {
					let estado = this.frmSegubiciP1.get( 'estado' ).value;
					this.wsClientService
						.postObject( '/catalogoColonia', { 'clave': estado.claveEntidad, 'clave2': municipio.claveEntidad } )
						.subscribe( response => {
							if( response.code === 200 ) {
								this.colonias = response.data;

								if( this.segubiciP1Service.hasModelP1() ) {
									let fColonia = this.colonias.filter( ( colonia: any ) => colonia.claveEntidad === this.segubiciP1Service.getModelP1().coloniaPoblacion.claveEntidad );
									this.frmSegubiciP1.get( 'coloniaPoblacion' ).setValue( fColonia[ 0 ] );
								} else if ( this.selColoniaCP ) {
									let fColonia = this.colonias.filter( ( colonia: any ) => colonia.claveEntidad === this.idColoniaCP );
									this.frmSegubiciP1.get( 'coloniaPoblacion' ).setValue( fColonia[ 0 ] );
									this.selColoniaCP = false;
								}
							}
						});
				} else {
					this.colonias = [];
				}
				this.frmSegubiciP1.get( 'coloniaPoblacion' ).setValue( '' );
			}
		});

		this.frmSegubiciP1.get( 'cp' ).valueChanges.subscribe( cp => {
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
								this.frmSegubiciP1.get( 'estado' ).setValue( fEstados[ 0 ] );
							}
						});
				}
			}
		});
	}

	private fnCambioConfirmacion( i: number ) {
		let gruposPreguntas: FormArray = this.frmSegubiciP1.controls[ 'preguntas' ] as FormArray;
		let grupoPregunta: FormGroup = gruposPreguntas.at( i ) as FormGroup;

		grupoPregunta.controls[ 'especifique' ].setValue( '' );

		if( grupoPregunta.controls[ 'confirmacion' ].value === 0 ) {
			grupoPregunta.controls[ 'especifique' ].disable();
		} else {
			grupoPregunta.controls[ 'especifique' ].enable();
		}
	}

	private mostrarDatosCapturados(): void {
		let gruposPreguntas: FormArray = this.frmSegubiciP1.controls[ 'preguntas' ] as FormArray;
		let grupoGobierno: FormGroup = gruposPreguntas.at( 0 ) as FormGroup;
		let grupoParienteGobierno: FormGroup = gruposPreguntas.at( 1 ) as FormGroup;

		this.frmSegubiciP1.get( 'nombre' ).setValue( this.segubiciP1Service.getModelP1().nombre );
		this.frmSegubiciP1.get( 'apaterno' ).setValue( this.segubiciP1Service.getModelP1().apaterno );
		this.frmSegubiciP1.get( 'amaterno' ).setValue( this.segubiciP1Service.getModelP1().amaterno );
		this.frmSegubiciP1.get( 'fechanac' ).patchValue( this.segubiciP1Service.getModelP1().fechanac );
		this.frmSegubiciP1.get( 'nacionalidad' ).setValue( this.segubiciP1Service.getModelP1().nacionalidad );
		this.frmSegubiciP1.get( 'rfc' ).setValue( this.segubiciP1Service.getModelP1().rfc );
		this.frmSegubiciP1.get( 'estadoCivil' ).setValue( this.segubiciP1Service.getModelP1().estadoCivil );
		this.frmSegubiciP1.get( 'genero' ).setValue( this.segubiciP1Service.getModelP1().genero );
		this.frmSegubiciP1.get( 'fumador' ).setValue( this.segubiciP1Service.getModelP1().fumador );
		this.frmSegubiciP1.get( 'calleNumero' ).setValue( this.segubiciP1Service.getModelP1().calleNumero );
		this.frmSegubiciP1.get( 'cp' ).setValue( this.segubiciP1Service.getModelP1().cp );

		grupoGobierno.get( 'confirmacion' ).setValue( this.segubiciP1Service.getModelP1().gobierno );
		grupoParienteGobierno.get( 'confirmacion' ).setValue( this.segubiciP1Service.getModelP1().parienteGob );

		for( let i: number = 0; i < this.preguntasConocimiento.length; i++ ) {
			this.fnCambioConfirmacion( i );
		}

		grupoGobierno.get( 'especifique' ).setValue( this.segubiciP1Service.getModelP1().especifiqueGob );
		grupoParienteGobierno.get( 'especifique' ).setValue( this.segubiciP1Service.getModelP1().especifiqueParGob );

		let fEstado = this.estados.filter( ( estado: any ) => estado.claveEntidad === this.segubiciP1Service.getModelP1().estado.claveEntidad );
		this.frmSegubiciP1.get( 'estado' ).setValue( fEstado[ 0 ] );
	}

	fnAvanzarP2(): void {
		this.segubiciP1Service.setModelP1( this.frmSegubiciP1.value );
		this.router.navigateByUrl( '/emision/segubici/seguro' );
	}
}