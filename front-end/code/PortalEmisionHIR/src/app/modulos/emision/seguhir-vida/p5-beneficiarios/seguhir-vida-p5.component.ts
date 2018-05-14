import { Component, OnInit, ViewChild }		  from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router }							  from '@angular/router';

import { PolicyHolderTableComponent }		  from 'app/modulos/shared/policyholder-table/policyholder-table.component';

import { SeguhirVidaP5Service }				  from './seguhir-vida-p5.service';

@Component({
	selector: 'pehir-seguhir-vida-p5',
	templateUrl: 'seguhir-vida-p5.component.html'
})

export class SeguhirVidaP5Component implements OnInit {
	isValidTableTitular: boolean = false;
	isValidTableConyuge: boolean = false;
	isValidTableHijo1: boolean = false;
	isValidTableHijo2: boolean = false;
	areValidTables: boolean = false;

	frmSeguhirVidaP5: FormGroup;

	constructor(
		private fb: FormBuilder,
		private router: Router,
		private seguhirVidaP5Service: SeguhirVidaP5Service
	){}

	ngOnInit() {
		this.frmSeguhirVidaP5 = this.fb.group({});
	}

	onValidateTableTitular( isValidTableTitular ): void {
		this.isValidTableTitular = isValidTableTitular;
		this.updateFlag();
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
		this.areValidTables = this.isValidTableTitular &&
							  this.isValidTableConyuge &&
							  this.isValidTableHijo1 &&
							  this.isValidTableHijo2;
	}

	fnAvanzarP6(): void {
		this.seguhirVidaP5Service.setModelP5();
		this.router.navigateByUrl( '/emision/seguhirvida/agentes' );
	}
}