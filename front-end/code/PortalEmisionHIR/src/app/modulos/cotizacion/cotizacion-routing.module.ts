import { NgModule }						 from '@angular/core';
import { RouterModule, Routes }			 from '@angular/router';

import { CotizacionComponent }			 from './cotizacion.component';
import { CotizacionVidaComponent }		 from './cotizacion-vida.component';
import { CotizacionAccidentesComponent } from './cotizacion-accidentes.component';
import { SeguhirVidaComponent }			 from './seguhir-vida/seguhir-vida.component';
import { ProcuraVidaComponent }			 from './procura-vida/procura-vida.component';
import { GastosFunerariosComponent }	 from './gastos-funerarios/gastos-funerarios.component';
import { SeguhirEmpresarioComponent }	 from './seguhir-empresario/seguhir-empresario.component';
import { SegubiciComponent }			 from './segubici/segubici.component';
import { ApindividualComponent }		 from './apindividual/apindividual.component';
import { ResultadoCotizacionComponent }	 from './resultado-cotizacion.component';

const cotizacionRoutes: Routes = [
	{ path: '', component: CotizacionComponent },
	{ path: 'vida', component: CotizacionVidaComponent },
	{ path: 'accidentes', component: CotizacionAccidentesComponent },
	{ path: 'seguhirvida', component: SeguhirVidaComponent },
	{ path: 'procuravida', component: ProcuraVidaComponent },
	{ path: 'gastosfunerarios', component: GastosFunerariosComponent },
	{ path: 'seguhirempresario', component: SeguhirEmpresarioComponent },
	{ path: 'segubici', component: SegubiciComponent },
	{ path: 'apindividual', component: ApindividualComponent },
	{ path: 'resultado', component: ResultadoCotizacionComponent }
];

@NgModule({
	imports: [ RouterModule.forChild( cotizacionRoutes ) ],
	exports: [ RouterModule ]
})

export class CotizacionRoutingModule {}