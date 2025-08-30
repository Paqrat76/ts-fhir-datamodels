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
 * NutritionIntake Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/NutritionIntake
 * StructureDefinition.name: NutritionIntake
 * StructureDefinition.description: A record of food or fluid that is being consumed by a patient.  A NutritionIntake may indicate that the patient may be consuming the food or fluid now or has consumed the food or fluid in the past.  The source of this information can be the patient, significant other (such as a family member or spouse), or a clinician.  A common scenario where this information is captured is during the history taking process during a patient visit or stay or through an app that tracks food or fluids consumed.   The consumption information may come from sources such as the patient\'s memory, from a nutrition label,  or from a clinician documenting observed intake.
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
  InvalidTypeError,
  JSON,
  PrimitiveTypeJson,
  ReferenceTargets,
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
import { Annotation, CodeableConcept, CodeableReference, Identifier, PARSABLE_DATATYPE_MAP, Period, Quantity, Reference, Timing } from '../complex-types/complex-datatypes';
import { EventStatusEnum } from '../code-systems/EventStatusEnum';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Symbol.metadata polyfill secret sauce for decorator metadata
(Symbol.metadata as any) ??= Symbol('Symbol.metadata');

/**
 * NutritionIntake Class
 *
 * @remarks
 * A record of food or fluid that is being consumed by a patient.  A NutritionIntake may indicate that the patient may be consuming the food or fluid now or has consumed the food or fluid in the past.  The source of this information can be the patient, significant other (such as a family member or spouse), or a clinician.  A common scenario where this information is captured is during the history taking process during a patient visit or stay or through an app that tracks food or fluids consumed.   The consumption information may come from sources such as the patient\'s memory, from a nutrition label,  or from a clinician documenting observed intake.
 *
 * **FHIR Specification**
 * - **Short:** Record of food or fluid being taken by a patient
 * - **Definition:** A record of food or fluid that is being consumed by a patient.   A NutritionIntake may indicate that the patient may be consuming the food or fluid now or has consumed the food or fluid in the past.  The source of this information can be the patient, significant other (such as a family member or spouse), or a clinician.  A common scenario where this information is captured is during the history taking process during a patient visit or stay or through an app that tracks food or fluids consumed.   The consumption information may come from sources such as the patient\'s memory, from a nutrition label,  or from a clinician documenting observed intake.
 * - **FHIR Version:** 5.0.0
 *
 * @category Data Models: Resource
 * @see [FHIR NutritionIntake](http://hl7.org/fhir/StructureDefinition/NutritionIntake)
 */
export class NutritionIntake extends DomainResource implements IDomainResource {
  constructor(status: EnumCodeType | CodeType | fhirCode | null = null, subject: Reference | null = null, consumedItem: NutritionIntakeConsumedItemComponent[] | null = null) {
    super();

    this.eventStatusEnum = new EventStatusEnum();

    this.status = constructorCodeValueAsEnumCodeType<EventStatusEnum>(
      status,
      EventStatusEnum,
      this.eventStatusEnum,
      'NutritionIntake.status',
    );

    this.subject = null;
    if (isDefined<Reference>(subject)) {
      this.setSubject(subject);
    }

    this.consumedItem = null;
    if (isDefinedList<NutritionIntakeConsumedItemComponent>(consumedItem)) {
      this.setConsumedItem(consumedItem);
    }
  }

  /**
   * Parse the provided `NutritionIntake` JSON to instantiate the NutritionIntake data model.
   *
   * @param sourceJson - JSON representing FHIR `NutritionIntake`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to NutritionIntake
   * @returns NutritionIntake data model or undefined for `NutritionIntake`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): NutritionIntake | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'NutritionIntake';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new NutritionIntake();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'NutritionIntake');
    fhirParser.processDomainResourceJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const classMetadata: DecoratorMetadataObject | null = NutritionIntake[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for NutritionIntake`;
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

    fieldName = 'instantiatesCanonical';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
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

    fieldName = 'instantiatesUri';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
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

    fieldName = 'statusReason';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addStatusReason(datatype);
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

    fieldName = 'occurrence[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const occurrence: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setOccurrence(occurrence);

    fieldName = 'recorded';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dtJson, dtSiblingJson);
      instance.setRecordedElement(datatype);
    }

    fieldName = 'reported[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const reported: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setReported(reported);

    fieldName = 'consumedItem';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: NutritionIntakeConsumedItemComponent | undefined = NutritionIntakeConsumedItemComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component === undefined) {
          instance.setConsumedItem(null);
        } else {
          instance.addConsumedItem(component);
        }
      });
    } else {
      instance.setConsumedItem(null);
    }

    fieldName = 'ingredientLabel';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: NutritionIntakeIngredientLabelComponent | undefined = NutritionIntakeIngredientLabelComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addIngredientLabel(component);
        }
      });
    }

    fieldName = 'performer';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: NutritionIntakePerformerComponent | undefined = NutritionIntakePerformerComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addPerformer(component);
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
   * NutritionIntake.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** External identifier
   * - **Definition:** Identifiers associated with this Nutrition Intake that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate. They are business identifiers assigned to this resource by the performer or other systems and remain constant as the resource is updated and propagates from server to server.
   * - **Comment:** This is a business identifier, not a resource identifier.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier[] | undefined;

  /**
   * NutritionIntake.instantiatesCanonical Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Instantiates FHIR protocol or definition
   * - **Definition:** Instantiates FHIR protocol or definition.
   * - **FHIR Type:** `canonical`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/ActivityDefinition',
   *       'http://hl7.org/fhir/StructureDefinition/ChargeItemDefinition',
   *       'http://hl7.org/fhir/StructureDefinition/ClinicalUseDefinition',
   *       'http://hl7.org/fhir/StructureDefinition/EventDefinition',
   *       'http://hl7.org/fhir/StructureDefinition/Measure',
   *       'http://hl7.org/fhir/StructureDefinition/MessageDefinition',
   *       'http://hl7.org/fhir/StructureDefinition/ObservationDefinition',
   *       'http://hl7.org/fhir/StructureDefinition/OperationDefinition',
   *       'http://hl7.org/fhir/StructureDefinition/PlanDefinition',
   *       'http://hl7.org/fhir/StructureDefinition/Questionnaire',
   *       'http://hl7.org/fhir/StructureDefinition/Requirements',
   *       'http://hl7.org/fhir/StructureDefinition/SubscriptionTopic',
   *       'http://hl7.org/fhir/StructureDefinition/TestPlan',
   *       'http://hl7.org/fhir/StructureDefinition/TestScript',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private instantiatesCanonical?: CanonicalType[] | undefined;

  /**
   * NutritionIntake.instantiatesUri Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Instantiates external protocol or definition
   * - **Definition:** Instantiates external protocol or definition.
   * - **FHIR Type:** `uri`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private instantiatesUri?: UriType[] | undefined;

  /**
   * NutritionIntake.basedOn Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Fulfils plan, proposal or order
   * - **Definition:** A plan, proposal or order that is fulfilled in whole or in part by this event.
   * - **Requirements:** Allows tracing of authorization for the event and tracking whether proposals/recommendations were acted upon.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/NutritionOrder',
   *       'http://hl7.org/fhir/StructureDefinition/CarePlan',
   *       'http://hl7.org/fhir/StructureDefinition/ServiceRequest',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private basedOn?: Reference[] | undefined;

  /**
   * NutritionIntake.partOf Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Part of referenced event
   * - **Definition:** A larger event of which this particular event is a component or step.
   * - **Requirements:** This should not be used when indicating which resource a NutritionIntake has been derived from.  If that is the use case, then NutritionIntake.derivedFrom should be used.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/NutritionIntake',
   *       'http://hl7.org/fhir/StructureDefinition/Procedure',
   *       'http://hl7.org/fhir/StructureDefinition/Observation',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private partOf?: Reference[] | undefined;

  /**
   * FHIR CodeSystem: EventStatus
   *
   * @see {@link EventStatusEnum }
   */
  private readonly eventStatusEnum: EventStatusEnum;

