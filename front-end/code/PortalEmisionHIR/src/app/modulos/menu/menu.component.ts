import { Component }		   from '@angular/core';

import { SessionModalService } from 'app/core/components/session-modal/session-modal.service';

@Component({
	selector: 'pehir-menu',
	templateUrl: './menu.component.html'
})

export class MenuComponent {
	constructor( private sessionModalService: SessionModalService ){}

	confirmarLogout(): void {
		this.sessionModalService.openModal();
	}
}