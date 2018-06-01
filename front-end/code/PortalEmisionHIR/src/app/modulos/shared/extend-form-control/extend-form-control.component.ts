import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

@Component({
	selector: 'pehir-extend-form-control',
	templateUrl: 'extend-form-control.component.html'
})

export class ExtendFormControlComponent implements OnChanges {
	@Input() inputDirty: boolean;
	@Input() inputErrors: Object;
	@Input() groupDirty?: boolean = false;
	@Input() groupErrors?: Object = undefined;
	@Input() isInputForGroupError?: boolean = false;

	hasError: boolean;
	errorMessage: string;
	hasGroupError: boolean;
	groupErrorMessage: string;

	private errorDefs: Object = 
	{
		required: 'Campo requerido',
		max: 'El campo excede el valor máximo válido',
		min: 'El campo no tiene el valor mínimo válido',
		maxlength: 'El campo excede el número máximo de caracteres permitidos',
		minlength: 'El campo no tiene el número mínimo de caracteres permitidos',
		pattern: 'El formato del dato capturado es incorrecto',
		email: 'Formato de correo electrónico incorrecto',
		celular: 'Formato de celular incorrecto',
		telefono: 'Formato de teléfono incorrecto',
		codigo: 'Formato de código incorrecto',
		contrasena: 'Formato de contraseña incorrecto',
		rfc : 'Formato de RFC incorrecto',
		claveAgente: 'Formato de clave incorrecto',
		codigoPostal: 'Fomato de código postal incorrecto',
		peso: 'Formato de peso incorrecto',
		estatura: 'Formato de estatura incorrecto',
		formatoMoneda: 'Formato de cantidad monetaria incorrecto',
		igualdadContrasenas: 'Las contraseñas son diferentes',
		diferenciaTelefonos: 'Los teléfonos deben ser diferentes',
		diferenciaCorreos: 'Los correos deben ser diferentes',
		cambioIgualdadContrasenas: 'La contraseña nueva y la contraseña actual deben ser diferentes',
		cambioDiferenciaContrasenas: 'La contraseña nueva y la confirmación de contraseña nueva deben ser iguales',
		nombre: 'El nombre contiene caracteres no permitidos',
		apellido: 'El apellido contiene caracteres no permitidos',
		porcentaje: 'El porcentaje asigando es inválido',
		entreedades: 'No cumples con el rango de edad para la contratación de este producto',
		numerico: 'El campo debe ser numérico'
	};

	ngOnChanges( changes: SimpleChanges ): void {
		this.hasError = false;
		this.errorMessage = '';
		this.hasGroupError = false;
		this.groupErrorMessage = '';

		let errors: any = ( changes.inputErrors ) ? changes.inputErrors.currentValue : this.inputErrors;
		let groupErrors: any = ( changes.groupErrors ) ? changes.groupErrors.currentValue : this.groupErrors;

		if ( errors && this.inputDirty ) {
			Object.keys( this.errorDefs ).some( key => {
				if ( errors[ key ] ) {
					this.errorMessage = this.errorDefs[ key ];
					this.hasError = true;
					return true;
				}
			});
		}

		if( groupErrors && this.groupDirty ) {
			Object.keys( this.errorDefs ).some( key => {
				if ( groupErrors[ key ] ) {
					this.groupErrorMessage = this.errorDefs[ key ];
					this.hasGroupError = true;
					return true;
				}
			});
		}
	}
}