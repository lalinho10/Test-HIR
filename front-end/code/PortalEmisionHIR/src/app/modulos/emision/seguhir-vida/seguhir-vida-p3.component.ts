import { Component, OnInit }				  from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'pehir-seguhir-vida-p3',
	templateUrl: 'seguhir-vida-p3.component.html'
})

export class SeguhirVidaP3Component implements OnInit {
	private frmSeguhirVidaP3: FormGroup;

	constructor(
		private fb: FormBuilder,
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
}