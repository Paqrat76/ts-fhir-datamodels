/*
 * Copyright (c) 2025. Joe Paquette
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */

/**
 * This file is generated from a FHIR StructureDefinition.
 * DO NOT make any modifications!
 *
 * Endpoint Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/Endpoint
 * StructureDefinition.name: Endpoint
 * StructureDefinition.description: The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b or a REST endpoint for another FHIR server. This may include any security context information.
 * StructureDefinition.fhirVersion: 4.0.1
 *
 * For questions, suggestions, or bugs, please open an issue at [GitHub ts-fhir-datamodels/issues](https://github.com/Paqrat76/ts-fhir-datamodels/issues).
 *
 * @packageDocumentation
 */

import { strict as assert } from 'node:assert';
import {
  CodeType,
  DomainResource,
  EnumCodeType,
  FhirError,
  FhirParser,
  IDomainResource,
  INSTANCE_EMPTY_ERROR_MSG,
  JSON,
  PrimitiveType,
  PrimitiveTypeJson,
  REQUIRED_PROPERTIES_DO_NOT_EXIST,
  REQUIRED_PROPERTIES_REQD_IN_JSON,
  ReferenceTargets,
  StringType,
  UrlType,
  assertEnumCodeType,
  assertFhirType,
  assertFhirTypeList,
  assertIsDefined,
  assertIsDefinedList,
  constructorCodeValueAsEnumCodeType,
  copyListValues,
  fhirCode,
  fhirCodeSchema,
  fhirString,
  fhirStringSchema,
  fhirUrl,
  fhirUrlSchema,
  getPrimitiveTypeJson,
  getPrimitiveTypeListJson,
  isDefined,
  isDefinedList,
  isElementEmpty,
  isEmpty,
  parseFhirPrimitiveData,
  setFhirComplexJson,
  setFhirComplexListJson,
  setFhirPrimitiveJson,
  setFhirPrimitiveListJson,
} from '@paq-ts-fhir/fhir-core';
import { CodeableConcept, Coding, ContactPoint, Identifier, PARSABLE_DATATYPE_MAP, Period, Reference } from '../complex-types/complex-datatypes';
import { EndpointStatusEnum } from '../code-systems/EndpointStatusEnum';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';

/**
 * Endpoint Class
 *
 * @remarks
 * The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b or a REST endpoint for another FHIR server. This may include any security context information.
 *
 * **FHIR Specification**
 * - **Short:** The technical details of an endpoint that can be used for electronic services
 * - **Definition:** The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b or a REST endpoint for another FHIR server. This may include any security context information.
 * - **FHIR Version:** 4.0.1
 *
 * @category Data Models: Resource
 * @see [FHIR Endpoint](http://hl7.org/fhir/StructureDefinition/Endpoint)
 */
export class Endpoint extends DomainResource implements IDomainResource {
  constructor(status: EnumCodeType | CodeType | fhirCode | null = null, connectionType: Coding | null = null, payloadType: CodeableConcept[] | null = null, address: UrlType | fhirUrl | null = null) {
    super();

    this.endpointStatusEnum = new EndpointStatusEnum();

    this.status = constructorCodeValueAsEnumCodeType<EndpointStatusEnum>(
      status,
      EndpointStatusEnum,
      this.endpointStatusEnum,
      'Endpoint.status',
    );

    this.connectionType = null;
    if (isDefined<Coding>(connectionType)) {
      this.setConnectionType(connectionType);
    }

    this.payloadType = null;
    if (isDefinedList<CodeableConcept>(payloadType)) {
      this.setPayloadType(payloadType);
    }

    this.address = null;
    if (isDefined<UrlType | fhirUrl>(address)) {
      if (address instanceof PrimitiveType) {
        this.setAddressElement(address);
      } else {
        this.setAddress(address);
      }
    }
  }

