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
 * Observation Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/Observation
 * StructureDefinition.name: Observation
 * StructureDefinition.description: Measurements and simple assertions made about a patient, device or other subject.
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
  CodeType,
  DateTimeType,
  DomainResource,
  EnumCodeType,
  FhirParser,
  IBackboneElement,
  IDataType,
  IDomainResource,
  InstantType,
  IntegerType,
  InvalidTypeError,
  JSON,
  ReferenceTargets,
  StringType,
  TimeType,
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
import { Annotation, CodeableConcept, Identifier, PARSABLE_DATATYPE_MAP, Period, Quantity, Range, Ratio, Reference, SampledData, Timing } from '../complex-types/complex-datatypes';
import { ObservationStatusEnum } from '../code-systems/ObservationStatusEnum';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Symbol.metadata polyfill secret sauce for decorator metadata
(Symbol.metadata as any) ??= Symbol('Symbol.metadata');

/**
 * Observation Class
 *
 * @remarks
 * Measurements and simple assertions made about a patient, device or other subject.
 *
 * Observations are a key aspect of healthcare.  This resource is used to capture those that do not require more sophisticated mechanisms.
 *
 * **FHIR Specification**
 * - **Short:** Measurements and simple assertions
 * - **Definition:** Measurements and simple assertions made about a patient, device or other subject.
 * - **Comment:** Used for simple observations such as device measurements, laboratory atomic results, vital signs, height, weight, smoking status, comments, etc.  Other resources are used to provide context for observations such as laboratory reports, etc.
 * - **FHIR Version:** 4.3.0
 *
 * @category Data Models: Resource
 * @see [FHIR Observation](http://hl7.org/fhir/StructureDefinition/Observation)
 */
export class Observation extends DomainResource implements IDomainResource {
  constructor(status: EnumCodeType | CodeType | fhirCode | null = null, code: CodeableConcept | null = null) {
    super();

    this.observationStatusEnum = new ObservationStatusEnum();

    this.status = constructorCodeValueAsEnumCodeType<ObservationStatusEnum>(
      status,
      ObservationStatusEnum,
      this.observationStatusEnum,
      'Observation.status',
    );

    this.code = null;
    if (isDefined<CodeableConcept>(code)) {
      this.setCode(code);
    }
  }

  /**
   * Parse the provided `Observation` JSON to instantiate the Observation data model.
   *
   * @param sourceJson - JSON representing FHIR `Observation`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to Observation
   * @returns Observation data model or undefined for `Observation`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): Observation | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'Observation';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new Observation();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'Observation');
    fhirParser.processDomainResourceJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const classMetadata: DecoratorMetadataObject | null = Observation[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for Observation`;
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

    fieldName = 'partOf';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addPartOf(datatype);
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

    fieldName = 'focus';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addFocus(datatype);
        }
      });
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
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addPerformer(datatype);
        }
      });
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

    fieldName = 'dataAbsentReason';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setDataAbsentReason(datatype);
    }

    fieldName = 'interpretation';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addInterpretation(datatype);
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

    fieldName = 'bodySite';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setBodySite(datatype);
    }

    fieldName = 'method';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setMethod(datatype);
    }

    fieldName = 'specimen';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setSpecimen(datatype);
    }

    fieldName = 'device';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setDevice(datatype);
    }

    fieldName = 'referenceRange';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: ObservationReferenceRangeComponent | undefined = ObservationReferenceRangeComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addReferenceRange(component);
        }
      });
    }

    fieldName = 'hasMember';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addHasMember(datatype);
        }
      });
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

    fieldName = 'component';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: ObservationComponentComponent | undefined = ObservationComponentComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addComponent(component);
        }
      });
    }

    return instance;
  }

  /**
   * Observation.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Business Identifier for observation
   * - **Definition:** A unique identifier assigned to this observation.
   * - **Requirements:** Allows observations to be distinguished and referenced.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier[] | undefined;

  /**
   * Observation.basedOn Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Fulfills plan, proposal or order
   * - **Definition:** A plan, proposal or order that is fulfilled in whole or in part by this event.  For example, a MedicationRequest may require a patient to have laboratory test performed before  it is dispensed.
   * - **Requirements:** Allows tracing of authorization for the event and tracking whether proposals/recommendations were acted upon.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/CarePlan',
   *       'http://hl7.org/fhir/StructureDefinition/DeviceRequest',
   *       'http://hl7.org/fhir/StructureDefinition/ImmunizationRecommendation',
   *       'http://hl7.org/fhir/StructureDefinition/MedicationRequest',
   *       'http://hl7.org/fhir/StructureDefinition/NutritionOrder',
   *       'http://hl7.org/fhir/StructureDefinition/ServiceRequest',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private basedOn?: Reference[] | undefined;

  /**
   * Observation.partOf Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Part of referenced event
   * - **Definition:** A larger event of which this particular Observation is a component or step.  For example,  an observation as part of a procedure.
   * - **Comment:** To link an Observation to an Encounter use `encounter`.  See the  [Notes](https://hl7.org/fhir/observation.html#obsgrouping) below for guidance on referencing another Observation.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/MedicationAdministration',
   *       'http://hl7.org/fhir/StructureDefinition/MedicationDispense',
   *       'http://hl7.org/fhir/StructureDefinition/MedicationStatement',
   *       'http://hl7.org/fhir/StructureDefinition/Procedure',
   *       'http://hl7.org/fhir/StructureDefinition/Immunization',
   *       'http://hl7.org/fhir/StructureDefinition/ImagingStudy',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private partOf?: Reference[] | undefined;

  /**
   * FHIR CodeSystem: ObservationStatus
   *
   * @see {@link ObservationStatusEnum }
   */
  private readonly observationStatusEnum: ObservationStatusEnum;

  /**
   * Observation.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** registered | preliminary | final | amended +
   * - **Definition:** The status of the result value.
   * - **Comment:** This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   * - **Requirements:** Need to track the status of individual results. Some results are finalized before the whole report is finalized.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** true
   * - **isModifierReason:** This element is labeled as a modifier because it is a status element that contains status entered-in-error which means that the resource should not be treated as valid
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link ObservationStatusEnum }
   */
  private status: EnumCodeType | null;

