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
 * StructureDefinition.description: This resource describes the properties (regulated, has real time clock, etc.), adminstrative (manufacturer name, model number, serial number, firmware, etc.), and type (knee replacement, blood pressure cuff, MRI, etc.) of a physical unit (these values do not change much within a given module, for example the serail number, manufacturer name, and model number). An actual unit may consist of several modules in a distinct hierarchy and these are represented by multiple Device resources and bound through the \'parent\' element.
 * StructureDefinition.fhirVersion: 5.0.0
 *
 * For questions, suggestions, or bugs, please open an issue at [GitHub ts-fhir-datamodels/issues](https://github.com/Paqrat76/ts-fhir-datamodels/issues).
 *
 * @packageDocumentation
 */

import {
  BackboneElement,
  Base64BinaryType,
  BooleanType,
  ChoiceDataTypes,
  ChoiceDataTypesMeta,
  CodeType,
  DateTimeType,
  DomainResource,
  EnumCodeType,
  FhirParser,
  IBackboneElement,
  IDataType,
  IDomainResource,
  IntegerType,
  InvalidTypeError,
  JSON,
  PrimitiveType,
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
  fhirBoolean,
  fhirBooleanSchema,
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
  isRequiredElementEmpty,
  parseFhirPrimitiveData,
  setFhirBackboneElementListJson,
  setFhirComplexJson,
  setFhirComplexListJson,
  setFhirPrimitiveJson,
  setPolymorphicValueJson,
} from '@paq-ts-fhir/fhir-core';
import { Annotation, Attachment, CodeableConcept, CodeableReference, ContactPoint, Count, Duration, Identifier, PARSABLE_DATATYPE_MAP, Quantity, Range, Reference } from '../complex-types/complex-datatypes';
import { DeviceNametypeEnum } from '../code-systems/DeviceNametypeEnum';
import { DeviceStatusEnum } from '../code-systems/DeviceStatusEnum';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';
import { UdiEntryTypeEnum } from '../code-systems/UdiEntryTypeEnum';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Symbol.metadata polyfill secret sauce for decorator metadata
(Symbol.metadata as any) ??= Symbol('Symbol.metadata');

/**
 * Device Class
 *
 * @remarks
 * This resource describes the properties (regulated, has real time clock, etc.), adminstrative (manufacturer name, model number, serial number, firmware, etc.), and type (knee replacement, blood pressure cuff, MRI, etc.) of a physical unit (these values do not change much within a given module, for example the serail number, manufacturer name, and model number). An actual unit may consist of several modules in a distinct hierarchy and these are represented by multiple Device resources and bound through the \'parent\' element.
 *
 * Allows institutions to track their devices.
 *
 * **FHIR Specification**
 * - **Short:** Item used in healthcare
 * - **Definition:** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device.
 * - **FHIR Version:** 5.0.0
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

    fieldName = 'displayName';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setDisplayNameElement(datatype);
    }

    fieldName = 'definition';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableReference | undefined = CodeableReference.parse(classJsonObj[fieldName]!, sourceField);
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

    fieldName = 'availabilityStatus';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setAvailabilityStatus(datatype);
    }

    fieldName = 'biologicalSourceEvent';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Identifier | undefined = Identifier.parse(classJsonObj[fieldName]!, sourceField);
      instance.setBiologicalSourceEvent(datatype);
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

    fieldName = 'name';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: DeviceNameComponent | undefined = DeviceNameComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addName(component);
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

    fieldName = 'category';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addCategory(datatype);
        }
      });
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

    fieldName = 'conformsTo';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: DeviceConformsToComponent | undefined = DeviceConformsToComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addConformsTo(component);
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

    fieldName = 'mode';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setMode(datatype);
    }

    fieldName = 'cycle';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Count | undefined = Count.parse(classJsonObj[fieldName]!, sourceField);
      instance.setCycle(datatype);
    }

    fieldName = 'duration';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Duration | undefined = Duration.parse(classJsonObj[fieldName]!, sourceField);
      instance.setDuration(datatype);
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

    fieldName = 'gateway';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableReference | undefined = CodeableReference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addGateway(datatype);
        }
      });
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

    return instance;
  }

  /**
   * Device.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Instance identifier
   * - **Definition:** Unique instance identifiers assigned to a device by manufacturers other organizations or owners.
   * - **Comment:** Certain attributes, like serial number and UDI Carrier (the HRF or AIDC barcode string) are not device instance identifiers as they are not consistently able to uniquely identify the instance of a device, thus are not appropriate to be used to value Device.identifier. The barcode string from a barcode present on a device label or package may identify the instance, include names given to the device in local usage, or may identify the type of device. If the identifier identifies the type of device, Device.type element should be used. The identifier is typically valued if the serialNumber or lotNumber is not valued and represents a different type of identifier.  However, it is permissible to still include those identifiers in DeviceDefinition.identifier with the appropriate identifier.type.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private identifier?: Identifier[] | undefined;

  /**
   * Device.displayName Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The name used to display by default when the device is referenced
   * - **Definition:** The name used to display by default when the device is referenced. Based on intent of use by the resource creator, this may reflect one of the names in Device.name, or may be another simple name.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private displayName?: StringType | undefined;

  /**
   * Device.definition Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The reference to the definition for the device
   * - **Definition:** The reference to the definition for the device.
   * - **FHIR Type:** `CodeableReference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/DeviceDefinition',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private definition?: CodeableReference | undefined;

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
   * - **Short:** active | inactive | entered-in-error
   * - **Definition:** The Device record status. This is not the status of the device like availability.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** true
   * - **isModifierReason:** This element is labeled as a modifier because it is a status element that contains status entered-in-error which means that the resource should not be treated as valid
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link DeviceStatusEnum }
   */
  private status?: EnumCodeType | undefined;

  /**
   * Device.availabilityStatus Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** lost | damaged | destroyed | available
   * - **Definition:** The availability of the device.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private availabilityStatus?: CodeableConcept | undefined;

  /**
   * Device.biologicalSourceEvent Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** An identifier that supports traceability to the event during which material in this product from one or more biological entities was obtained or pooled
   * - **Definition:** An identifier that supports traceability to the event during which material in this product from one or more biological entities was obtained or pooled.
   * - **Comment:** Necessary to support mandatory requirements for traceability from donor/source to recipient and vice versa, while also satisfying donor anonymity requirements. The element is defined consistently across BiologicallyDerivedProduct, NutritionProduct, and Device.  The identifier references an event that links to a single biological entity such as a blood donor, or to multiple biological entities (e.g. when the product is an embryo or a pooled platelet product).  A single biologicalSourceEvent identifier may appear on multiple products of many types derived from a single donation event or source extraction.  As an example, a single donation event may provide 2 kidneys and a liver for organ transplantation, 2 corneas for eye surgery, heart valves and arterial tissue for cardiovascular surgery, multiple skin grafts, tendons, multiple shaped bone grafts and a large number of bone putty/paste products; and each of them may be assigned to the same biological source event identifier.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private biologicalSourceEvent?: Identifier | undefined;

  /**
   * Device.manufacturer Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name of device manufacturer
   * - **Definition:** A name of the manufacturer or entity legally responsible for the device.
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
   * - **Comment:** Alphanumeric Maximum 20. While a serial number is a type of identifier, in the context of devices for which a UDI is required, thus a serial number may be part of the production identifier, it is more informative to have the serial number as a dedicated attribute together with the other UDI production identifier.  When the device is not subject to including the UDI (e.g., its presence and exchange is not mandated by local regulatory requirements or specific use case at hand), thus the concept of production identifiers is not relevant as a set, it remains helpful for consistency to still use Device.serialNumber rather than using Device.identifier with an appropriate type.  Systems that do not realize an identifier is a serial number may place it in Device.identifier or if the identifier.system is known for the serial number, it may also be populated in the Device.identifier as a globally unique id_.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private serialNumber?: StringType | undefined;

  /**
   * Device.name Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The name or names of the device as known to the manufacturer and/or patient
   * - **Definition:** This represents the manufacturer\'s name of the device as provided by the device, from a UDI label, or by a person describing the Device.  This typically would be used when a person provides the name(s) or when the device represents one of the names available from DeviceDefinition.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private name?: DeviceNameComponent[] | undefined;

  /**
   * Device.modelNumber Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The manufacturer\'s model number for the device
   * - **Definition:** The manufacturer\'s model number for the device.
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
   * - **Short:** The part number or catalog number of the device
   * - **Definition:** The part number or catalog number of the device.
   * - **Comment:** Alphanumeric Maximum 20.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private partNumber?: StringType | undefined;

  /**
   * Device.category Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Indicates a high-level grouping of the device
   * - **Definition:** Devices may be associated with one or more categories.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private category?: CodeableConcept[] | undefined;

  /**
   * Device.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The kind or type of device
   * - **Definition:** The kind or type of device. A device instance may have more than one type - in which case those are the types that apply to the specific instance of the device.
   * - **Comment:** Multiple device types are use when a device is categorized in more than one context - for example, hybrid devices in which the device is both of type gateway and sensor.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private type_?: CodeableConcept[] | undefined;

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
   * Device.conformsTo Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Identifies the standards, specifications, or formal guidances for the capabilities supported by the device
   * - **Definition:** Identifies the standards, specifications, or formal guidances for the capabilities supported by the device. The device may be certified as conformant to these specifications e.g., communication, performance, process, measurement, or specialization standards.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private conformsTo?: DeviceConformsToComponent[] | undefined;

  /**
   * Device.property Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Inherent, essentially fixed, characteristics of the device.  e.g., time properties, size, material, etc.
   * - **Definition:** Static or essentially fixed characteristics or features of the device (e.g., time or timing attributes, resolution, accuracy, intended use or instructions for use, and physical attributes) that are not otherwise captured in more specific attributes.
   * - **Comment:** Dynamic or current properties, such as settings, of an individual device are described using a Device instance-specific [DeviceMetric] and recorded using [Observation].  Static characteristics of a device could also be documented in an associated [DeviceDefinition] instance. The Device instance\'s properties, and their values, could be, but need not be, the same as those described in an associated DeviceDefinition.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private property?: DevicePropertyComponent[] | undefined;

  /**
   * Device.mode Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The designated condition for performing a task
   * - **Definition:** The designated condition for performing a task with the device.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private mode?: CodeableConcept | undefined;

  /**
   * Device.cycle Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The series of occurrences that repeats during the operation of the device
   * - **Definition:** The series of occurrences that repeats during the operation of the device.
   * - **FHIR Type:** `Count`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private cycle?: Count | undefined;

  /**
   * Device.duration Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A measurement of time during the device\'s operation (e.g., days, hours, mins, etc.)
   * - **Definition:** A measurement of time during the device\'s operation (e.g., days, hours, mins, etc.).
   * - **FHIR Type:** `Duration`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private duration?: Duration | undefined;

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
   * Device.endpoint Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Technical endpoints providing access to electronic services provided by the device
   * - **Definition:** Technical endpoints providing access to services provided by the device defined at this resource.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Endpoint',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private endpoint?: Reference[] | undefined;

  /**
   * Device.gateway Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Linked device acting as a communication/data collector, translator or controller
   * - **Definition:** The linked device acting as a communication controller, data collector, translator, or concentrator for the current device (e.g., mobile phone application that relays a blood pressure device\'s data).
   * - **Comment:** The Device.gateway may be used when the Device being referenced has a gateway and/or to capture one or more gateways associated with the device. If the Gateway is included in the Observation resource, the Observation.gatewayDevice should be used instead.
   * - **FHIR Type:** `CodeableReference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Device',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private gateway?: CodeableReference[] | undefined;

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
   * - **Short:** The higher level or encompassing device that this device is a logical part of
   * - **Definition:** The higher level or encompassing device that this device is a logical part of.
   * - **Comment:** For example a vital signs monitor (parent) where three separate modules can be plugged into such as interchangeable blood pressure, oximeter, temperature modules.  These modules are represented as devices with the .parent valued to the vital signs monitor when plugged in.
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
   * @returns the `displayName` property value as a StringType object if defined; else an empty StringType object
   */
  public getDisplayNameElement(): StringType {
    return this.displayName ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `displayName` property.
   *
   * @param element - the `displayName` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDisplayNameElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid Device.displayName; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.displayName = element;
    } else {
      this.displayName = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `displayName` property exists and has a value; `false` otherwise
   */
  public hasDisplayNameElement(): boolean {
    return isDefined<StringType>(this.displayName) && !this.displayName.isEmpty();
  }

  /**
   * @returns the `displayName` property value as a fhirString if defined; else undefined
   */
  public getDisplayName(): fhirString | undefined {
    return this.displayName?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `displayName` property.
   *
   * @param value - the `displayName` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDisplayName(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid Device.displayName (${String(value)})`;
      this.displayName = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.displayName = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `displayName` property exists and has a value; `false` otherwise
   */
  public hasDisplayName(): boolean {
    return this.hasDisplayNameElement();
  }

  /**
   * @returns the `definition` property value as a CodeableReference object if defined; else an empty CodeableReference object
   */
  public getDefinition(): CodeableReference {
    return this.definition ?? new CodeableReference();
  }

  /**
   * Assigns the provided Definition object value to the `definition` property.
   *
   * @param value - the `definition` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDefinition(value: CodeableReference | undefined): this {
    if (isDefined<CodeableReference>(value)) {
      const optErrMsg = `Invalid Device.definition; Provided element is not an instance of CodeableReference.`;
      assertFhirType<CodeableReference>(value, CodeableReference, optErrMsg);
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
    return isDefined<CodeableReference>(this.definition) && !this.definition.isEmpty();
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
   * @returns the `availabilityStatus` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getAvailabilityStatus(): CodeableConcept {
    return this.availabilityStatus ?? new CodeableConcept();
  }

  /**
   * Assigns the provided AvailabilityStatus object value to the `availabilityStatus` property.
   *
   * @param value - the `availabilityStatus` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAvailabilityStatus(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Device.availabilityStatus; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.availabilityStatus = value;
    } else {
      this.availabilityStatus = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `availabilityStatus` property exists and has a value; `false` otherwise
   */
  public hasAvailabilityStatus(): boolean {
    return isDefined<CodeableConcept>(this.availabilityStatus) && !this.availabilityStatus.isEmpty();
  }

  /**
   * @returns the `biologicalSourceEvent` property value as a Identifier object if defined; else an empty Identifier object
   */
  public getBiologicalSourceEvent(): Identifier {
    return this.biologicalSourceEvent ?? new Identifier();
  }

  /**
   * Assigns the provided BiologicalSourceEvent object value to the `biologicalSourceEvent` property.
   *
   * @param value - the `biologicalSourceEvent` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setBiologicalSourceEvent(value: Identifier | undefined): this {
    if (isDefined<Identifier>(value)) {
      const optErrMsg = `Invalid Device.biologicalSourceEvent; Provided element is not an instance of Identifier.`;
      assertFhirType<Identifier>(value, Identifier, optErrMsg);
      this.biologicalSourceEvent = value;
    } else {
      this.biologicalSourceEvent = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `biologicalSourceEvent` property exists and has a value; `false` otherwise
   */
  public hasBiologicalSourceEvent(): boolean {
    return isDefined<Identifier>(this.biologicalSourceEvent) && !this.biologicalSourceEvent.isEmpty();
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
   * @returns the `name` property value as a DeviceNameComponent array
   */
  public getName(): DeviceNameComponent[] {
    return this.name ?? ([] as DeviceNameComponent[]);
  }

  /**
   * Assigns the provided DeviceNameComponent array value to the `name` property.
   *
   * @param value - the `name` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setName(value: DeviceNameComponent[] | undefined): this {
    if (isDefinedList<DeviceNameComponent>(value)) {
      const optErrMsg = `Invalid Device.name; Provided value array has an element that is not an instance of DeviceNameComponent.`;
      assertFhirTypeList<DeviceNameComponent>(value, DeviceNameComponent, optErrMsg);
      this.name = value;
    } else {
      this.name = undefined;
    }
    return this;
  }

  /**
   * Add the provided DeviceNameComponent value to the `name` array property.
   *
   * @param value - the `name` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addName(value: DeviceNameComponent | undefined): this {
    if (isDefined<DeviceNameComponent>(value)) {
      const optErrMsg = `Invalid Device.name; Provided element is not an instance of DeviceNameComponent.`;
      assertFhirType<DeviceNameComponent>(value, DeviceNameComponent, optErrMsg);
      this.initName();
      this.name?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `name` property exists and has a value; `false` otherwise
   */
  public hasName(): boolean {
    return isDefinedList<DeviceNameComponent>(this.name) && this.name.some((item: DeviceNameComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `name` property
   */
  private initName(): void {
    if(!this.hasName()) {
      this.name = [] as DeviceNameComponent[];
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
   * @returns the `category` property value as a CodeableConcept array
   */
  public getCategory(): CodeableConcept[] {
    return this.category ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `category` property.
   *
   * @param value - the `category` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCategory(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Device.category; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.category = value;
    } else {
      this.category = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `category` array property.
   *
   * @param value - the `category` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addCategory(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Device.category; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initCategory();
      this.category?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `category` property exists and has a value; `false` otherwise
   */
  public hasCategory(): boolean {
    return isDefinedList<CodeableConcept>(this.category) && this.category.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `category` property
   */
  private initCategory(): void {
    if(!this.hasCategory()) {
      this.category = [] as CodeableConcept[];
    }
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
      const optErrMsg = `Invalid Device.type; Provided value array has an element that is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid Device.type; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `conformsTo` property value as a DeviceConformsToComponent array
   */
  public getConformsTo(): DeviceConformsToComponent[] {
    return this.conformsTo ?? ([] as DeviceConformsToComponent[]);
  }

  /**
   * Assigns the provided DeviceConformsToComponent array value to the `conformsTo` property.
   *
   * @param value - the `conformsTo` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setConformsTo(value: DeviceConformsToComponent[] | undefined): this {
    if (isDefinedList<DeviceConformsToComponent>(value)) {
      const optErrMsg = `Invalid Device.conformsTo; Provided value array has an element that is not an instance of DeviceConformsToComponent.`;
      assertFhirTypeList<DeviceConformsToComponent>(value, DeviceConformsToComponent, optErrMsg);
      this.conformsTo = value;
    } else {
      this.conformsTo = undefined;
    }
    return this;
  }

  /**
   * Add the provided DeviceConformsToComponent value to the `conformsTo` array property.
   *
   * @param value - the `conformsTo` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addConformsTo(value: DeviceConformsToComponent | undefined): this {
    if (isDefined<DeviceConformsToComponent>(value)) {
      const optErrMsg = `Invalid Device.conformsTo; Provided element is not an instance of DeviceConformsToComponent.`;
      assertFhirType<DeviceConformsToComponent>(value, DeviceConformsToComponent, optErrMsg);
      this.initConformsTo();
      this.conformsTo?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `conformsTo` property exists and has a value; `false` otherwise
   */
  public hasConformsTo(): boolean {
    return isDefinedList<DeviceConformsToComponent>(this.conformsTo) && this.conformsTo.some((item: DeviceConformsToComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `conformsTo` property
   */
  private initConformsTo(): void {
    if(!this.hasConformsTo()) {
      this.conformsTo = [] as DeviceConformsToComponent[];
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
   * @returns the `mode` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getMode(): CodeableConcept {
    return this.mode ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Mode object value to the `mode` property.
   *
   * @param value - the `mode` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setMode(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Device.mode; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.mode = value;
    } else {
      this.mode = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `mode` property exists and has a value; `false` otherwise
   */
  public hasMode(): boolean {
    return isDefined<CodeableConcept>(this.mode) && !this.mode.isEmpty();
  }

  /**
   * @returns the `cycle` property value as a Count object if defined; else an empty Count object
   */
  public getCycle(): Count {
    return this.cycle ?? new Count();
  }

  /**
   * Assigns the provided Cycle object value to the `cycle` property.
   *
   * @param value - the `cycle` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCycle(value: Count | undefined): this {
    if (isDefined<Count>(value)) {
      const optErrMsg = `Invalid Device.cycle; Provided element is not an instance of Count.`;
      assertFhirType<Count>(value, Count, optErrMsg);
      this.cycle = value;
    } else {
      this.cycle = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `cycle` property exists and has a value; `false` otherwise
   */
  public hasCycle(): boolean {
    return isDefined<Count>(this.cycle) && !this.cycle.isEmpty();
  }

  /**
   * @returns the `duration` property value as a Duration object if defined; else an empty Duration object
   */
  public getDuration(): Duration {
    return this.duration ?? new Duration();
  }

  /**
   * Assigns the provided Duration object value to the `duration` property.
   *
   * @param value - the `duration` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDuration(value: Duration | undefined): this {
    if (isDefined<Duration>(value)) {
      const optErrMsg = `Invalid Device.duration; Provided element is not an instance of Duration.`;
      assertFhirType<Duration>(value, Duration, optErrMsg);
      this.duration = value;
    } else {
      this.duration = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `duration` property exists and has a value; `false` otherwise
   */
  public hasDuration(): boolean {
    return isDefined<Duration>(this.duration) && !this.duration.isEmpty();
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
   * @returns the `endpoint` property value as a Reference array
   */
  public getEndpoint(): Reference[] {
    return this.endpoint ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `endpoint` property.
   *
   * @decorator `@ReferenceTargets('Device.endpoint', ['Endpoint',])`
   *
   * @param value - the `endpoint` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Device.endpoint', [
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
   * @decorator `@ReferenceTargets('Device.endpoint', ['Endpoint',])`
   *
   * @param value - the `endpoint` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Device.endpoint', [
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

  /**
   * @returns the `gateway` property value as a CodeableReference array
   */
  public getGateway(): CodeableReference[] {
    return this.gateway ?? ([] as CodeableReference[]);
  }

  /**
   * Assigns the provided CodeableReference array value to the `gateway` property.
   *
   * @param value - the `gateway` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setGateway(value: CodeableReference[] | undefined): this {
    if (isDefinedList<CodeableReference>(value)) {
      const optErrMsg = `Invalid Device.gateway; Provided value array has an element that is not an instance of CodeableReference.`;
      assertFhirTypeList<CodeableReference>(value, CodeableReference, optErrMsg);
      this.gateway = value;
    } else {
      this.gateway = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableReference value to the `gateway` array property.
   *
   * @param value - the `gateway` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addGateway(value: CodeableReference | undefined): this {
    if (isDefined<CodeableReference>(value)) {
      const optErrMsg = `Invalid Device.gateway; Provided element is not an instance of CodeableReference.`;
      assertFhirType<CodeableReference>(value, CodeableReference, optErrMsg);
      this.initGateway();
      this.gateway?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `gateway` property exists and has a value; `false` otherwise
   */
  public hasGateway(): boolean {
    return isDefinedList<CodeableReference>(this.gateway) && this.gateway.some((item: CodeableReference) => !item.isEmpty());
  }

  /**
   * Initialize the `gateway` property
   */
  private initGateway(): void {
    if(!this.hasGateway()) {
      this.gateway = [] as CodeableReference[];
    }
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
      this.displayName,
      this.definition,
      this.udiCarrier,
      this.status,
      this.availabilityStatus,
      this.biologicalSourceEvent,
      this.manufacturer,
      this.manufactureDate,
      this.expirationDate,
      this.lotNumber,
      this.serialNumber,
      this.name,
      this.modelNumber,
      this.partNumber,
      this.category,
      this.type_,
      this.version,
      this.conformsTo,
      this.property,
      this.mode,
      this.cycle,
      this.duration,
      this.owner,
      this.contact,
      this.location,
      this.url,
      this.endpoint,
      this.gateway,
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
    dest.displayName = this.displayName?.copy();
    dest.definition = this.definition?.copy();
    const udiCarrierList = copyListValues<DeviceUdiCarrierComponent>(this.udiCarrier);
    dest.udiCarrier = udiCarrierList.length === 0 ? undefined : udiCarrierList;
    dest.status = this.status?.copy();
    dest.availabilityStatus = this.availabilityStatus?.copy();
    dest.biologicalSourceEvent = this.biologicalSourceEvent?.copy();
    dest.manufacturer = this.manufacturer?.copy();
    dest.manufactureDate = this.manufactureDate?.copy();
    dest.expirationDate = this.expirationDate?.copy();
    dest.lotNumber = this.lotNumber?.copy();
    dest.serialNumber = this.serialNumber?.copy();
    const nameList = copyListValues<DeviceNameComponent>(this.name);
    dest.name = nameList.length === 0 ? undefined : nameList;
    dest.modelNumber = this.modelNumber?.copy();
    dest.partNumber = this.partNumber?.copy();
    const categoryList = copyListValues<CodeableConcept>(this.category);
    dest.category = categoryList.length === 0 ? undefined : categoryList;
    const typeList = copyListValues<CodeableConcept>(this.type_);
    dest.type_ = typeList.length === 0 ? undefined : typeList;
    const versionList = copyListValues<DeviceVersionComponent>(this.version);
    dest.version = versionList.length === 0 ? undefined : versionList;
    const conformsToList = copyListValues<DeviceConformsToComponent>(this.conformsTo);
    dest.conformsTo = conformsToList.length === 0 ? undefined : conformsToList;
    const propertyList = copyListValues<DevicePropertyComponent>(this.property);
    dest.property = propertyList.length === 0 ? undefined : propertyList;
    dest.mode = this.mode?.copy();
    dest.cycle = this.cycle?.copy();
    dest.duration = this.duration?.copy();
    dest.owner = this.owner?.copy();
    const contactList = copyListValues<ContactPoint>(this.contact);
    dest.contact = contactList.length === 0 ? undefined : contactList;
    dest.location = this.location?.copy();
    dest.url = this.url?.copy();
    const endpointList = copyListValues<Reference>(this.endpoint);
    dest.endpoint = endpointList.length === 0 ? undefined : endpointList;
    const gatewayList = copyListValues<CodeableReference>(this.gateway);
    dest.gateway = gatewayList.length === 0 ? undefined : gatewayList;
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

    if (this.hasDisplayNameElement()) {
      setFhirPrimitiveJson<fhirString>(this.getDisplayNameElement(), 'displayName', jsonObj);
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

    if (this.hasAvailabilityStatus()) {
      setFhirComplexJson(this.getAvailabilityStatus(), 'availabilityStatus', jsonObj);
    }

    if (this.hasBiologicalSourceEvent()) {
      setFhirComplexJson(this.getBiologicalSourceEvent(), 'biologicalSourceEvent', jsonObj);
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

    if (this.hasName()) {
      setFhirBackboneElementListJson(this.getName(), 'name', jsonObj);
    }

    if (this.hasModelNumberElement()) {
      setFhirPrimitiveJson<fhirString>(this.getModelNumberElement(), 'modelNumber', jsonObj);
    }

    if (this.hasPartNumberElement()) {
      setFhirPrimitiveJson<fhirString>(this.getPartNumberElement(), 'partNumber', jsonObj);
    }

    if (this.hasCategory()) {
      setFhirComplexListJson(this.getCategory(), 'category', jsonObj);
    }

    if (this.hasType()) {
      setFhirComplexListJson(this.getType(), 'type', jsonObj);
    }

    if (this.hasVersion()) {
      setFhirBackboneElementListJson(this.getVersion(), 'version', jsonObj);
    }

    if (this.hasConformsTo()) {
      setFhirBackboneElementListJson(this.getConformsTo(), 'conformsTo', jsonObj);
    }

    if (this.hasProperty()) {
      setFhirBackboneElementListJson(this.getProperty(), 'property', jsonObj);
    }

    if (this.hasMode()) {
      setFhirComplexJson(this.getMode(), 'mode', jsonObj);
    }

    if (this.hasCycle()) {
      setFhirComplexJson(this.getCycle(), 'cycle', jsonObj);
    }

    if (this.hasDuration()) {
      setFhirComplexJson(this.getDuration(), 'duration', jsonObj);
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

    if (this.hasEndpoint()) {
      setFhirComplexListJson(this.getEndpoint(), 'endpoint', jsonObj);
    }

    if (this.hasGateway()) {
      setFhirComplexListJson(this.getGateway(), 'gateway', jsonObj);
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
  constructor(deviceIdentifier: StringType | fhirString | null = null, issuer: UriType | fhirUri | null = null) {
    super();

    this.udiEntryTypeEnum = new UdiEntryTypeEnum();

    this.deviceIdentifier = null;
    if (isDefined<StringType | fhirString>(deviceIdentifier)) {
      if (deviceIdentifier instanceof PrimitiveType) {
        this.setDeviceIdentifierElement(deviceIdentifier);
      } else {
        this.setDeviceIdentifier(deviceIdentifier);
      }
    }

    this.issuer = null;
    if (isDefined<UriType | fhirUri>(issuer)) {
      if (issuer instanceof PrimitiveType) {
        this.setIssuerElement(issuer);
      } else {
        this.setIssuer(issuer);
      }
    }
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
      if (datatype === undefined) {
        instance.setDeviceIdentifier(null);
      } else {
        instance.setDeviceIdentifierElement(datatype);
      }
    } else {
      instance.setDeviceIdentifier(null);
    }

    fieldName = 'issuer';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: UriType | undefined = fhirParser.parseUriType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setIssuer(null);
      } else {
        instance.setIssuerElement(datatype);
      }
    } else {
      instance.setIssuer(null);
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
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private deviceIdentifier: StringType | null;

  /**
   * Device.udiCarrier.issuer Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** UDI Issuing Organization
   * - **Definition:** Organization that is charged with issuing UDIs for devices. For example, the US FDA issuers include:  1) GS1: http://hl7.org/fhir/NamingSystem/gs1-di,  2) HIBCC: http://hl7.org/fhir/NamingSystem/hibcc-diI,  3) ICCBBA for blood containers: http://hl7.org/fhir/NamingSystem/iccbba-blood-di,  4) ICCBA for other devices: http://hl7.org/fhir/NamingSystem/iccbba-other-di # Informationsstelle für Arzneispezialitäten (IFA GmbH) (EU only): http://hl7.org/fhir/NamingSystem/ifa-gmbh-di.
   * - **FHIR Type:** `uri`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private issuer: UriType | null;

  /**
   * Device.udiCarrier.jurisdiction Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Regional UDI authority
   * - **Definition:** The identity of the authoritative source for UDI generation within a jurisdiction. All UDIs are globally unique within a single namespace with the appropriate repository uri as the system. For example, UDIs of devices managed in the U.S. by the FDA, the value is http://hl7.org/fhir/NamingSystem/us-fda-udi or in the European Union by the European Commission http://hl7.org/fhir/NamingSystem/eu-ec-udi.
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
   * - **Short:** barcode | rfid | manual | card | self-reported | electronic-transmission | unknown
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
  public setDeviceIdentifierElement(element: StringType | undefined | null): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid Device.udiCarrier.deviceIdentifier; Provided value is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.deviceIdentifier = element;
    } else {
      this.deviceIdentifier = null;
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
   * @returns the `deviceIdentifier` property value as a fhirString if defined; else null
   */
  public getDeviceIdentifier(): fhirString | null {
    if (this.deviceIdentifier?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.deviceIdentifier.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `deviceIdentifier` property.
   *
   * @param value - the `deviceIdentifier` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDeviceIdentifier(value: fhirString | undefined | null): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid Device.udiCarrier.deviceIdentifier (${String(value)})`;
      this.deviceIdentifier = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.deviceIdentifier = null;
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
  public setIssuerElement(element: UriType | undefined | null): this {
    if (isDefined<UriType>(element)) {
      const optErrMsg = `Invalid Device.udiCarrier.issuer; Provided value is not an instance of UriType.`;
      assertFhirType<UriType>(element, UriType, optErrMsg);
      this.issuer = element;
    } else {
      this.issuer = null;
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
   * @returns the `issuer` property value as a fhirUri if defined; else null
   */
  public getIssuer(): fhirUri | null {
    if (this.issuer?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.issuer.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `issuer` property.
   *
   * @param value - the `issuer` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setIssuer(value: fhirUri | undefined | null): this {
    if (isDefined<fhirUri>(value)) {
      const optErrMsg = `Invalid Device.udiCarrier.issuer (${String(value)})`;
      this.issuer = new UriType(parseFhirPrimitiveData(value, fhirUriSchema, optErrMsg));
    } else {
      this.issuer = null;
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
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.deviceIdentifier, this.issuer, 
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
    dest.deviceIdentifier = this.deviceIdentifier ? this.deviceIdentifier.copy() : null;
    dest.issuer = this.issuer ? this.issuer.copy() : null;
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
    } else {
      jsonObj['deviceIdentifier'] = null;
    }

    if (this.hasIssuerElement()) {
      setFhirPrimitiveJson<fhirUri>(this.getIssuerElement(), 'issuer', jsonObj);
    } else {
      jsonObj['issuer'] = null;
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
 * DeviceNameComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** The name or names of the device as known to the manufacturer and/or patient
 * - **Definition:** This represents the manufacturer\'s name of the device as provided by the device, from a UDI label, or by a person describing the Device.  This typically would be used when a person provides the name(s) or when the device represents one of the names available from DeviceDefinition.
 *
 * @category Data Models: Resource
 * @see [FHIR Device](http://hl7.org/fhir/StructureDefinition/Device)
 */
export class DeviceNameComponent extends BackboneElement implements IBackboneElement {
  constructor(value: StringType | fhirString | null = null, type_: EnumCodeType | CodeType | fhirCode | null = null) {
    super();

    this.deviceNametypeEnum = new DeviceNametypeEnum();

    this.value = null;
    if (isDefined<StringType | fhirString>(value)) {
      if (value instanceof PrimitiveType) {
        this.setValueElement(value);
      } else {
        this.setValue(value);
      }
    }

    this.type_ = constructorCodeValueAsEnumCodeType<DeviceNametypeEnum>(
      type_,
      DeviceNametypeEnum,
      this.deviceNametypeEnum,
      'Device.name.type',
    );
  }

  /**
   * Parse the provided `DeviceNameComponent` JSON to instantiate the DeviceNameComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `DeviceNameComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to DeviceNameComponent
   * @returns DeviceNameComponent data model or undefined for `DeviceNameComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): DeviceNameComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'DeviceNameComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new DeviceNameComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'value';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setValue(null);
      } else {
        instance.setValueElement(datatype);
      }
    } else {
      instance.setValue(null);
    }

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setType(null);
      } else {
        instance.setTypeElement(datatype);
      }
    } else {
      instance.setType(null);
    }

    fieldName = 'display';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setDisplayElement(datatype);
    }

    return instance;
  }

  /**
   * Device.name.value Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The term that names the device
   * - **Definition:** The actual name that identifies the device.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private value: StringType | null;

  /**
   * FHIR CodeSystem: DeviceNametype
   *
   * @see {@link DeviceNametypeEnum }
   */
  private readonly deviceNametypeEnum: DeviceNametypeEnum;

  /**
   * Device.name.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** registered-name | user-friendly-name | patient-reported-name
   * - **Definition:** Indicates the kind of name. RegisteredName | UserFriendlyName | PatientReportedName.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link DeviceNametypeEnum }
   */
  private type_: EnumCodeType | null;

  /**
   * Device.name.display Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The preferred device name
   * - **Definition:** Indicates the default or preferred name to be displayed.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** true
   * - **isModifierReason:** This element is labelled as a modifier because it is a status element that can indicate that that a name is preferred.
   * - **isSummary:** true
   */
  private display?: BooleanType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `value` property value as a StringType object if defined; else an empty StringType object
   */
  public getValueElement(): StringType {
    return this.value ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `value` property.
   *
   * @param element - the `value` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setValueElement(element: StringType | undefined | null): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid Device.name.value; Provided value is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.value = element;
    } else {
      this.value = null;
    }
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
  public setValue(value: fhirString | undefined | null): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid Device.name.value (${String(value)})`;
      this.value = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.value = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `value` property exists and has a value; `false` otherwise
   */
  public hasValue(): boolean {
    return this.hasValueElement();
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
  public setTypeEnumType(enumType: EnumCodeType | undefined | null): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid Device.name.type`;
      assertEnumCodeType<DeviceNametypeEnum>(enumType, DeviceNametypeEnum, errMsgPrefix);
      this.type_ = enumType;
    } else {
      this.type_ = null;
    }
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
  public setTypeElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid Device.name.type; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.type_ = new EnumCodeType(element, this.deviceNametypeEnum);
    } else {
      this.type_ = null;
    }
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
  public setType(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid Device.name.type (${String(value)})`;
      this.type_ = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.deviceNametypeEnum);
    } else {
      this.type_ = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `type_` property exists and has a value; `false` otherwise
   */
  public hasType(): boolean {
    return this.hasTypeEnumType();
  }

  /**
   * @returns the `display` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getDisplayElement(): BooleanType {
    return this.display ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `display` property.
   *
   * @param element - the `display` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDisplayElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid Device.name.display; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.display = element;
    } else {
      this.display = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `display` property exists and has a value; `false` otherwise
   */
  public hasDisplayElement(): boolean {
    return isDefined<BooleanType>(this.display) && !this.display.isEmpty();
  }

  /**
   * @returns the `display` property value as a fhirBoolean if defined; else undefined
   */
  public getDisplay(): fhirBoolean | undefined {
    return this.display?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `display` property.
   *
   * @param value - the `display` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDisplay(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid Device.name.display (${String(value)})`;
      this.display = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.display = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `display` property exists and has a value; `false` otherwise
   */
  public hasDisplay(): boolean {
    return this.hasDisplayElement();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Device.name';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.value,
      this.type_,
      this.display,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.value, this.type_, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): DeviceNameComponent {
    const dest = new DeviceNameComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: DeviceNameComponent): void {
    super.copyValues(dest);
    dest.value = this.value ? this.value.copy() : null;
    dest.type_ = this.type_ ? this.type_.copy() : null;
    dest.display = this.display?.copy();
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

    if (this.hasValueElement()) {
      setFhirPrimitiveJson<fhirString>(this.getValueElement(), 'value', jsonObj);
    } else {
      jsonObj['value'] = null;
    }

    if (this.hasTypeElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getTypeElement()!, 'type', jsonObj);
    } else {
      jsonObj['type'] = null;
    }

    if (this.hasDisplayElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getDisplayElement(), 'display', jsonObj);
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
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

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

    fieldName = 'installDate';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dtJson, dtSiblingJson);
      instance.setInstallDateElement(datatype);
    }

    fieldName = 'value';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setValue(null);
      } else {
        instance.setValueElement(datatype);
      }
    } else {
      instance.setValue(null);
    }

    return instance;
  }

  /**
   * Device.version.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The type of the device version, e.g. manufacturer, approved, internal
   * - **Definition:** The type of the device version, e.g. manufacturer, approved, internal.
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
   * - **Short:** The hardware or software module of the device to which the version applies
   * - **Definition:** The hardware or software module of the device to which the version applies.
   * - **Comment:** Note that the module of the device would not need to be tracked as a separate device, e.g., using different UDI, thus would typically involve one or more software modules. For example, a device may involve two software modules each on a different version.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private component?: Identifier | undefined;

  /**
   * Device.version.installDate Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The date the version was installed on the device
   * - **Definition:** The date the version was installed on the device.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private installDate?: DateTimeType | undefined;

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
   * @returns the `installDate` property value as a DateTimeType object if defined; else an empty DateTimeType object
   */
  public getInstallDateElement(): DateTimeType {
    return this.installDate ?? new DateTimeType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `installDate` property.
   *
   * @param element - the `installDate` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setInstallDateElement(element: DateTimeType | undefined): this {
    if (isDefined<DateTimeType>(element)) {
      const optErrMsg = `Invalid Device.version.installDate; Provided element is not an instance of DateTimeType.`;
      assertFhirType<DateTimeType>(element, DateTimeType, optErrMsg);
      this.installDate = element;
    } else {
      this.installDate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `installDate` property exists and has a value; `false` otherwise
   */
  public hasInstallDateElement(): boolean {
    return isDefined<DateTimeType>(this.installDate) && !this.installDate.isEmpty();
  }

  /**
   * @returns the `installDate` property value as a fhirDateTime if defined; else undefined
   */
  public getInstallDate(): fhirDateTime | undefined {
    return this.installDate?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `installDate` property.
   *
   * @param value - the `installDate` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setInstallDate(value: fhirDateTime | undefined): this {
    if (isDefined<fhirDateTime>(value)) {
      const optErrMsg = `Invalid Device.version.installDate (${String(value)})`;
      this.installDate = new DateTimeType(parseFhirPrimitiveData(value, fhirDateTimeSchema, optErrMsg));
    } else {
      this.installDate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `installDate` property exists and has a value; `false` otherwise
   */
  public hasInstallDate(): boolean {
    return this.hasInstallDateElement();
  }

  /**
   * @returns the `value` property value as a StringType object if defined; else an empty StringType object
   */
  public getValueElement(): StringType {
    return this.value ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `value` property.
   *
   * @param element - the `value` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setValueElement(element: StringType | undefined | null): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid Device.version.value; Provided value is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.value = element;
    } else {
      this.value = null;
    }
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
  public setValue(value: fhirString | undefined | null): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid Device.version.value (${String(value)})`;
      this.value = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.value = null;
    }
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
      this.installDate,
      this.value,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
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
    dest.installDate = this.installDate?.copy();
    dest.value = this.value ? this.value.copy() : null;
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
      setFhirComplexJson(this.getType(), 'type', jsonObj);
    }

    if (this.hasComponent()) {
      setFhirComplexJson(this.getComponent(), 'component', jsonObj);
    }

    if (this.hasInstallDateElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getInstallDateElement(), 'installDate', jsonObj);
    }

    if (this.hasValueElement()) {
      setFhirPrimitiveJson<fhirString>(this.getValueElement(), 'value', jsonObj);
    } else {
      jsonObj['value'] = null;
    }

    return jsonObj;
  }
}
/**
 * DeviceConformsToComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Identifies the standards, specifications, or formal guidances for the capabilities supported by the device
 * - **Definition:** Identifies the standards, specifications, or formal guidances for the capabilities supported by the device. The device may be certified as conformant to these specifications e.g., communication, performance, process, measurement, or specialization standards.
 *
 * @category Data Models: Resource
 * @see [FHIR Device](http://hl7.org/fhir/StructureDefinition/Device)
 */
export class DeviceConformsToComponent extends BackboneElement implements IBackboneElement {
  constructor(specification: CodeableConcept | null = null) {
    super();

    this.specification = null;
    if (isDefined<CodeableConcept>(specification)) {
      this.setSpecification(specification);
    }
  }

  /**
   * Parse the provided `DeviceConformsToComponent` JSON to instantiate the DeviceConformsToComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `DeviceConformsToComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to DeviceConformsToComponent
   * @returns DeviceConformsToComponent data model or undefined for `DeviceConformsToComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): DeviceConformsToComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'DeviceConformsToComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new DeviceConformsToComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    fieldName = 'category';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setCategory(datatype);
    }

    fieldName = 'specification';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setSpecification(null);
      } else {
        instance.setSpecification(datatype);
      }
    } else {
      instance.setSpecification(null);
    }

    fieldName = 'version';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setVersionElement(datatype);
    }

    return instance;
  }

  /**
   * Device.conformsTo.category Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Describes the common type of the standard, specification, or formal guidance.  communication | performance | measurement
   * - **Definition:** Describes the type of the standard, specification, or formal guidance.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private category?: CodeableConcept | undefined;

  /**
   * Device.conformsTo.specification Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Identifies the standard, specification, or formal guidance that the device adheres to
   * - **Definition:** Code that identifies the specific standard, specification, protocol, formal guidance, regulation, legislation, or certification scheme to which the device adheres.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private specification: CodeableConcept | null;

  /**
   * Device.conformsTo.version Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Specific form or variant of the standard
   * - **Definition:** Identifies the specific form or variant of the standard, specification, or formal guidance. This may be a \'version number\', release, document edition, publication year, or other label.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private version?: StringType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `category` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getCategory(): CodeableConcept {
    return this.category ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Category object value to the `category` property.
   *
   * @param value - the `category` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCategory(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Device.conformsTo.category; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.category = value;
    } else {
      this.category = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `category` property exists and has a value; `false` otherwise
   */
  public hasCategory(): boolean {
    return isDefined<CodeableConcept>(this.category) && !this.category.isEmpty();
  }

  /**
   * @returns the `specification` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getSpecification(): CodeableConcept {
    return this.specification ?? new CodeableConcept();
  }

  /**
   * Assigns the provided CodeableConcept object value to the `specification` property.
   *
   * @param value - the `specification` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSpecification(value: CodeableConcept | undefined | null): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Device.conformsTo.specification; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.specification = value;
    } else {
      this.specification = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `specification` property exists and has a value; `false` otherwise
   */
  public hasSpecification(): boolean {
    return isDefined<CodeableConcept>(this.specification) && !this.specification.isEmpty();
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
      const optErrMsg = `Invalid Device.conformsTo.version; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid Device.conformsTo.version (${String(value)})`;
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
    return 'Device.conformsTo';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.category,
      this.specification,
      this.version,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.specification, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): DeviceConformsToComponent {
    const dest = new DeviceConformsToComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: DeviceConformsToComponent): void {
    super.copyValues(dest);
    dest.category = this.category?.copy();
    dest.specification = this.specification ? this.specification.copy() : null;
    dest.version = this.version?.copy();
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

    if (this.hasCategory()) {
      setFhirComplexJson(this.getCategory(), 'category', jsonObj);
    }

    if (this.hasSpecification()) {
      setFhirComplexJson(this.getSpecification(), 'specification', jsonObj);
    } else {
      jsonObj['specification'] = null;
    }

    if (this.hasVersionElement()) {
      setFhirPrimitiveJson<fhirString>(this.getVersionElement(), 'version', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * DevicePropertyComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Inherent, essentially fixed, characteristics of the device.  e.g., time properties, size, material, etc.
 * - **Definition:** Static or essentially fixed characteristics or features of the device (e.g., time or timing attributes, resolution, accuracy, intended use or instructions for use, and physical attributes) that are not otherwise captured in more specific attributes.
 * - **Comment:** Dynamic or current properties, such as settings, of an individual device are described using a Device instance-specific [DeviceMetric] and recorded using [Observation].  Static characteristics of a device could also be documented in an associated [DeviceDefinition] instance. The Device instance\'s properties, and their values, could be, but need not be, the same as those described in an associated DeviceDefinition.
 *
 * @category Data Models: Resource
 * @see [FHIR Device](http://hl7.org/fhir/StructureDefinition/Device)
 */
export class DevicePropertyComponent extends BackboneElement implements IBackboneElement {
  constructor(type_: CodeableConcept | null = null, value: IDataType | null = null) {
    super();

    this.type_ = null;
    if (isDefined<CodeableConcept>(type_)) {
      this.setType(type_);
    }

    this.value = null;
    if (isDefined<IDataType>(value)) {
      this.setValue(value);
    }

  }

  /**
   * Parse the provided `DevicePropertyComponent` JSON to instantiate the DevicePropertyComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `DevicePropertyComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to DevicePropertyComponent
   * @returns DevicePropertyComponent data model or undefined for `DevicePropertyComponent`
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

    const classMetadata: DecoratorMetadataObject | null = DevicePropertyComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for DevicePropertyComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setType(null);
      } else {
        instance.setType(datatype);
      }
    } else {
      instance.setType(null);
    }

    fieldName = 'value[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const value: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    if (value === undefined) {
      instance.setValue(null);
    } else {
      instance.setValue(value);
    }

    return instance;
  }

  /**
   * Device.property.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Code that specifies the property being represented
   * - **Definition:** Code that specifies the property, such as resolution, color, size, being represented.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private type_: CodeableConcept | null;

  /**
   * Device.property.value[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('Device.property.value[x]', ['Quantity','CodeableConcept','string','boolean','integer','Range','Attachment',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Value of the property
   * - **Definition:** The value of the property specified by the associated property.type code.
   * - **Comment:** The text element in CodeableConcept.text is used for properties which would usually be coded (such as the size of an implant, or a security classification) but for which there is not currently an appropriate concept in the vocabulary (e.g. a custom implant size, or a security classification which depends on configuration). Otherwise the string choice type is used for descriptive properties, or instructions.
   * - **FHIR Types:**
   *     'Quantity',
   *     'CodeableConcept',
   *     'string',
   *     'boolean',
   *     'integer',
   *     'Range',
   *     'Attachment',
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('Device.property.value[x]',[
    'Quantity',
    'CodeableConcept',
    'string',
    'boolean',
    'integer',
    'Range',
    'Attachment',
  ])
  private value: IDataType | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `type_` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getType(): CodeableConcept {
    return this.type_ ?? new CodeableConcept();
  }

  /**
   * Assigns the provided CodeableConcept object value to the `type_` property.
   *
   * @param value - the `type_` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setType(value: CodeableConcept | undefined | null): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Device.property.type; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.type_ = value;
    } else {
      this.type_ = null;
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
   * @returns the `value` property value as a DataType object; else null
   */
  public getValue(): IDataType | null {
    return this.value;
  }

  /**
   * Assigns the provided DataType object value to the `value` property.
   *
   * @decorator `@ChoiceDataTypes('Device.property.value[x]')`
   *
   * @param value - the `value` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('Device.property.value[x]')
  public setValue(value: IDataType | undefined | null): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.value = value;
    } else {
      this.value = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `value` property exists and has a value; `false` otherwise
   */
  public hasValue(): boolean {
    return isDefined<IDataType>(this.value) && !this.value.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `value` property value as a Quantity object if defined; else null
   */
  public getValueQuantity(): Quantity | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Quantity)) {
      throw new InvalidTypeError(
        `DataType mismatch for Device.property.value[x]: Expected Quantity but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Quantity and has a value; `false` otherwise
   */
  public hasValueQuantity(): boolean {
    return this.hasValue() && this.value instanceof Quantity;
  }

  /**
   * @returns the `value` property value as a CodeableConcept object if defined; else null
   */
  public getValueCodeableConcept(): CodeableConcept | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof CodeableConcept)) {
      throw new InvalidTypeError(
        `DataType mismatch for Device.property.value[x]: Expected CodeableConcept but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a CodeableConcept and has a value; `false` otherwise
   */
  public hasValueCodeableConcept(): boolean {
    return this.hasValue() && this.value instanceof CodeableConcept;
  }

  /**
   * @returns the `value` property value as a StringType object if defined; else null
   */
  public getValueStringType(): StringType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof StringType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Device.property.value[x]: Expected StringType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a StringType and has a value; `false` otherwise
   */
  public hasValueStringType(): boolean {
    return this.hasValue() && this.value instanceof StringType;
  }

  /**
   * @returns the `value` property value as a BooleanType object if defined; else null
   */
  public getValueBooleanType(): BooleanType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof BooleanType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Device.property.value[x]: Expected BooleanType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a BooleanType and has a value; `false` otherwise
   */
  public hasValueBooleanType(): boolean {
    return this.hasValue() && this.value instanceof BooleanType;
  }

  /**
   * @returns the `value` property value as a IntegerType object if defined; else null
   */
  public getValueIntegerType(): IntegerType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof IntegerType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Device.property.value[x]: Expected IntegerType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a IntegerType and has a value; `false` otherwise
   */
  public hasValueIntegerType(): boolean {
    return this.hasValue() && this.value instanceof IntegerType;
  }

  /**
   * @returns the `value` property value as a Range object if defined; else null
   */
  public getValueRange(): Range | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Range)) {
      throw new InvalidTypeError(
        `DataType mismatch for Device.property.value[x]: Expected Range but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Range and has a value; `false` otherwise
   */
  public hasValueRange(): boolean {
    return this.hasValue() && this.value instanceof Range;
  }

  /**
   * @returns the `value` property value as a Attachment object if defined; else null
   */
  public getValueAttachment(): Attachment | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Attachment)) {
      throw new InvalidTypeError(
        `DataType mismatch for Device.property.value[x]: Expected Attachment but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Attachment and has a value; `false` otherwise
   */
  public hasValueAttachment(): boolean {
    return this.hasValue() && this.value instanceof Attachment;
  }

  // End of choice datatype-specific "get"/"has" methods

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
      this.value,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.type_, this.value, 
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
    dest.value = this.value ? this.value.copy() as IDataType : null;
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
      setFhirComplexJson(this.getType(), 'type', jsonObj);
    } else {
      jsonObj['type'] = null;
    }

    if (this.hasValue()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getValue()!, 'value', jsonObj);
    } else {
      jsonObj['value'] = null;
    }

    return jsonObj;
  }
}
