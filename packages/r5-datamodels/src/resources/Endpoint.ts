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
 * StructureDefinition.description: The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b, a REST endpoint for another FHIR server, or a s/Mime email address. This may include any security context information.
 * StructureDefinition.fhirVersion: 5.0.0
 *
 * For questions, suggestions, or bugs, please open an issue at [GitHub ts-fhir-datamodels/issues](https://github.com/Paqrat76/ts-fhir-datamodels/issues).
 *
 * @packageDocumentation
 */

import {
  BackboneElement,
  CodeType,
  DomainResource,
  EnumCodeType,
  FhirParser,
  IBackboneElement,
  IDomainResource,
  JSON,
  PrimitiveType,
  PrimitiveTypeJson,
  ReferenceTargets,
  StringType,
  UrlType,
  assertEnumCodeType,
  assertFhirType,
  assertFhirTypeList,
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
  isRequiredElementEmpty,
  parseFhirPrimitiveData,
  setFhirBackboneElementListJson,
  setFhirComplexJson,
  setFhirComplexListJson,
  setFhirPrimitiveJson,
  setFhirPrimitiveListJson,
} from '@paq-ts-fhir/fhir-core';
import { CodeableConcept, ContactPoint, Identifier, PARSABLE_DATATYPE_MAP, Period, Reference } from '../complex-types/complex-datatypes';
import { EndpointStatusEnum } from '../code-systems/EndpointStatusEnum';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';

/**
 * Endpoint Class
 *
 * @remarks
 * The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b, a REST endpoint for another FHIR server, or a s/Mime email address. This may include any security context information.
 *
 * **FHIR Specification**
 * - **Short:** The technical details of an endpoint that can be used for electronic services
 * - **Definition:** The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b, a REST endpoint for another FHIR server, or a s/Mime email address. This may include any security context information.
 * - **FHIR Version:** 5.0.0
 *
 * @category Data Models: Resource
 * @see [FHIR Endpoint](http://hl7.org/fhir/StructureDefinition/Endpoint)
 */
export class Endpoint extends DomainResource implements IDomainResource {
  constructor(status: EnumCodeType | CodeType | fhirCode | null = null, connectionType: CodeableConcept[] | null = null, address: UrlType | fhirUrl | null = null) {
    super();

    this.endpointStatusEnum = new EndpointStatusEnum();

    this.status = constructorCodeValueAsEnumCodeType<EndpointStatusEnum>(
      status,
      EndpointStatusEnum,
      this.endpointStatusEnum,
      'Endpoint.status',
    );

    this.connectionType = null;
    if (isDefinedList<CodeableConcept>(connectionType)) {
      this.setConnectionType(connectionType);
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
        instance.setStatus(null);
      } else {
        instance.setStatusElement(datatype);
      }
    } else {
      instance.setStatus(null);
    }

    fieldName = 'connectionType';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype === undefined) {
          instance.setConnectionType(null);
        } else {
          instance.addConnectionType(datatype);
        }
      });
    } else {
      instance.setConnectionType(null);
    }

    fieldName = 'name';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setNameElement(datatype);
    }

    fieldName = 'description';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setDescriptionElement(datatype);
    }

    fieldName = 'environmentType';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addEnvironmentType(datatype);
        }
      });
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

    fieldName = 'payload';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: EndpointPayloadComponent | undefined = EndpointPayloadComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addPayload(component);
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
        instance.setAddress(null);
      } else {
        instance.setAddressElement(datatype);
      }
    } else {
      instance.setAddress(null);
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
   * - **Definition:** The endpoint status represents the general expected availability of an endpoint.
   * - **Comment:** This element is labeled as a modifier because the status contains codes that mark the endpoint as not currently valid. Temporary downtimes or other unexpected short-term changes in availability would not be represented in this property.
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
   * - **Comment:** For additional connectivity details for the protocol, extensions will be used at this point, as in the XDS example. If there are multiple payload types or mimetypes they are all applicable for all connection types, and all have the same status.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private connectionType: CodeableConcept[] | null;

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
   * Endpoint.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Additional details about the endpoint that could be displayed as further information to identify the description beyond its name
   * - **Definition:** The description of the endpoint and what it is for (typically used as supplemental information in an endpoint directory describing its usage/purpose).
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private description?: StringType | undefined;

  /**
   * Endpoint.environmentType Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The type of environment(s) exposed at this endpoint
   * - **Definition:** The type of environment(s) exposed at this endpoint (dev, prod, test, etc.).
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private environmentType?: CodeableConcept[] | undefined;

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
   * - **Definition:** Contact details for a human to contact about the endpoint. The primary use of this for system administrator troubleshooting.
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
   * - **Comment:** Temporary downtimes or other short-term changes in availability would not be represented in this property.
   * - **FHIR Type:** `Period`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private period?: Period | undefined;

  /**
   * Endpoint.payload Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Set of payloads that are provided by this endpoint
   * - **Definition:** The set of payloads that are provided/available at this endpoint.
   * - **Comment:** Note that not all mimetypes or types will be listed under the one endpoint resource, there may be multiple instances that information for cases where other header data such as the endpoint address, active status/period etc. is different.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private payload?: EndpointPayloadComponent[] | undefined;

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
  public setStatusEnumType(enumType: EnumCodeType | undefined | null): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid Endpoint.status`;
      assertEnumCodeType<EndpointStatusEnum>(enumType, EndpointStatusEnum, errMsgPrefix);
      this.status = enumType;
    } else {
      this.status = null;
    }
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
  public setStatusElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid Endpoint.status; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.status = new EnumCodeType(element, this.endpointStatusEnum);
    } else {
      this.status = null;
    }
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
  public setStatus(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid Endpoint.status (${String(value)})`;
      this.status = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.endpointStatusEnum);
    } else {
      this.status = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `status` property exists and has a value; `false` otherwise
   */
  public hasStatus(): boolean {
    return this.hasStatusEnumType();
  }

  /**
   * @returns the `connectionType` property value as a CodeableConcept array
   */
  public getConnectionType(): CodeableConcept[] {
    return this.connectionType ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `connectionType` property.
   *
   * @param value - the `connectionType` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setConnectionType(value: CodeableConcept[] | undefined | null): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Endpoint.connectionType; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.connectionType = value;
    } else {
      this.connectionType = null;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `connectionType` array property.
   *
   * @param value - the `connectionType` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addConnectionType(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Endpoint.connectionType; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initConnectionType();
      this.connectionType?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `connectionType` property exists and has a value; `false` otherwise
   */
  public hasConnectionType(): boolean {
    return isDefinedList<CodeableConcept>(this.connectionType) && this.connectionType.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `connectionType` property
   */
  private initConnectionType(): void {
    if(!this.hasConnectionType()) {
      this.connectionType = [] as CodeableConcept[];
    }
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
   * @returns the `description` property value as a StringType object if defined; else an empty StringType object
   */
  public getDescriptionElement(): StringType {
    return this.description ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `description` property.
   *
   * @param element - the `description` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDescriptionElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid Endpoint.description; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.description = element;
    } else {
      this.description = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `description` property exists and has a value; `false` otherwise
   */
  public hasDescriptionElement(): boolean {
    return isDefined<StringType>(this.description) && !this.description.isEmpty();
  }

  /**
   * @returns the `description` property value as a fhirString if defined; else undefined
   */
  public getDescription(): fhirString | undefined {
    return this.description?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `description` property.
   *
   * @param value - the `description` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDescription(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid Endpoint.description (${String(value)})`;
      this.description = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.description = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `description` property exists and has a value; `false` otherwise
   */
  public hasDescription(): boolean {
    return this.hasDescriptionElement();
  }

  /**
   * @returns the `environmentType` property value as a CodeableConcept array
   */
  public getEnvironmentType(): CodeableConcept[] {
    return this.environmentType ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `environmentType` property.
   *
   * @param value - the `environmentType` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setEnvironmentType(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Endpoint.environmentType; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.environmentType = value;
    } else {
      this.environmentType = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `environmentType` array property.
   *
   * @param value - the `environmentType` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addEnvironmentType(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Endpoint.environmentType; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initEnvironmentType();
      this.environmentType?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `environmentType` property exists and has a value; `false` otherwise
   */
  public hasEnvironmentType(): boolean {
    return isDefinedList<CodeableConcept>(this.environmentType) && this.environmentType.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `environmentType` property
   */
  private initEnvironmentType(): void {
    if(!this.hasEnvironmentType()) {
      this.environmentType = [] as CodeableConcept[];
    }
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
   * @returns the `payload` property value as a EndpointPayloadComponent array
   */
  public getPayload(): EndpointPayloadComponent[] {
    return this.payload ?? ([] as EndpointPayloadComponent[]);
  }

  /**
   * Assigns the provided EndpointPayloadComponent array value to the `payload` property.
   *
   * @param value - the `payload` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPayload(value: EndpointPayloadComponent[] | undefined): this {
    if (isDefinedList<EndpointPayloadComponent>(value)) {
      const optErrMsg = `Invalid Endpoint.payload; Provided value array has an element that is not an instance of EndpointPayloadComponent.`;
      assertFhirTypeList<EndpointPayloadComponent>(value, EndpointPayloadComponent, optErrMsg);
      this.payload = value;
    } else {
      this.payload = undefined;
    }
    return this;
  }

  /**
   * Add the provided EndpointPayloadComponent value to the `payload` array property.
   *
   * @param value - the `payload` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addPayload(value: EndpointPayloadComponent | undefined): this {
    if (isDefined<EndpointPayloadComponent>(value)) {
      const optErrMsg = `Invalid Endpoint.payload; Provided element is not an instance of EndpointPayloadComponent.`;
      assertFhirType<EndpointPayloadComponent>(value, EndpointPayloadComponent, optErrMsg);
      this.initPayload();
      this.payload?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `payload` property exists and has a value; `false` otherwise
   */
  public hasPayload(): boolean {
    return isDefinedList<EndpointPayloadComponent>(this.payload) && this.payload.some((item: EndpointPayloadComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `payload` property
   */
  private initPayload(): void {
    if(!this.hasPayload()) {
      this.payload = [] as EndpointPayloadComponent[];
    }
  }

  /**
   * @returns the `address` property value as a UrlType object if defined; else an empty UrlType object
   */
  public getAddressElement(): UrlType {
    return this.address ?? new UrlType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `address` property.
   *
   * @param element - the `address` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAddressElement(element: UrlType | undefined | null): this {
    if (isDefined<UrlType>(element)) {
      const optErrMsg = `Invalid Endpoint.address; Provided value is not an instance of UrlType.`;
      assertFhirType<UrlType>(element, UrlType, optErrMsg);
      this.address = element;
    } else {
      this.address = null;
    }
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
  public setAddress(value: fhirUrl | undefined | null): this {
    if (isDefined<fhirUrl>(value)) {
      const optErrMsg = `Invalid Endpoint.address (${String(value)})`;
      this.address = new UrlType(parseFhirPrimitiveData(value, fhirUrlSchema, optErrMsg));
    } else {
      this.address = null;
    }
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
      this.description,
      this.environmentType,
      this.managingOrganization,
      this.contact,
      this.period,
      this.payload,
      this.address,
      this.header,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.status, this.address, 
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
    const connectionTypeList = copyListValues<CodeableConcept>(this.connectionType);
    dest.connectionType = connectionTypeList.length === 0 ? null : connectionTypeList;
    dest.name = this.name?.copy();
    dest.description = this.description?.copy();
    const environmentTypeList = copyListValues<CodeableConcept>(this.environmentType);
    dest.environmentType = environmentTypeList.length === 0 ? undefined : environmentTypeList;
    dest.managingOrganization = this.managingOrganization?.copy();
    const contactList = copyListValues<ContactPoint>(this.contact);
    dest.contact = contactList.length === 0 ? undefined : contactList;
    dest.period = this.period?.copy();
    const payloadList = copyListValues<EndpointPayloadComponent>(this.payload);
    dest.payload = payloadList.length === 0 ? undefined : payloadList;
    dest.address = this.address ? this.address.copy() : null;
    const headerList = copyListValues<StringType>(this.header);
    dest.header = headerList.length === 0 ? undefined : headerList;
  }

  /**
   * @returns the JSON value or undefined if the instance is empty
   */
  public override toJSON(): JSON.Value | undefined {
    if (this.isEmpty()) {
      return undefined;
    }

    let jsonObj = super.toJSON() as JSON.Object | undefined;
    jsonObj ??= {} as JSON.Object;

    if (this.hasIdentifier()) {
      setFhirComplexListJson(this.getIdentifier(), 'identifier', jsonObj);
    }

    if (this.hasStatusElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getStatusElement()!, 'status', jsonObj);
    } else {
      jsonObj['status'] = null;
    }

    if (this.hasConnectionType()) {
      setFhirComplexListJson(this.getConnectionType(), 'connectionType', jsonObj);
    } else {
      jsonObj['connectionType'] = null;
    }

    if (this.hasNameElement()) {
      setFhirPrimitiveJson<fhirString>(this.getNameElement(), 'name', jsonObj);
    }

    if (this.hasDescriptionElement()) {
      setFhirPrimitiveJson<fhirString>(this.getDescriptionElement(), 'description', jsonObj);
    }

    if (this.hasEnvironmentType()) {
      setFhirComplexListJson(this.getEnvironmentType(), 'environmentType', jsonObj);
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

    if (this.hasPayload()) {
      setFhirBackboneElementListJson(this.getPayload(), 'payload', jsonObj);
    }

    if (this.hasAddressElement()) {
      setFhirPrimitiveJson<fhirUrl>(this.getAddressElement(), 'address', jsonObj);
    } else {
      jsonObj['address'] = null;
    }

    if (this.hasHeader()) {
      setFhirPrimitiveListJson(this.getHeaderElement(), 'header', jsonObj);
    }

    return jsonObj;
  }
}

/**
 * EndpointPayloadComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Set of payloads that are provided by this endpoint
 * - **Definition:** The set of payloads that are provided/available at this endpoint.
 * - **Comment:** Note that not all mimetypes or types will be listed under the one endpoint resource, there may be multiple instances that information for cases where other header data such as the endpoint address, active status/period etc. is different.
 *
 * @category Data Models: Resource
 * @see [FHIR Endpoint](http://hl7.org/fhir/StructureDefinition/Endpoint)
 */
export class EndpointPayloadComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `EndpointPayloadComponent` JSON to instantiate the EndpointPayloadComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `EndpointPayloadComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to EndpointPayloadComponent
   * @returns EndpointPayloadComponent data model or undefined for `EndpointPayloadComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): EndpointPayloadComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'EndpointPayloadComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new EndpointPayloadComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addType(datatype);
        }
      });
    }

    fieldName = 'mimeType';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
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
          instance.addMimeTypeElement(datatype);
        }
      });
    }

    return instance;
  }

  /**
   * Endpoint.payload.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The type of content that may be used at this endpoint (e.g. XDS Discharge summaries)
   * - **Definition:** The payload type describes the acceptable content that can be communicated on the endpoint.
   * - **Comment:** The mimeType describes the serialization format of the data, where the payload.type indicates the specific document/schema that is being transferred; e.g. DischargeSummary or CarePlan.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private type_?: CodeableConcept[] | undefined;

  /**
   * Endpoint.payload.mimeType Element
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
  private mimeType?: CodeType[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `type_` property value as a CodeableConcept array
   */
  public getType(): CodeableConcept[] {
    return this.type_ ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `type_` property.
   *
   * @param value - the `type_` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setType(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Endpoint.payload.type; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.type_ = value;
    } else {
      this.type_ = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `type_` array property.
   *
   * @param value - the `type_` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addType(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Endpoint.payload.type; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initType();
      this.type_?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `type_` property exists and has a value; `false` otherwise
   */
  public hasType(): boolean {
    return isDefinedList<CodeableConcept>(this.type_) && this.type_.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `type_` property
   */
  private initType(): void {
    if(!this.hasType()) {
      this.type_ = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `mimeType` property value as a CodeType array
   */
  public getMimeTypeElement(): CodeType[] {
    return this.mimeType ?? ([] as CodeType[]);
  }

  /**
   * Assigns the provided CodeType array value to the `mimeType` property.
   *
   * @param element - the `mimeType` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setMimeTypeElement(element: CodeType[] | undefined): this {
    if (isDefinedList<CodeType>(element)) {
      const optErrMsg = `Invalid Endpoint.payload.mimeType; Provided value array has an element that is not an instance of CodeType.`;
      assertFhirTypeList<CodeType>(element, CodeType, optErrMsg);
      this.mimeType = element;
    } else {
      this.mimeType = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeType value to the `mimeType` array property.
   *
   * @param element - the `mimeType` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addMimeTypeElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid Endpoint.payload.mimeType; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.initMimeType();
      this.mimeType?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `mimeType` property exists and has a value; `false` otherwise
   */
  public hasMimeTypeElement(): boolean {
    return isDefinedList<CodeType>(this.mimeType) && this.mimeType.some((item: CodeType) => !item.isEmpty());
  }

  /**
   * @returns the `mimeType` property value as a fhirCode array
   */
  public getMimeType(): fhirCode[] {
    this.initMimeType();
    const mimeTypeValues = [] as fhirCode[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.mimeType!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        mimeTypeValues.push(value);
      }
    }
    return mimeTypeValues;
  }

  /**
   * Assigns the provided primitive value array to the `mimeType` property.
   *
   * @param value - the `mimeType` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setMimeType(value: fhirCode[] | undefined): this {
    if (isDefinedList<fhirCode>(value)) {
      const mimeTypeElements = [] as CodeType[];
      for (const mimeTypeValue of value) {
        const optErrMsg = `Invalid Endpoint.payload.mimeType array item (${String(mimeTypeValue)})`;
        const element = new CodeType(parseFhirPrimitiveData(mimeTypeValue, fhirCodeSchema, optErrMsg));
        mimeTypeElements.push(element);
      }
      this.mimeType = mimeTypeElements;
    } else {
      this.mimeType = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `mimeType` array property.
   *
   * @param value - the `mimeType` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addMimeType(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid Endpoint.payload.mimeType array item (${String(value)})`;
      const element = new CodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg));
      this.initMimeType();
      this.addMimeTypeElement(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `mimeType` property exists and has a value; `false` otherwise
   */
  public hasMimeType(): boolean {
    return this.hasMimeTypeElement();
  }

  /**
   * Initialize the `mimeType` property
   */
  private initMimeType(): void {
    if (!this.hasMimeType()) {
      this.mimeType = [] as CodeType[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Endpoint.payload';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.type_,
      this.mimeType,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): EndpointPayloadComponent {
    const dest = new EndpointPayloadComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: EndpointPayloadComponent): void {
    super.copyValues(dest);
    const typeList = copyListValues<CodeableConcept>(this.type_);
    dest.type_ = typeList.length === 0 ? undefined : typeList;
    const mimeTypeList = copyListValues<CodeType>(this.mimeType);
    dest.mimeType = mimeTypeList.length === 0 ? undefined : mimeTypeList;
  }

  /**
   * @returns the JSON value or undefined if the instance is empty
   */
  public override toJSON(): JSON.Value | undefined {
    if (this.isEmpty()) {
      return undefined;
    }

    let jsonObj = super.toJSON() as JSON.Object | undefined;
    jsonObj ??= {} as JSON.Object;

    if (this.hasType()) {
      setFhirComplexListJson(this.getType(), 'type', jsonObj);
    }

    if (this.hasMimeType()) {
      setFhirPrimitiveListJson(this.getMimeTypeElement(), 'mimeType', jsonObj);
    }

    return jsonObj;
  }
}
