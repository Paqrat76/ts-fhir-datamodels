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
 * DeviceUsage Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/DeviceUsage
 * StructureDefinition.name: DeviceUsage
 * StructureDefinition.description: A record of a device being used by a patient where the record is the result of a report from the patient or a clinician.
 * StructureDefinition.fhirVersion: 5.0.0
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
  InvalidTypeError,
  JSON,
  ReferenceTargets,
  assertEnumCodeType,
  assertFhirType,
  assertFhirTypeList,
  assertIsDefined,
  constructorCodeValueAsEnumCodeType,
  copyListValues,
  fhirCode,
  fhirCodeSchema,
  fhirDateTime,
  fhirDateTimeSchema,
  getPrimitiveTypeJson,
  isDefined,
  isDefinedList,
  isElementEmpty,
  isEmpty,
  isRequiredElementEmpty,
  parseFhirPrimitiveData,
  setFhirBackboneElementJson,
  setFhirComplexJson,
  setFhirComplexListJson,
  setFhirPrimitiveJson,
  setPolymorphicValueJson,
} from '@paq-ts-fhir/fhir-core';
import { Annotation, CodeableConcept, CodeableReference, Identifier, PARSABLE_DATATYPE_MAP, Period, Reference, Timing } from '../complex-types/complex-datatypes';
import { DeviceusageStatusEnum } from '../code-systems/DeviceusageStatusEnum';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Symbol.metadata polyfill secret sauce for decorator metadata
(Symbol.metadata as any) ??= Symbol('Symbol.metadata');

/**
 * DeviceUsage Class
 *
 * @remarks
 * A record of a device being used by a patient where the record is the result of a report from the patient or a clinician.
 *
 * **FHIR Specification**
 * - **Short:** Record of use of a device
 * - **Definition:** A record of a device being used by a patient where the record is the result of a report from the patient or a clinician.
 * - **FHIR Version:** 5.0.0
 *
 * @category Data Models: Resource
 * @see [FHIR DeviceUsage](http://hl7.org/fhir/StructureDefinition/DeviceUsage)
 */
export class DeviceUsage extends DomainResource implements IDomainResource {
  constructor(status: EnumCodeType | CodeType | fhirCode | null = null, patient: Reference | null = null, device: CodeableReference | null = null) {
    super();

    this.deviceusageStatusEnum = new DeviceusageStatusEnum();

    this.status = constructorCodeValueAsEnumCodeType<DeviceusageStatusEnum>(
      status,
      DeviceusageStatusEnum,
      this.deviceusageStatusEnum,
      'DeviceUsage.status',
    );

    this.patient = null;
    if (isDefined<Reference>(patient)) {
      this.setPatient(patient);
    }

    this.device = null;
    if (isDefined<CodeableReference>(device)) {
      this.setDevice(device);
    }
  }

  /**
   * Parse the provided `DeviceUsage` JSON to instantiate the DeviceUsage data model.
   *
   * @param sourceJson - JSON representing FHIR `DeviceUsage`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to DeviceUsage
   * @returns DeviceUsage data model or undefined for `DeviceUsage`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): DeviceUsage | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'DeviceUsage';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new DeviceUsage();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'DeviceUsage');
    fhirParser.processDomainResourceJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const classMetadata: DecoratorMetadataObject | null = DeviceUsage[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for DeviceUsage`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

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
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addCategory(datatype);
        }
      });
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

    fieldName = 'derivedFrom';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addDerivedFrom(datatype);
        }
      });
  }

    fieldName = 'context';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setContext(datatype);
    }

    fieldName = 'timing[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const timing: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setTiming(timing);

    fieldName = 'dateAsserted';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dtJson, dtSiblingJson);
      instance.setDateAssertedElement(datatype);
    }

    fieldName = 'usageStatus';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setUsageStatus(datatype);
    }

    fieldName = 'usageReason';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addUsageReason(datatype);
        }
      });
    }

    fieldName = 'adherence';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: DeviceUsageAdherenceComponent | undefined = DeviceUsageAdherenceComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setAdherence(component);
    }

    fieldName = 'informationSource';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setInformationSource(datatype);
    }

    fieldName = 'device';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableReference | undefined = CodeableReference.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setDevice(null);
      } else {
        instance.setDevice(datatype);
      }
    } else {
      instance.setDevice(null);
    }

    fieldName = 'reason';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableReference | undefined = CodeableReference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addReason(datatype);
        }
      });
    }

    fieldName = 'bodySite';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableReference | undefined = CodeableReference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setBodySite(datatype);
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

    return instance;
  }

  /**
   * DeviceUsage.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** External identifier for this record
   * - **Definition:** An external identifier for this statement such as an IRI.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier[] | undefined;

  /**
   * DeviceUsage.basedOn Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Fulfills plan, proposal or order
   * - **Definition:** A plan, proposal or order that is fulfilled in whole or in part by this DeviceUsage.
   * - **Requirements:** Allows tracing of authorization for the DeviceUsage and tracking whether proposals/recommendations were acted upon.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/ServiceRequest',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private basedOn?: Reference[] | undefined;

  /**
   * FHIR CodeSystem: DeviceusageStatus
   *
   * @see {@link DeviceusageStatusEnum }
   */
  private readonly deviceusageStatusEnum: DeviceusageStatusEnum;

