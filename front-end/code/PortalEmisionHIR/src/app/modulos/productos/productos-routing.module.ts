import { NgModule }						 from '@angular/core';
import { RouterModule, Routes }			 from '@angular/router';

import { ProductosComponent }			 from './productos.component';
import { ProductosVidaComponent }		 from './vida/productos-vida.component';
import { ProductosAccidentesComponent }	 from './accidentes/productos-accidentes.component';
import { SeguhirVidaComponent }			 from './seguhir-vida/seguhir-vida.component';
import { ProcuraVidaComponent }			 from './procura-vida/procura-vida.component';
import { GastosFunerariosComponent }	 from './gastos-funerarios/gastos-funerarios.component';
import { SeguhirEmpresarioComponent }	 from './seguhir-empresario/seguhir-empresario.component';
import { SegubiciComponent }			 from './segubici/segubici.component';
import { ApindividualComponent }		 from './apindividual/apindividual.component';

import { AuthenticationGuardService }	 from 'app/core/services/authentication/authentication-guard.service';

const productosRoutes: Routes = [
	{
		path: '',
		component: ProductosComponent,
		canActivate: [ AuthenticationGuardService ]
	},
	{
		path: 'vida',
		component: ProductosVidaComponent,
		canActivate: [ AuthenticationGuardService ]
	},
	{
		path: 'accidentes',
		component: ProductosAccidentesComponent,
		canActivate: [ AuthenticationGuardService ]
	},
	{
		path: 'seguhirvida',
		component: SeguhirVidaComponent,
		canActivate: [ AuthenticationGuardService ]
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
	}
];

@NgModule({
	imports:   [ RouterModule.forChild( productosRoutes ) ],
	exports:   [ RouterModule ],
	providers: [ AuthenticationGuardService ]
})

export class ProductosRoutingModule {}