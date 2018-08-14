import { Component, OnInit }				  from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router }							  from '@angular/router';
import { Observable }						  from 'rxjs/Observable';
import											   'rxjs/add/observable/forkJoin';

import { GastosFunerariosP1Service }		  from './gastos-funerarios-p1.service';

import { ESTADOSCIVILES }					  from 'app/core/data/estadosCiviles';
import { GENEROS }							  from 'app/core/data/generos';
import { FECNACOPTIONS }					  from 'app/core/data/calendarios/fecNacOptions';

import { Colonia }							  from 'app/core/models/colonia';
import { Estado }							  from 'app/core/models/estado';
import { Municipio }						  from 'app/core/models/municipio';
import { Ocupacion }						  from 'app/core/models/ocupacion';

import { WSClientService }					  from 'app/core/services/ws-client.service';

import { ApellidoValidator } 				  from 'app/core/validators/apellido.validator';
import { CelularValidator }					  from 'app/core/validators/celular.validator';
import { CodigoPostalValidator }			  from 'app/core/validators/codigo-postal.validator';
import { EstaturaValidator }				  from 'app/core/validators/estatura.validator';
import { NombreValidator }					  from 'app/core/validators/nombre.validator';
import { PesoValidator }					  from 'app/core/validators/peso.validator';
import { RfcValidator }						  from 'app/core/validators/rfc.validator';
import { EntreEdadesValidator }				  from 'app/core/validators/entre-edades.validator';

@Component({
	selector: 'pehir-gastos-funerarios-p1',
	templateUrl: 'gastos-funerarios-p1.component.html'
})

export class GastosFunerariosP1Component implements OnInit {
	selMunicipioCP: boolean = false;
	selColoniaCP: boolean = false;

	idMunicipioCP: string = '';
	idColoniaCP: string = '';

	frmGastosFunerariosP1: FormGroup;

	colonias: Colonia[];
	estados: Estado[];
	municipios: Municipio[];
	ocupaciones: Ocupacion[];

	generos = GENEROS;
	fecNacOptions = FECNACOPTIONS;
	estadosCiviles = ESTADOSCIVILES;

