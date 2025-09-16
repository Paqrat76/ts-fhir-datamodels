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
 * MedicinalProductDefinition Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/MedicinalProductDefinition
 * StructureDefinition.name: MedicinalProductDefinition
 * StructureDefinition.description: Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use, drug catalogs, to support prescribing, adverse events management etc.).
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
  DateTimeType,
  DateType,
  DomainResource,
  FhirParser,
  IBackboneElement,
  IDataType,
  IDomainResource,
  InvalidTypeError,
  JSON,
  MarkdownType,
  PrimitiveType,
  ReferenceTargets,
  StringType,
  assertFhirType,
  assertFhirTypeList,
  assertIsDefined,
  copyListValues,
  fhirDateTime,
  fhirDateTimeSchema,
  fhirMarkdown,
  fhirMarkdownSchema,
  fhirString,
  fhirStringSchema,
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
import { Attachment, CodeableConcept, CodeableReference, Coding, Identifier, MarketingStatus, PARSABLE_DATATYPE_MAP, Period, Quantity, Reference } from '../complex-types/complex-datatypes';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Symbol.metadata polyfill secret sauce for decorator metadata
(Symbol.metadata as any) ??= Symbol('Symbol.metadata');

/**
 * MedicinalProductDefinition Class
 *
 * @remarks
 * Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use, drug catalogs, to support prescribing, adverse events management etc.).
 *
 * **FHIR Specification**
 * - **Short:** Detailed definition of a medicinal product
 * - **Definition:** A medicinal product, being a substance or combination of substances that is intended to treat, prevent or diagnose a disease, or to restore, correct or modify physiological functions by exerting a pharmacological, immunological or metabolic action. This resource is intended to define and detail such products and their properties, for uses other than direct patient care (e.g. regulatory use, or drug catalogs).
 * - **FHIR Version:** 4.3.0
 *
 * @category Data Models: Resource
 * @see [FHIR MedicinalProductDefinition](http://hl7.org/fhir/StructureDefinition/MedicinalProductDefinition)
 */
export class MedicinalProductDefinition extends DomainResource implements IDomainResource {
  constructor(name: MedicinalProductDefinitionNameComponent[] | null = null) {
    super();

    this.name = null;
    if (isDefinedList<MedicinalProductDefinitionNameComponent>(name)) {
      this.setName(name);
    }
  }

  /**
   * Parse the provided `MedicinalProductDefinition` JSON to instantiate the MedicinalProductDefinition data model.
   *
   * @param sourceJson - JSON representing FHIR `MedicinalProductDefinition`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to MedicinalProductDefinition
   * @returns MedicinalProductDefinition data model or undefined for `MedicinalProductDefinition`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): MedicinalProductDefinition | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'MedicinalProductDefinition';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new MedicinalProductDefinition();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'MedicinalProductDefinition');
    fhirParser.processDomainResourceJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

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
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setDomain(datatype);
    }

    fieldName = 'version';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setVersionElement(datatype);
    }

    fieldName = 'status';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setStatus(datatype);
    }

    fieldName = 'statusDate';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dtJson, dtSiblingJson);
      instance.setStatusDateElement(datatype);
    }

    fieldName = 'description';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: MarkdownType | undefined = fhirParser.parseMarkdownType(dtJson, dtSiblingJson);
      instance.setDescriptionElement(datatype);
    }

    fieldName = 'combinedPharmaceuticalDoseForm';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setCombinedPharmaceuticalDoseForm(datatype);
    }

    fieldName = 'route';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addRoute(datatype);
          }
        });
      }
    }

    fieldName = 'indication';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: MarkdownType | undefined = fhirParser.parseMarkdownType(dtJson, dtSiblingJson);
      instance.setIndicationElement(datatype);
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
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addSpecialMeasures(datatype);
          }
        });
      }
    }

    fieldName = 'pediatricUseIndicator';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setPediatricUseIndicator(datatype);
    }

    fieldName = 'classification';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addClassification(datatype);
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

    fieldName = 'packagedMedicinalProduct';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addPackagedMedicinalProduct(datatype);
          }
        });
      }
    }

    fieldName = 'ingredient';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addIngredient(datatype);
          }
        });
      }
    }

    fieldName = 'impurity';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: CodeableReference | undefined = CodeableReference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addImpurity(datatype);
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
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: MedicinalProductDefinitionContactComponent | undefined = MedicinalProductDefinitionContactComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addContact(component);
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

    fieldName = 'code';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Coding | undefined = Coding.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addCode(datatype);
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
          const component: MedicinalProductDefinitionNameComponent | undefined = MedicinalProductDefinitionNameComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
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
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: MedicinalProductDefinitionCrossReferenceComponent | undefined = MedicinalProductDefinitionCrossReferenceComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addCrossReference(component);
          }
        });
      }
    }

    fieldName = 'operation';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: MedicinalProductDefinitionOperationComponent | undefined = MedicinalProductDefinitionOperationComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addOperation(component);
          }
        });
      }
    }

    fieldName = 'characteristic';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: MedicinalProductDefinitionCharacteristicComponent | undefined = MedicinalProductDefinitionCharacteristicComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addCharacteristic(component);
          }
        });
      }
    }

    return instance;
  }

  /**
   * MedicinalProductDefinition.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Business identifier for this product. Could be an MPID
   * - **Definition:** Business identifier for this product. Could be an MPID. When in development or being regulated, products are typically referenced by official identifiers, assigned by a manufacturer or regulator, and unique to a product (which, when compared to a product instance being prescribed, is actually a product type). See also MedicinalProductDefinition.code.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier[] | undefined;

  /**
   * MedicinalProductDefinition.type Element
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
   * MedicinalProductDefinition.domain Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** If this medicine applies to human or veterinary uses
   * - **Definition:** If this medicine applies to human or veterinary uses.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private domain?: CodeableConcept | undefined;

  /**
   * MedicinalProductDefinition.version Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A business identifier relating to a specific version of the product
   * - **Definition:** A business identifier relating to a specific version of the product, this is commonly used to support revisions to an existing product.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private version?: StringType | undefined;

  /**
   * MedicinalProductDefinition.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The status within the lifecycle of this product record
   * - **Definition:** The status within the lifecycle of this product record. A high-level status, this is not intended to duplicate details carried elsewhere such as legal status, or authorization status.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** true
   * - **isModifierReason:** This element is labelled as a modifier because it is a status element that can indicate that a record should not be treated as valid
   * - **isSummary:** true
   */
  private status?: CodeableConcept | undefined;

