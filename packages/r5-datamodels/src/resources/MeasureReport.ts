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
 * MeasureReport Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/MeasureReport
 * StructureDefinition.name: MeasureReport
 * StructureDefinition.description: The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation.
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
  DomainResource,
  EnumCodeType,
  FhirParser,
  IBackboneElement,
  IDataType,
  IDomainResource,
  IntegerType,
  InvalidTypeError,
  JSON,
  ReferenceTargets,
  StringType,
  assertEnumCodeType,
  assertFhirType,
  assertFhirTypeList,
  assertIsDefined,
  constructorCodeValueAsEnumCodeType,
  copyListValues,
  fhirCanonical,
  fhirCanonicalSchema,
  fhirCode,
  fhirCodeSchema,
  fhirDateTime,
  fhirDateTimeSchema,
  fhirInteger,
  fhirIntegerSchema,
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
import { CodeableConcept, Duration, Identifier, PARSABLE_DATATYPE_MAP, Period, Quantity, Range, Reference } from '../complex-types/complex-datatypes';
import { MeasureReportStatusEnum } from '../code-systems/MeasureReportStatusEnum';
import { MeasureReportTypeEnum } from '../code-systems/MeasureReportTypeEnum';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';
import { SubmitDataUpdateTypeEnum } from '../code-systems/SubmitDataUpdateTypeEnum';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Symbol.metadata polyfill secret sauce for decorator metadata
(Symbol.metadata as any) ??= Symbol('Symbol.metadata');

/**
 * MeasureReport Class
 *
 * @remarks
 * The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation.
 *
 * **FHIR Specification**
 * - **Short:** Results of a measure evaluation
 * - **Definition:** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation.
 * - **FHIR Version:** 5.0.0
 *
 * @category Data Models: Resource
 * @see [FHIR MeasureReport](http://hl7.org/fhir/StructureDefinition/MeasureReport)
 */
export class MeasureReport extends DomainResource implements IDomainResource {
  constructor(status: EnumCodeType | CodeType | fhirCode | null = null, type_: EnumCodeType | CodeType | fhirCode | null = null, period: Period | null = null) {
    super();

    this.measureReportStatusEnum = new MeasureReportStatusEnum();
    this.measureReportTypeEnum = new MeasureReportTypeEnum();
    this.submitDataUpdateTypeEnum = new SubmitDataUpdateTypeEnum();

    this.status = constructorCodeValueAsEnumCodeType<MeasureReportStatusEnum>(
      status,
      MeasureReportStatusEnum,
      this.measureReportStatusEnum,
      'MeasureReport.status',
    );

    this.type_ = constructorCodeValueAsEnumCodeType<MeasureReportTypeEnum>(
      type_,
      MeasureReportTypeEnum,
      this.measureReportTypeEnum,
      'MeasureReport.type',
    );

    this.period = null;
    if (isDefined<Period>(period)) {
      this.setPeriod(period);
    }
  }

  /**
   * Parse the provided `MeasureReport` JSON to instantiate the MeasureReport data model.
   *
   * @param sourceJson - JSON representing FHIR `MeasureReport`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to MeasureReport
   * @returns MeasureReport data model or undefined for `MeasureReport`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): MeasureReport | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'MeasureReport';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new MeasureReport();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'MeasureReport');
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

    fieldName = 'dataUpdateType';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setDataUpdateTypeElement(datatype);
    }

    fieldName = 'measure';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CanonicalType | undefined = fhirParser.parseCanonicalType(dtJson, dtSiblingJson);
      instance.setMeasureElement(datatype);
    }

    fieldName = 'subject';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setSubject(datatype);
    }

    fieldName = 'date';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dtJson, dtSiblingJson);
      instance.setDateElement(datatype);
    }

    fieldName = 'reporter';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setReporter(datatype);
    }

    fieldName = 'reportingVendor';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setReportingVendor(datatype);
    }

    fieldName = 'location';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setLocation(datatype);
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

    fieldName = 'inputParameters';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setInputParameters(datatype);
    }

    fieldName = 'scoring';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setScoring(datatype);
    }

    fieldName = 'improvementNotation';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setImprovementNotation(datatype);
    }

    fieldName = 'group';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: MeasureReportGroupComponent | undefined = MeasureReportGroupComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addGroup(component);
          }
        });
      }
    }

    fieldName = 'supplementalData';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addSupplementalData(datatype);
          }
        });
      }
  }

    fieldName = 'evaluatedResource';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addEvaluatedResource(datatype);
          }
        });
      }
  }

    return instance;
  }

  /**
   * MeasureReport.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Additional identifier for the MeasureReport
   * - **Definition:** A formal identifier that is used to identify this MeasureReport when it is represented in other formats or referenced in a specification, model, design or an instance.
   * - **Comment:** Typically, this is used for identifiers that can go in an HL7 V3 II data type - e.g. to identify this {{title}} outside of FHIR, where the logical URL is not possible to use.
   * - **Requirements:** Allows externally provided and/or usable business identifiers to be easily associated with the module.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier[] | undefined;

  /**
   * FHIR CodeSystem: MeasureReportStatus
   *
   * @see {@link MeasureReportStatusEnum }
   */
  private readonly measureReportStatusEnum: MeasureReportStatusEnum;

  /**
   * MeasureReport.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** complete | pending | error
   * - **Definition:** The MeasureReport status. No data will be available until the MeasureReport status is complete.
   * - **Comment:** This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** true
   * - **isModifierReason:** This element is labelled as a modifier because it is a status element that contains status entered-in-error which means that the resource should not be treated as valid
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link MeasureReportStatusEnum }
   */
  private status: EnumCodeType | null;

  /**
   * FHIR CodeSystem: MeasureReportType
   *
   * @see {@link MeasureReportTypeEnum }
   */
  private readonly measureReportTypeEnum: MeasureReportTypeEnum;

  /**
   * MeasureReport.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** individual | subject-list | summary | data-exchange
   * - **Definition:** The type of measure report. This may be an individual report, which provides the score for the measure for an individual member of the population; a subject-listing, which returns the list of members that meet the various criteria in the measure; a summary report, which returns a population count for each of the criteria in the measure; or a data-collection, which enables the MeasureReport to be used to exchange the data-of-interest for a quality measure.
   * - **Comment:** Data-exchange reports are used only to communicate data-of-interest for a measure. They do not necessarily include all the data for a particular subject or population, but they may.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link MeasureReportTypeEnum }
   */
  private type_: EnumCodeType | null;

  /**
   * FHIR CodeSystem: SubmitDataUpdateType
   *
   * @see {@link SubmitDataUpdateTypeEnum }
   */
  private readonly submitDataUpdateTypeEnum: SubmitDataUpdateTypeEnum;

  /**
   * MeasureReport.dataUpdateType Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** incremental | snapshot
   * - **Definition:** Indicates whether the data submitted in a data-exchange report represents a snapshot or incremental update. A snapshot update replaces all previously submitted data for the receiver, whereas an incremental update represents only updated and/or changed data and should be applied as a differential update to the existing submitted data for the receiver.
   * - **Comment:** This element only applies to Data-collection reports used to communicate the data-of-interest for a measure
   * - **Requirements:** Allows receiving systems to support incremental exchange of data, reducing overall bandwidth requirements.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** true
   * - **isModifierReason:** This element determines whether the data in a data-exchange measure report is a snapshot or incremental update and is required in order to correctly apply the data update to a receiving system
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link SubmitDataUpdateTypeEnum }
   */
  private dataUpdateType?: EnumCodeType | undefined;

  /**
   * MeasureReport.measure Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** What measure was calculated
   * - **Definition:** A reference to the Measure that was calculated to produce this report.
   * - **FHIR Type:** `canonical`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Measure',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private measure?: CanonicalType | undefined;

  /**
   * MeasureReport.subject Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** What individual(s) the report is for
   * - **Definition:** Optional subject identifying the individual or individuals the report is for.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/CareTeam',
   *       'http://hl7.org/fhir/StructureDefinition/Device',
   *       'http://hl7.org/fhir/StructureDefinition/Group',
   *       'http://hl7.org/fhir/StructureDefinition/HealthcareService',
   *       'http://hl7.org/fhir/StructureDefinition/Location',
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *       'http://hl7.org/fhir/StructureDefinition/RelatedPerson',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private subject?: Reference | undefined;

  /**
   * MeasureReport.date Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When the measure was calculated
   * - **Definition:** The date this measure was calculated.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private date?: DateTimeType | undefined;

  /**
   * MeasureReport.reporter Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who is reporting the data
   * - **Definition:** The individual or organization that is reporting the data.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *       'http://hl7.org/fhir/StructureDefinition/Group',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private reporter?: Reference | undefined;

  /**
   * MeasureReport.reportingVendor Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** What vendor prepared the data
   * - **Definition:** A reference to the vendor who queried the data, calculated results and/or generated the report. The \'reporting vendor\' is intended to represent the submitting entity when it is not the same as the reporting entity. This extension is used when the Receiver is interested in getting vendor information in the report.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private reportingVendor?: Reference | undefined;

  /**
   * MeasureReport.location Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Where the reported data is from
   * - **Definition:** A reference to the location for which the data is being reported.
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
   * MeasureReport.period Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** What period the report covers
   * - **Definition:** The reporting period for which the report was calculated.
   * - **FHIR Type:** `Period`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private period: Period | null;

  /**
   * MeasureReport.inputParameters Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** What parameters were provided to the report
   * - **Definition:** A reference to a Parameters resource (typically represented using a contained resource) that represents any input parameters that were provided to the operation that generated the report.
   * - **Comment:** Whenever an operation returns a MeasureReport, the IN parameters from that operation can be returned to the caller of the operation using MeasureReport.inputParameters. Operations include but are not limited to $evaluate-measure, $care-gaps, $data-requirements, and $collect-data. The inputParameters can also be used in a MeasureReport used to define a test case (i.e., not as a result of an operation).
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Parameters',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private inputParameters?: Reference | undefined;

  /**
   * MeasureReport.scoring Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** What scoring method (e.g. proportion, ratio, continuous-variable)
   * - **Definition:** Indicates how the calculation is performed for the measure, including proportion, ratio, continuous-variable, and cohort. The value set is extensible, allowing additional measure scoring types to be represented. It is expected to be the same as the scoring element on the referenced Measure.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** true
   * - **isModifierReason:** Scoring determines what method was used to calculate the measure score and is required for correct interpretation of the score
   * - **isSummary:** true
   */
  private scoring?: CodeableConcept | undefined;

  /**
   * MeasureReport.improvementNotation Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** increase | decrease
   * - **Definition:** Whether improvement in the measure is noted by an increase or decrease in the measure score.
   * - **Comment:** This element is typically defined by the measure, but reproduced here to ensure the measure score can be interpreted. The element is labeled as a modifier because it changes the interpretation of the reported measure score. Note also that a MeasureReport instance includes the improvementNotation as defined by the Measure being reported. It is duplicated in the MeasureReport because it is a critical aspect of interpreting the measure score but it is not intended to reflect whether the measure report is an increase or decrease. It helps interpret if the measure score is an increase or decrease, I.e., moving in the direction of the desired outcome.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** true
   * - **isModifierReason:** Improvement notation determines how to interpret the measure score (i.e. whether an increase is an improvement)
   * - **isSummary:** true
   */
  private improvementNotation?: CodeableConcept | undefined;

