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
 * MedicationKnowledge Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/MedicationKnowledge
 * StructureDefinition.name: MedicationKnowledge
 * StructureDefinition.description: Information about a medication that is used to support knowledge.
 * StructureDefinition.fhirVersion: 4.0.1
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
  DomainResource,
  EnumCodeType,
  FhirParser,
  IBackboneElement,
  IDataType,
  IDomainResource,
  InvalidTypeError,
  JSON,
  MarkdownType,
  PrimitiveType,
  PrimitiveTypeJson,
  ReferenceTargets,
  StringType,
  assertEnumCodeType,
  assertFhirType,
  assertFhirTypeList,
  assertIsDefined,
  copyListValues,
  fhirBoolean,
  fhirBooleanSchema,
  fhirCode,
  fhirCodeSchema,
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
  setFhirBackboneElementListJson,
  setFhirComplexJson,
  setFhirComplexListJson,
  setFhirPrimitiveJson,
  setFhirPrimitiveListJson,
  setPolymorphicValueJson,
} from '@paq-ts-fhir/fhir-core';
import { CodeableConcept, Dosage, Duration, Money, PARSABLE_DATATYPE_MAP, Quantity, Ratio, Reference } from '../complex-types/complex-datatypes';
import { MedicationknowledgeStatusEnum } from '../code-systems/MedicationknowledgeStatusEnum';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Symbol.metadata polyfill secret sauce for decorator metadata
(Symbol.metadata as any) ??= Symbol('Symbol.metadata');

/**
 * MedicationKnowledge Class
 *
 * @remarks
 * Information about a medication that is used to support knowledge.
 *
 * **FHIR Specification**
 * - **Short:** Definition of Medication Knowledge
 * - **Definition:** Information about a medication that is used to support knowledge.
 * - **FHIR Version:** 4.0.1
 *
 * @category Data Models: Resource
 * @see [FHIR MedicationKnowledge](http://hl7.org/fhir/StructureDefinition/MedicationKnowledge)
 */
export class MedicationKnowledge extends DomainResource implements IDomainResource {
  constructor() {
    super();

    this.medicationknowledgeStatusEnum = new MedicationknowledgeStatusEnum();
  }

  /**
   * Parse the provided `MedicationKnowledge` JSON to instantiate the MedicationKnowledge data model.
   *
   * @param sourceJson - JSON representing FHIR `MedicationKnowledge`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to MedicationKnowledge
   * @returns MedicationKnowledge data model or undefined for `MedicationKnowledge`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): MedicationKnowledge | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'MedicationKnowledge';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new MedicationKnowledge();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'MedicationKnowledge');
    fhirParser.processDomainResourceJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'code';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setCode(datatype);
    }

    fieldName = 'status';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setStatusElement(datatype);
    }

    fieldName = 'manufacturer';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setManufacturer(datatype);
    }

    fieldName = 'doseForm';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setDoseForm(datatype);
    }

    fieldName = 'amount';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Quantity | undefined = Quantity.parse(classJsonObj[fieldName]!, sourceField);
      instance.setAmount(datatype);
    }

    fieldName = 'synonym';
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
            instance.addSynonymElement(datatype);
          }
        });
      }
    }

    fieldName = 'relatedMedicationKnowledge';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: MedicationKnowledgeRelatedMedicationKnowledgeComponent | undefined = MedicationKnowledgeRelatedMedicationKnowledgeComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addRelatedMedicationKnowledge(component);
          }
        });
      }
    }

    fieldName = 'associatedMedication';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addAssociatedMedication(datatype);
          }
        });
      }
  }

    fieldName = 'productType';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addProductType(datatype);
          }
        });
      }
    }

    fieldName = 'monograph';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: MedicationKnowledgeMonographComponent | undefined = MedicationKnowledgeMonographComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addMonograph(component);
          }
        });
      }
    }

    fieldName = 'ingredient';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: MedicationKnowledgeIngredientComponent | undefined = MedicationKnowledgeIngredientComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addIngredient(component);
          }
        });
      }
    }

    fieldName = 'preparationInstruction';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: MarkdownType | undefined = fhirParser.parseMarkdownType(dtJson, dtSiblingJson);
      instance.setPreparationInstructionElement(datatype);
    }

    fieldName = 'intendedRoute';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addIntendedRoute(datatype);
          }
        });
      }
    }

    fieldName = 'cost';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: MedicationKnowledgeCostComponent | undefined = MedicationKnowledgeCostComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addCost(component);
          }
        });
      }
    }

    fieldName = 'monitoringProgram';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: MedicationKnowledgeMonitoringProgramComponent | undefined = MedicationKnowledgeMonitoringProgramComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addMonitoringProgram(component);
          }
        });
      }
    }

    fieldName = 'administrationGuidelines';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: MedicationKnowledgeAdministrationGuidelinesComponent | undefined = MedicationKnowledgeAdministrationGuidelinesComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addAdministrationGuidelines(component);
          }
        });
      }
    }

    fieldName = 'medicineClassification';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: MedicationKnowledgeMedicineClassificationComponent | undefined = MedicationKnowledgeMedicineClassificationComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addMedicineClassification(component);
          }
        });
      }
    }

    fieldName = 'packaging';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: MedicationKnowledgePackagingComponent | undefined = MedicationKnowledgePackagingComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setPackaging(component);
    }

    fieldName = 'drugCharacteristic';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: MedicationKnowledgeDrugCharacteristicComponent | undefined = MedicationKnowledgeDrugCharacteristicComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addDrugCharacteristic(component);
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
          const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addContraindication(datatype);
          }
        });
      }
  }

    fieldName = 'regulatory';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: MedicationKnowledgeRegulatoryComponent | undefined = MedicationKnowledgeRegulatoryComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addRegulatory(component);
          }
        });
      }
    }

    fieldName = 'kinetics';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: MedicationKnowledgeKineticsComponent | undefined = MedicationKnowledgeKineticsComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addKinetics(component);
          }
        });
      }
    }

    return instance;
  }

  /**
   * MedicationKnowledge.code Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Code that identifies this medication
   * - **Definition:** A code that specifies this medication, or a textual description if no code is available. Usage note: This could be a standard medication code such as a code from RxNorm, SNOMED CT, IDMP etc. It could also be a national or local formulary code, optionally with translations to other code systems.
   * - **Comment:** Depending on the context of use, the code that was actually selected by the user (prescriber, dispenser, etc.) will have the coding.userSelected set to true.  As described in the coding datatype: "A coding may be marked as a "userSelected" if a user selected the particular coded value in a user interface (e.g. the user selects an item in a pick-list). If a user selected coding exists, it is the preferred choice for performing translations etc. Other codes can only be literal translations to alternative code systems, or codes at a lower level of granularity (e.g. a generic code for a vendor-specific primary one).
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private code?: CodeableConcept | undefined;

  /**
   * FHIR CodeSystem: MedicationknowledgeStatus
   *
   * @see {@link MedicationknowledgeStatusEnum }
   */
  private readonly medicationknowledgeStatusEnum: MedicationknowledgeStatusEnum;

  /**
   * MedicationKnowledge.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** active | inactive | entered-in-error
   * - **Definition:** A code to indicate if the medication is in active use.  The status refers to the validity about the information of the medication and not to its medicinal properties.
   * - **Comment:** This status is intended to identify if the medication in a local system is in active use within a drug database or inventory.  For example, a pharmacy system may create a new drug file record for a compounded product "ABC Hospital Special Cream" with an active status.  At some point in the future, it may be determined that the drug record was created with an error and the status is changed to "entered in error".   This status is not intended to specify if a medication is part of a particular formulary.  It is possible that the drug record may be referenced by multiple formularies or catalogues and each of those entries would have a separate status.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** true
   * - **isModifierReason:** This element changes the interpretation of all descriptive attributes.
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link MedicationknowledgeStatusEnum }
   */
  private status?: EnumCodeType | undefined;

  /**
   * MedicationKnowledge.manufacturer Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Manufacturer of the item
   * - **Definition:** Describes the details of the manufacturer of the medication product.  This is not intended to represent the distributor of a medication product.
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
   * MedicationKnowledge.doseForm Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** powder | tablets | capsule +
   * - **Definition:** Describes the form of the item.  Powder; tablets; capsule.
   * - **Comment:** When Medication is referenced from MedicationRequest, this is the ordered form.  When Medication is referenced within MedicationDispense, this is the dispensed form.  When Medication is referenced within MedicationAdministration, this is administered form.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private doseForm?: CodeableConcept | undefined;

  /**
   * MedicationKnowledge.amount Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Amount of drug in package
   * - **Definition:** Specific amount of the drug in the packaged product.  For example, when specifying a product that has the same strength (For example, Insulin glargine 100 unit per mL solution for injection), this attribute provides additional clarification of the package amount (For example, 3 mL, 10mL, etc.).
   * - **Comment:** This is the quantity of medication in a package.  To specify the strength of the medication, the Ingredient.strength attribute is used.
   * - **FHIR Type:** `Quantity`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private amount?: Quantity | undefined;

  /**
   * MedicationKnowledge.synonym Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Additional names for a medication
   * - **Definition:** Additional names for a medication, for example, the name(s) given to a medication in different countries.  For example, acetaminophen and paracetamol or salbutamol and albuterol.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private synonym?: StringType[] | undefined;

  /**
   * MedicationKnowledge.relatedMedicationKnowledge Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Associated or related medication information
   * - **Definition:** Associated or related knowledge about a medication.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private relatedMedicationKnowledge?: MedicationKnowledgeRelatedMedicationKnowledgeComponent[] | undefined;

  /**
   * MedicationKnowledge.associatedMedication Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A medication resource that is associated with this medication
   * - **Definition:** Associated or related medications.  For example, if the medication is a branded product (e.g. Crestor), this is the Therapeutic Moeity (e.g. Rosuvastatin) or if this is a generic medication (e.g. Rosuvastatin), this would link to a branded product (e.g. Crestor).
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Medication',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private associatedMedication?: Reference[] | undefined;

  /**
   * MedicationKnowledge.productType Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Category of the medication or product
   * - **Definition:** Category of the medication or product (e.g. branded product, therapeutic moeity, generic product, innovator product, etc.).
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private productType?: CodeableConcept[] | undefined;

  /**
   * MedicationKnowledge.monograph Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Associated documentation about the medication
   * - **Definition:** Associated documentation about the medication.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private monograph?: MedicationKnowledgeMonographComponent[] | undefined;

  /**
   * MedicationKnowledge.ingredient Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Active or inactive ingredient
   * - **Definition:** Identifies a particular constituent of interest in the product.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private ingredient?: MedicationKnowledgeIngredientComponent[] | undefined;

  /**
   * MedicationKnowledge.preparationInstruction Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The instructions for preparing the medication
   * - **Definition:** The instructions for preparing the medication.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private preparationInstruction?: MarkdownType | undefined;

  /**
   * MedicationKnowledge.intendedRoute Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The intended or approved route of administration
   * - **Definition:** The intended or approved route of administration.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private intendedRoute?: CodeableConcept[] | undefined;

  /**
   * MedicationKnowledge.cost Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The pricing of the medication
   * - **Definition:** The price of the medication.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private cost?: MedicationKnowledgeCostComponent[] | undefined;

  /**
   * MedicationKnowledge.monitoringProgram Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Program under which a medication is reviewed
   * - **Definition:** The program under which the medication is reviewed.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private monitoringProgram?: MedicationKnowledgeMonitoringProgramComponent[] | undefined;

  /**
   * MedicationKnowledge.administrationGuidelines Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Guidelines for administration of the medication
   * - **Definition:** Guidelines for the administration of the medication.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private administrationGuidelines?: MedicationKnowledgeAdministrationGuidelinesComponent[] | undefined;

  /**
   * MedicationKnowledge.medicineClassification Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Categorization of the medication within a formulary or classification system
   * - **Definition:** Categorization of the medication within a formulary or classification system.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private medicineClassification?: MedicationKnowledgeMedicineClassificationComponent[] | undefined;

  /**
   * MedicationKnowledge.packaging Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Details about packaged medications
   * - **Definition:** Information that only applies to packages (not products).
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private packaging?: MedicationKnowledgePackagingComponent | undefined;

  /**
   * MedicationKnowledge.drugCharacteristic Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Specifies descriptive properties of the medicine
   * - **Definition:** Specifies descriptive properties of the medicine, such as color, shape, imprints, etc.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private drugCharacteristic?: MedicationKnowledgeDrugCharacteristicComponent[] | undefined;

  /**
   * MedicationKnowledge.contraindication Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Potential clinical issue with or between medication(s)
   * - **Definition:** Potential clinical issue with or between medication(s) (for example, drug-drug interaction, drug-disease contraindication, drug-allergy interaction, etc.).
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/DetectedIssue',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private contraindication?: Reference[] | undefined;

  /**
   * MedicationKnowledge.regulatory Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Regulatory information about a medication
   * - **Definition:** Regulatory information about a medication.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private regulatory?: MedicationKnowledgeRegulatoryComponent[] | undefined;

  /**
   * MedicationKnowledge.kinetics Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The time course of drug absorption, distribution, metabolism and excretion of a medication from the body
   * - **Definition:** The time course of drug absorption, distribution, metabolism and excretion of a medication from the body.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private kinetics?: MedicationKnowledgeKineticsComponent[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `code` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getCode(): CodeableConcept {
    return this.code ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Code object value to the `code` property.
   *
   * @param value - the `code` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCode(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid MedicationKnowledge.code; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.code = value;
    } else {
      this.code = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `code` property exists and has a value; `false` otherwise
   */
  public hasCode(): boolean {
    return isDefined<CodeableConcept>(this.code) && !this.code.isEmpty();
  }

