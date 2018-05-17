import { Component, OnInit }				  from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router }							  from '@angular/router';

import { SeguhirVidaService }				  from '../seguhir-vida.service';
import { SeguhirVidaP4Service }				  from './seguhir-vida-p4.service';

import { Plan }								  from 'app/core/models/plan';

import { EPLAN }							  from 'app/core/enum/plan';

@Component({
	selector: 'pehir-seguhir-vida-p4',
	templateUrl: 'seguhir-vida-p4.component.html'
})

export class SeguhirVidaP4Component implements OnInit {
	capturaConyuge: boolean = false;
	capturaHijos: boolean = false;

	isValidFormConyuge: boolean = false;
	isValidFormHijo1: boolean = false;
	isValidFormHijo2: boolean = false;
	areValidComponents: boolean = false;

	frmSeguhirVidaP4: FormGroup;

	constructor(
		private fb: FormBuilder,
		private router: Router,
		private seguhirVidaService: SeguhirVidaService,
		private seguhirVidaP4Service: SeguhirVidaP4Service
	){}

	ngOnInit() {
		this.crearFormulario();
		this.verificarPlan();
	}

	private crearFormulario(): void {
		this.frmSeguhirVidaP4 = this.fb.group({
			'confirmacionConyuge': ['', Validators.compose([
				Validators.required
			])],
			'padecimientoConyuge': ['', Validators.compose([
				Validators.required
			])],
			'confirmacionHijo1': ['', Validators.compose([
				Validators.required
			])],
			'padecimientoHijo1': ['', Validators.compose([
				Validators.required
			])],
			'confirmacionHijo2': ['', Validators.compose([
				Validators.required
			])],
			'padecimientoHijo2': ['', Validators.compose([
				Validators.required
			])]
		});
	}

	private verificarPlan(): void {
		let plan: Plan = this.seguhirVidaService.getPlanSeleccionado();

		this.capturaConyuge = ( plan.idPlan === EPLAN.FAMILIAR || plan.idPlan === EPLAN.CONYUGAL );
		this.capturaHijos   = ( plan.idPlan === EPLAN.FAMILIAR || plan.idPlan === EPLAN.HIJOS );

		if( !this.capturaConyuge ) {
			this.isValidFormConyuge = true;
			this.frmSeguhirVidaP4.controls[ 'confirmacionConyuge' ].setValue( false );
			this.fnCambiarConfirmacionConyuge();
		}

		if( !this.capturaHijos ) {
			this.isValidFormHijo1 = this.isValidFormHijo2 = true;
			this.frmSeguhirVidaP4.controls[ 'confirmacionHijo1' ].setValue( false );
			this.frmSeguhirVidaP4.controls[ 'confirmacionHijo2' ].setValue( false );
			this.fnCambiarConfirmacionHijo1();
			this.fnCambiarConfirmacionHijo2();
		}

		this.updateFlag();
	}

	fnCambiarConfirmacionConyuge(): void {
		this.frmSeguhirVidaP4.controls[ 'padecimientoConyuge' ].setValue( '' );

		if( this.frmSeguhirVidaP4.controls[ 'confirmacionConyuge' ].value ) {
			this.frmSeguhirVidaP4.controls[ 'padecimientoConyuge' ].enable();
		} else {
			this.frmSeguhirVidaP4.controls[ 'padecimientoConyuge' ].disable();
		}
	}

	fnCambiarConfirmacionHijo1(): void {
		this.frmSeguhirVidaP4.controls[ 'padecimientoHijo1' ].setValue( '' );

		if( this.frmSeguhirVidaP4.controls[ 'confirmacionHijo1' ].value ) {
			this.frmSeguhirVidaP4.controls[ 'padecimientoHijo1' ].enable();
		} else {
			this.frmSeguhirVidaP4.controls[ 'padecimientoHijo1' ].disable();
		}
	}

	fnCambiarConfirmacionHijo2(): void {
		this.frmSeguhirVidaP4.controls[ 'padecimientoHijo2' ].setValue( '' );

		if( this.frmSeguhirVidaP4.controls[ 'confirmacionHijo2' ].value ) {
			this.frmSeguhirVidaP4.controls[ 'padecimientoHijo2' ].enable();
		} else {
			this.frmSeguhirVidaP4.controls[ 'padecimientoHijo2' ].disable();
		}
	}

	onValidateFormConyuge( isValidForm ): void {
		this.isValidFormConyuge = isValidForm;
		this.updateFlag();
	}

	onValidateFormHijo1( isValidForm ): void {
		this.isValidFormHijo1 = isValidForm;
		this.updateFlag();
	}

	onValidateFormHijo2( isValidForm ): void {
		this.isValidFormHijo2 = isValidForm;
		this.updateFlag();
	}

	private updateFlag(): void {
		this.areValidComponents = this.isValidFormConyuge && this.isValidFormHijo1 && this.isValidFormHijo2;
	}

	fnAvanzarP5(): void {
		this.seguhirVidaP4Service.setModelP4( this.frmSeguhirVidaP4.value );
		this.router.navigateByUrl( '/emision/seguhirvida/beneficiarios' );
	}
}