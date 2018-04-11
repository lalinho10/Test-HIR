import { Component, OnInit }		 from '@angular/core';

import { SessionTimerService }		 from './session-timer.service';

import { AppModalService }			 from 'app/core/components/app-modal/app-modal.service';
import { AuthenticationService }	 from 'app/core/services/authentication/authentication.service';
import { SessionExpireModalService } from 'app/core/components/session-expire-modal/session-expire-modal.service';

@Component({
	selector: 'pehir-session-timer',
	templateUrl: 'session-timer.component.html',
	styleUrls: [ 'session-timer.component.css' ]
})

export class SessionTimerComponent implements OnInit {
	private static TENMIN_MS = 10 * 60 * 1000;
	private static ONEMIN_MS =  1 * 60 * 1000;
	private static ONESEC_MS =       1 * 1000;

	private sessionTimer;
	private counter: number;
	timeCounter: Date;

	constructor(
		private appModalService: AppModalService,
		private authenticationService: AuthenticationService,
		private sessionExpireModalService: SessionExpireModalService,
		private sessionTimerService: SessionTimerService
	) {}

	ngOnInit() {
		this.sessionTimerService.setSessionTimer( this );
		this.initValues();
		this.startTimer();
	}

	private initValues(): void {
		this.counter = SessionTimerComponent.TENMIN_MS;
		this.timeCounter = new Date( SessionTimerComponent.TENMIN_MS );
	}

	private clearValues(): void {
		this.counter = 0;
		this.timeCounter = new Date( 0 );	
	}

	startTimer(): void {
		this.sessionTimer = setInterval( () => {
				if( this.counter > 0 ) {
					this.counter = this.counter - SessionTimerComponent.ONESEC_MS;
					this.timeCounter = new Date( this.timeCounter.getTime() - SessionTimerComponent.ONESEC_MS );
				}

				if( this.counter === SessionTimerComponent.ONEMIN_MS ) {
					this.sessionExpireModalService.openModal();
				} else if( this.counter === 0 ) {
					this.authenticationService.logout();
					this.stopTimer();
					this.sessionExpireModalService.closeModal();
					this.appModalService.openModal( 'info', 'Tu sesión fue cerrada por inactividad' );
				}
			},
			1000
		);
	}

	resetTimer(): void {
		clearInterval( this.sessionTimer );
		this.initValues();
		this.startTimer();
	}

	stopTimer(): void {
		clearInterval( this.sessionTimer );
		this.clearValues();
	}
}