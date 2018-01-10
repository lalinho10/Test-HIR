import { Component, OnInit }				  from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router }							  from '@angular/router';

@Component({
	selector: 'pehir-procura-vida-p2',
	templateUrl: 'procura-vida-p2.component.html'
})

export class ProcuraVidaP2Component implements OnInit {
	private frmProcuraVidaP2: FormGroup;

	constructor(
		private router: Router,
		private fb: FormBuilder
	){}

	ngOnInit() {
		this.frmProcuraVidaP2 = this.fb.group({

		});
	}
}