  /**
   * Parse the provided `Endpoint` JSON to instantiate the Endpoint data model.
   *
   * @param sourceJson - JSON representing FHIR `Endpoint`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to Endpoint
   * @returns Endpoint data model or undefined for `Endpoint`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): Endpoint | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'Endpoint';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new Endpoint();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'Endpoint');
    fhirParser.processDomainResourceJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const missingReqdProperties: string[] = [];

    fieldName = 'identifier';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Identifier | undefined = Identifier.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addIdentifier(datatype);
        }
      });
    }

    fieldName = 'status';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setStatusElement(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'connectionType';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Coding | undefined = Coding.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setConnectionType(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'name';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setNameElement(datatype);
    }

    fieldName = 'managingOrganization';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setManagingOrganization(datatype);
    }

    fieldName = 'contact';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: ContactPoint | undefined = ContactPoint.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addContact(datatype);
        }
      });
    }

    fieldName = 'period';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Period | undefined = Period.parse(classJsonObj[fieldName]!, sourceField);
      instance.setPeriod(datatype);
    }

    fieldName = 'payloadType';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype === undefined) {
          missingReqdProperties.push(`${sourceField}[${String(idx)}]`);
        } else {
          instance.addPayloadType(datatype);
        }
      });
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'payloadMimeType';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const dataJsonArray: PrimitiveTypeJson[] = getPrimitiveTypeListJson(
        classJsonObj,
        sourceField,
        fieldName,
        primitiveJsonType,
      );
      dataJsonArray.forEach((dataJson: PrimitiveTypeJson) => {
        const datatype: CodeType | undefined = fhirParser.parseCodeType(dataJson.dtJson, dataJson.dtSiblingJson);
        if (datatype !== undefined) {
          instance.addPayloadMimeTypeElement(datatype);
        }
      });
    }

    fieldName = 'address';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: UrlType | undefined = fhirParser.parseUrlType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setAddressElement(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'header';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const dataJsonArray: PrimitiveTypeJson[] = getPrimitiveTypeListJson(
        classJsonObj,
        sourceField,
        fieldName,
        primitiveJsonType,
      );
      dataJsonArray.forEach((dataJson: PrimitiveTypeJson) => {
        const datatype: StringType | undefined = fhirParser.parseStringType(dataJson.dtJson, dataJson.dtSiblingJson);
        if (datatype !== undefined) {
          instance.addHeaderElement(datatype);
        }
      });
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_REQD_IN_JSON} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * Endpoint.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Identifies this endpoint across multiple systems
   * - **Definition:** Identifier for the organization that is used to identify the endpoint across multiple disparate systems.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier[] | undefined;

  /**
   * FHIR CodeSystem: EndpointStatus
   *
   * @see {@link EndpointStatusEnum }
   */
  private readonly endpointStatusEnum: EndpointStatusEnum;

  /**
   * Endpoint.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** active | suspended | error | off | entered-in-error | test
   * - **Definition:** active | suspended | error | off | test.
   * - **Comment:** This element is labeled as a modifier because the status contains codes that mark the endpoint as not currently valid.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** true
   * - **isModifierReason:** This element is labelled as a modifier because it is a status element that contains status entered-in-error which means that the resource should not be treated as valid
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link EndpointStatusEnum }
   */
  private status: EnumCodeType | null;

