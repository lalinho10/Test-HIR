
package org.tempuri;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlElementDecl;
import javax.xml.bind.annotation.XmlRegistry;
import javax.xml.namespace.QName;
import org.datacontract.schemas._2004._07.sistran.ArrayOfCatalogoCoberturas;
import org.datacontract.schemas._2004._07.sistran.ArrayOfConsultaCatalogoFormaPago;
import org.datacontract.schemas._2004._07.sistran.ArrayOfPlanCotizar;
import org.datacontract.schemas._2004._07.sistran.AutenticacionRespuesta;
import org.datacontract.schemas._2004._07.sistran.CatalogoCPRespuestas;
import org.datacontract.schemas._2004._07.sistran.CatalogoCalcularRFC;
import org.datacontract.schemas._2004._07.sistran.CatalogoColoniaRespuestas;
import org.datacontract.schemas._2004._07.sistran.CatalogoCuestionarioConocimiento;
import org.datacontract.schemas._2004._07.sistran.CatalogoCuestionarioMedico;
import org.datacontract.schemas._2004._07.sistran.CatalogoEstadosRespuestas;
import org.datacontract.schemas._2004._07.sistran.CatalogoFrecuenciaBebida;
import org.datacontract.schemas._2004._07.sistran.CatalogoFrecuenciaDeporte;
import org.datacontract.schemas._2004._07.sistran.CatalogoFrecuenciaFuma;
import org.datacontract.schemas._2004._07.sistran.CatalogoMunicipioRespuestas;
import org.datacontract.schemas._2004._07.sistran.CatalogoOcupacionRepuestas;
import org.datacontract.schemas._2004._07.sistran.CatalogoProductosRespuestas;
import org.datacontract.schemas._2004._07.sistran.CatalogoTipoCliente;
import org.datacontract.schemas._2004._07.sistran.CatalogoTipoDeporte;
import org.datacontract.schemas._2004._07.sistran.CatalogoTipoIdentificacion;
import org.datacontract.schemas._2004._07.sistran.CatalogoTipoParentesco;
import org.datacontract.schemas._2004._07.sistran.ClaseRespuesta;
import org.datacontract.schemas._2004._07.sistran.LoginNormalRespuesta;
import org.datacontract.schemas._2004._07.sistran.LoginRespuesta;
import org.datacontract.schemas._2004._07.sistran.Modulos;
import org.datacontract.schemas._2004._07.sistran.RecuperaClaveRespuesta;
import org.datacontract.schemas._2004._07.sistran.RespuestaTarifa;


/**
 * This object contains factory methods for each 
 * Java content interface and Java element interface 
 * generated in the org.tempuri package. 
 * <p>An ObjectFactory allows you to programatically 
 * construct new instances of the Java representation 
 * for XML content. The Java representation of XML 
 * content can consist of schema derived interfaces 
 * and classes representing the binding of schema 
 * type definitions, element declarations and model 
 * groups.  Factory methods for each of these are 
 * provided in this class.
 * 
 */
@XmlRegistry
public class ObjectFactory {

