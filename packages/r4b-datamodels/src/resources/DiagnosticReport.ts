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
 * DiagnosticReport Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/DiagnosticReport
 * StructureDefinition.name: DiagnosticReport
 * StructureDefinition.description: The findings and interpretation of diagnostic  tests performed on patients, groups of patients, devices, and locations, and/or specimens derived from these. The report includes clinical context such as requesting and provider information, and some mix of atomic results, images, textual and coded interpretations, and formatted representation of diagnostic reports.
 * StructureDefinition.fhirVersion: 4.3.0
 *
 * For questions, suggestions, or bugs, please open an issue at [GitHub ts-fhir-datamodels/issues](https://github.com/Paqrat76/ts-fhir-datamodels/issues).
 *
 * @packageDocumentation
 */

import {
  BackboneElement,
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
  InstantType,
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
  fhirCode,
  fhirCodeSchema,
  fhirInstant,
  fhirInstantSchema,
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
import { Attachment, CodeableConcept, Identifier, PARSABLE_DATATYPE_MAP, Period, Reference } from '../complex-types/complex-datatypes';
import { DiagnosticReportStatusEnum } from '../code-systems/DiagnosticReportStatusEnum';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Symbol.metadata polyfill secret sauce for decorator metadata
(Symbol.metadata as any) ??= Symbol('Symbol.metadata');

/**
 * DiagnosticReport Class
 *
 * @remarks
 * The findings and interpretation of diagnostic  tests performed on patients, groups of patients, devices, and locations, and/or specimens derived from these. The report includes clinical context such as requesting and provider information, and some mix of atomic results, images, textual and coded interpretations, and formatted representation of diagnostic reports.
 *
 * To support reporting for any diagnostic report into a clinical data repository.
 *
 * **FHIR Specification**
 * - **Short:** A Diagnostic report - a combination of request information, atomic results, images, interpretation, as well as formatted reports
 * - **Definition:** The findings and interpretation of diagnostic  tests performed on patients, groups of patients, devices, and locations, and/or specimens derived from these. The report includes clinical context such as requesting and provider information, and some mix of atomic results, images, textual and coded interpretations, and formatted representation of diagnostic reports.
 * - **Comment:** This is intended to capture a single report and is not suitable for use in displaying summary information that covers multiple reports.  For example, this resource has not been designed for laboratory cumulative reporting formats nor detailed structured reports for sequencing.
 * - **FHIR Version:** 4.3.0
 *
 * @category Data Models: Resource
 * @see [FHIR DiagnosticReport](http://hl7.org/fhir/StructureDefinition/DiagnosticReport)
 */
export class DiagnosticReport extends DomainResource implements IDomainResource {
  constructor(status: EnumCodeType | CodeType | fhirCode | null = null, code: CodeableConcept | null = null) {
    super();

    this.diagnosticReportStatusEnum = new DiagnosticReportStatusEnum();

    this.status = constructorCodeValueAsEnumCodeType<DiagnosticReportStatusEnum>(
      status,
      DiagnosticReportStatusEnum,
      this.diagnosticReportStatusEnum,
      'DiagnosticReport.status',
    );

    this.code = null;
    if (isDefined<CodeableConcept>(code)) {
      this.setCode(code);
    }
  }

  /**
   * Parse the provided `DiagnosticReport` JSON to instantiate the DiagnosticReport data model.
   *
   * @param sourceJson - JSON representing FHIR `DiagnosticReport`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to DiagnosticReport
   * @returns DiagnosticReport data model or undefined for `DiagnosticReport`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): DiagnosticReport | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'DiagnosticReport';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new DiagnosticReport();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'DiagnosticReport');
    fhirParser.processDomainResourceJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const classMetadata: DecoratorMetadataObject | null = DiagnosticReport[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for DiagnosticReport`;
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

    fieldName = 'basedOn';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addBasedOn(datatype);
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

    fieldName = 'category';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addCategory(datatype);
          }
        });
      }
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

    fieldName = 'effective[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const effective: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setEffective(effective);

    fieldName = 'issued';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: InstantType | undefined = fhirParser.parseInstantType(dtJson, dtSiblingJson);
      instance.setIssuedElement(datatype);
    }

    fieldName = 'performer';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addPerformer(datatype);
          }
        });
      }
  }

    fieldName = 'resultsInterpreter';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addResultsInterpreter(datatype);
          }
        });
      }
  }

    fieldName = 'specimen';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addSpecimen(datatype);
          }
        });
      }
  }

    fieldName = 'result';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addResult(datatype);
          }
        });
      }
  }

    fieldName = 'imagingStudy';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addImagingStudy(datatype);
          }
        });
      }
  }

    fieldName = 'media';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: DiagnosticReportMediaComponent | undefined = DiagnosticReportMediaComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addMedia(component);
          }
        });
      }
    }

    fieldName = 'conclusion';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setConclusionElement(datatype);
    }

    fieldName = 'conclusionCode';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addConclusionCode(datatype);
          }
        });
      }
    }

    fieldName = 'presentedForm';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Attachment | undefined = Attachment.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addPresentedForm(datatype);
          }
        });
      }
    }

    return instance;
  }

  /**
   * DiagnosticReport.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Business identifier for report
   * - **Definition:** Identifiers assigned to this report by the performer or other systems.
   * - **Comment:** Usually assigned by the Information System of the diagnostic service provider (filler id).
   * - **Requirements:** Need to know what identifier to use when making queries about this report from the source laboratory, and for linking to the report outside FHIR context.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier[] | undefined;

  /**
   * DiagnosticReport.basedOn Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** What was requested
   * - **Definition:** Details concerning a service requested.
   * - **Comment:** Note: Usually there is one test request for each result, however in some circumstances multiple test requests may be represented using a single test result resource. Note that there are also cases where one request leads to multiple reports.
   * - **Requirements:** This allows tracing of authorization for the report and tracking whether proposals/recommendations were acted upon.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/CarePlan',
   *       'http://hl7.org/fhir/StructureDefinition/ImmunizationRecommendation',
   *       'http://hl7.org/fhir/StructureDefinition/MedicationRequest',
   *       'http://hl7.org/fhir/StructureDefinition/NutritionOrder',
   *       'http://hl7.org/fhir/StructureDefinition/ServiceRequest',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private basedOn?: Reference[] | undefined;

  /**
   * FHIR CodeSystem: DiagnosticReportStatus
   *
   * @see {@link DiagnosticReportStatusEnum }
   */
  private readonly diagnosticReportStatusEnum: DiagnosticReportStatusEnum;

  /**
   * DiagnosticReport.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** registered | partial | preliminary | final +
   * - **Definition:** The status of the diagnostic report.
   * - **Requirements:** Diagnostic services routinely issue provisional/incomplete reports, and sometimes withdraw previously released reports.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** true
   * - **isModifierReason:** This element is labeled as a modifier because it is a status element that contains status entered-in-error which means that the resource should not be treated as valid
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link DiagnosticReportStatusEnum }
   */
  private status: EnumCodeType | null;

  /**
   * DiagnosticReport.category Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Service category
   * - **Definition:** A code that classifies the clinical discipline, department or diagnostic service that created the report (e.g. cardiology, biochemistry, hematology, MRI). This is used for searching, sorting and display purposes.
   * - **Comment:** Multiple categories are allowed using various categorization schemes.   The level of granularity is defined by the category concepts in the value set. More fine-grained filtering can be performed using the metadata and/or terminology hierarchy in DiagnosticReport.code.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private category?: CodeableConcept[] | undefined;

  /**
   * DiagnosticReport.code Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name/Code for this diagnostic report
   * - **Definition:** A code or name that describes this diagnostic report.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private code: CodeableConcept | null;

  /**
   * DiagnosticReport.subject Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The subject of the report - usually, but not always, the patient
   * - **Definition:** The subject of the report. Usually, but not always, this is a patient. However, diagnostic services also perform analyses on specimens collected from a variety of other sources.
   * - **Requirements:** SHALL know the subject context.
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
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private subject?: Reference | undefined;

  /**
   * DiagnosticReport.encounter Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Health care event when test ordered
   * - **Definition:** The healthcare event  (e.g. a patient and healthcare provider interaction) which this DiagnosticReport is about.
   * - **Comment:** This will typically be the encounter the event occurred within, but some events may be initiated prior to or after the official completion of an encounter  but still be tied to the context of the encounter  (e.g. pre-admission laboratory tests).
   * - **Requirements:** Links the request to the Encounter context.
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
   * DiagnosticReport.effective[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('DiagnosticReport.effective[x]', ['dateTime','Period',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Clinically relevant time/time-period for report
   * - **Definition:** The time or time-period the observed values are related to. When the subject of the report is a patient, this is usually either the time of the procedure or of specimen collection(s), but very often the source of the date/time is not known, only the date/time itself.
   * - **Comment:** If the diagnostic procedure was performed on the patient, this is the time it was performed. If there are specimens, the diagnostically relevant time can be derived from the specimen collection times, but the specimen information is not always available, and the exact relationship between the specimens and the diagnostically relevant time is not always automatic.
   * - **Requirements:** Need to know where in the patient history to file/present this report.
   * - **FHIR Types:**
   *     'dateTime',
   *     'Period',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  @ChoiceDataTypesMeta('DiagnosticReport.effective[x]',[
    'dateTime',
    'Period',
  ])
  private effective?: IDataType | undefined;

  /**
   * DiagnosticReport.issued Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** DateTime this version was made
   * - **Definition:** The date and time that this version of the report was made available to providers, typically after the report was reviewed and verified.
   * - **Comment:** May be different from the update time of the resource itself, because that is the status of the record (potentially a secondary copy), not the actual release time of the report.
   * - **Requirements:** Clinicians need to be able to check the date that the report was released.
   * - **FHIR Type:** `instant`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private issued?: InstantType | undefined;

  /**
   * DiagnosticReport.performer Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Responsible Diagnostic Service
   * - **Definition:** The diagnostic service that is responsible for issuing the report.
   * - **Comment:** This is not necessarily the source of the atomic data items or the entity that interpreted the results. It is the entity that takes responsibility for the clinical report.
   * - **Requirements:** Need to know whom to contact if there are queries about the results. Also may need to track the source of reports for secondary data analysis.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *       'http://hl7.org/fhir/StructureDefinition/CareTeam',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private performer?: Reference[] | undefined;

  /**
   * DiagnosticReport.resultsInterpreter Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Primary result interpreter
   * - **Definition:** The practitioner or organization that is responsible for the report\'s conclusions and interpretations.
   * - **Comment:** Might not be the same entity that takes responsibility for the clinical report.
   * - **Requirements:** Need to know whom to contact if there are queries about the results. Also may need to track the source of reports for secondary data analysis.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *       'http://hl7.org/fhir/StructureDefinition/CareTeam',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private resultsInterpreter?: Reference[] | undefined;

  /**
   * DiagnosticReport.specimen Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Specimens this report is based on
   * - **Definition:** Details about the specimens on which this diagnostic report is based.
   * - **Comment:** If the specimen is sufficiently specified with a code in the test result name, then this additional data may be redundant. If there are multiple specimens, these may be represented per observation or group.
   * - **Requirements:** Need to be able to report information about the collected specimens on which the report is based.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Specimen',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private specimen?: Reference[] | undefined;

  /**
   * DiagnosticReport.result Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Observations
   * - **Definition:** [Observations](https://hl7.org/fhir/observation.html)  that are part of this diagnostic report.
   * - **Comment:** Observations can contain observations.
   * - **Requirements:** Need to support individual results, or  groups of results, where the result grouping is arbitrary, but meaningful.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Observation',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private result?: Reference[] | undefined;

  /**
   * DiagnosticReport.imagingStudy Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Reference to full details of imaging associated with the diagnostic report
   * - **Definition:** One or more links to full details of any imaging performed during the diagnostic investigation. Typically, this is imaging performed by DICOM enabled modalities, but this is not required. A fully enabled PACS viewer can use this information to provide views of the source images.
   * - **Comment:** ImagingStudy and the image element are somewhat overlapping - typically, the list of image references in the image element will also be found in one of the imaging study resources. However, each caters to different types of displays for different types of purposes. Neither, either, or both may be provided.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/ImagingStudy',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private imagingStudy?: Reference[] | undefined;

  /**
   * DiagnosticReport.media Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Key images associated with this report
   * - **Definition:** A list of key images associated with this report. The images are generally created during the diagnostic process, and may be directly of the patient, or of treated specimens (i.e. slides of interest).
   * - **Requirements:** Many diagnostic services include images in the report as part of their service.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private media?: DiagnosticReportMediaComponent[] | undefined;

  /**
   * DiagnosticReport.conclusion Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Clinical conclusion (interpretation) of test results
   * - **Definition:** Concise and clinically contextualized summary conclusion (interpretation/impression) of the diagnostic report.
   * - **Requirements:** Need to be able to provide a conclusion that is not lost among the basic result data.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private conclusion?: StringType | undefined;

  /**
   * DiagnosticReport.conclusionCode Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Codes for the clinical conclusion of test results
   * - **Definition:** One or more codes that represent the summary conclusion (interpretation/impression) of the diagnostic report.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private conclusionCode?: CodeableConcept[] | undefined;

  /**
   * DiagnosticReport.presentedForm Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Entire report as issued
   * - **Definition:** Rich text representation of the entire result as issued by the diagnostic service. Multiple formats are allowed but they SHALL be semantically equivalent.
   * - **Comment:** "application/pdf" is recommended as the most reliable and interoperable in this context.
   * - **Requirements:** Gives laboratory the ability to provide its own fully formatted report for clinical fidelity.
   * - **FHIR Type:** `Attachment`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private presentedForm?: Attachment[] | undefined;

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
      const optErrMsg = `Invalid DiagnosticReport.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid DiagnosticReport.identifier; Provided element is not an instance of Identifier.`;
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
   * @returns the `basedOn` property value as a Reference array
   */
  public getBasedOn(): Reference[] {
    return this.basedOn ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `basedOn` property.
   *
   * @decorator `@ReferenceTargets('DiagnosticReport.basedOn', ['CarePlan','ImmunizationRecommendation','MedicationRequest','NutritionOrder','ServiceRequest',])`
   *
   * @param value - the `basedOn` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('DiagnosticReport.basedOn', [
    'CarePlan',
  
    'ImmunizationRecommendation',
  
    'MedicationRequest',
  
    'NutritionOrder',
  
    'ServiceRequest',
  ])
  public setBasedOn(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.basedOn = value;
    } else {
      this.basedOn = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `basedOn` array property.
   *
   * @decorator `@ReferenceTargets('DiagnosticReport.basedOn', ['CarePlan','ImmunizationRecommendation','MedicationRequest','NutritionOrder','ServiceRequest',])`
   *
   * @param value - the `basedOn` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('DiagnosticReport.basedOn', [
    'CarePlan',
  
    'ImmunizationRecommendation',
  
    'MedicationRequest',
  
    'NutritionOrder',
  
    'ServiceRequest',
  ])
  public addBasedOn(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initBasedOn();
      this.basedOn?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `basedOn` property exists and has a value; `false` otherwise
   */
  public hasBasedOn(): boolean {
    return isDefinedList<Reference>(this.basedOn) && this.basedOn.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `basedOn` property
   */
  private initBasedOn(): void {
    if (!this.hasBasedOn()) {
      this.basedOn = [] as Reference[];
    }
  }

  /**
   * @returns the `status` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link DiagnosticReportStatusEnum }
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
   * @see CodeSystem Enumeration: {@link DiagnosticReportStatusEnum }
   */
  public setStatusEnumType(enumType: EnumCodeType | undefined | null): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid DiagnosticReport.status`;
      assertEnumCodeType<DiagnosticReportStatusEnum>(enumType, DiagnosticReportStatusEnum, errMsgPrefix);
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
   * @see CodeSystem Enumeration: {@link DiagnosticReportStatusEnum }
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
   * @see CodeSystem Enumeration: {@link DiagnosticReportStatusEnum }
   */
  public setStatusElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid DiagnosticReport.status; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.status = new EnumCodeType(element, this.diagnosticReportStatusEnum);
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
   * @see CodeSystem Enumeration: {@link DiagnosticReportStatusEnum }
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
   * @see CodeSystem Enumeration: {@link DiagnosticReportStatusEnum }
   */
  public setStatus(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid DiagnosticReport.status (${String(value)})`;
      this.status = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.diagnosticReportStatusEnum);
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
      const optErrMsg = `Invalid DiagnosticReport.category; Provided value array has an element that is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid DiagnosticReport.category; Provided element is not an instance of CodeableConcept.`;
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
   * Assigns the provided CodeableConcept object value to the `code` property.
   *
   * @param value - the `code` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCode(value: CodeableConcept | undefined | null): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid DiagnosticReport.code; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `subject` property value as a Reference object; else an empty Reference object
   */
  public getSubject(): Reference {
    return this.subject ?? new Reference();
  }

  /**
   * Assigns the provided Subject object value to the `subject` property.
   *
   * @decorator `@ReferenceTargets('DiagnosticReport.subject', ['Patient','Group','Device','Location','Organization','Procedure','Practitioner','Medication','Substance',])`
   *
   * @param value - the `subject` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('DiagnosticReport.subject', [
    'Patient',
  
    'Group',
  
    'Device',
  
    'Location',
  
    'Organization',
  
    'Procedure',
  
    'Practitioner',
  
    'Medication',
  
    'Substance',
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
   * @decorator `@ReferenceTargets('DiagnosticReport.encounter', ['Encounter',])`
   *
   * @param value - the `encounter` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('DiagnosticReport.encounter', [
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
   * @returns the `effective` property value as a DataType object if defined; else undefined
   */
  public getEffective(): IDataType | undefined {
    return this.effective;
  }

  /**
   * Assigns the provided DataType object value to the `effective` property.
   *
   * @decorator `@ChoiceDataTypes('DiagnosticReport.effective[x]')`
   *
   * @param value - the `effective` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('DiagnosticReport.effective[x]')
  public setEffective(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.effective = value;
    } else {
      this.effective = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `effective` property exists and has a value; `false` otherwise
   */
  public hasEffective(): boolean {
    return isDefined<IDataType>(this.effective) && !this.effective.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `effective` property value as a DateTimeType object if defined; else undefined
   */
  public getEffectiveDateTimeType(): DateTimeType | undefined {
    if (!isDefined<IDataType | undefined>(this.effective)) {
      return undefined;
    }
    if (!(this.effective instanceof DateTimeType)) {
      throw new InvalidTypeError(
        `DataType mismatch for DiagnosticReport.effective[x]: Expected DateTimeType but encountered ${this.effective.fhirType()}`,
      );
    }
    return this.effective;
  }

  /**
   * @returns `true` if the `effective` property exists as a DateTimeType and has a value; `false` otherwise
   */
  public hasEffectiveDateTimeType(): boolean {
    return this.hasEffective() && this.effective instanceof DateTimeType;
  }

  /**
   * @returns the `effective` property value as a Period object if defined; else undefined
   */
  public getEffectivePeriod(): Period | undefined {
    if (!isDefined<IDataType | undefined>(this.effective)) {
      return undefined;
    }
    if (!(this.effective instanceof Period)) {
      throw new InvalidTypeError(
        `DataType mismatch for DiagnosticReport.effective[x]: Expected Period but encountered ${this.effective.fhirType()}`,
      );
    }
    return this.effective;
  }

  /**
   * @returns `true` if the `effective` property exists as a Period and has a value; `false` otherwise
   */
  public hasEffectivePeriod(): boolean {
    return this.hasEffective() && this.effective instanceof Period;
  }

  // End of choice datatype-specific "get"/"has" methods

  /**
   * @returns the `issued` property value as a InstantType object if defined; else an empty InstantType object
   */
  public getIssuedElement(): InstantType {
    return this.issued ?? new InstantType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `issued` property.
   *
   * @param element - the `issued` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setIssuedElement(element: InstantType | undefined): this {
    if (isDefined<InstantType>(element)) {
      const optErrMsg = `Invalid DiagnosticReport.issued; Provided element is not an instance of InstantType.`;
      assertFhirType<InstantType>(element, InstantType, optErrMsg);
      this.issued = element;
    } else {
      this.issued = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `issued` property exists and has a value; `false` otherwise
   */
  public hasIssuedElement(): boolean {
    return isDefined<InstantType>(this.issued) && !this.issued.isEmpty();
  }

  /**
   * @returns the `issued` property value as a fhirInstant if defined; else undefined
   */
  public getIssued(): fhirInstant | undefined {
    return this.issued?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `issued` property.
   *
   * @param value - the `issued` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setIssued(value: fhirInstant | undefined): this {
    if (isDefined<fhirInstant>(value)) {
      const optErrMsg = `Invalid DiagnosticReport.issued (${String(value)})`;
      this.issued = new InstantType(parseFhirPrimitiveData(value, fhirInstantSchema, optErrMsg));
    } else {
      this.issued = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `issued` property exists and has a value; `false` otherwise
   */
  public hasIssued(): boolean {
    return this.hasIssuedElement();
  }

  /**
   * @returns the `performer` property value as a Reference array
   */
  public getPerformer(): Reference[] {
    return this.performer ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `performer` property.
   *
   * @decorator `@ReferenceTargets('DiagnosticReport.performer', ['Practitioner','PractitionerRole','Organization','CareTeam',])`
   *
   * @param value - the `performer` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('DiagnosticReport.performer', [
    'Practitioner',
  
    'PractitionerRole',
  
    'Organization',
  
    'CareTeam',
  ])
  public setPerformer(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.performer = value;
    } else {
      this.performer = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `performer` array property.
   *
   * @decorator `@ReferenceTargets('DiagnosticReport.performer', ['Practitioner','PractitionerRole','Organization','CareTeam',])`
   *
   * @param value - the `performer` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('DiagnosticReport.performer', [
    'Practitioner',
  
    'PractitionerRole',
  
    'Organization',
  
    'CareTeam',
  ])
  public addPerformer(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initPerformer();
      this.performer?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `performer` property exists and has a value; `false` otherwise
   */
  public hasPerformer(): boolean {
    return isDefinedList<Reference>(this.performer) && this.performer.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `performer` property
   */
  private initPerformer(): void {
    if (!this.hasPerformer()) {
      this.performer = [] as Reference[];
    }
  }

  /**
   * @returns the `resultsInterpreter` property value as a Reference array
   */
  public getResultsInterpreter(): Reference[] {
    return this.resultsInterpreter ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `resultsInterpreter` property.
   *
   * @decorator `@ReferenceTargets('DiagnosticReport.resultsInterpreter', ['Practitioner','PractitionerRole','Organization','CareTeam',])`
   *
   * @param value - the `resultsInterpreter` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('DiagnosticReport.resultsInterpreter', [
    'Practitioner',
  
    'PractitionerRole',
  
    'Organization',
  
    'CareTeam',
  ])
  public setResultsInterpreter(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.resultsInterpreter = value;
    } else {
      this.resultsInterpreter = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `resultsInterpreter` array property.
   *
   * @decorator `@ReferenceTargets('DiagnosticReport.resultsInterpreter', ['Practitioner','PractitionerRole','Organization','CareTeam',])`
   *
   * @param value - the `resultsInterpreter` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('DiagnosticReport.resultsInterpreter', [
    'Practitioner',
  
    'PractitionerRole',
  
    'Organization',
  
    'CareTeam',
  ])
  public addResultsInterpreter(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initResultsInterpreter();
      this.resultsInterpreter?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `resultsInterpreter` property exists and has a value; `false` otherwise
   */
  public hasResultsInterpreter(): boolean {
    return isDefinedList<Reference>(this.resultsInterpreter) && this.resultsInterpreter.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `resultsInterpreter` property
   */
  private initResultsInterpreter(): void {
    if (!this.hasResultsInterpreter()) {
      this.resultsInterpreter = [] as Reference[];
    }
  }

  /**
   * @returns the `specimen` property value as a Reference array
   */
  public getSpecimen(): Reference[] {
    return this.specimen ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `specimen` property.
   *
   * @decorator `@ReferenceTargets('DiagnosticReport.specimen', ['Specimen',])`
   *
   * @param value - the `specimen` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('DiagnosticReport.specimen', [
    'Specimen',
  ])
  public setSpecimen(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.specimen = value;
    } else {
      this.specimen = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `specimen` array property.
   *
   * @decorator `@ReferenceTargets('DiagnosticReport.specimen', ['Specimen',])`
   *
   * @param value - the `specimen` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('DiagnosticReport.specimen', [
    'Specimen',
  ])
  public addSpecimen(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initSpecimen();
      this.specimen?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `specimen` property exists and has a value; `false` otherwise
   */
  public hasSpecimen(): boolean {
    return isDefinedList<Reference>(this.specimen) && this.specimen.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `specimen` property
   */
  private initSpecimen(): void {
    if (!this.hasSpecimen()) {
      this.specimen = [] as Reference[];
    }
  }

  /**
   * @returns the `result` property value as a Reference array
   */
  public getResult(): Reference[] {
    return this.result ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `result` property.
   *
   * @decorator `@ReferenceTargets('DiagnosticReport.result', ['Observation',])`
   *
   * @param value - the `result` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('DiagnosticReport.result', [
    'Observation',
  ])
  public setResult(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.result = value;
    } else {
      this.result = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `result` array property.
   *
   * @decorator `@ReferenceTargets('DiagnosticReport.result', ['Observation',])`
   *
   * @param value - the `result` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('DiagnosticReport.result', [
    'Observation',
  ])
  public addResult(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initResult();
      this.result?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `result` property exists and has a value; `false` otherwise
   */
  public hasResult(): boolean {
    return isDefinedList<Reference>(this.result) && this.result.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `result` property
   */
  private initResult(): void {
    if (!this.hasResult()) {
      this.result = [] as Reference[];
    }
  }

  /**
   * @returns the `imagingStudy` property value as a Reference array
   */
  public getImagingStudy(): Reference[] {
    return this.imagingStudy ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `imagingStudy` property.
   *
   * @decorator `@ReferenceTargets('DiagnosticReport.imagingStudy', ['ImagingStudy',])`
   *
   * @param value - the `imagingStudy` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('DiagnosticReport.imagingStudy', [
    'ImagingStudy',
  ])
  public setImagingStudy(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.imagingStudy = value;
    } else {
      this.imagingStudy = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `imagingStudy` array property.
   *
   * @decorator `@ReferenceTargets('DiagnosticReport.imagingStudy', ['ImagingStudy',])`
   *
   * @param value - the `imagingStudy` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('DiagnosticReport.imagingStudy', [
    'ImagingStudy',
  ])
  public addImagingStudy(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initImagingStudy();
      this.imagingStudy?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `imagingStudy` property exists and has a value; `false` otherwise
   */
  public hasImagingStudy(): boolean {
    return isDefinedList<Reference>(this.imagingStudy) && this.imagingStudy.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `imagingStudy` property
   */
  private initImagingStudy(): void {
    if (!this.hasImagingStudy()) {
      this.imagingStudy = [] as Reference[];
    }
  }

  /**
   * @returns the `media` property value as a DiagnosticReportMediaComponent array
   */
  public getMedia(): DiagnosticReportMediaComponent[] {
    return this.media ?? ([] as DiagnosticReportMediaComponent[]);
  }

  /**
   * Assigns the provided DiagnosticReportMediaComponent array value to the `media` property.
   *
   * @param value - the `media` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setMedia(value: DiagnosticReportMediaComponent[] | undefined): this {
    if (isDefinedList<DiagnosticReportMediaComponent>(value)) {
      const optErrMsg = `Invalid DiagnosticReport.media; Provided value array has an element that is not an instance of DiagnosticReportMediaComponent.`;
      assertFhirTypeList<DiagnosticReportMediaComponent>(value, DiagnosticReportMediaComponent, optErrMsg);
      this.media = value;
    } else {
      this.media = undefined;
    }
    return this;
  }

  /**
   * Add the provided DiagnosticReportMediaComponent value to the `media` array property.
   *
   * @param value - the `media` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addMedia(value: DiagnosticReportMediaComponent | undefined): this {
    if (isDefined<DiagnosticReportMediaComponent>(value)) {
      const optErrMsg = `Invalid DiagnosticReport.media; Provided element is not an instance of DiagnosticReportMediaComponent.`;
      assertFhirType<DiagnosticReportMediaComponent>(value, DiagnosticReportMediaComponent, optErrMsg);
      this.initMedia();
      this.media?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `media` property exists and has a value; `false` otherwise
   */
  public hasMedia(): boolean {
    return isDefinedList<DiagnosticReportMediaComponent>(this.media) && this.media.some((item: DiagnosticReportMediaComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `media` property
   */
  private initMedia(): void {
    if(!this.hasMedia()) {
      this.media = [] as DiagnosticReportMediaComponent[];
    }
  }

  /**
   * @returns the `conclusion` property value as a StringType object if defined; else an empty StringType object
   */
  public getConclusionElement(): StringType {
    return this.conclusion ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `conclusion` property.
   *
   * @param element - the `conclusion` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setConclusionElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid DiagnosticReport.conclusion; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.conclusion = element;
    } else {
      this.conclusion = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `conclusion` property exists and has a value; `false` otherwise
   */
  public hasConclusionElement(): boolean {
    return isDefined<StringType>(this.conclusion) && !this.conclusion.isEmpty();
  }

  /**
   * @returns the `conclusion` property value as a fhirString if defined; else undefined
   */
  public getConclusion(): fhirString | undefined {
    return this.conclusion?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `conclusion` property.
   *
   * @param value - the `conclusion` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setConclusion(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid DiagnosticReport.conclusion (${String(value)})`;
      this.conclusion = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.conclusion = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `conclusion` property exists and has a value; `false` otherwise
   */
  public hasConclusion(): boolean {
    return this.hasConclusionElement();
  }

  /**
   * @returns the `conclusionCode` property value as a CodeableConcept array
   */
  public getConclusionCode(): CodeableConcept[] {
    return this.conclusionCode ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `conclusionCode` property.
   *
   * @param value - the `conclusionCode` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setConclusionCode(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid DiagnosticReport.conclusionCode; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.conclusionCode = value;
    } else {
      this.conclusionCode = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `conclusionCode` array property.
   *
   * @param value - the `conclusionCode` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addConclusionCode(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid DiagnosticReport.conclusionCode; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initConclusionCode();
      this.conclusionCode?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `conclusionCode` property exists and has a value; `false` otherwise
   */
  public hasConclusionCode(): boolean {
    return isDefinedList<CodeableConcept>(this.conclusionCode) && this.conclusionCode.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `conclusionCode` property
   */
  private initConclusionCode(): void {
    if(!this.hasConclusionCode()) {
      this.conclusionCode = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `presentedForm` property value as a Attachment array
   */
  public getPresentedForm(): Attachment[] {
    return this.presentedForm ?? ([] as Attachment[]);
  }

  /**
   * Assigns the provided Attachment array value to the `presentedForm` property.
   *
   * @param value - the `presentedForm` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPresentedForm(value: Attachment[] | undefined): this {
    if (isDefinedList<Attachment>(value)) {
      const optErrMsg = `Invalid DiagnosticReport.presentedForm; Provided value array has an element that is not an instance of Attachment.`;
      assertFhirTypeList<Attachment>(value, Attachment, optErrMsg);
      this.presentedForm = value;
    } else {
      this.presentedForm = undefined;
    }
    return this;
  }

  /**
   * Add the provided Attachment value to the `presentedForm` array property.
   *
   * @param value - the `presentedForm` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addPresentedForm(value: Attachment | undefined): this {
    if (isDefined<Attachment>(value)) {
      const optErrMsg = `Invalid DiagnosticReport.presentedForm; Provided element is not an instance of Attachment.`;
      assertFhirType<Attachment>(value, Attachment, optErrMsg);
      this.initPresentedForm();
      this.presentedForm?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `presentedForm` property exists and has a value; `false` otherwise
   */
  public hasPresentedForm(): boolean {
    return isDefinedList<Attachment>(this.presentedForm) && this.presentedForm.some((item: Attachment) => !item.isEmpty());
  }

  /**
   * Initialize the `presentedForm` property
   */
  private initPresentedForm(): void {
    if(!this.hasPresentedForm()) {
      this.presentedForm = [] as Attachment[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'DiagnosticReport';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identifier,
      this.basedOn,
      this.status,
      this.category,
      this.code,
      this.subject,
      this.encounter,
      this.effective,
      this.issued,
      this.performer,
      this.resultsInterpreter,
      this.specimen,
      this.result,
      this.imagingStudy,
      this.media,
      this.conclusion,
      this.conclusionCode,
      this.presentedForm,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.status, this.code, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): DiagnosticReport {
    const dest = new DiagnosticReport();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: DiagnosticReport): void {
    super.copyValues(dest);
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    const basedOnList = copyListValues<Reference>(this.basedOn);
    dest.basedOn = basedOnList.length === 0 ? undefined : basedOnList;
    dest.status = this.status ? this.status.copy() : null;
    const categoryList = copyListValues<CodeableConcept>(this.category);
    dest.category = categoryList.length === 0 ? undefined : categoryList;
    dest.code = this.code ? this.code.copy() : null;
    dest.subject = this.subject?.copy();
    dest.encounter = this.encounter?.copy();
    dest.effective = this.effective?.copy() as IDataType;
    dest.issued = this.issued?.copy();
    const performerList = copyListValues<Reference>(this.performer);
    dest.performer = performerList.length === 0 ? undefined : performerList;
    const resultsInterpreterList = copyListValues<Reference>(this.resultsInterpreter);
    dest.resultsInterpreter = resultsInterpreterList.length === 0 ? undefined : resultsInterpreterList;
    const specimenList = copyListValues<Reference>(this.specimen);
    dest.specimen = specimenList.length === 0 ? undefined : specimenList;
    const resultList = copyListValues<Reference>(this.result);
    dest.result = resultList.length === 0 ? undefined : resultList;
    const imagingStudyList = copyListValues<Reference>(this.imagingStudy);
    dest.imagingStudy = imagingStudyList.length === 0 ? undefined : imagingStudyList;
    const mediaList = copyListValues<DiagnosticReportMediaComponent>(this.media);
    dest.media = mediaList.length === 0 ? undefined : mediaList;
    dest.conclusion = this.conclusion?.copy();
    const conclusionCodeList = copyListValues<CodeableConcept>(this.conclusionCode);
    dest.conclusionCode = conclusionCodeList.length === 0 ? undefined : conclusionCodeList;
    const presentedFormList = copyListValues<Attachment>(this.presentedForm);
    dest.presentedForm = presentedFormList.length === 0 ? undefined : presentedFormList;
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

    if (this.hasBasedOn()) {
      setFhirComplexListJson(this.getBasedOn(), 'basedOn', jsonObj);
    }

    if (this.hasStatusElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getStatusElement()!, 'status', jsonObj);
    }

    if (this.hasCategory()) {
      setFhirComplexListJson(this.getCategory(), 'category', jsonObj);
    }

    if (this.hasCode()) {
      setFhirComplexJson(this.getCode(), 'code', jsonObj);
    }

    if (this.hasSubject()) {
      setFhirComplexJson(this.getSubject(), 'subject', jsonObj);
    }

    if (this.hasEncounter()) {
      setFhirComplexJson(this.getEncounter(), 'encounter', jsonObj);
    }

    if (this.hasEffective()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getEffective()!, 'effective', jsonObj);
    }

    if (this.hasIssuedElement()) {
      setFhirPrimitiveJson<fhirInstant>(this.getIssuedElement(), 'issued', jsonObj);
    }

    if (this.hasPerformer()) {
      setFhirComplexListJson(this.getPerformer(), 'performer', jsonObj);
    }

    if (this.hasResultsInterpreter()) {
      setFhirComplexListJson(this.getResultsInterpreter(), 'resultsInterpreter', jsonObj);
    }

    if (this.hasSpecimen()) {
      setFhirComplexListJson(this.getSpecimen(), 'specimen', jsonObj);
    }

    if (this.hasResult()) {
      setFhirComplexListJson(this.getResult(), 'result', jsonObj);
    }

    if (this.hasImagingStudy()) {
      setFhirComplexListJson(this.getImagingStudy(), 'imagingStudy', jsonObj);
    }

    if (this.hasMedia()) {
      setFhirBackboneElementListJson(this.getMedia(), 'media', jsonObj);
    }

    if (this.hasConclusionElement()) {
      setFhirPrimitiveJson<fhirString>(this.getConclusionElement(), 'conclusion', jsonObj);
    }

    if (this.hasConclusionCode()) {
      setFhirComplexListJson(this.getConclusionCode(), 'conclusionCode', jsonObj);
    }

    if (this.hasPresentedForm()) {
      setFhirComplexListJson(this.getPresentedForm(), 'presentedForm', jsonObj);
    }

    return jsonObj;
  }
}

/**
 * DiagnosticReportMediaComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Key images associated with this report
 * - **Definition:** A list of key images associated with this report. The images are generally created during the diagnostic process, and may be directly of the patient, or of treated specimens (i.e. slides of interest).
 * - **Requirements:** Many diagnostic services include images in the report as part of their service.
 *
 * @category Data Models: Resource
 * @see [FHIR DiagnosticReport](http://hl7.org/fhir/StructureDefinition/DiagnosticReport)
 */
export class DiagnosticReportMediaComponent extends BackboneElement implements IBackboneElement {
  constructor(link: Reference | null = null) {
    super();

    this.link = null;
    if (isDefined<Reference>(link)) {
      this.setLink(link);
    }
  }

  /**
   * Parse the provided `DiagnosticReportMediaComponent` JSON to instantiate the DiagnosticReportMediaComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `DiagnosticReportMediaComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to DiagnosticReportMediaComponent
   * @returns DiagnosticReportMediaComponent data model or undefined for `DiagnosticReportMediaComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): DiagnosticReportMediaComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'DiagnosticReportMediaComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new DiagnosticReportMediaComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    fieldName = 'comment';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setCommentElement(datatype);
    }

    fieldName = 'link';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setLink(null);
      } else {
        instance.setLink(datatype);
      }
    } else {
      instance.setLink(null);
    }

    return instance;
  }

  /**
   * DiagnosticReport.media.comment Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Comment about the image (e.g. explanation)
   * - **Definition:** A comment about the image. Typically, this is used to provide an explanation for why the image is included, or to draw the viewer\'s attention to important features.
   * - **Comment:** The comment should be displayed with the image. It would be common for the report to include additional discussion of the image contents in other sections such as the conclusion.
   * - **Requirements:** The provider of the report should make a comment about each image included in the report.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private comment?: StringType | undefined;

  /**
   * DiagnosticReport.media.link Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Reference to the image source
   * - **Definition:** Reference to the image source.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Media',
   *     ]
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private link: Reference | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `comment` property value as a StringType object if defined; else an empty StringType object
   */
  public getCommentElement(): StringType {
    return this.comment ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `comment` property.
   *
   * @param element - the `comment` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCommentElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid DiagnosticReport.media.comment; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.comment = element;
    } else {
      this.comment = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `comment` property exists and has a value; `false` otherwise
   */
  public hasCommentElement(): boolean {
    return isDefined<StringType>(this.comment) && !this.comment.isEmpty();
  }

  /**
   * @returns the `comment` property value as a fhirString if defined; else undefined
   */
  public getComment(): fhirString | undefined {
    return this.comment?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `comment` property.
   *
   * @param value - the `comment` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setComment(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid DiagnosticReport.media.comment (${String(value)})`;
      this.comment = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.comment = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `comment` property exists and has a value; `false` otherwise
   */
  public hasComment(): boolean {
    return this.hasCommentElement();
  }

  /**
   * @returns the `link` property value as a Reference object if defined; else an empty Reference object
   */
  public getLink(): Reference {
    return this.link ?? new Reference();
  }

  /**
   * Assigns the provided Link object value to the `link` property.
   *
   * @decorator `@ReferenceTargets('DiagnosticReport.media.link', ['Media',])`
   *
   * @param value - the `link` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('DiagnosticReport.media.link', [
    'Media',
  ])
  public setLink(value: Reference | undefined | null): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.link = value;
    } else {
      this.link = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `link` property exists and has a value; `false` otherwise
   */
  public hasLink(): boolean {
    return isDefined<Reference>(this.link) && !this.link.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'DiagnosticReport.media';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.comment,
      this.link,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.link, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): DiagnosticReportMediaComponent {
    const dest = new DiagnosticReportMediaComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: DiagnosticReportMediaComponent): void {
    super.copyValues(dest);
    dest.comment = this.comment?.copy();
    dest.link = this.link ? this.link.copy() : null;
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

    if (this.hasCommentElement()) {
      setFhirPrimitiveJson<fhirString>(this.getCommentElement(), 'comment', jsonObj);
    }

    if (this.hasLink()) {
      setFhirComplexJson(this.getLink(), 'link', jsonObj);
    }

    return jsonObj;
  }
}