  /**
   * Endpoint.connectionType Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Protocol/Profile/Standard to be used with this endpoint connection
   * - **Definition:** A coded value that represents the technical details of the usage of this endpoint, such as what WSDLs should be used in what way. (e.g. XDS.b/DICOM/cds-hook).
   * - **Comment:** For additional connectivity details for the protocol, extensions will be used at this point, as in the XDS example.
   * - **FHIR Type:** `Coding`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private connectionType: Coding | null;

  /**
   * Endpoint.name Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A name that this endpoint can be identified by
   * - **Definition:** A friendly name that this endpoint can be referred to with.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private name?: StringType | undefined;

  /**
   * Endpoint.managingOrganization Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Organization that manages this endpoint (might not be the organization that exposes the endpoint)
   * - **Definition:** The organization that manages this endpoint (even if technically another organization is hosting this in the cloud, it is the organization associated with the data).
   * - **Comment:** This property is not typically used when searching for Endpoint resources for usage. The typical usage is via the reference from an applicable Organization/Location/Practitioner resource, which is where the context is provided. Multiple Locations may reference a single endpoint, and don\'t have to be within the same organization resource, but most likely within the same organizational hierarchy.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private managingOrganization?: Reference | undefined;

  /**
   * Endpoint.contact Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Contact details for source (e.g. troubleshooting)
   * - **Definition:** Contact details for a human to contact about the subscription. The primary use of this for system administrator troubleshooting.
   * - **FHIR Type:** `ContactPoint`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private contact?: ContactPoint[] | undefined;

  /**
   * Endpoint.period Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Interval the endpoint is expected to be operational
   * - **Definition:** The interval during which the endpoint is expected to be operational.
   * - **FHIR Type:** `Period`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private period?: Period | undefined;

  /**
   * Endpoint.payloadType Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The type of content that may be used at this endpoint (e.g. XDS Discharge summaries)
   * - **Definition:** The payload type describes the acceptable content that can be communicated on the endpoint.
   * - **Comment:** The payloadFormat describes the serialization format of the data, where the payloadType indicates the specific document/schema that is being transferred; e.g. DischargeSummary or CarePlan.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private payloadType: CodeableConcept[] | null;

  /**
   * Endpoint.payloadMimeType Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Mimetype to send. If not specified, the content could be anything (including no payload, if the connectionType defined this)
   * - **Definition:** The mime type to send the payload in - e.g. application/fhir+xml, application/fhir+json. If the mime type is not specified, then the sender could send any content (including no content depending on the connectionType).
   * - **Comment:** Sending the payload has obvious security consequences. The server is responsible for ensuring that the content is appropriately secured.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private payloadMimeType?: CodeType[] | undefined;

  /**
   * Endpoint.address Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The technical base address for connecting to this endpoint
   * - **Definition:** The uri that describes the actual end-point to connect to.
   * - **Comment:** For rest-hook, and websocket, the end-point must be an http: or https: URL; for email, a mailto: url, for sms, a tel: url, and for message the endpoint can be in any form of url the server understands (usually, http: or mllp:). The URI is allowed to be relative; in which case, it is relative to the server end-point (since there may be more than one, clients should avoid using relative URIs) This address will be to the service base, without any parameters, or sub-services or resources tacked on. E.g. for a WADO-RS endpoint, the url should be "https://pacs.hospital.org/wado-rs" and not "https://pacs.hospital.org/wado-rs/studies/1.2.250.1.59.40211.12345678.678910/series/1.2.250.1.59.40211.789001276.14556172.67789/instances/...".
   * - **FHIR Type:** `url`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private address: UrlType | null;

  /**
   * Endpoint.header Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Usage depends on the channel type
   * - **Definition:** Additional headers / information to send as part of the notification.
   * - **Comment:** Exactly what these mean depends on the channel type. The can convey additional information to the recipient and/or meet security requirements.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private header?: StringType[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `identifier` property value as a Identifier array
   */
  public getIdentifier(): Identifier[] {
    return this.identifier ?? ([] as Identifier[]);
  }

