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
 * Location Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/Location
 * StructureDefinition.name: Location
 * StructureDefinition.description: Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated.
 * StructureDefinition.fhirVersion: 4.3.0
 *
 * For questions, suggestions, or bugs, please open an issue at [GitHub ts-fhir-datamodels/issues](https://github.com/Paqrat76/ts-fhir-datamodels/issues).
 *
 * @packageDocumentation
 */

import { strict as assert } from 'node:assert';
import {
  BackboneElement,
  BooleanType,
  CodeType,
  DecimalType,
  DomainResource,
  EnumCodeType,
  FhirError,
  FhirParser,
  IBackboneElement,
  IDomainResource,
  INSTANCE_EMPTY_ERROR_MSG,
  JSON,
  PrimitiveType,
  PrimitiveTypeJson,
  REQUIRED_PROPERTIES_DO_NOT_EXIST,
  REQUIRED_PROPERTIES_REQD_IN_JSON,
  ReferenceTargets,
  StringType,
  TimeType,
  assertEnumCodeType,
  assertEnumCodeTypeList,
  assertFhirType,
  assertFhirTypeList,
  assertIsDefined,
  copyListValues,
  fhirBoolean,
  fhirBooleanSchema,
  fhirCode,
  fhirCodeSchema,
  fhirDecimal,
  fhirDecimalSchema,
  fhirString,
  fhirStringSchema,
  fhirTime,
  fhirTimeSchema,
  getPrimitiveTypeJson,
  getPrimitiveTypeListJson,
  isDefined,
  isDefinedList,
  isElementEmpty,
  isEmpty,
  parseFhirPrimitiveData,
  setFhirBackboneElementJson,
  setFhirBackboneElementListJson,
  setFhirComplexJson,
  setFhirComplexListJson,
  setFhirPrimitiveJson,
  setFhirPrimitiveListJson,
} from '@paq-ts-fhir/fhir-core';
import { Address, CodeableConcept, Coding, ContactPoint, Identifier, PARSABLE_DATATYPE_MAP, Reference } from '../complex-types/complex-datatypes';
import { DaysOfWeekEnum } from '../code-systems/DaysOfWeekEnum';
import { LocationModeEnum } from '../code-systems/LocationModeEnum';
import { LocationStatusEnum } from '../code-systems/LocationStatusEnum';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';

/**
 * Location Class
 *
 * @remarks
 * Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated.
 *
 * **FHIR Specification**
 * - **Short:** Details and position information for a physical place
 * - **Definition:** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated.
 * - **FHIR Version:** 4.3.0
 *
 * @category Data Models: Resource
 * @see [FHIR Location](http://hl7.org/fhir/StructureDefinition/Location)
 */
export class Location extends DomainResource implements IDomainResource {
  constructor() {
    super();

    this.locationStatusEnum = new LocationStatusEnum();
    this.locationModeEnum = new LocationModeEnum();
  }

  /**
   * Parse the provided `Location` JSON to instantiate the Location data model.
   *
   * @param sourceJson - JSON representing FHIR `Location`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to Location
   * @returns Location data model or undefined for `Location`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): Location | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'Location';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new Location();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'Location');
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
      instance.setStatusElement(datatype);
    }

    fieldName = 'operationalStatus';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Coding | undefined = Coding.parse(classJsonObj[fieldName]!, sourceField);
      instance.setOperationalStatus(datatype);
    }

    fieldName = 'name';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setNameElement(datatype);
    }

    fieldName = 'alias';
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
          instance.addAliasElement(datatype);
        }
      });
    }

    fieldName = 'description';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setDescriptionElement(datatype);
    }

    fieldName = 'mode';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setModeElement(datatype);
    }

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

    fieldName = 'telecom';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: ContactPoint | undefined = ContactPoint.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addTelecom(datatype);
        }
      });
    }

    fieldName = 'address';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Address | undefined = Address.parse(classJsonObj[fieldName]!, sourceField);
      instance.setAddress(datatype);
    }

    fieldName = 'physicalType';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setPhysicalType(datatype);
    }

    fieldName = 'position';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: LocationPositionComponent | undefined = LocationPositionComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setPosition(component);
    }

    fieldName = 'managingOrganization';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setManagingOrganization(datatype);
    }

    fieldName = 'partOf';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setPartOf(datatype);
    }

    fieldName = 'hoursOfOperation';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: LocationHoursOfOperationComponent | undefined = LocationHoursOfOperationComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addHoursOfOperation(component);
        }
      });
    }

    fieldName = 'availabilityExceptions';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setAvailabilityExceptionsElement(datatype);
    }

    fieldName = 'endpoint';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addEndpoint(datatype);
        }
      });
  }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * Location.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Unique code or number identifying the location to its users
   * - **Definition:** Unique code or number identifying the location to its users.
   * - **Requirements:** Organization label locations in registries, need to keep track of those.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier[] | undefined;

  /**
   * FHIR CodeSystem: LocationStatus
   *
   * @see {@link LocationStatusEnum }
   */
  private readonly locationStatusEnum: LocationStatusEnum;

  /**
   * Location.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** active | suspended | inactive
   * - **Definition:** The status property covers the general availability of the resource, not the current value which may be covered by the operationStatus, or by a schedule/slots if they are configured for the location.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** true
   * - **isModifierReason:** This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link LocationStatusEnum }
   */
  private status?: EnumCodeType | undefined;

  /**
   * Location.operationalStatus Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The operational status of the location (typically only for a bed/room)
   * - **Definition:** The operational status covers operation values most relevant to beds (but can also apply to rooms/units/chairs/etc. such as an isolation unit/dialysis chair). This typically covers concepts such as contamination, housekeeping, and other activities like maintenance.
   * - **FHIR Type:** `Coding`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private operationalStatus?: Coding | undefined;

  /**
   * Location.name Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name of the location as used by humans
   * - **Definition:** Name of the location as used by humans. Does not need to be unique.
   * - **Comment:** If the name of a location changes, consider putting the old name in the alias column so that it can still be located through searches.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private name?: StringType | undefined;

  /**
   * Location.alias Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A list of alternate names that the location is known as, or was known as, in the past
   * - **Definition:** A list of alternate names that the location is known as, or was known as, in the past.
   * - **Comment:** There are no dates associated with the alias/historic names, as this is not intended to track when names were used, but to assist in searching so that older names can still result in identifying the location.
   * - **Requirements:** Over time locations and organizations go through many changes and can be known by different names. For searching knowing previous names that the location was known by can be very useful.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private alias?: StringType[] | undefined;

  /**
   * Location.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Additional details about the location that could be displayed as further information to identify the location beyond its name
   * - **Definition:** Description of the Location, which helps in finding or referencing the place.
   * - **Requirements:** Humans need additional information to verify a correct location has been identified.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private description?: StringType | undefined;

  /**
   * FHIR CodeSystem: LocationMode
   *
   * @see {@link LocationModeEnum }
   */
  private readonly locationModeEnum: LocationModeEnum;

  /**
   * Location.mode Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** instance | kind
   * - **Definition:** Indicates whether a resource instance represents a specific location or a class of locations.
   * - **Comment:** This is labeled as a modifier because whether or not the location is a class of locations changes how it can be used and understood.
   * - **Requirements:** When using a Location resource for scheduling or orders, we need to be able to refer to a class of Locations instead of a specific Location.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link LocationModeEnum }
   */
  private mode?: EnumCodeType | undefined;

  /**
   * Location.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Type of function performed
   * - **Definition:** Indicates the type of function performed at the location.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private type_?: CodeableConcept[] | undefined;

  /**
   * Location.telecom Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Contact details of the location
   * - **Definition:** The contact details of communication devices available at the location. This can include phone numbers, fax numbers, mobile numbers, email addresses and web sites.
   * - **FHIR Type:** `ContactPoint`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private telecom?: ContactPoint[] | undefined;

  /**
   * Location.address Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Physical location
   * - **Definition:** Physical location.
   * - **Comment:** Additional addresses should be recorded using another instance of the Location resource, or via the Organization.
   * - **Requirements:** If locations can be visited, we need to keep track of their address.
   * - **FHIR Type:** `Address`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private address?: Address | undefined;

  /**
   * Location.physicalType Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Physical form of the location
   * - **Definition:** Physical form of the location, e.g. building, room, vehicle, road.
   * - **Requirements:** For purposes of showing relevant locations in queries, we need to categorize locations.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private physicalType?: CodeableConcept | undefined;

  /**
   * Location.position Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The absolute geographic location
   * - **Definition:** The absolute geographic location of the Location, expressed using the WGS84 datum (This is the same co-ordinate system used in KML).
   * - **Requirements:** For mobile applications and automated route-finding knowing the exact location of the Location is required.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private position?: LocationPositionComponent | undefined;

  /**
   * Location.managingOrganization Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Organization responsible for provisioning and upkeep
   * - **Definition:** The organization responsible for the provisioning and upkeep of the location.
   * - **Comment:** This can also be used as the part of the organization hierarchy where this location provides services. These services can be defined through the HealthcareService resource.
   * - **Requirements:** Need to know who manages the location.
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
   * Location.partOf Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Another Location this one is physically a part of
   * - **Definition:** Another Location of which this Location is physically a part of.
   * - **Requirements:** For purposes of location, display and identification, knowing which locations are located within other locations is important.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Location',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private partOf?: Reference | undefined;

  /**
   * Location.hoursOfOperation Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** What days/times during a week is this location usually open
   * - **Definition:** What days/times during a week is this location usually open.
   * - **Comment:** This type of information is commonly found published in directories and on websites informing customers when the facility is available. Specific services within the location may have their own hours which could be shorter (or longer) than the locations hours.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private hoursOfOperation?: LocationHoursOfOperationComponent[] | undefined;

  /**
   * Location.availabilityExceptions Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Description of availability exceptions
   * - **Definition:** A description of when the locations opening ours are different to normal, e.g. public holiday availability. Succinctly describing all possible exceptions to normal site availability as detailed in the opening hours Times.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private availabilityExceptions?: StringType | undefined;

  /**
   * Location.endpoint Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Technical endpoints providing access to services operated for the location
   * - **Definition:** Technical endpoints providing access to services operated for the location.
   * - **Requirements:** Organizations may have different systems at different locations that provide various services and need to be able to define the technical connection details for how to connect to them, and for what purpose.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Endpoint',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private endpoint?: Reference[] | undefined;

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
      const optErrMsg = `Invalid Location.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid Location.identifier; Provided element is not an instance of Identifier.`;
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
   * @returns the `status` property value as a EnumCodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link LocationStatusEnum }
   */
  public getStatusEnumType(): EnumCodeType | undefined {
    return this.status;
  }

  /**
   * Assigns the provided EnumCodeType value to the `status` property.
   *
   * @param enumType - the `status` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code values
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link LocationStatusEnum }
   */
  public setStatusEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = 'Invalid Location.status';
      assertEnumCodeType<LocationStatusEnum>(enumType, LocationStatusEnum, errMsgPrefix);
      this.status = enumType;
    } else {
      this.status = undefined;
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
   * @returns the `status` property value as a CodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link LocationStatusEnum }
   */
  public getStatusElement(): CodeType | undefined {
    if (this.status === undefined) {
      return undefined;
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
   * @see CodeSystem Enumeration: {@link LocationStatusEnum }
   */
  public setStatusElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid Location.status; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.status = new EnumCodeType(element, this.locationStatusEnum);
    } else {
      this.status = undefined;
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
   * @returns the `status` property value as a fhirCode if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link LocationStatusEnum }
   */
  public getStatus(): fhirCode | undefined {
    if (this.status === undefined) {
      return undefined;
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
   * @see CodeSystem Enumeration: {@link LocationStatusEnum }
   */
  public setStatus(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid Location.status; Provided value is not an instance of fhirCode.`;
      this.status = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.locationStatusEnum);
    } else {
      this.status = undefined;
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
   * @returns the `operationalStatus` property value as a Coding object if defined; else an empty Coding object
   */
  public getOperationalStatus(): Coding {
    return this.operationalStatus ?? new Coding();
  }

  /**
   * Assigns the provided OperationalStatus object value to the `operationalStatus` property.
   *
   * @param value - the `operationalStatus` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setOperationalStatus(value: Coding | undefined): this {
    if (isDefined<Coding>(value)) {
      const optErrMsg = `Invalid Location.operationalStatus; Provided element is not an instance of Coding.`;
      assertFhirType<Coding>(value, Coding, optErrMsg);
      this.operationalStatus = value;
    } else {
      this.operationalStatus = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `operationalStatus` property exists and has a value; `false` otherwise
   */
  public hasOperationalStatus(): boolean {
    return isDefined<Coding>(this.operationalStatus) && !this.operationalStatus.isEmpty();
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
      const optErrMsg = `Invalid Location.name; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid Location.name (${String(value)})`;
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
   * @returns the `alias` property value as a StringType array
   */
  public getAliasElement(): StringType[] {
    return this.alias ?? ([] as StringType[]);
  }

  /**
   * Assigns the provided StringType array value to the `alias` property.
   *
   * @param element - the `alias` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAliasElement(element: StringType[] | undefined): this {
    if (isDefinedList<StringType>(element)) {
      const optErrMsg = `Invalid Location.alias; Provided value array has an element that is not an instance of StringType.`;
      assertFhirTypeList<StringType>(element, StringType, optErrMsg);
      this.alias = element;
    } else {
      this.alias = undefined;
    }
    return this;
  }

  /**
   * Add the provided StringType value to the `alias` array property.
   *
   * @param element - the `alias` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addAliasElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid Location.alias; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.initAlias();
      this.alias?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `alias` property exists and has a value; `false` otherwise
   */
  public hasAliasElement(): boolean {
    return isDefinedList<StringType>(this.alias) && this.alias.some((item: StringType) => !item.isEmpty());
  }

  /**
   * @returns the `alias` property value as a fhirString array
   */
  public getAlias(): fhirString[] {
    this.initAlias();
    const aliasValues = [] as fhirString[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.alias!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        aliasValues.push(value);
      }
    }
    return aliasValues;
  }

  /**
   * Assigns the provided primitive value array to the `alias` property.
   *
   * @param value - the `alias` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAlias(value: fhirString[] | undefined): this {
    if (isDefinedList<fhirString>(value)) {
      const aliasElements = [] as StringType[];
      for (const aliasValue of value) {
        const optErrMsg = `Invalid Location.alias array item (${String(aliasValue)})`;
        const element = new StringType(parseFhirPrimitiveData(aliasValue, fhirStringSchema, optErrMsg));
        aliasElements.push(element);
      }
      this.alias = aliasElements;
    } else {
      this.alias = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `alias` array property.
   *
   * @param value - the `alias` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addAlias(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid Location.alias array item (${String(value)})`;
      const element = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
      this.initAlias();
      this.addAliasElement(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `alias` property exists and has a value; `false` otherwise
   */
  public hasAlias(): boolean {
    return this.hasAliasElement();
  }

  /**
   * Initialize the `alias` property
   */
  private initAlias(): void {
    if (!this.hasAlias()) {
      this.alias = [] as StringType[];
    }
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
      const optErrMsg = `Invalid Location.description; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid Location.description (${String(value)})`;
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
   * @returns the `mode` property value as a EnumCodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link LocationModeEnum }
   */
  public getModeEnumType(): EnumCodeType | undefined {
    return this.mode;
  }

  /**
   * Assigns the provided EnumCodeType value to the `mode` property.
   *
   * @param enumType - the `mode` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code values
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link LocationModeEnum }
   */
  public setModeEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = 'Invalid Location.mode';
      assertEnumCodeType<LocationModeEnum>(enumType, LocationModeEnum, errMsgPrefix);
      this.mode = enumType;
    } else {
      this.mode = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `mode` property exists and has a value; `false` otherwise
   */
  public hasModeEnumType(): boolean {
    return isDefined<EnumCodeType>(this.mode) && !this.mode.isEmpty() && this.mode.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `mode` property value as a CodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link LocationModeEnum }
   */
  public getModeElement(): CodeType | undefined {
    if (this.mode === undefined) {
      return undefined;
    }
    return this.mode as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `mode` property.
   *
   * @param element - the `mode` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link LocationModeEnum }
   */
  public setModeElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid Location.mode; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.mode = new EnumCodeType(element, this.locationModeEnum);
    } else {
      this.mode = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `mode` property exists and has a value; `false` otherwise
   */
  public hasModeElement(): boolean {
    return this.hasModeEnumType();
  }

  /**
   * @returns the `mode` property value as a fhirCode if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link LocationModeEnum }
   */
  public getMode(): fhirCode | undefined {
    if (this.mode === undefined) {
      return undefined;
    }
    return this.mode.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `mode` property.
   *
   * @param value - the `mode` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link LocationModeEnum }
   */
  public setMode(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid Location.mode; Provided value is not an instance of fhirCode.`;
      this.mode = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.locationModeEnum);
    } else {
      this.mode = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `mode` property exists and has a value; `false` otherwise
   */
  public hasMode(): boolean {
    return this.hasModeEnumType();
  }

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
      const optErrMsg = `Invalid Location.type; Provided value array has an element that is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid Location.type; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `telecom` property value as a ContactPoint array
   */
  public getTelecom(): ContactPoint[] {
    return this.telecom ?? ([] as ContactPoint[]);
  }

  /**
   * Assigns the provided ContactPoint array value to the `telecom` property.
   *
   * @param value - the `telecom` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setTelecom(value: ContactPoint[] | undefined): this {
    if (isDefinedList<ContactPoint>(value)) {
      const optErrMsg = `Invalid Location.telecom; Provided value array has an element that is not an instance of ContactPoint.`;
      assertFhirTypeList<ContactPoint>(value, ContactPoint, optErrMsg);
      this.telecom = value;
    } else {
      this.telecom = undefined;
    }
    return this;
  }

  /**
   * Add the provided ContactPoint value to the `telecom` array property.
   *
   * @param value - the `telecom` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addTelecom(value: ContactPoint | undefined): this {
    if (isDefined<ContactPoint>(value)) {
      const optErrMsg = `Invalid Location.telecom; Provided element is not an instance of ContactPoint.`;
      assertFhirType<ContactPoint>(value, ContactPoint, optErrMsg);
      this.initTelecom();
      this.telecom?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `telecom` property exists and has a value; `false` otherwise
   */
  public hasTelecom(): boolean {
    return isDefinedList<ContactPoint>(this.telecom) && this.telecom.some((item: ContactPoint) => !item.isEmpty());
  }

  /**
   * Initialize the `telecom` property
   */
  private initTelecom(): void {
    if(!this.hasTelecom()) {
      this.telecom = [] as ContactPoint[];
    }
  }

  /**
   * @returns the `address` property value as a Address object if defined; else an empty Address object
   */
  public getAddress(): Address {
    return this.address ?? new Address();
  }

  /**
   * Assigns the provided Address object value to the `address` property.
   *
   * @param value - the `address` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAddress(value: Address | undefined): this {
    if (isDefined<Address>(value)) {
      const optErrMsg = `Invalid Location.address; Provided element is not an instance of Address.`;
      assertFhirType<Address>(value, Address, optErrMsg);
      this.address = value;
    } else {
      this.address = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `address` property exists and has a value; `false` otherwise
   */
  public hasAddress(): boolean {
    return isDefined<Address>(this.address) && !this.address.isEmpty();
  }

  /**
   * @returns the `physicalType` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getPhysicalType(): CodeableConcept {
    return this.physicalType ?? new CodeableConcept();
  }

  /**
   * Assigns the provided PhysicalType object value to the `physicalType` property.
   *
   * @param value - the `physicalType` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPhysicalType(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Location.physicalType; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.physicalType = value;
    } else {
      this.physicalType = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `physicalType` property exists and has a value; `false` otherwise
   */
  public hasPhysicalType(): boolean {
    return isDefined<CodeableConcept>(this.physicalType) && !this.physicalType.isEmpty();
  }

  /**
   * @returns the `position` property value as a LocationPositionComponent object if defined; else an empty LocationPositionComponent object
   */
  public getPosition(): LocationPositionComponent {
    return this.position ?? new LocationPositionComponent();
  }

  /**
   * Assigns the provided Position object value to the `position` property.
   *
   * @param value - the `position` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPosition(value: LocationPositionComponent | undefined): this {
    if (isDefined<LocationPositionComponent>(value)) {
      const optErrMsg = `Invalid Location.position; Provided element is not an instance of LocationPositionComponent.`;
      assertFhirType<LocationPositionComponent>(value, LocationPositionComponent, optErrMsg);
      this.position = value;
    } else {
      this.position = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `position` property exists and has a value; `false` otherwise
   */
  public hasPosition(): boolean {
    return isDefined<LocationPositionComponent>(this.position) && !this.position.isEmpty();
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
   * @decorator `@ReferenceTargets('Location.managingOrganization', ['Organization',])`
   *
   * @param value - the `managingOrganization` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Location.managingOrganization', [
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
   * @returns the `partOf` property value as a Reference object; else an empty Reference object
   */
  public getPartOf(): Reference {
    return this.partOf ?? new Reference();
  }

  /**
   * Assigns the provided PartOf object value to the `partOf` property.
   *
   * @decorator `@ReferenceTargets('Location.partOf', ['Location',])`
   *
   * @param value - the `partOf` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Location.partOf', [
    'Location',
  ])
  public setPartOf(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.partOf = value;
    } else {
      this.partOf = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `partOf` property exists and has a value; `false` otherwise
   */
  public hasPartOf(): boolean {
    return isDefined<Reference>(this.partOf) && !this.partOf.isEmpty();
  }

  /**
   * @returns the `hoursOfOperation` property value as a LocationHoursOfOperationComponent array
   */
  public getHoursOfOperation(): LocationHoursOfOperationComponent[] {
    return this.hoursOfOperation ?? ([] as LocationHoursOfOperationComponent[]);
  }

  /**
   * Assigns the provided LocationHoursOfOperationComponent array value to the `hoursOfOperation` property.
   *
   * @param value - the `hoursOfOperation` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setHoursOfOperation(value: LocationHoursOfOperationComponent[] | undefined): this {
    if (isDefinedList<LocationHoursOfOperationComponent>(value)) {
      const optErrMsg = `Invalid Location.hoursOfOperation; Provided value array has an element that is not an instance of LocationHoursOfOperationComponent.`;
      assertFhirTypeList<LocationHoursOfOperationComponent>(value, LocationHoursOfOperationComponent, optErrMsg);
      this.hoursOfOperation = value;
    } else {
      this.hoursOfOperation = undefined;
    }
    return this;
  }

  /**
   * Add the provided LocationHoursOfOperationComponent value to the `hoursOfOperation` array property.
   *
   * @param value - the `hoursOfOperation` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addHoursOfOperation(value: LocationHoursOfOperationComponent | undefined): this {
    if (isDefined<LocationHoursOfOperationComponent>(value)) {
      const optErrMsg = `Invalid Location.hoursOfOperation; Provided element is not an instance of LocationHoursOfOperationComponent.`;
      assertFhirType<LocationHoursOfOperationComponent>(value, LocationHoursOfOperationComponent, optErrMsg);
      this.initHoursOfOperation();
      this.hoursOfOperation?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `hoursOfOperation` property exists and has a value; `false` otherwise
   */
  public hasHoursOfOperation(): boolean {
    return isDefinedList<LocationHoursOfOperationComponent>(this.hoursOfOperation) && this.hoursOfOperation.some((item: LocationHoursOfOperationComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `hoursOfOperation` property
   */
  private initHoursOfOperation(): void {
    if(!this.hasHoursOfOperation()) {
      this.hoursOfOperation = [] as LocationHoursOfOperationComponent[];
    }
  }

  /**
   * @returns the `availabilityExceptions` property value as a StringType object if defined; else an empty StringType object
   */
  public getAvailabilityExceptionsElement(): StringType {
    return this.availabilityExceptions ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `availabilityExceptions` property.
   *
   * @param element - the `availabilityExceptions` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAvailabilityExceptionsElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid Location.availabilityExceptions; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.availabilityExceptions = element;
    } else {
      this.availabilityExceptions = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `availabilityExceptions` property exists and has a value; `false` otherwise
   */
  public hasAvailabilityExceptionsElement(): boolean {
    return isDefined<StringType>(this.availabilityExceptions) && !this.availabilityExceptions.isEmpty();
  }

  /**
   * @returns the `availabilityExceptions` property value as a fhirString if defined; else undefined
   */
  public getAvailabilityExceptions(): fhirString | undefined {
    return this.availabilityExceptions?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `availabilityExceptions` property.
   *
   * @param value - the `availabilityExceptions` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAvailabilityExceptions(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid Location.availabilityExceptions (${String(value)})`;
      this.availabilityExceptions = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.availabilityExceptions = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `availabilityExceptions` property exists and has a value; `false` otherwise
   */
  public hasAvailabilityExceptions(): boolean {
    return this.hasAvailabilityExceptionsElement();
  }

  /**
   * @returns the `endpoint` property value as a Reference array
   */
  public getEndpoint(): Reference[] {
    return this.endpoint ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `endpoint` property.
   *
   * @decorator `@ReferenceTargets('Location.endpoint', ['Endpoint',])`
   *
   * @param value - the `endpoint` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Location.endpoint', [
    'Endpoint',
  ])
  public setEndpoint(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.endpoint = value;
    } else {
      this.endpoint = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `endpoint` array property.
   *
   * @decorator `@ReferenceTargets('Location.endpoint', ['Endpoint',])`
   *
   * @param value - the `endpoint` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Location.endpoint', [
    'Endpoint',
  ])
  public addEndpoint(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initEndpoint();
      this.endpoint?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `endpoint` property exists and has a value; `false` otherwise
   */
  public hasEndpoint(): boolean {
    return isDefinedList<Reference>(this.endpoint) && this.endpoint.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `endpoint` property
   */
  private initEndpoint(): void {
    if (!this.hasEndpoint()) {
      this.endpoint = [] as Reference[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Location';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identifier,
      this.status,
      this.operationalStatus,
      this.name,
      this.alias,
      this.description,
      this.mode,
      this.type_,
      this.telecom,
      this.address,
      this.physicalType,
      this.position,
      this.managingOrganization,
      this.partOf,
      this.hoursOfOperation,
      this.availabilityExceptions,
      this.endpoint,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): Location {
    const dest = new Location();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: Location): void {
    super.copyValues(dest);
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    dest.status = this.status?.copy();
    dest.operationalStatus = this.operationalStatus?.copy();
    dest.name = this.name?.copy();
    const aliasList = copyListValues<StringType>(this.alias);
    dest.alias = aliasList.length === 0 ? undefined : aliasList;
    dest.description = this.description?.copy();
    dest.mode = this.mode?.copy();
    const typeList = copyListValues<CodeableConcept>(this.type_);
    dest.type_ = typeList.length === 0 ? undefined : typeList;
    const telecomList = copyListValues<ContactPoint>(this.telecom);
    dest.telecom = telecomList.length === 0 ? undefined : telecomList;
    dest.address = this.address?.copy();
    dest.physicalType = this.physicalType?.copy();
    dest.position = this.position?.copy();
    dest.managingOrganization = this.managingOrganization?.copy();
    dest.partOf = this.partOf?.copy();
    const hoursOfOperationList = copyListValues<LocationHoursOfOperationComponent>(this.hoursOfOperation);
    dest.hoursOfOperation = hoursOfOperationList.length === 0 ? undefined : hoursOfOperationList;
    dest.availabilityExceptions = this.availabilityExceptions?.copy();
    const endpointList = copyListValues<Reference>(this.endpoint);
    dest.endpoint = endpointList.length === 0 ? undefined : endpointList;
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
    }

    if (this.hasOperationalStatus()) {
      setFhirComplexJson(this.getOperationalStatus(), 'operationalStatus', jsonObj);
    }

    if (this.hasNameElement()) {
      setFhirPrimitiveJson<fhirString>(this.getNameElement(), 'name', jsonObj);
    }

    if (this.hasAlias()) {
      setFhirPrimitiveListJson(this.getAliasElement(), 'alias', jsonObj);
    }

    if (this.hasDescriptionElement()) {
      setFhirPrimitiveJson<fhirString>(this.getDescriptionElement(), 'description', jsonObj);
    }

    if (this.hasModeElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getModeElement()!, 'mode', jsonObj);
    }

    if (this.hasType()) {
      setFhirComplexListJson(this.getType(), 'type', jsonObj);
    }

    if (this.hasTelecom()) {
      setFhirComplexListJson(this.getTelecom(), 'telecom', jsonObj);
    }

    if (this.hasAddress()) {
      setFhirComplexJson(this.getAddress(), 'address', jsonObj);
    }

    if (this.hasPhysicalType()) {
      setFhirComplexJson(this.getPhysicalType(), 'physicalType', jsonObj);
    }

    if (this.hasPosition()) {
      setFhirBackboneElementJson(this.getPosition(), 'position', jsonObj);
    }

    if (this.hasManagingOrganization()) {
      setFhirComplexJson(this.getManagingOrganization(), 'managingOrganization', jsonObj);
    }

    if (this.hasPartOf()) {
      setFhirComplexJson(this.getPartOf(), 'partOf', jsonObj);
    }

    if (this.hasHoursOfOperation()) {
      setFhirBackboneElementListJson(this.getHoursOfOperation(), 'hoursOfOperation', jsonObj);
    }

    if (this.hasAvailabilityExceptionsElement()) {
      setFhirPrimitiveJson<fhirString>(this.getAvailabilityExceptionsElement(), 'availabilityExceptions', jsonObj);
    }

    if (this.hasEndpoint()) {
      setFhirComplexListJson(this.getEndpoint(), 'endpoint', jsonObj);
    }

    return jsonObj;
  }
}

/**
 * LocationPositionComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** The absolute geographic location
 * - **Definition:** The absolute geographic location of the Location, expressed using the WGS84 datum (This is the same co-ordinate system used in KML).
 * - **Requirements:** For mobile applications and automated route-finding knowing the exact location of the Location is required.
 *
 * @category Data Models: Resource
 * @see [FHIR Location](http://hl7.org/fhir/StructureDefinition/Location)
 */
export class LocationPositionComponent extends BackboneElement implements IBackboneElement {
  constructor(longitude: DecimalType | fhirDecimal | null = null, latitude: DecimalType | fhirDecimal | null = null) {
    super();

    this.longitude = null;
    if (isDefined<DecimalType | fhirDecimal>(longitude)) {
      if (longitude instanceof PrimitiveType) {
        this.setLongitudeElement(longitude);
      } else {
        this.setLongitude(longitude);
      }
    }

    this.latitude = null;
    if (isDefined<DecimalType | fhirDecimal>(latitude)) {
      if (latitude instanceof PrimitiveType) {
        this.setLatitudeElement(latitude);
      } else {
        this.setLatitude(latitude);
      }
    }
  }

  /**
   * Parse the provided `LocationPositionComponent` JSON to instantiate the LocationPositionComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `LocationPositionComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to LocationPositionComponent
   * @returns LocationPositionComponent data model or undefined for `LocationPositionComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): LocationPositionComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'LocationPositionComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new LocationPositionComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const missingReqdProperties: string[] = [];

    fieldName = 'longitude';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DecimalType | undefined = fhirParser.parseDecimalType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setLongitudeElement(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'latitude';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DecimalType | undefined = fhirParser.parseDecimalType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setLatitudeElement(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'altitude';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DecimalType | undefined = fhirParser.parseDecimalType(dtJson, dtSiblingJson);
      instance.setAltitudeElement(datatype);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_REQD_IN_JSON} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * Location.position.longitude Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Longitude with WGS84 datum
   * - **Definition:** Longitude. The value domain and the interpretation are the same as for the text of the longitude element in KML (see notes below).
   * - **FHIR Type:** `decimal`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private longitude: DecimalType | null;

  /**
   * Location.position.latitude Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Latitude with WGS84 datum
   * - **Definition:** Latitude. The value domain and the interpretation are the same as for the text of the latitude element in KML (see notes below).
   * - **FHIR Type:** `decimal`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private latitude: DecimalType | null;

  /**
   * Location.position.altitude Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Altitude with WGS84 datum
   * - **Definition:** Altitude. The value domain and the interpretation are the same as for the text of the altitude element in KML (see notes below).
   * - **FHIR Type:** `decimal`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private altitude?: DecimalType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `longitude` property value as a DecimalType object if defined; else null
   */
  public getLongitudeElement(): DecimalType | null {
    return this.longitude;
  }

  /**
   * Assigns the provided PrimitiveType value to the `longitude` property.
   *
   * @param element - the `longitude` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setLongitudeElement(element: DecimalType): this {
    assertIsDefined<DecimalType>(element, `Location.position.longitude is required`);
    const optErrMsg = `Invalid Location.position.longitude; Provided value is not an instance of DecimalType.`;
    assertFhirType<DecimalType>(element, DecimalType, optErrMsg);
    this.longitude = element;
    return this;
  }

  /**
   * @returns `true` if the `longitude` property exists and has a value; `false` otherwise
   */
  public hasLongitudeElement(): boolean {
    return isDefined<DecimalType>(this.longitude) && !this.longitude.isEmpty();
  }

  /**
   * @returns the `longitude` property value as a fhirDecimal if defined; else null
   */
  public getLongitude(): fhirDecimal | null {
    if (this.longitude?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.longitude.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `longitude` property.
   *
   * @param value - the `longitude` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setLongitude(value: fhirDecimal): this {
    assertIsDefined<fhirDecimal>(value, `Location.position.longitude is required`);
    const optErrMsg = `Invalid Location.position.longitude (${String(value)})`;
    this.longitude = new DecimalType(parseFhirPrimitiveData(value, fhirDecimalSchema, optErrMsg));
    return this;
  }

  /**
   * @returns `true` if the `longitude` property exists and has a value; `false` otherwise
   */
  public hasLongitude(): boolean {
    return this.hasLongitudeElement();
  }

  /**
   * @returns the `latitude` property value as a DecimalType object if defined; else null
   */
  public getLatitudeElement(): DecimalType | null {
    return this.latitude;
  }

  /**
   * Assigns the provided PrimitiveType value to the `latitude` property.
   *
   * @param element - the `latitude` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setLatitudeElement(element: DecimalType): this {
    assertIsDefined<DecimalType>(element, `Location.position.latitude is required`);
    const optErrMsg = `Invalid Location.position.latitude; Provided value is not an instance of DecimalType.`;
    assertFhirType<DecimalType>(element, DecimalType, optErrMsg);
    this.latitude = element;
    return this;
  }

  /**
   * @returns `true` if the `latitude` property exists and has a value; `false` otherwise
   */
  public hasLatitudeElement(): boolean {
    return isDefined<DecimalType>(this.latitude) && !this.latitude.isEmpty();
  }

  /**
   * @returns the `latitude` property value as a fhirDecimal if defined; else null
   */
  public getLatitude(): fhirDecimal | null {
    if (this.latitude?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.latitude.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `latitude` property.
   *
   * @param value - the `latitude` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setLatitude(value: fhirDecimal): this {
    assertIsDefined<fhirDecimal>(value, `Location.position.latitude is required`);
    const optErrMsg = `Invalid Location.position.latitude (${String(value)})`;
    this.latitude = new DecimalType(parseFhirPrimitiveData(value, fhirDecimalSchema, optErrMsg));
    return this;
  }

  /**
   * @returns `true` if the `latitude` property exists and has a value; `false` otherwise
   */
  public hasLatitude(): boolean {
    return this.hasLatitudeElement();
  }

  /**
   * @returns the `altitude` property value as a DecimalType object if defined; else an empty DecimalType object
   */
  public getAltitudeElement(): DecimalType {
    return this.altitude ?? new DecimalType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `altitude` property.
   *
   * @param element - the `altitude` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAltitudeElement(element: DecimalType | undefined): this {
    if (isDefined<DecimalType>(element)) {
      const optErrMsg = `Invalid Location.position.altitude; Provided element is not an instance of DecimalType.`;
      assertFhirType<DecimalType>(element, DecimalType, optErrMsg);
      this.altitude = element;
    } else {
      this.altitude = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `altitude` property exists and has a value; `false` otherwise
   */
  public hasAltitudeElement(): boolean {
    return isDefined<DecimalType>(this.altitude) && !this.altitude.isEmpty();
  }

  /**
   * @returns the `altitude` property value as a fhirDecimal if defined; else undefined
   */
  public getAltitude(): fhirDecimal | undefined {
    return this.altitude?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `altitude` property.
   *
   * @param value - the `altitude` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAltitude(value: fhirDecimal | undefined): this {
    if (isDefined<fhirDecimal>(value)) {
      const optErrMsg = `Invalid Location.position.altitude (${String(value)})`;
      this.altitude = new DecimalType(parseFhirPrimitiveData(value, fhirDecimalSchema, optErrMsg));
    } else {
      this.altitude = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `altitude` property exists and has a value; `false` otherwise
   */
  public hasAltitude(): boolean {
    return this.hasAltitudeElement();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Location.position';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.longitude,
      this.latitude,
      this.altitude,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): LocationPositionComponent {
    const dest = new LocationPositionComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: LocationPositionComponent): void {
    super.copyValues(dest);
    dest.longitude = this.longitude ? this.longitude.copy() : null;
    dest.latitude = this.latitude ? this.latitude.copy() : null;
    dest.altitude = this.altitude?.copy();
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

    if (this.hasLongitudeElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirDecimal>(this.getLongitudeElement()!, 'longitude', jsonObj);
    } else {
      missingReqdProperties.push(`Location.position.longitude`);
    }

    if (this.hasLatitudeElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirDecimal>(this.getLatitudeElement()!, 'latitude', jsonObj);
    } else {
      missingReqdProperties.push(`Location.position.latitude`);
    }

    if (this.hasAltitudeElement()) {
      setFhirPrimitiveJson<fhirDecimal>(this.getAltitudeElement(), 'altitude', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
/**
 * LocationHoursOfOperationComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** What days/times during a week is this location usually open
 * - **Definition:** What days/times during a week is this location usually open.
 * - **Comment:** This type of information is commonly found published in directories and on websites informing customers when the facility is available. Specific services within the location may have their own hours which could be shorter (or longer) than the locations hours.
 *
 * @category Data Models: Resource
 * @see [FHIR Location](http://hl7.org/fhir/StructureDefinition/Location)
 */
export class LocationHoursOfOperationComponent extends BackboneElement implements IBackboneElement {
  constructor() {
    super();

    this.daysOfWeekEnum = new DaysOfWeekEnum();
  }

  /**
   * Parse the provided `LocationHoursOfOperationComponent` JSON to instantiate the LocationHoursOfOperationComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `LocationHoursOfOperationComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to LocationHoursOfOperationComponent
   * @returns LocationHoursOfOperationComponent data model or undefined for `LocationHoursOfOperationComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): LocationHoursOfOperationComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'LocationHoursOfOperationComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new LocationHoursOfOperationComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'daysOfWeek';
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
          instance.addDaysOfWeekElement(datatype);
        }
      });
    }

    fieldName = 'allDay';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setAllDayElement(datatype);
    }

    fieldName = 'openingTime';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: TimeType | undefined = fhirParser.parseTimeType(dtJson, dtSiblingJson);
      instance.setOpeningTimeElement(datatype);
    }

    fieldName = 'closingTime';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: TimeType | undefined = fhirParser.parseTimeType(dtJson, dtSiblingJson);
      instance.setClosingTimeElement(datatype);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * FHIR CodeSystem: DaysOfWeek
   *
   * @see {@link DaysOfWeekEnum }
   */
  private readonly daysOfWeekEnum: DaysOfWeekEnum;

  /**
   * Location.hoursOfOperation.daysOfWeek Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** mon | tue | wed | thu | fri | sat | sun
   * - **Definition:** Indicates which days of the week are available between the start and end Times.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link DaysOfWeekEnum }
   */
  private daysOfWeek?: EnumCodeType[] | undefined;

  /**
   * Location.hoursOfOperation.allDay Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The Location is open all day
   * - **Definition:** The Location is open all day.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private allDay?: BooleanType | undefined;

  /**
   * Location.hoursOfOperation.openingTime Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Time that the Location opens
   * - **Definition:** Time that the Location opens.
   * - **FHIR Type:** `time`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private openingTime?: TimeType | undefined;

  /**
   * Location.hoursOfOperation.closingTime Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Time that the Location closes
   * - **Definition:** Time that the Location closes.
   * - **FHIR Type:** `time`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private closingTime?: TimeType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `daysOfWeek` property value as a EnumCodeType array
   *
   * @see CodeSystem Enumeration: {@link DaysOfWeekEnum }
   */
  public getDaysOfWeekEnumType(): EnumCodeType[] {
    return this.daysOfWeek ?? ([] as EnumCodeType[]);
  }

  /**
   * Assigns the provided EnumCodeType array value to the `daysOfWeek` property.
   *
   * @param enumType - the `daysOfWeek` array value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link DaysOfWeekEnum }
   */
  public setDaysOfWeekEnumType(enumType: EnumCodeType[] | undefined): this {
    if (isDefinedList<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid Location.hoursOfOperation.daysOfWeek`;
      assertEnumCodeTypeList<DaysOfWeekEnum>(enumType, DaysOfWeekEnum, errMsgPrefix);
      this.daysOfWeek = enumType;
    } else {
      this.daysOfWeek = undefined;
    }
    return this;
  }

  /**
   * Add the provided EnumCodeType value to the `daysOfWeek` array property.
   *
   * @param enumType - the `daysOfWeek` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   *
   * @see CodeSystem Enumeration: {@link DaysOfWeekEnum }
   */
  public addDaysOfWeekEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid Location.hoursOfOperation.daysOfWeek`;
      assertEnumCodeType<DaysOfWeekEnum>(enumType, DaysOfWeekEnum, errMsgPrefix);
      this.initDaysOfWeek();
      this.daysOfWeek?.push(enumType);
    }
    return this;
  }

  /**
   * @returns `true` if the `daysOfWeek` property exists and has a value; `false` otherwise
   */
  public hasDaysOfWeekEnumType(): boolean {
    return isDefinedList<EnumCodeType>(this.daysOfWeek) && this.daysOfWeek.some((item: EnumCodeType) => !item.isEmpty()) && this.daysOfWeek.every((item: EnumCodeType) => item.fhirCodeEnumeration.length > 0);
  }

  /**
   * @returns the `daysOfWeek` property value as a CodeType array
   *
   * @see CodeSystem Enumeration: {@link DaysOfWeekEnum }
   */
  public getDaysOfWeekElement(): CodeType[] {
    if (this.daysOfWeek === undefined) {
      return [] as CodeType[];
    }
    return this.daysOfWeek as CodeType[];
  }

  /**
   * Assigns the provided PrimitiveType array value to the `daysOfWeek` property.
   *
   * @param element - the `daysOfWeek` array value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link DaysOfWeekEnum }
   */
  public setDaysOfWeekElement(element: CodeType[] | undefined): this {
    if (isDefinedList<CodeType>(element)) {
      const optErrMsg = `Invalid Location.hoursOfOperation.daysOfWeek; Provided element array has an element that is not an instance of CodeType.`;
      assertFhirTypeList<CodeType>(element, CodeType, optErrMsg);
      const enumCodeTypes = [] as EnumCodeType[];
      element.forEach((type: CodeType) => {
        enumCodeTypes.push(new EnumCodeType(type, this.daysOfWeekEnum));
      });
      this.daysOfWeek = enumCodeTypes;
    } else {
      this.daysOfWeek = undefined;
    }
    return this;
  }

  /**
   * Add the provided PrimitiveType value to the `daysOfWeek` array property.
   *
   * @param element - the `daysOfWeek` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link DaysOfWeekEnum }
   */
  public addDaysOfWeekElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid Location.hoursOfOperation.daysOfWeek; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.initDaysOfWeek();
      this.daysOfWeek?.push(new EnumCodeType(element, this.daysOfWeekEnum));
    }
    return this;
  }

  /**
   * @returns `true` if the `daysOfWeek` property exists and has a value; `false` otherwise
   */
  public hasDaysOfWeekElement(): boolean {
    return this.hasDaysOfWeekEnumType();
  }

  /**
   * @returns the `daysOfWeek` property value as a fhirCode array
   *
   * @see CodeSystem Enumeration: {@link DaysOfWeekEnum }
   */
  public getDaysOfWeek(): fhirCode[] {
    if (this.daysOfWeek === undefined) {
      return [] as fhirCode[];
    }
    const values = [] as fhirCode[];
    for (const item of this.daysOfWeek) {
      values.push(item.fhirCode.code);
    }
    return values;
  }

  /**
   * Assigns the provided primitive value array to the `daysOfWeek` property.
   *
   * @param value - the `daysOfWeek` value array
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link DaysOfWeekEnum }
   */
  public setDaysOfWeek(value: fhirCode[] | undefined): this {
    if (isDefinedList<fhirCode>(value)) {
      const enumCodeTypes = [] as EnumCodeType[];
      const optErrMsg = `Invalid Location.hoursOfOperation.daysOfWeek; Provided value is not an instance of fhirCode.`;
      value.forEach((val: fhirCode) => {
        enumCodeTypes.push(new EnumCodeType(parseFhirPrimitiveData(val, fhirCodeSchema, optErrMsg), this.daysOfWeekEnum));
      });
      this.daysOfWeek = enumCodeTypes;
    } else {
      this.daysOfWeek = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `daysOfWeek` array property.
   *
   * @param value - the `daysOfWeek` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link DaysOfWeekEnum }
   */
  public addDaysOfWeek(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      this.initDaysOfWeek();
      const optErrMsg = `Invalid Location.hoursOfOperation.daysOfWeek; Provided value is not an instance of fhirCode.`;
      this.daysOfWeek?.push(new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.daysOfWeekEnum));
    }
    return this;
  }

  /**
   * @returns `true` if the `daysOfWeek` property exists and has a value; `false` otherwise
   */
  public hasDaysOfWeek(): boolean {
    return this.hasDaysOfWeekEnumType();
  }

  /**
   * Initialize the daysOfWeek property
   */
  private initDaysOfWeek(): void {
    if(!this.hasDaysOfWeekEnumType()) {
      this.daysOfWeek = [] as EnumCodeType[];
    }
  }

  /**
   * @returns the `allDay` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getAllDayElement(): BooleanType {
    return this.allDay ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `allDay` property.
   *
   * @param element - the `allDay` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAllDayElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid Location.hoursOfOperation.allDay; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.allDay = element;
    } else {
      this.allDay = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `allDay` property exists and has a value; `false` otherwise
   */
  public hasAllDayElement(): boolean {
    return isDefined<BooleanType>(this.allDay) && !this.allDay.isEmpty();
  }

  /**
   * @returns the `allDay` property value as a fhirBoolean if defined; else undefined
   */
  public getAllDay(): fhirBoolean | undefined {
    return this.allDay?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `allDay` property.
   *
   * @param value - the `allDay` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAllDay(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid Location.hoursOfOperation.allDay (${String(value)})`;
      this.allDay = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.allDay = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `allDay` property exists and has a value; `false` otherwise
   */
  public hasAllDay(): boolean {
    return this.hasAllDayElement();
  }

  /**
   * @returns the `openingTime` property value as a TimeType object if defined; else an empty TimeType object
   */
  public getOpeningTimeElement(): TimeType {
    return this.openingTime ?? new TimeType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `openingTime` property.
   *
   * @param element - the `openingTime` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setOpeningTimeElement(element: TimeType | undefined): this {
    if (isDefined<TimeType>(element)) {
      const optErrMsg = `Invalid Location.hoursOfOperation.openingTime; Provided element is not an instance of TimeType.`;
      assertFhirType<TimeType>(element, TimeType, optErrMsg);
      this.openingTime = element;
    } else {
      this.openingTime = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `openingTime` property exists and has a value; `false` otherwise
   */
  public hasOpeningTimeElement(): boolean {
    return isDefined<TimeType>(this.openingTime) && !this.openingTime.isEmpty();
  }

  /**
   * @returns the `openingTime` property value as a fhirTime if defined; else undefined
   */
  public getOpeningTime(): fhirTime | undefined {
    return this.openingTime?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `openingTime` property.
   *
   * @param value - the `openingTime` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setOpeningTime(value: fhirTime | undefined): this {
    if (isDefined<fhirTime>(value)) {
      const optErrMsg = `Invalid Location.hoursOfOperation.openingTime (${String(value)})`;
      this.openingTime = new TimeType(parseFhirPrimitiveData(value, fhirTimeSchema, optErrMsg));
    } else {
      this.openingTime = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `openingTime` property exists and has a value; `false` otherwise
   */
  public hasOpeningTime(): boolean {
    return this.hasOpeningTimeElement();
  }

  /**
   * @returns the `closingTime` property value as a TimeType object if defined; else an empty TimeType object
   */
  public getClosingTimeElement(): TimeType {
    return this.closingTime ?? new TimeType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `closingTime` property.
   *
   * @param element - the `closingTime` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setClosingTimeElement(element: TimeType | undefined): this {
    if (isDefined<TimeType>(element)) {
      const optErrMsg = `Invalid Location.hoursOfOperation.closingTime; Provided element is not an instance of TimeType.`;
      assertFhirType<TimeType>(element, TimeType, optErrMsg);
      this.closingTime = element;
    } else {
      this.closingTime = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `closingTime` property exists and has a value; `false` otherwise
   */
  public hasClosingTimeElement(): boolean {
    return isDefined<TimeType>(this.closingTime) && !this.closingTime.isEmpty();
  }

  /**
   * @returns the `closingTime` property value as a fhirTime if defined; else undefined
   */
  public getClosingTime(): fhirTime | undefined {
    return this.closingTime?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `closingTime` property.
   *
   * @param value - the `closingTime` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setClosingTime(value: fhirTime | undefined): this {
    if (isDefined<fhirTime>(value)) {
      const optErrMsg = `Invalid Location.hoursOfOperation.closingTime (${String(value)})`;
      this.closingTime = new TimeType(parseFhirPrimitiveData(value, fhirTimeSchema, optErrMsg));
    } else {
      this.closingTime = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `closingTime` property exists and has a value; `false` otherwise
   */
  public hasClosingTime(): boolean {
    return this.hasClosingTimeElement();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Location.hoursOfOperation';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.daysOfWeek,
      this.allDay,
      this.openingTime,
      this.closingTime,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): LocationHoursOfOperationComponent {
    const dest = new LocationHoursOfOperationComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: LocationHoursOfOperationComponent): void {
    super.copyValues(dest);
    const daysOfWeekList = copyListValues<EnumCodeType>(this.daysOfWeek);
    dest.daysOfWeek = daysOfWeekList.length === 0 ? undefined : daysOfWeekList;
    dest.allDay = this.allDay?.copy();
    dest.openingTime = this.openingTime?.copy();
    dest.closingTime = this.closingTime?.copy();
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

    if (this.hasDaysOfWeekElement()) {
      setFhirPrimitiveListJson<fhirCode>(this.getDaysOfWeekElement(), 'daysOfWeek', jsonObj);
    }

    if (this.hasAllDayElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getAllDayElement(), 'allDay', jsonObj);
    }

    if (this.hasOpeningTimeElement()) {
      setFhirPrimitiveJson<fhirTime>(this.getOpeningTimeElement(), 'openingTime', jsonObj);
    }

    if (this.hasClosingTimeElement()) {
      setFhirPrimitiveJson<fhirTime>(this.getClosingTimeElement(), 'closingTime', jsonObj);
    }

    return jsonObj;
  }
}
