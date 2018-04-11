import { Component, OnInit }				  from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router }							  from '@angular/router';

import { EstaturaValidator }				  from 'app/core/validators/estatura.validator';
import { PesoValidator }					  from 'app/core/validators/peso.validator';

@Component({
	selector: 'pehir-seguhir-vida-p3',
	templateUrl: 'seguhir-vida-p3.component.html'
})

export class SeguhirVidaP3Component implements OnInit {
	isValidQuestionary = false;

	frmSeguhirVidaP3: FormGroup;

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
		private router: Router
	){}

	ngOnInit() {
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
			'nivelCompetencia': ['', Validators.compose([
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
		this.frmSeguhirVidaP3.controls[ 'nivelCompetencia' ].setValue( '' );

		if( this.frmSeguhirVidaP3.controls[ 'competencias' ].value ) {
			this.frmSeguhirVidaP3.controls[ 'nivelCompetencia' ].enable();
		} else {
			this.frmSeguhirVidaP3.controls[ 'nivelCompetencia' ].disable();
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
		this.router.navigateByUrl( '/emision/seguhirvida/asegurados' );
	}
}