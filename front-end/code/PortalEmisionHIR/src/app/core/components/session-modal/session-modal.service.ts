import { Injectable }			 from '@angular/core';

import { SessionModalComponent } from './session-modal.component';

@Injectable()
export class SessionModalService {
	private sessionModal: SessionModalComponent;

	setSessionModal( sessionModal: SessionModalComponent ): void {
		this.sessionModal = sessionModal
	}

	openModal(): void {
		this.sessionModal.openModal();
	}

	closeModal(): void {
		this.sessionModal.closeModal();
	}
}