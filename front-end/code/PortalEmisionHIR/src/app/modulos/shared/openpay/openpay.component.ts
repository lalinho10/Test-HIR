import { Component, OnInit }				  from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { environment }						  from '../../../../environments/environment';

import { OpenpayRequest }					  from './openpay.request';

import { OpenpayService }					  from './openpay.service'

import { AppModalService }					  from 'app/core/components/app-modal/app-modal.service';

import { WSClientService }					  from 'app/core/services/ws-client.service';

import { NombreValidator }					  from 'app/core/validators/nombre.validator';
import { NumericoValidator }				  from 'app/core/validators/numerico.validator';

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
	msjPagoExitoso: string = 'Su pago fue realizado exitosamente. Gracias por confiar tu protección con HIR Seguros.';
	frmOpenpay: FormGroup;

	constructor(
		private appModalService: AppModalService,
		private fb: FormBuilder,
		private openPayService: OpenpayService,
		private wsClientService: WSClientService
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
				Validators.required,
				NombreValidator()
			])],
			'tarjeta': ['', Validators.compose([
				Validators.required
			])],
			'monto': 5000,
			'descripcion': ['', Validators.compose([
				Validators.required
			])],
			'mesExp': ['', Validators.compose([
				Validators.required,
				NumericoValidator()
			])],
			'anioExp': ['', Validators.compose([
				Validators.required,
				NumericoValidator()
			])],
			'cvv': ['', Validators.compose([
				Validators.required,
				NumericoValidator()
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
		this.enviarPago();
	}

	private error_callbak( response: any ): void {
		let errorMessage: string = response.data.description != undefined ? response.data.description : response.message;
		this.appModalService.openModal( 'error', errorMessage );
	}

	private enviarPago(): void {
		let openPayRequest: OpenpayRequest = this.openPayService.getRequest( this.tokenId, this.deviceSessionId, {}, this.frmOpenpay.value );

		this.wsClientService
			.postObject( '/openPay', openPayRequest )
			.subscribe( ( response ) => {
				if( response.code ) {
					this.appModalService.openModal( 'success', this.msjPagoExitoso );
				}
			});
	}
}