import { Component, OnInit }				  from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router }							  from '@angular/router';
import { Observable }						  from 'rxjs/Observable';
import											   'rxjs/add/observable/forkJoin';

import { ProcuraVidaP1Service }				  from './procura-vida-p1.service';

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
import { EstaturaValidator }				  from 'app/core/validators/estatura.validator';
import { NombreValidator }					  from 'app/core/validators/nombre.validator';
import { PesoValidator }					  from 'app/core/validators/peso.validator';
import { RfcValidator }						  from 'app/core/validators/rfc.validator';
import { TelefonoValidator }				  from 'app/core/validators/telefono.validator';
import { EntreEdadesValidator }				  from 'app/core/validators/entre-edades.validator';
import { DiferenciaTelefonosValidator }		  from 'app/core/validators/diferencia-telefonos.validator';

@Component({
	selector: 'pehir-procura-vida-p1',
	templateUrl: 'procura-vida-p1.component.html'
})

export class ProcuraVidaP1Component implements OnInit {
	frmProcuraVidaP1: FormGroup;

	estados: Estado[];
	municipios: Municipio[];
	ocupaciones: Ocupacion[];

	generos = GENEROS;
	fecNacOptions = FECNACOPTIONS;
	estadosCiviles = ESTADOSCIVILES;

	constructor(
		private fb: FormBuilder,
		private procuraVidaP1Service: ProcuraVidaP1Service,
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

			if( this.procuraVidaP1Service.hasModelP1() ) {
				this.mostrarDatosCapturados();
			}
		});
	}

	private crearFormulario(): void {
		this.frmProcuraVidaP1 = this.fb.group({
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
				EntreEdadesValidator(18,74)
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
		});
	}

	private registrarEventos(): void {
		this.frmProcuraVidaP1.get( 'estado' ).valueChanges.subscribe( estado => {
			if( estado !== null && typeof estado !== 'undefined' ) {
				if( estado.claveEntidad !== null && typeof estado.claveEntidad !== 'undefined' ) {
					this.wsClientService
						.postObject( '/catalogoMunicipio', { 'clave': estado.claveEntidad } )
						.subscribe( response => {
							if( response.code === 200 ) {
								this.municipios = response.data;

								if( this.procuraVidaP1Service.hasModelP1() ) {
									let fMunicipio = this.municipios.filter( ( municipio: any ) => municipio.claveEntidad === this.procuraVidaP1Service.getModelP1().delegacionMunicipio.claveEntidad );
									this.frmProcuraVidaP1.get( 'delegacionMunicipio' ).setValue( fMunicipio[ 0 ] );
								}
							}
						});
				} else {
					this.municipios = [];
				}
				this.frmProcuraVidaP1.get( 'delegacionMunicipio' ).setValue( '' );
			}
		});
	}

	private mostrarDatosCapturados(): void {
		this.frmProcuraVidaP1.get( 'padecimiento' ).setValue( this.procuraVidaP1Service.getModelP1().padecimiento );
		this.frmProcuraVidaP1.get( 'peso' ).setValue( this.procuraVidaP1Service.getModelP1().peso );
		this.frmProcuraVidaP1.get( 'estatura' ).setValue( this.procuraVidaP1Service.getModelP1().estatura );
		this.frmProcuraVidaP1.get( 'nombre' ).setValue( this.procuraVidaP1Service.getModelP1().nombre );
		this.frmProcuraVidaP1.get( 'apaterno' ).setValue( this.procuraVidaP1Service.getModelP1().apaterno );
		this.frmProcuraVidaP1.get( 'amaterno' ).setValue( this.procuraVidaP1Service.getModelP1().amaterno );
		this.frmProcuraVidaP1.get( 'fechanac' ).patchValue( this.procuraVidaP1Service.getModelP1().fechanac );
		this.frmProcuraVidaP1.get( 'nacionalidad' ).setValue( this.procuraVidaP1Service.getModelP1().nacionalidad );
		this.frmProcuraVidaP1.get( 'rfc' ).setValue( this.procuraVidaP1Service.getModelP1().rfc );
		this.frmProcuraVidaP1.get( 'estadoCivil' ).setValue( this.procuraVidaP1Service.getModelP1().estadoCivil );
		this.frmProcuraVidaP1.get( 'genero' ).setValue( this.procuraVidaP1Service.getModelP1().genero );
		this.frmProcuraVidaP1.get( 'calleNumero' ).setValue( this.procuraVidaP1Service.getModelP1().calleNumero );
		this.frmProcuraVidaP1.get( 'cp' ).setValue( this.procuraVidaP1Service.getModelP1().cp );
		this.frmProcuraVidaP1.get( 'coloniaPoblacion' ).setValue( this.procuraVidaP1Service.getModelP1().coloniaPoblacion );
		this.frmProcuraVidaP1.get( 'telefonos.telefono' ).setValue( this.procuraVidaP1Service.getModelP1().telefono );
		this.frmProcuraVidaP1.get( 'telefonos.celular' ).setValue( this.procuraVidaP1Service.getModelP1().celular );

		let fOcupacion = this.ocupaciones.filter( ( ocupacion: any ) => ocupacion.id === this.procuraVidaP1Service.getModelP1().ocupacion.id );
		this.frmProcuraVidaP1.get( 'ocupacion' ).setValue( fOcupacion[ 0 ] );

		let fEstado = this.estados.filter( ( estado: any ) => estado.claveEntidad === this.procuraVidaP1Service.getModelP1().estado.claveEntidad );
		this.frmProcuraVidaP1.get( 'estado' ).setValue( fEstado[ 0 ] );
	}

	fnAvanzarP2(): void {
		this.procuraVidaP1Service.setModelP1( this.frmProcuraVidaP1.value );
		this.router.navigateByUrl( '/emision/procuravida/beneficiarios' );
	}
}