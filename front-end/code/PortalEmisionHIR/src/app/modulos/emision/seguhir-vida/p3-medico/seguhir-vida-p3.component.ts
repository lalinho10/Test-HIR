import { Component, OnInit, ViewChild }		  from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router }							  from '@angular/router';

import { MedicalQuestionaryComponent }		  from 'app/modulos/shared/medical-questionary/medical-questionary.component';

import { SeguhirVidaP3Service }				  from './seguhir-vida-p3.service';
import { WSClientService }					  from 'app/core/services/ws-client.service';

import { EstaturaValidator }				  from 'app/core/validators/estatura.validator';
import { PesoValidator }					  from 'app/core/validators/peso.validator';

import { FrecuenciaBebida }					  from 'app/core/models/frecuencia-bebida';
import { FrecuenciaDeporte }				  from 'app/core/models/frecuencia-deporte';
import { FrecuenciaFuma }					  from 'app/core/models/frecuencia-fuma';
import { TipoDeporte }						  from 'app/core/models/tipo-deporte';

@Component({
	selector: 'pehir-seguhir-vida-p3',
	templateUrl: 'seguhir-vida-p3.component.html'
})

export class SeguhirVidaP3Component implements OnInit {
	@ViewChild( MedicalQuestionaryComponent ) cmpCuestionario;

	isValidQuestionary = false;

	frmSeguhirVidaP3: FormGroup;

	frecuenciasBebida: FrecuenciaBebida[];
	frecuenciasDeporte: FrecuenciaDeporte[];
	frecuenciasFuma: FrecuenciaFuma[];
	tiposDeporte: TipoDeporte[];

	preguntasCuestionario: string[] = [
		'1. ¿Padece actualmente de alguna enfermedad?',
		'2. ¿Ha consultado al médico en los últimos dos años?',
		'3. ¿Tiene pendiente o se le ha practicado alguna intervención quirúrgica?',
		'4. ¿Padece de enfermedad del corazón, presión arterial alta o infarto del corazón?',
		'5. ¿Padece diabetes?',
		'6. ¿Ha sido detectado como positivo a SIDA?',
		'7. ¿Está actualmente en tratamiento médico?'
	];

	constructor(
		private fb: FormBuilder,
		private router: Router,
		private seguhirVidaP3Service: SeguhirVidaP3Service,
		private wsClientService: WSClientService
	){}

	ngOnInit() {
		this.leerCatalogos();
		this.crearFormulario();
	}

	private leerCatalogos(): void {
		this.wsClientService
			.postObject( '/catalogoTipoDeporte', {} )
			.subscribe( response => {
				if( response.code === 200 ) {
					this.tiposDeporte = response.data;
				}
			});

		this.wsClientService
			.postObject( '/catalogoFrecuenciaBebida', {} )
			.subscribe( response => {
				if( response.code === 200 ) {
					this.frecuenciasBebida = response.data;
				}
			});

		this.wsClientService
			.postObject( '/catalogoFrecuenciaDeporte', {} )
			.subscribe( response => {
				if( response.code === 200 ) {
					this.frecuenciasDeporte = response.data;
				}
			});

		this.wsClientService
			.postObject( '/catalogoFrecuenciaFuma', {} )
			.subscribe( response => {
				if( response.code === 200 ) {
					this.frecuenciasFuma = response.data;
				}
			});
	}

	private crearFormulario(): void {
		this.frmSeguhirVidaP3 = this.fb.group({
			'estatura': ['', Validators.compose([
				Validators.required,
				EstaturaValidator()
			])],
			'peso': ['', Validators.compose([
				Validators.required,
				PesoValidator()
			])],
			'variacionPeso': ['', Validators.compose([
				Validators.required,
			])],
			'disminucionPeso': ['', Validators.compose([
				Validators.required,
				PesoValidator()
			])],
			'aumentoPeso': ['', Validators.compose([
				Validators.required,
				PesoValidator()
			])],
			'causaVariacion': ['', Validators.compose([
				Validators.required
			])],
			'datosAtencion': ['', Validators.compose([
				Validators.required
			])],
			'deportes': ['', Validators.compose([
				Validators.required
			])],

			'consumoAlcohol': this.fb.group({
				'confirmacion': ['', Validators.compose([
					Validators.required
				])],
				'clase': ['', Validators.compose([
					Validators.required
				])],
				'cantidad': ['', Validators.compose([
					Validators.required
				])],
				'frecuencia': ['', Validators.compose([
					Validators.required
				])]
			}),

			'fuma': this.fb.group({
				'confirmacion': ['', Validators.compose([
					Validators.required
				])],
				'clase': ['', Validators.compose([
					Validators.required
				])],
				'cantidad': ['', Validators.compose([
					Validators.required
				])],
				'frecuencia': ['', Validators.compose([
					Validators.required
				])]
			}),

			'competencias': ['', Validators.compose([
				Validators.required
			])],
			'tipoDeporte': ['', Validators.compose([
				Validators.required
			])],
			'frecuenciaDeporte': ['', Validators.compose([
				Validators.required
			])],
			'pasajeroAvion': ['', Validators.compose([
				Validators.required
			])],
			'horasVuelo': ['', Validators.compose([
				Validators.required
			])]
			
		});
	}

