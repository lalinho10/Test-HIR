import { Injectable } from '@angular/core';

import { Acceso }	  from './acceso';

@Injectable()
export class AccesoService {
	private acceso: Acceso = new Acceso();

	private _isLoginValidForm: boolean = false;
	private _isCodigoValidForm: boolean = false;
	private _isConfirmacionValidForm: boolean = false;

	private isLoginValidForm(): boolean {
		return this._isLoginValidForm;
	}

	private isCodigoValidForm(): boolean {
		return this._isLoginValidForm && this._isCodigoValidForm;
	}

	private isConfirmacionValidForm(): boolean {
		return this._isLoginValidForm && this._isCodigoValidForm && this._isConfirmacionValidForm;
	}

	isValidPath( path: string ): boolean {
		let isValidPath = false;

		switch( path ) {
			case 'codigo':
				isValidPath = this.isLoginValidForm();
			break;
			case 'contrasena':
				isValidPath = this.isCodigoValidForm();
			break;
			default:
				isValidPath = false;
			break;
		}

		return isValidPath;
	}

	setLoginAcceso( usuario: string, contrasena: string ): void {
		this.acceso.usuario = usuario;
		this.acceso.contrasena = contrasena;
		this._isLoginValidForm = true;
	}

	setCodigoAcceso( codigo: string ): void {
		this.acceso.codigo = codigo;
		this._isCodigoValidForm = true;
	}

	setConfirmacionAcceso( contrasena_pa: string, confcontrasena_pa: string ): void {
		this.acceso.contrasena_pa = contrasena_pa;
		this.acceso.confcontrasena_pa = confcontrasena_pa;
		this._isConfirmacionValidForm = true;
	}
}