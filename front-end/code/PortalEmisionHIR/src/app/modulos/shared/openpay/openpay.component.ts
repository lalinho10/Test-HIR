import { Component, OnInit }				  from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { environment }						  from '../../../../environments/environment';

import { AppModalService }					  from 'app/core/components/app-modal/app-modal.service';

@Component({
	selector: 'pehir-openpay',
	templateUrl: 'openpay.component.html',
	styleUrls: [ 'openpay.component.css' ]
})

export class OpenpayComponent implements OnInit {
	private tokenId: string;
	private deviceSessionId: string;
	private openpayMerchantId: string = environment.openpayMerchantId;
	private openpayPublicApiKey: string = environment.openpayPublicApiKey;
	private openpaySandboxMode: boolean = environment.openpaySandboxMode;

	titulo: string = 'Emisión - Pago';
	frmOpenpay: FormGroup;

	constructor(
		private appModalService: AppModalService,
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

		this.deviceSessionId = OpenPay.deviceData.setup();
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

	fnPagar(): void {
		OpenPay.token.extractFormAndCreate(
			'payment-form',
			( response: any ) => this.sucess_callbak( response ),
			( response: any ) => this.error_callbak( response ) );
	}

	private sucess_callbak( response: any ): void {
		this.tokenId = response.data.id;
		//POST cargo a tarjeta
	}

	private error_callbak( response: any ): void {
		let errorMessage: string = response.data.description != undefined ? response.data.description : response.message;
		this.appModalService.openModal( 'error', errorMessage );
	}
}