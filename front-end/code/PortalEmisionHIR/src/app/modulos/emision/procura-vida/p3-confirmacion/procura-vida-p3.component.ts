import { Component, OnInit }	from '@angular/core';

import { ProcuraVidaP1Service }	from '../p1-usuario/procura-vida-p1.service';
import { ProcuraVidaP2Service }	from '../p2-beneficiarios/procura-vida-p2.service';

import { ProcuraVidaP1 }		from '../p1-usuario/procura-vida-p1';
import { ProcuraVidaP2 }		from '../p2-beneficiarios/procura-vida-p2';

@Component({
	selector: 'pehir-procura-vida-p3',
	templateUrl: 'procura-vida-p3.component.html'
})

export class ProcuraVidaP3Component implements OnInit {
	procuraVidaP1: ProcuraVidaP1;
	procuraVidaP2: ProcuraVidaP2;

	constructor(
		private procuraVidaP1Service: ProcuraVidaP1Service,
		private procuraVidaP2Service: ProcuraVidaP2Service
	) {}

	ngOnInit() {
		this.procuraVidaP1 = this.procuraVidaP1Service.getModelP1();
		this.procuraVidaP2 = this.procuraVidaP2Service.getModelP2();
	}
}