    private final static QName _LoginRecuperaClaveCorreoCorreo_QNAME = new QName("http://tempuri.org/", "correo");
    private final static QName _LoginNormalResponseLoginNormalResult_QNAME = new QName("http://tempuri.org/", "loginNormalResult");
    private final static QName _CalculaRFCPEVCFECHANACIMIENTO_QNAME = new QName("http://tempuri.org/", "PE_VC_FECHA_NACIMIENTO");
    private final static QName _CalculaRFCPEVCNOMBRES_QNAME = new QName("http://tempuri.org/", "PE_VC_NOMBRES");
    private final static QName _CalculaRFCPEVCAPPATERNO_QNAME = new QName("http://tempuri.org/", "PE_VC_APPATERNO");
    private final static QName _CalculaRFCPEVCAPMATERNO_QNAME = new QName("http://tempuri.org/", "PE_VC_APMATERNO");
    private final static QName _ConsultaCatalogoMunicipioResponseConsultaCatalogoMunicipioResult_QNAME = new QName("http://tempuri.org/", "ConsultaCatalogoMunicipioResult");
    private final static QName _ConsultaCatalogoTIdentificacionResponseConsultaCatalogoTIdentificacionResult_QNAME = new QName("http://tempuri.org/", "ConsultaCatalogoTIdentificacionResult");
    private final static QName _CotizaFormaDePagoResponseCotizaFormaDePagoResult_QNAME = new QName("http://tempuri.org/", "CotizaFormaDePagoResult");
    private final static QName _ConsultaCatalogoCoberturasResponseConsultaCatalogoCoberturasResult_QNAME = new QName("http://tempuri.org/", "ConsultaCatalogoCoberturasResult");
    private final static QName _LoginRegistroResponseLoginRegistroResult_QNAME = new QName("http://tempuri.org/", "loginRegistroResult");
    private final static QName _ConsultaCatalogoFumaResponseConsultaCatalogoFumaResult_QNAME = new QName("http://tempuri.org/", "ConsultaCatalogoFumaResult");
    private final static QName _LoginRecuperaClaveCorreoResponseLoginRecuperaClaveCorreoResult_QNAME = new QName("http://tempuri.org/", "loginRecuperaClaveCorreoResult");
    private final static QName _ConsultaCatalogoColoniaResponseConsultaCatalogoColoniaResult_QNAME = new QName("http://tempuri.org/", "ConsultaCatalogoColoniaResult");
    private final static QName _ConsultaCatalogoClienteResponseConsultaCatalogoClienteResult_QNAME = new QName("http://tempuri.org/", "ConsultaCatalogoClienteResult");
    private final static QName _ConsultaTarifasResponseConsultaTarifasResult_QNAME = new QName("http://tempuri.org/", "ConsultaTarifasResult");
    private final static QName _LoginCambiarContraseniaContraseniaNueva_QNAME = new QName("http://tempuri.org/", "ContraseniaNueva");
    private final static QName _LoginCambiarContraseniaContraseniaAnterior_QNAME = new QName("http://tempuri.org/", "ContraseniaAnterior");
    private final static QName _ConsultaCatalogoParentescoResponseConsultaCatalogoParentescoResult_QNAME = new QName("http://tempuri.org/", "ConsultaCatalogoParentescoResult");
    private final static QName _LoginValidarSMSResponseLoginValidarSMSResult_QNAME = new QName("http://tempuri.org/", "loginValidarSMSResult");
    private final static QName _LoginCambiarContraseniaResponseLoginCambiarContraseniaResult_QNAME = new QName("http://tempuri.org/", "loginCambiarContraseniaResult");
    private final static QName _CalculaRFCResponseCalculaRFCResult_QNAME = new QName("http://tempuri.org/", "Calcula_RFCResult");
    private final static QName _ConsultaModulosResponseConsultaModulosResult_QNAME = new QName("http://tempuri.org/", "ConsultaModulosResult");
    private final static QName _ConsultaCatalogoMunicipioClaveEstado_QNAME = new QName("http://tempuri.org/", "claveEstado");
    private final static QName _ConsultaCatalogoTDeporteResponseConsultaCatalogoTDeporteResult_QNAME = new QName("http://tempuri.org/", "ConsultaCatalogoTDeporteResult");
    private final static QName _ConsultaCatalogoOcupacionesResponseConsultaCatalogoOcupacionesResult_QNAME = new QName("http://tempuri.org/", "ConsultaCatalogoOcupacionesResult");
    private final static QName _LoginNormalPassword_QNAME = new QName("http://tempuri.org/", "Password");
    private final static QName _LoginNormalUsuario_QNAME = new QName("http://tempuri.org/", "Usuario");
    private final static QName _ConsultaCatalogoPostalResponseConsultaCatalogoPostalResult_QNAME = new QName("http://tempuri.org/", "ConsultaCatalogoPostalResult");
    private final static QName _ConsultaCatalogoPlanesResponseConsultaCatalogoPlanesResult_QNAME = new QName("http://tempuri.org/", "ConsultaCatalogoPlanesResult");
    private final static QName _LoginValidarSMSCodigo_QNAME = new QName("http://tempuri.org/", "codigo");
    private final static QName _LoginValidarSMSIdCodigo_QNAME = new QName("http://tempuri.org/", "idCodigo");
    private final static QName _ConsultaCatalogoMedicoResponseConsultaCatalogoMedicoResult_QNAME = new QName("http://tempuri.org/", "ConsultaCatalogoMedicoResult");
    private final static QName _ConsultaCatalogoPostalCP_QNAME = new QName("http://tempuri.org/", "CP");
    private final static QName _ConsultaCatalogoBebidaResponseConsultaCatalogoBebidaResult_QNAME = new QName("http://tempuri.org/", "ConsultaCatalogoBebidaResult");
    private final static QName _LoginRegistroMaterno_QNAME = new QName("http://tempuri.org/", "materno");
    private final static QName _LoginRegistroContrasenia_QNAME = new QName("http://tempuri.org/", "contrasenia");
    private final static QName _LoginRegistroConfirmarContrasenia_QNAME = new QName("http://tempuri.org/", "confirmarContrasenia");
    private final static QName _LoginRegistroNombre_QNAME = new QName("http://tempuri.org/", "nombre");
    private final static QName _LoginRegistroTelefonoFijo_QNAME = new QName("http://tempuri.org/", "telefonoFijo");
    private final static QName _LoginRegistroTelefonoCelular_QNAME = new QName("http://tempuri.org/", "telefonoCelular");
    private final static QName _LoginRegistroPaterno_QNAME = new QName("http://tempuri.org/", "paterno");
    private final static QName _ConsultaCatalogoDeporteResponseConsultaCatalogoDeporteResult_QNAME = new QName("http://tempuri.org/", "ConsultaCatalogoDeporteResult");
    private final static QName _FinalizaSesionPEVCCORREO_QNAME = new QName("http://tempuri.org/", "PE_VC_CORREO");
    private final static QName _ConsultaCatalogoEstadosResponseConsultaCatalogoEstadosResult_QNAME = new QName("http://tempuri.org/", "ConsultaCatalogoEstadosResult");
    private final static QName _ConsultaCatalogoColoniaClaveMunicipio_QNAME = new QName("http://tempuri.org/", "claveMunicipio");
    private final static QName _ConsultaCatalogoProductosResponseConsultaCatalogoProductosResult_QNAME = new QName("http://tempuri.org/", "ConsultaCatalogoProductosResult");
    private final static QName _FinalizaSesionResponseFinalizaSesionResult_QNAME = new QName("http://tempuri.org/", "FinalizaSesionResult");
    private final static QName _ConsultaCatalogoCuestionarioResponseConsultaCatalogoCuestionarioResult_QNAME = new QName("http://tempuri.org/", "ConsultaCatalogoCuestionarioResult");

    /**
     * Create a new ObjectFactory that can be used to create new instances of schema derived classes for package: org.tempuri
     * 
     */
    public ObjectFactory() {
    }

    /**
     * Create an instance of {@link ConsultaCatalogoCoberturasResponse }
     * 
     */
    public ConsultaCatalogoCoberturasResponse createConsultaCatalogoCoberturasResponse() {
        return new ConsultaCatalogoCoberturasResponse();
    }

    /**
     * Create an instance of {@link ConsultaCatalogoMedico }
     * 
     */
    public ConsultaCatalogoMedico createConsultaCatalogoMedico() {
        return new ConsultaCatalogoMedico();
    }

    /**
     * Create an instance of {@link ConsultaCatalogoParentescoResponse }
     * 
     */
    public ConsultaCatalogoParentescoResponse createConsultaCatalogoParentescoResponse() {
        return new ConsultaCatalogoParentescoResponse();
    }

