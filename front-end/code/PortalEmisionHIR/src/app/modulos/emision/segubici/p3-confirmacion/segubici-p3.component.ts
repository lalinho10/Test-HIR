import { Component, OnInit }	 from '@angular/core';
import { Router }				 from '@angular/router';

import { AccidenteRequest }		 from '../../accidente.request';

import { AccidenteService }		 from '../../accidente.service';
import { PagoService }			 from '../../pago.service';

import { SegubiciP1Service }	 from '../p1-usuario/segubici-p1.service';
import { SegubiciP2Service }	 from '../p2-seguro/segubici-p2.service';

import { SegubiciP1 }			 from '../p1-usuario/segubici-p1';
import { SegubiciP2 }			 from '../p2-seguro/segubici-p2';

import { AuthenticationService } from 'app/core/services/authentication/authentication.service';
import { WSClientService }		 from 'app/core/services/ws-client.service';

@Component({
	selector: 'pehir-segubici-p3',
	templateUrl: 'segubici-p3.component.html'
})

export class SegubiciP3Component implements OnInit {
	private idProducto: number = 1560;

	editaAgente: boolean = false;

	segubiciP1: SegubiciP1;
	segubiciP2: SegubiciP2;

	constructor(
		private accidenteService: AccidenteService,
		private authenticationService: AuthenticationService,
		private pagoService: PagoService,
		private segubiciP1Service: SegubiciP1Service,
		private segubiciP2Service: SegubiciP2Service,
		private router: Router,
		private wsClientService: WSClientService
	){}

	ngOnInit() {
		this.segubiciP1 = this.segubiciP1Service.getModelP1();
		this.segubiciP2 = this.segubiciP2Service.getModelP2();
		this.editaAgente = ( this.authenticationService.authenticatedUser.claveRol === 'Agente' ||
							 this.authenticationService.authenticatedUser.claveRol === 'Operativo' );
	}

	fnRegresar(): void {
		this.router.navigateByUrl( '/emision/segubici/seguro' );
	}

	fnContinuar(): void {
		let accidenteRequest: AccidenteRequest = this.accidenteService.getRequest( this.idProducto, this.segubiciP1, this.segubiciP2 );

		this.wsClientService
			.postObject( '/emisionAccidente', accidenteRequest )
			.subscribe( ( response ) => {
				if( response.codigoRespuesta === 200 ) {
					this.pagoService.definirPago( this.idProducto, this.segubiciP2.resultado.pago );
					this.router.navigateByUrl( '/emision/openpay' );
				}
			});
	}
}