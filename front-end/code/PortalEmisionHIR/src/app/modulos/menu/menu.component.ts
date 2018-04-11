import { Component }		   from '@angular/core';

import { SessionModalService } from 'app/core/components/session-modal/session-modal.service';

@Component({
	selector: 'pehir-menu',
	templateUrl: './menu.component.html'
})

export class MenuComponent {
	isOpen: boolean = false;

	constructor( private sessionModalService: SessionModalService ){}

	fnToggleMenu(): void {
		this.isOpen = !this.isOpen;
	}

	fnConfirmarLogout(): void {
		this.sessionModalService.openModal();
	}
}