  /**
   * Assigns the provided Identifier array value to the `identifier` property.
   *
   * @param value - the `identifier` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setIdentifier(value: Identifier[] | undefined): this {
    if (isDefinedList<Identifier>(value)) {
      const optErrMsg = `Invalid Endpoint.identifier; Provided value array has an element that is not an instance of Identifier.`;
      assertFhirTypeList<Identifier>(value, Identifier, optErrMsg);
      this.identifier = value;
    } else {
      this.identifier = undefined;
    }
    return this;
  }

  /**
   * Add the provided Identifier value to the `identifier` array property.
   *
   * @param value - the `identifier` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addIdentifier(value: Identifier | undefined): this {
    if (isDefined<Identifier>(value)) {
      const optErrMsg = `Invalid Endpoint.identifier; Provided element is not an instance of Identifier.`;
      assertFhirType<Identifier>(value, Identifier, optErrMsg);
      this.initIdentifier();
      this.identifier?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `identifier` property exists and has a value; `false` otherwise
   */
  public hasIdentifier(): boolean {
    return isDefinedList<Identifier>(this.identifier) && this.identifier.some((item: Identifier) => !item.isEmpty());
  }

  /**
   * Initialize the `identifier` property
   */
  private initIdentifier(): void {
    if(!this.hasIdentifier()) {
      this.identifier = [] as Identifier[];
    }
  }

  /**
   * @returns the `status` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link EndpointStatusEnum }
   */
  public getStatusEnumType(): EnumCodeType | null {
    return this.status;
  }

  /**
   * Assigns the provided EnumCodeType value to the `status` property.
   *
   * @param enumType - the `status` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link EndpointStatusEnum }
   */
  public setStatusEnumType(enumType: EnumCodeType): this {
    assertIsDefined<EnumCodeType>(enumType, `Endpoint.status is required`);
    const errMsgPrefix = `Invalid Endpoint.status`;
    assertEnumCodeType<EndpointStatusEnum>(enumType, EndpointStatusEnum, errMsgPrefix);
    this.status = enumType;
    return this;
  }

  /**
   * @returns `true` if the `status` property exists and has a value; `false` otherwise
   */
  public hasStatusEnumType(): boolean {
    return isDefined<EnumCodeType>(this.status) && !this.status.isEmpty() && this.status.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `status` property value as a CodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link EndpointStatusEnum }
   */
  public getStatusElement(): CodeType | null {
    if (this.status === null) {
      return null;
    }
    return this.status as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `status` property.
   *
   * @param element - the `status` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link EndpointStatusEnum }
   */
  public setStatusElement(element: CodeType): this {
    assertIsDefined<CodeType>(element, `Endpoint.status is required`);
    const optErrMsg = `Invalid Endpoint.status; Provided value is not an instance of CodeType.`;
    assertFhirType<CodeType>(element, CodeType, optErrMsg);
    this.status = new EnumCodeType(element, this.endpointStatusEnum);
    return this;
  }

  /**
   * @returns `true` if the `status` property exists and has a value; `false` otherwise
   */
  public hasStatusElement(): boolean {
    return this.hasStatusEnumType();
  }

