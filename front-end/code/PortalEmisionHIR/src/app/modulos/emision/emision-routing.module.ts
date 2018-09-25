import { NgModule }					  from '@angular/core';
import { RouterModule, Routes }		  from '@angular/router';

import { EmisionComponent }			  from './emision.component';
import { EmisionVidaComponent }		  from './vida/emision-vida.component';
import { EmisionAccidentesComponent } from './accidentes/emision-accidentes.component';
import { OpenpayComponent }			  from 'app/modulos/shared/openpay/openpay.component';

import { AuthenticationGuardService } from 'app/core/services/authentication/authentication-guard.service';

const emisionRoutes: Routes = [
	{
		path: '',
		component: EmisionComponent,
		canActivate: [ AuthenticationGuardService ]
	},
	{
		path: 'vida',
		component: EmisionVidaComponent,
		canActivate: [ AuthenticationGuardService ]
	},
	{
		path: 'accidentes',
		component: EmisionAccidentesComponent,
		canActivate: [ AuthenticationGuardService ]
	},
	{
		path: 'seguhirvida',
		redirectTo: '/inprogress',
		pathMatch: 'full'
	},
	{
		path: 'procuravida',
		loadChildren: 'app/modulos/emision/procura-vida/procura-vida.module#ProcuraVidaModule'
	},
	{
		path: 'gastosfunerarios',
		loadChildren: 'app/modulos/emision/gastos-funerarios/gastos-funerarios.module#GastosFunerariosModule'
	},
	{
		path: 'seguhirempresario',
		loadChildren: 'app/modulos/emision/seguhir-empresario/seguhir-empresario.module#SeguhirEmpresarioModule'
	},
	{
		path: 'segubici',
		loadChildren: 'app/modulos/emision/segubici/segubici.module#SegubiciModule'
	},
	{
		path: 'apindividual',
		loadChildren: 'app/modulos/emision/apindividual/apindividual.module#ApindividualModule'
	},
	{
		path: 'openpay',
		component: OpenpayComponent,
		canActivate: [ AuthenticationGuardService ]
	}
];

@NgModule({
	imports:   [ RouterModule.forChild( emisionRoutes ) ],
	exports:   [ RouterModule ],
	providers: [ AuthenticationGuardService ]
})

export class EmisionRoutingModule {}