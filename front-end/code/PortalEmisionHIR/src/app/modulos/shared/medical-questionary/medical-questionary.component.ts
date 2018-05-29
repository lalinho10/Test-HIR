import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators }  from '@angular/forms';

import { CONDICIONESFISICAS }							  from 'app/core/data/condiciones-fisicas';

import { PreguntaMedica }								  from 'app/core/models/pregunta-medica';

@Component({
	selector: 'pehir-medical-questionary',
	templateUrl: 'medical-questionary.component.html'
})

export class MedicalQuestionaryComponent implements OnInit {
	@Input()
	preguntas: string[];

	@Output()
	onValidateQuestionary: EventEmitter<boolean> = new EventEmitter<boolean>();

	frmCuestionario: FormGroup;

	preguntasMedicas: PreguntaMedica[] = [];

	condicionesFisicas = CONDICIONESFISICAS;

	constructor(
		private fb: FormBuilder
	) {}

	get grupoPreguntas(): FormArray {
		return this.frmCuestionario.controls[ 'grupoPreguntas' ] as FormArray;
	}

	ngOnInit() {
		this.crearFormulario();
		this.registrarEventos();
	}

	private crearFormulario(): void {
		this.frmCuestionario = this.fb.group({
			'grupoPreguntas': this.fb.array( [] )
		});

		this.crearArregloGrupos();
	}

	private crearArregloGrupos(): void {
		let grupoPreguntas: FormArray = this.frmCuestionario.controls[ 'grupoPreguntas' ] as FormArray;

		for( let i: number = 0; i < this.preguntas.length; i++ ) {
			let grupoPregunta: FormGroup = this.crearGrupo();
			grupoPreguntas.push( grupoPregunta );
		}
	}

	private crearGrupo(): FormGroup {
		return this.fb.group({
			'pregunta': ['', Validators.compose([
				Validators.required
			])],
			'detalleRespuesta': this.fb.group({
				'nombrePadecimiento': ['', Validators.compose([
					Validators.required
				])],
				'fechaPadecimiento': ['', Validators.compose([
					Validators.required
				])],
				'duracionPadecimiento': ['', Validators.compose([
					Validators.required
				])],
				'condicionesActuales': ['', Validators.compose([
					Validators.required
				])]
			})
		});
	}

	private registrarEventos() {
		this.frmCuestionario.statusChanges.subscribe(
			data => {
				this.onValidateQuestionary.emit( this.frmCuestionario.valid );

				if( this.frmCuestionario.valid ) {
					this.crearModelo();
				}
			}
		);
	}

	private crearModelo() {
		for( let i: number = 0; i < this.preguntas.length; i++ ) {
			let grupoPreguntas: FormArray = this.frmCuestionario.controls[ 'grupoPreguntas' ] as FormArray;
			let grupoPregunta: FormGroup = grupoPreguntas.at( i ) as FormGroup;
			let grupoDetalleRespuesta: FormGroup = grupoPregunta.controls[ 'detalleRespuesta' ] as FormGroup;

			let pregunta: PreguntaMedica = new PreguntaMedica();

			pregunta.idPregunta = i;
			pregunta.textoPregunta = this.preguntas[ i ];
			pregunta.confirmacionPregunta = grupoPregunta.controls[ 'pregunta' ].value;
			pregunta.nombrePadecimiento = ( grupoPregunta.controls[ 'pregunta' ].value ) ? grupoDetalleRespuesta.controls[ 'nombrePadecimiento' ].value : undefined;
			pregunta.fechaPadecimiento = ( grupoPregunta.controls[ 'pregunta' ].value ) ? grupoDetalleRespuesta.controls[ 'fechaPadecimiento' ].value : undefined;
			pregunta.duracionPadecimiento = ( grupoPregunta.controls[ 'pregunta' ].value ) ? grupoDetalleRespuesta.controls[ 'duracionPadecimiento' ].value : undefined;
			pregunta.condicionesActuales = ( grupoPregunta.controls[ 'pregunta' ].value ) ? grupoDetalleRespuesta.controls[ 'condicionesActuales' ].value : undefined;

			this.preguntasMedicas.push( pregunta );
		}
	}

	private fnCambiarRespuesta( idPregunta: number ): void {
		let grupoPreguntas: FormArray = this.frmCuestionario.controls[ 'grupoPreguntas' ] as FormArray;
		let grupoPregunta: FormGroup = grupoPreguntas.at( idPregunta ) as FormGroup;
		let grupoDetalleRespuesta: FormGroup = grupoPregunta.controls[ 'detalleRespuesta' ] as FormGroup;

		grupoDetalleRespuesta.reset();

		if( grupoPregunta.controls[ 'pregunta' ].value ) {
			grupoDetalleRespuesta.enable();
		} else  {
			grupoDetalleRespuesta.disable();
		}
	}
}