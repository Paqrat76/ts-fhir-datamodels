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
 * StructureDefinition.description: This is a specialized resource that defines the characteristics and capabilities of a device.
 * StructureDefinition.fhirVersion: 5.0.0
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
  IntegerType,
  InvalidTypeError,
  JSON,
  MarkdownType,
  PrimitiveType,
  PrimitiveTypeJson,
  ReferenceTargets,
  StringType,
  UriType,
  assertEnumCodeType,
  assertEnumCodeTypeList,
  assertFhirType,
  assertFhirTypeList,
  assertIsDefined,
  constructorCodeValueAsEnumCodeType,
  copyListValues,
  fhirBoolean,
  fhirBooleanSchema,
  fhirCode,
  fhirCodeSchema,
  fhirInteger,
  fhirIntegerSchema,
  fhirMarkdown,
  fhirMarkdownSchema,
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
  setFhirBackboneElementJson,
  setFhirBackboneElementListJson,
  setFhirComplexJson,
  setFhirComplexListJson,
  setFhirPrimitiveJson,
  setFhirPrimitiveListJson,
  setPolymorphicValueJson,
} from '@paq-ts-fhir/fhir-core';
import { Annotation, Attachment, CodeableConcept, CodeableReference, Coding, ContactPoint, Identifier, PARSABLE_DATATYPE_MAP, Period, ProductShelfLife, Quantity, Range, Reference, RelatedArtifact, UsageContext } from '../complex-types/complex-datatypes';
import { DeviceCorrectiveactionscopeEnum } from '../code-systems/DeviceCorrectiveactionscopeEnum';
import { DeviceNametypeEnum } from '../code-systems/DeviceNametypeEnum';
import { DeviceProductidentifierinudiEnum } from '../code-systems/DeviceProductidentifierinudiEnum';
import { DevicedefinitionRegulatoryIdentifierTypeEnum } from '../code-systems/DevicedefinitionRegulatoryIdentifierTypeEnum';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Symbol.metadata polyfill secret sauce for decorator metadata
(Symbol.metadata as any) ??= Symbol('Symbol.metadata');

/**
 * DeviceDefinition Class
 *
 * @remarks
 * This is a specialized resource that defines the characteristics and capabilities of a device.
 *
 * **FHIR Specification**
 * - **Short:** An instance of a medical-related component of a medical device
 * - **Definition:** The characteristics, operational status and capabilities of a medical-related component of a medical device.
 * - **Comment:** For the initial scope, this DeviceDefinition resource is only applicable to describe a single node in the containment tree that is produced by the context scanner in any medical device that implements or derives from the ISO/IEEE 11073 standard and that does not represent a metric. Examples for such a node are MDS, VMD, or Channel.
 * - **FHIR Version:** 5.0.0
 *
 * @category Data Models: Resource
 * @see [FHIR DeviceDefinition](http://hl7.org/fhir/StructureDefinition/DeviceDefinition)
 */
export class DeviceDefinition extends DomainResource implements IDomainResource {
  constructor() {
    super();

    this.deviceProductidentifierinudiEnum = new DeviceProductidentifierinudiEnum();
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

    fieldName = 'description';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: MarkdownType | undefined = fhirParser.parseMarkdownType(dtJson, dtSiblingJson);
      instance.setDescriptionElement(datatype);
    }

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