    /**
     * Create an instance of {@link ConsultaTarifasResponse }
     * 
     */
    public ConsultaTarifasResponse createConsultaTarifasResponse() {
        return new ConsultaTarifasResponse();
    }

    /**
     * Create an instance of {@link ConsultaCatalogoParentesco }
     * 
     */
    public ConsultaCatalogoParentesco createConsultaCatalogoParentesco() {
        return new ConsultaCatalogoParentesco();
    }

    /**
     * Create an instance of {@link LoginRecuperaClaveCorreoResponse }
     * 
     */
    public LoginRecuperaClaveCorreoResponse createLoginRecuperaClaveCorreoResponse() {
        return new LoginRecuperaClaveCorreoResponse();
    }

    /**
     * Create an instance of {@link ConsultaCatalogoCoberturas }
     * 
     */
    public ConsultaCatalogoCoberturas createConsultaCatalogoCoberturas() {
        return new ConsultaCatalogoCoberturas();
    }

    /**
     * Create an instance of {@link ConsultaCatalogoProductos }
     * 
     */
    public ConsultaCatalogoProductos createConsultaCatalogoProductos() {
        return new ConsultaCatalogoProductos();
    }

    /**
     * Create an instance of {@link ConsultaCatalogoFuma }
     * 
     */
    public ConsultaCatalogoFuma createConsultaCatalogoFuma() {
        return new ConsultaCatalogoFuma();
    }

    /**
     * Create an instance of {@link ConsultaCatalogoBebida }
     * 
     */
    public ConsultaCatalogoBebida createConsultaCatalogoBebida() {
        return new ConsultaCatalogoBebida();
    }

    /**
     * Create an instance of {@link LoginValidarSMS }
     * 
     */
    public LoginValidarSMS createLoginValidarSMS() {
        return new LoginValidarSMS();
    }

    /**
     * Create an instance of {@link LoginNormal }
     * 
     */
    public LoginNormal createLoginNormal() {
        return new LoginNormal();
    }

    /**
     * Create an instance of {@link ConsultaCatalogoTDeporte }
     * 
     */
    public ConsultaCatalogoTDeporte createConsultaCatalogoTDeporte() {
        return new ConsultaCatalogoTDeporte();
    }

    /**
     * Create an instance of {@link CotizaFormaDePago }
     * 
     */
    public CotizaFormaDePago createCotizaFormaDePago() {
        return new CotizaFormaDePago();
    }

    /**
     * Create an instance of {@link ConsultaCatalogoColonia }
     * 
     */
    public ConsultaCatalogoColonia createConsultaCatalogoColonia() {
        return new ConsultaCatalogoColonia();
    }

    /**
     * Create an instance of {@link ConsultaTarifas }
     * 
     */
    public ConsultaTarifas createConsultaTarifas() {
        return new ConsultaTarifas();
    }

    /**
     * Create an instance of {@link LoginCambiarContrasenia }
     * 
     */
    public LoginCambiarContrasenia createLoginCambiarContrasenia() {
        return new LoginCambiarContrasenia();
    }

    /**
     * Create an instance of {@link ConsultaModulos }
     * 
     */
    public ConsultaModulos createConsultaModulos() {
        return new ConsultaModulos();
    }

    /**
     * Create an instance of {@link ConsultaCatalogoOcupaciones }
     * 
     */
    public ConsultaCatalogoOcupaciones createConsultaCatalogoOcupaciones() {
        return new ConsultaCatalogoOcupaciones();
    }

    /**
     * Create an instance of {@link CalculaRFCResponse }
     * 
     */
    public CalculaRFCResponse createCalculaRFCResponse() {
        return new CalculaRFCResponse();
    }

    /**
     * Create an instance of {@link ConsultaCatalogoCliente }
     * 
     */
    public ConsultaCatalogoCliente createConsultaCatalogoCliente() {
        return new ConsultaCatalogoCliente();
    }

    /**
     * Create an instance of {@link CotizaFormaDePagoResponse }
     * 
     */
    public CotizaFormaDePagoResponse createCotizaFormaDePagoResponse() {
        return new CotizaFormaDePagoResponse();
    }

    /**
     * Create an instance of {@link LoginNormalResponse }
     * 
     */
    public LoginNormalResponse createLoginNormalResponse() {
        return new LoginNormalResponse();
    }

    /**
     * Create an instance of {@link ConsultaCatalogoMunicipioResponse }
     * 
     */
    public ConsultaCatalogoMunicipioResponse createConsultaCatalogoMunicipioResponse() {
        return new ConsultaCatalogoMunicipioResponse();
    }

    /**
     * Create an instance of {@link ConsultaCatalogoColoniaResponse }
     * 
     */
    public ConsultaCatalogoColoniaResponse createConsultaCatalogoColoniaResponse() {
        return new ConsultaCatalogoColoniaResponse();
    }

    /**
     * Create an instance of {@link FinalizaSesion }
     * 
     */
    public FinalizaSesion createFinalizaSesion() {
        return new FinalizaSesion();
    }

    /**
     * Create an instance of {@link ConsultaCatalogoClienteResponse }
     * 
     */
    public ConsultaCatalogoClienteResponse createConsultaCatalogoClienteResponse() {
        return new ConsultaCatalogoClienteResponse();
    }

    /**
     * Create an instance of {@link ConsultaCatalogoTDeporteResponse }
     * 
     */
    public ConsultaCatalogoTDeporteResponse createConsultaCatalogoTDeporteResponse() {
        return new ConsultaCatalogoTDeporteResponse();
    }

    /**
     * Create an instance of {@link ConsultaCatalogoPostalResponse }
     * 
     */
    public ConsultaCatalogoPostalResponse createConsultaCatalogoPostalResponse() {
        return new ConsultaCatalogoPostalResponse();
    }

