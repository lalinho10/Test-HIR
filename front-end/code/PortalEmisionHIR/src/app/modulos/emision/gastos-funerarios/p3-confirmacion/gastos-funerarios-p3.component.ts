import { Component, OnInit }		 from '@angular/core';
import { Router }					 from '@angular/router';

import { VidaRequest }				 from '../../vida.request';

import { PagoService }				 from '../../pago.service';
import { VidaService }				 from '../../vida.service';

import { GastosFunerariosP1Service } from '../p1-usuario/gastos-funerarios-p1.service';
import { GastosFunerariosP2Service } from '../p2-beneficiarios/gastos-funerarios-p2.service';

import { GastosFunerariosP1 }		 from '../p1-usuario/gastos-funerarios-p1';
import { GastosFunerariosP2 }		 from '../p2-beneficiarios/gastos-funerarios-p2';

import { AuthenticationService }	 from 'app/core/services/authentication/authentication.service';
import { WSClientService }			 from 'app/core/services/ws-client.service';

@Component({
	selector: 'pehir-gastos-funerarios-p3',
	templateUrl: 'gastos-funerarios-p3.component.html'
})

export class GastosFunerariosP3Component implements OnInit {
	private idProducto: number = 721;

	editaAgente: boolean = false;

	gastosFunerariosP1: GastosFunerariosP1;
	gastosFunerariosP2: GastosFunerariosP2;

	constructor(
		private authenticationService: AuthenticationService,
		private gastosFunerariosP1Service: GastosFunerariosP1Service,
		private gastosFunerariosP2Service: GastosFunerariosP2Service,
		private pagoService: PagoService,
		private router: Router,
		private vidaService: VidaService,
		private wsClientService: WSClientService
	) {}

	ngOnInit() {
		this.gastosFunerariosP1 = this.gastosFunerariosP1Service.getModelP1();
		this.gastosFunerariosP2 = this.gastosFunerariosP2Service.getModelP2();
		this.editaAgente = ( this.authenticationService.authenticatedUser.claveRol === 'Agente' ||
							 this.authenticationService.authenticatedUser.claveRol === 'Operativo' );
	}

	fnRegresar(): void {
		this.router.navigateByUrl( '/emision/gastosfunerarios/beneficiarios' );
	}

	fnContinuar(): void {
		let vidaRequest: VidaRequest = this.vidaService.getRequest( this.idProducto, this.gastosFunerariosP1, this.gastosFunerariosP2 );

		this.wsClientService
			.postObject( '/emisionVida', vidaRequest )
			.subscribe( ( response ) => {
				if( response.codigoRespuesta === 200 ) {
					this.pagoService.definirPago( response.idContratante, this.idProducto, this.gastosFunerariosP2.resultado.pago );
					this.router.navigateByUrl( '/emision/openpay' );
				}
			});
	}
}