	constructor(
		private fb: FormBuilder,
		private gastosFunerariosP1Service: GastosFunerariosP1Service,
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
			this.wsClientService.postObject( '/catalogoOcupacion', {} ),
			this.wsClientService.postObject( '/catalogoEstado', {} )
		).subscribe( response => {
			if( response[ 0 ].code === 200 ) {
				this.ocupaciones = response[ 0 ].data;
			}

			if( response[ 1 ].code === 200 ) {
				this.estados = response[ 1 ].data;
			}

			if( this.gastosFunerariosP1Service.hasModelP1() ) {
				this.mostrarDatosCapturados();
			}
		});
	}

	private crearFormulario(): void {
		this.frmGastosFunerariosP1 = this.fb.group({
			'padecimiento':['', Validators.compose([
				Validators.required
			])],
			'peso':['', Validators.compose([
				Validators.required,
				PesoValidator()
			])],
			'estatura':['', Validators.compose([
				Validators.required,
				EstaturaValidator()
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
			'fechanac': ['', Validators.compose([
				Validators.required,
				EntreEdadesValidator(12,70)
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
			])]
		});
	}

	private registrarEventos(): void {
		this.frmGastosFunerariosP1.get( 'estado' ).valueChanges.subscribe( estado => {
			if( estado !== null && typeof estado !== 'undefined' ) {
				if( estado.claveEntidad !== null && typeof estado.claveEntidad !== 'undefined' ) {
					this.wsClientService
						.postObject( '/catalogoMunicipio', { 'clave': estado.claveEntidad } )
						.subscribe( response => {
							if( response.code === 200 ) {
								this.municipios = response.data;

								if( this.gastosFunerariosP1Service.hasModelP1() ) {
									let fMunicipio = this.municipios.filter( ( municipio: any ) => municipio.claveEntidad === this.gastosFunerariosP1Service.getModelP1().delegacionMunicipio.claveEntidad );
									this.frmGastosFunerariosP1.get( 'delegacionMunicipio' ).setValue( fMunicipio[ 0 ] );
								} else if( this.selMunicipioCP ) {
									let fMunicipio = this.municipios.filter( ( municipio: any ) => municipio.claveEntidad === this.idMunicipioCP );
									this.frmGastosFunerariosP1.get( 'delegacionMunicipio' ).setValue( fMunicipio[ 0 ] );
									this.selMunicipioCP = false;
								}
							}
						});
				} else {
					this.municipios = [];
				}
				this.frmGastosFunerariosP1.get( 'delegacionMunicipio' ).setValue( '' );
			}
		});

		this.frmGastosFunerariosP1.get( 'delegacionMunicipio' ).valueChanges.subscribe( municipio => {
			if( municipio !== null && typeof municipio !== 'undefined' ) {
				if( municipio.claveEntidad !== null && typeof municipio.claveEntidad !== 'undefined' ) {
					let estado = this.frmGastosFunerariosP1.get( 'estado' ).value;
					this.wsClientService
						.postObject( '/catalogoColonia', { 'clave': estado.claveEntidad, 'clave2': municipio.claveEntidad } )
						.subscribe( response => {
							if( response.code === 200 ) {
								this.colonias = response.data;

								if( this.gastosFunerariosP1Service.hasModelP1() ) {
									let fColonia = this.colonias.filter( ( colonia: any ) => colonia.claveEntidad === this.gastosFunerariosP1Service.getModelP1().coloniaPoblacion.claveEntidad );
									this.frmGastosFunerariosP1.get( 'coloniaPoblacion' ).setValue( fColonia[ 0 ] );
								} else if ( this.selColoniaCP ) {
									let fColonia = this.colonias.filter( ( colonia: any ) => colonia.claveEntidad === this.idColoniaCP );
									this.frmGastosFunerariosP1.get( 'coloniaPoblacion' ).setValue( fColonia[ 0 ] );
									this.selColoniaCP = false;
								}
							}
						});
				} else {
					this.colonias = [];
				}
				this.frmGastosFunerariosP1.get( 'coloniaPoblacion' ).setValue( '' );
			}
		});

		this.frmGastosFunerariosP1.get( 'cp' ).valueChanges.subscribe( cp => {
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
								this.frmGastosFunerariosP1.get( 'estado' ).setValue( fEstados[ 0 ] );
							}
						});
				}
			}
		});
	}

	private mostrarDatosCapturados(): void {
		this.frmGastosFunerariosP1.get( 'padecimiento' ).setValue( this.gastosFunerariosP1Service.getModelP1().padecimiento );
		this.frmGastosFunerariosP1.get( 'peso' ).setValue( this.gastosFunerariosP1Service.getModelP1().peso );
		this.frmGastosFunerariosP1.get( 'estatura' ).setValue( this.gastosFunerariosP1Service.getModelP1().estatura );
		this.frmGastosFunerariosP1.get( 'nombre' ).setValue( this.gastosFunerariosP1Service.getModelP1().nombre );
		this.frmGastosFunerariosP1.get( 'apaterno' ).setValue( this.gastosFunerariosP1Service.getModelP1().apaterno );
		this.frmGastosFunerariosP1.get( 'amaterno' ).setValue( this.gastosFunerariosP1Service.getModelP1().amaterno );
		this.frmGastosFunerariosP1.get( 'fechanac' ).patchValue( this.gastosFunerariosP1Service.getModelP1().fechanac );
		this.frmGastosFunerariosP1.get( 'nacionalidad' ).setValue( this.gastosFunerariosP1Service.getModelP1().nacionalidad );
		this.frmGastosFunerariosP1.get( 'rfc' ).setValue( this.gastosFunerariosP1Service.getModelP1().rfc );
		this.frmGastosFunerariosP1.get( 'estadoCivil' ).setValue( this.gastosFunerariosP1Service.getModelP1().estadoCivil );
		this.frmGastosFunerariosP1.get( 'genero' ).setValue( this.gastosFunerariosP1Service.getModelP1().genero );
		this.frmGastosFunerariosP1.get( 'calleNumero' ).setValue( this.gastosFunerariosP1Service.getModelP1().calleNumero );
		this.frmGastosFunerariosP1.get( 'cp' ).setValue( this.gastosFunerariosP1Service.getModelP1().cp );

		let fOcupacion = this.ocupaciones.filter( ( ocupacion: any ) => ocupacion.id === this.gastosFunerariosP1Service.getModelP1().ocupacion.id );
		this.frmGastosFunerariosP1.get( 'ocupacion' ).setValue( fOcupacion[ 0 ] );

		let fEstado = this.estados.filter( ( estado: any ) => estado.claveEntidad === this.gastosFunerariosP1Service.getModelP1().estado.claveEntidad );
		this.frmGastosFunerariosP1.get( 'estado' ).setValue( fEstado[ 0 ] );
	}

	fnAvanzarP2(): void {
		this.gastosFunerariosP1Service.setModelP1( this.frmGastosFunerariosP1.value );
		this.router.navigateByUrl( '/emision/gastosfunerarios/beneficiarios' );
	}
}