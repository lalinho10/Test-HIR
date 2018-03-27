import { Component, OnInit }				  from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router }							  from '@angular/router';

@Component({
	selector: 'pehir-vida-ahorro-p5',
	templateUrl: 'vida-ahorro-p5.component.html'
})

export class VidaAhorroP5Component implements OnInit {
	private frmVidaAhorroP5: FormGroup;

	constructor(
		private fb: FormBuilder,
		private router: Router
	){}

	ngOnInit() {
		this.frmVidaAhorroP5 = this.fb.group({
			
		});
	}

	fnAvanzarP6(): void {

	}
}