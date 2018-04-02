import { Component, OnInit }				  from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router }							  from '@angular/router';

@Component({
	selector: 'pehir-seguhir-vida-p5',
	templateUrl: 'seguhir-vida-p5.component.html'
})

export class SeguhirVidaP5Component implements OnInit {
	private isValidTableConyuge: boolean = false;
	private isValidTableHijo1: boolean = false;
	private isValidTableHijo2: boolean = false;
	private areValidTables: boolean = false;

	private frmSeguhirVidaP5: FormGroup;

	constructor(
		private fb: FormBuilder,
		private router: Router
	){}

	ngOnInit() {
		this.frmSeguhirVidaP5 = this.fb.group({});
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
		this.router.navigateByUrl( '/emision/seguhirvida/agentes' );
	}
}