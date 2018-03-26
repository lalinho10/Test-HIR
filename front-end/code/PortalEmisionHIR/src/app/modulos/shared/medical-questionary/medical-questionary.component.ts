import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators }  from '@angular/forms';

import { PreguntaMedica }								  from 'app/core/models/pregunta-medica';

@Component({
	selector: 'pehir-medical-questionary',
	templateUrl: 'medical-questionary.component.html'
})

export class MedicalQuestionaryComponent implements OnInit {
	@Input()
	private preguntasMedicas: PreguntaMedica[];

	@Output()
	private onValidateQuestionary: EventEmitter<boolean> = new EventEmitter<boolean>();

	private frmCuestionario: FormGroup;

	constructor(
		private fb: FormBuilder
	) {}

	ngOnInit() {
		this.frmCuestionario = this.fb.group({
			'grupoPreguntas': this.fb.array( [] )
		});

		this.crearArregloGrupos();

		this.frmCuestionario.statusChanges.subscribe(
			data => this.onValidateQuestionary.emit( this.frmCuestionario.valid )
		);
	}

	private crearGrupo(): FormGroup {
		return this.fb.group({
			'pregunta': ['', Validators.compose([
				Validators.required
			])],
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
	}

	private crearArregloGrupos(): void {
		let grupoPreguntas: FormArray = this.frmCuestionario.controls[ 'grupoPreguntas' ] as FormArray;

		for( let i = 0; i < this.preguntasMedicas.length; i++ ) {
			let grupoPregunta: FormGroup = this.crearGrupo();
			grupoPreguntas.push( grupoPregunta );
		}
	}

	private fnCambiarRespuesta( idPregunta: number ): void {
		let grupoPreguntas: FormArray = this.frmCuestionario.controls[ 'grupoPreguntas' ] as FormArray;
		let grupoPregunta: FormGroup = grupoPreguntas.at( idPregunta ) as FormGroup;

		grupoPregunta.controls[ 'nombrePadecimiento' ].setValue( '' );
		grupoPregunta.controls[ 'fechaPadecimiento' ].setValue( '' );
		grupoPregunta.controls[ 'duracionPadecimiento' ].setValue( '' );
		grupoPregunta.controls[ 'condicionesActuales' ].setValue( '' );

		if( grupoPregunta.controls[ 'pregunta' ].value ) {
			grupoPregunta.controls[ 'nombrePadecimiento' ].enable();
			grupoPregunta.controls[ 'fechaPadecimiento' ].enable();
			grupoPregunta.controls[ 'duracionPadecimiento' ].enable();
			grupoPregunta.controls[ 'condicionesActuales' ].enable();
		} else  {
			grupoPregunta.controls[ 'nombrePadecimiento' ].disable();
			grupoPregunta.controls[ 'fechaPadecimiento' ].disable();
			grupoPregunta.controls[ 'duracionPadecimiento' ].disable();
			grupoPregunta.controls[ 'condicionesActuales' ].disable();
		}
	}
}