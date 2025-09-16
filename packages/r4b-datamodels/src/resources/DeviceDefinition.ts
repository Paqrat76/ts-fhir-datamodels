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
 * DeviceDefinition Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/DeviceDefinition
 * StructureDefinition.name: DeviceDefinition
 * StructureDefinition.description: The characteristics, operational status and capabilities of a medical-related component of a medical device.
 * StructureDefinition.fhirVersion: 4.3.0
 *
 * For questions, suggestions, or bugs, please open an issue at [GitHub ts-fhir-datamodels/issues](https://github.com/Paqrat76/ts-fhir-datamodels/issues).
 *
 * @packageDocumentation
 */

import {
  BackboneElement,
  BooleanType,
  ChoiceDataTypes,
  ChoiceDataTypesMeta,
  CodeType,
  DomainResource,
  EnumCodeType,
  FhirParser,
  IBackboneElement,
  IDataType,
  IDomainResource,
  InvalidTypeError,
  JSON,
  PrimitiveType,
  PrimitiveTypeJson,
  ReferenceTargets,
  StringType,
  UriType,
  assertEnumCodeType,
  assertFhirType,
  assertFhirTypeList,
  assertIsDefined,
  constructorCodeValueAsEnumCodeType,
  copyListValues,
  fhirBoolean,
  fhirBooleanSchema,
  fhirCode,
  fhirCodeSchema,
  fhirString,
  fhirStringSchema,
  fhirUri,
  fhirUriSchema,
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
  setPolymorphicValueJson,
} from '@paq-ts-fhir/fhir-core';
import { Annotation, CodeableConcept, ContactPoint, Identifier, PARSABLE_DATATYPE_MAP, ProdCharacteristic, ProductShelfLife, Quantity, Reference } from '../complex-types/complex-datatypes';
import { DeviceNametypeEnum } from '../code-systems/DeviceNametypeEnum';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Symbol.metadata polyfill secret sauce for decorator metadata
(Symbol.metadata as any) ??= Symbol('Symbol.metadata');

/**
 * DeviceDefinition Class
 *
 * @remarks
 * The characteristics, operational status and capabilities of a medical-related component of a medical device.
 *
 * **FHIR Specification**
 * - **Short:** An instance of a medical-related component of a medical device
 * - **Definition:** The characteristics, operational status and capabilities of a medical-related component of a medical device.
 * - **Comment:** For the initial scope, this DeviceDefinition resource is only applicable to describe a single node in the containment tree that is produced by the context scanner in any medical device that implements or derives from the ISO/IEEE 11073 standard and that does not represent a metric. Examples for such a node are MDS, VMD, or Channel.
 * - **FHIR Version:** 4.3.0
 *
 * @category Data Models: Resource
 * @see [FHIR DeviceDefinition](http://hl7.org/fhir/StructureDefinition/DeviceDefinition)
 */
export class DeviceDefinition extends DomainResource implements IDomainResource {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `DeviceDefinition` JSON to instantiate the DeviceDefinition data model.
   *
   * @param sourceJson - JSON representing FHIR `DeviceDefinition`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to DeviceDefinition
   * @returns DeviceDefinition data model or undefined for `DeviceDefinition`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): DeviceDefinition | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'DeviceDefinition';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new DeviceDefinition();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'DeviceDefinition');
    fhirParser.processDomainResourceJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const classMetadata: DecoratorMetadataObject | null = DeviceDefinition[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for DeviceDefinition`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    fieldName = 'identifier';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Identifier | undefined = Identifier.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addIdentifier(datatype);
          }
        });
      }
    }

    fieldName = 'udiDeviceIdentifier';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: DeviceDefinitionUdiDeviceIdentifierComponent | undefined = DeviceDefinitionUdiDeviceIdentifierComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addUdiDeviceIdentifier(component);
          }
        });
      }
    }

    fieldName = 'manufacturer[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const manufacturer: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setManufacturer(manufacturer);

    fieldName = 'deviceName';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: DeviceDefinitionDeviceNameComponent | undefined = DeviceDefinitionDeviceNameComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addDeviceName(component);
          }
        });
      }
    }

    fieldName = 'modelNumber';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setModelNumberElement(datatype);
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
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: DeviceDefinitionSpecializationComponent | undefined = DeviceDefinitionSpecializationComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addSpecialization(component);
          }
        });
      }
    }

    fieldName = 'version';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        const dataJsonArray: PrimitiveTypeJson[] = getPrimitiveTypeListJson(
          classJsonObj,
          sourceField,
          fieldName,
          primitiveJsonType,
        );
        dataJsonArray.forEach((dataJson: PrimitiveTypeJson) => {
          const datatype: StringType | undefined = fhirParser.parseStringType(dataJson.dtJson, dataJson.dtSiblingJson);
          if (datatype !== undefined) {
            instance.addVersionElement(datatype);
          }
        });
      }
    }

    fieldName = 'safety';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addSafety(datatype);
          }
        });
      }
    }

    fieldName = 'shelfLifeStorage';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: ProductShelfLife | undefined = ProductShelfLife.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addShelfLifeStorage(datatype);
          }
        });
      }
    }

    fieldName = 'physicalCharacteristics';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: ProdCharacteristic | undefined = ProdCharacteristic.parse(classJsonObj[fieldName]!, sourceField);
      instance.setPhysicalCharacteristics(datatype);
    }

    fieldName = 'languageCode';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addLanguageCode(datatype);
          }
        });
      }
    }

    fieldName = 'capability';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: DeviceDefinitionCapabilityComponent | undefined = DeviceDefinitionCapabilityComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addCapability(component);
          }
        });
      }
    }

    fieldName = 'property';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: DeviceDefinitionPropertyComponent | undefined = DeviceDefinitionPropertyComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addProperty(component);
          }
        });
      }
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
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: ContactPoint | undefined = ContactPoint.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addContact(datatype);
          }
        });
      }
    }

    fieldName = 'url';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: UriType | undefined = fhirParser.parseUriType(dtJson, dtSiblingJson);
      instance.setUrlElement(datatype);
    }

    fieldName = 'onlineInformation';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: UriType | undefined = fhirParser.parseUriType(dtJson, dtSiblingJson);
      instance.setOnlineInformationElement(datatype);
    }

    fieldName = 'note';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Annotation | undefined = Annotation.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addNote(datatype);
          }
        });
      }
    }

    fieldName = 'quantity';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Quantity | undefined = Quantity.parse(classJsonObj[fieldName]!, sourceField);
      instance.setQuantity(datatype);
    }

    fieldName = 'parentDevice';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setParentDevice(datatype);
    }

    fieldName = 'material';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: DeviceDefinitionMaterialComponent | undefined = DeviceDefinitionMaterialComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addMaterial(component);
          }
        });
      }
    }

    return instance;
  }

  /**
   * DeviceDefinition.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Instance identifier
   * - **Definition:** Unique instance identifiers assigned to a device by the software, manufacturers, other organizations or owners. For example: handle ID.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private identifier?: Identifier[] | undefined;

  /**
   * DeviceDefinition.udiDeviceIdentifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Unique Device Identifier (UDI) Barcode string
   * - **Definition:** Unique device identifier (UDI) assigned to device label or package.  Note that the Device may include multiple udiCarriers as it either may include just the udiCarrier for the jurisdiction it is sold, or for multiple jurisdictions it could have been sold.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private udiDeviceIdentifier?: DeviceDefinitionUdiDeviceIdentifierComponent[] | undefined;

  /**
   * DeviceDefinition.manufacturer[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('DeviceDefinition.manufacturer[x]', ['string','Reference',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name of device manufacturer
   * - **Definition:** A name of the manufacturer.
   * - **FHIR Types:**
   *     'string',
   *     'Reference',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('DeviceDefinition.manufacturer[x]',[
    'string',
    'Reference',
  ])
  private manufacturer?: IDataType | undefined;

  /**
   * DeviceDefinition.deviceName Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A name given to the device to identify it
   * - **Definition:** A name given to the device to identify it.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private deviceName?: DeviceDefinitionDeviceNameComponent[] | undefined;

  /**
   * DeviceDefinition.modelNumber Element
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
   * DeviceDefinition.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** What kind of device or device system this is
   * - **Definition:** What kind of device or device system this is.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private type_?: CodeableConcept | undefined;

  /**
   * DeviceDefinition.specialization Element
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
  private specialization?: DeviceDefinitionSpecializationComponent[] | undefined;

  /**
   * DeviceDefinition.version Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Available versions
   * - **Definition:** The available versions of the device, e.g., software versions.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private version?: StringType[] | undefined;

  /**
   * DeviceDefinition.safety Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Safety characteristics of the device
   * - **Definition:** Safety characteristics of the device.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private safety?: CodeableConcept[] | undefined;

  /**
   * DeviceDefinition.shelfLifeStorage Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Shelf Life and storage information
   * - **Definition:** Shelf Life and storage information.
   * - **FHIR Type:** `ProductShelfLife`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private shelfLifeStorage?: ProductShelfLife[] | undefined;

  /**
   * DeviceDefinition.physicalCharacteristics Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Dimensions, color etc.
   * - **Definition:** Dimensions, color etc.
   * - **FHIR Type:** `ProdCharacteristic`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private physicalCharacteristics?: ProdCharacteristic | undefined;

  /**
   * DeviceDefinition.languageCode Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Language code for the human-readable text strings produced by the device (all supported)
   * - **Definition:** Language code for the human-readable text strings produced by the device (all supported).
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private languageCode?: CodeableConcept[] | undefined;

  /**
   * DeviceDefinition.capability Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Device capabilities
   * - **Definition:** Device capabilities.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private capability?: DeviceDefinitionCapabilityComponent[] | undefined;

  /**
   * DeviceDefinition.property Element
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
  private property?: DeviceDefinitionPropertyComponent[] | undefined;

  /**
   * DeviceDefinition.owner Element
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
   * DeviceDefinition.contact Element
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
   * DeviceDefinition.url Element
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
   * DeviceDefinition.onlineInformation Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Access to on-line information
   * - **Definition:** Access to on-line information about the device.
   * - **FHIR Type:** `uri`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private onlineInformation?: UriType | undefined;

  /**
   * DeviceDefinition.note Element
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
   * DeviceDefinition.quantity Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The quantity of the device present in the packaging (e.g. the number of devices present in a pack, or the number of devices in the same package of the medicinal product)
   * - **Definition:** The quantity of the device present in the packaging (e.g. the number of devices present in a pack, or the number of devices in the same package of the medicinal product).
   * - **FHIR Type:** `Quantity`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private quantity?: Quantity | undefined;

  /**
   * DeviceDefinition.parentDevice Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The parent device it can be part of
   * - **Definition:** The parent device it can be part of.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/DeviceDefinition',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private parentDevice?: Reference | undefined;

  /**
   * DeviceDefinition.material Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A substance used to create the material(s) of which the device is made
   * - **Definition:** A substance used to create the material(s) of which the device is made.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private material?: DeviceDefinitionMaterialComponent[] | undefined;

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
      const optErrMsg = `Invalid DeviceDefinition.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid DeviceDefinition.identifier; Provided element is not an instance of Identifier.`;
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
   * @returns the `udiDeviceIdentifier` property value as a DeviceDefinitionUdiDeviceIdentifierComponent array
   */
  public getUdiDeviceIdentifier(): DeviceDefinitionUdiDeviceIdentifierComponent[] {
    return this.udiDeviceIdentifier ?? ([] as DeviceDefinitionUdiDeviceIdentifierComponent[]);
  }

  /**
   * Assigns the provided DeviceDefinitionUdiDeviceIdentifierComponent array value to the `udiDeviceIdentifier` property.
   *
   * @param value - the `udiDeviceIdentifier` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setUdiDeviceIdentifier(value: DeviceDefinitionUdiDeviceIdentifierComponent[] | undefined): this {
    if (isDefinedList<DeviceDefinitionUdiDeviceIdentifierComponent>(value)) {
      const optErrMsg = `Invalid DeviceDefinition.udiDeviceIdentifier; Provided value array has an element that is not an instance of DeviceDefinitionUdiDeviceIdentifierComponent.`;
      assertFhirTypeList<DeviceDefinitionUdiDeviceIdentifierComponent>(value, DeviceDefinitionUdiDeviceIdentifierComponent, optErrMsg);
      this.udiDeviceIdentifier = value;
    } else {
      this.udiDeviceIdentifier = undefined;
    }
    return this;
  }

  /**
   * Add the provided DeviceDefinitionUdiDeviceIdentifierComponent value to the `udiDeviceIdentifier` array property.
   *
   * @param value - the `udiDeviceIdentifier` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addUdiDeviceIdentifier(value: DeviceDefinitionUdiDeviceIdentifierComponent | undefined): this {
    if (isDefined<DeviceDefinitionUdiDeviceIdentifierComponent>(value)) {
      const optErrMsg = `Invalid DeviceDefinition.udiDeviceIdentifier; Provided element is not an instance of DeviceDefinitionUdiDeviceIdentifierComponent.`;
      assertFhirType<DeviceDefinitionUdiDeviceIdentifierComponent>(value, DeviceDefinitionUdiDeviceIdentifierComponent, optErrMsg);
      this.initUdiDeviceIdentifier();
      this.udiDeviceIdentifier?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `udiDeviceIdentifier` property exists and has a value; `false` otherwise
   */
  public hasUdiDeviceIdentifier(): boolean {
    return isDefinedList<DeviceDefinitionUdiDeviceIdentifierComponent>(this.udiDeviceIdentifier) && this.udiDeviceIdentifier.some((item: DeviceDefinitionUdiDeviceIdentifierComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `udiDeviceIdentifier` property
   */
  private initUdiDeviceIdentifier(): void {
    if(!this.hasUdiDeviceIdentifier()) {
      this.udiDeviceIdentifier = [] as DeviceDefinitionUdiDeviceIdentifierComponent[];
    }
  }

  /**
   * @returns the `manufacturer` property value as a DataType object if defined; else undefined
   */
  public getManufacturer(): IDataType | undefined {
    return this.manufacturer;
  }

  /**
   * Assigns the provided DataType object value to the `manufacturer` property.
   *
   * @decorator `@ChoiceDataTypes('DeviceDefinition.manufacturer[x]')`
   *
   * @param value - the `manufacturer` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('DeviceDefinition.manufacturer[x]')
  public setManufacturer(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.manufacturer = value;
    } else {
      this.manufacturer = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `manufacturer` property exists and has a value; `false` otherwise
   */
  public hasManufacturer(): boolean {
    return isDefined<IDataType>(this.manufacturer) && !this.manufacturer.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `manufacturer` property value as a StringType object if defined; else undefined
   */
  public getManufacturerStringType(): StringType | undefined {
    if (!isDefined<IDataType | undefined>(this.manufacturer)) {
      return undefined;
    }
    if (!(this.manufacturer instanceof StringType)) {
      throw new InvalidTypeError(
        `DataType mismatch for DeviceDefinition.manufacturer[x]: Expected StringType but encountered ${this.manufacturer.fhirType()}`,
      );
    }
    return this.manufacturer;
  }

  /**
   * @returns `true` if the `manufacturer` property exists as a StringType and has a value; `false` otherwise
   */
  public hasManufacturerStringType(): boolean {
    return this.hasManufacturer() && this.manufacturer instanceof StringType;
  }

  /**
   * @returns the `manufacturer` property value as a Reference object if defined; else undefined
   */
  public getManufacturerReference(): Reference | undefined {
    if (!isDefined<IDataType | undefined>(this.manufacturer)) {
      return undefined;
    }
    if (!(this.manufacturer instanceof Reference)) {
      throw new InvalidTypeError(
        `DataType mismatch for DeviceDefinition.manufacturer[x]: Expected Reference but encountered ${this.manufacturer.fhirType()}`,
      );
    }
    return this.manufacturer;
  }

  /**
   * @returns `true` if the `manufacturer` property exists as a Reference and has a value; `false` otherwise
   */
  public hasManufacturerReference(): boolean {
    return this.hasManufacturer() && this.manufacturer instanceof Reference;
  }

  // End of choice datatype-specific "get"/"has" methods

  /**
   * @returns the `deviceName` property value as a DeviceDefinitionDeviceNameComponent array
   */
  public getDeviceName(): DeviceDefinitionDeviceNameComponent[] {
    return this.deviceName ?? ([] as DeviceDefinitionDeviceNameComponent[]);
  }

  /**
   * Assigns the provided DeviceDefinitionDeviceNameComponent array value to the `deviceName` property.
   *
   * @param value - the `deviceName` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDeviceName(value: DeviceDefinitionDeviceNameComponent[] | undefined): this {
    if (isDefinedList<DeviceDefinitionDeviceNameComponent>(value)) {
      const optErrMsg = `Invalid DeviceDefinition.deviceName; Provided value array has an element that is not an instance of DeviceDefinitionDeviceNameComponent.`;
      assertFhirTypeList<DeviceDefinitionDeviceNameComponent>(value, DeviceDefinitionDeviceNameComponent, optErrMsg);
      this.deviceName = value;
    } else {
      this.deviceName = undefined;
    }
    return this;
  }

  /**
   * Add the provided DeviceDefinitionDeviceNameComponent value to the `deviceName` array property.
   *
   * @param value - the `deviceName` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addDeviceName(value: DeviceDefinitionDeviceNameComponent | undefined): this {
    if (isDefined<DeviceDefinitionDeviceNameComponent>(value)) {
      const optErrMsg = `Invalid DeviceDefinition.deviceName; Provided element is not an instance of DeviceDefinitionDeviceNameComponent.`;
      assertFhirType<DeviceDefinitionDeviceNameComponent>(value, DeviceDefinitionDeviceNameComponent, optErrMsg);
      this.initDeviceName();
      this.deviceName?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `deviceName` property exists and has a value; `false` otherwise
   */
  public hasDeviceName(): boolean {
    return isDefinedList<DeviceDefinitionDeviceNameComponent>(this.deviceName) && this.deviceName.some((item: DeviceDefinitionDeviceNameComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `deviceName` property
   */
  private initDeviceName(): void {
    if(!this.hasDeviceName()) {
      this.deviceName = [] as DeviceDefinitionDeviceNameComponent[];
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
      const optErrMsg = `Invalid DeviceDefinition.modelNumber; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid DeviceDefinition.modelNumber (${String(value)})`;
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
      const optErrMsg = `Invalid DeviceDefinition.type; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `specialization` property value as a DeviceDefinitionSpecializationComponent array
   */
  public getSpecialization(): DeviceDefinitionSpecializationComponent[] {
    return this.specialization ?? ([] as DeviceDefinitionSpecializationComponent[]);
  }

  /**
   * Assigns the provided DeviceDefinitionSpecializationComponent array value to the `specialization` property.
   *
   * @param value - the `specialization` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSpecialization(value: DeviceDefinitionSpecializationComponent[] | undefined): this {
    if (isDefinedList<DeviceDefinitionSpecializationComponent>(value)) {
      const optErrMsg = `Invalid DeviceDefinition.specialization; Provided value array has an element that is not an instance of DeviceDefinitionSpecializationComponent.`;
      assertFhirTypeList<DeviceDefinitionSpecializationComponent>(value, DeviceDefinitionSpecializationComponent, optErrMsg);
      this.specialization = value;
    } else {
      this.specialization = undefined;
    }
    return this;
  }

  /**
   * Add the provided DeviceDefinitionSpecializationComponent value to the `specialization` array property.
   *
   * @param value - the `specialization` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addSpecialization(value: DeviceDefinitionSpecializationComponent | undefined): this {
    if (isDefined<DeviceDefinitionSpecializationComponent>(value)) {
      const optErrMsg = `Invalid DeviceDefinition.specialization; Provided element is not an instance of DeviceDefinitionSpecializationComponent.`;
      assertFhirType<DeviceDefinitionSpecializationComponent>(value, DeviceDefinitionSpecializationComponent, optErrMsg);
      this.initSpecialization();
      this.specialization?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `specialization` property exists and has a value; `false` otherwise
   */
  public hasSpecialization(): boolean {
    return isDefinedList<DeviceDefinitionSpecializationComponent>(this.specialization) && this.specialization.some((item: DeviceDefinitionSpecializationComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `specialization` property
   */
  private initSpecialization(): void {
    if(!this.hasSpecialization()) {
      this.specialization = [] as DeviceDefinitionSpecializationComponent[];
    }
  }

  /**
   * @returns the `version` property value as a StringType array
   */
  public getVersionElement(): StringType[] {
    return this.version ?? ([] as StringType[]);
  }

  /**
   * Assigns the provided StringType array value to the `version` property.
   *
   * @param element - the `version` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setVersionElement(element: StringType[] | undefined): this {
    if (isDefinedList<StringType>(element)) {
      const optErrMsg = `Invalid DeviceDefinition.version; Provided value array has an element that is not an instance of StringType.`;
      assertFhirTypeList<StringType>(element, StringType, optErrMsg);
      this.version = element;
    } else {
      this.version = undefined;
    }
    return this;
  }

  /**
   * Add the provided StringType value to the `version` array property.
   *
   * @param element - the `version` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addVersionElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid DeviceDefinition.version; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.initVersion();
      this.version?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `version` property exists and has a value; `false` otherwise
   */
  public hasVersionElement(): boolean {
    return isDefinedList<StringType>(this.version) && this.version.some((item: StringType) => !item.isEmpty());
  }

  /**
   * @returns the `version` property value as a fhirString array
   */
  public getVersion(): fhirString[] {
    this.initVersion();
    const versionValues = [] as fhirString[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.version!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        versionValues.push(value);
      }
    }
    return versionValues;
  }

  /**
   * Assigns the provided primitive value array to the `version` property.
   *
   * @param value - the `version` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setVersion(value: fhirString[] | undefined): this {
    if (isDefinedList<fhirString>(value)) {
      const versionElements = [] as StringType[];
      for (const versionValue of value) {
        const optErrMsg = `Invalid DeviceDefinition.version array item (${String(versionValue)})`;
        const element = new StringType(parseFhirPrimitiveData(versionValue, fhirStringSchema, optErrMsg));
        versionElements.push(element);
      }
      this.version = versionElements;
    } else {
      this.version = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `version` array property.
   *
   * @param value - the `version` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addVersion(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid DeviceDefinition.version array item (${String(value)})`;
      const element = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
      this.initVersion();
      this.addVersionElement(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `version` property exists and has a value; `false` otherwise
   */
  public hasVersion(): boolean {
    return this.hasVersionElement();
  }

  /**
   * Initialize the `version` property
   */
  private initVersion(): void {
    if (!this.hasVersion()) {
      this.version = [] as StringType[];
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
      const optErrMsg = `Invalid DeviceDefinition.safety; Provided value array has an element that is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid DeviceDefinition.safety; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `shelfLifeStorage` property value as a ProductShelfLife array
   */
  public getShelfLifeStorage(): ProductShelfLife[] {
    return this.shelfLifeStorage ?? ([] as ProductShelfLife[]);
  }

  /**
   * Assigns the provided ProductShelfLife array value to the `shelfLifeStorage` property.
   *
   * @param value - the `shelfLifeStorage` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setShelfLifeStorage(value: ProductShelfLife[] | undefined): this {
    if (isDefinedList<ProductShelfLife>(value)) {
      const optErrMsg = `Invalid DeviceDefinition.shelfLifeStorage; Provided value array has an element that is not an instance of ProductShelfLife.`;
      assertFhirTypeList<ProductShelfLife>(value, ProductShelfLife, optErrMsg);
      this.shelfLifeStorage = value;
    } else {
      this.shelfLifeStorage = undefined;
    }
    return this;
  }

  /**
   * Add the provided ProductShelfLife value to the `shelfLifeStorage` array property.
   *
   * @param value - the `shelfLifeStorage` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addShelfLifeStorage(value: ProductShelfLife | undefined): this {
    if (isDefined<ProductShelfLife>(value)) {
      const optErrMsg = `Invalid DeviceDefinition.shelfLifeStorage; Provided element is not an instance of ProductShelfLife.`;
      assertFhirType<ProductShelfLife>(value, ProductShelfLife, optErrMsg);
      this.initShelfLifeStorage();
      this.shelfLifeStorage?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `shelfLifeStorage` property exists and has a value; `false` otherwise
   */
  public hasShelfLifeStorage(): boolean {
    return isDefinedList<ProductShelfLife>(this.shelfLifeStorage) && this.shelfLifeStorage.some((item: ProductShelfLife) => !item.isEmpty());
  }

  /**
   * Initialize the `shelfLifeStorage` property
   */
  private initShelfLifeStorage(): void {
    if(!this.hasShelfLifeStorage()) {
      this.shelfLifeStorage = [] as ProductShelfLife[];
    }
  }

  /**
   * @returns the `physicalCharacteristics` property value as a ProdCharacteristic object if defined; else an empty ProdCharacteristic object
   */
  public getPhysicalCharacteristics(): ProdCharacteristic {
    return this.physicalCharacteristics ?? new ProdCharacteristic();
  }

  /**
   * Assigns the provided PhysicalCharacteristics object value to the `physicalCharacteristics` property.
   *
   * @param value - the `physicalCharacteristics` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPhysicalCharacteristics(value: ProdCharacteristic | undefined): this {
    if (isDefined<ProdCharacteristic>(value)) {
      const optErrMsg = `Invalid DeviceDefinition.physicalCharacteristics; Provided element is not an instance of ProdCharacteristic.`;
      assertFhirType<ProdCharacteristic>(value, ProdCharacteristic, optErrMsg);
      this.physicalCharacteristics = value;
    } else {
      this.physicalCharacteristics = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `physicalCharacteristics` property exists and has a value; `false` otherwise
   */
  public hasPhysicalCharacteristics(): boolean {
    return isDefined<ProdCharacteristic>(this.physicalCharacteristics) && !this.physicalCharacteristics.isEmpty();
  }

  /**
   * @returns the `languageCode` property value as a CodeableConcept array
   */
  public getLanguageCode(): CodeableConcept[] {
    return this.languageCode ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `languageCode` property.
   *
   * @param value - the `languageCode` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setLanguageCode(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid DeviceDefinition.languageCode; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.languageCode = value;
    } else {
      this.languageCode = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `languageCode` array property.
   *
   * @param value - the `languageCode` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addLanguageCode(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid DeviceDefinition.languageCode; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initLanguageCode();
      this.languageCode?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `languageCode` property exists and has a value; `false` otherwise
   */
  public hasLanguageCode(): boolean {
    return isDefinedList<CodeableConcept>(this.languageCode) && this.languageCode.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `languageCode` property
   */
  private initLanguageCode(): void {
    if(!this.hasLanguageCode()) {
      this.languageCode = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `capability` property value as a DeviceDefinitionCapabilityComponent array
   */
  public getCapability(): DeviceDefinitionCapabilityComponent[] {
    return this.capability ?? ([] as DeviceDefinitionCapabilityComponent[]);
  }

  /**
   * Assigns the provided DeviceDefinitionCapabilityComponent array value to the `capability` property.
   *
   * @param value - the `capability` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCapability(value: DeviceDefinitionCapabilityComponent[] | undefined): this {
    if (isDefinedList<DeviceDefinitionCapabilityComponent>(value)) {
      const optErrMsg = `Invalid DeviceDefinition.capability; Provided value array has an element that is not an instance of DeviceDefinitionCapabilityComponent.`;
      assertFhirTypeList<DeviceDefinitionCapabilityComponent>(value, DeviceDefinitionCapabilityComponent, optErrMsg);
      this.capability = value;
    } else {
      this.capability = undefined;
    }
    return this;
  }

  /**
   * Add the provided DeviceDefinitionCapabilityComponent value to the `capability` array property.
   *
   * @param value - the `capability` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addCapability(value: DeviceDefinitionCapabilityComponent | undefined): this {
    if (isDefined<DeviceDefinitionCapabilityComponent>(value)) {
      const optErrMsg = `Invalid DeviceDefinition.capability; Provided element is not an instance of DeviceDefinitionCapabilityComponent.`;
      assertFhirType<DeviceDefinitionCapabilityComponent>(value, DeviceDefinitionCapabilityComponent, optErrMsg);
      this.initCapability();
      this.capability?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `capability` property exists and has a value; `false` otherwise
   */
  public hasCapability(): boolean {
    return isDefinedList<DeviceDefinitionCapabilityComponent>(this.capability) && this.capability.some((item: DeviceDefinitionCapabilityComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `capability` property
   */
  private initCapability(): void {
    if(!this.hasCapability()) {
      this.capability = [] as DeviceDefinitionCapabilityComponent[];
    }
  }

  /**
   * @returns the `property` property value as a DeviceDefinitionPropertyComponent array
   */
  public getProperty(): DeviceDefinitionPropertyComponent[] {
    return this.property ?? ([] as DeviceDefinitionPropertyComponent[]);
  }

  /**
   * Assigns the provided DeviceDefinitionPropertyComponent array value to the `property` property.
   *
   * @param value - the `property` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setProperty(value: DeviceDefinitionPropertyComponent[] | undefined): this {
    if (isDefinedList<DeviceDefinitionPropertyComponent>(value)) {
      const optErrMsg = `Invalid DeviceDefinition.property; Provided value array has an element that is not an instance of DeviceDefinitionPropertyComponent.`;
      assertFhirTypeList<DeviceDefinitionPropertyComponent>(value, DeviceDefinitionPropertyComponent, optErrMsg);
      this.property = value;
    } else {
      this.property = undefined;
    }
    return this;
  }

  /**
   * Add the provided DeviceDefinitionPropertyComponent value to the `property` array property.
   *
   * @param value - the `property` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addProperty(value: DeviceDefinitionPropertyComponent | undefined): this {
    if (isDefined<DeviceDefinitionPropertyComponent>(value)) {
      const optErrMsg = `Invalid DeviceDefinition.property; Provided element is not an instance of DeviceDefinitionPropertyComponent.`;
      assertFhirType<DeviceDefinitionPropertyComponent>(value, DeviceDefinitionPropertyComponent, optErrMsg);
      this.initProperty();
      this.property?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `property` property exists and has a value; `false` otherwise
   */
  public hasProperty(): boolean {
    return isDefinedList<DeviceDefinitionPropertyComponent>(this.property) && this.property.some((item: DeviceDefinitionPropertyComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `property` property
   */
  private initProperty(): void {
    if(!this.hasProperty()) {
      this.property = [] as DeviceDefinitionPropertyComponent[];
    }
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
   * @decorator `@ReferenceTargets('DeviceDefinition.owner', ['Organization',])`
   *
   * @param value - the `owner` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('DeviceDefinition.owner', [
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
      const optErrMsg = `Invalid DeviceDefinition.contact; Provided value array has an element that is not an instance of ContactPoint.`;
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
      const optErrMsg = `Invalid DeviceDefinition.contact; Provided element is not an instance of ContactPoint.`;
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
      const optErrMsg = `Invalid DeviceDefinition.url; Provided element is not an instance of UriType.`;
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
      const optErrMsg = `Invalid DeviceDefinition.url (${String(value)})`;
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
   * @returns the `onlineInformation` property value as a UriType object if defined; else an empty UriType object
   */
  public getOnlineInformationElement(): UriType {
    return this.onlineInformation ?? new UriType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `onlineInformation` property.
   *
   * @param element - the `onlineInformation` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setOnlineInformationElement(element: UriType | undefined): this {
    if (isDefined<UriType>(element)) {
      const optErrMsg = `Invalid DeviceDefinition.onlineInformation; Provided element is not an instance of UriType.`;
      assertFhirType<UriType>(element, UriType, optErrMsg);
      this.onlineInformation = element;
    } else {
      this.onlineInformation = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `onlineInformation` property exists and has a value; `false` otherwise
   */
  public hasOnlineInformationElement(): boolean {
    return isDefined<UriType>(this.onlineInformation) && !this.onlineInformation.isEmpty();
  }

  /**
   * @returns the `onlineInformation` property value as a fhirUri if defined; else undefined
   */
  public getOnlineInformation(): fhirUri | undefined {
    return this.onlineInformation?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `onlineInformation` property.
   *
   * @param value - the `onlineInformation` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setOnlineInformation(value: fhirUri | undefined): this {
    if (isDefined<fhirUri>(value)) {
      const optErrMsg = `Invalid DeviceDefinition.onlineInformation (${String(value)})`;
      this.onlineInformation = new UriType(parseFhirPrimitiveData(value, fhirUriSchema, optErrMsg));
    } else {
      this.onlineInformation = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `onlineInformation` property exists and has a value; `false` otherwise
   */
  public hasOnlineInformation(): boolean {
    return this.hasOnlineInformationElement();
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
      const optErrMsg = `Invalid DeviceDefinition.note; Provided value array has an element that is not an instance of Annotation.`;
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
      const optErrMsg = `Invalid DeviceDefinition.note; Provided element is not an instance of Annotation.`;
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
   * @returns the `quantity` property value as a Quantity object if defined; else an empty Quantity object
   */
  public getQuantity(): Quantity {
    return this.quantity ?? new Quantity();
  }

  /**
   * Assigns the provided Quantity object value to the `quantity` property.
   *
   * @param value - the `quantity` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setQuantity(value: Quantity | undefined): this {
    if (isDefined<Quantity>(value)) {
      const optErrMsg = `Invalid DeviceDefinition.quantity; Provided element is not an instance of Quantity.`;
      assertFhirType<Quantity>(value, Quantity, optErrMsg);
      this.quantity = value;
    } else {
      this.quantity = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `quantity` property exists and has a value; `false` otherwise
   */
  public hasQuantity(): boolean {
    return isDefined<Quantity>(this.quantity) && !this.quantity.isEmpty();
  }

  /**
   * @returns the `parentDevice` property value as a Reference object; else an empty Reference object
   */
  public getParentDevice(): Reference {
    return this.parentDevice ?? new Reference();
  }

  /**
   * Assigns the provided ParentDevice object value to the `parentDevice` property.
   *
   * @decorator `@ReferenceTargets('DeviceDefinition.parentDevice', ['DeviceDefinition',])`
   *
   * @param value - the `parentDevice` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('DeviceDefinition.parentDevice', [
    'DeviceDefinition',
  ])
  public setParentDevice(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.parentDevice = value;
    } else {
      this.parentDevice = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `parentDevice` property exists and has a value; `false` otherwise
   */
  public hasParentDevice(): boolean {
    return isDefined<Reference>(this.parentDevice) && !this.parentDevice.isEmpty();
  }

  /**
   * @returns the `material` property value as a DeviceDefinitionMaterialComponent array
   */
  public getMaterial(): DeviceDefinitionMaterialComponent[] {
    return this.material ?? ([] as DeviceDefinitionMaterialComponent[]);
  }

  /**
   * Assigns the provided DeviceDefinitionMaterialComponent array value to the `material` property.
   *
   * @param value - the `material` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setMaterial(value: DeviceDefinitionMaterialComponent[] | undefined): this {
    if (isDefinedList<DeviceDefinitionMaterialComponent>(value)) {
      const optErrMsg = `Invalid DeviceDefinition.material; Provided value array has an element that is not an instance of DeviceDefinitionMaterialComponent.`;
      assertFhirTypeList<DeviceDefinitionMaterialComponent>(value, DeviceDefinitionMaterialComponent, optErrMsg);
      this.material = value;
    } else {
      this.material = undefined;
    }
    return this;
  }

  /**
   * Add the provided DeviceDefinitionMaterialComponent value to the `material` array property.
   *
   * @param value - the `material` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addMaterial(value: DeviceDefinitionMaterialComponent | undefined): this {
    if (isDefined<DeviceDefinitionMaterialComponent>(value)) {
      const optErrMsg = `Invalid DeviceDefinition.material; Provided element is not an instance of DeviceDefinitionMaterialComponent.`;
      assertFhirType<DeviceDefinitionMaterialComponent>(value, DeviceDefinitionMaterialComponent, optErrMsg);
      this.initMaterial();
      this.material?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `material` property exists and has a value; `false` otherwise
   */
  public hasMaterial(): boolean {
    return isDefinedList<DeviceDefinitionMaterialComponent>(this.material) && this.material.some((item: DeviceDefinitionMaterialComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `material` property
   */
  private initMaterial(): void {
    if(!this.hasMaterial()) {
      this.material = [] as DeviceDefinitionMaterialComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'DeviceDefinition';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identifier,
      this.udiDeviceIdentifier,
      this.manufacturer,
      this.deviceName,
      this.modelNumber,
      this.type_,
      this.specialization,
      this.version,
      this.safety,
      this.shelfLifeStorage,
      this.physicalCharacteristics,
      this.languageCode,
      this.capability,
      this.property,
      this.owner,
      this.contact,
      this.url,
      this.onlineInformation,
      this.note,
      this.quantity,
      this.parentDevice,
      this.material,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): DeviceDefinition {
    const dest = new DeviceDefinition();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: DeviceDefinition): void {
    super.copyValues(dest);
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    const udiDeviceIdentifierList = copyListValues<DeviceDefinitionUdiDeviceIdentifierComponent>(this.udiDeviceIdentifier);
    dest.udiDeviceIdentifier = udiDeviceIdentifierList.length === 0 ? undefined : udiDeviceIdentifierList;
    dest.manufacturer = this.manufacturer?.copy() as IDataType;
    const deviceNameList = copyListValues<DeviceDefinitionDeviceNameComponent>(this.deviceName);
    dest.deviceName = deviceNameList.length === 0 ? undefined : deviceNameList;
    dest.modelNumber = this.modelNumber?.copy();
    dest.type_ = this.type_?.copy();
    const specializationList = copyListValues<DeviceDefinitionSpecializationComponent>(this.specialization);
    dest.specialization = specializationList.length === 0 ? undefined : specializationList;
    const versionList = copyListValues<StringType>(this.version);
    dest.version = versionList.length === 0 ? undefined : versionList;
    const safetyList = copyListValues<CodeableConcept>(this.safety);
    dest.safety = safetyList.length === 0 ? undefined : safetyList;
    const shelfLifeStorageList = copyListValues<ProductShelfLife>(this.shelfLifeStorage);
    dest.shelfLifeStorage = shelfLifeStorageList.length === 0 ? undefined : shelfLifeStorageList;
    dest.physicalCharacteristics = this.physicalCharacteristics?.copy();
    const languageCodeList = copyListValues<CodeableConcept>(this.languageCode);
    dest.languageCode = languageCodeList.length === 0 ? undefined : languageCodeList;
    const capabilityList = copyListValues<DeviceDefinitionCapabilityComponent>(this.capability);
    dest.capability = capabilityList.length === 0 ? undefined : capabilityList;
    const propertyList = copyListValues<DeviceDefinitionPropertyComponent>(this.property);
    dest.property = propertyList.length === 0 ? undefined : propertyList;
    dest.owner = this.owner?.copy();
    const contactList = copyListValues<ContactPoint>(this.contact);
    dest.contact = contactList.length === 0 ? undefined : contactList;
    dest.url = this.url?.copy();
    dest.onlineInformation = this.onlineInformation?.copy();
    const noteList = copyListValues<Annotation>(this.note);
    dest.note = noteList.length === 0 ? undefined : noteList;
    dest.quantity = this.quantity?.copy();
    dest.parentDevice = this.parentDevice?.copy();
    const materialList = copyListValues<DeviceDefinitionMaterialComponent>(this.material);
    dest.material = materialList.length === 0 ? undefined : materialList;
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

    if (this.hasUdiDeviceIdentifier()) {
      setFhirBackboneElementListJson(this.getUdiDeviceIdentifier(), 'udiDeviceIdentifier', jsonObj);
    }

    if (this.hasManufacturer()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getManufacturer()!, 'manufacturer', jsonObj);
    }

    if (this.hasDeviceName()) {
      setFhirBackboneElementListJson(this.getDeviceName(), 'deviceName', jsonObj);
    }

    if (this.hasModelNumberElement()) {
      setFhirPrimitiveJson<fhirString>(this.getModelNumberElement(), 'modelNumber', jsonObj);
    }

    if (this.hasType()) {
      setFhirComplexJson(this.getType(), 'type', jsonObj);
    }

    if (this.hasSpecialization()) {
      setFhirBackboneElementListJson(this.getSpecialization(), 'specialization', jsonObj);
    }

    if (this.hasVersion()) {
      setFhirPrimitiveListJson(this.getVersionElement(), 'version', jsonObj);
    }

    if (this.hasSafety()) {
      setFhirComplexListJson(this.getSafety(), 'safety', jsonObj);
    }

    if (this.hasShelfLifeStorage()) {
      setFhirComplexListJson(this.getShelfLifeStorage(), 'shelfLifeStorage', jsonObj);
    }

    if (this.hasPhysicalCharacteristics()) {
      setFhirComplexJson(this.getPhysicalCharacteristics(), 'physicalCharacteristics', jsonObj);
    }

    if (this.hasLanguageCode()) {
      setFhirComplexListJson(this.getLanguageCode(), 'languageCode', jsonObj);
    }

    if (this.hasCapability()) {
      setFhirBackboneElementListJson(this.getCapability(), 'capability', jsonObj);
    }

    if (this.hasProperty()) {
      setFhirBackboneElementListJson(this.getProperty(), 'property', jsonObj);
    }

    if (this.hasOwner()) {
      setFhirComplexJson(this.getOwner(), 'owner', jsonObj);
    }

    if (this.hasContact()) {
      setFhirComplexListJson(this.getContact(), 'contact', jsonObj);
    }

    if (this.hasUrlElement()) {
      setFhirPrimitiveJson<fhirUri>(this.getUrlElement(), 'url', jsonObj);
    }

    if (this.hasOnlineInformationElement()) {
      setFhirPrimitiveJson<fhirUri>(this.getOnlineInformationElement(), 'onlineInformation', jsonObj);
    }

    if (this.hasNote()) {
      setFhirComplexListJson(this.getNote(), 'note', jsonObj);
    }

    if (this.hasQuantity()) {
      setFhirComplexJson(this.getQuantity(), 'quantity', jsonObj);
    }

    if (this.hasParentDevice()) {
      setFhirComplexJson(this.getParentDevice(), 'parentDevice', jsonObj);
    }

    if (this.hasMaterial()) {
      setFhirBackboneElementListJson(this.getMaterial(), 'material', jsonObj);
    }

    return jsonObj;
  }
}

/**
 * DeviceDefinitionUdiDeviceIdentifierComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Unique Device Identifier (UDI) Barcode string
 * - **Definition:** Unique device identifier (UDI) assigned to device label or package.  Note that the Device may include multiple udiCarriers as it either may include just the udiCarrier for the jurisdiction it is sold, or for multiple jurisdictions it could have been sold.
 *
 * @category Data Models: Resource
 * @see [FHIR DeviceDefinition](http://hl7.org/fhir/StructureDefinition/DeviceDefinition)
 */
export class DeviceDefinitionUdiDeviceIdentifierComponent extends BackboneElement implements IBackboneElement {
  constructor(deviceIdentifier: StringType | fhirString | null = null, issuer: UriType | fhirUri | null = null, jurisdiction: UriType | fhirUri | null = null) {
    super();

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

    this.jurisdiction = null;
    if (isDefined<UriType | fhirUri>(jurisdiction)) {
      if (jurisdiction instanceof PrimitiveType) {
        this.setJurisdictionElement(jurisdiction);
      } else {
        this.setJurisdiction(jurisdiction);
      }
    }
  }

  /**
   * Parse the provided `DeviceDefinitionUdiDeviceIdentifierComponent` JSON to instantiate the DeviceDefinitionUdiDeviceIdentifierComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `DeviceDefinitionUdiDeviceIdentifierComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to DeviceDefinitionUdiDeviceIdentifierComponent
   * @returns DeviceDefinitionUdiDeviceIdentifierComponent data model or undefined for `DeviceDefinitionUdiDeviceIdentifierComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): DeviceDefinitionUdiDeviceIdentifierComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'DeviceDefinitionUdiDeviceIdentifierComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new DeviceDefinitionUdiDeviceIdentifierComponent();

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
      if (datatype === undefined) {
        instance.setJurisdiction(null);
      } else {
        instance.setJurisdictionElement(datatype);
      }
    } else {
      instance.setJurisdiction(null);
    }

    return instance;
  }

  /**
   * DeviceDefinition.udiDeviceIdentifier.deviceIdentifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The identifier that is to be associated with every Device that references this DeviceDefintiion for the issuer and jurisdication porvided in the DeviceDefinition.udiDeviceIdentifier
   * - **Definition:** The identifier that is to be associated with every Device that references this DeviceDefintiion for the issuer and jurisdication porvided in the DeviceDefinition.udiDeviceIdentifier.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private deviceIdentifier: StringType | null;

  /**
   * DeviceDefinition.udiDeviceIdentifier.issuer Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The organization that assigns the identifier algorithm
   * - **Definition:** The organization that assigns the identifier algorithm.
   * - **FHIR Type:** `uri`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private issuer: UriType | null;

  /**
   * DeviceDefinition.udiDeviceIdentifier.jurisdiction Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The jurisdiction to which the deviceIdentifier applies
   * - **Definition:** The jurisdiction to which the deviceIdentifier applies.
   * - **FHIR Type:** `uri`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private jurisdiction: UriType | null;

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
      const optErrMsg = `Invalid DeviceDefinition.udiDeviceIdentifier.deviceIdentifier; Provided value is not an instance of StringType.`;
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
      const optErrMsg = `Invalid DeviceDefinition.udiDeviceIdentifier.deviceIdentifier (${String(value)})`;
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
      const optErrMsg = `Invalid DeviceDefinition.udiDeviceIdentifier.issuer; Provided value is not an instance of UriType.`;
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
      const optErrMsg = `Invalid DeviceDefinition.udiDeviceIdentifier.issuer (${String(value)})`;
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
  public setJurisdictionElement(element: UriType | undefined | null): this {
    if (isDefined<UriType>(element)) {
      const optErrMsg = `Invalid DeviceDefinition.udiDeviceIdentifier.jurisdiction; Provided value is not an instance of UriType.`;
      assertFhirType<UriType>(element, UriType, optErrMsg);
      this.jurisdiction = element;
    } else {
      this.jurisdiction = null;
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
   * @returns the `jurisdiction` property value as a fhirUri if defined; else null
   */
  public getJurisdiction(): fhirUri | null {
    if (this.jurisdiction?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.jurisdiction.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `jurisdiction` property.
   *
   * @param value - the `jurisdiction` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setJurisdiction(value: fhirUri | undefined | null): this {
    if (isDefined<fhirUri>(value)) {
      const optErrMsg = `Invalid DeviceDefinition.udiDeviceIdentifier.jurisdiction (${String(value)})`;
      this.jurisdiction = new UriType(parseFhirPrimitiveData(value, fhirUriSchema, optErrMsg));
    } else {
      this.jurisdiction = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `jurisdiction` property exists and has a value; `false` otherwise
   */
  public hasJurisdiction(): boolean {
    return this.hasJurisdictionElement();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'DeviceDefinition.udiDeviceIdentifier';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.deviceIdentifier,
      this.issuer,
      this.jurisdiction,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.deviceIdentifier, this.issuer, this.jurisdiction, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): DeviceDefinitionUdiDeviceIdentifierComponent {
    const dest = new DeviceDefinitionUdiDeviceIdentifierComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: DeviceDefinitionUdiDeviceIdentifierComponent): void {
    super.copyValues(dest);
    dest.deviceIdentifier = this.deviceIdentifier ? this.deviceIdentifier.copy() : null;
    dest.issuer = this.issuer ? this.issuer.copy() : null;
    dest.jurisdiction = this.jurisdiction ? this.jurisdiction.copy() : null;
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

    return jsonObj;
  }
}
/**
 * DeviceDefinitionDeviceNameComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** A name given to the device to identify it
 * - **Definition:** A name given to the device to identify it.
 *
 * @category Data Models: Resource
 * @see [FHIR DeviceDefinition](http://hl7.org/fhir/StructureDefinition/DeviceDefinition)
 */
export class DeviceDefinitionDeviceNameComponent extends BackboneElement implements IBackboneElement {
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
      'DeviceDefinition.deviceName.type',
    );
  }

  /**
   * Parse the provided `DeviceDefinitionDeviceNameComponent` JSON to instantiate the DeviceDefinitionDeviceNameComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `DeviceDefinitionDeviceNameComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to DeviceDefinitionDeviceNameComponent
   * @returns DeviceDefinitionDeviceNameComponent data model or undefined for `DeviceDefinitionDeviceNameComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): DeviceDefinitionDeviceNameComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'DeviceDefinitionDeviceNameComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new DeviceDefinitionDeviceNameComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'name';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setName(null);
      } else {
        instance.setNameElement(datatype);
      }
    } else {
      instance.setName(null);
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

    return instance;
  }

  /**
   * DeviceDefinition.deviceName.name Element
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
   * DeviceDefinition.deviceName.type Element
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
  public setNameElement(element: StringType | undefined | null): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid DeviceDefinition.deviceName.name; Provided value is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.name = element;
    } else {
      this.name = null;
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
  public setName(value: fhirString | undefined | null): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid DeviceDefinition.deviceName.name (${String(value)})`;
      this.name = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.name = null;
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
      const errMsgPrefix = `Invalid DeviceDefinition.deviceName.type`;
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
      const optErrMsg = `Invalid DeviceDefinition.deviceName.type; Provided value is not an instance of CodeType.`;
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
      const optErrMsg = `Invalid DeviceDefinition.deviceName.type (${String(value)})`;
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

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'DeviceDefinition.deviceName';
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
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.name, this.type_, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): DeviceDefinitionDeviceNameComponent {
    const dest = new DeviceDefinitionDeviceNameComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: DeviceDefinitionDeviceNameComponent): void {
    super.copyValues(dest);
    dest.name = this.name ? this.name.copy() : null;
    dest.type_ = this.type_ ? this.type_.copy() : null;
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

    if (this.hasNameElement()) {
      setFhirPrimitiveJson<fhirString>(this.getNameElement(), 'name', jsonObj);
    }

    if (this.hasTypeElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getTypeElement()!, 'type', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * DeviceDefinitionSpecializationComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** The capabilities supported on a  device, the standards to which the device conforms for a particular purpose, and used for the communication
 * - **Definition:** The capabilities supported on a  device, the standards to which the device conforms for a particular purpose, and used for the communication.
 *
 * @category Data Models: Resource
 * @see [FHIR DeviceDefinition](http://hl7.org/fhir/StructureDefinition/DeviceDefinition)
 */
export class DeviceDefinitionSpecializationComponent extends BackboneElement implements IBackboneElement {
  constructor(systemType: StringType | fhirString | null = null) {
    super();

    this.systemType = null;
    if (isDefined<StringType | fhirString>(systemType)) {
      if (systemType instanceof PrimitiveType) {
        this.setSystemTypeElement(systemType);
      } else {
        this.setSystemType(systemType);
      }
    }
  }

  /**
   * Parse the provided `DeviceDefinitionSpecializationComponent` JSON to instantiate the DeviceDefinitionSpecializationComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `DeviceDefinitionSpecializationComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to DeviceDefinitionSpecializationComponent
   * @returns DeviceDefinitionSpecializationComponent data model or undefined for `DeviceDefinitionSpecializationComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): DeviceDefinitionSpecializationComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'DeviceDefinitionSpecializationComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new DeviceDefinitionSpecializationComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'systemType';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setSystemType(null);
      } else {
        instance.setSystemTypeElement(datatype);
      }
    } else {
      instance.setSystemType(null);
    }

    fieldName = 'version';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setVersionElement(datatype);
    }

    return instance;
  }

  /**
   * DeviceDefinition.specialization.systemType Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The standard that is used to operate and communicate
   * - **Definition:** The standard that is used to operate and communicate.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private systemType: StringType | null;

  /**
   * DeviceDefinition.specialization.version Element
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
   * @returns the `systemType` property value as a StringType object if defined; else an empty StringType object
   */
  public getSystemTypeElement(): StringType {
    return this.systemType ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `systemType` property.
   *
   * @param element - the `systemType` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSystemTypeElement(element: StringType | undefined | null): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid DeviceDefinition.specialization.systemType; Provided value is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.systemType = element;
    } else {
      this.systemType = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `systemType` property exists and has a value; `false` otherwise
   */
  public hasSystemTypeElement(): boolean {
    return isDefined<StringType>(this.systemType) && !this.systemType.isEmpty();
  }

  /**
   * @returns the `systemType` property value as a fhirString if defined; else null
   */
  public getSystemType(): fhirString | null {
    if (this.systemType?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.systemType.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `systemType` property.
   *
   * @param value - the `systemType` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSystemType(value: fhirString | undefined | null): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid DeviceDefinition.specialization.systemType (${String(value)})`;
      this.systemType = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.systemType = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `systemType` property exists and has a value; `false` otherwise
   */
  public hasSystemType(): boolean {
    return this.hasSystemTypeElement();
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
      const optErrMsg = `Invalid DeviceDefinition.specialization.version; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid DeviceDefinition.specialization.version (${String(value)})`;
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
    return 'DeviceDefinition.specialization';
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
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.systemType, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): DeviceDefinitionSpecializationComponent {
    const dest = new DeviceDefinitionSpecializationComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: DeviceDefinitionSpecializationComponent): void {
    super.copyValues(dest);
    dest.systemType = this.systemType ? this.systemType.copy() : null;
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

    if (this.hasSystemTypeElement()) {
      setFhirPrimitiveJson<fhirString>(this.getSystemTypeElement(), 'systemType', jsonObj);
    }

    if (this.hasVersionElement()) {
      setFhirPrimitiveJson<fhirString>(this.getVersionElement(), 'version', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * DeviceDefinitionCapabilityComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Device capabilities
 * - **Definition:** Device capabilities.
 *
 * @category Data Models: Resource
 * @see [FHIR DeviceDefinition](http://hl7.org/fhir/StructureDefinition/DeviceDefinition)
 */
export class DeviceDefinitionCapabilityComponent extends BackboneElement implements IBackboneElement {
  constructor(type_: CodeableConcept | null = null) {
    super();

    this.type_ = null;
    if (isDefined<CodeableConcept>(type_)) {
      this.setType(type_);
    }
  }

  /**
   * Parse the provided `DeviceDefinitionCapabilityComponent` JSON to instantiate the DeviceDefinitionCapabilityComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `DeviceDefinitionCapabilityComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to DeviceDefinitionCapabilityComponent
   * @returns DeviceDefinitionCapabilityComponent data model or undefined for `DeviceDefinitionCapabilityComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): DeviceDefinitionCapabilityComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'DeviceDefinitionCapabilityComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new DeviceDefinitionCapabilityComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

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

    fieldName = 'description';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addDescription(datatype);
          }
        });
      }
    }

    return instance;
  }

  /**
   * DeviceDefinition.capability.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Type of capability
   * - **Definition:** Type of capability.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private type_: CodeableConcept | null;

  /**
   * DeviceDefinition.capability.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Description of capability
   * - **Definition:** Description of capability.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private description?: CodeableConcept[] | undefined;

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
      const optErrMsg = `Invalid DeviceDefinition.capability.type; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `description` property value as a CodeableConcept array
   */
  public getDescription(): CodeableConcept[] {
    return this.description ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `description` property.
   *
   * @param value - the `description` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDescription(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid DeviceDefinition.capability.description; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.description = value;
    } else {
      this.description = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `description` array property.
   *
   * @param value - the `description` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addDescription(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid DeviceDefinition.capability.description; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initDescription();
      this.description?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `description` property exists and has a value; `false` otherwise
   */
  public hasDescription(): boolean {
    return isDefinedList<CodeableConcept>(this.description) && this.description.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `description` property
   */
  private initDescription(): void {
    if(!this.hasDescription()) {
      this.description = [] as CodeableConcept[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'DeviceDefinition.capability';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.type_,
      this.description,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.type_, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): DeviceDefinitionCapabilityComponent {
    const dest = new DeviceDefinitionCapabilityComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: DeviceDefinitionCapabilityComponent): void {
    super.copyValues(dest);
    dest.type_ = this.type_ ? this.type_.copy() : null;
    const descriptionList = copyListValues<CodeableConcept>(this.description);
    dest.description = descriptionList.length === 0 ? undefined : descriptionList;
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

    if (this.hasDescription()) {
      setFhirComplexListJson(this.getDescription(), 'description', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * DeviceDefinitionPropertyComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** The actual configuration settings of a device as it actually operates, e.g., regulation status, time properties
 * - **Definition:** The actual configuration settings of a device as it actually operates, e.g., regulation status, time properties.
 *
 * @category Data Models: Resource
 * @see [FHIR DeviceDefinition](http://hl7.org/fhir/StructureDefinition/DeviceDefinition)
 */
export class DeviceDefinitionPropertyComponent extends BackboneElement implements IBackboneElement {
  constructor(type_: CodeableConcept | null = null) {
    super();

    this.type_ = null;
    if (isDefined<CodeableConcept>(type_)) {
      this.setType(type_);
    }
  }

  /**
   * Parse the provided `DeviceDefinitionPropertyComponent` JSON to instantiate the DeviceDefinitionPropertyComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `DeviceDefinitionPropertyComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to DeviceDefinitionPropertyComponent
   * @returns DeviceDefinitionPropertyComponent data model or undefined for `DeviceDefinitionPropertyComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): DeviceDefinitionPropertyComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'DeviceDefinitionPropertyComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new DeviceDefinitionPropertyComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

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

    fieldName = 'valueQuantity';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Quantity | undefined = Quantity.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addValueQuantity(datatype);
          }
        });
      }
    }

    fieldName = 'valueCode';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addValueCode(datatype);
          }
        });
      }
    }

    return instance;
  }

  /**
   * DeviceDefinition.property.type Element
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
   * DeviceDefinition.property.valueQuantity Element
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
   * DeviceDefinition.property.valueCode Element
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
      const optErrMsg = `Invalid DeviceDefinition.property.type; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid DeviceDefinition.property.valueQuantity; Provided value array has an element that is not an instance of Quantity.`;
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
      const optErrMsg = `Invalid DeviceDefinition.property.valueQuantity; Provided element is not an instance of Quantity.`;
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
      const optErrMsg = `Invalid DeviceDefinition.property.valueCode; Provided value array has an element that is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid DeviceDefinition.property.valueCode; Provided element is not an instance of CodeableConcept.`;
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
    return 'DeviceDefinition.property';
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
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.type_, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): DeviceDefinitionPropertyComponent {
    const dest = new DeviceDefinitionPropertyComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: DeviceDefinitionPropertyComponent): void {
    super.copyValues(dest);
    dest.type_ = this.type_ ? this.type_.copy() : null;
    const valueQuantityList = copyListValues<Quantity>(this.valueQuantity);
    dest.valueQuantity = valueQuantityList.length === 0 ? undefined : valueQuantityList;
    const valueCodeList = copyListValues<CodeableConcept>(this.valueCode);
    dest.valueCode = valueCodeList.length === 0 ? undefined : valueCodeList;
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

    if (this.hasValueQuantity()) {
      setFhirComplexListJson(this.getValueQuantity(), 'valueQuantity', jsonObj);
    }

    if (this.hasValueCode()) {
      setFhirComplexListJson(this.getValueCode(), 'valueCode', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * DeviceDefinitionMaterialComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** A substance used to create the material(s) of which the device is made
 * - **Definition:** A substance used to create the material(s) of which the device is made.
 *
 * @category Data Models: Resource
 * @see [FHIR DeviceDefinition](http://hl7.org/fhir/StructureDefinition/DeviceDefinition)
 */
export class DeviceDefinitionMaterialComponent extends BackboneElement implements IBackboneElement {
  constructor(substance: CodeableConcept | null = null) {
    super();

    this.substance = null;
    if (isDefined<CodeableConcept>(substance)) {
      this.setSubstance(substance);
    }
  }

  /**
   * Parse the provided `DeviceDefinitionMaterialComponent` JSON to instantiate the DeviceDefinitionMaterialComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `DeviceDefinitionMaterialComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to DeviceDefinitionMaterialComponent
   * @returns DeviceDefinitionMaterialComponent data model or undefined for `DeviceDefinitionMaterialComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): DeviceDefinitionMaterialComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'DeviceDefinitionMaterialComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new DeviceDefinitionMaterialComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'substance';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setSubstance(null);
      } else {
        instance.setSubstance(datatype);
      }
    } else {
      instance.setSubstance(null);
    }

    fieldName = 'alternate';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setAlternateElement(datatype);
    }

    fieldName = 'allergenicIndicator';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setAllergenicIndicatorElement(datatype);
    }

    return instance;
  }

  /**
   * DeviceDefinition.material.substance Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The substance
   * - **Definition:** The substance.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private substance: CodeableConcept | null;

  /**
   * DeviceDefinition.material.alternate Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Indicates an alternative material of the device
   * - **Definition:** Indicates an alternative material of the device.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private alternate?: BooleanType | undefined;

  /**
   * DeviceDefinition.material.allergenicIndicator Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Whether the substance is a known or suspected allergen
   * - **Definition:** Whether the substance is a known or suspected allergen.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private allergenicIndicator?: BooleanType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `substance` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getSubstance(): CodeableConcept {
    return this.substance ?? new CodeableConcept();
  }

  /**
   * Assigns the provided CodeableConcept object value to the `substance` property.
   *
   * @param value - the `substance` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSubstance(value: CodeableConcept | undefined | null): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid DeviceDefinition.material.substance; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.substance = value;
    } else {
      this.substance = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `substance` property exists and has a value; `false` otherwise
   */
  public hasSubstance(): boolean {
    return isDefined<CodeableConcept>(this.substance) && !this.substance.isEmpty();
  }

  /**
   * @returns the `alternate` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getAlternateElement(): BooleanType {
    return this.alternate ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `alternate` property.
   *
   * @param element - the `alternate` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAlternateElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid DeviceDefinition.material.alternate; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.alternate = element;
    } else {
      this.alternate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `alternate` property exists and has a value; `false` otherwise
   */
  public hasAlternateElement(): boolean {
    return isDefined<BooleanType>(this.alternate) && !this.alternate.isEmpty();
  }

  /**
   * @returns the `alternate` property value as a fhirBoolean if defined; else undefined
   */
  public getAlternate(): fhirBoolean | undefined {
    return this.alternate?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `alternate` property.
   *
   * @param value - the `alternate` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAlternate(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid DeviceDefinition.material.alternate (${String(value)})`;
      this.alternate = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.alternate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `alternate` property exists and has a value; `false` otherwise
   */
  public hasAlternate(): boolean {
    return this.hasAlternateElement();
  }

  /**
   * @returns the `allergenicIndicator` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getAllergenicIndicatorElement(): BooleanType {
    return this.allergenicIndicator ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `allergenicIndicator` property.
   *
   * @param element - the `allergenicIndicator` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAllergenicIndicatorElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid DeviceDefinition.material.allergenicIndicator; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.allergenicIndicator = element;
    } else {
      this.allergenicIndicator = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `allergenicIndicator` property exists and has a value; `false` otherwise
   */
  public hasAllergenicIndicatorElement(): boolean {
    return isDefined<BooleanType>(this.allergenicIndicator) && !this.allergenicIndicator.isEmpty();
  }

  /**
   * @returns the `allergenicIndicator` property value as a fhirBoolean if defined; else undefined
   */
  public getAllergenicIndicator(): fhirBoolean | undefined {
    return this.allergenicIndicator?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `allergenicIndicator` property.
   *
   * @param value - the `allergenicIndicator` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAllergenicIndicator(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid DeviceDefinition.material.allergenicIndicator (${String(value)})`;
      this.allergenicIndicator = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.allergenicIndicator = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `allergenicIndicator` property exists and has a value; `false` otherwise
   */
  public hasAllergenicIndicator(): boolean {
    return this.hasAllergenicIndicatorElement();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'DeviceDefinition.material';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.substance,
      this.alternate,
      this.allergenicIndicator,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.substance, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): DeviceDefinitionMaterialComponent {
    const dest = new DeviceDefinitionMaterialComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: DeviceDefinitionMaterialComponent): void {
    super.copyValues(dest);
    dest.substance = this.substance ? this.substance.copy() : null;
    dest.alternate = this.alternate?.copy();
    dest.allergenicIndicator = this.allergenicIndicator?.copy();
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

    if (this.hasSubstance()) {
      setFhirComplexJson(this.getSubstance(), 'substance', jsonObj);
    }

    if (this.hasAlternateElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getAlternateElement(), 'alternate', jsonObj);
    }

    if (this.hasAllergenicIndicatorElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getAllergenicIndicatorElement(), 'allergenicIndicator', jsonObj);
    }

    return jsonObj;
  }
}
