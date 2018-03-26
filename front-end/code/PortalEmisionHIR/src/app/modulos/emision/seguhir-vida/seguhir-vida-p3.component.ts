import { Component, OnInit }				  from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router }							  from '@angular/router';

@Component({
	selector: 'pehir-seguhir-vida-p3',
	templateUrl: 'seguhir-vida-p3.component.html'
})

export class SeguhirVidaP3Component implements OnInit {
	private isValidQuestionary = false;

	private frmSeguhirVidaP3: FormGroup;

	private preguntasCuestionario: string[] = [
		'1) ¿Padece actualmente de alguna enfermedad?',
		'2) ¿Ha consultado al médico en los últimos dos años?',
		'3) ¿Tiene pendiente o se le ha practicado alguna intervención quirúrgica?',
		'4) ¿Padece de enfermedad del corazón, presión arterial alta o infarto del corazón?',
		'5) ¿Padece diabetes?',
		'6) ¿Ha sido detectado como positivo a SIDA?',
		'7) ¿Está actualmente en tratamiento médico?'
	];

	constructor(
		private fb: FormBuilder,
		private router: Router
	){}

	ngOnInit() {
		this.frmSeguhirVidaP3 = this.fb.group({
			'pregunta1': ['', Validators.compose([
				Validators.required
			])],
			'pregunta2': ['', Validators.compose([
				Validators.required
			])],
			'pregunta3': ['', Validators.compose([
				Validators.required
			])],
			'pregunta4': ['', Validators.compose([
				Validators.required
			])],
			'pregunta5': ['', Validators.compose([
				Validators.required
			])],
			'pregunta6': ['', Validators.compose([
				Validators.required
			])],
			'pregunta7': ['', Validators.compose([
				Validators.required
			])]
		});
	}

	onValidateQuestionary( isValidQuestionary ): void {
		this.isValidQuestionary = isValidQuestionary;
	}

	fnAvanzarP4(): void {

	}
}