    /**
     * Create an instance of {@link ConsultaCatalogoCuestionario }
     * 
     */
    public ConsultaCatalogoCuestionario createConsultaCatalogoCuestionario() {
        return new ConsultaCatalogoCuestionario();
    }

    /**
     * Create an instance of {@link ConsultaCatalogoPlanes }
     * 
     */
    public ConsultaCatalogoPlanes createConsultaCatalogoPlanes() {
        return new ConsultaCatalogoPlanes();
    }

    /**
     * Create an instance of {@link ConsultaCatalogoTIdentificacionResponse }
     * 
     */
    public ConsultaCatalogoTIdentificacionResponse createConsultaCatalogoTIdentificacionResponse() {
        return new ConsultaCatalogoTIdentificacionResponse();
    }

    /**
     * Create an instance of {@link ConsultaCatalogoBebidaResponse }
     * 
     */
    public ConsultaCatalogoBebidaResponse createConsultaCatalogoBebidaResponse() {
        return new ConsultaCatalogoBebidaResponse();
    }

    /**
     * Create an instance of {@link LoginRecuperaClaveCorreo }
     * 
     */
    public LoginRecuperaClaveCorreo createLoginRecuperaClaveCorreo() {
        return new LoginRecuperaClaveCorreo();
    }

    /**
     * Create an instance of {@link ConsultaCatalogoEstadosResponse }
     * 
     */
    public ConsultaCatalogoEstadosResponse createConsultaCatalogoEstadosResponse() {
        return new ConsultaCatalogoEstadosResponse();
    }

    /**
     * Create an instance of {@link LoginValidarSMSResponse }
     * 
     */
    public LoginValidarSMSResponse createLoginValidarSMSResponse() {
        return new LoginValidarSMSResponse();
    }

    /**
     * Create an instance of {@link ConsultaCatalogoPostal }
     * 
     */
    public ConsultaCatalogoPostal createConsultaCatalogoPostal() {
        return new ConsultaCatalogoPostal();
    }

    /**
     * Create an instance of {@link ConsultaCatalogoDeporte }
     * 
     */
    public ConsultaCatalogoDeporte createConsultaCatalogoDeporte() {
        return new ConsultaCatalogoDeporte();
    }

    /**
     * Create an instance of {@link ConsultaCatalogoMunicipio }
     * 
     */
    public ConsultaCatalogoMunicipio createConsultaCatalogoMunicipio() {
        return new ConsultaCatalogoMunicipio();
    }

    /**
     * Create an instance of {@link ConsultaCatalogoTIdentificacion }
     * 
     */
    public ConsultaCatalogoTIdentificacion createConsultaCatalogoTIdentificacion() {
        return new ConsultaCatalogoTIdentificacion();
    }

    /**
     * Create an instance of {@link FinalizaSesionResponse }
     * 
     */
    public FinalizaSesionResponse createFinalizaSesionResponse() {
        return new FinalizaSesionResponse();
    }

    /**
     * Create an instance of {@link LoginCambiarContraseniaResponse }
     * 
     */
    public LoginCambiarContraseniaResponse createLoginCambiarContraseniaResponse() {
        return new LoginCambiarContraseniaResponse();
    }

    /**
     * Create an instance of {@link ConsultaModulosResponse }
     * 
     */
    public ConsultaModulosResponse createConsultaModulosResponse() {
        return new ConsultaModulosResponse();
    }

    /**
     * Create an instance of {@link ConsultaCatalogoEstados }
     * 
     */
    public ConsultaCatalogoEstados createConsultaCatalogoEstados() {
        return new ConsultaCatalogoEstados();
    }

    /**
     * Create an instance of {@link ConsultaCatalogoMedicoResponse }
     * 
     */
    public ConsultaCatalogoMedicoResponse createConsultaCatalogoMedicoResponse() {
        return new ConsultaCatalogoMedicoResponse();
    }

    /**
     * Create an instance of {@link ConsultaCatalogoProductosResponse }
     * 
     */
    public ConsultaCatalogoProductosResponse createConsultaCatalogoProductosResponse() {
        return new ConsultaCatalogoProductosResponse();
    }

    /**
     * Create an instance of {@link LoginRegistro }
     * 
     */
    public LoginRegistro createLoginRegistro() {
        return new LoginRegistro();
    }

    /**
     * Create an instance of {@link ConsultaCatalogoPlanesResponse }
     * 
     */
    public ConsultaCatalogoPlanesResponse createConsultaCatalogoPlanesResponse() {
        return new ConsultaCatalogoPlanesResponse();
    }

    /**
     * Create an instance of {@link ConsultaCatalogoFumaResponse }
     * 
     */
    public ConsultaCatalogoFumaResponse createConsultaCatalogoFumaResponse() {
        return new ConsultaCatalogoFumaResponse();
    }

    /**
     * Create an instance of {@link ConsultaCatalogoOcupacionesResponse }
     * 
     */
    public ConsultaCatalogoOcupacionesResponse createConsultaCatalogoOcupacionesResponse() {
        return new ConsultaCatalogoOcupacionesResponse();
    }

    /**
     * Create an instance of {@link LoginRegistroResponse }
     * 
     */
    public LoginRegistroResponse createLoginRegistroResponse() {
        return new LoginRegistroResponse();
    }

    /**
     * Create an instance of {@link CalculaRFC }
     * 
     */
    public CalculaRFC createCalculaRFC() {
        return new CalculaRFC();
    }

    /**
     * Create an instance of {@link ConsultaCatalogoDeporteResponse }
     * 
     */
    public ConsultaCatalogoDeporteResponse createConsultaCatalogoDeporteResponse() {
        return new ConsultaCatalogoDeporteResponse();
    }

