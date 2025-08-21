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
 * Device Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/Device
 * StructureDefinition.name: Device
 * StructureDefinition.description: A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device.
 * StructureDefinition.fhirVersion: 4.0.1
 *
 * For questions, suggestions, or bugs, please open an issue at [GitHub ts-fhir-datamodels/issues](https://github.com/Paqrat76/ts-fhir-datamodels/issues).
 *
 * @packageDocumentation
 */

import { strict as assert } from 'node:assert';
import {
  BackboneElement,
  Base64BinaryType,
  CodeType,
  DateTimeType,
  DomainResource,
  EnumCodeType,
  FhirError,
  FhirParser,
  IBackboneElement,
  IDomainResource,
  INSTANCE_EMPTY_ERROR_MSG,
  JSON,
  PrimitiveType,
  REQUIRED_PROPERTIES_DO_NOT_EXIST,
  REQUIRED_PROPERTIES_REQD_IN_JSON,
  ReferenceTargets,
  StringType,
  UriType,
  assertEnumCodeType,
  assertFhirType,
  assertFhirTypeList,
  assertIsDefined,
  constructorCodeValueAsEnumCodeType,
  copyListValues,
  fhirBase64Binary,
  fhirBase64BinarySchema,
  fhirCode,
  fhirCodeSchema,
  fhirDateTime,
  fhirDateTimeSchema,
  fhirString,
  fhirStringSchema,
  fhirUri,
  fhirUriSchema,
  getPrimitiveTypeJson,
  isDefined,
  isDefinedList,
  isElementEmpty,
  isEmpty,
  parseFhirPrimitiveData,
  setFhirBackboneElementListJson,
  setFhirComplexJson,
  setFhirComplexListJson,
  setFhirPrimitiveJson,
} from '@paq-ts-fhir/fhir-core';
import { Annotation, CodeableConcept, ContactPoint, Identifier, PARSABLE_DATATYPE_MAP, Quantity, Reference } from '../complex-types/complex-datatypes';
import { DeviceNametypeEnum } from '../code-systems/DeviceNametypeEnum';
import { DeviceStatusEnum } from '../code-systems/DeviceStatusEnum';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';
import { UdiEntryTypeEnum } from '../code-systems/UdiEntryTypeEnum';

/**
 * Device Class
 *
 * @remarks
 * A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device.
 *
 * Allows institutions to track their devices.
 *
 * **FHIR Specification**
 * - **Short:** Item used in healthcare
 * - **Definition:** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device.
 * - **FHIR Version:** 4.0.1
 *
 * @category Data Models: Resource
 * @see [FHIR Device](http://hl7.org/fhir/StructureDefinition/Device)
 */
export class Device extends DomainResource implements IDomainResource {
  constructor() {
    super();

    this.deviceStatusEnum = new DeviceStatusEnum();
  }

  /**
   * Parse the provided `Device` JSON to instantiate the Device data model.
   *
   * @param sourceJson - JSON representing FHIR `Device`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to Device
   * @returns Device data model or undefined for `Device`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): Device | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'Device';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new Device();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'Device');
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

    fieldName = 'definition';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setDefinition(datatype);
    }

    fieldName = 'udiCarrier';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: DeviceUdiCarrierComponent | undefined = DeviceUdiCarrierComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addUdiCarrier(component);
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

    fieldName = 'statusReason';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addStatusReason(datatype);
        }
      });
    }

    fieldName = 'distinctIdentifier';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setDistinctIdentifierElement(datatype);
    }

    fieldName = 'manufacturer';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setManufacturerElement(datatype);
    }

    fieldName = 'manufactureDate';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dtJson, dtSiblingJson);
      instance.setManufactureDateElement(datatype);
    }

    fieldName = 'expirationDate';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dtJson, dtSiblingJson);
      instance.setExpirationDateElement(datatype);
    }

    fieldName = 'lotNumber';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setLotNumberElement(datatype);
    }

    fieldName = 'serialNumber';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setSerialNumberElement(datatype);
    }

    fieldName = 'deviceName';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: DeviceDeviceNameComponent | undefined = DeviceDeviceNameComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addDeviceName(component);
        }
      });
    }

    fieldName = 'modelNumber';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setModelNumberElement(datatype);
    }

    fieldName = 'partNumber';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setPartNumberElement(datatype);
    }

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setType(datatype);
    }

    fieldName = 'specialization';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: DeviceSpecializationComponent | undefined = DeviceSpecializationComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addSpecialization(component);
        }
      });
    }

    fieldName = 'version';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: DeviceVersionComponent | undefined = DeviceVersionComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addVersion(component);
        }
      });
    }

    fieldName = 'property';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: DevicePropertyComponent | undefined = DevicePropertyComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addProperty(component);
        }
      });
    }

    fieldName = 'patient';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setPatient(datatype);
    }

    fieldName = 'owner';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setOwner(datatype);
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

    fieldName = 'location';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setLocation(datatype);
    }

    fieldName = 'url';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: UriType | undefined = fhirParser.parseUriType(dtJson, dtSiblingJson);
      instance.setUrlElement(datatype);
    }

    fieldName = 'note';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Annotation | undefined = Annotation.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addNote(datatype);
        }
      });
    }

    fieldName = 'safety';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addSafety(datatype);
        }
      });
    }

    fieldName = 'parent';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setParent(datatype);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * Device.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Instance identifier
   * - **Definition:** Unique instance identifiers assigned to a device by manufacturers other organizations or owners.
   * - **Comment:** The barcode string from a barcode present on a device label or package may identify the instance, include names given to the device in local usage, or may identify the type of device. If the identifier identifies the type of device, Device.type element should be used.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private identifier?: Identifier[] | undefined;

  /**
   * Device.definition Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The reference to the definition for the device
   * - **Definition:** The reference to the definition for the device.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/DeviceDefinition',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private definition?: Reference | undefined;

  /**
   * Device.udiCarrier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Unique Device Identifier (UDI) Barcode string
   * - **Definition:** Unique device identifier (UDI) assigned to device label or package.  Note that the Device may include multiple udiCarriers as it either may include just the udiCarrier for the jurisdiction it is sold, or for multiple jurisdictions it could have been sold.
   * - **Comment:** UDI may identify an unique instance of a device, or it may only identify the type of the device.  See [UDI mappings](https://hl7.org/fhir/device-mappings.html#udi) for a complete mapping of UDI parts to Device.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private udiCarrier?: DeviceUdiCarrierComponent[] | undefined;

  /**
   * FHIR CodeSystem: DeviceStatus
   *
   * @see {@link DeviceStatusEnum }
   */
  private readonly deviceStatusEnum: DeviceStatusEnum;

  /**
   * Device.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** active | inactive | entered-in-error | unknown
   * - **Definition:** Status of the Device availability.
   * - **Comment:** This element is labeled as a modifier because the status contains the codes inactive and entered-in-error that mark the device (record)as not currently valid.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** true
   * - **isModifierReason:** This element is labelled as a modifier because it is a status element that contains status entered-in-error which means that the resource should not be treated as valid
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link DeviceStatusEnum }
   */
  private status?: EnumCodeType | undefined;

  /**
   * Device.statusReason Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** online | paused | standby | offline | not-ready | transduc-discon | hw-discon | off
   * - **Definition:** Reason for the dtatus of the Device availability.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private statusReason?: CodeableConcept[] | undefined;

  /**
   * Device.distinctIdentifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The distinct identification string
   * - **Definition:** The distinct identification string as required by regulation for a human cell, tissue, or cellular and tissue-based product.
   * - **Comment:** For example, this applies to devices in the United States regulated under *Code of Federal Regulation 21CFR§1271.290(c)*.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private distinctIdentifier?: StringType | undefined;

  /**
   * Device.manufacturer Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name of device manufacturer
   * - **Definition:** A name of the manufacturer.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private manufacturer?: StringType | undefined;

  /**
   * Device.manufactureDate Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Date when the device was made
   * - **Definition:** The date and time when the device was manufactured.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private manufactureDate?: DateTimeType | undefined;

  /**
   * Device.expirationDate Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Date and time of expiry of this device (if applicable)
   * - **Definition:** The date and time beyond which this device is no longer valid or should not be used (if applicable).
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private expirationDate?: DateTimeType | undefined;

  /**
   * Device.lotNumber Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Lot number of manufacture
   * - **Definition:** Lot number assigned by the manufacturer.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private lotNumber?: StringType | undefined;

  /**
   * Device.serialNumber Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Serial number assigned by the manufacturer
   * - **Definition:** The serial number assigned by the organization when the device was manufactured.
   * - **Comment:** Alphanumeric Maximum 20.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private serialNumber?: StringType | undefined;

  /**
   * Device.deviceName Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The name of the device as given by the manufacturer
   * - **Definition:** This represents the manufacturer\'s name of the device as provided by the device, from a UDI label, or by a person describing the Device.  This typically would be used when a person provides the name(s) or when the device represents one of the names available from DeviceDefinition.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private deviceName?: DeviceDeviceNameComponent[] | undefined;

  /**
   * Device.modelNumber Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The model number for the device
   * - **Definition:** The model number for the device.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private modelNumber?: StringType | undefined;

  /**
   * Device.partNumber Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The part number of the device
   * - **Definition:** The part number of the device.
   * - **Comment:** Alphanumeric Maximum 20.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private partNumber?: StringType | undefined;

  /**
   * Device.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The kind or type of device
   * - **Definition:** The kind or type of device.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private type_?: CodeableConcept | undefined;

  /**
   * Device.specialization Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The capabilities supported on a  device, the standards to which the device conforms for a particular purpose, and used for the communication
   * - **Definition:** The capabilities supported on a  device, the standards to which the device conforms for a particular purpose, and used for the communication.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private specialization?: DeviceSpecializationComponent[] | undefined;

  /**
   * Device.version Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The actual design of the device or software version running on the device
   * - **Definition:** The actual design of the device or software version running on the device.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private version?: DeviceVersionComponent[] | undefined;

  /**
   * Device.property Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The actual configuration settings of a device as it actually operates, e.g., regulation status, time properties
   * - **Definition:** The actual configuration settings of a device as it actually operates, e.g., regulation status, time properties.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private property?: DevicePropertyComponent[] | undefined;

  /**
   * Device.patient Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Patient to whom Device is affixed
   * - **Definition:** Patient information, If the device is affixed to a person.
   * - **Requirements:** If the device is implanted in a patient, then need to associate the device to the patient.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private patient?: Reference | undefined;

  /**
   * Device.owner Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Organization responsible for device
   * - **Definition:** An organization that is responsible for the provision and ongoing maintenance of the device.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private owner?: Reference | undefined;

  /**
   * Device.contact Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Details for human/organization for support
   * - **Definition:** Contact details for an organization or a particular human that is responsible for the device.
   * - **Comment:** used for troubleshooting etc.
   * - **FHIR Type:** `ContactPoint`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private contact?: ContactPoint[] | undefined;

  /**
   * Device.location Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Where the device is found
   * - **Definition:** The place where the device can be found.
   * - **Requirements:** Device.location can be used to track device location.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Location',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private location?: Reference | undefined;

  /**
   * Device.url Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Network address to contact device
   * - **Definition:** A network address on which the device may be contacted directly.
   * - **Comment:** If the device is running a FHIR server, the network address should  be the Base URL from which a conformance statement may be retrieved.
   * - **FHIR Type:** `uri`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private url?: UriType | undefined;

  /**
   * Device.note Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Device notes and comments
   * - **Definition:** Descriptive information, usage information or implantation information that is not captured in an existing element.
   * - **FHIR Type:** `Annotation`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private note?: Annotation[] | undefined;

  /**
   * Device.safety Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Safety Characteristics of Device
   * - **Definition:** Provides additional safety characteristics about a medical device.  For example devices containing latex.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private safety?: CodeableConcept[] | undefined;

  /**
   * Device.parent Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The parent device
   * - **Definition:** The parent device.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Device',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private parent?: Reference | undefined;

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
      const optErrMsg = `Invalid Device.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid Device.identifier; Provided element is not an instance of Identifier.`;
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
   * @returns the `definition` property value as a Reference object; else an empty Reference object
   */
  public getDefinition(): Reference {
    return this.definition ?? new Reference();
  }

  /**
   * Assigns the provided Definition object value to the `definition` property.
   *
   * @decorator `@ReferenceTargets('Device.definition', ['DeviceDefinition',])`
   *
   * @param value - the `definition` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Device.definition', [
    'DeviceDefinition',
  ])
  public setDefinition(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.definition = value;
    } else {
      this.definition = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `definition` property exists and has a value; `false` otherwise
   */
  public hasDefinition(): boolean {
    return isDefined<Reference>(this.definition) && !this.definition.isEmpty();
  }

  /**
   * @returns the `udiCarrier` property value as a DeviceUdiCarrierComponent array
   */
  public getUdiCarrier(): DeviceUdiCarrierComponent[] {
    return this.udiCarrier ?? ([] as DeviceUdiCarrierComponent[]);
  }

  /**
   * Assigns the provided DeviceUdiCarrierComponent array value to the `udiCarrier` property.
   *
   * @param value - the `udiCarrier` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setUdiCarrier(value: DeviceUdiCarrierComponent[] | undefined): this {
    if (isDefinedList<DeviceUdiCarrierComponent>(value)) {
      const optErrMsg = `Invalid Device.udiCarrier; Provided value array has an element that is not an instance of DeviceUdiCarrierComponent.`;
      assertFhirTypeList<DeviceUdiCarrierComponent>(value, DeviceUdiCarrierComponent, optErrMsg);
      this.udiCarrier = value;
    } else {
      this.udiCarrier = undefined;
    }
    return this;
  }

  /**
   * Add the provided DeviceUdiCarrierComponent value to the `udiCarrier` array property.
   *
   * @param value - the `udiCarrier` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addUdiCarrier(value: DeviceUdiCarrierComponent | undefined): this {
    if (isDefined<DeviceUdiCarrierComponent>(value)) {
      const optErrMsg = `Invalid Device.udiCarrier; Provided element is not an instance of DeviceUdiCarrierComponent.`;
      assertFhirType<DeviceUdiCarrierComponent>(value, DeviceUdiCarrierComponent, optErrMsg);
      this.initUdiCarrier();
      this.udiCarrier?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `udiCarrier` property exists and has a value; `false` otherwise
   */
  public hasUdiCarrier(): boolean {
    return isDefinedList<DeviceUdiCarrierComponent>(this.udiCarrier) && this.udiCarrier.some((item: DeviceUdiCarrierComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `udiCarrier` property
   */
  private initUdiCarrier(): void {
    if(!this.hasUdiCarrier()) {
      this.udiCarrier = [] as DeviceUdiCarrierComponent[];
    }
  }

  /**
   * @returns the `status` property value as a EnumCodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link DeviceStatusEnum }
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
   * @see CodeSystem Enumeration: {@link DeviceStatusEnum }
   */
  public setStatusEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = 'Invalid Device.status';
      assertEnumCodeType<DeviceStatusEnum>(enumType, DeviceStatusEnum, errMsgPrefix);
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
   * @see CodeSystem Enumeration: {@link DeviceStatusEnum }
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
   * @see CodeSystem Enumeration: {@link DeviceStatusEnum }
   */
  public setStatusElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid Device.status; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.status = new EnumCodeType(element, this.deviceStatusEnum);
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
   * @see CodeSystem Enumeration: {@link DeviceStatusEnum }
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
   * @see CodeSystem Enumeration: {@link DeviceStatusEnum }
   */
  public setStatus(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid Device.status; Provided value is not an instance of fhirCode.`;
      this.status = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.deviceStatusEnum);
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
   * @returns the `statusReason` property value as a CodeableConcept array
   */
  public getStatusReason(): CodeableConcept[] {
    return this.statusReason ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `statusReason` property.
   *
   * @param value - the `statusReason` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setStatusReason(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Device.statusReason; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.statusReason = value;
    } else {
      this.statusReason = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `statusReason` array property.
   *
   * @param value - the `statusReason` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addStatusReason(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Device.statusReason; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initStatusReason();
      this.statusReason?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `statusReason` property exists and has a value; `false` otherwise
   */
  public hasStatusReason(): boolean {
    return isDefinedList<CodeableConcept>(this.statusReason) && this.statusReason.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `statusReason` property
   */
  private initStatusReason(): void {
    if(!this.hasStatusReason()) {
      this.statusReason = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `distinctIdentifier` property value as a StringType object if defined; else an empty StringType object
   */
  public getDistinctIdentifierElement(): StringType {
    return this.distinctIdentifier ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `distinctIdentifier` property.
   *
   * @param element - the `distinctIdentifier` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDistinctIdentifierElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid Device.distinctIdentifier; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.distinctIdentifier = element;
    } else {
      this.distinctIdentifier = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `distinctIdentifier` property exists and has a value; `false` otherwise
   */
  public hasDistinctIdentifierElement(): boolean {
    return isDefined<StringType>(this.distinctIdentifier) && !this.distinctIdentifier.isEmpty();
  }

  /**
   * @returns the `distinctIdentifier` property value as a fhirString if defined; else undefined
   */
  public getDistinctIdentifier(): fhirString | undefined {
    return this.distinctIdentifier?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `distinctIdentifier` property.
   *
   * @param value - the `distinctIdentifier` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDistinctIdentifier(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid Device.distinctIdentifier (${String(value)})`;
      this.distinctIdentifier = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.distinctIdentifier = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `distinctIdentifier` property exists and has a value; `false` otherwise
   */
  public hasDistinctIdentifier(): boolean {
    return this.hasDistinctIdentifierElement();
  }

  /**
   * @returns the `manufacturer` property value as a StringType object if defined; else an empty StringType object
   */
  public getManufacturerElement(): StringType {
    return this.manufacturer ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `manufacturer` property.
   *
   * @param element - the `manufacturer` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setManufacturerElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid Device.manufacturer; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.manufacturer = element;
    } else {
      this.manufacturer = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `manufacturer` property exists and has a value; `false` otherwise
   */
  public hasManufacturerElement(): boolean {
    return isDefined<StringType>(this.manufacturer) && !this.manufacturer.isEmpty();
  }

  /**
   * @returns the `manufacturer` property value as a fhirString if defined; else undefined
   */
  public getManufacturer(): fhirString | undefined {
    return this.manufacturer?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `manufacturer` property.
   *
   * @param value - the `manufacturer` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setManufacturer(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid Device.manufacturer (${String(value)})`;
      this.manufacturer = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.manufacturer = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `manufacturer` property exists and has a value; `false` otherwise
   */
  public hasManufacturer(): boolean {
    return this.hasManufacturerElement();
  }

  /**
   * @returns the `manufactureDate` property value as a DateTimeType object if defined; else an empty DateTimeType object
   */
  public getManufactureDateElement(): DateTimeType {
    return this.manufactureDate ?? new DateTimeType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `manufactureDate` property.
   *
   * @param element - the `manufactureDate` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setManufactureDateElement(element: DateTimeType | undefined): this {
    if (isDefined<DateTimeType>(element)) {
      const optErrMsg = `Invalid Device.manufactureDate; Provided element is not an instance of DateTimeType.`;
      assertFhirType<DateTimeType>(element, DateTimeType, optErrMsg);
      this.manufactureDate = element;
    } else {
      this.manufactureDate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `manufactureDate` property exists and has a value; `false` otherwise
   */
  public hasManufactureDateElement(): boolean {
    return isDefined<DateTimeType>(this.manufactureDate) && !this.manufactureDate.isEmpty();
  }

  /**
   * @returns the `manufactureDate` property value as a fhirDateTime if defined; else undefined
   */
  public getManufactureDate(): fhirDateTime | undefined {
    return this.manufactureDate?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `manufactureDate` property.
   *
   * @param value - the `manufactureDate` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setManufactureDate(value: fhirDateTime | undefined): this {
    if (isDefined<fhirDateTime>(value)) {
      const optErrMsg = `Invalid Device.manufactureDate (${String(value)})`;
      this.manufactureDate = new DateTimeType(parseFhirPrimitiveData(value, fhirDateTimeSchema, optErrMsg));
    } else {
      this.manufactureDate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `manufactureDate` property exists and has a value; `false` otherwise
   */
  public hasManufactureDate(): boolean {
    return this.hasManufactureDateElement();
  }

  /**
   * @returns the `expirationDate` property value as a DateTimeType object if defined; else an empty DateTimeType object
   */
  public getExpirationDateElement(): DateTimeType {
    return this.expirationDate ?? new DateTimeType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `expirationDate` property.
   *
   * @param element - the `expirationDate` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setExpirationDateElement(element: DateTimeType | undefined): this {
    if (isDefined<DateTimeType>(element)) {
      const optErrMsg = `Invalid Device.expirationDate; Provided element is not an instance of DateTimeType.`;
      assertFhirType<DateTimeType>(element, DateTimeType, optErrMsg);
      this.expirationDate = element;
    } else {
      this.expirationDate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `expirationDate` property exists and has a value; `false` otherwise
   */
  public hasExpirationDateElement(): boolean {
    return isDefined<DateTimeType>(this.expirationDate) && !this.expirationDate.isEmpty();
  }

  /**
   * @returns the `expirationDate` property value as a fhirDateTime if defined; else undefined
   */
  public getExpirationDate(): fhirDateTime | undefined {
    return this.expirationDate?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `expirationDate` property.
   *
   * @param value - the `expirationDate` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setExpirationDate(value: fhirDateTime | undefined): this {
    if (isDefined<fhirDateTime>(value)) {
      const optErrMsg = `Invalid Device.expirationDate (${String(value)})`;
      this.expirationDate = new DateTimeType(parseFhirPrimitiveData(value, fhirDateTimeSchema, optErrMsg));
    } else {
      this.expirationDate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `expirationDate` property exists and has a value; `false` otherwise
   */
  public hasExpirationDate(): boolean {
    return this.hasExpirationDateElement();
  }

  /**
   * @returns the `lotNumber` property value as a StringType object if defined; else an empty StringType object
   */
  public getLotNumberElement(): StringType {
    return this.lotNumber ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `lotNumber` property.
   *
   * @param element - the `lotNumber` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setLotNumberElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid Device.lotNumber; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.lotNumber = element;
    } else {
      this.lotNumber = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `lotNumber` property exists and has a value; `false` otherwise
   */
  public hasLotNumberElement(): boolean {
    return isDefined<StringType>(this.lotNumber) && !this.lotNumber.isEmpty();
  }

  /**
   * @returns the `lotNumber` property value as a fhirString if defined; else undefined
   */
  public getLotNumber(): fhirString | undefined {
    return this.lotNumber?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `lotNumber` property.
   *
   * @param value - the `lotNumber` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setLotNumber(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid Device.lotNumber (${String(value)})`;
      this.lotNumber = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.lotNumber = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `lotNumber` property exists and has a value; `false` otherwise
   */
  public hasLotNumber(): boolean {
    return this.hasLotNumberElement();
  }

  /**
   * @returns the `serialNumber` property value as a StringType object if defined; else an empty StringType object
   */
  public getSerialNumberElement(): StringType {
    return this.serialNumber ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `serialNumber` property.
   *
   * @param element - the `serialNumber` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSerialNumberElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid Device.serialNumber; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.serialNumber = element;
    } else {
      this.serialNumber = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `serialNumber` property exists and has a value; `false` otherwise
   */
  public hasSerialNumberElement(): boolean {
    return isDefined<StringType>(this.serialNumber) && !this.serialNumber.isEmpty();
  }

  /**
   * @returns the `serialNumber` property value as a fhirString if defined; else undefined
   */
  public getSerialNumber(): fhirString | undefined {
    return this.serialNumber?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `serialNumber` property.
   *
   * @param value - the `serialNumber` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSerialNumber(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid Device.serialNumber (${String(value)})`;
      this.serialNumber = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.serialNumber = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `serialNumber` property exists and has a value; `false` otherwise
   */
  public hasSerialNumber(): boolean {
    return this.hasSerialNumberElement();
  }

  /**
   * @returns the `deviceName` property value as a DeviceDeviceNameComponent array
   */
  public getDeviceName(): DeviceDeviceNameComponent[] {
    return this.deviceName ?? ([] as DeviceDeviceNameComponent[]);
  }

  /**
   * Assigns the provided DeviceDeviceNameComponent array value to the `deviceName` property.
   *
   * @param value - the `deviceName` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDeviceName(value: DeviceDeviceNameComponent[] | undefined): this {
    if (isDefinedList<DeviceDeviceNameComponent>(value)) {
      const optErrMsg = `Invalid Device.deviceName; Provided value array has an element that is not an instance of DeviceDeviceNameComponent.`;
      assertFhirTypeList<DeviceDeviceNameComponent>(value, DeviceDeviceNameComponent, optErrMsg);
      this.deviceName = value;
    } else {
      this.deviceName = undefined;
    }
    return this;
  }

  /**
   * Add the provided DeviceDeviceNameComponent value to the `deviceName` array property.
   *
   * @param value - the `deviceName` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addDeviceName(value: DeviceDeviceNameComponent | undefined): this {
    if (isDefined<DeviceDeviceNameComponent>(value)) {
      const optErrMsg = `Invalid Device.deviceName; Provided element is not an instance of DeviceDeviceNameComponent.`;
      assertFhirType<DeviceDeviceNameComponent>(value, DeviceDeviceNameComponent, optErrMsg);
      this.initDeviceName();
      this.deviceName?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `deviceName` property exists and has a value; `false` otherwise
   */
  public hasDeviceName(): boolean {
    return isDefinedList<DeviceDeviceNameComponent>(this.deviceName) && this.deviceName.some((item: DeviceDeviceNameComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `deviceName` property
   */
  private initDeviceName(): void {
    if(!this.hasDeviceName()) {
      this.deviceName = [] as DeviceDeviceNameComponent[];
    }
  }

  /**
   * @returns the `modelNumber` property value as a StringType object if defined; else an empty StringType object
   */
  public getModelNumberElement(): StringType {
    return this.modelNumber ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `modelNumber` property.
   *
   * @param element - the `modelNumber` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setModelNumberElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid Device.modelNumber; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.modelNumber = element;
    } else {
      this.modelNumber = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `modelNumber` property exists and has a value; `false` otherwise
   */
  public hasModelNumberElement(): boolean {
    return isDefined<StringType>(this.modelNumber) && !this.modelNumber.isEmpty();
  }

  /**
   * @returns the `modelNumber` property value as a fhirString if defined; else undefined
   */
  public getModelNumber(): fhirString | undefined {
    return this.modelNumber?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `modelNumber` property.
   *
   * @param value - the `modelNumber` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setModelNumber(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid Device.modelNumber (${String(value)})`;
      this.modelNumber = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.modelNumber = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `modelNumber` property exists and has a value; `false` otherwise
   */
  public hasModelNumber(): boolean {
    return this.hasModelNumberElement();
  }

  /**
   * @returns the `partNumber` property value as a StringType object if defined; else an empty StringType object
   */
  public getPartNumberElement(): StringType {
    return this.partNumber ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `partNumber` property.
   *
   * @param element - the `partNumber` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPartNumberElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid Device.partNumber; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.partNumber = element;
    } else {
      this.partNumber = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `partNumber` property exists and has a value; `false` otherwise
   */
  public hasPartNumberElement(): boolean {
    return isDefined<StringType>(this.partNumber) && !this.partNumber.isEmpty();
  }

  /**
   * @returns the `partNumber` property value as a fhirString if defined; else undefined
   */
  public getPartNumber(): fhirString | undefined {
    return this.partNumber?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `partNumber` property.
   *
   * @param value - the `partNumber` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPartNumber(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid Device.partNumber (${String(value)})`;
      this.partNumber = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.partNumber = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `partNumber` property exists and has a value; `false` otherwise
   */
  public hasPartNumber(): boolean {
    return this.hasPartNumberElement();
  }

  /**
   * @returns the `type_` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getType(): CodeableConcept {
    return this.type_ ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Type object value to the `type_` property.
   *
   * @param value - the `type_` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setType(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Device.type; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.type_ = value;
    } else {
      this.type_ = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `type_` property exists and has a value; `false` otherwise
   */
  public hasType(): boolean {
    return isDefined<CodeableConcept>(this.type_) && !this.type_.isEmpty();
  }

  /**
   * @returns the `specialization` property value as a DeviceSpecializationComponent array
   */
  public getSpecialization(): DeviceSpecializationComponent[] {
    return this.specialization ?? ([] as DeviceSpecializationComponent[]);
  }

  /**
   * Assigns the provided DeviceSpecializationComponent array value to the `specialization` property.
   *
   * @param value - the `specialization` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSpecialization(value: DeviceSpecializationComponent[] | undefined): this {
    if (isDefinedList<DeviceSpecializationComponent>(value)) {
      const optErrMsg = `Invalid Device.specialization; Provided value array has an element that is not an instance of DeviceSpecializationComponent.`;
      assertFhirTypeList<DeviceSpecializationComponent>(value, DeviceSpecializationComponent, optErrMsg);
      this.specialization = value;
    } else {
      this.specialization = undefined;
    }
    return this;
  }

  /**
   * Add the provided DeviceSpecializationComponent value to the `specialization` array property.
   *
   * @param value - the `specialization` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addSpecialization(value: DeviceSpecializationComponent | undefined): this {
    if (isDefined<DeviceSpecializationComponent>(value)) {
      const optErrMsg = `Invalid Device.specialization; Provided element is not an instance of DeviceSpecializationComponent.`;
      assertFhirType<DeviceSpecializationComponent>(value, DeviceSpecializationComponent, optErrMsg);
      this.initSpecialization();
      this.specialization?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `specialization` property exists and has a value; `false` otherwise
   */
  public hasSpecialization(): boolean {
    return isDefinedList<DeviceSpecializationComponent>(this.specialization) && this.specialization.some((item: DeviceSpecializationComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `specialization` property
   */
  private initSpecialization(): void {
    if(!this.hasSpecialization()) {
      this.specialization = [] as DeviceSpecializationComponent[];
    }
  }

  /**
   * @returns the `version` property value as a DeviceVersionComponent array
   */
  public getVersion(): DeviceVersionComponent[] {
    return this.version ?? ([] as DeviceVersionComponent[]);
  }

  /**
   * Assigns the provided DeviceVersionComponent array value to the `version` property.
   *
   * @param value - the `version` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setVersion(value: DeviceVersionComponent[] | undefined): this {
    if (isDefinedList<DeviceVersionComponent>(value)) {
      const optErrMsg = `Invalid Device.version; Provided value array has an element that is not an instance of DeviceVersionComponent.`;
      assertFhirTypeList<DeviceVersionComponent>(value, DeviceVersionComponent, optErrMsg);
      this.version = value;
    } else {
      this.version = undefined;
    }
    return this;
  }

  /**
   * Add the provided DeviceVersionComponent value to the `version` array property.
   *
   * @param value - the `version` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addVersion(value: DeviceVersionComponent | undefined): this {
    if (isDefined<DeviceVersionComponent>(value)) {
      const optErrMsg = `Invalid Device.version; Provided element is not an instance of DeviceVersionComponent.`;
      assertFhirType<DeviceVersionComponent>(value, DeviceVersionComponent, optErrMsg);
      this.initVersion();
      this.version?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `version` property exists and has a value; `false` otherwise
   */
  public hasVersion(): boolean {
    return isDefinedList<DeviceVersionComponent>(this.version) && this.version.some((item: DeviceVersionComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `version` property
   */
  private initVersion(): void {
    if(!this.hasVersion()) {
      this.version = [] as DeviceVersionComponent[];
    }
  }

  /**
   * @returns the `property` property value as a DevicePropertyComponent array
   */
  public getProperty(): DevicePropertyComponent[] {
    return this.property ?? ([] as DevicePropertyComponent[]);
  }

  /**
   * Assigns the provided DevicePropertyComponent array value to the `property` property.
   *
   * @param value - the `property` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setProperty(value: DevicePropertyComponent[] | undefined): this {
    if (isDefinedList<DevicePropertyComponent>(value)) {
      const optErrMsg = `Invalid Device.property; Provided value array has an element that is not an instance of DevicePropertyComponent.`;
      assertFhirTypeList<DevicePropertyComponent>(value, DevicePropertyComponent, optErrMsg);
      this.property = value;
    } else {
      this.property = undefined;
    }
    return this;
  }

  /**
   * Add the provided DevicePropertyComponent value to the `property` array property.
   *
   * @param value - the `property` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addProperty(value: DevicePropertyComponent | undefined): this {
    if (isDefined<DevicePropertyComponent>(value)) {
      const optErrMsg = `Invalid Device.property; Provided element is not an instance of DevicePropertyComponent.`;
      assertFhirType<DevicePropertyComponent>(value, DevicePropertyComponent, optErrMsg);
      this.initProperty();
      this.property?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `property` property exists and has a value; `false` otherwise
   */
  public hasProperty(): boolean {
    return isDefinedList<DevicePropertyComponent>(this.property) && this.property.some((item: DevicePropertyComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `property` property
   */
  private initProperty(): void {
    if(!this.hasProperty()) {
      this.property = [] as DevicePropertyComponent[];
    }
  }

  /**
   * @returns the `patient` property value as a Reference object; else an empty Reference object
   */
  public getPatient(): Reference {
    return this.patient ?? new Reference();
  }

  /**
   * Assigns the provided Patient object value to the `patient` property.
   *
   * @decorator `@ReferenceTargets('Device.patient', ['Patient',])`
   *
   * @param value - the `patient` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Device.patient', [
    'Patient',
  ])
  public setPatient(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.patient = value;
    } else {
      this.patient = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `patient` property exists and has a value; `false` otherwise
   */
  public hasPatient(): boolean {
    return isDefined<Reference>(this.patient) && !this.patient.isEmpty();
  }

  /**
   * @returns the `owner` property value as a Reference object; else an empty Reference object
   */
  public getOwner(): Reference {
    return this.owner ?? new Reference();
  }

  /**
   * Assigns the provided Owner object value to the `owner` property.
   *
   * @decorator `@ReferenceTargets('Device.owner', ['Organization',])`
   *
   * @param value - the `owner` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Device.owner', [
    'Organization',
  ])
  public setOwner(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.owner = value;
    } else {
      this.owner = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `owner` property exists and has a value; `false` otherwise
   */
  public hasOwner(): boolean {
    return isDefined<Reference>(this.owner) && !this.owner.isEmpty();
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
      const optErrMsg = `Invalid Device.contact; Provided value array has an element that is not an instance of ContactPoint.`;
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
      const optErrMsg = `Invalid Device.contact; Provided element is not an instance of ContactPoint.`;
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
   * @returns the `location` property value as a Reference object; else an empty Reference object
   */
  public getLocation(): Reference {
    return this.location ?? new Reference();
  }

  /**
   * Assigns the provided Location object value to the `location` property.
   *
   * @decorator `@ReferenceTargets('Device.location', ['Location',])`
   *
   * @param value - the `location` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Device.location', [
    'Location',
  ])
  public setLocation(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.location = value;
    } else {
      this.location = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `location` property exists and has a value; `false` otherwise
   */
  public hasLocation(): boolean {
    return isDefined<Reference>(this.location) && !this.location.isEmpty();
  }

  /**
   * @returns the `url` property value as a UriType object if defined; else an empty UriType object
   */
  public getUrlElement(): UriType {
    return this.url ?? new UriType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `url` property.
   *
   * @param element - the `url` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setUrlElement(element: UriType | undefined): this {
    if (isDefined<UriType>(element)) {
      const optErrMsg = `Invalid Device.url; Provided element is not an instance of UriType.`;
      assertFhirType<UriType>(element, UriType, optErrMsg);
      this.url = element;
    } else {
      this.url = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `url` property exists and has a value; `false` otherwise
   */
  public hasUrlElement(): boolean {
    return isDefined<UriType>(this.url) && !this.url.isEmpty();
  }

  /**
   * @returns the `url` property value as a fhirUri if defined; else undefined
   */
  public getUrl(): fhirUri | undefined {
    return this.url?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `url` property.
   *
   * @param value - the `url` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setUrl(value: fhirUri | undefined): this {
    if (isDefined<fhirUri>(value)) {
      const optErrMsg = `Invalid Device.url (${String(value)})`;
      this.url = new UriType(parseFhirPrimitiveData(value, fhirUriSchema, optErrMsg));
    } else {
      this.url = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `url` property exists and has a value; `false` otherwise
   */
  public hasUrl(): boolean {
    return this.hasUrlElement();
  }

  /**
   * @returns the `note` property value as a Annotation array
   */
  public getNote(): Annotation[] {
    return this.note ?? ([] as Annotation[]);
  }

  /**
   * Assigns the provided Annotation array value to the `note` property.
   *
   * @param value - the `note` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setNote(value: Annotation[] | undefined): this {
    if (isDefinedList<Annotation>(value)) {
      const optErrMsg = `Invalid Device.note; Provided value array has an element that is not an instance of Annotation.`;
      assertFhirTypeList<Annotation>(value, Annotation, optErrMsg);
      this.note = value;
    } else {
      this.note = undefined;
    }
    return this;
  }

  /**
   * Add the provided Annotation value to the `note` array property.
   *
   * @param value - the `note` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addNote(value: Annotation | undefined): this {
    if (isDefined<Annotation>(value)) {
      const optErrMsg = `Invalid Device.note; Provided element is not an instance of Annotation.`;
      assertFhirType<Annotation>(value, Annotation, optErrMsg);
      this.initNote();
      this.note?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `note` property exists and has a value; `false` otherwise
   */
  public hasNote(): boolean {
    return isDefinedList<Annotation>(this.note) && this.note.some((item: Annotation) => !item.isEmpty());
  }

  /**
   * Initialize the `note` property
   */
  private initNote(): void {
    if(!this.hasNote()) {
      this.note = [] as Annotation[];
    }
  }

  /**
   * @returns the `safety` property value as a CodeableConcept array
   */
  public getSafety(): CodeableConcept[] {
    return this.safety ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `safety` property.
   *
   * @param value - the `safety` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSafety(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Device.safety; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.safety = value;
    } else {
      this.safety = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `safety` array property.
   *
   * @param value - the `safety` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addSafety(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Device.safety; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initSafety();
      this.safety?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `safety` property exists and has a value; `false` otherwise
   */
  public hasSafety(): boolean {
    return isDefinedList<CodeableConcept>(this.safety) && this.safety.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `safety` property
   */
  private initSafety(): void {
    if(!this.hasSafety()) {
      this.safety = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `parent` property value as a Reference object; else an empty Reference object
   */
  public getParent(): Reference {
    return this.parent ?? new Reference();
  }

  /**
   * Assigns the provided Parent object value to the `parent` property.
   *
   * @decorator `@ReferenceTargets('Device.parent', ['Device',])`
   *
   * @param value - the `parent` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Device.parent', [
    'Device',
  ])
  public setParent(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.parent = value;
    } else {
      this.parent = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `parent` property exists and has a value; `false` otherwise
   */
  public hasParent(): boolean {
    return isDefined<Reference>(this.parent) && !this.parent.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Device';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identifier,
      this.definition,
      this.udiCarrier,
      this.status,
      this.statusReason,
      this.distinctIdentifier,
      this.manufacturer,
      this.manufactureDate,
      this.expirationDate,
      this.lotNumber,
      this.serialNumber,
      this.deviceName,
      this.modelNumber,
      this.partNumber,
      this.type_,
      this.specialization,
      this.version,
      this.property,
      this.patient,
      this.owner,
      this.contact,
      this.location,
      this.url,
      this.note,
      this.safety,
      this.parent,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): Device {
    const dest = new Device();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: Device): void {
    super.copyValues(dest);
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    dest.definition = this.definition?.copy();
    const udiCarrierList = copyListValues<DeviceUdiCarrierComponent>(this.udiCarrier);
    dest.udiCarrier = udiCarrierList.length === 0 ? undefined : udiCarrierList;
    dest.status = this.status?.copy();
    const statusReasonList = copyListValues<CodeableConcept>(this.statusReason);
    dest.statusReason = statusReasonList.length === 0 ? undefined : statusReasonList;
    dest.distinctIdentifier = this.distinctIdentifier?.copy();
    dest.manufacturer = this.manufacturer?.copy();
    dest.manufactureDate = this.manufactureDate?.copy();
    dest.expirationDate = this.expirationDate?.copy();
    dest.lotNumber = this.lotNumber?.copy();
    dest.serialNumber = this.serialNumber?.copy();
    const deviceNameList = copyListValues<DeviceDeviceNameComponent>(this.deviceName);
    dest.deviceName = deviceNameList.length === 0 ? undefined : deviceNameList;
    dest.modelNumber = this.modelNumber?.copy();
    dest.partNumber = this.partNumber?.copy();
    dest.type_ = this.type_?.copy();
    const specializationList = copyListValues<DeviceSpecializationComponent>(this.specialization);
    dest.specialization = specializationList.length === 0 ? undefined : specializationList;
    const versionList = copyListValues<DeviceVersionComponent>(this.version);
    dest.version = versionList.length === 0 ? undefined : versionList;
    const propertyList = copyListValues<DevicePropertyComponent>(this.property);
    dest.property = propertyList.length === 0 ? undefined : propertyList;
    dest.patient = this.patient?.copy();
    dest.owner = this.owner?.copy();
    const contactList = copyListValues<ContactPoint>(this.contact);
    dest.contact = contactList.length === 0 ? undefined : contactList;
    dest.location = this.location?.copy();
    dest.url = this.url?.copy();
    const noteList = copyListValues<Annotation>(this.note);
    dest.note = noteList.length === 0 ? undefined : noteList;
    const safetyList = copyListValues<CodeableConcept>(this.safety);
    dest.safety = safetyList.length === 0 ? undefined : safetyList;
    dest.parent = this.parent?.copy();
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

    if (this.hasDefinition()) {
      setFhirComplexJson(this.getDefinition(), 'definition', jsonObj);
    }

    if (this.hasUdiCarrier()) {
      setFhirBackboneElementListJson(this.getUdiCarrier(), 'udiCarrier', jsonObj);
    }

    if (this.hasStatusElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getStatusElement()!, 'status', jsonObj);
    }

    if (this.hasStatusReason()) {
      setFhirComplexListJson(this.getStatusReason(), 'statusReason', jsonObj);
    }

    if (this.hasDistinctIdentifierElement()) {
      setFhirPrimitiveJson<fhirString>(this.getDistinctIdentifierElement(), 'distinctIdentifier', jsonObj);
    }

    if (this.hasManufacturerElement()) {
      setFhirPrimitiveJson<fhirString>(this.getManufacturerElement(), 'manufacturer', jsonObj);
    }

    if (this.hasManufactureDateElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getManufactureDateElement(), 'manufactureDate', jsonObj);
    }

    if (this.hasExpirationDateElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getExpirationDateElement(), 'expirationDate', jsonObj);
    }

    if (this.hasLotNumberElement()) {
      setFhirPrimitiveJson<fhirString>(this.getLotNumberElement(), 'lotNumber', jsonObj);
    }

    if (this.hasSerialNumberElement()) {
      setFhirPrimitiveJson<fhirString>(this.getSerialNumberElement(), 'serialNumber', jsonObj);
    }

    if (this.hasDeviceName()) {
      setFhirBackboneElementListJson(this.getDeviceName(), 'deviceName', jsonObj);
    }

    if (this.hasModelNumberElement()) {
      setFhirPrimitiveJson<fhirString>(this.getModelNumberElement(), 'modelNumber', jsonObj);
    }

    if (this.hasPartNumberElement()) {
      setFhirPrimitiveJson<fhirString>(this.getPartNumberElement(), 'partNumber', jsonObj);
    }

    if (this.hasType()) {
      setFhirComplexJson(this.getType(), 'type', jsonObj);
    }

    if (this.hasSpecialization()) {
      setFhirBackboneElementListJson(this.getSpecialization(), 'specialization', jsonObj);
    }

    if (this.hasVersion()) {
      setFhirBackboneElementListJson(this.getVersion(), 'version', jsonObj);
    }

    if (this.hasProperty()) {
      setFhirBackboneElementListJson(this.getProperty(), 'property', jsonObj);
    }

    if (this.hasPatient()) {
      setFhirComplexJson(this.getPatient(), 'patient', jsonObj);
    }

    if (this.hasOwner()) {
      setFhirComplexJson(this.getOwner(), 'owner', jsonObj);
    }

    if (this.hasContact()) {
      setFhirComplexListJson(this.getContact(), 'contact', jsonObj);
    }

    if (this.hasLocation()) {
      setFhirComplexJson(this.getLocation(), 'location', jsonObj);
    }

    if (this.hasUrlElement()) {
      setFhirPrimitiveJson<fhirUri>(this.getUrlElement(), 'url', jsonObj);
    }

    if (this.hasNote()) {
      setFhirComplexListJson(this.getNote(), 'note', jsonObj);
    }

    if (this.hasSafety()) {
      setFhirComplexListJson(this.getSafety(), 'safety', jsonObj);
    }

    if (this.hasParent()) {
      setFhirComplexJson(this.getParent(), 'parent', jsonObj);
    }

    return jsonObj;
  }
}

/**
 * DeviceUdiCarrierComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Unique Device Identifier (UDI) Barcode string
 * - **Definition:** Unique device identifier (UDI) assigned to device label or package.  Note that the Device may include multiple udiCarriers as it either may include just the udiCarrier for the jurisdiction it is sold, or for multiple jurisdictions it could have been sold.
 * - **Comment:** UDI may identify an unique instance of a device, or it may only identify the type of the device.  See [UDI mappings](https://hl7.org/fhir/device-mappings.html#udi) for a complete mapping of UDI parts to Device.
 *
 * @category Data Models: Resource
 * @see [FHIR Device](http://hl7.org/fhir/StructureDefinition/Device)
 */
export class DeviceUdiCarrierComponent extends BackboneElement implements IBackboneElement {
  constructor() {
    super();

    this.udiEntryTypeEnum = new UdiEntryTypeEnum();
  }

  /**
   * Parse the provided `DeviceUdiCarrierComponent` JSON to instantiate the DeviceUdiCarrierComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `DeviceUdiCarrierComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to DeviceUdiCarrierComponent
   * @returns DeviceUdiCarrierComponent data model or undefined for `DeviceUdiCarrierComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): DeviceUdiCarrierComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'DeviceUdiCarrierComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new DeviceUdiCarrierComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'deviceIdentifier';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setDeviceIdentifierElement(datatype);
    }

    fieldName = 'issuer';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: UriType | undefined = fhirParser.parseUriType(dtJson, dtSiblingJson);
      instance.setIssuerElement(datatype);
    }

    fieldName = 'jurisdiction';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: UriType | undefined = fhirParser.parseUriType(dtJson, dtSiblingJson);
      instance.setJurisdictionElement(datatype);
    }

    fieldName = 'carrierAIDC';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: Base64BinaryType | undefined = fhirParser.parseBase64BinaryType(dtJson, dtSiblingJson);
      instance.setCarrierAIDCElement(datatype);
    }

    fieldName = 'carrierHRF';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setCarrierHRFElement(datatype);
    }

    fieldName = 'entryType';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setEntryTypeElement(datatype);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * Device.udiCarrier.deviceIdentifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Mandatory fixed portion of UDI
   * - **Definition:** The device identifier (DI) is a mandatory, fixed portion of a UDI that identifies the labeler and the specific version or model of a device.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private deviceIdentifier?: StringType | undefined;

  /**
   * Device.udiCarrier.issuer Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** UDI Issuing Organization
   * - **Definition:** Organization that is charged with issuing UDIs for devices.  For example, the US FDA issuers include : 1) GS1:  http://hl7.org/fhir/NamingSystem/gs1-di,  2) HIBCC: http://hl7.org/fhir/NamingSystem/hibcc-dI,  3) ICCBBA for blood containers: http://hl7.org/fhir/NamingSystem/iccbba-blood-di,  4) ICCBA for other devices: http://hl7.org/fhir/NamingSystem/iccbba-other-di.
   * - **FHIR Type:** `uri`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private issuer?: UriType | undefined;

  /**
   * Device.udiCarrier.jurisdiction Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Regional UDI authority
   * - **Definition:** The identity of the authoritative source for UDI generation within a  jurisdiction.  All UDIs are globally unique within a single namespace with the appropriate repository uri as the system.  For example,  UDIs of devices managed in the U.S. by the FDA, the value is  http://hl7.org/fhir/NamingSystem/fda-udi.
   * - **Requirements:** Allows a recipient of a UDI to know which database will contain the UDI-associated metadata.
   * - **FHIR Type:** `uri`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private jurisdiction?: UriType | undefined;

  /**
   * Device.udiCarrier.carrierAIDC Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** UDI Machine Readable Barcode String
   * - **Definition:** The full UDI carrier of the Automatic Identification and Data Capture (AIDC) technology representation of the barcode string as printed on the packaging of the device - e.g., a barcode or RFID.   Because of limitations on character sets in XML and the need to round-trip JSON data through XML, AIDC Formats *SHALL* be base64 encoded.
   * - **Comment:** The AIDC form of UDIs should be scanned or otherwise used for the identification of the device whenever possible to minimize errors in records resulting from manual transcriptions. If separate barcodes for DI and PI are present, concatenate the string with DI first and in order of human readable expression on label.
   * - **FHIR Type:** `base64Binary`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private carrierAIDC?: Base64BinaryType | undefined;

  /**
   * Device.udiCarrier.carrierHRF Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** UDI Human Readable Barcode String
   * - **Definition:** The full UDI carrier as the human readable form (HRF) representation of the barcode string as printed on the packaging of the device.
   * - **Comment:** If separate barcodes for DI and PI are present, concatenate the string with DI first and in order of human readable expression on label.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private carrierHRF?: StringType | undefined;

  /**
   * FHIR CodeSystem: UdiEntryType
   *
   * @see {@link UdiEntryTypeEnum }
   */
  private readonly udiEntryTypeEnum: UdiEntryTypeEnum;

  /**
   * Device.udiCarrier.entryType Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** barcode | rfid | manual +
   * - **Definition:** A coded entry to indicate how the data was entered.
   * - **Requirements:** Supports a way to distinguish hand entered from machine read data.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link UdiEntryTypeEnum }
   */
  private entryType?: EnumCodeType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `deviceIdentifier` property value as a StringType object if defined; else an empty StringType object
   */
  public getDeviceIdentifierElement(): StringType {
    return this.deviceIdentifier ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `deviceIdentifier` property.
   *
   * @param element - the `deviceIdentifier` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDeviceIdentifierElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid Device.udiCarrier.deviceIdentifier; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.deviceIdentifier = element;
    } else {
      this.deviceIdentifier = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `deviceIdentifier` property exists and has a value; `false` otherwise
   */
  public hasDeviceIdentifierElement(): boolean {
    return isDefined<StringType>(this.deviceIdentifier) && !this.deviceIdentifier.isEmpty();
  }

  /**
   * @returns the `deviceIdentifier` property value as a fhirString if defined; else undefined
   */
  public getDeviceIdentifier(): fhirString | undefined {
    return this.deviceIdentifier?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `deviceIdentifier` property.
   *
   * @param value - the `deviceIdentifier` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDeviceIdentifier(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid Device.udiCarrier.deviceIdentifier (${String(value)})`;
      this.deviceIdentifier = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.deviceIdentifier = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `deviceIdentifier` property exists and has a value; `false` otherwise
   */
  public hasDeviceIdentifier(): boolean {
    return this.hasDeviceIdentifierElement();
  }

  /**
   * @returns the `issuer` property value as a UriType object if defined; else an empty UriType object
   */
  public getIssuerElement(): UriType {
    return this.issuer ?? new UriType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `issuer` property.
   *
   * @param element - the `issuer` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setIssuerElement(element: UriType | undefined): this {
    if (isDefined<UriType>(element)) {
      const optErrMsg = `Invalid Device.udiCarrier.issuer; Provided element is not an instance of UriType.`;
      assertFhirType<UriType>(element, UriType, optErrMsg);
      this.issuer = element;
    } else {
      this.issuer = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `issuer` property exists and has a value; `false` otherwise
   */
  public hasIssuerElement(): boolean {
    return isDefined<UriType>(this.issuer) && !this.issuer.isEmpty();
  }

  /**
   * @returns the `issuer` property value as a fhirUri if defined; else undefined
   */
  public getIssuer(): fhirUri | undefined {
    return this.issuer?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `issuer` property.
   *
   * @param value - the `issuer` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setIssuer(value: fhirUri | undefined): this {
    if (isDefined<fhirUri>(value)) {
      const optErrMsg = `Invalid Device.udiCarrier.issuer (${String(value)})`;
      this.issuer = new UriType(parseFhirPrimitiveData(value, fhirUriSchema, optErrMsg));
    } else {
      this.issuer = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `issuer` property exists and has a value; `false` otherwise
   */
  public hasIssuer(): boolean {
    return this.hasIssuerElement();
  }

  /**
   * @returns the `jurisdiction` property value as a UriType object if defined; else an empty UriType object
   */
  public getJurisdictionElement(): UriType {
    return this.jurisdiction ?? new UriType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `jurisdiction` property.
   *
   * @param element - the `jurisdiction` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setJurisdictionElement(element: UriType | undefined): this {
    if (isDefined<UriType>(element)) {
      const optErrMsg = `Invalid Device.udiCarrier.jurisdiction; Provided element is not an instance of UriType.`;
      assertFhirType<UriType>(element, UriType, optErrMsg);
      this.jurisdiction = element;
    } else {
      this.jurisdiction = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `jurisdiction` property exists and has a value; `false` otherwise
   */
  public hasJurisdictionElement(): boolean {
    return isDefined<UriType>(this.jurisdiction) && !this.jurisdiction.isEmpty();
  }

  /**
   * @returns the `jurisdiction` property value as a fhirUri if defined; else undefined
   */
  public getJurisdiction(): fhirUri | undefined {
    return this.jurisdiction?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `jurisdiction` property.
   *
   * @param value - the `jurisdiction` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setJurisdiction(value: fhirUri | undefined): this {
    if (isDefined<fhirUri>(value)) {
      const optErrMsg = `Invalid Device.udiCarrier.jurisdiction (${String(value)})`;
      this.jurisdiction = new UriType(parseFhirPrimitiveData(value, fhirUriSchema, optErrMsg));
    } else {
      this.jurisdiction = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `jurisdiction` property exists and has a value; `false` otherwise
   */
  public hasJurisdiction(): boolean {
    return this.hasJurisdictionElement();
  }

  /**
   * @returns the `carrierAIDC` property value as a Base64BinaryType object if defined; else an empty Base64BinaryType object
   */
  public getCarrierAIDCElement(): Base64BinaryType {
    return this.carrierAIDC ?? new Base64BinaryType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `carrierAIDC` property.
   *
   * @param element - the `carrierAIDC` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCarrierAIDCElement(element: Base64BinaryType | undefined): this {
    if (isDefined<Base64BinaryType>(element)) {
      const optErrMsg = `Invalid Device.udiCarrier.carrierAIDC; Provided element is not an instance of Base64BinaryType.`;
      assertFhirType<Base64BinaryType>(element, Base64BinaryType, optErrMsg);
      this.carrierAIDC = element;
    } else {
      this.carrierAIDC = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `carrierAIDC` property exists and has a value; `false` otherwise
   */
  public hasCarrierAIDCElement(): boolean {
    return isDefined<Base64BinaryType>(this.carrierAIDC) && !this.carrierAIDC.isEmpty();
  }

  /**
   * @returns the `carrierAIDC` property value as a fhirBase64Binary if defined; else undefined
   */
  public getCarrierAIDC(): fhirBase64Binary | undefined {
    return this.carrierAIDC?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `carrierAIDC` property.
   *
   * @param value - the `carrierAIDC` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCarrierAIDC(value: fhirBase64Binary | undefined): this {
    if (isDefined<fhirBase64Binary>(value)) {
      const optErrMsg = `Invalid Device.udiCarrier.carrierAIDC (${String(value)})`;
      this.carrierAIDC = new Base64BinaryType(parseFhirPrimitiveData(value, fhirBase64BinarySchema, optErrMsg));
    } else {
      this.carrierAIDC = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `carrierAIDC` property exists and has a value; `false` otherwise
   */
  public hasCarrierAIDC(): boolean {
    return this.hasCarrierAIDCElement();
  }

  /**
   * @returns the `carrierHRF` property value as a StringType object if defined; else an empty StringType object
   */
  public getCarrierHRFElement(): StringType {
    return this.carrierHRF ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `carrierHRF` property.
   *
   * @param element - the `carrierHRF` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCarrierHRFElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid Device.udiCarrier.carrierHRF; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.carrierHRF = element;
    } else {
      this.carrierHRF = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `carrierHRF` property exists and has a value; `false` otherwise
   */
  public hasCarrierHRFElement(): boolean {
    return isDefined<StringType>(this.carrierHRF) && !this.carrierHRF.isEmpty();
  }

  /**
   * @returns the `carrierHRF` property value as a fhirString if defined; else undefined
   */
  public getCarrierHRF(): fhirString | undefined {
    return this.carrierHRF?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `carrierHRF` property.
   *
   * @param value - the `carrierHRF` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCarrierHRF(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid Device.udiCarrier.carrierHRF (${String(value)})`;
      this.carrierHRF = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.carrierHRF = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `carrierHRF` property exists and has a value; `false` otherwise
   */
  public hasCarrierHRF(): boolean {
    return this.hasCarrierHRFElement();
  }

  /**
   * @returns the `entryType` property value as a EnumCodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link UdiEntryTypeEnum }
   */
  public getEntryTypeEnumType(): EnumCodeType | undefined {
    return this.entryType;
  }

  /**
   * Assigns the provided EnumCodeType value to the `entryType` property.
   *
   * @param enumType - the `entryType` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code values
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link UdiEntryTypeEnum }
   */
  public setEntryTypeEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = 'Invalid Device.udiCarrier.entryType';
      assertEnumCodeType<UdiEntryTypeEnum>(enumType, UdiEntryTypeEnum, errMsgPrefix);
      this.entryType = enumType;
    } else {
      this.entryType = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `entryType` property exists and has a value; `false` otherwise
   */
  public hasEntryTypeEnumType(): boolean {
    return isDefined<EnumCodeType>(this.entryType) && !this.entryType.isEmpty() && this.entryType.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `entryType` property value as a CodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link UdiEntryTypeEnum }
   */
  public getEntryTypeElement(): CodeType | undefined {
    if (this.entryType === undefined) {
      return undefined;
    }
    return this.entryType as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `entryType` property.
   *
   * @param element - the `entryType` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link UdiEntryTypeEnum }
   */
  public setEntryTypeElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid Device.udiCarrier.entryType; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.entryType = new EnumCodeType(element, this.udiEntryTypeEnum);
    } else {
      this.entryType = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `entryType` property exists and has a value; `false` otherwise
   */
  public hasEntryTypeElement(): boolean {
    return this.hasEntryTypeEnumType();
  }

  /**
   * @returns the `entryType` property value as a fhirCode if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link UdiEntryTypeEnum }
   */
  public getEntryType(): fhirCode | undefined {
    if (this.entryType === undefined) {
      return undefined;
    }
    return this.entryType.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `entryType` property.
   *
   * @param value - the `entryType` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link UdiEntryTypeEnum }
   */
  public setEntryType(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid Device.udiCarrier.entryType; Provided value is not an instance of fhirCode.`;
      this.entryType = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.udiEntryTypeEnum);
    } else {
      this.entryType = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `entryType` property exists and has a value; `false` otherwise
   */
  public hasEntryType(): boolean {
    return this.hasEntryTypeEnumType();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Device.udiCarrier';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.deviceIdentifier,
      this.issuer,
      this.jurisdiction,
      this.carrierAIDC,
      this.carrierHRF,
      this.entryType,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): DeviceUdiCarrierComponent {
    const dest = new DeviceUdiCarrierComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: DeviceUdiCarrierComponent): void {
    super.copyValues(dest);
    dest.deviceIdentifier = this.deviceIdentifier?.copy();
    dest.issuer = this.issuer?.copy();
    dest.jurisdiction = this.jurisdiction?.copy();
    dest.carrierAIDC = this.carrierAIDC?.copy();
    dest.carrierHRF = this.carrierHRF?.copy();
    dest.entryType = this.entryType?.copy();
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

    if (this.hasDeviceIdentifierElement()) {
      setFhirPrimitiveJson<fhirString>(this.getDeviceIdentifierElement(), 'deviceIdentifier', jsonObj);
    }

    if (this.hasIssuerElement()) {
      setFhirPrimitiveJson<fhirUri>(this.getIssuerElement(), 'issuer', jsonObj);
    }

    if (this.hasJurisdictionElement()) {
      setFhirPrimitiveJson<fhirUri>(this.getJurisdictionElement(), 'jurisdiction', jsonObj);
    }

    if (this.hasCarrierAIDCElement()) {
      setFhirPrimitiveJson<fhirBase64Binary>(this.getCarrierAIDCElement(), 'carrierAIDC', jsonObj);
    }

    if (this.hasCarrierHRFElement()) {
      setFhirPrimitiveJson<fhirString>(this.getCarrierHRFElement(), 'carrierHRF', jsonObj);
    }

    if (this.hasEntryTypeElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getEntryTypeElement()!, 'entryType', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * DeviceDeviceNameComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** The name of the device as given by the manufacturer
 * - **Definition:** This represents the manufacturer\'s name of the device as provided by the device, from a UDI label, or by a person describing the Device.  This typically would be used when a person provides the name(s) or when the device represents one of the names available from DeviceDefinition.
 *
 * @category Data Models: Resource
 * @see [FHIR Device](http://hl7.org/fhir/StructureDefinition/Device)
 */
export class DeviceDeviceNameComponent extends BackboneElement implements IBackboneElement {
  constructor(name: StringType | fhirString | null = null, type_: EnumCodeType | CodeType | fhirCode | null = null) {
    super();

    this.deviceNametypeEnum = new DeviceNametypeEnum();

    this.name = null;
    if (isDefined<StringType | fhirString>(name)) {
      if (name instanceof PrimitiveType) {
        this.setNameElement(name);
      } else {
        this.setName(name);
      }
    }

    this.type_ = constructorCodeValueAsEnumCodeType<DeviceNametypeEnum>(
      type_,
      DeviceNametypeEnum,
      this.deviceNametypeEnum,
      'Device.deviceName.type',
    );
  }

  /**
   * Parse the provided `DeviceDeviceNameComponent` JSON to instantiate the DeviceDeviceNameComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `DeviceDeviceNameComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to DeviceDeviceNameComponent
   * @returns DeviceDeviceNameComponent data model or undefined for `DeviceDeviceNameComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): DeviceDeviceNameComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'DeviceDeviceNameComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new DeviceDeviceNameComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const missingReqdProperties: string[] = [];

    fieldName = 'name';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setNameElement(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setTypeElement(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_REQD_IN_JSON} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * Device.deviceName.name Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The name of the device
   * - **Definition:** The name of the device.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private name: StringType | null;

  /**
   * FHIR CodeSystem: DeviceNametype
   *
   * @see {@link DeviceNametypeEnum }
   */
  private readonly deviceNametypeEnum: DeviceNametypeEnum;

  /**
   * Device.deviceName.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** udi-label-name | user-friendly-name | patient-reported-name | manufacturer-name | model-name | other
   * - **Definition:** The type of deviceName. UDILabelName | UserFriendlyName | PatientReportedName | ManufactureDeviceName | ModelName.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link DeviceNametypeEnum }
   */
  private type_: EnumCodeType | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `name` property value as a StringType object if defined; else null
   */
  public getNameElement(): StringType | null {
    return this.name;
  }

  /**
   * Assigns the provided PrimitiveType value to the `name` property.
   *
   * @param element - the `name` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setNameElement(element: StringType): this {
    assertIsDefined<StringType>(element, `Device.deviceName.name is required`);
    const optErrMsg = `Invalid Device.deviceName.name; Provided value is not an instance of StringType.`;
    assertFhirType<StringType>(element, StringType, optErrMsg);
    this.name = element;
    return this;
  }

  /**
   * @returns `true` if the `name` property exists and has a value; `false` otherwise
   */
  public hasNameElement(): boolean {
    return isDefined<StringType>(this.name) && !this.name.isEmpty();
  }

  /**
   * @returns the `name` property value as a fhirString if defined; else null
   */
  public getName(): fhirString | null {
    if (this.name?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.name.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `name` property.
   *
   * @param value - the `name` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setName(value: fhirString): this {
    assertIsDefined<fhirString>(value, `Device.deviceName.name is required`);
    const optErrMsg = `Invalid Device.deviceName.name (${String(value)})`;
    this.name = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    return this;
  }

  /**
   * @returns `true` if the `name` property exists and has a value; `false` otherwise
   */
  public hasName(): boolean {
    return this.hasNameElement();
  }

  /**
   * @returns the `type_` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link DeviceNametypeEnum }
   */
  public getTypeEnumType(): EnumCodeType | null {
    return this.type_;
  }

  /**
   * Assigns the provided EnumCodeType value to the `type_` property.
   *
   * @param enumType - the `type_` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link DeviceNametypeEnum }
   */
  public setTypeEnumType(enumType: EnumCodeType): this {
    assertIsDefined<EnumCodeType>(enumType, `Device.deviceName.type is required`);
    const errMsgPrefix = `Invalid Device.deviceName.type`;
    assertEnumCodeType<DeviceNametypeEnum>(enumType, DeviceNametypeEnum, errMsgPrefix);
    this.type_ = enumType;
    return this;
  }

  /**
   * @returns `true` if the `type_` property exists and has a value; `false` otherwise
   */
  public hasTypeEnumType(): boolean {
    return isDefined<EnumCodeType>(this.type_) && !this.type_.isEmpty() && this.type_.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `type_` property value as a CodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link DeviceNametypeEnum }
   */
  public getTypeElement(): CodeType | null {
    if (this.type_ === null) {
      return null;
    }
    return this.type_ as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `type_` property.
   *
   * @param element - the `type_` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link DeviceNametypeEnum }
   */
  public setTypeElement(element: CodeType): this {
    assertIsDefined<CodeType>(element, `Device.deviceName.type is required`);
    const optErrMsg = `Invalid Device.deviceName.type; Provided value is not an instance of CodeType.`;
    assertFhirType<CodeType>(element, CodeType, optErrMsg);
    this.type_ = new EnumCodeType(element, this.deviceNametypeEnum);
    return this;
  }

  /**
   * @returns `true` if the `type_` property exists and has a value; `false` otherwise
   */
  public hasTypeElement(): boolean {
    return this.hasTypeEnumType();
  }

  /**
   * @returns the `type_` property value as a fhirCode if defined; else null
   *
   * @see CodeSystem Enumeration: {@link DeviceNametypeEnum }
   */
  public getType(): fhirCode | null {
    if (this.type_ === null) {
      return null;
    }
    return this.type_.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `type_` property.
   *
   * @param value - the `type_` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link DeviceNametypeEnum }
   */
  public setType(value: fhirCode): this {
    assertIsDefined<fhirCode>(value, `Device.deviceName.type is required`);
    const optErrMsg = `Invalid Device.deviceName.type (${String(value)})`;
    this.type_ = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.deviceNametypeEnum);
    return this;
  }

  /**
   * @returns `true` if the `type_` property exists and has a value; `false` otherwise
   */
  public hasType(): boolean {
    return this.hasTypeEnumType();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Device.deviceName';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.name,
      this.type_,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): DeviceDeviceNameComponent {
    const dest = new DeviceDeviceNameComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: DeviceDeviceNameComponent): void {
    super.copyValues(dest);
    dest.name = this.name ? this.name.copy() : null;
    dest.type_ = this.type_ ? this.type_.copy() : null;
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

    if (this.hasNameElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirString>(this.getNameElement()!, 'name', jsonObj);
    } else {
      missingReqdProperties.push(`Device.deviceName.name`);
    }

    if (this.hasTypeElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getTypeElement()!, 'type', jsonObj);
    } else {
      missingReqdProperties.push(`Device.deviceName.type`);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
/**
 * DeviceSpecializationComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** The capabilities supported on a  device, the standards to which the device conforms for a particular purpose, and used for the communication
 * - **Definition:** The capabilities supported on a  device, the standards to which the device conforms for a particular purpose, and used for the communication.
 *
 * @category Data Models: Resource
 * @see [FHIR Device](http://hl7.org/fhir/StructureDefinition/Device)
 */
export class DeviceSpecializationComponent extends BackboneElement implements IBackboneElement {
  constructor(systemType: CodeableConcept | null = null) {
    super();

    this.systemType = null;
    if (isDefined<CodeableConcept>(systemType)) {
      this.setSystemType(systemType);
    }
  }

  /**
   * Parse the provided `DeviceSpecializationComponent` JSON to instantiate the DeviceSpecializationComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `DeviceSpecializationComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to DeviceSpecializationComponent
   * @returns DeviceSpecializationComponent data model or undefined for `DeviceSpecializationComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): DeviceSpecializationComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'DeviceSpecializationComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new DeviceSpecializationComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    const missingReqdProperties: string[] = [];

    fieldName = 'systemType';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setSystemType(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'version';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setVersionElement(datatype);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_REQD_IN_JSON} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * Device.specialization.systemType Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The standard that is used to operate and communicate
   * - **Definition:** The standard that is used to operate and communicate.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private systemType: CodeableConcept | null;

  /**
   * Device.specialization.version Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The version of the standard that is used to operate and communicate
   * - **Definition:** The version of the standard that is used to operate and communicate.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private version?: StringType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `systemType` property value as a CodeableConcept object if defined; else null
   */
  public getSystemType(): CodeableConcept | null {
    return this.systemType;
  }

  /**
   * Assigns the provided CodeableConcept object value to the `systemType` property.
   *
   * @param value - the `systemType` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSystemType(value: CodeableConcept): this {
    assertIsDefined<CodeableConcept>(value, `Device.specialization.systemType is required`);
    const optErrMsg = `Invalid Device.specialization.systemType; Provided element is not an instance of CodeableConcept.`;
    assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
    this.systemType = value;
    return this;
  }

  /**
   * @returns `true` if the `systemType` property exists and has a value; `false` otherwise
   */
  public hasSystemType(): boolean {
    return isDefined<CodeableConcept>(this.systemType) && !this.systemType.isEmpty();
  }

  /**
   * @returns the `version` property value as a StringType object if defined; else an empty StringType object
   */
  public getVersionElement(): StringType {
    return this.version ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `version` property.
   *
   * @param element - the `version` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setVersionElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid Device.specialization.version; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.version = element;
    } else {
      this.version = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `version` property exists and has a value; `false` otherwise
   */
  public hasVersionElement(): boolean {
    return isDefined<StringType>(this.version) && !this.version.isEmpty();
  }

  /**
   * @returns the `version` property value as a fhirString if defined; else undefined
   */
  public getVersion(): fhirString | undefined {
    return this.version?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `version` property.
   *
   * @param value - the `version` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setVersion(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid Device.specialization.version (${String(value)})`;
      this.version = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.version = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `version` property exists and has a value; `false` otherwise
   */
  public hasVersion(): boolean {
    return this.hasVersionElement();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Device.specialization';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.systemType,
      this.version,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): DeviceSpecializationComponent {
    const dest = new DeviceSpecializationComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: DeviceSpecializationComponent): void {
    super.copyValues(dest);
    dest.systemType = this.systemType ? this.systemType.copy() : null;
    dest.version = this.version?.copy();
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

    if (this.hasSystemType()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getSystemType()!, 'systemType', jsonObj);
    } else {
      missingReqdProperties.push(`Device.specialization.systemType`);
    }

    if (this.hasVersionElement()) {
      setFhirPrimitiveJson<fhirString>(this.getVersionElement(), 'version', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
/**
 * DeviceVersionComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** The actual design of the device or software version running on the device
 * - **Definition:** The actual design of the device or software version running on the device.
 *
 * @category Data Models: Resource
 * @see [FHIR Device](http://hl7.org/fhir/StructureDefinition/Device)
 */
export class DeviceVersionComponent extends BackboneElement implements IBackboneElement {
  constructor(value: StringType | fhirString | null = null) {
    super();

    this.value = null;
    if (isDefined<StringType | fhirString>(value)) {
      if (value instanceof PrimitiveType) {
        this.setValueElement(value);
      } else {
        this.setValue(value);
      }
    }
  }

  /**
   * Parse the provided `DeviceVersionComponent` JSON to instantiate the DeviceVersionComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `DeviceVersionComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to DeviceVersionComponent
   * @returns DeviceVersionComponent data model or undefined for `DeviceVersionComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): DeviceVersionComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'DeviceVersionComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new DeviceVersionComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    const missingReqdProperties: string[] = [];

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setType(datatype);
    }

    fieldName = 'component';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Identifier | undefined = Identifier.parse(classJsonObj[fieldName]!, sourceField);
      instance.setComponent(datatype);
    }

    fieldName = 'value';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setValueElement(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_REQD_IN_JSON} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * Device.version.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The type of the device version
   * - **Definition:** The type of the device version.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private type_?: CodeableConcept | undefined;

  /**
   * Device.version.component Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A single component of the device version
   * - **Definition:** A single component of the device version.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private component?: Identifier | undefined;

  /**
   * Device.version.value Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The version text
   * - **Definition:** The version text.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private value: StringType | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `type_` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getType(): CodeableConcept {
    return this.type_ ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Type object value to the `type_` property.
   *
   * @param value - the `type_` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setType(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Device.version.type; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.type_ = value;
    } else {
      this.type_ = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `type_` property exists and has a value; `false` otherwise
   */
  public hasType(): boolean {
    return isDefined<CodeableConcept>(this.type_) && !this.type_.isEmpty();
  }

  /**
   * @returns the `component` property value as a Identifier object if defined; else an empty Identifier object
   */
  public getComponent(): Identifier {
    return this.component ?? new Identifier();
  }

  /**
   * Assigns the provided Component object value to the `component` property.
   *
   * @param value - the `component` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setComponent(value: Identifier | undefined): this {
    if (isDefined<Identifier>(value)) {
      const optErrMsg = `Invalid Device.version.component; Provided element is not an instance of Identifier.`;
      assertFhirType<Identifier>(value, Identifier, optErrMsg);
      this.component = value;
    } else {
      this.component = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `component` property exists and has a value; `false` otherwise
   */
  public hasComponent(): boolean {
    return isDefined<Identifier>(this.component) && !this.component.isEmpty();
  }

  /**
   * @returns the `value` property value as a StringType object if defined; else null
   */
  public getValueElement(): StringType | null {
    return this.value;
  }

  /**
   * Assigns the provided PrimitiveType value to the `value` property.
   *
   * @param element - the `value` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setValueElement(element: StringType): this {
    assertIsDefined<StringType>(element, `Device.version.value is required`);
    const optErrMsg = `Invalid Device.version.value; Provided value is not an instance of StringType.`;
    assertFhirType<StringType>(element, StringType, optErrMsg);
    this.value = element;
    return this;
  }

  /**
   * @returns `true` if the `value` property exists and has a value; `false` otherwise
   */
  public hasValueElement(): boolean {
    return isDefined<StringType>(this.value) && !this.value.isEmpty();
  }

  /**
   * @returns the `value` property value as a fhirString if defined; else null
   */
  public getValue(): fhirString | null {
    if (this.value?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.value.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `value` property.
   *
   * @param value - the `value` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setValue(value: fhirString): this {
    assertIsDefined<fhirString>(value, `Device.version.value is required`);
    const optErrMsg = `Invalid Device.version.value (${String(value)})`;
    this.value = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    return this;
  }

  /**
   * @returns `true` if the `value` property exists and has a value; `false` otherwise
   */
  public hasValue(): boolean {
    return this.hasValueElement();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Device.version';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.type_,
      this.component,
      this.value,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): DeviceVersionComponent {
    const dest = new DeviceVersionComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: DeviceVersionComponent): void {
    super.copyValues(dest);
    dest.type_ = this.type_?.copy();
    dest.component = this.component?.copy();
    dest.value = this.value ? this.value.copy() : null;
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

    if (this.hasType()) {
      setFhirComplexJson(this.getType(), 'type', jsonObj);
    }

    if (this.hasComponent()) {
      setFhirComplexJson(this.getComponent(), 'component', jsonObj);
    }

    if (this.hasValueElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirString>(this.getValueElement()!, 'value', jsonObj);
    } else {
      missingReqdProperties.push(`Device.version.value`);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
/**
 * DevicePropertyComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** The actual configuration settings of a device as it actually operates, e.g., regulation status, time properties
 * - **Definition:** The actual configuration settings of a device as it actually operates, e.g., regulation status, time properties.
 *
 * @category Data Models: Resource
 * @see [FHIR Device](http://hl7.org/fhir/StructureDefinition/Device)
 */
export class DevicePropertyComponent extends BackboneElement implements IBackboneElement {
  constructor(type_: CodeableConcept | null = null) {
    super();

    this.type_ = null;
    if (isDefined<CodeableConcept>(type_)) {
      this.setType(type_);
    }
  }

  /**
   * Parse the provided `DevicePropertyComponent` JSON to instantiate the DevicePropertyComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `DevicePropertyComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to DevicePropertyComponent
   * @returns DevicePropertyComponent data model or undefined for `DevicePropertyComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): DevicePropertyComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'DevicePropertyComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new DevicePropertyComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    const missingReqdProperties: string[] = [];

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setType(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'valueQuantity';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Quantity | undefined = Quantity.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addValueQuantity(datatype);
        }
      });
    }

    fieldName = 'valueCode';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addValueCode(datatype);
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
   * Device.property.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Code that specifies the property DeviceDefinitionPropetyCode (Extensible)
   * - **Definition:** Code that specifies the property DeviceDefinitionPropetyCode (Extensible).
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private type_: CodeableConcept | null;

  /**
   * Device.property.valueQuantity Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Property value as a quantity
   * - **Definition:** Property value as a quantity.
   * - **FHIR Type:** `Quantity`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private valueQuantity?: Quantity[] | undefined;

  /**
   * Device.property.valueCode Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Property value as a code, e.g., NTP4 (synced to NTP)
   * - **Definition:** Property value as a code, e.g., NTP4 (synced to NTP).
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private valueCode?: CodeableConcept[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `type_` property value as a CodeableConcept object if defined; else null
   */
  public getType(): CodeableConcept | null {
    return this.type_;
  }

  /**
   * Assigns the provided CodeableConcept object value to the `type_` property.
   *
   * @param value - the `type_` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setType(value: CodeableConcept): this {
    assertIsDefined<CodeableConcept>(value, `Device.property.type is required`);
    const optErrMsg = `Invalid Device.property.type; Provided element is not an instance of CodeableConcept.`;
    assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
    this.type_ = value;
    return this;
  }

  /**
   * @returns `true` if the `type_` property exists and has a value; `false` otherwise
   */
  public hasType(): boolean {
    return isDefined<CodeableConcept>(this.type_) && !this.type_.isEmpty();
  }

  /**
   * @returns the `valueQuantity` property value as a Quantity array
   */
  public getValueQuantity(): Quantity[] {
    return this.valueQuantity ?? ([] as Quantity[]);
  }

  /**
   * Assigns the provided Quantity array value to the `valueQuantity` property.
   *
   * @param value - the `valueQuantity` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setValueQuantity(value: Quantity[] | undefined): this {
    if (isDefinedList<Quantity>(value)) {
      const optErrMsg = `Invalid Device.property.valueQuantity; Provided value array has an element that is not an instance of Quantity.`;
      assertFhirTypeList<Quantity>(value, Quantity, optErrMsg);
      this.valueQuantity = value;
    } else {
      this.valueQuantity = undefined;
    }
    return this;
  }

  /**
   * Add the provided Quantity value to the `valueQuantity` array property.
   *
   * @param value - the `valueQuantity` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addValueQuantity(value: Quantity | undefined): this {
    if (isDefined<Quantity>(value)) {
      const optErrMsg = `Invalid Device.property.valueQuantity; Provided element is not an instance of Quantity.`;
      assertFhirType<Quantity>(value, Quantity, optErrMsg);
      this.initValueQuantity();
      this.valueQuantity?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `valueQuantity` property exists and has a value; `false` otherwise
   */
  public hasValueQuantity(): boolean {
    return isDefinedList<Quantity>(this.valueQuantity) && this.valueQuantity.some((item: Quantity) => !item.isEmpty());
  }

  /**
   * Initialize the `valueQuantity` property
   */
  private initValueQuantity(): void {
    if(!this.hasValueQuantity()) {
      this.valueQuantity = [] as Quantity[];
    }
  }

  /**
   * @returns the `valueCode` property value as a CodeableConcept array
   */
  public getValueCode(): CodeableConcept[] {
    return this.valueCode ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `valueCode` property.
   *
   * @param value - the `valueCode` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setValueCode(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Device.property.valueCode; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.valueCode = value;
    } else {
      this.valueCode = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `valueCode` array property.
   *
   * @param value - the `valueCode` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addValueCode(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Device.property.valueCode; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initValueCode();
      this.valueCode?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `valueCode` property exists and has a value; `false` otherwise
   */
  public hasValueCode(): boolean {
    return isDefinedList<CodeableConcept>(this.valueCode) && this.valueCode.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `valueCode` property
   */
  private initValueCode(): void {
    if(!this.hasValueCode()) {
      this.valueCode = [] as CodeableConcept[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Device.property';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.type_,
      this.valueQuantity,
      this.valueCode,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): DevicePropertyComponent {
    const dest = new DevicePropertyComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: DevicePropertyComponent): void {
    super.copyValues(dest);
    dest.type_ = this.type_ ? this.type_.copy() : null;
    const valueQuantityList = copyListValues<Quantity>(this.valueQuantity);
    dest.valueQuantity = valueQuantityList.length === 0 ? undefined : valueQuantityList;
    const valueCodeList = copyListValues<CodeableConcept>(this.valueCode);
    dest.valueCode = valueCodeList.length === 0 ? undefined : valueCodeList;
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

    if (this.hasType()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getType()!, 'type', jsonObj);
    } else {
      missingReqdProperties.push(`Device.property.type`);
    }

    if (this.hasValueQuantity()) {
      setFhirComplexListJson(this.getValueQuantity(), 'valueQuantity', jsonObj);
    }

    if (this.hasValueCode()) {
      setFhirComplexListJson(this.getValueCode(), 'valueCode', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
