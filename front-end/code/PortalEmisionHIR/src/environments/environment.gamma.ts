// Archivo con variables de ambiente Gamma.
// Este es el ambiente de pruebas de aceptación del usuario (UAT).
// Al ejecutar 'ng build --env=gamma' o 'ng serve --env=gamma' se utilizará este
// archivo (environment.gamma.ts) en vez del default (environment.ts)

export const environment = {
	appHost: 'http://177.241.244.250:8080/service-rest/dtiServices',
	environmentName: 'Gamma',
	development: false,
	production: false,
	recaptchaSiteKey: '6LfG6V0UAAAAAAnADp0QFhJzKeG2CIYzRQ0jzKqj',
	openpayMerchantId: 'mp2lfbdg2vryzcqnqmfm',
	openpayPublicApiKey: 'pk_c1c7ea14443945e4b361164b4e43cc85',
	openpaySandboxMode: true
};