import { Component, OnInit }		from '@angular/core';

import { PagoService }				from '../pago.service';
import { GastosFunerariosService }  from '../gastos-funerarios/gastos-funerarios.service';
import { ProcuraVidaService }		from '../procura-vida/procura-vida.service';
import { SeguhirEmpresarioService } from '../seguhir-empresario/seguhir-empresario.service';

@Component({
	selector: 'pehir-emision-vida',
	templateUrl: 'emision-vida.component.html'
})

export class EmisionVidaComponent implements OnInit {
	titulo: string = 'Emisión - Seguros de vida';

	constructor(
		private pagoService: PagoService,
		private gastosFunerariosService: GastosFunerariosService,
		private procuraVidaService: ProcuraVidaService,
		private seguhirEmpresarioService: SeguhirEmpresarioService
	) {}

	ngOnInit() {
		this.pagoService.cleanModel();
		this.gastosFunerariosService.cleanModels();
		this.procuraVidaService.cleanModels();
		this.seguhirEmpresarioService.cleanModels();
	}
}