  /**
   * @returns the `status` property value as a fhirCode if defined; else null
   *
   * @see CodeSystem Enumeration: {@link EndpointStatusEnum }
   */
  public getStatus(): fhirCode | null {
    if (this.status === null) {
      return null;
    }
    return this.status.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `status` property.
   *
   * @param value - the `status` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link EndpointStatusEnum }
   */
  public setStatus(value: fhirCode): this {
    assertIsDefined<fhirCode>(value, `Endpoint.status is required`);
    const optErrMsg = `Invalid Endpoint.status (${String(value)})`;
    this.status = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.endpointStatusEnum);
    return this;
  }

  /**
   * @returns `true` if the `status` property exists and has a value; `false` otherwise
   */
  public hasStatus(): boolean {
    return this.hasStatusEnumType();
  }

  /**
   * @returns the `connectionType` property value as a Coding object if defined; else null
   */
  public getConnectionType(): Coding | null {
    return this.connectionType;
  }

  /**
   * Assigns the provided Coding object value to the `connectionType` property.
   *
   * @param value - the `connectionType` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setConnectionType(value: Coding): this {
    assertIsDefined<Coding>(value, `Endpoint.connectionType is required`);
    const optErrMsg = `Invalid Endpoint.connectionType; Provided element is not an instance of Coding.`;
    assertFhirType<Coding>(value, Coding, optErrMsg);
    this.connectionType = value;
    return this;
  }

  /**
   * @returns `true` if the `connectionType` property exists and has a value; `false` otherwise
   */
  public hasConnectionType(): boolean {
    return isDefined<Coding>(this.connectionType) && !this.connectionType.isEmpty();
  }

  /**
   * @returns the `name` property value as a StringType object if defined; else an empty StringType object
   */
  public getNameElement(): StringType {
    return this.name ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `name` property.
   *
   * @param element - the `name` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setNameElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid Endpoint.name; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.name = element;
    } else {
      this.name = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `name` property exists and has a value; `false` otherwise
   */
  public hasNameElement(): boolean {
    return isDefined<StringType>(this.name) && !this.name.isEmpty();
  }

  /**
   * @returns the `name` property value as a fhirString if defined; else undefined
   */
  public getName(): fhirString | undefined {
    return this.name?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `name` property.
   *
   * @param value - the `name` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setName(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid Endpoint.name (${String(value)})`;
      this.name = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.name = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `name` property exists and has a value; `false` otherwise
   */
  public hasName(): boolean {
    return this.hasNameElement();
  }

  /**
   * @returns the `managingOrganization` property value as a Reference object; else an empty Reference object
   */
  public getManagingOrganization(): Reference {
    return this.managingOrganization ?? new Reference();
  }

  /**
   * Assigns the provided ManagingOrganization object value to the `managingOrganization` property.
   *
   * @decorator `@ReferenceTargets('Endpoint.managingOrganization', ['Organization',])`
   *
   * @param value - the `managingOrganization` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Endpoint.managingOrganization', [
    'Organization',
  ])
  public setManagingOrganization(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.managingOrganization = value;
    } else {
      this.managingOrganization = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `managingOrganization` property exists and has a value; `false` otherwise
   */
  public hasManagingOrganization(): boolean {
    return isDefined<Reference>(this.managingOrganization) && !this.managingOrganization.isEmpty();
  }

  /**
   * @returns the `contact` property value as a ContactPoint array
   */
  public getContact(): ContactPoint[] {
    return this.contact ?? ([] as ContactPoint[]);
  }

  /**
   * Assigns the provided ContactPoint array value to the `contact` property.
   *
   * @param value - the `contact` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setContact(value: ContactPoint[] | undefined): this {
    if (isDefinedList<ContactPoint>(value)) {
      const optErrMsg = `Invalid Endpoint.contact; Provided value array has an element that is not an instance of ContactPoint.`;
      assertFhirTypeList<ContactPoint>(value, ContactPoint, optErrMsg);
      this.contact = value;
    } else {
      this.contact = undefined;
    }
    return this;
  }

  /**
   * Add the provided ContactPoint value to the `contact` array property.
   *
   * @param value - the `contact` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addContact(value: ContactPoint | undefined): this {
    if (isDefined<ContactPoint>(value)) {
      const optErrMsg = `Invalid Endpoint.contact; Provided element is not an instance of ContactPoint.`;
      assertFhirType<ContactPoint>(value, ContactPoint, optErrMsg);
      this.initContact();
      this.contact?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `contact` property exists and has a value; `false` otherwise
   */
  public hasContact(): boolean {
    return isDefinedList<ContactPoint>(this.contact) && this.contact.some((item: ContactPoint) => !item.isEmpty());
  }

  /**
   * Initialize the `contact` property
   */
  private initContact(): void {
    if(!this.hasContact()) {
      this.contact = [] as ContactPoint[];
    }
  }

  /**
   * @returns the `period` property value as a Period object if defined; else an empty Period object
   */
  public getPeriod(): Period {
    return this.period ?? new Period();
  }

  /**
   * Assigns the provided Period object value to the `period` property.
   *
   * @param value - the `period` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPeriod(value: Period | undefined): this {
    if (isDefined<Period>(value)) {
      const optErrMsg = `Invalid Endpoint.period; Provided element is not an instance of Period.`;
      assertFhirType<Period>(value, Period, optErrMsg);
      this.period = value;
    } else {
      this.period = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `period` property exists and has a value; `false` otherwise
   */
  public hasPeriod(): boolean {
    return isDefined<Period>(this.period) && !this.period.isEmpty();
  }

  /**
   * @returns the `payloadType` property value as a CodeableConcept array
   */
  public getPayloadType(): CodeableConcept[] {
    return this.payloadType ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `payloadType` property.
   *
   * @param value - the `payloadType` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPayloadType(value: CodeableConcept[]): this {
    assertIsDefinedList<CodeableConcept>(value, `Endpoint.payloadType is required`);
    const optErrMsg = `Invalid Endpoint.payloadType; Provided value array has an element that is not an instance of CodeableConcept.`;
    assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
    this.payloadType = value;
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `payloadType` array property.
   *
   * @param value - the `payloadType` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addPayloadType(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Endpoint.payloadType; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initPayloadType();
      this.payloadType?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `payloadType` property exists and has a value; `false` otherwise
   */
  public hasPayloadType(): boolean {
    return isDefinedList<CodeableConcept>(this.payloadType) && this.payloadType.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `payloadType` property
   */
  private initPayloadType(): void {
    if(!this.hasPayloadType()) {
      this.payloadType = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `payloadMimeType` property value as a CodeType array
   */
  public getPayloadMimeTypeElement(): CodeType[] {
    return this.payloadMimeType ?? ([] as CodeType[]);
  }

  /**
   * Assigns the provided CodeType array value to the `payloadMimeType` property.
   *
   * @param element - the `payloadMimeType` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPayloadMimeTypeElement(element: CodeType[] | undefined): this {
    if (isDefinedList<CodeType>(element)) {
      const optErrMsg = `Invalid Endpoint.payloadMimeType; Provided value array has an element that is not an instance of CodeType.`;
      assertFhirTypeList<CodeType>(element, CodeType, optErrMsg);
      this.payloadMimeType = element;
    } else {
      this.payloadMimeType = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeType value to the `payloadMimeType` array property.
   *
   * @param element - the `payloadMimeType` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addPayloadMimeTypeElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid Endpoint.payloadMimeType; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.initPayloadMimeType();
      this.payloadMimeType?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `payloadMimeType` property exists and has a value; `false` otherwise
   */
  public hasPayloadMimeTypeElement(): boolean {
    return isDefinedList<CodeType>(this.payloadMimeType) && this.payloadMimeType.some((item: CodeType) => !item.isEmpty());
  }

  /**
   * @returns the `payloadMimeType` property value as a fhirCode array
   */
  public getPayloadMimeType(): fhirCode[] {
    this.initPayloadMimeType();
    const payloadMimeTypeValues = [] as fhirCode[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.payloadMimeType!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        payloadMimeTypeValues.push(value);
      }
    }
    return payloadMimeTypeValues;
  }

  /**
   * Assigns the provided primitive value array to the `payloadMimeType` property.
   *
   * @param value - the `payloadMimeType` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPayloadMimeType(value: fhirCode[] | undefined): this {
    if (isDefinedList<fhirCode>(value)) {
      const payloadMimeTypeElements = [] as CodeType[];
      for (const payloadMimeTypeValue of value) {
        const optErrMsg = `Invalid Endpoint.payloadMimeType array item (${String(payloadMimeTypeValue)})`;
        const element = new CodeType(parseFhirPrimitiveData(payloadMimeTypeValue, fhirCodeSchema, optErrMsg));
        payloadMimeTypeElements.push(element);
      }
      this.payloadMimeType = payloadMimeTypeElements;
    } else {
      this.payloadMimeType = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `payloadMimeType` array property.
   *
   * @param value - the `payloadMimeType` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addPayloadMimeType(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid Endpoint.payloadMimeType array item (${String(value)})`;
      const element = new CodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg));
      this.initPayloadMimeType();
      this.addPayloadMimeTypeElement(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `payloadMimeType` property exists and has a value; `false` otherwise
   */
  public hasPayloadMimeType(): boolean {
    return this.hasPayloadMimeTypeElement();
  }

  /**
   * Initialize the `payloadMimeType` property
   */
  private initPayloadMimeType(): void {
    if (!this.hasPayloadMimeType()) {
      this.payloadMimeType = [] as CodeType[];
    }
  }

  /**
   * @returns the `address` property value as a UrlType object if defined; else null
   */
  public getAddressElement(): UrlType | null {
    return this.address;
  }

  /**
   * Assigns the provided PrimitiveType value to the `address` property.
   *
   * @param element - the `address` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAddressElement(element: UrlType): this {
    assertIsDefined<UrlType>(element, `Endpoint.address is required`);
    const optErrMsg = `Invalid Endpoint.address; Provided value is not an instance of UrlType.`;
    assertFhirType<UrlType>(element, UrlType, optErrMsg);
    this.address = element;
    return this;
  }

  /**
   * @returns `true` if the `address` property exists and has a value; `false` otherwise
   */
  public hasAddressElement(): boolean {
    return isDefined<UrlType>(this.address) && !this.address.isEmpty();
  }

  /**
   * @returns the `address` property value as a fhirUrl if defined; else null
   */
  public getAddress(): fhirUrl | null {
    if (this.address?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.address.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `address` property.
   *
   * @param value - the `address` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAddress(value: fhirUrl): this {
    assertIsDefined<fhirUrl>(value, `Endpoint.address is required`);
    const optErrMsg = `Invalid Endpoint.address (${String(value)})`;
    this.address = new UrlType(parseFhirPrimitiveData(value, fhirUrlSchema, optErrMsg));
    return this;
  }

  /**
   * @returns `true` if the `address` property exists and has a value; `false` otherwise
   */
  public hasAddress(): boolean {
    return this.hasAddressElement();
  }

  /**
   * @returns the `header` property value as a StringType array
   */
  public getHeaderElement(): StringType[] {
    return this.header ?? ([] as StringType[]);
  }

  /**
   * Assigns the provided StringType array value to the `header` property.
   *
   * @param element - the `header` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setHeaderElement(element: StringType[] | undefined): this {
    if (isDefinedList<StringType>(element)) {
      const optErrMsg = `Invalid Endpoint.header; Provided value array has an element that is not an instance of StringType.`;
      assertFhirTypeList<StringType>(element, StringType, optErrMsg);
      this.header = element;
    } else {
      this.header = undefined;
    }
    return this;
  }

  /**
   * Add the provided StringType value to the `header` array property.
   *
   * @param element - the `header` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addHeaderElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid Endpoint.header; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.initHeader();
      this.header?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `header` property exists and has a value; `false` otherwise
   */
  public hasHeaderElement(): boolean {
    return isDefinedList<StringType>(this.header) && this.header.some((item: StringType) => !item.isEmpty());
  }

  /**
   * @returns the `header` property value as a fhirString array
   */
  public getHeader(): fhirString[] {
    this.initHeader();
    const headerValues = [] as fhirString[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.header!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        headerValues.push(value);
      }
    }
    return headerValues;
  }

  /**
   * Assigns the provided primitive value array to the `header` property.
   *
   * @param value - the `header` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setHeader(value: fhirString[] | undefined): this {
    if (isDefinedList<fhirString>(value)) {
      const headerElements = [] as StringType[];
      for (const headerValue of value) {
        const optErrMsg = `Invalid Endpoint.header array item (${String(headerValue)})`;
        const element = new StringType(parseFhirPrimitiveData(headerValue, fhirStringSchema, optErrMsg));
        headerElements.push(element);
      }
      this.header = headerElements;
    } else {
      this.header = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `header` array property.
   *
   * @param value - the `header` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addHeader(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid Endpoint.header array item (${String(value)})`;
      const element = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
      this.initHeader();
      this.addHeaderElement(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `header` property exists and has a value; `false` otherwise
   */
  public hasHeader(): boolean {
    return this.hasHeaderElement();
  }

  /**
   * Initialize the `header` property
   */
  private initHeader(): void {
    if (!this.hasHeader()) {
      this.header = [] as StringType[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Endpoint';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identifier,
      this.status,
      this.connectionType,
      this.name,
      this.managingOrganization,
      this.contact,
      this.period,
      this.payloadType,
      this.payloadMimeType,
      this.address,
      this.header,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): Endpoint {
    const dest = new Endpoint();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: Endpoint): void {
    super.copyValues(dest);
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    dest.status = this.status ? this.status.copy() : null;
    dest.connectionType = this.connectionType ? this.connectionType.copy() : null;
    dest.name = this.name?.copy();
    dest.managingOrganization = this.managingOrganization?.copy();
    const contactList = copyListValues<ContactPoint>(this.contact);
    dest.contact = contactList.length === 0 ? undefined : contactList;
    dest.period = this.period?.copy();
    const payloadTypeList = copyListValues<CodeableConcept>(this.payloadType);
    dest.payloadType = payloadTypeList.length === 0 ? null : payloadTypeList;
    const payloadMimeTypeList = copyListValues<CodeType>(this.payloadMimeType);
    dest.payloadMimeType = payloadMimeTypeList.length === 0 ? undefined : payloadMimeTypeList;
    dest.address = this.address ? this.address.copy() : null;
    const headerList = copyListValues<StringType>(this.header);
    dest.header = headerList.length === 0 ? undefined : headerList;
  }

  /**
   * @returns the JSON value or undefined if the instance is empty
   * @throws {@link FhirError} if the instance is missing required properties
   */
  public override toJSON(): JSON.Value | undefined {
    // Required class properties exist (have a min cardinality > 0); therefore, do not check for this.isEmpty()!

    let jsonObj = super.toJSON() as JSON.Object | undefined;
    jsonObj ??= {} as JSON.Object;

    const missingReqdProperties: string[] = [];

    if (this.hasIdentifier()) {
      setFhirComplexListJson(this.getIdentifier(), 'identifier', jsonObj);
    }

    if (this.hasStatusElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getStatusElement()!, 'status', jsonObj);
    } else {
      missingReqdProperties.push(`Endpoint.status`);
    }

    if (this.hasConnectionType()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getConnectionType()!, 'connectionType', jsonObj);
    } else {
      missingReqdProperties.push(`Endpoint.connectionType`);
    }

    if (this.hasNameElement()) {
      setFhirPrimitiveJson<fhirString>(this.getNameElement(), 'name', jsonObj);
    }

    if (this.hasManagingOrganization()) {
      setFhirComplexJson(this.getManagingOrganization(), 'managingOrganization', jsonObj);
    }

    if (this.hasContact()) {
      setFhirComplexListJson(this.getContact(), 'contact', jsonObj);
    }

    if (this.hasPeriod()) {
      setFhirComplexJson(this.getPeriod(), 'period', jsonObj);
    }

    if (this.hasPayloadType()) {
      setFhirComplexListJson(this.getPayloadType(), 'payloadType', jsonObj);
    } else {
      missingReqdProperties.push(`Endpoint.payloadType`);
    }

    if (this.hasPayloadMimeType()) {
      setFhirPrimitiveListJson(this.getPayloadMimeTypeElement(), 'payloadMimeType', jsonObj);
    }

    if (this.hasAddressElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirUrl>(this.getAddressElement()!, 'address', jsonObj);
    } else {
      missingReqdProperties.push(`Endpoint.address`);
    }

    if (this.hasHeader()) {
      setFhirPrimitiveListJson(this.getHeaderElement(), 'header', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}

