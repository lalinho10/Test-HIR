import { Component, OnInit }				  from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router }							  from '@angular/router';
import { Observable }						  from 'rxjs/Observable';
import											   'rxjs/add/observable/forkJoin';

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
import { EntreEdadesValidator }				  from 'app/core/validators/entre-edades.validator';

@Component({
	selector: 'pehir-apindividual-p1',
	templateUrl: 'apindividual-p1.component.html'
})

export class ApindividualP1Component implements OnInit {
	consultaCP: boolean = false;

	idMunicipioCP: string = '';

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
								}

								if( this.consultaCP ) {
									let fMunicipio = this.municipios.filter( ( municipio: any ) => municipio.claveEntidad === this.idMunicipioCP );
									this.frmApindividualP1.get( 'delegacionMunicipio' ).setValue( fMunicipio[ 0 ] );
									this.consultaCP = false;
								}
							}
						});
				} else {
					this.municipios = [];
				}
				this.frmApindividualP1.get( 'delegacionMunicipio' ).setValue( '' );
			}
		});

		this.frmApindividualP1.get( 'cp' ).valueChanges.subscribe( cp => {
			if( cp !== null && typeof cp !== 'undefined' ) {
				if( !Number.isNaN( Number( cp ) ) && cp.length === 5 ) {
					this.wsClientService
						.postObject( '/catalogoPostal', { 'clave': cp } )
						.subscribe( response => {
							if( response.code === 200 ) {
								this.consultaCP = true;
								this.idMunicipioCP = response.data.claveMunicipio;

								let fEstados = this.estados.filter( ( estado: any ) => estado.claveEntidad == response.data.claveEstado );
								this.frmApindividualP1.get( 'estado' ).setValue( fEstados[ 0 ] );
							}
						});
				}
			}
		});

		this.frmApindividualP1.get( 'gobierno' ).valueChanges.subscribe( gobierno => {
			this.frmApindividualP1.get( 'especifiqueGob' ).setValue( '' );

			if( gobierno ) {
				this.frmApindividualP1.get( 'especifiqueGob' ).enable();
			} else {
				this.frmApindividualP1.get( 'especifiqueGob' ).disable();
			}
		});

		this.frmApindividualP1.get( 'parienteGob' ).valueChanges.subscribe( parienteGob => {
			this.frmApindividualP1.get( 'especifiqueParGob' ).setValue( '' );

			if( parienteGob ) {
				this.frmApindividualP1.get( 'especifiqueParGob' ).enable();
			} else {
				this.frmApindividualP1.get( 'especifiqueParGob' ).disable();
			}
		});
	}

	private mostrarDatosCapturados(): void {
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
		this.frmApindividualP1.get( 'coloniaPoblacion' ).setValue( this.apindividualP1Service.getModelP1().coloniaPoblacion );
		this.frmApindividualP1.get( 'gobierno' ).setValue( this.apindividualP1Service.getModelP1().gobierno );
		this.frmApindividualP1.get( 'especifiqueGob' ).setValue( this.apindividualP1Service.getModelP1().especifiqueGob );
		this.frmApindividualP1.get( 'parienteGob' ).setValue( this.apindividualP1Service.getModelP1().parienteGob );
		this.frmApindividualP1.get( 'especifiqueParGob' ).setValue( this.apindividualP1Service.getModelP1().especifiqueParGob );

		let fEstado = this.estados.filter( ( estado: any ) => estado.claveEntidad === this.apindividualP1Service.getModelP1().estado.claveEntidad );
		this.frmApindividualP1.get( 'estado' ).setValue( fEstado[ 0 ] );
	}

	fnAvanzarP2(): void {
		this.apindividualP1Service.setModelP1( this.frmApindividualP1.value );
		this.router.navigateByUrl( '/emision/apindividual/seguro' );
	}
}