    /**
     * Create an instance of {@link ConsultaCatalogoCuestionarioResponse }
     * 
     */
    public ConsultaCatalogoCuestionarioResponse createConsultaCatalogoCuestionarioResponse() {
        return new ConsultaCatalogoCuestionarioResponse();
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link String }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://tempuri.org/", name = "correo", scope = LoginRecuperaClaveCorreo.class)
    public JAXBElement<String> createLoginRecuperaClaveCorreoCorreo(String value) {
        return new JAXBElement<String>(_LoginRecuperaClaveCorreoCorreo_QNAME, String.class, LoginRecuperaClaveCorreo.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link LoginNormalRespuesta }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://tempuri.org/", name = "loginNormalResult", scope = LoginNormalResponse.class)
    public JAXBElement<LoginNormalRespuesta> createLoginNormalResponseLoginNormalResult(LoginNormalRespuesta value) {
        return new JAXBElement<LoginNormalRespuesta>(_LoginNormalResponseLoginNormalResult_QNAME, LoginNormalRespuesta.class, LoginNormalResponse.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link String }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://tempuri.org/", name = "PE_VC_FECHA_NACIMIENTO", scope = CalculaRFC.class)
    public JAXBElement<String> createCalculaRFCPEVCFECHANACIMIENTO(String value) {
        return new JAXBElement<String>(_CalculaRFCPEVCFECHANACIMIENTO_QNAME, String.class, CalculaRFC.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link String }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://tempuri.org/", name = "PE_VC_NOMBRES", scope = CalculaRFC.class)
    public JAXBElement<String> createCalculaRFCPEVCNOMBRES(String value) {
        return new JAXBElement<String>(_CalculaRFCPEVCNOMBRES_QNAME, String.class, CalculaRFC.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link String }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://tempuri.org/", name = "PE_VC_APPATERNO", scope = CalculaRFC.class)
    public JAXBElement<String> createCalculaRFCPEVCAPPATERNO(String value) {
        return new JAXBElement<String>(_CalculaRFCPEVCAPPATERNO_QNAME, String.class, CalculaRFC.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link String }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://tempuri.org/", name = "PE_VC_APMATERNO", scope = CalculaRFC.class)
    public JAXBElement<String> createCalculaRFCPEVCAPMATERNO(String value) {
        return new JAXBElement<String>(_CalculaRFCPEVCAPMATERNO_QNAME, String.class, CalculaRFC.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link CatalogoMunicipioRespuestas }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://tempuri.org/", name = "ConsultaCatalogoMunicipioResult", scope = ConsultaCatalogoMunicipioResponse.class)
    public JAXBElement<CatalogoMunicipioRespuestas> createConsultaCatalogoMunicipioResponseConsultaCatalogoMunicipioResult(CatalogoMunicipioRespuestas value) {
        return new JAXBElement<CatalogoMunicipioRespuestas>(_ConsultaCatalogoMunicipioResponseConsultaCatalogoMunicipioResult_QNAME, CatalogoMunicipioRespuestas.class, ConsultaCatalogoMunicipioResponse.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link CatalogoTipoIdentificacion }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://tempuri.org/", name = "ConsultaCatalogoTIdentificacionResult", scope = ConsultaCatalogoTIdentificacionResponse.class)
    public JAXBElement<CatalogoTipoIdentificacion> createConsultaCatalogoTIdentificacionResponseConsultaCatalogoTIdentificacionResult(CatalogoTipoIdentificacion value) {
        return new JAXBElement<CatalogoTipoIdentificacion>(_ConsultaCatalogoTIdentificacionResponseConsultaCatalogoTIdentificacionResult_QNAME, CatalogoTipoIdentificacion.class, ConsultaCatalogoTIdentificacionResponse.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ArrayOfConsultaCatalogoFormaPago }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://tempuri.org/", name = "CotizaFormaDePagoResult", scope = CotizaFormaDePagoResponse.class)
    public JAXBElement<ArrayOfConsultaCatalogoFormaPago> createCotizaFormaDePagoResponseCotizaFormaDePagoResult(ArrayOfConsultaCatalogoFormaPago value) {
        return new JAXBElement<ArrayOfConsultaCatalogoFormaPago>(_CotizaFormaDePagoResponseCotizaFormaDePagoResult_QNAME, ArrayOfConsultaCatalogoFormaPago.class, CotizaFormaDePagoResponse.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ArrayOfCatalogoCoberturas }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://tempuri.org/", name = "ConsultaCatalogoCoberturasResult", scope = ConsultaCatalogoCoberturasResponse.class)
    public JAXBElement<ArrayOfCatalogoCoberturas> createConsultaCatalogoCoberturasResponseConsultaCatalogoCoberturasResult(ArrayOfCatalogoCoberturas value) {
        return new JAXBElement<ArrayOfCatalogoCoberturas>(_ConsultaCatalogoCoberturasResponseConsultaCatalogoCoberturasResult_QNAME, ArrayOfCatalogoCoberturas.class, ConsultaCatalogoCoberturasResponse.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link LoginRespuesta }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://tempuri.org/", name = "loginRegistroResult", scope = LoginRegistroResponse.class)
    public JAXBElement<LoginRespuesta> createLoginRegistroResponseLoginRegistroResult(LoginRespuesta value) {
        return new JAXBElement<LoginRespuesta>(_LoginRegistroResponseLoginRegistroResult_QNAME, LoginRespuesta.class, LoginRegistroResponse.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link CatalogoFrecuenciaFuma }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://tempuri.org/", name = "ConsultaCatalogoFumaResult", scope = ConsultaCatalogoFumaResponse.class)
    public JAXBElement<CatalogoFrecuenciaFuma> createConsultaCatalogoFumaResponseConsultaCatalogoFumaResult(CatalogoFrecuenciaFuma value) {
        return new JAXBElement<CatalogoFrecuenciaFuma>(_ConsultaCatalogoFumaResponseConsultaCatalogoFumaResult_QNAME, CatalogoFrecuenciaFuma.class, ConsultaCatalogoFumaResponse.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link RecuperaClaveRespuesta }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://tempuri.org/", name = "loginRecuperaClaveCorreoResult", scope = LoginRecuperaClaveCorreoResponse.class)
    public JAXBElement<RecuperaClaveRespuesta> createLoginRecuperaClaveCorreoResponseLoginRecuperaClaveCorreoResult(RecuperaClaveRespuesta value) {
        return new JAXBElement<RecuperaClaveRespuesta>(_LoginRecuperaClaveCorreoResponseLoginRecuperaClaveCorreoResult_QNAME, RecuperaClaveRespuesta.class, LoginRecuperaClaveCorreoResponse.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link CatalogoColoniaRespuestas }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://tempuri.org/", name = "ConsultaCatalogoColoniaResult", scope = ConsultaCatalogoColoniaResponse.class)
    public JAXBElement<CatalogoColoniaRespuestas> createConsultaCatalogoColoniaResponseConsultaCatalogoColoniaResult(CatalogoColoniaRespuestas value) {
        return new JAXBElement<CatalogoColoniaRespuestas>(_ConsultaCatalogoColoniaResponseConsultaCatalogoColoniaResult_QNAME, CatalogoColoniaRespuestas.class, ConsultaCatalogoColoniaResponse.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link CatalogoTipoCliente }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://tempuri.org/", name = "ConsultaCatalogoClienteResult", scope = ConsultaCatalogoClienteResponse.class)
    public JAXBElement<CatalogoTipoCliente> createConsultaCatalogoClienteResponseConsultaCatalogoClienteResult(CatalogoTipoCliente value) {
        return new JAXBElement<CatalogoTipoCliente>(_ConsultaCatalogoClienteResponseConsultaCatalogoClienteResult_QNAME, CatalogoTipoCliente.class, ConsultaCatalogoClienteResponse.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link RespuestaTarifa }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://tempuri.org/", name = "ConsultaTarifasResult", scope = ConsultaTarifasResponse.class)
    public JAXBElement<RespuestaTarifa> createConsultaTarifasResponseConsultaTarifasResult(RespuestaTarifa value) {
        return new JAXBElement<RespuestaTarifa>(_ConsultaTarifasResponseConsultaTarifasResult_QNAME, RespuestaTarifa.class, ConsultaTarifasResponse.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link String }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://tempuri.org/", name = "ContraseniaNueva", scope = LoginCambiarContrasenia.class)
    public JAXBElement<String> createLoginCambiarContraseniaContraseniaNueva(String value) {
        return new JAXBElement<String>(_LoginCambiarContraseniaContraseniaNueva_QNAME, String.class, LoginCambiarContrasenia.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link String }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://tempuri.org/", name = "ContraseniaAnterior", scope = LoginCambiarContrasenia.class)
    public JAXBElement<String> createLoginCambiarContraseniaContraseniaAnterior(String value) {
        return new JAXBElement<String>(_LoginCambiarContraseniaContraseniaAnterior_QNAME, String.class, LoginCambiarContrasenia.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link String }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://tempuri.org/", name = "correo", scope = LoginCambiarContrasenia.class)
    public JAXBElement<String> createLoginCambiarContraseniaCorreo(String value) {
        return new JAXBElement<String>(_LoginRecuperaClaveCorreoCorreo_QNAME, String.class, LoginCambiarContrasenia.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link CatalogoTipoParentesco }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://tempuri.org/", name = "ConsultaCatalogoParentescoResult", scope = ConsultaCatalogoParentescoResponse.class)
    public JAXBElement<CatalogoTipoParentesco> createConsultaCatalogoParentescoResponseConsultaCatalogoParentescoResult(CatalogoTipoParentesco value) {
        return new JAXBElement<CatalogoTipoParentesco>(_ConsultaCatalogoParentescoResponseConsultaCatalogoParentescoResult_QNAME, CatalogoTipoParentesco.class, ConsultaCatalogoParentescoResponse.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link AutenticacionRespuesta }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://tempuri.org/", name = "loginValidarSMSResult", scope = LoginValidarSMSResponse.class)
    public JAXBElement<AutenticacionRespuesta> createLoginValidarSMSResponseLoginValidarSMSResult(AutenticacionRespuesta value) {
        return new JAXBElement<AutenticacionRespuesta>(_LoginValidarSMSResponseLoginValidarSMSResult_QNAME, AutenticacionRespuesta.class, LoginValidarSMSResponse.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link RecuperaClaveRespuesta }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://tempuri.org/", name = "loginCambiarContraseniaResult", scope = LoginCambiarContraseniaResponse.class)
    public JAXBElement<RecuperaClaveRespuesta> createLoginCambiarContraseniaResponseLoginCambiarContraseniaResult(RecuperaClaveRespuesta value) {
        return new JAXBElement<RecuperaClaveRespuesta>(_LoginCambiarContraseniaResponseLoginCambiarContraseniaResult_QNAME, RecuperaClaveRespuesta.class, LoginCambiarContraseniaResponse.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link CatalogoCalcularRFC }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://tempuri.org/", name = "Calcula_RFCResult", scope = CalculaRFCResponse.class)
    public JAXBElement<CatalogoCalcularRFC> createCalculaRFCResponseCalculaRFCResult(CatalogoCalcularRFC value) {
        return new JAXBElement<CatalogoCalcularRFC>(_CalculaRFCResponseCalculaRFCResult_QNAME, CatalogoCalcularRFC.class, CalculaRFCResponse.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link Modulos }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://tempuri.org/", name = "ConsultaModulosResult", scope = ConsultaModulosResponse.class)
    public JAXBElement<Modulos> createConsultaModulosResponseConsultaModulosResult(Modulos value) {
        return new JAXBElement<Modulos>(_ConsultaModulosResponseConsultaModulosResult_QNAME, Modulos.class, ConsultaModulosResponse.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link String }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://tempuri.org/", name = "claveEstado", scope = ConsultaCatalogoMunicipio.class)
    public JAXBElement<String> createConsultaCatalogoMunicipioClaveEstado(String value) {
        return new JAXBElement<String>(_ConsultaCatalogoMunicipioClaveEstado_QNAME, String.class, ConsultaCatalogoMunicipio.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link CatalogoTipoDeporte }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://tempuri.org/", name = "ConsultaCatalogoTDeporteResult", scope = ConsultaCatalogoTDeporteResponse.class)
    public JAXBElement<CatalogoTipoDeporte> createConsultaCatalogoTDeporteResponseConsultaCatalogoTDeporteResult(CatalogoTipoDeporte value) {
        return new JAXBElement<CatalogoTipoDeporte>(_ConsultaCatalogoTDeporteResponseConsultaCatalogoTDeporteResult_QNAME, CatalogoTipoDeporte.class, ConsultaCatalogoTDeporteResponse.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link CatalogoOcupacionRepuestas }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://tempuri.org/", name = "ConsultaCatalogoOcupacionesResult", scope = ConsultaCatalogoOcupacionesResponse.class)
    public JAXBElement<CatalogoOcupacionRepuestas> createConsultaCatalogoOcupacionesResponseConsultaCatalogoOcupacionesResult(CatalogoOcupacionRepuestas value) {
        return new JAXBElement<CatalogoOcupacionRepuestas>(_ConsultaCatalogoOcupacionesResponseConsultaCatalogoOcupacionesResult_QNAME, CatalogoOcupacionRepuestas.class, ConsultaCatalogoOcupacionesResponse.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link String }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://tempuri.org/", name = "Password", scope = LoginNormal.class)
    public JAXBElement<String> createLoginNormalPassword(String value) {
        return new JAXBElement<String>(_LoginNormalPassword_QNAME, String.class, LoginNormal.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link String }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://tempuri.org/", name = "Usuario", scope = LoginNormal.class)
    public JAXBElement<String> createLoginNormalUsuario(String value) {
        return new JAXBElement<String>(_LoginNormalUsuario_QNAME, String.class, LoginNormal.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link CatalogoCPRespuestas }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://tempuri.org/", name = "ConsultaCatalogoPostalResult", scope = ConsultaCatalogoPostalResponse.class)
    public JAXBElement<CatalogoCPRespuestas> createConsultaCatalogoPostalResponseConsultaCatalogoPostalResult(CatalogoCPRespuestas value) {
        return new JAXBElement<CatalogoCPRespuestas>(_ConsultaCatalogoPostalResponseConsultaCatalogoPostalResult_QNAME, CatalogoCPRespuestas.class, ConsultaCatalogoPostalResponse.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ArrayOfPlanCotizar }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://tempuri.org/", name = "ConsultaCatalogoPlanesResult", scope = ConsultaCatalogoPlanesResponse.class)
    public JAXBElement<ArrayOfPlanCotizar> createConsultaCatalogoPlanesResponseConsultaCatalogoPlanesResult(ArrayOfPlanCotizar value) {
        return new JAXBElement<ArrayOfPlanCotizar>(_ConsultaCatalogoPlanesResponseConsultaCatalogoPlanesResult_QNAME, ArrayOfPlanCotizar.class, ConsultaCatalogoPlanesResponse.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link String }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://tempuri.org/", name = "codigo", scope = LoginValidarSMS.class)
    public JAXBElement<String> createLoginValidarSMSCodigo(String value) {
        return new JAXBElement<String>(_LoginValidarSMSCodigo_QNAME, String.class, LoginValidarSMS.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link String }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://tempuri.org/", name = "idCodigo", scope = LoginValidarSMS.class)
    public JAXBElement<String> createLoginValidarSMSIdCodigo(String value) {
        return new JAXBElement<String>(_LoginValidarSMSIdCodigo_QNAME, String.class, LoginValidarSMS.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link CatalogoCuestionarioMedico }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://tempuri.org/", name = "ConsultaCatalogoMedicoResult", scope = ConsultaCatalogoMedicoResponse.class)
    public JAXBElement<CatalogoCuestionarioMedico> createConsultaCatalogoMedicoResponseConsultaCatalogoMedicoResult(CatalogoCuestionarioMedico value) {
        return new JAXBElement<CatalogoCuestionarioMedico>(_ConsultaCatalogoMedicoResponseConsultaCatalogoMedicoResult_QNAME, CatalogoCuestionarioMedico.class, ConsultaCatalogoMedicoResponse.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link String }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://tempuri.org/", name = "CP", scope = ConsultaCatalogoPostal.class)
    public JAXBElement<String> createConsultaCatalogoPostalCP(String value) {
        return new JAXBElement<String>(_ConsultaCatalogoPostalCP_QNAME, String.class, ConsultaCatalogoPostal.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link CatalogoFrecuenciaBebida }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://tempuri.org/", name = "ConsultaCatalogoBebidaResult", scope = ConsultaCatalogoBebidaResponse.class)
    public JAXBElement<CatalogoFrecuenciaBebida> createConsultaCatalogoBebidaResponseConsultaCatalogoBebidaResult(CatalogoFrecuenciaBebida value) {
        return new JAXBElement<CatalogoFrecuenciaBebida>(_ConsultaCatalogoBebidaResponseConsultaCatalogoBebidaResult_QNAME, CatalogoFrecuenciaBebida.class, ConsultaCatalogoBebidaResponse.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link String }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://tempuri.org/", name = "materno", scope = LoginRegistro.class)
    public JAXBElement<String> createLoginRegistroMaterno(String value) {
        return new JAXBElement<String>(_LoginRegistroMaterno_QNAME, String.class, LoginRegistro.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link String }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://tempuri.org/", name = "contrasenia", scope = LoginRegistro.class)
    public JAXBElement<String> createLoginRegistroContrasenia(String value) {
        return new JAXBElement<String>(_LoginRegistroContrasenia_QNAME, String.class, LoginRegistro.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link String }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://tempuri.org/", name = "confirmarContrasenia", scope = LoginRegistro.class)
    public JAXBElement<String> createLoginRegistroConfirmarContrasenia(String value) {
        return new JAXBElement<String>(_LoginRegistroConfirmarContrasenia_QNAME, String.class, LoginRegistro.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link String }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://tempuri.org/", name = "nombre", scope = LoginRegistro.class)
    public JAXBElement<String> createLoginRegistroNombre(String value) {
        return new JAXBElement<String>(_LoginRegistroNombre_QNAME, String.class, LoginRegistro.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link String }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://tempuri.org/", name = "correo", scope = LoginRegistro.class)
    public JAXBElement<String> createLoginRegistroCorreo(String value) {
        return new JAXBElement<String>(_LoginRecuperaClaveCorreoCorreo_QNAME, String.class, LoginRegistro.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link String }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://tempuri.org/", name = "telefonoFijo", scope = LoginRegistro.class)
    public JAXBElement<String> createLoginRegistroTelefonoFijo(String value) {
        return new JAXBElement<String>(_LoginRegistroTelefonoFijo_QNAME, String.class, LoginRegistro.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link String }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://tempuri.org/", name = "telefonoCelular", scope = LoginRegistro.class)
    public JAXBElement<String> createLoginRegistroTelefonoCelular(String value) {
        return new JAXBElement<String>(_LoginRegistroTelefonoCelular_QNAME, String.class, LoginRegistro.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link String }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://tempuri.org/", name = "paterno", scope = LoginRegistro.class)
    public JAXBElement<String> createLoginRegistroPaterno(String value) {
        return new JAXBElement<String>(_LoginRegistroPaterno_QNAME, String.class, LoginRegistro.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link CatalogoFrecuenciaDeporte }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://tempuri.org/", name = "ConsultaCatalogoDeporteResult", scope = ConsultaCatalogoDeporteResponse.class)
    public JAXBElement<CatalogoFrecuenciaDeporte> createConsultaCatalogoDeporteResponseConsultaCatalogoDeporteResult(CatalogoFrecuenciaDeporte value) {
        return new JAXBElement<CatalogoFrecuenciaDeporte>(_ConsultaCatalogoDeporteResponseConsultaCatalogoDeporteResult_QNAME, CatalogoFrecuenciaDeporte.class, ConsultaCatalogoDeporteResponse.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link String }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://tempuri.org/", name = "PE_VC_CORREO", scope = FinalizaSesion.class)
    public JAXBElement<String> createFinalizaSesionPEVCCORREO(String value) {
        return new JAXBElement<String>(_FinalizaSesionPEVCCORREO_QNAME, String.class, FinalizaSesion.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link CatalogoEstadosRespuestas }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://tempuri.org/", name = "ConsultaCatalogoEstadosResult", scope = ConsultaCatalogoEstadosResponse.class)
    public JAXBElement<CatalogoEstadosRespuestas> createConsultaCatalogoEstadosResponseConsultaCatalogoEstadosResult(CatalogoEstadosRespuestas value) {
        return new JAXBElement<CatalogoEstadosRespuestas>(_ConsultaCatalogoEstadosResponseConsultaCatalogoEstadosResult_QNAME, CatalogoEstadosRespuestas.class, ConsultaCatalogoEstadosResponse.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link String }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://tempuri.org/", name = "claveEstado", scope = ConsultaCatalogoColonia.class)
    public JAXBElement<String> createConsultaCatalogoColoniaClaveEstado(String value) {
        return new JAXBElement<String>(_ConsultaCatalogoMunicipioClaveEstado_QNAME, String.class, ConsultaCatalogoColonia.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link String }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://tempuri.org/", name = "claveMunicipio", scope = ConsultaCatalogoColonia.class)
    public JAXBElement<String> createConsultaCatalogoColoniaClaveMunicipio(String value) {
        return new JAXBElement<String>(_ConsultaCatalogoColoniaClaveMunicipio_QNAME, String.class, ConsultaCatalogoColonia.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link CatalogoProductosRespuestas }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://tempuri.org/", name = "ConsultaCatalogoProductosResult", scope = ConsultaCatalogoProductosResponse.class)
    public JAXBElement<CatalogoProductosRespuestas> createConsultaCatalogoProductosResponseConsultaCatalogoProductosResult(CatalogoProductosRespuestas value) {
        return new JAXBElement<CatalogoProductosRespuestas>(_ConsultaCatalogoProductosResponseConsultaCatalogoProductosResult_QNAME, CatalogoProductosRespuestas.class, ConsultaCatalogoProductosResponse.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ClaseRespuesta }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://tempuri.org/", name = "FinalizaSesionResult", scope = FinalizaSesionResponse.class)
    public JAXBElement<ClaseRespuesta> createFinalizaSesionResponseFinalizaSesionResult(ClaseRespuesta value) {
        return new JAXBElement<ClaseRespuesta>(_FinalizaSesionResponseFinalizaSesionResult_QNAME, ClaseRespuesta.class, FinalizaSesionResponse.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link CatalogoCuestionarioConocimiento }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://tempuri.org/", name = "ConsultaCatalogoCuestionarioResult", scope = ConsultaCatalogoCuestionarioResponse.class)
    public JAXBElement<CatalogoCuestionarioConocimiento> createConsultaCatalogoCuestionarioResponseConsultaCatalogoCuestionarioResult(CatalogoCuestionarioConocimiento value) {
        return new JAXBElement<CatalogoCuestionarioConocimiento>(_ConsultaCatalogoCuestionarioResponseConsultaCatalogoCuestionarioResult_QNAME, CatalogoCuestionarioConocimiento.class, ConsultaCatalogoCuestionarioResponse.class, value);
    }

}
