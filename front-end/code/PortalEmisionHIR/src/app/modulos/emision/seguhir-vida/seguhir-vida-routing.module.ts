import { NgModule }					  from '@angular/core';
import { RouterModule, Routes }		  from '@angular/router';

import { SeguhirVidaComponent }		  from './seguhir-vida.component';
import { SeguhirVidaP1Component }	  from './p1-usuario/seguhir-vida-p1.component';
import { SeguhirVidaP2Component }	  from './p2-seguro/seguhir-vida-p2.component';
import { SeguhirVidaP3Component }	  from './p3-medico/seguhir-vida-p3.component';
import { SeguhirVidaP4Component }	  from './p4-asegurados/seguhir-vida-p4.component';
import { SeguhirVidaP5Component }	  from './p5-beneficiarios/seguhir-vida-p5.component';
import { SeguhirVidaP6Component }	  from './p6-agentes/seguhir-vida-p6.component';
import { SeguhirVidaP7Component }	  from './p7-confirmacion/seguhir-vida-p7.component';

import { SeguhirVidaGuardService }	  from './seguhir-vida-guard.service';
import { AuthenticationGuardService } from 'app/core/services/authentication/authentication-guard.service';

const seguhirVidaRoutes: Routes = [
	{
		path: '',
		component: SeguhirVidaComponent,
		canActivate: [ AuthenticationGuardService ],
		children: [
			{ path: '', redirectTo: '/emision/seguhirvida/usuario', pathMatch: 'full' },
			{ path: 'usuario', component: SeguhirVidaP1Component },
			{
				path: 'seguro',
				component: SeguhirVidaP2Component,
				canActivate: [ SeguhirVidaGuardService ]
			},
			{
				path: 'medico',
				component: SeguhirVidaP3Component,
				canActivate: [ SeguhirVidaGuardService ]
			},
			{
				path: 'asegurados',
				component: SeguhirVidaP4Component,
				canActivate: [ SeguhirVidaGuardService ]
			},
			{
				path: 'beneficiarios',
				component: SeguhirVidaP5Component,
				canActivate: [ SeguhirVidaGuardService ]
			},
			{
				path: 'agentes',
				component: SeguhirVidaP6Component,
				canActivate: [ SeguhirVidaGuardService ]
			},
			{
				path: 'confirmacion',
				component: SeguhirVidaP7Component,
				canActivate: [ SeguhirVidaGuardService ]
			}
		]
	}
];

@NgModule({
	imports:   [ RouterModule.forChild( seguhirVidaRoutes ) ],
	exports:   [ RouterModule ],
	providers: [ AuthenticationGuardService, SeguhirVidaGuardService ]
})

export class SeguhirVidaRoutingModule {}