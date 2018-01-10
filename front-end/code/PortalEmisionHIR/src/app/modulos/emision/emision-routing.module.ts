import { NgModule }					  from '@angular/core';
import { RouterModule, Routes }		  from '@angular/router';

import { EmisionComponent }			  from './emision.component';
import { EmisionVidaComponent }		  from './emision-vida.component';
import { EmisionAccidentesComponent } from './emision-accidentes.component';

const emisionRoutes: Routes = [
	{ path: '', component: EmisionComponent },
	{ path: 'vida', component: EmisionVidaComponent },
	{ path: 'accidentes', component: EmisionAccidentesComponent },
	{
		path: 'seguhirvida',
		loadChildren: 'app/modulos/emision/seguhir-vida/seguhir-vida.module#SeguhirVidaModule'
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
	}
];

@NgModule({
	imports: [ RouterModule.forChild( emisionRoutes ) ],
	exports: [ RouterModule ]
})

export class EmisionRoutingModule {}