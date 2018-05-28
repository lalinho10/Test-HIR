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
	preguntasMedicas: PreguntaMedica[];

	@Output()
	onValidateQuestionary: EventEmitter<boolean> = new EventEmitter<boolean>();

	frmCuestionario: FormGroup;

	condicionesFisicas = CONDICIONESFISICAS;

	constructor(
		private fb: FormBuilder
	) {}

	get grupoPreguntas(): FormArray {
		return this.frmCuestionario.controls[ 'grupoPreguntas' ] as FormArray;
	}

	ngOnInit() {
		this.frmCuestionario = this.fb.group({
			'grupoPreguntas': this.fb.array( [] )
		});

		this.crearArregloGrupos();

		this.frmCuestionario.statusChanges.subscribe(
			data => this.onValidateQuestionary.emit( this.frmCuestionario.valid )
		);
	}

	private crearArregloGrupos(): void {
		let grupoPreguntas: FormArray = this.frmCuestionario.controls[ 'grupoPreguntas' ] as FormArray;

		for( let i = 0; i < this.preguntasMedicas.length; i++ ) {
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