  /**
   * DeviceUsage.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** active | completed | not-done | entered-in-error +
   * - **Definition:** A code representing the patient or other source\'s judgment about the state of the device used that this statement is about.  Generally this will be active or completed.
   * - **Comment:** DeviceUseStatment is a statement at a point in time.  The status is only representative at the point when it was asserted.  The value set for contains codes that assert the status of the use  by the patient (for example, stopped or on hold) as well as codes that assert the status of the resource itself (for example, entered in error). This element is labeled as a modifier because the status contains the codes that mark the statement as not currently valid.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** true
   * - **isModifierReason:** This element is labelled as a modifier because it is a status element that contains status entered-in-error which means that the resource should not be treated as valid
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link DeviceusageStatusEnum }
   */
  private status: EnumCodeType | null;

  /**
   * DeviceUsage.category Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The category of the statement - classifying how the statement is made
   * - **Definition:** This attribute indicates a category for the statement - The device statement may be made in an inpatient or outpatient settting (inpatient | outpatient | community | patientspecified).
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private category?: CodeableConcept[] | undefined;

  /**
   * DeviceUsage.patient Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Patient using device
   * - **Definition:** The patient who used the device.
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
   * DeviceUsage.derivedFrom Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Supporting information
   * - **Definition:** Allows linking the DeviceUsage to the underlying Request, or to other information that supports or is used to derive the DeviceUsage.
   * - **Comment:** The most common use cases for deriving a DeviceUsage comes from creating it from a request or from an observation or a claim. it should be noted that the amount of information that is available varies from the type resource that you derive the DeviceUsage from.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/ServiceRequest',
   *       'http://hl7.org/fhir/StructureDefinition/Procedure',
   *       'http://hl7.org/fhir/StructureDefinition/Claim',
   *       'http://hl7.org/fhir/StructureDefinition/Observation',
   *       'http://hl7.org/fhir/StructureDefinition/QuestionnaireResponse',
   *       'http://hl7.org/fhir/StructureDefinition/DocumentReference',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private derivedFrom?: Reference[] | undefined;

  /**
   * DeviceUsage.context Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The encounter or episode of care that establishes the context for this device use statement
   * - **Definition:** The encounter or episode of care that establishes the context for this device use statement.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Encounter',
   *       'http://hl7.org/fhir/StructureDefinition/EpisodeOfCare',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private context?: Reference | undefined;

  /**
   * DeviceUsage.timing[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('DeviceUsage.timing[x]', ['Timing','Period','dateTime',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** How often  the device was used
   * - **Definition:** How often the device was used.
   * - **FHIR Types:**
   *     'Timing',
   *     'Period',
   *     'dateTime',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  @ChoiceDataTypesMeta('DeviceUsage.timing[x]',[
    'Timing',
    'Period',
    'dateTime',
  ])
  private timing?: IDataType | undefined;

  /**
   * DeviceUsage.dateAsserted Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When the statement was made (and recorded)
   * - **Definition:** The time at which the statement was recorded by informationSource.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private dateAsserted?: DateTimeType | undefined;

  /**
   * DeviceUsage.usageStatus Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The status of the device usage, for example always, sometimes, never. This is not the same as the status of the statement
   * - **Definition:** The status of the device usage, for example always, sometimes, never. This is not the same as the status of the statement.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private usageStatus?: CodeableConcept | undefined;

  /**
   * DeviceUsage.usageReason Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The reason for asserting the usage status - for example forgot, lost, stolen, broken
   * - **Definition:** The reason for asserting the usage status - for example forgot, lost, stolen, broken.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private usageReason?: CodeableConcept[] | undefined;

  /**
   * DeviceUsage.adherence Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** How device is being used
   * - **Definition:** This indicates how or if the device is being used.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private adherence?: DeviceUsageAdherenceComponent | undefined;

  /**
   * DeviceUsage.informationSource Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who made the statement
   * - **Definition:** Who reported the device was being used by the patient.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *       'http://hl7.org/fhir/StructureDefinition/RelatedPerson',
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private informationSource?: Reference | undefined;

  /**
   * DeviceUsage.device Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Code or Reference to device used
   * - **Definition:** Code or Reference to device used.
   * - **FHIR Type:** `CodeableReference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Device',
   *       'http://hl7.org/fhir/StructureDefinition/DeviceDefinition',
   *     ]
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private device: CodeableReference | null;

  /**
   * DeviceUsage.reason Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Why device was used
   * - **Definition:** Reason or justification for the use of the device. A coded concept, or another resource whose existence justifies this DeviceUsage.
   * - **Comment:** When the status is not done, the reason code indicates why it was not done.
   * - **FHIR Type:** `CodeableReference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Condition',
   *       'http://hl7.org/fhir/StructureDefinition/Observation',
   *       'http://hl7.org/fhir/StructureDefinition/DiagnosticReport',
   *       'http://hl7.org/fhir/StructureDefinition/DocumentReference',
   *       'http://hl7.org/fhir/StructureDefinition/Procedure',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private reason?: CodeableReference[] | undefined;

  /**
   * DeviceUsage.bodySite Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Target body site
   * - **Definition:** Indicates the anotomic location on the subject\'s body where the device was used ( i.e. the target).
   * - **Requirements:** Knowing where the device is targeted is important for tracking if multiple sites are possible. If more information than just a code is required, use the extension [http://hl7.org/fhir/StructureDefinition/bodySite](http://hl7.org/fhir/extensions/https://hl7.org/fhir/StructureDefinition-bodySite.html).
   * - **FHIR Type:** `CodeableReference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/BodyStructure',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private bodySite?: CodeableReference | undefined;

  /**
   * DeviceUsage.note Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Addition details (comments, instructions)
   * - **Definition:** Details about the device statement that were not represented at all or sufficiently in one of the attributes provided in a class. These may include for example a comment, an instruction, or a note associated with the statement.
   * - **FHIR Type:** `Annotation`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private note?: Annotation[] | undefined;

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
      const optErrMsg = `Invalid DeviceUsage.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid DeviceUsage.identifier; Provided element is not an instance of Identifier.`;
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
   * @decorator `@ReferenceTargets('DeviceUsage.basedOn', ['ServiceRequest',])`
   *
   * @param value - the `basedOn` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('DeviceUsage.basedOn', [
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
   * @decorator `@ReferenceTargets('DeviceUsage.basedOn', ['ServiceRequest',])`
   *
   * @param value - the `basedOn` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('DeviceUsage.basedOn', [
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
   * @see CodeSystem Enumeration: {@link DeviceusageStatusEnum }
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
   * @see CodeSystem Enumeration: {@link DeviceusageStatusEnum }
   */
  public setStatusEnumType(enumType: EnumCodeType | undefined | null): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid DeviceUsage.status`;
      assertEnumCodeType<DeviceusageStatusEnum>(enumType, DeviceusageStatusEnum, errMsgPrefix);
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
   * @see CodeSystem Enumeration: {@link DeviceusageStatusEnum }
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
   * @see CodeSystem Enumeration: {@link DeviceusageStatusEnum }
   */
  public setStatusElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid DeviceUsage.status; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.status = new EnumCodeType(element, this.deviceusageStatusEnum);
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
   * @see CodeSystem Enumeration: {@link DeviceusageStatusEnum }
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
   * @see CodeSystem Enumeration: {@link DeviceusageStatusEnum }
   */
  public setStatus(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid DeviceUsage.status (${String(value)})`;
      this.status = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.deviceusageStatusEnum);
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
      const optErrMsg = `Invalid DeviceUsage.category; Provided value array has an element that is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid DeviceUsage.category; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `patient` property value as a Reference object if defined; else an empty Reference object
   */
  public getPatient(): Reference {
    return this.patient ?? new Reference();
  }

  /**
   * Assigns the provided Patient object value to the `patient` property.
   *
   * @decorator `@ReferenceTargets('DeviceUsage.patient', ['Patient',])`
   *
   * @param value - the `patient` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('DeviceUsage.patient', [
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
   * @returns the `derivedFrom` property value as a Reference array
   */
  public getDerivedFrom(): Reference[] {
    return this.derivedFrom ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `derivedFrom` property.
   *
   * @decorator `@ReferenceTargets('DeviceUsage.derivedFrom', ['ServiceRequest','Procedure','Claim','Observation','QuestionnaireResponse','DocumentReference',])`
   *
   * @param value - the `derivedFrom` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('DeviceUsage.derivedFrom', [
    'ServiceRequest',
  
    'Procedure',
  
    'Claim',
  
    'Observation',
  
    'QuestionnaireResponse',
  
    'DocumentReference',
  ])
  public setDerivedFrom(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.derivedFrom = value;
    } else {
      this.derivedFrom = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `derivedFrom` array property.
   *
   * @decorator `@ReferenceTargets('DeviceUsage.derivedFrom', ['ServiceRequest','Procedure','Claim','Observation','QuestionnaireResponse','DocumentReference',])`
   *
   * @param value - the `derivedFrom` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('DeviceUsage.derivedFrom', [
    'ServiceRequest',
  
    'Procedure',
  
    'Claim',
  
    'Observation',
  
    'QuestionnaireResponse',
  
    'DocumentReference',
  ])
  public addDerivedFrom(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initDerivedFrom();
      this.derivedFrom?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `derivedFrom` property exists and has a value; `false` otherwise
   */
  public hasDerivedFrom(): boolean {
    return isDefinedList<Reference>(this.derivedFrom) && this.derivedFrom.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `derivedFrom` property
   */
  private initDerivedFrom(): void {
    if (!this.hasDerivedFrom()) {
      this.derivedFrom = [] as Reference[];
    }
  }

  /**
   * @returns the `context` property value as a Reference object; else an empty Reference object
   */
  public getContext(): Reference {
    return this.context ?? new Reference();
  }

  /**
   * Assigns the provided Context object value to the `context` property.
   *
   * @decorator `@ReferenceTargets('DeviceUsage.context', ['Encounter','EpisodeOfCare',])`
   *
   * @param value - the `context` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('DeviceUsage.context', [
    'Encounter',
  
    'EpisodeOfCare',
  ])
  public setContext(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.context = value;
    } else {
      this.context = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `context` property exists and has a value; `false` otherwise
   */
  public hasContext(): boolean {
    return isDefined<Reference>(this.context) && !this.context.isEmpty();
  }

  /**
   * @returns the `timing` property value as a DataType object if defined; else undefined
   */
  public getTiming(): IDataType | undefined {
    return this.timing;
  }

  /**
   * Assigns the provided DataType object value to the `timing` property.
   *
   * @decorator `@ChoiceDataTypes('DeviceUsage.timing[x]')`
   *
   * @param value - the `timing` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('DeviceUsage.timing[x]')
  public setTiming(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.timing = value;
    } else {
      this.timing = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `timing` property exists and has a value; `false` otherwise
   */
  public hasTiming(): boolean {
    return isDefined<IDataType>(this.timing) && !this.timing.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `timing` property value as a Timing object if defined; else undefined
   */
  public getTimingTiming(): Timing | undefined {
    if (!isDefined<IDataType | undefined>(this.timing)) {
      return undefined;
    }
    if (!(this.timing instanceof Timing)) {
      throw new InvalidTypeError(
        `DataType mismatch for DeviceUsage.timing[x]: Expected Timing but encountered ${this.timing.fhirType()}`,
      );
    }
    return this.timing;
  }

  /**
   * @returns `true` if the `timing` property exists as a Timing and has a value; `false` otherwise
   */
  public hasTimingTiming(): boolean {
    return this.hasTiming() && this.timing instanceof Timing;
  }

  /**
   * @returns the `timing` property value as a Period object if defined; else undefined
   */
  public getTimingPeriod(): Period | undefined {
    if (!isDefined<IDataType | undefined>(this.timing)) {
      return undefined;
    }
    if (!(this.timing instanceof Period)) {
      throw new InvalidTypeError(
        `DataType mismatch for DeviceUsage.timing[x]: Expected Period but encountered ${this.timing.fhirType()}`,
      );
    }
    return this.timing;
  }

  /**
   * @returns `true` if the `timing` property exists as a Period and has a value; `false` otherwise
   */
  public hasTimingPeriod(): boolean {
    return this.hasTiming() && this.timing instanceof Period;
  }

  /**
   * @returns the `timing` property value as a DateTimeType object if defined; else undefined
   */
  public getTimingDateTimeType(): DateTimeType | undefined {
    if (!isDefined<IDataType | undefined>(this.timing)) {
      return undefined;
    }
    if (!(this.timing instanceof DateTimeType)) {
      throw new InvalidTypeError(
        `DataType mismatch for DeviceUsage.timing[x]: Expected DateTimeType but encountered ${this.timing.fhirType()}`,
      );
    }
    return this.timing;
  }

  /**
   * @returns `true` if the `timing` property exists as a DateTimeType and has a value; `false` otherwise
   */
  public hasTimingDateTimeType(): boolean {
    return this.hasTiming() && this.timing instanceof DateTimeType;
  }

  // End of choice datatype-specific "get"/"has" methods

  /**
   * @returns the `dateAsserted` property value as a DateTimeType object if defined; else an empty DateTimeType object
   */
  public getDateAssertedElement(): DateTimeType {
    return this.dateAsserted ?? new DateTimeType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `dateAsserted` property.
   *
   * @param element - the `dateAsserted` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDateAssertedElement(element: DateTimeType | undefined): this {
    if (isDefined<DateTimeType>(element)) {
      const optErrMsg = `Invalid DeviceUsage.dateAsserted; Provided element is not an instance of DateTimeType.`;
      assertFhirType<DateTimeType>(element, DateTimeType, optErrMsg);
      this.dateAsserted = element;
    } else {
      this.dateAsserted = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `dateAsserted` property exists and has a value; `false` otherwise
   */
  public hasDateAssertedElement(): boolean {
    return isDefined<DateTimeType>(this.dateAsserted) && !this.dateAsserted.isEmpty();
  }

  /**
   * @returns the `dateAsserted` property value as a fhirDateTime if defined; else undefined
   */
  public getDateAsserted(): fhirDateTime | undefined {
    return this.dateAsserted?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `dateAsserted` property.
   *
   * @param value - the `dateAsserted` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDateAsserted(value: fhirDateTime | undefined): this {
    if (isDefined<fhirDateTime>(value)) {
      const optErrMsg = `Invalid DeviceUsage.dateAsserted (${String(value)})`;
      this.dateAsserted = new DateTimeType(parseFhirPrimitiveData(value, fhirDateTimeSchema, optErrMsg));
    } else {
      this.dateAsserted = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `dateAsserted` property exists and has a value; `false` otherwise
   */
  public hasDateAsserted(): boolean {
    return this.hasDateAssertedElement();
  }

  /**
   * @returns the `usageStatus` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getUsageStatus(): CodeableConcept {
    return this.usageStatus ?? new CodeableConcept();
  }

  /**
   * Assigns the provided UsageStatus object value to the `usageStatus` property.
   *
   * @param value - the `usageStatus` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setUsageStatus(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid DeviceUsage.usageStatus; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.usageStatus = value;
    } else {
      this.usageStatus = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `usageStatus` property exists and has a value; `false` otherwise
   */
  public hasUsageStatus(): boolean {
    return isDefined<CodeableConcept>(this.usageStatus) && !this.usageStatus.isEmpty();
  }

  /**
   * @returns the `usageReason` property value as a CodeableConcept array
   */
  public getUsageReason(): CodeableConcept[] {
    return this.usageReason ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `usageReason` property.
   *
   * @param value - the `usageReason` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setUsageReason(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid DeviceUsage.usageReason; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.usageReason = value;
    } else {
      this.usageReason = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `usageReason` array property.
   *
   * @param value - the `usageReason` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addUsageReason(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid DeviceUsage.usageReason; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initUsageReason();
      this.usageReason?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `usageReason` property exists and has a value; `false` otherwise
   */
  public hasUsageReason(): boolean {
    return isDefinedList<CodeableConcept>(this.usageReason) && this.usageReason.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `usageReason` property
   */
  private initUsageReason(): void {
    if(!this.hasUsageReason()) {
      this.usageReason = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `adherence` property value as a DeviceUsageAdherenceComponent object if defined; else an empty DeviceUsageAdherenceComponent object
   */
  public getAdherence(): DeviceUsageAdherenceComponent {
    return this.adherence ?? new DeviceUsageAdherenceComponent();
  }

  /**
   * Assigns the provided Adherence object value to the `adherence` property.
   *
   * @param value - the `adherence` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAdherence(value: DeviceUsageAdherenceComponent | undefined): this {
    if (isDefined<DeviceUsageAdherenceComponent>(value)) {
      const optErrMsg = `Invalid DeviceUsage.adherence; Provided element is not an instance of DeviceUsageAdherenceComponent.`;
      assertFhirType<DeviceUsageAdherenceComponent>(value, DeviceUsageAdherenceComponent, optErrMsg);
      this.adherence = value;
    } else {
      this.adherence = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `adherence` property exists and has a value; `false` otherwise
   */
  public hasAdherence(): boolean {
    return isDefined<DeviceUsageAdherenceComponent>(this.adherence) && !this.adherence.isEmpty();
  }

  /**
   * @returns the `informationSource` property value as a Reference object; else an empty Reference object
   */
  public getInformationSource(): Reference {
    return this.informationSource ?? new Reference();
  }

  /**
   * Assigns the provided InformationSource object value to the `informationSource` property.
   *
   * @decorator `@ReferenceTargets('DeviceUsage.informationSource', ['Patient','Practitioner','PractitionerRole','RelatedPerson','Organization',])`
   *
   * @param value - the `informationSource` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('DeviceUsage.informationSource', [
    'Patient',
  
    'Practitioner',
  
    'PractitionerRole',
  
    'RelatedPerson',
  
    'Organization',
  ])
  public setInformationSource(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.informationSource = value;
    } else {
      this.informationSource = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `informationSource` property exists and has a value; `false` otherwise
   */
  public hasInformationSource(): boolean {
    return isDefined<Reference>(this.informationSource) && !this.informationSource.isEmpty();
  }

  /**
   * @returns the `device` property value as a CodeableReference object if defined; else an empty CodeableReference object
   */
  public getDevice(): CodeableReference {
    return this.device ?? new CodeableReference();
  }

  /**
   * Assigns the provided CodeableReference object value to the `device` property.
   *
   * @param value - the `device` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDevice(value: CodeableReference | undefined | null): this {
    if (isDefined<CodeableReference>(value)) {
      const optErrMsg = `Invalid DeviceUsage.device; Provided element is not an instance of CodeableReference.`;
      assertFhirType<CodeableReference>(value, CodeableReference, optErrMsg);
      this.device = value;
    } else {
      this.device = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `device` property exists and has a value; `false` otherwise
   */
  public hasDevice(): boolean {
    return isDefined<CodeableReference>(this.device) && !this.device.isEmpty();
  }

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
      const optErrMsg = `Invalid DeviceUsage.reason; Provided value array has an element that is not an instance of CodeableReference.`;
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
      const optErrMsg = `Invalid DeviceUsage.reason; Provided element is not an instance of CodeableReference.`;
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
   * @returns the `bodySite` property value as a CodeableReference object if defined; else an empty CodeableReference object
   */
  public getBodySite(): CodeableReference {
    return this.bodySite ?? new CodeableReference();
  }

  /**
   * Assigns the provided BodySite object value to the `bodySite` property.
   *
   * @param value - the `bodySite` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setBodySite(value: CodeableReference | undefined): this {
    if (isDefined<CodeableReference>(value)) {
      const optErrMsg = `Invalid DeviceUsage.bodySite; Provided element is not an instance of CodeableReference.`;
      assertFhirType<CodeableReference>(value, CodeableReference, optErrMsg);
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
    return isDefined<CodeableReference>(this.bodySite) && !this.bodySite.isEmpty();
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
      const optErrMsg = `Invalid DeviceUsage.note; Provided value array has an element that is not an instance of Annotation.`;
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
      const optErrMsg = `Invalid DeviceUsage.note; Provided element is not an instance of Annotation.`;
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
    return 'DeviceUsage';
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
      this.patient,
      this.derivedFrom,
      this.context,
      this.timing,
      this.dateAsserted,
      this.usageStatus,
      this.usageReason,
      this.adherence,
      this.informationSource,
      this.device,
      this.reason,
      this.bodySite,
      this.note,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.status, this.patient, this.device, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): DeviceUsage {
    const dest = new DeviceUsage();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: DeviceUsage): void {
    super.copyValues(dest);
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    const basedOnList = copyListValues<Reference>(this.basedOn);
    dest.basedOn = basedOnList.length === 0 ? undefined : basedOnList;
    dest.status = this.status ? this.status.copy() : null;
    const categoryList = copyListValues<CodeableConcept>(this.category);
    dest.category = categoryList.length === 0 ? undefined : categoryList;
    dest.patient = this.patient ? this.patient.copy() : null;
    const derivedFromList = copyListValues<Reference>(this.derivedFrom);
    dest.derivedFrom = derivedFromList.length === 0 ? undefined : derivedFromList;
    dest.context = this.context?.copy();
    dest.timing = this.timing?.copy() as IDataType;
    dest.dateAsserted = this.dateAsserted?.copy();
    dest.usageStatus = this.usageStatus?.copy();
    const usageReasonList = copyListValues<CodeableConcept>(this.usageReason);
    dest.usageReason = usageReasonList.length === 0 ? undefined : usageReasonList;
    dest.adherence = this.adherence?.copy();
    dest.informationSource = this.informationSource?.copy();
    dest.device = this.device ? this.device.copy() : null;
    const reasonList = copyListValues<CodeableReference>(this.reason);
    dest.reason = reasonList.length === 0 ? undefined : reasonList;
    dest.bodySite = this.bodySite?.copy();
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

    if (this.hasIdentifier()) {
      setFhirComplexListJson(this.getIdentifier(), 'identifier', jsonObj);
    }

    if (this.hasBasedOn()) {
      setFhirComplexListJson(this.getBasedOn(), 'basedOn', jsonObj);
    }

    if (this.hasStatusElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getStatusElement()!, 'status', jsonObj);
    } else {
      jsonObj['status'] = null;
    }

    if (this.hasCategory()) {
      setFhirComplexListJson(this.getCategory(), 'category', jsonObj);
    }

    if (this.hasPatient()) {
      setFhirComplexJson(this.getPatient(), 'patient', jsonObj);
    } else {
      jsonObj['patient'] = null;
    }

    if (this.hasDerivedFrom()) {
      setFhirComplexListJson(this.getDerivedFrom(), 'derivedFrom', jsonObj);
    }

    if (this.hasContext()) {
      setFhirComplexJson(this.getContext(), 'context', jsonObj);
    }

    if (this.hasTiming()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getTiming()!, 'timing', jsonObj);
    }

    if (this.hasDateAssertedElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getDateAssertedElement(), 'dateAsserted', jsonObj);
    }

    if (this.hasUsageStatus()) {
      setFhirComplexJson(this.getUsageStatus(), 'usageStatus', jsonObj);
    }

    if (this.hasUsageReason()) {
      setFhirComplexListJson(this.getUsageReason(), 'usageReason', jsonObj);
    }

    if (this.hasAdherence()) {
      setFhirBackboneElementJson(this.getAdherence(), 'adherence', jsonObj);
    }

    if (this.hasInformationSource()) {
      setFhirComplexJson(this.getInformationSource(), 'informationSource', jsonObj);
    }

    if (this.hasDevice()) {
      setFhirComplexJson(this.getDevice(), 'device', jsonObj);
    } else {
      jsonObj['device'] = null;
    }

    if (this.hasReason()) {
      setFhirComplexListJson(this.getReason(), 'reason', jsonObj);
    }

    if (this.hasBodySite()) {
      setFhirComplexJson(this.getBodySite(), 'bodySite', jsonObj);
    }

    if (this.hasNote()) {
      setFhirComplexListJson(this.getNote(), 'note', jsonObj);
    }

    return jsonObj;
  }
}

/**
 * DeviceUsageAdherenceComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** How device is being used
 * - **Definition:** This indicates how or if the device is being used.
 *
 * @category Data Models: Resource
 * @see [FHIR DeviceUsage](http://hl7.org/fhir/StructureDefinition/DeviceUsage)
 */
export class DeviceUsageAdherenceComponent extends BackboneElement implements IBackboneElement {
  constructor(code: CodeableConcept | null = null, reason: CodeableConcept[] | null = null) {
    super();

    this.code = null;
    if (isDefined<CodeableConcept>(code)) {
      this.setCode(code);
    }

    this.reason = null;
    if (isDefinedList<CodeableConcept>(reason)) {
      this.setReason(reason);
    }
  }

  /**
   * Parse the provided `DeviceUsageAdherenceComponent` JSON to instantiate the DeviceUsageAdherenceComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `DeviceUsageAdherenceComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to DeviceUsageAdherenceComponent
   * @returns DeviceUsageAdherenceComponent data model or undefined for `DeviceUsageAdherenceComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): DeviceUsageAdherenceComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'DeviceUsageAdherenceComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new DeviceUsageAdherenceComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

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

    fieldName = 'reason';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype === undefined) {
          instance.setReason(null);
        } else {
          instance.addReason(datatype);
        }
      });
    } else {
      instance.setReason(null);
    }

    return instance;
  }

  /**
   * DeviceUsage.adherence.code Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** always | never | sometimes
   * - **Definition:** Type of adherence.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private code: CodeableConcept | null;

  /**
   * DeviceUsage.adherence.reason Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** lost | stolen | prescribed | broken | burned | forgot
   * - **Definition:** Reason for adherence type.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private reason: CodeableConcept[] | null;

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
      const optErrMsg = `Invalid DeviceUsage.adherence.code; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `reason` property value as a CodeableConcept array
   */
  public getReason(): CodeableConcept[] {
    return this.reason ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `reason` property.
   *
   * @param value - the `reason` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setReason(value: CodeableConcept[] | undefined | null): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid DeviceUsage.adherence.reason; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.reason = value;
    } else {
      this.reason = null;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `reason` array property.
   *
   * @param value - the `reason` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addReason(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid DeviceUsage.adherence.reason; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initReason();
      this.reason?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `reason` property exists and has a value; `false` otherwise
   */
  public hasReason(): boolean {
    return isDefinedList<CodeableConcept>(this.reason) && this.reason.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `reason` property
   */
  private initReason(): void {
    if(!this.hasReason()) {
      this.reason = [] as CodeableConcept[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'DeviceUsage.adherence';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.code,
      this.reason,
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
  public override copy(): DeviceUsageAdherenceComponent {
    const dest = new DeviceUsageAdherenceComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: DeviceUsageAdherenceComponent): void {
    super.copyValues(dest);
    dest.code = this.code ? this.code.copy() : null;
    const reasonList = copyListValues<CodeableConcept>(this.reason);
    dest.reason = reasonList.length === 0 ? null : reasonList;
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
    } else {
      jsonObj['code'] = null;
    }

    if (this.hasReason()) {
      setFhirComplexListJson(this.getReason(), 'reason', jsonObj);
    } else {
      jsonObj['reason'] = null;
    }

    return jsonObj;
  }
}
