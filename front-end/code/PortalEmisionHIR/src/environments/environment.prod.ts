// Archivo con variables de ambiente de Producción.
// Este es el ambiente productivo.
// Al ejecutar 'ng build --env=prod' o 'ng serve --env=prod' se utilizará este
// archivo (environment.prod.ts) en vez del default (environment.ts)

export const environment = {
	appHost: 'http://192.168.10.39:8080/service-rest/dtiServices',
	environmentName: 'Production',
	development: false,
	production: true,
	recaptchaSiteKey: '',
	openpayMerchantId: '',
	openpayPublicApiKey: '',
	openpaySandboxMode: false
};
