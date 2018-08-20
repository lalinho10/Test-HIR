import { Component, OnInit }				  from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { environment }						  from '../../../../environments/environment';

@Component({
	selector: 'pehir-openpay',
	templateUrl: 'openpay.component.html',
	styleUrls: [ 'openpay.component.css' ]
})

export class OpenpayComponent implements OnInit {
	private openpayMerchantId: string = environment.openpayMerchantId;
	private openpayPublicApiKey: string = environment.openpayPublicApiKey;
	private openpaySandboxMode: boolean = environment.openpaySandboxMode;

	titulo: string = 'Emisión - Pago';
	frmOpenpay: FormGroup;

	constructor(
		private fb: FormBuilder
	){}

	ngOnInit() {
		this.inicializarOpenpay();
		this.crearFormulario();
	}

	private inicializarOpenpay() : void {
		OpenPay.setId( this.openpayMerchantId );
		OpenPay.setApiKey( this.openpayPublicApiKey );
		OpenPay.setSandboxMode( this.openpaySandboxMode );
	}

	private crearFormulario(): void {
		this.frmOpenpay = this.fb.group({
			'titular': ['', Validators.compose([
				Validators.required
			])],
			'tarjeta': ['', Validators.compose([
				Validators.required
			])],
			'mesExp': ['', Validators.compose([
				Validators.required
			])],
			'anioExp': ['', Validators.compose([
				Validators.required
			])],
			'cvv': ['', Validators.compose([
				Validators.required
			])]
		});
	}
}