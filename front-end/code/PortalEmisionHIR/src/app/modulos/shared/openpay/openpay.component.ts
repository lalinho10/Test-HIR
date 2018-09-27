import { Component, OnInit }				  from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { environment }						  from '../../../../environments/environment';

import { OpenpayRequest }					  from './openpay.request';

import { OpenpayService }					  from './openpay.service';

import { EmisionRequest }					  from 'app/modulos/emision/emision.request';

import { EmisionService }					  from 'app/modulos/emision/emision.service';
import { PagoService }						  from 'app/modulos/emision/pago.service';

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

	titulo: string;

	msjPagoExitoso: string = 'Su pago fue realizado exitosamente. Gracias por confiar tu protección con HIR Seguros.';
	msjSolicitudExitosa: string = 'Su número de solicitud es: NNNNNN, en breve le estará llegando su póliza al correo electrónico registrado.'

	frmOpenpay: FormGroup;

	constructor(
		private appModalService: AppModalService,
		private emisionService: EmisionService,
		private fb: FormBuilder,
		private openPayService: OpenpayService,
		private pagoService: PagoService,
		private wsClientService: WSClientService
	){}

	ngOnInit() {
		this.inicializarOpenpay();
		this.crearFormulario();
		this.mostrarDatosPago();
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
			'monto': 0,
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

	private mostrarDatosPago(): void {
		this.titulo = 'Pago Emisión - ' + this.pagoService.productoPago;
		this.frmOpenpay.get( 'monto' ).setValue( this.pagoService.montoPago );
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
				if( response.code === 200 ) {
					this.appModalService.openModal( 'success', this.msjPagoExitoso );
					this.confirmarSolicitud( response.data.authorization );
				}
			});
	}

	private confirmarSolicitud( numeroConfirmacionPago: string ): void {
		let emisionRequest: EmisionRequest = this.emisionService.getRequest( this.pagoService.idContratantePago, numeroConfirmacionPago );

		this.wsClientService
			.postObject( '/emision', emisionRequest )
			.subscribe( ( response ) => {
				if( response.codigoRespuesta === 200 ) {
					this.appModalService.openModal( 'success', this.msjSolicitudExitosa );
				}
			});
	}
}