    fieldName = 'regulatoryIdentifier';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: DeviceDefinitionRegulatoryIdentifierComponent | undefined = DeviceDefinitionRegulatoryIdentifierComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addRegulatoryIdentifier(component);
          }
        });
      }
    }

    fieldName = 'partNumber';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setPartNumberElement(datatype);
    }

    fieldName = 'manufacturer';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setManufacturer(datatype);
    }

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

    fieldName = 'classification';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: DeviceDefinitionClassificationComponent | undefined = DeviceDefinitionClassificationComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addClassification(component);
          }
        });
      }
    }

    fieldName = 'conformsTo';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: DeviceDefinitionConformsToComponent | undefined = DeviceDefinitionConformsToComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addConformsTo(component);
          }
        });
      }
    }

    fieldName = 'hasPart';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: DeviceDefinitionHasPartComponent | undefined = DeviceDefinitionHasPartComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addHasPart(component);
          }
        });
      }
    }

    fieldName = 'packaging';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: DeviceDefinitionPackagingComponent | undefined = DeviceDefinitionPackagingComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addPackaging(component);
          }
        });
      }
    }

    fieldName = 'version';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: DeviceDefinitionVersionComponent | undefined = DeviceDefinitionVersionComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addVersion(component);
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

    fieldName = 'link';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: DeviceDefinitionLinkComponent | undefined = DeviceDefinitionLinkComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addLink(component);
          }
        });
      }
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

    fieldName = 'productionIdentifierInUDI';
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
          const datatype: CodeType | undefined = fhirParser.parseCodeType(dataJson.dtJson, dataJson.dtSiblingJson);
          if (datatype !== undefined) {
            instance.addProductionIdentifierInUDIElement(datatype);
          }
        });
      }
    }

    fieldName = 'guideline';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: DeviceDefinitionGuidelineComponent | undefined = DeviceDefinitionGuidelineComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setGuideline(component);
    }

    fieldName = 'correctiveAction';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: DeviceDefinitionCorrectiveActionComponent | undefined = DeviceDefinitionCorrectiveActionComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setCorrectiveAction(component);
    }

    fieldName = 'chargeItem';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: DeviceDefinitionChargeItemComponent | undefined = DeviceDefinitionChargeItemComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addChargeItem(component);
          }
        });
      }
    }

    return instance;
  }

  /**
   * DeviceDefinition.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Additional information to describe the device
   * - **Definition:** Additional information to describe the device.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private description?: MarkdownType | undefined;

  /**
   * DeviceDefinition.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Instance identifier
   * - **Definition:** Unique instance identifiers assigned to a device by the software, manufacturers, other organizations or owners. For example: handle ID. The identifier is typically valued if the udiDeviceIdentifier, partNumber or modelNumber is not valued and represents a different type of identifier.  However, it is permissible to still include those identifiers in DeviceDefinition.identifier with the appropriate identifier.type.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
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
   * DeviceDefinition.regulatoryIdentifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Regulatory identifier(s) associated with this device
   * - **Definition:** Identifier associated with the regulatory documentation (certificates, technical documentation, post-market surveillance documentation and reports) of a set of device models sharing the same intended purpose, risk class and essential design and manufacturing characteristics. One example is the Basic UDI-DI in Europe.
   * - **Comment:** This should not be used for regulatory authorization numbers which are to be captured elsewhere.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private regulatoryIdentifier?: DeviceDefinitionRegulatoryIdentifierComponent[] | undefined;

  /**
   * DeviceDefinition.partNumber Element
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
   * DeviceDefinition.manufacturer Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name of device manufacturer
   * - **Definition:** A name of the manufacturer  or legal representative e.g. labeler. Whether this is the actual manufacturer or the labeler or responsible depends on implementation and jurisdiction.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private manufacturer?: Reference | undefined;

  /**
   * DeviceDefinition.deviceName Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The name or names of the device as given by the manufacturer
   * - **Definition:** The name or names of the device as given by the manufacturer.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private deviceName?: DeviceDefinitionDeviceNameComponent[] | undefined;

  /**
   * DeviceDefinition.modelNumber Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The catalog or model number for the device for example as defined by the manufacturer
   * - **Definition:** The model number for the device for example as defined by the manufacturer or labeler, or other agency.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private modelNumber?: StringType | undefined;

  /**
   * DeviceDefinition.classification Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** What kind of device or device system this is
   * - **Definition:** What kind of device or device system this is.
   * - **Comment:** In this element various classifications can be used, such as GMDN, EMDN, SNOMED CT, risk classes, national product codes.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private classification?: DeviceDefinitionClassificationComponent[] | undefined;

  /**
   * DeviceDefinition.conformsTo Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Identifies the standards, specifications, or formal guidances for the capabilities supported by the device
   * - **Definition:** Identifies the standards, specifications, or formal guidances for the capabilities supported by the device. The device may be certified as conformant to these specifications e.g., communication, performance, process, measurement, or specialization standards.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private conformsTo?: DeviceDefinitionConformsToComponent[] | undefined;

  /**
   * DeviceDefinition.hasPart Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A device, part of the current one
   * - **Definition:** A device that is part (for example a component) of the present device.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private hasPart?: DeviceDefinitionHasPartComponent[] | undefined;

  /**
   * DeviceDefinition.packaging Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Information about the packaging of the device, i.e. how the device is packaged
   * - **Definition:** Information about the packaging of the device, i.e. how the device is packaged.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private packaging?: DeviceDefinitionPackagingComponent[] | undefined;

  /**
   * DeviceDefinition.version Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The version of the device or software
   * - **Definition:** The version of the device or software.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private version?: DeviceDefinitionVersionComponent[] | undefined;

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
   * DeviceDefinition.property Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Inherent, essentially fixed, characteristics of this kind of device, e.g., time properties, size, etc
   * - **Definition:** Static or essentially fixed characteristics or features of this kind of device that are otherwise not captured in more specific attributes, e.g., time or timing attributes, resolution, accuracy, and physical attributes.
   * - **Comment:** Dynamic or current properties, such as settings, of an individual device are described using a Device instance-specific DeviceMetric and recorded using Observation.  Static characteristics of an individual device could also be documented in a [Device] instance. The Device instance\'s properties, and their values, could be, but need not be, the same as in the associated DeviceDefinition.
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
   * DeviceDefinition.link Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** An associated device, attached to, used with, communicating with or linking a previous or new device model to the focal device
   * - **Definition:** An associated device, attached to, used with, communicating with or linking a previous or new device model to the focal device.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private link?: DeviceDefinitionLinkComponent[] | undefined;

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

  /**
   * FHIR CodeSystem: DeviceProductidentifierinudi
   *
   * @see {@link DeviceProductidentifierinudiEnum }
   */
  private readonly deviceProductidentifierinudiEnum: DeviceProductidentifierinudiEnum;

  /**
   * DeviceDefinition.productionIdentifierInUDI Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** lot-number | manufactured-date | serial-number | expiration-date | biological-source | software-version
   * - **Definition:** Indicates the production identifier(s) that are expected to appear in the UDI carrier on the device label.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link DeviceProductidentifierinudiEnum }
   */
  private productionIdentifierInUDI?: EnumCodeType[] | undefined;

  /**
   * DeviceDefinition.guideline Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Information aimed at providing directions for the usage of this model of device
   * - **Definition:** Information aimed at providing directions for the usage of this model of device.
   * - **Comment:** For more structured data, a ClinicalUseDefinition that points to the DeviceDefinition can be used.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private guideline?: DeviceDefinitionGuidelineComponent | undefined;

  /**
   * DeviceDefinition.correctiveAction Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Tracking of latest field safety corrective action
   * - **Definition:** Tracking of latest field safety corrective action.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private correctiveAction?: DeviceDefinitionCorrectiveActionComponent | undefined;

  /**
   * DeviceDefinition.chargeItem Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Billing code or reference associated with the device
   * - **Definition:** Billing code or reference associated with the device.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private chargeItem?: DeviceDefinitionChargeItemComponent[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

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
      const optErrMsg = `Invalid DeviceDefinition.description; Provided element is not an instance of MarkdownType.`;
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
      const optErrMsg = `Invalid DeviceDefinition.description (${String(value)})`;
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
   * @returns the `regulatoryIdentifier` property value as a DeviceDefinitionRegulatoryIdentifierComponent array
   */
  public getRegulatoryIdentifier(): DeviceDefinitionRegulatoryIdentifierComponent[] {
    return this.regulatoryIdentifier ?? ([] as DeviceDefinitionRegulatoryIdentifierComponent[]);
  }

  /**
   * Assigns the provided DeviceDefinitionRegulatoryIdentifierComponent array value to the `regulatoryIdentifier` property.
   *
   * @param value - the `regulatoryIdentifier` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setRegulatoryIdentifier(value: DeviceDefinitionRegulatoryIdentifierComponent[] | undefined): this {
    if (isDefinedList<DeviceDefinitionRegulatoryIdentifierComponent>(value)) {
      const optErrMsg = `Invalid DeviceDefinition.regulatoryIdentifier; Provided value array has an element that is not an instance of DeviceDefinitionRegulatoryIdentifierComponent.`;
      assertFhirTypeList<DeviceDefinitionRegulatoryIdentifierComponent>(value, DeviceDefinitionRegulatoryIdentifierComponent, optErrMsg);
      this.regulatoryIdentifier = value;
    } else {
      this.regulatoryIdentifier = undefined;
    }
    return this;
  }

  /**
   * Add the provided DeviceDefinitionRegulatoryIdentifierComponent value to the `regulatoryIdentifier` array property.
   *
   * @param value - the `regulatoryIdentifier` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addRegulatoryIdentifier(value: DeviceDefinitionRegulatoryIdentifierComponent | undefined): this {
    if (isDefined<DeviceDefinitionRegulatoryIdentifierComponent>(value)) {
      const optErrMsg = `Invalid DeviceDefinition.regulatoryIdentifier; Provided element is not an instance of DeviceDefinitionRegulatoryIdentifierComponent.`;
      assertFhirType<DeviceDefinitionRegulatoryIdentifierComponent>(value, DeviceDefinitionRegulatoryIdentifierComponent, optErrMsg);
      this.initRegulatoryIdentifier();
      this.regulatoryIdentifier?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `regulatoryIdentifier` property exists and has a value; `false` otherwise
   */
  public hasRegulatoryIdentifier(): boolean {
    return isDefinedList<DeviceDefinitionRegulatoryIdentifierComponent>(this.regulatoryIdentifier) && this.regulatoryIdentifier.some((item: DeviceDefinitionRegulatoryIdentifierComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `regulatoryIdentifier` property
   */
  private initRegulatoryIdentifier(): void {
    if(!this.hasRegulatoryIdentifier()) {
      this.regulatoryIdentifier = [] as DeviceDefinitionRegulatoryIdentifierComponent[];
    }
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
      const optErrMsg = `Invalid DeviceDefinition.partNumber; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid DeviceDefinition.partNumber (${String(value)})`;
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
   * @returns the `manufacturer` property value as a Reference object; else an empty Reference object
   */
  public getManufacturer(): Reference {
    return this.manufacturer ?? new Reference();
  }

  /**
   * Assigns the provided Manufacturer object value to the `manufacturer` property.
   *
   * @decorator `@ReferenceTargets('DeviceDefinition.manufacturer', ['Organization',])`
   *
   * @param value - the `manufacturer` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('DeviceDefinition.manufacturer', [
    'Organization',
  ])
  public setManufacturer(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
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
    return isDefined<Reference>(this.manufacturer) && !this.manufacturer.isEmpty();
  }

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
   * @returns the `classification` property value as a DeviceDefinitionClassificationComponent array
   */
  public getClassification(): DeviceDefinitionClassificationComponent[] {
    return this.classification ?? ([] as DeviceDefinitionClassificationComponent[]);
  }

  /**
   * Assigns the provided DeviceDefinitionClassificationComponent array value to the `classification` property.
   *
   * @param value - the `classification` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setClassification(value: DeviceDefinitionClassificationComponent[] | undefined): this {
    if (isDefinedList<DeviceDefinitionClassificationComponent>(value)) {
      const optErrMsg = `Invalid DeviceDefinition.classification; Provided value array has an element that is not an instance of DeviceDefinitionClassificationComponent.`;
      assertFhirTypeList<DeviceDefinitionClassificationComponent>(value, DeviceDefinitionClassificationComponent, optErrMsg);
      this.classification = value;
    } else {
      this.classification = undefined;
    }
    return this;
  }

  /**
   * Add the provided DeviceDefinitionClassificationComponent value to the `classification` array property.
   *
   * @param value - the `classification` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addClassification(value: DeviceDefinitionClassificationComponent | undefined): this {
    if (isDefined<DeviceDefinitionClassificationComponent>(value)) {
      const optErrMsg = `Invalid DeviceDefinition.classification; Provided element is not an instance of DeviceDefinitionClassificationComponent.`;
      assertFhirType<DeviceDefinitionClassificationComponent>(value, DeviceDefinitionClassificationComponent, optErrMsg);
      this.initClassification();
      this.classification?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `classification` property exists and has a value; `false` otherwise
   */
  public hasClassification(): boolean {
    return isDefinedList<DeviceDefinitionClassificationComponent>(this.classification) && this.classification.some((item: DeviceDefinitionClassificationComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `classification` property
   */
  private initClassification(): void {
    if(!this.hasClassification()) {
      this.classification = [] as DeviceDefinitionClassificationComponent[];
    }
  }

  /**
   * @returns the `conformsTo` property value as a DeviceDefinitionConformsToComponent array
   */
  public getConformsTo(): DeviceDefinitionConformsToComponent[] {
    return this.conformsTo ?? ([] as DeviceDefinitionConformsToComponent[]);
  }

  /**
   * Assigns the provided DeviceDefinitionConformsToComponent array value to the `conformsTo` property.
   *
   * @param value - the `conformsTo` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setConformsTo(value: DeviceDefinitionConformsToComponent[] | undefined): this {
    if (isDefinedList<DeviceDefinitionConformsToComponent>(value)) {
      const optErrMsg = `Invalid DeviceDefinition.conformsTo; Provided value array has an element that is not an instance of DeviceDefinitionConformsToComponent.`;
      assertFhirTypeList<DeviceDefinitionConformsToComponent>(value, DeviceDefinitionConformsToComponent, optErrMsg);
      this.conformsTo = value;
    } else {
      this.conformsTo = undefined;
    }
    return this;
  }

  /**
   * Add the provided DeviceDefinitionConformsToComponent value to the `conformsTo` array property.
   *
   * @param value - the `conformsTo` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addConformsTo(value: DeviceDefinitionConformsToComponent | undefined): this {
    if (isDefined<DeviceDefinitionConformsToComponent>(value)) {
      const optErrMsg = `Invalid DeviceDefinition.conformsTo; Provided element is not an instance of DeviceDefinitionConformsToComponent.`;
      assertFhirType<DeviceDefinitionConformsToComponent>(value, DeviceDefinitionConformsToComponent, optErrMsg);
      this.initConformsTo();
      this.conformsTo?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `conformsTo` property exists and has a value; `false` otherwise
   */
  public hasConformsTo(): boolean {
    return isDefinedList<DeviceDefinitionConformsToComponent>(this.conformsTo) && this.conformsTo.some((item: DeviceDefinitionConformsToComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `conformsTo` property
   */
  private initConformsTo(): void {
    if(!this.hasConformsTo()) {
      this.conformsTo = [] as DeviceDefinitionConformsToComponent[];
    }
  }

  /**
   * @returns the `hasPart` property value as a DeviceDefinitionHasPartComponent array
   */
  public getHasPart(): DeviceDefinitionHasPartComponent[] {
    return this.hasPart ?? ([] as DeviceDefinitionHasPartComponent[]);
  }

  /**
   * Assigns the provided DeviceDefinitionHasPartComponent array value to the `hasPart` property.
   *
   * @param value - the `hasPart` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setHasPart(value: DeviceDefinitionHasPartComponent[] | undefined): this {
    if (isDefinedList<DeviceDefinitionHasPartComponent>(value)) {
      const optErrMsg = `Invalid DeviceDefinition.hasPart; Provided value array has an element that is not an instance of DeviceDefinitionHasPartComponent.`;
      assertFhirTypeList<DeviceDefinitionHasPartComponent>(value, DeviceDefinitionHasPartComponent, optErrMsg);
      this.hasPart = value;
    } else {
      this.hasPart = undefined;
    }
    return this;
  }

  /**
   * Add the provided DeviceDefinitionHasPartComponent value to the `hasPart` array property.
   *
   * @param value - the `hasPart` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addHasPart(value: DeviceDefinitionHasPartComponent | undefined): this {
    if (isDefined<DeviceDefinitionHasPartComponent>(value)) {
      const optErrMsg = `Invalid DeviceDefinition.hasPart; Provided element is not an instance of DeviceDefinitionHasPartComponent.`;
      assertFhirType<DeviceDefinitionHasPartComponent>(value, DeviceDefinitionHasPartComponent, optErrMsg);
      this.initHasPart();
      this.hasPart?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `hasPart` property exists and has a value; `false` otherwise
   */
  public hasHasPart(): boolean {
    return isDefinedList<DeviceDefinitionHasPartComponent>(this.hasPart) && this.hasPart.some((item: DeviceDefinitionHasPartComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `hasPart` property
   */
  private initHasPart(): void {
    if(!this.hasHasPart()) {
      this.hasPart = [] as DeviceDefinitionHasPartComponent[];
    }
  }

  /**
   * @returns the `packaging` property value as a DeviceDefinitionPackagingComponent array
   */
  public getPackaging(): DeviceDefinitionPackagingComponent[] {
    return this.packaging ?? ([] as DeviceDefinitionPackagingComponent[]);
  }

  /**
   * Assigns the provided DeviceDefinitionPackagingComponent array value to the `packaging` property.
   *
   * @param value - the `packaging` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPackaging(value: DeviceDefinitionPackagingComponent[] | undefined): this {
    if (isDefinedList<DeviceDefinitionPackagingComponent>(value)) {
      const optErrMsg = `Invalid DeviceDefinition.packaging; Provided value array has an element that is not an instance of DeviceDefinitionPackagingComponent.`;
      assertFhirTypeList<DeviceDefinitionPackagingComponent>(value, DeviceDefinitionPackagingComponent, optErrMsg);
      this.packaging = value;
    } else {
      this.packaging = undefined;
    }
    return this;
  }

  /**
   * Add the provided DeviceDefinitionPackagingComponent value to the `packaging` array property.
   *
   * @param value - the `packaging` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addPackaging(value: DeviceDefinitionPackagingComponent | undefined): this {
    if (isDefined<DeviceDefinitionPackagingComponent>(value)) {
      const optErrMsg = `Invalid DeviceDefinition.packaging; Provided element is not an instance of DeviceDefinitionPackagingComponent.`;
      assertFhirType<DeviceDefinitionPackagingComponent>(value, DeviceDefinitionPackagingComponent, optErrMsg);
      this.initPackaging();
      this.packaging?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `packaging` property exists and has a value; `false` otherwise
   */
  public hasPackaging(): boolean {
    return isDefinedList<DeviceDefinitionPackagingComponent>(this.packaging) && this.packaging.some((item: DeviceDefinitionPackagingComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `packaging` property
   */
  private initPackaging(): void {
    if(!this.hasPackaging()) {
      this.packaging = [] as DeviceDefinitionPackagingComponent[];
    }
  }

  /**
   * @returns the `version` property value as a DeviceDefinitionVersionComponent array
   */
  public getVersion(): DeviceDefinitionVersionComponent[] {
    return this.version ?? ([] as DeviceDefinitionVersionComponent[]);
  }

  /**
   * Assigns the provided DeviceDefinitionVersionComponent array value to the `version` property.
   *
   * @param value - the `version` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setVersion(value: DeviceDefinitionVersionComponent[] | undefined): this {
    if (isDefinedList<DeviceDefinitionVersionComponent>(value)) {
      const optErrMsg = `Invalid DeviceDefinition.version; Provided value array has an element that is not an instance of DeviceDefinitionVersionComponent.`;
      assertFhirTypeList<DeviceDefinitionVersionComponent>(value, DeviceDefinitionVersionComponent, optErrMsg);
      this.version = value;
    } else {
      this.version = undefined;
    }
    return this;
  }

  /**
   * Add the provided DeviceDefinitionVersionComponent value to the `version` array property.
   *
   * @param value - the `version` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addVersion(value: DeviceDefinitionVersionComponent | undefined): this {
    if (isDefined<DeviceDefinitionVersionComponent>(value)) {
      const optErrMsg = `Invalid DeviceDefinition.version; Provided element is not an instance of DeviceDefinitionVersionComponent.`;
      assertFhirType<DeviceDefinitionVersionComponent>(value, DeviceDefinitionVersionComponent, optErrMsg);
      this.initVersion();
      this.version?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `version` property exists and has a value; `false` otherwise
   */
  public hasVersion(): boolean {
    return isDefinedList<DeviceDefinitionVersionComponent>(this.version) && this.version.some((item: DeviceDefinitionVersionComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `version` property
   */
  private initVersion(): void {
    if(!this.hasVersion()) {
      this.version = [] as DeviceDefinitionVersionComponent[];
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
   * @returns the `link` property value as a DeviceDefinitionLinkComponent array
   */
  public getLink(): DeviceDefinitionLinkComponent[] {
    return this.link ?? ([] as DeviceDefinitionLinkComponent[]);
  }

  /**
   * Assigns the provided DeviceDefinitionLinkComponent array value to the `link` property.
   *
   * @param value - the `link` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setLink(value: DeviceDefinitionLinkComponent[] | undefined): this {
    if (isDefinedList<DeviceDefinitionLinkComponent>(value)) {
      const optErrMsg = `Invalid DeviceDefinition.link; Provided value array has an element that is not an instance of DeviceDefinitionLinkComponent.`;
      assertFhirTypeList<DeviceDefinitionLinkComponent>(value, DeviceDefinitionLinkComponent, optErrMsg);
      this.link = value;
    } else {
      this.link = undefined;
    }
    return this;
  }

  /**
   * Add the provided DeviceDefinitionLinkComponent value to the `link` array property.
   *
   * @param value - the `link` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addLink(value: DeviceDefinitionLinkComponent | undefined): this {
    if (isDefined<DeviceDefinitionLinkComponent>(value)) {
      const optErrMsg = `Invalid DeviceDefinition.link; Provided element is not an instance of DeviceDefinitionLinkComponent.`;
      assertFhirType<DeviceDefinitionLinkComponent>(value, DeviceDefinitionLinkComponent, optErrMsg);
      this.initLink();
      this.link?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `link` property exists and has a value; `false` otherwise
   */
  public hasLink(): boolean {
    return isDefinedList<DeviceDefinitionLinkComponent>(this.link) && this.link.some((item: DeviceDefinitionLinkComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `link` property
   */
  private initLink(): void {
    if(!this.hasLink()) {
      this.link = [] as DeviceDefinitionLinkComponent[];
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

  /**
   * @returns the `productionIdentifierInUDI` property value as a EnumCodeType array
   *
   * @see CodeSystem Enumeration: {@link DeviceProductidentifierinudiEnum }
   */
  public getProductionIdentifierInUDIEnumType(): EnumCodeType[] {
    return this.productionIdentifierInUDI ?? ([] as EnumCodeType[]);
  }

  /**
   * Assigns the provided EnumCodeType array value to the `productionIdentifierInUDI` property.
   *
   * @param enumType - the `productionIdentifierInUDI` array value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link DeviceProductidentifierinudiEnum }
   */
  public setProductionIdentifierInUDIEnumType(enumType: EnumCodeType[] | undefined): this {
    if (isDefinedList<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid DeviceDefinition.productionIdentifierInUDI`;
      assertEnumCodeTypeList<DeviceProductidentifierinudiEnum>(enumType, DeviceProductidentifierinudiEnum, errMsgPrefix);
      this.productionIdentifierInUDI = enumType;
    } else {
      this.productionIdentifierInUDI = undefined;
    }
    return this;
  }

  /**
   * Add the provided EnumCodeType value to the `productionIdentifierInUDI` array property.
   *
   * @param enumType - the `productionIdentifierInUDI` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   *
   * @see CodeSystem Enumeration: {@link DeviceProductidentifierinudiEnum }
   */
  public addProductionIdentifierInUDIEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid DeviceDefinition.productionIdentifierInUDI`;
      assertEnumCodeType<DeviceProductidentifierinudiEnum>(enumType, DeviceProductidentifierinudiEnum, errMsgPrefix);
      this.initProductionIdentifierInUDI();
      this.productionIdentifierInUDI?.push(enumType);
    }
    return this;
  }

  /**
   * @returns `true` if the `productionIdentifierInUDI` property exists and has a value; `false` otherwise
   */
  public hasProductionIdentifierInUDIEnumType(): boolean {
    return isDefinedList<EnumCodeType>(this.productionIdentifierInUDI) && this.productionIdentifierInUDI.some((item: EnumCodeType) => !item.isEmpty()) && this.productionIdentifierInUDI.every((item: EnumCodeType) => item.fhirCodeEnumeration.length > 0);
  }

  /**
   * @returns the `productionIdentifierInUDI` property value as a CodeType array
   *
   * @see CodeSystem Enumeration: {@link DeviceProductidentifierinudiEnum }
   */
  public getProductionIdentifierInUDIElement(): CodeType[] {
    if (this.productionIdentifierInUDI === undefined) {
      return [] as CodeType[];
    }
    return this.productionIdentifierInUDI as CodeType[];
  }

  /**
   * Assigns the provided PrimitiveType array value to the `productionIdentifierInUDI` property.
   *
   * @param element - the `productionIdentifierInUDI` array value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link DeviceProductidentifierinudiEnum }
   */
  public setProductionIdentifierInUDIElement(element: CodeType[] | undefined): this {
    if (isDefinedList<CodeType>(element)) {
      const optErrMsg = `Invalid DeviceDefinition.productionIdentifierInUDI; Provided element array has an element that is not an instance of CodeType.`;
      assertFhirTypeList<CodeType>(element, CodeType, optErrMsg);
      const enumCodeTypes = [] as EnumCodeType[];
      element.forEach((type: CodeType) => {
        enumCodeTypes.push(new EnumCodeType(type, this.deviceProductidentifierinudiEnum));
      });
      this.productionIdentifierInUDI = enumCodeTypes;
    } else {
      this.productionIdentifierInUDI = undefined;
    }
    return this;
  }

  /**
   * Add the provided PrimitiveType value to the `productionIdentifierInUDI` array property.
   *
   * @param element - the `productionIdentifierInUDI` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link DeviceProductidentifierinudiEnum }
   */
  public addProductionIdentifierInUDIElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid DeviceDefinition.productionIdentifierInUDI; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.initProductionIdentifierInUDI();
      this.productionIdentifierInUDI?.push(new EnumCodeType(element, this.deviceProductidentifierinudiEnum));
    }
    return this;
  }

  /**
   * @returns `true` if the `productionIdentifierInUDI` property exists and has a value; `false` otherwise
   */
  public hasProductionIdentifierInUDIElement(): boolean {
    return this.hasProductionIdentifierInUDIEnumType();
  }

  /**
   * @returns the `productionIdentifierInUDI` property value as a fhirCode array
   *
   * @see CodeSystem Enumeration: {@link DeviceProductidentifierinudiEnum }
   */
  public getProductionIdentifierInUDI(): fhirCode[] {
    if (this.productionIdentifierInUDI === undefined) {
      return [] as fhirCode[];
    }
    const values = [] as fhirCode[];
    for (const item of this.productionIdentifierInUDI) {
      values.push(item.fhirCode.code);
    }
    return values;
  }

  /**
   * Assigns the provided primitive value array to the `productionIdentifierInUDI` property.
   *
   * @param value - the `productionIdentifierInUDI` value array
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link DeviceProductidentifierinudiEnum }
   */
  public setProductionIdentifierInUDI(value: fhirCode[] | undefined): this {
    if (isDefinedList<fhirCode>(value)) {
      const enumCodeTypes = [] as EnumCodeType[];
      const optErrMsg = `Invalid DeviceDefinition.productionIdentifierInUDI; Provided value is not an instance of fhirCode.`;
      value.forEach((val: fhirCode) => {
        enumCodeTypes.push(new EnumCodeType(parseFhirPrimitiveData(val, fhirCodeSchema, optErrMsg), this.deviceProductidentifierinudiEnum));
      });
      this.productionIdentifierInUDI = enumCodeTypes;
    } else {
      this.productionIdentifierInUDI = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `productionIdentifierInUDI` array property.
   *
   * @param value - the `productionIdentifierInUDI` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link DeviceProductidentifierinudiEnum }
   */
  public addProductionIdentifierInUDI(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      this.initProductionIdentifierInUDI();
      const optErrMsg = `Invalid DeviceDefinition.productionIdentifierInUDI; Provided value is not an instance of fhirCode.`;
      this.productionIdentifierInUDI?.push(new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.deviceProductidentifierinudiEnum));
    }
    return this;
  }

  /**
   * @returns `true` if the `productionIdentifierInUDI` property exists and has a value; `false` otherwise
   */
  public hasProductionIdentifierInUDI(): boolean {
    return this.hasProductionIdentifierInUDIEnumType();
  }

  /**
   * Initialize the productionIdentifierInUDI property
   */
  private initProductionIdentifierInUDI(): void {
    if(!this.hasProductionIdentifierInUDIEnumType()) {
      this.productionIdentifierInUDI = [] as EnumCodeType[];
    }
  }

  /**
   * @returns the `guideline` property value as a DeviceDefinitionGuidelineComponent object if defined; else an empty DeviceDefinitionGuidelineComponent object
   */
  public getGuideline(): DeviceDefinitionGuidelineComponent {
    return this.guideline ?? new DeviceDefinitionGuidelineComponent();
  }

  /**
   * Assigns the provided Guideline object value to the `guideline` property.
   *
   * @param value - the `guideline` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setGuideline(value: DeviceDefinitionGuidelineComponent | undefined): this {
    if (isDefined<DeviceDefinitionGuidelineComponent>(value)) {
      const optErrMsg = `Invalid DeviceDefinition.guideline; Provided element is not an instance of DeviceDefinitionGuidelineComponent.`;
      assertFhirType<DeviceDefinitionGuidelineComponent>(value, DeviceDefinitionGuidelineComponent, optErrMsg);
      this.guideline = value;
    } else {
      this.guideline = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `guideline` property exists and has a value; `false` otherwise
   */
  public hasGuideline(): boolean {
    return isDefined<DeviceDefinitionGuidelineComponent>(this.guideline) && !this.guideline.isEmpty();
  }

  /**
   * @returns the `correctiveAction` property value as a DeviceDefinitionCorrectiveActionComponent object if defined; else an empty DeviceDefinitionCorrectiveActionComponent object
   */
  public getCorrectiveAction(): DeviceDefinitionCorrectiveActionComponent {
    return this.correctiveAction ?? new DeviceDefinitionCorrectiveActionComponent();
  }

  /**
   * Assigns the provided CorrectiveAction object value to the `correctiveAction` property.
   *
   * @param value - the `correctiveAction` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCorrectiveAction(value: DeviceDefinitionCorrectiveActionComponent | undefined): this {
    if (isDefined<DeviceDefinitionCorrectiveActionComponent>(value)) {
      const optErrMsg = `Invalid DeviceDefinition.correctiveAction; Provided element is not an instance of DeviceDefinitionCorrectiveActionComponent.`;
      assertFhirType<DeviceDefinitionCorrectiveActionComponent>(value, DeviceDefinitionCorrectiveActionComponent, optErrMsg);
      this.correctiveAction = value;
    } else {
      this.correctiveAction = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `correctiveAction` property exists and has a value; `false` otherwise
   */
  public hasCorrectiveAction(): boolean {
    return isDefined<DeviceDefinitionCorrectiveActionComponent>(this.correctiveAction) && !this.correctiveAction.isEmpty();
  }

  /**
   * @returns the `chargeItem` property value as a DeviceDefinitionChargeItemComponent array
   */
  public getChargeItem(): DeviceDefinitionChargeItemComponent[] {
    return this.chargeItem ?? ([] as DeviceDefinitionChargeItemComponent[]);
  }

  /**
   * Assigns the provided DeviceDefinitionChargeItemComponent array value to the `chargeItem` property.
   *
   * @param value - the `chargeItem` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setChargeItem(value: DeviceDefinitionChargeItemComponent[] | undefined): this {
    if (isDefinedList<DeviceDefinitionChargeItemComponent>(value)) {
      const optErrMsg = `Invalid DeviceDefinition.chargeItem; Provided value array has an element that is not an instance of DeviceDefinitionChargeItemComponent.`;
      assertFhirTypeList<DeviceDefinitionChargeItemComponent>(value, DeviceDefinitionChargeItemComponent, optErrMsg);
      this.chargeItem = value;
    } else {
      this.chargeItem = undefined;
    }
    return this;
  }

  /**
   * Add the provided DeviceDefinitionChargeItemComponent value to the `chargeItem` array property.
   *
   * @param value - the `chargeItem` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addChargeItem(value: DeviceDefinitionChargeItemComponent | undefined): this {
    if (isDefined<DeviceDefinitionChargeItemComponent>(value)) {
      const optErrMsg = `Invalid DeviceDefinition.chargeItem; Provided element is not an instance of DeviceDefinitionChargeItemComponent.`;
      assertFhirType<DeviceDefinitionChargeItemComponent>(value, DeviceDefinitionChargeItemComponent, optErrMsg);
      this.initChargeItem();
      this.chargeItem?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `chargeItem` property exists and has a value; `false` otherwise
   */
  public hasChargeItem(): boolean {
    return isDefinedList<DeviceDefinitionChargeItemComponent>(this.chargeItem) && this.chargeItem.some((item: DeviceDefinitionChargeItemComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `chargeItem` property
   */
  private initChargeItem(): void {
    if(!this.hasChargeItem()) {
      this.chargeItem = [] as DeviceDefinitionChargeItemComponent[];
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
      this.description,
      this.identifier,
      this.udiDeviceIdentifier,
      this.regulatoryIdentifier,
      this.partNumber,
      this.manufacturer,
      this.deviceName,
      this.modelNumber,
      this.classification,
      this.conformsTo,
      this.hasPart,
      this.packaging,
      this.version,
      this.safety,
      this.shelfLifeStorage,
      this.languageCode,
      this.property,
      this.owner,
      this.contact,
      this.link,
      this.note,
      this.material,
      this.productionIdentifierInUDI,
      this.guideline,
      this.correctiveAction,
      this.chargeItem,
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
    dest.description = this.description?.copy();
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    const udiDeviceIdentifierList = copyListValues<DeviceDefinitionUdiDeviceIdentifierComponent>(this.udiDeviceIdentifier);
    dest.udiDeviceIdentifier = udiDeviceIdentifierList.length === 0 ? undefined : udiDeviceIdentifierList;
    const regulatoryIdentifierList = copyListValues<DeviceDefinitionRegulatoryIdentifierComponent>(this.regulatoryIdentifier);
    dest.regulatoryIdentifier = regulatoryIdentifierList.length === 0 ? undefined : regulatoryIdentifierList;
    dest.partNumber = this.partNumber?.copy();
    dest.manufacturer = this.manufacturer?.copy();
    const deviceNameList = copyListValues<DeviceDefinitionDeviceNameComponent>(this.deviceName);
    dest.deviceName = deviceNameList.length === 0 ? undefined : deviceNameList;
    dest.modelNumber = this.modelNumber?.copy();
    const classificationList = copyListValues<DeviceDefinitionClassificationComponent>(this.classification);
    dest.classification = classificationList.length === 0 ? undefined : classificationList;
    const conformsToList = copyListValues<DeviceDefinitionConformsToComponent>(this.conformsTo);
    dest.conformsTo = conformsToList.length === 0 ? undefined : conformsToList;
    const hasPartList = copyListValues<DeviceDefinitionHasPartComponent>(this.hasPart);
    dest.hasPart = hasPartList.length === 0 ? undefined : hasPartList;
    const packagingList = copyListValues<DeviceDefinitionPackagingComponent>(this.packaging);
    dest.packaging = packagingList.length === 0 ? undefined : packagingList;
    const versionList = copyListValues<DeviceDefinitionVersionComponent>(this.version);
    dest.version = versionList.length === 0 ? undefined : versionList;
    const safetyList = copyListValues<CodeableConcept>(this.safety);
    dest.safety = safetyList.length === 0 ? undefined : safetyList;
    const shelfLifeStorageList = copyListValues<ProductShelfLife>(this.shelfLifeStorage);
    dest.shelfLifeStorage = shelfLifeStorageList.length === 0 ? undefined : shelfLifeStorageList;
    const languageCodeList = copyListValues<CodeableConcept>(this.languageCode);
    dest.languageCode = languageCodeList.length === 0 ? undefined : languageCodeList;
    const propertyList = copyListValues<DeviceDefinitionPropertyComponent>(this.property);
    dest.property = propertyList.length === 0 ? undefined : propertyList;
    dest.owner = this.owner?.copy();
    const contactList = copyListValues<ContactPoint>(this.contact);
    dest.contact = contactList.length === 0 ? undefined : contactList;
    const linkList = copyListValues<DeviceDefinitionLinkComponent>(this.link);
    dest.link = linkList.length === 0 ? undefined : linkList;
    const noteList = copyListValues<Annotation>(this.note);
    dest.note = noteList.length === 0 ? undefined : noteList;
    const materialList = copyListValues<DeviceDefinitionMaterialComponent>(this.material);
    dest.material = materialList.length === 0 ? undefined : materialList;
    const productionIdentifierInUDIList = copyListValues<EnumCodeType>(this.productionIdentifierInUDI);
    dest.productionIdentifierInUDI = productionIdentifierInUDIList.length === 0 ? undefined : productionIdentifierInUDIList;
    dest.guideline = this.guideline?.copy();
    dest.correctiveAction = this.correctiveAction?.copy();
    const chargeItemList = copyListValues<DeviceDefinitionChargeItemComponent>(this.chargeItem);
    dest.chargeItem = chargeItemList.length === 0 ? undefined : chargeItemList;
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

    if (this.hasDescriptionElement()) {
      setFhirPrimitiveJson<fhirMarkdown>(this.getDescriptionElement(), 'description', jsonObj);
    }

    if (this.hasIdentifier()) {
      setFhirComplexListJson(this.getIdentifier(), 'identifier', jsonObj);
    }

    if (this.hasUdiDeviceIdentifier()) {
      setFhirBackboneElementListJson(this.getUdiDeviceIdentifier(), 'udiDeviceIdentifier', jsonObj);
    }

    if (this.hasRegulatoryIdentifier()) {
      setFhirBackboneElementListJson(this.getRegulatoryIdentifier(), 'regulatoryIdentifier', jsonObj);
    }

    if (this.hasPartNumberElement()) {
      setFhirPrimitiveJson<fhirString>(this.getPartNumberElement(), 'partNumber', jsonObj);
    }

    if (this.hasManufacturer()) {
      setFhirComplexJson(this.getManufacturer(), 'manufacturer', jsonObj);
    }

    if (this.hasDeviceName()) {
      setFhirBackboneElementListJson(this.getDeviceName(), 'deviceName', jsonObj);
    }

    if (this.hasModelNumberElement()) {
      setFhirPrimitiveJson<fhirString>(this.getModelNumberElement(), 'modelNumber', jsonObj);
    }

    if (this.hasClassification()) {
      setFhirBackboneElementListJson(this.getClassification(), 'classification', jsonObj);
    }

    if (this.hasConformsTo()) {
      setFhirBackboneElementListJson(this.getConformsTo(), 'conformsTo', jsonObj);
    }

    if (this.hasHasPart()) {
      setFhirBackboneElementListJson(this.getHasPart(), 'hasPart', jsonObj);
    }

    if (this.hasPackaging()) {
      setFhirBackboneElementListJson(this.getPackaging(), 'packaging', jsonObj);
    }

    if (this.hasVersion()) {
      setFhirBackboneElementListJson(this.getVersion(), 'version', jsonObj);
    }

    if (this.hasSafety()) {
      setFhirComplexListJson(this.getSafety(), 'safety', jsonObj);
    }

    if (this.hasShelfLifeStorage()) {
      setFhirComplexListJson(this.getShelfLifeStorage(), 'shelfLifeStorage', jsonObj);
    }

    if (this.hasLanguageCode()) {
      setFhirComplexListJson(this.getLanguageCode(), 'languageCode', jsonObj);
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

    if (this.hasLink()) {
      setFhirBackboneElementListJson(this.getLink(), 'link', jsonObj);
    }

    if (this.hasNote()) {
      setFhirComplexListJson(this.getNote(), 'note', jsonObj);
    }

    if (this.hasMaterial()) {
      setFhirBackboneElementListJson(this.getMaterial(), 'material', jsonObj);
    }

    if (this.hasProductionIdentifierInUDIElement()) {
      setFhirPrimitiveListJson<fhirCode>(this.getProductionIdentifierInUDIElement(), 'productionIdentifierInUDI', jsonObj);
    }

    if (this.hasGuideline()) {
      setFhirBackboneElementJson(this.getGuideline(), 'guideline', jsonObj);
    }

    if (this.hasCorrectiveAction()) {
      setFhirBackboneElementJson(this.getCorrectiveAction(), 'correctiveAction', jsonObj);
    }

    if (this.hasChargeItem()) {
      setFhirBackboneElementListJson(this.getChargeItem(), 'chargeItem', jsonObj);
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

    fieldName = 'marketDistribution';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: DeviceDefinitionUdiDeviceIdentifierMarketDistributionComponent | undefined = DeviceDefinitionUdiDeviceIdentifierMarketDistributionComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addMarketDistribution(component);
          }
        });
      }
    }

    return instance;
  }

  /**
   * DeviceDefinition.udiDeviceIdentifier.deviceIdentifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The identifier that is to be associated with every Device that references this DeviceDefintiion for the issuer and jurisdiction provided in the DeviceDefinition.udiDeviceIdentifier
   * - **Definition:** The identifier that is to be associated with every Device that references this DeviceDefintiion for the issuer and jurisdiction provided in the DeviceDefinition.udiDeviceIdentifier.
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

  /**
   * DeviceDefinition.udiDeviceIdentifier.marketDistribution Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Indicates whether and when the device is available on the market
   * - **Definition:** Indicates where and when the device is available on the market.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private marketDistribution?: DeviceDefinitionUdiDeviceIdentifierMarketDistributionComponent[] | undefined;

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

  /**
   * @returns the `marketDistribution` property value as a DeviceDefinitionUdiDeviceIdentifierMarketDistributionComponent array
   */
  public getMarketDistribution(): DeviceDefinitionUdiDeviceIdentifierMarketDistributionComponent[] {
    return this.marketDistribution ?? ([] as DeviceDefinitionUdiDeviceIdentifierMarketDistributionComponent[]);
  }

  /**
   * Assigns the provided DeviceDefinitionUdiDeviceIdentifierMarketDistributionComponent array value to the `marketDistribution` property.
   *
   * @param value - the `marketDistribution` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setMarketDistribution(value: DeviceDefinitionUdiDeviceIdentifierMarketDistributionComponent[] | undefined): this {
    if (isDefinedList<DeviceDefinitionUdiDeviceIdentifierMarketDistributionComponent>(value)) {
      const optErrMsg = `Invalid DeviceDefinition.udiDeviceIdentifier.marketDistribution; Provided value array has an element that is not an instance of DeviceDefinitionUdiDeviceIdentifierMarketDistributionComponent.`;
      assertFhirTypeList<DeviceDefinitionUdiDeviceIdentifierMarketDistributionComponent>(value, DeviceDefinitionUdiDeviceIdentifierMarketDistributionComponent, optErrMsg);
      this.marketDistribution = value;
    } else {
      this.marketDistribution = undefined;
    }
    return this;
  }

  /**
   * Add the provided DeviceDefinitionUdiDeviceIdentifierMarketDistributionComponent value to the `marketDistribution` array property.
   *
   * @param value - the `marketDistribution` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addMarketDistribution(value: DeviceDefinitionUdiDeviceIdentifierMarketDistributionComponent | undefined): this {
    if (isDefined<DeviceDefinitionUdiDeviceIdentifierMarketDistributionComponent>(value)) {
      const optErrMsg = `Invalid DeviceDefinition.udiDeviceIdentifier.marketDistribution; Provided element is not an instance of DeviceDefinitionUdiDeviceIdentifierMarketDistributionComponent.`;
      assertFhirType<DeviceDefinitionUdiDeviceIdentifierMarketDistributionComponent>(value, DeviceDefinitionUdiDeviceIdentifierMarketDistributionComponent, optErrMsg);
      this.initMarketDistribution();
      this.marketDistribution?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `marketDistribution` property exists and has a value; `false` otherwise
   */
  public hasMarketDistribution(): boolean {
    return isDefinedList<DeviceDefinitionUdiDeviceIdentifierMarketDistributionComponent>(this.marketDistribution) && this.marketDistribution.some((item: DeviceDefinitionUdiDeviceIdentifierMarketDistributionComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `marketDistribution` property
   */
  private initMarketDistribution(): void {
    if(!this.hasMarketDistribution()) {
      this.marketDistribution = [] as DeviceDefinitionUdiDeviceIdentifierMarketDistributionComponent[];
    }
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
      this.marketDistribution,
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
    const marketDistributionList = copyListValues<DeviceDefinitionUdiDeviceIdentifierMarketDistributionComponent>(this.marketDistribution);
    dest.marketDistribution = marketDistributionList.length === 0 ? undefined : marketDistributionList;
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

    if (this.hasMarketDistribution()) {
      setFhirBackboneElementListJson(this.getMarketDistribution(), 'marketDistribution', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * DeviceDefinitionUdiDeviceIdentifierMarketDistributionComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Indicates whether and when the device is available on the market
 * - **Definition:** Indicates where and when the device is available on the market.
 *
 * @category Data Models: Resource
 * @see [FHIR DeviceDefinition](http://hl7.org/fhir/StructureDefinition/DeviceDefinition)
 */
export class DeviceDefinitionUdiDeviceIdentifierMarketDistributionComponent extends BackboneElement implements IBackboneElement {
  constructor(marketPeriod: Period | null = null, subJurisdiction: UriType | fhirUri | null = null) {
    super();

    this.marketPeriod = null;
    if (isDefined<Period>(marketPeriod)) {
      this.setMarketPeriod(marketPeriod);
    }

    this.subJurisdiction = null;
    if (isDefined<UriType | fhirUri>(subJurisdiction)) {
      if (subJurisdiction instanceof PrimitiveType) {
        this.setSubJurisdictionElement(subJurisdiction);
      } else {
        this.setSubJurisdiction(subJurisdiction);
      }
    }
  }

  /**
   * Parse the provided `DeviceDefinitionUdiDeviceIdentifierMarketDistributionComponent` JSON to instantiate the DeviceDefinitionUdiDeviceIdentifierMarketDistributionComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `DeviceDefinitionUdiDeviceIdentifierMarketDistributionComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to DeviceDefinitionUdiDeviceIdentifierMarketDistributionComponent
   * @returns DeviceDefinitionUdiDeviceIdentifierMarketDistributionComponent data model or undefined for `DeviceDefinitionUdiDeviceIdentifierMarketDistributionComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): DeviceDefinitionUdiDeviceIdentifierMarketDistributionComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'DeviceDefinitionUdiDeviceIdentifierMarketDistributionComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new DeviceDefinitionUdiDeviceIdentifierMarketDistributionComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    fieldName = 'marketPeriod';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Period | undefined = Period.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setMarketPeriod(null);
      } else {
        instance.setMarketPeriod(datatype);
      }
    } else {
      instance.setMarketPeriod(null);
    }

    fieldName = 'subJurisdiction';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: UriType | undefined = fhirParser.parseUriType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setSubJurisdiction(null);
      } else {
        instance.setSubJurisdictionElement(datatype);
      }
    } else {
      instance.setSubJurisdiction(null);
    }

    return instance;
  }

  /**
   * DeviceDefinition.udiDeviceIdentifier.marketDistribution.marketPeriod Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Begin and end dates for the commercial distribution of the device
   * - **Definition:** Begin and end dates for the commercial distribution of the device.
   * - **FHIR Type:** `Period`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private marketPeriod: Period | null;

  /**
   * DeviceDefinition.udiDeviceIdentifier.marketDistribution.subJurisdiction Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** National state or territory where the device is commercialized
   * - **Definition:** National state or territory to which the marketDistribution recers, typically where the device is commercialized.
   * - **FHIR Type:** `uri`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private subJurisdiction: UriType | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `marketPeriod` property value as a Period object if defined; else an empty Period object
   */
  public getMarketPeriod(): Period {
    return this.marketPeriod ?? new Period();
  }

  /**
   * Assigns the provided Period object value to the `marketPeriod` property.
   *
   * @param value - the `marketPeriod` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setMarketPeriod(value: Period | undefined | null): this {
    if (isDefined<Period>(value)) {
      const optErrMsg = `Invalid DeviceDefinition.udiDeviceIdentifier.marketDistribution.marketPeriod; Provided element is not an instance of Period.`;
      assertFhirType<Period>(value, Period, optErrMsg);
      this.marketPeriod = value;
    } else {
      this.marketPeriod = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `marketPeriod` property exists and has a value; `false` otherwise
   */
  public hasMarketPeriod(): boolean {
    return isDefined<Period>(this.marketPeriod) && !this.marketPeriod.isEmpty();
  }

  /**
   * @returns the `subJurisdiction` property value as a UriType object if defined; else an empty UriType object
   */
  public getSubJurisdictionElement(): UriType {
    return this.subJurisdiction ?? new UriType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `subJurisdiction` property.
   *
   * @param element - the `subJurisdiction` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSubJurisdictionElement(element: UriType | undefined | null): this {
    if (isDefined<UriType>(element)) {
      const optErrMsg = `Invalid DeviceDefinition.udiDeviceIdentifier.marketDistribution.subJurisdiction; Provided value is not an instance of UriType.`;
      assertFhirType<UriType>(element, UriType, optErrMsg);
      this.subJurisdiction = element;
    } else {
      this.subJurisdiction = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `subJurisdiction` property exists and has a value; `false` otherwise
   */
  public hasSubJurisdictionElement(): boolean {
    return isDefined<UriType>(this.subJurisdiction) && !this.subJurisdiction.isEmpty();
  }

  /**
   * @returns the `subJurisdiction` property value as a fhirUri if defined; else null
   */
  public getSubJurisdiction(): fhirUri | null {
    if (this.subJurisdiction?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.subJurisdiction.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `subJurisdiction` property.
   *
   * @param value - the `subJurisdiction` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSubJurisdiction(value: fhirUri | undefined | null): this {
    if (isDefined<fhirUri>(value)) {
      const optErrMsg = `Invalid DeviceDefinition.udiDeviceIdentifier.marketDistribution.subJurisdiction (${String(value)})`;
      this.subJurisdiction = new UriType(parseFhirPrimitiveData(value, fhirUriSchema, optErrMsg));
    } else {
      this.subJurisdiction = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `subJurisdiction` property exists and has a value; `false` otherwise
   */
  public hasSubJurisdiction(): boolean {
    return this.hasSubJurisdictionElement();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'DeviceDefinition.udiDeviceIdentifier.marketDistribution';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.marketPeriod,
      this.subJurisdiction,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.marketPeriod, this.subJurisdiction, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): DeviceDefinitionUdiDeviceIdentifierMarketDistributionComponent {
    const dest = new DeviceDefinitionUdiDeviceIdentifierMarketDistributionComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: DeviceDefinitionUdiDeviceIdentifierMarketDistributionComponent): void {
    super.copyValues(dest);
    dest.marketPeriod = this.marketPeriod ? this.marketPeriod.copy() : null;
    dest.subJurisdiction = this.subJurisdiction ? this.subJurisdiction.copy() : null;
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

    if (this.hasMarketPeriod()) {
      setFhirComplexJson(this.getMarketPeriod(), 'marketPeriod', jsonObj);
    }

    if (this.hasSubJurisdictionElement()) {
      setFhirPrimitiveJson<fhirUri>(this.getSubJurisdictionElement(), 'subJurisdiction', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * DeviceDefinitionRegulatoryIdentifierComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Regulatory identifier(s) associated with this device
 * - **Definition:** Identifier associated with the regulatory documentation (certificates, technical documentation, post-market surveillance documentation and reports) of a set of device models sharing the same intended purpose, risk class and essential design and manufacturing characteristics. One example is the Basic UDI-DI in Europe.
 * - **Comment:** This should not be used for regulatory authorization numbers which are to be captured elsewhere.
 *
 * @category Data Models: Resource
 * @see [FHIR DeviceDefinition](http://hl7.org/fhir/StructureDefinition/DeviceDefinition)
 */
export class DeviceDefinitionRegulatoryIdentifierComponent extends BackboneElement implements IBackboneElement {
  constructor(type_: EnumCodeType | CodeType | fhirCode | null = null, deviceIdentifier: StringType | fhirString | null = null, issuer: UriType | fhirUri | null = null, jurisdiction: UriType | fhirUri | null = null) {
    super();

    this.devicedefinitionRegulatoryIdentifierTypeEnum = new DevicedefinitionRegulatoryIdentifierTypeEnum();

    this.type_ = constructorCodeValueAsEnumCodeType<DevicedefinitionRegulatoryIdentifierTypeEnum>(
      type_,
      DevicedefinitionRegulatoryIdentifierTypeEnum,
      this.devicedefinitionRegulatoryIdentifierTypeEnum,
      'DeviceDefinition.regulatoryIdentifier.type',
    );

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
   * Parse the provided `DeviceDefinitionRegulatoryIdentifierComponent` JSON to instantiate the DeviceDefinitionRegulatoryIdentifierComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `DeviceDefinitionRegulatoryIdentifierComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to DeviceDefinitionRegulatoryIdentifierComponent
   * @returns DeviceDefinitionRegulatoryIdentifierComponent data model or undefined for `DeviceDefinitionRegulatoryIdentifierComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): DeviceDefinitionRegulatoryIdentifierComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'DeviceDefinitionRegulatoryIdentifierComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new DeviceDefinitionRegulatoryIdentifierComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

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
   * FHIR CodeSystem: DevicedefinitionRegulatoryIdentifierType
   *
   * @see {@link DevicedefinitionRegulatoryIdentifierTypeEnum }
   */
  private readonly devicedefinitionRegulatoryIdentifierTypeEnum: DevicedefinitionRegulatoryIdentifierTypeEnum;

  /**
   * DeviceDefinition.regulatoryIdentifier.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** basic | master | license
   * - **Definition:** The type of identifier itself.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link DevicedefinitionRegulatoryIdentifierTypeEnum }
   */
  private type_: EnumCodeType | null;

  /**
   * DeviceDefinition.regulatoryIdentifier.deviceIdentifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The identifier itself
   * - **Definition:** The identifier itself.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private deviceIdentifier: StringType | null;

  /**
   * DeviceDefinition.regulatoryIdentifier.issuer Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The organization that issued this identifier
   * - **Definition:** The organization that issued this identifier.
   * - **FHIR Type:** `uri`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private issuer: UriType | null;

  /**
   * DeviceDefinition.regulatoryIdentifier.jurisdiction Element
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
   * @returns the `type_` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link DevicedefinitionRegulatoryIdentifierTypeEnum }
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
   * @see CodeSystem Enumeration: {@link DevicedefinitionRegulatoryIdentifierTypeEnum }
   */
  public setTypeEnumType(enumType: EnumCodeType | undefined | null): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid DeviceDefinition.regulatoryIdentifier.type`;
      assertEnumCodeType<DevicedefinitionRegulatoryIdentifierTypeEnum>(enumType, DevicedefinitionRegulatoryIdentifierTypeEnum, errMsgPrefix);
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
   * @see CodeSystem Enumeration: {@link DevicedefinitionRegulatoryIdentifierTypeEnum }
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
   * @see CodeSystem Enumeration: {@link DevicedefinitionRegulatoryIdentifierTypeEnum }
   */
  public setTypeElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid DeviceDefinition.regulatoryIdentifier.type; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.type_ = new EnumCodeType(element, this.devicedefinitionRegulatoryIdentifierTypeEnum);
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
   * @see CodeSystem Enumeration: {@link DevicedefinitionRegulatoryIdentifierTypeEnum }
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
   * @see CodeSystem Enumeration: {@link DevicedefinitionRegulatoryIdentifierTypeEnum }
   */
  public setType(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid DeviceDefinition.regulatoryIdentifier.type (${String(value)})`;
      this.type_ = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.devicedefinitionRegulatoryIdentifierTypeEnum);
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
      const optErrMsg = `Invalid DeviceDefinition.regulatoryIdentifier.deviceIdentifier; Provided value is not an instance of StringType.`;
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
      const optErrMsg = `Invalid DeviceDefinition.regulatoryIdentifier.deviceIdentifier (${String(value)})`;
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
      const optErrMsg = `Invalid DeviceDefinition.regulatoryIdentifier.issuer; Provided value is not an instance of UriType.`;
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
      const optErrMsg = `Invalid DeviceDefinition.regulatoryIdentifier.issuer (${String(value)})`;
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
      const optErrMsg = `Invalid DeviceDefinition.regulatoryIdentifier.jurisdiction; Provided value is not an instance of UriType.`;
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
      const optErrMsg = `Invalid DeviceDefinition.regulatoryIdentifier.jurisdiction (${String(value)})`;
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
    return 'DeviceDefinition.regulatoryIdentifier';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.type_,
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
      this.type_, this.deviceIdentifier, this.issuer, this.jurisdiction, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): DeviceDefinitionRegulatoryIdentifierComponent {
    const dest = new DeviceDefinitionRegulatoryIdentifierComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: DeviceDefinitionRegulatoryIdentifierComponent): void {
    super.copyValues(dest);
    dest.type_ = this.type_ ? this.type_.copy() : null;
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

    if (this.hasTypeElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getTypeElement()!, 'type', jsonObj);
    }

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
 * - **Short:** The name or names of the device as given by the manufacturer
 * - **Definition:** The name or names of the device as given by the manufacturer.
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
   * - **Short:** A name that is used to refer to the device
   * - **Definition:** A human-friendly name that is used to refer to the device - depending on the type, it can be the brand name, the common name or alias, or other.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
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
   * - **Short:** registered-name | user-friendly-name | patient-reported-name
   * - **Definition:** The type of deviceName. RegisteredName | UserFriendlyName | PatientReportedName.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
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
 * DeviceDefinitionClassificationComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** What kind of device or device system this is
 * - **Definition:** What kind of device or device system this is.
 * - **Comment:** In this element various classifications can be used, such as GMDN, EMDN, SNOMED CT, risk classes, national product codes.
 *
 * @category Data Models: Resource
 * @see [FHIR DeviceDefinition](http://hl7.org/fhir/StructureDefinition/DeviceDefinition)
 */
export class DeviceDefinitionClassificationComponent extends BackboneElement implements IBackboneElement {
  constructor(type_: CodeableConcept | null = null) {
    super();

    this.type_ = null;
    if (isDefined<CodeableConcept>(type_)) {
      this.setType(type_);
    }
  }

  /**
   * Parse the provided `DeviceDefinitionClassificationComponent` JSON to instantiate the DeviceDefinitionClassificationComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `DeviceDefinitionClassificationComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to DeviceDefinitionClassificationComponent
   * @returns DeviceDefinitionClassificationComponent data model or undefined for `DeviceDefinitionClassificationComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): DeviceDefinitionClassificationComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'DeviceDefinitionClassificationComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new DeviceDefinitionClassificationComponent();

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

    fieldName = 'justification';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: RelatedArtifact | undefined = RelatedArtifact.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addJustification(datatype);
          }
        });
      }
    }

    return instance;
  }

  /**
   * DeviceDefinition.classification.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A classification or risk class of the device model
   * - **Definition:** A classification or risk class of the device model.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private type_: CodeableConcept | null;

  /**
   * DeviceDefinition.classification.justification Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Further information qualifying this classification of the device model
   * - **Definition:** Further information qualifying this classification of the device model.
   * - **FHIR Type:** `RelatedArtifact`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private justification?: RelatedArtifact[] | undefined;

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
      const optErrMsg = `Invalid DeviceDefinition.classification.type; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `justification` property value as a RelatedArtifact array
   */
  public getJustification(): RelatedArtifact[] {
    return this.justification ?? ([] as RelatedArtifact[]);
  }

  /**
   * Assigns the provided RelatedArtifact array value to the `justification` property.
   *
   * @param value - the `justification` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setJustification(value: RelatedArtifact[] | undefined): this {
    if (isDefinedList<RelatedArtifact>(value)) {
      const optErrMsg = `Invalid DeviceDefinition.classification.justification; Provided value array has an element that is not an instance of RelatedArtifact.`;
      assertFhirTypeList<RelatedArtifact>(value, RelatedArtifact, optErrMsg);
      this.justification = value;
    } else {
      this.justification = undefined;
    }
    return this;
  }

  /**
   * Add the provided RelatedArtifact value to the `justification` array property.
   *
   * @param value - the `justification` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addJustification(value: RelatedArtifact | undefined): this {
    if (isDefined<RelatedArtifact>(value)) {
      const optErrMsg = `Invalid DeviceDefinition.classification.justification; Provided element is not an instance of RelatedArtifact.`;
      assertFhirType<RelatedArtifact>(value, RelatedArtifact, optErrMsg);
      this.initJustification();
      this.justification?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `justification` property exists and has a value; `false` otherwise
   */
  public hasJustification(): boolean {
    return isDefinedList<RelatedArtifact>(this.justification) && this.justification.some((item: RelatedArtifact) => !item.isEmpty());
  }

  /**
   * Initialize the `justification` property
   */
  private initJustification(): void {
    if(!this.hasJustification()) {
      this.justification = [] as RelatedArtifact[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'DeviceDefinition.classification';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.type_,
      this.justification,
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
  public override copy(): DeviceDefinitionClassificationComponent {
    const dest = new DeviceDefinitionClassificationComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: DeviceDefinitionClassificationComponent): void {
    super.copyValues(dest);
    dest.type_ = this.type_ ? this.type_.copy() : null;
    const justificationList = copyListValues<RelatedArtifact>(this.justification);
    dest.justification = justificationList.length === 0 ? undefined : justificationList;
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

    if (this.hasJustification()) {
      setFhirComplexListJson(this.getJustification(), 'justification', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * DeviceDefinitionConformsToComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Identifies the standards, specifications, or formal guidances for the capabilities supported by the device
 * - **Definition:** Identifies the standards, specifications, or formal guidances for the capabilities supported by the device. The device may be certified as conformant to these specifications e.g., communication, performance, process, measurement, or specialization standards.
 *
 * @category Data Models: Resource
 * @see [FHIR DeviceDefinition](http://hl7.org/fhir/StructureDefinition/DeviceDefinition)
 */
export class DeviceDefinitionConformsToComponent extends BackboneElement implements IBackboneElement {
  constructor(specification: CodeableConcept | null = null) {
    super();

    this.specification = null;
    if (isDefined<CodeableConcept>(specification)) {
      this.setSpecification(specification);
    }
  }

  /**
   * Parse the provided `DeviceDefinitionConformsToComponent` JSON to instantiate the DeviceDefinitionConformsToComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `DeviceDefinitionConformsToComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to DeviceDefinitionConformsToComponent
   * @returns DeviceDefinitionConformsToComponent data model or undefined for `DeviceDefinitionConformsToComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): DeviceDefinitionConformsToComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'DeviceDefinitionConformsToComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new DeviceDefinitionConformsToComponent();

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

    fieldName = 'source';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: RelatedArtifact | undefined = RelatedArtifact.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addSource(datatype);
          }
        });
      }
    }

    return instance;
  }

  /**
   * DeviceDefinition.conformsTo.category Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Describes the common type of the standard, specification, or formal guidance
   * - **Definition:** Describes the type of the standard, specification, or formal guidance.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private category?: CodeableConcept | undefined;

  /**
   * DeviceDefinition.conformsTo.specification Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Identifies the standard, specification, or formal guidance that the device adheres to the Device Specification type
   * - **Definition:** Code that identifies the specific standard, specification, protocol, formal guidance, regulation, legislation, or certification scheme to which the device adheres.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private specification: CodeableConcept | null;

  /**
   * DeviceDefinition.conformsTo.version Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The specific form or variant of the standard, specification or formal guidance
   * - **Definition:** Identifies the specific form or variant of the standard, specification, or formal guidance. This may be a \'version number\', release, document edition, publication year, or other label.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private version?: StringType[] | undefined;

  /**
   * DeviceDefinition.conformsTo.source Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Standard, regulation, certification, or guidance website, document, or other publication, or similar, supporting the conformance
   * - **Definition:** Standard, regulation, certification, or guidance website, document, or other publication, or similar, supporting the conformance.
   * - **FHIR Type:** `RelatedArtifact`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private source?: RelatedArtifact[] | undefined;

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
      const optErrMsg = `Invalid DeviceDefinition.conformsTo.category; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid DeviceDefinition.conformsTo.specification; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid DeviceDefinition.conformsTo.version; Provided value array has an element that is not an instance of StringType.`;
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
      const optErrMsg = `Invalid DeviceDefinition.conformsTo.version; Provided element is not an instance of StringType.`;
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
        const optErrMsg = `Invalid DeviceDefinition.conformsTo.version array item (${String(versionValue)})`;
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
      const optErrMsg = `Invalid DeviceDefinition.conformsTo.version array item (${String(value)})`;
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
   * @returns the `source` property value as a RelatedArtifact array
   */
  public getSource(): RelatedArtifact[] {
    return this.source ?? ([] as RelatedArtifact[]);
  }

  /**
   * Assigns the provided RelatedArtifact array value to the `source` property.
   *
   * @param value - the `source` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSource(value: RelatedArtifact[] | undefined): this {
    if (isDefinedList<RelatedArtifact>(value)) {
      const optErrMsg = `Invalid DeviceDefinition.conformsTo.source; Provided value array has an element that is not an instance of RelatedArtifact.`;
      assertFhirTypeList<RelatedArtifact>(value, RelatedArtifact, optErrMsg);
      this.source = value;
    } else {
      this.source = undefined;
    }
    return this;
  }

  /**
   * Add the provided RelatedArtifact value to the `source` array property.
   *
   * @param value - the `source` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addSource(value: RelatedArtifact | undefined): this {
    if (isDefined<RelatedArtifact>(value)) {
      const optErrMsg = `Invalid DeviceDefinition.conformsTo.source; Provided element is not an instance of RelatedArtifact.`;
      assertFhirType<RelatedArtifact>(value, RelatedArtifact, optErrMsg);
      this.initSource();
      this.source?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `source` property exists and has a value; `false` otherwise
   */
  public hasSource(): boolean {
    return isDefinedList<RelatedArtifact>(this.source) && this.source.some((item: RelatedArtifact) => !item.isEmpty());
  }

  /**
   * Initialize the `source` property
   */
  private initSource(): void {
    if(!this.hasSource()) {
      this.source = [] as RelatedArtifact[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'DeviceDefinition.conformsTo';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.category,
      this.specification,
      this.version,
      this.source,
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
  public override copy(): DeviceDefinitionConformsToComponent {
    const dest = new DeviceDefinitionConformsToComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: DeviceDefinitionConformsToComponent): void {
    super.copyValues(dest);
    dest.category = this.category?.copy();
    dest.specification = this.specification ? this.specification.copy() : null;
    const versionList = copyListValues<StringType>(this.version);
    dest.version = versionList.length === 0 ? undefined : versionList;
    const sourceList = copyListValues<RelatedArtifact>(this.source);
    dest.source = sourceList.length === 0 ? undefined : sourceList;
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
    }

    if (this.hasVersion()) {
      setFhirPrimitiveListJson(this.getVersionElement(), 'version', jsonObj);
    }

    if (this.hasSource()) {
      setFhirComplexListJson(this.getSource(), 'source', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * DeviceDefinitionHasPartComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** A device, part of the current one
 * - **Definition:** A device that is part (for example a component) of the present device.
 *
 * @category Data Models: Resource
 * @see [FHIR DeviceDefinition](http://hl7.org/fhir/StructureDefinition/DeviceDefinition)
 */
export class DeviceDefinitionHasPartComponent extends BackboneElement implements IBackboneElement {
  constructor(reference: Reference | null = null) {
    super();

    this.reference = null;
    if (isDefined<Reference>(reference)) {
      this.setReference(reference);
    }
  }

  /**
   * Parse the provided `DeviceDefinitionHasPartComponent` JSON to instantiate the DeviceDefinitionHasPartComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `DeviceDefinitionHasPartComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to DeviceDefinitionHasPartComponent
   * @returns DeviceDefinitionHasPartComponent data model or undefined for `DeviceDefinitionHasPartComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): DeviceDefinitionHasPartComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'DeviceDefinitionHasPartComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new DeviceDefinitionHasPartComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    fieldName = 'reference';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setReference(null);
      } else {
        instance.setReference(datatype);
      }
    } else {
      instance.setReference(null);
    }

    fieldName = 'count';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: IntegerType | undefined = fhirParser.parseIntegerType(dtJson, dtSiblingJson);
      instance.setCountElement(datatype);
    }

    return instance;
  }

  /**
   * DeviceDefinition.hasPart.reference Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Reference to the part
   * - **Definition:** Reference to the device that is part of the current device.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/DeviceDefinition',
   *     ]
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private reference: Reference | null;

  /**
   * DeviceDefinition.hasPart.count Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Number of occurrences of the part
   * - **Definition:** Number of instances of the component device in the current device.
   * - **FHIR Type:** `integer`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private count?: IntegerType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `reference` property value as a Reference object if defined; else an empty Reference object
   */
  public getReference(): Reference {
    return this.reference ?? new Reference();
  }

  /**
   * Assigns the provided Reference object value to the `reference` property.
   *
   * @decorator `@ReferenceTargets('DeviceDefinition.hasPart.reference', ['DeviceDefinition',])`
   *
   * @param value - the `reference` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('DeviceDefinition.hasPart.reference', [
    'DeviceDefinition',
  ])
  public setReference(value: Reference | undefined | null): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.reference = value;
    } else {
      this.reference = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `reference` property exists and has a value; `false` otherwise
   */
  public hasReference(): boolean {
    return isDefined<Reference>(this.reference) && !this.reference.isEmpty();
  }

  /**
   * @returns the `count` property value as a IntegerType object if defined; else an empty IntegerType object
   */
  public getCountElement(): IntegerType {
    return this.count ?? new IntegerType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `count` property.
   *
   * @param element - the `count` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCountElement(element: IntegerType | undefined): this {
    if (isDefined<IntegerType>(element)) {
      const optErrMsg = `Invalid DeviceDefinition.hasPart.count; Provided element is not an instance of IntegerType.`;
      assertFhirType<IntegerType>(element, IntegerType, optErrMsg);
      this.count = element;
    } else {
      this.count = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `count` property exists and has a value; `false` otherwise
   */
  public hasCountElement(): boolean {
    return isDefined<IntegerType>(this.count) && !this.count.isEmpty();
  }

  /**
   * @returns the `count` property value as a fhirInteger if defined; else undefined
   */
  public getCount(): fhirInteger | undefined {
    return this.count?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `count` property.
   *
   * @param value - the `count` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCount(value: fhirInteger | undefined): this {
    if (isDefined<fhirInteger>(value)) {
      const optErrMsg = `Invalid DeviceDefinition.hasPart.count (${String(value)})`;
      this.count = new IntegerType(parseFhirPrimitiveData(value, fhirIntegerSchema, optErrMsg));
    } else {
      this.count = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `count` property exists and has a value; `false` otherwise
   */
  public hasCount(): boolean {
    return this.hasCountElement();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'DeviceDefinition.hasPart';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.reference,
      this.count,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.reference, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): DeviceDefinitionHasPartComponent {
    const dest = new DeviceDefinitionHasPartComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: DeviceDefinitionHasPartComponent): void {
    super.copyValues(dest);
    dest.reference = this.reference ? this.reference.copy() : null;
    dest.count = this.count?.copy();
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

    if (this.hasReference()) {
      setFhirComplexJson(this.getReference(), 'reference', jsonObj);
    }

    if (this.hasCountElement()) {
      setFhirPrimitiveJson<fhirInteger>(this.getCountElement(), 'count', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * DeviceDefinitionPackagingComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Information about the packaging of the device, i.e. how the device is packaged
 * - **Definition:** Information about the packaging of the device, i.e. how the device is packaged.
 *
 * @category Data Models: Resource
 * @see [FHIR DeviceDefinition](http://hl7.org/fhir/StructureDefinition/DeviceDefinition)
 */
export class DeviceDefinitionPackagingComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `DeviceDefinitionPackagingComponent` JSON to instantiate the DeviceDefinitionPackagingComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `DeviceDefinitionPackagingComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to DeviceDefinitionPackagingComponent
   * @returns DeviceDefinitionPackagingComponent data model or undefined for `DeviceDefinitionPackagingComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): DeviceDefinitionPackagingComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'DeviceDefinitionPackagingComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new DeviceDefinitionPackagingComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    fieldName = 'identifier';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Identifier | undefined = Identifier.parse(classJsonObj[fieldName]!, sourceField);
      instance.setIdentifier(datatype);
    }

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setType(datatype);
    }

    fieldName = 'count';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: IntegerType | undefined = fhirParser.parseIntegerType(dtJson, dtSiblingJson);
      instance.setCountElement(datatype);
    }

    fieldName = 'distributor';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: DeviceDefinitionPackagingDistributorComponent | undefined = DeviceDefinitionPackagingDistributorComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addDistributor(component);
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

    fieldName = 'packaging';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: DeviceDefinitionPackagingComponent | undefined = DeviceDefinitionPackagingComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addPackaging(component);
          }
        });
      }
    }

    return instance;
  }

  /**
   * DeviceDefinition.packaging.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Business identifier of the packaged medication
   * - **Definition:** The business identifier of the packaged medication.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private identifier?: Identifier | undefined;

  /**
   * DeviceDefinition.packaging.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A code that defines the specific type of packaging
   * - **Definition:** A code that defines the specific type of packaging.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private type_?: CodeableConcept | undefined;

  /**
   * DeviceDefinition.packaging.count Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The number of items contained in the package (devices or sub-packages)
   * - **Definition:** The number of items contained in the package (devices or sub-packages).
   * - **FHIR Type:** `integer`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private count?: IntegerType | undefined;

  /**
   * DeviceDefinition.packaging.distributor Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** An organization that distributes the packaged device
   * - **Definition:** An organization that distributes the packaged device.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private distributor?: DeviceDefinitionPackagingDistributorComponent[] | undefined;

  /**
   * DeviceDefinition.packaging.udiDeviceIdentifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Unique Device Identifier (UDI) Barcode string on the packaging
   * - **Definition:** Unique Device Identifier (UDI) Barcode string on the packaging.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private udiDeviceIdentifier?: DeviceDefinitionUdiDeviceIdentifierComponent[] | undefined;

  /**
   * DeviceDefinition.packaging.packaging Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Allows packages within packages
   * - **Definition:** Allows packages within packages.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private packaging?: DeviceDefinitionPackagingComponent[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `identifier` property value as a Identifier object if defined; else an empty Identifier object
   */
  public getIdentifier(): Identifier {
    return this.identifier ?? new Identifier();
  }

  /**
   * Assigns the provided Identifier object value to the `identifier` property.
   *
   * @param value - the `identifier` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setIdentifier(value: Identifier | undefined): this {
    if (isDefined<Identifier>(value)) {
      const optErrMsg = `Invalid DeviceDefinition.packaging.identifier; Provided element is not an instance of Identifier.`;
      assertFhirType<Identifier>(value, Identifier, optErrMsg);
      this.identifier = value;
    } else {
      this.identifier = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `identifier` property exists and has a value; `false` otherwise
   */
  public hasIdentifier(): boolean {
    return isDefined<Identifier>(this.identifier) && !this.identifier.isEmpty();
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
      const optErrMsg = `Invalid DeviceDefinition.packaging.type; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `count` property value as a IntegerType object if defined; else an empty IntegerType object
   */
  public getCountElement(): IntegerType {
    return this.count ?? new IntegerType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `count` property.
   *
   * @param element - the `count` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCountElement(element: IntegerType | undefined): this {
    if (isDefined<IntegerType>(element)) {
      const optErrMsg = `Invalid DeviceDefinition.packaging.count; Provided element is not an instance of IntegerType.`;
      assertFhirType<IntegerType>(element, IntegerType, optErrMsg);
      this.count = element;
    } else {
      this.count = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `count` property exists and has a value; `false` otherwise
   */
  public hasCountElement(): boolean {
    return isDefined<IntegerType>(this.count) && !this.count.isEmpty();
  }

  /**
   * @returns the `count` property value as a fhirInteger if defined; else undefined
   */
  public getCount(): fhirInteger | undefined {
    return this.count?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `count` property.
   *
   * @param value - the `count` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCount(value: fhirInteger | undefined): this {
    if (isDefined<fhirInteger>(value)) {
      const optErrMsg = `Invalid DeviceDefinition.packaging.count (${String(value)})`;
      this.count = new IntegerType(parseFhirPrimitiveData(value, fhirIntegerSchema, optErrMsg));
    } else {
      this.count = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `count` property exists and has a value; `false` otherwise
   */
  public hasCount(): boolean {
    return this.hasCountElement();
  }

  /**
   * @returns the `distributor` property value as a DeviceDefinitionPackagingDistributorComponent array
   */
  public getDistributor(): DeviceDefinitionPackagingDistributorComponent[] {
    return this.distributor ?? ([] as DeviceDefinitionPackagingDistributorComponent[]);
  }

  /**
   * Assigns the provided DeviceDefinitionPackagingDistributorComponent array value to the `distributor` property.
   *
   * @param value - the `distributor` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDistributor(value: DeviceDefinitionPackagingDistributorComponent[] | undefined): this {
    if (isDefinedList<DeviceDefinitionPackagingDistributorComponent>(value)) {
      const optErrMsg = `Invalid DeviceDefinition.packaging.distributor; Provided value array has an element that is not an instance of DeviceDefinitionPackagingDistributorComponent.`;
      assertFhirTypeList<DeviceDefinitionPackagingDistributorComponent>(value, DeviceDefinitionPackagingDistributorComponent, optErrMsg);
      this.distributor = value;
    } else {
      this.distributor = undefined;
    }
    return this;
  }

  /**
   * Add the provided DeviceDefinitionPackagingDistributorComponent value to the `distributor` array property.
   *
   * @param value - the `distributor` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addDistributor(value: DeviceDefinitionPackagingDistributorComponent | undefined): this {
    if (isDefined<DeviceDefinitionPackagingDistributorComponent>(value)) {
      const optErrMsg = `Invalid DeviceDefinition.packaging.distributor; Provided element is not an instance of DeviceDefinitionPackagingDistributorComponent.`;
      assertFhirType<DeviceDefinitionPackagingDistributorComponent>(value, DeviceDefinitionPackagingDistributorComponent, optErrMsg);
      this.initDistributor();
      this.distributor?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `distributor` property exists and has a value; `false` otherwise
   */
  public hasDistributor(): boolean {
    return isDefinedList<DeviceDefinitionPackagingDistributorComponent>(this.distributor) && this.distributor.some((item: DeviceDefinitionPackagingDistributorComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `distributor` property
   */
  private initDistributor(): void {
    if(!this.hasDistributor()) {
      this.distributor = [] as DeviceDefinitionPackagingDistributorComponent[];
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
      const optErrMsg = `Invalid DeviceDefinition.packaging.udiDeviceIdentifier; Provided value array has an element that is not an instance of DeviceDefinitionUdiDeviceIdentifierComponent.`;
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
      const optErrMsg = `Invalid DeviceDefinition.packaging.udiDeviceIdentifier; Provided element is not an instance of DeviceDefinitionUdiDeviceIdentifierComponent.`;
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
   * @returns the `packaging` property value as a DeviceDefinitionPackagingComponent array
   */
  public getPackaging(): DeviceDefinitionPackagingComponent[] {
    return this.packaging ?? ([] as DeviceDefinitionPackagingComponent[]);
  }

  /**
   * Assigns the provided DeviceDefinitionPackagingComponent array value to the `packaging` property.
   *
   * @param value - the `packaging` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPackaging(value: DeviceDefinitionPackagingComponent[] | undefined): this {
    if (isDefinedList<DeviceDefinitionPackagingComponent>(value)) {
      const optErrMsg = `Invalid DeviceDefinition.packaging.packaging; Provided value array has an element that is not an instance of DeviceDefinitionPackagingComponent.`;
      assertFhirTypeList<DeviceDefinitionPackagingComponent>(value, DeviceDefinitionPackagingComponent, optErrMsg);
      this.packaging = value;
    } else {
      this.packaging = undefined;
    }
    return this;
  }

  /**
   * Add the provided DeviceDefinitionPackagingComponent value to the `packaging` array property.
   *
   * @param value - the `packaging` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addPackaging(value: DeviceDefinitionPackagingComponent | undefined): this {
    if (isDefined<DeviceDefinitionPackagingComponent>(value)) {
      const optErrMsg = `Invalid DeviceDefinition.packaging.packaging; Provided element is not an instance of DeviceDefinitionPackagingComponent.`;
      assertFhirType<DeviceDefinitionPackagingComponent>(value, DeviceDefinitionPackagingComponent, optErrMsg);
      this.initPackaging();
      this.packaging?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `packaging` property exists and has a value; `false` otherwise
   */
  public hasPackaging(): boolean {
    return isDefinedList<DeviceDefinitionPackagingComponent>(this.packaging) && this.packaging.some((item: DeviceDefinitionPackagingComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `packaging` property
   */
  private initPackaging(): void {
    if(!this.hasPackaging()) {
      this.packaging = [] as DeviceDefinitionPackagingComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'DeviceDefinition.packaging';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identifier,
      this.type_,
      this.count,
      this.distributor,
      this.udiDeviceIdentifier,
      this.packaging,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): DeviceDefinitionPackagingComponent {
    const dest = new DeviceDefinitionPackagingComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: DeviceDefinitionPackagingComponent): void {
    super.copyValues(dest);
    dest.identifier = this.identifier?.copy();
    dest.type_ = this.type_?.copy();
    dest.count = this.count?.copy();
    const distributorList = copyListValues<DeviceDefinitionPackagingDistributorComponent>(this.distributor);
    dest.distributor = distributorList.length === 0 ? undefined : distributorList;
    const udiDeviceIdentifierList = copyListValues<DeviceDefinitionUdiDeviceIdentifierComponent>(this.udiDeviceIdentifier);
    dest.udiDeviceIdentifier = udiDeviceIdentifierList.length === 0 ? undefined : udiDeviceIdentifierList;
    const packagingList = copyListValues<DeviceDefinitionPackagingComponent>(this.packaging);
    dest.packaging = packagingList.length === 0 ? undefined : packagingList;
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
      setFhirComplexJson(this.getIdentifier(), 'identifier', jsonObj);
    }

    if (this.hasType()) {
      setFhirComplexJson(this.getType(), 'type', jsonObj);
    }

    if (this.hasCountElement()) {
      setFhirPrimitiveJson<fhirInteger>(this.getCountElement(), 'count', jsonObj);
    }

    if (this.hasDistributor()) {
      setFhirBackboneElementListJson(this.getDistributor(), 'distributor', jsonObj);
    }

    if (this.hasUdiDeviceIdentifier()) {
      setFhirBackboneElementListJson(this.getUdiDeviceIdentifier(), 'udiDeviceIdentifier', jsonObj);
    }

    if (this.hasPackaging()) {
      setFhirBackboneElementListJson(this.getPackaging(), 'packaging', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * DeviceDefinitionPackagingDistributorComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** An organization that distributes the packaged device
 * - **Definition:** An organization that distributes the packaged device.
 *
 * @category Data Models: Resource
 * @see [FHIR DeviceDefinition](http://hl7.org/fhir/StructureDefinition/DeviceDefinition)
 */
export class DeviceDefinitionPackagingDistributorComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `DeviceDefinitionPackagingDistributorComponent` JSON to instantiate the DeviceDefinitionPackagingDistributorComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `DeviceDefinitionPackagingDistributorComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to DeviceDefinitionPackagingDistributorComponent
   * @returns DeviceDefinitionPackagingDistributorComponent data model or undefined for `DeviceDefinitionPackagingDistributorComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): DeviceDefinitionPackagingDistributorComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'DeviceDefinitionPackagingDistributorComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new DeviceDefinitionPackagingDistributorComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    fieldName = 'name';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setNameElement(datatype);
    }

    fieldName = 'organizationReference';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addOrganizationReference(datatype);
          }
        });
      }
  }

    return instance;
  }

  /**
   * DeviceDefinition.packaging.distributor.name Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Distributor\'s human-readable name
   * - **Definition:** Distributor\'s human-readable name.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private name?: StringType | undefined;

  /**
   * DeviceDefinition.packaging.distributor.organizationReference Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Distributor as an Organization resource
   * - **Definition:** Distributor as an Organization resource.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private organizationReference?: Reference[] | undefined;

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
  public setNameElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid DeviceDefinition.packaging.distributor.name; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid DeviceDefinition.packaging.distributor.name (${String(value)})`;
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
   * @returns the `organizationReference` property value as a Reference array
   */
  public getOrganizationReference(): Reference[] {
    return this.organizationReference ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `organizationReference` property.
   *
   * @decorator `@ReferenceTargets('DeviceDefinition.packaging.distributor.organizationReference', ['Organization',])`
   *
   * @param value - the `organizationReference` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('DeviceDefinition.packaging.distributor.organizationReference', [
    'Organization',
  ])
  public setOrganizationReference(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.organizationReference = value;
    } else {
      this.organizationReference = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `organizationReference` array property.
   *
   * @decorator `@ReferenceTargets('DeviceDefinition.packaging.distributor.organizationReference', ['Organization',])`
   *
   * @param value - the `organizationReference` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('DeviceDefinition.packaging.distributor.organizationReference', [
    'Organization',
  ])
  public addOrganizationReference(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initOrganizationReference();
      this.organizationReference?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `organizationReference` property exists and has a value; `false` otherwise
   */
  public hasOrganizationReference(): boolean {
    return isDefinedList<Reference>(this.organizationReference) && this.organizationReference.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `organizationReference` property
   */
  private initOrganizationReference(): void {
    if (!this.hasOrganizationReference()) {
      this.organizationReference = [] as Reference[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'DeviceDefinition.packaging.distributor';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.name,
      this.organizationReference,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): DeviceDefinitionPackagingDistributorComponent {
    const dest = new DeviceDefinitionPackagingDistributorComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: DeviceDefinitionPackagingDistributorComponent): void {
    super.copyValues(dest);
    dest.name = this.name?.copy();
    const organizationReferenceList = copyListValues<Reference>(this.organizationReference);
    dest.organizationReference = organizationReferenceList.length === 0 ? undefined : organizationReferenceList;
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

    if (this.hasOrganizationReference()) {
      setFhirComplexListJson(this.getOrganizationReference(), 'organizationReference', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * DeviceDefinitionVersionComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** The version of the device or software
 * - **Definition:** The version of the device or software.
 *
 * @category Data Models: Resource
 * @see [FHIR DeviceDefinition](http://hl7.org/fhir/StructureDefinition/DeviceDefinition)
 */
export class DeviceDefinitionVersionComponent extends BackboneElement implements IBackboneElement {
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
   * Parse the provided `DeviceDefinitionVersionComponent` JSON to instantiate the DeviceDefinitionVersionComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `DeviceDefinitionVersionComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to DeviceDefinitionVersionComponent
   * @returns DeviceDefinitionVersionComponent data model or undefined for `DeviceDefinitionVersionComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): DeviceDefinitionVersionComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'DeviceDefinitionVersionComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new DeviceDefinitionVersionComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

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
   * DeviceDefinition.version.type Element
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
   * DeviceDefinition.version.component Element
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
   * DeviceDefinition.version.value Element
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
      const optErrMsg = `Invalid DeviceDefinition.version.type; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid DeviceDefinition.version.component; Provided element is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid DeviceDefinition.version.value; Provided value is not an instance of StringType.`;
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
      const optErrMsg = `Invalid DeviceDefinition.version.value (${String(value)})`;
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
    return 'DeviceDefinition.version';
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
  public override copy(): DeviceDefinitionVersionComponent {
    const dest = new DeviceDefinitionVersionComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: DeviceDefinitionVersionComponent): void {
    super.copyValues(dest);
    dest.type_ = this.type_?.copy();
    dest.component = this.component?.copy();
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

    if (this.hasValueElement()) {
      setFhirPrimitiveJson<fhirString>(this.getValueElement(), 'value', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * DeviceDefinitionPropertyComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Inherent, essentially fixed, characteristics of this kind of device, e.g., time properties, size, etc
 * - **Definition:** Static or essentially fixed characteristics or features of this kind of device that are otherwise not captured in more specific attributes, e.g., time or timing attributes, resolution, accuracy, and physical attributes.
 * - **Comment:** Dynamic or current properties, such as settings, of an individual device are described using a Device instance-specific DeviceMetric and recorded using Observation.  Static characteristics of an individual device could also be documented in a [Device] instance. The Device instance\'s properties, and their values, could be, but need not be, the same as in the associated DeviceDefinition.
 *
 * @category Data Models: Resource
 * @see [FHIR DeviceDefinition](http://hl7.org/fhir/StructureDefinition/DeviceDefinition)
 */
export class DeviceDefinitionPropertyComponent extends BackboneElement implements IBackboneElement {
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

    const classMetadata: DecoratorMetadataObject | null = DeviceDefinitionPropertyComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for DeviceDefinitionPropertyComponent`;
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
   * DeviceDefinition.property.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Code that specifies the property being represented
   * - **Definition:** Code that specifies the property such as a resolution or color being represented.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private type_: CodeableConcept | null;

  /**
   * DeviceDefinition.property.value[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('DeviceDefinition.property.value[x]', ['Quantity','CodeableConcept','string','boolean','integer','Range','Attachment',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Value of the property
   * - **Definition:** The value of the property specified by the associated property.type code.
   * - **Comment:** This use of string or CodeableConcept is supported to address different purposes The text element of the valueCodeableConcept choice type is used for properties which would usually be coded (such as the size of an implant, or a security classification) but for which there is not currently an appropriate concept in the vocabulary (e.g., a custom implant size, or a security classification which depends on configuration. Otherwise the valueString choice type is used for textual descriptive device properties that cannot be expressed in other elements.
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
  @ChoiceDataTypesMeta('DeviceDefinition.property.value[x]',[
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
   * @returns the `value` property value as a DataType object; else null
   */
  public getValue(): IDataType | null {
    return this.value;
  }

  /**
   * Assigns the provided DataType object value to the `value` property.
   *
   * @decorator `@ChoiceDataTypes('DeviceDefinition.property.value[x]')`
   *
   * @param value - the `value` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('DeviceDefinition.property.value[x]')
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
        `DataType mismatch for DeviceDefinition.property.value[x]: Expected Quantity but encountered ${this.value.fhirType()}`,
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
        `DataType mismatch for DeviceDefinition.property.value[x]: Expected CodeableConcept but encountered ${this.value.fhirType()}`,
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
        `DataType mismatch for DeviceDefinition.property.value[x]: Expected StringType but encountered ${this.value.fhirType()}`,
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
        `DataType mismatch for DeviceDefinition.property.value[x]: Expected BooleanType but encountered ${this.value.fhirType()}`,
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
        `DataType mismatch for DeviceDefinition.property.value[x]: Expected IntegerType but encountered ${this.value.fhirType()}`,
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
        `DataType mismatch for DeviceDefinition.property.value[x]: Expected Range but encountered ${this.value.fhirType()}`,
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
        `DataType mismatch for DeviceDefinition.property.value[x]: Expected Attachment but encountered ${this.value.fhirType()}`,
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
    return 'DeviceDefinition.property';
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
    }

    if (this.hasValue()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getValue()!, 'value', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * DeviceDefinitionLinkComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** An associated device, attached to, used with, communicating with or linking a previous or new device model to the focal device
 * - **Definition:** An associated device, attached to, used with, communicating with or linking a previous or new device model to the focal device.
 *
 * @category Data Models: Resource
 * @see [FHIR DeviceDefinition](http://hl7.org/fhir/StructureDefinition/DeviceDefinition)
 */
export class DeviceDefinitionLinkComponent extends BackboneElement implements IBackboneElement {
  constructor(relation: Coding | null = null, relatedDevice: CodeableReference | null = null) {
    super();

    this.relation = null;
    if (isDefined<Coding>(relation)) {
      this.setRelation(relation);
    }

    this.relatedDevice = null;
    if (isDefined<CodeableReference>(relatedDevice)) {
      this.setRelatedDevice(relatedDevice);
    }
  }

  /**
   * Parse the provided `DeviceDefinitionLinkComponent` JSON to instantiate the DeviceDefinitionLinkComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `DeviceDefinitionLinkComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to DeviceDefinitionLinkComponent
   * @returns DeviceDefinitionLinkComponent data model or undefined for `DeviceDefinitionLinkComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): DeviceDefinitionLinkComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'DeviceDefinitionLinkComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new DeviceDefinitionLinkComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    fieldName = 'relation';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Coding | undefined = Coding.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setRelation(null);
      } else {
        instance.setRelation(datatype);
      }
    } else {
      instance.setRelation(null);
    }

    fieldName = 'relatedDevice';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableReference | undefined = CodeableReference.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setRelatedDevice(null);
      } else {
        instance.setRelatedDevice(datatype);
      }
    } else {
      instance.setRelatedDevice(null);
    }

    return instance;
  }

  /**
   * DeviceDefinition.link.relation Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The type indicates the relationship of the related device to the device instance
   * - **Definition:** The type indicates the relationship of the related device to the device instance.
   * - **FHIR Type:** `Coding`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private relation: Coding | null;

  /**
   * DeviceDefinition.link.relatedDevice Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A reference to the linked device
   * - **Definition:** A reference to the linked device.
   * - **FHIR Type:** `CodeableReference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/DeviceDefinition',
   *     ]
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private relatedDevice: CodeableReference | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `relation` property value as a Coding object if defined; else an empty Coding object
   */
  public getRelation(): Coding {
    return this.relation ?? new Coding();
  }

  /**
   * Assigns the provided Coding object value to the `relation` property.
   *
   * @param value - the `relation` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setRelation(value: Coding | undefined | null): this {
    if (isDefined<Coding>(value)) {
      const optErrMsg = `Invalid DeviceDefinition.link.relation; Provided element is not an instance of Coding.`;
      assertFhirType<Coding>(value, Coding, optErrMsg);
      this.relation = value;
    } else {
      this.relation = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `relation` property exists and has a value; `false` otherwise
   */
  public hasRelation(): boolean {
    return isDefined<Coding>(this.relation) && !this.relation.isEmpty();
  }

  /**
   * @returns the `relatedDevice` property value as a CodeableReference object if defined; else an empty CodeableReference object
   */
  public getRelatedDevice(): CodeableReference {
    return this.relatedDevice ?? new CodeableReference();
  }

  /**
   * Assigns the provided CodeableReference object value to the `relatedDevice` property.
   *
   * @param value - the `relatedDevice` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setRelatedDevice(value: CodeableReference | undefined | null): this {
    if (isDefined<CodeableReference>(value)) {
      const optErrMsg = `Invalid DeviceDefinition.link.relatedDevice; Provided element is not an instance of CodeableReference.`;
      assertFhirType<CodeableReference>(value, CodeableReference, optErrMsg);
      this.relatedDevice = value;
    } else {
      this.relatedDevice = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `relatedDevice` property exists and has a value; `false` otherwise
   */
  public hasRelatedDevice(): boolean {
    return isDefined<CodeableReference>(this.relatedDevice) && !this.relatedDevice.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'DeviceDefinition.link';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.relation,
      this.relatedDevice,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.relation, this.relatedDevice, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): DeviceDefinitionLinkComponent {
    const dest = new DeviceDefinitionLinkComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: DeviceDefinitionLinkComponent): void {
    super.copyValues(dest);
    dest.relation = this.relation ? this.relation.copy() : null;
    dest.relatedDevice = this.relatedDevice ? this.relatedDevice.copy() : null;
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

    if (this.hasRelation()) {
      setFhirComplexJson(this.getRelation(), 'relation', jsonObj);
    }

    if (this.hasRelatedDevice()) {
      setFhirComplexJson(this.getRelatedDevice(), 'relatedDevice', jsonObj);
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
   * - **Short:** A relevant substance that the device contains, may contain, or is made of
   * - **Definition:** A substance that the device contains, may contain, or is made of - for example latex - to be used to determine patient compatibility. This is not intended to represent the composition of the device, only the clinically relevant materials.
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
/**
 * DeviceDefinitionGuidelineComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Information aimed at providing directions for the usage of this model of device
 * - **Definition:** Information aimed at providing directions for the usage of this model of device.
 * - **Comment:** For more structured data, a ClinicalUseDefinition that points to the DeviceDefinition can be used.
 *
 * @category Data Models: Resource
 * @see [FHIR DeviceDefinition](http://hl7.org/fhir/StructureDefinition/DeviceDefinition)
 */
export class DeviceDefinitionGuidelineComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `DeviceDefinitionGuidelineComponent` JSON to instantiate the DeviceDefinitionGuidelineComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `DeviceDefinitionGuidelineComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to DeviceDefinitionGuidelineComponent
   * @returns DeviceDefinitionGuidelineComponent data model or undefined for `DeviceDefinitionGuidelineComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): DeviceDefinitionGuidelineComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'DeviceDefinitionGuidelineComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new DeviceDefinitionGuidelineComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'useContext';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: UsageContext | undefined = UsageContext.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addUseContext(datatype);
          }
        });
      }
    }

    fieldName = 'usageInstruction';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: MarkdownType | undefined = fhirParser.parseMarkdownType(dtJson, dtSiblingJson);
      instance.setUsageInstructionElement(datatype);
    }

    fieldName = 'relatedArtifact';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: RelatedArtifact | undefined = RelatedArtifact.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addRelatedArtifact(datatype);
          }
        });
      }
    }

    fieldName = 'indication';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addIndication(datatype);
          }
        });
      }
    }

    fieldName = 'contraindication';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addContraindication(datatype);
          }
        });
      }
    }

    fieldName = 'warning';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addWarning(datatype);
          }
        });
      }
    }

    fieldName = 'intendedUse';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setIntendedUseElement(datatype);
    }

    return instance;
  }

  /**
   * DeviceDefinition.guideline.useContext Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The circumstances that form the setting for using the device
   * - **Definition:** The circumstances that form the setting for using the device.
   * - **FHIR Type:** `UsageContext`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private useContext?: UsageContext[] | undefined;

  /**
   * DeviceDefinition.guideline.usageInstruction Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Detailed written and visual directions for the user on how to use the device
   * - **Definition:** Detailed written and visual directions for the user on how to use the device.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private usageInstruction?: MarkdownType | undefined;

  /**
   * DeviceDefinition.guideline.relatedArtifact Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A source of information or reference for this guideline
   * - **Definition:** A source of information or reference for this guideline.
   * - **FHIR Type:** `RelatedArtifact`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private relatedArtifact?: RelatedArtifact[] | undefined;

  /**
   * DeviceDefinition.guideline.indication Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A clinical condition for which the device was designed to be used
   * - **Definition:** A clinical condition for which the device was designed to be used.
   * - **Comment:** A ClinicalUseDefinition that points to the DeviceDefinition can be used if more structured data is needed.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private indication?: CodeableConcept[] | undefined;

  /**
   * DeviceDefinition.guideline.contraindication Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A specific situation when a device should not be used because it may cause harm
   * - **Definition:** A specific situation when a device should not be used because it may cause harm.
   * - **Comment:** A ClinicalUseDefinition that points to the DeviceDefinition can be used if more structured data is needed.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private contraindication?: CodeableConcept[] | undefined;

  /**
   * DeviceDefinition.guideline.warning Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Specific hazard alert information that a user needs to know before using the device
   * - **Definition:** Specific hazard alert information that a user needs to know before using the device.
   * - **Comment:** A ClinicalUseDefinition that points to the DeviceDefinition can be used if more structured data is needed.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private warning?: CodeableConcept[] | undefined;

  /**
   * DeviceDefinition.guideline.intendedUse Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A description of the general purpose or medical use of the device or its function
   * - **Definition:** A description of the general purpose or medical use of the device or its function.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private intendedUse?: StringType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `useContext` property value as a UsageContext array
   */
  public getUseContext(): UsageContext[] {
    return this.useContext ?? ([] as UsageContext[]);
  }

  /**
   * Assigns the provided UsageContext array value to the `useContext` property.
   *
   * @param value - the `useContext` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setUseContext(value: UsageContext[] | undefined): this {
    if (isDefinedList<UsageContext>(value)) {
      const optErrMsg = `Invalid DeviceDefinition.guideline.useContext; Provided value array has an element that is not an instance of UsageContext.`;
      assertFhirTypeList<UsageContext>(value, UsageContext, optErrMsg);
      this.useContext = value;
    } else {
      this.useContext = undefined;
    }
    return this;
  }

  /**
   * Add the provided UsageContext value to the `useContext` array property.
   *
   * @param value - the `useContext` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addUseContext(value: UsageContext | undefined): this {
    if (isDefined<UsageContext>(value)) {
      const optErrMsg = `Invalid DeviceDefinition.guideline.useContext; Provided element is not an instance of UsageContext.`;
      assertFhirType<UsageContext>(value, UsageContext, optErrMsg);
      this.initUseContext();
      this.useContext?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `useContext` property exists and has a value; `false` otherwise
   */
  public hasUseContext(): boolean {
    return isDefinedList<UsageContext>(this.useContext) && this.useContext.some((item: UsageContext) => !item.isEmpty());
  }

  /**
   * Initialize the `useContext` property
   */
  private initUseContext(): void {
    if(!this.hasUseContext()) {
      this.useContext = [] as UsageContext[];
    }
  }

  /**
   * @returns the `usageInstruction` property value as a MarkdownType object if defined; else an empty MarkdownType object
   */
  public getUsageInstructionElement(): MarkdownType {
    return this.usageInstruction ?? new MarkdownType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `usageInstruction` property.
   *
   * @param element - the `usageInstruction` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setUsageInstructionElement(element: MarkdownType | undefined): this {
    if (isDefined<MarkdownType>(element)) {
      const optErrMsg = `Invalid DeviceDefinition.guideline.usageInstruction; Provided element is not an instance of MarkdownType.`;
      assertFhirType<MarkdownType>(element, MarkdownType, optErrMsg);
      this.usageInstruction = element;
    } else {
      this.usageInstruction = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `usageInstruction` property exists and has a value; `false` otherwise
   */
  public hasUsageInstructionElement(): boolean {
    return isDefined<MarkdownType>(this.usageInstruction) && !this.usageInstruction.isEmpty();
  }

  /**
   * @returns the `usageInstruction` property value as a fhirMarkdown if defined; else undefined
   */
  public getUsageInstruction(): fhirMarkdown | undefined {
    return this.usageInstruction?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `usageInstruction` property.
   *
   * @param value - the `usageInstruction` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setUsageInstruction(value: fhirMarkdown | undefined): this {
    if (isDefined<fhirMarkdown>(value)) {
      const optErrMsg = `Invalid DeviceDefinition.guideline.usageInstruction (${String(value)})`;
      this.usageInstruction = new MarkdownType(parseFhirPrimitiveData(value, fhirMarkdownSchema, optErrMsg));
    } else {
      this.usageInstruction = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `usageInstruction` property exists and has a value; `false` otherwise
   */
  public hasUsageInstruction(): boolean {
    return this.hasUsageInstructionElement();
  }

  /**
   * @returns the `relatedArtifact` property value as a RelatedArtifact array
   */
  public getRelatedArtifact(): RelatedArtifact[] {
    return this.relatedArtifact ?? ([] as RelatedArtifact[]);
  }

  /**
   * Assigns the provided RelatedArtifact array value to the `relatedArtifact` property.
   *
   * @param value - the `relatedArtifact` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setRelatedArtifact(value: RelatedArtifact[] | undefined): this {
    if (isDefinedList<RelatedArtifact>(value)) {
      const optErrMsg = `Invalid DeviceDefinition.guideline.relatedArtifact; Provided value array has an element that is not an instance of RelatedArtifact.`;
      assertFhirTypeList<RelatedArtifact>(value, RelatedArtifact, optErrMsg);
      this.relatedArtifact = value;
    } else {
      this.relatedArtifact = undefined;
    }
    return this;
  }

  /**
   * Add the provided RelatedArtifact value to the `relatedArtifact` array property.
   *
   * @param value - the `relatedArtifact` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addRelatedArtifact(value: RelatedArtifact | undefined): this {
    if (isDefined<RelatedArtifact>(value)) {
      const optErrMsg = `Invalid DeviceDefinition.guideline.relatedArtifact; Provided element is not an instance of RelatedArtifact.`;
      assertFhirType<RelatedArtifact>(value, RelatedArtifact, optErrMsg);
      this.initRelatedArtifact();
      this.relatedArtifact?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `relatedArtifact` property exists and has a value; `false` otherwise
   */
  public hasRelatedArtifact(): boolean {
    return isDefinedList<RelatedArtifact>(this.relatedArtifact) && this.relatedArtifact.some((item: RelatedArtifact) => !item.isEmpty());
  }

  /**
   * Initialize the `relatedArtifact` property
   */
  private initRelatedArtifact(): void {
    if(!this.hasRelatedArtifact()) {
      this.relatedArtifact = [] as RelatedArtifact[];
    }
  }

  /**
   * @returns the `indication` property value as a CodeableConcept array
   */
  public getIndication(): CodeableConcept[] {
    return this.indication ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `indication` property.
   *
   * @param value - the `indication` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setIndication(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid DeviceDefinition.guideline.indication; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.indication = value;
    } else {
      this.indication = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `indication` array property.
   *
   * @param value - the `indication` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addIndication(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid DeviceDefinition.guideline.indication; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initIndication();
      this.indication?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `indication` property exists and has a value; `false` otherwise
   */
  public hasIndication(): boolean {
    return isDefinedList<CodeableConcept>(this.indication) && this.indication.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `indication` property
   */
  private initIndication(): void {
    if(!this.hasIndication()) {
      this.indication = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `contraindication` property value as a CodeableConcept array
   */
  public getContraindication(): CodeableConcept[] {
    return this.contraindication ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `contraindication` property.
   *
   * @param value - the `contraindication` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setContraindication(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid DeviceDefinition.guideline.contraindication; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.contraindication = value;
    } else {
      this.contraindication = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `contraindication` array property.
   *
   * @param value - the `contraindication` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addContraindication(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid DeviceDefinition.guideline.contraindication; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initContraindication();
      this.contraindication?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `contraindication` property exists and has a value; `false` otherwise
   */
  public hasContraindication(): boolean {
    return isDefinedList<CodeableConcept>(this.contraindication) && this.contraindication.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `contraindication` property
   */
  private initContraindication(): void {
    if(!this.hasContraindication()) {
      this.contraindication = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `warning` property value as a CodeableConcept array
   */
  public getWarning(): CodeableConcept[] {
    return this.warning ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `warning` property.
   *
   * @param value - the `warning` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setWarning(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid DeviceDefinition.guideline.warning; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.warning = value;
    } else {
      this.warning = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `warning` array property.
   *
   * @param value - the `warning` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addWarning(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid DeviceDefinition.guideline.warning; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initWarning();
      this.warning?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `warning` property exists and has a value; `false` otherwise
   */
  public hasWarning(): boolean {
    return isDefinedList<CodeableConcept>(this.warning) && this.warning.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `warning` property
   */
  private initWarning(): void {
    if(!this.hasWarning()) {
      this.warning = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `intendedUse` property value as a StringType object if defined; else an empty StringType object
   */
  public getIntendedUseElement(): StringType {
    return this.intendedUse ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `intendedUse` property.
   *
   * @param element - the `intendedUse` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setIntendedUseElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid DeviceDefinition.guideline.intendedUse; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.intendedUse = element;
    } else {
      this.intendedUse = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `intendedUse` property exists and has a value; `false` otherwise
   */
  public hasIntendedUseElement(): boolean {
    return isDefined<StringType>(this.intendedUse) && !this.intendedUse.isEmpty();
  }

  /**
   * @returns the `intendedUse` property value as a fhirString if defined; else undefined
   */
  public getIntendedUse(): fhirString | undefined {
    return this.intendedUse?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `intendedUse` property.
   *
   * @param value - the `intendedUse` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setIntendedUse(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid DeviceDefinition.guideline.intendedUse (${String(value)})`;
      this.intendedUse = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.intendedUse = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `intendedUse` property exists and has a value; `false` otherwise
   */
  public hasIntendedUse(): boolean {
    return this.hasIntendedUseElement();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'DeviceDefinition.guideline';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.useContext,
      this.usageInstruction,
      this.relatedArtifact,
      this.indication,
      this.contraindication,
      this.warning,
      this.intendedUse,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): DeviceDefinitionGuidelineComponent {
    const dest = new DeviceDefinitionGuidelineComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: DeviceDefinitionGuidelineComponent): void {
    super.copyValues(dest);
    const useContextList = copyListValues<UsageContext>(this.useContext);
    dest.useContext = useContextList.length === 0 ? undefined : useContextList;
    dest.usageInstruction = this.usageInstruction?.copy();
    const relatedArtifactList = copyListValues<RelatedArtifact>(this.relatedArtifact);
    dest.relatedArtifact = relatedArtifactList.length === 0 ? undefined : relatedArtifactList;
    const indicationList = copyListValues<CodeableConcept>(this.indication);
    dest.indication = indicationList.length === 0 ? undefined : indicationList;
    const contraindicationList = copyListValues<CodeableConcept>(this.contraindication);
    dest.contraindication = contraindicationList.length === 0 ? undefined : contraindicationList;
    const warningList = copyListValues<CodeableConcept>(this.warning);
    dest.warning = warningList.length === 0 ? undefined : warningList;
    dest.intendedUse = this.intendedUse?.copy();
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

    if (this.hasUseContext()) {
      setFhirComplexListJson(this.getUseContext(), 'useContext', jsonObj);
    }

    if (this.hasUsageInstructionElement()) {
      setFhirPrimitiveJson<fhirMarkdown>(this.getUsageInstructionElement(), 'usageInstruction', jsonObj);
    }

    if (this.hasRelatedArtifact()) {
      setFhirComplexListJson(this.getRelatedArtifact(), 'relatedArtifact', jsonObj);
    }

    if (this.hasIndication()) {
      setFhirComplexListJson(this.getIndication(), 'indication', jsonObj);
    }

    if (this.hasContraindication()) {
      setFhirComplexListJson(this.getContraindication(), 'contraindication', jsonObj);
    }

    if (this.hasWarning()) {
      setFhirComplexListJson(this.getWarning(), 'warning', jsonObj);
    }

    if (this.hasIntendedUseElement()) {
      setFhirPrimitiveJson<fhirString>(this.getIntendedUseElement(), 'intendedUse', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * DeviceDefinitionCorrectiveActionComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Tracking of latest field safety corrective action
 * - **Definition:** Tracking of latest field safety corrective action.
 *
 * @category Data Models: Resource
 * @see [FHIR DeviceDefinition](http://hl7.org/fhir/StructureDefinition/DeviceDefinition)
 */
export class DeviceDefinitionCorrectiveActionComponent extends BackboneElement implements IBackboneElement {
  constructor(recall: BooleanType | fhirBoolean | null = null, period: Period | null = null) {
    super();

    this.deviceCorrectiveactionscopeEnum = new DeviceCorrectiveactionscopeEnum();

    this.recall = null;
    if (isDefined<BooleanType | fhirBoolean>(recall)) {
      if (recall instanceof PrimitiveType) {
        this.setRecallElement(recall);
      } else {
        this.setRecall(recall);
      }
    }

    this.period = null;
    if (isDefined<Period>(period)) {
      this.setPeriod(period);
    }
  }

  /**
   * Parse the provided `DeviceDefinitionCorrectiveActionComponent` JSON to instantiate the DeviceDefinitionCorrectiveActionComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `DeviceDefinitionCorrectiveActionComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to DeviceDefinitionCorrectiveActionComponent
   * @returns DeviceDefinitionCorrectiveActionComponent data model or undefined for `DeviceDefinitionCorrectiveActionComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): DeviceDefinitionCorrectiveActionComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'DeviceDefinitionCorrectiveActionComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new DeviceDefinitionCorrectiveActionComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'recall';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setRecall(null);
      } else {
        instance.setRecallElement(datatype);
      }
    } else {
      instance.setRecall(null);
    }

    fieldName = 'scope';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setScopeElement(datatype);
    }

    fieldName = 'period';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Period | undefined = Period.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setPeriod(null);
      } else {
        instance.setPeriod(datatype);
      }
    } else {
      instance.setPeriod(null);
    }

    return instance;
  }

  /**
   * DeviceDefinition.correctiveAction.recall Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Whether the corrective action was a recall
   * - **Definition:** Whether the last corrective action known for this device was a recall.
   * - **Comment:** When a field safety action has been initiated but not yet resulted in a recall, this element will be set to \'false\'.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private recall: BooleanType | null;

  /**
   * FHIR CodeSystem: DeviceCorrectiveactionscope
   *
   * @see {@link DeviceCorrectiveactionscopeEnum }
   */
  private readonly deviceCorrectiveactionscopeEnum: DeviceCorrectiveactionscopeEnum;

  /**
   * DeviceDefinition.correctiveAction.scope Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** model | lot-numbers | serial-numbers
   * - **Definition:** The scope of the corrective action - whether the action targeted all units of a given device model, or only a specific set of batches identified by lot numbers, or individually identified devices identified by the serial name.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link DeviceCorrectiveactionscopeEnum }
   */
  private scope?: EnumCodeType | undefined;

  /**
   * DeviceDefinition.correctiveAction.period Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Start and end dates of the  corrective action
   * - **Definition:** Start and end dates of the  corrective action.
   * - **FHIR Type:** `Period`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private period: Period | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `recall` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getRecallElement(): BooleanType {
    return this.recall ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `recall` property.
   *
   * @param element - the `recall` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setRecallElement(element: BooleanType | undefined | null): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid DeviceDefinition.correctiveAction.recall; Provided value is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.recall = element;
    } else {
      this.recall = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `recall` property exists and has a value; `false` otherwise
   */
  public hasRecallElement(): boolean {
    return isDefined<BooleanType>(this.recall) && !this.recall.isEmpty();
  }

  /**
   * @returns the `recall` property value as a fhirBoolean if defined; else null
   */
  public getRecall(): fhirBoolean | null {
    if (this.recall?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.recall.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `recall` property.
   *
   * @param value - the `recall` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setRecall(value: fhirBoolean | undefined | null): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid DeviceDefinition.correctiveAction.recall (${String(value)})`;
      this.recall = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.recall = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `recall` property exists and has a value; `false` otherwise
   */
  public hasRecall(): boolean {
    return this.hasRecallElement();
  }

  /**
   * @returns the `scope` property value as a EnumCodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link DeviceCorrectiveactionscopeEnum }
   */
  public getScopeEnumType(): EnumCodeType | undefined {
    return this.scope;
  }

  /**
   * Assigns the provided EnumCodeType value to the `scope` property.
   *
   * @param enumType - the `scope` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code values
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link DeviceCorrectiveactionscopeEnum }
   */
  public setScopeEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = 'Invalid DeviceDefinition.correctiveAction.scope';
      assertEnumCodeType<DeviceCorrectiveactionscopeEnum>(enumType, DeviceCorrectiveactionscopeEnum, errMsgPrefix);
      this.scope = enumType;
    } else {
      this.scope = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `scope` property exists and has a value; `false` otherwise
   */
  public hasScopeEnumType(): boolean {
    return isDefined<EnumCodeType>(this.scope) && !this.scope.isEmpty() && this.scope.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `scope` property value as a CodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link DeviceCorrectiveactionscopeEnum }
   */
  public getScopeElement(): CodeType | undefined {
    if (this.scope === undefined) {
      return undefined;
    }
    return this.scope as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `scope` property.
   *
   * @param element - the `scope` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link DeviceCorrectiveactionscopeEnum }
   */
  public setScopeElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid DeviceDefinition.correctiveAction.scope; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.scope = new EnumCodeType(element, this.deviceCorrectiveactionscopeEnum);
    } else {
      this.scope = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `scope` property exists and has a value; `false` otherwise
   */
  public hasScopeElement(): boolean {
    return this.hasScopeEnumType();
  }

  /**
   * @returns the `scope` property value as a fhirCode if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link DeviceCorrectiveactionscopeEnum }
   */
  public getScope(): fhirCode | undefined {
    if (this.scope === undefined) {
      return undefined;
    }
    return this.scope.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `scope` property.
   *
   * @param value - the `scope` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link DeviceCorrectiveactionscopeEnum }
   */
  public setScope(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid DeviceDefinition.correctiveAction.scope; Provided value is not an instance of fhirCode.`;
      this.scope = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.deviceCorrectiveactionscopeEnum);
    } else {
      this.scope = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `scope` property exists and has a value; `false` otherwise
   */
  public hasScope(): boolean {
    return this.hasScopeEnumType();
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
  public setPeriod(value: Period | undefined | null): this {
    if (isDefined<Period>(value)) {
      const optErrMsg = `Invalid DeviceDefinition.correctiveAction.period; Provided element is not an instance of Period.`;
      assertFhirType<Period>(value, Period, optErrMsg);
      this.period = value;
    } else {
      this.period = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `period` property exists and has a value; `false` otherwise
   */
  public hasPeriod(): boolean {
    return isDefined<Period>(this.period) && !this.period.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'DeviceDefinition.correctiveAction';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.recall,
      this.scope,
      this.period,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.recall, this.period, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): DeviceDefinitionCorrectiveActionComponent {
    const dest = new DeviceDefinitionCorrectiveActionComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: DeviceDefinitionCorrectiveActionComponent): void {
    super.copyValues(dest);
    dest.recall = this.recall ? this.recall.copy() : null;
    dest.scope = this.scope?.copy();
    dest.period = this.period ? this.period.copy() : null;
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

    if (this.hasRecallElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getRecallElement(), 'recall', jsonObj);
    }

    if (this.hasScopeElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getScopeElement()!, 'scope', jsonObj);
    }

    if (this.hasPeriod()) {
      setFhirComplexJson(this.getPeriod(), 'period', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * DeviceDefinitionChargeItemComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Billing code or reference associated with the device
 * - **Definition:** Billing code or reference associated with the device.
 *
 * @category Data Models: Resource
 * @see [FHIR DeviceDefinition](http://hl7.org/fhir/StructureDefinition/DeviceDefinition)
 */
export class DeviceDefinitionChargeItemComponent extends BackboneElement implements IBackboneElement {
  constructor(chargeItemCode: CodeableReference | null = null, count: Quantity | null = null) {
    super();

    this.chargeItemCode = null;
    if (isDefined<CodeableReference>(chargeItemCode)) {
      this.setChargeItemCode(chargeItemCode);
    }

    this.count = null;
    if (isDefined<Quantity>(count)) {
      this.setCount(count);
    }
  }

  /**
   * Parse the provided `DeviceDefinitionChargeItemComponent` JSON to instantiate the DeviceDefinitionChargeItemComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `DeviceDefinitionChargeItemComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to DeviceDefinitionChargeItemComponent
   * @returns DeviceDefinitionChargeItemComponent data model or undefined for `DeviceDefinitionChargeItemComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): DeviceDefinitionChargeItemComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'DeviceDefinitionChargeItemComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new DeviceDefinitionChargeItemComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    fieldName = 'chargeItemCode';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableReference | undefined = CodeableReference.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setChargeItemCode(null);
      } else {
        instance.setChargeItemCode(datatype);
      }
    } else {
      instance.setChargeItemCode(null);
    }

    fieldName = 'count';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Quantity | undefined = Quantity.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setCount(null);
      } else {
        instance.setCount(datatype);
      }
    } else {
      instance.setCount(null);
    }

    fieldName = 'effectivePeriod';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Period | undefined = Period.parse(classJsonObj[fieldName]!, sourceField);
      instance.setEffectivePeriod(datatype);
    }

    fieldName = 'useContext';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: UsageContext | undefined = UsageContext.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addUseContext(datatype);
          }
        });
      }
    }

    return instance;
  }

  /**
   * DeviceDefinition.chargeItem.chargeItemCode Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The code or reference for the charge item
   * - **Definition:** The code or reference for the charge item.
   * - **FHIR Type:** `CodeableReference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/ChargeItemDefinition',
   *     ]
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private chargeItemCode: CodeableReference | null;

  /**
   * DeviceDefinition.chargeItem.count Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Coefficient applicable to the billing code
   * - **Definition:** Coefficient applicable to the billing code.
   * - **FHIR Type:** `Quantity`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private count: Quantity | null;

  /**
   * DeviceDefinition.chargeItem.effectivePeriod Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A specific time period in which this charge item applies
   * - **Definition:** A specific time period in which this charge item applies.
   * - **FHIR Type:** `Period`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private effectivePeriod?: Period | undefined;

  /**
   * DeviceDefinition.chargeItem.useContext Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The context to which this charge item applies
   * - **Definition:** The context to which this charge item applies.
   * - **FHIR Type:** `UsageContext`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private useContext?: UsageContext[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `chargeItemCode` property value as a CodeableReference object if defined; else an empty CodeableReference object
   */
  public getChargeItemCode(): CodeableReference {
    return this.chargeItemCode ?? new CodeableReference();
  }

  /**
   * Assigns the provided CodeableReference object value to the `chargeItemCode` property.
   *
   * @param value - the `chargeItemCode` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setChargeItemCode(value: CodeableReference | undefined | null): this {
    if (isDefined<CodeableReference>(value)) {
      const optErrMsg = `Invalid DeviceDefinition.chargeItem.chargeItemCode; Provided element is not an instance of CodeableReference.`;
      assertFhirType<CodeableReference>(value, CodeableReference, optErrMsg);
      this.chargeItemCode = value;
    } else {
      this.chargeItemCode = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `chargeItemCode` property exists and has a value; `false` otherwise
   */
  public hasChargeItemCode(): boolean {
    return isDefined<CodeableReference>(this.chargeItemCode) && !this.chargeItemCode.isEmpty();
  }

  /**
   * @returns the `count` property value as a Quantity object if defined; else an empty Quantity object
   */
  public getCount(): Quantity {
    return this.count ?? new Quantity();
  }

  /**
   * Assigns the provided Quantity object value to the `count` property.
   *
   * @param value - the `count` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCount(value: Quantity | undefined | null): this {
    if (isDefined<Quantity>(value)) {
      const optErrMsg = `Invalid DeviceDefinition.chargeItem.count; Provided element is not an instance of Quantity.`;
      assertFhirType<Quantity>(value, Quantity, optErrMsg);
      this.count = value;
    } else {
      this.count = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `count` property exists and has a value; `false` otherwise
   */
  public hasCount(): boolean {
    return isDefined<Quantity>(this.count) && !this.count.isEmpty();
  }

  /**
   * @returns the `effectivePeriod` property value as a Period object if defined; else an empty Period object
   */
  public getEffectivePeriod(): Period {
    return this.effectivePeriod ?? new Period();
  }

  /**
   * Assigns the provided EffectivePeriod object value to the `effectivePeriod` property.
   *
   * @param value - the `effectivePeriod` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setEffectivePeriod(value: Period | undefined): this {
    if (isDefined<Period>(value)) {
      const optErrMsg = `Invalid DeviceDefinition.chargeItem.effectivePeriod; Provided element is not an instance of Period.`;
      assertFhirType<Period>(value, Period, optErrMsg);
      this.effectivePeriod = value;
    } else {
      this.effectivePeriod = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `effectivePeriod` property exists and has a value; `false` otherwise
   */
  public hasEffectivePeriod(): boolean {
    return isDefined<Period>(this.effectivePeriod) && !this.effectivePeriod.isEmpty();
  }

  /**
   * @returns the `useContext` property value as a UsageContext array
   */
  public getUseContext(): UsageContext[] {
    return this.useContext ?? ([] as UsageContext[]);
  }

  /**
   * Assigns the provided UsageContext array value to the `useContext` property.
   *
   * @param value - the `useContext` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setUseContext(value: UsageContext[] | undefined): this {
    if (isDefinedList<UsageContext>(value)) {
      const optErrMsg = `Invalid DeviceDefinition.chargeItem.useContext; Provided value array has an element that is not an instance of UsageContext.`;
      assertFhirTypeList<UsageContext>(value, UsageContext, optErrMsg);
      this.useContext = value;
    } else {
      this.useContext = undefined;
    }
    return this;
  }

  /**
   * Add the provided UsageContext value to the `useContext` array property.
   *
   * @param value - the `useContext` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addUseContext(value: UsageContext | undefined): this {
    if (isDefined<UsageContext>(value)) {
      const optErrMsg = `Invalid DeviceDefinition.chargeItem.useContext; Provided element is not an instance of UsageContext.`;
      assertFhirType<UsageContext>(value, UsageContext, optErrMsg);
      this.initUseContext();
      this.useContext?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `useContext` property exists and has a value; `false` otherwise
   */
  public hasUseContext(): boolean {
    return isDefinedList<UsageContext>(this.useContext) && this.useContext.some((item: UsageContext) => !item.isEmpty());
  }

  /**
   * Initialize the `useContext` property
   */
  private initUseContext(): void {
    if(!this.hasUseContext()) {
      this.useContext = [] as UsageContext[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'DeviceDefinition.chargeItem';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.chargeItemCode,
      this.count,
      this.effectivePeriod,
      this.useContext,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.chargeItemCode, this.count, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): DeviceDefinitionChargeItemComponent {
    const dest = new DeviceDefinitionChargeItemComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: DeviceDefinitionChargeItemComponent): void {
    super.copyValues(dest);
    dest.chargeItemCode = this.chargeItemCode ? this.chargeItemCode.copy() : null;
    dest.count = this.count ? this.count.copy() : null;
    dest.effectivePeriod = this.effectivePeriod?.copy();
    const useContextList = copyListValues<UsageContext>(this.useContext);
    dest.useContext = useContextList.length === 0 ? undefined : useContextList;
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

    if (this.hasChargeItemCode()) {
      setFhirComplexJson(this.getChargeItemCode(), 'chargeItemCode', jsonObj);
    }

    if (this.hasCount()) {
      setFhirComplexJson(this.getCount(), 'count', jsonObj);
    }

    if (this.hasEffectivePeriod()) {
      setFhirComplexJson(this.getEffectivePeriod(), 'effectivePeriod', jsonObj);
    }

    if (this.hasUseContext()) {
      setFhirComplexListJson(this.getUseContext(), 'useContext', jsonObj);
    }

    return jsonObj;
  }
}
