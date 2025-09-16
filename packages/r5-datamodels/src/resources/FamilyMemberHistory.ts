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
 * FamilyMemberHistory Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/FamilyMemberHistory
 * StructureDefinition.name: FamilyMemberHistory
 * StructureDefinition.description: Significant health conditions for a person related to the patient relevant in the context of care for the patient.
 * StructureDefinition.fhirVersion: 5.0.0
 *
 * For questions, suggestions, or bugs, please open an issue at [GitHub ts-fhir-datamodels/issues](https://github.com/Paqrat76/ts-fhir-datamodels/issues).
 *
 * @packageDocumentation
 */

import {
  BackboneElement,
  BooleanType,
  CanonicalType,
  ChoiceDataTypes,
  ChoiceDataTypesMeta,
  CodeType,
  DateTimeType,
  DateType,
  DomainResource,
  EnumCodeType,
  FhirParser,
  IBackboneElement,
  IDataType,
  IDomainResource,
  InvalidTypeError,
  JSON,
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
  fhirCanonical,
  fhirCanonicalSchema,
  fhirCode,
  fhirCodeSchema,
  fhirDateTime,
  fhirDateTimeSchema,
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
import { Age, Annotation, CodeableConcept, CodeableReference, Identifier, PARSABLE_DATATYPE_MAP, Period, Range, Reference } from '../complex-types/complex-datatypes';
import { HistoryStatusEnum } from '../code-systems/HistoryStatusEnum';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Symbol.metadata polyfill secret sauce for decorator metadata
(Symbol.metadata as any) ??= Symbol('Symbol.metadata');

/**
 * FamilyMemberHistory Class
 *
 * @remarks
 * Significant health conditions for a person related to the patient relevant in the context of care for the patient.
 *
 * **FHIR Specification**
 * - **Short:** Information about patient\'s relatives, relevant for patient
 * - **Definition:** Significant health conditions for a person related to the patient relevant in the context of care for the patient.
 * - **FHIR Version:** 5.0.0
 *
 * @category Data Models: Resource
 * @see [FHIR FamilyMemberHistory](http://hl7.org/fhir/StructureDefinition/FamilyMemberHistory)
 */
export class FamilyMemberHistory extends DomainResource implements IDomainResource {
  constructor(status: EnumCodeType | CodeType | fhirCode | null = null, patient: Reference | null = null, relationship: CodeableConcept | null = null) {
    super();

    this.historyStatusEnum = new HistoryStatusEnum();

    this.status = constructorCodeValueAsEnumCodeType<HistoryStatusEnum>(
      status,
      HistoryStatusEnum,
      this.historyStatusEnum,
      'FamilyMemberHistory.status',
    );

    this.patient = null;
    if (isDefined<Reference>(patient)) {
      this.setPatient(patient);
    }

    this.relationship = null;
    if (isDefined<CodeableConcept>(relationship)) {
      this.setRelationship(relationship);
    }
  }

  /**
   * Parse the provided `FamilyMemberHistory` JSON to instantiate the FamilyMemberHistory data model.
   *
   * @param sourceJson - JSON representing FHIR `FamilyMemberHistory`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to FamilyMemberHistory
   * @returns FamilyMemberHistory data model or undefined for `FamilyMemberHistory`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): FamilyMemberHistory | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'FamilyMemberHistory';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new FamilyMemberHistory();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'FamilyMemberHistory');
    fhirParser.processDomainResourceJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const classMetadata: DecoratorMetadataObject | null = FamilyMemberHistory[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for FamilyMemberHistory`;
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

    fieldName = 'instantiatesCanonical';
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
          const datatype: CanonicalType | undefined = fhirParser.parseCanonicalType(dataJson.dtJson, dataJson.dtSiblingJson);
          if (datatype !== undefined) {
            instance.addInstantiatesCanonicalElement(datatype);
          }
        });
      }
    }

    fieldName = 'instantiatesUri';
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
          const datatype: UriType | undefined = fhirParser.parseUriType(dataJson.dtJson, dataJson.dtSiblingJson);
          if (datatype !== undefined) {
            instance.addInstantiatesUriElement(datatype);
          }
        });
      }
    }

    fieldName = 'status';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setStatus(null);
      } else {
        instance.setStatusElement(datatype);
      }
    } else {
      instance.setStatus(null);
    }

    fieldName = 'dataAbsentReason';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setDataAbsentReason(datatype);
    }

    fieldName = 'patient';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setPatient(null);
      } else {
        instance.setPatient(datatype);
      }
    } else {
      instance.setPatient(null);
    }

    fieldName = 'date';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dtJson, dtSiblingJson);
      instance.setDateElement(datatype);
    }

    fieldName = 'participant';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: FamilyMemberHistoryParticipantComponent | undefined = FamilyMemberHistoryParticipantComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addParticipant(component);
          }
        });
      }
    }

    fieldName = 'name';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setNameElement(datatype);
    }

    fieldName = 'relationship';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setRelationship(null);
      } else {
        instance.setRelationship(datatype);
      }
    } else {
      instance.setRelationship(null);
    }

    fieldName = 'sex';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setSex(datatype);
    }

    fieldName = 'born[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const born: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setBorn(born);

    fieldName = 'age[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const age: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setAge(age);

    fieldName = 'estimatedAge';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setEstimatedAgeElement(datatype);
    }

    fieldName = 'deceased[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const deceased: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setDeceased(deceased);

    fieldName = 'reason';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: CodeableReference | undefined = CodeableReference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addReason(datatype);
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

    fieldName = 'condition';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: FamilyMemberHistoryConditionComponent | undefined = FamilyMemberHistoryConditionComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addCondition(component);
          }
        });
      }
    }

    fieldName = 'procedure';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: FamilyMemberHistoryProcedureComponent | undefined = FamilyMemberHistoryProcedureComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addProcedure(component);
          }
        });
      }
    }

    return instance;
  }

  /**
   * FamilyMemberHistory.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** External Id(s) for this record
   * - **Definition:** Business identifiers assigned to this family member history by the performer or other systems which remain constant as the resource is updated and propagates from server to server.
   * - **Comment:** This is a business identifier, not a resource identifier (see [discussion](https://hl7.org/fhir/resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
   * - **Requirements:** Allows identification of the family member history as it is known by various participating systems and in a way that remains consistent across servers.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier[] | undefined;

  /**
   * FamilyMemberHistory.instantiatesCanonical Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Instantiates FHIR protocol or definition
   * - **Definition:** The URL pointing to a FHIR-defined protocol, guideline, orderset or other definition that is adhered to in whole or in part by this FamilyMemberHistory.
   * - **FHIR Type:** `canonical`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/PlanDefinition',
   *       'http://hl7.org/fhir/StructureDefinition/Questionnaire',
   *       'http://hl7.org/fhir/StructureDefinition/ActivityDefinition',
   *       'http://hl7.org/fhir/StructureDefinition/Measure',
   *       'http://hl7.org/fhir/StructureDefinition/OperationDefinition',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private instantiatesCanonical?: CanonicalType[] | undefined;

  /**
   * FamilyMemberHistory.instantiatesUri Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Instantiates external protocol or definition
   * - **Definition:** The URL pointing to an externally maintained protocol, guideline, orderset or other definition that is adhered to in whole or in part by this FamilyMemberHistory.
   * - **Comment:** This might be an HTML page, PDF, etc. or could just be a non-resolvable URI identifier.
   * - **FHIR Type:** `uri`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private instantiatesUri?: UriType[] | undefined;

  /**
   * FHIR CodeSystem: HistoryStatus
   *
   * @see {@link HistoryStatusEnum }
   */
  private readonly historyStatusEnum: HistoryStatusEnum;

  /**
   * FamilyMemberHistory.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** partial | completed | entered-in-error | health-unknown
   * - **Definition:** A code specifying the status of the record of the family history of a specific family member.
   * - **Comment:** This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** true
   * - **isModifierReason:** This element is labelled as a modifier because it is a status element that contains status entered-in-error which means that the resource should not be treated as valid
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link HistoryStatusEnum }
   */
  private status: EnumCodeType | null;

  /**
   * FamilyMemberHistory.dataAbsentReason Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** subject-unknown | withheld | unable-to-obtain | deferred
   * - **Definition:** Describes why the family member\'s history is not available.
   * - **Requirements:** This is a separate element to allow it to have a distinct binding from reasonCode.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private dataAbsentReason?: CodeableConcept | undefined;

  /**
   * FamilyMemberHistory.patient Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Patient history is about
   * - **Definition:** The person who this history concerns.
   * - **Comment:** This is not the family member.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *     ]
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private patient: Reference | null;

  /**
   * FamilyMemberHistory.date Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When history was recorded or last updated
   * - **Definition:** The date (and possibly time) when the family member history was recorded or last updated.
   * - **Comment:** This should be captured even if the same as the date on the List aggregating the full family history.
   * - **Requirements:** Allows determination of how current the summary is.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private date?: DateTimeType | undefined;

  /**
   * FamilyMemberHistory.participant Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who or what participated in the activities related to the family member history and how they were involved
   * - **Definition:** Indicates who or what participated in the activities related to the family member history and how they were involved.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private participant?: FamilyMemberHistoryParticipantComponent[] | undefined;

  /**
   * FamilyMemberHistory.name Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The family member described
   * - **Definition:** This will either be a name or a description; e.g. "Aunt Susan", "my cousin with the red hair".
   * - **Requirements:** Allows greater ease in ensuring the same person is being talked about.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private name?: StringType | undefined;

  /**
   * FamilyMemberHistory.relationship Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Relationship to the subject
   * - **Definition:** The type of relationship this person has to the patient (father, mother, brother etc.).
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private relationship: CodeableConcept | null;

  /**
   * FamilyMemberHistory.sex Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** male | female | other | unknown
   * - **Definition:** The birth sex of the family member.
   * - **Comment:** This element should ideally reflect whether the individual is genetically male or female.  However, as reported information based on the knowledge of the patient or reporting friend/relative, there may be situations where the reported sex might not be totally accurate.  E.g. \'Aunt Sue\' might be XY rather than XX.  Questions soliciting this information should be phrased to encourage capture of genetic sex where known.  However, systems performing analysis should also allow for the possibility of imprecision with this element.
   * - **Requirements:** Not all relationship codes imply sex and the relative\'s sex can be relevant for risk assessments.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private sex?: CodeableConcept | undefined;

  /**
   * FamilyMemberHistory.born[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('FamilyMemberHistory.born[x]', ['Period','date','string',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** (approximate) date of birth
   * - **Definition:** The actual or approximate date of birth of the relative.
   * - **Requirements:** Allows calculation of the relative\'s age.
   * - **FHIR Types:**
   *     'Period',
   *     'date',
   *     'string',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('FamilyMemberHistory.born[x]',[
    'Period',
    'date',
    'string',
  ])
  private born?: IDataType | undefined;

  /**
   * FamilyMemberHistory.age[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('FamilyMemberHistory.age[x]', ['Age','Range','string',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** (approximate) age
   * - **Definition:** The age of the relative at the time the family member history is recorded.
   * - **Comment:** use estimatedAge to indicate whether the age is actual or not.
   * - **Requirements:** While age can be calculated from date of birth, sometimes recording age directly is more natural for clinicians.
   * - **FHIR Types:**
   *     'Age',
   *     'Range',
   *     'string',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  @ChoiceDataTypesMeta('FamilyMemberHistory.age[x]',[
    'Age',
    'Range',
    'string',
  ])
  private age?: IDataType | undefined;

  /**
   * FamilyMemberHistory.estimatedAge Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Age is estimated?
   * - **Definition:** If true, indicates that the age value specified is an estimated value.
   * - **Comment:** This element is labeled as a modifier because the fact that age is estimated can/should change the results of any algorithm that calculates based on the specified age.
   * - **Requirements:** Clinicians often prefer to specify an estimaged age rather than an age range.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private estimatedAge?: BooleanType | undefined;

  /**
   * FamilyMemberHistory.deceased[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('FamilyMemberHistory.deceased[x]', ['boolean','Age','Range','date','string',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Dead? How old/when?
   * - **Definition:** Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.
   * - **FHIR Types:**
   *     'boolean',
   *     'Age',
   *     'Range',
   *     'date',
   *     'string',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  @ChoiceDataTypesMeta('FamilyMemberHistory.deceased[x]',[
    'boolean',
    'Age',
    'Range',
    'date',
    'string',
  ])
  private deceased?: IDataType | undefined;

  /**
   * FamilyMemberHistory.reason Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Why was family member history performed?
   * - **Definition:** Describes why the family member history occurred in coded or textual form, or Indicates a Condition, Observation, AllergyIntolerance, or QuestionnaireResponse that justifies this family member history event.
   * - **Comment:** Textual reasons can be captured using reasonCode.text.
   * - **FHIR Type:** `CodeableReference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Condition',
   *       'http://hl7.org/fhir/StructureDefinition/Observation',
   *       'http://hl7.org/fhir/StructureDefinition/AllergyIntolerance',
   *       'http://hl7.org/fhir/StructureDefinition/QuestionnaireResponse',
   *       'http://hl7.org/fhir/StructureDefinition/DiagnosticReport',
   *       'http://hl7.org/fhir/StructureDefinition/DocumentReference',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private reason?: CodeableReference[] | undefined;

  /**
   * FamilyMemberHistory.note Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** General note about related person
   * - **Definition:** This property allows a non condition-specific note to the made about the related person. Ideally, the note would be in the condition property, but this is not always possible.
   * - **FHIR Type:** `Annotation`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private note?: Annotation[] | undefined;

  /**
   * FamilyMemberHistory.condition Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Condition that the related person had
   * - **Definition:** The significant Conditions (or condition) that the family member had. This is a repeating section to allow a system to represent more than one condition per resource, though there is nothing stopping multiple resources - one per condition.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private condition?: FamilyMemberHistoryConditionComponent[] | undefined;

  /**
   * FamilyMemberHistory.procedure Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Procedures that the related person had
   * - **Definition:** The significant Procedures (or procedure) that the family member had. This is a repeating section to allow a system to represent more than one procedure per resource, though there is nothing stopping multiple resources - one per procedure.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private procedure?: FamilyMemberHistoryProcedureComponent[] | undefined;

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
      const optErrMsg = `Invalid FamilyMemberHistory.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid FamilyMemberHistory.identifier; Provided element is not an instance of Identifier.`;
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
   * @returns the `instantiatesCanonical` property value as a CanonicalType array
   */
  public getInstantiatesCanonicalElement(): CanonicalType[] {
    return this.instantiatesCanonical ?? ([] as CanonicalType[]);
  }

  /**
   * Assigns the provided CanonicalType array value to the `instantiatesCanonical` property.
   *
   * @param element - the `instantiatesCanonical` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setInstantiatesCanonicalElement(element: CanonicalType[] | undefined): this {
    if (isDefinedList<CanonicalType>(element)) {
      const optErrMsg = `Invalid FamilyMemberHistory.instantiatesCanonical; Provided value array has an element that is not an instance of CanonicalType.`;
      assertFhirTypeList<CanonicalType>(element, CanonicalType, optErrMsg);
      this.instantiatesCanonical = element;
    } else {
      this.instantiatesCanonical = undefined;
    }
    return this;
  }

  /**
   * Add the provided CanonicalType value to the `instantiatesCanonical` array property.
   *
   * @param element - the `instantiatesCanonical` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addInstantiatesCanonicalElement(element: CanonicalType | undefined): this {
    if (isDefined<CanonicalType>(element)) {
      const optErrMsg = `Invalid FamilyMemberHistory.instantiatesCanonical; Provided element is not an instance of CanonicalType.`;
      assertFhirType<CanonicalType>(element, CanonicalType, optErrMsg);
      this.initInstantiatesCanonical();
      this.instantiatesCanonical?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `instantiatesCanonical` property exists and has a value; `false` otherwise
   */
  public hasInstantiatesCanonicalElement(): boolean {
    return isDefinedList<CanonicalType>(this.instantiatesCanonical) && this.instantiatesCanonical.some((item: CanonicalType) => !item.isEmpty());
  }

  /**
   * @returns the `instantiatesCanonical` property value as a fhirCanonical array
   */
  public getInstantiatesCanonical(): fhirCanonical[] {
    this.initInstantiatesCanonical();
    const instantiatesCanonicalValues = [] as fhirCanonical[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.instantiatesCanonical!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        instantiatesCanonicalValues.push(value);
      }
    }
    return instantiatesCanonicalValues;
  }

  /**
   * Assigns the provided primitive value array to the `instantiatesCanonical` property.
   *
   * @param value - the `instantiatesCanonical` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setInstantiatesCanonical(value: fhirCanonical[] | undefined): this {
    if (isDefinedList<fhirCanonical>(value)) {
      const instantiatesCanonicalElements = [] as CanonicalType[];
      for (const instantiatesCanonicalValue of value) {
        const optErrMsg = `Invalid FamilyMemberHistory.instantiatesCanonical array item (${String(instantiatesCanonicalValue)})`;
        const element = new CanonicalType(parseFhirPrimitiveData(instantiatesCanonicalValue, fhirCanonicalSchema, optErrMsg));
        instantiatesCanonicalElements.push(element);
      }
      this.instantiatesCanonical = instantiatesCanonicalElements;
    } else {
      this.instantiatesCanonical = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `instantiatesCanonical` array property.
   *
   * @param value - the `instantiatesCanonical` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addInstantiatesCanonical(value: fhirCanonical | undefined): this {
    if (isDefined<fhirCanonical>(value)) {
      const optErrMsg = `Invalid FamilyMemberHistory.instantiatesCanonical array item (${String(value)})`;
      const element = new CanonicalType(parseFhirPrimitiveData(value, fhirCanonicalSchema, optErrMsg));
      this.initInstantiatesCanonical();
      this.addInstantiatesCanonicalElement(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `instantiatesCanonical` property exists and has a value; `false` otherwise
   */
  public hasInstantiatesCanonical(): boolean {
    return this.hasInstantiatesCanonicalElement();
  }

  /**
   * Initialize the `instantiatesCanonical` property
   */
  private initInstantiatesCanonical(): void {
    if (!this.hasInstantiatesCanonical()) {
      this.instantiatesCanonical = [] as CanonicalType[];
    }
  }

  /**
   * @returns the `instantiatesUri` property value as a UriType array
   */
  public getInstantiatesUriElement(): UriType[] {
    return this.instantiatesUri ?? ([] as UriType[]);
  }

  /**
   * Assigns the provided UriType array value to the `instantiatesUri` property.
   *
   * @param element - the `instantiatesUri` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setInstantiatesUriElement(element: UriType[] | undefined): this {
    if (isDefinedList<UriType>(element)) {
      const optErrMsg = `Invalid FamilyMemberHistory.instantiatesUri; Provided value array has an element that is not an instance of UriType.`;
      assertFhirTypeList<UriType>(element, UriType, optErrMsg);
      this.instantiatesUri = element;
    } else {
      this.instantiatesUri = undefined;
    }
    return this;
  }

  /**
   * Add the provided UriType value to the `instantiatesUri` array property.
   *
   * @param element - the `instantiatesUri` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addInstantiatesUriElement(element: UriType | undefined): this {
    if (isDefined<UriType>(element)) {
      const optErrMsg = `Invalid FamilyMemberHistory.instantiatesUri; Provided element is not an instance of UriType.`;
      assertFhirType<UriType>(element, UriType, optErrMsg);
      this.initInstantiatesUri();
      this.instantiatesUri?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `instantiatesUri` property exists and has a value; `false` otherwise
   */
  public hasInstantiatesUriElement(): boolean {
    return isDefinedList<UriType>(this.instantiatesUri) && this.instantiatesUri.some((item: UriType) => !item.isEmpty());
  }

  /**
   * @returns the `instantiatesUri` property value as a fhirUri array
   */
  public getInstantiatesUri(): fhirUri[] {
    this.initInstantiatesUri();
    const instantiatesUriValues = [] as fhirUri[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.instantiatesUri!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        instantiatesUriValues.push(value);
      }
    }
    return instantiatesUriValues;
  }

  /**
   * Assigns the provided primitive value array to the `instantiatesUri` property.
   *
   * @param value - the `instantiatesUri` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setInstantiatesUri(value: fhirUri[] | undefined): this {
    if (isDefinedList<fhirUri>(value)) {
      const instantiatesUriElements = [] as UriType[];
      for (const instantiatesUriValue of value) {
        const optErrMsg = `Invalid FamilyMemberHistory.instantiatesUri array item (${String(instantiatesUriValue)})`;
        const element = new UriType(parseFhirPrimitiveData(instantiatesUriValue, fhirUriSchema, optErrMsg));
        instantiatesUriElements.push(element);
      }
      this.instantiatesUri = instantiatesUriElements;
    } else {
      this.instantiatesUri = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `instantiatesUri` array property.
   *
   * @param value - the `instantiatesUri` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addInstantiatesUri(value: fhirUri | undefined): this {
    if (isDefined<fhirUri>(value)) {
      const optErrMsg = `Invalid FamilyMemberHistory.instantiatesUri array item (${String(value)})`;
      const element = new UriType(parseFhirPrimitiveData(value, fhirUriSchema, optErrMsg));
      this.initInstantiatesUri();
      this.addInstantiatesUriElement(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `instantiatesUri` property exists and has a value; `false` otherwise
   */
  public hasInstantiatesUri(): boolean {
    return this.hasInstantiatesUriElement();
  }

  /**
   * Initialize the `instantiatesUri` property
   */
  private initInstantiatesUri(): void {
    if (!this.hasInstantiatesUri()) {
      this.instantiatesUri = [] as UriType[];
    }
  }

  /**
   * @returns the `status` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link HistoryStatusEnum }
   */
  public getStatusEnumType(): EnumCodeType | null {
    return this.status;
  }

  /**
   * Assigns the provided EnumCodeType value to the `status` property.
   *
   * @param enumType - the `status` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link HistoryStatusEnum }
   */
  public setStatusEnumType(enumType: EnumCodeType | undefined | null): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid FamilyMemberHistory.status`;
      assertEnumCodeType<HistoryStatusEnum>(enumType, HistoryStatusEnum, errMsgPrefix);
      this.status = enumType;
    } else {
      this.status = null;
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
   * @returns the `status` property value as a CodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link HistoryStatusEnum }
   */
  public getStatusElement(): CodeType | null {
    if (this.status === null) {
      return null;
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
   * @see CodeSystem Enumeration: {@link HistoryStatusEnum }
   */
  public setStatusElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid FamilyMemberHistory.status; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.status = new EnumCodeType(element, this.historyStatusEnum);
    } else {
      this.status = null;
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
   * @returns the `status` property value as a fhirCode if defined; else null
   *
   * @see CodeSystem Enumeration: {@link HistoryStatusEnum }
   */
  public getStatus(): fhirCode | null {
    if (this.status === null) {
      return null;
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
   * @see CodeSystem Enumeration: {@link HistoryStatusEnum }
   */
  public setStatus(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid FamilyMemberHistory.status (${String(value)})`;
      this.status = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.historyStatusEnum);
    } else {
      this.status = null;
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
   * @returns the `dataAbsentReason` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getDataAbsentReason(): CodeableConcept {
    return this.dataAbsentReason ?? new CodeableConcept();
  }

  /**
   * Assigns the provided DataAbsentReason object value to the `dataAbsentReason` property.
   *
   * @param value - the `dataAbsentReason` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDataAbsentReason(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid FamilyMemberHistory.dataAbsentReason; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.dataAbsentReason = value;
    } else {
      this.dataAbsentReason = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `dataAbsentReason` property exists and has a value; `false` otherwise
   */
  public hasDataAbsentReason(): boolean {
    return isDefined<CodeableConcept>(this.dataAbsentReason) && !this.dataAbsentReason.isEmpty();
  }

  /**
   * @returns the `patient` property value as a Reference object if defined; else an empty Reference object
   */
  public getPatient(): Reference {
    return this.patient ?? new Reference();
  }

  /**
   * Assigns the provided Patient object value to the `patient` property.
   *
   * @decorator `@ReferenceTargets('FamilyMemberHistory.patient', ['Patient',])`
   *
   * @param value - the `patient` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('FamilyMemberHistory.patient', [
    'Patient',
  ])
  public setPatient(value: Reference | undefined | null): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.patient = value;
    } else {
      this.patient = null;
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
      const optErrMsg = `Invalid FamilyMemberHistory.date; Provided element is not an instance of DateTimeType.`;
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
      const optErrMsg = `Invalid FamilyMemberHistory.date (${String(value)})`;
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
   * @returns the `participant` property value as a FamilyMemberHistoryParticipantComponent array
   */
  public getParticipant(): FamilyMemberHistoryParticipantComponent[] {
    return this.participant ?? ([] as FamilyMemberHistoryParticipantComponent[]);
  }

  /**
   * Assigns the provided FamilyMemberHistoryParticipantComponent array value to the `participant` property.
   *
   * @param value - the `participant` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setParticipant(value: FamilyMemberHistoryParticipantComponent[] | undefined): this {
    if (isDefinedList<FamilyMemberHistoryParticipantComponent>(value)) {
      const optErrMsg = `Invalid FamilyMemberHistory.participant; Provided value array has an element that is not an instance of FamilyMemberHistoryParticipantComponent.`;
      assertFhirTypeList<FamilyMemberHistoryParticipantComponent>(value, FamilyMemberHistoryParticipantComponent, optErrMsg);
      this.participant = value;
    } else {
      this.participant = undefined;
    }
    return this;
  }

  /**
   * Add the provided FamilyMemberHistoryParticipantComponent value to the `participant` array property.
   *
   * @param value - the `participant` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addParticipant(value: FamilyMemberHistoryParticipantComponent | undefined): this {
    if (isDefined<FamilyMemberHistoryParticipantComponent>(value)) {
      const optErrMsg = `Invalid FamilyMemberHistory.participant; Provided element is not an instance of FamilyMemberHistoryParticipantComponent.`;
      assertFhirType<FamilyMemberHistoryParticipantComponent>(value, FamilyMemberHistoryParticipantComponent, optErrMsg);
      this.initParticipant();
      this.participant?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `participant` property exists and has a value; `false` otherwise
   */
  public hasParticipant(): boolean {
    return isDefinedList<FamilyMemberHistoryParticipantComponent>(this.participant) && this.participant.some((item: FamilyMemberHistoryParticipantComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `participant` property
   */
  private initParticipant(): void {
    if(!this.hasParticipant()) {
      this.participant = [] as FamilyMemberHistoryParticipantComponent[];
    }
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
      const optErrMsg = `Invalid FamilyMemberHistory.name; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid FamilyMemberHistory.name (${String(value)})`;
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
   * @returns the `relationship` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getRelationship(): CodeableConcept {
    return this.relationship ?? new CodeableConcept();
  }

  /**
   * Assigns the provided CodeableConcept object value to the `relationship` property.
   *
   * @param value - the `relationship` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setRelationship(value: CodeableConcept | undefined | null): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid FamilyMemberHistory.relationship; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.relationship = value;
    } else {
      this.relationship = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `relationship` property exists and has a value; `false` otherwise
   */
  public hasRelationship(): boolean {
    return isDefined<CodeableConcept>(this.relationship) && !this.relationship.isEmpty();
  }

  /**
   * @returns the `sex` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getSex(): CodeableConcept {
    return this.sex ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Sex object value to the `sex` property.
   *
   * @param value - the `sex` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSex(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid FamilyMemberHistory.sex; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.sex = value;
    } else {
      this.sex = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `sex` property exists and has a value; `false` otherwise
   */
  public hasSex(): boolean {
    return isDefined<CodeableConcept>(this.sex) && !this.sex.isEmpty();
  }

  /**
   * @returns the `born` property value as a DataType object if defined; else undefined
   */
  public getBorn(): IDataType | undefined {
    return this.born;
  }

  /**
   * Assigns the provided DataType object value to the `born` property.
   *
   * @decorator `@ChoiceDataTypes('FamilyMemberHistory.born[x]')`
   *
   * @param value - the `born` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('FamilyMemberHistory.born[x]')
  public setBorn(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.born = value;
    } else {
      this.born = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `born` property exists and has a value; `false` otherwise
   */
  public hasBorn(): boolean {
    return isDefined<IDataType>(this.born) && !this.born.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `born` property value as a Period object if defined; else undefined
   */
  public getBornPeriod(): Period | undefined {
    if (!isDefined<IDataType | undefined>(this.born)) {
      return undefined;
    }
    if (!(this.born instanceof Period)) {
      throw new InvalidTypeError(
        `DataType mismatch for FamilyMemberHistory.born[x]: Expected Period but encountered ${this.born.fhirType()}`,
      );
    }
    return this.born;
  }

  /**
   * @returns `true` if the `born` property exists as a Period and has a value; `false` otherwise
   */
  public hasBornPeriod(): boolean {
    return this.hasBorn() && this.born instanceof Period;
  }

  /**
   * @returns the `born` property value as a DateType object if defined; else undefined
   */
  public getBornDateType(): DateType | undefined {
    if (!isDefined<IDataType | undefined>(this.born)) {
      return undefined;
    }
    if (!(this.born instanceof DateType)) {
      throw new InvalidTypeError(
        `DataType mismatch for FamilyMemberHistory.born[x]: Expected DateType but encountered ${this.born.fhirType()}`,
      );
    }
    return this.born;
  }

  /**
   * @returns `true` if the `born` property exists as a DateType and has a value; `false` otherwise
   */
  public hasBornDateType(): boolean {
    return this.hasBorn() && this.born instanceof DateType;
  }

  /**
   * @returns the `born` property value as a StringType object if defined; else undefined
   */
  public getBornStringType(): StringType | undefined {
    if (!isDefined<IDataType | undefined>(this.born)) {
      return undefined;
    }
    if (!(this.born instanceof StringType)) {
      throw new InvalidTypeError(
        `DataType mismatch for FamilyMemberHistory.born[x]: Expected StringType but encountered ${this.born.fhirType()}`,
      );
    }
    return this.born;
  }

  /**
   * @returns `true` if the `born` property exists as a StringType and has a value; `false` otherwise
   */
  public hasBornStringType(): boolean {
    return this.hasBorn() && this.born instanceof StringType;
  }

  // End of choice datatype-specific "get"/"has" methods

  /**
   * @returns the `age` property value as a DataType object if defined; else undefined
   */
  public getAge(): IDataType | undefined {
    return this.age;
  }

  /**
   * Assigns the provided DataType object value to the `age` property.
   *
   * @decorator `@ChoiceDataTypes('FamilyMemberHistory.age[x]')`
   *
   * @param value - the `age` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('FamilyMemberHistory.age[x]')
  public setAge(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.age = value;
    } else {
      this.age = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `age` property exists and has a value; `false` otherwise
   */
  public hasAge(): boolean {
    return isDefined<IDataType>(this.age) && !this.age.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `age` property value as a Age object if defined; else undefined
   */
  public getAgeAge(): Age | undefined {
    if (!isDefined<IDataType | undefined>(this.age)) {
      return undefined;
    }
    if (!(this.age instanceof Age)) {
      throw new InvalidTypeError(
        `DataType mismatch for FamilyMemberHistory.age[x]: Expected Age but encountered ${this.age.fhirType()}`,
      );
    }
    return this.age;
  }

  /**
   * @returns `true` if the `age` property exists as a Age and has a value; `false` otherwise
   */
  public hasAgeAge(): boolean {
    return this.hasAge() && this.age instanceof Age;
  }

  /**
   * @returns the `age` property value as a Range object if defined; else undefined
   */
  public getAgeRange(): Range | undefined {
    if (!isDefined<IDataType | undefined>(this.age)) {
      return undefined;
    }
    if (!(this.age instanceof Range)) {
      throw new InvalidTypeError(
        `DataType mismatch for FamilyMemberHistory.age[x]: Expected Range but encountered ${this.age.fhirType()}`,
      );
    }
    return this.age;
  }

  /**
   * @returns `true` if the `age` property exists as a Range and has a value; `false` otherwise
   */
  public hasAgeRange(): boolean {
    return this.hasAge() && this.age instanceof Range;
  }

  /**
   * @returns the `age` property value as a StringType object if defined; else undefined
   */
  public getAgeStringType(): StringType | undefined {
    if (!isDefined<IDataType | undefined>(this.age)) {
      return undefined;
    }
    if (!(this.age instanceof StringType)) {
      throw new InvalidTypeError(
        `DataType mismatch for FamilyMemberHistory.age[x]: Expected StringType but encountered ${this.age.fhirType()}`,
      );
    }
    return this.age;
  }

  /**
   * @returns `true` if the `age` property exists as a StringType and has a value; `false` otherwise
   */
  public hasAgeStringType(): boolean {
    return this.hasAge() && this.age instanceof StringType;
  }

  // End of choice datatype-specific "get"/"has" methods

  /**
   * @returns the `estimatedAge` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getEstimatedAgeElement(): BooleanType {
    return this.estimatedAge ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `estimatedAge` property.
   *
   * @param element - the `estimatedAge` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setEstimatedAgeElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid FamilyMemberHistory.estimatedAge; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.estimatedAge = element;
    } else {
      this.estimatedAge = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `estimatedAge` property exists and has a value; `false` otherwise
   */
  public hasEstimatedAgeElement(): boolean {
    return isDefined<BooleanType>(this.estimatedAge) && !this.estimatedAge.isEmpty();
  }

  /**
   * @returns the `estimatedAge` property value as a fhirBoolean if defined; else undefined
   */
  public getEstimatedAge(): fhirBoolean | undefined {
    return this.estimatedAge?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `estimatedAge` property.
   *
   * @param value - the `estimatedAge` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setEstimatedAge(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid FamilyMemberHistory.estimatedAge (${String(value)})`;
      this.estimatedAge = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.estimatedAge = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `estimatedAge` property exists and has a value; `false` otherwise
   */
  public hasEstimatedAge(): boolean {
    return this.hasEstimatedAgeElement();
  }

  /**
   * @returns the `deceased` property value as a DataType object if defined; else undefined
   */
  public getDeceased(): IDataType | undefined {
    return this.deceased;
  }

  /**
   * Assigns the provided DataType object value to the `deceased` property.
   *
   * @decorator `@ChoiceDataTypes('FamilyMemberHistory.deceased[x]')`
   *
   * @param value - the `deceased` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('FamilyMemberHistory.deceased[x]')
  public setDeceased(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.deceased = value;
    } else {
      this.deceased = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `deceased` property exists and has a value; `false` otherwise
   */
  public hasDeceased(): boolean {
    return isDefined<IDataType>(this.deceased) && !this.deceased.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `deceased` property value as a BooleanType object if defined; else undefined
   */
  public getDeceasedBooleanType(): BooleanType | undefined {
    if (!isDefined<IDataType | undefined>(this.deceased)) {
      return undefined;
    }
    if (!(this.deceased instanceof BooleanType)) {
      throw new InvalidTypeError(
        `DataType mismatch for FamilyMemberHistory.deceased[x]: Expected BooleanType but encountered ${this.deceased.fhirType()}`,
      );
    }
    return this.deceased;
  }

  /**
   * @returns `true` if the `deceased` property exists as a BooleanType and has a value; `false` otherwise
   */
  public hasDeceasedBooleanType(): boolean {
    return this.hasDeceased() && this.deceased instanceof BooleanType;
  }

  /**
   * @returns the `deceased` property value as a Age object if defined; else undefined
   */
  public getDeceasedAge(): Age | undefined {
    if (!isDefined<IDataType | undefined>(this.deceased)) {
      return undefined;
    }
    if (!(this.deceased instanceof Age)) {
      throw new InvalidTypeError(
        `DataType mismatch for FamilyMemberHistory.deceased[x]: Expected Age but encountered ${this.deceased.fhirType()}`,
      );
    }
    return this.deceased;
  }

  /**
   * @returns `true` if the `deceased` property exists as a Age and has a value; `false` otherwise
   */
  public hasDeceasedAge(): boolean {
    return this.hasDeceased() && this.deceased instanceof Age;
  }

  /**
   * @returns the `deceased` property value as a Range object if defined; else undefined
   */
  public getDeceasedRange(): Range | undefined {
    if (!isDefined<IDataType | undefined>(this.deceased)) {
      return undefined;
    }
    if (!(this.deceased instanceof Range)) {
      throw new InvalidTypeError(
        `DataType mismatch for FamilyMemberHistory.deceased[x]: Expected Range but encountered ${this.deceased.fhirType()}`,
      );
    }
    return this.deceased;
  }

  /**
   * @returns `true` if the `deceased` property exists as a Range and has a value; `false` otherwise
   */
  public hasDeceasedRange(): boolean {
    return this.hasDeceased() && this.deceased instanceof Range;
  }

  /**
   * @returns the `deceased` property value as a DateType object if defined; else undefined
   */
  public getDeceasedDateType(): DateType | undefined {
    if (!isDefined<IDataType | undefined>(this.deceased)) {
      return undefined;
    }
    if (!(this.deceased instanceof DateType)) {
      throw new InvalidTypeError(
        `DataType mismatch for FamilyMemberHistory.deceased[x]: Expected DateType but encountered ${this.deceased.fhirType()}`,
      );
    }
    return this.deceased;
  }

  /**
   * @returns `true` if the `deceased` property exists as a DateType and has a value; `false` otherwise
   */
  public hasDeceasedDateType(): boolean {
    return this.hasDeceased() && this.deceased instanceof DateType;
  }

  /**
   * @returns the `deceased` property value as a StringType object if defined; else undefined
   */
  public getDeceasedStringType(): StringType | undefined {
    if (!isDefined<IDataType | undefined>(this.deceased)) {
      return undefined;
    }
    if (!(this.deceased instanceof StringType)) {
      throw new InvalidTypeError(
        `DataType mismatch for FamilyMemberHistory.deceased[x]: Expected StringType but encountered ${this.deceased.fhirType()}`,
      );
    }
    return this.deceased;
  }

  /**
   * @returns `true` if the `deceased` property exists as a StringType and has a value; `false` otherwise
   */
  public hasDeceasedStringType(): boolean {
    return this.hasDeceased() && this.deceased instanceof StringType;
  }

  // End of choice datatype-specific "get"/"has" methods

  /**
   * @returns the `reason` property value as a CodeableReference array
   */
  public getReason(): CodeableReference[] {
    return this.reason ?? ([] as CodeableReference[]);
  }

  /**
   * Assigns the provided CodeableReference array value to the `reason` property.
   *
   * @param value - the `reason` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setReason(value: CodeableReference[] | undefined): this {
    if (isDefinedList<CodeableReference>(value)) {
      const optErrMsg = `Invalid FamilyMemberHistory.reason; Provided value array has an element that is not an instance of CodeableReference.`;
      assertFhirTypeList<CodeableReference>(value, CodeableReference, optErrMsg);
      this.reason = value;
    } else {
      this.reason = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableReference value to the `reason` array property.
   *
   * @param value - the `reason` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addReason(value: CodeableReference | undefined): this {
    if (isDefined<CodeableReference>(value)) {
      const optErrMsg = `Invalid FamilyMemberHistory.reason; Provided element is not an instance of CodeableReference.`;
      assertFhirType<CodeableReference>(value, CodeableReference, optErrMsg);
      this.initReason();
      this.reason?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `reason` property exists and has a value; `false` otherwise
   */
  public hasReason(): boolean {
    return isDefinedList<CodeableReference>(this.reason) && this.reason.some((item: CodeableReference) => !item.isEmpty());
  }

  /**
   * Initialize the `reason` property
   */
  private initReason(): void {
    if(!this.hasReason()) {
      this.reason = [] as CodeableReference[];
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
      const optErrMsg = `Invalid FamilyMemberHistory.note; Provided value array has an element that is not an instance of Annotation.`;
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
      const optErrMsg = `Invalid FamilyMemberHistory.note; Provided element is not an instance of Annotation.`;
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
   * @returns the `condition` property value as a FamilyMemberHistoryConditionComponent array
   */
  public getCondition(): FamilyMemberHistoryConditionComponent[] {
    return this.condition ?? ([] as FamilyMemberHistoryConditionComponent[]);
  }

  /**
   * Assigns the provided FamilyMemberHistoryConditionComponent array value to the `condition` property.
   *
   * @param value - the `condition` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCondition(value: FamilyMemberHistoryConditionComponent[] | undefined): this {
    if (isDefinedList<FamilyMemberHistoryConditionComponent>(value)) {
      const optErrMsg = `Invalid FamilyMemberHistory.condition; Provided value array has an element that is not an instance of FamilyMemberHistoryConditionComponent.`;
      assertFhirTypeList<FamilyMemberHistoryConditionComponent>(value, FamilyMemberHistoryConditionComponent, optErrMsg);
      this.condition = value;
    } else {
      this.condition = undefined;
    }
    return this;
  }

  /**
   * Add the provided FamilyMemberHistoryConditionComponent value to the `condition` array property.
   *
   * @param value - the `condition` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addCondition(value: FamilyMemberHistoryConditionComponent | undefined): this {
    if (isDefined<FamilyMemberHistoryConditionComponent>(value)) {
      const optErrMsg = `Invalid FamilyMemberHistory.condition; Provided element is not an instance of FamilyMemberHistoryConditionComponent.`;
      assertFhirType<FamilyMemberHistoryConditionComponent>(value, FamilyMemberHistoryConditionComponent, optErrMsg);
      this.initCondition();
      this.condition?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `condition` property exists and has a value; `false` otherwise
   */
  public hasCondition(): boolean {
    return isDefinedList<FamilyMemberHistoryConditionComponent>(this.condition) && this.condition.some((item: FamilyMemberHistoryConditionComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `condition` property
   */
  private initCondition(): void {
    if(!this.hasCondition()) {
      this.condition = [] as FamilyMemberHistoryConditionComponent[];
    }
  }

  /**
   * @returns the `procedure` property value as a FamilyMemberHistoryProcedureComponent array
   */
  public getProcedure(): FamilyMemberHistoryProcedureComponent[] {
    return this.procedure ?? ([] as FamilyMemberHistoryProcedureComponent[]);
  }

  /**
   * Assigns the provided FamilyMemberHistoryProcedureComponent array value to the `procedure` property.
   *
   * @param value - the `procedure` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setProcedure(value: FamilyMemberHistoryProcedureComponent[] | undefined): this {
    if (isDefinedList<FamilyMemberHistoryProcedureComponent>(value)) {
      const optErrMsg = `Invalid FamilyMemberHistory.procedure; Provided value array has an element that is not an instance of FamilyMemberHistoryProcedureComponent.`;
      assertFhirTypeList<FamilyMemberHistoryProcedureComponent>(value, FamilyMemberHistoryProcedureComponent, optErrMsg);
      this.procedure = value;
    } else {
      this.procedure = undefined;
    }
    return this;
  }

  /**
   * Add the provided FamilyMemberHistoryProcedureComponent value to the `procedure` array property.
   *
   * @param value - the `procedure` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addProcedure(value: FamilyMemberHistoryProcedureComponent | undefined): this {
    if (isDefined<FamilyMemberHistoryProcedureComponent>(value)) {
      const optErrMsg = `Invalid FamilyMemberHistory.procedure; Provided element is not an instance of FamilyMemberHistoryProcedureComponent.`;
      assertFhirType<FamilyMemberHistoryProcedureComponent>(value, FamilyMemberHistoryProcedureComponent, optErrMsg);
      this.initProcedure();
      this.procedure?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `procedure` property exists and has a value; `false` otherwise
   */
  public hasProcedure(): boolean {
    return isDefinedList<FamilyMemberHistoryProcedureComponent>(this.procedure) && this.procedure.some((item: FamilyMemberHistoryProcedureComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `procedure` property
   */
  private initProcedure(): void {
    if(!this.hasProcedure()) {
      this.procedure = [] as FamilyMemberHistoryProcedureComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'FamilyMemberHistory';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identifier,
      this.instantiatesCanonical,
      this.instantiatesUri,
      this.status,
      this.dataAbsentReason,
      this.patient,
      this.date,
      this.participant,
      this.name,
      this.relationship,
      this.sex,
      this.born,
      this.age,
      this.estimatedAge,
      this.deceased,
      this.reason,
      this.note,
      this.condition,
      this.procedure,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.status, this.patient, this.relationship, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): FamilyMemberHistory {
    const dest = new FamilyMemberHistory();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: FamilyMemberHistory): void {
    super.copyValues(dest);
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    const instantiatesCanonicalList = copyListValues<CanonicalType>(this.instantiatesCanonical);
    dest.instantiatesCanonical = instantiatesCanonicalList.length === 0 ? undefined : instantiatesCanonicalList;
    const instantiatesUriList = copyListValues<UriType>(this.instantiatesUri);
    dest.instantiatesUri = instantiatesUriList.length === 0 ? undefined : instantiatesUriList;
    dest.status = this.status ? this.status.copy() : null;
    dest.dataAbsentReason = this.dataAbsentReason?.copy();
    dest.patient = this.patient ? this.patient.copy() : null;
    dest.date = this.date?.copy();
    const participantList = copyListValues<FamilyMemberHistoryParticipantComponent>(this.participant);
    dest.participant = participantList.length === 0 ? undefined : participantList;
    dest.name = this.name?.copy();
    dest.relationship = this.relationship ? this.relationship.copy() : null;
    dest.sex = this.sex?.copy();
    dest.born = this.born?.copy() as IDataType;
    dest.age = this.age?.copy() as IDataType;
    dest.estimatedAge = this.estimatedAge?.copy();
    dest.deceased = this.deceased?.copy() as IDataType;
    const reasonList = copyListValues<CodeableReference>(this.reason);
    dest.reason = reasonList.length === 0 ? undefined : reasonList;
    const noteList = copyListValues<Annotation>(this.note);
    dest.note = noteList.length === 0 ? undefined : noteList;
    const conditionList = copyListValues<FamilyMemberHistoryConditionComponent>(this.condition);
    dest.condition = conditionList.length === 0 ? undefined : conditionList;
    const procedureList = copyListValues<FamilyMemberHistoryProcedureComponent>(this.procedure);
    dest.procedure = procedureList.length === 0 ? undefined : procedureList;
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

    if (this.hasInstantiatesCanonical()) {
      setFhirPrimitiveListJson(this.getInstantiatesCanonicalElement(), 'instantiatesCanonical', jsonObj);
    }

    if (this.hasInstantiatesUri()) {
      setFhirPrimitiveListJson(this.getInstantiatesUriElement(), 'instantiatesUri', jsonObj);
    }

    if (this.hasStatusElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getStatusElement()!, 'status', jsonObj);
    }

    if (this.hasDataAbsentReason()) {
      setFhirComplexJson(this.getDataAbsentReason(), 'dataAbsentReason', jsonObj);
    }

    if (this.hasPatient()) {
      setFhirComplexJson(this.getPatient(), 'patient', jsonObj);
    }

    if (this.hasDateElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getDateElement(), 'date', jsonObj);
    }

    if (this.hasParticipant()) {
      setFhirBackboneElementListJson(this.getParticipant(), 'participant', jsonObj);
    }

    if (this.hasNameElement()) {
      setFhirPrimitiveJson<fhirString>(this.getNameElement(), 'name', jsonObj);
    }

    if (this.hasRelationship()) {
      setFhirComplexJson(this.getRelationship(), 'relationship', jsonObj);
    }

    if (this.hasSex()) {
      setFhirComplexJson(this.getSex(), 'sex', jsonObj);
    }

    if (this.hasBorn()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getBorn()!, 'born', jsonObj);
    }

    if (this.hasAge()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getAge()!, 'age', jsonObj);
    }

    if (this.hasEstimatedAgeElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getEstimatedAgeElement(), 'estimatedAge', jsonObj);
    }

    if (this.hasDeceased()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getDeceased()!, 'deceased', jsonObj);
    }

    if (this.hasReason()) {
      setFhirComplexListJson(this.getReason(), 'reason', jsonObj);
    }

    if (this.hasNote()) {
      setFhirComplexListJson(this.getNote(), 'note', jsonObj);
    }

    if (this.hasCondition()) {
      setFhirBackboneElementListJson(this.getCondition(), 'condition', jsonObj);
    }

    if (this.hasProcedure()) {
      setFhirBackboneElementListJson(this.getProcedure(), 'procedure', jsonObj);
    }

    return jsonObj;
  }
}

/**
 * FamilyMemberHistoryParticipantComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Who or what participated in the activities related to the family member history and how they were involved
 * - **Definition:** Indicates who or what participated in the activities related to the family member history and how they were involved.
 *
 * @category Data Models: Resource
 * @see [FHIR FamilyMemberHistory](http://hl7.org/fhir/StructureDefinition/FamilyMemberHistory)
 */
export class FamilyMemberHistoryParticipantComponent extends BackboneElement implements IBackboneElement {
  constructor(actor: Reference | null = null) {
    super();

    this.actor = null;
    if (isDefined<Reference>(actor)) {
      this.setActor(actor);
    }
  }

  /**
   * Parse the provided `FamilyMemberHistoryParticipantComponent` JSON to instantiate the FamilyMemberHistoryParticipantComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `FamilyMemberHistoryParticipantComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to FamilyMemberHistoryParticipantComponent
   * @returns FamilyMemberHistoryParticipantComponent data model or undefined for `FamilyMemberHistoryParticipantComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): FamilyMemberHistoryParticipantComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'FamilyMemberHistoryParticipantComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new FamilyMemberHistoryParticipantComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    fieldName = 'function';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setFunction(datatype);
    }

    fieldName = 'actor';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setActor(null);
      } else {
        instance.setActor(datatype);
      }
    } else {
      instance.setActor(null);
    }

    return instance;
  }

  /**
   * FamilyMemberHistory.participant.function Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Type of involvement
   * - **Definition:** Distinguishes the type of involvement of the actor in the activities related to the family member history.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private function_?: CodeableConcept | undefined;

  /**
   * FamilyMemberHistory.participant.actor Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who or what participated in the activities related to the family member history
   * - **Definition:** Indicates who or what participated in the activities related to the family member history.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/RelatedPerson',
   *       'http://hl7.org/fhir/StructureDefinition/Device',
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *       'http://hl7.org/fhir/StructureDefinition/CareTeam',
   *     ]
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private actor: Reference | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `function_` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getFunction(): CodeableConcept {
    return this.function_ ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Function object value to the `function_` property.
   *
   * @param value - the `function_` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setFunction(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid FamilyMemberHistory.participant.function; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.function_ = value;
    } else {
      this.function_ = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `function_` property exists and has a value; `false` otherwise
   */
  public hasFunction(): boolean {
    return isDefined<CodeableConcept>(this.function_) && !this.function_.isEmpty();
  }

  /**
   * @returns the `actor` property value as a Reference object if defined; else an empty Reference object
   */
  public getActor(): Reference {
    return this.actor ?? new Reference();
  }

  /**
   * Assigns the provided Actor object value to the `actor` property.
   *
   * @decorator `@ReferenceTargets('FamilyMemberHistory.participant.actor', ['Practitioner','PractitionerRole','Patient','RelatedPerson','Device','Organization','CareTeam',])`
   *
   * @param value - the `actor` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('FamilyMemberHistory.participant.actor', [
    'Practitioner',
  
    'PractitionerRole',
  
    'Patient',
  
    'RelatedPerson',
  
    'Device',
  
    'Organization',
  
    'CareTeam',
  ])
  public setActor(value: Reference | undefined | null): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.actor = value;
    } else {
      this.actor = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `actor` property exists and has a value; `false` otherwise
   */
  public hasActor(): boolean {
    return isDefined<Reference>(this.actor) && !this.actor.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'FamilyMemberHistory.participant';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.function_,
      this.actor,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.actor, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): FamilyMemberHistoryParticipantComponent {
    const dest = new FamilyMemberHistoryParticipantComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: FamilyMemberHistoryParticipantComponent): void {
    super.copyValues(dest);
    dest.function_ = this.function_?.copy();
    dest.actor = this.actor ? this.actor.copy() : null;
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

    if (this.hasFunction()) {
      setFhirComplexJson(this.getFunction(), 'function', jsonObj);
    }

    if (this.hasActor()) {
      setFhirComplexJson(this.getActor(), 'actor', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * FamilyMemberHistoryConditionComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Condition that the related person had
 * - **Definition:** The significant Conditions (or condition) that the family member had. This is a repeating section to allow a system to represent more than one condition per resource, though there is nothing stopping multiple resources - one per condition.
 *
 * @category Data Models: Resource
 * @see [FHIR FamilyMemberHistory](http://hl7.org/fhir/StructureDefinition/FamilyMemberHistory)
 */
export class FamilyMemberHistoryConditionComponent extends BackboneElement implements IBackboneElement {
  constructor(code: CodeableConcept | null = null) {
    super();

    this.code = null;
    if (isDefined<CodeableConcept>(code)) {
      this.setCode(code);
    }
  }

  /**
   * Parse the provided `FamilyMemberHistoryConditionComponent` JSON to instantiate the FamilyMemberHistoryConditionComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `FamilyMemberHistoryConditionComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to FamilyMemberHistoryConditionComponent
   * @returns FamilyMemberHistoryConditionComponent data model or undefined for `FamilyMemberHistoryConditionComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): FamilyMemberHistoryConditionComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'FamilyMemberHistoryConditionComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new FamilyMemberHistoryConditionComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    const classMetadata: DecoratorMetadataObject | null = FamilyMemberHistoryConditionComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for FamilyMemberHistoryConditionComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    fieldName = 'code';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setCode(null);
      } else {
        instance.setCode(datatype);
      }
    } else {
      instance.setCode(null);
    }

    fieldName = 'outcome';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setOutcome(datatype);
    }

    fieldName = 'contributedToDeath';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setContributedToDeathElement(datatype);
    }

    fieldName = 'onset[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const onset: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setOnset(onset);

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

    return instance;
  }

  /**
   * FamilyMemberHistory.condition.code Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Condition suffered by relation
   * - **Definition:** The actual condition specified. Could be a coded condition (like MI or Diabetes) or a less specific string like \'cancer\' depending on how much is known about the condition and the capabilities of the creating system.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private code: CodeableConcept | null;

  /**
   * FamilyMemberHistory.condition.outcome Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** deceased | permanent disability | etc
   * - **Definition:** Indicates what happened following the condition.  If the condition resulted in death, deceased date is captured on the relation.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private outcome?: CodeableConcept | undefined;

  /**
   * FamilyMemberHistory.condition.contributedToDeath Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Whether the condition contributed to the cause of death
   * - **Definition:** This condition contributed to the cause of death of the related person. If contributedToDeath is not populated, then it is unknown.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private contributedToDeath?: BooleanType | undefined;

  /**
   * FamilyMemberHistory.condition.onset[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('FamilyMemberHistory.condition.onset[x]', ['Age','Range','Period','string',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When condition first manifested
   * - **Definition:** Either the age of onset, range of approximate age or descriptive string can be recorded.  For conditions with multiple occurrences, this describes the first known occurrence.
   * - **Requirements:** Age of onset of a condition in relatives is predictive of risk for the patient.
   * - **FHIR Types:**
   *     'Age',
   *     'Range',
   *     'Period',
   *     'string',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('FamilyMemberHistory.condition.onset[x]',[
    'Age',
    'Range',
    'Period',
    'string',
  ])
  private onset?: IDataType | undefined;

  /**
   * FamilyMemberHistory.condition.note Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Extra information about condition
   * - **Definition:** An area where general notes can be placed about this specific condition.
   * - **FHIR Type:** `Annotation`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private note?: Annotation[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `code` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getCode(): CodeableConcept {
    return this.code ?? new CodeableConcept();
  }

  /**
   * Assigns the provided CodeableConcept object value to the `code` property.
   *
   * @param value - the `code` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCode(value: CodeableConcept | undefined | null): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid FamilyMemberHistory.condition.code; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.code = value;
    } else {
      this.code = null;
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
   * @returns the `outcome` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getOutcome(): CodeableConcept {
    return this.outcome ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Outcome object value to the `outcome` property.
   *
   * @param value - the `outcome` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setOutcome(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid FamilyMemberHistory.condition.outcome; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.outcome = value;
    } else {
      this.outcome = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `outcome` property exists and has a value; `false` otherwise
   */
  public hasOutcome(): boolean {
    return isDefined<CodeableConcept>(this.outcome) && !this.outcome.isEmpty();
  }

  /**
   * @returns the `contributedToDeath` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getContributedToDeathElement(): BooleanType {
    return this.contributedToDeath ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `contributedToDeath` property.
   *
   * @param element - the `contributedToDeath` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setContributedToDeathElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid FamilyMemberHistory.condition.contributedToDeath; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.contributedToDeath = element;
    } else {
      this.contributedToDeath = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `contributedToDeath` property exists and has a value; `false` otherwise
   */
  public hasContributedToDeathElement(): boolean {
    return isDefined<BooleanType>(this.contributedToDeath) && !this.contributedToDeath.isEmpty();
  }

  /**
   * @returns the `contributedToDeath` property value as a fhirBoolean if defined; else undefined
   */
  public getContributedToDeath(): fhirBoolean | undefined {
    return this.contributedToDeath?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `contributedToDeath` property.
   *
   * @param value - the `contributedToDeath` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setContributedToDeath(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid FamilyMemberHistory.condition.contributedToDeath (${String(value)})`;
      this.contributedToDeath = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.contributedToDeath = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `contributedToDeath` property exists and has a value; `false` otherwise
   */
  public hasContributedToDeath(): boolean {
    return this.hasContributedToDeathElement();
  }

  /**
   * @returns the `onset` property value as a DataType object if defined; else undefined
   */
  public getOnset(): IDataType | undefined {
    return this.onset;
  }

  /**
   * Assigns the provided DataType object value to the `onset` property.
   *
   * @decorator `@ChoiceDataTypes('FamilyMemberHistory.condition.onset[x]')`
   *
   * @param value - the `onset` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('FamilyMemberHistory.condition.onset[x]')
  public setOnset(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.onset = value;
    } else {
      this.onset = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `onset` property exists and has a value; `false` otherwise
   */
  public hasOnset(): boolean {
    return isDefined<IDataType>(this.onset) && !this.onset.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `onset` property value as a Age object if defined; else undefined
   */
  public getOnsetAge(): Age | undefined {
    if (!isDefined<IDataType | undefined>(this.onset)) {
      return undefined;
    }
    if (!(this.onset instanceof Age)) {
      throw new InvalidTypeError(
        `DataType mismatch for FamilyMemberHistory.condition.onset[x]: Expected Age but encountered ${this.onset.fhirType()}`,
      );
    }
    return this.onset;
  }

  /**
   * @returns `true` if the `onset` property exists as a Age and has a value; `false` otherwise
   */
  public hasOnsetAge(): boolean {
    return this.hasOnset() && this.onset instanceof Age;
  }

  /**
   * @returns the `onset` property value as a Range object if defined; else undefined
   */
  public getOnsetRange(): Range | undefined {
    if (!isDefined<IDataType | undefined>(this.onset)) {
      return undefined;
    }
    if (!(this.onset instanceof Range)) {
      throw new InvalidTypeError(
        `DataType mismatch for FamilyMemberHistory.condition.onset[x]: Expected Range but encountered ${this.onset.fhirType()}`,
      );
    }
    return this.onset;
  }

  /**
   * @returns `true` if the `onset` property exists as a Range and has a value; `false` otherwise
   */
  public hasOnsetRange(): boolean {
    return this.hasOnset() && this.onset instanceof Range;
  }

  /**
   * @returns the `onset` property value as a Period object if defined; else undefined
   */
  public getOnsetPeriod(): Period | undefined {
    if (!isDefined<IDataType | undefined>(this.onset)) {
      return undefined;
    }
    if (!(this.onset instanceof Period)) {
      throw new InvalidTypeError(
        `DataType mismatch for FamilyMemberHistory.condition.onset[x]: Expected Period but encountered ${this.onset.fhirType()}`,
      );
    }
    return this.onset;
  }

  /**
   * @returns `true` if the `onset` property exists as a Period and has a value; `false` otherwise
   */
  public hasOnsetPeriod(): boolean {
    return this.hasOnset() && this.onset instanceof Period;
  }

  /**
   * @returns the `onset` property value as a StringType object if defined; else undefined
   */
  public getOnsetStringType(): StringType | undefined {
    if (!isDefined<IDataType | undefined>(this.onset)) {
      return undefined;
    }
    if (!(this.onset instanceof StringType)) {
      throw new InvalidTypeError(
        `DataType mismatch for FamilyMemberHistory.condition.onset[x]: Expected StringType but encountered ${this.onset.fhirType()}`,
      );
    }
    return this.onset;
  }

  /**
   * @returns `true` if the `onset` property exists as a StringType and has a value; `false` otherwise
   */
  public hasOnsetStringType(): boolean {
    return this.hasOnset() && this.onset instanceof StringType;
  }

  // End of choice datatype-specific "get"/"has" methods

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
      const optErrMsg = `Invalid FamilyMemberHistory.condition.note; Provided value array has an element that is not an instance of Annotation.`;
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
      const optErrMsg = `Invalid FamilyMemberHistory.condition.note; Provided element is not an instance of Annotation.`;
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
    return 'FamilyMemberHistory.condition';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.code,
      this.outcome,
      this.contributedToDeath,
      this.onset,
      this.note,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.code, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): FamilyMemberHistoryConditionComponent {
    const dest = new FamilyMemberHistoryConditionComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: FamilyMemberHistoryConditionComponent): void {
    super.copyValues(dest);
    dest.code = this.code ? this.code.copy() : null;
    dest.outcome = this.outcome?.copy();
    dest.contributedToDeath = this.contributedToDeath?.copy();
    dest.onset = this.onset?.copy() as IDataType;
    const noteList = copyListValues<Annotation>(this.note);
    dest.note = noteList.length === 0 ? undefined : noteList;
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

    if (this.hasOutcome()) {
      setFhirComplexJson(this.getOutcome(), 'outcome', jsonObj);
    }

    if (this.hasContributedToDeathElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getContributedToDeathElement(), 'contributedToDeath', jsonObj);
    }

    if (this.hasOnset()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getOnset()!, 'onset', jsonObj);
    }

    if (this.hasNote()) {
      setFhirComplexListJson(this.getNote(), 'note', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * FamilyMemberHistoryProcedureComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Procedures that the related person had
 * - **Definition:** The significant Procedures (or procedure) that the family member had. This is a repeating section to allow a system to represent more than one procedure per resource, though there is nothing stopping multiple resources - one per procedure.
 *
 * @category Data Models: Resource
 * @see [FHIR FamilyMemberHistory](http://hl7.org/fhir/StructureDefinition/FamilyMemberHistory)
 */
export class FamilyMemberHistoryProcedureComponent extends BackboneElement implements IBackboneElement {
  constructor(code: CodeableConcept | null = null) {
    super();

    this.code = null;
    if (isDefined<CodeableConcept>(code)) {
      this.setCode(code);
    }
  }

  /**
   * Parse the provided `FamilyMemberHistoryProcedureComponent` JSON to instantiate the FamilyMemberHistoryProcedureComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `FamilyMemberHistoryProcedureComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to FamilyMemberHistoryProcedureComponent
   * @returns FamilyMemberHistoryProcedureComponent data model or undefined for `FamilyMemberHistoryProcedureComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): FamilyMemberHistoryProcedureComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'FamilyMemberHistoryProcedureComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new FamilyMemberHistoryProcedureComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    const classMetadata: DecoratorMetadataObject | null = FamilyMemberHistoryProcedureComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for FamilyMemberHistoryProcedureComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    fieldName = 'code';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setCode(null);
      } else {
        instance.setCode(datatype);
      }
    } else {
      instance.setCode(null);
    }

    fieldName = 'outcome';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setOutcome(datatype);
    }

    fieldName = 'contributedToDeath';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setContributedToDeathElement(datatype);
    }

    fieldName = 'performed[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const performed: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setPerformed(performed);

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

    return instance;
  }

  /**
   * FamilyMemberHistory.procedure.code Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Procedures performed on the related person
   * - **Definition:** The actual procedure specified. Could be a coded procedure or a less specific string depending on how much is known about the procedure and the capabilities of the creating system.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private code: CodeableConcept | null;

  /**
   * FamilyMemberHistory.procedure.outcome Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** What happened following the procedure
   * - **Definition:** Indicates what happened following the procedure. If the procedure resulted in death, deceased date is captured on the relation.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private outcome?: CodeableConcept | undefined;

  /**
   * FamilyMemberHistory.procedure.contributedToDeath Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Whether the procedure contributed to the cause of death
   * - **Definition:** This procedure contributed to the cause of death of the related person. If contributedToDeath is not populated, then it is unknown.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private contributedToDeath?: BooleanType | undefined;

  /**
   * FamilyMemberHistory.procedure.performed[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('FamilyMemberHistory.procedure.performed[x]', ['Age','Range','Period','string','dateTime',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When the procedure was performed
   * - **Definition:** Estimated or actual date, date-time, period, or age when the procedure was performed. Allows a period to support complex procedures that span more than one date, and also allows for the length of the procedure to be captured.
   * - **FHIR Types:**
   *     'Age',
   *     'Range',
   *     'Period',
   *     'string',
   *     'dateTime',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('FamilyMemberHistory.procedure.performed[x]',[
    'Age',
    'Range',
    'Period',
    'string',
    'dateTime',
  ])
  private performed?: IDataType | undefined;

  /**
   * FamilyMemberHistory.procedure.note Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Extra information about the procedure
   * - **Definition:** An area where general notes can be placed about this specific procedure.
   * - **FHIR Type:** `Annotation`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private note?: Annotation[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `code` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getCode(): CodeableConcept {
    return this.code ?? new CodeableConcept();
  }

  /**
   * Assigns the provided CodeableConcept object value to the `code` property.
   *
   * @param value - the `code` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCode(value: CodeableConcept | undefined | null): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid FamilyMemberHistory.procedure.code; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.code = value;
    } else {
      this.code = null;
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
   * @returns the `outcome` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getOutcome(): CodeableConcept {
    return this.outcome ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Outcome object value to the `outcome` property.
   *
   * @param value - the `outcome` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setOutcome(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid FamilyMemberHistory.procedure.outcome; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.outcome = value;
    } else {
      this.outcome = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `outcome` property exists and has a value; `false` otherwise
   */
  public hasOutcome(): boolean {
    return isDefined<CodeableConcept>(this.outcome) && !this.outcome.isEmpty();
  }

  /**
   * @returns the `contributedToDeath` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getContributedToDeathElement(): BooleanType {
    return this.contributedToDeath ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `contributedToDeath` property.
   *
   * @param element - the `contributedToDeath` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setContributedToDeathElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid FamilyMemberHistory.procedure.contributedToDeath; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.contributedToDeath = element;
    } else {
      this.contributedToDeath = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `contributedToDeath` property exists and has a value; `false` otherwise
   */
  public hasContributedToDeathElement(): boolean {
    return isDefined<BooleanType>(this.contributedToDeath) && !this.contributedToDeath.isEmpty();
  }

  /**
   * @returns the `contributedToDeath` property value as a fhirBoolean if defined; else undefined
   */
  public getContributedToDeath(): fhirBoolean | undefined {
    return this.contributedToDeath?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `contributedToDeath` property.
   *
   * @param value - the `contributedToDeath` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setContributedToDeath(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid FamilyMemberHistory.procedure.contributedToDeath (${String(value)})`;
      this.contributedToDeath = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.contributedToDeath = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `contributedToDeath` property exists and has a value; `false` otherwise
   */
  public hasContributedToDeath(): boolean {
    return this.hasContributedToDeathElement();
  }

  /**
   * @returns the `performed` property value as a DataType object if defined; else undefined
   */
  public getPerformed(): IDataType | undefined {
    return this.performed;
  }

  /**
   * Assigns the provided DataType object value to the `performed` property.
   *
   * @decorator `@ChoiceDataTypes('FamilyMemberHistory.procedure.performed[x]')`
   *
   * @param value - the `performed` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('FamilyMemberHistory.procedure.performed[x]')
  public setPerformed(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.performed = value;
    } else {
      this.performed = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `performed` property exists and has a value; `false` otherwise
   */
  public hasPerformed(): boolean {
    return isDefined<IDataType>(this.performed) && !this.performed.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `performed` property value as a Age object if defined; else undefined
   */
  public getPerformedAge(): Age | undefined {
    if (!isDefined<IDataType | undefined>(this.performed)) {
      return undefined;
    }
    if (!(this.performed instanceof Age)) {
      throw new InvalidTypeError(
        `DataType mismatch for FamilyMemberHistory.procedure.performed[x]: Expected Age but encountered ${this.performed.fhirType()}`,
      );
    }
    return this.performed;
  }

  /**
   * @returns `true` if the `performed` property exists as a Age and has a value; `false` otherwise
   */
  public hasPerformedAge(): boolean {
    return this.hasPerformed() && this.performed instanceof Age;
  }

  /**
   * @returns the `performed` property value as a Range object if defined; else undefined
   */
  public getPerformedRange(): Range | undefined {
    if (!isDefined<IDataType | undefined>(this.performed)) {
      return undefined;
    }
    if (!(this.performed instanceof Range)) {
      throw new InvalidTypeError(
        `DataType mismatch for FamilyMemberHistory.procedure.performed[x]: Expected Range but encountered ${this.performed.fhirType()}`,
      );
    }
    return this.performed;
  }

  /**
   * @returns `true` if the `performed` property exists as a Range and has a value; `false` otherwise
   */
  public hasPerformedRange(): boolean {
    return this.hasPerformed() && this.performed instanceof Range;
  }

  /**
   * @returns the `performed` property value as a Period object if defined; else undefined
   */
  public getPerformedPeriod(): Period | undefined {
    if (!isDefined<IDataType | undefined>(this.performed)) {
      return undefined;
    }
    if (!(this.performed instanceof Period)) {
      throw new InvalidTypeError(
        `DataType mismatch for FamilyMemberHistory.procedure.performed[x]: Expected Period but encountered ${this.performed.fhirType()}`,
      );
    }
    return this.performed;
  }

  /**
   * @returns `true` if the `performed` property exists as a Period and has a value; `false` otherwise
   */
  public hasPerformedPeriod(): boolean {
    return this.hasPerformed() && this.performed instanceof Period;
  }

  /**
   * @returns the `performed` property value as a StringType object if defined; else undefined
   */
  public getPerformedStringType(): StringType | undefined {
    if (!isDefined<IDataType | undefined>(this.performed)) {
      return undefined;
    }
    if (!(this.performed instanceof StringType)) {
      throw new InvalidTypeError(
        `DataType mismatch for FamilyMemberHistory.procedure.performed[x]: Expected StringType but encountered ${this.performed.fhirType()}`,
      );
    }
    return this.performed;
  }

  /**
   * @returns `true` if the `performed` property exists as a StringType and has a value; `false` otherwise
   */
  public hasPerformedStringType(): boolean {
    return this.hasPerformed() && this.performed instanceof StringType;
  }

  /**
   * @returns the `performed` property value as a DateTimeType object if defined; else undefined
   */
  public getPerformedDateTimeType(): DateTimeType | undefined {
    if (!isDefined<IDataType | undefined>(this.performed)) {
      return undefined;
    }
    if (!(this.performed instanceof DateTimeType)) {
      throw new InvalidTypeError(
        `DataType mismatch for FamilyMemberHistory.procedure.performed[x]: Expected DateTimeType but encountered ${this.performed.fhirType()}`,
      );
    }
    return this.performed;
  }

  /**
   * @returns `true` if the `performed` property exists as a DateTimeType and has a value; `false` otherwise
   */
  public hasPerformedDateTimeType(): boolean {
    return this.hasPerformed() && this.performed instanceof DateTimeType;
  }

  // End of choice datatype-specific "get"/"has" methods

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
      const optErrMsg = `Invalid FamilyMemberHistory.procedure.note; Provided value array has an element that is not an instance of Annotation.`;
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
      const optErrMsg = `Invalid FamilyMemberHistory.procedure.note; Provided element is not an instance of Annotation.`;
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
    return 'FamilyMemberHistory.procedure';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.code,
      this.outcome,
      this.contributedToDeath,
      this.performed,
      this.note,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.code, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): FamilyMemberHistoryProcedureComponent {
    const dest = new FamilyMemberHistoryProcedureComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: FamilyMemberHistoryProcedureComponent): void {
    super.copyValues(dest);
    dest.code = this.code ? this.code.copy() : null;
    dest.outcome = this.outcome?.copy();
    dest.contributedToDeath = this.contributedToDeath?.copy();
    dest.performed = this.performed?.copy() as IDataType;
    const noteList = copyListValues<Annotation>(this.note);
    dest.note = noteList.length === 0 ? undefined : noteList;
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

    if (this.hasOutcome()) {
      setFhirComplexJson(this.getOutcome(), 'outcome', jsonObj);
    }

    if (this.hasContributedToDeathElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getContributedToDeathElement(), 'contributedToDeath', jsonObj);
    }

    if (this.hasPerformed()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getPerformed()!, 'performed', jsonObj);
    }

    if (this.hasNote()) {
      setFhirComplexListJson(this.getNote(), 'note', jsonObj);
    }

    return jsonObj;
  }
}
