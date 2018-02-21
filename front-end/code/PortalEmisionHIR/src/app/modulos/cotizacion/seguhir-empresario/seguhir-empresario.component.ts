import { Component, OnInit }				  from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router }							  from '@angular/router';

import { ApellidoValidator }				  from 'app/core/validators/apellido.validator';
import { NombreValidator }					  from 'app/core/validators/nombre.validator';
import { RfcValidator }						  from 'app/core/validators/rfc.validator';
import { EntreEdadesValidator }				  from 'app/core/validators/entre-edades.validator';

import { MODULOS }							  from 'app/core/data/modulos';
import { GENEROS }							  from 'app/core/data/generos';
import { FECNACOPTIONS }					  from 'app/core/data/fecNacOptions';
import { COBERTURAS_SEGUHIREMPRESARIO }		  from 'app/core/data/coberturas/coberturas_seguhirempresario';

@Component({
	selector: 'pehir-seguhir-empresario',
	templateUrl: 'seguhir-empresario.component.html'
})

export class SeguhirEmpresarioComponent implements OnInit {
	private titulo: string = 'Cotización - SeguHIR Empresario';
	private frmSeguhirEmpresario: FormGroup;

	private modulos = MODULOS;
	private generos = GENEROS;
	private fecNacOptions = FECNACOPTIONS;
	private coberturas = COBERTURAS_SEGUHIREMPRESARIO;

	constructor(
		private router: Router,
		private fb: FormBuilder
	) {}

	ngOnInit() {
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
			])]
		})
	}

	cotizar(): void {
		this.router.navigateByUrl( '/cotizacion/resultado' );
	}
}