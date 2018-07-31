import { Component, OnInit }   from '@angular/core';

import { ApindividualService } from '../apindividual/apindividual.service';
import { SegubiciService }	   from '../segubici/segubici.service';

@Component({
	selector: 'pehir-emision-accidentes',
	templateUrl: 'emision-accidentes.component.html'
})

export class EmisionAccidentesComponent implements OnInit {
	titulo: string = 'Emisión - Seguros de accidentes';

	constructor(
		private apindividualService: ApindividualService,
		private segubiciService: SegubiciService
	) {}

	ngOnInit() {
		this.apindividualService.cleanModels();
		this.segubiciService.cleanModels();
	}
}