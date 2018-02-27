import { Component, OnInit }     from '@angular/core';

import { SessionModalService }   from './session-modal.service';

import { AuthenticationService } from 'app/core/services/authentication/authentication.service';

@Component({
	selector: 'pehir-session-modal',
	templateUrl: 'session-modal.component.html',
	styleUrls: [ 'session-modal.component.css' ]
})

export class SessionModalComponent implements OnInit {
	private isVisible: boolean = false;

	constructor(
		private sessionModalService: SessionModalService,
		private authenticationService: AuthenticationService
	){}

	ngOnInit() {
		this.sessionModalService.setSessionModal( this );
	}

	openModal(): void {
		this.isVisible = true;
	}

	closeModal(): void {
		this.isVisible = false;
	}

	closeSession(): void {
		this.closeModal();
		this.authenticationService.logout();
	}
}