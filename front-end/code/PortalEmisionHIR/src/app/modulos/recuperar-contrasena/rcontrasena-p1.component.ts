import { Component, OnInit } 				  from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } 	 						  from '@angular/router';

@Component({
	selector: 'pehir-rcontrasena-p1',
	templateUrl: 'rcontrasena-p1.component.html'
})

export class RcontrasenaP1Component implements OnInit {
	private frmRconP1: FormGroup;

	constructor(
		private router: Router,
		private fb: FormBuilder
	) {}

	ngOnInit() {
		this.frmRconP1 = this.fb.group({
			'correoe': ['', Validators.compose([
				Validators.required,
				Validators.email,
				Validators.maxLength(50)
			])]
		})
	}

	fnAvanzarP2Rcon(): void {
		this.router.navigateByUrl( '/rcontrasena/codigo' );
	}
}