import { Component, OnInit } from '@angular/core';

import { SegubiciP1Service } from '../p1-usuario/segubici-p1.service';
import { SegubiciP2Service } from '../p2-seguro/segubici-p2.service';

import { SegubiciP1 }		 from '../p1-usuario/segubici-p1';
import { SegubiciP2 }		 from '../p2-seguro/segubici-p2';

@Component({
	selector: 'pehir-segubici-p3',
	templateUrl: 'segubici-p3.component.html'
})

export class SegubiciP3Component implements OnInit {
	segubiciP1: SegubiciP1;
	segubiciP2: SegubiciP2;

	constructor(
		private segubiciP1Service: SegubiciP1Service,
		private segubiciP2Service: SegubiciP2Service
	){}

	ngOnInit() {
		this.segubiciP1 = this.segubiciP1Service.getModelP1();
		this.segubiciP2 = this.segubiciP2Service.getModelP2();
	}
}