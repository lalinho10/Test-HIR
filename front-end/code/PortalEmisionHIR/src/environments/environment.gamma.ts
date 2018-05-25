// Archivo con variables de ambiente Gamma.
// Este es el ambiente de pruebas de aceptación del usuario (UAT).
// Al ejecutar 'ng build --env=gamma' o 'ng serve --env=gamma' se utilizará este
// archivo (environment.gamma.ts) en vez del default (environment.ts)

export const environment = {
	appHost: 'http://192.168.10.39:8080/service-rest/dtiServices',
	environmentName: 'Gamma',
	development: false,
	production: false
};