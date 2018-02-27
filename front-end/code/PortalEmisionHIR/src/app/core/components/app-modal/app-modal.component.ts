import { Component, OnInit } from '@angular/core';

import { AppModalService }   from './app-modal.service';

@Component({
	selector: 'pehir-app-modal',
	templateUrl: 'app-modal.component.html',
	styleUrls: [ 'app-modal.component.css' ]
})

export class AppModalComponent implements OnInit {
	private modalMessage: string = '';
	private iconClass: string = '';
	private isVisible: boolean = false;

	constructor( private appModalService: AppModalService ) {}

	ngOnInit() {
		this.appModalService.setAppModal( this );
	}

	private modalIcons: Object = {
		'success': 'fa-check-circle',
		'info':    'fa-info-circle',
		'warning': 'fa-exclamation-circle',
		'error':   'fa-times-circle'
	}

	openModal( modalType: string, modalMessage: string ): void {
		this.modalMessage = modalMessage;
		this.iconClass = this.modalIcons[ modalType ];
		this.isVisible = true;
	}

	closeModal(): void {
		this.isVisible = false;
	}
}