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
 * StructureDefinition.description: Details and position information for a place where services are provided and resources and participants may be stored, found, contained, or accommodated.
 * StructureDefinition.fhirVersion: 5.0.0
 *
 * For questions, suggestions, or bugs, please open an issue at [GitHub ts-fhir-datamodels/issues](https://github.com/Paqrat76/ts-fhir-datamodels/issues).
 *
 * @packageDocumentation
 */

import {
  BackboneElement,
  CodeType,
  DecimalType,
  DomainResource,
  EnumCodeType,
  FhirParser,
  IBackboneElement,
  IDomainResource,
  JSON,
  MarkdownType,
  PrimitiveType,
  PrimitiveTypeJson,
  ReferenceTargets,
  StringType,
  assertEnumCodeType,
  assertFhirType,
  assertFhirTypeList,
  copyListValues,
  fhirCode,
  fhirCodeSchema,
  fhirDecimal,
  fhirDecimalSchema,
  fhirMarkdown,
  fhirMarkdownSchema,
  fhirString,
  fhirStringSchema,
  getPrimitiveTypeJson,
  getPrimitiveTypeListJson,
  isDefined,
  isDefinedList,
  isElementEmpty,
  isEmpty,
  isRequiredElementEmpty,
  parseFhirPrimitiveData,
  setFhirBackboneElementJson,
  setFhirComplexJson,
  setFhirComplexListJson,
  setFhirPrimitiveJson,
  setFhirPrimitiveListJson,
} from '@paq-ts-fhir/fhir-core';
import { Address, Availability, CodeableConcept, Coding, ExtendedContactDetail, Identifier, PARSABLE_DATATYPE_MAP, Reference, VirtualServiceDetail } from '../complex-types/complex-datatypes';
import { LocationModeEnum } from '../code-systems/LocationModeEnum';
import { LocationStatusEnum } from '../code-systems/LocationStatusEnum';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';

/**
 * Location Class
 *
 * @remarks
 * Details and position information for a place where services are provided and resources and participants may be stored, found, contained, or accommodated.
 *
 * **FHIR Specification**
 * - **Short:** Details and position information for a place
 * - **Definition:** Details and position information for a place where services are provided and resources and participants may be stored, found, contained, or accommodated.
 * - **FHIR Version:** 5.0.0
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
      const datatype: MarkdownType | undefined = fhirParser.parseMarkdownType(dtJson, dtSiblingJson);
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

    fieldName = 'contact';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: ExtendedContactDetail | undefined = ExtendedContactDetail.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addContact(datatype);
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

    fieldName = 'form';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setForm(datatype);
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

    fieldName = 'characteristic';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addCharacteristic(datatype);
        }
      });
    }

    fieldName = 'hoursOfOperation';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Availability | undefined = Availability.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addHoursOfOperation(datatype);
        }
      });
    }

    fieldName = 'virtualService';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: VirtualServiceDetail | undefined = VirtualServiceDetail.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addVirtualService(datatype);
        }
      });
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
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private description?: MarkdownType | undefined;

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
   * Location.contact Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Official contact details for the location
   * - **Definition:** The contact details of communication devices available at the location. This can include addresses, phone numbers, fax numbers, mobile numbers, email addresses and web sites.
   * - **Comment:** The address/telecom use code \'home\' are not to be used. Note that these contacts are not the contact details of people who provide the service (that would be through PractitionerRole), these are official contacts for the Healthcare itself for specific purposes. E.g. Mailing Addresses, Billing Addresses, Contact numbers for Booking or Billing Enquiries, general web address, web address for online bookings etc. If this is empty (or the type of interest is empty), refer to the organization\'s contacts.
   * - **Requirements:** Need to keep track of both simple contact details and also assigned contacts within larger organizations.
   * - **FHIR Type:** `ExtendedContactDetail`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private contact?: ExtendedContactDetail[] | undefined;

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
   * Location.form Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Physical form of the location
   * - **Definition:** Physical form of the location, e.g. building, room, vehicle, road, virtual.
   * - **Requirements:** For purposes of showing relevant locations in queries, we need to categorize locations.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private form?: CodeableConcept | undefined;

  /**
   * Location.position Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The absolute geographic location
   * - **Definition:** The absolute geographic location of the Location, expressed using the WGS84 datum (This is the same co-ordinate system used in KML).
   * - **Comment:** To define a boundary shape for this location use the standard extension `[http://hl7.org/fhir/StructureDefinition/location-boundary-geojson](http://hl7.org/fhir/extensions/https://hl7.org/fhir/StructureDefinition-location-boundary-geojson.html)`, and search using the `contains` special search parameter.
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
   * Location.characteristic Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Collection of characteristics (attributes)
   * - **Definition:** Collection of characteristics (attributes).
   * - **Comment:** These could be such things as is wheelchair accessible.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private characteristic?: CodeableConcept[] | undefined;

  /**
   * Location.hoursOfOperation Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** What days/times during a week is this location usually open (including exceptions)
   * - **Definition:** What days/times during a week is this location usually open, and any exceptions where the location is not available.
   * - **Comment:** This type of information is commonly found published in directories and on websites informing customers when the facility is available. Specific services within the location may have their own hours which could be shorter (or longer) than the locations hours. Systems may choose to render availability differently than it is exchanged on the interface. For example, rather than "Mon, Tue, Wed, Thur, Fri from 9am-12am; Mon, Tue, Wed, Thur, Fri from 1pm-5pm" as would be implied by two availableTime repetitions, an application could render this information as "Mon-Fri 9-12am and 1-5pm". The availableStartTime is the opening time, and the availableEndTime is the closing time.
   * - **FHIR Type:** `Availability`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private hoursOfOperation?: Availability[] | undefined;

  /**
   * Location.virtualService Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Connection details of a virtual service (e.g. conference call)
   * - **Definition:** Connection details of a virtual service (e.g. shared conference call facility with dedicated number/details).
   * - **Comment:** There are two types of virtual meetings that often exist: * a persistent, virtual meeting room that can only be used for a single purpose at a time,  * and a dynamic virtual meeting room that is generated on demand for a specific purpose.  Implementers may consider using Appointment.virtualService for virtual meeting rooms that are generated on-demand.
   * - **FHIR Type:** `VirtualServiceDetail`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private virtualService?: VirtualServiceDetail[] | undefined;

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
   * @returns the `description` property value as a MarkdownType object if defined; else an empty MarkdownType object
   */
  public getDescriptionElement(): MarkdownType {
    return this.description ?? new MarkdownType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `description` property.
   *
   * @param element - the `description` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDescriptionElement(element: MarkdownType | undefined): this {
    if (isDefined<MarkdownType>(element)) {
      const optErrMsg = `Invalid Location.description; Provided element is not an instance of MarkdownType.`;
      assertFhirType<MarkdownType>(element, MarkdownType, optErrMsg);
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
    return isDefined<MarkdownType>(this.description) && !this.description.isEmpty();
  }

  /**
   * @returns the `description` property value as a fhirMarkdown if defined; else undefined
   */
  public getDescription(): fhirMarkdown | undefined {
    return this.description?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `description` property.
   *
   * @param value - the `description` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDescription(value: fhirMarkdown | undefined): this {
    if (isDefined<fhirMarkdown>(value)) {
      const optErrMsg = `Invalid Location.description (${String(value)})`;
      this.description = new MarkdownType(parseFhirPrimitiveData(value, fhirMarkdownSchema, optErrMsg));
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
   * @returns the `contact` property value as a ExtendedContactDetail array
   */
  public getContact(): ExtendedContactDetail[] {
    return this.contact ?? ([] as ExtendedContactDetail[]);
  }

  /**
   * Assigns the provided ExtendedContactDetail array value to the `contact` property.
   *
   * @param value - the `contact` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setContact(value: ExtendedContactDetail[] | undefined): this {
    if (isDefinedList<ExtendedContactDetail>(value)) {
      const optErrMsg = `Invalid Location.contact; Provided value array has an element that is not an instance of ExtendedContactDetail.`;
      assertFhirTypeList<ExtendedContactDetail>(value, ExtendedContactDetail, optErrMsg);
      this.contact = value;
    } else {
      this.contact = undefined;
    }
    return this;
  }

  /**
   * Add the provided ExtendedContactDetail value to the `contact` array property.
   *
   * @param value - the `contact` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addContact(value: ExtendedContactDetail | undefined): this {
    if (isDefined<ExtendedContactDetail>(value)) {
      const optErrMsg = `Invalid Location.contact; Provided element is not an instance of ExtendedContactDetail.`;
      assertFhirType<ExtendedContactDetail>(value, ExtendedContactDetail, optErrMsg);
      this.initContact();
      this.contact?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `contact` property exists and has a value; `false` otherwise
   */
  public hasContact(): boolean {
    return isDefinedList<ExtendedContactDetail>(this.contact) && this.contact.some((item: ExtendedContactDetail) => !item.isEmpty());
  }

  /**
   * Initialize the `contact` property
   */
  private initContact(): void {
    if(!this.hasContact()) {
      this.contact = [] as ExtendedContactDetail[];
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
   * @returns the `form` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getForm(): CodeableConcept {
    return this.form ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Form object value to the `form` property.
   *
   * @param value - the `form` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setForm(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Location.form; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.form = value;
    } else {
      this.form = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `form` property exists and has a value; `false` otherwise
   */
  public hasForm(): boolean {
    return isDefined<CodeableConcept>(this.form) && !this.form.isEmpty();
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
   * @returns the `characteristic` property value as a CodeableConcept array
   */
  public getCharacteristic(): CodeableConcept[] {
    return this.characteristic ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `characteristic` property.
   *
   * @param value - the `characteristic` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCharacteristic(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Location.characteristic; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.characteristic = value;
    } else {
      this.characteristic = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `characteristic` array property.
   *
   * @param value - the `characteristic` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addCharacteristic(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Location.characteristic; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initCharacteristic();
      this.characteristic?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `characteristic` property exists and has a value; `false` otherwise
   */
  public hasCharacteristic(): boolean {
    return isDefinedList<CodeableConcept>(this.characteristic) && this.characteristic.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `characteristic` property
   */
  private initCharacteristic(): void {
    if(!this.hasCharacteristic()) {
      this.characteristic = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `hoursOfOperation` property value as a Availability array
   */
  public getHoursOfOperation(): Availability[] {
    return this.hoursOfOperation ?? ([] as Availability[]);
  }

  /**
   * Assigns the provided Availability array value to the `hoursOfOperation` property.
   *
   * @param value - the `hoursOfOperation` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setHoursOfOperation(value: Availability[] | undefined): this {
    if (isDefinedList<Availability>(value)) {
      const optErrMsg = `Invalid Location.hoursOfOperation; Provided value array has an element that is not an instance of Availability.`;
      assertFhirTypeList<Availability>(value, Availability, optErrMsg);
      this.hoursOfOperation = value;
    } else {
      this.hoursOfOperation = undefined;
    }
    return this;
  }

  /**
   * Add the provided Availability value to the `hoursOfOperation` array property.
   *
   * @param value - the `hoursOfOperation` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addHoursOfOperation(value: Availability | undefined): this {
    if (isDefined<Availability>(value)) {
      const optErrMsg = `Invalid Location.hoursOfOperation; Provided element is not an instance of Availability.`;
      assertFhirType<Availability>(value, Availability, optErrMsg);
      this.initHoursOfOperation();
      this.hoursOfOperation?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `hoursOfOperation` property exists and has a value; `false` otherwise
   */
  public hasHoursOfOperation(): boolean {
    return isDefinedList<Availability>(this.hoursOfOperation) && this.hoursOfOperation.some((item: Availability) => !item.isEmpty());
  }

  /**
   * Initialize the `hoursOfOperation` property
   */
  private initHoursOfOperation(): void {
    if(!this.hasHoursOfOperation()) {
      this.hoursOfOperation = [] as Availability[];
    }
  }

  /**
   * @returns the `virtualService` property value as a VirtualServiceDetail array
   */
  public getVirtualService(): VirtualServiceDetail[] {
    return this.virtualService ?? ([] as VirtualServiceDetail[]);
  }

  /**
   * Assigns the provided VirtualServiceDetail array value to the `virtualService` property.
   *
   * @param value - the `virtualService` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setVirtualService(value: VirtualServiceDetail[] | undefined): this {
    if (isDefinedList<VirtualServiceDetail>(value)) {
      const optErrMsg = `Invalid Location.virtualService; Provided value array has an element that is not an instance of VirtualServiceDetail.`;
      assertFhirTypeList<VirtualServiceDetail>(value, VirtualServiceDetail, optErrMsg);
      this.virtualService = value;
    } else {
      this.virtualService = undefined;
    }
    return this;
  }

  /**
   * Add the provided VirtualServiceDetail value to the `virtualService` array property.
   *
   * @param value - the `virtualService` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addVirtualService(value: VirtualServiceDetail | undefined): this {
    if (isDefined<VirtualServiceDetail>(value)) {
      const optErrMsg = `Invalid Location.virtualService; Provided element is not an instance of VirtualServiceDetail.`;
      assertFhirType<VirtualServiceDetail>(value, VirtualServiceDetail, optErrMsg);
      this.initVirtualService();
      this.virtualService?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `virtualService` property exists and has a value; `false` otherwise
   */
  public hasVirtualService(): boolean {
    return isDefinedList<VirtualServiceDetail>(this.virtualService) && this.virtualService.some((item: VirtualServiceDetail) => !item.isEmpty());
  }

  /**
   * Initialize the `virtualService` property
   */
  private initVirtualService(): void {
    if(!this.hasVirtualService()) {
      this.virtualService = [] as VirtualServiceDetail[];
    }
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
      this.contact,
      this.address,
      this.form,
      this.position,
      this.managingOrganization,
      this.partOf,
      this.characteristic,
      this.hoursOfOperation,
      this.virtualService,
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
    const contactList = copyListValues<ExtendedContactDetail>(this.contact);
    dest.contact = contactList.length === 0 ? undefined : contactList;
    dest.address = this.address?.copy();
    dest.form = this.form?.copy();
    dest.position = this.position?.copy();
    dest.managingOrganization = this.managingOrganization?.copy();
    dest.partOf = this.partOf?.copy();
    const characteristicList = copyListValues<CodeableConcept>(this.characteristic);
    dest.characteristic = characteristicList.length === 0 ? undefined : characteristicList;
    const hoursOfOperationList = copyListValues<Availability>(this.hoursOfOperation);
    dest.hoursOfOperation = hoursOfOperationList.length === 0 ? undefined : hoursOfOperationList;
    const virtualServiceList = copyListValues<VirtualServiceDetail>(this.virtualService);
    dest.virtualService = virtualServiceList.length === 0 ? undefined : virtualServiceList;
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
      setFhirPrimitiveJson<fhirMarkdown>(this.getDescriptionElement(), 'description', jsonObj);
    }

    if (this.hasModeElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getModeElement()!, 'mode', jsonObj);
    }

    if (this.hasType()) {
      setFhirComplexListJson(this.getType(), 'type', jsonObj);
    }

    if (this.hasContact()) {
      setFhirComplexListJson(this.getContact(), 'contact', jsonObj);
    }

    if (this.hasAddress()) {
      setFhirComplexJson(this.getAddress(), 'address', jsonObj);
    }

    if (this.hasForm()) {
      setFhirComplexJson(this.getForm(), 'form', jsonObj);
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

    if (this.hasCharacteristic()) {
      setFhirComplexListJson(this.getCharacteristic(), 'characteristic', jsonObj);
    }

    if (this.hasHoursOfOperation()) {
      setFhirComplexListJson(this.getHoursOfOperation(), 'hoursOfOperation', jsonObj);
    }

    if (this.hasVirtualService()) {
      setFhirComplexListJson(this.getVirtualService(), 'virtualService', jsonObj);
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
 * - **Comment:** To define a boundary shape for this location use the standard extension `[http://hl7.org/fhir/StructureDefinition/location-boundary-geojson](http://hl7.org/fhir/extensions/https://hl7.org/fhir/StructureDefinition-location-boundary-geojson.html)`, and search using the `contains` special search parameter.
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

    fieldName = 'longitude';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DecimalType | undefined = fhirParser.parseDecimalType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setLongitude(null);
      } else {
        instance.setLongitudeElement(datatype);
      }
    } else {
      instance.setLongitude(null);
    }

    fieldName = 'latitude';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DecimalType | undefined = fhirParser.parseDecimalType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setLatitude(null);
      } else {
        instance.setLatitudeElement(datatype);
      }
    } else {
      instance.setLatitude(null);
    }

    fieldName = 'altitude';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DecimalType | undefined = fhirParser.parseDecimalType(dtJson, dtSiblingJson);
      instance.setAltitudeElement(datatype);
    }

    return instance;
  }

  /**
   * Location.position.longitude Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Longitude with WGS84 datum
   * - **Definition:** Longitude. The value domain and the interpretation are the same as for the text of the longitude element in KML (see notes on Location main page).
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
   * - **Definition:** Latitude. The value domain and the interpretation are the same as for the text of the latitude element in KML (see notes on Location main page).
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
   * - **Definition:** Altitude. The value domain and the interpretation are the same as for the text of the altitude element in KML (see notes on Location main page).
   * - **FHIR Type:** `decimal`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private altitude?: DecimalType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `longitude` property value as a DecimalType object if defined; else an empty DecimalType object
   */
  public getLongitudeElement(): DecimalType {
    return this.longitude ?? new DecimalType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `longitude` property.
   *
   * @param element - the `longitude` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setLongitudeElement(element: DecimalType | undefined | null): this {
    if (isDefined<DecimalType>(element)) {
      const optErrMsg = `Invalid Location.position.longitude; Provided value is not an instance of DecimalType.`;
      assertFhirType<DecimalType>(element, DecimalType, optErrMsg);
      this.longitude = element;
    } else {
      this.longitude = null;
    }
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
  public setLongitude(value: fhirDecimal | undefined | null): this {
    if (isDefined<fhirDecimal>(value)) {
      const optErrMsg = `Invalid Location.position.longitude (${String(value)})`;
      this.longitude = new DecimalType(parseFhirPrimitiveData(value, fhirDecimalSchema, optErrMsg));
    } else {
      this.longitude = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `longitude` property exists and has a value; `false` otherwise
   */
  public hasLongitude(): boolean {
    return this.hasLongitudeElement();
  }

  /**
   * @returns the `latitude` property value as a DecimalType object if defined; else an empty DecimalType object
   */
  public getLatitudeElement(): DecimalType {
    return this.latitude ?? new DecimalType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `latitude` property.
   *
   * @param element - the `latitude` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setLatitudeElement(element: DecimalType | undefined | null): this {
    if (isDefined<DecimalType>(element)) {
      const optErrMsg = `Invalid Location.position.latitude; Provided value is not an instance of DecimalType.`;
      assertFhirType<DecimalType>(element, DecimalType, optErrMsg);
      this.latitude = element;
    } else {
      this.latitude = null;
    }
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
  public setLatitude(value: fhirDecimal | undefined | null): this {
    if (isDefined<fhirDecimal>(value)) {
      const optErrMsg = `Invalid Location.position.latitude (${String(value)})`;
      this.latitude = new DecimalType(parseFhirPrimitiveData(value, fhirDecimalSchema, optErrMsg));
    } else {
      this.latitude = null;
    }
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
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.longitude, this.latitude, 
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
   */
  public override toJSON(): JSON.Value | undefined {
    if (this.isEmpty()) {
      return undefined;
    }

    let jsonObj = super.toJSON() as JSON.Object | undefined;
    jsonObj ??= {} as JSON.Object;

    if (this.hasLongitudeElement()) {
      setFhirPrimitiveJson<fhirDecimal>(this.getLongitudeElement(), 'longitude', jsonObj);
    } else {
      jsonObj['longitude'] = null;
    }

    if (this.hasLatitudeElement()) {
      setFhirPrimitiveJson<fhirDecimal>(this.getLatitudeElement(), 'latitude', jsonObj);
    } else {
      jsonObj['latitude'] = null;
    }

    if (this.hasAltitudeElement()) {
      setFhirPrimitiveJson<fhirDecimal>(this.getAltitudeElement(), 'altitude', jsonObj);
    }

    return jsonObj;
  }
}