  /**
   * Observation.category Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Classification of  type of observation
   * - **Definition:** A code that classifies the general type of observation being made.
   * - **Comment:** In addition to the required category valueset, this element allows various categorization schemes based on the owner\'s definition of the category and effectively multiple categories can be used at once.  The level of granularity is defined by the category concepts in the value set.
   * - **Requirements:** Used for filtering what observations are retrieved and displayed.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private category?: CodeableConcept[] | undefined;

  /**
   * Observation.code Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Type of observation (code / type)
   * - **Definition:** Describes what was observed. Sometimes this is called the observation "name".
   * - **Comment:** *All* code-value and, if present, component.code-component.value pairs need to be taken into account to correctly understand the meaning of the observation.
   * - **Requirements:** Knowing what kind of observation is being made is essential to understanding the observation.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private code: CodeableConcept | null;

  /**
   * Observation.subject Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who and/or what the observation is about
   * - **Definition:** The patient, or group of patients, location, or device this observation is about and into whose record the observation is placed. If the actual focus of the observation is different from the subject (or a sample of, part, or region of the subject), the `focus` element or the `code` itself specifies the actual focus of the observation.
   * - **Comment:** One would expect this element to be a cardinality of 1..1. The only circumstance in which the subject can be missing is when the observation is made by a device that does not know the patient. In this case, the observation SHALL be matched to a patient through some context/channel matching technique, and at this point, the observation should be updated.
   * - **Requirements:** Observations have no value if you don\'t know who or what they\'re about.
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
   * Observation.focus Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** What the observation is about, when it is not about the subject of record
   * - **Definition:** The actual focus of an observation when it is not the patient of record representing something or someone associated with the patient such as a spouse, parent, fetus, or donor. For example, fetus observations in a mother\'s record.  The focus of an observation could also be an existing condition,  an intervention, the subject\'s diet,  another observation of the subject,  or a body structure such as tumor or implanted device.   An example use case would be using the Observation resource to capture whether the mother is trained to change her child\'s tracheostomy tube. In this example, the child is the patient of record and the mother is the focus.
   * - **Comment:** Typically, an observation is made about the subject - a patient, or group of patients, location, or device - and the distinction between the subject and what is directly measured for an observation is specified in the observation code itself ( e.g., "Blood Glucose") and does not need to be represented separately using this element.  Use `specimen` if a reference to a specimen is required.  If a code is required instead of a resource use either  `bodysite` for bodysites or the standard extension [focusCode](https://hl7.org/fhir/extension-observation-focuscode.html).
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Resource',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private focus?: Reference[] | undefined;

  /**
   * Observation.encounter Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Healthcare event during which this observation is made
   * - **Definition:** The healthcare event  (e.g. a patient and healthcare provider interaction) during which this observation is made.
   * - **Comment:** This will typically be the encounter the event occurred within, but some events may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter (e.g. pre-admission laboratory tests).
   * - **Requirements:** For some observations it may be important to know the link between an observation and a particular encounter.
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
   * Observation.effective[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('Observation.effective[x]', ['dateTime','Period','Timing','instant',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Clinically relevant time/time-period for observation
   * - **Definition:** The time or time-period the observed value is asserted as being true. For biological subjects - e.g. human patients - this is usually called the "physiologically relevant time". This is usually either the time of the procedure or of specimen collection, but very often the source of the date/time is not known, only the date/time itself.
   * - **Comment:** At least a date should be present unless this observation is a historical report.  For recording imprecise or "fuzzy" times (For example, a blood glucose measurement taken "after breakfast") use the [Timing](https://hl7.org/fhir/datatypes.html#timing) datatype which allow the measurement to be tied to regular life events.
   * - **Requirements:** Knowing when an observation was deemed true is important to its relevance as well as determining trends.
   * - **FHIR Types:**
   *     'dateTime',
   *     'Period',
   *     'Timing',
   *     'instant',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  @ChoiceDataTypesMeta('Observation.effective[x]',[
    'dateTime',
    'Period',
    'Timing',
    'instant',
  ])
  private effective?: IDataType | undefined;

  /**
   * Observation.issued Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Date/Time this version was made available
   * - **Definition:** The date and time this version of the observation was made available to providers, typically after the results have been reviewed and verified.
   * - **Comment:** For Observations that don\'t require review and verification, it may be the same as the [`lastUpdated` ](https://hl7.org/fhir/resource-definitions.html#Meta.lastUpdated) time of the resource itself.  For Observations that do require review and verification for certain updates, it might not be the same as the `lastUpdated` time of the resource itself due to a non-clinically significant update that doesn\'t require the new version to be reviewed and verified again.
   * - **FHIR Type:** `instant`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private issued?: InstantType | undefined;

  /**
   * Observation.performer Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who is responsible for the observation
   * - **Definition:** Who was responsible for asserting the observed value as "true".
   * - **Requirements:** May give a degree of confidence in the observation and also indicates where follow-up questions should be directed.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *       'http://hl7.org/fhir/StructureDefinition/CareTeam',
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/RelatedPerson',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private performer?: Reference[] | undefined;

  /**
   * Observation.value[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('Observation.value[x]', ['Quantity','CodeableConcept','string','boolean','integer','Range','Ratio','SampledData','time','dateTime','Period',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Actual result
   * - **Definition:** The information determined as a result of making the observation, if the information has a simple value.
   * - **Comment:** An observation may have; 1)  a single value here, 2)  both a value and a set of related or component values,  or 3)  only a set of related or component values. If a value is present, the datatype for this element should be determined by Observation.code.  A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Observation.code defines a coded value.  For additional guidance, see the [Notes section](https://hl7.org/fhir/observation.html#notes) below.
   * - **Requirements:** An observation exists to have a value, though it might not if it is in error, or if it represents a group of observations.
   * - **FHIR Types:**
   *     'Quantity',
   *     'CodeableConcept',
   *     'string',
   *     'boolean',
   *     'integer',
   *     'Range',
   *     'Ratio',
   *     'SampledData',
   *     'time',
   *     'dateTime',
   *     'Period',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  @ChoiceDataTypesMeta('Observation.value[x]',[
    'Quantity',
    'CodeableConcept',
    'string',
    'boolean',
    'integer',
    'Range',
    'Ratio',
    'SampledData',
    'time',
    'dateTime',
    'Period',
  ])
  private value?: IDataType | undefined;

  /**
   * Observation.dataAbsentReason Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Why the result is missing
   * - **Definition:** Provides a reason why the expected value in the element Observation.value[x] is missing.
   * - **Comment:** Null or exceptional values can be represented two ways in FHIR Observations.  One way is to simply include them in the value set and represent the exceptions in the value.  For example, measurement values for a serology test could be  "detected", "not detected", "inconclusive", or  "specimen unsatisfactory".    The alternate way is to use the value element for actual observations and use the explicit dataAbsentReason element to record exceptional values.  For example, the dataAbsentReason code "error" could be used when the measurement was not completed. Note that an observation may only be reported if there are values to report. For example differential cell counts values may be reported only when > 0.  Because of these options, use-case agreements are required to interpret general observations for null or exceptional values.
   * - **Requirements:** For many results it is necessary to handle exceptional values in measurements.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private dataAbsentReason?: CodeableConcept | undefined;

  /**
   * Observation.interpretation Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** High, low, normal, etc.
   * - **Definition:** A categorical assessment of an observation value.  For example, high, low, normal.
   * - **Comment:** Historically used for laboratory results (known as \'abnormal flag\' ),  its use extends to other use cases where coded interpretations  are relevant.  Often reported as one or more simple compact codes this element is often placed adjacent to the result value in reports and flow sheets to signal the meaning/normalcy status of the result.
   * - **Requirements:** For some results, particularly numeric results, an interpretation is necessary to fully understand the significance of a result.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private interpretation?: CodeableConcept[] | undefined;

  /**
   * Observation.note Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Comments about the observation
   * - **Definition:** Comments about the observation or the results.
   * - **Comment:** May include general statements about the observation, or statements about significant, unexpected or unreliable results values, or information about its source when relevant to its interpretation.
   * - **Requirements:** Need to be able to provide free text additional information.
   * - **FHIR Type:** `Annotation`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private note?: Annotation[] | undefined;

  /**
   * Observation.bodySite Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Observed body part
   * - **Definition:** Indicates the site on the subject\'s body where the observation was made (i.e. the target site).
   * - **Comment:** Only used if not implicit in code found in Observation.code.  In many systems, this may be represented as a related observation instead of an inline component.    If the use case requires BodySite to be handled as a separate resource (e.g. to identify and track separately) then use the standard extension[ bodySite](https://hl7.org/fhir/extension-bodysite.html).
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private bodySite?: CodeableConcept | undefined;

  /**
   * Observation.method Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** How it was done
   * - **Definition:** Indicates the mechanism used to perform the observation.
   * - **Comment:** Only used if not implicit in code for Observation.code.
   * - **Requirements:** In some cases, method can impact results and is thus used for determining whether results can be compared or determining significance of results.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private method?: CodeableConcept | undefined;

  /**
   * Observation.specimen Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Specimen used for this observation
   * - **Definition:** The specimen that was used when this observation was made.
   * - **Comment:** Should only be used if not implicit in code found in `Observation.code`.  Observations are not made on specimens themselves; they are made on a subject, but in many cases by the means of a specimen. Note that although specimens are often involved, they are not always tracked and reported explicitly. Also note that observation resources may be used in contexts that track the specimen explicitly (e.g. Diagnostic Report).
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Specimen',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private specimen?: Reference | undefined;

  /**
   * Observation.device Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** (Measurement) Device
   * - **Definition:** The device used to generate the observation data.
   * - **Comment:** Note that this is not meant to represent a device involved in the transmission of the result, e.g., a gateway.  Such devices may be documented using the Provenance resource where relevant.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Device',
   *       'http://hl7.org/fhir/StructureDefinition/DeviceMetric',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private device?: Reference | undefined;

  /**
   * Observation.referenceRange Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Provides guide for interpretation
   * - **Definition:** Guidance on how to interpret the value by comparison to a normal or recommended range.  Multiple reference ranges are interpreted as an "OR".   In other words, to represent two distinct target populations, two `referenceRange` elements would be used.
   * - **Comment:** Most observations only have one generic reference range. Systems MAY choose to restrict to only supplying the relevant reference range based on knowledge about the patient (e.g., specific to the patient\'s age, gender, weight and other factors), but this might not be possible or appropriate. Whenever more than one reference range is supplied, the differences between them SHOULD be provided in the reference range and/or age properties.
   * - **Requirements:** Knowing what values are considered "normal" can help evaluate the significance of a particular result. Need to be able to provide multiple reference ranges for different contexts.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private referenceRange?: ObservationReferenceRangeComponent[] | undefined;

  /**
   * Observation.hasMember Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Related resource that belongs to the Observation group
   * - **Definition:** This observation is a group observation (e.g. a battery, a panel of tests, a set of vital sign measurements) that includes the target as a member of the group.
   * - **Comment:** When using this element, an observation will typically have either a value or a set of related resources, although both may be present in some cases.  For a discussion on the ways Observations can assembled in groups together, see [Notes](https://hl7.org/fhir/observation.html#obsgrouping) below.  Note that a system may calculate results from [QuestionnaireResponse](https://hl7.org/fhir/questionnaireresponse.html)  into a final score and represent the score as an Observation.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Observation',
   *       'http://hl7.org/fhir/StructureDefinition/QuestionnaireResponse',
   *       'http://hl7.org/fhir/StructureDefinition/MolecularSequence',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private hasMember?: Reference[] | undefined;

  /**
   * Observation.derivedFrom Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Related measurements the observation is made from
   * - **Definition:** The target resource that represents a measurement from which this observation value is derived. For example, a calculated anion gap or a fetal measurement based on an ultrasound image.
   * - **Comment:** All the reference choices that are listed in this element can represent clinical observations and other measurements that may be the source for a derived value.  The most common reference will be another Observation.  For a discussion on the ways Observations can assembled in groups together, see [Notes](https://hl7.org/fhir/observation.html#obsgrouping) below.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/DocumentReference',
   *       'http://hl7.org/fhir/StructureDefinition/ImagingStudy',
   *       'http://hl7.org/fhir/StructureDefinition/Media',
   *       'http://hl7.org/fhir/StructureDefinition/QuestionnaireResponse',
   *       'http://hl7.org/fhir/StructureDefinition/Observation',
   *       'http://hl7.org/fhir/StructureDefinition/MolecularSequence',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private derivedFrom?: Reference[] | undefined;

  /**
   * Observation.component Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Component results
   * - **Definition:** Some observations have multiple component observations.  These component observations are expressed as separate code value pairs that share the same attributes.  Examples include systolic and diastolic component observations for blood pressure measurement and multiple component observations for genetics observations.
   * - **Comment:** For a discussion on the ways Observations can be assembled in groups together see [Notes](https://hl7.org/fhir/observation.html#notes) below.
   * - **Requirements:** Component observations share the same attributes in the Observation resource as the primary observation and are always treated a part of a single observation (they are not separable).   However, the reference range for the primary observation value is not inherited by the component values and is required when appropriate for each component observation.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private component?: ObservationComponentComponent[] | undefined;

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
      const optErrMsg = `Invalid Observation.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid Observation.identifier; Provided element is not an instance of Identifier.`;
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
   * @decorator `@ReferenceTargets('Observation.basedOn', ['CarePlan','DeviceRequest','ImmunizationRecommendation','MedicationRequest','NutritionOrder','ServiceRequest',])`
   *
   * @param value - the `basedOn` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Observation.basedOn', [
    'CarePlan',
  
    'DeviceRequest',
  
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
   * @decorator `@ReferenceTargets('Observation.basedOn', ['CarePlan','DeviceRequest','ImmunizationRecommendation','MedicationRequest','NutritionOrder','ServiceRequest',])`
   *
   * @param value - the `basedOn` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Observation.basedOn', [
    'CarePlan',
  
    'DeviceRequest',
  
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
   * @returns the `partOf` property value as a Reference array
   */
  public getPartOf(): Reference[] {
    return this.partOf ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `partOf` property.
   *
   * @decorator `@ReferenceTargets('Observation.partOf', ['MedicationAdministration','MedicationDispense','MedicationStatement','Procedure','Immunization','ImagingStudy',])`
   *
   * @param value - the `partOf` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Observation.partOf', [
    'MedicationAdministration',
  
    'MedicationDispense',
  
    'MedicationStatement',
  
    'Procedure',
  
    'Immunization',
  
    'ImagingStudy',
  ])
  public setPartOf(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.partOf = value;
    } else {
      this.partOf = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `partOf` array property.
   *
   * @decorator `@ReferenceTargets('Observation.partOf', ['MedicationAdministration','MedicationDispense','MedicationStatement','Procedure','Immunization','ImagingStudy',])`
   *
   * @param value - the `partOf` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Observation.partOf', [
    'MedicationAdministration',
  
    'MedicationDispense',
  
    'MedicationStatement',
  
    'Procedure',
  
    'Immunization',
  
    'ImagingStudy',
  ])
  public addPartOf(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initPartOf();
      this.partOf?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `partOf` property exists and has a value; `false` otherwise
   */
  public hasPartOf(): boolean {
    return isDefinedList<Reference>(this.partOf) && this.partOf.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `partOf` property
   */
  private initPartOf(): void {
    if (!this.hasPartOf()) {
      this.partOf = [] as Reference[];
    }
  }

  /**
   * @returns the `status` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link ObservationStatusEnum }
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
   * @see CodeSystem Enumeration: {@link ObservationStatusEnum }
   */
  public setStatusEnumType(enumType: EnumCodeType | undefined | null): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid Observation.status`;
      assertEnumCodeType<ObservationStatusEnum>(enumType, ObservationStatusEnum, errMsgPrefix);
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
   * @see CodeSystem Enumeration: {@link ObservationStatusEnum }
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
   * @see CodeSystem Enumeration: {@link ObservationStatusEnum }
   */
  public setStatusElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid Observation.status; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.status = new EnumCodeType(element, this.observationStatusEnum);
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
   * @see CodeSystem Enumeration: {@link ObservationStatusEnum }
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
   * @see CodeSystem Enumeration: {@link ObservationStatusEnum }
   */
  public setStatus(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid Observation.status (${String(value)})`;
      this.status = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.observationStatusEnum);
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
      const optErrMsg = `Invalid Observation.category; Provided value array has an element that is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid Observation.category; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid Observation.code; Provided element is not an instance of CodeableConcept.`;
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
   * @decorator `@ReferenceTargets('Observation.subject', ['Patient','Group','Device','Location','Organization','Procedure','Practitioner','Medication','Substance',])`
   *
   * @param value - the `subject` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Observation.subject', [
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
   * @returns the `focus` property value as a Reference array
   */
  public getFocus(): Reference[] {
    return this.focus ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `focus` property.
   *
   * @decorator `@ReferenceTargets('Observation.focus', ['Resource',])`
   *
   * @param value - the `focus` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Observation.focus', [
    'Resource',
  ])
  public setFocus(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.focus = value;
    } else {
      this.focus = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `focus` array property.
   *
   * @decorator `@ReferenceTargets('Observation.focus', ['Resource',])`
   *
   * @param value - the `focus` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Observation.focus', [
    'Resource',
  ])
  public addFocus(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initFocus();
      this.focus?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `focus` property exists and has a value; `false` otherwise
   */
  public hasFocus(): boolean {
    return isDefinedList<Reference>(this.focus) && this.focus.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `focus` property
   */
  private initFocus(): void {
    if (!this.hasFocus()) {
      this.focus = [] as Reference[];
    }
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
   * @decorator `@ReferenceTargets('Observation.encounter', ['Encounter',])`
   *
   * @param value - the `encounter` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Observation.encounter', [
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
   * @decorator `@ChoiceDataTypes('Observation.effective[x]')`
   *
   * @param value - the `effective` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('Observation.effective[x]')
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
        `DataType mismatch for Observation.effective[x]: Expected DateTimeType but encountered ${this.effective.fhirType()}`,
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
        `DataType mismatch for Observation.effective[x]: Expected Period but encountered ${this.effective.fhirType()}`,
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

  /**
   * @returns the `effective` property value as a Timing object if defined; else undefined
   */
  public getEffectiveTiming(): Timing | undefined {
    if (!isDefined<IDataType | undefined>(this.effective)) {
      return undefined;
    }
    if (!(this.effective instanceof Timing)) {
      throw new InvalidTypeError(
        `DataType mismatch for Observation.effective[x]: Expected Timing but encountered ${this.effective.fhirType()}`,
      );
    }
    return this.effective;
  }

  /**
   * @returns `true` if the `effective` property exists as a Timing and has a value; `false` otherwise
   */
  public hasEffectiveTiming(): boolean {
    return this.hasEffective() && this.effective instanceof Timing;
  }

  /**
   * @returns the `effective` property value as a InstantType object if defined; else undefined
   */
  public getEffectiveInstantType(): InstantType | undefined {
    if (!isDefined<IDataType | undefined>(this.effective)) {
      return undefined;
    }
    if (!(this.effective instanceof InstantType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Observation.effective[x]: Expected InstantType but encountered ${this.effective.fhirType()}`,
      );
    }
    return this.effective;
  }

  /**
   * @returns `true` if the `effective` property exists as a InstantType and has a value; `false` otherwise
   */
  public hasEffectiveInstantType(): boolean {
    return this.hasEffective() && this.effective instanceof InstantType;
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
      const optErrMsg = `Invalid Observation.issued; Provided element is not an instance of InstantType.`;
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
      const optErrMsg = `Invalid Observation.issued (${String(value)})`;
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
   * @decorator `@ReferenceTargets('Observation.performer', ['Practitioner','PractitionerRole','Organization','CareTeam','Patient','RelatedPerson',])`
   *
   * @param value - the `performer` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Observation.performer', [
    'Practitioner',
  
    'PractitionerRole',
  
    'Organization',
  
    'CareTeam',
  
    'Patient',
  
    'RelatedPerson',
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
   * @decorator `@ReferenceTargets('Observation.performer', ['Practitioner','PractitionerRole','Organization','CareTeam','Patient','RelatedPerson',])`
   *
   * @param value - the `performer` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Observation.performer', [
    'Practitioner',
  
    'PractitionerRole',
  
    'Organization',
  
    'CareTeam',
  
    'Patient',
  
    'RelatedPerson',
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
   * @returns the `value` property value as a DataType object if defined; else undefined
   */
  public getValue(): IDataType | undefined {
    return this.value;
  }

  /**
   * Assigns the provided DataType object value to the `value` property.
   *
   * @decorator `@ChoiceDataTypes('Observation.value[x]')`
   *
   * @param value - the `value` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('Observation.value[x]')
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
   * @returns the `value` property value as a Quantity object if defined; else undefined
   */
  public getValueQuantity(): Quantity | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof Quantity)) {
      throw new InvalidTypeError(
        `DataType mismatch for Observation.value[x]: Expected Quantity but encountered ${this.value.fhirType()}`,
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
   * @returns the `value` property value as a CodeableConcept object if defined; else undefined
   */
  public getValueCodeableConcept(): CodeableConcept | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof CodeableConcept)) {
      throw new InvalidTypeError(
        `DataType mismatch for Observation.value[x]: Expected CodeableConcept but encountered ${this.value.fhirType()}`,
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
        `DataType mismatch for Observation.value[x]: Expected StringType but encountered ${this.value.fhirType()}`,
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
   * @returns the `value` property value as a BooleanType object if defined; else undefined
   */
  public getValueBooleanType(): BooleanType | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof BooleanType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Observation.value[x]: Expected BooleanType but encountered ${this.value.fhirType()}`,
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
   * @returns the `value` property value as a IntegerType object if defined; else undefined
   */
  public getValueIntegerType(): IntegerType | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof IntegerType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Observation.value[x]: Expected IntegerType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `value` property exists as a IntegerType and has a value; `false` otherwise
   */
  public hasValueIntegerType(): boolean {
    return this.hasValue() && this.value instanceof IntegerType;
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
        `DataType mismatch for Observation.value[x]: Expected Range but encountered ${this.value.fhirType()}`,
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
   * @returns the `value` property value as a Ratio object if defined; else undefined
   */
  public getValueRatio(): Ratio | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof Ratio)) {
      throw new InvalidTypeError(
        `DataType mismatch for Observation.value[x]: Expected Ratio but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `value` property exists as a Ratio and has a value; `false` otherwise
   */
  public hasValueRatio(): boolean {
    return this.hasValue() && this.value instanceof Ratio;
  }

  /**
   * @returns the `value` property value as a SampledData object if defined; else undefined
   */
  public getValueSampledData(): SampledData | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof SampledData)) {
      throw new InvalidTypeError(
        `DataType mismatch for Observation.value[x]: Expected SampledData but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `value` property exists as a SampledData and has a value; `false` otherwise
   */
  public hasValueSampledData(): boolean {
    return this.hasValue() && this.value instanceof SampledData;
  }

  /**
   * @returns the `value` property value as a TimeType object if defined; else undefined
   */
  public getValueTimeType(): TimeType | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof TimeType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Observation.value[x]: Expected TimeType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `value` property exists as a TimeType and has a value; `false` otherwise
   */
  public hasValueTimeType(): boolean {
    return this.hasValue() && this.value instanceof TimeType;
  }

  /**
   * @returns the `value` property value as a DateTimeType object if defined; else undefined
   */
  public getValueDateTimeType(): DateTimeType | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof DateTimeType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Observation.value[x]: Expected DateTimeType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `value` property exists as a DateTimeType and has a value; `false` otherwise
   */
  public hasValueDateTimeType(): boolean {
    return this.hasValue() && this.value instanceof DateTimeType;
  }

  /**
   * @returns the `value` property value as a Period object if defined; else undefined
   */
  public getValuePeriod(): Period | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof Period)) {
      throw new InvalidTypeError(
        `DataType mismatch for Observation.value[x]: Expected Period but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `value` property exists as a Period and has a value; `false` otherwise
   */
  public hasValuePeriod(): boolean {
    return this.hasValue() && this.value instanceof Period;
  }

  // End of choice datatype-specific "get"/"has" methods

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
      const optErrMsg = `Invalid Observation.dataAbsentReason; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `interpretation` property value as a CodeableConcept array
   */
  public getInterpretation(): CodeableConcept[] {
    return this.interpretation ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `interpretation` property.
   *
   * @param value - the `interpretation` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setInterpretation(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Observation.interpretation; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.interpretation = value;
    } else {
      this.interpretation = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `interpretation` array property.
   *
   * @param value - the `interpretation` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addInterpretation(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Observation.interpretation; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initInterpretation();
      this.interpretation?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `interpretation` property exists and has a value; `false` otherwise
   */
  public hasInterpretation(): boolean {
    return isDefinedList<CodeableConcept>(this.interpretation) && this.interpretation.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `interpretation` property
   */
  private initInterpretation(): void {
    if(!this.hasInterpretation()) {
      this.interpretation = [] as CodeableConcept[];
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
      const optErrMsg = `Invalid Observation.note; Provided value array has an element that is not an instance of Annotation.`;
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
      const optErrMsg = `Invalid Observation.note; Provided element is not an instance of Annotation.`;
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
   * @returns the `bodySite` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getBodySite(): CodeableConcept {
    return this.bodySite ?? new CodeableConcept();
  }

  /**
   * Assigns the provided BodySite object value to the `bodySite` property.
   *
   * @param value - the `bodySite` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setBodySite(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Observation.bodySite; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
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
    return isDefined<CodeableConcept>(this.bodySite) && !this.bodySite.isEmpty();
  }

  /**
   * @returns the `method` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getMethod(): CodeableConcept {
    return this.method ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Method object value to the `method` property.
   *
   * @param value - the `method` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setMethod(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Observation.method; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.method = value;
    } else {
      this.method = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `method` property exists and has a value; `false` otherwise
   */
  public hasMethod(): boolean {
    return isDefined<CodeableConcept>(this.method) && !this.method.isEmpty();
  }

  /**
   * @returns the `specimen` property value as a Reference object; else an empty Reference object
   */
  public getSpecimen(): Reference {
    return this.specimen ?? new Reference();
  }

  /**
   * Assigns the provided Specimen object value to the `specimen` property.
   *
   * @decorator `@ReferenceTargets('Observation.specimen', ['Specimen',])`
   *
   * @param value - the `specimen` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Observation.specimen', [
    'Specimen',
  ])
  public setSpecimen(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.specimen = value;
    } else {
      this.specimen = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `specimen` property exists and has a value; `false` otherwise
   */
  public hasSpecimen(): boolean {
    return isDefined<Reference>(this.specimen) && !this.specimen.isEmpty();
  }

  /**
   * @returns the `device` property value as a Reference object; else an empty Reference object
   */
  public getDevice(): Reference {
    return this.device ?? new Reference();
  }

  /**
   * Assigns the provided Device object value to the `device` property.
   *
   * @decorator `@ReferenceTargets('Observation.device', ['Device','DeviceMetric',])`
   *
   * @param value - the `device` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Observation.device', [
    'Device',
  
    'DeviceMetric',
  ])
  public setDevice(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.device = value;
    } else {
      this.device = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `device` property exists and has a value; `false` otherwise
   */
  public hasDevice(): boolean {
    return isDefined<Reference>(this.device) && !this.device.isEmpty();
  }

  /**
   * @returns the `referenceRange` property value as a ObservationReferenceRangeComponent array
   */
  public getReferenceRange(): ObservationReferenceRangeComponent[] {
    return this.referenceRange ?? ([] as ObservationReferenceRangeComponent[]);
  }

  /**
   * Assigns the provided ObservationReferenceRangeComponent array value to the `referenceRange` property.
   *
   * @param value - the `referenceRange` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setReferenceRange(value: ObservationReferenceRangeComponent[] | undefined): this {
    if (isDefinedList<ObservationReferenceRangeComponent>(value)) {
      const optErrMsg = `Invalid Observation.referenceRange; Provided value array has an element that is not an instance of ObservationReferenceRangeComponent.`;
      assertFhirTypeList<ObservationReferenceRangeComponent>(value, ObservationReferenceRangeComponent, optErrMsg);
      this.referenceRange = value;
    } else {
      this.referenceRange = undefined;
    }
    return this;
  }

  /**
   * Add the provided ObservationReferenceRangeComponent value to the `referenceRange` array property.
   *
   * @param value - the `referenceRange` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addReferenceRange(value: ObservationReferenceRangeComponent | undefined): this {
    if (isDefined<ObservationReferenceRangeComponent>(value)) {
      const optErrMsg = `Invalid Observation.referenceRange; Provided element is not an instance of ObservationReferenceRangeComponent.`;
      assertFhirType<ObservationReferenceRangeComponent>(value, ObservationReferenceRangeComponent, optErrMsg);
      this.initReferenceRange();
      this.referenceRange?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `referenceRange` property exists and has a value; `false` otherwise
   */
  public hasReferenceRange(): boolean {
    return isDefinedList<ObservationReferenceRangeComponent>(this.referenceRange) && this.referenceRange.some((item: ObservationReferenceRangeComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `referenceRange` property
   */
  private initReferenceRange(): void {
    if(!this.hasReferenceRange()) {
      this.referenceRange = [] as ObservationReferenceRangeComponent[];
    }
  }

  /**
   * @returns the `hasMember` property value as a Reference array
   */
  public getHasMember(): Reference[] {
    return this.hasMember ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `hasMember` property.
   *
   * @decorator `@ReferenceTargets('Observation.hasMember', ['Observation','QuestionnaireResponse','MolecularSequence',])`
   *
   * @param value - the `hasMember` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Observation.hasMember', [
    'Observation',
  
    'QuestionnaireResponse',
  
    'MolecularSequence',
  ])
  public setHasMember(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.hasMember = value;
    } else {
      this.hasMember = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `hasMember` array property.
   *
   * @decorator `@ReferenceTargets('Observation.hasMember', ['Observation','QuestionnaireResponse','MolecularSequence',])`
   *
   * @param value - the `hasMember` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Observation.hasMember', [
    'Observation',
  
    'QuestionnaireResponse',
  
    'MolecularSequence',
  ])
  public addHasMember(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initHasMember();
      this.hasMember?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `hasMember` property exists and has a value; `false` otherwise
   */
  public hasHasMember(): boolean {
    return isDefinedList<Reference>(this.hasMember) && this.hasMember.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `hasMember` property
   */
  private initHasMember(): void {
    if (!this.hasHasMember()) {
      this.hasMember = [] as Reference[];
    }
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
   * @decorator `@ReferenceTargets('Observation.derivedFrom', ['DocumentReference','ImagingStudy','Media','QuestionnaireResponse','Observation','MolecularSequence',])`
   *
   * @param value - the `derivedFrom` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Observation.derivedFrom', [
    'DocumentReference',
  
    'ImagingStudy',
  
    'Media',
  
    'QuestionnaireResponse',
  
    'Observation',
  
    'MolecularSequence',
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
   * @decorator `@ReferenceTargets('Observation.derivedFrom', ['DocumentReference','ImagingStudy','Media','QuestionnaireResponse','Observation','MolecularSequence',])`
   *
   * @param value - the `derivedFrom` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Observation.derivedFrom', [
    'DocumentReference',
  
    'ImagingStudy',
  
    'Media',
  
    'QuestionnaireResponse',
  
    'Observation',
  
    'MolecularSequence',
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
   * @returns the `component` property value as a ObservationComponentComponent array
   */
  public getComponent(): ObservationComponentComponent[] {
    return this.component ?? ([] as ObservationComponentComponent[]);
  }

  /**
   * Assigns the provided ObservationComponentComponent array value to the `component` property.
   *
   * @param value - the `component` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setComponent(value: ObservationComponentComponent[] | undefined): this {
    if (isDefinedList<ObservationComponentComponent>(value)) {
      const optErrMsg = `Invalid Observation.component; Provided value array has an element that is not an instance of ObservationComponentComponent.`;
      assertFhirTypeList<ObservationComponentComponent>(value, ObservationComponentComponent, optErrMsg);
      this.component = value;
    } else {
      this.component = undefined;
    }
    return this;
  }

  /**
   * Add the provided ObservationComponentComponent value to the `component` array property.
   *
   * @param value - the `component` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addComponent(value: ObservationComponentComponent | undefined): this {
    if (isDefined<ObservationComponentComponent>(value)) {
      const optErrMsg = `Invalid Observation.component; Provided element is not an instance of ObservationComponentComponent.`;
      assertFhirType<ObservationComponentComponent>(value, ObservationComponentComponent, optErrMsg);
      this.initComponent();
      this.component?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `component` property exists and has a value; `false` otherwise
   */
  public hasComponent(): boolean {
    return isDefinedList<ObservationComponentComponent>(this.component) && this.component.some((item: ObservationComponentComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `component` property
   */
  private initComponent(): void {
    if(!this.hasComponent()) {
      this.component = [] as ObservationComponentComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Observation';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identifier,
      this.basedOn,
      this.partOf,
      this.status,
      this.category,
      this.code,
      this.subject,
      this.focus,
      this.encounter,
      this.effective,
      this.issued,
      this.performer,
      this.value,
      this.dataAbsentReason,
      this.interpretation,
      this.note,
      this.bodySite,
      this.method,
      this.specimen,
      this.device,
      this.referenceRange,
      this.hasMember,
      this.derivedFrom,
      this.component,
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
  public override copy(): Observation {
    const dest = new Observation();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: Observation): void {
    super.copyValues(dest);
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    const basedOnList = copyListValues<Reference>(this.basedOn);
    dest.basedOn = basedOnList.length === 0 ? undefined : basedOnList;
    const partOfList = copyListValues<Reference>(this.partOf);
    dest.partOf = partOfList.length === 0 ? undefined : partOfList;
    dest.status = this.status ? this.status.copy() : null;
    const categoryList = copyListValues<CodeableConcept>(this.category);
    dest.category = categoryList.length === 0 ? undefined : categoryList;
    dest.code = this.code ? this.code.copy() : null;
    dest.subject = this.subject?.copy();
    const focusList = copyListValues<Reference>(this.focus);
    dest.focus = focusList.length === 0 ? undefined : focusList;
    dest.encounter = this.encounter?.copy();
    dest.effective = this.effective?.copy() as IDataType;
    dest.issued = this.issued?.copy();
    const performerList = copyListValues<Reference>(this.performer);
    dest.performer = performerList.length === 0 ? undefined : performerList;
    dest.value = this.value?.copy() as IDataType;
    dest.dataAbsentReason = this.dataAbsentReason?.copy();
    const interpretationList = copyListValues<CodeableConcept>(this.interpretation);
    dest.interpretation = interpretationList.length === 0 ? undefined : interpretationList;
    const noteList = copyListValues<Annotation>(this.note);
    dest.note = noteList.length === 0 ? undefined : noteList;
    dest.bodySite = this.bodySite?.copy();
    dest.method = this.method?.copy();
    dest.specimen = this.specimen?.copy();
    dest.device = this.device?.copy();
    const referenceRangeList = copyListValues<ObservationReferenceRangeComponent>(this.referenceRange);
    dest.referenceRange = referenceRangeList.length === 0 ? undefined : referenceRangeList;
    const hasMemberList = copyListValues<Reference>(this.hasMember);
    dest.hasMember = hasMemberList.length === 0 ? undefined : hasMemberList;
    const derivedFromList = copyListValues<Reference>(this.derivedFrom);
    dest.derivedFrom = derivedFromList.length === 0 ? undefined : derivedFromList;
    const componentList = copyListValues<ObservationComponentComponent>(this.component);
    dest.component = componentList.length === 0 ? undefined : componentList;
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

    if (this.hasPartOf()) {
      setFhirComplexListJson(this.getPartOf(), 'partOf', jsonObj);
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

    if (this.hasCode()) {
      setFhirComplexJson(this.getCode(), 'code', jsonObj);
    } else {
      jsonObj['code'] = null;
    }

    if (this.hasSubject()) {
      setFhirComplexJson(this.getSubject(), 'subject', jsonObj);
    }

    if (this.hasFocus()) {
      setFhirComplexListJson(this.getFocus(), 'focus', jsonObj);
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

    if (this.hasValue()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getValue()!, 'value', jsonObj);
    }

    if (this.hasDataAbsentReason()) {
      setFhirComplexJson(this.getDataAbsentReason(), 'dataAbsentReason', jsonObj);
    }

    if (this.hasInterpretation()) {
      setFhirComplexListJson(this.getInterpretation(), 'interpretation', jsonObj);
    }

    if (this.hasNote()) {
      setFhirComplexListJson(this.getNote(), 'note', jsonObj);
    }

    if (this.hasBodySite()) {
      setFhirComplexJson(this.getBodySite(), 'bodySite', jsonObj);
    }

    if (this.hasMethod()) {
      setFhirComplexJson(this.getMethod(), 'method', jsonObj);
    }

    if (this.hasSpecimen()) {
      setFhirComplexJson(this.getSpecimen(), 'specimen', jsonObj);
    }

    if (this.hasDevice()) {
      setFhirComplexJson(this.getDevice(), 'device', jsonObj);
    }

    if (this.hasReferenceRange()) {
      setFhirBackboneElementListJson(this.getReferenceRange(), 'referenceRange', jsonObj);
    }

    if (this.hasHasMember()) {
      setFhirComplexListJson(this.getHasMember(), 'hasMember', jsonObj);
    }

    if (this.hasDerivedFrom()) {
      setFhirComplexListJson(this.getDerivedFrom(), 'derivedFrom', jsonObj);
    }

    if (this.hasComponent()) {
      setFhirBackboneElementListJson(this.getComponent(), 'component', jsonObj);
    }

    return jsonObj;
  }
}

/**
 * ObservationReferenceRangeComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Provides guide for interpretation
 * - **Definition:** Guidance on how to interpret the value by comparison to a normal or recommended range.  Multiple reference ranges are interpreted as an "OR".   In other words, to represent two distinct target populations, two `referenceRange` elements would be used.
 * - **Comment:** Most observations only have one generic reference range. Systems MAY choose to restrict to only supplying the relevant reference range based on knowledge about the patient (e.g., specific to the patient\'s age, gender, weight and other factors), but this might not be possible or appropriate. Whenever more than one reference range is supplied, the differences between them SHOULD be provided in the reference range and/or age properties.
 * - **Requirements:** Knowing what values are considered "normal" can help evaluate the significance of a particular result. Need to be able to provide multiple reference ranges for different contexts.
 *
 * @category Data Models: Resource
 * @see [FHIR Observation](http://hl7.org/fhir/StructureDefinition/Observation)
 */
export class ObservationReferenceRangeComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `ObservationReferenceRangeComponent` JSON to instantiate the ObservationReferenceRangeComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ObservationReferenceRangeComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ObservationReferenceRangeComponent
   * @returns ObservationReferenceRangeComponent data model or undefined for `ObservationReferenceRangeComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ObservationReferenceRangeComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ObservationReferenceRangeComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ObservationReferenceRangeComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    fieldName = 'low';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Quantity | undefined = Quantity.parse(classJsonObj[fieldName]!, sourceField);
      instance.setLow(datatype);
    }

    fieldName = 'high';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Quantity | undefined = Quantity.parse(classJsonObj[fieldName]!, sourceField);
      instance.setHigh(datatype);
    }

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setType(datatype);
    }

    fieldName = 'appliesTo';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addAppliesTo(datatype);
        }
      });
    }

    fieldName = 'age';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Range | undefined = Range.parse(classJsonObj[fieldName]!, sourceField);
      instance.setAge(datatype);
    }

    fieldName = 'text';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setTextElement(datatype);
    }

    return instance;
  }

  /**
   * Observation.referenceRange.low Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Low Range, if relevant
   * - **Definition:** The value of the low bound of the reference range.  The low bound of the reference range endpoint is inclusive of the value (e.g.  reference range is >=5 - <=9). If the low bound is omitted,  it is assumed to be meaningless (e.g. reference range is <=2.3).
   * - **FHIR Type:** `Quantity`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private low?: Quantity | undefined;

  /**
   * Observation.referenceRange.high Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** High Range, if relevant
   * - **Definition:** The value of the high bound of the reference range.  The high bound of the reference range endpoint is inclusive of the value (e.g.  reference range is >=5 - <=9). If the high bound is omitted,  it is assumed to be meaningless (e.g. reference range is >= 2.3).
   * - **FHIR Type:** `Quantity`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private high?: Quantity | undefined;

  /**
   * Observation.referenceRange.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Reference range qualifier
   * - **Definition:** Codes to indicate the what part of the targeted reference population it applies to. For example, the normal or therapeutic range.
   * - **Comment:** This SHOULD be populated if there is more than one range.  If this element is not present then the normal range is assumed.
   * - **Requirements:** Need to be able to say what kind of reference range this is - normal, recommended, therapeutic, etc.,  - for proper interpretation.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private type_?: CodeableConcept | undefined;

  /**
   * Observation.referenceRange.appliesTo Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Reference range population
   * - **Definition:** Codes to indicate the target population this reference range applies to.  For example, a reference range may be based on the normal population or a particular sex or race.  Multiple `appliesTo`  are interpreted as an "AND" of the target populations.  For example, to represent a target population of African American females, both a code of female and a code for African American would be used.
   * - **Comment:** This SHOULD be populated if there is more than one range.  If this element is not present then the normal population is assumed.
   * - **Requirements:** Need to be able to identify the target population for proper interpretation.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private appliesTo?: CodeableConcept[] | undefined;

  /**
   * Observation.referenceRange.age Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Applicable age range, if relevant
   * - **Definition:** The age at which this reference range is applicable. This is a neonatal age (e.g. number of weeks at term) if the meaning says so.
   * - **Requirements:** Some analytes vary greatly over age.
   * - **FHIR Type:** `Range`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private age?: Range | undefined;

  /**
   * Observation.referenceRange.text Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Text based reference range in an observation
   * - **Definition:** Text based reference range in an observation which may be used when a quantitative range is not appropriate for an observation.  An example would be a reference value of "Negative" or a list or table of "normals".
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private text?: StringType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `low` property value as a Quantity object if defined; else an empty Quantity object
   */
  public getLow(): Quantity {
    return this.low ?? new Quantity();
  }

  /**
   * Assigns the provided Low object value to the `low` property.
   *
   * @param value - the `low` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setLow(value: Quantity | undefined): this {
    if (isDefined<Quantity>(value)) {
      const optErrMsg = `Invalid Observation.referenceRange.low; Provided element is not an instance of Quantity.`;
      assertFhirType<Quantity>(value, Quantity, optErrMsg);
      this.low = value;
    } else {
      this.low = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `low` property exists and has a value; `false` otherwise
   */
  public hasLow(): boolean {
    return isDefined<Quantity>(this.low) && !this.low.isEmpty();
  }

  /**
   * @returns the `high` property value as a Quantity object if defined; else an empty Quantity object
   */
  public getHigh(): Quantity {
    return this.high ?? new Quantity();
  }

  /**
   * Assigns the provided High object value to the `high` property.
   *
   * @param value - the `high` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setHigh(value: Quantity | undefined): this {
    if (isDefined<Quantity>(value)) {
      const optErrMsg = `Invalid Observation.referenceRange.high; Provided element is not an instance of Quantity.`;
      assertFhirType<Quantity>(value, Quantity, optErrMsg);
      this.high = value;
    } else {
      this.high = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `high` property exists and has a value; `false` otherwise
   */
  public hasHigh(): boolean {
    return isDefined<Quantity>(this.high) && !this.high.isEmpty();
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
      const optErrMsg = `Invalid Observation.referenceRange.type; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `appliesTo` property value as a CodeableConcept array
   */
  public getAppliesTo(): CodeableConcept[] {
    return this.appliesTo ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `appliesTo` property.
   *
   * @param value - the `appliesTo` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAppliesTo(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Observation.referenceRange.appliesTo; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.appliesTo = value;
    } else {
      this.appliesTo = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `appliesTo` array property.
   *
   * @param value - the `appliesTo` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addAppliesTo(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Observation.referenceRange.appliesTo; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initAppliesTo();
      this.appliesTo?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `appliesTo` property exists and has a value; `false` otherwise
   */
  public hasAppliesTo(): boolean {
    return isDefinedList<CodeableConcept>(this.appliesTo) && this.appliesTo.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `appliesTo` property
   */
  private initAppliesTo(): void {
    if(!this.hasAppliesTo()) {
      this.appliesTo = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `age` property value as a Range object if defined; else an empty Range object
   */
  public getAge(): Range {
    return this.age ?? new Range();
  }

  /**
   * Assigns the provided Age object value to the `age` property.
   *
   * @param value - the `age` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAge(value: Range | undefined): this {
    if (isDefined<Range>(value)) {
      const optErrMsg = `Invalid Observation.referenceRange.age; Provided element is not an instance of Range.`;
      assertFhirType<Range>(value, Range, optErrMsg);
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
    return isDefined<Range>(this.age) && !this.age.isEmpty();
  }

  /**
   * @returns the `text` property value as a StringType object if defined; else an empty StringType object
   */
  public getTextElement(): StringType {
    return this.text ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `text` property.
   *
   * @param element - the `text` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setTextElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid Observation.referenceRange.text; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.text = element;
    } else {
      this.text = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `text` property exists and has a value; `false` otherwise
   */
  public hasTextElement(): boolean {
    return isDefined<StringType>(this.text) && !this.text.isEmpty();
  }

  /**
   * @returns the `text` property value as a fhirString if defined; else undefined
   */
  public getText(): fhirString | undefined {
    return this.text?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `text` property.
   *
   * @param value - the `text` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setText(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid Observation.referenceRange.text (${String(value)})`;
      this.text = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.text = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `text` property exists and has a value; `false` otherwise
   */
  public hasText(): boolean {
    return this.hasTextElement();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Observation.referenceRange';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.low,
      this.high,
      this.type_,
      this.appliesTo,
      this.age,
      this.text,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ObservationReferenceRangeComponent {
    const dest = new ObservationReferenceRangeComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ObservationReferenceRangeComponent): void {
    super.copyValues(dest);
    dest.low = this.low?.copy();
    dest.high = this.high?.copy();
    dest.type_ = this.type_?.copy();
    const appliesToList = copyListValues<CodeableConcept>(this.appliesTo);
    dest.appliesTo = appliesToList.length === 0 ? undefined : appliesToList;
    dest.age = this.age?.copy();
    dest.text = this.text?.copy();
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

    if (this.hasLow()) {
      setFhirComplexJson(this.getLow(), 'low', jsonObj);
    }

    if (this.hasHigh()) {
      setFhirComplexJson(this.getHigh(), 'high', jsonObj);
    }

    if (this.hasType()) {
      setFhirComplexJson(this.getType(), 'type', jsonObj);
    }

    if (this.hasAppliesTo()) {
      setFhirComplexListJson(this.getAppliesTo(), 'appliesTo', jsonObj);
    }

    if (this.hasAge()) {
      setFhirComplexJson(this.getAge(), 'age', jsonObj);
    }

    if (this.hasTextElement()) {
      setFhirPrimitiveJson<fhirString>(this.getTextElement(), 'text', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * ObservationComponentComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Component results
 * - **Definition:** Some observations have multiple component observations.  These component observations are expressed as separate code value pairs that share the same attributes.  Examples include systolic and diastolic component observations for blood pressure measurement and multiple component observations for genetics observations.
 * - **Comment:** For a discussion on the ways Observations can be assembled in groups together see [Notes](https://hl7.org/fhir/observation.html#notes) below.
 * - **Requirements:** Component observations share the same attributes in the Observation resource as the primary observation and are always treated a part of a single observation (they are not separable).   However, the reference range for the primary observation value is not inherited by the component values and is required when appropriate for each component observation.
 *
 * @category Data Models: Resource
 * @see [FHIR Observation](http://hl7.org/fhir/StructureDefinition/Observation)
 */
export class ObservationComponentComponent extends BackboneElement implements IBackboneElement {
  constructor(code: CodeableConcept | null = null) {
    super();

    this.code = null;
    if (isDefined<CodeableConcept>(code)) {
      this.setCode(code);
    }
  }

  /**
   * Parse the provided `ObservationComponentComponent` JSON to instantiate the ObservationComponentComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ObservationComponentComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ObservationComponentComponent
   * @returns ObservationComponentComponent data model or undefined for `ObservationComponentComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ObservationComponentComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ObservationComponentComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ObservationComponentComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    const classMetadata: DecoratorMetadataObject | null = ObservationComponentComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for ObservationComponentComponent`;
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

    fieldName = 'value[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const value: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setValue(value);

    fieldName = 'dataAbsentReason';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setDataAbsentReason(datatype);
    }

    fieldName = 'interpretation';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addInterpretation(datatype);
        }
      });
    }

    fieldName = 'referenceRange';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: ObservationReferenceRangeComponent | undefined = ObservationReferenceRangeComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addReferenceRange(component);
        }
      });
    }

    return instance;
  }

  /**
   * Observation.component.code Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Type of component observation (code / type)
   * - **Definition:** Describes what was observed. Sometimes this is called the observation "code".
   * - **Comment:** *All* code-value and  component.code-component.value pairs need to be taken into account to correctly understand the meaning of the observation.
   * - **Requirements:** Knowing what kind of observation is being made is essential to understanding the observation.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private code: CodeableConcept | null;

  /**
   * Observation.component.value[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('Observation.component.value[x]', ['Quantity','CodeableConcept','string','boolean','integer','Range','Ratio','SampledData','time','dateTime','Period',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Actual component result
   * - **Definition:** The information determined as a result of making the observation, if the information has a simple value.
   * - **Comment:** Used when observation has a set of component observations. An observation may have both a value (e.g. an  Apgar score)  and component observations (the observations from which the Apgar score was derived). If a value is present, the datatype for this element should be determined by Observation.code. A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Observation.code defines a coded value.  For additional guidance, see the [Notes section](https://hl7.org/fhir/observation.html#notes) below.
   * - **Requirements:** An observation exists to have a value, though it might not if it is in error, or if it represents a group of observations.
   * - **FHIR Types:**
   *     'Quantity',
   *     'CodeableConcept',
   *     'string',
   *     'boolean',
   *     'integer',
   *     'Range',
   *     'Ratio',
   *     'SampledData',
   *     'time',
   *     'dateTime',
   *     'Period',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  @ChoiceDataTypesMeta('Observation.component.value[x]',[
    'Quantity',
    'CodeableConcept',
    'string',
    'boolean',
    'integer',
    'Range',
    'Ratio',
    'SampledData',
    'time',
    'dateTime',
    'Period',
  ])
  private value?: IDataType | undefined;

  /**
   * Observation.component.dataAbsentReason Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Why the component result is missing
   * - **Definition:** Provides a reason why the expected value in the element Observation.component.value[x] is missing.
   * - **Comment:** "Null" or exceptional values can be represented two ways in FHIR Observations.  One way is to simply include them in the value set and represent the exceptions in the value.  For example, measurement values for a serology test could be  "detected", "not detected", "inconclusive", or  "test not done".  The alternate way is to use the value element for actual observations and use the explicit dataAbsentReason element to record exceptional values.  For example, the dataAbsentReason code "error" could be used when the measurement was not completed.  Because of these options, use-case agreements are required to interpret general observations for exceptional values.
   * - **Requirements:** For many results it is necessary to handle exceptional values in measurements.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private dataAbsentReason?: CodeableConcept | undefined;

  /**
   * Observation.component.interpretation Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** High, low, normal, etc.
   * - **Definition:** A categorical assessment of an observation value.  For example, high, low, normal.
   * - **Comment:** Historically used for laboratory results (known as \'abnormal flag\' ),  its use extends to other use cases where coded interpretations  are relevant.  Often reported as one or more simple compact codes this element is often placed adjacent to the result value in reports and flow sheets to signal the meaning/normalcy status of the result.
   * - **Requirements:** For some results, particularly numeric results, an interpretation is necessary to fully understand the significance of a result.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private interpretation?: CodeableConcept[] | undefined;

  /**
   * Observation.component.referenceRange Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Provides guide for interpretation of component result
   * - **Definition:** Guidance on how to interpret the value by comparison to a normal or recommended range.
   * - **Comment:** Most observations only have one generic reference range. Systems MAY choose to restrict to only supplying the relevant reference range based on knowledge about the patient (e.g., specific to the patient\'s age, gender, weight and other factors), but this might not be possible or appropriate. Whenever more than one reference range is supplied, the differences between them SHOULD be provided in the reference range and/or age properties.
   * - **Requirements:** Knowing what values are considered "normal" can help evaluate the significance of a particular result. Need to be able to provide multiple reference ranges for different contexts.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private referenceRange?: ObservationReferenceRangeComponent[] | undefined;

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
      const optErrMsg = `Invalid Observation.component.code; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `value` property value as a DataType object if defined; else undefined
   */
  public getValue(): IDataType | undefined {
    return this.value;
  }

  /**
   * Assigns the provided DataType object value to the `value` property.
   *
   * @decorator `@ChoiceDataTypes('Observation.component.value[x]')`
   *
   * @param value - the `value` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('Observation.component.value[x]')
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
   * @returns the `value` property value as a Quantity object if defined; else undefined
   */
  public getValueQuantity(): Quantity | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof Quantity)) {
      throw new InvalidTypeError(
        `DataType mismatch for Observation.component.value[x]: Expected Quantity but encountered ${this.value.fhirType()}`,
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
   * @returns the `value` property value as a CodeableConcept object if defined; else undefined
   */
  public getValueCodeableConcept(): CodeableConcept | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof CodeableConcept)) {
      throw new InvalidTypeError(
        `DataType mismatch for Observation.component.value[x]: Expected CodeableConcept but encountered ${this.value.fhirType()}`,
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
        `DataType mismatch for Observation.component.value[x]: Expected StringType but encountered ${this.value.fhirType()}`,
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
   * @returns the `value` property value as a BooleanType object if defined; else undefined
   */
  public getValueBooleanType(): BooleanType | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof BooleanType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Observation.component.value[x]: Expected BooleanType but encountered ${this.value.fhirType()}`,
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
   * @returns the `value` property value as a IntegerType object if defined; else undefined
   */
  public getValueIntegerType(): IntegerType | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof IntegerType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Observation.component.value[x]: Expected IntegerType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `value` property exists as a IntegerType and has a value; `false` otherwise
   */
  public hasValueIntegerType(): boolean {
    return this.hasValue() && this.value instanceof IntegerType;
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
        `DataType mismatch for Observation.component.value[x]: Expected Range but encountered ${this.value.fhirType()}`,
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
   * @returns the `value` property value as a Ratio object if defined; else undefined
   */
  public getValueRatio(): Ratio | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof Ratio)) {
      throw new InvalidTypeError(
        `DataType mismatch for Observation.component.value[x]: Expected Ratio but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `value` property exists as a Ratio and has a value; `false` otherwise
   */
  public hasValueRatio(): boolean {
    return this.hasValue() && this.value instanceof Ratio;
  }

  /**
   * @returns the `value` property value as a SampledData object if defined; else undefined
   */
  public getValueSampledData(): SampledData | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof SampledData)) {
      throw new InvalidTypeError(
        `DataType mismatch for Observation.component.value[x]: Expected SampledData but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `value` property exists as a SampledData and has a value; `false` otherwise
   */
  public hasValueSampledData(): boolean {
    return this.hasValue() && this.value instanceof SampledData;
  }

  /**
   * @returns the `value` property value as a TimeType object if defined; else undefined
   */
  public getValueTimeType(): TimeType | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof TimeType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Observation.component.value[x]: Expected TimeType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `value` property exists as a TimeType and has a value; `false` otherwise
   */
  public hasValueTimeType(): boolean {
    return this.hasValue() && this.value instanceof TimeType;
  }

  /**
   * @returns the `value` property value as a DateTimeType object if defined; else undefined
   */
  public getValueDateTimeType(): DateTimeType | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof DateTimeType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Observation.component.value[x]: Expected DateTimeType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `value` property exists as a DateTimeType and has a value; `false` otherwise
   */
  public hasValueDateTimeType(): boolean {
    return this.hasValue() && this.value instanceof DateTimeType;
  }

  /**
   * @returns the `value` property value as a Period object if defined; else undefined
   */
  public getValuePeriod(): Period | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof Period)) {
      throw new InvalidTypeError(
        `DataType mismatch for Observation.component.value[x]: Expected Period but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `value` property exists as a Period and has a value; `false` otherwise
   */
  public hasValuePeriod(): boolean {
    return this.hasValue() && this.value instanceof Period;
  }

  // End of choice datatype-specific "get"/"has" methods

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
      const optErrMsg = `Invalid Observation.component.dataAbsentReason; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `interpretation` property value as a CodeableConcept array
   */
  public getInterpretation(): CodeableConcept[] {
    return this.interpretation ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `interpretation` property.
   *
   * @param value - the `interpretation` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setInterpretation(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Observation.component.interpretation; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.interpretation = value;
    } else {
      this.interpretation = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `interpretation` array property.
   *
   * @param value - the `interpretation` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addInterpretation(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Observation.component.interpretation; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initInterpretation();
      this.interpretation?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `interpretation` property exists and has a value; `false` otherwise
   */
  public hasInterpretation(): boolean {
    return isDefinedList<CodeableConcept>(this.interpretation) && this.interpretation.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `interpretation` property
   */
  private initInterpretation(): void {
    if(!this.hasInterpretation()) {
      this.interpretation = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `referenceRange` property value as a ObservationReferenceRangeComponent array
   */
  public getReferenceRange(): ObservationReferenceRangeComponent[] {
    return this.referenceRange ?? ([] as ObservationReferenceRangeComponent[]);
  }

  /**
   * Assigns the provided ObservationReferenceRangeComponent array value to the `referenceRange` property.
   *
   * @param value - the `referenceRange` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setReferenceRange(value: ObservationReferenceRangeComponent[] | undefined): this {
    if (isDefinedList<ObservationReferenceRangeComponent>(value)) {
      const optErrMsg = `Invalid Observation.component.referenceRange; Provided value array has an element that is not an instance of ObservationReferenceRangeComponent.`;
      assertFhirTypeList<ObservationReferenceRangeComponent>(value, ObservationReferenceRangeComponent, optErrMsg);
      this.referenceRange = value;
    } else {
      this.referenceRange = undefined;
    }
    return this;
  }

  /**
   * Add the provided ObservationReferenceRangeComponent value to the `referenceRange` array property.
   *
   * @param value - the `referenceRange` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addReferenceRange(value: ObservationReferenceRangeComponent | undefined): this {
    if (isDefined<ObservationReferenceRangeComponent>(value)) {
      const optErrMsg = `Invalid Observation.component.referenceRange; Provided element is not an instance of ObservationReferenceRangeComponent.`;
      assertFhirType<ObservationReferenceRangeComponent>(value, ObservationReferenceRangeComponent, optErrMsg);
      this.initReferenceRange();
      this.referenceRange?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `referenceRange` property exists and has a value; `false` otherwise
   */
  public hasReferenceRange(): boolean {
    return isDefinedList<ObservationReferenceRangeComponent>(this.referenceRange) && this.referenceRange.some((item: ObservationReferenceRangeComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `referenceRange` property
   */
  private initReferenceRange(): void {
    if(!this.hasReferenceRange()) {
      this.referenceRange = [] as ObservationReferenceRangeComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Observation.component';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.code,
      this.value,
      this.dataAbsentReason,
      this.interpretation,
      this.referenceRange,
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
  public override copy(): ObservationComponentComponent {
    const dest = new ObservationComponentComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ObservationComponentComponent): void {
    super.copyValues(dest);
    dest.code = this.code ? this.code.copy() : null;
    dest.value = this.value?.copy() as IDataType;
    dest.dataAbsentReason = this.dataAbsentReason?.copy();
    const interpretationList = copyListValues<CodeableConcept>(this.interpretation);
    dest.interpretation = interpretationList.length === 0 ? undefined : interpretationList;
    const referenceRangeList = copyListValues<ObservationReferenceRangeComponent>(this.referenceRange);
    dest.referenceRange = referenceRangeList.length === 0 ? undefined : referenceRangeList;
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

    if (this.hasValue()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getValue()!, 'value', jsonObj);
    }

    if (this.hasDataAbsentReason()) {
      setFhirComplexJson(this.getDataAbsentReason(), 'dataAbsentReason', jsonObj);
    }

    if (this.hasInterpretation()) {
      setFhirComplexListJson(this.getInterpretation(), 'interpretation', jsonObj);
    }

    if (this.hasReferenceRange()) {
      setFhirBackboneElementListJson(this.getReferenceRange(), 'referenceRange', jsonObj);
    }

    return jsonObj;
  }
}
