import { Injectable }				   from '@angular/core';

import { SessionExpireModalComponent } from './session-expire-modal.component';

@Injectable()
export class SessionExpireModalService {
	private sessionExpireModal: SessionExpireModalComponent;

	setSessionExpireModal( sessionExpireModal: SessionExpireModalComponent ): void {
		this.sessionExpireModal = sessionExpireModal
	}

	openModal(): void {
		this.sessionExpireModal.openModal();
	}

	closeModal(): void {
		this.sessionExpireModal.closeModal();
	}
}