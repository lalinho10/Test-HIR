import { Component, OnInit }				  from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router }							  from '@angular/router';

@Component({
	selector: 'pehir-vida-ahorro-p5',
	templateUrl: 'vida-ahorro-p5.component.html'
})

export class VidaAhorroP5Component implements OnInit {
	isValidTableConyuge: boolean = false;
	isValidTableHijo1: boolean = false;
	isValidTableHijo2: boolean = false;
	areValidTables: boolean = false;

	frmVidaAhorroP5: FormGroup;

	constructor(
		private fb: FormBuilder,
		private router: Router
	){}

	ngOnInit() {
		this.frmVidaAhorroP5 = this.fb.group({});
	}

	onValidateTableConyuge( isValidTableConyuge ): void {
		this.isValidTableConyuge = isValidTableConyuge;
		this.updateFlag();
	}

	onValidateTableHijo1( isValidTableHijo1 ): void {
		this.isValidTableHijo1 = isValidTableHijo1;
		this.updateFlag();
	}

	onValidateTableHijo2( isValidTableHijo2 ): void {
		this.isValidTableHijo2 = isValidTableHijo2;
		this.updateFlag();
	}

	private updateFlag(): void {
		this.areValidTables = this.isValidTableConyuge && this.isValidTableHijo1 && this.isValidTableHijo2;
	}

	fnAvanzarP6(): void {
		this.router.navigateByUrl( '/emision/vidaahorro/agentes' );
	}
}