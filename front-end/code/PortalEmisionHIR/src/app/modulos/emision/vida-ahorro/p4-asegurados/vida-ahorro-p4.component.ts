import { Component, OnInit }				  from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router }							  from '@angular/router';

@Component({
	selector: 'pehir-vida-ahorro-p4',
	templateUrl: 'vida-ahorro-p4.component.html'
})

export class VidaAhorroP4Component implements OnInit {
	isValidFormConyuge: boolean = false;
	isValidFormHijo1: boolean = false;
	isValidFormHijo2: boolean = false;
	areValidComponents: boolean = false;

	frmVidaAhorroP4: FormGroup;

	constructor(
		private fb: FormBuilder,
		private router: Router
	){}

	ngOnInit() {
		this.crearFormulario();
	}

	private crearFormulario(): void {
		this.frmVidaAhorroP4 = this.fb.group({
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

	fnCambiarConfirmacionConyuge(): void {
		this.frmVidaAhorroP4.controls[ 'padecimientoConyuge' ].setValue( '' );

		if( this.frmVidaAhorroP4.controls[ 'confirmacionConyuge' ].value ) {
			this.frmVidaAhorroP4.controls[ 'padecimientoConyuge' ].enable();
		} else {
			this.frmVidaAhorroP4.controls[ 'padecimientoConyuge' ].disable();
		}
	}

	fnCambiarConfirmacionHijo1(): void {
		this.frmVidaAhorroP4.controls[ 'padecimientoHijo1' ].setValue( '' );

		if( this.frmVidaAhorroP4.controls[ 'confirmacionHijo1' ].value ) {
			this.frmVidaAhorroP4.controls[ 'padecimientoHijo1' ].enable();
		} else {
			this.frmVidaAhorroP4.controls[ 'padecimientoHijo1' ].disable();
		}
	}

	fnCambiarConfirmacionHijo2(): void {
		this.frmVidaAhorroP4.controls[ 'padecimientoHijo2' ].setValue( '' );

		if( this.frmVidaAhorroP4.controls[ 'confirmacionHijo2' ].value ) {
			this.frmVidaAhorroP4.controls[ 'padecimientoHijo2' ].enable();
		} else {
			this.frmVidaAhorroP4.controls[ 'padecimientoHijo2' ].disable();
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
		this.router.navigateByUrl( '/emision/vidaahorro/beneficiarios' );
	}
}