  /**
   * NutritionIntake.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** preparation | in-progress | not-done | on-hold | stopped | completed | entered-in-error | unknown
   * - **Definition:** A code representing the patient or other source\'s judgment about the state of the intake that this assertion is about.  Generally, this will be active or completed.
   * - **Comment:** NutritionIntake is a statement at a point in time.  The status is only representative at the point when it was asserted.  The value set for NutritionIntake.status contains codes that assert the status of the consumption of the food or fluid by the patient (for example, stopped or on hold) as well as codes that assert the status of the Nutrition Intake itself (for example, entered in error). This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** true
   * - **isModifierReason:** This element is labelled as a modifier because it is a status element that contains status entered-in-error which means that the resource should not be treated as valid
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link EventStatusEnum }
   */
  private status: EnumCodeType | null;

  /**
   * NutritionIntake.statusReason Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Reason for current status
   * - **Definition:** Captures the reason for the current state of the NutritionIntake.
   * - **Comment:** This is generally only used for "exception" statuses such as "not-taken", "on-hold", "cancelled" or "entered-in-error". The reason for performing the event at all is captured in reasonCode, not here.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private statusReason?: CodeableConcept[] | undefined;

  /**
   * NutritionIntake.code Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Code representing an overall type of nutrition intake
   * - **Definition:** Overall type of nutrition intake.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private code?: CodeableConcept | undefined;

  /**
   * NutritionIntake.subject Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who is/was consuming the food or fluid
   * - **Definition:** The person, animal or group who is/was consuming the food or fluid.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/Group',
   *     ]
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private subject: Reference | null;

  /**
   * NutritionIntake.encounter Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Encounter associated with NutritionIntake
   * - **Definition:** The encounter that establishes the context for this NutritionIntake.
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
   * NutritionIntake.occurrence[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('NutritionIntake.occurrence[x]', ['dateTime','Period',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The date/time or interval when the food or fluid is/was consumed
   * - **Definition:** The interval of time during which it is being asserted that the patient is/was consuming the food or fluid.
   * - **Comment:** This attribute reflects the period over which the patient consumed the food fluid and is expected to be populated on the majority of NutritionIntake. If the food or fluid is still being taken and is expected to continue indefinitely at the time the usage is recorded, the "end" date will be omitted.  If the end date is known, then it is included as the "end date".  The date/time attribute supports a variety of dates - year, year/month and exact date.  If something more than this is required, this should be conveyed as text.
   * - **FHIR Types:**
   *     'dateTime',
   *     'Period',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  @ChoiceDataTypesMeta('NutritionIntake.occurrence[x]',[
    'dateTime',
    'Period',
  ])
  private occurrence?: IDataType | undefined;

  /**
   * NutritionIntake.recorded Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When the intake was recorded
   * - **Definition:** The date when the Nutrition Intake was asserted by the information source.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private recorded?: DateTimeType | undefined;

  /**
   * NutritionIntake.reported[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('NutritionIntake.reported[x]', ['boolean','Reference',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Person or organization that provided the information about the consumption of this food or fluid
   * - **Definition:** The person or organization that provided the information about the consumption of this food or fluid. Note: Use derivedFrom when a NutritionIntake is derived from other resources.
   * - **FHIR Types:**
   *     'boolean',
   *     'Reference',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('NutritionIntake.reported[x]',[
    'boolean',
    'Reference',
  ])
  private reported?: IDataType | undefined;

  /**
   * NutritionIntake.consumedItem Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** What food or fluid product or item was consumed
   * - **Definition:** What food or fluid product or item was consumed.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 1..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private consumedItem: NutritionIntakeConsumedItemComponent[] | null;

  /**
   * NutritionIntake.ingredientLabel Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Total nutrient for the whole meal, product, serving
   * - **Definition:** Total nutrient amounts for the whole meal, product, serving, etc.
   * - **Comment:** Individual item nutrients are not currently included in the resource and will likely end up as a reference in nutritionProduct to represent the individual items.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private ingredientLabel?: NutritionIntakeIngredientLabelComponent[] | undefined;

  /**
   * NutritionIntake.performer Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who was performed in the intake
   * - **Definition:** Who performed the intake and how they were involved.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private performer?: NutritionIntakePerformerComponent[] | undefined;

  /**
   * NutritionIntake.location Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Where the intake occurred
   * - **Definition:** Where the intake occurred.
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
   * NutritionIntake.derivedFrom Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Additional supporting information
   * - **Definition:** Allows linking the NutritionIntake to the underlying NutritionOrder, or to other information, such as AllergyIntolerance, that supports or is used to derive the NutritionIntake.
   * - **Comment:** Likely references would be to AllergyIntolerance,  Observation or QuestionnaireAnswers.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Resource',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private derivedFrom?: Reference[] | undefined;

  /**
   * NutritionIntake.reason Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Reason for why the food or fluid is /was consumed
   * - **Definition:** A reason, Condition or observation for why the food or fluid is /was consumed.
   * - **FHIR Type:** `CodeableReference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Condition',
   *       'http://hl7.org/fhir/StructureDefinition/Observation',
   *       'http://hl7.org/fhir/StructureDefinition/DiagnosticReport',
   *       'http://hl7.org/fhir/StructureDefinition/DocumentReference',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private reason?: CodeableReference[] | undefined;

  /**
   * NutritionIntake.note Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Further information about the consumption
   * - **Definition:** Provides extra information about the Nutrition Intake that is not conveyed by the other attributes.
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
      const optErrMsg = `Invalid NutritionIntake.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid NutritionIntake.identifier; Provided element is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid NutritionIntake.instantiatesCanonical; Provided value array has an element that is not an instance of CanonicalType.`;
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
      const optErrMsg = `Invalid NutritionIntake.instantiatesCanonical; Provided element is not an instance of CanonicalType.`;
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
        const optErrMsg = `Invalid NutritionIntake.instantiatesCanonical array item (${String(instantiatesCanonicalValue)})`;
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
      const optErrMsg = `Invalid NutritionIntake.instantiatesCanonical array item (${String(value)})`;
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
      const optErrMsg = `Invalid NutritionIntake.instantiatesUri; Provided value array has an element that is not an instance of UriType.`;
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
      const optErrMsg = `Invalid NutritionIntake.instantiatesUri; Provided element is not an instance of UriType.`;
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
        const optErrMsg = `Invalid NutritionIntake.instantiatesUri array item (${String(instantiatesUriValue)})`;
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
      const optErrMsg = `Invalid NutritionIntake.instantiatesUri array item (${String(value)})`;
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
   * @returns the `basedOn` property value as a Reference array
   */
  public getBasedOn(): Reference[] {
    return this.basedOn ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `basedOn` property.
   *
   * @decorator `@ReferenceTargets('NutritionIntake.basedOn', ['NutritionOrder','CarePlan','ServiceRequest',])`
   *
   * @param value - the `basedOn` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('NutritionIntake.basedOn', [
    'NutritionOrder',
  
    'CarePlan',
  
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
   * @decorator `@ReferenceTargets('NutritionIntake.basedOn', ['NutritionOrder','CarePlan','ServiceRequest',])`
   *
   * @param value - the `basedOn` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('NutritionIntake.basedOn', [
    'NutritionOrder',
  
    'CarePlan',
  
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
   * @decorator `@ReferenceTargets('NutritionIntake.partOf', ['NutritionIntake','Procedure','Observation',])`
   *
   * @param value - the `partOf` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('NutritionIntake.partOf', [
    'NutritionIntake',
  
    'Procedure',
  
    'Observation',
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
   * @decorator `@ReferenceTargets('NutritionIntake.partOf', ['NutritionIntake','Procedure','Observation',])`
   *
   * @param value - the `partOf` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('NutritionIntake.partOf', [
    'NutritionIntake',
  
    'Procedure',
  
    'Observation',
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
   * @see CodeSystem Enumeration: {@link EventStatusEnum }
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
   * @see CodeSystem Enumeration: {@link EventStatusEnum }
   */
  public setStatusEnumType(enumType: EnumCodeType | undefined | null): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid NutritionIntake.status`;
      assertEnumCodeType<EventStatusEnum>(enumType, EventStatusEnum, errMsgPrefix);
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
   * @see CodeSystem Enumeration: {@link EventStatusEnum }
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
   * @see CodeSystem Enumeration: {@link EventStatusEnum }
   */
  public setStatusElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid NutritionIntake.status; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.status = new EnumCodeType(element, this.eventStatusEnum);
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
   * @see CodeSystem Enumeration: {@link EventStatusEnum }
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
   * @see CodeSystem Enumeration: {@link EventStatusEnum }
   */
  public setStatus(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid NutritionIntake.status (${String(value)})`;
      this.status = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.eventStatusEnum);
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
   * @returns the `statusReason` property value as a CodeableConcept array
   */
  public getStatusReason(): CodeableConcept[] {
    return this.statusReason ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `statusReason` property.
   *
   * @param value - the `statusReason` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setStatusReason(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid NutritionIntake.statusReason; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.statusReason = value;
    } else {
      this.statusReason = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `statusReason` array property.
   *
   * @param value - the `statusReason` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addStatusReason(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid NutritionIntake.statusReason; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initStatusReason();
      this.statusReason?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `statusReason` property exists and has a value; `false` otherwise
   */
  public hasStatusReason(): boolean {
    return isDefinedList<CodeableConcept>(this.statusReason) && this.statusReason.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `statusReason` property
   */
  private initStatusReason(): void {
    if(!this.hasStatusReason()) {
      this.statusReason = [] as CodeableConcept[];
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
      const optErrMsg = `Invalid NutritionIntake.code; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `subject` property value as a Reference object if defined; else an empty Reference object
   */
  public getSubject(): Reference {
    return this.subject ?? new Reference();
  }

  /**
   * Assigns the provided Subject object value to the `subject` property.
   *
   * @decorator `@ReferenceTargets('NutritionIntake.subject', ['Patient','Group',])`
   *
   * @param value - the `subject` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('NutritionIntake.subject', [
    'Patient',
  
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
   * @decorator `@ReferenceTargets('NutritionIntake.encounter', ['Encounter',])`
   *
   * @param value - the `encounter` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('NutritionIntake.encounter', [
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
   * @returns the `occurrence` property value as a DataType object if defined; else undefined
   */
  public getOccurrence(): IDataType | undefined {
    return this.occurrence;
  }

  /**
   * Assigns the provided DataType object value to the `occurrence` property.
   *
   * @decorator `@ChoiceDataTypes('NutritionIntake.occurrence[x]')`
   *
   * @param value - the `occurrence` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('NutritionIntake.occurrence[x]')
  public setOccurrence(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.occurrence = value;
    } else {
      this.occurrence = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `occurrence` property exists and has a value; `false` otherwise
   */
  public hasOccurrence(): boolean {
    return isDefined<IDataType>(this.occurrence) && !this.occurrence.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `occurrence` property value as a DateTimeType object if defined; else undefined
   */
  public getOccurrenceDateTimeType(): DateTimeType | undefined {
    if (!isDefined<IDataType | undefined>(this.occurrence)) {
      return undefined;
    }
    if (!(this.occurrence instanceof DateTimeType)) {
      throw new InvalidTypeError(
        `DataType mismatch for NutritionIntake.occurrence[x]: Expected DateTimeType but encountered ${this.occurrence.fhirType()}`,
      );
    }
    return this.occurrence;
  }

  /**
   * @returns `true` if the `occurrence` property exists as a DateTimeType and has a value; `false` otherwise
   */
  public hasOccurrenceDateTimeType(): boolean {
    return this.hasOccurrence() && this.occurrence instanceof DateTimeType;
  }

  /**
   * @returns the `occurrence` property value as a Period object if defined; else undefined
   */
  public getOccurrencePeriod(): Period | undefined {
    if (!isDefined<IDataType | undefined>(this.occurrence)) {
      return undefined;
    }
    if (!(this.occurrence instanceof Period)) {
      throw new InvalidTypeError(
        `DataType mismatch for NutritionIntake.occurrence[x]: Expected Period but encountered ${this.occurrence.fhirType()}`,
      );
    }
    return this.occurrence;
  }

  /**
   * @returns `true` if the `occurrence` property exists as a Period and has a value; `false` otherwise
   */
  public hasOccurrencePeriod(): boolean {
    return this.hasOccurrence() && this.occurrence instanceof Period;
  }

  // End of choice datatype-specific "get"/"has" methods

  /**
   * @returns the `recorded` property value as a DateTimeType object if defined; else an empty DateTimeType object
   */
  public getRecordedElement(): DateTimeType {
    return this.recorded ?? new DateTimeType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `recorded` property.
   *
   * @param element - the `recorded` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setRecordedElement(element: DateTimeType | undefined): this {
    if (isDefined<DateTimeType>(element)) {
      const optErrMsg = `Invalid NutritionIntake.recorded; Provided element is not an instance of DateTimeType.`;
      assertFhirType<DateTimeType>(element, DateTimeType, optErrMsg);
      this.recorded = element;
    } else {
      this.recorded = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `recorded` property exists and has a value; `false` otherwise
   */
  public hasRecordedElement(): boolean {
    return isDefined<DateTimeType>(this.recorded) && !this.recorded.isEmpty();
  }

  /**
   * @returns the `recorded` property value as a fhirDateTime if defined; else undefined
   */
  public getRecorded(): fhirDateTime | undefined {
    return this.recorded?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `recorded` property.
   *
   * @param value - the `recorded` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setRecorded(value: fhirDateTime | undefined): this {
    if (isDefined<fhirDateTime>(value)) {
      const optErrMsg = `Invalid NutritionIntake.recorded (${String(value)})`;
      this.recorded = new DateTimeType(parseFhirPrimitiveData(value, fhirDateTimeSchema, optErrMsg));
    } else {
      this.recorded = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `recorded` property exists and has a value; `false` otherwise
   */
  public hasRecorded(): boolean {
    return this.hasRecordedElement();
  }

  /**
   * @returns the `reported` property value as a DataType object if defined; else undefined
   */
  public getReported(): IDataType | undefined {
    return this.reported;
  }

  /**
   * Assigns the provided DataType object value to the `reported` property.
   *
   * @decorator `@ChoiceDataTypes('NutritionIntake.reported[x]')`
   *
   * @param value - the `reported` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('NutritionIntake.reported[x]')
  public setReported(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.reported = value;
    } else {
      this.reported = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `reported` property exists and has a value; `false` otherwise
   */
  public hasReported(): boolean {
    return isDefined<IDataType>(this.reported) && !this.reported.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `reported` property value as a BooleanType object if defined; else undefined
   */
  public getReportedBooleanType(): BooleanType | undefined {
    if (!isDefined<IDataType | undefined>(this.reported)) {
      return undefined;
    }
    if (!(this.reported instanceof BooleanType)) {
      throw new InvalidTypeError(
        `DataType mismatch for NutritionIntake.reported[x]: Expected BooleanType but encountered ${this.reported.fhirType()}`,
      );
    }
    return this.reported;
  }

  /**
   * @returns `true` if the `reported` property exists as a BooleanType and has a value; `false` otherwise
   */
  public hasReportedBooleanType(): boolean {
    return this.hasReported() && this.reported instanceof BooleanType;
  }

  /**
   * @returns the `reported` property value as a Reference object if defined; else undefined
   */
  public getReportedReference(): Reference | undefined {
    if (!isDefined<IDataType | undefined>(this.reported)) {
      return undefined;
    }
    if (!(this.reported instanceof Reference)) {
      throw new InvalidTypeError(
        `DataType mismatch for NutritionIntake.reported[x]: Expected Reference but encountered ${this.reported.fhirType()}`,
      );
    }
    return this.reported;
  }

  /**
   * @returns `true` if the `reported` property exists as a Reference and has a value; `false` otherwise
   */
  public hasReportedReference(): boolean {
    return this.hasReported() && this.reported instanceof Reference;
  }

  // End of choice datatype-specific "get"/"has" methods

  /**
   * @returns the `consumedItem` property value as a NutritionIntakeConsumedItemComponent array
   */
  public getConsumedItem(): NutritionIntakeConsumedItemComponent[] {
    return this.consumedItem ?? ([] as NutritionIntakeConsumedItemComponent[]);
  }

  /**
   * Assigns the provided NutritionIntakeConsumedItemComponent array value to the `consumedItem` property.
   *
   * @param value - the `consumedItem` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setConsumedItem(value: NutritionIntakeConsumedItemComponent[] | undefined | null): this {
    if (isDefinedList<NutritionIntakeConsumedItemComponent>(value)) {
      const optErrMsg = `Invalid NutritionIntake.consumedItem; Provided value array has an element that is not an instance of NutritionIntakeConsumedItemComponent.`;
      assertFhirTypeList<NutritionIntakeConsumedItemComponent>(value, NutritionIntakeConsumedItemComponent, optErrMsg);
      this.consumedItem = value;
    } else {
      this.consumedItem = null;
    }
    return this;
  }

  /**
   * Add the provided NutritionIntakeConsumedItemComponent value to the `consumedItem` array property.
   *
   * @param value - the `consumedItem` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addConsumedItem(value: NutritionIntakeConsumedItemComponent | undefined): this {
    if (isDefined<NutritionIntakeConsumedItemComponent>(value)) {
      const optErrMsg = `Invalid NutritionIntake.consumedItem; Provided element is not an instance of NutritionIntakeConsumedItemComponent.`;
      assertFhirType<NutritionIntakeConsumedItemComponent>(value, NutritionIntakeConsumedItemComponent, optErrMsg);
      this.initConsumedItem();
      this.consumedItem?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `consumedItem` property exists and has a value; `false` otherwise
   */
  public hasConsumedItem(): boolean {
    return isDefinedList<NutritionIntakeConsumedItemComponent>(this.consumedItem) && this.consumedItem.some((item: NutritionIntakeConsumedItemComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `consumedItem` property
   */
  private initConsumedItem(): void {
    if(!this.hasConsumedItem()) {
      this.consumedItem = [] as NutritionIntakeConsumedItemComponent[];
    }
  }

  /**
   * @returns the `ingredientLabel` property value as a NutritionIntakeIngredientLabelComponent array
   */
  public getIngredientLabel(): NutritionIntakeIngredientLabelComponent[] {
    return this.ingredientLabel ?? ([] as NutritionIntakeIngredientLabelComponent[]);
  }

  /**
   * Assigns the provided NutritionIntakeIngredientLabelComponent array value to the `ingredientLabel` property.
   *
   * @param value - the `ingredientLabel` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setIngredientLabel(value: NutritionIntakeIngredientLabelComponent[] | undefined): this {
    if (isDefinedList<NutritionIntakeIngredientLabelComponent>(value)) {
      const optErrMsg = `Invalid NutritionIntake.ingredientLabel; Provided value array has an element that is not an instance of NutritionIntakeIngredientLabelComponent.`;
      assertFhirTypeList<NutritionIntakeIngredientLabelComponent>(value, NutritionIntakeIngredientLabelComponent, optErrMsg);
      this.ingredientLabel = value;
    } else {
      this.ingredientLabel = undefined;
    }
    return this;
  }

  /**
   * Add the provided NutritionIntakeIngredientLabelComponent value to the `ingredientLabel` array property.
   *
   * @param value - the `ingredientLabel` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addIngredientLabel(value: NutritionIntakeIngredientLabelComponent | undefined): this {
    if (isDefined<NutritionIntakeIngredientLabelComponent>(value)) {
      const optErrMsg = `Invalid NutritionIntake.ingredientLabel; Provided element is not an instance of NutritionIntakeIngredientLabelComponent.`;
      assertFhirType<NutritionIntakeIngredientLabelComponent>(value, NutritionIntakeIngredientLabelComponent, optErrMsg);
      this.initIngredientLabel();
      this.ingredientLabel?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `ingredientLabel` property exists and has a value; `false` otherwise
   */
  public hasIngredientLabel(): boolean {
    return isDefinedList<NutritionIntakeIngredientLabelComponent>(this.ingredientLabel) && this.ingredientLabel.some((item: NutritionIntakeIngredientLabelComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `ingredientLabel` property
   */
  private initIngredientLabel(): void {
    if(!this.hasIngredientLabel()) {
      this.ingredientLabel = [] as NutritionIntakeIngredientLabelComponent[];
    }
  }

  /**
   * @returns the `performer` property value as a NutritionIntakePerformerComponent array
   */
  public getPerformer(): NutritionIntakePerformerComponent[] {
    return this.performer ?? ([] as NutritionIntakePerformerComponent[]);
  }

  /**
   * Assigns the provided NutritionIntakePerformerComponent array value to the `performer` property.
   *
   * @param value - the `performer` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPerformer(value: NutritionIntakePerformerComponent[] | undefined): this {
    if (isDefinedList<NutritionIntakePerformerComponent>(value)) {
      const optErrMsg = `Invalid NutritionIntake.performer; Provided value array has an element that is not an instance of NutritionIntakePerformerComponent.`;
      assertFhirTypeList<NutritionIntakePerformerComponent>(value, NutritionIntakePerformerComponent, optErrMsg);
      this.performer = value;
    } else {
      this.performer = undefined;
    }
    return this;
  }

  /**
   * Add the provided NutritionIntakePerformerComponent value to the `performer` array property.
   *
   * @param value - the `performer` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addPerformer(value: NutritionIntakePerformerComponent | undefined): this {
    if (isDefined<NutritionIntakePerformerComponent>(value)) {
      const optErrMsg = `Invalid NutritionIntake.performer; Provided element is not an instance of NutritionIntakePerformerComponent.`;
      assertFhirType<NutritionIntakePerformerComponent>(value, NutritionIntakePerformerComponent, optErrMsg);
      this.initPerformer();
      this.performer?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `performer` property exists and has a value; `false` otherwise
   */
  public hasPerformer(): boolean {
    return isDefinedList<NutritionIntakePerformerComponent>(this.performer) && this.performer.some((item: NutritionIntakePerformerComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `performer` property
   */
  private initPerformer(): void {
    if(!this.hasPerformer()) {
      this.performer = [] as NutritionIntakePerformerComponent[];
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
   * @decorator `@ReferenceTargets('NutritionIntake.location', ['Location',])`
   *
   * @param value - the `location` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('NutritionIntake.location', [
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
   * @returns the `derivedFrom` property value as a Reference array
   */
  public getDerivedFrom(): Reference[] {
    return this.derivedFrom ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `derivedFrom` property.
   *
   * @decorator `@ReferenceTargets('NutritionIntake.derivedFrom', ['Resource',])`
   *
   * @param value - the `derivedFrom` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('NutritionIntake.derivedFrom', [
    'Resource',
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
   * @decorator `@ReferenceTargets('NutritionIntake.derivedFrom', ['Resource',])`
   *
   * @param value - the `derivedFrom` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('NutritionIntake.derivedFrom', [
    'Resource',
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
      const optErrMsg = `Invalid NutritionIntake.reason; Provided value array has an element that is not an instance of CodeableReference.`;
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
      const optErrMsg = `Invalid NutritionIntake.reason; Provided element is not an instance of CodeableReference.`;
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
      const optErrMsg = `Invalid NutritionIntake.note; Provided value array has an element that is not an instance of Annotation.`;
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
      const optErrMsg = `Invalid NutritionIntake.note; Provided element is not an instance of Annotation.`;
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
    return 'NutritionIntake';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identifier,
      this.instantiatesCanonical,
      this.instantiatesUri,
      this.basedOn,
      this.partOf,
      this.status,
      this.statusReason,
      this.code,
      this.subject,
      this.encounter,
      this.occurrence,
      this.recorded,
      this.reported,
      this.consumedItem,
      this.ingredientLabel,
      this.performer,
      this.location,
      this.derivedFrom,
      this.reason,
      this.note,
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
  public override copy(): NutritionIntake {
    const dest = new NutritionIntake();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: NutritionIntake): void {
    super.copyValues(dest);
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    const instantiatesCanonicalList = copyListValues<CanonicalType>(this.instantiatesCanonical);
    dest.instantiatesCanonical = instantiatesCanonicalList.length === 0 ? undefined : instantiatesCanonicalList;
    const instantiatesUriList = copyListValues<UriType>(this.instantiatesUri);
    dest.instantiatesUri = instantiatesUriList.length === 0 ? undefined : instantiatesUriList;
    const basedOnList = copyListValues<Reference>(this.basedOn);
    dest.basedOn = basedOnList.length === 0 ? undefined : basedOnList;
    const partOfList = copyListValues<Reference>(this.partOf);
    dest.partOf = partOfList.length === 0 ? undefined : partOfList;
    dest.status = this.status ? this.status.copy() : null;
    const statusReasonList = copyListValues<CodeableConcept>(this.statusReason);
    dest.statusReason = statusReasonList.length === 0 ? undefined : statusReasonList;
    dest.code = this.code?.copy();
    dest.subject = this.subject ? this.subject.copy() : null;
    dest.encounter = this.encounter?.copy();
    dest.occurrence = this.occurrence?.copy() as IDataType;
    dest.recorded = this.recorded?.copy();
    dest.reported = this.reported?.copy() as IDataType;
    const consumedItemList = copyListValues<NutritionIntakeConsumedItemComponent>(this.consumedItem);
    dest.consumedItem = consumedItemList.length === 0 ? null : consumedItemList;
    const ingredientLabelList = copyListValues<NutritionIntakeIngredientLabelComponent>(this.ingredientLabel);
    dest.ingredientLabel = ingredientLabelList.length === 0 ? undefined : ingredientLabelList;
    const performerList = copyListValues<NutritionIntakePerformerComponent>(this.performer);
    dest.performer = performerList.length === 0 ? undefined : performerList;
    dest.location = this.location?.copy();
    const derivedFromList = copyListValues<Reference>(this.derivedFrom);
    dest.derivedFrom = derivedFromList.length === 0 ? undefined : derivedFromList;
    const reasonList = copyListValues<CodeableReference>(this.reason);
    dest.reason = reasonList.length === 0 ? undefined : reasonList;
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

    if (this.hasInstantiatesCanonical()) {
      setFhirPrimitiveListJson(this.getInstantiatesCanonicalElement(), 'instantiatesCanonical', jsonObj);
    }

    if (this.hasInstantiatesUri()) {
      setFhirPrimitiveListJson(this.getInstantiatesUriElement(), 'instantiatesUri', jsonObj);
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

    if (this.hasStatusReason()) {
      setFhirComplexListJson(this.getStatusReason(), 'statusReason', jsonObj);
    }

    if (this.hasCode()) {
      setFhirComplexJson(this.getCode(), 'code', jsonObj);
    }

    if (this.hasSubject()) {
      setFhirComplexJson(this.getSubject(), 'subject', jsonObj);
    } else {
      jsonObj['subject'] = null;
    }

    if (this.hasEncounter()) {
      setFhirComplexJson(this.getEncounter(), 'encounter', jsonObj);
    }

    if (this.hasOccurrence()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getOccurrence()!, 'occurrence', jsonObj);
    }

    if (this.hasRecordedElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getRecordedElement(), 'recorded', jsonObj);
    }

    if (this.hasReported()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getReported()!, 'reported', jsonObj);
    }

    if (this.hasConsumedItem()) {
      setFhirBackboneElementListJson(this.getConsumedItem(), 'consumedItem', jsonObj);
    } else {
      jsonObj['consumedItem'] = null;
    }

    if (this.hasIngredientLabel()) {
      setFhirBackboneElementListJson(this.getIngredientLabel(), 'ingredientLabel', jsonObj);
    }

    if (this.hasPerformer()) {
      setFhirBackboneElementListJson(this.getPerformer(), 'performer', jsonObj);
    }

    if (this.hasLocation()) {
      setFhirComplexJson(this.getLocation(), 'location', jsonObj);
    }

    if (this.hasDerivedFrom()) {
      setFhirComplexListJson(this.getDerivedFrom(), 'derivedFrom', jsonObj);
    }

    if (this.hasReason()) {
      setFhirComplexListJson(this.getReason(), 'reason', jsonObj);
    }

    if (this.hasNote()) {
      setFhirComplexListJson(this.getNote(), 'note', jsonObj);
    }

    return jsonObj;
  }
}

/**
 * NutritionIntakeConsumedItemComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** What food or fluid product or item was consumed
 * - **Definition:** What food or fluid product or item was consumed.
 *
 * @category Data Models: Resource
 * @see [FHIR NutritionIntake](http://hl7.org/fhir/StructureDefinition/NutritionIntake)
 */
export class NutritionIntakeConsumedItemComponent extends BackboneElement implements IBackboneElement {
  constructor(type_: CodeableConcept | null = null, nutritionProduct: CodeableReference | null = null) {
    super();

    this.type_ = null;
    if (isDefined<CodeableConcept>(type_)) {
      this.setType(type_);
    }

    this.nutritionProduct = null;
    if (isDefined<CodeableReference>(nutritionProduct)) {
      this.setNutritionProduct(nutritionProduct);
    }
  }

  /**
   * Parse the provided `NutritionIntakeConsumedItemComponent` JSON to instantiate the NutritionIntakeConsumedItemComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `NutritionIntakeConsumedItemComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to NutritionIntakeConsumedItemComponent
   * @returns NutritionIntakeConsumedItemComponent data model or undefined for `NutritionIntakeConsumedItemComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): NutritionIntakeConsumedItemComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'NutritionIntakeConsumedItemComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new NutritionIntakeConsumedItemComponent();

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

    fieldName = 'nutritionProduct';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableReference | undefined = CodeableReference.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setNutritionProduct(null);
      } else {
        instance.setNutritionProduct(datatype);
      }
    } else {
      instance.setNutritionProduct(null);
    }

    fieldName = 'schedule';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Timing | undefined = Timing.parse(classJsonObj[fieldName]!, sourceField);
      instance.setSchedule(datatype);
    }

    fieldName = 'amount';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Quantity | undefined = Quantity.parse(classJsonObj[fieldName]!, sourceField);
      instance.setAmount(datatype);
    }

    fieldName = 'rate';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Quantity | undefined = Quantity.parse(classJsonObj[fieldName]!, sourceField);
      instance.setRate(datatype);
    }

    fieldName = 'notConsumed';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setNotConsumedElement(datatype);
    }

    fieldName = 'notConsumedReason';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setNotConsumedReason(datatype);
    }

    return instance;
  }

  /**
   * NutritionIntake.consumedItem.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The type of food or fluid product
   * - **Definition:** Indicates what a category of item that was consumed: e.g., food, fluid, enteral, etc.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private type_: CodeableConcept | null;

  /**
   * NutritionIntake.consumedItem.nutritionProduct Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Code that identifies the food or fluid product that was consumed
   * - **Definition:** Identifies the food or fluid product that was consumed. This is potentially a link to a resource representing the details of the food product (TBD) or a simple attribute carrying a code that identifies the food from a known list of foods.
   * - **Comment:** If only a code is specified, then it needs to be a code for a specific product. If more information is required, then the use of a new nutritionProduct resource is recommended.
   * - **FHIR Type:** `CodeableReference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/NutritionProduct',
   *     ]
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private nutritionProduct: CodeableReference | null;

  /**
   * NutritionIntake.consumedItem.schedule Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Scheduled frequency of consumption
   * - **Definition:** Scheduled frequency of consumption.
   * - **FHIR Type:** `Timing`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private schedule?: Timing | undefined;

  /**
   * NutritionIntake.consumedItem.amount Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Quantity of the specified food
   * - **Definition:** Quantity of the specified food.
   * - **FHIR Type:** `Quantity`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private amount?: Quantity | undefined;

  /**
   * NutritionIntake.consumedItem.rate Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Rate at which enteral feeding was administered
   * - **Definition:** Rate at which enteral feeding was administered.
   * - **FHIR Type:** `Quantity`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private rate?: Quantity | undefined;

  /**
   * NutritionIntake.consumedItem.notConsumed Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Flag to indicate if the food or fluid item was refused or otherwise not consumed
   * - **Definition:** Indicator when a patient is in a setting where it is helpful to know if food was not consumed, such as it was refused, held (as in tube feedings), or otherwise not provided. If a consumption is being recorded from an app, such as MyFitnessPal, this indicator will likely not be used.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private notConsumed?: BooleanType | undefined;

  /**
   * NutritionIntake.consumedItem.notConsumedReason Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Reason food or fluid was not consumed
   * - **Definition:** Document the reason the food or fluid was not consumed, such as refused, held, etc.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private notConsumedReason?: CodeableConcept | undefined;

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
      const optErrMsg = `Invalid NutritionIntake.consumedItem.type; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `nutritionProduct` property value as a CodeableReference object if defined; else an empty CodeableReference object
   */
  public getNutritionProduct(): CodeableReference {
    return this.nutritionProduct ?? new CodeableReference();
  }

  /**
   * Assigns the provided CodeableReference object value to the `nutritionProduct` property.
   *
   * @param value - the `nutritionProduct` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setNutritionProduct(value: CodeableReference | undefined | null): this {
    if (isDefined<CodeableReference>(value)) {
      const optErrMsg = `Invalid NutritionIntake.consumedItem.nutritionProduct; Provided element is not an instance of CodeableReference.`;
      assertFhirType<CodeableReference>(value, CodeableReference, optErrMsg);
      this.nutritionProduct = value;
    } else {
      this.nutritionProduct = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `nutritionProduct` property exists and has a value; `false` otherwise
   */
  public hasNutritionProduct(): boolean {
    return isDefined<CodeableReference>(this.nutritionProduct) && !this.nutritionProduct.isEmpty();
  }

  /**
   * @returns the `schedule` property value as a Timing object if defined; else an empty Timing object
   */
  public getSchedule(): Timing {
    return this.schedule ?? new Timing();
  }

  /**
   * Assigns the provided Schedule object value to the `schedule` property.
   *
   * @param value - the `schedule` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSchedule(value: Timing | undefined): this {
    if (isDefined<Timing>(value)) {
      const optErrMsg = `Invalid NutritionIntake.consumedItem.schedule; Provided element is not an instance of Timing.`;
      assertFhirType<Timing>(value, Timing, optErrMsg);
      this.schedule = value;
    } else {
      this.schedule = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `schedule` property exists and has a value; `false` otherwise
   */
  public hasSchedule(): boolean {
    return isDefined<Timing>(this.schedule) && !this.schedule.isEmpty();
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
      const optErrMsg = `Invalid NutritionIntake.consumedItem.amount; Provided element is not an instance of Quantity.`;
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
   * @returns the `rate` property value as a Quantity object if defined; else an empty Quantity object
   */
  public getRate(): Quantity {
    return this.rate ?? new Quantity();
  }

  /**
   * Assigns the provided Rate object value to the `rate` property.
   *
   * @param value - the `rate` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setRate(value: Quantity | undefined): this {
    if (isDefined<Quantity>(value)) {
      const optErrMsg = `Invalid NutritionIntake.consumedItem.rate; Provided element is not an instance of Quantity.`;
      assertFhirType<Quantity>(value, Quantity, optErrMsg);
      this.rate = value;
    } else {
      this.rate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `rate` property exists and has a value; `false` otherwise
   */
  public hasRate(): boolean {
    return isDefined<Quantity>(this.rate) && !this.rate.isEmpty();
  }

  /**
   * @returns the `notConsumed` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getNotConsumedElement(): BooleanType {
    return this.notConsumed ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `notConsumed` property.
   *
   * @param element - the `notConsumed` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setNotConsumedElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid NutritionIntake.consumedItem.notConsumed; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.notConsumed = element;
    } else {
      this.notConsumed = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `notConsumed` property exists and has a value; `false` otherwise
   */
  public hasNotConsumedElement(): boolean {
    return isDefined<BooleanType>(this.notConsumed) && !this.notConsumed.isEmpty();
  }

  /**
   * @returns the `notConsumed` property value as a fhirBoolean if defined; else undefined
   */
  public getNotConsumed(): fhirBoolean | undefined {
    return this.notConsumed?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `notConsumed` property.
   *
   * @param value - the `notConsumed` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setNotConsumed(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid NutritionIntake.consumedItem.notConsumed (${String(value)})`;
      this.notConsumed = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.notConsumed = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `notConsumed` property exists and has a value; `false` otherwise
   */
  public hasNotConsumed(): boolean {
    return this.hasNotConsumedElement();
  }

  /**
   * @returns the `notConsumedReason` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getNotConsumedReason(): CodeableConcept {
    return this.notConsumedReason ?? new CodeableConcept();
  }

  /**
   * Assigns the provided NotConsumedReason object value to the `notConsumedReason` property.
   *
   * @param value - the `notConsumedReason` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setNotConsumedReason(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid NutritionIntake.consumedItem.notConsumedReason; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.notConsumedReason = value;
    } else {
      this.notConsumedReason = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `notConsumedReason` property exists and has a value; `false` otherwise
   */
  public hasNotConsumedReason(): boolean {
    return isDefined<CodeableConcept>(this.notConsumedReason) && !this.notConsumedReason.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'NutritionIntake.consumedItem';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.type_,
      this.nutritionProduct,
      this.schedule,
      this.amount,
      this.rate,
      this.notConsumed,
      this.notConsumedReason,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.type_, this.nutritionProduct, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): NutritionIntakeConsumedItemComponent {
    const dest = new NutritionIntakeConsumedItemComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: NutritionIntakeConsumedItemComponent): void {
    super.copyValues(dest);
    dest.type_ = this.type_ ? this.type_.copy() : null;
    dest.nutritionProduct = this.nutritionProduct ? this.nutritionProduct.copy() : null;
    dest.schedule = this.schedule?.copy();
    dest.amount = this.amount?.copy();
    dest.rate = this.rate?.copy();
    dest.notConsumed = this.notConsumed?.copy();
    dest.notConsumedReason = this.notConsumedReason?.copy();
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
    } else {
      jsonObj['type'] = null;
    }

    if (this.hasNutritionProduct()) {
      setFhirComplexJson(this.getNutritionProduct(), 'nutritionProduct', jsonObj);
    } else {
      jsonObj['nutritionProduct'] = null;
    }

    if (this.hasSchedule()) {
      setFhirComplexJson(this.getSchedule(), 'schedule', jsonObj);
    }

    if (this.hasAmount()) {
      setFhirComplexJson(this.getAmount(), 'amount', jsonObj);
    }

    if (this.hasRate()) {
      setFhirComplexJson(this.getRate(), 'rate', jsonObj);
    }

    if (this.hasNotConsumedElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getNotConsumedElement(), 'notConsumed', jsonObj);
    }

    if (this.hasNotConsumedReason()) {
      setFhirComplexJson(this.getNotConsumedReason(), 'notConsumedReason', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * NutritionIntakeIngredientLabelComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Total nutrient for the whole meal, product, serving
 * - **Definition:** Total nutrient amounts for the whole meal, product, serving, etc.
 * - **Comment:** Individual item nutrients are not currently included in the resource and will likely end up as a reference in nutritionProduct to represent the individual items.
 *
 * @category Data Models: Resource
 * @see [FHIR NutritionIntake](http://hl7.org/fhir/StructureDefinition/NutritionIntake)
 */
export class NutritionIntakeIngredientLabelComponent extends BackboneElement implements IBackboneElement {
  constructor(nutrient: CodeableReference | null = null, amount: Quantity | null = null) {
    super();

    this.nutrient = null;
    if (isDefined<CodeableReference>(nutrient)) {
      this.setNutrient(nutrient);
    }

    this.amount = null;
    if (isDefined<Quantity>(amount)) {
      this.setAmount(amount);
    }
  }

  /**
   * Parse the provided `NutritionIntakeIngredientLabelComponent` JSON to instantiate the NutritionIntakeIngredientLabelComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `NutritionIntakeIngredientLabelComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to NutritionIntakeIngredientLabelComponent
   * @returns NutritionIntakeIngredientLabelComponent data model or undefined for `NutritionIntakeIngredientLabelComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): NutritionIntakeIngredientLabelComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'NutritionIntakeIngredientLabelComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new NutritionIntakeIngredientLabelComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    fieldName = 'nutrient';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableReference | undefined = CodeableReference.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setNutrient(null);
      } else {
        instance.setNutrient(datatype);
      }
    } else {
      instance.setNutrient(null);
    }

    fieldName = 'amount';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Quantity | undefined = Quantity.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setAmount(null);
      } else {
        instance.setAmount(datatype);
      }
    } else {
      instance.setAmount(null);
    }

    return instance;
  }

  /**
   * NutritionIntake.ingredientLabel.nutrient Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Total nutrient consumed
   * - **Definition:** Total nutrient consumed. This could be a macronutrient (protein, fat, carbohydrate), or a vitamin and mineral.
   * - **FHIR Type:** `CodeableReference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Substance',
   *     ]
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private nutrient: CodeableReference | null;

  /**
   * NutritionIntake.ingredientLabel.amount Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Total amount of nutrient consumed
   * - **Definition:** Total amount of nutrient consumed.
   * - **FHIR Type:** `Quantity`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private amount: Quantity | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `nutrient` property value as a CodeableReference object if defined; else an empty CodeableReference object
   */
  public getNutrient(): CodeableReference {
    return this.nutrient ?? new CodeableReference();
  }

  /**
   * Assigns the provided CodeableReference object value to the `nutrient` property.
   *
   * @param value - the `nutrient` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setNutrient(value: CodeableReference | undefined | null): this {
    if (isDefined<CodeableReference>(value)) {
      const optErrMsg = `Invalid NutritionIntake.ingredientLabel.nutrient; Provided element is not an instance of CodeableReference.`;
      assertFhirType<CodeableReference>(value, CodeableReference, optErrMsg);
      this.nutrient = value;
    } else {
      this.nutrient = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `nutrient` property exists and has a value; `false` otherwise
   */
  public hasNutrient(): boolean {
    return isDefined<CodeableReference>(this.nutrient) && !this.nutrient.isEmpty();
  }

  /**
   * @returns the `amount` property value as a Quantity object if defined; else an empty Quantity object
   */
  public getAmount(): Quantity {
    return this.amount ?? new Quantity();
  }

  /**
   * Assigns the provided Quantity object value to the `amount` property.
   *
   * @param value - the `amount` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAmount(value: Quantity | undefined | null): this {
    if (isDefined<Quantity>(value)) {
      const optErrMsg = `Invalid NutritionIntake.ingredientLabel.amount; Provided element is not an instance of Quantity.`;
      assertFhirType<Quantity>(value, Quantity, optErrMsg);
      this.amount = value;
    } else {
      this.amount = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `amount` property exists and has a value; `false` otherwise
   */
  public hasAmount(): boolean {
    return isDefined<Quantity>(this.amount) && !this.amount.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'NutritionIntake.ingredientLabel';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.nutrient,
      this.amount,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.nutrient, this.amount, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): NutritionIntakeIngredientLabelComponent {
    const dest = new NutritionIntakeIngredientLabelComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: NutritionIntakeIngredientLabelComponent): void {
    super.copyValues(dest);
    dest.nutrient = this.nutrient ? this.nutrient.copy() : null;
    dest.amount = this.amount ? this.amount.copy() : null;
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

    if (this.hasNutrient()) {
      setFhirComplexJson(this.getNutrient(), 'nutrient', jsonObj);
    } else {
      jsonObj['nutrient'] = null;
    }

    if (this.hasAmount()) {
      setFhirComplexJson(this.getAmount(), 'amount', jsonObj);
    } else {
      jsonObj['amount'] = null;
    }

    return jsonObj;
  }
}
/**
 * NutritionIntakePerformerComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Who was performed in the intake
 * - **Definition:** Who performed the intake and how they were involved.
 *
 * @category Data Models: Resource
 * @see [FHIR NutritionIntake](http://hl7.org/fhir/StructureDefinition/NutritionIntake)
 */
export class NutritionIntakePerformerComponent extends BackboneElement implements IBackboneElement {
  constructor(actor: Reference | null = null) {
    super();

    this.actor = null;
    if (isDefined<Reference>(actor)) {
      this.setActor(actor);
    }
  }

  /**
   * Parse the provided `NutritionIntakePerformerComponent` JSON to instantiate the NutritionIntakePerformerComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `NutritionIntakePerformerComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to NutritionIntakePerformerComponent
   * @returns NutritionIntakePerformerComponent data model or undefined for `NutritionIntakePerformerComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): NutritionIntakePerformerComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'NutritionIntakePerformerComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new NutritionIntakePerformerComponent();

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
   * NutritionIntake.performer.function Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Type of performer
   * - **Definition:** Type of performer.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private function_?: CodeableConcept | undefined;

  /**
   * NutritionIntake.performer.actor Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who performed the intake
   * - **Definition:** Who performed the intake.
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
   * - **isSummary:** false
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
      const optErrMsg = `Invalid NutritionIntake.performer.function; Provided element is not an instance of CodeableConcept.`;
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
   * @decorator `@ReferenceTargets('NutritionIntake.performer.actor', ['Practitioner','PractitionerRole','Organization','CareTeam','Patient','Device','RelatedPerson',])`
   *
   * @param value - the `actor` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('NutritionIntake.performer.actor', [
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
    return 'NutritionIntake.performer';
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
  public override copy(): NutritionIntakePerformerComponent {
    const dest = new NutritionIntakePerformerComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: NutritionIntakePerformerComponent): void {
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
