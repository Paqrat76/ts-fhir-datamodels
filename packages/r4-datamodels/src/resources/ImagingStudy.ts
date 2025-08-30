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
 * ImagingStudy Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/ImagingStudy
 * StructureDefinition.name: ImagingStudy
 * StructureDefinition.description: Representation of the content produced in a DICOM imaging study. A study comprises a set of series, each of which includes a set of Service-Object Pair Instances (SOP Instances - images or other data) acquired or produced in a common context.  A series is of only one modality (e.g. X-ray, CT, MR, ultrasound), but a study may have multiple series of different modalities.
 * StructureDefinition.fhirVersion: 4.0.1
 *
 * For questions, suggestions, or bugs, please open an issue at [GitHub ts-fhir-datamodels/issues](https://github.com/Paqrat76/ts-fhir-datamodels/issues).
 *
 * @packageDocumentation
 */

import {
  BackboneElement,
  CodeType,
  DateTimeType,
  DomainResource,
  EnumCodeType,
  FhirParser,
  IBackboneElement,
  IDomainResource,
  IdType,
  JSON,
  PrimitiveType,
  ReferenceTargets,
  StringType,
  UnsignedIntType,
  assertEnumCodeType,
  assertFhirType,
  assertFhirTypeList,
  constructorCodeValueAsEnumCodeType,
  copyListValues,
  fhirCode,
  fhirCodeSchema,
  fhirDateTime,
  fhirDateTimeSchema,
  fhirId,
  fhirIdSchema,
  fhirString,
  fhirStringSchema,
  fhirUnsignedInt,
  fhirUnsignedIntSchema,
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
} from '@paq-ts-fhir/fhir-core';
import { Annotation, CodeableConcept, Coding, Identifier, PARSABLE_DATATYPE_MAP, Reference } from '../complex-types/complex-datatypes';
import { ImagingstudyStatusEnum } from '../code-systems/ImagingstudyStatusEnum';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';

/**
 * ImagingStudy Class
 *
 * @remarks
 * Representation of the content produced in a DICOM imaging study. A study comprises a set of series, each of which includes a set of Service-Object Pair Instances (SOP Instances - images or other data) acquired or produced in a common context.  A series is of only one modality (e.g. X-ray, CT, MR, ultrasound), but a study may have multiple series of different modalities.
 *
 * **FHIR Specification**
 * - **Short:** A set of images produced in single study (one or more series of references images)
 * - **Definition:** Representation of the content produced in a DICOM imaging study. A study comprises a set of series, each of which includes a set of Service-Object Pair Instances (SOP Instances - images or other data) acquired or produced in a common context.  A series is of only one modality (e.g. X-ray, CT, MR, ultrasound), but a study may have multiple series of different modalities.
 * - **FHIR Version:** 4.0.1
 *
 * @category Data Models: Resource
 * @see [FHIR ImagingStudy](http://hl7.org/fhir/StructureDefinition/ImagingStudy)
 */
export class ImagingStudy extends DomainResource implements IDomainResource {
  constructor(status: EnumCodeType | CodeType | fhirCode | null = null, subject: Reference | null = null) {
    super();

    this.imagingstudyStatusEnum = new ImagingstudyStatusEnum();

    this.status = constructorCodeValueAsEnumCodeType<ImagingstudyStatusEnum>(
      status,
      ImagingstudyStatusEnum,
      this.imagingstudyStatusEnum,
      'ImagingStudy.status',
    );

    this.subject = null;
    if (isDefined<Reference>(subject)) {
      this.setSubject(subject);
    }
  }

  /**
   * Parse the provided `ImagingStudy` JSON to instantiate the ImagingStudy data model.
   *
   * @param sourceJson - JSON representing FHIR `ImagingStudy`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ImagingStudy
   * @returns ImagingStudy data model or undefined for `ImagingStudy`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): ImagingStudy | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ImagingStudy';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ImagingStudy();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'ImagingStudy');
    fhirParser.processDomainResourceJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

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
        instance.setStatus(null);
      } else {
        instance.setStatusElement(datatype);
      }
    } else {
      instance.setStatus(null);
    }

    fieldName = 'modality';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Coding | undefined = Coding.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addModality(datatype);
        }
      });
    }

    fieldName = 'subject';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setSubject(null);
      } else {
        instance.setSubject(datatype);
      }
    } else {
      instance.setSubject(null);
    }

    fieldName = 'encounter';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setEncounter(datatype);
    }

    fieldName = 'started';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dtJson, dtSiblingJson);
      instance.setStartedElement(datatype);
    }

    fieldName = 'basedOn';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addBasedOn(datatype);
        }
      });
  }

    fieldName = 'referrer';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setReferrer(datatype);
    }

    fieldName = 'interpreter';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addInterpreter(datatype);
        }
      });
  }

    fieldName = 'endpoint';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addEndpoint(datatype);
        }
      });
  }

    fieldName = 'numberOfSeries';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: UnsignedIntType | undefined = fhirParser.parseUnsignedIntType(dtJson, dtSiblingJson);
      instance.setNumberOfSeriesElement(datatype);
    }

    fieldName = 'numberOfInstances';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: UnsignedIntType | undefined = fhirParser.parseUnsignedIntType(dtJson, dtSiblingJson);
      instance.setNumberOfInstancesElement(datatype);
    }

    fieldName = 'procedureReference';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setProcedureReference(datatype);
    }

    fieldName = 'procedureCode';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addProcedureCode(datatype);
        }
      });
    }

    fieldName = 'location';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setLocation(datatype);
    }

    fieldName = 'reasonCode';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addReasonCode(datatype);
        }
      });
    }

    fieldName = 'reasonReference';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addReasonReference(datatype);
        }
      });
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

    fieldName = 'description';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setDescriptionElement(datatype);
    }

    fieldName = 'series';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: ImagingStudySeriesComponent | undefined = ImagingStudySeriesComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addSeries(component);
        }
      });
    }

    return instance;
  }

  /**
   * ImagingStudy.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Identifiers for the whole study
   * - **Definition:** Identifiers for the ImagingStudy such as DICOM Study Instance UID, and Accession Number.
   * - **Comment:** See discussion under [Imaging Study Implementation Notes](https://hl7.org/fhir/imagingstudy.html#notes) for encoding of DICOM Study Instance UID. Accession Number should use ACSN Identifier type.
   * - **Requirements:** If one or more series elements are present in the ImagingStudy, then there shall be one DICOM Study UID identifier (see [DICOM PS 3.3 C.7.2](http://dicom.nema.org/medical/dicom/current/output/chtml/part03/sect_C.7.https://hl7.org/fhir/2.html).
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier[] | undefined;

  /**
   * FHIR CodeSystem: ImagingstudyStatus
   *
   * @see {@link ImagingstudyStatusEnum }
   */
  private readonly imagingstudyStatusEnum: ImagingstudyStatusEnum;

  /**
   * ImagingStudy.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** registered | available | cancelled | entered-in-error | unknown
   * - **Definition:** The current state of the ImagingStudy.
   * - **Comment:** Unknown does not represent "other" - one of the defined statuses must apply.  Unknown is used when the authoring system is not sure what the current status is.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** true
   * - **isModifierReason:** This element is labelled as a modifier because it is a status element that contains status entered-in-error which means that the resource should not be treated as valid
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link ImagingstudyStatusEnum }
   */
  private status: EnumCodeType | null;

  /**
   * ImagingStudy.modality Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** All series modality if actual acquisition modalities
   * - **Definition:** A list of all the series.modality values that are actual acquisition modalities, i.e. those in the DICOM Context Group 29 (value set OID 1.2.840.10008.6.1.19).
   * - **FHIR Type:** `Coding`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private modality?: Coding[] | undefined;

  /**
   * ImagingStudy.subject Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who or what is the subject of the study
   * - **Definition:** The subject, typically a patient, of the imaging study.
   * - **Comment:** QA phantoms can be recorded with a Device; multiple subjects (such as mice) can be recorded with a Group.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/Device',
   *       'http://hl7.org/fhir/StructureDefinition/Group',
   *     ]
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private subject: Reference | null;

  /**
   * ImagingStudy.encounter Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Encounter with which this imaging study is associated
   * - **Definition:** The healthcare event (e.g. a patient and healthcare provider interaction) during which this ImagingStudy is made.
   * - **Comment:** This will typically be the encounter the event occurred within, but some events may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter (e.g. pre-admission test).
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
   * ImagingStudy.started Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When the study was started
   * - **Definition:** Date and time the study started.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private started?: DateTimeType | undefined;

  /**
   * ImagingStudy.basedOn Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Request fulfilled
   * - **Definition:** A list of the diagnostic requests that resulted in this imaging study being performed.
   * - **Requirements:** To support grouped procedures (one imaging study supporting multiple ordered procedures, e.g. chest/abdomen/pelvis CT).
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/CarePlan',
   *       'http://hl7.org/fhir/StructureDefinition/ServiceRequest',
   *       'http://hl7.org/fhir/StructureDefinition/Appointment',
   *       'http://hl7.org/fhir/StructureDefinition/AppointmentResponse',
   *       'http://hl7.org/fhir/StructureDefinition/Task',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private basedOn?: Reference[] | undefined;

  /**
   * ImagingStudy.referrer Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Referring physician
   * - **Definition:** The requesting/referring physician.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private referrer?: Reference | undefined;

  /**
   * ImagingStudy.interpreter Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who interpreted images
   * - **Definition:** Who read the study and interpreted the images or other content.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private interpreter?: Reference[] | undefined;

  /**
   * ImagingStudy.endpoint Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Study access endpoint
   * - **Definition:** The network service providing access (e.g., query, view, or retrieval) for the study. See implementation notes for information about using DICOM endpoints. A study-level endpoint applies to each series in the study, unless overridden by a series-level endpoint with the same Endpoint.connectionType.
   * - **Comment:** Typical endpoint types include DICOM WADO-RS, which is used to retrieve DICOM instances in native or rendered (e.g., JPG, PNG), formats using a RESTful API; DICOM WADO-URI, which can similarly retrieve native or rendered instances, except using an HTTP query-based approach; DICOM QIDO-RS, which allows RESTful query for DICOM information without retrieving the actual instances; or IHE Invoke Image Display (IID), which provides standard invocation of an imaging web viewer.
   * - **Requirements:** Access methods for viewing (e.g., IHE\'s IID profile) or retrieving (e.g., DICOM\'s WADO-URI and WADO-RS) the study or the study\'s series or instances. The study-level baseLocation applies to each series in the study, unless overridden in series by a series-level baseLocation of the same type.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Endpoint',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private endpoint?: Reference[] | undefined;

  /**
   * ImagingStudy.numberOfSeries Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Number of Study Related Series
   * - **Definition:** Number of Series in the Study. This value given may be larger than the number of series elements this Resource contains due to resource availability, security, or other factors. This element should be present if any series elements are present.
   * - **FHIR Type:** `unsignedInt`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private numberOfSeries?: UnsignedIntType | undefined;

  /**
   * ImagingStudy.numberOfInstances Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Number of Study Related Instances
   * - **Definition:** Number of SOP Instances in Study. This value given may be larger than the number of instance elements this resource contains due to resource availability, security, or other factors. This element should be present if any instance elements are present.
   * - **FHIR Type:** `unsignedInt`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private numberOfInstances?: UnsignedIntType | undefined;

  /**
   * ImagingStudy.procedureReference Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The performed Procedure reference
   * - **Definition:** The procedure which this ImagingStudy was part of.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Procedure',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private procedureReference?: Reference | undefined;

  /**
   * ImagingStudy.procedureCode Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The performed procedure code
   * - **Definition:** The code for the performed procedure type.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private procedureCode?: CodeableConcept[] | undefined;

  /**
   * ImagingStudy.location Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Where ImagingStudy occurred
   * - **Definition:** The principal physical location where the ImagingStudy was performed.
   * - **Requirements:** Ties the event to where the records are likely kept and provides context around the event occurrence (e.g. if it occurred inside or outside a dedicated healthcare setting).
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Location',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private location?: Reference | undefined;

  /**
   * ImagingStudy.reasonCode Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Why the study was requested
   * - **Definition:** Description of clinical condition indicating why the ImagingStudy was requested.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private reasonCode?: CodeableConcept[] | undefined;

  /**
   * ImagingStudy.reasonReference Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Why was study performed
   * - **Definition:** Indicates another resource whose existence justifies this Study.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Condition',
   *       'http://hl7.org/fhir/StructureDefinition/Observation',
   *       'http://hl7.org/fhir/StructureDefinition/Media',
   *       'http://hl7.org/fhir/StructureDefinition/DiagnosticReport',
   *       'http://hl7.org/fhir/StructureDefinition/DocumentReference',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private reasonReference?: Reference[] | undefined;

  /**
   * ImagingStudy.note Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** User-defined comments
   * - **Definition:** Per the recommended DICOM mapping, this element is derived from the Study Description attribute (0008,1030). Observations or findings about the imaging study should be recorded in another resource, e.g. Observation, and not in this element.
   * - **FHIR Type:** `Annotation`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private note?: Annotation[] | undefined;

  /**
   * ImagingStudy.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Institution-generated description
   * - **Definition:** The Imaging Manager description of the study. Institution-generated description or classification of the Study (component) performed.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private description?: StringType | undefined;

  /**
   * ImagingStudy.series Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Each study has one or more series of instances
   * - **Definition:** Each study has one or more series of images or other content.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private series?: ImagingStudySeriesComponent[] | undefined;

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
      const optErrMsg = `Invalid ImagingStudy.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid ImagingStudy.identifier; Provided element is not an instance of Identifier.`;
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
   * @see CodeSystem Enumeration: {@link ImagingstudyStatusEnum }
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
   * @see CodeSystem Enumeration: {@link ImagingstudyStatusEnum }
   */
  public setStatusEnumType(enumType: EnumCodeType | undefined | null): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid ImagingStudy.status`;
      assertEnumCodeType<ImagingstudyStatusEnum>(enumType, ImagingstudyStatusEnum, errMsgPrefix);
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
   * @see CodeSystem Enumeration: {@link ImagingstudyStatusEnum }
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
   * @see CodeSystem Enumeration: {@link ImagingstudyStatusEnum }
   */
  public setStatusElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid ImagingStudy.status; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.status = new EnumCodeType(element, this.imagingstudyStatusEnum);
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
   * @see CodeSystem Enumeration: {@link ImagingstudyStatusEnum }
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
   * @see CodeSystem Enumeration: {@link ImagingstudyStatusEnum }
   */
  public setStatus(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid ImagingStudy.status (${String(value)})`;
      this.status = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.imagingstudyStatusEnum);
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
   * @returns the `modality` property value as a Coding array
   */
  public getModality(): Coding[] {
    return this.modality ?? ([] as Coding[]);
  }

  /**
   * Assigns the provided Coding array value to the `modality` property.
   *
   * @param value - the `modality` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setModality(value: Coding[] | undefined): this {
    if (isDefinedList<Coding>(value)) {
      const optErrMsg = `Invalid ImagingStudy.modality; Provided value array has an element that is not an instance of Coding.`;
      assertFhirTypeList<Coding>(value, Coding, optErrMsg);
      this.modality = value;
    } else {
      this.modality = undefined;
    }
    return this;
  }

  /**
   * Add the provided Coding value to the `modality` array property.
   *
   * @param value - the `modality` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addModality(value: Coding | undefined): this {
    if (isDefined<Coding>(value)) {
      const optErrMsg = `Invalid ImagingStudy.modality; Provided element is not an instance of Coding.`;
      assertFhirType<Coding>(value, Coding, optErrMsg);
      this.initModality();
      this.modality?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `modality` property exists and has a value; `false` otherwise
   */
  public hasModality(): boolean {
    return isDefinedList<Coding>(this.modality) && this.modality.some((item: Coding) => !item.isEmpty());
  }

  /**
   * Initialize the `modality` property
   */
  private initModality(): void {
    if(!this.hasModality()) {
      this.modality = [] as Coding[];
    }
  }

  /**
   * @returns the `subject` property value as a Reference object if defined; else an empty Reference object
   */
  public getSubject(): Reference {
    return this.subject ?? new Reference();
  }

  /**
   * Assigns the provided Subject object value to the `subject` property.
   *
   * @decorator `@ReferenceTargets('ImagingStudy.subject', ['Patient','Device','Group',])`
   *
   * @param value - the `subject` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ImagingStudy.subject', [
    'Patient',
  
    'Device',
  
    'Group',
  ])
  public setSubject(value: Reference | undefined | null): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.subject = value;
    } else {
      this.subject = null;
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
   * @decorator `@ReferenceTargets('ImagingStudy.encounter', ['Encounter',])`
   *
   * @param value - the `encounter` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ImagingStudy.encounter', [
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
   * @returns the `started` property value as a DateTimeType object if defined; else an empty DateTimeType object
   */
  public getStartedElement(): DateTimeType {
    return this.started ?? new DateTimeType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `started` property.
   *
   * @param element - the `started` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setStartedElement(element: DateTimeType | undefined): this {
    if (isDefined<DateTimeType>(element)) {
      const optErrMsg = `Invalid ImagingStudy.started; Provided element is not an instance of DateTimeType.`;
      assertFhirType<DateTimeType>(element, DateTimeType, optErrMsg);
      this.started = element;
    } else {
      this.started = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `started` property exists and has a value; `false` otherwise
   */
  public hasStartedElement(): boolean {
    return isDefined<DateTimeType>(this.started) && !this.started.isEmpty();
  }

  /**
   * @returns the `started` property value as a fhirDateTime if defined; else undefined
   */
  public getStarted(): fhirDateTime | undefined {
    return this.started?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `started` property.
   *
   * @param value - the `started` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setStarted(value: fhirDateTime | undefined): this {
    if (isDefined<fhirDateTime>(value)) {
      const optErrMsg = `Invalid ImagingStudy.started (${String(value)})`;
      this.started = new DateTimeType(parseFhirPrimitiveData(value, fhirDateTimeSchema, optErrMsg));
    } else {
      this.started = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `started` property exists and has a value; `false` otherwise
   */
  public hasStarted(): boolean {
    return this.hasStartedElement();
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
   * @decorator `@ReferenceTargets('ImagingStudy.basedOn', ['CarePlan','ServiceRequest','Appointment','AppointmentResponse','Task',])`
   *
   * @param value - the `basedOn` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ImagingStudy.basedOn', [
    'CarePlan',
  
    'ServiceRequest',
  
    'Appointment',
  
    'AppointmentResponse',
  
    'Task',
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
   * @decorator `@ReferenceTargets('ImagingStudy.basedOn', ['CarePlan','ServiceRequest','Appointment','AppointmentResponse','Task',])`
   *
   * @param value - the `basedOn` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ImagingStudy.basedOn', [
    'CarePlan',
  
    'ServiceRequest',
  
    'Appointment',
  
    'AppointmentResponse',
  
    'Task',
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
   * @returns the `referrer` property value as a Reference object; else an empty Reference object
   */
  public getReferrer(): Reference {
    return this.referrer ?? new Reference();
  }

  /**
   * Assigns the provided Referrer object value to the `referrer` property.
   *
   * @decorator `@ReferenceTargets('ImagingStudy.referrer', ['Practitioner','PractitionerRole',])`
   *
   * @param value - the `referrer` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ImagingStudy.referrer', [
    'Practitioner',
  
    'PractitionerRole',
  ])
  public setReferrer(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.referrer = value;
    } else {
      this.referrer = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `referrer` property exists and has a value; `false` otherwise
   */
  public hasReferrer(): boolean {
    return isDefined<Reference>(this.referrer) && !this.referrer.isEmpty();
  }

  /**
   * @returns the `interpreter` property value as a Reference array
   */
  public getInterpreter(): Reference[] {
    return this.interpreter ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `interpreter` property.
   *
   * @decorator `@ReferenceTargets('ImagingStudy.interpreter', ['Practitioner','PractitionerRole',])`
   *
   * @param value - the `interpreter` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ImagingStudy.interpreter', [
    'Practitioner',
  
    'PractitionerRole',
  ])
  public setInterpreter(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.interpreter = value;
    } else {
      this.interpreter = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `interpreter` array property.
   *
   * @decorator `@ReferenceTargets('ImagingStudy.interpreter', ['Practitioner','PractitionerRole',])`
   *
   * @param value - the `interpreter` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ImagingStudy.interpreter', [
    'Practitioner',
  
    'PractitionerRole',
  ])
  public addInterpreter(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initInterpreter();
      this.interpreter?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `interpreter` property exists and has a value; `false` otherwise
   */
  public hasInterpreter(): boolean {
    return isDefinedList<Reference>(this.interpreter) && this.interpreter.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `interpreter` property
   */
  private initInterpreter(): void {
    if (!this.hasInterpreter()) {
      this.interpreter = [] as Reference[];
    }
  }

  /**
   * @returns the `endpoint` property value as a Reference array
   */
  public getEndpoint(): Reference[] {
    return this.endpoint ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `endpoint` property.
   *
   * @decorator `@ReferenceTargets('ImagingStudy.endpoint', ['Endpoint',])`
   *
   * @param value - the `endpoint` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ImagingStudy.endpoint', [
    'Endpoint',
  ])
  public setEndpoint(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.endpoint = value;
    } else {
      this.endpoint = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `endpoint` array property.
   *
   * @decorator `@ReferenceTargets('ImagingStudy.endpoint', ['Endpoint',])`
   *
   * @param value - the `endpoint` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ImagingStudy.endpoint', [
    'Endpoint',
  ])
  public addEndpoint(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initEndpoint();
      this.endpoint?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `endpoint` property exists and has a value; `false` otherwise
   */
  public hasEndpoint(): boolean {
    return isDefinedList<Reference>(this.endpoint) && this.endpoint.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `endpoint` property
   */
  private initEndpoint(): void {
    if (!this.hasEndpoint()) {
      this.endpoint = [] as Reference[];
    }
  }

  /**
   * @returns the `numberOfSeries` property value as a UnsignedIntType object if defined; else an empty UnsignedIntType object
   */
  public getNumberOfSeriesElement(): UnsignedIntType {
    return this.numberOfSeries ?? new UnsignedIntType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `numberOfSeries` property.
   *
   * @param element - the `numberOfSeries` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setNumberOfSeriesElement(element: UnsignedIntType | undefined): this {
    if (isDefined<UnsignedIntType>(element)) {
      const optErrMsg = `Invalid ImagingStudy.numberOfSeries; Provided element is not an instance of UnsignedIntType.`;
      assertFhirType<UnsignedIntType>(element, UnsignedIntType, optErrMsg);
      this.numberOfSeries = element;
    } else {
      this.numberOfSeries = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `numberOfSeries` property exists and has a value; `false` otherwise
   */
  public hasNumberOfSeriesElement(): boolean {
    return isDefined<UnsignedIntType>(this.numberOfSeries) && !this.numberOfSeries.isEmpty();
  }

  /**
   * @returns the `numberOfSeries` property value as a fhirUnsignedInt if defined; else undefined
   */
  public getNumberOfSeries(): fhirUnsignedInt | undefined {
    return this.numberOfSeries?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `numberOfSeries` property.
   *
   * @param value - the `numberOfSeries` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setNumberOfSeries(value: fhirUnsignedInt | undefined): this {
    if (isDefined<fhirUnsignedInt>(value)) {
      const optErrMsg = `Invalid ImagingStudy.numberOfSeries (${String(value)})`;
      this.numberOfSeries = new UnsignedIntType(parseFhirPrimitiveData(value, fhirUnsignedIntSchema, optErrMsg));
    } else {
      this.numberOfSeries = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `numberOfSeries` property exists and has a value; `false` otherwise
   */
  public hasNumberOfSeries(): boolean {
    return this.hasNumberOfSeriesElement();
  }

  /**
   * @returns the `numberOfInstances` property value as a UnsignedIntType object if defined; else an empty UnsignedIntType object
   */
  public getNumberOfInstancesElement(): UnsignedIntType {
    return this.numberOfInstances ?? new UnsignedIntType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `numberOfInstances` property.
   *
   * @param element - the `numberOfInstances` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setNumberOfInstancesElement(element: UnsignedIntType | undefined): this {
    if (isDefined<UnsignedIntType>(element)) {
      const optErrMsg = `Invalid ImagingStudy.numberOfInstances; Provided element is not an instance of UnsignedIntType.`;
      assertFhirType<UnsignedIntType>(element, UnsignedIntType, optErrMsg);
      this.numberOfInstances = element;
    } else {
      this.numberOfInstances = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `numberOfInstances` property exists and has a value; `false` otherwise
   */
  public hasNumberOfInstancesElement(): boolean {
    return isDefined<UnsignedIntType>(this.numberOfInstances) && !this.numberOfInstances.isEmpty();
  }

  /**
   * @returns the `numberOfInstances` property value as a fhirUnsignedInt if defined; else undefined
   */
  public getNumberOfInstances(): fhirUnsignedInt | undefined {
    return this.numberOfInstances?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `numberOfInstances` property.
   *
   * @param value - the `numberOfInstances` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setNumberOfInstances(value: fhirUnsignedInt | undefined): this {
    if (isDefined<fhirUnsignedInt>(value)) {
      const optErrMsg = `Invalid ImagingStudy.numberOfInstances (${String(value)})`;
      this.numberOfInstances = new UnsignedIntType(parseFhirPrimitiveData(value, fhirUnsignedIntSchema, optErrMsg));
    } else {
      this.numberOfInstances = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `numberOfInstances` property exists and has a value; `false` otherwise
   */
  public hasNumberOfInstances(): boolean {
    return this.hasNumberOfInstancesElement();
  }

  /**
   * @returns the `procedureReference` property value as a Reference object; else an empty Reference object
   */
  public getProcedureReference(): Reference {
    return this.procedureReference ?? new Reference();
  }

  /**
   * Assigns the provided ProcedureReference object value to the `procedureReference` property.
   *
   * @decorator `@ReferenceTargets('ImagingStudy.procedureReference', ['Procedure',])`
   *
   * @param value - the `procedureReference` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ImagingStudy.procedureReference', [
    'Procedure',
  ])
  public setProcedureReference(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.procedureReference = value;
    } else {
      this.procedureReference = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `procedureReference` property exists and has a value; `false` otherwise
   */
  public hasProcedureReference(): boolean {
    return isDefined<Reference>(this.procedureReference) && !this.procedureReference.isEmpty();
  }

  /**
   * @returns the `procedureCode` property value as a CodeableConcept array
   */
  public getProcedureCode(): CodeableConcept[] {
    return this.procedureCode ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `procedureCode` property.
   *
   * @param value - the `procedureCode` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setProcedureCode(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid ImagingStudy.procedureCode; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.procedureCode = value;
    } else {
      this.procedureCode = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `procedureCode` array property.
   *
   * @param value - the `procedureCode` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addProcedureCode(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid ImagingStudy.procedureCode; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initProcedureCode();
      this.procedureCode?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `procedureCode` property exists and has a value; `false` otherwise
   */
  public hasProcedureCode(): boolean {
    return isDefinedList<CodeableConcept>(this.procedureCode) && this.procedureCode.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `procedureCode` property
   */
  private initProcedureCode(): void {
    if(!this.hasProcedureCode()) {
      this.procedureCode = [] as CodeableConcept[];
    }
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
   * @decorator `@ReferenceTargets('ImagingStudy.location', ['Location',])`
   *
   * @param value - the `location` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ImagingStudy.location', [
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
   * @returns the `reasonCode` property value as a CodeableConcept array
   */
  public getReasonCode(): CodeableConcept[] {
    return this.reasonCode ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `reasonCode` property.
   *
   * @param value - the `reasonCode` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setReasonCode(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid ImagingStudy.reasonCode; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.reasonCode = value;
    } else {
      this.reasonCode = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `reasonCode` array property.
   *
   * @param value - the `reasonCode` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addReasonCode(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid ImagingStudy.reasonCode; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initReasonCode();
      this.reasonCode?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `reasonCode` property exists and has a value; `false` otherwise
   */
  public hasReasonCode(): boolean {
    return isDefinedList<CodeableConcept>(this.reasonCode) && this.reasonCode.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `reasonCode` property
   */
  private initReasonCode(): void {
    if(!this.hasReasonCode()) {
      this.reasonCode = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `reasonReference` property value as a Reference array
   */
  public getReasonReference(): Reference[] {
    return this.reasonReference ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `reasonReference` property.
   *
   * @decorator `@ReferenceTargets('ImagingStudy.reasonReference', ['Condition','Observation','Media','DiagnosticReport','DocumentReference',])`
   *
   * @param value - the `reasonReference` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ImagingStudy.reasonReference', [
    'Condition',
  
    'Observation',
  
    'Media',
  
    'DiagnosticReport',
  
    'DocumentReference',
  ])
  public setReasonReference(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.reasonReference = value;
    } else {
      this.reasonReference = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `reasonReference` array property.
   *
   * @decorator `@ReferenceTargets('ImagingStudy.reasonReference', ['Condition','Observation','Media','DiagnosticReport','DocumentReference',])`
   *
   * @param value - the `reasonReference` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ImagingStudy.reasonReference', [
    'Condition',
  
    'Observation',
  
    'Media',
  
    'DiagnosticReport',
  
    'DocumentReference',
  ])
  public addReasonReference(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initReasonReference();
      this.reasonReference?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `reasonReference` property exists and has a value; `false` otherwise
   */
  public hasReasonReference(): boolean {
    return isDefinedList<Reference>(this.reasonReference) && this.reasonReference.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `reasonReference` property
   */
  private initReasonReference(): void {
    if (!this.hasReasonReference()) {
      this.reasonReference = [] as Reference[];
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
      const optErrMsg = `Invalid ImagingStudy.note; Provided value array has an element that is not an instance of Annotation.`;
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
      const optErrMsg = `Invalid ImagingStudy.note; Provided element is not an instance of Annotation.`;
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
   * @returns the `description` property value as a StringType object if defined; else an empty StringType object
   */
  public getDescriptionElement(): StringType {
    return this.description ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `description` property.
   *
   * @param element - the `description` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDescriptionElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid ImagingStudy.description; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
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
    return isDefined<StringType>(this.description) && !this.description.isEmpty();
  }

  /**
   * @returns the `description` property value as a fhirString if defined; else undefined
   */
  public getDescription(): fhirString | undefined {
    return this.description?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `description` property.
   *
   * @param value - the `description` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDescription(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid ImagingStudy.description (${String(value)})`;
      this.description = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
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
   * @returns the `series` property value as a ImagingStudySeriesComponent array
   */
  public getSeries(): ImagingStudySeriesComponent[] {
    return this.series ?? ([] as ImagingStudySeriesComponent[]);
  }

  /**
   * Assigns the provided ImagingStudySeriesComponent array value to the `series` property.
   *
   * @param value - the `series` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSeries(value: ImagingStudySeriesComponent[] | undefined): this {
    if (isDefinedList<ImagingStudySeriesComponent>(value)) {
      const optErrMsg = `Invalid ImagingStudy.series; Provided value array has an element that is not an instance of ImagingStudySeriesComponent.`;
      assertFhirTypeList<ImagingStudySeriesComponent>(value, ImagingStudySeriesComponent, optErrMsg);
      this.series = value;
    } else {
      this.series = undefined;
    }
    return this;
  }

  /**
   * Add the provided ImagingStudySeriesComponent value to the `series` array property.
   *
   * @param value - the `series` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addSeries(value: ImagingStudySeriesComponent | undefined): this {
    if (isDefined<ImagingStudySeriesComponent>(value)) {
      const optErrMsg = `Invalid ImagingStudy.series; Provided element is not an instance of ImagingStudySeriesComponent.`;
      assertFhirType<ImagingStudySeriesComponent>(value, ImagingStudySeriesComponent, optErrMsg);
      this.initSeries();
      this.series?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `series` property exists and has a value; `false` otherwise
   */
  public hasSeries(): boolean {
    return isDefinedList<ImagingStudySeriesComponent>(this.series) && this.series.some((item: ImagingStudySeriesComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `series` property
   */
  private initSeries(): void {
    if(!this.hasSeries()) {
      this.series = [] as ImagingStudySeriesComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'ImagingStudy';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identifier,
      this.status,
      this.modality,
      this.subject,
      this.encounter,
      this.started,
      this.basedOn,
      this.referrer,
      this.interpreter,
      this.endpoint,
      this.numberOfSeries,
      this.numberOfInstances,
      this.procedureReference,
      this.procedureCode,
      this.location,
      this.reasonCode,
      this.reasonReference,
      this.note,
      this.description,
      this.series,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.status, this.subject, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ImagingStudy {
    const dest = new ImagingStudy();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ImagingStudy): void {
    super.copyValues(dest);
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    dest.status = this.status ? this.status.copy() : null;
    const modalityList = copyListValues<Coding>(this.modality);
    dest.modality = modalityList.length === 0 ? undefined : modalityList;
    dest.subject = this.subject ? this.subject.copy() : null;
    dest.encounter = this.encounter?.copy();
    dest.started = this.started?.copy();
    const basedOnList = copyListValues<Reference>(this.basedOn);
    dest.basedOn = basedOnList.length === 0 ? undefined : basedOnList;
    dest.referrer = this.referrer?.copy();
    const interpreterList = copyListValues<Reference>(this.interpreter);
    dest.interpreter = interpreterList.length === 0 ? undefined : interpreterList;
    const endpointList = copyListValues<Reference>(this.endpoint);
    dest.endpoint = endpointList.length === 0 ? undefined : endpointList;
    dest.numberOfSeries = this.numberOfSeries?.copy();
    dest.numberOfInstances = this.numberOfInstances?.copy();
    dest.procedureReference = this.procedureReference?.copy();
    const procedureCodeList = copyListValues<CodeableConcept>(this.procedureCode);
    dest.procedureCode = procedureCodeList.length === 0 ? undefined : procedureCodeList;
    dest.location = this.location?.copy();
    const reasonCodeList = copyListValues<CodeableConcept>(this.reasonCode);
    dest.reasonCode = reasonCodeList.length === 0 ? undefined : reasonCodeList;
    const reasonReferenceList = copyListValues<Reference>(this.reasonReference);
    dest.reasonReference = reasonReferenceList.length === 0 ? undefined : reasonReferenceList;
    const noteList = copyListValues<Annotation>(this.note);
    dest.note = noteList.length === 0 ? undefined : noteList;
    dest.description = this.description?.copy();
    const seriesList = copyListValues<ImagingStudySeriesComponent>(this.series);
    dest.series = seriesList.length === 0 ? undefined : seriesList;
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
    } else {
      jsonObj['status'] = null;
    }

    if (this.hasModality()) {
      setFhirComplexListJson(this.getModality(), 'modality', jsonObj);
    }

    if (this.hasSubject()) {
      setFhirComplexJson(this.getSubject(), 'subject', jsonObj);
    } else {
      jsonObj['subject'] = null;
    }

    if (this.hasEncounter()) {
      setFhirComplexJson(this.getEncounter(), 'encounter', jsonObj);
    }

    if (this.hasStartedElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getStartedElement(), 'started', jsonObj);
    }

    if (this.hasBasedOn()) {
      setFhirComplexListJson(this.getBasedOn(), 'basedOn', jsonObj);
    }

    if (this.hasReferrer()) {
      setFhirComplexJson(this.getReferrer(), 'referrer', jsonObj);
    }

    if (this.hasInterpreter()) {
      setFhirComplexListJson(this.getInterpreter(), 'interpreter', jsonObj);
    }

    if (this.hasEndpoint()) {
      setFhirComplexListJson(this.getEndpoint(), 'endpoint', jsonObj);
    }

    if (this.hasNumberOfSeriesElement()) {
      setFhirPrimitiveJson<fhirUnsignedInt>(this.getNumberOfSeriesElement(), 'numberOfSeries', jsonObj);
    }

    if (this.hasNumberOfInstancesElement()) {
      setFhirPrimitiveJson<fhirUnsignedInt>(this.getNumberOfInstancesElement(), 'numberOfInstances', jsonObj);
    }

    if (this.hasProcedureReference()) {
      setFhirComplexJson(this.getProcedureReference(), 'procedureReference', jsonObj);
    }

    if (this.hasProcedureCode()) {
      setFhirComplexListJson(this.getProcedureCode(), 'procedureCode', jsonObj);
    }

    if (this.hasLocation()) {
      setFhirComplexJson(this.getLocation(), 'location', jsonObj);
    }

    if (this.hasReasonCode()) {
      setFhirComplexListJson(this.getReasonCode(), 'reasonCode', jsonObj);
    }

    if (this.hasReasonReference()) {
      setFhirComplexListJson(this.getReasonReference(), 'reasonReference', jsonObj);
    }

    if (this.hasNote()) {
      setFhirComplexListJson(this.getNote(), 'note', jsonObj);
    }

    if (this.hasDescriptionElement()) {
      setFhirPrimitiveJson<fhirString>(this.getDescriptionElement(), 'description', jsonObj);
    }

    if (this.hasSeries()) {
      setFhirBackboneElementListJson(this.getSeries(), 'series', jsonObj);
    }

    return jsonObj;
  }
}

/**
 * ImagingStudySeriesComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Each study has one or more series of instances
 * - **Definition:** Each study has one or more series of images or other content.
 *
 * @category Data Models: Resource
 * @see [FHIR ImagingStudy](http://hl7.org/fhir/StructureDefinition/ImagingStudy)
 */
export class ImagingStudySeriesComponent extends BackboneElement implements IBackboneElement {
  constructor(uid: IdType | fhirId | null = null, modality: Coding | null = null) {
    super();

    this.uid = null;
    if (isDefined<IdType | fhirId>(uid)) {
      if (uid instanceof PrimitiveType) {
        this.setUidElement(uid);
      } else {
        this.setUid(uid);
      }
    }

    this.modality = null;
    if (isDefined<Coding>(modality)) {
      this.setModality(modality);
    }
  }

  /**
   * Parse the provided `ImagingStudySeriesComponent` JSON to instantiate the ImagingStudySeriesComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ImagingStudySeriesComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ImagingStudySeriesComponent
   * @returns ImagingStudySeriesComponent data model or undefined for `ImagingStudySeriesComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ImagingStudySeriesComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ImagingStudySeriesComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ImagingStudySeriesComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'uid';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: IdType | undefined = fhirParser.parseIdType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setUid(null);
      } else {
        instance.setUidElement(datatype);
      }
    } else {
      instance.setUid(null);
    }

    fieldName = 'number';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: UnsignedIntType | undefined = fhirParser.parseUnsignedIntType(dtJson, dtSiblingJson);
      instance.setNumberElement(datatype);
    }

    fieldName = 'modality';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Coding | undefined = Coding.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setModality(null);
      } else {
        instance.setModality(datatype);
      }
    } else {
      instance.setModality(null);
    }

    fieldName = 'description';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setDescriptionElement(datatype);
    }

    fieldName = 'numberOfInstances';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: UnsignedIntType | undefined = fhirParser.parseUnsignedIntType(dtJson, dtSiblingJson);
      instance.setNumberOfInstancesElement(datatype);
    }

    fieldName = 'endpoint';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addEndpoint(datatype);
        }
      });
  }

    fieldName = 'bodySite';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Coding | undefined = Coding.parse(classJsonObj[fieldName]!, sourceField);
      instance.setBodySite(datatype);
    }

    fieldName = 'laterality';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Coding | undefined = Coding.parse(classJsonObj[fieldName]!, sourceField);
      instance.setLaterality(datatype);
    }

    fieldName = 'specimen';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addSpecimen(datatype);
        }
      });
  }

    fieldName = 'started';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dtJson, dtSiblingJson);
      instance.setStartedElement(datatype);
    }

    fieldName = 'performer';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: ImagingStudySeriesPerformerComponent | undefined = ImagingStudySeriesPerformerComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addPerformer(component);
        }
      });
    }

    fieldName = 'instance';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: ImagingStudySeriesInstanceComponent | undefined = ImagingStudySeriesInstanceComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addInstance(component);
        }
      });
    }

    return instance;
  }

  /**
   * ImagingStudy.series.uid Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** DICOM Series Instance UID for the series
   * - **Definition:** The DICOM Series Instance UID for the series.
   * - **Comment:** See [DICOM PS3.3 C.7.3](http://dicom.nema.org/medical/dicom/current/output/chtml/part03/sect_C.7.https://hl7.org/fhir/3.html).
   * - **Requirements:** DICOM Series Instance UID.
   * - **FHIR Type:** `id`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private uid: IdType | null;

  /**
   * ImagingStudy.series.number Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Numeric identifier of this series
   * - **Definition:** The numeric identifier of this series in the study.
   * - **FHIR Type:** `unsignedInt`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private number?: UnsignedIntType | undefined;

  /**
   * ImagingStudy.series.modality Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The modality of the instances in the series
   * - **Definition:** The modality of this series sequence.
   * - **FHIR Type:** `Coding`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private modality: Coding | null;

  /**
   * ImagingStudy.series.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A short human readable summary of the series
   * - **Definition:** A description of the series.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private description?: StringType | undefined;

  /**
   * ImagingStudy.series.numberOfInstances Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Number of Series Related Instances
   * - **Definition:** Number of SOP Instances in the Study. The value given may be larger than the number of instance elements this resource contains due to resource availability, security, or other factors. This element should be present if any instance elements are present.
   * - **FHIR Type:** `unsignedInt`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private numberOfInstances?: UnsignedIntType | undefined;

  /**
   * ImagingStudy.series.endpoint Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Series access endpoint
   * - **Definition:** The network service providing access (e.g., query, view, or retrieval) for this series. See implementation notes for information about using DICOM endpoints. A series-level endpoint, if present, has precedence over a study-level endpoint with the same Endpoint.connectionType.
   * - **Comment:** Typical endpoint types include DICOM WADO-RS, which is used to retrieve DICOM instances in native or rendered (e.g., JPG, PNG) formats using a RESTful API; DICOM WADO-URI, which can similarly retrieve native or rendered instances, except using an HTTP query-based approach; and DICOM QIDO-RS, which allows RESTful query for DICOM information without retrieving the actual instances.
   * - **Requirements:** Access methods for retrieving (e.g., DICOM\'s WADO-URI and WADO-RS) the series or the series\' instances. A baseLocation specified at the series level has precedence over a baseLocation of the same type specified at the study level.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Endpoint',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private endpoint?: Reference[] | undefined;

  /**
   * ImagingStudy.series.bodySite Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Body part examined
   * - **Definition:** The anatomic structures examined. See DICOM Part 16 Annex L (http://dicom.nema.org/medical/dicom/current/output/chtml/part16/chapter_https://hl7.org/fhir/L.html) for DICOM to SNOMED-CT mappings. The bodySite may indicate the laterality of body part imaged; if so, it shall be consistent with any content of ImagingStudy.series.laterality.
   * - **FHIR Type:** `Coding`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private bodySite?: Coding | undefined;

  /**
   * ImagingStudy.series.laterality Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Body part laterality
   * - **Definition:** The laterality of the (possibly paired) anatomic structures examined. E.g., the left knee, both lungs, or unpaired abdomen. If present, shall be consistent with any laterality information indicated in ImagingStudy.series.bodySite.
   * - **FHIR Type:** `Coding`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private laterality?: Coding | undefined;

  /**
   * ImagingStudy.series.specimen Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Specimen imaged
   * - **Definition:** The specimen imaged, e.g., for whole slide imaging of a biopsy.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Specimen',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private specimen?: Reference[] | undefined;

  /**
   * ImagingStudy.series.started Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When the series started
   * - **Definition:** The date and time the series was started.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private started?: DateTimeType | undefined;

  /**
   * ImagingStudy.series.performer Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who performed the series
   * - **Definition:** Indicates who or what performed the series and how they were involved.
   * - **Comment:** If the person who performed the series is not known, their Organization may be recorded. A patient, or related person, may be the performer, e.g. for patient-captured images.
   * - **Requirements:** The performer is recorded at the series level, since each series in a study may be performed by a different performer, at different times, and using different devices. A series may be performed by multiple performers.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private performer?: ImagingStudySeriesPerformerComponent[] | undefined;

  /**
   * ImagingStudy.series.instance Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A single SOP instance from the series
   * - **Definition:** A single SOP instance within the series, e.g. an image, or presentation state.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private instance_?: ImagingStudySeriesInstanceComponent[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `uid` property value as a IdType object if defined; else an empty IdType object
   */
  public getUidElement(): IdType {
    return this.uid ?? new IdType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `uid` property.
   *
   * @param element - the `uid` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setUidElement(element: IdType | undefined | null): this {
    if (isDefined<IdType>(element)) {
      const optErrMsg = `Invalid ImagingStudy.series.uid; Provided value is not an instance of IdType.`;
      assertFhirType<IdType>(element, IdType, optErrMsg);
      this.uid = element;
    } else {
      this.uid = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `uid` property exists and has a value; `false` otherwise
   */
  public hasUidElement(): boolean {
    return isDefined<IdType>(this.uid) && !this.uid.isEmpty();
  }

  /**
   * @returns the `uid` property value as a fhirId if defined; else null
   */
  public getUid(): fhirId | null {
    if (this.uid?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.uid.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `uid` property.
   *
   * @param value - the `uid` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setUid(value: fhirId | undefined | null): this {
    if (isDefined<fhirId>(value)) {
      const optErrMsg = `Invalid ImagingStudy.series.uid (${String(value)})`;
      this.uid = new IdType(parseFhirPrimitiveData(value, fhirIdSchema, optErrMsg));
    } else {
      this.uid = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `uid` property exists and has a value; `false` otherwise
   */
  public hasUid(): boolean {
    return this.hasUidElement();
  }

  /**
   * @returns the `number` property value as a UnsignedIntType object if defined; else an empty UnsignedIntType object
   */
  public getNumberElement(): UnsignedIntType {
    return this.number ?? new UnsignedIntType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `number` property.
   *
   * @param element - the `number` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setNumberElement(element: UnsignedIntType | undefined): this {
    if (isDefined<UnsignedIntType>(element)) {
      const optErrMsg = `Invalid ImagingStudy.series.number; Provided element is not an instance of UnsignedIntType.`;
      assertFhirType<UnsignedIntType>(element, UnsignedIntType, optErrMsg);
      this.number = element;
    } else {
      this.number = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `number` property exists and has a value; `false` otherwise
   */
  public hasNumberElement(): boolean {
    return isDefined<UnsignedIntType>(this.number) && !this.number.isEmpty();
  }

  /**
   * @returns the `number` property value as a fhirUnsignedInt if defined; else undefined
   */
  public getNumber(): fhirUnsignedInt | undefined {
    return this.number?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `number` property.
   *
   * @param value - the `number` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setNumber(value: fhirUnsignedInt | undefined): this {
    if (isDefined<fhirUnsignedInt>(value)) {
      const optErrMsg = `Invalid ImagingStudy.series.number (${String(value)})`;
      this.number = new UnsignedIntType(parseFhirPrimitiveData(value, fhirUnsignedIntSchema, optErrMsg));
    } else {
      this.number = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `number` property exists and has a value; `false` otherwise
   */
  public hasNumber(): boolean {
    return this.hasNumberElement();
  }

  /**
   * @returns the `modality` property value as a Coding object if defined; else an empty Coding object
   */
  public getModality(): Coding {
    return this.modality ?? new Coding();
  }

  /**
   * Assigns the provided Coding object value to the `modality` property.
   *
   * @param value - the `modality` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setModality(value: Coding | undefined | null): this {
    if (isDefined<Coding>(value)) {
      const optErrMsg = `Invalid ImagingStudy.series.modality; Provided element is not an instance of Coding.`;
      assertFhirType<Coding>(value, Coding, optErrMsg);
      this.modality = value;
    } else {
      this.modality = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `modality` property exists and has a value; `false` otherwise
   */
  public hasModality(): boolean {
    return isDefined<Coding>(this.modality) && !this.modality.isEmpty();
  }

  /**
   * @returns the `description` property value as a StringType object if defined; else an empty StringType object
   */
  public getDescriptionElement(): StringType {
    return this.description ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `description` property.
   *
   * @param element - the `description` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDescriptionElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid ImagingStudy.series.description; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
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
    return isDefined<StringType>(this.description) && !this.description.isEmpty();
  }

  /**
   * @returns the `description` property value as a fhirString if defined; else undefined
   */
  public getDescription(): fhirString | undefined {
    return this.description?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `description` property.
   *
   * @param value - the `description` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDescription(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid ImagingStudy.series.description (${String(value)})`;
      this.description = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
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
   * @returns the `numberOfInstances` property value as a UnsignedIntType object if defined; else an empty UnsignedIntType object
   */
  public getNumberOfInstancesElement(): UnsignedIntType {
    return this.numberOfInstances ?? new UnsignedIntType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `numberOfInstances` property.
   *
   * @param element - the `numberOfInstances` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setNumberOfInstancesElement(element: UnsignedIntType | undefined): this {
    if (isDefined<UnsignedIntType>(element)) {
      const optErrMsg = `Invalid ImagingStudy.series.numberOfInstances; Provided element is not an instance of UnsignedIntType.`;
      assertFhirType<UnsignedIntType>(element, UnsignedIntType, optErrMsg);
      this.numberOfInstances = element;
    } else {
      this.numberOfInstances = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `numberOfInstances` property exists and has a value; `false` otherwise
   */
  public hasNumberOfInstancesElement(): boolean {
    return isDefined<UnsignedIntType>(this.numberOfInstances) && !this.numberOfInstances.isEmpty();
  }

  /**
   * @returns the `numberOfInstances` property value as a fhirUnsignedInt if defined; else undefined
   */
  public getNumberOfInstances(): fhirUnsignedInt | undefined {
    return this.numberOfInstances?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `numberOfInstances` property.
   *
   * @param value - the `numberOfInstances` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setNumberOfInstances(value: fhirUnsignedInt | undefined): this {
    if (isDefined<fhirUnsignedInt>(value)) {
      const optErrMsg = `Invalid ImagingStudy.series.numberOfInstances (${String(value)})`;
      this.numberOfInstances = new UnsignedIntType(parseFhirPrimitiveData(value, fhirUnsignedIntSchema, optErrMsg));
    } else {
      this.numberOfInstances = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `numberOfInstances` property exists and has a value; `false` otherwise
   */
  public hasNumberOfInstances(): boolean {
    return this.hasNumberOfInstancesElement();
  }

  /**
   * @returns the `endpoint` property value as a Reference array
   */
  public getEndpoint(): Reference[] {
    return this.endpoint ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `endpoint` property.
   *
   * @decorator `@ReferenceTargets('ImagingStudy.series.endpoint', ['Endpoint',])`
   *
   * @param value - the `endpoint` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ImagingStudy.series.endpoint', [
    'Endpoint',
  ])
  public setEndpoint(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.endpoint = value;
    } else {
      this.endpoint = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `endpoint` array property.
   *
   * @decorator `@ReferenceTargets('ImagingStudy.series.endpoint', ['Endpoint',])`
   *
   * @param value - the `endpoint` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ImagingStudy.series.endpoint', [
    'Endpoint',
  ])
  public addEndpoint(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initEndpoint();
      this.endpoint?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `endpoint` property exists and has a value; `false` otherwise
   */
  public hasEndpoint(): boolean {
    return isDefinedList<Reference>(this.endpoint) && this.endpoint.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `endpoint` property
   */
  private initEndpoint(): void {
    if (!this.hasEndpoint()) {
      this.endpoint = [] as Reference[];
    }
  }

  /**
   * @returns the `bodySite` property value as a Coding object if defined; else an empty Coding object
   */
  public getBodySite(): Coding {
    return this.bodySite ?? new Coding();
  }

  /**
   * Assigns the provided BodySite object value to the `bodySite` property.
   *
   * @param value - the `bodySite` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setBodySite(value: Coding | undefined): this {
    if (isDefined<Coding>(value)) {
      const optErrMsg = `Invalid ImagingStudy.series.bodySite; Provided element is not an instance of Coding.`;
      assertFhirType<Coding>(value, Coding, optErrMsg);
      this.bodySite = value;
    } else {
      this.bodySite = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `bodySite` property exists and has a value; `false` otherwise
   */
  public hasBodySite(): boolean {
    return isDefined<Coding>(this.bodySite) && !this.bodySite.isEmpty();
  }

  /**
   * @returns the `laterality` property value as a Coding object if defined; else an empty Coding object
   */
  public getLaterality(): Coding {
    return this.laterality ?? new Coding();
  }

  /**
   * Assigns the provided Laterality object value to the `laterality` property.
   *
   * @param value - the `laterality` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setLaterality(value: Coding | undefined): this {
    if (isDefined<Coding>(value)) {
      const optErrMsg = `Invalid ImagingStudy.series.laterality; Provided element is not an instance of Coding.`;
      assertFhirType<Coding>(value, Coding, optErrMsg);
      this.laterality = value;
    } else {
      this.laterality = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `laterality` property exists and has a value; `false` otherwise
   */
  public hasLaterality(): boolean {
    return isDefined<Coding>(this.laterality) && !this.laterality.isEmpty();
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
   * @decorator `@ReferenceTargets('ImagingStudy.series.specimen', ['Specimen',])`
   *
   * @param value - the `specimen` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ImagingStudy.series.specimen', [
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
   * @decorator `@ReferenceTargets('ImagingStudy.series.specimen', ['Specimen',])`
   *
   * @param value - the `specimen` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ImagingStudy.series.specimen', [
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
   * @returns the `started` property value as a DateTimeType object if defined; else an empty DateTimeType object
   */
  public getStartedElement(): DateTimeType {
    return this.started ?? new DateTimeType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `started` property.
   *
   * @param element - the `started` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setStartedElement(element: DateTimeType | undefined): this {
    if (isDefined<DateTimeType>(element)) {
      const optErrMsg = `Invalid ImagingStudy.series.started; Provided element is not an instance of DateTimeType.`;
      assertFhirType<DateTimeType>(element, DateTimeType, optErrMsg);
      this.started = element;
    } else {
      this.started = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `started` property exists and has a value; `false` otherwise
   */
  public hasStartedElement(): boolean {
    return isDefined<DateTimeType>(this.started) && !this.started.isEmpty();
  }

  /**
   * @returns the `started` property value as a fhirDateTime if defined; else undefined
   */
  public getStarted(): fhirDateTime | undefined {
    return this.started?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `started` property.
   *
   * @param value - the `started` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setStarted(value: fhirDateTime | undefined): this {
    if (isDefined<fhirDateTime>(value)) {
      const optErrMsg = `Invalid ImagingStudy.series.started (${String(value)})`;
      this.started = new DateTimeType(parseFhirPrimitiveData(value, fhirDateTimeSchema, optErrMsg));
    } else {
      this.started = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `started` property exists and has a value; `false` otherwise
   */
  public hasStarted(): boolean {
    return this.hasStartedElement();
  }

  /**
   * @returns the `performer` property value as a ImagingStudySeriesPerformerComponent array
   */
  public getPerformer(): ImagingStudySeriesPerformerComponent[] {
    return this.performer ?? ([] as ImagingStudySeriesPerformerComponent[]);
  }

  /**
   * Assigns the provided ImagingStudySeriesPerformerComponent array value to the `performer` property.
   *
   * @param value - the `performer` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPerformer(value: ImagingStudySeriesPerformerComponent[] | undefined): this {
    if (isDefinedList<ImagingStudySeriesPerformerComponent>(value)) {
      const optErrMsg = `Invalid ImagingStudy.series.performer; Provided value array has an element that is not an instance of ImagingStudySeriesPerformerComponent.`;
      assertFhirTypeList<ImagingStudySeriesPerformerComponent>(value, ImagingStudySeriesPerformerComponent, optErrMsg);
      this.performer = value;
    } else {
      this.performer = undefined;
    }
    return this;
  }

  /**
   * Add the provided ImagingStudySeriesPerformerComponent value to the `performer` array property.
   *
   * @param value - the `performer` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addPerformer(value: ImagingStudySeriesPerformerComponent | undefined): this {
    if (isDefined<ImagingStudySeriesPerformerComponent>(value)) {
      const optErrMsg = `Invalid ImagingStudy.series.performer; Provided element is not an instance of ImagingStudySeriesPerformerComponent.`;
      assertFhirType<ImagingStudySeriesPerformerComponent>(value, ImagingStudySeriesPerformerComponent, optErrMsg);
      this.initPerformer();
      this.performer?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `performer` property exists and has a value; `false` otherwise
   */
  public hasPerformer(): boolean {
    return isDefinedList<ImagingStudySeriesPerformerComponent>(this.performer) && this.performer.some((item: ImagingStudySeriesPerformerComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `performer` property
   */
  private initPerformer(): void {
    if(!this.hasPerformer()) {
      this.performer = [] as ImagingStudySeriesPerformerComponent[];
    }
  }

  /**
   * @returns the `instance_` property value as a ImagingStudySeriesInstanceComponent array
   */
  public getInstance(): ImagingStudySeriesInstanceComponent[] {
    return this.instance_ ?? ([] as ImagingStudySeriesInstanceComponent[]);
  }

  /**
   * Assigns the provided ImagingStudySeriesInstanceComponent array value to the `instance_` property.
   *
   * @param value - the `instance_` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setInstance(value: ImagingStudySeriesInstanceComponent[] | undefined): this {
    if (isDefinedList<ImagingStudySeriesInstanceComponent>(value)) {
      const optErrMsg = `Invalid ImagingStudy.series.instance; Provided value array has an element that is not an instance of ImagingStudySeriesInstanceComponent.`;
      assertFhirTypeList<ImagingStudySeriesInstanceComponent>(value, ImagingStudySeriesInstanceComponent, optErrMsg);
      this.instance_ = value;
    } else {
      this.instance_ = undefined;
    }
    return this;
  }

  /**
   * Add the provided ImagingStudySeriesInstanceComponent value to the `instance_` array property.
   *
   * @param value - the `instance_` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addInstance(value: ImagingStudySeriesInstanceComponent | undefined): this {
    if (isDefined<ImagingStudySeriesInstanceComponent>(value)) {
      const optErrMsg = `Invalid ImagingStudy.series.instance; Provided element is not an instance of ImagingStudySeriesInstanceComponent.`;
      assertFhirType<ImagingStudySeriesInstanceComponent>(value, ImagingStudySeriesInstanceComponent, optErrMsg);
      this.initInstance();
      this.instance_?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `instance_` property exists and has a value; `false` otherwise
   */
  public hasInstance(): boolean {
    return isDefinedList<ImagingStudySeriesInstanceComponent>(this.instance_) && this.instance_.some((item: ImagingStudySeriesInstanceComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `instance_` property
   */
  private initInstance(): void {
    if(!this.hasInstance()) {
      this.instance_ = [] as ImagingStudySeriesInstanceComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'ImagingStudy.series';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.uid,
      this.number,
      this.modality,
      this.description,
      this.numberOfInstances,
      this.endpoint,
      this.bodySite,
      this.laterality,
      this.specimen,
      this.started,
      this.performer,
      this.instance_,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.uid, this.modality, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ImagingStudySeriesComponent {
    const dest = new ImagingStudySeriesComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ImagingStudySeriesComponent): void {
    super.copyValues(dest);
    dest.uid = this.uid ? this.uid.copy() : null;
    dest.number = this.number?.copy();
    dest.modality = this.modality ? this.modality.copy() : null;
    dest.description = this.description?.copy();
    dest.numberOfInstances = this.numberOfInstances?.copy();
    const endpointList = copyListValues<Reference>(this.endpoint);
    dest.endpoint = endpointList.length === 0 ? undefined : endpointList;
    dest.bodySite = this.bodySite?.copy();
    dest.laterality = this.laterality?.copy();
    const specimenList = copyListValues<Reference>(this.specimen);
    dest.specimen = specimenList.length === 0 ? undefined : specimenList;
    dest.started = this.started?.copy();
    const performerList = copyListValues<ImagingStudySeriesPerformerComponent>(this.performer);
    dest.performer = performerList.length === 0 ? undefined : performerList;
    const instanceList = copyListValues<ImagingStudySeriesInstanceComponent>(this.instance_);
    dest.instance_ = instanceList.length === 0 ? undefined : instanceList;
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

    if (this.hasUidElement()) {
      setFhirPrimitiveJson<fhirId>(this.getUidElement(), 'uid', jsonObj);
    } else {
      jsonObj['uid'] = null;
    }

    if (this.hasNumberElement()) {
      setFhirPrimitiveJson<fhirUnsignedInt>(this.getNumberElement(), 'number', jsonObj);
    }

    if (this.hasModality()) {
      setFhirComplexJson(this.getModality(), 'modality', jsonObj);
    } else {
      jsonObj['modality'] = null;
    }

    if (this.hasDescriptionElement()) {
      setFhirPrimitiveJson<fhirString>(this.getDescriptionElement(), 'description', jsonObj);
    }

    if (this.hasNumberOfInstancesElement()) {
      setFhirPrimitiveJson<fhirUnsignedInt>(this.getNumberOfInstancesElement(), 'numberOfInstances', jsonObj);
    }

    if (this.hasEndpoint()) {
      setFhirComplexListJson(this.getEndpoint(), 'endpoint', jsonObj);
    }

    if (this.hasBodySite()) {
      setFhirComplexJson(this.getBodySite(), 'bodySite', jsonObj);
    }

    if (this.hasLaterality()) {
      setFhirComplexJson(this.getLaterality(), 'laterality', jsonObj);
    }

    if (this.hasSpecimen()) {
      setFhirComplexListJson(this.getSpecimen(), 'specimen', jsonObj);
    }

    if (this.hasStartedElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getStartedElement(), 'started', jsonObj);
    }

    if (this.hasPerformer()) {
      setFhirBackboneElementListJson(this.getPerformer(), 'performer', jsonObj);
    }

    if (this.hasInstance()) {
      setFhirBackboneElementListJson(this.getInstance(), 'instance', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * ImagingStudySeriesPerformerComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Who performed the series
 * - **Definition:** Indicates who or what performed the series and how they were involved.
 * - **Comment:** If the person who performed the series is not known, their Organization may be recorded. A patient, or related person, may be the performer, e.g. for patient-captured images.
 * - **Requirements:** The performer is recorded at the series level, since each series in a study may be performed by a different performer, at different times, and using different devices. A series may be performed by multiple performers.
 *
 * @category Data Models: Resource
 * @see [FHIR ImagingStudy](http://hl7.org/fhir/StructureDefinition/ImagingStudy)
 */
export class ImagingStudySeriesPerformerComponent extends BackboneElement implements IBackboneElement {
  constructor(actor: Reference | null = null) {
    super();

    this.actor = null;
    if (isDefined<Reference>(actor)) {
      this.setActor(actor);
    }
  }

  /**
   * Parse the provided `ImagingStudySeriesPerformerComponent` JSON to instantiate the ImagingStudySeriesPerformerComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ImagingStudySeriesPerformerComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ImagingStudySeriesPerformerComponent
   * @returns ImagingStudySeriesPerformerComponent data model or undefined for `ImagingStudySeriesPerformerComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ImagingStudySeriesPerformerComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ImagingStudySeriesPerformerComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ImagingStudySeriesPerformerComponent();

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
   * ImagingStudy.series.performer.function Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Type of performance
   * - **Definition:** Distinguishes the type of involvement of the performer in the series.
   * - **Requirements:** Allows disambiguation of the types of involvement of different performers.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private function_?: CodeableConcept | undefined;

  /**
   * ImagingStudy.series.performer.actor Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who performed the series
   * - **Definition:** Indicates who or what performed the series.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *       'http://hl7.org/fhir/StructureDefinition/CareTeam',
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/Device',
   *       'http://hl7.org/fhir/StructureDefinition/RelatedPerson',
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
      const optErrMsg = `Invalid ImagingStudy.series.performer.function; Provided element is not an instance of CodeableConcept.`;
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
   * @decorator `@ReferenceTargets('ImagingStudy.series.performer.actor', ['Practitioner','PractitionerRole','Organization','CareTeam','Patient','Device','RelatedPerson',])`
   *
   * @param value - the `actor` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ImagingStudy.series.performer.actor', [
    'Practitioner',
  
    'PractitionerRole',
  
    'Organization',
  
    'CareTeam',
  
    'Patient',
  
    'Device',
  
    'RelatedPerson',
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
    return 'ImagingStudy.series.performer';
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
  public override copy(): ImagingStudySeriesPerformerComponent {
    const dest = new ImagingStudySeriesPerformerComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ImagingStudySeriesPerformerComponent): void {
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
    } else {
      jsonObj['actor'] = null;
    }

    return jsonObj;
  }
}
/**
 * ImagingStudySeriesInstanceComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** A single SOP instance from the series
 * - **Definition:** A single SOP instance within the series, e.g. an image, or presentation state.
 *
 * @category Data Models: Resource
 * @see [FHIR ImagingStudy](http://hl7.org/fhir/StructureDefinition/ImagingStudy)
 */
export class ImagingStudySeriesInstanceComponent extends BackboneElement implements IBackboneElement {
  constructor(uid: IdType | fhirId | null = null, sopClass: Coding | null = null) {
    super();

    this.uid = null;
    if (isDefined<IdType | fhirId>(uid)) {
      if (uid instanceof PrimitiveType) {
        this.setUidElement(uid);
      } else {
        this.setUid(uid);
      }
    }

    this.sopClass = null;
    if (isDefined<Coding>(sopClass)) {
      this.setSopClass(sopClass);
    }
  }

  /**
   * Parse the provided `ImagingStudySeriesInstanceComponent` JSON to instantiate the ImagingStudySeriesInstanceComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ImagingStudySeriesInstanceComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ImagingStudySeriesInstanceComponent
   * @returns ImagingStudySeriesInstanceComponent data model or undefined for `ImagingStudySeriesInstanceComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ImagingStudySeriesInstanceComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ImagingStudySeriesInstanceComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ImagingStudySeriesInstanceComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'uid';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: IdType | undefined = fhirParser.parseIdType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setUid(null);
      } else {
        instance.setUidElement(datatype);
      }
    } else {
      instance.setUid(null);
    }

    fieldName = 'sopClass';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Coding | undefined = Coding.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setSopClass(null);
      } else {
        instance.setSopClass(datatype);
      }
    } else {
      instance.setSopClass(null);
    }

    fieldName = 'number';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: UnsignedIntType | undefined = fhirParser.parseUnsignedIntType(dtJson, dtSiblingJson);
      instance.setNumberElement(datatype);
    }

    fieldName = 'title';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setTitleElement(datatype);
    }

    return instance;
  }

  /**
   * ImagingStudy.series.instance.uid Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** DICOM SOP Instance UID
   * - **Definition:** The DICOM SOP Instance UID for this image or other DICOM content.
   * - **Comment:** See  [DICOM PS3.3 C.12.1](http://dicom.nema.org/medical/dicom/current/output/chtml/part03/sect_C.12.html#sect_C.12.1).
   * - **Requirements:** DICOM SOP Instance UID.
   * - **FHIR Type:** `id`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private uid: IdType | null;

  /**
   * ImagingStudy.series.instance.sopClass Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** DICOM class type
   * - **Definition:** DICOM instance  type.
   * - **FHIR Type:** `Coding`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private sopClass: Coding | null;

  /**
   * ImagingStudy.series.instance.number Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The number of this instance in the series
   * - **Definition:** The number of instance in the series.
   * - **FHIR Type:** `unsignedInt`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private number?: UnsignedIntType | undefined;

  /**
   * ImagingStudy.series.instance.title Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Description of instance
   * - **Definition:** The description of the instance.
   * - **Comment:** Particularly for post-acquisition analytic objects, such as SR, presentation states, value mapping, etc.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private title?: StringType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `uid` property value as a IdType object if defined; else an empty IdType object
   */
  public getUidElement(): IdType {
    return this.uid ?? new IdType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `uid` property.
   *
   * @param element - the `uid` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setUidElement(element: IdType | undefined | null): this {
    if (isDefined<IdType>(element)) {
      const optErrMsg = `Invalid ImagingStudy.series.instance.uid; Provided value is not an instance of IdType.`;
      assertFhirType<IdType>(element, IdType, optErrMsg);
      this.uid = element;
    } else {
      this.uid = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `uid` property exists and has a value; `false` otherwise
   */
  public hasUidElement(): boolean {
    return isDefined<IdType>(this.uid) && !this.uid.isEmpty();
  }

  /**
   * @returns the `uid` property value as a fhirId if defined; else null
   */
  public getUid(): fhirId | null {
    if (this.uid?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.uid.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `uid` property.
   *
   * @param value - the `uid` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setUid(value: fhirId | undefined | null): this {
    if (isDefined<fhirId>(value)) {
      const optErrMsg = `Invalid ImagingStudy.series.instance.uid (${String(value)})`;
      this.uid = new IdType(parseFhirPrimitiveData(value, fhirIdSchema, optErrMsg));
    } else {
      this.uid = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `uid` property exists and has a value; `false` otherwise
   */
  public hasUid(): boolean {
    return this.hasUidElement();
  }

  /**
   * @returns the `sopClass` property value as a Coding object if defined; else an empty Coding object
   */
  public getSopClass(): Coding {
    return this.sopClass ?? new Coding();
  }

  /**
   * Assigns the provided Coding object value to the `sopClass` property.
   *
   * @param value - the `sopClass` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSopClass(value: Coding | undefined | null): this {
    if (isDefined<Coding>(value)) {
      const optErrMsg = `Invalid ImagingStudy.series.instance.sopClass; Provided element is not an instance of Coding.`;
      assertFhirType<Coding>(value, Coding, optErrMsg);
      this.sopClass = value;
    } else {
      this.sopClass = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `sopClass` property exists and has a value; `false` otherwise
   */
  public hasSopClass(): boolean {
    return isDefined<Coding>(this.sopClass) && !this.sopClass.isEmpty();
  }

  /**
   * @returns the `number` property value as a UnsignedIntType object if defined; else an empty UnsignedIntType object
   */
  public getNumberElement(): UnsignedIntType {
    return this.number ?? new UnsignedIntType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `number` property.
   *
   * @param element - the `number` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setNumberElement(element: UnsignedIntType | undefined): this {
    if (isDefined<UnsignedIntType>(element)) {
      const optErrMsg = `Invalid ImagingStudy.series.instance.number; Provided element is not an instance of UnsignedIntType.`;
      assertFhirType<UnsignedIntType>(element, UnsignedIntType, optErrMsg);
      this.number = element;
    } else {
      this.number = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `number` property exists and has a value; `false` otherwise
   */
  public hasNumberElement(): boolean {
    return isDefined<UnsignedIntType>(this.number) && !this.number.isEmpty();
  }

  /**
   * @returns the `number` property value as a fhirUnsignedInt if defined; else undefined
   */
  public getNumber(): fhirUnsignedInt | undefined {
    return this.number?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `number` property.
   *
   * @param value - the `number` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setNumber(value: fhirUnsignedInt | undefined): this {
    if (isDefined<fhirUnsignedInt>(value)) {
      const optErrMsg = `Invalid ImagingStudy.series.instance.number (${String(value)})`;
      this.number = new UnsignedIntType(parseFhirPrimitiveData(value, fhirUnsignedIntSchema, optErrMsg));
    } else {
      this.number = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `number` property exists and has a value; `false` otherwise
   */
  public hasNumber(): boolean {
    return this.hasNumberElement();
  }

  /**
   * @returns the `title` property value as a StringType object if defined; else an empty StringType object
   */
  public getTitleElement(): StringType {
    return this.title ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `title` property.
   *
   * @param element - the `title` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setTitleElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid ImagingStudy.series.instance.title; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.title = element;
    } else {
      this.title = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `title` property exists and has a value; `false` otherwise
   */
  public hasTitleElement(): boolean {
    return isDefined<StringType>(this.title) && !this.title.isEmpty();
  }

  /**
   * @returns the `title` property value as a fhirString if defined; else undefined
   */
  public getTitle(): fhirString | undefined {
    return this.title?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `title` property.
   *
   * @param value - the `title` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setTitle(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid ImagingStudy.series.instance.title (${String(value)})`;
      this.title = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.title = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `title` property exists and has a value; `false` otherwise
   */
  public hasTitle(): boolean {
    return this.hasTitleElement();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'ImagingStudy.series.instance';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.uid,
      this.sopClass,
      this.number,
      this.title,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.uid, this.sopClass, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ImagingStudySeriesInstanceComponent {
    const dest = new ImagingStudySeriesInstanceComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ImagingStudySeriesInstanceComponent): void {
    super.copyValues(dest);
    dest.uid = this.uid ? this.uid.copy() : null;
    dest.sopClass = this.sopClass ? this.sopClass.copy() : null;
    dest.number = this.number?.copy();
    dest.title = this.title?.copy();
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

    if (this.hasUidElement()) {
      setFhirPrimitiveJson<fhirId>(this.getUidElement(), 'uid', jsonObj);
    } else {
      jsonObj['uid'] = null;
    }

    if (this.hasSopClass()) {
      setFhirComplexJson(this.getSopClass(), 'sopClass', jsonObj);
    } else {
      jsonObj['sopClass'] = null;
    }

    if (this.hasNumberElement()) {
      setFhirPrimitiveJson<fhirUnsignedInt>(this.getNumberElement(), 'number', jsonObj);
    }

    if (this.hasTitleElement()) {
      setFhirPrimitiveJson<fhirString>(this.getTitleElement(), 'title', jsonObj);
    }

    return jsonObj;
  }
}