	fnCambiarVariacion(): void {
		this.frmSeguhirVidaP3.controls[ 'disminucionPeso' ].setValue( '' );
		this.frmSeguhirVidaP3.controls[ 'aumentoPeso' ].setValue( '' );
		this.frmSeguhirVidaP3.controls[ 'causaVariacion' ].setValue( '' );

		if( this.frmSeguhirVidaP3.controls[ 'variacionPeso' ].value ) {
			this.frmSeguhirVidaP3.controls[ 'disminucionPeso' ].enable();
			this.frmSeguhirVidaP3.controls[ 'aumentoPeso' ].enable();
			this.frmSeguhirVidaP3.controls[ 'causaVariacion' ].enable();
		} else {
			this.frmSeguhirVidaP3.controls[ 'disminucionPeso' ].disable();
			this.frmSeguhirVidaP3.controls[ 'aumentoPeso' ].disable();
			this.frmSeguhirVidaP3.controls[ 'causaVariacion' ].disable();
		}
	}

	fnCambiarAlcohol(): void {
		this.frmSeguhirVidaP3.get( 'consumoAlcohol.clase' ).setValue( '' );
		this.frmSeguhirVidaP3.get( 'consumoAlcohol.cantidad' ).setValue( '' );
		this.frmSeguhirVidaP3.get( 'consumoAlcohol.frecuencia' ).setValue( '' );

		if( this.frmSeguhirVidaP3.get( 'consumoAlcohol.confirmacion' ).value ) {
			this.frmSeguhirVidaP3.get( 'consumoAlcohol.clase' ).enable();
			this.frmSeguhirVidaP3.get( 'consumoAlcohol.cantidad' ).enable();
			this.frmSeguhirVidaP3.get( 'consumoAlcohol.frecuencia' ).enable();
		} else {
			this.frmSeguhirVidaP3.get( 'consumoAlcohol.clase' ).disable();
			this.frmSeguhirVidaP3.get( 'consumoAlcohol.cantidad' ).disable();
			this.frmSeguhirVidaP3.get( 'consumoAlcohol.frecuencia' ).disable();
		}
	}

	fnCambiarFuma(): void {
		this.frmSeguhirVidaP3.get( 'fuma.clase' ).setValue( '' );
		this.frmSeguhirVidaP3.get( 'fuma.cantidad' ).setValue( '' );
		this.frmSeguhirVidaP3.get( 'fuma.frecuencia' ).setValue( '' );

		if( this.frmSeguhirVidaP3.get( 'fuma.confirmacion' ).value ) {
			this.frmSeguhirVidaP3.get( 'fuma.clase' ).enable();
			this.frmSeguhirVidaP3.get( 'fuma.cantidad' ).enable();
			this.frmSeguhirVidaP3.get( 'fuma.frecuencia' ).enable();
		} else {
			this.frmSeguhirVidaP3.get( 'fuma.clase' ).disable();
			this.frmSeguhirVidaP3.get( 'fuma.cantidad' ).disable();
			this.frmSeguhirVidaP3.get( 'fuma.frecuencia' ).disable();
		}
	}

	fnCambiarCompetencias(): void {
		this.frmSeguhirVidaP3.controls[ 'tipoDeporte' ].setValue( '' );

		if( this.frmSeguhirVidaP3.controls[ 'competencias' ].value ) {
			this.frmSeguhirVidaP3.controls[ 'tipoDeporte' ].enable();
		} else {
			this.frmSeguhirVidaP3.controls[ 'tipoDeporte' ].disable();
		}
	}

	fnCambiarPasajeroAvion(): void {
		this.frmSeguhirVidaP3.controls[ 'horasVuelo' ].setValue( '' );

		if( this.frmSeguhirVidaP3.controls[ 'pasajeroAvion' ].value ) {
			this.frmSeguhirVidaP3.controls[ 'horasVuelo' ].enable();
		} else {
			this.frmSeguhirVidaP3.controls[ 'horasVuelo' ].disable();
		}
	}

	onValidateQuestionary( isValidQuestionary ): void {
		this.isValidQuestionary = isValidQuestionary;
	}

	fnAvanzarP4(): void {
		this.seguhirVidaP3Service.setModelP3( this.cmpCuestionario.preguntasMedicas, this.frmSeguhirVidaP3.value );
		this.router.navigateByUrl( '/emision/seguhirvida/asegurados' );
	}
}