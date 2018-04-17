import { Component, OnInit }				  from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router }							  from '@angular/router';

import { CotizacionService }				  from '../cotizacion.service';
import { WSClientService }					  from 'app/core/services/ws-client.service';

import { ApellidoValidator }				  from 'app/core/validators/apellido.validator';
import { NombreValidator }					  from 'app/core/validators/nombre.validator';
import { RfcValidator }						  from 'app/core/validators/rfc.validator';
import { EntreEdadesValidator }				  from 'app/core/validators/entre-edades.validator';

import { MODULOS }							  from 'app/core/data/modulos';
import { GENEROS }							  from 'app/core/data/generos';
import { FECNACOPTIONS }					  from 'app/core/data/fecNacOptions';

import { Cobertura }						  from 'app/core/models/cobertura';
import { FormaPago }						  from 'app/core/models/forma-pago';

@Component({
	selector: 'pehir-seguhir-empresario',
	templateUrl: 'seguhir-empresario.component.html'
})

export class SeguhirEmpresarioComponent implements OnInit {
	private idProducto: number = 4;

	titulo: string = 'Cotización - SeguHIR Empresario';
	frmSeguhirEmpresario: FormGroup;

	coberturas: Cobertura[];
	formasPago: FormaPago[];

	modulos = MODULOS;
	generos = GENEROS;
	fecNacOptions = FECNACOPTIONS;

	constructor(
		private cotizacionService: CotizacionService,
		private fb: FormBuilder,
		private router: Router,
		private wsClientService: WSClientService
	) {}

	readCatalogs(): void {
		this.wsClientService.getObject( '/consultaCoberturasProducto/4' )
							.subscribe( response => this.coberturas = response.data );
		this.wsClientService.getObject( '/consultaFormasPagoProducto/4' )
							.subscribe( response => this.formasPago = response.data );
	}

	ngOnInit() {
		this.readCatalogs();

		this.frmSeguhirEmpresario = this.fb.group({
			'nombre': ['', Validators.compose([
				Validators.required,
				Validators.maxLength(50),
				NombreValidator()
			])],
			'apaterno': ['', Validators.compose([
				Validators.required,
				Validators.maxLength(50),
				ApellidoValidator()
			])],
			'amaterno': ['', Validators.compose([
				Validators.required,
				Validators.maxLength(50),
				ApellidoValidator()
			])],
			'fechanac': ['', Validators.compose([
				Validators.required,
				EntreEdadesValidator(18,64)
			])],
			'rfc': ['', Validators.compose([
				Validators.required,
				RfcValidator()
			])],
			'genero': ['', Validators.compose([
				Validators.required
			])],
			'modulo': ['', Validators.compose([
				Validators.required
			])],
			'sumasegurada': ['', Validators.compose([
				Validators.required
			])],
			'cobertura': ['', Validators.compose([
				Validators.required
			])],
			'fpago': ['', Validators.compose([
				Validators.required
			])]
		})
	}

	fnCotizar(): void {
		this.cotizacionService.definirProducto( this.idProducto );
		this.router.navigateByUrl( '/cotizacion/resultado' );
	}
}