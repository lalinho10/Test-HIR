import { Component, OnInit, ViewChild }		  from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router }							  from '@angular/router';

import { PolicyHolderTableComponent }		  from 'app/modulos/shared/policyholder-table/policyholder-table.component';

import { GastosFunerariosP2Service }		  from './gastos-funerarios-p2.service';
import { WSClientService }					  from 'app/core/services/ws-client.service';

import { ClaveAgenteValidator }				  from 'app/core/validators/clave-agente.validator';
import { FormatoMonedaValidator }			  from 'app/core/validators/formato-moneda.validator';

import { MODULOS }							  from 'app/core/data/modulos';

import { Cobertura }						  from 'app/core/models/cobertura';
import { FormaPago }						  from 'app/core/models/forma-pago';

@Component({
	selector: 'pehir-gastos-funerarios-p2',
	templateUrl: 'gastos-funerarios-p2.component.html'
})

export class GastosFunerariosP2Component implements OnInit {
	@ViewChild( PolicyHolderTableComponent ) tablaBeneficiarios;

	isValidTable = false;

	frmGastosFunerariosP2: FormGroup;

	coberturas: Cobertura[];
	formasPago: FormaPago[];

	modulos = MODULOS;

	constructor(
		private fb: FormBuilder,
		private gastosFunerariosP1Service: GastosFunerariosP2Service,
		private router: Router,
		private wsClientService: WSClientService
	){}

	ngOnInit() {
		this.leerCatalogos();
		this.crearFormulario();
	}

	private leerCatalogos(): void {
		this.wsClientService.getObject( '/consultaCoberturasProducto/3' )
							.subscribe( response => this.coberturas = response.data );
		this.wsClientService.getObject( '/consultaFormasPagoProducto/3' )
							.subscribe( response => this.formasPago = response.data );
	}

	private crearFormulario(): void {
		this.frmGastosFunerariosP2 = this.fb.group({
			'modulo': ['', Validators.compose([
				Validators.required
			])],
			'sumasegurada': ['', Validators.compose([
				Validators.required,
				FormatoMonedaValidator()
			])],
			'cobertura': ['', Validators.compose([
				Validators.required
			])],
			'formaPago': ['', Validators.compose([
				Validators.required
			])],
			'agente': ['', Validators.compose([
				Validators.required
			])],
			'clave': ['', Validators.compose([
				Validators.required,
				ClaveAgenteValidator()
			])]
		});
	}

	onValidateTable( isValidTable ): void {
		this.isValidTable = isValidTable;
	}

	fnAvanzarP3(): void {
		this.gastosFunerariosP1Service.setModelP2( this.tablaBeneficiarios.beneficiarios, this.frmGastosFunerariosP2.value );
		this.router.navigateByUrl( '/emision/gastosfunerarios/confirmacion' );
	}
}