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
 * DetectedIssue Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/DetectedIssue
 * StructureDefinition.name: DetectedIssue
 * StructureDefinition.description: Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, gaps in care, etc.
 * StructureDefinition.fhirVersion: 5.0.0
 *
 * For questions, suggestions, or bugs, please open an issue at [GitHub ts-fhir-datamodels/issues](https://github.com/Paqrat76/ts-fhir-datamodels/issues).
 *
 * @packageDocumentation
 */

import { strict as assert } from 'node:assert';
import {
  BackboneElement,
  ChoiceDataTypes,
  ChoiceDataTypesMeta,
  CodeType,
  DateTimeType,
  DomainResource,
  EnumCodeType,
  FhirError,
  FhirParser,
  IBackboneElement,
  IDataType,
  IDomainResource,
  INSTANCE_EMPTY_ERROR_MSG,
  InvalidTypeError,
  JSON,
  MarkdownType,
  PrimitiveType,
  REQUIRED_PROPERTIES_DO_NOT_EXIST,
  REQUIRED_PROPERTIES_REQD_IN_JSON,
  ReferenceTargets,
  UriType,
  assertEnumCodeType,
  assertFhirType,
  assertFhirTypeList,
  assertIsDefined,
  copyListValues,
  fhirCode,
  fhirCodeSchema,
  fhirDateTime,
  fhirDateTimeSchema,
  fhirMarkdown,
  fhirMarkdownSchema,
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
  setPolymorphicValueJson,
} from '@paq-ts-fhir/fhir-core';
import { Annotation, CodeableConcept, Identifier, PARSABLE_DATATYPE_MAP, Period, Reference } from '../complex-types/complex-datatypes';
import { DetectedissueSeverityEnum } from '../code-systems/DetectedissueSeverityEnum';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Symbol.metadata polyfill secret sauce for decorator metadata
(Symbol.metadata as any) ??= Symbol('Symbol.metadata');

/**
 * DetectedIssue Class
 *
 * @remarks
 * Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, gaps in care, etc.
 *
 * **FHIR Specification**
 * - **Short:** Clinical issue with action
 * - **Definition:** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, gaps in care, etc.
 * - **FHIR Version:** 5.0.0
 *
 * @category Data Models: Resource
 * @see [FHIR DetectedIssue](http://hl7.org/fhir/StructureDefinition/DetectedIssue)
 */
export class DetectedIssue extends DomainResource implements IDomainResource {
  constructor(status: CodeType | fhirCode | null = null) {
    super();

    this.detectedissueSeverityEnum = new DetectedissueSeverityEnum();

    this.status = null;
    if (isDefined<CodeType | fhirCode>(status)) {
      if (status instanceof PrimitiveType) {
        this.setStatusElement(status);
      } else {
        this.setStatus(status);
      }
    }
  }

  /**
   * Parse the provided `DetectedIssue` JSON to instantiate the DetectedIssue data model.
   *
   * @param sourceJson - JSON representing FHIR `DetectedIssue`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to DetectedIssue
   * @returns DetectedIssue data model or undefined for `DetectedIssue`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): DetectedIssue | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'DetectedIssue';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new DetectedIssue();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'DetectedIssue');
    fhirParser.processDomainResourceJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const classMetadata: DecoratorMetadataObject | null = DetectedIssue[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for DetectedIssue`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    const missingReqdProperties: string[] = [];

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
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setStatusElement(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
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

    fieldName = 'code';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setCode(datatype);
    }

    fieldName = 'severity';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setSeverityElement(datatype);
    }

    fieldName = 'subject';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setSubject(datatype);
    }

    fieldName = 'encounter';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setEncounter(datatype);
    }

    fieldName = 'identified[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const identified: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setIdentified(identified);

    fieldName = 'author';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setAuthor(datatype);
    }

    fieldName = 'implicated';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addImplicated(datatype);
        }
      });
  }

    fieldName = 'evidence';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: DetectedIssueEvidenceComponent | undefined = DetectedIssueEvidenceComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addEvidence(component);
        }
      });
    }

    fieldName = 'detail';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: MarkdownType | undefined = fhirParser.parseMarkdownType(dtJson, dtSiblingJson);
      instance.setDetailElement(datatype);
    }

    fieldName = 'reference';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: UriType | undefined = fhirParser.parseUriType(dtJson, dtSiblingJson);
      instance.setReferenceElement(datatype);
    }

    fieldName = 'mitigation';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: DetectedIssueMitigationComponent | undefined = DetectedIssueMitigationComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addMitigation(component);
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
   * DetectedIssue.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Unique id for the detected issue
   * - **Definition:** Business identifier associated with the detected issue record.
   * - **Requirements:** Allows linking instances of the same detected issue found on different servers.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier[] | undefined;

  /**
   * DetectedIssue.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** preliminary | final | entered-in-error | mitigated
   * - **Definition:** Indicates the status of the detected issue.
   * - **Comment:** This element is labeled as a modifier because the status contains the code entered-in-error that marks the issue as not currently valid.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** true
   * - **isModifierReason:** This element is labeled as a modifier because it is a status element that contains the code entered-in-error which means that the resource should not be treated as valid
   * - **isSummary:** true
   */
  private status: CodeType | null;

  /**
   * DetectedIssue.category Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Type of detected issue, e.g. drug-drug, duplicate therapy, etc
   * - **Definition:** A code that classifies the general type of detected issue.
   * - **Comment:** In addition to the required category valueset, this element allows various categorization schemes based on the owner\'s definition of the category and effectively multiple categories can be used at once.  The level of granularity is defined by the category concepts in the value set.
   * - **Requirements:** Used for filtering what detected issues are retrieved and displayed.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private category?: CodeableConcept[] | undefined;

  /**
   * DetectedIssue.code Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Specific type of detected issue, e.g. drug-drug, duplicate therapy, etc
   * - **Definition:** Identifies the specific type of issue identified.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private code?: CodeableConcept | undefined;

  /**
   * FHIR CodeSystem: DetectedissueSeverity
   *
   * @see {@link DetectedissueSeverityEnum }
   */
  private readonly detectedissueSeverityEnum: DetectedissueSeverityEnum;

  /**
   * DetectedIssue.severity Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** high | moderate | low
   * - **Definition:** Indicates the degree of importance associated with the identified issue based on the potential impact on the patient.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link DetectedissueSeverityEnum }
   */
  private severity?: EnumCodeType | undefined;

  /**
   * DetectedIssue.subject Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Associated subject
   * - **Definition:** Indicates the subject whose record the detected issue is associated with.
   * - **Requirements:** While the subject could be inferred by tracing the subject of the implicated resources, it\'s useful to have a direct link for query purposes.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/Group',
   *       'http://hl7.org/fhir/StructureDefinition/Device',
   *       'http://hl7.org/fhir/StructureDefinition/Location',
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *       'http://hl7.org/fhir/StructureDefinition/Procedure',
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/Medication',
   *       'http://hl7.org/fhir/StructureDefinition/Substance',
   *       'http://hl7.org/fhir/StructureDefinition/BiologicallyDerivedProduct',
   *       'http://hl7.org/fhir/StructureDefinition/NutritionProduct',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private subject?: Reference | undefined;

  /**
   * DetectedIssue.encounter Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Encounter detected issue is part of
   * - **Definition:** The encounter during which this issue was detected.
   * - **Comment:** This will typically be the encounter the DetectedIssue was created during, but some DetectedIssues may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter (e.g. pre-admission lab tests).
   * - **Requirements:** Links this detected issue to the Encounter context.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Encounter',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private encounter?: Reference | undefined;

  /**
   * DetectedIssue.identified[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('DetectedIssue.identified[x]', ['dateTime','Period',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When identified
   * - **Definition:** The date or period when the detected issue was initially identified.
   * - **Requirements:** No-one can be responsible for mitigation prior to the issue being identified.
   * - **FHIR Types:**
   *     'dateTime',
   *     'Period',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  @ChoiceDataTypesMeta('DetectedIssue.identified[x]',[
    'dateTime',
    'Period',
  ])
  private identified?: IDataType | undefined;

  /**
   * DetectedIssue.author Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The provider or device that identified the issue
   * - **Definition:** Individual or device responsible for the issue being raised.  For example, a decision support application or a pharmacist conducting a medication review.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/RelatedPerson',
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *       'http://hl7.org/fhir/StructureDefinition/Device',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private author?: Reference | undefined;

  /**
   * DetectedIssue.implicated Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Problem resource
   * - **Definition:** Indicates the resource representing the current activity or proposed activity that is potentially problematic.
   * - **Comment:** There\'s an implicit constraint on the number of implicated resources based on DetectedIssue.type; e.g. For drug-drug, there would be more than one.  For timing, there would typically only be one.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Resource',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private implicated?: Reference[] | undefined;

  /**
   * DetectedIssue.evidence Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Supporting evidence
   * - **Definition:** Supporting evidence or manifestations that provide the basis for identifying the detected issue such as a GuidanceResponse or MeasureReport.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private evidence?: DetectedIssueEvidenceComponent[] | undefined;

  /**
   * DetectedIssue.detail Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Description and context
   * - **Definition:** A textual explanation of the detected issue.
   * - **Comment:** Should focus on information not covered elsewhere as discrete data - no need to duplicate the narrative.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private detail?: MarkdownType | undefined;

  /**
   * DetectedIssue.reference Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Authority for issue
   * - **Definition:** The literature, knowledge-base or similar reference that describes the propensity for the detected issue identified.
   * - **FHIR Type:** `uri`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private reference?: UriType | undefined;

  /**
   * DetectedIssue.mitigation Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Step taken to address
   * - **Definition:** Indicates an action that has been taken or is committed to reduce or eliminate the likelihood of the risk identified by the detected issue from manifesting.  Can also reflect an observation of known mitigating factors that may reduce/eliminate the need for any action.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private mitigation?: DetectedIssueMitigationComponent[] | undefined;

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
      const optErrMsg = `Invalid DetectedIssue.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid DetectedIssue.identifier; Provided element is not an instance of Identifier.`;
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
   * @returns the `status` property value as a CodeType object if defined; else null
   */
  public getStatusElement(): CodeType | null {
    return this.status;
  }

  /**
   * Assigns the provided PrimitiveType value to the `status` property.
   *
   * @param element - the `status` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setStatusElement(element: CodeType): this {
    assertIsDefined<CodeType>(element, `DetectedIssue.status is required`);
    const optErrMsg = `Invalid DetectedIssue.status; Provided value is not an instance of CodeType.`;
    assertFhirType<CodeType>(element, CodeType, optErrMsg);
    this.status = element;
    return this;
  }

  /**
   * @returns `true` if the `status` property exists and has a value; `false` otherwise
   */
  public hasStatusElement(): boolean {
    return isDefined<CodeType>(this.status) && !this.status.isEmpty();
  }

  /**
   * @returns the `status` property value as a fhirCode if defined; else null
   */
  public getStatus(): fhirCode | null {
    if (this.status?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.status.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `status` property.
   *
   * @param value - the `status` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setStatus(value: fhirCode): this {
    assertIsDefined<fhirCode>(value, `DetectedIssue.status is required`);
    const optErrMsg = `Invalid DetectedIssue.status (${String(value)})`;
    this.status = new CodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg));
    return this;
  }

  /**
   * @returns `true` if the `status` property exists and has a value; `false` otherwise
   */
  public hasStatus(): boolean {
    return this.hasStatusElement();
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
      const optErrMsg = `Invalid DetectedIssue.category; Provided value array has an element that is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid DetectedIssue.category; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid DetectedIssue.code; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `severity` property value as a EnumCodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link DetectedissueSeverityEnum }
   */
  public getSeverityEnumType(): EnumCodeType | undefined {
    return this.severity;
  }

  /**
   * Assigns the provided EnumCodeType value to the `severity` property.
   *
   * @param enumType - the `severity` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code values
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link DetectedissueSeverityEnum }
   */
  public setSeverityEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = 'Invalid DetectedIssue.severity';
      assertEnumCodeType<DetectedissueSeverityEnum>(enumType, DetectedissueSeverityEnum, errMsgPrefix);
      this.severity = enumType;
    } else {
      this.severity = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `severity` property exists and has a value; `false` otherwise
   */
  public hasSeverityEnumType(): boolean {
    return isDefined<EnumCodeType>(this.severity) && !this.severity.isEmpty() && this.severity.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `severity` property value as a CodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link DetectedissueSeverityEnum }
   */
  public getSeverityElement(): CodeType | undefined {
    if (this.severity === undefined) {
      return undefined;
    }
    return this.severity as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `severity` property.
   *
   * @param element - the `severity` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link DetectedissueSeverityEnum }
   */
  public setSeverityElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid DetectedIssue.severity; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.severity = new EnumCodeType(element, this.detectedissueSeverityEnum);
    } else {
      this.severity = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `severity` property exists and has a value; `false` otherwise
   */
  public hasSeverityElement(): boolean {
    return this.hasSeverityEnumType();
  }

  /**
   * @returns the `severity` property value as a fhirCode if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link DetectedissueSeverityEnum }
   */
  public getSeverity(): fhirCode | undefined {
    if (this.severity === undefined) {
      return undefined;
    }
    return this.severity.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `severity` property.
   *
   * @param value - the `severity` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link DetectedissueSeverityEnum }
   */
  public setSeverity(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid DetectedIssue.severity; Provided value is not an instance of fhirCode.`;
      this.severity = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.detectedissueSeverityEnum);
    } else {
      this.severity = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `severity` property exists and has a value; `false` otherwise
   */
  public hasSeverity(): boolean {
    return this.hasSeverityEnumType();
  }

  /**
   * @returns the `subject` property value as a Reference object; else an empty Reference object
   */
  public getSubject(): Reference {
    return this.subject ?? new Reference();
  }

  /**
   * Assigns the provided Subject object value to the `subject` property.
   *
   * @decorator `@ReferenceTargets('DetectedIssue.subject', ['Patient','Group','Device','Location','Organization','Procedure','Practitioner','Medication','Substance','BiologicallyDerivedProduct','NutritionProduct',])`
   *
   * @param value - the `subject` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('DetectedIssue.subject', [
    'Patient',
  
    'Group',
  
    'Device',
  
    'Location',
  
    'Organization',
  
    'Procedure',
  
    'Practitioner',
  
    'Medication',
  
    'Substance',
  
    'BiologicallyDerivedProduct',
  
    'NutritionProduct',
  ])
  public setSubject(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.subject = value;
    } else {
      this.subject = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `subject` property exists and has a value; `false` otherwise
   */
  public hasSubject(): boolean {
    return isDefined<Reference>(this.subject) && !this.subject.isEmpty();
  }

  /**
   * @returns the `encounter` property value as a Reference object; else an empty Reference object
   */
  public getEncounter(): Reference {
    return this.encounter ?? new Reference();
  }

  /**
   * Assigns the provided Encounter object value to the `encounter` property.
   *
   * @decorator `@ReferenceTargets('DetectedIssue.encounter', ['Encounter',])`
   *
   * @param value - the `encounter` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('DetectedIssue.encounter', [
    'Encounter',
  ])
  public setEncounter(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.encounter = value;
    } else {
      this.encounter = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `encounter` property exists and has a value; `false` otherwise
   */
  public hasEncounter(): boolean {
    return isDefined<Reference>(this.encounter) && !this.encounter.isEmpty();
  }

  /**
   * @returns the `identified` property value as a DataType object if defined; else undefined
   */
  public getIdentified(): IDataType | undefined {
    return this.identified;
  }

  /**
   * Assigns the provided DataType object value to the `identified` property.
   *
   * @decorator `@ChoiceDataTypes('DetectedIssue.identified[x]')`
   *
   * @param value - the `identified` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('DetectedIssue.identified[x]')
  public setIdentified(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.identified = value;
    } else {
      this.identified = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `identified` property exists and has a value; `false` otherwise
   */
  public hasIdentified(): boolean {
    return isDefined<IDataType>(this.identified) && !this.identified.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `identified` property value as a DateTimeType object if defined; else undefined
   */
  public getIdentifiedDateTimeType(): DateTimeType | undefined {
    if (!isDefined<IDataType | undefined>(this.identified)) {
      return undefined;
    }
    if (!(this.identified instanceof DateTimeType)) {
      throw new InvalidTypeError(
        `DataType mismatch for DetectedIssue.identified[x]: Expected DateTimeType but encountered ${this.identified.fhirType()}`,
      );
    }
    return this.identified;
  }

  /**
   * @returns `true` if the `identified` property exists as a DateTimeType and has a value; `false` otherwise
   */
  public hasIdentifiedDateTimeType(): boolean {
    return this.hasIdentified() && this.identified instanceof DateTimeType;
  }

  /**
   * @returns the `identified` property value as a Period object if defined; else undefined
   */
  public getIdentifiedPeriod(): Period | undefined {
    if (!isDefined<IDataType | undefined>(this.identified)) {
      return undefined;
    }
    if (!(this.identified instanceof Period)) {
      throw new InvalidTypeError(
        `DataType mismatch for DetectedIssue.identified[x]: Expected Period but encountered ${this.identified.fhirType()}`,
      );
    }
    return this.identified;
  }

  /**
   * @returns `true` if the `identified` property exists as a Period and has a value; `false` otherwise
   */
  public hasIdentifiedPeriod(): boolean {
    return this.hasIdentified() && this.identified instanceof Period;
  }

  // End of choice datatype-specific "get"/"has" methods

  /**
   * @returns the `author` property value as a Reference object; else an empty Reference object
   */
  public getAuthor(): Reference {
    return this.author ?? new Reference();
  }

  /**
   * Assigns the provided Author object value to the `author` property.
   *
   * @decorator `@ReferenceTargets('DetectedIssue.author', ['Patient','RelatedPerson','Practitioner','PractitionerRole','Device',])`
   *
   * @param value - the `author` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('DetectedIssue.author', [
    'Patient',
  
    'RelatedPerson',
  
    'Practitioner',
  
    'PractitionerRole',
  
    'Device',
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
   * @returns the `implicated` property value as a Reference array
   */
  public getImplicated(): Reference[] {
    return this.implicated ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `implicated` property.
   *
   * @decorator `@ReferenceTargets('DetectedIssue.implicated', ['Resource',])`
   *
   * @param value - the `implicated` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('DetectedIssue.implicated', [
    'Resource',
  ])
  public setImplicated(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.implicated = value;
    } else {
      this.implicated = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `implicated` array property.
   *
   * @decorator `@ReferenceTargets('DetectedIssue.implicated', ['Resource',])`
   *
   * @param value - the `implicated` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('DetectedIssue.implicated', [
    'Resource',
  ])
  public addImplicated(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initImplicated();
      this.implicated?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `implicated` property exists and has a value; `false` otherwise
   */
  public hasImplicated(): boolean {
    return isDefinedList<Reference>(this.implicated) && this.implicated.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `implicated` property
   */
  private initImplicated(): void {
    if (!this.hasImplicated()) {
      this.implicated = [] as Reference[];
    }
  }

  /**
   * @returns the `evidence` property value as a DetectedIssueEvidenceComponent array
   */
  public getEvidence(): DetectedIssueEvidenceComponent[] {
    return this.evidence ?? ([] as DetectedIssueEvidenceComponent[]);
  }

  /**
   * Assigns the provided DetectedIssueEvidenceComponent array value to the `evidence` property.
   *
   * @param value - the `evidence` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setEvidence(value: DetectedIssueEvidenceComponent[] | undefined): this {
    if (isDefinedList<DetectedIssueEvidenceComponent>(value)) {
      const optErrMsg = `Invalid DetectedIssue.evidence; Provided value array has an element that is not an instance of DetectedIssueEvidenceComponent.`;
      assertFhirTypeList<DetectedIssueEvidenceComponent>(value, DetectedIssueEvidenceComponent, optErrMsg);
      this.evidence = value;
    } else {
      this.evidence = undefined;
    }
    return this;
  }

  /**
   * Add the provided DetectedIssueEvidenceComponent value to the `evidence` array property.
   *
   * @param value - the `evidence` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addEvidence(value: DetectedIssueEvidenceComponent | undefined): this {
    if (isDefined<DetectedIssueEvidenceComponent>(value)) {
      const optErrMsg = `Invalid DetectedIssue.evidence; Provided element is not an instance of DetectedIssueEvidenceComponent.`;
      assertFhirType<DetectedIssueEvidenceComponent>(value, DetectedIssueEvidenceComponent, optErrMsg);
      this.initEvidence();
      this.evidence?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `evidence` property exists and has a value; `false` otherwise
   */
  public hasEvidence(): boolean {
    return isDefinedList<DetectedIssueEvidenceComponent>(this.evidence) && this.evidence.some((item: DetectedIssueEvidenceComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `evidence` property
   */
  private initEvidence(): void {
    if(!this.hasEvidence()) {
      this.evidence = [] as DetectedIssueEvidenceComponent[];
    }
  }

  /**
   * @returns the `detail` property value as a MarkdownType object if defined; else an empty MarkdownType object
   */
  public getDetailElement(): MarkdownType {
    return this.detail ?? new MarkdownType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `detail` property.
   *
   * @param element - the `detail` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDetailElement(element: MarkdownType | undefined): this {
    if (isDefined<MarkdownType>(element)) {
      const optErrMsg = `Invalid DetectedIssue.detail; Provided element is not an instance of MarkdownType.`;
      assertFhirType<MarkdownType>(element, MarkdownType, optErrMsg);
      this.detail = element;
    } else {
      this.detail = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `detail` property exists and has a value; `false` otherwise
   */
  public hasDetailElement(): boolean {
    return isDefined<MarkdownType>(this.detail) && !this.detail.isEmpty();
  }

  /**
   * @returns the `detail` property value as a fhirMarkdown if defined; else undefined
   */
  public getDetail(): fhirMarkdown | undefined {
    return this.detail?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `detail` property.
   *
   * @param value - the `detail` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDetail(value: fhirMarkdown | undefined): this {
    if (isDefined<fhirMarkdown>(value)) {
      const optErrMsg = `Invalid DetectedIssue.detail (${String(value)})`;
      this.detail = new MarkdownType(parseFhirPrimitiveData(value, fhirMarkdownSchema, optErrMsg));
    } else {
      this.detail = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `detail` property exists and has a value; `false` otherwise
   */
  public hasDetail(): boolean {
    return this.hasDetailElement();
  }

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
      const optErrMsg = `Invalid DetectedIssue.reference; Provided element is not an instance of UriType.`;
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
      const optErrMsg = `Invalid DetectedIssue.reference (${String(value)})`;
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
   * @returns the `mitigation` property value as a DetectedIssueMitigationComponent array
   */
  public getMitigation(): DetectedIssueMitigationComponent[] {
    return this.mitigation ?? ([] as DetectedIssueMitigationComponent[]);
  }

  /**
   * Assigns the provided DetectedIssueMitigationComponent array value to the `mitigation` property.
   *
   * @param value - the `mitigation` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setMitigation(value: DetectedIssueMitigationComponent[] | undefined): this {
    if (isDefinedList<DetectedIssueMitigationComponent>(value)) {
      const optErrMsg = `Invalid DetectedIssue.mitigation; Provided value array has an element that is not an instance of DetectedIssueMitigationComponent.`;
      assertFhirTypeList<DetectedIssueMitigationComponent>(value, DetectedIssueMitigationComponent, optErrMsg);
      this.mitigation = value;
    } else {
      this.mitigation = undefined;
    }
    return this;
  }

  /**
   * Add the provided DetectedIssueMitigationComponent value to the `mitigation` array property.
   *
   * @param value - the `mitigation` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addMitigation(value: DetectedIssueMitigationComponent | undefined): this {
    if (isDefined<DetectedIssueMitigationComponent>(value)) {
      const optErrMsg = `Invalid DetectedIssue.mitigation; Provided element is not an instance of DetectedIssueMitigationComponent.`;
      assertFhirType<DetectedIssueMitigationComponent>(value, DetectedIssueMitigationComponent, optErrMsg);
      this.initMitigation();
      this.mitigation?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `mitigation` property exists and has a value; `false` otherwise
   */
  public hasMitigation(): boolean {
    return isDefinedList<DetectedIssueMitigationComponent>(this.mitigation) && this.mitigation.some((item: DetectedIssueMitigationComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `mitigation` property
   */
  private initMitigation(): void {
    if(!this.hasMitigation()) {
      this.mitigation = [] as DetectedIssueMitigationComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'DetectedIssue';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identifier,
      this.status,
      this.category,
      this.code,
      this.severity,
      this.subject,
      this.encounter,
      this.identified,
      this.author,
      this.implicated,
      this.evidence,
      this.detail,
      this.reference,
      this.mitigation,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): DetectedIssue {
    const dest = new DetectedIssue();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: DetectedIssue): void {
    super.copyValues(dest);
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    dest.status = this.status ? this.status.copy() : null;
    const categoryList = copyListValues<CodeableConcept>(this.category);
    dest.category = categoryList.length === 0 ? undefined : categoryList;
    dest.code = this.code?.copy();
    dest.severity = this.severity?.copy();
    dest.subject = this.subject?.copy();
    dest.encounter = this.encounter?.copy();
    dest.identified = this.identified?.copy() as IDataType;
    dest.author = this.author?.copy();
    const implicatedList = copyListValues<Reference>(this.implicated);
    dest.implicated = implicatedList.length === 0 ? undefined : implicatedList;
    const evidenceList = copyListValues<DetectedIssueEvidenceComponent>(this.evidence);
    dest.evidence = evidenceList.length === 0 ? undefined : evidenceList;
    dest.detail = this.detail?.copy();
    dest.reference = this.reference?.copy();
    const mitigationList = copyListValues<DetectedIssueMitigationComponent>(this.mitigation);
    dest.mitigation = mitigationList.length === 0 ? undefined : mitigationList;
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

    if (this.hasIdentifier()) {
      setFhirComplexListJson(this.getIdentifier(), 'identifier', jsonObj);
    }

    if (this.hasStatusElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getStatusElement()!, 'status', jsonObj);
    } else {
      missingReqdProperties.push(`DetectedIssue.status`);
    }

    if (this.hasCategory()) {
      setFhirComplexListJson(this.getCategory(), 'category', jsonObj);
    }

    if (this.hasCode()) {
      setFhirComplexJson(this.getCode(), 'code', jsonObj);
    }

    if (this.hasSeverityElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getSeverityElement()!, 'severity', jsonObj);
    }

    if (this.hasSubject()) {
      setFhirComplexJson(this.getSubject(), 'subject', jsonObj);
    }

    if (this.hasEncounter()) {
      setFhirComplexJson(this.getEncounter(), 'encounter', jsonObj);
    }

    if (this.hasIdentified()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getIdentified()!, 'identified', jsonObj);
    }

    if (this.hasAuthor()) {
      setFhirComplexJson(this.getAuthor(), 'author', jsonObj);
    }

    if (this.hasImplicated()) {
      setFhirComplexListJson(this.getImplicated(), 'implicated', jsonObj);
    }

    if (this.hasEvidence()) {
      setFhirBackboneElementListJson(this.getEvidence(), 'evidence', jsonObj);
    }

    if (this.hasDetailElement()) {
      setFhirPrimitiveJson<fhirMarkdown>(this.getDetailElement(), 'detail', jsonObj);
    }

    if (this.hasReferenceElement()) {
      setFhirPrimitiveJson<fhirUri>(this.getReferenceElement(), 'reference', jsonObj);
    }

    if (this.hasMitigation()) {
      setFhirBackboneElementListJson(this.getMitigation(), 'mitigation', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}

/**
 * DetectedIssueEvidenceComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Supporting evidence
 * - **Definition:** Supporting evidence or manifestations that provide the basis for identifying the detected issue such as a GuidanceResponse or MeasureReport.
 *
 * @category Data Models: Resource
 * @see [FHIR DetectedIssue](http://hl7.org/fhir/StructureDefinition/DetectedIssue)
 */
export class DetectedIssueEvidenceComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `DetectedIssueEvidenceComponent` JSON to instantiate the DetectedIssueEvidenceComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `DetectedIssueEvidenceComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to DetectedIssueEvidenceComponent
   * @returns DetectedIssueEvidenceComponent data model or undefined for `DetectedIssueEvidenceComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): DetectedIssueEvidenceComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'DetectedIssueEvidenceComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new DetectedIssueEvidenceComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    fieldName = 'code';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addCode(datatype);
        }
      });
    }

    fieldName = 'detail';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addDetail(datatype);
        }
      });
  }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * DetectedIssue.evidence.code Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Manifestation
   * - **Definition:** A manifestation that led to the recording of this detected issue.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private code?: CodeableConcept[] | undefined;

  /**
   * DetectedIssue.evidence.detail Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Supporting information
   * - **Definition:** Links to resources that constitute evidence for the detected issue such as a GuidanceResponse or MeasureReport.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Resource',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private detail?: Reference[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `code` property value as a CodeableConcept array
   */
  public getCode(): CodeableConcept[] {
    return this.code ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `code` property.
   *
   * @param value - the `code` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCode(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid DetectedIssue.evidence.code; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.code = value;
    } else {
      this.code = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `code` array property.
   *
   * @param value - the `code` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addCode(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid DetectedIssue.evidence.code; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initCode();
      this.code?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `code` property exists and has a value; `false` otherwise
   */
  public hasCode(): boolean {
    return isDefinedList<CodeableConcept>(this.code) && this.code.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `code` property
   */
  private initCode(): void {
    if(!this.hasCode()) {
      this.code = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `detail` property value as a Reference array
   */
  public getDetail(): Reference[] {
    return this.detail ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `detail` property.
   *
   * @decorator `@ReferenceTargets('DetectedIssue.evidence.detail', ['Resource',])`
   *
   * @param value - the `detail` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('DetectedIssue.evidence.detail', [
    'Resource',
  ])
  public setDetail(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.detail = value;
    } else {
      this.detail = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `detail` array property.
   *
   * @decorator `@ReferenceTargets('DetectedIssue.evidence.detail', ['Resource',])`
   *
   * @param value - the `detail` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('DetectedIssue.evidence.detail', [
    'Resource',
  ])
  public addDetail(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initDetail();
      this.detail?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `detail` property exists and has a value; `false` otherwise
   */
  public hasDetail(): boolean {
    return isDefinedList<Reference>(this.detail) && this.detail.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `detail` property
   */
  private initDetail(): void {
    if (!this.hasDetail()) {
      this.detail = [] as Reference[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'DetectedIssue.evidence';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.code,
      this.detail,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): DetectedIssueEvidenceComponent {
    const dest = new DetectedIssueEvidenceComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: DetectedIssueEvidenceComponent): void {
    super.copyValues(dest);
    const codeList = copyListValues<CodeableConcept>(this.code);
    dest.code = codeList.length === 0 ? undefined : codeList;
    const detailList = copyListValues<Reference>(this.detail);
    dest.detail = detailList.length === 0 ? undefined : detailList;
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
      setFhirComplexListJson(this.getCode(), 'code', jsonObj);
    }

    if (this.hasDetail()) {
      setFhirComplexListJson(this.getDetail(), 'detail', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * DetectedIssueMitigationComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Step taken to address
 * - **Definition:** Indicates an action that has been taken or is committed to reduce or eliminate the likelihood of the risk identified by the detected issue from manifesting.  Can also reflect an observation of known mitigating factors that may reduce/eliminate the need for any action.
 *
 * @category Data Models: Resource
 * @see [FHIR DetectedIssue](http://hl7.org/fhir/StructureDefinition/DetectedIssue)
 */
export class DetectedIssueMitigationComponent extends BackboneElement implements IBackboneElement {
  constructor(action: CodeableConcept | null = null) {
    super();

    this.action = null;
    if (isDefined<CodeableConcept>(action)) {
      this.setAction(action);
    }
  }

  /**
   * Parse the provided `DetectedIssueMitigationComponent` JSON to instantiate the DetectedIssueMitigationComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `DetectedIssueMitigationComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to DetectedIssueMitigationComponent
   * @returns DetectedIssueMitigationComponent data model or undefined for `DetectedIssueMitigationComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): DetectedIssueMitigationComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'DetectedIssueMitigationComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new DetectedIssueMitigationComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    const missingReqdProperties: string[] = [];

    fieldName = 'action';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setAction(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'date';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dtJson, dtSiblingJson);
      instance.setDateElement(datatype);
    }

    fieldName = 'author';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setAuthor(datatype);
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

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_REQD_IN_JSON} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * DetectedIssue.mitigation.action Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** What mitigation?
   * - **Definition:** Describes the action that was taken or the observation that was made that reduces/eliminates the risk associated with the identified issue.
   * - **Comment:** The "text" component can be used for detail or when no appropriate code exists.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private action: CodeableConcept | null;

  /**
   * DetectedIssue.mitigation.date Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Date committed
   * - **Definition:** Indicates when the mitigating action was documented.
   * - **Comment:** This might not be the same as when the mitigating step was actually taken.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private date?: DateTimeType | undefined;

  /**
   * DetectedIssue.mitigation.author Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who is committing?
   * - **Definition:** Identifies the practitioner who determined the mitigation and takes responsibility for the mitigation step occurring.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private author?: Reference | undefined;

  /**
   * DetectedIssue.mitigation.note Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Additional notes about the mitigation
   * - **Definition:** Clinicians may add additional notes or justifications about the mitigation action. For example, patient can have this drug because they have had it before without any issues. Multiple justifications may be provided.
   * - **FHIR Type:** `Annotation`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private note?: Annotation[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `action` property value as a CodeableConcept object if defined; else null
   */
  public getAction(): CodeableConcept | null {
    return this.action;
  }

  /**
   * Assigns the provided CodeableConcept object value to the `action` property.
   *
   * @param value - the `action` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAction(value: CodeableConcept): this {
    assertIsDefined<CodeableConcept>(value, `DetectedIssue.mitigation.action is required`);
    const optErrMsg = `Invalid DetectedIssue.mitigation.action; Provided element is not an instance of CodeableConcept.`;
    assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
    this.action = value;
    return this;
  }

  /**
   * @returns `true` if the `action` property exists and has a value; `false` otherwise
   */
  public hasAction(): boolean {
    return isDefined<CodeableConcept>(this.action) && !this.action.isEmpty();
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
      const optErrMsg = `Invalid DetectedIssue.mitigation.date; Provided element is not an instance of DateTimeType.`;
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
      const optErrMsg = `Invalid DetectedIssue.mitigation.date (${String(value)})`;
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
   * @returns the `author` property value as a Reference object; else an empty Reference object
   */
  public getAuthor(): Reference {
    return this.author ?? new Reference();
  }

  /**
   * Assigns the provided Author object value to the `author` property.
   *
   * @decorator `@ReferenceTargets('DetectedIssue.mitigation.author', ['Practitioner','PractitionerRole',])`
   *
   * @param value - the `author` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('DetectedIssue.mitigation.author', [
    'Practitioner',
  
    'PractitionerRole',
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
      const optErrMsg = `Invalid DetectedIssue.mitigation.note; Provided value array has an element that is not an instance of Annotation.`;
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
      const optErrMsg = `Invalid DetectedIssue.mitigation.note; Provided element is not an instance of Annotation.`;
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

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'DetectedIssue.mitigation';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.action,
      this.date,
      this.author,
      this.note,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): DetectedIssueMitigationComponent {
    const dest = new DetectedIssueMitigationComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: DetectedIssueMitigationComponent): void {
    super.copyValues(dest);
    dest.action = this.action ? this.action.copy() : null;
    dest.date = this.date?.copy();
    dest.author = this.author?.copy();
    const noteList = copyListValues<Annotation>(this.note);
    dest.note = noteList.length === 0 ? undefined : noteList;
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

    if (this.hasAction()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getAction()!, 'action', jsonObj);
    } else {
      missingReqdProperties.push(`DetectedIssue.mitigation.action`);
    }

    if (this.hasDateElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getDateElement(), 'date', jsonObj);
    }

    if (this.hasAuthor()) {
      setFhirComplexJson(this.getAuthor(), 'author', jsonObj);
    }

    if (this.hasNote()) {
      setFhirComplexListJson(this.getNote(), 'note', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
