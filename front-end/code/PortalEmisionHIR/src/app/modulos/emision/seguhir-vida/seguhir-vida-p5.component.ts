import { Component, OnInit }				  from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router }							  from '@angular/router';

@Component({
	selector: 'pehir-seguhir-vida-p3',
	templateUrl: 'seguhir-vida-p5.component.html'
})

export class SeguhirVidaP5Component implements OnInit {
	private frmSeguhirVidaP5: FormGroup;

	constructor(
		private fb: FormBuilder,
		private router: Router
	){}

	ngOnInit() {
		this.frmSeguhirVidaP5 = this.fb.group({
			
		});
	}

	fnAvanzarP6(): void {

	}
}