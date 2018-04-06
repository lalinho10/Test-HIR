import { Injectable } from '@angular/core';

import { Desbloqueo } from '../models/desbloqueo';

@Injectable()
export class DesbloqueoService {
	private desbloqueo: Desbloqueo = new Desbloqueo();

	private _isContactoValidForm: boolean = false;
	private _isCodigoValidForm: boolean = false;
	private _isConfirmacionValidForm: boolean = false;

	private isContactoValidForm(): boolean {
		return this._isContactoValidForm;
	}

	private isCodigoValidForm(): boolean {
		return this._isCodigoValidForm && this._isContactoValidForm;
	}

	private isConfirmacionValidForm(): boolean {
		return this._isCodigoValidForm && this._isContactoValidForm && this._isConfirmacionValidForm;
	}

	isValidPath( path: string ): boolean {
		let isValidPath = false;

		switch( path ) {
			case 'codigo':
				isValidPath = this.isContactoValidForm();
			break;
			case 'confirmacion':
				isValidPath = this.isCodigoValidForm();
			break;
			default:
				isValidPath = false;
			break;
		}

		return isValidPath;
	}

	setContactoDesbloqueo( correoe: string, celular: string ): void {
		this.desbloqueo.correoe = correoe;
		this.desbloqueo.celular = celular;
		this._isContactoValidForm = true;
	}

	setCodigoDesbloqueo( codigo: string ): void {
		this.desbloqueo.codigo = codigo;
		this._isCodigoValidForm = true;
	}

	setConfirmacionDesbloqueo( contrasena: string, confcontrasena: string ): void {
		this.desbloqueo.contrasena = contrasena;
		this.desbloqueo.confcontrasena = confcontrasena;
		this._isConfirmacionValidForm = true;
	}
}