import { Component, OnInit }	from '@angular/core';

import { SeguhirVidaP1Service }	from '../p1-usuario/seguhir-vida-p1.service';
import { SeguhirVidaP2Service }	from '../p2-seguro/seguhir-vida-p2.service';
import { SeguhirVidaP3Service }	from '../p3-medico/seguhir-vida-p3.service';
import { SeguhirVidaP4Service }	from '../p4-asegurados/seguhir-vida-p4.service';
import { SeguhirVidaP5Service }	from '../p5-beneficiarios/seguhir-vida-p5.service';
import { SeguhirVidaP6Service }	from '../p6-agentes/seguhir-vida-p6.service';

import { SeguhirVidaP1 }		from '../p1-usuario/seguhir-vida-p1';
import { SeguhirVidaP2 }		from '../p2-seguro/seguhir-vida-p2';
import { SeguhirVidaP3 }		from '../p3-medico/seguhir-vida-p3';
import { SeguhirVidaP4 }		from '../p4-asegurados/seguhir-vida-p4';
import { SeguhirVidaP5 }		from '../p5-beneficiarios/seguhir-vida-p5';
import { SeguhirVidaP6 }		from '../p6-agentes/seguhir-vida-p6';


@Component({
	selector: 'pehir-seguhir-vida-p7',
	templateUrl: 'seguhir-vida-p7.component.html'
})

export class SeguhirVidaP7Component implements OnInit {
	seguhirVidaP1: SeguhirVidaP1;
	seguhirVidaP2: SeguhirVidaP2;
	seguhirVidaP3: SeguhirVidaP3;
	seguhirVidaP4: SeguhirVidaP4;
	seguhirVidaP5: SeguhirVidaP5;
	seguhirVidaP6: SeguhirVidaP6;

	constructor(
		private seguhirVidaP1Service: SeguhirVidaP1Service,
		private seguhirVidaP2Service: SeguhirVidaP2Service,
		private seguhirVidaP3Service: SeguhirVidaP3Service,
		private seguhirVidaP4Service: SeguhirVidaP4Service,
		private seguhirVidaP5Service: SeguhirVidaP5Service,
		private seguhirVidaP6Service: SeguhirVidaP6Service
	) {}

	ngOnInit() {
		this.seguhirVidaP1 = this.seguhirVidaP1Service.getModelP1();
		this.seguhirVidaP2 = this.seguhirVidaP2Service.getModelP2();
		this.seguhirVidaP3 = this.seguhirVidaP3Service.getModelP3();
		this.seguhirVidaP4 = this.seguhirVidaP4Service.getModelP4();
		this.seguhirVidaP5 = this.seguhirVidaP5Service.getModelP5();
		this.seguhirVidaP6 = this.seguhirVidaP6Service.getModelP6();
	}
}