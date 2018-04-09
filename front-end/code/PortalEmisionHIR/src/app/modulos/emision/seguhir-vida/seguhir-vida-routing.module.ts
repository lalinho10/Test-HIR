import { NgModule }					  from '@angular/core';
import { RouterModule, Routes }		  from '@angular/router';

import { SeguhirVidaComponent }		  from './seguhir-vida.component';
import { SeguhirVidaP1Component }	  from './seguhir-vida-p1.component';
import { SeguhirVidaP2Component }	  from './seguhir-vida-p2.component';
import { SeguhirVidaP3Component }	  from './seguhir-vida-p3.component';
import { SeguhirVidaP4Component }	  from './seguhir-vida-p4.component';
import { SeguhirVidaP5Component }	  from './seguhir-vida-p5.component';
import { SeguhirVidaP6Component }	  from './seguhir-vida-p6.component';

import { AuthenticationGuardService } from 'app/core/services/authentication/authentication-guard.service';

const seguhirVidaRoutes: Routes = [
	{
		path: '',
		component: SeguhirVidaComponent,
		canActivate: [ AuthenticationGuardService ],
		children: [
			{ path: '', redirectTo: '/emision/seguhirvida/usuario', pathMatch: 'full' },
			{ path: 'usuario', component: SeguhirVidaP1Component },
			{ path: 'seguro', component: SeguhirVidaP2Component },
			{ path: 'medico', component: SeguhirVidaP3Component },
			{ path: 'asegurados', component: SeguhirVidaP4Component },
			{ path: 'beneficiarios', component: SeguhirVidaP5Component },
			{ path: 'agentes', component: SeguhirVidaP6Component }
		]
	}
];

@NgModule({
	imports:   [ RouterModule.forChild( seguhirVidaRoutes ) ],
	exports:   [ RouterModule ],
	providers: [ AuthenticationGuardService ]
})

export class SeguhirVidaRoutingModule {}