  /**
   * MeasureReport.group Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Measure results for each group
   * - **Definition:** The results of the calculation, one for each population group in the measure.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private group?: MeasureReportGroupComponent[] | undefined;

  /**
   * MeasureReport.supplementalData Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Additional information collected for the report
   * - **Definition:** A reference to a Resource that represents additional information collected for the report. If the value of the supplemental data is not a Resource (i.e. evaluating the supplementalData expression for this case in the measure results in a value that is not a FHIR Resource), it is reported as a reference to a contained Observation resource.
   * - **Comment:** For individual measure reports, the supplementalData elements represent the direct result of evaluating the supplementalData expression for the subject of the report. For summary reports, supplementalData is reported as references to contained Observation resources that represent the number of times each value appeared as a supplementalData result for members of the population.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Resource',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private supplementalData?: Reference[] | undefined;

  /**
   * MeasureReport.evaluatedResource Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** What data was used to calculate the measure score
   * - **Definition:** Evaluated resources are used to capture what data was involved in the calculation of a measure. This usage is only allowed for individual reports to ensure that the size of the MeasureReport resource is bounded.
   * - **Comment:** Evaluated resources are only reported for individual reports.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Resource',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private evaluatedResource?: Reference[] | undefined;

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
      const optErrMsg = `Invalid MeasureReport.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid MeasureReport.identifier; Provided element is not an instance of Identifier.`;
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
   * @returns the `status` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link MeasureReportStatusEnum }
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
   * @see CodeSystem Enumeration: {@link MeasureReportStatusEnum }
   */
  public setStatusEnumType(enumType: EnumCodeType | undefined | null): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid MeasureReport.status`;
      assertEnumCodeType<MeasureReportStatusEnum>(enumType, MeasureReportStatusEnum, errMsgPrefix);
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
   * @see CodeSystem Enumeration: {@link MeasureReportStatusEnum }
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
   * @see CodeSystem Enumeration: {@link MeasureReportStatusEnum }
   */
  public setStatusElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid MeasureReport.status; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.status = new EnumCodeType(element, this.measureReportStatusEnum);
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
   * @see CodeSystem Enumeration: {@link MeasureReportStatusEnum }
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
   * @see CodeSystem Enumeration: {@link MeasureReportStatusEnum }
   */
  public setStatus(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid MeasureReport.status (${String(value)})`;
      this.status = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.measureReportStatusEnum);
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
   * @returns the `type_` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link MeasureReportTypeEnum }
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
   * @see CodeSystem Enumeration: {@link MeasureReportTypeEnum }
   */
  public setTypeEnumType(enumType: EnumCodeType | undefined | null): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid MeasureReport.type`;
      assertEnumCodeType<MeasureReportTypeEnum>(enumType, MeasureReportTypeEnum, errMsgPrefix);
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
   * @see CodeSystem Enumeration: {@link MeasureReportTypeEnum }
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
   * @see CodeSystem Enumeration: {@link MeasureReportTypeEnum }
   */
  public setTypeElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid MeasureReport.type; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.type_ = new EnumCodeType(element, this.measureReportTypeEnum);
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
   * @see CodeSystem Enumeration: {@link MeasureReportTypeEnum }
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
   * @see CodeSystem Enumeration: {@link MeasureReportTypeEnum }
   */
  public setType(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid MeasureReport.type (${String(value)})`;
      this.type_ = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.measureReportTypeEnum);
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
   * @returns the `dataUpdateType` property value as a EnumCodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link SubmitDataUpdateTypeEnum }
   */
  public getDataUpdateTypeEnumType(): EnumCodeType | undefined {
    return this.dataUpdateType;
  }

  /**
   * Assigns the provided EnumCodeType value to the `dataUpdateType` property.
   *
   * @param enumType - the `dataUpdateType` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code values
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link SubmitDataUpdateTypeEnum }
   */
  public setDataUpdateTypeEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = 'Invalid MeasureReport.dataUpdateType';
      assertEnumCodeType<SubmitDataUpdateTypeEnum>(enumType, SubmitDataUpdateTypeEnum, errMsgPrefix);
      this.dataUpdateType = enumType;
    } else {
      this.dataUpdateType = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `dataUpdateType` property exists and has a value; `false` otherwise
   */
  public hasDataUpdateTypeEnumType(): boolean {
    return isDefined<EnumCodeType>(this.dataUpdateType) && !this.dataUpdateType.isEmpty() && this.dataUpdateType.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `dataUpdateType` property value as a CodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link SubmitDataUpdateTypeEnum }
   */
  public getDataUpdateTypeElement(): CodeType | undefined {
    if (this.dataUpdateType === undefined) {
      return undefined;
    }
    return this.dataUpdateType as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `dataUpdateType` property.
   *
   * @param element - the `dataUpdateType` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link SubmitDataUpdateTypeEnum }
   */
  public setDataUpdateTypeElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid MeasureReport.dataUpdateType; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.dataUpdateType = new EnumCodeType(element, this.submitDataUpdateTypeEnum);
    } else {
      this.dataUpdateType = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `dataUpdateType` property exists and has a value; `false` otherwise
   */
  public hasDataUpdateTypeElement(): boolean {
    return this.hasDataUpdateTypeEnumType();
  }

  /**
   * @returns the `dataUpdateType` property value as a fhirCode if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link SubmitDataUpdateTypeEnum }
   */
  public getDataUpdateType(): fhirCode | undefined {
    if (this.dataUpdateType === undefined) {
      return undefined;
    }
    return this.dataUpdateType.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `dataUpdateType` property.
   *
   * @param value - the `dataUpdateType` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link SubmitDataUpdateTypeEnum }
   */
  public setDataUpdateType(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid MeasureReport.dataUpdateType; Provided value is not an instance of fhirCode.`;
      this.dataUpdateType = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.submitDataUpdateTypeEnum);
    } else {
      this.dataUpdateType = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `dataUpdateType` property exists and has a value; `false` otherwise
   */
  public hasDataUpdateType(): boolean {
    return this.hasDataUpdateTypeEnumType();
  }

  /**
   * @returns the `measure` property value as a CanonicalType object if defined; else an empty CanonicalType object
   */
  public getMeasureElement(): CanonicalType {
    return this.measure ?? new CanonicalType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `measure` property.
   *
   * @param element - the `measure` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setMeasureElement(element: CanonicalType | undefined): this {
    if (isDefined<CanonicalType>(element)) {
      const optErrMsg = `Invalid MeasureReport.measure; Provided element is not an instance of CanonicalType.`;
      assertFhirType<CanonicalType>(element, CanonicalType, optErrMsg);
      this.measure = element;
    } else {
      this.measure = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `measure` property exists and has a value; `false` otherwise
   */
  public hasMeasureElement(): boolean {
    return isDefined<CanonicalType>(this.measure) && !this.measure.isEmpty();
  }

  /**
   * @returns the `measure` property value as a fhirCanonical if defined; else undefined
   */
  public getMeasure(): fhirCanonical | undefined {
    return this.measure?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `measure` property.
   *
   * @param value - the `measure` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setMeasure(value: fhirCanonical | undefined): this {
    if (isDefined<fhirCanonical>(value)) {
      const optErrMsg = `Invalid MeasureReport.measure (${String(value)})`;
      this.measure = new CanonicalType(parseFhirPrimitiveData(value, fhirCanonicalSchema, optErrMsg));
    } else {
      this.measure = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `measure` property exists and has a value; `false` otherwise
   */
  public hasMeasure(): boolean {
    return this.hasMeasureElement();
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
   * @decorator `@ReferenceTargets('MeasureReport.subject', ['CareTeam','Device','Group','HealthcareService','Location','Organization','Patient','Practitioner','PractitionerRole','RelatedPerson',])`
   *
   * @param value - the `subject` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MeasureReport.subject', [
    'CareTeam',
  
    'Device',
  
    'Group',
  
    'HealthcareService',
  
    'Location',
  
    'Organization',
  
    'Patient',
  
    'Practitioner',
  
    'PractitionerRole',
  
    'RelatedPerson',
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
      const optErrMsg = `Invalid MeasureReport.date; Provided element is not an instance of DateTimeType.`;
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
      const optErrMsg = `Invalid MeasureReport.date (${String(value)})`;
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
   * @returns the `reporter` property value as a Reference object; else an empty Reference object
   */
  public getReporter(): Reference {
    return this.reporter ?? new Reference();
  }

  /**
   * Assigns the provided Reporter object value to the `reporter` property.
   *
   * @decorator `@ReferenceTargets('MeasureReport.reporter', ['Practitioner','PractitionerRole','Organization','Group',])`
   *
   * @param value - the `reporter` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MeasureReport.reporter', [
    'Practitioner',
  
    'PractitionerRole',
  
    'Organization',
  
    'Group',
  ])
  public setReporter(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.reporter = value;
    } else {
      this.reporter = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `reporter` property exists and has a value; `false` otherwise
   */
  public hasReporter(): boolean {
    return isDefined<Reference>(this.reporter) && !this.reporter.isEmpty();
  }

  /**
   * @returns the `reportingVendor` property value as a Reference object; else an empty Reference object
   */
  public getReportingVendor(): Reference {
    return this.reportingVendor ?? new Reference();
  }

  /**
   * Assigns the provided ReportingVendor object value to the `reportingVendor` property.
   *
   * @decorator `@ReferenceTargets('MeasureReport.reportingVendor', ['Organization',])`
   *
   * @param value - the `reportingVendor` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MeasureReport.reportingVendor', [
    'Organization',
  ])
  public setReportingVendor(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.reportingVendor = value;
    } else {
      this.reportingVendor = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `reportingVendor` property exists and has a value; `false` otherwise
   */
  public hasReportingVendor(): boolean {
    return isDefined<Reference>(this.reportingVendor) && !this.reportingVendor.isEmpty();
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
   * @decorator `@ReferenceTargets('MeasureReport.location', ['Location',])`
   *
   * @param value - the `location` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MeasureReport.location', [
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
      const optErrMsg = `Invalid MeasureReport.period; Provided element is not an instance of Period.`;
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

  /**
   * @returns the `inputParameters` property value as a Reference object; else an empty Reference object
   */
  public getInputParameters(): Reference {
    return this.inputParameters ?? new Reference();
  }

  /**
   * Assigns the provided InputParameters object value to the `inputParameters` property.
   *
   * @decorator `@ReferenceTargets('MeasureReport.inputParameters', ['Parameters',])`
   *
   * @param value - the `inputParameters` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MeasureReport.inputParameters', [
    'Parameters',
  ])
  public setInputParameters(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.inputParameters = value;
    } else {
      this.inputParameters = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `inputParameters` property exists and has a value; `false` otherwise
   */
  public hasInputParameters(): boolean {
    return isDefined<Reference>(this.inputParameters) && !this.inputParameters.isEmpty();
  }

  /**
   * @returns the `scoring` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getScoring(): CodeableConcept {
    return this.scoring ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Scoring object value to the `scoring` property.
   *
   * @param value - the `scoring` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setScoring(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid MeasureReport.scoring; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.scoring = value;
    } else {
      this.scoring = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `scoring` property exists and has a value; `false` otherwise
   */
  public hasScoring(): boolean {
    return isDefined<CodeableConcept>(this.scoring) && !this.scoring.isEmpty();
  }

  /**
   * @returns the `improvementNotation` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getImprovementNotation(): CodeableConcept {
    return this.improvementNotation ?? new CodeableConcept();
  }

  /**
   * Assigns the provided ImprovementNotation object value to the `improvementNotation` property.
   *
   * @param value - the `improvementNotation` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setImprovementNotation(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid MeasureReport.improvementNotation; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.improvementNotation = value;
    } else {
      this.improvementNotation = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `improvementNotation` property exists and has a value; `false` otherwise
   */
  public hasImprovementNotation(): boolean {
    return isDefined<CodeableConcept>(this.improvementNotation) && !this.improvementNotation.isEmpty();
  }

  /**
   * @returns the `group` property value as a MeasureReportGroupComponent array
   */
  public getGroup(): MeasureReportGroupComponent[] {
    return this.group ?? ([] as MeasureReportGroupComponent[]);
  }

  /**
   * Assigns the provided MeasureReportGroupComponent array value to the `group` property.
   *
   * @param value - the `group` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setGroup(value: MeasureReportGroupComponent[] | undefined): this {
    if (isDefinedList<MeasureReportGroupComponent>(value)) {
      const optErrMsg = `Invalid MeasureReport.group; Provided value array has an element that is not an instance of MeasureReportGroupComponent.`;
      assertFhirTypeList<MeasureReportGroupComponent>(value, MeasureReportGroupComponent, optErrMsg);
      this.group = value;
    } else {
      this.group = undefined;
    }
    return this;
  }

  /**
   * Add the provided MeasureReportGroupComponent value to the `group` array property.
   *
   * @param value - the `group` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addGroup(value: MeasureReportGroupComponent | undefined): this {
    if (isDefined<MeasureReportGroupComponent>(value)) {
      const optErrMsg = `Invalid MeasureReport.group; Provided element is not an instance of MeasureReportGroupComponent.`;
      assertFhirType<MeasureReportGroupComponent>(value, MeasureReportGroupComponent, optErrMsg);
      this.initGroup();
      this.group?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `group` property exists and has a value; `false` otherwise
   */
  public hasGroup(): boolean {
    return isDefinedList<MeasureReportGroupComponent>(this.group) && this.group.some((item: MeasureReportGroupComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `group` property
   */
  private initGroup(): void {
    if(!this.hasGroup()) {
      this.group = [] as MeasureReportGroupComponent[];
    }
  }

  /**
   * @returns the `supplementalData` property value as a Reference array
   */
  public getSupplementalData(): Reference[] {
    return this.supplementalData ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `supplementalData` property.
   *
   * @decorator `@ReferenceTargets('MeasureReport.supplementalData', ['Resource',])`
   *
   * @param value - the `supplementalData` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MeasureReport.supplementalData', [
    'Resource',
  ])
  public setSupplementalData(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.supplementalData = value;
    } else {
      this.supplementalData = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `supplementalData` array property.
   *
   * @decorator `@ReferenceTargets('MeasureReport.supplementalData', ['Resource',])`
   *
   * @param value - the `supplementalData` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MeasureReport.supplementalData', [
    'Resource',
  ])
  public addSupplementalData(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initSupplementalData();
      this.supplementalData?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `supplementalData` property exists and has a value; `false` otherwise
   */
  public hasSupplementalData(): boolean {
    return isDefinedList<Reference>(this.supplementalData) && this.supplementalData.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `supplementalData` property
   */
  private initSupplementalData(): void {
    if (!this.hasSupplementalData()) {
      this.supplementalData = [] as Reference[];
    }
  }

  /**
   * @returns the `evaluatedResource` property value as a Reference array
   */
  public getEvaluatedResource(): Reference[] {
    return this.evaluatedResource ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `evaluatedResource` property.
   *
   * @decorator `@ReferenceTargets('MeasureReport.evaluatedResource', ['Resource',])`
   *
   * @param value - the `evaluatedResource` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MeasureReport.evaluatedResource', [
    'Resource',
  ])
  public setEvaluatedResource(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.evaluatedResource = value;
    } else {
      this.evaluatedResource = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `evaluatedResource` array property.
   *
   * @decorator `@ReferenceTargets('MeasureReport.evaluatedResource', ['Resource',])`
   *
   * @param value - the `evaluatedResource` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MeasureReport.evaluatedResource', [
    'Resource',
  ])
  public addEvaluatedResource(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initEvaluatedResource();
      this.evaluatedResource?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `evaluatedResource` property exists and has a value; `false` otherwise
   */
  public hasEvaluatedResource(): boolean {
    return isDefinedList<Reference>(this.evaluatedResource) && this.evaluatedResource.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `evaluatedResource` property
   */
  private initEvaluatedResource(): void {
    if (!this.hasEvaluatedResource()) {
      this.evaluatedResource = [] as Reference[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'MeasureReport';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identifier,
      this.status,
      this.type_,
      this.dataUpdateType,
      this.measure,
      this.subject,
      this.date,
      this.reporter,
      this.reportingVendor,
      this.location,
      this.period,
      this.inputParameters,
      this.scoring,
      this.improvementNotation,
      this.group,
      this.supplementalData,
      this.evaluatedResource,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.status, this.type_, this.period, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): MeasureReport {
    const dest = new MeasureReport();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: MeasureReport): void {
    super.copyValues(dest);
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    dest.status = this.status ? this.status.copy() : null;
    dest.type_ = this.type_ ? this.type_.copy() : null;
    dest.dataUpdateType = this.dataUpdateType?.copy();
    dest.measure = this.measure?.copy();
    dest.subject = this.subject?.copy();
    dest.date = this.date?.copy();
    dest.reporter = this.reporter?.copy();
    dest.reportingVendor = this.reportingVendor?.copy();
    dest.location = this.location?.copy();
    dest.period = this.period ? this.period.copy() : null;
    dest.inputParameters = this.inputParameters?.copy();
    dest.scoring = this.scoring?.copy();
    dest.improvementNotation = this.improvementNotation?.copy();
    const groupList = copyListValues<MeasureReportGroupComponent>(this.group);
    dest.group = groupList.length === 0 ? undefined : groupList;
    const supplementalDataList = copyListValues<Reference>(this.supplementalData);
    dest.supplementalData = supplementalDataList.length === 0 ? undefined : supplementalDataList;
    const evaluatedResourceList = copyListValues<Reference>(this.evaluatedResource);
    dest.evaluatedResource = evaluatedResourceList.length === 0 ? undefined : evaluatedResourceList;
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

    if (this.hasStatusElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getStatusElement()!, 'status', jsonObj);
    }

    if (this.hasTypeElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getTypeElement()!, 'type', jsonObj);
    }

    if (this.hasDataUpdateTypeElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getDataUpdateTypeElement()!, 'dataUpdateType', jsonObj);
    }

    if (this.hasMeasureElement()) {
      setFhirPrimitiveJson<fhirCanonical>(this.getMeasureElement(), 'measure', jsonObj);
    }

    if (this.hasSubject()) {
      setFhirComplexJson(this.getSubject(), 'subject', jsonObj);
    }

    if (this.hasDateElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getDateElement(), 'date', jsonObj);
    }

    if (this.hasReporter()) {
      setFhirComplexJson(this.getReporter(), 'reporter', jsonObj);
    }

    if (this.hasReportingVendor()) {
      setFhirComplexJson(this.getReportingVendor(), 'reportingVendor', jsonObj);
    }

    if (this.hasLocation()) {
      setFhirComplexJson(this.getLocation(), 'location', jsonObj);
    }

    if (this.hasPeriod()) {
      setFhirComplexJson(this.getPeriod(), 'period', jsonObj);
    }

    if (this.hasInputParameters()) {
      setFhirComplexJson(this.getInputParameters(), 'inputParameters', jsonObj);
    }

    if (this.hasScoring()) {
      setFhirComplexJson(this.getScoring(), 'scoring', jsonObj);
    }

    if (this.hasImprovementNotation()) {
      setFhirComplexJson(this.getImprovementNotation(), 'improvementNotation', jsonObj);
    }

    if (this.hasGroup()) {
      setFhirBackboneElementListJson(this.getGroup(), 'group', jsonObj);
    }

    if (this.hasSupplementalData()) {
      setFhirComplexListJson(this.getSupplementalData(), 'supplementalData', jsonObj);
    }

    if (this.hasEvaluatedResource()) {
      setFhirComplexListJson(this.getEvaluatedResource(), 'evaluatedResource', jsonObj);
    }

    return jsonObj;
  }
}

/**
 * MeasureReportGroupComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Measure results for each group
 * - **Definition:** The results of the calculation, one for each population group in the measure.
 *
 * @category Data Models: Resource
 * @see [FHIR MeasureReport](http://hl7.org/fhir/StructureDefinition/MeasureReport)
 */
export class MeasureReportGroupComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `MeasureReportGroupComponent` JSON to instantiate the MeasureReportGroupComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `MeasureReportGroupComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to MeasureReportGroupComponent
   * @returns MeasureReportGroupComponent data model or undefined for `MeasureReportGroupComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): MeasureReportGroupComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'MeasureReportGroupComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new MeasureReportGroupComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    const classMetadata: DecoratorMetadataObject | null = MeasureReportGroupComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for MeasureReportGroupComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    fieldName = 'linkId';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setLinkIdElement(datatype);
    }

    fieldName = 'code';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setCode(datatype);
    }

    fieldName = 'subject';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setSubject(datatype);
    }

    fieldName = 'population';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: MeasureReportGroupPopulationComponent | undefined = MeasureReportGroupPopulationComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addPopulation(component);
          }
        });
      }
    }

    fieldName = 'measureScore[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const measureScore: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setMeasureScore(measureScore);

    fieldName = 'stratifier';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: MeasureReportGroupStratifierComponent | undefined = MeasureReportGroupStratifierComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addStratifier(component);
          }
        });
      }
    }

    return instance;
  }

  /**
   * MeasureReport.group.linkId Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Pointer to specific group from Measure
   * - **Definition:** The group from the Measure that corresponds to this group in the MeasureReport resource.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private linkId?: StringType | undefined;

  /**
   * MeasureReport.group.code Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Meaning of the group
   * - **Definition:** The meaning of the population group as defined in the measure definition.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private code?: CodeableConcept | undefined;

  /**
   * MeasureReport.group.subject Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** What individual(s) the report is for
   * - **Definition:** Optional subject identifying the individual or individuals the report is for.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/CareTeam',
   *       'http://hl7.org/fhir/StructureDefinition/Device',
   *       'http://hl7.org/fhir/StructureDefinition/Group',
   *       'http://hl7.org/fhir/StructureDefinition/HealthcareService',
   *       'http://hl7.org/fhir/StructureDefinition/Location',
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *       'http://hl7.org/fhir/StructureDefinition/RelatedPerson',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private subject?: Reference | undefined;

  /**
   * MeasureReport.group.population Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The populations in the group
   * - **Definition:** The populations that make up the population group, one for each type of population appropriate for the measure.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private population?: MeasureReportGroupPopulationComponent[] | undefined;

  /**
   * MeasureReport.group.measureScore[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('MeasureReport.group.measureScore[x]', ['Quantity','dateTime','CodeableConcept','Period','Range','Duration',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** What score this group achieved
   * - **Definition:** The measure score for this population group, calculated as appropriate for the measure type and scoring method, and based on the contents of the populations defined in the group.
   * - **FHIR Types:**
   *     'Quantity',
   *     'dateTime',
   *     'CodeableConcept',
   *     'Period',
   *     'Range',
   *     'Duration',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  @ChoiceDataTypesMeta('MeasureReport.group.measureScore[x]',[
    'Quantity',
    'dateTime',
    'CodeableConcept',
    'Period',
    'Range',
    'Duration',
  ])
  private measureScore?: IDataType | undefined;

  /**
   * MeasureReport.group.stratifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Stratification results
   * - **Definition:** When a measure includes multiple stratifiers, there will be a stratifier group for each stratifier defined by the measure.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private stratifier?: MeasureReportGroupStratifierComponent[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `linkId` property value as a StringType object if defined; else an empty StringType object
   */
  public getLinkIdElement(): StringType {
    return this.linkId ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `linkId` property.
   *
   * @param element - the `linkId` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setLinkIdElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid MeasureReport.group.linkId; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.linkId = element;
    } else {
      this.linkId = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `linkId` property exists and has a value; `false` otherwise
   */
  public hasLinkIdElement(): boolean {
    return isDefined<StringType>(this.linkId) && !this.linkId.isEmpty();
  }

  /**
   * @returns the `linkId` property value as a fhirString if defined; else undefined
   */
  public getLinkId(): fhirString | undefined {
    return this.linkId?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `linkId` property.
   *
   * @param value - the `linkId` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setLinkId(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid MeasureReport.group.linkId (${String(value)})`;
      this.linkId = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.linkId = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `linkId` property exists and has a value; `false` otherwise
   */
  public hasLinkId(): boolean {
    return this.hasLinkIdElement();
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
      const optErrMsg = `Invalid MeasureReport.group.code; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `subject` property value as a Reference object; else an empty Reference object
   */
  public getSubject(): Reference {
    return this.subject ?? new Reference();
  }

  /**
   * Assigns the provided Subject object value to the `subject` property.
   *
   * @decorator `@ReferenceTargets('MeasureReport.group.subject', ['CareTeam','Device','Group','HealthcareService','Location','Organization','Patient','Practitioner','PractitionerRole','RelatedPerson',])`
   *
   * @param value - the `subject` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MeasureReport.group.subject', [
    'CareTeam',
  
    'Device',
  
    'Group',
  
    'HealthcareService',
  
    'Location',
  
    'Organization',
  
    'Patient',
  
    'Practitioner',
  
    'PractitionerRole',
  
    'RelatedPerson',
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
   * @returns the `population` property value as a MeasureReportGroupPopulationComponent array
   */
  public getPopulation(): MeasureReportGroupPopulationComponent[] {
    return this.population ?? ([] as MeasureReportGroupPopulationComponent[]);
  }

  /**
   * Assigns the provided MeasureReportGroupPopulationComponent array value to the `population` property.
   *
   * @param value - the `population` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPopulation(value: MeasureReportGroupPopulationComponent[] | undefined): this {
    if (isDefinedList<MeasureReportGroupPopulationComponent>(value)) {
      const optErrMsg = `Invalid MeasureReport.group.population; Provided value array has an element that is not an instance of MeasureReportGroupPopulationComponent.`;
      assertFhirTypeList<MeasureReportGroupPopulationComponent>(value, MeasureReportGroupPopulationComponent, optErrMsg);
      this.population = value;
    } else {
      this.population = undefined;
    }
    return this;
  }

  /**
   * Add the provided MeasureReportGroupPopulationComponent value to the `population` array property.
   *
   * @param value - the `population` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addPopulation(value: MeasureReportGroupPopulationComponent | undefined): this {
    if (isDefined<MeasureReportGroupPopulationComponent>(value)) {
      const optErrMsg = `Invalid MeasureReport.group.population; Provided element is not an instance of MeasureReportGroupPopulationComponent.`;
      assertFhirType<MeasureReportGroupPopulationComponent>(value, MeasureReportGroupPopulationComponent, optErrMsg);
      this.initPopulation();
      this.population?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `population` property exists and has a value; `false` otherwise
   */
  public hasPopulation(): boolean {
    return isDefinedList<MeasureReportGroupPopulationComponent>(this.population) && this.population.some((item: MeasureReportGroupPopulationComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `population` property
   */
  private initPopulation(): void {
    if(!this.hasPopulation()) {
      this.population = [] as MeasureReportGroupPopulationComponent[];
    }
  }

  /**
   * @returns the `measureScore` property value as a DataType object if defined; else undefined
   */
  public getMeasureScore(): IDataType | undefined {
    return this.measureScore;
  }

  /**
   * Assigns the provided DataType object value to the `measureScore` property.
   *
   * @decorator `@ChoiceDataTypes('MeasureReport.group.measureScore[x]')`
   *
   * @param value - the `measureScore` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('MeasureReport.group.measureScore[x]')
  public setMeasureScore(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.measureScore = value;
    } else {
      this.measureScore = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `measureScore` property exists and has a value; `false` otherwise
   */
  public hasMeasureScore(): boolean {
    return isDefined<IDataType>(this.measureScore) && !this.measureScore.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `measureScore` property value as a Quantity object if defined; else undefined
   */
  public getMeasureScoreQuantity(): Quantity | undefined {
    if (!isDefined<IDataType | undefined>(this.measureScore)) {
      return undefined;
    }
    if (!(this.measureScore instanceof Quantity)) {
      throw new InvalidTypeError(
        `DataType mismatch for MeasureReport.group.measureScore[x]: Expected Quantity but encountered ${this.measureScore.fhirType()}`,
      );
    }
    return this.measureScore;
  }

  /**
   * @returns `true` if the `measureScore` property exists as a Quantity and has a value; `false` otherwise
   */
  public hasMeasureScoreQuantity(): boolean {
    return this.hasMeasureScore() && this.measureScore instanceof Quantity;
  }

  /**
   * @returns the `measureScore` property value as a DateTimeType object if defined; else undefined
   */
  public getMeasureScoreDateTimeType(): DateTimeType | undefined {
    if (!isDefined<IDataType | undefined>(this.measureScore)) {
      return undefined;
    }
    if (!(this.measureScore instanceof DateTimeType)) {
      throw new InvalidTypeError(
        `DataType mismatch for MeasureReport.group.measureScore[x]: Expected DateTimeType but encountered ${this.measureScore.fhirType()}`,
      );
    }
    return this.measureScore;
  }

  /**
   * @returns `true` if the `measureScore` property exists as a DateTimeType and has a value; `false` otherwise
   */
  public hasMeasureScoreDateTimeType(): boolean {
    return this.hasMeasureScore() && this.measureScore instanceof DateTimeType;
  }

  /**
   * @returns the `measureScore` property value as a CodeableConcept object if defined; else undefined
   */
  public getMeasureScoreCodeableConcept(): CodeableConcept | undefined {
    if (!isDefined<IDataType | undefined>(this.measureScore)) {
      return undefined;
    }
    if (!(this.measureScore instanceof CodeableConcept)) {
      throw new InvalidTypeError(
        `DataType mismatch for MeasureReport.group.measureScore[x]: Expected CodeableConcept but encountered ${this.measureScore.fhirType()}`,
      );
    }
    return this.measureScore;
  }

  /**
   * @returns `true` if the `measureScore` property exists as a CodeableConcept and has a value; `false` otherwise
   */
  public hasMeasureScoreCodeableConcept(): boolean {
    return this.hasMeasureScore() && this.measureScore instanceof CodeableConcept;
  }

  /**
   * @returns the `measureScore` property value as a Period object if defined; else undefined
   */
  public getMeasureScorePeriod(): Period | undefined {
    if (!isDefined<IDataType | undefined>(this.measureScore)) {
      return undefined;
    }
    if (!(this.measureScore instanceof Period)) {
      throw new InvalidTypeError(
        `DataType mismatch for MeasureReport.group.measureScore[x]: Expected Period but encountered ${this.measureScore.fhirType()}`,
      );
    }
    return this.measureScore;
  }

  /**
   * @returns `true` if the `measureScore` property exists as a Period and has a value; `false` otherwise
   */
  public hasMeasureScorePeriod(): boolean {
    return this.hasMeasureScore() && this.measureScore instanceof Period;
  }

  /**
   * @returns the `measureScore` property value as a Range object if defined; else undefined
   */
  public getMeasureScoreRange(): Range | undefined {
    if (!isDefined<IDataType | undefined>(this.measureScore)) {
      return undefined;
    }
    if (!(this.measureScore instanceof Range)) {
      throw new InvalidTypeError(
        `DataType mismatch for MeasureReport.group.measureScore[x]: Expected Range but encountered ${this.measureScore.fhirType()}`,
      );
    }
    return this.measureScore;
  }

  /**
   * @returns `true` if the `measureScore` property exists as a Range and has a value; `false` otherwise
   */
  public hasMeasureScoreRange(): boolean {
    return this.hasMeasureScore() && this.measureScore instanceof Range;
  }

  /**
   * @returns the `measureScore` property value as a Duration object if defined; else undefined
   */
  public getMeasureScoreDuration(): Duration | undefined {
    if (!isDefined<IDataType | undefined>(this.measureScore)) {
      return undefined;
    }
    if (!(this.measureScore instanceof Duration)) {
      throw new InvalidTypeError(
        `DataType mismatch for MeasureReport.group.measureScore[x]: Expected Duration but encountered ${this.measureScore.fhirType()}`,
      );
    }
    return this.measureScore;
  }

  /**
   * @returns `true` if the `measureScore` property exists as a Duration and has a value; `false` otherwise
   */
  public hasMeasureScoreDuration(): boolean {
    return this.hasMeasureScore() && this.measureScore instanceof Duration;
  }

  // End of choice datatype-specific "get"/"has" methods

  /**
   * @returns the `stratifier` property value as a MeasureReportGroupStratifierComponent array
   */
  public getStratifier(): MeasureReportGroupStratifierComponent[] {
    return this.stratifier ?? ([] as MeasureReportGroupStratifierComponent[]);
  }

  /**
   * Assigns the provided MeasureReportGroupStratifierComponent array value to the `stratifier` property.
   *
   * @param value - the `stratifier` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setStratifier(value: MeasureReportGroupStratifierComponent[] | undefined): this {
    if (isDefinedList<MeasureReportGroupStratifierComponent>(value)) {
      const optErrMsg = `Invalid MeasureReport.group.stratifier; Provided value array has an element that is not an instance of MeasureReportGroupStratifierComponent.`;
      assertFhirTypeList<MeasureReportGroupStratifierComponent>(value, MeasureReportGroupStratifierComponent, optErrMsg);
      this.stratifier = value;
    } else {
      this.stratifier = undefined;
    }
    return this;
  }

  /**
   * Add the provided MeasureReportGroupStratifierComponent value to the `stratifier` array property.
   *
   * @param value - the `stratifier` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addStratifier(value: MeasureReportGroupStratifierComponent | undefined): this {
    if (isDefined<MeasureReportGroupStratifierComponent>(value)) {
      const optErrMsg = `Invalid MeasureReport.group.stratifier; Provided element is not an instance of MeasureReportGroupStratifierComponent.`;
      assertFhirType<MeasureReportGroupStratifierComponent>(value, MeasureReportGroupStratifierComponent, optErrMsg);
      this.initStratifier();
      this.stratifier?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `stratifier` property exists and has a value; `false` otherwise
   */
  public hasStratifier(): boolean {
    return isDefinedList<MeasureReportGroupStratifierComponent>(this.stratifier) && this.stratifier.some((item: MeasureReportGroupStratifierComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `stratifier` property
   */
  private initStratifier(): void {
    if(!this.hasStratifier()) {
      this.stratifier = [] as MeasureReportGroupStratifierComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'MeasureReport.group';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.linkId,
      this.code,
      this.subject,
      this.population,
      this.measureScore,
      this.stratifier,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): MeasureReportGroupComponent {
    const dest = new MeasureReportGroupComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: MeasureReportGroupComponent): void {
    super.copyValues(dest);
    dest.linkId = this.linkId?.copy();
    dest.code = this.code?.copy();
    dest.subject = this.subject?.copy();
    const populationList = copyListValues<MeasureReportGroupPopulationComponent>(this.population);
    dest.population = populationList.length === 0 ? undefined : populationList;
    dest.measureScore = this.measureScore?.copy() as IDataType;
    const stratifierList = copyListValues<MeasureReportGroupStratifierComponent>(this.stratifier);
    dest.stratifier = stratifierList.length === 0 ? undefined : stratifierList;
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

    if (this.hasLinkIdElement()) {
      setFhirPrimitiveJson<fhirString>(this.getLinkIdElement(), 'linkId', jsonObj);
    }

    if (this.hasCode()) {
      setFhirComplexJson(this.getCode(), 'code', jsonObj);
    }

    if (this.hasSubject()) {
      setFhirComplexJson(this.getSubject(), 'subject', jsonObj);
    }

    if (this.hasPopulation()) {
      setFhirBackboneElementListJson(this.getPopulation(), 'population', jsonObj);
    }

    if (this.hasMeasureScore()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getMeasureScore()!, 'measureScore', jsonObj);
    }

    if (this.hasStratifier()) {
      setFhirBackboneElementListJson(this.getStratifier(), 'stratifier', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * MeasureReportGroupPopulationComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** The populations in the group
 * - **Definition:** The populations that make up the population group, one for each type of population appropriate for the measure.
 *
 * @category Data Models: Resource
 * @see [FHIR MeasureReport](http://hl7.org/fhir/StructureDefinition/MeasureReport)
 */
export class MeasureReportGroupPopulationComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `MeasureReportGroupPopulationComponent` JSON to instantiate the MeasureReportGroupPopulationComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `MeasureReportGroupPopulationComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to MeasureReportGroupPopulationComponent
   * @returns MeasureReportGroupPopulationComponent data model or undefined for `MeasureReportGroupPopulationComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): MeasureReportGroupPopulationComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'MeasureReportGroupPopulationComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new MeasureReportGroupPopulationComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'linkId';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setLinkIdElement(datatype);
    }

    fieldName = 'code';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setCode(datatype);
    }

    fieldName = 'count';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: IntegerType | undefined = fhirParser.parseIntegerType(dtJson, dtSiblingJson);
      instance.setCountElement(datatype);
    }

    fieldName = 'subjectResults';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setSubjectResults(datatype);
    }

    fieldName = 'subjectReport';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addSubjectReport(datatype);
          }
        });
      }
  }

    fieldName = 'subjects';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setSubjects(datatype);
    }

    return instance;
  }

  /**
   * MeasureReport.group.population.linkId Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Pointer to specific population from Measure
   * - **Definition:** The population from the Measure that corresponds to this population in the MeasureReport resource.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private linkId?: StringType | undefined;

  /**
   * MeasureReport.group.population.code Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** initial-population | numerator | numerator-exclusion | denominator | denominator-exclusion | denominator-exception | measure-population | measure-population-exclusion | measure-observation
   * - **Definition:** The type of the population.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private code?: CodeableConcept | undefined;

  /**
   * MeasureReport.group.population.count Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Size of the population
   * - **Definition:** The number of members of the population.
   * - **FHIR Type:** `integer`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private count?: IntegerType | undefined;

  /**
   * MeasureReport.group.population.subjectResults Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** For subject-list reports, the subject results in this population
   * - **Definition:** This element refers to a List of individual level MeasureReport resources, one for each subject in this population.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/List',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private subjectResults?: Reference | undefined;

  /**
   * MeasureReport.group.population.subjectReport Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** For subject-list reports, a subject result in this population
   * - **Definition:** A reference to an individual level MeasureReport resource for a member of the population.
   * - **Comment:** This element SHALL NOT be used in with subjectResults, either systems provide results as a List of MeasureReport, or as references to individual MeasureReports. Note that using this element introduces a constraint on the size of the subject-list MeasureReport; implementations would be free to return a TOO-COSTLY response if a request is made for a subject-list report with too many subjects.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/MeasureReport',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private subjectReport?: Reference[] | undefined;

  /**
   * MeasureReport.group.population.subjects Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** What individual(s) in the population
   * - **Definition:** Optional Group identifying the individuals that make up the population.
   * - **Comment:** Note that this element can only be used for summary and subject-list reports where the basis is of the same type as the populations (e.g. a Patient-based measure, rather than an Encounter-based measure). In addition, the referenced Group resource SHALL be an actual (as opposed to a definitional) group.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Group',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private subjects?: Reference | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `linkId` property value as a StringType object if defined; else an empty StringType object
   */
  public getLinkIdElement(): StringType {
    return this.linkId ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `linkId` property.
   *
   * @param element - the `linkId` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setLinkIdElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid MeasureReport.group.population.linkId; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.linkId = element;
    } else {
      this.linkId = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `linkId` property exists and has a value; `false` otherwise
   */
  public hasLinkIdElement(): boolean {
    return isDefined<StringType>(this.linkId) && !this.linkId.isEmpty();
  }

  /**
   * @returns the `linkId` property value as a fhirString if defined; else undefined
   */
  public getLinkId(): fhirString | undefined {
    return this.linkId?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `linkId` property.
   *
   * @param value - the `linkId` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setLinkId(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid MeasureReport.group.population.linkId (${String(value)})`;
      this.linkId = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.linkId = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `linkId` property exists and has a value; `false` otherwise
   */
  public hasLinkId(): boolean {
    return this.hasLinkIdElement();
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
      const optErrMsg = `Invalid MeasureReport.group.population.code; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid MeasureReport.group.population.count; Provided element is not an instance of IntegerType.`;
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
      const optErrMsg = `Invalid MeasureReport.group.population.count (${String(value)})`;
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
   * @returns the `subjectResults` property value as a Reference object; else an empty Reference object
   */
  public getSubjectResults(): Reference {
    return this.subjectResults ?? new Reference();
  }

  /**
   * Assigns the provided SubjectResults object value to the `subjectResults` property.
   *
   * @decorator `@ReferenceTargets('MeasureReport.group.population.subjectResults', ['List',])`
   *
   * @param value - the `subjectResults` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MeasureReport.group.population.subjectResults', [
    'List',
  ])
  public setSubjectResults(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.subjectResults = value;
    } else {
      this.subjectResults = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `subjectResults` property exists and has a value; `false` otherwise
   */
  public hasSubjectResults(): boolean {
    return isDefined<Reference>(this.subjectResults) && !this.subjectResults.isEmpty();
  }

  /**
   * @returns the `subjectReport` property value as a Reference array
   */
  public getSubjectReport(): Reference[] {
    return this.subjectReport ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `subjectReport` property.
   *
   * @decorator `@ReferenceTargets('MeasureReport.group.population.subjectReport', ['MeasureReport',])`
   *
   * @param value - the `subjectReport` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MeasureReport.group.population.subjectReport', [
    'MeasureReport',
  ])
  public setSubjectReport(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.subjectReport = value;
    } else {
      this.subjectReport = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `subjectReport` array property.
   *
   * @decorator `@ReferenceTargets('MeasureReport.group.population.subjectReport', ['MeasureReport',])`
   *
   * @param value - the `subjectReport` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MeasureReport.group.population.subjectReport', [
    'MeasureReport',
  ])
  public addSubjectReport(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initSubjectReport();
      this.subjectReport?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `subjectReport` property exists and has a value; `false` otherwise
   */
  public hasSubjectReport(): boolean {
    return isDefinedList<Reference>(this.subjectReport) && this.subjectReport.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `subjectReport` property
   */
  private initSubjectReport(): void {
    if (!this.hasSubjectReport()) {
      this.subjectReport = [] as Reference[];
    }
  }

  /**
   * @returns the `subjects` property value as a Reference object; else an empty Reference object
   */
  public getSubjects(): Reference {
    return this.subjects ?? new Reference();
  }

  /**
   * Assigns the provided Subjects object value to the `subjects` property.
   *
   * @decorator `@ReferenceTargets('MeasureReport.group.population.subjects', ['Group',])`
   *
   * @param value - the `subjects` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MeasureReport.group.population.subjects', [
    'Group',
  ])
  public setSubjects(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.subjects = value;
    } else {
      this.subjects = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `subjects` property exists and has a value; `false` otherwise
   */
  public hasSubjects(): boolean {
    return isDefined<Reference>(this.subjects) && !this.subjects.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'MeasureReport.group.population';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.linkId,
      this.code,
      this.count,
      this.subjectResults,
      this.subjectReport,
      this.subjects,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): MeasureReportGroupPopulationComponent {
    const dest = new MeasureReportGroupPopulationComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: MeasureReportGroupPopulationComponent): void {
    super.copyValues(dest);
    dest.linkId = this.linkId?.copy();
    dest.code = this.code?.copy();
    dest.count = this.count?.copy();
    dest.subjectResults = this.subjectResults?.copy();
    const subjectReportList = copyListValues<Reference>(this.subjectReport);
    dest.subjectReport = subjectReportList.length === 0 ? undefined : subjectReportList;
    dest.subjects = this.subjects?.copy();
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

    if (this.hasLinkIdElement()) {
      setFhirPrimitiveJson<fhirString>(this.getLinkIdElement(), 'linkId', jsonObj);
    }

    if (this.hasCode()) {
      setFhirComplexJson(this.getCode(), 'code', jsonObj);
    }

    if (this.hasCountElement()) {
      setFhirPrimitiveJson<fhirInteger>(this.getCountElement(), 'count', jsonObj);
    }

    if (this.hasSubjectResults()) {
      setFhirComplexJson(this.getSubjectResults(), 'subjectResults', jsonObj);
    }

    if (this.hasSubjectReport()) {
      setFhirComplexListJson(this.getSubjectReport(), 'subjectReport', jsonObj);
    }

    if (this.hasSubjects()) {
      setFhirComplexJson(this.getSubjects(), 'subjects', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * MeasureReportGroupStratifierComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Stratification results
 * - **Definition:** When a measure includes multiple stratifiers, there will be a stratifier group for each stratifier defined by the measure.
 *
 * @category Data Models: Resource
 * @see [FHIR MeasureReport](http://hl7.org/fhir/StructureDefinition/MeasureReport)
 */
export class MeasureReportGroupStratifierComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `MeasureReportGroupStratifierComponent` JSON to instantiate the MeasureReportGroupStratifierComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `MeasureReportGroupStratifierComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to MeasureReportGroupStratifierComponent
   * @returns MeasureReportGroupStratifierComponent data model or undefined for `MeasureReportGroupStratifierComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): MeasureReportGroupStratifierComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'MeasureReportGroupStratifierComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new MeasureReportGroupStratifierComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    fieldName = 'linkId';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setLinkIdElement(datatype);
    }

    fieldName = 'code';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setCode(datatype);
    }

    fieldName = 'stratum';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: MeasureReportGroupStratifierStratumComponent | undefined = MeasureReportGroupStratifierStratumComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addStratum(component);
          }
        });
      }
    }

    return instance;
  }

  /**
   * MeasureReport.group.stratifier.linkId Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Pointer to specific stratifier from Measure
   * - **Definition:** The stratifier from the Measure that corresponds to this stratifier in the MeasureReport resource.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private linkId?: StringType | undefined;

  /**
   * MeasureReport.group.stratifier.code Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** What stratifier of the group
   * - **Definition:** The meaning of this stratifier, as defined in the measure definition.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private code?: CodeableConcept | undefined;

  /**
   * MeasureReport.group.stratifier.stratum Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Stratum results, one for each unique value, or set of values, in the stratifier, or stratifier components
   * - **Definition:** This element contains the results for a single stratum within the stratifier. For example, when stratifying on administrative gender, there will be four strata, one for each possible gender value.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private stratum?: MeasureReportGroupStratifierStratumComponent[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `linkId` property value as a StringType object if defined; else an empty StringType object
   */
  public getLinkIdElement(): StringType {
    return this.linkId ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `linkId` property.
   *
   * @param element - the `linkId` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setLinkIdElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid MeasureReport.group.stratifier.linkId; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.linkId = element;
    } else {
      this.linkId = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `linkId` property exists and has a value; `false` otherwise
   */
  public hasLinkIdElement(): boolean {
    return isDefined<StringType>(this.linkId) && !this.linkId.isEmpty();
  }

  /**
   * @returns the `linkId` property value as a fhirString if defined; else undefined
   */
  public getLinkId(): fhirString | undefined {
    return this.linkId?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `linkId` property.
   *
   * @param value - the `linkId` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setLinkId(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid MeasureReport.group.stratifier.linkId (${String(value)})`;
      this.linkId = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.linkId = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `linkId` property exists and has a value; `false` otherwise
   */
  public hasLinkId(): boolean {
    return this.hasLinkIdElement();
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
      const optErrMsg = `Invalid MeasureReport.group.stratifier.code; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `stratum` property value as a MeasureReportGroupStratifierStratumComponent array
   */
  public getStratum(): MeasureReportGroupStratifierStratumComponent[] {
    return this.stratum ?? ([] as MeasureReportGroupStratifierStratumComponent[]);
  }

  /**
   * Assigns the provided MeasureReportGroupStratifierStratumComponent array value to the `stratum` property.
   *
   * @param value - the `stratum` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setStratum(value: MeasureReportGroupStratifierStratumComponent[] | undefined): this {
    if (isDefinedList<MeasureReportGroupStratifierStratumComponent>(value)) {
      const optErrMsg = `Invalid MeasureReport.group.stratifier.stratum; Provided value array has an element that is not an instance of MeasureReportGroupStratifierStratumComponent.`;
      assertFhirTypeList<MeasureReportGroupStratifierStratumComponent>(value, MeasureReportGroupStratifierStratumComponent, optErrMsg);
      this.stratum = value;
    } else {
      this.stratum = undefined;
    }
    return this;
  }

  /**
   * Add the provided MeasureReportGroupStratifierStratumComponent value to the `stratum` array property.
   *
   * @param value - the `stratum` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addStratum(value: MeasureReportGroupStratifierStratumComponent | undefined): this {
    if (isDefined<MeasureReportGroupStratifierStratumComponent>(value)) {
      const optErrMsg = `Invalid MeasureReport.group.stratifier.stratum; Provided element is not an instance of MeasureReportGroupStratifierStratumComponent.`;
      assertFhirType<MeasureReportGroupStratifierStratumComponent>(value, MeasureReportGroupStratifierStratumComponent, optErrMsg);
      this.initStratum();
      this.stratum?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `stratum` property exists and has a value; `false` otherwise
   */
  public hasStratum(): boolean {
    return isDefinedList<MeasureReportGroupStratifierStratumComponent>(this.stratum) && this.stratum.some((item: MeasureReportGroupStratifierStratumComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `stratum` property
   */
  private initStratum(): void {
    if(!this.hasStratum()) {
      this.stratum = [] as MeasureReportGroupStratifierStratumComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'MeasureReport.group.stratifier';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.linkId,
      this.code,
      this.stratum,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): MeasureReportGroupStratifierComponent {
    const dest = new MeasureReportGroupStratifierComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: MeasureReportGroupStratifierComponent): void {
    super.copyValues(dest);
    dest.linkId = this.linkId?.copy();
    dest.code = this.code?.copy();
    const stratumList = copyListValues<MeasureReportGroupStratifierStratumComponent>(this.stratum);
    dest.stratum = stratumList.length === 0 ? undefined : stratumList;
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

    if (this.hasLinkIdElement()) {
      setFhirPrimitiveJson<fhirString>(this.getLinkIdElement(), 'linkId', jsonObj);
    }

    if (this.hasCode()) {
      setFhirComplexJson(this.getCode(), 'code', jsonObj);
    }

    if (this.hasStratum()) {
      setFhirBackboneElementListJson(this.getStratum(), 'stratum', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * MeasureReportGroupStratifierStratumComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Stratum results, one for each unique value, or set of values, in the stratifier, or stratifier components
 * - **Definition:** This element contains the results for a single stratum within the stratifier. For example, when stratifying on administrative gender, there will be four strata, one for each possible gender value.
 *
 * @category Data Models: Resource
 * @see [FHIR MeasureReport](http://hl7.org/fhir/StructureDefinition/MeasureReport)
 */
export class MeasureReportGroupStratifierStratumComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `MeasureReportGroupStratifierStratumComponent` JSON to instantiate the MeasureReportGroupStratifierStratumComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `MeasureReportGroupStratifierStratumComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to MeasureReportGroupStratifierStratumComponent
   * @returns MeasureReportGroupStratifierStratumComponent data model or undefined for `MeasureReportGroupStratifierStratumComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): MeasureReportGroupStratifierStratumComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'MeasureReportGroupStratifierStratumComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new MeasureReportGroupStratifierStratumComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    const classMetadata: DecoratorMetadataObject | null = MeasureReportGroupStratifierStratumComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for MeasureReportGroupStratifierStratumComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    fieldName = 'value[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const value: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setValue(value);

    fieldName = 'component';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: MeasureReportGroupStratifierStratumComponentComponent | undefined = MeasureReportGroupStratifierStratumComponentComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addComponent(component);
          }
        });
      }
    }

    fieldName = 'population';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: MeasureReportGroupStratifierStratumPopulationComponent | undefined = MeasureReportGroupStratifierStratumPopulationComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addPopulation(component);
          }
        });
      }
    }

    fieldName = 'measureScore[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const measureScore: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setMeasureScore(measureScore);

    return instance;
  }

  /**
   * MeasureReport.group.stratifier.stratum.value[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('MeasureReport.group.stratifier.stratum.value[x]', ['CodeableConcept','boolean','Quantity','Range','Reference',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The stratum value, e.g. male
   * - **Definition:** The value for this stratum, expressed as a CodeableConcept. When defining stratifiers on complex values, the value must be rendered such that the value for each stratum within the stratifier is unique.
   * - **FHIR Types:**
   *     'CodeableConcept',
   *     'boolean',
   *     'Quantity',
   *     'Range',
   *     'Reference',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('MeasureReport.group.stratifier.stratum.value[x]',[
    'CodeableConcept',
    'boolean',
    'Quantity',
    'Range',
    'Reference',
  ])
  private value?: IDataType | undefined;

  /**
   * MeasureReport.group.stratifier.stratum.component Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Stratifier component values
   * - **Definition:** A stratifier component value.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private component?: MeasureReportGroupStratifierStratumComponentComponent[] | undefined;

  /**
   * MeasureReport.group.stratifier.stratum.population Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Population results in this stratum
   * - **Definition:** The populations that make up the stratum, one for each type of population appropriate to the measure.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private population?: MeasureReportGroupStratifierStratumPopulationComponent[] | undefined;

  /**
   * MeasureReport.group.stratifier.stratum.measureScore[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('MeasureReport.group.stratifier.stratum.measureScore[x]', ['Quantity','dateTime','CodeableConcept','Period','Range','Duration',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** What score this stratum achieved
   * - **Definition:** The measure score for this stratum, calculated as appropriate for the measure type and scoring method, and based on only the members of this stratum.
   * - **FHIR Types:**
   *     'Quantity',
   *     'dateTime',
   *     'CodeableConcept',
   *     'Period',
   *     'Range',
   *     'Duration',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('MeasureReport.group.stratifier.stratum.measureScore[x]',[
    'Quantity',
    'dateTime',
    'CodeableConcept',
    'Period',
    'Range',
    'Duration',
  ])
  private measureScore?: IDataType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `value` property value as a DataType object if defined; else undefined
   */
  public getValue(): IDataType | undefined {
    return this.value;
  }

  /**
   * Assigns the provided DataType object value to the `value` property.
   *
   * @decorator `@ChoiceDataTypes('MeasureReport.group.stratifier.stratum.value[x]')`
   *
   * @param value - the `value` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('MeasureReport.group.stratifier.stratum.value[x]')
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
        `DataType mismatch for MeasureReport.group.stratifier.stratum.value[x]: Expected CodeableConcept but encountered ${this.value.fhirType()}`,
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
   * @returns the `value` property value as a BooleanType object if defined; else undefined
   */
  public getValueBooleanType(): BooleanType | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof BooleanType)) {
      throw new InvalidTypeError(
        `DataType mismatch for MeasureReport.group.stratifier.stratum.value[x]: Expected BooleanType but encountered ${this.value.fhirType()}`,
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
   * @returns the `value` property value as a Quantity object if defined; else undefined
   */
  public getValueQuantity(): Quantity | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof Quantity)) {
      throw new InvalidTypeError(
        `DataType mismatch for MeasureReport.group.stratifier.stratum.value[x]: Expected Quantity but encountered ${this.value.fhirType()}`,
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
        `DataType mismatch for MeasureReport.group.stratifier.stratum.value[x]: Expected Range but encountered ${this.value.fhirType()}`,
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

  /**
   * @returns the `value` property value as a Reference object if defined; else undefined
   */
  public getValueReference(): Reference | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof Reference)) {
      throw new InvalidTypeError(
        `DataType mismatch for MeasureReport.group.stratifier.stratum.value[x]: Expected Reference but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `value` property exists as a Reference and has a value; `false` otherwise
   */
  public hasValueReference(): boolean {
    return this.hasValue() && this.value instanceof Reference;
  }

  // End of choice datatype-specific "get"/"has" methods

  /**
   * @returns the `component` property value as a MeasureReportGroupStratifierStratumComponentComponent array
   */
  public getComponent(): MeasureReportGroupStratifierStratumComponentComponent[] {
    return this.component ?? ([] as MeasureReportGroupStratifierStratumComponentComponent[]);
  }

  /**
   * Assigns the provided MeasureReportGroupStratifierStratumComponentComponent array value to the `component` property.
   *
   * @param value - the `component` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setComponent(value: MeasureReportGroupStratifierStratumComponentComponent[] | undefined): this {
    if (isDefinedList<MeasureReportGroupStratifierStratumComponentComponent>(value)) {
      const optErrMsg = `Invalid MeasureReport.group.stratifier.stratum.component; Provided value array has an element that is not an instance of MeasureReportGroupStratifierStratumComponentComponent.`;
      assertFhirTypeList<MeasureReportGroupStratifierStratumComponentComponent>(value, MeasureReportGroupStratifierStratumComponentComponent, optErrMsg);
      this.component = value;
    } else {
      this.component = undefined;
    }
    return this;
  }

  /**
   * Add the provided MeasureReportGroupStratifierStratumComponentComponent value to the `component` array property.
   *
   * @param value - the `component` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addComponent(value: MeasureReportGroupStratifierStratumComponentComponent | undefined): this {
    if (isDefined<MeasureReportGroupStratifierStratumComponentComponent>(value)) {
      const optErrMsg = `Invalid MeasureReport.group.stratifier.stratum.component; Provided element is not an instance of MeasureReportGroupStratifierStratumComponentComponent.`;
      assertFhirType<MeasureReportGroupStratifierStratumComponentComponent>(value, MeasureReportGroupStratifierStratumComponentComponent, optErrMsg);
      this.initComponent();
      this.component?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `component` property exists and has a value; `false` otherwise
   */
  public hasComponent(): boolean {
    return isDefinedList<MeasureReportGroupStratifierStratumComponentComponent>(this.component) && this.component.some((item: MeasureReportGroupStratifierStratumComponentComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `component` property
   */
  private initComponent(): void {
    if(!this.hasComponent()) {
      this.component = [] as MeasureReportGroupStratifierStratumComponentComponent[];
    }
  }

  /**
   * @returns the `population` property value as a MeasureReportGroupStratifierStratumPopulationComponent array
   */
  public getPopulation(): MeasureReportGroupStratifierStratumPopulationComponent[] {
    return this.population ?? ([] as MeasureReportGroupStratifierStratumPopulationComponent[]);
  }

  /**
   * Assigns the provided MeasureReportGroupStratifierStratumPopulationComponent array value to the `population` property.
   *
   * @param value - the `population` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPopulation(value: MeasureReportGroupStratifierStratumPopulationComponent[] | undefined): this {
    if (isDefinedList<MeasureReportGroupStratifierStratumPopulationComponent>(value)) {
      const optErrMsg = `Invalid MeasureReport.group.stratifier.stratum.population; Provided value array has an element that is not an instance of MeasureReportGroupStratifierStratumPopulationComponent.`;
      assertFhirTypeList<MeasureReportGroupStratifierStratumPopulationComponent>(value, MeasureReportGroupStratifierStratumPopulationComponent, optErrMsg);
      this.population = value;
    } else {
      this.population = undefined;
    }
    return this;
  }

  /**
   * Add the provided MeasureReportGroupStratifierStratumPopulationComponent value to the `population` array property.
   *
   * @param value - the `population` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addPopulation(value: MeasureReportGroupStratifierStratumPopulationComponent | undefined): this {
    if (isDefined<MeasureReportGroupStratifierStratumPopulationComponent>(value)) {
      const optErrMsg = `Invalid MeasureReport.group.stratifier.stratum.population; Provided element is not an instance of MeasureReportGroupStratifierStratumPopulationComponent.`;
      assertFhirType<MeasureReportGroupStratifierStratumPopulationComponent>(value, MeasureReportGroupStratifierStratumPopulationComponent, optErrMsg);
      this.initPopulation();
      this.population?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `population` property exists and has a value; `false` otherwise
   */
  public hasPopulation(): boolean {
    return isDefinedList<MeasureReportGroupStratifierStratumPopulationComponent>(this.population) && this.population.some((item: MeasureReportGroupStratifierStratumPopulationComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `population` property
   */
  private initPopulation(): void {
    if(!this.hasPopulation()) {
      this.population = [] as MeasureReportGroupStratifierStratumPopulationComponent[];
    }
  }

  /**
   * @returns the `measureScore` property value as a DataType object if defined; else undefined
   */
  public getMeasureScore(): IDataType | undefined {
    return this.measureScore;
  }

  /**
   * Assigns the provided DataType object value to the `measureScore` property.
   *
   * @decorator `@ChoiceDataTypes('MeasureReport.group.stratifier.stratum.measureScore[x]')`
   *
   * @param value - the `measureScore` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('MeasureReport.group.stratifier.stratum.measureScore[x]')
  public setMeasureScore(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.measureScore = value;
    } else {
      this.measureScore = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `measureScore` property exists and has a value; `false` otherwise
   */
  public hasMeasureScore(): boolean {
    return isDefined<IDataType>(this.measureScore) && !this.measureScore.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `measureScore` property value as a Quantity object if defined; else undefined
   */
  public getMeasureScoreQuantity(): Quantity | undefined {
    if (!isDefined<IDataType | undefined>(this.measureScore)) {
      return undefined;
    }
    if (!(this.measureScore instanceof Quantity)) {
      throw new InvalidTypeError(
        `DataType mismatch for MeasureReport.group.stratifier.stratum.measureScore[x]: Expected Quantity but encountered ${this.measureScore.fhirType()}`,
      );
    }
    return this.measureScore;
  }

  /**
   * @returns `true` if the `measureScore` property exists as a Quantity and has a value; `false` otherwise
   */
  public hasMeasureScoreQuantity(): boolean {
    return this.hasMeasureScore() && this.measureScore instanceof Quantity;
  }

  /**
   * @returns the `measureScore` property value as a DateTimeType object if defined; else undefined
   */
  public getMeasureScoreDateTimeType(): DateTimeType | undefined {
    if (!isDefined<IDataType | undefined>(this.measureScore)) {
      return undefined;
    }
    if (!(this.measureScore instanceof DateTimeType)) {
      throw new InvalidTypeError(
        `DataType mismatch for MeasureReport.group.stratifier.stratum.measureScore[x]: Expected DateTimeType but encountered ${this.measureScore.fhirType()}`,
      );
    }
    return this.measureScore;
  }

  /**
   * @returns `true` if the `measureScore` property exists as a DateTimeType and has a value; `false` otherwise
   */
  public hasMeasureScoreDateTimeType(): boolean {
    return this.hasMeasureScore() && this.measureScore instanceof DateTimeType;
  }

  /**
   * @returns the `measureScore` property value as a CodeableConcept object if defined; else undefined
   */
  public getMeasureScoreCodeableConcept(): CodeableConcept | undefined {
    if (!isDefined<IDataType | undefined>(this.measureScore)) {
      return undefined;
    }
    if (!(this.measureScore instanceof CodeableConcept)) {
      throw new InvalidTypeError(
        `DataType mismatch for MeasureReport.group.stratifier.stratum.measureScore[x]: Expected CodeableConcept but encountered ${this.measureScore.fhirType()}`,
      );
    }
    return this.measureScore;
  }

  /**
   * @returns `true` if the `measureScore` property exists as a CodeableConcept and has a value; `false` otherwise
   */
  public hasMeasureScoreCodeableConcept(): boolean {
    return this.hasMeasureScore() && this.measureScore instanceof CodeableConcept;
  }

  /**
   * @returns the `measureScore` property value as a Period object if defined; else undefined
   */
  public getMeasureScorePeriod(): Period | undefined {
    if (!isDefined<IDataType | undefined>(this.measureScore)) {
      return undefined;
    }
    if (!(this.measureScore instanceof Period)) {
      throw new InvalidTypeError(
        `DataType mismatch for MeasureReport.group.stratifier.stratum.measureScore[x]: Expected Period but encountered ${this.measureScore.fhirType()}`,
      );
    }
    return this.measureScore;
  }

  /**
   * @returns `true` if the `measureScore` property exists as a Period and has a value; `false` otherwise
   */
  public hasMeasureScorePeriod(): boolean {
    return this.hasMeasureScore() && this.measureScore instanceof Period;
  }

  /**
   * @returns the `measureScore` property value as a Range object if defined; else undefined
   */
  public getMeasureScoreRange(): Range | undefined {
    if (!isDefined<IDataType | undefined>(this.measureScore)) {
      return undefined;
    }
    if (!(this.measureScore instanceof Range)) {
      throw new InvalidTypeError(
        `DataType mismatch for MeasureReport.group.stratifier.stratum.measureScore[x]: Expected Range but encountered ${this.measureScore.fhirType()}`,
      );
    }
    return this.measureScore;
  }

  /**
   * @returns `true` if the `measureScore` property exists as a Range and has a value; `false` otherwise
   */
  public hasMeasureScoreRange(): boolean {
    return this.hasMeasureScore() && this.measureScore instanceof Range;
  }

  /**
   * @returns the `measureScore` property value as a Duration object if defined; else undefined
   */
  public getMeasureScoreDuration(): Duration | undefined {
    if (!isDefined<IDataType | undefined>(this.measureScore)) {
      return undefined;
    }
    if (!(this.measureScore instanceof Duration)) {
      throw new InvalidTypeError(
        `DataType mismatch for MeasureReport.group.stratifier.stratum.measureScore[x]: Expected Duration but encountered ${this.measureScore.fhirType()}`,
      );
    }
    return this.measureScore;
  }

  /**
   * @returns `true` if the `measureScore` property exists as a Duration and has a value; `false` otherwise
   */
  public hasMeasureScoreDuration(): boolean {
    return this.hasMeasureScore() && this.measureScore instanceof Duration;
  }

  // End of choice datatype-specific "get"/"has" methods

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'MeasureReport.group.stratifier.stratum';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.value,
      this.component,
      this.population,
      this.measureScore,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): MeasureReportGroupStratifierStratumComponent {
    const dest = new MeasureReportGroupStratifierStratumComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: MeasureReportGroupStratifierStratumComponent): void {
    super.copyValues(dest);
    dest.value = this.value?.copy() as IDataType;
    const componentList = copyListValues<MeasureReportGroupStratifierStratumComponentComponent>(this.component);
    dest.component = componentList.length === 0 ? undefined : componentList;
    const populationList = copyListValues<MeasureReportGroupStratifierStratumPopulationComponent>(this.population);
    dest.population = populationList.length === 0 ? undefined : populationList;
    dest.measureScore = this.measureScore?.copy() as IDataType;
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

    if (this.hasValue()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getValue()!, 'value', jsonObj);
    }

    if (this.hasComponent()) {
      setFhirBackboneElementListJson(this.getComponent(), 'component', jsonObj);
    }

    if (this.hasPopulation()) {
      setFhirBackboneElementListJson(this.getPopulation(), 'population', jsonObj);
    }

    if (this.hasMeasureScore()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getMeasureScore()!, 'measureScore', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * MeasureReportGroupStratifierStratumComponentComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Stratifier component values
 * - **Definition:** A stratifier component value.
 *
 * @category Data Models: Resource
 * @see [FHIR MeasureReport](http://hl7.org/fhir/StructureDefinition/MeasureReport)
 */
export class MeasureReportGroupStratifierStratumComponentComponent extends BackboneElement implements IBackboneElement {
  constructor(code: CodeableConcept | null = null, value: IDataType | null = null) {
    super();

    this.code = null;
    if (isDefined<CodeableConcept>(code)) {
      this.setCode(code);
    }

    this.value = null;
    if (isDefined<IDataType>(value)) {
      this.setValue(value);
    }

  }

  /**
   * Parse the provided `MeasureReportGroupStratifierStratumComponentComponent` JSON to instantiate the MeasureReportGroupStratifierStratumComponentComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `MeasureReportGroupStratifierStratumComponentComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to MeasureReportGroupStratifierStratumComponentComponent
   * @returns MeasureReportGroupStratifierStratumComponentComponent data model or undefined for `MeasureReportGroupStratifierStratumComponentComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): MeasureReportGroupStratifierStratumComponentComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'MeasureReportGroupStratifierStratumComponentComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new MeasureReportGroupStratifierStratumComponentComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    const classMetadata: DecoratorMetadataObject | null = MeasureReportGroupStratifierStratumComponentComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for MeasureReportGroupStratifierStratumComponentComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    fieldName = 'linkId';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setLinkIdElement(datatype);
    }

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
   * MeasureReport.group.stratifier.stratum.component.linkId Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Pointer to specific stratifier component from Measure
   * - **Definition:** The stratifier component from the Measure that corresponds to this stratifier component in the MeasureReport resource.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private linkId?: StringType | undefined;

  /**
   * MeasureReport.group.stratifier.stratum.component.code Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** What stratifier component of the group
   * - **Definition:** The code for the stratum component value.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private code: CodeableConcept | null;

  /**
   * MeasureReport.group.stratifier.stratum.component.value[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('MeasureReport.group.stratifier.stratum.component.value[x]', ['CodeableConcept','boolean','Quantity','Range','Reference',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The stratum component value, e.g. male
   * - **Definition:** The stratum component value.
   * - **FHIR Types:**
   *     'CodeableConcept',
   *     'boolean',
   *     'Quantity',
   *     'Range',
   *     'Reference',
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('MeasureReport.group.stratifier.stratum.component.value[x]',[
    'CodeableConcept',
    'boolean',
    'Quantity',
    'Range',
    'Reference',
  ])
  private value: IDataType | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `linkId` property value as a StringType object if defined; else an empty StringType object
   */
  public getLinkIdElement(): StringType {
    return this.linkId ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `linkId` property.
   *
   * @param element - the `linkId` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setLinkIdElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid MeasureReport.group.stratifier.stratum.component.linkId; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.linkId = element;
    } else {
      this.linkId = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `linkId` property exists and has a value; `false` otherwise
   */
  public hasLinkIdElement(): boolean {
    return isDefined<StringType>(this.linkId) && !this.linkId.isEmpty();
  }

  /**
   * @returns the `linkId` property value as a fhirString if defined; else undefined
   */
  public getLinkId(): fhirString | undefined {
    return this.linkId?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `linkId` property.
   *
   * @param value - the `linkId` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setLinkId(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid MeasureReport.group.stratifier.stratum.component.linkId (${String(value)})`;
      this.linkId = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.linkId = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `linkId` property exists and has a value; `false` otherwise
   */
  public hasLinkId(): boolean {
    return this.hasLinkIdElement();
  }

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
      const optErrMsg = `Invalid MeasureReport.group.stratifier.stratum.component.code; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `value` property value as a DataType object; else null
   */
  public getValue(): IDataType | null {
    return this.value;
  }

  /**
   * Assigns the provided DataType object value to the `value` property.
   *
   * @decorator `@ChoiceDataTypes('MeasureReport.group.stratifier.stratum.component.value[x]')`
   *
   * @param value - the `value` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('MeasureReport.group.stratifier.stratum.component.value[x]')
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
   * @returns the `value` property value as a CodeableConcept object if defined; else null
   */
  public getValueCodeableConcept(): CodeableConcept | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof CodeableConcept)) {
      throw new InvalidTypeError(
        `DataType mismatch for MeasureReport.group.stratifier.stratum.component.value[x]: Expected CodeableConcept but encountered ${this.value.fhirType()}`,
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
   * @returns the `value` property value as a BooleanType object if defined; else null
   */
  public getValueBooleanType(): BooleanType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof BooleanType)) {
      throw new InvalidTypeError(
        `DataType mismatch for MeasureReport.group.stratifier.stratum.component.value[x]: Expected BooleanType but encountered ${this.value.fhirType()}`,
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
   * @returns the `value` property value as a Quantity object if defined; else null
   */
  public getValueQuantity(): Quantity | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Quantity)) {
      throw new InvalidTypeError(
        `DataType mismatch for MeasureReport.group.stratifier.stratum.component.value[x]: Expected Quantity but encountered ${this.value.fhirType()}`,
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
        `DataType mismatch for MeasureReport.group.stratifier.stratum.component.value[x]: Expected Range but encountered ${this.value.fhirType()}`,
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
   * @returns the `value` property value as a Reference object if defined; else null
   */
  public getValueReference(): Reference | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Reference)) {
      throw new InvalidTypeError(
        `DataType mismatch for MeasureReport.group.stratifier.stratum.component.value[x]: Expected Reference but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Reference and has a value; `false` otherwise
   */
  public hasValueReference(): boolean {
    return this.hasValue() && this.value instanceof Reference;
  }

  // End of choice datatype-specific "get"/"has" methods

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'MeasureReport.group.stratifier.stratum.component';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.linkId,
      this.code,
      this.value,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.code, this.value, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): MeasureReportGroupStratifierStratumComponentComponent {
    const dest = new MeasureReportGroupStratifierStratumComponentComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: MeasureReportGroupStratifierStratumComponentComponent): void {
    super.copyValues(dest);
    dest.linkId = this.linkId?.copy();
    dest.code = this.code ? this.code.copy() : null;
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

    if (this.hasLinkIdElement()) {
      setFhirPrimitiveJson<fhirString>(this.getLinkIdElement(), 'linkId', jsonObj);
    }

    if (this.hasCode()) {
      setFhirComplexJson(this.getCode(), 'code', jsonObj);
    }

    if (this.hasValue()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getValue()!, 'value', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * MeasureReportGroupStratifierStratumPopulationComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Population results in this stratum
 * - **Definition:** The populations that make up the stratum, one for each type of population appropriate to the measure.
 *
 * @category Data Models: Resource
 * @see [FHIR MeasureReport](http://hl7.org/fhir/StructureDefinition/MeasureReport)
 */
export class MeasureReportGroupStratifierStratumPopulationComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `MeasureReportGroupStratifierStratumPopulationComponent` JSON to instantiate the MeasureReportGroupStratifierStratumPopulationComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `MeasureReportGroupStratifierStratumPopulationComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to MeasureReportGroupStratifierStratumPopulationComponent
   * @returns MeasureReportGroupStratifierStratumPopulationComponent data model or undefined for `MeasureReportGroupStratifierStratumPopulationComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): MeasureReportGroupStratifierStratumPopulationComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'MeasureReportGroupStratifierStratumPopulationComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new MeasureReportGroupStratifierStratumPopulationComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'linkId';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setLinkIdElement(datatype);
    }

    fieldName = 'code';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setCode(datatype);
    }

    fieldName = 'count';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: IntegerType | undefined = fhirParser.parseIntegerType(dtJson, dtSiblingJson);
      instance.setCountElement(datatype);
    }

    fieldName = 'subjectResults';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setSubjectResults(datatype);
    }

    fieldName = 'subjectReport';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addSubjectReport(datatype);
          }
        });
      }
  }

    fieldName = 'subjects';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setSubjects(datatype);
    }

    return instance;
  }

  /**
   * MeasureReport.group.stratifier.stratum.population.linkId Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Pointer to specific population from Measure
   * - **Definition:** The population from the Measure that corresponds to this population in the MeasureReport resource.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private linkId?: StringType | undefined;

  /**
   * MeasureReport.group.stratifier.stratum.population.code Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** initial-population | numerator | numerator-exclusion | denominator | denominator-exclusion | denominator-exception | measure-population | measure-population-exclusion | measure-observation
   * - **Definition:** The type of the population.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private code?: CodeableConcept | undefined;

  /**
   * MeasureReport.group.stratifier.stratum.population.count Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Size of the population
   * - **Definition:** The number of members of the population in this stratum.
   * - **FHIR Type:** `integer`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private count?: IntegerType | undefined;

  /**
   * MeasureReport.group.stratifier.stratum.population.subjectResults Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** For subject-list reports, the subject results in this population
   * - **Definition:** This element refers to a List of individual level MeasureReport resources, one for each subject in this population in this stratum.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/List',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private subjectResults?: Reference | undefined;

  /**
   * MeasureReport.group.stratifier.stratum.population.subjectReport Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** For subject-list reports, a subject result in this population
   * - **Definition:** A reference to an individual level MeasureReport resource for a member of the population.
   * - **Comment:** This element SHALL NOT be used in with subjectResults, either systems provide results as a List of MeasureReport, or as references to individual MeasureReports. Note that using this element introduces a constraint on the size of the subject-list MeasureReport; implementations would be free to return a TOO-COSTLY response if a request is made for a subject-list report with too many subjects.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/MeasureReport',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private subjectReport?: Reference[] | undefined;

  /**
   * MeasureReport.group.stratifier.stratum.population.subjects Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** What individual(s) in the population
   * - **Definition:** Optional Group identifying the individuals that make up the population.
   * - **Comment:** Note that this element can only be used for summary and subject-list reports where the basis is of the same type as the populations (e.g. a Patient-based measure, rather than an Encounter-based measure). In addition, the referenced Group SHALL be an actual (as opposed to a definitional) group.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Group',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private subjects?: Reference | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `linkId` property value as a StringType object if defined; else an empty StringType object
   */
  public getLinkIdElement(): StringType {
    return this.linkId ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `linkId` property.
   *
   * @param element - the `linkId` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setLinkIdElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid MeasureReport.group.stratifier.stratum.population.linkId; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.linkId = element;
    } else {
      this.linkId = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `linkId` property exists and has a value; `false` otherwise
   */
  public hasLinkIdElement(): boolean {
    return isDefined<StringType>(this.linkId) && !this.linkId.isEmpty();
  }

  /**
   * @returns the `linkId` property value as a fhirString if defined; else undefined
   */
  public getLinkId(): fhirString | undefined {
    return this.linkId?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `linkId` property.
   *
   * @param value - the `linkId` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setLinkId(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid MeasureReport.group.stratifier.stratum.population.linkId (${String(value)})`;
      this.linkId = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.linkId = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `linkId` property exists and has a value; `false` otherwise
   */
  public hasLinkId(): boolean {
    return this.hasLinkIdElement();
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
      const optErrMsg = `Invalid MeasureReport.group.stratifier.stratum.population.code; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid MeasureReport.group.stratifier.stratum.population.count; Provided element is not an instance of IntegerType.`;
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
      const optErrMsg = `Invalid MeasureReport.group.stratifier.stratum.population.count (${String(value)})`;
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
   * @returns the `subjectResults` property value as a Reference object; else an empty Reference object
   */
  public getSubjectResults(): Reference {
    return this.subjectResults ?? new Reference();
  }

  /**
   * Assigns the provided SubjectResults object value to the `subjectResults` property.
   *
   * @decorator `@ReferenceTargets('MeasureReport.group.stratifier.stratum.population.subjectResults', ['List',])`
   *
   * @param value - the `subjectResults` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MeasureReport.group.stratifier.stratum.population.subjectResults', [
    'List',
  ])
  public setSubjectResults(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.subjectResults = value;
    } else {
      this.subjectResults = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `subjectResults` property exists and has a value; `false` otherwise
   */
  public hasSubjectResults(): boolean {
    return isDefined<Reference>(this.subjectResults) && !this.subjectResults.isEmpty();
  }

  /**
   * @returns the `subjectReport` property value as a Reference array
   */
  public getSubjectReport(): Reference[] {
    return this.subjectReport ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `subjectReport` property.
   *
   * @decorator `@ReferenceTargets('MeasureReport.group.stratifier.stratum.population.subjectReport', ['MeasureReport',])`
   *
   * @param value - the `subjectReport` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MeasureReport.group.stratifier.stratum.population.subjectReport', [
    'MeasureReport',
  ])
  public setSubjectReport(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.subjectReport = value;
    } else {
      this.subjectReport = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `subjectReport` array property.
   *
   * @decorator `@ReferenceTargets('MeasureReport.group.stratifier.stratum.population.subjectReport', ['MeasureReport',])`
   *
   * @param value - the `subjectReport` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MeasureReport.group.stratifier.stratum.population.subjectReport', [
    'MeasureReport',
  ])
  public addSubjectReport(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initSubjectReport();
      this.subjectReport?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `subjectReport` property exists and has a value; `false` otherwise
   */
  public hasSubjectReport(): boolean {
    return isDefinedList<Reference>(this.subjectReport) && this.subjectReport.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `subjectReport` property
   */
  private initSubjectReport(): void {
    if (!this.hasSubjectReport()) {
      this.subjectReport = [] as Reference[];
    }
  }

  /**
   * @returns the `subjects` property value as a Reference object; else an empty Reference object
   */
  public getSubjects(): Reference {
    return this.subjects ?? new Reference();
  }

  /**
   * Assigns the provided Subjects object value to the `subjects` property.
   *
   * @decorator `@ReferenceTargets('MeasureReport.group.stratifier.stratum.population.subjects', ['Group',])`
   *
   * @param value - the `subjects` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MeasureReport.group.stratifier.stratum.population.subjects', [
    'Group',
  ])
  public setSubjects(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.subjects = value;
    } else {
      this.subjects = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `subjects` property exists and has a value; `false` otherwise
   */
  public hasSubjects(): boolean {
    return isDefined<Reference>(this.subjects) && !this.subjects.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'MeasureReport.group.stratifier.stratum.population';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.linkId,
      this.code,
      this.count,
      this.subjectResults,
      this.subjectReport,
      this.subjects,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): MeasureReportGroupStratifierStratumPopulationComponent {
    const dest = new MeasureReportGroupStratifierStratumPopulationComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: MeasureReportGroupStratifierStratumPopulationComponent): void {
    super.copyValues(dest);
    dest.linkId = this.linkId?.copy();
    dest.code = this.code?.copy();
    dest.count = this.count?.copy();
    dest.subjectResults = this.subjectResults?.copy();
    const subjectReportList = copyListValues<Reference>(this.subjectReport);
    dest.subjectReport = subjectReportList.length === 0 ? undefined : subjectReportList;
    dest.subjects = this.subjects?.copy();
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

    if (this.hasLinkIdElement()) {
      setFhirPrimitiveJson<fhirString>(this.getLinkIdElement(), 'linkId', jsonObj);
    }

    if (this.hasCode()) {
      setFhirComplexJson(this.getCode(), 'code', jsonObj);
    }

    if (this.hasCountElement()) {
      setFhirPrimitiveJson<fhirInteger>(this.getCountElement(), 'count', jsonObj);
    }

    if (this.hasSubjectResults()) {
      setFhirComplexJson(this.getSubjectResults(), 'subjectResults', jsonObj);
    }

    if (this.hasSubjectReport()) {
      setFhirComplexListJson(this.getSubjectReport(), 'subjectReport', jsonObj);
    }

    if (this.hasSubjects()) {
      setFhirComplexJson(this.getSubjects(), 'subjects', jsonObj);
    }

    return jsonObj;
  }
}