  /**
   * MedicinalProductDefinition.statusDate Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The date at which the given status became applicable
   * - **Definition:** The date at which the given status became applicable.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private statusDate?: DateTimeType | undefined;

  /**
   * MedicinalProductDefinition.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** General description of this product
   * - **Definition:** General description of this product.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private description?: MarkdownType | undefined;

  /**
   * MedicinalProductDefinition.combinedPharmaceuticalDoseForm Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The dose form for a single part product, or combined form of a multiple part product
   * - **Definition:** The dose form for a single part product, or combined form of a multiple part product. This is one concept that describes all the components. It does not represent the form with components physically mixed, if that might be necessary, for which see (AdministrableProductDefinition.administrableDoseForm).
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private combinedPharmaceuticalDoseForm?: CodeableConcept | undefined;

  /**
   * MedicinalProductDefinition.route Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The path by which the product is taken into or makes contact with the body
   * - **Definition:** The path by which the product is taken into or makes contact with the body. In some regions this is referred to as the licenced or approved route. See also AdministrableProductDefinition resource. MedicinalProductDefinition.route is the same concept as AdministrableProductDefinition.routeOfAdministration.code, and they cannot be used together.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private route?: CodeableConcept[] | undefined;

  /**
   * MedicinalProductDefinition.indication Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Description of indication(s) for this product, used when structured indications are not required
   * - **Definition:** Description of indication(s) for this product, used when structured indications are not required. In cases where structured indications are required, they are captured using the ClinicalUseDefinition resource. An indication is a medical situation for which using the product is appropriate.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private indication?: MarkdownType | undefined;

  /**
   * MedicinalProductDefinition.legalStatusOfSupply Element
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
   * MedicinalProductDefinition.additionalMonitoringIndicator Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Whether the Medicinal Product is subject to additional monitoring for regulatory reasons
   * - **Definition:** Whether the Medicinal Product is subject to additional monitoring for regulatory reasons, such as heightened reporting requirements.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private additionalMonitoringIndicator?: CodeableConcept | undefined;

  /**
   * MedicinalProductDefinition.specialMeasures Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Whether the Medicinal Product is subject to special measures for regulatory reasons
   * - **Definition:** Whether the Medicinal Product is subject to special measures for regulatory reasons, such as a requirement to conduct post-authorisation studies.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private specialMeasures?: CodeableConcept[] | undefined;

  /**
   * MedicinalProductDefinition.pediatricUseIndicator Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** If authorised for use in children
   * - **Definition:** If authorised for use in children, or infants, neonates etc.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private pediatricUseIndicator?: CodeableConcept | undefined;

  /**
   * MedicinalProductDefinition.classification Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Allows the product to be classified by various systems
   * - **Definition:** Allows the product to be classified by various systems, commonly WHO ATC.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private classification?: CodeableConcept[] | undefined;

  /**
   * MedicinalProductDefinition.marketingStatus Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Marketing status of the medicinal product, in contrast to marketing authorization
   * - **Definition:** Marketing status of the medicinal product, in contrast to marketing authorization. This refers to the product being actually \'on the market\' as opposed to being allowed to be on the market (which is an authorization).
   * - **FHIR Type:** `MarketingStatus`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private marketingStatus?: MarketingStatus[] | undefined;

  /**
   * MedicinalProductDefinition.packagedMedicinalProduct Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Package type for the product
   * - **Definition:** Package type for the product. See also the PackagedProductDefinition resource.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private packagedMedicinalProduct?: CodeableConcept[] | undefined;

  /**
   * MedicinalProductDefinition.ingredient Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The ingredients of this medicinal product - when not detailed in other resources
   * - **Definition:** The ingredients of this medicinal product - when not detailed in other resources. This is only needed if the ingredients are not specified by incoming references from the Ingredient resource, or indirectly via incoming AdministrableProductDefinition, PackagedProductDefinition or ManufacturedItemDefinition references. In cases where those levels of detail are not used, the ingredients may be specified directly here as codes.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private ingredient?: CodeableConcept[] | undefined;

  /**
   * MedicinalProductDefinition.impurity Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Any component of the drug product which is not the chemical entity defined as the drug substance, or an excipient in the drug product
   * - **Definition:** Any component of the drug product which is not the chemical entity defined as the drug substance, or an excipient in the drug product. This includes process-related impurities and contaminants, product-related impurities including degradation products.
   * - **FHIR Type:** `CodeableReference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/SubstanceDefinition',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private impurity?: CodeableReference[] | undefined;

  /**
   * MedicinalProductDefinition.attachedDocument Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Additional documentation about the medicinal product
   * - **Definition:** Additional information or supporting documentation about the medicinal product.
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
   * MedicinalProductDefinition.masterFile Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A master file for the medicinal product (e.g. Pharmacovigilance System Master File)
   * - **Definition:** A master file for the medicinal product (e.g. Pharmacovigilance System Master File). Drug master files (DMFs) are documents submitted to regulatory agencies to provide confidential detailed information about facilities, processes or articles used in the manufacturing, processing, packaging and storing of drug products.
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
   * MedicinalProductDefinition.contact Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A product specific contact, person (in a role), or an organization
   * - **Definition:** A product specific contact, person (in a role), or an organization.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private contact?: MedicinalProductDefinitionContactComponent[] | undefined;

  /**
   * MedicinalProductDefinition.clinicalTrial Element
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
   * MedicinalProductDefinition.code Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A code that this product is known by, within some formal terminology
   * - **Definition:** A code that this product is known by, usually within some formal terminology, perhaps assigned by a third party (i.e. not the manufacturer or regulator). Products (types of medications) tend to be known by identifiers during development and within regulatory process. However when they are prescribed they tend to be identified by codes. The same product may be have multiple codes, applied to it by multiple organizations.
   * - **FHIR Type:** `Coding`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private code?: Coding[] | undefined;

  /**
   * MedicinalProductDefinition.name Element
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
  private name: MedicinalProductDefinitionNameComponent[] | null;

  /**
   * MedicinalProductDefinition.crossReference Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Reference to another product, e.g. for linking authorised to investigational product
   * - **Definition:** Reference to another product, e.g. for linking authorised to investigational product, or a virtual product.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private crossReference?: MedicinalProductDefinitionCrossReferenceComponent[] | undefined;

  /**
   * MedicinalProductDefinition.operation Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A manufacturing or administrative process for the medicinal product
   * - **Definition:** A manufacturing or administrative process or step associated with (or performed on) the medicinal product.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private operation?: MedicinalProductDefinitionOperationComponent[] | undefined;

  /**
   * MedicinalProductDefinition.characteristic Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Key product features such as "sugar free", "modified release"
   * - **Definition:** Allows the key product features to be recorded, such as "sugar free", "modified release", "parallel import".
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private characteristic?: MedicinalProductDefinitionCharacteristicComponent[] | undefined;

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
      const optErrMsg = `Invalid MedicinalProductDefinition.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid MedicinalProductDefinition.identifier; Provided element is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid MedicinalProductDefinition.type; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `domain` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getDomain(): CodeableConcept {
    return this.domain ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Domain object value to the `domain` property.
   *
   * @param value - the `domain` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDomain(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid MedicinalProductDefinition.domain; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
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
    return isDefined<CodeableConcept>(this.domain) && !this.domain.isEmpty();
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
      const optErrMsg = `Invalid MedicinalProductDefinition.version; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid MedicinalProductDefinition.version (${String(value)})`;
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
      const optErrMsg = `Invalid MedicinalProductDefinition.status; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `statusDate` property value as a DateTimeType object if defined; else an empty DateTimeType object
   */
  public getStatusDateElement(): DateTimeType {
    return this.statusDate ?? new DateTimeType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `statusDate` property.
   *
   * @param element - the `statusDate` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setStatusDateElement(element: DateTimeType | undefined): this {
    if (isDefined<DateTimeType>(element)) {
      const optErrMsg = `Invalid MedicinalProductDefinition.statusDate; Provided element is not an instance of DateTimeType.`;
      assertFhirType<DateTimeType>(element, DateTimeType, optErrMsg);
      this.statusDate = element;
    } else {
      this.statusDate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `statusDate` property exists and has a value; `false` otherwise
   */
  public hasStatusDateElement(): boolean {
    return isDefined<DateTimeType>(this.statusDate) && !this.statusDate.isEmpty();
  }

  /**
   * @returns the `statusDate` property value as a fhirDateTime if defined; else undefined
   */
  public getStatusDate(): fhirDateTime | undefined {
    return this.statusDate?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `statusDate` property.
   *
   * @param value - the `statusDate` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setStatusDate(value: fhirDateTime | undefined): this {
    if (isDefined<fhirDateTime>(value)) {
      const optErrMsg = `Invalid MedicinalProductDefinition.statusDate (${String(value)})`;
      this.statusDate = new DateTimeType(parseFhirPrimitiveData(value, fhirDateTimeSchema, optErrMsg));
    } else {
      this.statusDate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `statusDate` property exists and has a value; `false` otherwise
   */
  public hasStatusDate(): boolean {
    return this.hasStatusDateElement();
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
      const optErrMsg = `Invalid MedicinalProductDefinition.description; Provided element is not an instance of MarkdownType.`;
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
      const optErrMsg = `Invalid MedicinalProductDefinition.description (${String(value)})`;
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
      const optErrMsg = `Invalid MedicinalProductDefinition.combinedPharmaceuticalDoseForm; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `route` property value as a CodeableConcept array
   */
  public getRoute(): CodeableConcept[] {
    return this.route ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `route` property.
   *
   * @param value - the `route` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setRoute(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid MedicinalProductDefinition.route; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.route = value;
    } else {
      this.route = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `route` array property.
   *
   * @param value - the `route` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addRoute(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid MedicinalProductDefinition.route; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initRoute();
      this.route?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `route` property exists and has a value; `false` otherwise
   */
  public hasRoute(): boolean {
    return isDefinedList<CodeableConcept>(this.route) && this.route.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `route` property
   */
  private initRoute(): void {
    if(!this.hasRoute()) {
      this.route = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `indication` property value as a MarkdownType object if defined; else an empty MarkdownType object
   */
  public getIndicationElement(): MarkdownType {
    return this.indication ?? new MarkdownType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `indication` property.
   *
   * @param element - the `indication` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setIndicationElement(element: MarkdownType | undefined): this {
    if (isDefined<MarkdownType>(element)) {
      const optErrMsg = `Invalid MedicinalProductDefinition.indication; Provided element is not an instance of MarkdownType.`;
      assertFhirType<MarkdownType>(element, MarkdownType, optErrMsg);
      this.indication = element;
    } else {
      this.indication = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `indication` property exists and has a value; `false` otherwise
   */
  public hasIndicationElement(): boolean {
    return isDefined<MarkdownType>(this.indication) && !this.indication.isEmpty();
  }

  /**
   * @returns the `indication` property value as a fhirMarkdown if defined; else undefined
   */
  public getIndication(): fhirMarkdown | undefined {
    return this.indication?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `indication` property.
   *
   * @param value - the `indication` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setIndication(value: fhirMarkdown | undefined): this {
    if (isDefined<fhirMarkdown>(value)) {
      const optErrMsg = `Invalid MedicinalProductDefinition.indication (${String(value)})`;
      this.indication = new MarkdownType(parseFhirPrimitiveData(value, fhirMarkdownSchema, optErrMsg));
    } else {
      this.indication = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `indication` property exists and has a value; `false` otherwise
   */
  public hasIndication(): boolean {
    return this.hasIndicationElement();
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
      const optErrMsg = `Invalid MedicinalProductDefinition.legalStatusOfSupply; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid MedicinalProductDefinition.additionalMonitoringIndicator; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `specialMeasures` property value as a CodeableConcept array
   */
  public getSpecialMeasures(): CodeableConcept[] {
    return this.specialMeasures ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `specialMeasures` property.
   *
   * @param value - the `specialMeasures` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSpecialMeasures(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid MedicinalProductDefinition.specialMeasures; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.specialMeasures = value;
    } else {
      this.specialMeasures = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `specialMeasures` array property.
   *
   * @param value - the `specialMeasures` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addSpecialMeasures(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid MedicinalProductDefinition.specialMeasures; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initSpecialMeasures();
      this.specialMeasures?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `specialMeasures` property exists and has a value; `false` otherwise
   */
  public hasSpecialMeasures(): boolean {
    return isDefinedList<CodeableConcept>(this.specialMeasures) && this.specialMeasures.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `specialMeasures` property
   */
  private initSpecialMeasures(): void {
    if(!this.hasSpecialMeasures()) {
      this.specialMeasures = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `pediatricUseIndicator` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getPediatricUseIndicator(): CodeableConcept {
    return this.pediatricUseIndicator ?? new CodeableConcept();
  }

  /**
   * Assigns the provided PediatricUseIndicator object value to the `pediatricUseIndicator` property.
   *
   * @param value - the `pediatricUseIndicator` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPediatricUseIndicator(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid MedicinalProductDefinition.pediatricUseIndicator; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.pediatricUseIndicator = value;
    } else {
      this.pediatricUseIndicator = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `pediatricUseIndicator` property exists and has a value; `false` otherwise
   */
  public hasPediatricUseIndicator(): boolean {
    return isDefined<CodeableConcept>(this.pediatricUseIndicator) && !this.pediatricUseIndicator.isEmpty();
  }

  /**
   * @returns the `classification` property value as a CodeableConcept array
   */
  public getClassification(): CodeableConcept[] {
    return this.classification ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `classification` property.
   *
   * @param value - the `classification` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setClassification(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid MedicinalProductDefinition.classification; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.classification = value;
    } else {
      this.classification = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `classification` array property.
   *
   * @param value - the `classification` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addClassification(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid MedicinalProductDefinition.classification; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initClassification();
      this.classification?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `classification` property exists and has a value; `false` otherwise
   */
  public hasClassification(): boolean {
    return isDefinedList<CodeableConcept>(this.classification) && this.classification.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `classification` property
   */
  private initClassification(): void {
    if(!this.hasClassification()) {
      this.classification = [] as CodeableConcept[];
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
      const optErrMsg = `Invalid MedicinalProductDefinition.marketingStatus; Provided value array has an element that is not an instance of MarketingStatus.`;
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
      const optErrMsg = `Invalid MedicinalProductDefinition.marketingStatus; Provided element is not an instance of MarketingStatus.`;
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
   * @returns the `packagedMedicinalProduct` property value as a CodeableConcept array
   */
  public getPackagedMedicinalProduct(): CodeableConcept[] {
    return this.packagedMedicinalProduct ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `packagedMedicinalProduct` property.
   *
   * @param value - the `packagedMedicinalProduct` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPackagedMedicinalProduct(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid MedicinalProductDefinition.packagedMedicinalProduct; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.packagedMedicinalProduct = value;
    } else {
      this.packagedMedicinalProduct = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `packagedMedicinalProduct` array property.
   *
   * @param value - the `packagedMedicinalProduct` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addPackagedMedicinalProduct(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid MedicinalProductDefinition.packagedMedicinalProduct; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initPackagedMedicinalProduct();
      this.packagedMedicinalProduct?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `packagedMedicinalProduct` property exists and has a value; `false` otherwise
   */
  public hasPackagedMedicinalProduct(): boolean {
    return isDefinedList<CodeableConcept>(this.packagedMedicinalProduct) && this.packagedMedicinalProduct.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `packagedMedicinalProduct` property
   */
  private initPackagedMedicinalProduct(): void {
    if(!this.hasPackagedMedicinalProduct()) {
      this.packagedMedicinalProduct = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `ingredient` property value as a CodeableConcept array
   */
  public getIngredient(): CodeableConcept[] {
    return this.ingredient ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `ingredient` property.
   *
   * @param value - the `ingredient` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setIngredient(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid MedicinalProductDefinition.ingredient; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.ingredient = value;
    } else {
      this.ingredient = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `ingredient` array property.
   *
   * @param value - the `ingredient` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addIngredient(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid MedicinalProductDefinition.ingredient; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initIngredient();
      this.ingredient?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `ingredient` property exists and has a value; `false` otherwise
   */
  public hasIngredient(): boolean {
    return isDefinedList<CodeableConcept>(this.ingredient) && this.ingredient.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `ingredient` property
   */
  private initIngredient(): void {
    if(!this.hasIngredient()) {
      this.ingredient = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `impurity` property value as a CodeableReference array
   */
  public getImpurity(): CodeableReference[] {
    return this.impurity ?? ([] as CodeableReference[]);
  }

  /**
   * Assigns the provided CodeableReference array value to the `impurity` property.
   *
   * @param value - the `impurity` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setImpurity(value: CodeableReference[] | undefined): this {
    if (isDefinedList<CodeableReference>(value)) {
      const optErrMsg = `Invalid MedicinalProductDefinition.impurity; Provided value array has an element that is not an instance of CodeableReference.`;
      assertFhirTypeList<CodeableReference>(value, CodeableReference, optErrMsg);
      this.impurity = value;
    } else {
      this.impurity = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableReference value to the `impurity` array property.
   *
   * @param value - the `impurity` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addImpurity(value: CodeableReference | undefined): this {
    if (isDefined<CodeableReference>(value)) {
      const optErrMsg = `Invalid MedicinalProductDefinition.impurity; Provided element is not an instance of CodeableReference.`;
      assertFhirType<CodeableReference>(value, CodeableReference, optErrMsg);
      this.initImpurity();
      this.impurity?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `impurity` property exists and has a value; `false` otherwise
   */
  public hasImpurity(): boolean {
    return isDefinedList<CodeableReference>(this.impurity) && this.impurity.some((item: CodeableReference) => !item.isEmpty());
  }

  /**
   * Initialize the `impurity` property
   */
  private initImpurity(): void {
    if(!this.hasImpurity()) {
      this.impurity = [] as CodeableReference[];
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
   * @decorator `@ReferenceTargets('MedicinalProductDefinition.attachedDocument', ['DocumentReference',])`
   *
   * @param value - the `attachedDocument` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicinalProductDefinition.attachedDocument', [
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
   * @decorator `@ReferenceTargets('MedicinalProductDefinition.attachedDocument', ['DocumentReference',])`
   *
   * @param value - the `attachedDocument` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicinalProductDefinition.attachedDocument', [
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
   * @decorator `@ReferenceTargets('MedicinalProductDefinition.masterFile', ['DocumentReference',])`
   *
   * @param value - the `masterFile` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicinalProductDefinition.masterFile', [
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
   * @decorator `@ReferenceTargets('MedicinalProductDefinition.masterFile', ['DocumentReference',])`
   *
   * @param value - the `masterFile` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicinalProductDefinition.masterFile', [
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
   * @returns the `contact` property value as a MedicinalProductDefinitionContactComponent array
   */
  public getContact(): MedicinalProductDefinitionContactComponent[] {
    return this.contact ?? ([] as MedicinalProductDefinitionContactComponent[]);
  }

  /**
   * Assigns the provided MedicinalProductDefinitionContactComponent array value to the `contact` property.
   *
   * @param value - the `contact` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setContact(value: MedicinalProductDefinitionContactComponent[] | undefined): this {
    if (isDefinedList<MedicinalProductDefinitionContactComponent>(value)) {
      const optErrMsg = `Invalid MedicinalProductDefinition.contact; Provided value array has an element that is not an instance of MedicinalProductDefinitionContactComponent.`;
      assertFhirTypeList<MedicinalProductDefinitionContactComponent>(value, MedicinalProductDefinitionContactComponent, optErrMsg);
      this.contact = value;
    } else {
      this.contact = undefined;
    }
    return this;
  }

  /**
   * Add the provided MedicinalProductDefinitionContactComponent value to the `contact` array property.
   *
   * @param value - the `contact` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addContact(value: MedicinalProductDefinitionContactComponent | undefined): this {
    if (isDefined<MedicinalProductDefinitionContactComponent>(value)) {
      const optErrMsg = `Invalid MedicinalProductDefinition.contact; Provided element is not an instance of MedicinalProductDefinitionContactComponent.`;
      assertFhirType<MedicinalProductDefinitionContactComponent>(value, MedicinalProductDefinitionContactComponent, optErrMsg);
      this.initContact();
      this.contact?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `contact` property exists and has a value; `false` otherwise
   */
  public hasContact(): boolean {
    return isDefinedList<MedicinalProductDefinitionContactComponent>(this.contact) && this.contact.some((item: MedicinalProductDefinitionContactComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `contact` property
   */
  private initContact(): void {
    if(!this.hasContact()) {
      this.contact = [] as MedicinalProductDefinitionContactComponent[];
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
   * @decorator `@ReferenceTargets('MedicinalProductDefinition.clinicalTrial', ['ResearchStudy',])`
   *
   * @param value - the `clinicalTrial` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicinalProductDefinition.clinicalTrial', [
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
   * @decorator `@ReferenceTargets('MedicinalProductDefinition.clinicalTrial', ['ResearchStudy',])`
   *
   * @param value - the `clinicalTrial` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicinalProductDefinition.clinicalTrial', [
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
   * @returns the `code` property value as a Coding array
   */
  public getCode(): Coding[] {
    return this.code ?? ([] as Coding[]);
  }

  /**
   * Assigns the provided Coding array value to the `code` property.
   *
   * @param value - the `code` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCode(value: Coding[] | undefined): this {
    if (isDefinedList<Coding>(value)) {
      const optErrMsg = `Invalid MedicinalProductDefinition.code; Provided value array has an element that is not an instance of Coding.`;
      assertFhirTypeList<Coding>(value, Coding, optErrMsg);
      this.code = value;
    } else {
      this.code = undefined;
    }
    return this;
  }

  /**
   * Add the provided Coding value to the `code` array property.
   *
   * @param value - the `code` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addCode(value: Coding | undefined): this {
    if (isDefined<Coding>(value)) {
      const optErrMsg = `Invalid MedicinalProductDefinition.code; Provided element is not an instance of Coding.`;
      assertFhirType<Coding>(value, Coding, optErrMsg);
      this.initCode();
      this.code?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `code` property exists and has a value; `false` otherwise
   */
  public hasCode(): boolean {
    return isDefinedList<Coding>(this.code) && this.code.some((item: Coding) => !item.isEmpty());
  }

  /**
   * Initialize the `code` property
   */
  private initCode(): void {
    if(!this.hasCode()) {
      this.code = [] as Coding[];
    }
  }

  /**
   * @returns the `name` property value as a MedicinalProductDefinitionNameComponent array
   */
  public getName(): MedicinalProductDefinitionNameComponent[] {
    return this.name ?? ([] as MedicinalProductDefinitionNameComponent[]);
  }

  /**
   * Assigns the provided MedicinalProductDefinitionNameComponent array value to the `name` property.
   *
   * @param value - the `name` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setName(value: MedicinalProductDefinitionNameComponent[] | undefined | null): this {
    if (isDefinedList<MedicinalProductDefinitionNameComponent>(value)) {
      const optErrMsg = `Invalid MedicinalProductDefinition.name; Provided value array has an element that is not an instance of MedicinalProductDefinitionNameComponent.`;
      assertFhirTypeList<MedicinalProductDefinitionNameComponent>(value, MedicinalProductDefinitionNameComponent, optErrMsg);
      this.name = value;
    } else {
      this.name = null;
    }
    return this;
  }

  /**
   * Add the provided MedicinalProductDefinitionNameComponent value to the `name` array property.
   *
   * @param value - the `name` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addName(value: MedicinalProductDefinitionNameComponent | undefined): this {
    if (isDefined<MedicinalProductDefinitionNameComponent>(value)) {
      const optErrMsg = `Invalid MedicinalProductDefinition.name; Provided element is not an instance of MedicinalProductDefinitionNameComponent.`;
      assertFhirType<MedicinalProductDefinitionNameComponent>(value, MedicinalProductDefinitionNameComponent, optErrMsg);
      this.initName();
      this.name?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `name` property exists and has a value; `false` otherwise
   */
  public hasName(): boolean {
    return isDefinedList<MedicinalProductDefinitionNameComponent>(this.name) && this.name.some((item: MedicinalProductDefinitionNameComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `name` property
   */
  private initName(): void {
    if(!this.hasName()) {
      this.name = [] as MedicinalProductDefinitionNameComponent[];
    }
  }

  /**
   * @returns the `crossReference` property value as a MedicinalProductDefinitionCrossReferenceComponent array
   */
  public getCrossReference(): MedicinalProductDefinitionCrossReferenceComponent[] {
    return this.crossReference ?? ([] as MedicinalProductDefinitionCrossReferenceComponent[]);
  }

  /**
   * Assigns the provided MedicinalProductDefinitionCrossReferenceComponent array value to the `crossReference` property.
   *
   * @param value - the `crossReference` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCrossReference(value: MedicinalProductDefinitionCrossReferenceComponent[] | undefined): this {
    if (isDefinedList<MedicinalProductDefinitionCrossReferenceComponent>(value)) {
      const optErrMsg = `Invalid MedicinalProductDefinition.crossReference; Provided value array has an element that is not an instance of MedicinalProductDefinitionCrossReferenceComponent.`;
      assertFhirTypeList<MedicinalProductDefinitionCrossReferenceComponent>(value, MedicinalProductDefinitionCrossReferenceComponent, optErrMsg);
      this.crossReference = value;
    } else {
      this.crossReference = undefined;
    }
    return this;
  }

  /**
   * Add the provided MedicinalProductDefinitionCrossReferenceComponent value to the `crossReference` array property.
   *
   * @param value - the `crossReference` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addCrossReference(value: MedicinalProductDefinitionCrossReferenceComponent | undefined): this {
    if (isDefined<MedicinalProductDefinitionCrossReferenceComponent>(value)) {
      const optErrMsg = `Invalid MedicinalProductDefinition.crossReference; Provided element is not an instance of MedicinalProductDefinitionCrossReferenceComponent.`;
      assertFhirType<MedicinalProductDefinitionCrossReferenceComponent>(value, MedicinalProductDefinitionCrossReferenceComponent, optErrMsg);
      this.initCrossReference();
      this.crossReference?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `crossReference` property exists and has a value; `false` otherwise
   */
  public hasCrossReference(): boolean {
    return isDefinedList<MedicinalProductDefinitionCrossReferenceComponent>(this.crossReference) && this.crossReference.some((item: MedicinalProductDefinitionCrossReferenceComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `crossReference` property
   */
  private initCrossReference(): void {
    if(!this.hasCrossReference()) {
      this.crossReference = [] as MedicinalProductDefinitionCrossReferenceComponent[];
    }
  }

  /**
   * @returns the `operation` property value as a MedicinalProductDefinitionOperationComponent array
   */
  public getOperation(): MedicinalProductDefinitionOperationComponent[] {
    return this.operation ?? ([] as MedicinalProductDefinitionOperationComponent[]);
  }

  /**
   * Assigns the provided MedicinalProductDefinitionOperationComponent array value to the `operation` property.
   *
   * @param value - the `operation` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setOperation(value: MedicinalProductDefinitionOperationComponent[] | undefined): this {
    if (isDefinedList<MedicinalProductDefinitionOperationComponent>(value)) {
      const optErrMsg = `Invalid MedicinalProductDefinition.operation; Provided value array has an element that is not an instance of MedicinalProductDefinitionOperationComponent.`;
      assertFhirTypeList<MedicinalProductDefinitionOperationComponent>(value, MedicinalProductDefinitionOperationComponent, optErrMsg);
      this.operation = value;
    } else {
      this.operation = undefined;
    }
    return this;
  }

  /**
   * Add the provided MedicinalProductDefinitionOperationComponent value to the `operation` array property.
   *
   * @param value - the `operation` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addOperation(value: MedicinalProductDefinitionOperationComponent | undefined): this {
    if (isDefined<MedicinalProductDefinitionOperationComponent>(value)) {
      const optErrMsg = `Invalid MedicinalProductDefinition.operation; Provided element is not an instance of MedicinalProductDefinitionOperationComponent.`;
      assertFhirType<MedicinalProductDefinitionOperationComponent>(value, MedicinalProductDefinitionOperationComponent, optErrMsg);
      this.initOperation();
      this.operation?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `operation` property exists and has a value; `false` otherwise
   */
  public hasOperation(): boolean {
    return isDefinedList<MedicinalProductDefinitionOperationComponent>(this.operation) && this.operation.some((item: MedicinalProductDefinitionOperationComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `operation` property
   */
  private initOperation(): void {
    if(!this.hasOperation()) {
      this.operation = [] as MedicinalProductDefinitionOperationComponent[];
    }
  }

  /**
   * @returns the `characteristic` property value as a MedicinalProductDefinitionCharacteristicComponent array
   */
  public getCharacteristic(): MedicinalProductDefinitionCharacteristicComponent[] {
    return this.characteristic ?? ([] as MedicinalProductDefinitionCharacteristicComponent[]);
  }

  /**
   * Assigns the provided MedicinalProductDefinitionCharacteristicComponent array value to the `characteristic` property.
   *
   * @param value - the `characteristic` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCharacteristic(value: MedicinalProductDefinitionCharacteristicComponent[] | undefined): this {
    if (isDefinedList<MedicinalProductDefinitionCharacteristicComponent>(value)) {
      const optErrMsg = `Invalid MedicinalProductDefinition.characteristic; Provided value array has an element that is not an instance of MedicinalProductDefinitionCharacteristicComponent.`;
      assertFhirTypeList<MedicinalProductDefinitionCharacteristicComponent>(value, MedicinalProductDefinitionCharacteristicComponent, optErrMsg);
      this.characteristic = value;
    } else {
      this.characteristic = undefined;
    }
    return this;
  }

  /**
   * Add the provided MedicinalProductDefinitionCharacteristicComponent value to the `characteristic` array property.
   *
   * @param value - the `characteristic` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addCharacteristic(value: MedicinalProductDefinitionCharacteristicComponent | undefined): this {
    if (isDefined<MedicinalProductDefinitionCharacteristicComponent>(value)) {
      const optErrMsg = `Invalid MedicinalProductDefinition.characteristic; Provided element is not an instance of MedicinalProductDefinitionCharacteristicComponent.`;
      assertFhirType<MedicinalProductDefinitionCharacteristicComponent>(value, MedicinalProductDefinitionCharacteristicComponent, optErrMsg);
      this.initCharacteristic();
      this.characteristic?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `characteristic` property exists and has a value; `false` otherwise
   */
  public hasCharacteristic(): boolean {
    return isDefinedList<MedicinalProductDefinitionCharacteristicComponent>(this.characteristic) && this.characteristic.some((item: MedicinalProductDefinitionCharacteristicComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `characteristic` property
   */
  private initCharacteristic(): void {
    if(!this.hasCharacteristic()) {
      this.characteristic = [] as MedicinalProductDefinitionCharacteristicComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'MedicinalProductDefinition';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identifier,
      this.type_,
      this.domain,
      this.version,
      this.status,
      this.statusDate,
      this.description,
      this.combinedPharmaceuticalDoseForm,
      this.route,
      this.indication,
      this.legalStatusOfSupply,
      this.additionalMonitoringIndicator,
      this.specialMeasures,
      this.pediatricUseIndicator,
      this.classification,
      this.marketingStatus,
      this.packagedMedicinalProduct,
      this.ingredient,
      this.impurity,
      this.attachedDocument,
      this.masterFile,
      this.contact,
      this.clinicalTrial,
      this.code,
      this.name,
      this.crossReference,
      this.operation,
      this.characteristic,
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
  public override copy(): MedicinalProductDefinition {
    const dest = new MedicinalProductDefinition();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: MedicinalProductDefinition): void {
    super.copyValues(dest);
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    dest.type_ = this.type_?.copy();
    dest.domain = this.domain?.copy();
    dest.version = this.version?.copy();
    dest.status = this.status?.copy();
    dest.statusDate = this.statusDate?.copy();
    dest.description = this.description?.copy();
    dest.combinedPharmaceuticalDoseForm = this.combinedPharmaceuticalDoseForm?.copy();
    const routeList = copyListValues<CodeableConcept>(this.route);
    dest.route = routeList.length === 0 ? undefined : routeList;
    dest.indication = this.indication?.copy();
    dest.legalStatusOfSupply = this.legalStatusOfSupply?.copy();
    dest.additionalMonitoringIndicator = this.additionalMonitoringIndicator?.copy();
    const specialMeasuresList = copyListValues<CodeableConcept>(this.specialMeasures);
    dest.specialMeasures = specialMeasuresList.length === 0 ? undefined : specialMeasuresList;
    dest.pediatricUseIndicator = this.pediatricUseIndicator?.copy();
    const classificationList = copyListValues<CodeableConcept>(this.classification);
    dest.classification = classificationList.length === 0 ? undefined : classificationList;
    const marketingStatusList = copyListValues<MarketingStatus>(this.marketingStatus);
    dest.marketingStatus = marketingStatusList.length === 0 ? undefined : marketingStatusList;
    const packagedMedicinalProductList = copyListValues<CodeableConcept>(this.packagedMedicinalProduct);
    dest.packagedMedicinalProduct = packagedMedicinalProductList.length === 0 ? undefined : packagedMedicinalProductList;
    const ingredientList = copyListValues<CodeableConcept>(this.ingredient);
    dest.ingredient = ingredientList.length === 0 ? undefined : ingredientList;
    const impurityList = copyListValues<CodeableReference>(this.impurity);
    dest.impurity = impurityList.length === 0 ? undefined : impurityList;
    const attachedDocumentList = copyListValues<Reference>(this.attachedDocument);
    dest.attachedDocument = attachedDocumentList.length === 0 ? undefined : attachedDocumentList;
    const masterFileList = copyListValues<Reference>(this.masterFile);
    dest.masterFile = masterFileList.length === 0 ? undefined : masterFileList;
    const contactList = copyListValues<MedicinalProductDefinitionContactComponent>(this.contact);
    dest.contact = contactList.length === 0 ? undefined : contactList;
    const clinicalTrialList = copyListValues<Reference>(this.clinicalTrial);
    dest.clinicalTrial = clinicalTrialList.length === 0 ? undefined : clinicalTrialList;
    const codeList = copyListValues<Coding>(this.code);
    dest.code = codeList.length === 0 ? undefined : codeList;
    const nameList = copyListValues<MedicinalProductDefinitionNameComponent>(this.name);
    dest.name = nameList.length === 0 ? null : nameList;
    const crossReferenceList = copyListValues<MedicinalProductDefinitionCrossReferenceComponent>(this.crossReference);
    dest.crossReference = crossReferenceList.length === 0 ? undefined : crossReferenceList;
    const operationList = copyListValues<MedicinalProductDefinitionOperationComponent>(this.operation);
    dest.operation = operationList.length === 0 ? undefined : operationList;
    const characteristicList = copyListValues<MedicinalProductDefinitionCharacteristicComponent>(this.characteristic);
    dest.characteristic = characteristicList.length === 0 ? undefined : characteristicList;
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

    if (this.hasVersionElement()) {
      setFhirPrimitiveJson<fhirString>(this.getVersionElement(), 'version', jsonObj);
    }

    if (this.hasStatus()) {
      setFhirComplexJson(this.getStatus(), 'status', jsonObj);
    }

    if (this.hasStatusDateElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getStatusDateElement(), 'statusDate', jsonObj);
    }

    if (this.hasDescriptionElement()) {
      setFhirPrimitiveJson<fhirMarkdown>(this.getDescriptionElement(), 'description', jsonObj);
    }

    if (this.hasCombinedPharmaceuticalDoseForm()) {
      setFhirComplexJson(this.getCombinedPharmaceuticalDoseForm(), 'combinedPharmaceuticalDoseForm', jsonObj);
    }

    if (this.hasRoute()) {
      setFhirComplexListJson(this.getRoute(), 'route', jsonObj);
    }

    if (this.hasIndicationElement()) {
      setFhirPrimitiveJson<fhirMarkdown>(this.getIndicationElement(), 'indication', jsonObj);
    }

    if (this.hasLegalStatusOfSupply()) {
      setFhirComplexJson(this.getLegalStatusOfSupply(), 'legalStatusOfSupply', jsonObj);
    }

    if (this.hasAdditionalMonitoringIndicator()) {
      setFhirComplexJson(this.getAdditionalMonitoringIndicator(), 'additionalMonitoringIndicator', jsonObj);
    }

    if (this.hasSpecialMeasures()) {
      setFhirComplexListJson(this.getSpecialMeasures(), 'specialMeasures', jsonObj);
    }

    if (this.hasPediatricUseIndicator()) {
      setFhirComplexJson(this.getPediatricUseIndicator(), 'pediatricUseIndicator', jsonObj);
    }

    if (this.hasClassification()) {
      setFhirComplexListJson(this.getClassification(), 'classification', jsonObj);
    }

    if (this.hasMarketingStatus()) {
      setFhirComplexListJson(this.getMarketingStatus(), 'marketingStatus', jsonObj);
    }

    if (this.hasPackagedMedicinalProduct()) {
      setFhirComplexListJson(this.getPackagedMedicinalProduct(), 'packagedMedicinalProduct', jsonObj);
    }

    if (this.hasIngredient()) {
      setFhirComplexListJson(this.getIngredient(), 'ingredient', jsonObj);
    }

    if (this.hasImpurity()) {
      setFhirComplexListJson(this.getImpurity(), 'impurity', jsonObj);
    }

    if (this.hasAttachedDocument()) {
      setFhirComplexListJson(this.getAttachedDocument(), 'attachedDocument', jsonObj);
    }

    if (this.hasMasterFile()) {
      setFhirComplexListJson(this.getMasterFile(), 'masterFile', jsonObj);
    }

    if (this.hasContact()) {
      setFhirBackboneElementListJson(this.getContact(), 'contact', jsonObj);
    }

    if (this.hasClinicalTrial()) {
      setFhirComplexListJson(this.getClinicalTrial(), 'clinicalTrial', jsonObj);
    }

    if (this.hasCode()) {
      setFhirComplexListJson(this.getCode(), 'code', jsonObj);
    }

    if (this.hasName()) {
      setFhirBackboneElementListJson(this.getName(), 'name', jsonObj);
    }

    if (this.hasCrossReference()) {
      setFhirBackboneElementListJson(this.getCrossReference(), 'crossReference', jsonObj);
    }

    if (this.hasOperation()) {
      setFhirBackboneElementListJson(this.getOperation(), 'operation', jsonObj);
    }

    if (this.hasCharacteristic()) {
      setFhirBackboneElementListJson(this.getCharacteristic(), 'characteristic', jsonObj);
    }

    return jsonObj;
  }
}

/**
 * MedicinalProductDefinitionContactComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** A product specific contact, person (in a role), or an organization
 * - **Definition:** A product specific contact, person (in a role), or an organization.
 *
 * @category Data Models: Resource
 * @see [FHIR MedicinalProductDefinition](http://hl7.org/fhir/StructureDefinition/MedicinalProductDefinition)
 */
export class MedicinalProductDefinitionContactComponent extends BackboneElement implements IBackboneElement {
  constructor(contact: Reference | null = null) {
    super();

    this.contact = null;
    if (isDefined<Reference>(contact)) {
      this.setContact(contact);
    }
  }

  /**
   * Parse the provided `MedicinalProductDefinitionContactComponent` JSON to instantiate the MedicinalProductDefinitionContactComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `MedicinalProductDefinitionContactComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to MedicinalProductDefinitionContactComponent
   * @returns MedicinalProductDefinitionContactComponent data model or undefined for `MedicinalProductDefinitionContactComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): MedicinalProductDefinitionContactComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'MedicinalProductDefinitionContactComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new MedicinalProductDefinitionContactComponent();

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

    fieldName = 'contact';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setContact(null);
      } else {
        instance.setContact(datatype);
      }
    } else {
      instance.setContact(null);
    }

    return instance;
  }

  /**
   * MedicinalProductDefinition.contact.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Allows the contact to be classified, for example QPPV, Pharmacovigilance Enquiry Information
   * - **Definition:** Allows the contact to be classified, for example QPPV, Pharmacovigilance Enquiry Information.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private type_?: CodeableConcept | undefined;

  /**
   * MedicinalProductDefinition.contact.contact Element
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
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private contact: Reference | null;

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
      const optErrMsg = `Invalid MedicinalProductDefinition.contact.type; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `contact` property value as a Reference object if defined; else an empty Reference object
   */
  public getContact(): Reference {
    return this.contact ?? new Reference();
  }

  /**
   * Assigns the provided Contact object value to the `contact` property.
   *
   * @decorator `@ReferenceTargets('MedicinalProductDefinition.contact.contact', ['Organization','PractitionerRole',])`
   *
   * @param value - the `contact` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicinalProductDefinition.contact.contact', [
    'Organization',
  
    'PractitionerRole',
  ])
  public setContact(value: Reference | undefined | null): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.contact = value;
    } else {
      this.contact = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `contact` property exists and has a value; `false` otherwise
   */
  public hasContact(): boolean {
    return isDefined<Reference>(this.contact) && !this.contact.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'MedicinalProductDefinition.contact';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.type_,
      this.contact,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.contact, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): MedicinalProductDefinitionContactComponent {
    const dest = new MedicinalProductDefinitionContactComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: MedicinalProductDefinitionContactComponent): void {
    super.copyValues(dest);
    dest.type_ = this.type_?.copy();
    dest.contact = this.contact ? this.contact.copy() : null;
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

    if (this.hasContact()) {
      setFhirComplexJson(this.getContact(), 'contact', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * MedicinalProductDefinitionNameComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** The product\'s name, including full name and possibly coded parts
 * - **Definition:** The product\'s name, including full name and possibly coded parts.
 *
 * @category Data Models: Resource
 * @see [FHIR MedicinalProductDefinition](http://hl7.org/fhir/StructureDefinition/MedicinalProductDefinition)
 */
export class MedicinalProductDefinitionNameComponent extends BackboneElement implements IBackboneElement {
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
   * Parse the provided `MedicinalProductDefinitionNameComponent` JSON to instantiate the MedicinalProductDefinitionNameComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `MedicinalProductDefinitionNameComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to MedicinalProductDefinitionNameComponent
   * @returns MedicinalProductDefinitionNameComponent data model or undefined for `MedicinalProductDefinitionNameComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): MedicinalProductDefinitionNameComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'MedicinalProductDefinitionNameComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new MedicinalProductDefinitionNameComponent();

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

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setType(datatype);
    }

    fieldName = 'namePart';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: MedicinalProductDefinitionNameNamePartComponent | undefined = MedicinalProductDefinitionNameNamePartComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
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
          const component: MedicinalProductDefinitionNameCountryLanguageComponent | undefined = MedicinalProductDefinitionNameCountryLanguageComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addCountryLanguage(component);
          }
        });
      }
    }

    return instance;
  }

  /**
   * MedicinalProductDefinition.name.productName Element
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
   * MedicinalProductDefinition.name.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Type of product name, such as rINN, BAN, Proprietary, Non-Proprietary
   * - **Definition:** Type of product name, such as rINN, BAN, Proprietary, Non-Proprietary.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private type_?: CodeableConcept | undefined;

  /**
   * MedicinalProductDefinition.name.namePart Element
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
  private namePart?: MedicinalProductDefinitionNameNamePartComponent[] | undefined;

  /**
   * MedicinalProductDefinition.name.countryLanguage Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Country and jurisdiction where the name applies
   * - **Definition:** Country and jurisdiction where the name applies, and associated language.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private countryLanguage?: MedicinalProductDefinitionNameCountryLanguageComponent[] | undefined;

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
      const optErrMsg = `Invalid MedicinalProductDefinition.name.productName; Provided value is not an instance of StringType.`;
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
      const optErrMsg = `Invalid MedicinalProductDefinition.name.productName (${String(value)})`;
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
      const optErrMsg = `Invalid MedicinalProductDefinition.name.type; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `namePart` property value as a MedicinalProductDefinitionNameNamePartComponent array
   */
  public getNamePart(): MedicinalProductDefinitionNameNamePartComponent[] {
    return this.namePart ?? ([] as MedicinalProductDefinitionNameNamePartComponent[]);
  }

  /**
   * Assigns the provided MedicinalProductDefinitionNameNamePartComponent array value to the `namePart` property.
   *
   * @param value - the `namePart` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setNamePart(value: MedicinalProductDefinitionNameNamePartComponent[] | undefined): this {
    if (isDefinedList<MedicinalProductDefinitionNameNamePartComponent>(value)) {
      const optErrMsg = `Invalid MedicinalProductDefinition.name.namePart; Provided value array has an element that is not an instance of MedicinalProductDefinitionNameNamePartComponent.`;
      assertFhirTypeList<MedicinalProductDefinitionNameNamePartComponent>(value, MedicinalProductDefinitionNameNamePartComponent, optErrMsg);
      this.namePart = value;
    } else {
      this.namePart = undefined;
    }
    return this;
  }

  /**
   * Add the provided MedicinalProductDefinitionNameNamePartComponent value to the `namePart` array property.
   *
   * @param value - the `namePart` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addNamePart(value: MedicinalProductDefinitionNameNamePartComponent | undefined): this {
    if (isDefined<MedicinalProductDefinitionNameNamePartComponent>(value)) {
      const optErrMsg = `Invalid MedicinalProductDefinition.name.namePart; Provided element is not an instance of MedicinalProductDefinitionNameNamePartComponent.`;
      assertFhirType<MedicinalProductDefinitionNameNamePartComponent>(value, MedicinalProductDefinitionNameNamePartComponent, optErrMsg);
      this.initNamePart();
      this.namePart?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `namePart` property exists and has a value; `false` otherwise
   */
  public hasNamePart(): boolean {
    return isDefinedList<MedicinalProductDefinitionNameNamePartComponent>(this.namePart) && this.namePart.some((item: MedicinalProductDefinitionNameNamePartComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `namePart` property
   */
  private initNamePart(): void {
    if(!this.hasNamePart()) {
      this.namePart = [] as MedicinalProductDefinitionNameNamePartComponent[];
    }
  }

  /**
   * @returns the `countryLanguage` property value as a MedicinalProductDefinitionNameCountryLanguageComponent array
   */
  public getCountryLanguage(): MedicinalProductDefinitionNameCountryLanguageComponent[] {
    return this.countryLanguage ?? ([] as MedicinalProductDefinitionNameCountryLanguageComponent[]);
  }

  /**
   * Assigns the provided MedicinalProductDefinitionNameCountryLanguageComponent array value to the `countryLanguage` property.
   *
   * @param value - the `countryLanguage` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCountryLanguage(value: MedicinalProductDefinitionNameCountryLanguageComponent[] | undefined): this {
    if (isDefinedList<MedicinalProductDefinitionNameCountryLanguageComponent>(value)) {
      const optErrMsg = `Invalid MedicinalProductDefinition.name.countryLanguage; Provided value array has an element that is not an instance of MedicinalProductDefinitionNameCountryLanguageComponent.`;
      assertFhirTypeList<MedicinalProductDefinitionNameCountryLanguageComponent>(value, MedicinalProductDefinitionNameCountryLanguageComponent, optErrMsg);
      this.countryLanguage = value;
    } else {
      this.countryLanguage = undefined;
    }
    return this;
  }

  /**
   * Add the provided MedicinalProductDefinitionNameCountryLanguageComponent value to the `countryLanguage` array property.
   *
   * @param value - the `countryLanguage` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addCountryLanguage(value: MedicinalProductDefinitionNameCountryLanguageComponent | undefined): this {
    if (isDefined<MedicinalProductDefinitionNameCountryLanguageComponent>(value)) {
      const optErrMsg = `Invalid MedicinalProductDefinition.name.countryLanguage; Provided element is not an instance of MedicinalProductDefinitionNameCountryLanguageComponent.`;
      assertFhirType<MedicinalProductDefinitionNameCountryLanguageComponent>(value, MedicinalProductDefinitionNameCountryLanguageComponent, optErrMsg);
      this.initCountryLanguage();
      this.countryLanguage?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `countryLanguage` property exists and has a value; `false` otherwise
   */
  public hasCountryLanguage(): boolean {
    return isDefinedList<MedicinalProductDefinitionNameCountryLanguageComponent>(this.countryLanguage) && this.countryLanguage.some((item: MedicinalProductDefinitionNameCountryLanguageComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `countryLanguage` property
   */
  private initCountryLanguage(): void {
    if(!this.hasCountryLanguage()) {
      this.countryLanguage = [] as MedicinalProductDefinitionNameCountryLanguageComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'MedicinalProductDefinition.name';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.productName,
      this.type_,
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
  public override copy(): MedicinalProductDefinitionNameComponent {
    const dest = new MedicinalProductDefinitionNameComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: MedicinalProductDefinitionNameComponent): void {
    super.copyValues(dest);
    dest.productName = this.productName ? this.productName.copy() : null;
    dest.type_ = this.type_?.copy();
    const namePartList = copyListValues<MedicinalProductDefinitionNameNamePartComponent>(this.namePart);
    dest.namePart = namePartList.length === 0 ? undefined : namePartList;
    const countryLanguageList = copyListValues<MedicinalProductDefinitionNameCountryLanguageComponent>(this.countryLanguage);
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

    if (this.hasType()) {
      setFhirComplexJson(this.getType(), 'type', jsonObj);
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
 * MedicinalProductDefinitionNameNamePartComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Coding words or phrases of the name
 * - **Definition:** Coding words or phrases of the name.
 *
 * @category Data Models: Resource
 * @see [FHIR MedicinalProductDefinition](http://hl7.org/fhir/StructureDefinition/MedicinalProductDefinition)
 */
export class MedicinalProductDefinitionNameNamePartComponent extends BackboneElement implements IBackboneElement {
  constructor(part: StringType | fhirString | null = null, type_: CodeableConcept | null = null) {
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
    if (isDefined<CodeableConcept>(type_)) {
      this.setType(type_);
    }
  }

  /**
   * Parse the provided `MedicinalProductDefinitionNameNamePartComponent` JSON to instantiate the MedicinalProductDefinitionNameNamePartComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `MedicinalProductDefinitionNameNamePartComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to MedicinalProductDefinitionNameNamePartComponent
   * @returns MedicinalProductDefinitionNameNamePartComponent data model or undefined for `MedicinalProductDefinitionNameNamePartComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): MedicinalProductDefinitionNameNamePartComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'MedicinalProductDefinitionNameNamePartComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new MedicinalProductDefinitionNameNamePartComponent();

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
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
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
   * MedicinalProductDefinition.name.namePart.part Element
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
   * MedicinalProductDefinition.name.namePart.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Identifying type for this part of the name (e.g. strength part)
   * - **Definition:** Identifying type for this part of the name (e.g. strength part).
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private type_: CodeableConcept | null;

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
      const optErrMsg = `Invalid MedicinalProductDefinition.name.namePart.part; Provided value is not an instance of StringType.`;
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
      const optErrMsg = `Invalid MedicinalProductDefinition.name.namePart.part (${String(value)})`;
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
      const optErrMsg = `Invalid MedicinalProductDefinition.name.namePart.type; Provided element is not an instance of CodeableConcept.`;
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

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'MedicinalProductDefinition.name.namePart';
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
  public override copy(): MedicinalProductDefinitionNameNamePartComponent {
    const dest = new MedicinalProductDefinitionNameNamePartComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: MedicinalProductDefinitionNameNamePartComponent): void {
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
 * MedicinalProductDefinitionNameCountryLanguageComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Country and jurisdiction where the name applies
 * - **Definition:** Country and jurisdiction where the name applies, and associated language.
 *
 * @category Data Models: Resource
 * @see [FHIR MedicinalProductDefinition](http://hl7.org/fhir/StructureDefinition/MedicinalProductDefinition)
 */
export class MedicinalProductDefinitionNameCountryLanguageComponent extends BackboneElement implements IBackboneElement {
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
   * Parse the provided `MedicinalProductDefinitionNameCountryLanguageComponent` JSON to instantiate the MedicinalProductDefinitionNameCountryLanguageComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `MedicinalProductDefinitionNameCountryLanguageComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to MedicinalProductDefinitionNameCountryLanguageComponent
   * @returns MedicinalProductDefinitionNameCountryLanguageComponent data model or undefined for `MedicinalProductDefinitionNameCountryLanguageComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): MedicinalProductDefinitionNameCountryLanguageComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'MedicinalProductDefinitionNameCountryLanguageComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new MedicinalProductDefinitionNameCountryLanguageComponent();

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
   * MedicinalProductDefinition.name.countryLanguage.country Element
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
   * MedicinalProductDefinition.name.countryLanguage.jurisdiction Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Jurisdiction code for where this name applies
   * - **Definition:** Jurisdiction code for where this name applies. A jurisdiction may be a sub- or supra-national entity (e.g. a state or a geographic region).
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private jurisdiction?: CodeableConcept | undefined;

  /**
   * MedicinalProductDefinition.name.countryLanguage.language Element
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
      const optErrMsg = `Invalid MedicinalProductDefinition.name.countryLanguage.country; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid MedicinalProductDefinition.name.countryLanguage.jurisdiction; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid MedicinalProductDefinition.name.countryLanguage.language; Provided element is not an instance of CodeableConcept.`;
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
    return 'MedicinalProductDefinition.name.countryLanguage';
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
  public override copy(): MedicinalProductDefinitionNameCountryLanguageComponent {
    const dest = new MedicinalProductDefinitionNameCountryLanguageComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: MedicinalProductDefinitionNameCountryLanguageComponent): void {
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
 * MedicinalProductDefinitionCrossReferenceComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Reference to another product, e.g. for linking authorised to investigational product
 * - **Definition:** Reference to another product, e.g. for linking authorised to investigational product, or a virtual product.
 *
 * @category Data Models: Resource
 * @see [FHIR MedicinalProductDefinition](http://hl7.org/fhir/StructureDefinition/MedicinalProductDefinition)
 */
export class MedicinalProductDefinitionCrossReferenceComponent extends BackboneElement implements IBackboneElement {
  constructor(product: CodeableReference | null = null) {
    super();

    this.product = null;
    if (isDefined<CodeableReference>(product)) {
      this.setProduct(product);
    }
  }

  /**
   * Parse the provided `MedicinalProductDefinitionCrossReferenceComponent` JSON to instantiate the MedicinalProductDefinitionCrossReferenceComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `MedicinalProductDefinitionCrossReferenceComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to MedicinalProductDefinitionCrossReferenceComponent
   * @returns MedicinalProductDefinitionCrossReferenceComponent data model or undefined for `MedicinalProductDefinitionCrossReferenceComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): MedicinalProductDefinitionCrossReferenceComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'MedicinalProductDefinitionCrossReferenceComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new MedicinalProductDefinitionCrossReferenceComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    fieldName = 'product';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableReference | undefined = CodeableReference.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setProduct(null);
      } else {
        instance.setProduct(datatype);
      }
    } else {
      instance.setProduct(null);
    }

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setType(datatype);
    }

    return instance;
  }

  /**
   * MedicinalProductDefinition.crossReference.product Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Reference to another product, e.g. for linking authorised to investigational product
   * - **Definition:** Reference to another product, e.g. for linking authorised to investigational product.
   * - **FHIR Type:** `CodeableReference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/MedicinalProductDefinition',
   *     ]
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private product: CodeableReference | null;

  /**
   * MedicinalProductDefinition.crossReference.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The type of relationship, for instance branded to generic or virtual to actual product
   * - **Definition:** The type of relationship, for instance branded to generic, virtual to actual product, product to development product (investigational), parallel import version.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private type_?: CodeableConcept | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `product` property value as a CodeableReference object if defined; else an empty CodeableReference object
   */
  public getProduct(): CodeableReference {
    return this.product ?? new CodeableReference();
  }

  /**
   * Assigns the provided CodeableReference object value to the `product` property.
   *
   * @param value - the `product` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setProduct(value: CodeableReference | undefined | null): this {
    if (isDefined<CodeableReference>(value)) {
      const optErrMsg = `Invalid MedicinalProductDefinition.crossReference.product; Provided element is not an instance of CodeableReference.`;
      assertFhirType<CodeableReference>(value, CodeableReference, optErrMsg);
      this.product = value;
    } else {
      this.product = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `product` property exists and has a value; `false` otherwise
   */
  public hasProduct(): boolean {
    return isDefined<CodeableReference>(this.product) && !this.product.isEmpty();
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
      const optErrMsg = `Invalid MedicinalProductDefinition.crossReference.type; Provided element is not an instance of CodeableConcept.`;
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

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'MedicinalProductDefinition.crossReference';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.product,
      this.type_,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.product, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): MedicinalProductDefinitionCrossReferenceComponent {
    const dest = new MedicinalProductDefinitionCrossReferenceComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: MedicinalProductDefinitionCrossReferenceComponent): void {
    super.copyValues(dest);
    dest.product = this.product ? this.product.copy() : null;
    dest.type_ = this.type_?.copy();
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

    if (this.hasProduct()) {
      setFhirComplexJson(this.getProduct(), 'product', jsonObj);
    }

    if (this.hasType()) {
      setFhirComplexJson(this.getType(), 'type', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * MedicinalProductDefinitionOperationComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** A manufacturing or administrative process for the medicinal product
 * - **Definition:** A manufacturing or administrative process or step associated with (or performed on) the medicinal product.
 *
 * @category Data Models: Resource
 * @see [FHIR MedicinalProductDefinition](http://hl7.org/fhir/StructureDefinition/MedicinalProductDefinition)
 */
export class MedicinalProductDefinitionOperationComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `MedicinalProductDefinitionOperationComponent` JSON to instantiate the MedicinalProductDefinitionOperationComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `MedicinalProductDefinitionOperationComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to MedicinalProductDefinitionOperationComponent
   * @returns MedicinalProductDefinitionOperationComponent data model or undefined for `MedicinalProductDefinitionOperationComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): MedicinalProductDefinitionOperationComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'MedicinalProductDefinitionOperationComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new MedicinalProductDefinitionOperationComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableReference | undefined = CodeableReference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setType(datatype);
    }

    fieldName = 'effectiveDate';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Period | undefined = Period.parse(classJsonObj[fieldName]!, sourceField);
      instance.setEffectiveDate(datatype);
    }

    fieldName = 'organization';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addOrganization(datatype);
          }
        });
      }
  }

    fieldName = 'confidentialityIndicator';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setConfidentialityIndicator(datatype);
    }

    return instance;
  }

  /**
   * MedicinalProductDefinition.operation.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The type of manufacturing operation e.g. manufacturing itself, re-packaging
   * - **Definition:** The type of manufacturing operation e.g. manufacturing itself, re-packaging. For the authorization of this, a RegulatedAuthorization would point to the same plan or activity referenced here.
   * - **FHIR Type:** `CodeableReference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/ActivityDefinition',
   *       'http://hl7.org/fhir/StructureDefinition/PlanDefinition',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private type_?: CodeableReference | undefined;

  /**
   * MedicinalProductDefinition.operation.effectiveDate Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Date range of applicability
   * - **Definition:** Date range of applicability.
   * - **FHIR Type:** `Period`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private effectiveDate?: Period | undefined;

  /**
   * MedicinalProductDefinition.operation.organization Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The organization responsible for the particular process, e.g. the manufacturer or importer
   * - **Definition:** The organization or establishment responsible for (or associated with) the particular process or step, examples include the manufacturer, importer, agent.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private organization?: Reference[] | undefined;

  /**
   * MedicinalProductDefinition.operation.confidentialityIndicator Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Specifies whether this process is considered proprietary or confidential
   * - **Definition:** Specifies whether this particular business or manufacturing process is considered proprietary or confidential.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private confidentialityIndicator?: CodeableConcept | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `type_` property value as a CodeableReference object if defined; else an empty CodeableReference object
   */
  public getType(): CodeableReference {
    return this.type_ ?? new CodeableReference();
  }

  /**
   * Assigns the provided Type object value to the `type_` property.
   *
   * @param value - the `type_` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setType(value: CodeableReference | undefined): this {
    if (isDefined<CodeableReference>(value)) {
      const optErrMsg = `Invalid MedicinalProductDefinition.operation.type; Provided element is not an instance of CodeableReference.`;
      assertFhirType<CodeableReference>(value, CodeableReference, optErrMsg);
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
    return isDefined<CodeableReference>(this.type_) && !this.type_.isEmpty();
  }

  /**
   * @returns the `effectiveDate` property value as a Period object if defined; else an empty Period object
   */
  public getEffectiveDate(): Period {
    return this.effectiveDate ?? new Period();
  }

  /**
   * Assigns the provided EffectiveDate object value to the `effectiveDate` property.
   *
   * @param value - the `effectiveDate` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setEffectiveDate(value: Period | undefined): this {
    if (isDefined<Period>(value)) {
      const optErrMsg = `Invalid MedicinalProductDefinition.operation.effectiveDate; Provided element is not an instance of Period.`;
      assertFhirType<Period>(value, Period, optErrMsg);
      this.effectiveDate = value;
    } else {
      this.effectiveDate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `effectiveDate` property exists and has a value; `false` otherwise
   */
  public hasEffectiveDate(): boolean {
    return isDefined<Period>(this.effectiveDate) && !this.effectiveDate.isEmpty();
  }

  /**
   * @returns the `organization` property value as a Reference array
   */
  public getOrganization(): Reference[] {
    return this.organization ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `organization` property.
   *
   * @decorator `@ReferenceTargets('MedicinalProductDefinition.operation.organization', ['Organization',])`
   *
   * @param value - the `organization` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicinalProductDefinition.operation.organization', [
    'Organization',
  ])
  public setOrganization(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.organization = value;
    } else {
      this.organization = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `organization` array property.
   *
   * @decorator `@ReferenceTargets('MedicinalProductDefinition.operation.organization', ['Organization',])`
   *
   * @param value - the `organization` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicinalProductDefinition.operation.organization', [
    'Organization',
  ])
  public addOrganization(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initOrganization();
      this.organization?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `organization` property exists and has a value; `false` otherwise
   */
  public hasOrganization(): boolean {
    return isDefinedList<Reference>(this.organization) && this.organization.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `organization` property
   */
  private initOrganization(): void {
    if (!this.hasOrganization()) {
      this.organization = [] as Reference[];
    }
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
      const optErrMsg = `Invalid MedicinalProductDefinition.operation.confidentialityIndicator; Provided element is not an instance of CodeableConcept.`;
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

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'MedicinalProductDefinition.operation';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.type_,
      this.effectiveDate,
      this.organization,
      this.confidentialityIndicator,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): MedicinalProductDefinitionOperationComponent {
    const dest = new MedicinalProductDefinitionOperationComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: MedicinalProductDefinitionOperationComponent): void {
    super.copyValues(dest);
    dest.type_ = this.type_?.copy();
    dest.effectiveDate = this.effectiveDate?.copy();
    const organizationList = copyListValues<Reference>(this.organization);
    dest.organization = organizationList.length === 0 ? undefined : organizationList;
    dest.confidentialityIndicator = this.confidentialityIndicator?.copy();
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

    if (this.hasEffectiveDate()) {
      setFhirComplexJson(this.getEffectiveDate(), 'effectiveDate', jsonObj);
    }

    if (this.hasOrganization()) {
      setFhirComplexListJson(this.getOrganization(), 'organization', jsonObj);
    }

    if (this.hasConfidentialityIndicator()) {
      setFhirComplexJson(this.getConfidentialityIndicator(), 'confidentialityIndicator', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * MedicinalProductDefinitionCharacteristicComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Key product features such as "sugar free", "modified release"
 * - **Definition:** Allows the key product features to be recorded, such as "sugar free", "modified release", "parallel import".
 *
 * @category Data Models: Resource
 * @see [FHIR MedicinalProductDefinition](http://hl7.org/fhir/StructureDefinition/MedicinalProductDefinition)
 */
export class MedicinalProductDefinitionCharacteristicComponent extends BackboneElement implements IBackboneElement {
  constructor(type_: CodeableConcept | null = null) {
    super();

    this.type_ = null;
    if (isDefined<CodeableConcept>(type_)) {
      this.setType(type_);
    }
  }

  /**
   * Parse the provided `MedicinalProductDefinitionCharacteristicComponent` JSON to instantiate the MedicinalProductDefinitionCharacteristicComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `MedicinalProductDefinitionCharacteristicComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to MedicinalProductDefinitionCharacteristicComponent
   * @returns MedicinalProductDefinitionCharacteristicComponent data model or undefined for `MedicinalProductDefinitionCharacteristicComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): MedicinalProductDefinitionCharacteristicComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'MedicinalProductDefinitionCharacteristicComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new MedicinalProductDefinitionCharacteristicComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    const classMetadata: DecoratorMetadataObject | null = MedicinalProductDefinitionCharacteristicComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for MedicinalProductDefinitionCharacteristicComponent`;
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
    instance.setValue(value);

    return instance;
  }

  /**
   * MedicinalProductDefinition.characteristic.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A code expressing the type of characteristic
   * - **Definition:** A code expressing the type of characteristic.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private type_: CodeableConcept | null;

  /**
   * MedicinalProductDefinition.characteristic.value[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('MedicinalProductDefinition.characteristic.value[x]', ['CodeableConcept','Quantity','date','boolean','Attachment',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A value for the characteristic
   * - **Definition:** A value for the characteristic.
   * - **FHIR Types:**
   *     'CodeableConcept',
   *     'Quantity',
   *     'date',
   *     'boolean',
   *     'Attachment',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  @ChoiceDataTypesMeta('MedicinalProductDefinition.characteristic.value[x]',[
    'CodeableConcept',
    'Quantity',
    'date',
    'boolean',
    'Attachment',
  ])
  private value?: IDataType | undefined;

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
      const optErrMsg = `Invalid MedicinalProductDefinition.characteristic.type; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `value` property value as a DataType object if defined; else undefined
   */
  public getValue(): IDataType | undefined {
    return this.value;
  }

  /**
   * Assigns the provided DataType object value to the `value` property.
   *
   * @decorator `@ChoiceDataTypes('MedicinalProductDefinition.characteristic.value[x]')`
   *
   * @param value - the `value` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('MedicinalProductDefinition.characteristic.value[x]')
  public setValue(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.value = value;
    } else {
      this.value = undefined;
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
   * @returns the `value` property value as a CodeableConcept object if defined; else undefined
   */
  public getValueCodeableConcept(): CodeableConcept | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof CodeableConcept)) {
      throw new InvalidTypeError(
        `DataType mismatch for MedicinalProductDefinition.characteristic.value[x]: Expected CodeableConcept but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `value` property exists as a CodeableConcept and has a value; `false` otherwise
   */
  public hasValueCodeableConcept(): boolean {
    return this.hasValue() && this.value instanceof CodeableConcept;
  }

  /**
   * @returns the `value` property value as a Quantity object if defined; else undefined
   */
  public getValueQuantity(): Quantity | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof Quantity)) {
      throw new InvalidTypeError(
        `DataType mismatch for MedicinalProductDefinition.characteristic.value[x]: Expected Quantity but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `value` property exists as a Quantity and has a value; `false` otherwise
   */
  public hasValueQuantity(): boolean {
    return this.hasValue() && this.value instanceof Quantity;
  }

  /**
   * @returns the `value` property value as a DateType object if defined; else undefined
   */
  public getValueDateType(): DateType | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof DateType)) {
      throw new InvalidTypeError(
        `DataType mismatch for MedicinalProductDefinition.characteristic.value[x]: Expected DateType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `value` property exists as a DateType and has a value; `false` otherwise
   */
  public hasValueDateType(): boolean {
    return this.hasValue() && this.value instanceof DateType;
  }

  /**
   * @returns the `value` property value as a BooleanType object if defined; else undefined
   */
  public getValueBooleanType(): BooleanType | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof BooleanType)) {
      throw new InvalidTypeError(
        `DataType mismatch for MedicinalProductDefinition.characteristic.value[x]: Expected BooleanType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `value` property exists as a BooleanType and has a value; `false` otherwise
   */
  public hasValueBooleanType(): boolean {
    return this.hasValue() && this.value instanceof BooleanType;
  }

  /**
   * @returns the `value` property value as a Attachment object if defined; else undefined
   */
  public getValueAttachment(): Attachment | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof Attachment)) {
      throw new InvalidTypeError(
        `DataType mismatch for MedicinalProductDefinition.characteristic.value[x]: Expected Attachment but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `value` property exists as a Attachment and has a value; `false` otherwise
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
    return 'MedicinalProductDefinition.characteristic';
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
      this.type_, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): MedicinalProductDefinitionCharacteristicComponent {
    const dest = new MedicinalProductDefinitionCharacteristicComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: MedicinalProductDefinitionCharacteristicComponent): void {
    super.copyValues(dest);
    dest.type_ = this.type_ ? this.type_.copy() : null;
    dest.value = this.value?.copy() as IDataType;
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
