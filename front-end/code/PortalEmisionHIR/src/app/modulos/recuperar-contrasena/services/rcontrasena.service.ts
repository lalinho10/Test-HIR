import { Injectable }  from '@angular/core';

import { Rcontrasena } from '../models/rcontrasena';

@Injectable()
export class RcontrasenaService {
	private rcontrasena: Rcontrasena = new Rcontrasena();

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

	setContactoRcontrasena( correoe: string ): void {
		this.rcontrasena.correoe = correoe;
		this._isContactoValidForm = true;
	}

	setCodigoRcontrasena( codigo: string ): void {
		this.rcontrasena.codigo = codigo;
		this._isCodigoValidForm = true;
	}

	setConfirmacionRcontrasena( contrasena: string, confcontrasena: string ): void {
		this.rcontrasena.contrasena = contrasena;
		this.rcontrasena.confcontrasena = confcontrasena;
		this._isConfirmacionValidForm = true;
	}
}