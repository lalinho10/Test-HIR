import { NgModule }						 from '@angular/core';
import { RouterModule, Routes }			 from '@angular/router';

import { CotizacionComponent }			 from './cotizacion.component';
import { CotizacionVidaComponent }		 from './vida/cotizacion-vida.component';
import { CotizacionAccidentesComponent } from './accidentes/cotizacion-accidentes.component';
import { SeguhirVidaComponent }			 from './seguhir-vida/seguhir-vida.component';
import { ProcuraVidaComponent }			 from './procura-vida/procura-vida.component';
import { GastosFunerariosComponent }	 from './gastos-funerarios/gastos-funerarios.component';
import { SeguhirEmpresarioComponent }	 from './seguhir-empresario/seguhir-empresario.component';
import { SegubiciComponent }			 from './segubici/segubici.component';
import { ApindividualComponent }		 from './apindividual/apindividual.component';
import { ResultadoCotizacionComponent }	 from './resultado-cotizacion/resultado-cotizacion.component';

import { CotizacionGuardService }		 from './cotizacion-guard.service';
import { AuthenticationGuardService }	 from 'app/core/services/authentication/authentication-guard.service';


const cotizacionRoutes: Routes = [
	{
		path: '',
		component: CotizacionComponent,
		canActivate: [ AuthenticationGuardService ]
	},
	{
		path: 'vida',
		component: CotizacionVidaComponent,
		canActivate: [ AuthenticationGuardService ]
	},
	{
		path: 'accidentes',
		component: CotizacionAccidentesComponent,
		canActivate: [ AuthenticationGuardService ]
	},
	{
		path: 'seguhirvida',
		redirectTo: '/inprogress',
		pathMatch: 'full'
	},
	{
		path: 'procuravida',
		component: ProcuraVidaComponent,
		canActivate: [ AuthenticationGuardService ]
	},
	{
		path: 'gastosfunerarios',
		component: GastosFunerariosComponent,
		canActivate: [ AuthenticationGuardService ]
	},
	{
		path: 'seguhirempresario',
		component: SeguhirEmpresarioComponent,
		canActivate: [ AuthenticationGuardService ]
	},
	{
		path: 'segubici',
		component: SegubiciComponent,
		canActivate: [ AuthenticationGuardService ]
	},
	{
		path: 'apindividual',
		component: ApindividualComponent,
		canActivate: [ AuthenticationGuardService ]
	},
	{
		path: 'resultado',
		component: ResultadoCotizacionComponent,
		canActivate: [ AuthenticationGuardService, CotizacionGuardService ]
	}
];

@NgModule({
	imports:   [ RouterModule.forChild( cotizacionRoutes ) ],
	exports:   [ RouterModule ],
	providers: [ AuthenticationGuardService, CotizacionGuardService ]
})

export class CotizacionRoutingModule {}