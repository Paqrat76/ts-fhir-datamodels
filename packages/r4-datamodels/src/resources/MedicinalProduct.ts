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
 * MedicinalProduct Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/MedicinalProduct
 * StructureDefinition.name: MedicinalProduct
 * StructureDefinition.description: Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use).
 * StructureDefinition.fhirVersion: 4.0.1
 *
 * For questions, suggestions, or bugs, please open an issue at [GitHub ts-fhir-datamodels/issues](https://github.com/Paqrat76/ts-fhir-datamodels/issues).
 *
 * @packageDocumentation
 */

import {
  BackboneElement,
  ChoiceDataTypes,
  ChoiceDataTypesMeta,
  DateTimeType,
  DomainResource,
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
  assertFhirType,
  assertFhirTypeList,
  assertIsDefined,
  copyListValues,
  fhirDateTime,
  fhirDateTimeSchema,
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
  setFhirBackboneElementListJson,
  setFhirComplexJson,
  setFhirComplexListJson,
  setFhirPrimitiveJson,
  setFhirPrimitiveListJson,
  setPolymorphicValueJson,
} from '@paq-ts-fhir/fhir-core';
import { CodeableConcept, Coding, Identifier, MarketingStatus, PARSABLE_DATATYPE_MAP, Reference } from '../complex-types/complex-datatypes';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Symbol.metadata polyfill secret sauce for decorator metadata
(Symbol.metadata as any) ??= Symbol('Symbol.metadata');

/**
 * MedicinalProduct Class
 *
 * @remarks
 * Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use).
 *
 * **FHIR Specification**
 * - **Short:** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use)
 * - **Definition:** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use).
 * - **FHIR Version:** 4.0.1
 *
 * @category Data Models: Resource
 * @see [FHIR MedicinalProduct](http://hl7.org/fhir/StructureDefinition/MedicinalProduct)
 */
export class MedicinalProduct extends DomainResource implements IDomainResource {
  constructor(name: MedicinalProductNameComponent[] | null = null) {
    super();

    this.name = null;
    if (isDefinedList<MedicinalProductNameComponent>(name)) {
      this.setName(name);
    }
  }

  /**
   * Parse the provided `MedicinalProduct` JSON to instantiate the MedicinalProduct data model.
   *
   * @param sourceJson - JSON representing FHIR `MedicinalProduct`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to MedicinalProduct
   * @returns MedicinalProduct data model or undefined for `MedicinalProduct`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): MedicinalProduct | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'MedicinalProduct';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new MedicinalProduct();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'MedicinalProduct');
    fhirParser.processDomainResourceJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

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

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setType(datatype);
    }

    fieldName = 'domain';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Coding | undefined = Coding.parse(classJsonObj[fieldName]!, sourceField);
      instance.setDomain(datatype);
    }

    fieldName = 'combinedPharmaceuticalDoseForm';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setCombinedPharmaceuticalDoseForm(datatype);
    }

    fieldName = 'legalStatusOfSupply';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setLegalStatusOfSupply(datatype);
    }

    fieldName = 'additionalMonitoringIndicator';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setAdditionalMonitoringIndicator(datatype);
    }

    fieldName = 'specialMeasures';
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
            instance.addSpecialMeasuresElement(datatype);
          }
        });
      }
    }

    fieldName = 'paediatricUseIndicator';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setPaediatricUseIndicator(datatype);
    }

    fieldName = 'productClassification';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addProductClassification(datatype);
          }
        });
      }
    }

    fieldName = 'marketingStatus';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: MarketingStatus | undefined = MarketingStatus.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addMarketingStatus(datatype);
          }
        });
      }
    }

    fieldName = 'pharmaceuticalProduct';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addPharmaceuticalProduct(datatype);
          }
        });
      }
  }

    fieldName = 'packagedMedicinalProduct';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addPackagedMedicinalProduct(datatype);
          }
        });
      }
  }

    fieldName = 'attachedDocument';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addAttachedDocument(datatype);
          }
        });
      }
  }

    fieldName = 'masterFile';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addMasterFile(datatype);
          }
        });
      }
  }

    fieldName = 'contact';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addContact(datatype);
          }
        });
      }
  }

    fieldName = 'clinicalTrial';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addClinicalTrial(datatype);
          }
        });
      }
  }

    fieldName = 'name';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] === null) {
        instance.setName(null);
      } else {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: MedicinalProductNameComponent | undefined = MedicinalProductNameComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component === undefined) {
            instance.setName(null);
          } else {
            instance.addName(component);
          }
        });
      }
    } else {
      instance.setName(null);
    }

    fieldName = 'crossReference';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Identifier | undefined = Identifier.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addCrossReference(datatype);
          }
        });
      }
    }

    fieldName = 'manufacturingBusinessOperation';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: MedicinalProductManufacturingBusinessOperationComponent | undefined = MedicinalProductManufacturingBusinessOperationComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addManufacturingBusinessOperation(component);
          }
        });
      }
    }

    fieldName = 'specialDesignation';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: MedicinalProductSpecialDesignationComponent | undefined = MedicinalProductSpecialDesignationComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addSpecialDesignation(component);
          }
        });
      }
    }

    return instance;
  }

  /**
   * MedicinalProduct.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Business identifier for this product. Could be an MPID
   * - **Definition:** Business identifier for this product. Could be an MPID.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier[] | undefined;

  /**
   * MedicinalProduct.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Regulatory type, e.g. Investigational or Authorized
   * - **Definition:** Regulatory type, e.g. Investigational or Authorized.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private type_?: CodeableConcept | undefined;

  /**
   * MedicinalProduct.domain Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** If this medicine applies to human or veterinary uses
   * - **Definition:** If this medicine applies to human or veterinary uses.
   * - **FHIR Type:** `Coding`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private domain?: Coding | undefined;

  /**
   * MedicinalProduct.combinedPharmaceuticalDoseForm Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The dose form for a single part product, or combined form of a multiple part product
   * - **Definition:** The dose form for a single part product, or combined form of a multiple part product.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private combinedPharmaceuticalDoseForm?: CodeableConcept | undefined;

  /**
   * MedicinalProduct.legalStatusOfSupply Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The legal status of supply of the medicinal product as classified by the regulator
   * - **Definition:** The legal status of supply of the medicinal product as classified by the regulator.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private legalStatusOfSupply?: CodeableConcept | undefined;

  /**
   * MedicinalProduct.additionalMonitoringIndicator Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Whether the Medicinal Product is subject to additional monitoring for regulatory reasons
   * - **Definition:** Whether the Medicinal Product is subject to additional monitoring for regulatory reasons.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private additionalMonitoringIndicator?: CodeableConcept | undefined;

  /**
   * MedicinalProduct.specialMeasures Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Whether the Medicinal Product is subject to special measures for regulatory reasons
   * - **Definition:** Whether the Medicinal Product is subject to special measures for regulatory reasons.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private specialMeasures?: StringType[] | undefined;

  /**
   * MedicinalProduct.paediatricUseIndicator Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** If authorised for use in children
   * - **Definition:** If authorised for use in children.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private paediatricUseIndicator?: CodeableConcept | undefined;

  /**
   * MedicinalProduct.productClassification Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Allows the product to be classified by various systems
   * - **Definition:** Allows the product to be classified by various systems.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private productClassification?: CodeableConcept[] | undefined;

  /**
   * MedicinalProduct.marketingStatus Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Marketing status of the medicinal product, in contrast to marketing authorizaton
   * - **Definition:** Marketing status of the medicinal product, in contrast to marketing authorizaton.
   * - **FHIR Type:** `MarketingStatus`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private marketingStatus?: MarketingStatus[] | undefined;

  /**
   * MedicinalProduct.pharmaceuticalProduct Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Pharmaceutical aspects of product
   * - **Definition:** Pharmaceutical aspects of product.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/MedicinalProductPharmaceutical',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private pharmaceuticalProduct?: Reference[] | undefined;

  /**
   * MedicinalProduct.packagedMedicinalProduct Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Package representation for the product
   * - **Definition:** Package representation for the product.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/MedicinalProductPackaged',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private packagedMedicinalProduct?: Reference[] | undefined;

  /**
   * MedicinalProduct.attachedDocument Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Supporting documentation, typically for regulatory submission
   * - **Definition:** Supporting documentation, typically for regulatory submission.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/DocumentReference',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private attachedDocument?: Reference[] | undefined;

  /**
   * MedicinalProduct.masterFile Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A master file for to the medicinal product (e.g. Pharmacovigilance System Master File)
   * - **Definition:** A master file for to the medicinal product (e.g. Pharmacovigilance System Master File).
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/DocumentReference',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private masterFile?: Reference[] | undefined;

  /**
   * MedicinalProduct.contact Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A product specific contact, person (in a role), or an organization
   * - **Definition:** A product specific contact, person (in a role), or an organization.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private contact?: Reference[] | undefined;

  /**
   * MedicinalProduct.clinicalTrial Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Clinical trials or studies that this product is involved in
   * - **Definition:** Clinical trials or studies that this product is involved in.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/ResearchStudy',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private clinicalTrial?: Reference[] | undefined;

  /**
   * MedicinalProduct.name Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The product\'s name, including full name and possibly coded parts
   * - **Definition:** The product\'s name, including full name and possibly coded parts.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 1..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private name: MedicinalProductNameComponent[] | null;

  /**
   * MedicinalProduct.crossReference Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Reference to another product, e.g. for linking authorised to investigational product
   * - **Definition:** Reference to another product, e.g. for linking authorised to investigational product.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private crossReference?: Identifier[] | undefined;

  /**
   * MedicinalProduct.manufacturingBusinessOperation Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** An operation applied to the product, for manufacturing or adminsitrative purpose
   * - **Definition:** An operation applied to the product, for manufacturing or adminsitrative purpose.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private manufacturingBusinessOperation?: MedicinalProductManufacturingBusinessOperationComponent[] | undefined;

  /**
   * MedicinalProduct.specialDesignation Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Indicates if the medicinal product has an orphan designation for the treatment of a rare disease
   * - **Definition:** Indicates if the medicinal product has an orphan designation for the treatment of a rare disease.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private specialDesignation?: MedicinalProductSpecialDesignationComponent[] | undefined;

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
      const optErrMsg = `Invalid MedicinalProduct.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid MedicinalProduct.identifier; Provided element is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid MedicinalProduct.type; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `domain` property value as a Coding object if defined; else an empty Coding object
   */
  public getDomain(): Coding {
    return this.domain ?? new Coding();
  }

  /**
   * Assigns the provided Domain object value to the `domain` property.
   *
   * @param value - the `domain` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDomain(value: Coding | undefined): this {
    if (isDefined<Coding>(value)) {
      const optErrMsg = `Invalid MedicinalProduct.domain; Provided element is not an instance of Coding.`;
      assertFhirType<Coding>(value, Coding, optErrMsg);
      this.domain = value;
    } else {
      this.domain = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `domain` property exists and has a value; `false` otherwise
   */
  public hasDomain(): boolean {
    return isDefined<Coding>(this.domain) && !this.domain.isEmpty();
  }

  /**
   * @returns the `combinedPharmaceuticalDoseForm` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getCombinedPharmaceuticalDoseForm(): CodeableConcept {
    return this.combinedPharmaceuticalDoseForm ?? new CodeableConcept();
  }

  /**
   * Assigns the provided CombinedPharmaceuticalDoseForm object value to the `combinedPharmaceuticalDoseForm` property.
   *
   * @param value - the `combinedPharmaceuticalDoseForm` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCombinedPharmaceuticalDoseForm(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid MedicinalProduct.combinedPharmaceuticalDoseForm; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.combinedPharmaceuticalDoseForm = value;
    } else {
      this.combinedPharmaceuticalDoseForm = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `combinedPharmaceuticalDoseForm` property exists and has a value; `false` otherwise
   */
  public hasCombinedPharmaceuticalDoseForm(): boolean {
    return isDefined<CodeableConcept>(this.combinedPharmaceuticalDoseForm) && !this.combinedPharmaceuticalDoseForm.isEmpty();
  }

  /**
   * @returns the `legalStatusOfSupply` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getLegalStatusOfSupply(): CodeableConcept {
    return this.legalStatusOfSupply ?? new CodeableConcept();
  }

  /**
   * Assigns the provided LegalStatusOfSupply object value to the `legalStatusOfSupply` property.
   *
   * @param value - the `legalStatusOfSupply` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setLegalStatusOfSupply(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid MedicinalProduct.legalStatusOfSupply; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.legalStatusOfSupply = value;
    } else {
      this.legalStatusOfSupply = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `legalStatusOfSupply` property exists and has a value; `false` otherwise
   */
  public hasLegalStatusOfSupply(): boolean {
    return isDefined<CodeableConcept>(this.legalStatusOfSupply) && !this.legalStatusOfSupply.isEmpty();
  }

  /**
   * @returns the `additionalMonitoringIndicator` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getAdditionalMonitoringIndicator(): CodeableConcept {
    return this.additionalMonitoringIndicator ?? new CodeableConcept();
  }

  /**
   * Assigns the provided AdditionalMonitoringIndicator object value to the `additionalMonitoringIndicator` property.
   *
   * @param value - the `additionalMonitoringIndicator` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAdditionalMonitoringIndicator(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid MedicinalProduct.additionalMonitoringIndicator; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.additionalMonitoringIndicator = value;
    } else {
      this.additionalMonitoringIndicator = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `additionalMonitoringIndicator` property exists and has a value; `false` otherwise
   */
  public hasAdditionalMonitoringIndicator(): boolean {
    return isDefined<CodeableConcept>(this.additionalMonitoringIndicator) && !this.additionalMonitoringIndicator.isEmpty();
  }

  /**
   * @returns the `specialMeasures` property value as a StringType array
   */
  public getSpecialMeasuresElement(): StringType[] {
    return this.specialMeasures ?? ([] as StringType[]);
  }

  /**
   * Assigns the provided StringType array value to the `specialMeasures` property.
   *
   * @param element - the `specialMeasures` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSpecialMeasuresElement(element: StringType[] | undefined): this {
    if (isDefinedList<StringType>(element)) {
      const optErrMsg = `Invalid MedicinalProduct.specialMeasures; Provided value array has an element that is not an instance of StringType.`;
      assertFhirTypeList<StringType>(element, StringType, optErrMsg);
      this.specialMeasures = element;
    } else {
      this.specialMeasures = undefined;
    }
    return this;
  }

  /**
   * Add the provided StringType value to the `specialMeasures` array property.
   *
   * @param element - the `specialMeasures` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addSpecialMeasuresElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid MedicinalProduct.specialMeasures; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.initSpecialMeasures();
      this.specialMeasures?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `specialMeasures` property exists and has a value; `false` otherwise
   */
  public hasSpecialMeasuresElement(): boolean {
    return isDefinedList<StringType>(this.specialMeasures) && this.specialMeasures.some((item: StringType) => !item.isEmpty());
  }

  /**
   * @returns the `specialMeasures` property value as a fhirString array
   */
  public getSpecialMeasures(): fhirString[] {
    this.initSpecialMeasures();
    const specialMeasuresValues = [] as fhirString[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.specialMeasures!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        specialMeasuresValues.push(value);
      }
    }
    return specialMeasuresValues;
  }

  /**
   * Assigns the provided primitive value array to the `specialMeasures` property.
   *
   * @param value - the `specialMeasures` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSpecialMeasures(value: fhirString[] | undefined): this {
    if (isDefinedList<fhirString>(value)) {
      const specialMeasuresElements = [] as StringType[];
      for (const specialMeasuresValue of value) {
        const optErrMsg = `Invalid MedicinalProduct.specialMeasures array item (${String(specialMeasuresValue)})`;
        const element = new StringType(parseFhirPrimitiveData(specialMeasuresValue, fhirStringSchema, optErrMsg));
        specialMeasuresElements.push(element);
      }
      this.specialMeasures = specialMeasuresElements;
    } else {
      this.specialMeasures = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `specialMeasures` array property.
   *
   * @param value - the `specialMeasures` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addSpecialMeasures(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid MedicinalProduct.specialMeasures array item (${String(value)})`;
      const element = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
      this.initSpecialMeasures();
      this.addSpecialMeasuresElement(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `specialMeasures` property exists and has a value; `false` otherwise
   */
  public hasSpecialMeasures(): boolean {
    return this.hasSpecialMeasuresElement();
  }

  /**
   * Initialize the `specialMeasures` property
   */
  private initSpecialMeasures(): void {
    if (!this.hasSpecialMeasures()) {
      this.specialMeasures = [] as StringType[];
    }
  }

  /**
   * @returns the `paediatricUseIndicator` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getPaediatricUseIndicator(): CodeableConcept {
    return this.paediatricUseIndicator ?? new CodeableConcept();
  }

  /**
   * Assigns the provided PaediatricUseIndicator object value to the `paediatricUseIndicator` property.
   *
   * @param value - the `paediatricUseIndicator` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPaediatricUseIndicator(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid MedicinalProduct.paediatricUseIndicator; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.paediatricUseIndicator = value;
    } else {
      this.paediatricUseIndicator = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `paediatricUseIndicator` property exists and has a value; `false` otherwise
   */
  public hasPaediatricUseIndicator(): boolean {
    return isDefined<CodeableConcept>(this.paediatricUseIndicator) && !this.paediatricUseIndicator.isEmpty();
  }

  /**
   * @returns the `productClassification` property value as a CodeableConcept array
   */
  public getProductClassification(): CodeableConcept[] {
    return this.productClassification ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `productClassification` property.
   *
   * @param value - the `productClassification` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setProductClassification(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid MedicinalProduct.productClassification; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.productClassification = value;
    } else {
      this.productClassification = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `productClassification` array property.
   *
   * @param value - the `productClassification` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addProductClassification(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid MedicinalProduct.productClassification; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initProductClassification();
      this.productClassification?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `productClassification` property exists and has a value; `false` otherwise
   */
  public hasProductClassification(): boolean {
    return isDefinedList<CodeableConcept>(this.productClassification) && this.productClassification.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `productClassification` property
   */
  private initProductClassification(): void {
    if(!this.hasProductClassification()) {
      this.productClassification = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `marketingStatus` property value as a MarketingStatus array
   */
  public getMarketingStatus(): MarketingStatus[] {
    return this.marketingStatus ?? ([] as MarketingStatus[]);
  }

  /**
   * Assigns the provided MarketingStatus array value to the `marketingStatus` property.
   *
   * @param value - the `marketingStatus` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setMarketingStatus(value: MarketingStatus[] | undefined): this {
    if (isDefinedList<MarketingStatus>(value)) {
      const optErrMsg = `Invalid MedicinalProduct.marketingStatus; Provided value array has an element that is not an instance of MarketingStatus.`;
      assertFhirTypeList<MarketingStatus>(value, MarketingStatus, optErrMsg);
      this.marketingStatus = value;
    } else {
      this.marketingStatus = undefined;
    }
    return this;
  }

  /**
   * Add the provided MarketingStatus value to the `marketingStatus` array property.
   *
   * @param value - the `marketingStatus` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addMarketingStatus(value: MarketingStatus | undefined): this {
    if (isDefined<MarketingStatus>(value)) {
      const optErrMsg = `Invalid MedicinalProduct.marketingStatus; Provided element is not an instance of MarketingStatus.`;
      assertFhirType<MarketingStatus>(value, MarketingStatus, optErrMsg);
      this.initMarketingStatus();
      this.marketingStatus?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `marketingStatus` property exists and has a value; `false` otherwise
   */
  public hasMarketingStatus(): boolean {
    return isDefinedList<MarketingStatus>(this.marketingStatus) && this.marketingStatus.some((item: MarketingStatus) => !item.isEmpty());
  }

  /**
   * Initialize the `marketingStatus` property
   */
  private initMarketingStatus(): void {
    if(!this.hasMarketingStatus()) {
      this.marketingStatus = [] as MarketingStatus[];
    }
  }

  /**
   * @returns the `pharmaceuticalProduct` property value as a Reference array
   */
  public getPharmaceuticalProduct(): Reference[] {
    return this.pharmaceuticalProduct ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `pharmaceuticalProduct` property.
   *
   * @decorator `@ReferenceTargets('MedicinalProduct.pharmaceuticalProduct', ['MedicinalProductPharmaceutical',])`
   *
   * @param value - the `pharmaceuticalProduct` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicinalProduct.pharmaceuticalProduct', [
    'MedicinalProductPharmaceutical',
  ])
  public setPharmaceuticalProduct(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.pharmaceuticalProduct = value;
    } else {
      this.pharmaceuticalProduct = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `pharmaceuticalProduct` array property.
   *
   * @decorator `@ReferenceTargets('MedicinalProduct.pharmaceuticalProduct', ['MedicinalProductPharmaceutical',])`
   *
   * @param value - the `pharmaceuticalProduct` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicinalProduct.pharmaceuticalProduct', [
    'MedicinalProductPharmaceutical',
  ])
  public addPharmaceuticalProduct(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initPharmaceuticalProduct();
      this.pharmaceuticalProduct?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `pharmaceuticalProduct` property exists and has a value; `false` otherwise
   */
  public hasPharmaceuticalProduct(): boolean {
    return isDefinedList<Reference>(this.pharmaceuticalProduct) && this.pharmaceuticalProduct.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `pharmaceuticalProduct` property
   */
  private initPharmaceuticalProduct(): void {
    if (!this.hasPharmaceuticalProduct()) {
      this.pharmaceuticalProduct = [] as Reference[];
    }
  }

  /**
   * @returns the `packagedMedicinalProduct` property value as a Reference array
   */
  public getPackagedMedicinalProduct(): Reference[] {
    return this.packagedMedicinalProduct ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `packagedMedicinalProduct` property.
   *
   * @decorator `@ReferenceTargets('MedicinalProduct.packagedMedicinalProduct', ['MedicinalProductPackaged',])`
   *
   * @param value - the `packagedMedicinalProduct` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicinalProduct.packagedMedicinalProduct', [
    'MedicinalProductPackaged',
  ])
  public setPackagedMedicinalProduct(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.packagedMedicinalProduct = value;
    } else {
      this.packagedMedicinalProduct = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `packagedMedicinalProduct` array property.
   *
   * @decorator `@ReferenceTargets('MedicinalProduct.packagedMedicinalProduct', ['MedicinalProductPackaged',])`
   *
   * @param value - the `packagedMedicinalProduct` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicinalProduct.packagedMedicinalProduct', [
    'MedicinalProductPackaged',
  ])
  public addPackagedMedicinalProduct(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initPackagedMedicinalProduct();
      this.packagedMedicinalProduct?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `packagedMedicinalProduct` property exists and has a value; `false` otherwise
   */
  public hasPackagedMedicinalProduct(): boolean {
    return isDefinedList<Reference>(this.packagedMedicinalProduct) && this.packagedMedicinalProduct.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `packagedMedicinalProduct` property
   */
  private initPackagedMedicinalProduct(): void {
    if (!this.hasPackagedMedicinalProduct()) {
      this.packagedMedicinalProduct = [] as Reference[];
    }
  }

  /**
   * @returns the `attachedDocument` property value as a Reference array
   */
  public getAttachedDocument(): Reference[] {
    return this.attachedDocument ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `attachedDocument` property.
   *
   * @decorator `@ReferenceTargets('MedicinalProduct.attachedDocument', ['DocumentReference',])`
   *
   * @param value - the `attachedDocument` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicinalProduct.attachedDocument', [
    'DocumentReference',
  ])
  public setAttachedDocument(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.attachedDocument = value;
    } else {
      this.attachedDocument = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `attachedDocument` array property.
   *
   * @decorator `@ReferenceTargets('MedicinalProduct.attachedDocument', ['DocumentReference',])`
   *
   * @param value - the `attachedDocument` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicinalProduct.attachedDocument', [
    'DocumentReference',
  ])
  public addAttachedDocument(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initAttachedDocument();
      this.attachedDocument?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `attachedDocument` property exists and has a value; `false` otherwise
   */
  public hasAttachedDocument(): boolean {
    return isDefinedList<Reference>(this.attachedDocument) && this.attachedDocument.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `attachedDocument` property
   */
  private initAttachedDocument(): void {
    if (!this.hasAttachedDocument()) {
      this.attachedDocument = [] as Reference[];
    }
  }

  /**
   * @returns the `masterFile` property value as a Reference array
   */
  public getMasterFile(): Reference[] {
    return this.masterFile ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `masterFile` property.
   *
   * @decorator `@ReferenceTargets('MedicinalProduct.masterFile', ['DocumentReference',])`
   *
   * @param value - the `masterFile` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicinalProduct.masterFile', [
    'DocumentReference',
  ])
  public setMasterFile(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.masterFile = value;
    } else {
      this.masterFile = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `masterFile` array property.
   *
   * @decorator `@ReferenceTargets('MedicinalProduct.masterFile', ['DocumentReference',])`
   *
   * @param value - the `masterFile` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicinalProduct.masterFile', [
    'DocumentReference',
  ])
  public addMasterFile(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initMasterFile();
      this.masterFile?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `masterFile` property exists and has a value; `false` otherwise
   */
  public hasMasterFile(): boolean {
    return isDefinedList<Reference>(this.masterFile) && this.masterFile.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `masterFile` property
   */
  private initMasterFile(): void {
    if (!this.hasMasterFile()) {
      this.masterFile = [] as Reference[];
    }
  }

  /**
   * @returns the `contact` property value as a Reference array
   */
  public getContact(): Reference[] {
    return this.contact ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `contact` property.
   *
   * @decorator `@ReferenceTargets('MedicinalProduct.contact', ['Organization','PractitionerRole',])`
   *
   * @param value - the `contact` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicinalProduct.contact', [
    'Organization',
  
    'PractitionerRole',
  ])
  public setContact(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.contact = value;
    } else {
      this.contact = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `contact` array property.
   *
   * @decorator `@ReferenceTargets('MedicinalProduct.contact', ['Organization','PractitionerRole',])`
   *
   * @param value - the `contact` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicinalProduct.contact', [
    'Organization',
  
    'PractitionerRole',
  ])
  public addContact(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initContact();
      this.contact?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `contact` property exists and has a value; `false` otherwise
   */
  public hasContact(): boolean {
    return isDefinedList<Reference>(this.contact) && this.contact.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `contact` property
   */
  private initContact(): void {
    if (!this.hasContact()) {
      this.contact = [] as Reference[];
    }
  }

  /**
   * @returns the `clinicalTrial` property value as a Reference array
   */
  public getClinicalTrial(): Reference[] {
    return this.clinicalTrial ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `clinicalTrial` property.
   *
   * @decorator `@ReferenceTargets('MedicinalProduct.clinicalTrial', ['ResearchStudy',])`
   *
   * @param value - the `clinicalTrial` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicinalProduct.clinicalTrial', [
    'ResearchStudy',
  ])
  public setClinicalTrial(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.clinicalTrial = value;
    } else {
      this.clinicalTrial = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `clinicalTrial` array property.
   *
   * @decorator `@ReferenceTargets('MedicinalProduct.clinicalTrial', ['ResearchStudy',])`
   *
   * @param value - the `clinicalTrial` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicinalProduct.clinicalTrial', [
    'ResearchStudy',
  ])
  public addClinicalTrial(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initClinicalTrial();
      this.clinicalTrial?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `clinicalTrial` property exists and has a value; `false` otherwise
   */
  public hasClinicalTrial(): boolean {
    return isDefinedList<Reference>(this.clinicalTrial) && this.clinicalTrial.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `clinicalTrial` property
   */
  private initClinicalTrial(): void {
    if (!this.hasClinicalTrial()) {
      this.clinicalTrial = [] as Reference[];
    }
  }

  /**
   * @returns the `name` property value as a MedicinalProductNameComponent array
   */
  public getName(): MedicinalProductNameComponent[] {
    return this.name ?? ([] as MedicinalProductNameComponent[]);
  }

  /**
   * Assigns the provided MedicinalProductNameComponent array value to the `name` property.
   *
   * @param value - the `name` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setName(value: MedicinalProductNameComponent[] | undefined | null): this {
    if (isDefinedList<MedicinalProductNameComponent>(value)) {
      const optErrMsg = `Invalid MedicinalProduct.name; Provided value array has an element that is not an instance of MedicinalProductNameComponent.`;
      assertFhirTypeList<MedicinalProductNameComponent>(value, MedicinalProductNameComponent, optErrMsg);
      this.name = value;
    } else {
      this.name = null;
    }
    return this;
  }

  /**
   * Add the provided MedicinalProductNameComponent value to the `name` array property.
   *
   * @param value - the `name` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addName(value: MedicinalProductNameComponent | undefined): this {
    if (isDefined<MedicinalProductNameComponent>(value)) {
      const optErrMsg = `Invalid MedicinalProduct.name; Provided element is not an instance of MedicinalProductNameComponent.`;
      assertFhirType<MedicinalProductNameComponent>(value, MedicinalProductNameComponent, optErrMsg);
      this.initName();
      this.name?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `name` property exists and has a value; `false` otherwise
   */
  public hasName(): boolean {
    return isDefinedList<MedicinalProductNameComponent>(this.name) && this.name.some((item: MedicinalProductNameComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `name` property
   */
  private initName(): void {
    if(!this.hasName()) {
      this.name = [] as MedicinalProductNameComponent[];
    }
  }

  /**
   * @returns the `crossReference` property value as a Identifier array
   */
  public getCrossReference(): Identifier[] {
    return this.crossReference ?? ([] as Identifier[]);
  }

  /**
   * Assigns the provided Identifier array value to the `crossReference` property.
   *
   * @param value - the `crossReference` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCrossReference(value: Identifier[] | undefined): this {
    if (isDefinedList<Identifier>(value)) {
      const optErrMsg = `Invalid MedicinalProduct.crossReference; Provided value array has an element that is not an instance of Identifier.`;
      assertFhirTypeList<Identifier>(value, Identifier, optErrMsg);
      this.crossReference = value;
    } else {
      this.crossReference = undefined;
    }
    return this;
  }

  /**
   * Add the provided Identifier value to the `crossReference` array property.
   *
   * @param value - the `crossReference` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addCrossReference(value: Identifier | undefined): this {
    if (isDefined<Identifier>(value)) {
      const optErrMsg = `Invalid MedicinalProduct.crossReference; Provided element is not an instance of Identifier.`;
      assertFhirType<Identifier>(value, Identifier, optErrMsg);
      this.initCrossReference();
      this.crossReference?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `crossReference` property exists and has a value; `false` otherwise
   */
  public hasCrossReference(): boolean {
    return isDefinedList<Identifier>(this.crossReference) && this.crossReference.some((item: Identifier) => !item.isEmpty());
  }

  /**
   * Initialize the `crossReference` property
   */
  private initCrossReference(): void {
    if(!this.hasCrossReference()) {
      this.crossReference = [] as Identifier[];
    }
  }

  /**
   * @returns the `manufacturingBusinessOperation` property value as a MedicinalProductManufacturingBusinessOperationComponent array
   */
  public getManufacturingBusinessOperation(): MedicinalProductManufacturingBusinessOperationComponent[] {
    return this.manufacturingBusinessOperation ?? ([] as MedicinalProductManufacturingBusinessOperationComponent[]);
  }

  /**
   * Assigns the provided MedicinalProductManufacturingBusinessOperationComponent array value to the `manufacturingBusinessOperation` property.
   *
   * @param value - the `manufacturingBusinessOperation` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setManufacturingBusinessOperation(value: MedicinalProductManufacturingBusinessOperationComponent[] | undefined): this {
    if (isDefinedList<MedicinalProductManufacturingBusinessOperationComponent>(value)) {
      const optErrMsg = `Invalid MedicinalProduct.manufacturingBusinessOperation; Provided value array has an element that is not an instance of MedicinalProductManufacturingBusinessOperationComponent.`;
      assertFhirTypeList<MedicinalProductManufacturingBusinessOperationComponent>(value, MedicinalProductManufacturingBusinessOperationComponent, optErrMsg);
      this.manufacturingBusinessOperation = value;
    } else {
      this.manufacturingBusinessOperation = undefined;
    }
    return this;
  }

  /**
   * Add the provided MedicinalProductManufacturingBusinessOperationComponent value to the `manufacturingBusinessOperation` array property.
   *
   * @param value - the `manufacturingBusinessOperation` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addManufacturingBusinessOperation(value: MedicinalProductManufacturingBusinessOperationComponent | undefined): this {
    if (isDefined<MedicinalProductManufacturingBusinessOperationComponent>(value)) {
      const optErrMsg = `Invalid MedicinalProduct.manufacturingBusinessOperation; Provided element is not an instance of MedicinalProductManufacturingBusinessOperationComponent.`;
      assertFhirType<MedicinalProductManufacturingBusinessOperationComponent>(value, MedicinalProductManufacturingBusinessOperationComponent, optErrMsg);
      this.initManufacturingBusinessOperation();
      this.manufacturingBusinessOperation?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `manufacturingBusinessOperation` property exists and has a value; `false` otherwise
   */
  public hasManufacturingBusinessOperation(): boolean {
    return isDefinedList<MedicinalProductManufacturingBusinessOperationComponent>(this.manufacturingBusinessOperation) && this.manufacturingBusinessOperation.some((item: MedicinalProductManufacturingBusinessOperationComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `manufacturingBusinessOperation` property
   */
  private initManufacturingBusinessOperation(): void {
    if(!this.hasManufacturingBusinessOperation()) {
      this.manufacturingBusinessOperation = [] as MedicinalProductManufacturingBusinessOperationComponent[];
    }
  }

  /**
   * @returns the `specialDesignation` property value as a MedicinalProductSpecialDesignationComponent array
   */
  public getSpecialDesignation(): MedicinalProductSpecialDesignationComponent[] {
    return this.specialDesignation ?? ([] as MedicinalProductSpecialDesignationComponent[]);
  }

  /**
   * Assigns the provided MedicinalProductSpecialDesignationComponent array value to the `specialDesignation` property.
   *
   * @param value - the `specialDesignation` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSpecialDesignation(value: MedicinalProductSpecialDesignationComponent[] | undefined): this {
    if (isDefinedList<MedicinalProductSpecialDesignationComponent>(value)) {
      const optErrMsg = `Invalid MedicinalProduct.specialDesignation; Provided value array has an element that is not an instance of MedicinalProductSpecialDesignationComponent.`;
      assertFhirTypeList<MedicinalProductSpecialDesignationComponent>(value, MedicinalProductSpecialDesignationComponent, optErrMsg);
      this.specialDesignation = value;
    } else {
      this.specialDesignation = undefined;
    }
    return this;
  }

  /**
   * Add the provided MedicinalProductSpecialDesignationComponent value to the `specialDesignation` array property.
   *
   * @param value - the `specialDesignation` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addSpecialDesignation(value: MedicinalProductSpecialDesignationComponent | undefined): this {
    if (isDefined<MedicinalProductSpecialDesignationComponent>(value)) {
      const optErrMsg = `Invalid MedicinalProduct.specialDesignation; Provided element is not an instance of MedicinalProductSpecialDesignationComponent.`;
      assertFhirType<MedicinalProductSpecialDesignationComponent>(value, MedicinalProductSpecialDesignationComponent, optErrMsg);
      this.initSpecialDesignation();
      this.specialDesignation?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `specialDesignation` property exists and has a value; `false` otherwise
   */
  public hasSpecialDesignation(): boolean {
    return isDefinedList<MedicinalProductSpecialDesignationComponent>(this.specialDesignation) && this.specialDesignation.some((item: MedicinalProductSpecialDesignationComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `specialDesignation` property
   */
  private initSpecialDesignation(): void {
    if(!this.hasSpecialDesignation()) {
      this.specialDesignation = [] as MedicinalProductSpecialDesignationComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'MedicinalProduct';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identifier,
      this.type_,
      this.domain,
      this.combinedPharmaceuticalDoseForm,
      this.legalStatusOfSupply,
      this.additionalMonitoringIndicator,
      this.specialMeasures,
      this.paediatricUseIndicator,
      this.productClassification,
      this.marketingStatus,
      this.pharmaceuticalProduct,
      this.packagedMedicinalProduct,
      this.attachedDocument,
      this.masterFile,
      this.contact,
      this.clinicalTrial,
      this.name,
      this.crossReference,
      this.manufacturingBusinessOperation,
      this.specialDesignation,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): MedicinalProduct {
    const dest = new MedicinalProduct();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: MedicinalProduct): void {
    super.copyValues(dest);
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    dest.type_ = this.type_?.copy();
    dest.domain = this.domain?.copy();
    dest.combinedPharmaceuticalDoseForm = this.combinedPharmaceuticalDoseForm?.copy();
    dest.legalStatusOfSupply = this.legalStatusOfSupply?.copy();
    dest.additionalMonitoringIndicator = this.additionalMonitoringIndicator?.copy();
    const specialMeasuresList = copyListValues<StringType>(this.specialMeasures);
    dest.specialMeasures = specialMeasuresList.length === 0 ? undefined : specialMeasuresList;
    dest.paediatricUseIndicator = this.paediatricUseIndicator?.copy();
    const productClassificationList = copyListValues<CodeableConcept>(this.productClassification);
    dest.productClassification = productClassificationList.length === 0 ? undefined : productClassificationList;
    const marketingStatusList = copyListValues<MarketingStatus>(this.marketingStatus);
    dest.marketingStatus = marketingStatusList.length === 0 ? undefined : marketingStatusList;
    const pharmaceuticalProductList = copyListValues<Reference>(this.pharmaceuticalProduct);
    dest.pharmaceuticalProduct = pharmaceuticalProductList.length === 0 ? undefined : pharmaceuticalProductList;
    const packagedMedicinalProductList = copyListValues<Reference>(this.packagedMedicinalProduct);
    dest.packagedMedicinalProduct = packagedMedicinalProductList.length === 0 ? undefined : packagedMedicinalProductList;
    const attachedDocumentList = copyListValues<Reference>(this.attachedDocument);
    dest.attachedDocument = attachedDocumentList.length === 0 ? undefined : attachedDocumentList;
    const masterFileList = copyListValues<Reference>(this.masterFile);
    dest.masterFile = masterFileList.length === 0 ? undefined : masterFileList;
    const contactList = copyListValues<Reference>(this.contact);
    dest.contact = contactList.length === 0 ? undefined : contactList;
    const clinicalTrialList = copyListValues<Reference>(this.clinicalTrial);
    dest.clinicalTrial = clinicalTrialList.length === 0 ? undefined : clinicalTrialList;
    const nameList = copyListValues<MedicinalProductNameComponent>(this.name);
    dest.name = nameList.length === 0 ? null : nameList;
    const crossReferenceList = copyListValues<Identifier>(this.crossReference);
    dest.crossReference = crossReferenceList.length === 0 ? undefined : crossReferenceList;
    const manufacturingBusinessOperationList = copyListValues<MedicinalProductManufacturingBusinessOperationComponent>(this.manufacturingBusinessOperation);
    dest.manufacturingBusinessOperation = manufacturingBusinessOperationList.length === 0 ? undefined : manufacturingBusinessOperationList;
    const specialDesignationList = copyListValues<MedicinalProductSpecialDesignationComponent>(this.specialDesignation);
    dest.specialDesignation = specialDesignationList.length === 0 ? undefined : specialDesignationList;
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

    if (this.hasType()) {
      setFhirComplexJson(this.getType(), 'type', jsonObj);
    }

    if (this.hasDomain()) {
      setFhirComplexJson(this.getDomain(), 'domain', jsonObj);
    }

    if (this.hasCombinedPharmaceuticalDoseForm()) {
      setFhirComplexJson(this.getCombinedPharmaceuticalDoseForm(), 'combinedPharmaceuticalDoseForm', jsonObj);
    }

    if (this.hasLegalStatusOfSupply()) {
      setFhirComplexJson(this.getLegalStatusOfSupply(), 'legalStatusOfSupply', jsonObj);
    }

    if (this.hasAdditionalMonitoringIndicator()) {
      setFhirComplexJson(this.getAdditionalMonitoringIndicator(), 'additionalMonitoringIndicator', jsonObj);
    }

    if (this.hasSpecialMeasures()) {
      setFhirPrimitiveListJson(this.getSpecialMeasuresElement(), 'specialMeasures', jsonObj);
    }

    if (this.hasPaediatricUseIndicator()) {
      setFhirComplexJson(this.getPaediatricUseIndicator(), 'paediatricUseIndicator', jsonObj);
    }

    if (this.hasProductClassification()) {
      setFhirComplexListJson(this.getProductClassification(), 'productClassification', jsonObj);
    }

    if (this.hasMarketingStatus()) {
      setFhirComplexListJson(this.getMarketingStatus(), 'marketingStatus', jsonObj);
    }

    if (this.hasPharmaceuticalProduct()) {
      setFhirComplexListJson(this.getPharmaceuticalProduct(), 'pharmaceuticalProduct', jsonObj);
    }

    if (this.hasPackagedMedicinalProduct()) {
      setFhirComplexListJson(this.getPackagedMedicinalProduct(), 'packagedMedicinalProduct', jsonObj);
    }

    if (this.hasAttachedDocument()) {
      setFhirComplexListJson(this.getAttachedDocument(), 'attachedDocument', jsonObj);
    }

    if (this.hasMasterFile()) {
      setFhirComplexListJson(this.getMasterFile(), 'masterFile', jsonObj);
    }

    if (this.hasContact()) {
      setFhirComplexListJson(this.getContact(), 'contact', jsonObj);
    }

    if (this.hasClinicalTrial()) {
      setFhirComplexListJson(this.getClinicalTrial(), 'clinicalTrial', jsonObj);
    }

    if (this.hasName()) {
      setFhirBackboneElementListJson(this.getName(), 'name', jsonObj);
    }

    if (this.hasCrossReference()) {
      setFhirComplexListJson(this.getCrossReference(), 'crossReference', jsonObj);
    }

    if (this.hasManufacturingBusinessOperation()) {
      setFhirBackboneElementListJson(this.getManufacturingBusinessOperation(), 'manufacturingBusinessOperation', jsonObj);
    }

    if (this.hasSpecialDesignation()) {
      setFhirBackboneElementListJson(this.getSpecialDesignation(), 'specialDesignation', jsonObj);
    }

    return jsonObj;
  }
}

/**
 * MedicinalProductNameComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** The product\'s name, including full name and possibly coded parts
 * - **Definition:** The product\'s name, including full name and possibly coded parts.
 *
 * @category Data Models: Resource
 * @see [FHIR MedicinalProduct](http://hl7.org/fhir/StructureDefinition/MedicinalProduct)
 */
export class MedicinalProductNameComponent extends BackboneElement implements IBackboneElement {
  constructor(productName: StringType | fhirString | null = null) {
    super();

    this.productName = null;
    if (isDefined<StringType | fhirString>(productName)) {
      if (productName instanceof PrimitiveType) {
        this.setProductNameElement(productName);
      } else {
        this.setProductName(productName);
      }
    }
  }

  /**
   * Parse the provided `MedicinalProductNameComponent` JSON to instantiate the MedicinalProductNameComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `MedicinalProductNameComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to MedicinalProductNameComponent
   * @returns MedicinalProductNameComponent data model or undefined for `MedicinalProductNameComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): MedicinalProductNameComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'MedicinalProductNameComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new MedicinalProductNameComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    fieldName = 'productName';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setProductName(null);
      } else {
        instance.setProductNameElement(datatype);
      }
    } else {
      instance.setProductName(null);
    }

    fieldName = 'namePart';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: MedicinalProductNameNamePartComponent | undefined = MedicinalProductNameNamePartComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addNamePart(component);
          }
        });
      }
    }

    fieldName = 'countryLanguage';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: MedicinalProductNameCountryLanguageComponent | undefined = MedicinalProductNameCountryLanguageComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addCountryLanguage(component);
          }
        });
      }
    }

    return instance;
  }

  /**
   * MedicinalProduct.name.productName Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The full product name
   * - **Definition:** The full product name.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private productName: StringType | null;

  /**
   * MedicinalProduct.name.namePart Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Coding words or phrases of the name
   * - **Definition:** Coding words or phrases of the name.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private namePart?: MedicinalProductNameNamePartComponent[] | undefined;

  /**
   * MedicinalProduct.name.countryLanguage Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Country where the name applies
   * - **Definition:** Country where the name applies.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private countryLanguage?: MedicinalProductNameCountryLanguageComponent[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `productName` property value as a StringType object if defined; else an empty StringType object
   */
  public getProductNameElement(): StringType {
    return this.productName ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `productName` property.
   *
   * @param element - the `productName` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setProductNameElement(element: StringType | undefined | null): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid MedicinalProduct.name.productName; Provided value is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.productName = element;
    } else {
      this.productName = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `productName` property exists and has a value; `false` otherwise
   */
  public hasProductNameElement(): boolean {
    return isDefined<StringType>(this.productName) && !this.productName.isEmpty();
  }

  /**
   * @returns the `productName` property value as a fhirString if defined; else null
   */
  public getProductName(): fhirString | null {
    if (this.productName?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.productName.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `productName` property.
   *
   * @param value - the `productName` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setProductName(value: fhirString | undefined | null): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid MedicinalProduct.name.productName (${String(value)})`;
      this.productName = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.productName = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `productName` property exists and has a value; `false` otherwise
   */
  public hasProductName(): boolean {
    return this.hasProductNameElement();
  }

  /**
   * @returns the `namePart` property value as a MedicinalProductNameNamePartComponent array
   */
  public getNamePart(): MedicinalProductNameNamePartComponent[] {
    return this.namePart ?? ([] as MedicinalProductNameNamePartComponent[]);
  }

  /**
   * Assigns the provided MedicinalProductNameNamePartComponent array value to the `namePart` property.
   *
   * @param value - the `namePart` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setNamePart(value: MedicinalProductNameNamePartComponent[] | undefined): this {
    if (isDefinedList<MedicinalProductNameNamePartComponent>(value)) {
      const optErrMsg = `Invalid MedicinalProduct.name.namePart; Provided value array has an element that is not an instance of MedicinalProductNameNamePartComponent.`;
      assertFhirTypeList<MedicinalProductNameNamePartComponent>(value, MedicinalProductNameNamePartComponent, optErrMsg);
      this.namePart = value;
    } else {
      this.namePart = undefined;
    }
    return this;
  }

  /**
   * Add the provided MedicinalProductNameNamePartComponent value to the `namePart` array property.
   *
   * @param value - the `namePart` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addNamePart(value: MedicinalProductNameNamePartComponent | undefined): this {
    if (isDefined<MedicinalProductNameNamePartComponent>(value)) {
      const optErrMsg = `Invalid MedicinalProduct.name.namePart; Provided element is not an instance of MedicinalProductNameNamePartComponent.`;
      assertFhirType<MedicinalProductNameNamePartComponent>(value, MedicinalProductNameNamePartComponent, optErrMsg);
      this.initNamePart();
      this.namePart?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `namePart` property exists and has a value; `false` otherwise
   */
  public hasNamePart(): boolean {
    return isDefinedList<MedicinalProductNameNamePartComponent>(this.namePart) && this.namePart.some((item: MedicinalProductNameNamePartComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `namePart` property
   */
  private initNamePart(): void {
    if(!this.hasNamePart()) {
      this.namePart = [] as MedicinalProductNameNamePartComponent[];
    }
  }

  /**
   * @returns the `countryLanguage` property value as a MedicinalProductNameCountryLanguageComponent array
   */
  public getCountryLanguage(): MedicinalProductNameCountryLanguageComponent[] {
    return this.countryLanguage ?? ([] as MedicinalProductNameCountryLanguageComponent[]);
  }

  /**
   * Assigns the provided MedicinalProductNameCountryLanguageComponent array value to the `countryLanguage` property.
   *
   * @param value - the `countryLanguage` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCountryLanguage(value: MedicinalProductNameCountryLanguageComponent[] | undefined): this {
    if (isDefinedList<MedicinalProductNameCountryLanguageComponent>(value)) {
      const optErrMsg = `Invalid MedicinalProduct.name.countryLanguage; Provided value array has an element that is not an instance of MedicinalProductNameCountryLanguageComponent.`;
      assertFhirTypeList<MedicinalProductNameCountryLanguageComponent>(value, MedicinalProductNameCountryLanguageComponent, optErrMsg);
      this.countryLanguage = value;
    } else {
      this.countryLanguage = undefined;
    }
    return this;
  }

  /**
   * Add the provided MedicinalProductNameCountryLanguageComponent value to the `countryLanguage` array property.
   *
   * @param value - the `countryLanguage` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addCountryLanguage(value: MedicinalProductNameCountryLanguageComponent | undefined): this {
    if (isDefined<MedicinalProductNameCountryLanguageComponent>(value)) {
      const optErrMsg = `Invalid MedicinalProduct.name.countryLanguage; Provided element is not an instance of MedicinalProductNameCountryLanguageComponent.`;
      assertFhirType<MedicinalProductNameCountryLanguageComponent>(value, MedicinalProductNameCountryLanguageComponent, optErrMsg);
      this.initCountryLanguage();
      this.countryLanguage?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `countryLanguage` property exists and has a value; `false` otherwise
   */
  public hasCountryLanguage(): boolean {
    return isDefinedList<MedicinalProductNameCountryLanguageComponent>(this.countryLanguage) && this.countryLanguage.some((item: MedicinalProductNameCountryLanguageComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `countryLanguage` property
   */
  private initCountryLanguage(): void {
    if(!this.hasCountryLanguage()) {
      this.countryLanguage = [] as MedicinalProductNameCountryLanguageComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'MedicinalProduct.name';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.productName,
      this.namePart,
      this.countryLanguage,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.productName, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): MedicinalProductNameComponent {
    const dest = new MedicinalProductNameComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: MedicinalProductNameComponent): void {
    super.copyValues(dest);
    dest.productName = this.productName ? this.productName.copy() : null;
    const namePartList = copyListValues<MedicinalProductNameNamePartComponent>(this.namePart);
    dest.namePart = namePartList.length === 0 ? undefined : namePartList;
    const countryLanguageList = copyListValues<MedicinalProductNameCountryLanguageComponent>(this.countryLanguage);
    dest.countryLanguage = countryLanguageList.length === 0 ? undefined : countryLanguageList;
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

    if (this.hasProductNameElement()) {
      setFhirPrimitiveJson<fhirString>(this.getProductNameElement(), 'productName', jsonObj);
    }

    if (this.hasNamePart()) {
      setFhirBackboneElementListJson(this.getNamePart(), 'namePart', jsonObj);
    }

    if (this.hasCountryLanguage()) {
      setFhirBackboneElementListJson(this.getCountryLanguage(), 'countryLanguage', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * MedicinalProductNameNamePartComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Coding words or phrases of the name
 * - **Definition:** Coding words or phrases of the name.
 *
 * @category Data Models: Resource
 * @see [FHIR MedicinalProduct](http://hl7.org/fhir/StructureDefinition/MedicinalProduct)
 */
export class MedicinalProductNameNamePartComponent extends BackboneElement implements IBackboneElement {
  constructor(part: StringType | fhirString | null = null, type_: Coding | null = null) {
    super();

    this.part = null;
    if (isDefined<StringType | fhirString>(part)) {
      if (part instanceof PrimitiveType) {
        this.setPartElement(part);
      } else {
        this.setPart(part);
      }
    }

    this.type_ = null;
    if (isDefined<Coding>(type_)) {
      this.setType(type_);
    }
  }

  /**
   * Parse the provided `MedicinalProductNameNamePartComponent` JSON to instantiate the MedicinalProductNameNamePartComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `MedicinalProductNameNamePartComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to MedicinalProductNameNamePartComponent
   * @returns MedicinalProductNameNamePartComponent data model or undefined for `MedicinalProductNameNamePartComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): MedicinalProductNameNamePartComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'MedicinalProductNameNamePartComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new MedicinalProductNameNamePartComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    fieldName = 'part';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setPart(null);
      } else {
        instance.setPartElement(datatype);
      }
    } else {
      instance.setPart(null);
    }

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Coding | undefined = Coding.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setType(null);
      } else {
        instance.setType(datatype);
      }
    } else {
      instance.setType(null);
    }

    return instance;
  }

  /**
   * MedicinalProduct.name.namePart.part Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A fragment of a product name
   * - **Definition:** A fragment of a product name.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private part: StringType | null;

  /**
   * MedicinalProduct.name.namePart.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Idenifying type for this part of the name (e.g. strength part)
   * - **Definition:** Idenifying type for this part of the name (e.g. strength part).
   * - **FHIR Type:** `Coding`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private type_: Coding | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `part` property value as a StringType object if defined; else an empty StringType object
   */
  public getPartElement(): StringType {
    return this.part ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `part` property.
   *
   * @param element - the `part` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPartElement(element: StringType | undefined | null): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid MedicinalProduct.name.namePart.part; Provided value is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.part = element;
    } else {
      this.part = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `part` property exists and has a value; `false` otherwise
   */
  public hasPartElement(): boolean {
    return isDefined<StringType>(this.part) && !this.part.isEmpty();
  }

  /**
   * @returns the `part` property value as a fhirString if defined; else null
   */
  public getPart(): fhirString | null {
    if (this.part?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.part.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `part` property.
   *
   * @param value - the `part` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPart(value: fhirString | undefined | null): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid MedicinalProduct.name.namePart.part (${String(value)})`;
      this.part = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.part = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `part` property exists and has a value; `false` otherwise
   */
  public hasPart(): boolean {
    return this.hasPartElement();
  }

  /**
   * @returns the `type_` property value as a Coding object if defined; else an empty Coding object
   */
  public getType(): Coding {
    return this.type_ ?? new Coding();
  }

  /**
   * Assigns the provided Coding object value to the `type_` property.
   *
   * @param value - the `type_` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setType(value: Coding | undefined | null): this {
    if (isDefined<Coding>(value)) {
      const optErrMsg = `Invalid MedicinalProduct.name.namePart.type; Provided element is not an instance of Coding.`;
      assertFhirType<Coding>(value, Coding, optErrMsg);
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
    return isDefined<Coding>(this.type_) && !this.type_.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'MedicinalProduct.name.namePart';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.part,
      this.type_,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.part, this.type_, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): MedicinalProductNameNamePartComponent {
    const dest = new MedicinalProductNameNamePartComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: MedicinalProductNameNamePartComponent): void {
    super.copyValues(dest);
    dest.part = this.part ? this.part.copy() : null;
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

    if (this.hasPartElement()) {
      setFhirPrimitiveJson<fhirString>(this.getPartElement(), 'part', jsonObj);
    }

    if (this.hasType()) {
      setFhirComplexJson(this.getType(), 'type', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * MedicinalProductNameCountryLanguageComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Country where the name applies
 * - **Definition:** Country where the name applies.
 *
 * @category Data Models: Resource
 * @see [FHIR MedicinalProduct](http://hl7.org/fhir/StructureDefinition/MedicinalProduct)
 */
export class MedicinalProductNameCountryLanguageComponent extends BackboneElement implements IBackboneElement {
  constructor(country: CodeableConcept | null = null, language: CodeableConcept | null = null) {
    super();

    this.country = null;
    if (isDefined<CodeableConcept>(country)) {
      this.setCountry(country);
    }

    this.language = null;
    if (isDefined<CodeableConcept>(language)) {
      this.setLanguage(language);
    }
  }

  /**
   * Parse the provided `MedicinalProductNameCountryLanguageComponent` JSON to instantiate the MedicinalProductNameCountryLanguageComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `MedicinalProductNameCountryLanguageComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to MedicinalProductNameCountryLanguageComponent
   * @returns MedicinalProductNameCountryLanguageComponent data model or undefined for `MedicinalProductNameCountryLanguageComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): MedicinalProductNameCountryLanguageComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'MedicinalProductNameCountryLanguageComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new MedicinalProductNameCountryLanguageComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    fieldName = 'country';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setCountry(null);
      } else {
        instance.setCountry(datatype);
      }
    } else {
      instance.setCountry(null);
    }

    fieldName = 'jurisdiction';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setJurisdiction(datatype);
    }

    fieldName = 'language';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setLanguage(null);
      } else {
        instance.setLanguage(datatype);
      }
    } else {
      instance.setLanguage(null);
    }

    return instance;
  }

  /**
   * MedicinalProduct.name.countryLanguage.country Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Country code for where this name applies
   * - **Definition:** Country code for where this name applies.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private country: CodeableConcept | null;

  /**
   * MedicinalProduct.name.countryLanguage.jurisdiction Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Jurisdiction code for where this name applies
   * - **Definition:** Jurisdiction code for where this name applies.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private jurisdiction?: CodeableConcept | undefined;

  /**
   * MedicinalProduct.name.countryLanguage.language Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Language code for this name
   * - **Definition:** Language code for this name.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private language: CodeableConcept | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `country` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getCountry(): CodeableConcept {
    return this.country ?? new CodeableConcept();
  }

  /**
   * Assigns the provided CodeableConcept object value to the `country` property.
   *
   * @param value - the `country` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCountry(value: CodeableConcept | undefined | null): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid MedicinalProduct.name.countryLanguage.country; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.country = value;
    } else {
      this.country = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `country` property exists and has a value; `false` otherwise
   */
  public hasCountry(): boolean {
    return isDefined<CodeableConcept>(this.country) && !this.country.isEmpty();
  }

  /**
   * @returns the `jurisdiction` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getJurisdiction(): CodeableConcept {
    return this.jurisdiction ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Jurisdiction object value to the `jurisdiction` property.
   *
   * @param value - the `jurisdiction` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setJurisdiction(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid MedicinalProduct.name.countryLanguage.jurisdiction; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.jurisdiction = value;
    } else {
      this.jurisdiction = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `jurisdiction` property exists and has a value; `false` otherwise
   */
  public hasJurisdiction(): boolean {
    return isDefined<CodeableConcept>(this.jurisdiction) && !this.jurisdiction.isEmpty();
  }

  /**
   * @returns the `language` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getLanguage(): CodeableConcept {
    return this.language ?? new CodeableConcept();
  }

  /**
   * Assigns the provided CodeableConcept object value to the `language` property.
   *
   * @param value - the `language` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setLanguage(value: CodeableConcept | undefined | null): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid MedicinalProduct.name.countryLanguage.language; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.language = value;
    } else {
      this.language = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `language` property exists and has a value; `false` otherwise
   */
  public hasLanguage(): boolean {
    return isDefined<CodeableConcept>(this.language) && !this.language.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'MedicinalProduct.name.countryLanguage';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.country,
      this.jurisdiction,
      this.language,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.country, this.language, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): MedicinalProductNameCountryLanguageComponent {
    const dest = new MedicinalProductNameCountryLanguageComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: MedicinalProductNameCountryLanguageComponent): void {
    super.copyValues(dest);
    dest.country = this.country ? this.country.copy() : null;
    dest.jurisdiction = this.jurisdiction?.copy();
    dest.language = this.language ? this.language.copy() : null;
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

    if (this.hasCountry()) {
      setFhirComplexJson(this.getCountry(), 'country', jsonObj);
    }

    if (this.hasJurisdiction()) {
      setFhirComplexJson(this.getJurisdiction(), 'jurisdiction', jsonObj);
    }

    if (this.hasLanguage()) {
      setFhirComplexJson(this.getLanguage(), 'language', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * MedicinalProductManufacturingBusinessOperationComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** An operation applied to the product, for manufacturing or adminsitrative purpose
 * - **Definition:** An operation applied to the product, for manufacturing or adminsitrative purpose.
 *
 * @category Data Models: Resource
 * @see [FHIR MedicinalProduct](http://hl7.org/fhir/StructureDefinition/MedicinalProduct)
 */
export class MedicinalProductManufacturingBusinessOperationComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `MedicinalProductManufacturingBusinessOperationComponent` JSON to instantiate the MedicinalProductManufacturingBusinessOperationComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `MedicinalProductManufacturingBusinessOperationComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to MedicinalProductManufacturingBusinessOperationComponent
   * @returns MedicinalProductManufacturingBusinessOperationComponent data model or undefined for `MedicinalProductManufacturingBusinessOperationComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): MedicinalProductManufacturingBusinessOperationComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'MedicinalProductManufacturingBusinessOperationComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new MedicinalProductManufacturingBusinessOperationComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    fieldName = 'operationType';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setOperationType(datatype);
    }

    fieldName = 'authorisationReferenceNumber';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Identifier | undefined = Identifier.parse(classJsonObj[fieldName]!, sourceField);
      instance.setAuthorisationReferenceNumber(datatype);
    }

    fieldName = 'effectiveDate';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dtJson, dtSiblingJson);
      instance.setEffectiveDateElement(datatype);
    }

    fieldName = 'confidentialityIndicator';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setConfidentialityIndicator(datatype);
    }

    fieldName = 'manufacturer';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addManufacturer(datatype);
          }
        });
      }
  }

    fieldName = 'regulator';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setRegulator(datatype);
    }

    return instance;
  }

  /**
   * MedicinalProduct.manufacturingBusinessOperation.operationType Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The type of manufacturing operation
   * - **Definition:** The type of manufacturing operation.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private operationType?: CodeableConcept | undefined;

  /**
   * MedicinalProduct.manufacturingBusinessOperation.authorisationReferenceNumber Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Regulatory authorization reference number
   * - **Definition:** Regulatory authorization reference number.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private authorisationReferenceNumber?: Identifier | undefined;

  /**
   * MedicinalProduct.manufacturingBusinessOperation.effectiveDate Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Regulatory authorization date
   * - **Definition:** Regulatory authorization date.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private effectiveDate?: DateTimeType | undefined;

  /**
   * MedicinalProduct.manufacturingBusinessOperation.confidentialityIndicator Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** To indicate if this proces is commercially confidential
   * - **Definition:** To indicate if this proces is commercially confidential.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private confidentialityIndicator?: CodeableConcept | undefined;

  /**
   * MedicinalProduct.manufacturingBusinessOperation.manufacturer Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The manufacturer or establishment associated with the process
   * - **Definition:** The manufacturer or establishment associated with the process.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private manufacturer?: Reference[] | undefined;

  /**
   * MedicinalProduct.manufacturingBusinessOperation.regulator Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A regulator which oversees the operation
   * - **Definition:** A regulator which oversees the operation.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private regulator?: Reference | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `operationType` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getOperationType(): CodeableConcept {
    return this.operationType ?? new CodeableConcept();
  }

  /**
   * Assigns the provided OperationType object value to the `operationType` property.
   *
   * @param value - the `operationType` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setOperationType(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid MedicinalProduct.manufacturingBusinessOperation.operationType; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.operationType = value;
    } else {
      this.operationType = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `operationType` property exists and has a value; `false` otherwise
   */
  public hasOperationType(): boolean {
    return isDefined<CodeableConcept>(this.operationType) && !this.operationType.isEmpty();
  }

  /**
   * @returns the `authorisationReferenceNumber` property value as a Identifier object if defined; else an empty Identifier object
   */
  public getAuthorisationReferenceNumber(): Identifier {
    return this.authorisationReferenceNumber ?? new Identifier();
  }

  /**
   * Assigns the provided AuthorisationReferenceNumber object value to the `authorisationReferenceNumber` property.
   *
   * @param value - the `authorisationReferenceNumber` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAuthorisationReferenceNumber(value: Identifier | undefined): this {
    if (isDefined<Identifier>(value)) {
      const optErrMsg = `Invalid MedicinalProduct.manufacturingBusinessOperation.authorisationReferenceNumber; Provided element is not an instance of Identifier.`;
      assertFhirType<Identifier>(value, Identifier, optErrMsg);
      this.authorisationReferenceNumber = value;
    } else {
      this.authorisationReferenceNumber = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `authorisationReferenceNumber` property exists and has a value; `false` otherwise
   */
  public hasAuthorisationReferenceNumber(): boolean {
    return isDefined<Identifier>(this.authorisationReferenceNumber) && !this.authorisationReferenceNumber.isEmpty();
  }

  /**
   * @returns the `effectiveDate` property value as a DateTimeType object if defined; else an empty DateTimeType object
   */
  public getEffectiveDateElement(): DateTimeType {
    return this.effectiveDate ?? new DateTimeType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `effectiveDate` property.
   *
   * @param element - the `effectiveDate` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setEffectiveDateElement(element: DateTimeType | undefined): this {
    if (isDefined<DateTimeType>(element)) {
      const optErrMsg = `Invalid MedicinalProduct.manufacturingBusinessOperation.effectiveDate; Provided element is not an instance of DateTimeType.`;
      assertFhirType<DateTimeType>(element, DateTimeType, optErrMsg);
      this.effectiveDate = element;
    } else {
      this.effectiveDate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `effectiveDate` property exists and has a value; `false` otherwise
   */
  public hasEffectiveDateElement(): boolean {
    return isDefined<DateTimeType>(this.effectiveDate) && !this.effectiveDate.isEmpty();
  }

  /**
   * @returns the `effectiveDate` property value as a fhirDateTime if defined; else undefined
   */
  public getEffectiveDate(): fhirDateTime | undefined {
    return this.effectiveDate?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `effectiveDate` property.
   *
   * @param value - the `effectiveDate` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setEffectiveDate(value: fhirDateTime | undefined): this {
    if (isDefined<fhirDateTime>(value)) {
      const optErrMsg = `Invalid MedicinalProduct.manufacturingBusinessOperation.effectiveDate (${String(value)})`;
      this.effectiveDate = new DateTimeType(parseFhirPrimitiveData(value, fhirDateTimeSchema, optErrMsg));
    } else {
      this.effectiveDate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `effectiveDate` property exists and has a value; `false` otherwise
   */
  public hasEffectiveDate(): boolean {
    return this.hasEffectiveDateElement();
  }

  /**
   * @returns the `confidentialityIndicator` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getConfidentialityIndicator(): CodeableConcept {
    return this.confidentialityIndicator ?? new CodeableConcept();
  }

  /**
   * Assigns the provided ConfidentialityIndicator object value to the `confidentialityIndicator` property.
   *
   * @param value - the `confidentialityIndicator` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setConfidentialityIndicator(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid MedicinalProduct.manufacturingBusinessOperation.confidentialityIndicator; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.confidentialityIndicator = value;
    } else {
      this.confidentialityIndicator = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `confidentialityIndicator` property exists and has a value; `false` otherwise
   */
  public hasConfidentialityIndicator(): boolean {
    return isDefined<CodeableConcept>(this.confidentialityIndicator) && !this.confidentialityIndicator.isEmpty();
  }

  /**
   * @returns the `manufacturer` property value as a Reference array
   */
  public getManufacturer(): Reference[] {
    return this.manufacturer ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `manufacturer` property.
   *
   * @decorator `@ReferenceTargets('MedicinalProduct.manufacturingBusinessOperation.manufacturer', ['Organization',])`
   *
   * @param value - the `manufacturer` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicinalProduct.manufacturingBusinessOperation.manufacturer', [
    'Organization',
  ])
  public setManufacturer(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.manufacturer = value;
    } else {
      this.manufacturer = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `manufacturer` array property.
   *
   * @decorator `@ReferenceTargets('MedicinalProduct.manufacturingBusinessOperation.manufacturer', ['Organization',])`
   *
   * @param value - the `manufacturer` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicinalProduct.manufacturingBusinessOperation.manufacturer', [
    'Organization',
  ])
  public addManufacturer(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initManufacturer();
      this.manufacturer?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `manufacturer` property exists and has a value; `false` otherwise
   */
  public hasManufacturer(): boolean {
    return isDefinedList<Reference>(this.manufacturer) && this.manufacturer.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `manufacturer` property
   */
  private initManufacturer(): void {
    if (!this.hasManufacturer()) {
      this.manufacturer = [] as Reference[];
    }
  }

  /**
   * @returns the `regulator` property value as a Reference object; else an empty Reference object
   */
  public getRegulator(): Reference {
    return this.regulator ?? new Reference();
  }

  /**
   * Assigns the provided Regulator object value to the `regulator` property.
   *
   * @decorator `@ReferenceTargets('MedicinalProduct.manufacturingBusinessOperation.regulator', ['Organization',])`
   *
   * @param value - the `regulator` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicinalProduct.manufacturingBusinessOperation.regulator', [
    'Organization',
  ])
  public setRegulator(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.regulator = value;
    } else {
      this.regulator = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `regulator` property exists and has a value; `false` otherwise
   */
  public hasRegulator(): boolean {
    return isDefined<Reference>(this.regulator) && !this.regulator.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'MedicinalProduct.manufacturingBusinessOperation';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.operationType,
      this.authorisationReferenceNumber,
      this.effectiveDate,
      this.confidentialityIndicator,
      this.manufacturer,
      this.regulator,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): MedicinalProductManufacturingBusinessOperationComponent {
    const dest = new MedicinalProductManufacturingBusinessOperationComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: MedicinalProductManufacturingBusinessOperationComponent): void {
    super.copyValues(dest);
    dest.operationType = this.operationType?.copy();
    dest.authorisationReferenceNumber = this.authorisationReferenceNumber?.copy();
    dest.effectiveDate = this.effectiveDate?.copy();
    dest.confidentialityIndicator = this.confidentialityIndicator?.copy();
    const manufacturerList = copyListValues<Reference>(this.manufacturer);
    dest.manufacturer = manufacturerList.length === 0 ? undefined : manufacturerList;
    dest.regulator = this.regulator?.copy();
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

    if (this.hasOperationType()) {
      setFhirComplexJson(this.getOperationType(), 'operationType', jsonObj);
    }

    if (this.hasAuthorisationReferenceNumber()) {
      setFhirComplexJson(this.getAuthorisationReferenceNumber(), 'authorisationReferenceNumber', jsonObj);
    }

    if (this.hasEffectiveDateElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getEffectiveDateElement(), 'effectiveDate', jsonObj);
    }

    if (this.hasConfidentialityIndicator()) {
      setFhirComplexJson(this.getConfidentialityIndicator(), 'confidentialityIndicator', jsonObj);
    }

    if (this.hasManufacturer()) {
      setFhirComplexListJson(this.getManufacturer(), 'manufacturer', jsonObj);
    }

    if (this.hasRegulator()) {
      setFhirComplexJson(this.getRegulator(), 'regulator', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * MedicinalProductSpecialDesignationComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Indicates if the medicinal product has an orphan designation for the treatment of a rare disease
 * - **Definition:** Indicates if the medicinal product has an orphan designation for the treatment of a rare disease.
 *
 * @category Data Models: Resource
 * @see [FHIR MedicinalProduct](http://hl7.org/fhir/StructureDefinition/MedicinalProduct)
 */
export class MedicinalProductSpecialDesignationComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `MedicinalProductSpecialDesignationComponent` JSON to instantiate the MedicinalProductSpecialDesignationComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `MedicinalProductSpecialDesignationComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to MedicinalProductSpecialDesignationComponent
   * @returns MedicinalProductSpecialDesignationComponent data model or undefined for `MedicinalProductSpecialDesignationComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): MedicinalProductSpecialDesignationComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'MedicinalProductSpecialDesignationComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new MedicinalProductSpecialDesignationComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    const classMetadata: DecoratorMetadataObject | null = MedicinalProductSpecialDesignationComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for MedicinalProductSpecialDesignationComponent`;
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

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setType(datatype);
    }

    fieldName = 'intendedUse';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setIntendedUse(datatype);
    }

    fieldName = 'indication[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const indication: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setIndication(indication);

    fieldName = 'status';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setStatus(datatype);
    }

    fieldName = 'date';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dtJson, dtSiblingJson);
      instance.setDateElement(datatype);
    }

    fieldName = 'species';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setSpecies(datatype);
    }

    return instance;
  }

  /**
   * MedicinalProduct.specialDesignation.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Identifier for the designation, or procedure number
   * - **Definition:** Identifier for the designation, or procedure number.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier[] | undefined;

  /**
   * MedicinalProduct.specialDesignation.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The type of special designation, e.g. orphan drug, minor use
   * - **Definition:** The type of special designation, e.g. orphan drug, minor use.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private type_?: CodeableConcept | undefined;

  /**
   * MedicinalProduct.specialDesignation.intendedUse Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The intended use of the product, e.g. prevention, treatment
   * - **Definition:** The intended use of the product, e.g. prevention, treatment.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private intendedUse?: CodeableConcept | undefined;

  /**
   * MedicinalProduct.specialDesignation.indication[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('MedicinalProduct.specialDesignation.indication[x]', ['CodeableConcept','Reference',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Condition for which the medicinal use applies
   * - **Definition:** Condition for which the medicinal use applies.
   * - **FHIR Types:**
   *     'CodeableConcept',
   *     'Reference',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  @ChoiceDataTypesMeta('MedicinalProduct.specialDesignation.indication[x]',[
    'CodeableConcept',
    'Reference',
  ])
  private indication?: IDataType | undefined;

  /**
   * MedicinalProduct.specialDesignation.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** For example granted, pending, expired or withdrawn
   * - **Definition:** For example granted, pending, expired or withdrawn.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private status?: CodeableConcept | undefined;

  /**
   * MedicinalProduct.specialDesignation.date Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Date when the designation was granted
   * - **Definition:** Date when the designation was granted.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private date?: DateTimeType | undefined;

  /**
   * MedicinalProduct.specialDesignation.species Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Animal species for which this applies
   * - **Definition:** Animal species for which this applies.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private species?: CodeableConcept | undefined;

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
      const optErrMsg = `Invalid MedicinalProduct.specialDesignation.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid MedicinalProduct.specialDesignation.identifier; Provided element is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid MedicinalProduct.specialDesignation.type; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `intendedUse` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getIntendedUse(): CodeableConcept {
    return this.intendedUse ?? new CodeableConcept();
  }

  /**
   * Assigns the provided IntendedUse object value to the `intendedUse` property.
   *
   * @param value - the `intendedUse` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setIntendedUse(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid MedicinalProduct.specialDesignation.intendedUse; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.intendedUse = value;
    } else {
      this.intendedUse = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `intendedUse` property exists and has a value; `false` otherwise
   */
  public hasIntendedUse(): boolean {
    return isDefined<CodeableConcept>(this.intendedUse) && !this.intendedUse.isEmpty();
  }

  /**
   * @returns the `indication` property value as a DataType object if defined; else undefined
   */
  public getIndication(): IDataType | undefined {
    return this.indication;
  }

  /**
   * Assigns the provided DataType object value to the `indication` property.
   *
   * @decorator `@ChoiceDataTypes('MedicinalProduct.specialDesignation.indication[x]')`
   *
   * @param value - the `indication` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('MedicinalProduct.specialDesignation.indication[x]')
  public setIndication(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.indication = value;
    } else {
      this.indication = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `indication` property exists and has a value; `false` otherwise
   */
  public hasIndication(): boolean {
    return isDefined<IDataType>(this.indication) && !this.indication.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `indication` property value as a CodeableConcept object if defined; else undefined
   */
  public getIndicationCodeableConcept(): CodeableConcept | undefined {
    if (!isDefined<IDataType | undefined>(this.indication)) {
      return undefined;
    }
    if (!(this.indication instanceof CodeableConcept)) {
      throw new InvalidTypeError(
        `DataType mismatch for MedicinalProduct.specialDesignation.indication[x]: Expected CodeableConcept but encountered ${this.indication.fhirType()}`,
      );
    }
    return this.indication;
  }

  /**
   * @returns `true` if the `indication` property exists as a CodeableConcept and has a value; `false` otherwise
   */
  public hasIndicationCodeableConcept(): boolean {
    return this.hasIndication() && this.indication instanceof CodeableConcept;
  }

  /**
   * @returns the `indication` property value as a Reference object if defined; else undefined
   */
  public getIndicationReference(): Reference | undefined {
    if (!isDefined<IDataType | undefined>(this.indication)) {
      return undefined;
    }
    if (!(this.indication instanceof Reference)) {
      throw new InvalidTypeError(
        `DataType mismatch for MedicinalProduct.specialDesignation.indication[x]: Expected Reference but encountered ${this.indication.fhirType()}`,
      );
    }
    return this.indication;
  }

  /**
   * @returns `true` if the `indication` property exists as a Reference and has a value; `false` otherwise
   */
  public hasIndicationReference(): boolean {
    return this.hasIndication() && this.indication instanceof Reference;
  }

  // End of choice datatype-specific "get"/"has" methods

  /**
   * @returns the `status` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getStatus(): CodeableConcept {
    return this.status ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Status object value to the `status` property.
   *
   * @param value - the `status` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setStatus(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid MedicinalProduct.specialDesignation.status; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.status = value;
    } else {
      this.status = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `status` property exists and has a value; `false` otherwise
   */
  public hasStatus(): boolean {
    return isDefined<CodeableConcept>(this.status) && !this.status.isEmpty();
  }

  /**
   * @returns the `date` property value as a DateTimeType object if defined; else an empty DateTimeType object
   */
  public getDateElement(): DateTimeType {
    return this.date ?? new DateTimeType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `date` property.
   *
   * @param element - the `date` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDateElement(element: DateTimeType | undefined): this {
    if (isDefined<DateTimeType>(element)) {
      const optErrMsg = `Invalid MedicinalProduct.specialDesignation.date; Provided element is not an instance of DateTimeType.`;
      assertFhirType<DateTimeType>(element, DateTimeType, optErrMsg);
      this.date = element;
    } else {
      this.date = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `date` property exists and has a value; `false` otherwise
   */
  public hasDateElement(): boolean {
    return isDefined<DateTimeType>(this.date) && !this.date.isEmpty();
  }

  /**
   * @returns the `date` property value as a fhirDateTime if defined; else undefined
   */
  public getDate(): fhirDateTime | undefined {
    return this.date?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `date` property.
   *
   * @param value - the `date` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDate(value: fhirDateTime | undefined): this {
    if (isDefined<fhirDateTime>(value)) {
      const optErrMsg = `Invalid MedicinalProduct.specialDesignation.date (${String(value)})`;
      this.date = new DateTimeType(parseFhirPrimitiveData(value, fhirDateTimeSchema, optErrMsg));
    } else {
      this.date = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `date` property exists and has a value; `false` otherwise
   */
  public hasDate(): boolean {
    return this.hasDateElement();
  }

  /**
   * @returns the `species` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getSpecies(): CodeableConcept {
    return this.species ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Species object value to the `species` property.
   *
   * @param value - the `species` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSpecies(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid MedicinalProduct.specialDesignation.species; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.species = value;
    } else {
      this.species = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `species` property exists and has a value; `false` otherwise
   */
  public hasSpecies(): boolean {
    return isDefined<CodeableConcept>(this.species) && !this.species.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'MedicinalProduct.specialDesignation';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identifier,
      this.type_,
      this.intendedUse,
      this.indication,
      this.status,
      this.date,
      this.species,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): MedicinalProductSpecialDesignationComponent {
    const dest = new MedicinalProductSpecialDesignationComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: MedicinalProductSpecialDesignationComponent): void {
    super.copyValues(dest);
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    dest.type_ = this.type_?.copy();
    dest.intendedUse = this.intendedUse?.copy();
    dest.indication = this.indication?.copy() as IDataType;
    dest.status = this.status?.copy();
    dest.date = this.date?.copy();
    dest.species = this.species?.copy();
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

    if (this.hasType()) {
      setFhirComplexJson(this.getType(), 'type', jsonObj);
    }

    if (this.hasIntendedUse()) {
      setFhirComplexJson(this.getIntendedUse(), 'intendedUse', jsonObj);
    }

    if (this.hasIndication()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getIndication()!, 'indication', jsonObj);
    }

    if (this.hasStatus()) {
      setFhirComplexJson(this.getStatus(), 'status', jsonObj);
    }

    if (this.hasDateElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getDateElement(), 'date', jsonObj);
    }

    if (this.hasSpecies()) {
      setFhirComplexJson(this.getSpecies(), 'species', jsonObj);
    }

    return jsonObj;
  }
}
