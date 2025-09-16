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
  UriType,
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
import { Annotation, Attachment, CodeableConcept, CodeableReference, Dosage, Duration, Identifier, Money, PARSABLE_DATATYPE_MAP, Period, Quantity, Range, Ratio, Reference } from '../complex-types/complex-datatypes';
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
 * - **FHIR Version:** 5.0.0
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

    fieldName = 'author';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setAuthor(datatype);
    }

    fieldName = 'intendedJurisdiction';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addIntendedJurisdiction(datatype);
          }
        });
      }
    }

    fieldName = 'name';
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
            instance.addNameElement(datatype);
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

    fieldName = 'preparationInstruction';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: MarkdownType | undefined = fhirParser.parseMarkdownType(dtJson, dtSiblingJson);
      instance.setPreparationInstructionElement(datatype);
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

    fieldName = 'indicationGuideline';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: MedicationKnowledgeIndicationGuidelineComponent | undefined = MedicationKnowledgeIndicationGuidelineComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addIndicationGuideline(component);
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
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: MedicationKnowledgePackagingComponent | undefined = MedicationKnowledgePackagingComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addPackaging(component);
          }
        });
      }
    }

    fieldName = 'clinicalUseIssue';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addClinicalUseIssue(datatype);
          }
        });
      }
  }

    fieldName = 'storageGuideline';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: MedicationKnowledgeStorageGuidelineComponent | undefined = MedicationKnowledgeStorageGuidelineComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addStorageGuideline(component);
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

    fieldName = 'definitional';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: MedicationKnowledgeDefinitionalComponent | undefined = MedicationKnowledgeDefinitionalComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setDefinitional(component);
    }

    return instance;
  }

  /**
   * MedicationKnowledge.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Business identifier for this medication
   * - **Definition:** Business identifier for this medication.
   * - **Comment:** This is a business identifier, not a resource identifier (see discussion).
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier[] | undefined;

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
   * - **Short:** active | entered-in-error | inactive
   * - **Definition:** A code to indicate if the medication referred to by this MedicationKnowledge is in active use within the drug database or inventory system. The status refers to the validity about the information of the medication and not to its medicinal properties.
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
   * MedicationKnowledge.author Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Creator or owner of the knowledge or information about the medication
   * - **Definition:** The creator or owner of the knowledge or information about the medication.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private author?: Reference | undefined;

  /**
   * MedicationKnowledge.intendedJurisdiction Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Codes that identify the different jurisdictions for which the information of this resource was created
   * - **Definition:** Lists the jurisdictions that this medication knowledge was written for.
   * - **Comment:** The codes could have varying granularity from a country or group of countries down to a specific district.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private intendedJurisdiction?: CodeableConcept[] | undefined;

  /**
   * MedicationKnowledge.name Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A name associated with the medication being described
   * - **Definition:** All of the names for a medication, for example, the name(s) given to a medication in different countries.  For example, acetaminophen and paracetamol or salbutamol and albuterol.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private name?: StringType[] | undefined;

  /**
   * MedicationKnowledge.relatedMedicationKnowledge Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Associated or related medication information
   * - **Definition:** Associated or related medications. For example, if the medication is a branded product (e.g. Crestor), this is the Therapeutic Moeity (e.g. Rosuvastatin) or if this is a generic medication (e.g. Rosuvastatin), this would link to a branded product (e.g. Crestor.
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
   * - **Short:** The set of medication resources that are associated with this medication
   * - **Definition:** Links to associated medications that could be prescribed, dispensed or administered.
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
   * - **isSummary:** true
   */
  private monitoringProgram?: MedicationKnowledgeMonitoringProgramComponent[] | undefined;

  /**
   * MedicationKnowledge.indicationGuideline Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Guidelines or protocols for administration of the medication for an indication
   * - **Definition:** Guidelines or protocols that are applicable for the administration of the medication based on indication.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private indicationGuideline?: MedicationKnowledgeIndicationGuidelineComponent[] | undefined;

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
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private packaging?: MedicationKnowledgePackagingComponent[] | undefined;

  /**
   * MedicationKnowledge.clinicalUseIssue Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Potential clinical issue with or between medication(s)
   * - **Definition:** Potential clinical issue with or between medication(s) (for example, drug-drug interaction, drug-disease contraindication, drug-allergy interaction, etc.).
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/ClinicalUseDefinition',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private clinicalUseIssue?: Reference[] | undefined;

  /**
   * MedicationKnowledge.storageGuideline Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** How the medication should be stored
   * - **Definition:** Information on how the medication should be stored, for example, refrigeration temperatures and length of stability at a given temperature.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private storageGuideline?: MedicationKnowledgeStorageGuidelineComponent[] | undefined;

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
   * MedicationKnowledge.definitional Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Minimal definition information about the medication
   * - **Definition:** Along with the link to a Medicinal Product Definition resource, this information provides common definitional elements that are needed to understand the specific medication that is being described.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private definitional?: MedicationKnowledgeDefinitionalComponent | undefined;

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
      const optErrMsg = `Invalid MedicationKnowledge.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid MedicationKnowledge.identifier; Provided element is not an instance of Identifier.`;
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
   * @returns the `author` property value as a Reference object; else an empty Reference object
   */
  public getAuthor(): Reference {
    return this.author ?? new Reference();
  }

  /**
   * Assigns the provided Author object value to the `author` property.
   *
   * @decorator `@ReferenceTargets('MedicationKnowledge.author', ['Organization',])`
   *
   * @param value - the `author` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicationKnowledge.author', [
    'Organization',
  ])
  public setAuthor(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.author = value;
    } else {
      this.author = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `author` property exists and has a value; `false` otherwise
   */
  public hasAuthor(): boolean {
    return isDefined<Reference>(this.author) && !this.author.isEmpty();
  }

  /**
   * @returns the `intendedJurisdiction` property value as a CodeableConcept array
   */
  public getIntendedJurisdiction(): CodeableConcept[] {
    return this.intendedJurisdiction ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `intendedJurisdiction` property.
   *
   * @param value - the `intendedJurisdiction` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setIntendedJurisdiction(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid MedicationKnowledge.intendedJurisdiction; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.intendedJurisdiction = value;
    } else {
      this.intendedJurisdiction = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `intendedJurisdiction` array property.
   *
   * @param value - the `intendedJurisdiction` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addIntendedJurisdiction(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid MedicationKnowledge.intendedJurisdiction; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initIntendedJurisdiction();
      this.intendedJurisdiction?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `intendedJurisdiction` property exists and has a value; `false` otherwise
   */
  public hasIntendedJurisdiction(): boolean {
    return isDefinedList<CodeableConcept>(this.intendedJurisdiction) && this.intendedJurisdiction.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `intendedJurisdiction` property
   */
  private initIntendedJurisdiction(): void {
    if(!this.hasIntendedJurisdiction()) {
      this.intendedJurisdiction = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `name` property value as a StringType array
   */
  public getNameElement(): StringType[] {
    return this.name ?? ([] as StringType[]);
  }

  /**
   * Assigns the provided StringType array value to the `name` property.
   *
   * @param element - the `name` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setNameElement(element: StringType[] | undefined): this {
    if (isDefinedList<StringType>(element)) {
      const optErrMsg = `Invalid MedicationKnowledge.name; Provided value array has an element that is not an instance of StringType.`;
      assertFhirTypeList<StringType>(element, StringType, optErrMsg);
      this.name = element;
    } else {
      this.name = undefined;
    }
    return this;
  }

  /**
   * Add the provided StringType value to the `name` array property.
   *
   * @param element - the `name` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addNameElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid MedicationKnowledge.name; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.initName();
      this.name?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `name` property exists and has a value; `false` otherwise
   */
  public hasNameElement(): boolean {
    return isDefinedList<StringType>(this.name) && this.name.some((item: StringType) => !item.isEmpty());
  }

  /**
   * @returns the `name` property value as a fhirString array
   */
  public getName(): fhirString[] {
    this.initName();
    const nameValues = [] as fhirString[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.name!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        nameValues.push(value);
      }
    }
    return nameValues;
  }

  /**
   * Assigns the provided primitive value array to the `name` property.
   *
   * @param value - the `name` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setName(value: fhirString[] | undefined): this {
    if (isDefinedList<fhirString>(value)) {
      const nameElements = [] as StringType[];
      for (const nameValue of value) {
        const optErrMsg = `Invalid MedicationKnowledge.name array item (${String(nameValue)})`;
        const element = new StringType(parseFhirPrimitiveData(nameValue, fhirStringSchema, optErrMsg));
        nameElements.push(element);
      }
      this.name = nameElements;
    } else {
      this.name = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `name` array property.
   *
   * @param value - the `name` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addName(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid MedicationKnowledge.name array item (${String(value)})`;
      const element = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
      this.initName();
      this.addNameElement(element);
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
   * Initialize the `name` property
   */
  private initName(): void {
    if (!this.hasName()) {
      this.name = [] as StringType[];
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
   * @returns the `indicationGuideline` property value as a MedicationKnowledgeIndicationGuidelineComponent array
   */
  public getIndicationGuideline(): MedicationKnowledgeIndicationGuidelineComponent[] {
    return this.indicationGuideline ?? ([] as MedicationKnowledgeIndicationGuidelineComponent[]);
  }

  /**
   * Assigns the provided MedicationKnowledgeIndicationGuidelineComponent array value to the `indicationGuideline` property.
   *
   * @param value - the `indicationGuideline` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setIndicationGuideline(value: MedicationKnowledgeIndicationGuidelineComponent[] | undefined): this {
    if (isDefinedList<MedicationKnowledgeIndicationGuidelineComponent>(value)) {
      const optErrMsg = `Invalid MedicationKnowledge.indicationGuideline; Provided value array has an element that is not an instance of MedicationKnowledgeIndicationGuidelineComponent.`;
      assertFhirTypeList<MedicationKnowledgeIndicationGuidelineComponent>(value, MedicationKnowledgeIndicationGuidelineComponent, optErrMsg);
      this.indicationGuideline = value;
    } else {
      this.indicationGuideline = undefined;
    }
    return this;
  }

  /**
   * Add the provided MedicationKnowledgeIndicationGuidelineComponent value to the `indicationGuideline` array property.
   *
   * @param value - the `indicationGuideline` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addIndicationGuideline(value: MedicationKnowledgeIndicationGuidelineComponent | undefined): this {
    if (isDefined<MedicationKnowledgeIndicationGuidelineComponent>(value)) {
      const optErrMsg = `Invalid MedicationKnowledge.indicationGuideline; Provided element is not an instance of MedicationKnowledgeIndicationGuidelineComponent.`;
      assertFhirType<MedicationKnowledgeIndicationGuidelineComponent>(value, MedicationKnowledgeIndicationGuidelineComponent, optErrMsg);
      this.initIndicationGuideline();
      this.indicationGuideline?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `indicationGuideline` property exists and has a value; `false` otherwise
   */
  public hasIndicationGuideline(): boolean {
    return isDefinedList<MedicationKnowledgeIndicationGuidelineComponent>(this.indicationGuideline) && this.indicationGuideline.some((item: MedicationKnowledgeIndicationGuidelineComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `indicationGuideline` property
   */
  private initIndicationGuideline(): void {
    if(!this.hasIndicationGuideline()) {
      this.indicationGuideline = [] as MedicationKnowledgeIndicationGuidelineComponent[];
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
   * @returns the `packaging` property value as a MedicationKnowledgePackagingComponent array
   */
  public getPackaging(): MedicationKnowledgePackagingComponent[] {
    return this.packaging ?? ([] as MedicationKnowledgePackagingComponent[]);
  }

  /**
   * Assigns the provided MedicationKnowledgePackagingComponent array value to the `packaging` property.
   *
   * @param value - the `packaging` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPackaging(value: MedicationKnowledgePackagingComponent[] | undefined): this {
    if (isDefinedList<MedicationKnowledgePackagingComponent>(value)) {
      const optErrMsg = `Invalid MedicationKnowledge.packaging; Provided value array has an element that is not an instance of MedicationKnowledgePackagingComponent.`;
      assertFhirTypeList<MedicationKnowledgePackagingComponent>(value, MedicationKnowledgePackagingComponent, optErrMsg);
      this.packaging = value;
    } else {
      this.packaging = undefined;
    }
    return this;
  }

  /**
   * Add the provided MedicationKnowledgePackagingComponent value to the `packaging` array property.
   *
   * @param value - the `packaging` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addPackaging(value: MedicationKnowledgePackagingComponent | undefined): this {
    if (isDefined<MedicationKnowledgePackagingComponent>(value)) {
      const optErrMsg = `Invalid MedicationKnowledge.packaging; Provided element is not an instance of MedicationKnowledgePackagingComponent.`;
      assertFhirType<MedicationKnowledgePackagingComponent>(value, MedicationKnowledgePackagingComponent, optErrMsg);
      this.initPackaging();
      this.packaging?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `packaging` property exists and has a value; `false` otherwise
   */
  public hasPackaging(): boolean {
    return isDefinedList<MedicationKnowledgePackagingComponent>(this.packaging) && this.packaging.some((item: MedicationKnowledgePackagingComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `packaging` property
   */
  private initPackaging(): void {
    if(!this.hasPackaging()) {
      this.packaging = [] as MedicationKnowledgePackagingComponent[];
    }
  }

  /**
   * @returns the `clinicalUseIssue` property value as a Reference array
   */
  public getClinicalUseIssue(): Reference[] {
    return this.clinicalUseIssue ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `clinicalUseIssue` property.
   *
   * @decorator `@ReferenceTargets('MedicationKnowledge.clinicalUseIssue', ['ClinicalUseDefinition',])`
   *
   * @param value - the `clinicalUseIssue` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicationKnowledge.clinicalUseIssue', [
    'ClinicalUseDefinition',
  ])
  public setClinicalUseIssue(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.clinicalUseIssue = value;
    } else {
      this.clinicalUseIssue = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `clinicalUseIssue` array property.
   *
   * @decorator `@ReferenceTargets('MedicationKnowledge.clinicalUseIssue', ['ClinicalUseDefinition',])`
   *
   * @param value - the `clinicalUseIssue` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicationKnowledge.clinicalUseIssue', [
    'ClinicalUseDefinition',
  ])
  public addClinicalUseIssue(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initClinicalUseIssue();
      this.clinicalUseIssue?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `clinicalUseIssue` property exists and has a value; `false` otherwise
   */
  public hasClinicalUseIssue(): boolean {
    return isDefinedList<Reference>(this.clinicalUseIssue) && this.clinicalUseIssue.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `clinicalUseIssue` property
   */
  private initClinicalUseIssue(): void {
    if (!this.hasClinicalUseIssue()) {
      this.clinicalUseIssue = [] as Reference[];
    }
  }

  /**
   * @returns the `storageGuideline` property value as a MedicationKnowledgeStorageGuidelineComponent array
   */
  public getStorageGuideline(): MedicationKnowledgeStorageGuidelineComponent[] {
    return this.storageGuideline ?? ([] as MedicationKnowledgeStorageGuidelineComponent[]);
  }

  /**
   * Assigns the provided MedicationKnowledgeStorageGuidelineComponent array value to the `storageGuideline` property.
   *
   * @param value - the `storageGuideline` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setStorageGuideline(value: MedicationKnowledgeStorageGuidelineComponent[] | undefined): this {
    if (isDefinedList<MedicationKnowledgeStorageGuidelineComponent>(value)) {
      const optErrMsg = `Invalid MedicationKnowledge.storageGuideline; Provided value array has an element that is not an instance of MedicationKnowledgeStorageGuidelineComponent.`;
      assertFhirTypeList<MedicationKnowledgeStorageGuidelineComponent>(value, MedicationKnowledgeStorageGuidelineComponent, optErrMsg);
      this.storageGuideline = value;
    } else {
      this.storageGuideline = undefined;
    }
    return this;
  }

  /**
   * Add the provided MedicationKnowledgeStorageGuidelineComponent value to the `storageGuideline` array property.
   *
   * @param value - the `storageGuideline` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addStorageGuideline(value: MedicationKnowledgeStorageGuidelineComponent | undefined): this {
    if (isDefined<MedicationKnowledgeStorageGuidelineComponent>(value)) {
      const optErrMsg = `Invalid MedicationKnowledge.storageGuideline; Provided element is not an instance of MedicationKnowledgeStorageGuidelineComponent.`;
      assertFhirType<MedicationKnowledgeStorageGuidelineComponent>(value, MedicationKnowledgeStorageGuidelineComponent, optErrMsg);
      this.initStorageGuideline();
      this.storageGuideline?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `storageGuideline` property exists and has a value; `false` otherwise
   */
  public hasStorageGuideline(): boolean {
    return isDefinedList<MedicationKnowledgeStorageGuidelineComponent>(this.storageGuideline) && this.storageGuideline.some((item: MedicationKnowledgeStorageGuidelineComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `storageGuideline` property
   */
  private initStorageGuideline(): void {
    if(!this.hasStorageGuideline()) {
      this.storageGuideline = [] as MedicationKnowledgeStorageGuidelineComponent[];
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
   * @returns the `definitional` property value as a MedicationKnowledgeDefinitionalComponent object if defined; else an empty MedicationKnowledgeDefinitionalComponent object
   */
  public getDefinitional(): MedicationKnowledgeDefinitionalComponent {
    return this.definitional ?? new MedicationKnowledgeDefinitionalComponent();
  }

  /**
   * Assigns the provided Definitional object value to the `definitional` property.
   *
   * @param value - the `definitional` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDefinitional(value: MedicationKnowledgeDefinitionalComponent | undefined): this {
    if (isDefined<MedicationKnowledgeDefinitionalComponent>(value)) {
      const optErrMsg = `Invalid MedicationKnowledge.definitional; Provided element is not an instance of MedicationKnowledgeDefinitionalComponent.`;
      assertFhirType<MedicationKnowledgeDefinitionalComponent>(value, MedicationKnowledgeDefinitionalComponent, optErrMsg);
      this.definitional = value;
    } else {
      this.definitional = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `definitional` property exists and has a value; `false` otherwise
   */
  public hasDefinitional(): boolean {
    return isDefined<MedicationKnowledgeDefinitionalComponent>(this.definitional) && !this.definitional.isEmpty();
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
      this.identifier,
      this.code,
      this.status,
      this.author,
      this.intendedJurisdiction,
      this.name,
      this.relatedMedicationKnowledge,
      this.associatedMedication,
      this.productType,
      this.monograph,
      this.preparationInstruction,
      this.cost,
      this.monitoringProgram,
      this.indicationGuideline,
      this.medicineClassification,
      this.packaging,
      this.clinicalUseIssue,
      this.storageGuideline,
      this.regulatory,
      this.definitional,
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
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    dest.code = this.code?.copy();
    dest.status = this.status?.copy();
    dest.author = this.author?.copy();
    const intendedJurisdictionList = copyListValues<CodeableConcept>(this.intendedJurisdiction);
    dest.intendedJurisdiction = intendedJurisdictionList.length === 0 ? undefined : intendedJurisdictionList;
    const nameList = copyListValues<StringType>(this.name);
    dest.name = nameList.length === 0 ? undefined : nameList;
    const relatedMedicationKnowledgeList = copyListValues<MedicationKnowledgeRelatedMedicationKnowledgeComponent>(this.relatedMedicationKnowledge);
    dest.relatedMedicationKnowledge = relatedMedicationKnowledgeList.length === 0 ? undefined : relatedMedicationKnowledgeList;
    const associatedMedicationList = copyListValues<Reference>(this.associatedMedication);
    dest.associatedMedication = associatedMedicationList.length === 0 ? undefined : associatedMedicationList;
    const productTypeList = copyListValues<CodeableConcept>(this.productType);
    dest.productType = productTypeList.length === 0 ? undefined : productTypeList;
    const monographList = copyListValues<MedicationKnowledgeMonographComponent>(this.monograph);
    dest.monograph = monographList.length === 0 ? undefined : monographList;
    dest.preparationInstruction = this.preparationInstruction?.copy();
    const costList = copyListValues<MedicationKnowledgeCostComponent>(this.cost);
    dest.cost = costList.length === 0 ? undefined : costList;
    const monitoringProgramList = copyListValues<MedicationKnowledgeMonitoringProgramComponent>(this.monitoringProgram);
    dest.monitoringProgram = monitoringProgramList.length === 0 ? undefined : monitoringProgramList;
    const indicationGuidelineList = copyListValues<MedicationKnowledgeIndicationGuidelineComponent>(this.indicationGuideline);
    dest.indicationGuideline = indicationGuidelineList.length === 0 ? undefined : indicationGuidelineList;
    const medicineClassificationList = copyListValues<MedicationKnowledgeMedicineClassificationComponent>(this.medicineClassification);
    dest.medicineClassification = medicineClassificationList.length === 0 ? undefined : medicineClassificationList;
    const packagingList = copyListValues<MedicationKnowledgePackagingComponent>(this.packaging);
    dest.packaging = packagingList.length === 0 ? undefined : packagingList;
    const clinicalUseIssueList = copyListValues<Reference>(this.clinicalUseIssue);
    dest.clinicalUseIssue = clinicalUseIssueList.length === 0 ? undefined : clinicalUseIssueList;
    const storageGuidelineList = copyListValues<MedicationKnowledgeStorageGuidelineComponent>(this.storageGuideline);
    dest.storageGuideline = storageGuidelineList.length === 0 ? undefined : storageGuidelineList;
    const regulatoryList = copyListValues<MedicationKnowledgeRegulatoryComponent>(this.regulatory);
    dest.regulatory = regulatoryList.length === 0 ? undefined : regulatoryList;
    dest.definitional = this.definitional?.copy();
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

    if (this.hasCode()) {
      setFhirComplexJson(this.getCode(), 'code', jsonObj);
    }

    if (this.hasStatusElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getStatusElement()!, 'status', jsonObj);
    }

    if (this.hasAuthor()) {
      setFhirComplexJson(this.getAuthor(), 'author', jsonObj);
    }

    if (this.hasIntendedJurisdiction()) {
      setFhirComplexListJson(this.getIntendedJurisdiction(), 'intendedJurisdiction', jsonObj);
    }

    if (this.hasName()) {
      setFhirPrimitiveListJson(this.getNameElement(), 'name', jsonObj);
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

    if (this.hasPreparationInstructionElement()) {
      setFhirPrimitiveJson<fhirMarkdown>(this.getPreparationInstructionElement(), 'preparationInstruction', jsonObj);
    }

    if (this.hasCost()) {
      setFhirBackboneElementListJson(this.getCost(), 'cost', jsonObj);
    }

    if (this.hasMonitoringProgram()) {
      setFhirBackboneElementListJson(this.getMonitoringProgram(), 'monitoringProgram', jsonObj);
    }

    if (this.hasIndicationGuideline()) {
      setFhirBackboneElementListJson(this.getIndicationGuideline(), 'indicationGuideline', jsonObj);
    }

    if (this.hasMedicineClassification()) {
      setFhirBackboneElementListJson(this.getMedicineClassification(), 'medicineClassification', jsonObj);
    }

    if (this.hasPackaging()) {
      setFhirBackboneElementListJson(this.getPackaging(), 'packaging', jsonObj);
    }

    if (this.hasClinicalUseIssue()) {
      setFhirComplexListJson(this.getClinicalUseIssue(), 'clinicalUseIssue', jsonObj);
    }

    if (this.hasStorageGuideline()) {
      setFhirBackboneElementListJson(this.getStorageGuideline(), 'storageGuideline', jsonObj);
    }

    if (this.hasRegulatory()) {
      setFhirBackboneElementListJson(this.getRegulatory(), 'regulatory', jsonObj);
    }

    if (this.hasDefinitional()) {
      setFhirBackboneElementJson(this.getDefinitional(), 'definitional', jsonObj);
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
 * - **Definition:** Associated or related medications. For example, if the medication is a branded product (e.g. Crestor), this is the Therapeutic Moeity (e.g. Rosuvastatin) or if this is a generic medication (e.g. Rosuvastatin), this would link to a branded product (e.g. Crestor.
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
   * @decorator `@ReferenceTargets('MedicationKnowledge.monograph.source', ['DocumentReference',])`
   *
   * @param value - the `source` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicationKnowledge.monograph.source', [
    'DocumentReference',
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
  constructor(type_: CodeableConcept | null = null, cost: IDataType | null = null) {
    super();

    this.type_ = null;
    if (isDefined<CodeableConcept>(type_)) {
      this.setType(type_);
    }

    this.cost = null;
    if (isDefined<IDataType>(cost)) {
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
    

    const classMetadata: DecoratorMetadataObject | null = MedicationKnowledgeCostComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for MedicationKnowledgeCostComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    fieldName = 'effectiveDate';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Period | undefined = Period.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addEffectiveDate(datatype);
          }
        });
      }
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

    fieldName = 'source';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setSourceElement(datatype);
    }

    fieldName = 'cost[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const cost: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    if (cost === undefined) {
      instance.setCost(null);
    } else {
      instance.setCost(cost);
    }

    return instance;
  }

  /**
   * MedicationKnowledge.cost.effectiveDate Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The date range for which the cost is effective
   * - **Definition:** The date range for which the cost information of the medication is effective.
   * - **FHIR Type:** `Period`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private effectiveDate?: Period[] | undefined;

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
   * MedicationKnowledge.cost.cost[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('MedicationKnowledge.cost.cost[x]', ['Money','CodeableConcept',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The price or category of the cost of the medication
   * - **Definition:** The price or representation of the cost (for example, Band A, Band B or $, $$) of the medication.
   * - **FHIR Types:**
   *     'Money',
   *     'CodeableConcept',
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('MedicationKnowledge.cost.cost[x]',[
    'Money',
    'CodeableConcept',
  ])
  private cost: IDataType | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `effectiveDate` property value as a Period array
   */
  public getEffectiveDate(): Period[] {
    return this.effectiveDate ?? ([] as Period[]);
  }

  /**
   * Assigns the provided Period array value to the `effectiveDate` property.
   *
   * @param value - the `effectiveDate` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setEffectiveDate(value: Period[] | undefined): this {
    if (isDefinedList<Period>(value)) {
      const optErrMsg = `Invalid MedicationKnowledge.cost.effectiveDate; Provided value array has an element that is not an instance of Period.`;
      assertFhirTypeList<Period>(value, Period, optErrMsg);
      this.effectiveDate = value;
    } else {
      this.effectiveDate = undefined;
    }
    return this;
  }

  /**
   * Add the provided Period value to the `effectiveDate` array property.
   *
   * @param value - the `effectiveDate` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addEffectiveDate(value: Period | undefined): this {
    if (isDefined<Period>(value)) {
      const optErrMsg = `Invalid MedicationKnowledge.cost.effectiveDate; Provided element is not an instance of Period.`;
      assertFhirType<Period>(value, Period, optErrMsg);
      this.initEffectiveDate();
      this.effectiveDate?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `effectiveDate` property exists and has a value; `false` otherwise
   */
  public hasEffectiveDate(): boolean {
    return isDefinedList<Period>(this.effectiveDate) && this.effectiveDate.some((item: Period) => !item.isEmpty());
  }

  /**
   * Initialize the `effectiveDate` property
   */
  private initEffectiveDate(): void {
    if(!this.hasEffectiveDate()) {
      this.effectiveDate = [] as Period[];
    }
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
   * @returns the `cost` property value as a DataType object; else null
   */
  public getCost(): IDataType | null {
    return this.cost;
  }

  /**
   * Assigns the provided DataType object value to the `cost` property.
   *
   * @decorator `@ChoiceDataTypes('MedicationKnowledge.cost.cost[x]')`
   *
   * @param value - the `cost` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('MedicationKnowledge.cost.cost[x]')
  public setCost(value: IDataType | undefined | null): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
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
    return isDefined<IDataType>(this.cost) && !this.cost.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `cost` property value as a Money object if defined; else null
   */
  public getCostMoney(): Money | null {
    if (!isDefined<IDataType>(this.cost)) {
      return null;
    }
    if (!(this.cost instanceof Money)) {
      throw new InvalidTypeError(
        `DataType mismatch for MedicationKnowledge.cost.cost[x]: Expected Money but encountered ${this.cost.fhirType()}`,
      );
    }
    return this.cost;
  }

  /**
   * @returns `true` if the `` property exists as a Money and has a value; `false` otherwise
   */
  public hasCostMoney(): boolean {
    return this.hasCost() && this.cost instanceof Money;
  }

  /**
   * @returns the `cost` property value as a CodeableConcept object if defined; else null
   */
  public getCostCodeableConcept(): CodeableConcept | null {
    if (!isDefined<IDataType>(this.cost)) {
      return null;
    }
    if (!(this.cost instanceof CodeableConcept)) {
      throw new InvalidTypeError(
        `DataType mismatch for MedicationKnowledge.cost.cost[x]: Expected CodeableConcept but encountered ${this.cost.fhirType()}`,
      );
    }
    return this.cost;
  }

  /**
   * @returns `true` if the `` property exists as a CodeableConcept and has a value; `false` otherwise
   */
  public hasCostCodeableConcept(): boolean {
    return this.hasCost() && this.cost instanceof CodeableConcept;
  }

  // End of choice datatype-specific "get"/"has" methods

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
      this.effectiveDate,
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
    const effectiveDateList = copyListValues<Period>(this.effectiveDate);
    dest.effectiveDate = effectiveDateList.length === 0 ? undefined : effectiveDateList;
    dest.type_ = this.type_ ? this.type_.copy() : null;
    dest.source = this.source?.copy();
    dest.cost = this.cost ? this.cost.copy() as IDataType : null;
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

    if (this.hasEffectiveDate()) {
      setFhirComplexListJson(this.getEffectiveDate(), 'effectiveDate', jsonObj);
    }

    if (this.hasType()) {
      setFhirComplexJson(this.getType(), 'type', jsonObj);
    }

    if (this.hasSourceElement()) {
      setFhirPrimitiveJson<fhirString>(this.getSourceElement(), 'source', jsonObj);
    }

    if (this.hasCost()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getCost()!, 'cost', jsonObj);
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
 * MedicationKnowledgeIndicationGuidelineComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Guidelines or protocols for administration of the medication for an indication
 * - **Definition:** Guidelines or protocols that are applicable for the administration of the medication based on indication.
 *
 * @category Data Models: Resource
 * @see [FHIR MedicationKnowledge](http://hl7.org/fhir/StructureDefinition/MedicationKnowledge)
 */
export class MedicationKnowledgeIndicationGuidelineComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `MedicationKnowledgeIndicationGuidelineComponent` JSON to instantiate the MedicationKnowledgeIndicationGuidelineComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `MedicationKnowledgeIndicationGuidelineComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to MedicationKnowledgeIndicationGuidelineComponent
   * @returns MedicationKnowledgeIndicationGuidelineComponent data model or undefined for `MedicationKnowledgeIndicationGuidelineComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): MedicationKnowledgeIndicationGuidelineComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'MedicationKnowledgeIndicationGuidelineComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new MedicationKnowledgeIndicationGuidelineComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    fieldName = 'indication';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: CodeableReference | undefined = CodeableReference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addIndication(datatype);
          }
        });
      }
    }

    fieldName = 'dosingGuideline';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: MedicationKnowledgeIndicationGuidelineDosingGuidelineComponent | undefined = MedicationKnowledgeIndicationGuidelineDosingGuidelineComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addDosingGuideline(component);
          }
        });
      }
    }

    return instance;
  }

  /**
   * MedicationKnowledge.indicationGuideline.indication Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Indication for use that applies to the specific administration guideline
   * - **Definition:** Indication or reason for use of the medication that applies to the specific administration guideline.
   * - **FHIR Type:** `CodeableReference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/ClinicalUseDefinition',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private indication?: CodeableReference[] | undefined;

  /**
   * MedicationKnowledge.indicationGuideline.dosingGuideline Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Guidelines for dosage of the medication
   * - **Definition:** The guidelines for the dosage of the medication for the indication.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private dosingGuideline?: MedicationKnowledgeIndicationGuidelineDosingGuidelineComponent[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `indication` property value as a CodeableReference array
   */
  public getIndication(): CodeableReference[] {
    return this.indication ?? ([] as CodeableReference[]);
  }

  /**
   * Assigns the provided CodeableReference array value to the `indication` property.
   *
   * @param value - the `indication` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setIndication(value: CodeableReference[] | undefined): this {
    if (isDefinedList<CodeableReference>(value)) {
      const optErrMsg = `Invalid MedicationKnowledge.indicationGuideline.indication; Provided value array has an element that is not an instance of CodeableReference.`;
      assertFhirTypeList<CodeableReference>(value, CodeableReference, optErrMsg);
      this.indication = value;
    } else {
      this.indication = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableReference value to the `indication` array property.
   *
   * @param value - the `indication` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addIndication(value: CodeableReference | undefined): this {
    if (isDefined<CodeableReference>(value)) {
      const optErrMsg = `Invalid MedicationKnowledge.indicationGuideline.indication; Provided element is not an instance of CodeableReference.`;
      assertFhirType<CodeableReference>(value, CodeableReference, optErrMsg);
      this.initIndication();
      this.indication?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `indication` property exists and has a value; `false` otherwise
   */
  public hasIndication(): boolean {
    return isDefinedList<CodeableReference>(this.indication) && this.indication.some((item: CodeableReference) => !item.isEmpty());
  }

  /**
   * Initialize the `indication` property
   */
  private initIndication(): void {
    if(!this.hasIndication()) {
      this.indication = [] as CodeableReference[];
    }
  }

  /**
   * @returns the `dosingGuideline` property value as a MedicationKnowledgeIndicationGuidelineDosingGuidelineComponent array
   */
  public getDosingGuideline(): MedicationKnowledgeIndicationGuidelineDosingGuidelineComponent[] {
    return this.dosingGuideline ?? ([] as MedicationKnowledgeIndicationGuidelineDosingGuidelineComponent[]);
  }

  /**
   * Assigns the provided MedicationKnowledgeIndicationGuidelineDosingGuidelineComponent array value to the `dosingGuideline` property.
   *
   * @param value - the `dosingGuideline` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDosingGuideline(value: MedicationKnowledgeIndicationGuidelineDosingGuidelineComponent[] | undefined): this {
    if (isDefinedList<MedicationKnowledgeIndicationGuidelineDosingGuidelineComponent>(value)) {
      const optErrMsg = `Invalid MedicationKnowledge.indicationGuideline.dosingGuideline; Provided value array has an element that is not an instance of MedicationKnowledgeIndicationGuidelineDosingGuidelineComponent.`;
      assertFhirTypeList<MedicationKnowledgeIndicationGuidelineDosingGuidelineComponent>(value, MedicationKnowledgeIndicationGuidelineDosingGuidelineComponent, optErrMsg);
      this.dosingGuideline = value;
    } else {
      this.dosingGuideline = undefined;
    }
    return this;
  }

  /**
   * Add the provided MedicationKnowledgeIndicationGuidelineDosingGuidelineComponent value to the `dosingGuideline` array property.
   *
   * @param value - the `dosingGuideline` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addDosingGuideline(value: MedicationKnowledgeIndicationGuidelineDosingGuidelineComponent | undefined): this {
    if (isDefined<MedicationKnowledgeIndicationGuidelineDosingGuidelineComponent>(value)) {
      const optErrMsg = `Invalid MedicationKnowledge.indicationGuideline.dosingGuideline; Provided element is not an instance of MedicationKnowledgeIndicationGuidelineDosingGuidelineComponent.`;
      assertFhirType<MedicationKnowledgeIndicationGuidelineDosingGuidelineComponent>(value, MedicationKnowledgeIndicationGuidelineDosingGuidelineComponent, optErrMsg);
      this.initDosingGuideline();
      this.dosingGuideline?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `dosingGuideline` property exists and has a value; `false` otherwise
   */
  public hasDosingGuideline(): boolean {
    return isDefinedList<MedicationKnowledgeIndicationGuidelineDosingGuidelineComponent>(this.dosingGuideline) && this.dosingGuideline.some((item: MedicationKnowledgeIndicationGuidelineDosingGuidelineComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `dosingGuideline` property
   */
  private initDosingGuideline(): void {
    if(!this.hasDosingGuideline()) {
      this.dosingGuideline = [] as MedicationKnowledgeIndicationGuidelineDosingGuidelineComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'MedicationKnowledge.indicationGuideline';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.indication,
      this.dosingGuideline,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): MedicationKnowledgeIndicationGuidelineComponent {
    const dest = new MedicationKnowledgeIndicationGuidelineComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: MedicationKnowledgeIndicationGuidelineComponent): void {
    super.copyValues(dest);
    const indicationList = copyListValues<CodeableReference>(this.indication);
    dest.indication = indicationList.length === 0 ? undefined : indicationList;
    const dosingGuidelineList = copyListValues<MedicationKnowledgeIndicationGuidelineDosingGuidelineComponent>(this.dosingGuideline);
    dest.dosingGuideline = dosingGuidelineList.length === 0 ? undefined : dosingGuidelineList;
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

    if (this.hasIndication()) {
      setFhirComplexListJson(this.getIndication(), 'indication', jsonObj);
    }

    if (this.hasDosingGuideline()) {
      setFhirBackboneElementListJson(this.getDosingGuideline(), 'dosingGuideline', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * MedicationKnowledgeIndicationGuidelineDosingGuidelineComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Guidelines for dosage of the medication
 * - **Definition:** The guidelines for the dosage of the medication for the indication.
 *
 * @category Data Models: Resource
 * @see [FHIR MedicationKnowledge](http://hl7.org/fhir/StructureDefinition/MedicationKnowledge)
 */
export class MedicationKnowledgeIndicationGuidelineDosingGuidelineComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `MedicationKnowledgeIndicationGuidelineDosingGuidelineComponent` JSON to instantiate the MedicationKnowledgeIndicationGuidelineDosingGuidelineComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `MedicationKnowledgeIndicationGuidelineDosingGuidelineComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to MedicationKnowledgeIndicationGuidelineDosingGuidelineComponent
   * @returns MedicationKnowledgeIndicationGuidelineDosingGuidelineComponent data model or undefined for `MedicationKnowledgeIndicationGuidelineDosingGuidelineComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): MedicationKnowledgeIndicationGuidelineDosingGuidelineComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'MedicationKnowledgeIndicationGuidelineDosingGuidelineComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new MedicationKnowledgeIndicationGuidelineDosingGuidelineComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    fieldName = 'treatmentIntent';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setTreatmentIntent(datatype);
    }

    fieldName = 'dosage';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: MedicationKnowledgeIndicationGuidelineDosingGuidelineDosageComponent | undefined = MedicationKnowledgeIndicationGuidelineDosingGuidelineDosageComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addDosage(component);
          }
        });
      }
    }

    fieldName = 'administrationTreatment';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setAdministrationTreatment(datatype);
    }

    fieldName = 'patientCharacteristic';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: MedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristicComponent | undefined = MedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristicComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addPatientCharacteristic(component);
          }
        });
      }
    }

    return instance;
  }

  /**
   * MedicationKnowledge.indicationGuideline.dosingGuideline.treatmentIntent Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Intention of the treatment
   * - **Definition:** The overall intention of the treatment, for example, prophylactic, supporative, curative, etc.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private treatmentIntent?: CodeableConcept | undefined;

  /**
   * MedicationKnowledge.indicationGuideline.dosingGuideline.dosage Element
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
  private dosage?: MedicationKnowledgeIndicationGuidelineDosingGuidelineDosageComponent[] | undefined;

  /**
   * MedicationKnowledge.indicationGuideline.dosingGuideline.administrationTreatment Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Type of treatment the guideline applies to
   * - **Definition:** The type of the treatment that the guideline applies to, for example, long term therapy, first line treatment, etc.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private administrationTreatment?: CodeableConcept | undefined;

  /**
   * MedicationKnowledge.indicationGuideline.dosingGuideline.patientCharacteristic Element
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
  private patientCharacteristic?: MedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristicComponent[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `treatmentIntent` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getTreatmentIntent(): CodeableConcept {
    return this.treatmentIntent ?? new CodeableConcept();
  }

  /**
   * Assigns the provided TreatmentIntent object value to the `treatmentIntent` property.
   *
   * @param value - the `treatmentIntent` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setTreatmentIntent(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid MedicationKnowledge.indicationGuideline.dosingGuideline.treatmentIntent; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.treatmentIntent = value;
    } else {
      this.treatmentIntent = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `treatmentIntent` property exists and has a value; `false` otherwise
   */
  public hasTreatmentIntent(): boolean {
    return isDefined<CodeableConcept>(this.treatmentIntent) && !this.treatmentIntent.isEmpty();
  }

  /**
   * @returns the `dosage` property value as a MedicationKnowledgeIndicationGuidelineDosingGuidelineDosageComponent array
   */
  public getDosage(): MedicationKnowledgeIndicationGuidelineDosingGuidelineDosageComponent[] {
    return this.dosage ?? ([] as MedicationKnowledgeIndicationGuidelineDosingGuidelineDosageComponent[]);
  }

  /**
   * Assigns the provided MedicationKnowledgeIndicationGuidelineDosingGuidelineDosageComponent array value to the `dosage` property.
   *
   * @param value - the `dosage` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDosage(value: MedicationKnowledgeIndicationGuidelineDosingGuidelineDosageComponent[] | undefined): this {
    if (isDefinedList<MedicationKnowledgeIndicationGuidelineDosingGuidelineDosageComponent>(value)) {
      const optErrMsg = `Invalid MedicationKnowledge.indicationGuideline.dosingGuideline.dosage; Provided value array has an element that is not an instance of MedicationKnowledgeIndicationGuidelineDosingGuidelineDosageComponent.`;
      assertFhirTypeList<MedicationKnowledgeIndicationGuidelineDosingGuidelineDosageComponent>(value, MedicationKnowledgeIndicationGuidelineDosingGuidelineDosageComponent, optErrMsg);
      this.dosage = value;
    } else {
      this.dosage = undefined;
    }
    return this;
  }

  /**
   * Add the provided MedicationKnowledgeIndicationGuidelineDosingGuidelineDosageComponent value to the `dosage` array property.
   *
   * @param value - the `dosage` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addDosage(value: MedicationKnowledgeIndicationGuidelineDosingGuidelineDosageComponent | undefined): this {
    if (isDefined<MedicationKnowledgeIndicationGuidelineDosingGuidelineDosageComponent>(value)) {
      const optErrMsg = `Invalid MedicationKnowledge.indicationGuideline.dosingGuideline.dosage; Provided element is not an instance of MedicationKnowledgeIndicationGuidelineDosingGuidelineDosageComponent.`;
      assertFhirType<MedicationKnowledgeIndicationGuidelineDosingGuidelineDosageComponent>(value, MedicationKnowledgeIndicationGuidelineDosingGuidelineDosageComponent, optErrMsg);
      this.initDosage();
      this.dosage?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `dosage` property exists and has a value; `false` otherwise
   */
  public hasDosage(): boolean {
    return isDefinedList<MedicationKnowledgeIndicationGuidelineDosingGuidelineDosageComponent>(this.dosage) && this.dosage.some((item: MedicationKnowledgeIndicationGuidelineDosingGuidelineDosageComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `dosage` property
   */
  private initDosage(): void {
    if(!this.hasDosage()) {
      this.dosage = [] as MedicationKnowledgeIndicationGuidelineDosingGuidelineDosageComponent[];
    }
  }

  /**
   * @returns the `administrationTreatment` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getAdministrationTreatment(): CodeableConcept {
    return this.administrationTreatment ?? new CodeableConcept();
  }

  /**
   * Assigns the provided AdministrationTreatment object value to the `administrationTreatment` property.
   *
   * @param value - the `administrationTreatment` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAdministrationTreatment(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid MedicationKnowledge.indicationGuideline.dosingGuideline.administrationTreatment; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.administrationTreatment = value;
    } else {
      this.administrationTreatment = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `administrationTreatment` property exists and has a value; `false` otherwise
   */
  public hasAdministrationTreatment(): boolean {
    return isDefined<CodeableConcept>(this.administrationTreatment) && !this.administrationTreatment.isEmpty();
  }

  /**
   * @returns the `patientCharacteristic` property value as a MedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristicComponent array
   */
  public getPatientCharacteristic(): MedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristicComponent[] {
    return this.patientCharacteristic ?? ([] as MedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristicComponent[]);
  }

  /**
   * Assigns the provided MedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristicComponent array value to the `patientCharacteristic` property.
   *
   * @param value - the `patientCharacteristic` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPatientCharacteristic(value: MedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristicComponent[] | undefined): this {
    if (isDefinedList<MedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristicComponent>(value)) {
      const optErrMsg = `Invalid MedicationKnowledge.indicationGuideline.dosingGuideline.patientCharacteristic; Provided value array has an element that is not an instance of MedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristicComponent.`;
      assertFhirTypeList<MedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristicComponent>(value, MedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristicComponent, optErrMsg);
      this.patientCharacteristic = value;
    } else {
      this.patientCharacteristic = undefined;
    }
    return this;
  }

  /**
   * Add the provided MedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristicComponent value to the `patientCharacteristic` array property.
   *
   * @param value - the `patientCharacteristic` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addPatientCharacteristic(value: MedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristicComponent | undefined): this {
    if (isDefined<MedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristicComponent>(value)) {
      const optErrMsg = `Invalid MedicationKnowledge.indicationGuideline.dosingGuideline.patientCharacteristic; Provided element is not an instance of MedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristicComponent.`;
      assertFhirType<MedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristicComponent>(value, MedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristicComponent, optErrMsg);
      this.initPatientCharacteristic();
      this.patientCharacteristic?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `patientCharacteristic` property exists and has a value; `false` otherwise
   */
  public hasPatientCharacteristic(): boolean {
    return isDefinedList<MedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristicComponent>(this.patientCharacteristic) && this.patientCharacteristic.some((item: MedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristicComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `patientCharacteristic` property
   */
  private initPatientCharacteristic(): void {
    if(!this.hasPatientCharacteristic()) {
      this.patientCharacteristic = [] as MedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristicComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'MedicationKnowledge.indicationGuideline.dosingGuideline';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.treatmentIntent,
      this.dosage,
      this.administrationTreatment,
      this.patientCharacteristic,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): MedicationKnowledgeIndicationGuidelineDosingGuidelineComponent {
    const dest = new MedicationKnowledgeIndicationGuidelineDosingGuidelineComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: MedicationKnowledgeIndicationGuidelineDosingGuidelineComponent): void {
    super.copyValues(dest);
    dest.treatmentIntent = this.treatmentIntent?.copy();
    const dosageList = copyListValues<MedicationKnowledgeIndicationGuidelineDosingGuidelineDosageComponent>(this.dosage);
    dest.dosage = dosageList.length === 0 ? undefined : dosageList;
    dest.administrationTreatment = this.administrationTreatment?.copy();
    const patientCharacteristicList = copyListValues<MedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristicComponent>(this.patientCharacteristic);
    dest.patientCharacteristic = patientCharacteristicList.length === 0 ? undefined : patientCharacteristicList;
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

    if (this.hasTreatmentIntent()) {
      setFhirComplexJson(this.getTreatmentIntent(), 'treatmentIntent', jsonObj);
    }

    if (this.hasDosage()) {
      setFhirBackboneElementListJson(this.getDosage(), 'dosage', jsonObj);
    }

    if (this.hasAdministrationTreatment()) {
      setFhirComplexJson(this.getAdministrationTreatment(), 'administrationTreatment', jsonObj);
    }

    if (this.hasPatientCharacteristic()) {
      setFhirBackboneElementListJson(this.getPatientCharacteristic(), 'patientCharacteristic', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * MedicationKnowledgeIndicationGuidelineDosingGuidelineDosageComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Dosage for the medication for the specific guidelines
 * - **Definition:** Dosage for the medication for the specific guidelines.
 *
 * @category Data Models: Resource
 * @see [FHIR MedicationKnowledge](http://hl7.org/fhir/StructureDefinition/MedicationKnowledge)
 */
export class MedicationKnowledgeIndicationGuidelineDosingGuidelineDosageComponent extends BackboneElement implements IBackboneElement {
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
   * Parse the provided `MedicationKnowledgeIndicationGuidelineDosingGuidelineDosageComponent` JSON to instantiate the MedicationKnowledgeIndicationGuidelineDosingGuidelineDosageComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `MedicationKnowledgeIndicationGuidelineDosingGuidelineDosageComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to MedicationKnowledgeIndicationGuidelineDosingGuidelineDosageComponent
   * @returns MedicationKnowledgeIndicationGuidelineDosingGuidelineDosageComponent data model or undefined for `MedicationKnowledgeIndicationGuidelineDosingGuidelineDosageComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): MedicationKnowledgeIndicationGuidelineDosingGuidelineDosageComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'MedicationKnowledgeIndicationGuidelineDosingGuidelineDosageComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new MedicationKnowledgeIndicationGuidelineDosingGuidelineDosageComponent();

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
   * MedicationKnowledge.indicationGuideline.dosingGuideline.dosage.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Category of dosage for a medication
   * - **Definition:** The type or category of dosage for a given medication (for example, prophylaxis, maintenance, therapeutic, etc.).
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private type_: CodeableConcept | null;

  /**
   * MedicationKnowledge.indicationGuideline.dosingGuideline.dosage.dosage Element
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
      const optErrMsg = `Invalid MedicationKnowledge.indicationGuideline.dosingGuideline.dosage.type; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid MedicationKnowledge.indicationGuideline.dosingGuideline.dosage.dosage; Provided value array has an element that is not an instance of Dosage.`;
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
      const optErrMsg = `Invalid MedicationKnowledge.indicationGuideline.dosingGuideline.dosage.dosage; Provided element is not an instance of Dosage.`;
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
    return 'MedicationKnowledge.indicationGuideline.dosingGuideline.dosage';
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
  public override copy(): MedicationKnowledgeIndicationGuidelineDosingGuidelineDosageComponent {
    const dest = new MedicationKnowledgeIndicationGuidelineDosingGuidelineDosageComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: MedicationKnowledgeIndicationGuidelineDosingGuidelineDosageComponent): void {
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
 * MedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristicComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Characteristics of the patient that are relevant to the administration guidelines
 * - **Definition:** Characteristics of the patient that are relevant to the administration guidelines (for example, height, weight, gender, etc.).
 *
 * @category Data Models: Resource
 * @see [FHIR MedicationKnowledge](http://hl7.org/fhir/StructureDefinition/MedicationKnowledge)
 */
export class MedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristicComponent extends BackboneElement implements IBackboneElement {
  constructor(type_: CodeableConcept | null = null) {
    super();

    this.type_ = null;
    if (isDefined<CodeableConcept>(type_)) {
      this.setType(type_);
    }
  }

  /**
   * Parse the provided `MedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristicComponent` JSON to instantiate the MedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristicComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `MedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristicComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to MedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristicComponent
   * @returns MedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristicComponent data model or undefined for `MedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristicComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): MedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristicComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'MedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristicComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new MedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristicComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    const classMetadata: DecoratorMetadataObject | null = MedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristicComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for MedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristicComponent`;
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
   * MedicationKnowledge.indicationGuideline.dosingGuideline.patientCharacteristic.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Categorization of specific characteristic that is relevant to the administration guideline
   * - **Definition:** The categorization of the specific characteristic that is relevant to the administration guideline (e.g. height, weight, gender).
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private type_: CodeableConcept | null;

  /**
   * MedicationKnowledge.indicationGuideline.dosingGuideline.patientCharacteristic.value[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('MedicationKnowledge.indicationGuideline.dosingGuideline.patientCharacteristic.value[x]', ['CodeableConcept','Quantity','Range',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The specific characteristic
   * - **Definition:** The specific characteristic (e.g. height, weight, gender, etc.).
   * - **FHIR Types:**
   *     'CodeableConcept',
   *     'Quantity',
   *     'Range',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('MedicationKnowledge.indicationGuideline.dosingGuideline.patientCharacteristic.value[x]',[
    'CodeableConcept',
    'Quantity',
    'Range',
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
      const optErrMsg = `Invalid MedicationKnowledge.indicationGuideline.dosingGuideline.patientCharacteristic.type; Provided element is not an instance of CodeableConcept.`;
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
   * @decorator `@ChoiceDataTypes('MedicationKnowledge.indicationGuideline.dosingGuideline.patientCharacteristic.value[x]')`
   *
   * @param value - the `value` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('MedicationKnowledge.indicationGuideline.dosingGuideline.patientCharacteristic.value[x]')
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
        `DataType mismatch for MedicationKnowledge.indicationGuideline.dosingGuideline.patientCharacteristic.value[x]: Expected CodeableConcept but encountered ${this.value.fhirType()}`,
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
        `DataType mismatch for MedicationKnowledge.indicationGuideline.dosingGuideline.patientCharacteristic.value[x]: Expected Quantity but encountered ${this.value.fhirType()}`,
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
   * @returns the `value` property value as a Range object if defined; else undefined
   */
  public getValueRange(): Range | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof Range)) {
      throw new InvalidTypeError(
        `DataType mismatch for MedicationKnowledge.indicationGuideline.dosingGuideline.patientCharacteristic.value[x]: Expected Range but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `value` property exists as a Range and has a value; `false` otherwise
   */
  public hasValueRange(): boolean {
    return this.hasValue() && this.value instanceof Range;
  }

  // End of choice datatype-specific "get"/"has" methods

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'MedicationKnowledge.indicationGuideline.dosingGuideline.patientCharacteristic';
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
  public override copy(): MedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristicComponent {
    const dest = new MedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristicComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: MedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristicComponent): void {
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

    const classMetadata: DecoratorMetadataObject | null = MedicationKnowledgeMedicineClassificationComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for MedicationKnowledgeMedicineClassificationComponent`;
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

    fieldName = 'source[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const source: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setSource(source);

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
   * MedicationKnowledge.medicineClassification.source[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('MedicationKnowledge.medicineClassification.source[x]', ['string','uri',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The source of the classification
   * - **Definition:** Either a textual source of the classification or a reference to an online source.
   * - **FHIR Types:**
   *     'string',
   *     'uri',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('MedicationKnowledge.medicineClassification.source[x]',[
    'string',
    'uri',
  ])
  private source?: IDataType | undefined;

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
   * @returns the `source` property value as a DataType object if defined; else undefined
   */
  public getSource(): IDataType | undefined {
    return this.source;
  }

  /**
   * Assigns the provided DataType object value to the `source` property.
   *
   * @decorator `@ChoiceDataTypes('MedicationKnowledge.medicineClassification.source[x]')`
   *
   * @param value - the `source` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('MedicationKnowledge.medicineClassification.source[x]')
  public setSource(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
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
    return isDefined<IDataType>(this.source) && !this.source.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `source` property value as a StringType object if defined; else undefined
   */
  public getSourceStringType(): StringType | undefined {
    if (!isDefined<IDataType | undefined>(this.source)) {
      return undefined;
    }
    if (!(this.source instanceof StringType)) {
      throw new InvalidTypeError(
        `DataType mismatch for MedicationKnowledge.medicineClassification.source[x]: Expected StringType but encountered ${this.source.fhirType()}`,
      );
    }
    return this.source;
  }

  /**
   * @returns `true` if the `source` property exists as a StringType and has a value; `false` otherwise
   */
  public hasSourceStringType(): boolean {
    return this.hasSource() && this.source instanceof StringType;
  }

  /**
   * @returns the `source` property value as a UriType object if defined; else undefined
   */
  public getSourceUriType(): UriType | undefined {
    if (!isDefined<IDataType | undefined>(this.source)) {
      return undefined;
    }
    if (!(this.source instanceof UriType)) {
      throw new InvalidTypeError(
        `DataType mismatch for MedicationKnowledge.medicineClassification.source[x]: Expected UriType but encountered ${this.source.fhirType()}`,
      );
    }
    return this.source;
  }

  /**
   * @returns `true` if the `source` property exists as a UriType and has a value; `false` otherwise
   */
  public hasSourceUriType(): boolean {
    return this.hasSource() && this.source instanceof UriType;
  }

  // End of choice datatype-specific "get"/"has" methods

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
      this.source,
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
    dest.source = this.source?.copy() as IDataType;
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

    if (this.hasSource()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getSource()!, 'source', jsonObj);
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

    fieldName = 'packagedProduct';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setPackagedProduct(datatype);
    }

    return instance;
  }

  /**
   * MedicationKnowledge.packaging.cost Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Cost of the packaged medication
   * - **Definition:** The cost of the packaged medication.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private cost?: MedicationKnowledgeCostComponent[] | undefined;

  /**
   * MedicationKnowledge.packaging.packagedProduct Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The packaged medication that is being priced
   * - **Definition:** A reference to a PackagedProductDefinition that provides the details of the product that is in the packaging and is being priced.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/PackagedProductDefinition',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private packagedProduct?: Reference | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

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
      const optErrMsg = `Invalid MedicationKnowledge.packaging.cost; Provided value array has an element that is not an instance of MedicationKnowledgeCostComponent.`;
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
      const optErrMsg = `Invalid MedicationKnowledge.packaging.cost; Provided element is not an instance of MedicationKnowledgeCostComponent.`;
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
   * @returns the `packagedProduct` property value as a Reference object; else an empty Reference object
   */
  public getPackagedProduct(): Reference {
    return this.packagedProduct ?? new Reference();
  }

  /**
   * Assigns the provided PackagedProduct object value to the `packagedProduct` property.
   *
   * @decorator `@ReferenceTargets('MedicationKnowledge.packaging.packagedProduct', ['PackagedProductDefinition',])`
   *
   * @param value - the `packagedProduct` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicationKnowledge.packaging.packagedProduct', [
    'PackagedProductDefinition',
  ])
  public setPackagedProduct(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.packagedProduct = value;
    } else {
      this.packagedProduct = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `packagedProduct` property exists and has a value; `false` otherwise
   */
  public hasPackagedProduct(): boolean {
    return isDefined<Reference>(this.packagedProduct) && !this.packagedProduct.isEmpty();
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
      this.cost,
      this.packagedProduct,
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
    const costList = copyListValues<MedicationKnowledgeCostComponent>(this.cost);
    dest.cost = costList.length === 0 ? undefined : costList;
    dest.packagedProduct = this.packagedProduct?.copy();
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

    if (this.hasCost()) {
      setFhirBackboneElementListJson(this.getCost(), 'cost', jsonObj);
    }

    if (this.hasPackagedProduct()) {
      setFhirComplexJson(this.getPackagedProduct(), 'packagedProduct', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * MedicationKnowledgeStorageGuidelineComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** How the medication should be stored
 * - **Definition:** Information on how the medication should be stored, for example, refrigeration temperatures and length of stability at a given temperature.
 *
 * @category Data Models: Resource
 * @see [FHIR MedicationKnowledge](http://hl7.org/fhir/StructureDefinition/MedicationKnowledge)
 */
export class MedicationKnowledgeStorageGuidelineComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `MedicationKnowledgeStorageGuidelineComponent` JSON to instantiate the MedicationKnowledgeStorageGuidelineComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `MedicationKnowledgeStorageGuidelineComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to MedicationKnowledgeStorageGuidelineComponent
   * @returns MedicationKnowledgeStorageGuidelineComponent data model or undefined for `MedicationKnowledgeStorageGuidelineComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): MedicationKnowledgeStorageGuidelineComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'MedicationKnowledgeStorageGuidelineComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new MedicationKnowledgeStorageGuidelineComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    fieldName = 'reference';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: UriType | undefined = fhirParser.parseUriType(dtJson, dtSiblingJson);
      instance.setReferenceElement(datatype);
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

    fieldName = 'stabilityDuration';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Duration | undefined = Duration.parse(classJsonObj[fieldName]!, sourceField);
      instance.setStabilityDuration(datatype);
    }

    fieldName = 'environmentalSetting';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: MedicationKnowledgeStorageGuidelineEnvironmentalSettingComponent | undefined = MedicationKnowledgeStorageGuidelineEnvironmentalSettingComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addEnvironmentalSetting(component);
          }
        });
      }
    }

    return instance;
  }

  /**
   * MedicationKnowledge.storageGuideline.reference Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Reference to additional information
   * - **Definition:** Reference to additional information about the storage guidelines.
   * - **FHIR Type:** `uri`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private reference?: UriType | undefined;

  /**
   * MedicationKnowledge.storageGuideline.note Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Additional storage notes
   * - **Definition:** Additional notes about the storage.
   * - **FHIR Type:** `Annotation`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private note?: Annotation[] | undefined;

  /**
   * MedicationKnowledge.storageGuideline.stabilityDuration Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Duration remains stable
   * - **Definition:** Duration that the medication remains stable if the environmentalSetting is respected.
   * - **FHIR Type:** `Duration`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private stabilityDuration?: Duration | undefined;

  /**
   * MedicationKnowledge.storageGuideline.environmentalSetting Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Setting or value of environment for adequate storage
   * - **Definition:** Describes a setting/value on the environment for the adequate storage of the medication and other substances.  Environment settings may involve temperature, humidity, or exposure to light.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private environmentalSetting?: MedicationKnowledgeStorageGuidelineEnvironmentalSettingComponent[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `reference` property value as a UriType object if defined; else an empty UriType object
   */
  public getReferenceElement(): UriType {
    return this.reference ?? new UriType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `reference` property.
   *
   * @param element - the `reference` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setReferenceElement(element: UriType | undefined): this {
    if (isDefined<UriType>(element)) {
      const optErrMsg = `Invalid MedicationKnowledge.storageGuideline.reference; Provided element is not an instance of UriType.`;
      assertFhirType<UriType>(element, UriType, optErrMsg);
      this.reference = element;
    } else {
      this.reference = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `reference` property exists and has a value; `false` otherwise
   */
  public hasReferenceElement(): boolean {
    return isDefined<UriType>(this.reference) && !this.reference.isEmpty();
  }

  /**
   * @returns the `reference` property value as a fhirUri if defined; else undefined
   */
  public getReference(): fhirUri | undefined {
    return this.reference?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `reference` property.
   *
   * @param value - the `reference` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setReference(value: fhirUri | undefined): this {
    if (isDefined<fhirUri>(value)) {
      const optErrMsg = `Invalid MedicationKnowledge.storageGuideline.reference (${String(value)})`;
      this.reference = new UriType(parseFhirPrimitiveData(value, fhirUriSchema, optErrMsg));
    } else {
      this.reference = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `reference` property exists and has a value; `false` otherwise
   */
  public hasReference(): boolean {
    return this.hasReferenceElement();
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
      const optErrMsg = `Invalid MedicationKnowledge.storageGuideline.note; Provided value array has an element that is not an instance of Annotation.`;
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
      const optErrMsg = `Invalid MedicationKnowledge.storageGuideline.note; Provided element is not an instance of Annotation.`;
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
   * @returns the `stabilityDuration` property value as a Duration object if defined; else an empty Duration object
   */
  public getStabilityDuration(): Duration {
    return this.stabilityDuration ?? new Duration();
  }

  /**
   * Assigns the provided StabilityDuration object value to the `stabilityDuration` property.
   *
   * @param value - the `stabilityDuration` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setStabilityDuration(value: Duration | undefined): this {
    if (isDefined<Duration>(value)) {
      const optErrMsg = `Invalid MedicationKnowledge.storageGuideline.stabilityDuration; Provided element is not an instance of Duration.`;
      assertFhirType<Duration>(value, Duration, optErrMsg);
      this.stabilityDuration = value;
    } else {
      this.stabilityDuration = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `stabilityDuration` property exists and has a value; `false` otherwise
   */
  public hasStabilityDuration(): boolean {
    return isDefined<Duration>(this.stabilityDuration) && !this.stabilityDuration.isEmpty();
  }

  /**
   * @returns the `environmentalSetting` property value as a MedicationKnowledgeStorageGuidelineEnvironmentalSettingComponent array
   */
  public getEnvironmentalSetting(): MedicationKnowledgeStorageGuidelineEnvironmentalSettingComponent[] {
    return this.environmentalSetting ?? ([] as MedicationKnowledgeStorageGuidelineEnvironmentalSettingComponent[]);
  }

  /**
   * Assigns the provided MedicationKnowledgeStorageGuidelineEnvironmentalSettingComponent array value to the `environmentalSetting` property.
   *
   * @param value - the `environmentalSetting` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setEnvironmentalSetting(value: MedicationKnowledgeStorageGuidelineEnvironmentalSettingComponent[] | undefined): this {
    if (isDefinedList<MedicationKnowledgeStorageGuidelineEnvironmentalSettingComponent>(value)) {
      const optErrMsg = `Invalid MedicationKnowledge.storageGuideline.environmentalSetting; Provided value array has an element that is not an instance of MedicationKnowledgeStorageGuidelineEnvironmentalSettingComponent.`;
      assertFhirTypeList<MedicationKnowledgeStorageGuidelineEnvironmentalSettingComponent>(value, MedicationKnowledgeStorageGuidelineEnvironmentalSettingComponent, optErrMsg);
      this.environmentalSetting = value;
    } else {
      this.environmentalSetting = undefined;
    }
    return this;
  }

  /**
   * Add the provided MedicationKnowledgeStorageGuidelineEnvironmentalSettingComponent value to the `environmentalSetting` array property.
   *
   * @param value - the `environmentalSetting` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addEnvironmentalSetting(value: MedicationKnowledgeStorageGuidelineEnvironmentalSettingComponent | undefined): this {
    if (isDefined<MedicationKnowledgeStorageGuidelineEnvironmentalSettingComponent>(value)) {
      const optErrMsg = `Invalid MedicationKnowledge.storageGuideline.environmentalSetting; Provided element is not an instance of MedicationKnowledgeStorageGuidelineEnvironmentalSettingComponent.`;
      assertFhirType<MedicationKnowledgeStorageGuidelineEnvironmentalSettingComponent>(value, MedicationKnowledgeStorageGuidelineEnvironmentalSettingComponent, optErrMsg);
      this.initEnvironmentalSetting();
      this.environmentalSetting?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `environmentalSetting` property exists and has a value; `false` otherwise
   */
  public hasEnvironmentalSetting(): boolean {
    return isDefinedList<MedicationKnowledgeStorageGuidelineEnvironmentalSettingComponent>(this.environmentalSetting) && this.environmentalSetting.some((item: MedicationKnowledgeStorageGuidelineEnvironmentalSettingComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `environmentalSetting` property
   */
  private initEnvironmentalSetting(): void {
    if(!this.hasEnvironmentalSetting()) {
      this.environmentalSetting = [] as MedicationKnowledgeStorageGuidelineEnvironmentalSettingComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'MedicationKnowledge.storageGuideline';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.reference,
      this.note,
      this.stabilityDuration,
      this.environmentalSetting,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): MedicationKnowledgeStorageGuidelineComponent {
    const dest = new MedicationKnowledgeStorageGuidelineComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: MedicationKnowledgeStorageGuidelineComponent): void {
    super.copyValues(dest);
    dest.reference = this.reference?.copy();
    const noteList = copyListValues<Annotation>(this.note);
    dest.note = noteList.length === 0 ? undefined : noteList;
    dest.stabilityDuration = this.stabilityDuration?.copy();
    const environmentalSettingList = copyListValues<MedicationKnowledgeStorageGuidelineEnvironmentalSettingComponent>(this.environmentalSetting);
    dest.environmentalSetting = environmentalSettingList.length === 0 ? undefined : environmentalSettingList;
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

    if (this.hasReferenceElement()) {
      setFhirPrimitiveJson<fhirUri>(this.getReferenceElement(), 'reference', jsonObj);
    }

    if (this.hasNote()) {
      setFhirComplexListJson(this.getNote(), 'note', jsonObj);
    }

    if (this.hasStabilityDuration()) {
      setFhirComplexJson(this.getStabilityDuration(), 'stabilityDuration', jsonObj);
    }

    if (this.hasEnvironmentalSetting()) {
      setFhirBackboneElementListJson(this.getEnvironmentalSetting(), 'environmentalSetting', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * MedicationKnowledgeStorageGuidelineEnvironmentalSettingComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Setting or value of environment for adequate storage
 * - **Definition:** Describes a setting/value on the environment for the adequate storage of the medication and other substances.  Environment settings may involve temperature, humidity, or exposure to light.
 *
 * @category Data Models: Resource
 * @see [FHIR MedicationKnowledge](http://hl7.org/fhir/StructureDefinition/MedicationKnowledge)
 */
export class MedicationKnowledgeStorageGuidelineEnvironmentalSettingComponent extends BackboneElement implements IBackboneElement {
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
   * Parse the provided `MedicationKnowledgeStorageGuidelineEnvironmentalSettingComponent` JSON to instantiate the MedicationKnowledgeStorageGuidelineEnvironmentalSettingComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `MedicationKnowledgeStorageGuidelineEnvironmentalSettingComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to MedicationKnowledgeStorageGuidelineEnvironmentalSettingComponent
   * @returns MedicationKnowledgeStorageGuidelineEnvironmentalSettingComponent data model or undefined for `MedicationKnowledgeStorageGuidelineEnvironmentalSettingComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): MedicationKnowledgeStorageGuidelineEnvironmentalSettingComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'MedicationKnowledgeStorageGuidelineEnvironmentalSettingComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new MedicationKnowledgeStorageGuidelineEnvironmentalSettingComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    const classMetadata: DecoratorMetadataObject | null = MedicationKnowledgeStorageGuidelineEnvironmentalSettingComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for MedicationKnowledgeStorageGuidelineEnvironmentalSettingComponent`;
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
   * MedicationKnowledge.storageGuideline.environmentalSetting.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Categorization of the setting
   * - **Definition:** Identifies the category or type of setting (e.g., type of location, temperature, humidity).
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private type_: CodeableConcept | null;

  /**
   * MedicationKnowledge.storageGuideline.environmentalSetting.value[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('MedicationKnowledge.storageGuideline.environmentalSetting.value[x]', ['Quantity','Range','CodeableConcept',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Value of the setting
   * - **Definition:** Value associated to the setting. E.g., 40° - 50°F for temperature.
   * - **FHIR Types:**
   *     'Quantity',
   *     'Range',
   *     'CodeableConcept',
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('MedicationKnowledge.storageGuideline.environmentalSetting.value[x]',[
    'Quantity',
    'Range',
    'CodeableConcept',
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
      const optErrMsg = `Invalid MedicationKnowledge.storageGuideline.environmentalSetting.type; Provided element is not an instance of CodeableConcept.`;
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
   * @decorator `@ChoiceDataTypes('MedicationKnowledge.storageGuideline.environmentalSetting.value[x]')`
   *
   * @param value - the `value` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('MedicationKnowledge.storageGuideline.environmentalSetting.value[x]')
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
        `DataType mismatch for MedicationKnowledge.storageGuideline.environmentalSetting.value[x]: Expected Quantity but encountered ${this.value.fhirType()}`,
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
   * @returns the `value` property value as a Range object if defined; else null
   */
  public getValueRange(): Range | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Range)) {
      throw new InvalidTypeError(
        `DataType mismatch for MedicationKnowledge.storageGuideline.environmentalSetting.value[x]: Expected Range but encountered ${this.value.fhirType()}`,
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
   * @returns the `value` property value as a CodeableConcept object if defined; else null
   */
  public getValueCodeableConcept(): CodeableConcept | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof CodeableConcept)) {
      throw new InvalidTypeError(
        `DataType mismatch for MedicationKnowledge.storageGuideline.environmentalSetting.value[x]: Expected CodeableConcept but encountered ${this.value.fhirType()}`,
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

  // End of choice datatype-specific "get"/"has" methods

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'MedicationKnowledge.storageGuideline.environmentalSetting';
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
  public override copy(): MedicationKnowledgeStorageGuidelineEnvironmentalSettingComponent {
    const dest = new MedicationKnowledgeStorageGuidelineEnvironmentalSettingComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: MedicationKnowledgeStorageGuidelineEnvironmentalSettingComponent): void {
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
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addSchedule(datatype);
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
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private schedule?: CodeableConcept[] | undefined;

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
   * @returns the `schedule` property value as a CodeableConcept array
   */
  public getSchedule(): CodeableConcept[] {
    return this.schedule ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `schedule` property.
   *
   * @param value - the `schedule` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSchedule(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid MedicationKnowledge.regulatory.schedule; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.schedule = value;
    } else {
      this.schedule = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `schedule` array property.
   *
   * @param value - the `schedule` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addSchedule(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid MedicationKnowledge.regulatory.schedule; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initSchedule();
      this.schedule?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `schedule` property exists and has a value; `false` otherwise
   */
  public hasSchedule(): boolean {
    return isDefinedList<CodeableConcept>(this.schedule) && this.schedule.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `schedule` property
   */
  private initSchedule(): void {
    if(!this.hasSchedule()) {
      this.schedule = [] as CodeableConcept[];
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
    const scheduleList = copyListValues<CodeableConcept>(this.schedule);
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
      setFhirComplexListJson(this.getSchedule(), 'schedule', jsonObj);
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
 * MedicationKnowledgeDefinitionalComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Minimal definition information about the medication
 * - **Definition:** Along with the link to a Medicinal Product Definition resource, this information provides common definitional elements that are needed to understand the specific medication that is being described.
 *
 * @category Data Models: Resource
 * @see [FHIR MedicationKnowledge](http://hl7.org/fhir/StructureDefinition/MedicationKnowledge)
 */
export class MedicationKnowledgeDefinitionalComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `MedicationKnowledgeDefinitionalComponent` JSON to instantiate the MedicationKnowledgeDefinitionalComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `MedicationKnowledgeDefinitionalComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to MedicationKnowledgeDefinitionalComponent
   * @returns MedicationKnowledgeDefinitionalComponent data model or undefined for `MedicationKnowledgeDefinitionalComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): MedicationKnowledgeDefinitionalComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'MedicationKnowledgeDefinitionalComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new MedicationKnowledgeDefinitionalComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    fieldName = 'definition';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addDefinition(datatype);
          }
        });
      }
  }

    fieldName = 'doseForm';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setDoseForm(datatype);
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

    fieldName = 'ingredient';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: MedicationKnowledgeDefinitionalIngredientComponent | undefined = MedicationKnowledgeDefinitionalIngredientComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addIngredient(component);
          }
        });
      }
    }

    fieldName = 'drugCharacteristic';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: MedicationKnowledgeDefinitionalDrugCharacteristicComponent | undefined = MedicationKnowledgeDefinitionalDrugCharacteristicComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addDrugCharacteristic(component);
          }
        });
      }
    }

    return instance;
  }

  /**
   * MedicationKnowledge.definitional.definition Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Definitional resources that provide more information about this medication
   * - **Definition:** Associated definitions for this medication.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/MedicinalProductDefinition',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private definition?: Reference[] | undefined;

  /**
   * MedicationKnowledge.definitional.doseForm Element
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
   * MedicationKnowledge.definitional.intendedRoute Element
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
   * MedicationKnowledge.definitional.ingredient Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Active or inactive ingredient
   * - **Definition:** Identifies a particular constituent of interest in the product.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private ingredient?: MedicationKnowledgeDefinitionalIngredientComponent[] | undefined;

  /**
   * MedicationKnowledge.definitional.drugCharacteristic Element
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
  private drugCharacteristic?: MedicationKnowledgeDefinitionalDrugCharacteristicComponent[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `definition` property value as a Reference array
   */
  public getDefinition(): Reference[] {
    return this.definition ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `definition` property.
   *
   * @decorator `@ReferenceTargets('MedicationKnowledge.definitional.definition', ['MedicinalProductDefinition',])`
   *
   * @param value - the `definition` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicationKnowledge.definitional.definition', [
    'MedicinalProductDefinition',
  ])
  public setDefinition(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.definition = value;
    } else {
      this.definition = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `definition` array property.
   *
   * @decorator `@ReferenceTargets('MedicationKnowledge.definitional.definition', ['MedicinalProductDefinition',])`
   *
   * @param value - the `definition` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicationKnowledge.definitional.definition', [
    'MedicinalProductDefinition',
  ])
  public addDefinition(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initDefinition();
      this.definition?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `definition` property exists and has a value; `false` otherwise
   */
  public hasDefinition(): boolean {
    return isDefinedList<Reference>(this.definition) && this.definition.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `definition` property
   */
  private initDefinition(): void {
    if (!this.hasDefinition()) {
      this.definition = [] as Reference[];
    }
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
      const optErrMsg = `Invalid MedicationKnowledge.definitional.doseForm; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid MedicationKnowledge.definitional.intendedRoute; Provided value array has an element that is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid MedicationKnowledge.definitional.intendedRoute; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `ingredient` property value as a MedicationKnowledgeDefinitionalIngredientComponent array
   */
  public getIngredient(): MedicationKnowledgeDefinitionalIngredientComponent[] {
    return this.ingredient ?? ([] as MedicationKnowledgeDefinitionalIngredientComponent[]);
  }

  /**
   * Assigns the provided MedicationKnowledgeDefinitionalIngredientComponent array value to the `ingredient` property.
   *
   * @param value - the `ingredient` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setIngredient(value: MedicationKnowledgeDefinitionalIngredientComponent[] | undefined): this {
    if (isDefinedList<MedicationKnowledgeDefinitionalIngredientComponent>(value)) {
      const optErrMsg = `Invalid MedicationKnowledge.definitional.ingredient; Provided value array has an element that is not an instance of MedicationKnowledgeDefinitionalIngredientComponent.`;
      assertFhirTypeList<MedicationKnowledgeDefinitionalIngredientComponent>(value, MedicationKnowledgeDefinitionalIngredientComponent, optErrMsg);
      this.ingredient = value;
    } else {
      this.ingredient = undefined;
    }
    return this;
  }

  /**
   * Add the provided MedicationKnowledgeDefinitionalIngredientComponent value to the `ingredient` array property.
   *
   * @param value - the `ingredient` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addIngredient(value: MedicationKnowledgeDefinitionalIngredientComponent | undefined): this {
    if (isDefined<MedicationKnowledgeDefinitionalIngredientComponent>(value)) {
      const optErrMsg = `Invalid MedicationKnowledge.definitional.ingredient; Provided element is not an instance of MedicationKnowledgeDefinitionalIngredientComponent.`;
      assertFhirType<MedicationKnowledgeDefinitionalIngredientComponent>(value, MedicationKnowledgeDefinitionalIngredientComponent, optErrMsg);
      this.initIngredient();
      this.ingredient?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `ingredient` property exists and has a value; `false` otherwise
   */
  public hasIngredient(): boolean {
    return isDefinedList<MedicationKnowledgeDefinitionalIngredientComponent>(this.ingredient) && this.ingredient.some((item: MedicationKnowledgeDefinitionalIngredientComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `ingredient` property
   */
  private initIngredient(): void {
    if(!this.hasIngredient()) {
      this.ingredient = [] as MedicationKnowledgeDefinitionalIngredientComponent[];
    }
  }

  /**
   * @returns the `drugCharacteristic` property value as a MedicationKnowledgeDefinitionalDrugCharacteristicComponent array
   */
  public getDrugCharacteristic(): MedicationKnowledgeDefinitionalDrugCharacteristicComponent[] {
    return this.drugCharacteristic ?? ([] as MedicationKnowledgeDefinitionalDrugCharacteristicComponent[]);
  }

  /**
   * Assigns the provided MedicationKnowledgeDefinitionalDrugCharacteristicComponent array value to the `drugCharacteristic` property.
   *
   * @param value - the `drugCharacteristic` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDrugCharacteristic(value: MedicationKnowledgeDefinitionalDrugCharacteristicComponent[] | undefined): this {
    if (isDefinedList<MedicationKnowledgeDefinitionalDrugCharacteristicComponent>(value)) {
      const optErrMsg = `Invalid MedicationKnowledge.definitional.drugCharacteristic; Provided value array has an element that is not an instance of MedicationKnowledgeDefinitionalDrugCharacteristicComponent.`;
      assertFhirTypeList<MedicationKnowledgeDefinitionalDrugCharacteristicComponent>(value, MedicationKnowledgeDefinitionalDrugCharacteristicComponent, optErrMsg);
      this.drugCharacteristic = value;
    } else {
      this.drugCharacteristic = undefined;
    }
    return this;
  }

  /**
   * Add the provided MedicationKnowledgeDefinitionalDrugCharacteristicComponent value to the `drugCharacteristic` array property.
   *
   * @param value - the `drugCharacteristic` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addDrugCharacteristic(value: MedicationKnowledgeDefinitionalDrugCharacteristicComponent | undefined): this {
    if (isDefined<MedicationKnowledgeDefinitionalDrugCharacteristicComponent>(value)) {
      const optErrMsg = `Invalid MedicationKnowledge.definitional.drugCharacteristic; Provided element is not an instance of MedicationKnowledgeDefinitionalDrugCharacteristicComponent.`;
      assertFhirType<MedicationKnowledgeDefinitionalDrugCharacteristicComponent>(value, MedicationKnowledgeDefinitionalDrugCharacteristicComponent, optErrMsg);
      this.initDrugCharacteristic();
      this.drugCharacteristic?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `drugCharacteristic` property exists and has a value; `false` otherwise
   */
  public hasDrugCharacteristic(): boolean {
    return isDefinedList<MedicationKnowledgeDefinitionalDrugCharacteristicComponent>(this.drugCharacteristic) && this.drugCharacteristic.some((item: MedicationKnowledgeDefinitionalDrugCharacteristicComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `drugCharacteristic` property
   */
  private initDrugCharacteristic(): void {
    if(!this.hasDrugCharacteristic()) {
      this.drugCharacteristic = [] as MedicationKnowledgeDefinitionalDrugCharacteristicComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'MedicationKnowledge.definitional';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.definition,
      this.doseForm,
      this.intendedRoute,
      this.ingredient,
      this.drugCharacteristic,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): MedicationKnowledgeDefinitionalComponent {
    const dest = new MedicationKnowledgeDefinitionalComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: MedicationKnowledgeDefinitionalComponent): void {
    super.copyValues(dest);
    const definitionList = copyListValues<Reference>(this.definition);
    dest.definition = definitionList.length === 0 ? undefined : definitionList;
    dest.doseForm = this.doseForm?.copy();
    const intendedRouteList = copyListValues<CodeableConcept>(this.intendedRoute);
    dest.intendedRoute = intendedRouteList.length === 0 ? undefined : intendedRouteList;
    const ingredientList = copyListValues<MedicationKnowledgeDefinitionalIngredientComponent>(this.ingredient);
    dest.ingredient = ingredientList.length === 0 ? undefined : ingredientList;
    const drugCharacteristicList = copyListValues<MedicationKnowledgeDefinitionalDrugCharacteristicComponent>(this.drugCharacteristic);
    dest.drugCharacteristic = drugCharacteristicList.length === 0 ? undefined : drugCharacteristicList;
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

    if (this.hasDefinition()) {
      setFhirComplexListJson(this.getDefinition(), 'definition', jsonObj);
    }

    if (this.hasDoseForm()) {
      setFhirComplexJson(this.getDoseForm(), 'doseForm', jsonObj);
    }

    if (this.hasIntendedRoute()) {
      setFhirComplexListJson(this.getIntendedRoute(), 'intendedRoute', jsonObj);
    }

    if (this.hasIngredient()) {
      setFhirBackboneElementListJson(this.getIngredient(), 'ingredient', jsonObj);
    }

    if (this.hasDrugCharacteristic()) {
      setFhirBackboneElementListJson(this.getDrugCharacteristic(), 'drugCharacteristic', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * MedicationKnowledgeDefinitionalIngredientComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Active or inactive ingredient
 * - **Definition:** Identifies a particular constituent of interest in the product.
 *
 * @category Data Models: Resource
 * @see [FHIR MedicationKnowledge](http://hl7.org/fhir/StructureDefinition/MedicationKnowledge)
 */
export class MedicationKnowledgeDefinitionalIngredientComponent extends BackboneElement implements IBackboneElement {
  constructor(item: CodeableReference | null = null) {
    super();

    this.item = null;
    if (isDefined<CodeableReference>(item)) {
      this.setItem(item);
    }
  }

  /**
   * Parse the provided `MedicationKnowledgeDefinitionalIngredientComponent` JSON to instantiate the MedicationKnowledgeDefinitionalIngredientComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `MedicationKnowledgeDefinitionalIngredientComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to MedicationKnowledgeDefinitionalIngredientComponent
   * @returns MedicationKnowledgeDefinitionalIngredientComponent data model or undefined for `MedicationKnowledgeDefinitionalIngredientComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): MedicationKnowledgeDefinitionalIngredientComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'MedicationKnowledgeDefinitionalIngredientComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new MedicationKnowledgeDefinitionalIngredientComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    const classMetadata: DecoratorMetadataObject | null = MedicationKnowledgeDefinitionalIngredientComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for MedicationKnowledgeDefinitionalIngredientComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    fieldName = 'item';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableReference | undefined = CodeableReference.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setItem(null);
      } else {
        instance.setItem(datatype);
      }
    } else {
      instance.setItem(null);
    }

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setType(datatype);
    }

    fieldName = 'strength[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const strength: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setStrength(strength);

    return instance;
  }

  /**
   * MedicationKnowledge.definitional.ingredient.item Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Substances contained in the medication
   * - **Definition:** A reference to the resource that provides information about the ingredient.
   * - **FHIR Type:** `CodeableReference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Substance',
   *     ]
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private item: CodeableReference | null;

  /**
   * MedicationKnowledge.definitional.ingredient.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A code that defines the type of ingredient, active, base, etc
   * - **Definition:** Indication of whether this ingredient affects the therapeutic action of the drug.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private type_?: CodeableConcept | undefined;

  /**
   * MedicationKnowledge.definitional.ingredient.strength[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('MedicationKnowledge.definitional.ingredient.strength[x]', ['Ratio','CodeableConcept','Quantity',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Quantity of ingredient present
   * - **Definition:** Specifies how many (or how much) of the items there are in this Medication.  For example, 250 mg per tablet.  This is expressed as a ratio where the numerator is 250mg and the denominator is 1 tablet but can also be expressed a quantity when the denominator is assumed to be 1 tablet.
   * - **FHIR Types:**
   *     'Ratio',
   *     'CodeableConcept',
   *     'Quantity',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('MedicationKnowledge.definitional.ingredient.strength[x]',[
    'Ratio',
    'CodeableConcept',
    'Quantity',
  ])
  private strength?: IDataType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `item` property value as a CodeableReference object if defined; else an empty CodeableReference object
   */
  public getItem(): CodeableReference {
    return this.item ?? new CodeableReference();
  }

  /**
   * Assigns the provided CodeableReference object value to the `item` property.
   *
   * @param value - the `item` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setItem(value: CodeableReference | undefined | null): this {
    if (isDefined<CodeableReference>(value)) {
      const optErrMsg = `Invalid MedicationKnowledge.definitional.ingredient.item; Provided element is not an instance of CodeableReference.`;
      assertFhirType<CodeableReference>(value, CodeableReference, optErrMsg);
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
    return isDefined<CodeableReference>(this.item) && !this.item.isEmpty();
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
      const optErrMsg = `Invalid MedicationKnowledge.definitional.ingredient.type; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `strength` property value as a DataType object if defined; else undefined
   */
  public getStrength(): IDataType | undefined {
    return this.strength;
  }

  /**
   * Assigns the provided DataType object value to the `strength` property.
   *
   * @decorator `@ChoiceDataTypes('MedicationKnowledge.definitional.ingredient.strength[x]')`
   *
   * @param value - the `strength` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('MedicationKnowledge.definitional.ingredient.strength[x]')
  public setStrength(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
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
    return isDefined<IDataType>(this.strength) && !this.strength.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `strength` property value as a Ratio object if defined; else undefined
   */
  public getStrengthRatio(): Ratio | undefined {
    if (!isDefined<IDataType | undefined>(this.strength)) {
      return undefined;
    }
    if (!(this.strength instanceof Ratio)) {
      throw new InvalidTypeError(
        `DataType mismatch for MedicationKnowledge.definitional.ingredient.strength[x]: Expected Ratio but encountered ${this.strength.fhirType()}`,
      );
    }
    return this.strength;
  }

  /**
   * @returns `true` if the `strength` property exists as a Ratio and has a value; `false` otherwise
   */
  public hasStrengthRatio(): boolean {
    return this.hasStrength() && this.strength instanceof Ratio;
  }

  /**
   * @returns the `strength` property value as a CodeableConcept object if defined; else undefined
   */
  public getStrengthCodeableConcept(): CodeableConcept | undefined {
    if (!isDefined<IDataType | undefined>(this.strength)) {
      return undefined;
    }
    if (!(this.strength instanceof CodeableConcept)) {
      throw new InvalidTypeError(
        `DataType mismatch for MedicationKnowledge.definitional.ingredient.strength[x]: Expected CodeableConcept but encountered ${this.strength.fhirType()}`,
      );
    }
    return this.strength;
  }

  /**
   * @returns `true` if the `strength` property exists as a CodeableConcept and has a value; `false` otherwise
   */
  public hasStrengthCodeableConcept(): boolean {
    return this.hasStrength() && this.strength instanceof CodeableConcept;
  }

  /**
   * @returns the `strength` property value as a Quantity object if defined; else undefined
   */
  public getStrengthQuantity(): Quantity | undefined {
    if (!isDefined<IDataType | undefined>(this.strength)) {
      return undefined;
    }
    if (!(this.strength instanceof Quantity)) {
      throw new InvalidTypeError(
        `DataType mismatch for MedicationKnowledge.definitional.ingredient.strength[x]: Expected Quantity but encountered ${this.strength.fhirType()}`,
      );
    }
    return this.strength;
  }

  /**
   * @returns `true` if the `strength` property exists as a Quantity and has a value; `false` otherwise
   */
  public hasStrengthQuantity(): boolean {
    return this.hasStrength() && this.strength instanceof Quantity;
  }

  // End of choice datatype-specific "get"/"has" methods

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'MedicationKnowledge.definitional.ingredient';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.item,
      this.type_,
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
  public override copy(): MedicationKnowledgeDefinitionalIngredientComponent {
    const dest = new MedicationKnowledgeDefinitionalIngredientComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: MedicationKnowledgeDefinitionalIngredientComponent): void {
    super.copyValues(dest);
    dest.item = this.item ? this.item.copy() : null;
    dest.type_ = this.type_?.copy();
    dest.strength = this.strength?.copy() as IDataType;
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
      setFhirComplexJson(this.getItem(), 'item', jsonObj);
    }

    if (this.hasType()) {
      setFhirComplexJson(this.getType(), 'type', jsonObj);
    }

    if (this.hasStrength()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getStrength()!, 'strength', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * MedicationKnowledgeDefinitionalDrugCharacteristicComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Specifies descriptive properties of the medicine
 * - **Definition:** Specifies descriptive properties of the medicine, such as color, shape, imprints, etc.
 *
 * @category Data Models: Resource
 * @see [FHIR MedicationKnowledge](http://hl7.org/fhir/StructureDefinition/MedicationKnowledge)
 */
export class MedicationKnowledgeDefinitionalDrugCharacteristicComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `MedicationKnowledgeDefinitionalDrugCharacteristicComponent` JSON to instantiate the MedicationKnowledgeDefinitionalDrugCharacteristicComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `MedicationKnowledgeDefinitionalDrugCharacteristicComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to MedicationKnowledgeDefinitionalDrugCharacteristicComponent
   * @returns MedicationKnowledgeDefinitionalDrugCharacteristicComponent data model or undefined for `MedicationKnowledgeDefinitionalDrugCharacteristicComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): MedicationKnowledgeDefinitionalDrugCharacteristicComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'MedicationKnowledgeDefinitionalDrugCharacteristicComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new MedicationKnowledgeDefinitionalDrugCharacteristicComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    const classMetadata: DecoratorMetadataObject | null = MedicationKnowledgeDefinitionalDrugCharacteristicComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for MedicationKnowledgeDefinitionalDrugCharacteristicComponent`;
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
   * MedicationKnowledge.definitional.drugCharacteristic.type Element
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
   * MedicationKnowledge.definitional.drugCharacteristic.value[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('MedicationKnowledge.definitional.drugCharacteristic.value[x]', ['CodeableConcept','string','Quantity','base64Binary','Attachment',]`
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
   *     'Attachment',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('MedicationKnowledge.definitional.drugCharacteristic.value[x]',[
    'CodeableConcept',
    'string',
    'Quantity',
    'base64Binary',
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
   * Assigns the provided Type object value to the `type_` property.
   *
   * @param value - the `type_` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setType(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid MedicationKnowledge.definitional.drugCharacteristic.type; Provided element is not an instance of CodeableConcept.`;
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
   * @decorator `@ChoiceDataTypes('MedicationKnowledge.definitional.drugCharacteristic.value[x]')`
   *
   * @param value - the `value` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('MedicationKnowledge.definitional.drugCharacteristic.value[x]')
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
        `DataType mismatch for MedicationKnowledge.definitional.drugCharacteristic.value[x]: Expected CodeableConcept but encountered ${this.value.fhirType()}`,
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
        `DataType mismatch for MedicationKnowledge.definitional.drugCharacteristic.value[x]: Expected StringType but encountered ${this.value.fhirType()}`,
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
        `DataType mismatch for MedicationKnowledge.definitional.drugCharacteristic.value[x]: Expected Quantity but encountered ${this.value.fhirType()}`,
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
        `DataType mismatch for MedicationKnowledge.definitional.drugCharacteristic.value[x]: Expected Base64BinaryType but encountered ${this.value.fhirType()}`,
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

  /**
   * @returns the `value` property value as a Attachment object if defined; else undefined
   */
  public getValueAttachment(): Attachment | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof Attachment)) {
      throw new InvalidTypeError(
        `DataType mismatch for MedicationKnowledge.definitional.drugCharacteristic.value[x]: Expected Attachment but encountered ${this.value.fhirType()}`,
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
    return 'MedicationKnowledge.definitional.drugCharacteristic';
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
  public override copy(): MedicationKnowledgeDefinitionalDrugCharacteristicComponent {
    const dest = new MedicationKnowledgeDefinitionalDrugCharacteristicComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: MedicationKnowledgeDefinitionalDrugCharacteristicComponent): void {
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