  /**
   * @returns the `status` property value as a EnumCodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link MedicationknowledgeStatusEnum }
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
   * @see CodeSystem Enumeration: {@link MedicationknowledgeStatusEnum }
   */
  public setStatusEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = 'Invalid MedicationKnowledge.status';
      assertEnumCodeType<MedicationknowledgeStatusEnum>(enumType, MedicationknowledgeStatusEnum, errMsgPrefix);
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
   * @see CodeSystem Enumeration: {@link MedicationknowledgeStatusEnum }
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
   * @see CodeSystem Enumeration: {@link MedicationknowledgeStatusEnum }
   */
  public setStatusElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid MedicationKnowledge.status; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.status = new EnumCodeType(element, this.medicationknowledgeStatusEnum);
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
   * @see CodeSystem Enumeration: {@link MedicationknowledgeStatusEnum }
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
   * @see CodeSystem Enumeration: {@link MedicationknowledgeStatusEnum }
   */
  public setStatus(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid MedicationKnowledge.status; Provided value is not an instance of fhirCode.`;
      this.status = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.medicationknowledgeStatusEnum);
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
   * @returns the `manufacturer` property value as a Reference object; else an empty Reference object
   */
  public getManufacturer(): Reference {
    return this.manufacturer ?? new Reference();
  }

  /**
   * Assigns the provided Manufacturer object value to the `manufacturer` property.
   *
   * @decorator `@ReferenceTargets('MedicationKnowledge.manufacturer', ['Organization',])`
   *
   * @param value - the `manufacturer` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicationKnowledge.manufacturer', [
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
   * @returns the `doseForm` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getDoseForm(): CodeableConcept {
    return this.doseForm ?? new CodeableConcept();
  }

  /**
   * Assigns the provided DoseForm object value to the `doseForm` property.
   *
   * @param value - the `doseForm` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDoseForm(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid MedicationKnowledge.doseForm; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.doseForm = value;
    } else {
      this.doseForm = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `doseForm` property exists and has a value; `false` otherwise
   */
  public hasDoseForm(): boolean {
    return isDefined<CodeableConcept>(this.doseForm) && !this.doseForm.isEmpty();
  }

  /**
   * @returns the `amount` property value as a Quantity object if defined; else an empty Quantity object
   */
  public getAmount(): Quantity {
    return this.amount ?? new Quantity();
  }

  /**
   * Assigns the provided Amount object value to the `amount` property.
   *
   * @param value - the `amount` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAmount(value: Quantity | undefined): this {
    if (isDefined<Quantity>(value)) {
      const optErrMsg = `Invalid MedicationKnowledge.amount; Provided element is not an instance of Quantity.`;
      assertFhirType<Quantity>(value, Quantity, optErrMsg);
      this.amount = value;
    } else {
      this.amount = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `amount` property exists and has a value; `false` otherwise
   */
  public hasAmount(): boolean {
    return isDefined<Quantity>(this.amount) && !this.amount.isEmpty();
  }

  /**
   * @returns the `synonym` property value as a StringType array
   */
  public getSynonymElement(): StringType[] {
    return this.synonym ?? ([] as StringType[]);
  }

  /**
   * Assigns the provided StringType array value to the `synonym` property.
   *
   * @param element - the `synonym` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSynonymElement(element: StringType[] | undefined): this {
    if (isDefinedList<StringType>(element)) {
      const optErrMsg = `Invalid MedicationKnowledge.synonym; Provided value array has an element that is not an instance of StringType.`;
      assertFhirTypeList<StringType>(element, StringType, optErrMsg);
      this.synonym = element;
    } else {
      this.synonym = undefined;
    }
    return this;
  }

  /**
   * Add the provided StringType value to the `synonym` array property.
   *
   * @param element - the `synonym` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addSynonymElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid MedicationKnowledge.synonym; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.initSynonym();
      this.synonym?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `synonym` property exists and has a value; `false` otherwise
   */
  public hasSynonymElement(): boolean {
    return isDefinedList<StringType>(this.synonym) && this.synonym.some((item: StringType) => !item.isEmpty());
  }

  /**
   * @returns the `synonym` property value as a fhirString array
   */
  public getSynonym(): fhirString[] {
    this.initSynonym();
    const synonymValues = [] as fhirString[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.synonym!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        synonymValues.push(value);
      }
    }
    return synonymValues;
  }

  /**
   * Assigns the provided primitive value array to the `synonym` property.
   *
   * @param value - the `synonym` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSynonym(value: fhirString[] | undefined): this {
    if (isDefinedList<fhirString>(value)) {
      const synonymElements = [] as StringType[];
      for (const synonymValue of value) {
        const optErrMsg = `Invalid MedicationKnowledge.synonym array item (${String(synonymValue)})`;
        const element = new StringType(parseFhirPrimitiveData(synonymValue, fhirStringSchema, optErrMsg));
        synonymElements.push(element);
      }
      this.synonym = synonymElements;
    } else {
      this.synonym = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `synonym` array property.
   *
   * @param value - the `synonym` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addSynonym(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid MedicationKnowledge.synonym array item (${String(value)})`;
      const element = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
      this.initSynonym();
      this.addSynonymElement(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `synonym` property exists and has a value; `false` otherwise
   */
  public hasSynonym(): boolean {
    return this.hasSynonymElement();
  }

  /**
   * Initialize the `synonym` property
   */
  private initSynonym(): void {
    if (!this.hasSynonym()) {
      this.synonym = [] as StringType[];
    }
  }

  /**
   * @returns the `relatedMedicationKnowledge` property value as a MedicationKnowledgeRelatedMedicationKnowledgeComponent array
   */
  public getRelatedMedicationKnowledge(): MedicationKnowledgeRelatedMedicationKnowledgeComponent[] {
    return this.relatedMedicationKnowledge ?? ([] as MedicationKnowledgeRelatedMedicationKnowledgeComponent[]);
  }

  /**
   * Assigns the provided MedicationKnowledgeRelatedMedicationKnowledgeComponent array value to the `relatedMedicationKnowledge` property.
   *
   * @param value - the `relatedMedicationKnowledge` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setRelatedMedicationKnowledge(value: MedicationKnowledgeRelatedMedicationKnowledgeComponent[] | undefined): this {
    if (isDefinedList<MedicationKnowledgeRelatedMedicationKnowledgeComponent>(value)) {
      const optErrMsg = `Invalid MedicationKnowledge.relatedMedicationKnowledge; Provided value array has an element that is not an instance of MedicationKnowledgeRelatedMedicationKnowledgeComponent.`;
      assertFhirTypeList<MedicationKnowledgeRelatedMedicationKnowledgeComponent>(value, MedicationKnowledgeRelatedMedicationKnowledgeComponent, optErrMsg);
      this.relatedMedicationKnowledge = value;
    } else {
      this.relatedMedicationKnowledge = undefined;
    }
    return this;
  }

  /**
   * Add the provided MedicationKnowledgeRelatedMedicationKnowledgeComponent value to the `relatedMedicationKnowledge` array property.
   *
   * @param value - the `relatedMedicationKnowledge` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addRelatedMedicationKnowledge(value: MedicationKnowledgeRelatedMedicationKnowledgeComponent | undefined): this {
    if (isDefined<MedicationKnowledgeRelatedMedicationKnowledgeComponent>(value)) {
      const optErrMsg = `Invalid MedicationKnowledge.relatedMedicationKnowledge; Provided element is not an instance of MedicationKnowledgeRelatedMedicationKnowledgeComponent.`;
      assertFhirType<MedicationKnowledgeRelatedMedicationKnowledgeComponent>(value, MedicationKnowledgeRelatedMedicationKnowledgeComponent, optErrMsg);
      this.initRelatedMedicationKnowledge();
      this.relatedMedicationKnowledge?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `relatedMedicationKnowledge` property exists and has a value; `false` otherwise
   */
  public hasRelatedMedicationKnowledge(): boolean {
    return isDefinedList<MedicationKnowledgeRelatedMedicationKnowledgeComponent>(this.relatedMedicationKnowledge) && this.relatedMedicationKnowledge.some((item: MedicationKnowledgeRelatedMedicationKnowledgeComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `relatedMedicationKnowledge` property
   */
  private initRelatedMedicationKnowledge(): void {
    if(!this.hasRelatedMedicationKnowledge()) {
      this.relatedMedicationKnowledge = [] as MedicationKnowledgeRelatedMedicationKnowledgeComponent[];
    }
  }

  /**
   * @returns the `associatedMedication` property value as a Reference array
   */
  public getAssociatedMedication(): Reference[] {
    return this.associatedMedication ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `associatedMedication` property.
   *
   * @decorator `@ReferenceTargets('MedicationKnowledge.associatedMedication', ['Medication',])`
   *
   * @param value - the `associatedMedication` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicationKnowledge.associatedMedication', [
    'Medication',
  ])
  public setAssociatedMedication(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.associatedMedication = value;
    } else {
      this.associatedMedication = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `associatedMedication` array property.
   *
   * @decorator `@ReferenceTargets('MedicationKnowledge.associatedMedication', ['Medication',])`
   *
   * @param value - the `associatedMedication` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicationKnowledge.associatedMedication', [
    'Medication',
  ])
  public addAssociatedMedication(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initAssociatedMedication();
      this.associatedMedication?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `associatedMedication` property exists and has a value; `false` otherwise
   */
  public hasAssociatedMedication(): boolean {
    return isDefinedList<Reference>(this.associatedMedication) && this.associatedMedication.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `associatedMedication` property
   */
  private initAssociatedMedication(): void {
    if (!this.hasAssociatedMedication()) {
      this.associatedMedication = [] as Reference[];
    }
  }

  /**
   * @returns the `productType` property value as a CodeableConcept array
   */
  public getProductType(): CodeableConcept[] {
    return this.productType ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `productType` property.
   *
   * @param value - the `productType` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setProductType(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid MedicationKnowledge.productType; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.productType = value;
    } else {
      this.productType = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `productType` array property.
   *
   * @param value - the `productType` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addProductType(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid MedicationKnowledge.productType; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initProductType();
      this.productType?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `productType` property exists and has a value; `false` otherwise
   */
  public hasProductType(): boolean {
    return isDefinedList<CodeableConcept>(this.productType) && this.productType.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `productType` property
   */
  private initProductType(): void {
    if(!this.hasProductType()) {
      this.productType = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `monograph` property value as a MedicationKnowledgeMonographComponent array
   */
  public getMonograph(): MedicationKnowledgeMonographComponent[] {
    return this.monograph ?? ([] as MedicationKnowledgeMonographComponent[]);
  }

  /**
   * Assigns the provided MedicationKnowledgeMonographComponent array value to the `monograph` property.
   *
   * @param value - the `monograph` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setMonograph(value: MedicationKnowledgeMonographComponent[] | undefined): this {
    if (isDefinedList<MedicationKnowledgeMonographComponent>(value)) {
      const optErrMsg = `Invalid MedicationKnowledge.monograph; Provided value array has an element that is not an instance of MedicationKnowledgeMonographComponent.`;
      assertFhirTypeList<MedicationKnowledgeMonographComponent>(value, MedicationKnowledgeMonographComponent, optErrMsg);
      this.monograph = value;
    } else {
      this.monograph = undefined;
    }
    return this;
  }

  /**
   * Add the provided MedicationKnowledgeMonographComponent value to the `monograph` array property.
   *
   * @param value - the `monograph` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addMonograph(value: MedicationKnowledgeMonographComponent | undefined): this {
    if (isDefined<MedicationKnowledgeMonographComponent>(value)) {
      const optErrMsg = `Invalid MedicationKnowledge.monograph; Provided element is not an instance of MedicationKnowledgeMonographComponent.`;
      assertFhirType<MedicationKnowledgeMonographComponent>(value, MedicationKnowledgeMonographComponent, optErrMsg);
      this.initMonograph();
      this.monograph?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `monograph` property exists and has a value; `false` otherwise
   */
  public hasMonograph(): boolean {
    return isDefinedList<MedicationKnowledgeMonographComponent>(this.monograph) && this.monograph.some((item: MedicationKnowledgeMonographComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `monograph` property
   */
  private initMonograph(): void {
    if(!this.hasMonograph()) {
      this.monograph = [] as MedicationKnowledgeMonographComponent[];
    }
  }

  /**
   * @returns the `ingredient` property value as a MedicationKnowledgeIngredientComponent array
   */
  public getIngredient(): MedicationKnowledgeIngredientComponent[] {
    return this.ingredient ?? ([] as MedicationKnowledgeIngredientComponent[]);
  }

  /**
   * Assigns the provided MedicationKnowledgeIngredientComponent array value to the `ingredient` property.
   *
   * @param value - the `ingredient` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setIngredient(value: MedicationKnowledgeIngredientComponent[] | undefined): this {
    if (isDefinedList<MedicationKnowledgeIngredientComponent>(value)) {
      const optErrMsg = `Invalid MedicationKnowledge.ingredient; Provided value array has an element that is not an instance of MedicationKnowledgeIngredientComponent.`;
      assertFhirTypeList<MedicationKnowledgeIngredientComponent>(value, MedicationKnowledgeIngredientComponent, optErrMsg);
      this.ingredient = value;
    } else {
      this.ingredient = undefined;
    }
    return this;
  }

  /**
   * Add the provided MedicationKnowledgeIngredientComponent value to the `ingredient` array property.
   *
   * @param value - the `ingredient` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addIngredient(value: MedicationKnowledgeIngredientComponent | undefined): this {
    if (isDefined<MedicationKnowledgeIngredientComponent>(value)) {
      const optErrMsg = `Invalid MedicationKnowledge.ingredient; Provided element is not an instance of MedicationKnowledgeIngredientComponent.`;
      assertFhirType<MedicationKnowledgeIngredientComponent>(value, MedicationKnowledgeIngredientComponent, optErrMsg);
      this.initIngredient();
      this.ingredient?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `ingredient` property exists and has a value; `false` otherwise
   */
  public hasIngredient(): boolean {
    return isDefinedList<MedicationKnowledgeIngredientComponent>(this.ingredient) && this.ingredient.some((item: MedicationKnowledgeIngredientComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `ingredient` property
   */
  private initIngredient(): void {
    if(!this.hasIngredient()) {
      this.ingredient = [] as MedicationKnowledgeIngredientComponent[];
    }
  }

  /**
   * @returns the `preparationInstruction` property value as a MarkdownType object if defined; else an empty MarkdownType object
   */
  public getPreparationInstructionElement(): MarkdownType {
    return this.preparationInstruction ?? new MarkdownType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `preparationInstruction` property.
   *
   * @param element - the `preparationInstruction` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPreparationInstructionElement(element: MarkdownType | undefined): this {
    if (isDefined<MarkdownType>(element)) {
      const optErrMsg = `Invalid MedicationKnowledge.preparationInstruction; Provided element is not an instance of MarkdownType.`;
      assertFhirType<MarkdownType>(element, MarkdownType, optErrMsg);
      this.preparationInstruction = element;
    } else {
      this.preparationInstruction = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `preparationInstruction` property exists and has a value; `false` otherwise
   */
  public hasPreparationInstructionElement(): boolean {
    return isDefined<MarkdownType>(this.preparationInstruction) && !this.preparationInstruction.isEmpty();
  }

  /**
   * @returns the `preparationInstruction` property value as a fhirMarkdown if defined; else undefined
   */
  public getPreparationInstruction(): fhirMarkdown | undefined {
    return this.preparationInstruction?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `preparationInstruction` property.
   *
   * @param value - the `preparationInstruction` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPreparationInstruction(value: fhirMarkdown | undefined): this {
    if (isDefined<fhirMarkdown>(value)) {
      const optErrMsg = `Invalid MedicationKnowledge.preparationInstruction (${String(value)})`;
      this.preparationInstruction = new MarkdownType(parseFhirPrimitiveData(value, fhirMarkdownSchema, optErrMsg));
    } else {
      this.preparationInstruction = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `preparationInstruction` property exists and has a value; `false` otherwise
   */
  public hasPreparationInstruction(): boolean {
    return this.hasPreparationInstructionElement();
  }

  /**
   * @returns the `intendedRoute` property value as a CodeableConcept array
   */
  public getIntendedRoute(): CodeableConcept[] {
    return this.intendedRoute ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `intendedRoute` property.
   *
   * @param value - the `intendedRoute` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setIntendedRoute(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid MedicationKnowledge.intendedRoute; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.intendedRoute = value;
    } else {
      this.intendedRoute = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `intendedRoute` array property.
   *
   * @param value - the `intendedRoute` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addIntendedRoute(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid MedicationKnowledge.intendedRoute; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initIntendedRoute();
      this.intendedRoute?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `intendedRoute` property exists and has a value; `false` otherwise
   */
  public hasIntendedRoute(): boolean {
    return isDefinedList<CodeableConcept>(this.intendedRoute) && this.intendedRoute.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `intendedRoute` property
   */
  private initIntendedRoute(): void {
    if(!this.hasIntendedRoute()) {
      this.intendedRoute = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `cost` property value as a MedicationKnowledgeCostComponent array
   */
  public getCost(): MedicationKnowledgeCostComponent[] {
    return this.cost ?? ([] as MedicationKnowledgeCostComponent[]);
  }

  /**
   * Assigns the provided MedicationKnowledgeCostComponent array value to the `cost` property.
   *
   * @param value - the `cost` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCost(value: MedicationKnowledgeCostComponent[] | undefined): this {
    if (isDefinedList<MedicationKnowledgeCostComponent>(value)) {
      const optErrMsg = `Invalid MedicationKnowledge.cost; Provided value array has an element that is not an instance of MedicationKnowledgeCostComponent.`;
      assertFhirTypeList<MedicationKnowledgeCostComponent>(value, MedicationKnowledgeCostComponent, optErrMsg);
      this.cost = value;
    } else {
      this.cost = undefined;
    }
    return this;
  }

  /**
   * Add the provided MedicationKnowledgeCostComponent value to the `cost` array property.
   *
   * @param value - the `cost` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addCost(value: MedicationKnowledgeCostComponent | undefined): this {
    if (isDefined<MedicationKnowledgeCostComponent>(value)) {
      const optErrMsg = `Invalid MedicationKnowledge.cost; Provided element is not an instance of MedicationKnowledgeCostComponent.`;
      assertFhirType<MedicationKnowledgeCostComponent>(value, MedicationKnowledgeCostComponent, optErrMsg);
      this.initCost();
      this.cost?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `cost` property exists and has a value; `false` otherwise
   */
  public hasCost(): boolean {
    return isDefinedList<MedicationKnowledgeCostComponent>(this.cost) && this.cost.some((item: MedicationKnowledgeCostComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `cost` property
   */
  private initCost(): void {
    if(!this.hasCost()) {
      this.cost = [] as MedicationKnowledgeCostComponent[];
    }
  }

  /**
   * @returns the `monitoringProgram` property value as a MedicationKnowledgeMonitoringProgramComponent array
   */
  public getMonitoringProgram(): MedicationKnowledgeMonitoringProgramComponent[] {
    return this.monitoringProgram ?? ([] as MedicationKnowledgeMonitoringProgramComponent[]);
  }

  /**
   * Assigns the provided MedicationKnowledgeMonitoringProgramComponent array value to the `monitoringProgram` property.
   *
   * @param value - the `monitoringProgram` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setMonitoringProgram(value: MedicationKnowledgeMonitoringProgramComponent[] | undefined): this {
    if (isDefinedList<MedicationKnowledgeMonitoringProgramComponent>(value)) {
      const optErrMsg = `Invalid MedicationKnowledge.monitoringProgram; Provided value array has an element that is not an instance of MedicationKnowledgeMonitoringProgramComponent.`;
      assertFhirTypeList<MedicationKnowledgeMonitoringProgramComponent>(value, MedicationKnowledgeMonitoringProgramComponent, optErrMsg);
      this.monitoringProgram = value;
    } else {
      this.monitoringProgram = undefined;
    }
    return this;
  }

  /**
   * Add the provided MedicationKnowledgeMonitoringProgramComponent value to the `monitoringProgram` array property.
   *
   * @param value - the `monitoringProgram` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addMonitoringProgram(value: MedicationKnowledgeMonitoringProgramComponent | undefined): this {
    if (isDefined<MedicationKnowledgeMonitoringProgramComponent>(value)) {
      const optErrMsg = `Invalid MedicationKnowledge.monitoringProgram; Provided element is not an instance of MedicationKnowledgeMonitoringProgramComponent.`;
      assertFhirType<MedicationKnowledgeMonitoringProgramComponent>(value, MedicationKnowledgeMonitoringProgramComponent, optErrMsg);
      this.initMonitoringProgram();
      this.monitoringProgram?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `monitoringProgram` property exists and has a value; `false` otherwise
   */
  public hasMonitoringProgram(): boolean {
    return isDefinedList<MedicationKnowledgeMonitoringProgramComponent>(this.monitoringProgram) && this.monitoringProgram.some((item: MedicationKnowledgeMonitoringProgramComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `monitoringProgram` property
   */
  private initMonitoringProgram(): void {
    if(!this.hasMonitoringProgram()) {
      this.monitoringProgram = [] as MedicationKnowledgeMonitoringProgramComponent[];
    }
  }

  /**
   * @returns the `administrationGuidelines` property value as a MedicationKnowledgeAdministrationGuidelinesComponent array
   */
  public getAdministrationGuidelines(): MedicationKnowledgeAdministrationGuidelinesComponent[] {
    return this.administrationGuidelines ?? ([] as MedicationKnowledgeAdministrationGuidelinesComponent[]);
  }

  /**
   * Assigns the provided MedicationKnowledgeAdministrationGuidelinesComponent array value to the `administrationGuidelines` property.
   *
   * @param value - the `administrationGuidelines` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAdministrationGuidelines(value: MedicationKnowledgeAdministrationGuidelinesComponent[] | undefined): this {
    if (isDefinedList<MedicationKnowledgeAdministrationGuidelinesComponent>(value)) {
      const optErrMsg = `Invalid MedicationKnowledge.administrationGuidelines; Provided value array has an element that is not an instance of MedicationKnowledgeAdministrationGuidelinesComponent.`;
      assertFhirTypeList<MedicationKnowledgeAdministrationGuidelinesComponent>(value, MedicationKnowledgeAdministrationGuidelinesComponent, optErrMsg);
      this.administrationGuidelines = value;
    } else {
      this.administrationGuidelines = undefined;
    }
    return this;
  }

  /**
   * Add the provided MedicationKnowledgeAdministrationGuidelinesComponent value to the `administrationGuidelines` array property.
   *
   * @param value - the `administrationGuidelines` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addAdministrationGuidelines(value: MedicationKnowledgeAdministrationGuidelinesComponent | undefined): this {
    if (isDefined<MedicationKnowledgeAdministrationGuidelinesComponent>(value)) {
      const optErrMsg = `Invalid MedicationKnowledge.administrationGuidelines; Provided element is not an instance of MedicationKnowledgeAdministrationGuidelinesComponent.`;
      assertFhirType<MedicationKnowledgeAdministrationGuidelinesComponent>(value, MedicationKnowledgeAdministrationGuidelinesComponent, optErrMsg);
      this.initAdministrationGuidelines();
      this.administrationGuidelines?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `administrationGuidelines` property exists and has a value; `false` otherwise
   */
  public hasAdministrationGuidelines(): boolean {
    return isDefinedList<MedicationKnowledgeAdministrationGuidelinesComponent>(this.administrationGuidelines) && this.administrationGuidelines.some((item: MedicationKnowledgeAdministrationGuidelinesComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `administrationGuidelines` property
   */
  private initAdministrationGuidelines(): void {
    if(!this.hasAdministrationGuidelines()) {
      this.administrationGuidelines = [] as MedicationKnowledgeAdministrationGuidelinesComponent[];
    }
  }

  /**
   * @returns the `medicineClassification` property value as a MedicationKnowledgeMedicineClassificationComponent array
   */
  public getMedicineClassification(): MedicationKnowledgeMedicineClassificationComponent[] {
    return this.medicineClassification ?? ([] as MedicationKnowledgeMedicineClassificationComponent[]);
  }

  /**
   * Assigns the provided MedicationKnowledgeMedicineClassificationComponent array value to the `medicineClassification` property.
   *
   * @param value - the `medicineClassification` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setMedicineClassification(value: MedicationKnowledgeMedicineClassificationComponent[] | undefined): this {
    if (isDefinedList<MedicationKnowledgeMedicineClassificationComponent>(value)) {
      const optErrMsg = `Invalid MedicationKnowledge.medicineClassification; Provided value array has an element that is not an instance of MedicationKnowledgeMedicineClassificationComponent.`;
      assertFhirTypeList<MedicationKnowledgeMedicineClassificationComponent>(value, MedicationKnowledgeMedicineClassificationComponent, optErrMsg);
      this.medicineClassification = value;
    } else {
      this.medicineClassification = undefined;
    }
    return this;
  }

  /**
   * Add the provided MedicationKnowledgeMedicineClassificationComponent value to the `medicineClassification` array property.
   *
   * @param value - the `medicineClassification` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addMedicineClassification(value: MedicationKnowledgeMedicineClassificationComponent | undefined): this {
    if (isDefined<MedicationKnowledgeMedicineClassificationComponent>(value)) {
      const optErrMsg = `Invalid MedicationKnowledge.medicineClassification; Provided element is not an instance of MedicationKnowledgeMedicineClassificationComponent.`;
      assertFhirType<MedicationKnowledgeMedicineClassificationComponent>(value, MedicationKnowledgeMedicineClassificationComponent, optErrMsg);
      this.initMedicineClassification();
      this.medicineClassification?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `medicineClassification` property exists and has a value; `false` otherwise
   */
  public hasMedicineClassification(): boolean {
    return isDefinedList<MedicationKnowledgeMedicineClassificationComponent>(this.medicineClassification) && this.medicineClassification.some((item: MedicationKnowledgeMedicineClassificationComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `medicineClassification` property
   */
  private initMedicineClassification(): void {
    if(!this.hasMedicineClassification()) {
      this.medicineClassification = [] as MedicationKnowledgeMedicineClassificationComponent[];
    }
  }

  /**
   * @returns the `packaging` property value as a MedicationKnowledgePackagingComponent object if defined; else an empty MedicationKnowledgePackagingComponent object
   */
  public getPackaging(): MedicationKnowledgePackagingComponent {
    return this.packaging ?? new MedicationKnowledgePackagingComponent();
  }

  /**
   * Assigns the provided Packaging object value to the `packaging` property.
   *
   * @param value - the `packaging` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPackaging(value: MedicationKnowledgePackagingComponent | undefined): this {
    if (isDefined<MedicationKnowledgePackagingComponent>(value)) {
      const optErrMsg = `Invalid MedicationKnowledge.packaging; Provided element is not an instance of MedicationKnowledgePackagingComponent.`;
      assertFhirType<MedicationKnowledgePackagingComponent>(value, MedicationKnowledgePackagingComponent, optErrMsg);
      this.packaging = value;
    } else {
      this.packaging = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `packaging` property exists and has a value; `false` otherwise
   */
  public hasPackaging(): boolean {
    return isDefined<MedicationKnowledgePackagingComponent>(this.packaging) && !this.packaging.isEmpty();
  }

  /**
   * @returns the `drugCharacteristic` property value as a MedicationKnowledgeDrugCharacteristicComponent array
   */
  public getDrugCharacteristic(): MedicationKnowledgeDrugCharacteristicComponent[] {
    return this.drugCharacteristic ?? ([] as MedicationKnowledgeDrugCharacteristicComponent[]);
  }

  /**
   * Assigns the provided MedicationKnowledgeDrugCharacteristicComponent array value to the `drugCharacteristic` property.
   *
   * @param value - the `drugCharacteristic` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDrugCharacteristic(value: MedicationKnowledgeDrugCharacteristicComponent[] | undefined): this {
    if (isDefinedList<MedicationKnowledgeDrugCharacteristicComponent>(value)) {
      const optErrMsg = `Invalid MedicationKnowledge.drugCharacteristic; Provided value array has an element that is not an instance of MedicationKnowledgeDrugCharacteristicComponent.`;
      assertFhirTypeList<MedicationKnowledgeDrugCharacteristicComponent>(value, MedicationKnowledgeDrugCharacteristicComponent, optErrMsg);
      this.drugCharacteristic = value;
    } else {
      this.drugCharacteristic = undefined;
    }
    return this;
  }

  /**
   * Add the provided MedicationKnowledgeDrugCharacteristicComponent value to the `drugCharacteristic` array property.
   *
   * @param value - the `drugCharacteristic` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addDrugCharacteristic(value: MedicationKnowledgeDrugCharacteristicComponent | undefined): this {
    if (isDefined<MedicationKnowledgeDrugCharacteristicComponent>(value)) {
      const optErrMsg = `Invalid MedicationKnowledge.drugCharacteristic; Provided element is not an instance of MedicationKnowledgeDrugCharacteristicComponent.`;
      assertFhirType<MedicationKnowledgeDrugCharacteristicComponent>(value, MedicationKnowledgeDrugCharacteristicComponent, optErrMsg);
      this.initDrugCharacteristic();
      this.drugCharacteristic?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `drugCharacteristic` property exists and has a value; `false` otherwise
   */
  public hasDrugCharacteristic(): boolean {
    return isDefinedList<MedicationKnowledgeDrugCharacteristicComponent>(this.drugCharacteristic) && this.drugCharacteristic.some((item: MedicationKnowledgeDrugCharacteristicComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `drugCharacteristic` property
   */
  private initDrugCharacteristic(): void {
    if(!this.hasDrugCharacteristic()) {
      this.drugCharacteristic = [] as MedicationKnowledgeDrugCharacteristicComponent[];
    }
  }

  /**
   * @returns the `contraindication` property value as a Reference array
   */
  public getContraindication(): Reference[] {
    return this.contraindication ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `contraindication` property.
   *
   * @decorator `@ReferenceTargets('MedicationKnowledge.contraindication', ['DetectedIssue',])`
   *
   * @param value - the `contraindication` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicationKnowledge.contraindication', [
    'DetectedIssue',
  ])
  public setContraindication(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.contraindication = value;
    } else {
      this.contraindication = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `contraindication` array property.
   *
   * @decorator `@ReferenceTargets('MedicationKnowledge.contraindication', ['DetectedIssue',])`
   *
   * @param value - the `contraindication` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicationKnowledge.contraindication', [
    'DetectedIssue',
  ])
  public addContraindication(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initContraindication();
      this.contraindication?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `contraindication` property exists and has a value; `false` otherwise
   */
  public hasContraindication(): boolean {
    return isDefinedList<Reference>(this.contraindication) && this.contraindication.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `contraindication` property
   */
  private initContraindication(): void {
    if (!this.hasContraindication()) {
      this.contraindication = [] as Reference[];
    }
  }

  /**
   * @returns the `regulatory` property value as a MedicationKnowledgeRegulatoryComponent array
   */
  public getRegulatory(): MedicationKnowledgeRegulatoryComponent[] {
    return this.regulatory ?? ([] as MedicationKnowledgeRegulatoryComponent[]);
  }

  /**
   * Assigns the provided MedicationKnowledgeRegulatoryComponent array value to the `regulatory` property.
   *
   * @param value - the `regulatory` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setRegulatory(value: MedicationKnowledgeRegulatoryComponent[] | undefined): this {
    if (isDefinedList<MedicationKnowledgeRegulatoryComponent>(value)) {
      const optErrMsg = `Invalid MedicationKnowledge.regulatory; Provided value array has an element that is not an instance of MedicationKnowledgeRegulatoryComponent.`;
      assertFhirTypeList<MedicationKnowledgeRegulatoryComponent>(value, MedicationKnowledgeRegulatoryComponent, optErrMsg);
      this.regulatory = value;
    } else {
      this.regulatory = undefined;
    }
    return this;
  }

  /**
   * Add the provided MedicationKnowledgeRegulatoryComponent value to the `regulatory` array property.
   *
   * @param value - the `regulatory` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addRegulatory(value: MedicationKnowledgeRegulatoryComponent | undefined): this {
    if (isDefined<MedicationKnowledgeRegulatoryComponent>(value)) {
      const optErrMsg = `Invalid MedicationKnowledge.regulatory; Provided element is not an instance of MedicationKnowledgeRegulatoryComponent.`;
      assertFhirType<MedicationKnowledgeRegulatoryComponent>(value, MedicationKnowledgeRegulatoryComponent, optErrMsg);
      this.initRegulatory();
      this.regulatory?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `regulatory` property exists and has a value; `false` otherwise
   */
  public hasRegulatory(): boolean {
    return isDefinedList<MedicationKnowledgeRegulatoryComponent>(this.regulatory) && this.regulatory.some((item: MedicationKnowledgeRegulatoryComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `regulatory` property
   */
  private initRegulatory(): void {
    if(!this.hasRegulatory()) {
      this.regulatory = [] as MedicationKnowledgeRegulatoryComponent[];
    }
  }

  /**
   * @returns the `kinetics` property value as a MedicationKnowledgeKineticsComponent array
   */
  public getKinetics(): MedicationKnowledgeKineticsComponent[] {
    return this.kinetics ?? ([] as MedicationKnowledgeKineticsComponent[]);
  }

  /**
   * Assigns the provided MedicationKnowledgeKineticsComponent array value to the `kinetics` property.
   *
   * @param value - the `kinetics` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setKinetics(value: MedicationKnowledgeKineticsComponent[] | undefined): this {
    if (isDefinedList<MedicationKnowledgeKineticsComponent>(value)) {
      const optErrMsg = `Invalid MedicationKnowledge.kinetics; Provided value array has an element that is not an instance of MedicationKnowledgeKineticsComponent.`;
      assertFhirTypeList<MedicationKnowledgeKineticsComponent>(value, MedicationKnowledgeKineticsComponent, optErrMsg);
      this.kinetics = value;
    } else {
      this.kinetics = undefined;
    }
    return this;
  }

  /**
   * Add the provided MedicationKnowledgeKineticsComponent value to the `kinetics` array property.
   *
   * @param value - the `kinetics` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addKinetics(value: MedicationKnowledgeKineticsComponent | undefined): this {
    if (isDefined<MedicationKnowledgeKineticsComponent>(value)) {
      const optErrMsg = `Invalid MedicationKnowledge.kinetics; Provided element is not an instance of MedicationKnowledgeKineticsComponent.`;
      assertFhirType<MedicationKnowledgeKineticsComponent>(value, MedicationKnowledgeKineticsComponent, optErrMsg);
      this.initKinetics();
      this.kinetics?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `kinetics` property exists and has a value; `false` otherwise
   */
  public hasKinetics(): boolean {
    return isDefinedList<MedicationKnowledgeKineticsComponent>(this.kinetics) && this.kinetics.some((item: MedicationKnowledgeKineticsComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `kinetics` property
   */
  private initKinetics(): void {
    if(!this.hasKinetics()) {
      this.kinetics = [] as MedicationKnowledgeKineticsComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'MedicationKnowledge';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.code,
      this.status,
      this.manufacturer,
      this.doseForm,
      this.amount,
      this.synonym,
      this.relatedMedicationKnowledge,
      this.associatedMedication,
      this.productType,
      this.monograph,
      this.ingredient,
      this.preparationInstruction,
      this.intendedRoute,
      this.cost,
      this.monitoringProgram,
      this.administrationGuidelines,
      this.medicineClassification,
      this.packaging,
      this.drugCharacteristic,
      this.contraindication,
      this.regulatory,
      this.kinetics,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): MedicationKnowledge {
    const dest = new MedicationKnowledge();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: MedicationKnowledge): void {
    super.copyValues(dest);
    dest.code = this.code?.copy();
    dest.status = this.status?.copy();
    dest.manufacturer = this.manufacturer?.copy();
    dest.doseForm = this.doseForm?.copy();
    dest.amount = this.amount?.copy();
    const synonymList = copyListValues<StringType>(this.synonym);
    dest.synonym = synonymList.length === 0 ? undefined : synonymList;
    const relatedMedicationKnowledgeList = copyListValues<MedicationKnowledgeRelatedMedicationKnowledgeComponent>(this.relatedMedicationKnowledge);
    dest.relatedMedicationKnowledge = relatedMedicationKnowledgeList.length === 0 ? undefined : relatedMedicationKnowledgeList;
    const associatedMedicationList = copyListValues<Reference>(this.associatedMedication);
    dest.associatedMedication = associatedMedicationList.length === 0 ? undefined : associatedMedicationList;
    const productTypeList = copyListValues<CodeableConcept>(this.productType);
    dest.productType = productTypeList.length === 0 ? undefined : productTypeList;
    const monographList = copyListValues<MedicationKnowledgeMonographComponent>(this.monograph);
    dest.monograph = monographList.length === 0 ? undefined : monographList;
    const ingredientList = copyListValues<MedicationKnowledgeIngredientComponent>(this.ingredient);
    dest.ingredient = ingredientList.length === 0 ? undefined : ingredientList;
    dest.preparationInstruction = this.preparationInstruction?.copy();
    const intendedRouteList = copyListValues<CodeableConcept>(this.intendedRoute);
    dest.intendedRoute = intendedRouteList.length === 0 ? undefined : intendedRouteList;
    const costList = copyListValues<MedicationKnowledgeCostComponent>(this.cost);
    dest.cost = costList.length === 0 ? undefined : costList;
    const monitoringProgramList = copyListValues<MedicationKnowledgeMonitoringProgramComponent>(this.monitoringProgram);
    dest.monitoringProgram = monitoringProgramList.length === 0 ? undefined : monitoringProgramList;
    const administrationGuidelinesList = copyListValues<MedicationKnowledgeAdministrationGuidelinesComponent>(this.administrationGuidelines);
    dest.administrationGuidelines = administrationGuidelinesList.length === 0 ? undefined : administrationGuidelinesList;
    const medicineClassificationList = copyListValues<MedicationKnowledgeMedicineClassificationComponent>(this.medicineClassification);
    dest.medicineClassification = medicineClassificationList.length === 0 ? undefined : medicineClassificationList;
    dest.packaging = this.packaging?.copy();
    const drugCharacteristicList = copyListValues<MedicationKnowledgeDrugCharacteristicComponent>(this.drugCharacteristic);
    dest.drugCharacteristic = drugCharacteristicList.length === 0 ? undefined : drugCharacteristicList;
    const contraindicationList = copyListValues<Reference>(this.contraindication);
    dest.contraindication = contraindicationList.length === 0 ? undefined : contraindicationList;
    const regulatoryList = copyListValues<MedicationKnowledgeRegulatoryComponent>(this.regulatory);
    dest.regulatory = regulatoryList.length === 0 ? undefined : regulatoryList;
    const kineticsList = copyListValues<MedicationKnowledgeKineticsComponent>(this.kinetics);
    dest.kinetics = kineticsList.length === 0 ? undefined : kineticsList;
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

    if (this.hasCode()) {
      setFhirComplexJson(this.getCode(), 'code', jsonObj);
    }

    if (this.hasStatusElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getStatusElement()!, 'status', jsonObj);
    }

    if (this.hasManufacturer()) {
      setFhirComplexJson(this.getManufacturer(), 'manufacturer', jsonObj);
    }

    if (this.hasDoseForm()) {
      setFhirComplexJson(this.getDoseForm(), 'doseForm', jsonObj);
    }

    if (this.hasAmount()) {
      setFhirComplexJson(this.getAmount(), 'amount', jsonObj);
    }

    if (this.hasSynonym()) {
      setFhirPrimitiveListJson(this.getSynonymElement(), 'synonym', jsonObj);
    }

    if (this.hasRelatedMedicationKnowledge()) {
      setFhirBackboneElementListJson(this.getRelatedMedicationKnowledge(), 'relatedMedicationKnowledge', jsonObj);
    }

    if (this.hasAssociatedMedication()) {
      setFhirComplexListJson(this.getAssociatedMedication(), 'associatedMedication', jsonObj);
    }

    if (this.hasProductType()) {
      setFhirComplexListJson(this.getProductType(), 'productType', jsonObj);
    }

    if (this.hasMonograph()) {
      setFhirBackboneElementListJson(this.getMonograph(), 'monograph', jsonObj);
    }

    if (this.hasIngredient()) {
      setFhirBackboneElementListJson(this.getIngredient(), 'ingredient', jsonObj);
    }

    if (this.hasPreparationInstructionElement()) {
      setFhirPrimitiveJson<fhirMarkdown>(this.getPreparationInstructionElement(), 'preparationInstruction', jsonObj);
    }

    if (this.hasIntendedRoute()) {
      setFhirComplexListJson(this.getIntendedRoute(), 'intendedRoute', jsonObj);
    }

    if (this.hasCost()) {
      setFhirBackboneElementListJson(this.getCost(), 'cost', jsonObj);
    }

    if (this.hasMonitoringProgram()) {
      setFhirBackboneElementListJson(this.getMonitoringProgram(), 'monitoringProgram', jsonObj);
    }

    if (this.hasAdministrationGuidelines()) {
      setFhirBackboneElementListJson(this.getAdministrationGuidelines(), 'administrationGuidelines', jsonObj);
    }

    if (this.hasMedicineClassification()) {
      setFhirBackboneElementListJson(this.getMedicineClassification(), 'medicineClassification', jsonObj);
    }

    if (this.hasPackaging()) {
      setFhirBackboneElementJson(this.getPackaging(), 'packaging', jsonObj);
    }

    if (this.hasDrugCharacteristic()) {
      setFhirBackboneElementListJson(this.getDrugCharacteristic(), 'drugCharacteristic', jsonObj);
    }

    if (this.hasContraindication()) {
      setFhirComplexListJson(this.getContraindication(), 'contraindication', jsonObj);
    }

    if (this.hasRegulatory()) {
      setFhirBackboneElementListJson(this.getRegulatory(), 'regulatory', jsonObj);
    }

    if (this.hasKinetics()) {
      setFhirBackboneElementListJson(this.getKinetics(), 'kinetics', jsonObj);
    }

    return jsonObj;
  }
}

/**
 * MedicationKnowledgeRelatedMedicationKnowledgeComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Associated or related medication information
 * - **Definition:** Associated or related knowledge about a medication.
 *
 * @category Data Models: Resource
 * @see [FHIR MedicationKnowledge](http://hl7.org/fhir/StructureDefinition/MedicationKnowledge)
 */
export class MedicationKnowledgeRelatedMedicationKnowledgeComponent extends BackboneElement implements IBackboneElement {
  constructor(type_: CodeableConcept | null = null, reference: Reference[] | null = null) {
    super();

    this.type_ = null;
    if (isDefined<CodeableConcept>(type_)) {
      this.setType(type_);
    }

    this.reference = null;
    if (isDefinedList<Reference>(reference)) {
      this.setReference(reference);
    }
  }

  /**
   * Parse the provided `MedicationKnowledgeRelatedMedicationKnowledgeComponent` JSON to instantiate the MedicationKnowledgeRelatedMedicationKnowledgeComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `MedicationKnowledgeRelatedMedicationKnowledgeComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to MedicationKnowledgeRelatedMedicationKnowledgeComponent
   * @returns MedicationKnowledgeRelatedMedicationKnowledgeComponent data model or undefined for `MedicationKnowledgeRelatedMedicationKnowledgeComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): MedicationKnowledgeRelatedMedicationKnowledgeComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'MedicationKnowledgeRelatedMedicationKnowledgeComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new MedicationKnowledgeRelatedMedicationKnowledgeComponent();

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

    fieldName = 'reference';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] === null) {
        instance.setReference(null);
      } else {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype === undefined) {
            instance.setReference(null);
          } else {
            instance.addReference(datatype);
          }
        });
      }
    } else {
      instance.setReference(null);
    }

    return instance;
  }

  /**
   * MedicationKnowledge.relatedMedicationKnowledge.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Category of medicationKnowledge
   * - **Definition:** The category of the associated medication knowledge reference.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private type_: CodeableConcept | null;

  /**
   * MedicationKnowledge.relatedMedicationKnowledge.reference Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Associated documentation about the associated medication knowledge
   * - **Definition:** Associated documentation about the associated medication knowledge.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/MedicationKnowledge',
   *     ]
   * - **Cardinality:** 1..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private reference: Reference[] | null;

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
      const optErrMsg = `Invalid MedicationKnowledge.relatedMedicationKnowledge.type; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `reference` property value as a Reference array
   */
  public getReference(): Reference[] {
    return this.reference ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `reference` property.
   *
   * @decorator `@ReferenceTargets('MedicationKnowledge.relatedMedicationKnowledge.reference', ['MedicationKnowledge',])`
   *
   * @param value - the `reference` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicationKnowledge.relatedMedicationKnowledge.reference', [
    'MedicationKnowledge',
  ])
  public setReference(value: Reference[] | undefined | null): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.reference = value;
    } else {
      this.reference = null;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `reference` array property.
   *
   * @decorator `@ReferenceTargets('MedicationKnowledge.relatedMedicationKnowledge.reference', ['MedicationKnowledge',])`
   *
   * @param value - the `reference` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicationKnowledge.relatedMedicationKnowledge.reference', [
    'MedicationKnowledge',
  ])
  public addReference(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initReference();
      this.reference?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `reference` property exists and has a value; `false` otherwise
   */
  public hasReference(): boolean {
    return isDefinedList<Reference>(this.reference) && this.reference.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `reference` property
   */
  private initReference(): void {
    if (!this.hasReference()) {
      this.reference = [] as Reference[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'MedicationKnowledge.relatedMedicationKnowledge';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.type_,
      this.reference,
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
  public override copy(): MedicationKnowledgeRelatedMedicationKnowledgeComponent {
    const dest = new MedicationKnowledgeRelatedMedicationKnowledgeComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: MedicationKnowledgeRelatedMedicationKnowledgeComponent): void {
    super.copyValues(dest);
    dest.type_ = this.type_ ? this.type_.copy() : null;
    const referenceList = copyListValues<Reference>(this.reference);
    dest.reference = referenceList.length === 0 ? null : referenceList;
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

    if (this.hasReference()) {
      setFhirComplexListJson(this.getReference(), 'reference', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * MedicationKnowledgeMonographComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Associated documentation about the medication
 * - **Definition:** Associated documentation about the medication.
 *
 * @category Data Models: Resource
 * @see [FHIR MedicationKnowledge](http://hl7.org/fhir/StructureDefinition/MedicationKnowledge)
 */
export class MedicationKnowledgeMonographComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `MedicationKnowledgeMonographComponent` JSON to instantiate the MedicationKnowledgeMonographComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `MedicationKnowledgeMonographComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to MedicationKnowledgeMonographComponent
   * @returns MedicationKnowledgeMonographComponent data model or undefined for `MedicationKnowledgeMonographComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): MedicationKnowledgeMonographComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'MedicationKnowledgeMonographComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new MedicationKnowledgeMonographComponent();

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

    fieldName = 'source';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setSource(datatype);
    }

    return instance;
  }

  /**
   * MedicationKnowledge.monograph.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The category of medication document
   * - **Definition:** The category of documentation about the medication. (e.g. professional monograph, patient education monograph).
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private type_?: CodeableConcept | undefined;

  /**
   * MedicationKnowledge.monograph.source Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Associated documentation about the medication
   * - **Definition:** Associated documentation about the medication.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/DocumentReference',
   *       'http://hl7.org/fhir/StructureDefinition/Media',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private source?: Reference | undefined;

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
      const optErrMsg = `Invalid MedicationKnowledge.monograph.type; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `source` property value as a Reference object; else an empty Reference object
   */
  public getSource(): Reference {
    return this.source ?? new Reference();
  }

  /**
   * Assigns the provided Source object value to the `source` property.
   *
   * @decorator `@ReferenceTargets('MedicationKnowledge.monograph.source', ['DocumentReference','Media',])`
   *
   * @param value - the `source` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicationKnowledge.monograph.source', [
    'DocumentReference',
  
    'Media',
  ])
  public setSource(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.source = value;
    } else {
      this.source = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `source` property exists and has a value; `false` otherwise
   */
  public hasSource(): boolean {
    return isDefined<Reference>(this.source) && !this.source.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'MedicationKnowledge.monograph';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.type_,
      this.source,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): MedicationKnowledgeMonographComponent {
    const dest = new MedicationKnowledgeMonographComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: MedicationKnowledgeMonographComponent): void {
    super.copyValues(dest);
    dest.type_ = this.type_?.copy();
    dest.source = this.source?.copy();
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

    if (this.hasSource()) {
      setFhirComplexJson(this.getSource(), 'source', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * MedicationKnowledgeIngredientComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Active or inactive ingredient
 * - **Definition:** Identifies a particular constituent of interest in the product.
 *
 * @category Data Models: Resource
 * @see [FHIR MedicationKnowledge](http://hl7.org/fhir/StructureDefinition/MedicationKnowledge)
 */
export class MedicationKnowledgeIngredientComponent extends BackboneElement implements IBackboneElement {
  constructor(item: IDataType | null = null) {
    super();

    this.item = null;
    if (isDefined<IDataType>(item)) {
      this.setItem(item);
    }

  }

  /**
   * Parse the provided `MedicationKnowledgeIngredientComponent` JSON to instantiate the MedicationKnowledgeIngredientComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `MedicationKnowledgeIngredientComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to MedicationKnowledgeIngredientComponent
   * @returns MedicationKnowledgeIngredientComponent data model or undefined for `MedicationKnowledgeIngredientComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): MedicationKnowledgeIngredientComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'MedicationKnowledgeIngredientComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new MedicationKnowledgeIngredientComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    const classMetadata: DecoratorMetadataObject | null = MedicationKnowledgeIngredientComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for MedicationKnowledgeIngredientComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    fieldName = 'item[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const item: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    if (item === undefined) {
      instance.setItem(null);
    } else {
      instance.setItem(item);
    }

    fieldName = 'isActive';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setIsActiveElement(datatype);
    }

    fieldName = 'strength';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Ratio | undefined = Ratio.parse(classJsonObj[fieldName]!, sourceField);
      instance.setStrength(datatype);
    }

    return instance;
  }

  /**
   * MedicationKnowledge.ingredient.item[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('MedicationKnowledge.ingredient.item[x]', ['CodeableConcept','Reference',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Medication(s) or substance(s) contained in the medication
   * - **Definition:** The actual ingredient - either a substance (simple ingredient) or another medication.
   * - **FHIR Types:**
   *     'CodeableConcept',
   *     'Reference',
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('MedicationKnowledge.ingredient.item[x]',[
    'CodeableConcept',
    'Reference',
  ])
  private item: IDataType | null;

  /**
   * MedicationKnowledge.ingredient.isActive Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Active ingredient indicator
   * - **Definition:** Indication of whether this ingredient affects the therapeutic action of the drug.
   * - **Requirements:** True indicates that the ingredient affects the therapeutic action of the drug (i.e. active).  False indicates that the ingredient does not affect the therapeutic action of the drug (i.e. inactive).
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private isActive?: BooleanType | undefined;

  /**
   * MedicationKnowledge.ingredient.strength Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Quantity of ingredient present
   * - **Definition:** Specifies how many (or how much) of the items there are in this Medication.  For example, 250 mg per tablet.  This is expressed as a ratio where the numerator is 250mg and the denominator is 1 tablet.
   * - **FHIR Type:** `Ratio`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private strength?: Ratio | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `item` property value as a DataType object; else null
   */
  public getItem(): IDataType | null {
    return this.item;
  }

  /**
   * Assigns the provided DataType object value to the `item` property.
   *
   * @decorator `@ChoiceDataTypes('MedicationKnowledge.ingredient.item[x]')`
   *
   * @param value - the `item` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('MedicationKnowledge.ingredient.item[x]')
  public setItem(value: IDataType | undefined | null): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.item = value;
    } else {
      this.item = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `item` property exists and has a value; `false` otherwise
   */
  public hasItem(): boolean {
    return isDefined<IDataType>(this.item) && !this.item.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `item` property value as a CodeableConcept object if defined; else null
   */
  public getItemCodeableConcept(): CodeableConcept | null {
    if (!isDefined<IDataType>(this.item)) {
      return null;
    }
    if (!(this.item instanceof CodeableConcept)) {
      throw new InvalidTypeError(
        `DataType mismatch for MedicationKnowledge.ingredient.item[x]: Expected CodeableConcept but encountered ${this.item.fhirType()}`,
      );
    }
    return this.item;
  }

  /**
   * @returns `true` if the `` property exists as a CodeableConcept and has a value; `false` otherwise
   */
  public hasItemCodeableConcept(): boolean {
    return this.hasItem() && this.item instanceof CodeableConcept;
  }

  /**
   * @returns the `item` property value as a Reference object if defined; else null
   */
  public getItemReference(): Reference | null {
    if (!isDefined<IDataType>(this.item)) {
      return null;
    }
    if (!(this.item instanceof Reference)) {
      throw new InvalidTypeError(
        `DataType mismatch for MedicationKnowledge.ingredient.item[x]: Expected Reference but encountered ${this.item.fhirType()}`,
      );
    }
    return this.item;
  }

  /**
   * @returns `true` if the `` property exists as a Reference and has a value; `false` otherwise
   */
  public hasItemReference(): boolean {
    return this.hasItem() && this.item instanceof Reference;
  }

  // End of choice datatype-specific "get"/"has" methods

  /**
   * @returns the `isActive` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getIsActiveElement(): BooleanType {
    return this.isActive ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `isActive` property.
   *
   * @param element - the `isActive` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setIsActiveElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid MedicationKnowledge.ingredient.isActive; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.isActive = element;
    } else {
      this.isActive = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `isActive` property exists and has a value; `false` otherwise
   */
  public hasIsActiveElement(): boolean {
    return isDefined<BooleanType>(this.isActive) && !this.isActive.isEmpty();
  }

  /**
   * @returns the `isActive` property value as a fhirBoolean if defined; else undefined
   */
  public getIsActive(): fhirBoolean | undefined {
    return this.isActive?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `isActive` property.
   *
   * @param value - the `isActive` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setIsActive(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid MedicationKnowledge.ingredient.isActive (${String(value)})`;
      this.isActive = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.isActive = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `isActive` property exists and has a value; `false` otherwise
   */
  public hasIsActive(): boolean {
    return this.hasIsActiveElement();
  }

  /**
   * @returns the `strength` property value as a Ratio object if defined; else an empty Ratio object
   */
  public getStrength(): Ratio {
    return this.strength ?? new Ratio();
  }

  /**
   * Assigns the provided Strength object value to the `strength` property.
   *
   * @param value - the `strength` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setStrength(value: Ratio | undefined): this {
    if (isDefined<Ratio>(value)) {
      const optErrMsg = `Invalid MedicationKnowledge.ingredient.strength; Provided element is not an instance of Ratio.`;
      assertFhirType<Ratio>(value, Ratio, optErrMsg);
      this.strength = value;
    } else {
      this.strength = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `strength` property exists and has a value; `false` otherwise
   */
  public hasStrength(): boolean {
    return isDefined<Ratio>(this.strength) && !this.strength.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'MedicationKnowledge.ingredient';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.item,
      this.isActive,
      this.strength,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.item, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): MedicationKnowledgeIngredientComponent {
    const dest = new MedicationKnowledgeIngredientComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: MedicationKnowledgeIngredientComponent): void {
    super.copyValues(dest);
    dest.item = this.item ? this.item.copy() as IDataType : null;
    dest.isActive = this.isActive?.copy();
    dest.strength = this.strength?.copy();
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

    if (this.hasItem()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getItem()!, 'item', jsonObj);
    }

    if (this.hasIsActiveElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getIsActiveElement(), 'isActive', jsonObj);
    }

    if (this.hasStrength()) {
      setFhirComplexJson(this.getStrength(), 'strength', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * MedicationKnowledgeCostComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** The pricing of the medication
 * - **Definition:** The price of the medication.
 *
 * @category Data Models: Resource
 * @see [FHIR MedicationKnowledge](http://hl7.org/fhir/StructureDefinition/MedicationKnowledge)
 */
export class MedicationKnowledgeCostComponent extends BackboneElement implements IBackboneElement {
  constructor(type_: CodeableConcept | null = null, cost: Money | null = null) {
    super();

    this.type_ = null;
    if (isDefined<CodeableConcept>(type_)) {
      this.setType(type_);
    }

    this.cost = null;
    if (isDefined<Money>(cost)) {
      this.setCost(cost);
    }
  }

  /**
   * Parse the provided `MedicationKnowledgeCostComponent` JSON to instantiate the MedicationKnowledgeCostComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `MedicationKnowledgeCostComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to MedicationKnowledgeCostComponent
   * @returns MedicationKnowledgeCostComponent data model or undefined for `MedicationKnowledgeCostComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): MedicationKnowledgeCostComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'MedicationKnowledgeCostComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new MedicationKnowledgeCostComponent();

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

    fieldName = 'source';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setSourceElement(datatype);
    }

    fieldName = 'cost';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Money | undefined = Money.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setCost(null);
      } else {
        instance.setCost(datatype);
      }
    } else {
      instance.setCost(null);
    }

    return instance;
  }

  /**
   * MedicationKnowledge.cost.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The category of the cost information
   * - **Definition:** The category of the cost information.  For example, manufacturers\' cost, patient cost, claim reimbursement cost, actual acquisition cost.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private type_: CodeableConcept | null;

  /**
   * MedicationKnowledge.cost.source Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The source or owner for the price information
   * - **Definition:** The source or owner that assigns the price to the medication.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private source?: StringType | undefined;

  /**
   * MedicationKnowledge.cost.cost Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The price of the medication
   * - **Definition:** The price of the medication.
   * - **FHIR Type:** `Money`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private cost: Money | null;

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
      const optErrMsg = `Invalid MedicationKnowledge.cost.type; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `source` property value as a StringType object if defined; else an empty StringType object
   */
  public getSourceElement(): StringType {
    return this.source ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `source` property.
   *
   * @param element - the `source` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSourceElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid MedicationKnowledge.cost.source; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.source = element;
    } else {
      this.source = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `source` property exists and has a value; `false` otherwise
   */
  public hasSourceElement(): boolean {
    return isDefined<StringType>(this.source) && !this.source.isEmpty();
  }

  /**
   * @returns the `source` property value as a fhirString if defined; else undefined
   */
  public getSource(): fhirString | undefined {
    return this.source?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `source` property.
   *
   * @param value - the `source` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSource(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid MedicationKnowledge.cost.source (${String(value)})`;
      this.source = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.source = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `source` property exists and has a value; `false` otherwise
   */
  public hasSource(): boolean {
    return this.hasSourceElement();
  }

  /**
   * @returns the `cost` property value as a Money object if defined; else an empty Money object
   */
  public getCost(): Money {
    return this.cost ?? new Money();
  }

  /**
   * Assigns the provided Money object value to the `cost` property.
   *
   * @param value - the `cost` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCost(value: Money | undefined | null): this {
    if (isDefined<Money>(value)) {
      const optErrMsg = `Invalid MedicationKnowledge.cost.cost; Provided element is not an instance of Money.`;
      assertFhirType<Money>(value, Money, optErrMsg);
      this.cost = value;
    } else {
      this.cost = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `cost` property exists and has a value; `false` otherwise
   */
  public hasCost(): boolean {
    return isDefined<Money>(this.cost) && !this.cost.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'MedicationKnowledge.cost';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.type_,
      this.source,
      this.cost,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.type_, this.cost, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): MedicationKnowledgeCostComponent {
    const dest = new MedicationKnowledgeCostComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: MedicationKnowledgeCostComponent): void {
    super.copyValues(dest);
    dest.type_ = this.type_ ? this.type_.copy() : null;
    dest.source = this.source?.copy();
    dest.cost = this.cost ? this.cost.copy() : null;
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

    if (this.hasSourceElement()) {
      setFhirPrimitiveJson<fhirString>(this.getSourceElement(), 'source', jsonObj);
    }

    if (this.hasCost()) {
      setFhirComplexJson(this.getCost(), 'cost', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * MedicationKnowledgeMonitoringProgramComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Program under which a medication is reviewed
 * - **Definition:** The program under which the medication is reviewed.
 *
 * @category Data Models: Resource
 * @see [FHIR MedicationKnowledge](http://hl7.org/fhir/StructureDefinition/MedicationKnowledge)
 */
export class MedicationKnowledgeMonitoringProgramComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `MedicationKnowledgeMonitoringProgramComponent` JSON to instantiate the MedicationKnowledgeMonitoringProgramComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `MedicationKnowledgeMonitoringProgramComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to MedicationKnowledgeMonitoringProgramComponent
   * @returns MedicationKnowledgeMonitoringProgramComponent data model or undefined for `MedicationKnowledgeMonitoringProgramComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): MedicationKnowledgeMonitoringProgramComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'MedicationKnowledgeMonitoringProgramComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new MedicationKnowledgeMonitoringProgramComponent();

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

    fieldName = 'name';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setNameElement(datatype);
    }

    return instance;
  }

  /**
   * MedicationKnowledge.monitoringProgram.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Type of program under which the medication is monitored
   * - **Definition:** Type of program under which the medication is monitored.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private type_?: CodeableConcept | undefined;

  /**
   * MedicationKnowledge.monitoringProgram.name Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name of the reviewing program
   * - **Definition:** Name of the reviewing program.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private name?: StringType | undefined;

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
      const optErrMsg = `Invalid MedicationKnowledge.monitoringProgram.type; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid MedicationKnowledge.monitoringProgram.name; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid MedicationKnowledge.monitoringProgram.name (${String(value)})`;
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

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'MedicationKnowledge.monitoringProgram';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.type_,
      this.name,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): MedicationKnowledgeMonitoringProgramComponent {
    const dest = new MedicationKnowledgeMonitoringProgramComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: MedicationKnowledgeMonitoringProgramComponent): void {
    super.copyValues(dest);
    dest.type_ = this.type_?.copy();
    dest.name = this.name?.copy();
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

    if (this.hasNameElement()) {
      setFhirPrimitiveJson<fhirString>(this.getNameElement(), 'name', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * MedicationKnowledgeAdministrationGuidelinesComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Guidelines for administration of the medication
 * - **Definition:** Guidelines for the administration of the medication.
 *
 * @category Data Models: Resource
 * @see [FHIR MedicationKnowledge](http://hl7.org/fhir/StructureDefinition/MedicationKnowledge)
 */
export class MedicationKnowledgeAdministrationGuidelinesComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `MedicationKnowledgeAdministrationGuidelinesComponent` JSON to instantiate the MedicationKnowledgeAdministrationGuidelinesComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `MedicationKnowledgeAdministrationGuidelinesComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to MedicationKnowledgeAdministrationGuidelinesComponent
   * @returns MedicationKnowledgeAdministrationGuidelinesComponent data model or undefined for `MedicationKnowledgeAdministrationGuidelinesComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): MedicationKnowledgeAdministrationGuidelinesComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'MedicationKnowledgeAdministrationGuidelinesComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new MedicationKnowledgeAdministrationGuidelinesComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    const classMetadata: DecoratorMetadataObject | null = MedicationKnowledgeAdministrationGuidelinesComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for MedicationKnowledgeAdministrationGuidelinesComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    fieldName = 'dosage';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: MedicationKnowledgeAdministrationGuidelinesDosageComponent | undefined = MedicationKnowledgeAdministrationGuidelinesDosageComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addDosage(component);
          }
        });
      }
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

    fieldName = 'patientCharacteristics';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: MedicationKnowledgeAdministrationGuidelinesPatientCharacteristicsComponent | undefined = MedicationKnowledgeAdministrationGuidelinesPatientCharacteristicsComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addPatientCharacteristics(component);
          }
        });
      }
    }

    return instance;
  }

  /**
   * MedicationKnowledge.administrationGuidelines.dosage Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Dosage for the medication for the specific guidelines
   * - **Definition:** Dosage for the medication for the specific guidelines.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private dosage?: MedicationKnowledgeAdministrationGuidelinesDosageComponent[] | undefined;

  /**
   * MedicationKnowledge.administrationGuidelines.indication[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('MedicationKnowledge.administrationGuidelines.indication[x]', ['CodeableConcept','Reference',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Indication for use that apply to the specific administration guidelines
   * - **Definition:** Indication for use that apply to the specific administration guidelines.
   * - **FHIR Types:**
   *     'CodeableConcept',
   *     'Reference',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('MedicationKnowledge.administrationGuidelines.indication[x]',[
    'CodeableConcept',
    'Reference',
  ])
  private indication?: IDataType | undefined;

  /**
   * MedicationKnowledge.administrationGuidelines.patientCharacteristics Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Characteristics of the patient that are relevant to the administration guidelines
   * - **Definition:** Characteristics of the patient that are relevant to the administration guidelines (for example, height, weight, gender, etc.).
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private patientCharacteristics?: MedicationKnowledgeAdministrationGuidelinesPatientCharacteristicsComponent[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `dosage` property value as a MedicationKnowledgeAdministrationGuidelinesDosageComponent array
   */
  public getDosage(): MedicationKnowledgeAdministrationGuidelinesDosageComponent[] {
    return this.dosage ?? ([] as MedicationKnowledgeAdministrationGuidelinesDosageComponent[]);
  }

  /**
   * Assigns the provided MedicationKnowledgeAdministrationGuidelinesDosageComponent array value to the `dosage` property.
   *
   * @param value - the `dosage` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDosage(value: MedicationKnowledgeAdministrationGuidelinesDosageComponent[] | undefined): this {
    if (isDefinedList<MedicationKnowledgeAdministrationGuidelinesDosageComponent>(value)) {
      const optErrMsg = `Invalid MedicationKnowledge.administrationGuidelines.dosage; Provided value array has an element that is not an instance of MedicationKnowledgeAdministrationGuidelinesDosageComponent.`;
      assertFhirTypeList<MedicationKnowledgeAdministrationGuidelinesDosageComponent>(value, MedicationKnowledgeAdministrationGuidelinesDosageComponent, optErrMsg);
      this.dosage = value;
    } else {
      this.dosage = undefined;
    }
    return this;
  }

  /**
   * Add the provided MedicationKnowledgeAdministrationGuidelinesDosageComponent value to the `dosage` array property.
   *
   * @param value - the `dosage` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addDosage(value: MedicationKnowledgeAdministrationGuidelinesDosageComponent | undefined): this {
    if (isDefined<MedicationKnowledgeAdministrationGuidelinesDosageComponent>(value)) {
      const optErrMsg = `Invalid MedicationKnowledge.administrationGuidelines.dosage; Provided element is not an instance of MedicationKnowledgeAdministrationGuidelinesDosageComponent.`;
      assertFhirType<MedicationKnowledgeAdministrationGuidelinesDosageComponent>(value, MedicationKnowledgeAdministrationGuidelinesDosageComponent, optErrMsg);
      this.initDosage();
      this.dosage?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `dosage` property exists and has a value; `false` otherwise
   */
  public hasDosage(): boolean {
    return isDefinedList<MedicationKnowledgeAdministrationGuidelinesDosageComponent>(this.dosage) && this.dosage.some((item: MedicationKnowledgeAdministrationGuidelinesDosageComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `dosage` property
   */
  private initDosage(): void {
    if(!this.hasDosage()) {
      this.dosage = [] as MedicationKnowledgeAdministrationGuidelinesDosageComponent[];
    }
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
   * @decorator `@ChoiceDataTypes('MedicationKnowledge.administrationGuidelines.indication[x]')`
   *
   * @param value - the `indication` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('MedicationKnowledge.administrationGuidelines.indication[x]')
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
        `DataType mismatch for MedicationKnowledge.administrationGuidelines.indication[x]: Expected CodeableConcept but encountered ${this.indication.fhirType()}`,
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
        `DataType mismatch for MedicationKnowledge.administrationGuidelines.indication[x]: Expected Reference but encountered ${this.indication.fhirType()}`,
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
   * @returns the `patientCharacteristics` property value as a MedicationKnowledgeAdministrationGuidelinesPatientCharacteristicsComponent array
   */
  public getPatientCharacteristics(): MedicationKnowledgeAdministrationGuidelinesPatientCharacteristicsComponent[] {
    return this.patientCharacteristics ?? ([] as MedicationKnowledgeAdministrationGuidelinesPatientCharacteristicsComponent[]);
  }

  /**
   * Assigns the provided MedicationKnowledgeAdministrationGuidelinesPatientCharacteristicsComponent array value to the `patientCharacteristics` property.
   *
   * @param value - the `patientCharacteristics` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPatientCharacteristics(value: MedicationKnowledgeAdministrationGuidelinesPatientCharacteristicsComponent[] | undefined): this {
    if (isDefinedList<MedicationKnowledgeAdministrationGuidelinesPatientCharacteristicsComponent>(value)) {
      const optErrMsg = `Invalid MedicationKnowledge.administrationGuidelines.patientCharacteristics; Provided value array has an element that is not an instance of MedicationKnowledgeAdministrationGuidelinesPatientCharacteristicsComponent.`;
      assertFhirTypeList<MedicationKnowledgeAdministrationGuidelinesPatientCharacteristicsComponent>(value, MedicationKnowledgeAdministrationGuidelinesPatientCharacteristicsComponent, optErrMsg);
      this.patientCharacteristics = value;
    } else {
      this.patientCharacteristics = undefined;
    }
    return this;
  }

  /**
   * Add the provided MedicationKnowledgeAdministrationGuidelinesPatientCharacteristicsComponent value to the `patientCharacteristics` array property.
   *
   * @param value - the `patientCharacteristics` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addPatientCharacteristics(value: MedicationKnowledgeAdministrationGuidelinesPatientCharacteristicsComponent | undefined): this {
    if (isDefined<MedicationKnowledgeAdministrationGuidelinesPatientCharacteristicsComponent>(value)) {
      const optErrMsg = `Invalid MedicationKnowledge.administrationGuidelines.patientCharacteristics; Provided element is not an instance of MedicationKnowledgeAdministrationGuidelinesPatientCharacteristicsComponent.`;
      assertFhirType<MedicationKnowledgeAdministrationGuidelinesPatientCharacteristicsComponent>(value, MedicationKnowledgeAdministrationGuidelinesPatientCharacteristicsComponent, optErrMsg);
      this.initPatientCharacteristics();
      this.patientCharacteristics?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `patientCharacteristics` property exists and has a value; `false` otherwise
   */
  public hasPatientCharacteristics(): boolean {
    return isDefinedList<MedicationKnowledgeAdministrationGuidelinesPatientCharacteristicsComponent>(this.patientCharacteristics) && this.patientCharacteristics.some((item: MedicationKnowledgeAdministrationGuidelinesPatientCharacteristicsComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `patientCharacteristics` property
   */
  private initPatientCharacteristics(): void {
    if(!this.hasPatientCharacteristics()) {
      this.patientCharacteristics = [] as MedicationKnowledgeAdministrationGuidelinesPatientCharacteristicsComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'MedicationKnowledge.administrationGuidelines';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.dosage,
      this.indication,
      this.patientCharacteristics,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): MedicationKnowledgeAdministrationGuidelinesComponent {
    const dest = new MedicationKnowledgeAdministrationGuidelinesComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: MedicationKnowledgeAdministrationGuidelinesComponent): void {
    super.copyValues(dest);
    const dosageList = copyListValues<MedicationKnowledgeAdministrationGuidelinesDosageComponent>(this.dosage);
    dest.dosage = dosageList.length === 0 ? undefined : dosageList;
    dest.indication = this.indication?.copy() as IDataType;
    const patientCharacteristicsList = copyListValues<MedicationKnowledgeAdministrationGuidelinesPatientCharacteristicsComponent>(this.patientCharacteristics);
    dest.patientCharacteristics = patientCharacteristicsList.length === 0 ? undefined : patientCharacteristicsList;
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

    if (this.hasDosage()) {
      setFhirBackboneElementListJson(this.getDosage(), 'dosage', jsonObj);
    }

    if (this.hasIndication()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getIndication()!, 'indication', jsonObj);
    }

    if (this.hasPatientCharacteristics()) {
      setFhirBackboneElementListJson(this.getPatientCharacteristics(), 'patientCharacteristics', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * MedicationKnowledgeAdministrationGuidelinesDosageComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Dosage for the medication for the specific guidelines
 * - **Definition:** Dosage for the medication for the specific guidelines.
 *
 * @category Data Models: Resource
 * @see [FHIR MedicationKnowledge](http://hl7.org/fhir/StructureDefinition/MedicationKnowledge)
 */
export class MedicationKnowledgeAdministrationGuidelinesDosageComponent extends BackboneElement implements IBackboneElement {
  constructor(type_: CodeableConcept | null = null, dosage: Dosage[] | null = null) {
    super();

    this.type_ = null;
    if (isDefined<CodeableConcept>(type_)) {
      this.setType(type_);
    }

    this.dosage = null;
    if (isDefinedList<Dosage>(dosage)) {
      this.setDosage(dosage);
    }
  }

  /**
   * Parse the provided `MedicationKnowledgeAdministrationGuidelinesDosageComponent` JSON to instantiate the MedicationKnowledgeAdministrationGuidelinesDosageComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `MedicationKnowledgeAdministrationGuidelinesDosageComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to MedicationKnowledgeAdministrationGuidelinesDosageComponent
   * @returns MedicationKnowledgeAdministrationGuidelinesDosageComponent data model or undefined for `MedicationKnowledgeAdministrationGuidelinesDosageComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): MedicationKnowledgeAdministrationGuidelinesDosageComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'MedicationKnowledgeAdministrationGuidelinesDosageComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new MedicationKnowledgeAdministrationGuidelinesDosageComponent();

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

    fieldName = 'dosage';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] === null) {
        instance.setDosage(null);
      } else {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Dosage | undefined = Dosage.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype === undefined) {
            instance.setDosage(null);
          } else {
            instance.addDosage(datatype);
          }
        });
      }
    } else {
      instance.setDosage(null);
    }

    return instance;
  }

  /**
   * MedicationKnowledge.administrationGuidelines.dosage.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Type of dosage
   * - **Definition:** The type of dosage (for example, prophylaxis, maintenance, therapeutic, etc.).
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private type_: CodeableConcept | null;

  /**
   * MedicationKnowledge.administrationGuidelines.dosage.dosage Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Dosage for the medication for the specific guidelines
   * - **Definition:** Dosage for the medication for the specific guidelines.
   * - **FHIR Type:** `Dosage`
   * - **Cardinality:** 1..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private dosage: Dosage[] | null;

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
      const optErrMsg = `Invalid MedicationKnowledge.administrationGuidelines.dosage.type; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `dosage` property value as a Dosage array
   */
  public getDosage(): Dosage[] {
    return this.dosage ?? ([] as Dosage[]);
  }

  /**
   * Assigns the provided Dosage array value to the `dosage` property.
   *
   * @param value - the `dosage` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDosage(value: Dosage[] | undefined | null): this {
    if (isDefinedList<Dosage>(value)) {
      const optErrMsg = `Invalid MedicationKnowledge.administrationGuidelines.dosage.dosage; Provided value array has an element that is not an instance of Dosage.`;
      assertFhirTypeList<Dosage>(value, Dosage, optErrMsg);
      this.dosage = value;
    } else {
      this.dosage = null;
    }
    return this;
  }

  /**
   * Add the provided Dosage value to the `dosage` array property.
   *
   * @param value - the `dosage` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addDosage(value: Dosage | undefined): this {
    if (isDefined<Dosage>(value)) {
      const optErrMsg = `Invalid MedicationKnowledge.administrationGuidelines.dosage.dosage; Provided element is not an instance of Dosage.`;
      assertFhirType<Dosage>(value, Dosage, optErrMsg);
      this.initDosage();
      this.dosage?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `dosage` property exists and has a value; `false` otherwise
   */
  public hasDosage(): boolean {
    return isDefinedList<Dosage>(this.dosage) && this.dosage.some((item: Dosage) => !item.isEmpty());
  }

  /**
   * Initialize the `dosage` property
   */
  private initDosage(): void {
    if(!this.hasDosage()) {
      this.dosage = [] as Dosage[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'MedicationKnowledge.administrationGuidelines.dosage';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.type_,
      this.dosage,
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
  public override copy(): MedicationKnowledgeAdministrationGuidelinesDosageComponent {
    const dest = new MedicationKnowledgeAdministrationGuidelinesDosageComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: MedicationKnowledgeAdministrationGuidelinesDosageComponent): void {
    super.copyValues(dest);
    dest.type_ = this.type_ ? this.type_.copy() : null;
    const dosageList = copyListValues<Dosage>(this.dosage);
    dest.dosage = dosageList.length === 0 ? null : dosageList;
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

    if (this.hasDosage()) {
      setFhirComplexListJson(this.getDosage(), 'dosage', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * MedicationKnowledgeAdministrationGuidelinesPatientCharacteristicsComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Characteristics of the patient that are relevant to the administration guidelines
 * - **Definition:** Characteristics of the patient that are relevant to the administration guidelines (for example, height, weight, gender, etc.).
 *
 * @category Data Models: Resource
 * @see [FHIR MedicationKnowledge](http://hl7.org/fhir/StructureDefinition/MedicationKnowledge)
 */
export class MedicationKnowledgeAdministrationGuidelinesPatientCharacteristicsComponent extends BackboneElement implements IBackboneElement {
  constructor(characteristic: IDataType | null = null) {
    super();

    this.characteristic = null;
    if (isDefined<IDataType>(characteristic)) {
      this.setCharacteristic(characteristic);
    }

  }

  /**
   * Parse the provided `MedicationKnowledgeAdministrationGuidelinesPatientCharacteristicsComponent` JSON to instantiate the MedicationKnowledgeAdministrationGuidelinesPatientCharacteristicsComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `MedicationKnowledgeAdministrationGuidelinesPatientCharacteristicsComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to MedicationKnowledgeAdministrationGuidelinesPatientCharacteristicsComponent
   * @returns MedicationKnowledgeAdministrationGuidelinesPatientCharacteristicsComponent data model or undefined for `MedicationKnowledgeAdministrationGuidelinesPatientCharacteristicsComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): MedicationKnowledgeAdministrationGuidelinesPatientCharacteristicsComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'MedicationKnowledgeAdministrationGuidelinesPatientCharacteristicsComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new MedicationKnowledgeAdministrationGuidelinesPatientCharacteristicsComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    const classMetadata: DecoratorMetadataObject | null = MedicationKnowledgeAdministrationGuidelinesPatientCharacteristicsComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for MedicationKnowledgeAdministrationGuidelinesPatientCharacteristicsComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    fieldName = 'characteristic[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const characteristic: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    if (characteristic === undefined) {
      instance.setCharacteristic(null);
    } else {
      instance.setCharacteristic(characteristic);
    }

    fieldName = 'value';
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
            instance.addValueElement(datatype);
          }
        });
      }
    }

    return instance;
  }

  /**
   * MedicationKnowledge.administrationGuidelines.patientCharacteristics.characteristic[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('MedicationKnowledge.administrationGuidelines.patientCharacteristics.characteristic[x]', ['CodeableConcept','Quantity',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Specific characteristic that is relevant to the administration guideline
   * - **Definition:** Specific characteristic that is relevant to the administration guideline (e.g. height, weight, gender).
   * - **FHIR Types:**
   *     'CodeableConcept',
   *     'Quantity',
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('MedicationKnowledge.administrationGuidelines.patientCharacteristics.characteristic[x]',[
    'CodeableConcept',
    'Quantity',
  ])
  private characteristic: IDataType | null;

  /**
   * MedicationKnowledge.administrationGuidelines.patientCharacteristics.value Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The specific characteristic
   * - **Definition:** The specific characteristic (e.g. height, weight, gender, etc.).
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private value?: StringType[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `characteristic` property value as a DataType object; else null
   */
  public getCharacteristic(): IDataType | null {
    return this.characteristic;
  }

  /**
   * Assigns the provided DataType object value to the `characteristic` property.
   *
   * @decorator `@ChoiceDataTypes('MedicationKnowledge.administrationGuidelines.patientCharacteristics.characteristic[x]')`
   *
   * @param value - the `characteristic` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('MedicationKnowledge.administrationGuidelines.patientCharacteristics.characteristic[x]')
  public setCharacteristic(value: IDataType | undefined | null): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.characteristic = value;
    } else {
      this.characteristic = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `characteristic` property exists and has a value; `false` otherwise
   */
  public hasCharacteristic(): boolean {
    return isDefined<IDataType>(this.characteristic) && !this.characteristic.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `characteristic` property value as a CodeableConcept object if defined; else null
   */
  public getCharacteristicCodeableConcept(): CodeableConcept | null {
    if (!isDefined<IDataType>(this.characteristic)) {
      return null;
    }
    if (!(this.characteristic instanceof CodeableConcept)) {
      throw new InvalidTypeError(
        `DataType mismatch for MedicationKnowledge.administrationGuidelines.patientCharacteristics.characteristic[x]: Expected CodeableConcept but encountered ${this.characteristic.fhirType()}`,
      );
    }
    return this.characteristic;
  }

  /**
   * @returns `true` if the `` property exists as a CodeableConcept and has a value; `false` otherwise
   */
  public hasCharacteristicCodeableConcept(): boolean {
    return this.hasCharacteristic() && this.characteristic instanceof CodeableConcept;
  }

  /**
   * @returns the `characteristic` property value as a Quantity object if defined; else null
   */
  public getCharacteristicQuantity(): Quantity | null {
    if (!isDefined<IDataType>(this.characteristic)) {
      return null;
    }
    if (!(this.characteristic instanceof Quantity)) {
      throw new InvalidTypeError(
        `DataType mismatch for MedicationKnowledge.administrationGuidelines.patientCharacteristics.characteristic[x]: Expected Quantity but encountered ${this.characteristic.fhirType()}`,
      );
    }
    return this.characteristic;
  }

  /**
   * @returns `true` if the `` property exists as a Quantity and has a value; `false` otherwise
   */
  public hasCharacteristicQuantity(): boolean {
    return this.hasCharacteristic() && this.characteristic instanceof Quantity;
  }

  // End of choice datatype-specific "get"/"has" methods

  /**
   * @returns the `value` property value as a StringType array
   */
  public getValueElement(): StringType[] {
    return this.value ?? ([] as StringType[]);
  }

  /**
   * Assigns the provided StringType array value to the `value` property.
   *
   * @param element - the `value` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setValueElement(element: StringType[] | undefined): this {
    if (isDefinedList<StringType>(element)) {
      const optErrMsg = `Invalid MedicationKnowledge.administrationGuidelines.patientCharacteristics.value; Provided value array has an element that is not an instance of StringType.`;
      assertFhirTypeList<StringType>(element, StringType, optErrMsg);
      this.value = element;
    } else {
      this.value = undefined;
    }
    return this;
  }

  /**
   * Add the provided StringType value to the `value` array property.
   *
   * @param element - the `value` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addValueElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid MedicationKnowledge.administrationGuidelines.patientCharacteristics.value; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.initValue();
      this.value?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `value` property exists and has a value; `false` otherwise
   */
  public hasValueElement(): boolean {
    return isDefinedList<StringType>(this.value) && this.value.some((item: StringType) => !item.isEmpty());
  }

  /**
   * @returns the `value` property value as a fhirString array
   */
  public getValue(): fhirString[] {
    this.initValue();
    const valueValues = [] as fhirString[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.value!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        valueValues.push(value);
      }
    }
    return valueValues;
  }

  /**
   * Assigns the provided primitive value array to the `value` property.
   *
   * @param value - the `value` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setValue(value: fhirString[] | undefined): this {
    if (isDefinedList<fhirString>(value)) {
      const valueElements = [] as StringType[];
      for (const valueValue of value) {
        const optErrMsg = `Invalid MedicationKnowledge.administrationGuidelines.patientCharacteristics.value array item (${String(valueValue)})`;
        const element = new StringType(parseFhirPrimitiveData(valueValue, fhirStringSchema, optErrMsg));
        valueElements.push(element);
      }
      this.value = valueElements;
    } else {
      this.value = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `value` array property.
   *
   * @param value - the `value` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addValue(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid MedicationKnowledge.administrationGuidelines.patientCharacteristics.value array item (${String(value)})`;
      const element = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
      this.initValue();
      this.addValueElement(element);
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
   * Initialize the `value` property
   */
  private initValue(): void {
    if (!this.hasValue()) {
      this.value = [] as StringType[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'MedicationKnowledge.administrationGuidelines.patientCharacteristics';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.characteristic,
      this.value,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.characteristic, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): MedicationKnowledgeAdministrationGuidelinesPatientCharacteristicsComponent {
    const dest = new MedicationKnowledgeAdministrationGuidelinesPatientCharacteristicsComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: MedicationKnowledgeAdministrationGuidelinesPatientCharacteristicsComponent): void {
    super.copyValues(dest);
    dest.characteristic = this.characteristic ? this.characteristic.copy() as IDataType : null;
    const valueList = copyListValues<StringType>(this.value);
    dest.value = valueList.length === 0 ? undefined : valueList;
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

    if (this.hasCharacteristic()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getCharacteristic()!, 'characteristic', jsonObj);
    }

    if (this.hasValue()) {
      setFhirPrimitiveListJson(this.getValueElement(), 'value', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * MedicationKnowledgeMedicineClassificationComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Categorization of the medication within a formulary or classification system
 * - **Definition:** Categorization of the medication within a formulary or classification system.
 *
 * @category Data Models: Resource
 * @see [FHIR MedicationKnowledge](http://hl7.org/fhir/StructureDefinition/MedicationKnowledge)
 */
export class MedicationKnowledgeMedicineClassificationComponent extends BackboneElement implements IBackboneElement {
  constructor(type_: CodeableConcept | null = null) {
    super();

    this.type_ = null;
    if (isDefined<CodeableConcept>(type_)) {
      this.setType(type_);
    }
  }

  /**
   * Parse the provided `MedicationKnowledgeMedicineClassificationComponent` JSON to instantiate the MedicationKnowledgeMedicineClassificationComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `MedicationKnowledgeMedicineClassificationComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to MedicationKnowledgeMedicineClassificationComponent
   * @returns MedicationKnowledgeMedicineClassificationComponent data model or undefined for `MedicationKnowledgeMedicineClassificationComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): MedicationKnowledgeMedicineClassificationComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'MedicationKnowledgeMedicineClassificationComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new MedicationKnowledgeMedicineClassificationComponent();

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

    return instance;
  }

  /**
   * MedicationKnowledge.medicineClassification.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The type of category for the medication (for example, therapeutic classification, therapeutic sub-classification)
   * - **Definition:** The type of category for the medication (for example, therapeutic classification, therapeutic sub-classification).
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private type_: CodeableConcept | null;

  /**
   * MedicationKnowledge.medicineClassification.classification Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Specific category assigned to the medication
   * - **Definition:** Specific category assigned to the medication (e.g. anti-infective, anti-hypertensive, antibiotic, etc.).
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private classification?: CodeableConcept[] | undefined;

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
      const optErrMsg = `Invalid MedicationKnowledge.medicineClassification.type; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid MedicationKnowledge.medicineClassification.classification; Provided value array has an element that is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid MedicationKnowledge.medicineClassification.classification; Provided element is not an instance of CodeableConcept.`;
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

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'MedicationKnowledge.medicineClassification';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.type_,
      this.classification,
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
  public override copy(): MedicationKnowledgeMedicineClassificationComponent {
    const dest = new MedicationKnowledgeMedicineClassificationComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: MedicationKnowledgeMedicineClassificationComponent): void {
    super.copyValues(dest);
    dest.type_ = this.type_ ? this.type_.copy() : null;
    const classificationList = copyListValues<CodeableConcept>(this.classification);
    dest.classification = classificationList.length === 0 ? undefined : classificationList;
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

    if (this.hasClassification()) {
      setFhirComplexListJson(this.getClassification(), 'classification', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * MedicationKnowledgePackagingComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Details about packaged medications
 * - **Definition:** Information that only applies to packages (not products).
 *
 * @category Data Models: Resource
 * @see [FHIR MedicationKnowledge](http://hl7.org/fhir/StructureDefinition/MedicationKnowledge)
 */
export class MedicationKnowledgePackagingComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `MedicationKnowledgePackagingComponent` JSON to instantiate the MedicationKnowledgePackagingComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `MedicationKnowledgePackagingComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to MedicationKnowledgePackagingComponent
   * @returns MedicationKnowledgePackagingComponent data model or undefined for `MedicationKnowledgePackagingComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): MedicationKnowledgePackagingComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'MedicationKnowledgePackagingComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new MedicationKnowledgePackagingComponent();

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

    fieldName = 'quantity';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Quantity | undefined = Quantity.parse(classJsonObj[fieldName]!, sourceField);
      instance.setQuantity(datatype);
    }

    return instance;
  }

  /**
   * MedicationKnowledge.packaging.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A code that defines the specific type of packaging that the medication can be found in
   * - **Definition:** A code that defines the specific type of packaging that the medication can be found in (e.g. blister sleeve, tube, bottle).
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private type_?: CodeableConcept | undefined;

  /**
   * MedicationKnowledge.packaging.quantity Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The number of product units the package would contain if fully loaded
   * - **Definition:** The number of product units the package would contain if fully loaded.
   * - **FHIR Type:** `Quantity`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private quantity?: Quantity | undefined;

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
      const optErrMsg = `Invalid MedicationKnowledge.packaging.type; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid MedicationKnowledge.packaging.quantity; Provided element is not an instance of Quantity.`;
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

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'MedicationKnowledge.packaging';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.type_,
      this.quantity,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): MedicationKnowledgePackagingComponent {
    const dest = new MedicationKnowledgePackagingComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: MedicationKnowledgePackagingComponent): void {
    super.copyValues(dest);
    dest.type_ = this.type_?.copy();
    dest.quantity = this.quantity?.copy();
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

    if (this.hasQuantity()) {
      setFhirComplexJson(this.getQuantity(), 'quantity', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * MedicationKnowledgeDrugCharacteristicComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Specifies descriptive properties of the medicine
 * - **Definition:** Specifies descriptive properties of the medicine, such as color, shape, imprints, etc.
 *
 * @category Data Models: Resource
 * @see [FHIR MedicationKnowledge](http://hl7.org/fhir/StructureDefinition/MedicationKnowledge)
 */
export class MedicationKnowledgeDrugCharacteristicComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `MedicationKnowledgeDrugCharacteristicComponent` JSON to instantiate the MedicationKnowledgeDrugCharacteristicComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `MedicationKnowledgeDrugCharacteristicComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to MedicationKnowledgeDrugCharacteristicComponent
   * @returns MedicationKnowledgeDrugCharacteristicComponent data model or undefined for `MedicationKnowledgeDrugCharacteristicComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): MedicationKnowledgeDrugCharacteristicComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'MedicationKnowledgeDrugCharacteristicComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new MedicationKnowledgeDrugCharacteristicComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    const classMetadata: DecoratorMetadataObject | null = MedicationKnowledgeDrugCharacteristicComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for MedicationKnowledgeDrugCharacteristicComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setType(datatype);
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
   * MedicationKnowledge.drugCharacteristic.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Code specifying the type of characteristic of medication
   * - **Definition:** A code specifying which characteristic of the medicine is being described (for example, colour, shape, imprint).
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private type_?: CodeableConcept | undefined;

  /**
   * MedicationKnowledge.drugCharacteristic.value[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('MedicationKnowledge.drugCharacteristic.value[x]', ['CodeableConcept','string','Quantity','base64Binary',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Description of the characteristic
   * - **Definition:** Description of the characteristic.
   * - **Comment:** The description should be provided as a CodeableConcept, SimpleQuantity or an image.  The description can be a string only when these others are not available.
   * - **FHIR Types:**
   *     'CodeableConcept',
   *     'string',
   *     'Quantity',
   *     'base64Binary',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('MedicationKnowledge.drugCharacteristic.value[x]',[
    'CodeableConcept',
    'string',
    'Quantity',
    'base64Binary',
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
   * Assigns the provided Type object value to the `type_` property.
   *
   * @param value - the `type_` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setType(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid MedicationKnowledge.drugCharacteristic.type; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `value` property value as a DataType object if defined; else undefined
   */
  public getValue(): IDataType | undefined {
    return this.value;
  }

  /**
   * Assigns the provided DataType object value to the `value` property.
   *
   * @decorator `@ChoiceDataTypes('MedicationKnowledge.drugCharacteristic.value[x]')`
   *
   * @param value - the `value` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('MedicationKnowledge.drugCharacteristic.value[x]')
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
        `DataType mismatch for MedicationKnowledge.drugCharacteristic.value[x]: Expected CodeableConcept but encountered ${this.value.fhirType()}`,
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
   * @returns the `value` property value as a StringType object if defined; else undefined
   */
  public getValueStringType(): StringType | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof StringType)) {
      throw new InvalidTypeError(
        `DataType mismatch for MedicationKnowledge.drugCharacteristic.value[x]: Expected StringType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `value` property exists as a StringType and has a value; `false` otherwise
   */
  public hasValueStringType(): boolean {
    return this.hasValue() && this.value instanceof StringType;
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
        `DataType mismatch for MedicationKnowledge.drugCharacteristic.value[x]: Expected Quantity but encountered ${this.value.fhirType()}`,
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
   * @returns the `value` property value as a Base64BinaryType object if defined; else undefined
   */
  public getValueBase64BinaryType(): Base64BinaryType | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof Base64BinaryType)) {
      throw new InvalidTypeError(
        `DataType mismatch for MedicationKnowledge.drugCharacteristic.value[x]: Expected Base64BinaryType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `value` property exists as a Base64BinaryType and has a value; `false` otherwise
   */
  public hasValueBase64BinaryType(): boolean {
    return this.hasValue() && this.value instanceof Base64BinaryType;
  }

  // End of choice datatype-specific "get"/"has" methods

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'MedicationKnowledge.drugCharacteristic';
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
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): MedicationKnowledgeDrugCharacteristicComponent {
    const dest = new MedicationKnowledgeDrugCharacteristicComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: MedicationKnowledgeDrugCharacteristicComponent): void {
    super.copyValues(dest);
    dest.type_ = this.type_?.copy();
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
/**
 * MedicationKnowledgeRegulatoryComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Regulatory information about a medication
 * - **Definition:** Regulatory information about a medication.
 *
 * @category Data Models: Resource
 * @see [FHIR MedicationKnowledge](http://hl7.org/fhir/StructureDefinition/MedicationKnowledge)
 */
export class MedicationKnowledgeRegulatoryComponent extends BackboneElement implements IBackboneElement {
  constructor(regulatoryAuthority: Reference | null = null) {
    super();

    this.regulatoryAuthority = null;
    if (isDefined<Reference>(regulatoryAuthority)) {
      this.setRegulatoryAuthority(regulatoryAuthority);
    }
  }

  /**
   * Parse the provided `MedicationKnowledgeRegulatoryComponent` JSON to instantiate the MedicationKnowledgeRegulatoryComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `MedicationKnowledgeRegulatoryComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to MedicationKnowledgeRegulatoryComponent
   * @returns MedicationKnowledgeRegulatoryComponent data model or undefined for `MedicationKnowledgeRegulatoryComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): MedicationKnowledgeRegulatoryComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'MedicationKnowledgeRegulatoryComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new MedicationKnowledgeRegulatoryComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    fieldName = 'regulatoryAuthority';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setRegulatoryAuthority(null);
      } else {
        instance.setRegulatoryAuthority(datatype);
      }
    } else {
      instance.setRegulatoryAuthority(null);
    }

    fieldName = 'substitution';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: MedicationKnowledgeRegulatorySubstitutionComponent | undefined = MedicationKnowledgeRegulatorySubstitutionComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addSubstitution(component);
          }
        });
      }
    }

    fieldName = 'schedule';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: MedicationKnowledgeRegulatoryScheduleComponent | undefined = MedicationKnowledgeRegulatoryScheduleComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addSchedule(component);
          }
        });
      }
    }

    fieldName = 'maxDispense';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: MedicationKnowledgeRegulatoryMaxDispenseComponent | undefined = MedicationKnowledgeRegulatoryMaxDispenseComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setMaxDispense(component);
    }

    return instance;
  }

  /**
   * MedicationKnowledge.regulatory.regulatoryAuthority Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Specifies the authority of the regulation
   * - **Definition:** The authority that is specifying the regulations.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *     ]
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private regulatoryAuthority: Reference | null;

  /**
   * MedicationKnowledge.regulatory.substitution Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Specifies if changes are allowed when dispensing a medication from a regulatory perspective
   * - **Definition:** Specifies if changes are allowed when dispensing a medication from a regulatory perspective.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private substitution?: MedicationKnowledgeRegulatorySubstitutionComponent[] | undefined;

  /**
   * MedicationKnowledge.regulatory.schedule Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Specifies the schedule of a medication in jurisdiction
   * - **Definition:** Specifies the schedule of a medication in jurisdiction.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private schedule?: MedicationKnowledgeRegulatoryScheduleComponent[] | undefined;

  /**
   * MedicationKnowledge.regulatory.maxDispense Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The maximum number of units of the medication that can be dispensed in a period
   * - **Definition:** The maximum number of units of the medication that can be dispensed in a period.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private maxDispense?: MedicationKnowledgeRegulatoryMaxDispenseComponent | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `regulatoryAuthority` property value as a Reference object if defined; else an empty Reference object
   */
  public getRegulatoryAuthority(): Reference {
    return this.regulatoryAuthority ?? new Reference();
  }

  /**
   * Assigns the provided RegulatoryAuthority object value to the `regulatoryAuthority` property.
   *
   * @decorator `@ReferenceTargets('MedicationKnowledge.regulatory.regulatoryAuthority', ['Organization',])`
   *
   * @param value - the `regulatoryAuthority` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicationKnowledge.regulatory.regulatoryAuthority', [
    'Organization',
  ])
  public setRegulatoryAuthority(value: Reference | undefined | null): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.regulatoryAuthority = value;
    } else {
      this.regulatoryAuthority = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `regulatoryAuthority` property exists and has a value; `false` otherwise
   */
  public hasRegulatoryAuthority(): boolean {
    return isDefined<Reference>(this.regulatoryAuthority) && !this.regulatoryAuthority.isEmpty();
  }

  /**
   * @returns the `substitution` property value as a MedicationKnowledgeRegulatorySubstitutionComponent array
   */
  public getSubstitution(): MedicationKnowledgeRegulatorySubstitutionComponent[] {
    return this.substitution ?? ([] as MedicationKnowledgeRegulatorySubstitutionComponent[]);
  }

  /**
   * Assigns the provided MedicationKnowledgeRegulatorySubstitutionComponent array value to the `substitution` property.
   *
   * @param value - the `substitution` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSubstitution(value: MedicationKnowledgeRegulatorySubstitutionComponent[] | undefined): this {
    if (isDefinedList<MedicationKnowledgeRegulatorySubstitutionComponent>(value)) {
      const optErrMsg = `Invalid MedicationKnowledge.regulatory.substitution; Provided value array has an element that is not an instance of MedicationKnowledgeRegulatorySubstitutionComponent.`;
      assertFhirTypeList<MedicationKnowledgeRegulatorySubstitutionComponent>(value, MedicationKnowledgeRegulatorySubstitutionComponent, optErrMsg);
      this.substitution = value;
    } else {
      this.substitution = undefined;
    }
    return this;
  }

  /**
   * Add the provided MedicationKnowledgeRegulatorySubstitutionComponent value to the `substitution` array property.
   *
   * @param value - the `substitution` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addSubstitution(value: MedicationKnowledgeRegulatorySubstitutionComponent | undefined): this {
    if (isDefined<MedicationKnowledgeRegulatorySubstitutionComponent>(value)) {
      const optErrMsg = `Invalid MedicationKnowledge.regulatory.substitution; Provided element is not an instance of MedicationKnowledgeRegulatorySubstitutionComponent.`;
      assertFhirType<MedicationKnowledgeRegulatorySubstitutionComponent>(value, MedicationKnowledgeRegulatorySubstitutionComponent, optErrMsg);
      this.initSubstitution();
      this.substitution?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `substitution` property exists and has a value; `false` otherwise
   */
  public hasSubstitution(): boolean {
    return isDefinedList<MedicationKnowledgeRegulatorySubstitutionComponent>(this.substitution) && this.substitution.some((item: MedicationKnowledgeRegulatorySubstitutionComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `substitution` property
   */
  private initSubstitution(): void {
    if(!this.hasSubstitution()) {
      this.substitution = [] as MedicationKnowledgeRegulatorySubstitutionComponent[];
    }
  }

  /**
   * @returns the `schedule` property value as a MedicationKnowledgeRegulatoryScheduleComponent array
   */
  public getSchedule(): MedicationKnowledgeRegulatoryScheduleComponent[] {
    return this.schedule ?? ([] as MedicationKnowledgeRegulatoryScheduleComponent[]);
  }

  /**
   * Assigns the provided MedicationKnowledgeRegulatoryScheduleComponent array value to the `schedule` property.
   *
   * @param value - the `schedule` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSchedule(value: MedicationKnowledgeRegulatoryScheduleComponent[] | undefined): this {
    if (isDefinedList<MedicationKnowledgeRegulatoryScheduleComponent>(value)) {
      const optErrMsg = `Invalid MedicationKnowledge.regulatory.schedule; Provided value array has an element that is not an instance of MedicationKnowledgeRegulatoryScheduleComponent.`;
      assertFhirTypeList<MedicationKnowledgeRegulatoryScheduleComponent>(value, MedicationKnowledgeRegulatoryScheduleComponent, optErrMsg);
      this.schedule = value;
    } else {
      this.schedule = undefined;
    }
    return this;
  }

  /**
   * Add the provided MedicationKnowledgeRegulatoryScheduleComponent value to the `schedule` array property.
   *
   * @param value - the `schedule` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addSchedule(value: MedicationKnowledgeRegulatoryScheduleComponent | undefined): this {
    if (isDefined<MedicationKnowledgeRegulatoryScheduleComponent>(value)) {
      const optErrMsg = `Invalid MedicationKnowledge.regulatory.schedule; Provided element is not an instance of MedicationKnowledgeRegulatoryScheduleComponent.`;
      assertFhirType<MedicationKnowledgeRegulatoryScheduleComponent>(value, MedicationKnowledgeRegulatoryScheduleComponent, optErrMsg);
      this.initSchedule();
      this.schedule?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `schedule` property exists and has a value; `false` otherwise
   */
  public hasSchedule(): boolean {
    return isDefinedList<MedicationKnowledgeRegulatoryScheduleComponent>(this.schedule) && this.schedule.some((item: MedicationKnowledgeRegulatoryScheduleComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `schedule` property
   */
  private initSchedule(): void {
    if(!this.hasSchedule()) {
      this.schedule = [] as MedicationKnowledgeRegulatoryScheduleComponent[];
    }
  }

  /**
   * @returns the `maxDispense` property value as a MedicationKnowledgeRegulatoryMaxDispenseComponent object if defined; else an empty MedicationKnowledgeRegulatoryMaxDispenseComponent object
   */
  public getMaxDispense(): MedicationKnowledgeRegulatoryMaxDispenseComponent {
    return this.maxDispense ?? new MedicationKnowledgeRegulatoryMaxDispenseComponent();
  }

  /**
   * Assigns the provided MaxDispense object value to the `maxDispense` property.
   *
   * @param value - the `maxDispense` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setMaxDispense(value: MedicationKnowledgeRegulatoryMaxDispenseComponent | undefined): this {
    if (isDefined<MedicationKnowledgeRegulatoryMaxDispenseComponent>(value)) {
      const optErrMsg = `Invalid MedicationKnowledge.regulatory.maxDispense; Provided element is not an instance of MedicationKnowledgeRegulatoryMaxDispenseComponent.`;
      assertFhirType<MedicationKnowledgeRegulatoryMaxDispenseComponent>(value, MedicationKnowledgeRegulatoryMaxDispenseComponent, optErrMsg);
      this.maxDispense = value;
    } else {
      this.maxDispense = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `maxDispense` property exists and has a value; `false` otherwise
   */
  public hasMaxDispense(): boolean {
    return isDefined<MedicationKnowledgeRegulatoryMaxDispenseComponent>(this.maxDispense) && !this.maxDispense.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'MedicationKnowledge.regulatory';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.regulatoryAuthority,
      this.substitution,
      this.schedule,
      this.maxDispense,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.regulatoryAuthority, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): MedicationKnowledgeRegulatoryComponent {
    const dest = new MedicationKnowledgeRegulatoryComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: MedicationKnowledgeRegulatoryComponent): void {
    super.copyValues(dest);
    dest.regulatoryAuthority = this.regulatoryAuthority ? this.regulatoryAuthority.copy() : null;
    const substitutionList = copyListValues<MedicationKnowledgeRegulatorySubstitutionComponent>(this.substitution);
    dest.substitution = substitutionList.length === 0 ? undefined : substitutionList;
    const scheduleList = copyListValues<MedicationKnowledgeRegulatoryScheduleComponent>(this.schedule);
    dest.schedule = scheduleList.length === 0 ? undefined : scheduleList;
    dest.maxDispense = this.maxDispense?.copy();
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

    if (this.hasRegulatoryAuthority()) {
      setFhirComplexJson(this.getRegulatoryAuthority(), 'regulatoryAuthority', jsonObj);
    }

    if (this.hasSubstitution()) {
      setFhirBackboneElementListJson(this.getSubstitution(), 'substitution', jsonObj);
    }

    if (this.hasSchedule()) {
      setFhirBackboneElementListJson(this.getSchedule(), 'schedule', jsonObj);
    }

    if (this.hasMaxDispense()) {
      setFhirBackboneElementJson(this.getMaxDispense(), 'maxDispense', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * MedicationKnowledgeRegulatorySubstitutionComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Specifies if changes are allowed when dispensing a medication from a regulatory perspective
 * - **Definition:** Specifies if changes are allowed when dispensing a medication from a regulatory perspective.
 *
 * @category Data Models: Resource
 * @see [FHIR MedicationKnowledge](http://hl7.org/fhir/StructureDefinition/MedicationKnowledge)
 */
export class MedicationKnowledgeRegulatorySubstitutionComponent extends BackboneElement implements IBackboneElement {
  constructor(type_: CodeableConcept | null = null, allowed: BooleanType | fhirBoolean | null = null) {
    super();

    this.type_ = null;
    if (isDefined<CodeableConcept>(type_)) {
      this.setType(type_);
    }

    this.allowed = null;
    if (isDefined<BooleanType | fhirBoolean>(allowed)) {
      if (allowed instanceof PrimitiveType) {
        this.setAllowedElement(allowed);
      } else {
        this.setAllowed(allowed);
      }
    }
  }

  /**
   * Parse the provided `MedicationKnowledgeRegulatorySubstitutionComponent` JSON to instantiate the MedicationKnowledgeRegulatorySubstitutionComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `MedicationKnowledgeRegulatorySubstitutionComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to MedicationKnowledgeRegulatorySubstitutionComponent
   * @returns MedicationKnowledgeRegulatorySubstitutionComponent data model or undefined for `MedicationKnowledgeRegulatorySubstitutionComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): MedicationKnowledgeRegulatorySubstitutionComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'MedicationKnowledgeRegulatorySubstitutionComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new MedicationKnowledgeRegulatorySubstitutionComponent();

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

    fieldName = 'allowed';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setAllowed(null);
      } else {
        instance.setAllowedElement(datatype);
      }
    } else {
      instance.setAllowed(null);
    }

    return instance;
  }

  /**
   * MedicationKnowledge.regulatory.substitution.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Specifies the type of substitution allowed
   * - **Definition:** Specifies the type of substitution allowed.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private type_: CodeableConcept | null;

  /**
   * MedicationKnowledge.regulatory.substitution.allowed Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Specifies if regulation allows for changes in the medication when dispensing
   * - **Definition:** Specifies if regulation allows for changes in the medication when dispensing.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private allowed: BooleanType | null;

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
      const optErrMsg = `Invalid MedicationKnowledge.regulatory.substitution.type; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `allowed` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getAllowedElement(): BooleanType {
    return this.allowed ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `allowed` property.
   *
   * @param element - the `allowed` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAllowedElement(element: BooleanType | undefined | null): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid MedicationKnowledge.regulatory.substitution.allowed; Provided value is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.allowed = element;
    } else {
      this.allowed = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `allowed` property exists and has a value; `false` otherwise
   */
  public hasAllowedElement(): boolean {
    return isDefined<BooleanType>(this.allowed) && !this.allowed.isEmpty();
  }

  /**
   * @returns the `allowed` property value as a fhirBoolean if defined; else null
   */
  public getAllowed(): fhirBoolean | null {
    if (this.allowed?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.allowed.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `allowed` property.
   *
   * @param value - the `allowed` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAllowed(value: fhirBoolean | undefined | null): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid MedicationKnowledge.regulatory.substitution.allowed (${String(value)})`;
      this.allowed = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.allowed = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `allowed` property exists and has a value; `false` otherwise
   */
  public hasAllowed(): boolean {
    return this.hasAllowedElement();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'MedicationKnowledge.regulatory.substitution';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.type_,
      this.allowed,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.type_, this.allowed, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): MedicationKnowledgeRegulatorySubstitutionComponent {
    const dest = new MedicationKnowledgeRegulatorySubstitutionComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: MedicationKnowledgeRegulatorySubstitutionComponent): void {
    super.copyValues(dest);
    dest.type_ = this.type_ ? this.type_.copy() : null;
    dest.allowed = this.allowed ? this.allowed.copy() : null;
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

    if (this.hasAllowedElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getAllowedElement(), 'allowed', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * MedicationKnowledgeRegulatoryScheduleComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Specifies the schedule of a medication in jurisdiction
 * - **Definition:** Specifies the schedule of a medication in jurisdiction.
 *
 * @category Data Models: Resource
 * @see [FHIR MedicationKnowledge](http://hl7.org/fhir/StructureDefinition/MedicationKnowledge)
 */
export class MedicationKnowledgeRegulatoryScheduleComponent extends BackboneElement implements IBackboneElement {
  constructor(schedule: CodeableConcept | null = null) {
    super();

    this.schedule = null;
    if (isDefined<CodeableConcept>(schedule)) {
      this.setSchedule(schedule);
    }
  }

  /**
   * Parse the provided `MedicationKnowledgeRegulatoryScheduleComponent` JSON to instantiate the MedicationKnowledgeRegulatoryScheduleComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `MedicationKnowledgeRegulatoryScheduleComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to MedicationKnowledgeRegulatoryScheduleComponent
   * @returns MedicationKnowledgeRegulatoryScheduleComponent data model or undefined for `MedicationKnowledgeRegulatoryScheduleComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): MedicationKnowledgeRegulatoryScheduleComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'MedicationKnowledgeRegulatoryScheduleComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new MedicationKnowledgeRegulatoryScheduleComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    fieldName = 'schedule';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setSchedule(null);
      } else {
        instance.setSchedule(datatype);
      }
    } else {
      instance.setSchedule(null);
    }

    return instance;
  }

  /**
   * MedicationKnowledge.regulatory.schedule.schedule Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Specifies the specific drug schedule
   * - **Definition:** Specifies the specific drug schedule.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private schedule: CodeableConcept | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `schedule` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getSchedule(): CodeableConcept {
    return this.schedule ?? new CodeableConcept();
  }

  /**
   * Assigns the provided CodeableConcept object value to the `schedule` property.
   *
   * @param value - the `schedule` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSchedule(value: CodeableConcept | undefined | null): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid MedicationKnowledge.regulatory.schedule.schedule; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.schedule = value;
    } else {
      this.schedule = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `schedule` property exists and has a value; `false` otherwise
   */
  public hasSchedule(): boolean {
    return isDefined<CodeableConcept>(this.schedule) && !this.schedule.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'MedicationKnowledge.regulatory.schedule';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.schedule,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.schedule, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): MedicationKnowledgeRegulatoryScheduleComponent {
    const dest = new MedicationKnowledgeRegulatoryScheduleComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: MedicationKnowledgeRegulatoryScheduleComponent): void {
    super.copyValues(dest);
    dest.schedule = this.schedule ? this.schedule.copy() : null;
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

    if (this.hasSchedule()) {
      setFhirComplexJson(this.getSchedule(), 'schedule', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * MedicationKnowledgeRegulatoryMaxDispenseComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** The maximum number of units of the medication that can be dispensed in a period
 * - **Definition:** The maximum number of units of the medication that can be dispensed in a period.
 *
 * @category Data Models: Resource
 * @see [FHIR MedicationKnowledge](http://hl7.org/fhir/StructureDefinition/MedicationKnowledge)
 */
export class MedicationKnowledgeRegulatoryMaxDispenseComponent extends BackboneElement implements IBackboneElement {
  constructor(quantity: Quantity | null = null) {
    super();

    this.quantity = null;
    if (isDefined<Quantity>(quantity)) {
      this.setQuantity(quantity);
    }
  }

  /**
   * Parse the provided `MedicationKnowledgeRegulatoryMaxDispenseComponent` JSON to instantiate the MedicationKnowledgeRegulatoryMaxDispenseComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `MedicationKnowledgeRegulatoryMaxDispenseComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to MedicationKnowledgeRegulatoryMaxDispenseComponent
   * @returns MedicationKnowledgeRegulatoryMaxDispenseComponent data model or undefined for `MedicationKnowledgeRegulatoryMaxDispenseComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): MedicationKnowledgeRegulatoryMaxDispenseComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'MedicationKnowledgeRegulatoryMaxDispenseComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new MedicationKnowledgeRegulatoryMaxDispenseComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    fieldName = 'quantity';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Quantity | undefined = Quantity.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setQuantity(null);
      } else {
        instance.setQuantity(datatype);
      }
    } else {
      instance.setQuantity(null);
    }

    fieldName = 'period';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Duration | undefined = Duration.parse(classJsonObj[fieldName]!, sourceField);
      instance.setPeriod(datatype);
    }

    return instance;
  }

  /**
   * MedicationKnowledge.regulatory.maxDispense.quantity Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The maximum number of units of the medication that can be dispensed
   * - **Definition:** The maximum number of units of the medication that can be dispensed.
   * - **FHIR Type:** `Quantity`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private quantity: Quantity | null;

  /**
   * MedicationKnowledge.regulatory.maxDispense.period Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The period that applies to the maximum number of units
   * - **Definition:** The period that applies to the maximum number of units.
   * - **FHIR Type:** `Duration`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private period?: Duration | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

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
  public setQuantity(value: Quantity | undefined | null): this {
    if (isDefined<Quantity>(value)) {
      const optErrMsg = `Invalid MedicationKnowledge.regulatory.maxDispense.quantity; Provided element is not an instance of Quantity.`;
      assertFhirType<Quantity>(value, Quantity, optErrMsg);
      this.quantity = value;
    } else {
      this.quantity = null;
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
   * @returns the `period` property value as a Duration object if defined; else an empty Duration object
   */
  public getPeriod(): Duration {
    return this.period ?? new Duration();
  }

  /**
   * Assigns the provided Period object value to the `period` property.
   *
   * @param value - the `period` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPeriod(value: Duration | undefined): this {
    if (isDefined<Duration>(value)) {
      const optErrMsg = `Invalid MedicationKnowledge.regulatory.maxDispense.period; Provided element is not an instance of Duration.`;
      assertFhirType<Duration>(value, Duration, optErrMsg);
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
    return isDefined<Duration>(this.period) && !this.period.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'MedicationKnowledge.regulatory.maxDispense';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.quantity,
      this.period,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.quantity, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): MedicationKnowledgeRegulatoryMaxDispenseComponent {
    const dest = new MedicationKnowledgeRegulatoryMaxDispenseComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: MedicationKnowledgeRegulatoryMaxDispenseComponent): void {
    super.copyValues(dest);
    dest.quantity = this.quantity ? this.quantity.copy() : null;
    dest.period = this.period?.copy();
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

    if (this.hasQuantity()) {
      setFhirComplexJson(this.getQuantity(), 'quantity', jsonObj);
    }

    if (this.hasPeriod()) {
      setFhirComplexJson(this.getPeriod(), 'period', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * MedicationKnowledgeKineticsComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** The time course of drug absorption, distribution, metabolism and excretion of a medication from the body
 * - **Definition:** The time course of drug absorption, distribution, metabolism and excretion of a medication from the body.
 *
 * @category Data Models: Resource
 * @see [FHIR MedicationKnowledge](http://hl7.org/fhir/StructureDefinition/MedicationKnowledge)
 */
export class MedicationKnowledgeKineticsComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `MedicationKnowledgeKineticsComponent` JSON to instantiate the MedicationKnowledgeKineticsComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `MedicationKnowledgeKineticsComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to MedicationKnowledgeKineticsComponent
   * @returns MedicationKnowledgeKineticsComponent data model or undefined for `MedicationKnowledgeKineticsComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): MedicationKnowledgeKineticsComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'MedicationKnowledgeKineticsComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new MedicationKnowledgeKineticsComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    fieldName = 'areaUnderCurve';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Quantity | undefined = Quantity.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addAreaUnderCurve(datatype);
          }
        });
      }
    }

    fieldName = 'lethalDose50';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Quantity | undefined = Quantity.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addLethalDose50(datatype);
          }
        });
      }
    }

    fieldName = 'halfLifePeriod';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Duration | undefined = Duration.parse(classJsonObj[fieldName]!, sourceField);
      instance.setHalfLifePeriod(datatype);
    }

    return instance;
  }

  /**
   * MedicationKnowledge.kinetics.areaUnderCurve Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The drug concentration measured at certain discrete points in time
   * - **Definition:** The drug concentration measured at certain discrete points in time.
   * - **FHIR Type:** `Quantity`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private areaUnderCurve?: Quantity[] | undefined;

  /**
   * MedicationKnowledge.kinetics.lethalDose50 Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The median lethal dose of a drug
   * - **Definition:** The median lethal dose of a drug.
   * - **FHIR Type:** `Quantity`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private lethalDose50?: Quantity[] | undefined;

  /**
   * MedicationKnowledge.kinetics.halfLifePeriod Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Time required for concentration in the body to decrease by half
   * - **Definition:** The time required for any specified property (e.g., the concentration of a substance in the body) to decrease by half.
   * - **FHIR Type:** `Duration`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private halfLifePeriod?: Duration | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `areaUnderCurve` property value as a Quantity array
   */
  public getAreaUnderCurve(): Quantity[] {
    return this.areaUnderCurve ?? ([] as Quantity[]);
  }

  /**
   * Assigns the provided Quantity array value to the `areaUnderCurve` property.
   *
   * @param value - the `areaUnderCurve` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAreaUnderCurve(value: Quantity[] | undefined): this {
    if (isDefinedList<Quantity>(value)) {
      const optErrMsg = `Invalid MedicationKnowledge.kinetics.areaUnderCurve; Provided value array has an element that is not an instance of Quantity.`;
      assertFhirTypeList<Quantity>(value, Quantity, optErrMsg);
      this.areaUnderCurve = value;
    } else {
      this.areaUnderCurve = undefined;
    }
    return this;
  }

  /**
   * Add the provided Quantity value to the `areaUnderCurve` array property.
   *
   * @param value - the `areaUnderCurve` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addAreaUnderCurve(value: Quantity | undefined): this {
    if (isDefined<Quantity>(value)) {
      const optErrMsg = `Invalid MedicationKnowledge.kinetics.areaUnderCurve; Provided element is not an instance of Quantity.`;
      assertFhirType<Quantity>(value, Quantity, optErrMsg);
      this.initAreaUnderCurve();
      this.areaUnderCurve?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `areaUnderCurve` property exists and has a value; `false` otherwise
   */
  public hasAreaUnderCurve(): boolean {
    return isDefinedList<Quantity>(this.areaUnderCurve) && this.areaUnderCurve.some((item: Quantity) => !item.isEmpty());
  }

  /**
   * Initialize the `areaUnderCurve` property
   */
  private initAreaUnderCurve(): void {
    if(!this.hasAreaUnderCurve()) {
      this.areaUnderCurve = [] as Quantity[];
    }
  }

  /**
   * @returns the `lethalDose50` property value as a Quantity array
   */
  public getLethalDose50(): Quantity[] {
    return this.lethalDose50 ?? ([] as Quantity[]);
  }

  /**
   * Assigns the provided Quantity array value to the `lethalDose50` property.
   *
   * @param value - the `lethalDose50` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setLethalDose50(value: Quantity[] | undefined): this {
    if (isDefinedList<Quantity>(value)) {
      const optErrMsg = `Invalid MedicationKnowledge.kinetics.lethalDose50; Provided value array has an element that is not an instance of Quantity.`;
      assertFhirTypeList<Quantity>(value, Quantity, optErrMsg);
      this.lethalDose50 = value;
    } else {
      this.lethalDose50 = undefined;
    }
    return this;
  }

  /**
   * Add the provided Quantity value to the `lethalDose50` array property.
   *
   * @param value - the `lethalDose50` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addLethalDose50(value: Quantity | undefined): this {
    if (isDefined<Quantity>(value)) {
      const optErrMsg = `Invalid MedicationKnowledge.kinetics.lethalDose50; Provided element is not an instance of Quantity.`;
      assertFhirType<Quantity>(value, Quantity, optErrMsg);
      this.initLethalDose50();
      this.lethalDose50?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `lethalDose50` property exists and has a value; `false` otherwise
   */
  public hasLethalDose50(): boolean {
    return isDefinedList<Quantity>(this.lethalDose50) && this.lethalDose50.some((item: Quantity) => !item.isEmpty());
  }

  /**
   * Initialize the `lethalDose50` property
   */
  private initLethalDose50(): void {
    if(!this.hasLethalDose50()) {
      this.lethalDose50 = [] as Quantity[];
    }
  }

  /**
   * @returns the `halfLifePeriod` property value as a Duration object if defined; else an empty Duration object
   */
  public getHalfLifePeriod(): Duration {
    return this.halfLifePeriod ?? new Duration();
  }

  /**
   * Assigns the provided HalfLifePeriod object value to the `halfLifePeriod` property.
   *
   * @param value - the `halfLifePeriod` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setHalfLifePeriod(value: Duration | undefined): this {
    if (isDefined<Duration>(value)) {
      const optErrMsg = `Invalid MedicationKnowledge.kinetics.halfLifePeriod; Provided element is not an instance of Duration.`;
      assertFhirType<Duration>(value, Duration, optErrMsg);
      this.halfLifePeriod = value;
    } else {
      this.halfLifePeriod = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `halfLifePeriod` property exists and has a value; `false` otherwise
   */
  public hasHalfLifePeriod(): boolean {
    return isDefined<Duration>(this.halfLifePeriod) && !this.halfLifePeriod.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'MedicationKnowledge.kinetics';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.areaUnderCurve,
      this.lethalDose50,
      this.halfLifePeriod,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): MedicationKnowledgeKineticsComponent {
    const dest = new MedicationKnowledgeKineticsComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: MedicationKnowledgeKineticsComponent): void {
    super.copyValues(dest);
    const areaUnderCurveList = copyListValues<Quantity>(this.areaUnderCurve);
    dest.areaUnderCurve = areaUnderCurveList.length === 0 ? undefined : areaUnderCurveList;
    const lethalDose50List = copyListValues<Quantity>(this.lethalDose50);
    dest.lethalDose50 = lethalDose50List.length === 0 ? undefined : lethalDose50List;
    dest.halfLifePeriod = this.halfLifePeriod?.copy();
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

    if (this.hasAreaUnderCurve()) {
      setFhirComplexListJson(this.getAreaUnderCurve(), 'areaUnderCurve', jsonObj);
    }

    if (this.hasLethalDose50()) {
      setFhirComplexListJson(this.getLethalDose50(), 'lethalDose50', jsonObj);
    }

    if (this.hasHalfLifePeriod()) {
      setFhirComplexJson(this.getHalfLifePeriod(), 'halfLifePeriod', jsonObj);
    }

    return jsonObj;
  }
}
