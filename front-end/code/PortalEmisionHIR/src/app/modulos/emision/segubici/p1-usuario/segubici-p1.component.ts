import { Component, OnInit }				  from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router }							  from '@angular/router';
import { Observable }						  from 'rxjs/Observable';
import											   'rxjs/add/observable/forkJoin';

import { SegubiciP1Service }				  from './segubici-p1.service';

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
import { EntreEdadesValidator }				  from 'app/core/validators/entre-edades.validator';

@Component({
	selector: 'pehir-segubici-p1',
	templateUrl: 'segubici-p1.component.html'
})

export class SegubiciP1Component implements OnInit {
	consultaCP: boolean = false;

	idMunicipioCP: string = '';

	frmSegubiciP1: FormGroup;

	estados: Estado[];
	municipios: Municipio[];

	generos = GENEROS;
	fecNacOptions = FECNACOPTIONS;
	estadosCiviles = ESTADOSCIVILES;

	constructor(
		private fb: FormBuilder,
		private router: Router,
		private segubiciP1Service: SegubiciP1Service,
		private wsClientService: WSClientService
	){}

	ngOnInit() {
		this.crearFormulario();
		this.registrarEventos();
		this.leerCatalogos();
	}

	private leerCatalogos(): void {
		Observable.forkJoin(
			this.wsClientService.postObject( '/catalogoEstado', {} )
		).subscribe( response => {
			if( response[ 0 ].code === 200 ) {
				this.estados = response[ 0 ].data;
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
								}

								if( this.consultaCP ) {
									let fMunicipio = this.municipios.filter( ( municipio: any ) => municipio.claveEntidad === this.idMunicipioCP );
									this.frmSegubiciP1.get( 'delegacionMunicipio' ).setValue( fMunicipio[ 0 ] );
									this.consultaCP = false;
								}
							}
						});
				} else {
					this.municipios = [];
				}
				this.frmSegubiciP1.get( 'delegacionMunicipio' ).setValue( '' );
			}
		});

		this.frmSegubiciP1.get( 'cp' ).valueChanges.subscribe( cp => {
			if( cp !== null && typeof cp !== 'undefined' ) {
				if( !Number.isNaN( Number( cp ) ) && cp.length === 5 ) {
					this.wsClientService
						.postObject( '/catalogoPostal', { 'clave': cp } )
						.subscribe( response => {
							if( response.code === 200 ) {
								this.consultaCP = true;
								this.idMunicipioCP = response.data.claveMunicipio;

								let fEstados = this.estados.filter( ( estado: any ) => estado.claveEntidad == response.data.claveEstado );
								this.frmSegubiciP1.get( 'estado' ).setValue( fEstados[ 0 ] );
							}
						});
				}
			}
		});

		this.frmSegubiciP1.get( 'gobierno' ).valueChanges.subscribe( gobierno => {
			this.frmSegubiciP1.get( 'especifiqueGob' ).setValue( '' );

			if( gobierno ) {
				this.frmSegubiciP1.get( 'especifiqueGob' ).enable();
			} else {
				this.frmSegubiciP1.get( 'especifiqueGob' ).disable();
			}
		});

		this.frmSegubiciP1.get( 'parienteGob' ).valueChanges.subscribe( parienteGob => {
			this.frmSegubiciP1.get( 'especifiqueParGob' ).setValue( '' );

			if( parienteGob ) {
				this.frmSegubiciP1.get( 'especifiqueParGob' ).enable();
			} else {
				this.frmSegubiciP1.get( 'especifiqueParGob' ).disable();
			}
		});
	}

	private mostrarDatosCapturados(): void {
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
		this.frmSegubiciP1.get( 'coloniaPoblacion' ).setValue( this.segubiciP1Service.getModelP1().coloniaPoblacion );
		this.frmSegubiciP1.get( 'gobierno' ).setValue( this.segubiciP1Service.getModelP1().gobierno );
		this.frmSegubiciP1.get( 'especifiqueGob' ).setValue( this.segubiciP1Service.getModelP1().especifiqueGob );
		this.frmSegubiciP1.get( 'parienteGob' ).setValue( this.segubiciP1Service.getModelP1().parienteGob );
		this.frmSegubiciP1.get( 'especifiqueParGob' ).setValue( this.segubiciP1Service.getModelP1().especifiqueParGob );

		let fEstado = this.estados.filter( ( estado: any ) => estado.claveEntidad === this.segubiciP1Service.getModelP1().estado.claveEntidad );
		this.frmSegubiciP1.get( 'estado' ).setValue( fEstado[ 0 ] );
	}

	fnAvanzarP2(): void {
		this.segubiciP1Service.setModelP1( this.frmSegubiciP1.value );
		this.router.navigateByUrl( '/emision/segubici/seguro' );
	}
}