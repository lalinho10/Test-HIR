import { Component, OnInit }   from '@angular/core';

import { PagoService }		   from '../pago.service';
import { ApindividualService } from '../apindividual/apindividual.service';
import { SegubiciService }	   from '../segubici/segubici.service';

@Component({
	selector: 'pehir-emision-accidentes',
	templateUrl: 'emision-accidentes.component.html'
})

export class EmisionAccidentesComponent implements OnInit {
	titulo: string = 'Emisión - Seguros de accidentes';

	constructor(
		private pagoService: PagoService,
		private apindividualService: ApindividualService,
		private segubiciService: SegubiciService
	) {}

	ngOnInit() {
		this.pagoService.cleanModel();
		this.apindividualService.cleanModels();
		this.segubiciService.cleanModels();
	}
}