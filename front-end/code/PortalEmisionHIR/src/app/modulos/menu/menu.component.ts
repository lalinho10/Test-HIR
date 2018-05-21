import { Component }		   from '@angular/core';

import { SessionModalService } from 'app/core/components/session-modal/session-modal.service';

@Component({
	selector: 'pehir-menu',
	templateUrl: './menu.component.html'
})

export class MenuComponent {
	isOpen: boolean = false;
	hasLayer: boolean = false;

	constructor( private sessionModalService: SessionModalService ){}

	fnToggleMenu(): void {
		this.isOpen = !this.isOpen;
	}

	fnMouseEnter(): void {
		this.hasLayer = true;
	}

	fnMouseLeave(): void {
		this.hasLayer = false;
	}

	fnConfirmarLogout(): void {
		this.sessionModalService.openModal();
	}
}