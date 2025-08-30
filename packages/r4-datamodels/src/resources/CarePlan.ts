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
 * CarePlan Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/CarePlan
 * StructureDefinition.name: CarePlan
 * StructureDefinition.description: Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions.
 * StructureDefinition.fhirVersion: 4.0.1
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
  setFhirBackboneElementJson,
  setFhirBackboneElementListJson,
  setFhirComplexJson,
  setFhirComplexListJson,
  setFhirPrimitiveJson,
  setFhirPrimitiveListJson,
  setPolymorphicValueJson,
} from '@paq-ts-fhir/fhir-core';
import { Annotation, CodeableConcept, Identifier, PARSABLE_DATATYPE_MAP, Period, Quantity, Reference, Timing } from '../complex-types/complex-datatypes';
import { CarePlanActivityStatusEnum } from '../code-systems/CarePlanActivityStatusEnum';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';
import { RequestIntentEnum } from '../code-systems/RequestIntentEnum';
import { RequestStatusEnum } from '../code-systems/RequestStatusEnum';
import { ResourceTypesEnum } from '../code-systems/ResourceTypesEnum';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Symbol.metadata polyfill secret sauce for decorator metadata
(Symbol.metadata as any) ??= Symbol('Symbol.metadata');

/**
 * CarePlan Class
 *
 * @remarks
 * Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions.
 *
 * **FHIR Specification**
 * - **Short:** Healthcare plan for patient or group
 * - **Definition:** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions.
 * - **FHIR Version:** 4.0.1
 *
 * @category Data Models: Resource
 * @see [FHIR CarePlan](http://hl7.org/fhir/StructureDefinition/CarePlan)
 */
export class CarePlan extends DomainResource implements IDomainResource {
  constructor(status: EnumCodeType | CodeType | fhirCode | null = null, intent: EnumCodeType | CodeType | fhirCode | null = null, subject: Reference | null = null) {
    super();

    this.requestStatusEnum = new RequestStatusEnum();
    this.requestIntentEnum = new RequestIntentEnum();

    this.status = constructorCodeValueAsEnumCodeType<RequestStatusEnum>(
      status,
      RequestStatusEnum,
      this.requestStatusEnum,
      'CarePlan.status',
    );

    this.intent = constructorCodeValueAsEnumCodeType<RequestIntentEnum>(
      intent,
      RequestIntentEnum,
      this.requestIntentEnum,
      'CarePlan.intent',
    );

    this.subject = null;
    if (isDefined<Reference>(subject)) {
      this.setSubject(subject);
    }
  }

  /**
   * Parse the provided `CarePlan` JSON to instantiate the CarePlan data model.
   *
   * @param sourceJson - JSON representing FHIR `CarePlan`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to CarePlan
   * @returns CarePlan data model or undefined for `CarePlan`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): CarePlan | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'CarePlan';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new CarePlan();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'CarePlan');
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

    fieldName = 'replaces';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addReplaces(datatype);
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

    fieldName = 'intent';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setIntent(null);
      } else {
        instance.setIntentElement(datatype);
      }
    } else {
      instance.setIntent(null);
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

    fieldName = 'title';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setTitleElement(datatype);
    }

    fieldName = 'description';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setDescriptionElement(datatype);
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

    fieldName = 'period';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Period | undefined = Period.parse(classJsonObj[fieldName]!, sourceField);
      instance.setPeriod(datatype);
    }

    fieldName = 'created';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dtJson, dtSiblingJson);
      instance.setCreatedElement(datatype);
    }

    fieldName = 'author';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setAuthor(datatype);
    }

    fieldName = 'contributor';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addContributor(datatype);
        }
      });
  }

    fieldName = 'careTeam';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addCareTeam(datatype);
        }
      });
  }

    fieldName = 'addresses';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addAddresses(datatype);
        }
      });
  }

    fieldName = 'supportingInfo';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addSupportingInfo(datatype);
        }
      });
  }

    fieldName = 'goal';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addGoal(datatype);
        }
      });
  }

    fieldName = 'activity';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: CarePlanActivityComponent | undefined = CarePlanActivityComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addActivity(component);
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
   * CarePlan.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** External Ids for this plan
   * - **Definition:** Business identifiers assigned to this care plan by the performer or other systems which remain constant as the resource is updated and propagates from server to server.
   * - **Comment:** This is a business identifier, not a resource identifier (see [discussion](https://hl7.org/fhir/resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
   * - **Requirements:** Allows identification of the care plan as it is known by various participating systems and in a way that remains consistent across servers.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier[] | undefined;

  /**
   * CarePlan.instantiatesCanonical Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Instantiates FHIR protocol or definition
   * - **Definition:** The URL pointing to a FHIR-defined protocol, guideline, questionnaire or other definition that is adhered to in whole or in part by this CarePlan.
   * - **FHIR Type:** `canonical`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/PlanDefinition',
   *       'http://hl7.org/fhir/StructureDefinition/Questionnaire',
   *       'http://hl7.org/fhir/StructureDefinition/Measure',
   *       'http://hl7.org/fhir/StructureDefinition/ActivityDefinition',
   *       'http://hl7.org/fhir/StructureDefinition/OperationDefinition',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private instantiatesCanonical?: CanonicalType[] | undefined;

  /**
   * CarePlan.instantiatesUri Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Instantiates external protocol or definition
   * - **Definition:** The URL pointing to an externally maintained protocol, guideline, questionnaire or other definition that is adhered to in whole or in part by this CarePlan.
   * - **Comment:** This might be an HTML page, PDF, etc. or could just be a non-resolvable URI identifier.
   * - **FHIR Type:** `uri`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private instantiatesUri?: UriType[] | undefined;

  /**
   * CarePlan.basedOn Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Fulfills CarePlan
   * - **Definition:** A care plan that is fulfilled in whole or in part by this care plan.
   * - **Requirements:** Allows tracing of the care plan and tracking whether proposals/recommendations were acted upon.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/CarePlan',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private basedOn?: Reference[] | undefined;

  /**
   * CarePlan.replaces Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** CarePlan replaced by this CarePlan
   * - **Definition:** Completed or terminated care plan whose function is taken by this new care plan.
   * - **Comment:** The replacement could be because the initial care plan was immediately rejected (due to an issue) or because the previous care plan was completed, but the need for the action described by the care plan remains ongoing.
   * - **Requirements:** Allows tracing the continuation of a therapy or administrative process instantiated through multiple care plans.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/CarePlan',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private replaces?: Reference[] | undefined;

  /**
   * CarePlan.partOf Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Part of referenced CarePlan
   * - **Definition:** A larger care plan of which this particular care plan is a component or step.
   * - **Comment:** Each care plan is an independent request, such that having a care plan be part of another care plan can cause issues with cascading statuses.  As such, this element is still being discussed.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/CarePlan',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private partOf?: Reference[] | undefined;

  /**
   * FHIR CodeSystem: RequestStatus
   *
   * @see {@link RequestStatusEnum }
   */
  private readonly requestStatusEnum: RequestStatusEnum;

  /**
   * CarePlan.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** draft | active | on-hold | revoked | completed | entered-in-error | unknown
   * - **Definition:** Indicates whether the plan is currently being acted upon, represents future intentions or is now a historical record.
   * - **Comment:** The unknown code is not to be used to convey other statuses.  The unknown code should be used when one of the statuses applies, but the authoring system doesn\'t know the current state of the care plan. This element is labeled as a modifier because the status contains the code entered-in-error that marks the plan as not currently valid.
   * - **Requirements:** Allows clinicians to determine whether the plan is actionable or not.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** true
   * - **isModifierReason:** This element is labeled as a modifier because it is a status element that contains status entered-in-error which means that the resource should not be treated as valid
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link RequestStatusEnum }
   */
  private status: EnumCodeType | null;

  /**
   * FHIR CodeSystem: RequestIntent
   *
   * @see {@link RequestIntentEnum }
   */
  private readonly requestIntentEnum: RequestIntentEnum;

  /**
   * CarePlan.intent Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** proposal | plan | order | option
   * - **Definition:** Indicates the level of authority/intentionality associated with the care plan and where the care plan fits into the workflow chain.
   * - **Comment:** This element is labeled as a modifier because the intent alters when and how the resource is actually applicable.
   * - **Requirements:** Proposals/recommendations, plans and orders all use the same structure and can exist in the same fulfillment chain.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** true
   * - **isModifierReason:** This element changes the interpretation of all descriptive attributes. For example &quot;the time the request is recommended to occur&quot; vs. &quot;the time the request is authorized to occur&quot; or &quot;who is recommended to perform the request&quot; vs. &quot;who is authorized to perform the request&quot;
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link RequestIntentEnum }
   */
  private intent: EnumCodeType | null;

  /**
   * CarePlan.category Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Type of plan
   * - **Definition:** Identifies what "kind" of plan this is to support differentiation between multiple co-existing plans; e.g. "Home health", "psychiatric", "asthma", "disease management", "wellness plan", etc.
   * - **Comment:** There may be multiple axes of categorization and one plan may serve multiple purposes.  In some cases, this may be redundant with references to CarePlan.concern.
   * - **Requirements:** Used for filtering what plan(s) are retrieved and displayed to different types of users.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private category?: CodeableConcept[] | undefined;

  /**
   * CarePlan.title Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Human-friendly name for the care plan
   * - **Definition:** Human-friendly name for the care plan.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private title?: StringType | undefined;

  /**
   * CarePlan.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Summary of nature of plan
   * - **Definition:** A description of the scope and nature of the plan.
   * - **Requirements:** Provides more detail than conveyed by category.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private description?: StringType | undefined;

  /**
   * CarePlan.subject Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who the care plan is for
   * - **Definition:** Identifies the patient or group whose intended care is described by the plan.
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
   * CarePlan.encounter Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Encounter created as part of
   * - **Definition:** The Encounter during which this CarePlan was created or to which the creation of this record is tightly associated.
   * - **Comment:** This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter. CarePlan activities conducted as a result of the care plan may well occur as part of other encounters.
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
   * CarePlan.period Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Time period plan covers
   * - **Definition:** Indicates when the plan did (or is intended to) come into effect and end.
   * - **Comment:** Any activities scheduled as part of the plan should be constrained to the specified period regardless of whether the activities are planned within a single encounter/episode or across multiple encounters/episodes (e.g. the longitudinal management of a chronic condition).
   * - **Requirements:** Allows tracking what plan(s) are in effect at a particular time.
   * - **FHIR Type:** `Period`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private period?: Period | undefined;

  /**
   * CarePlan.created Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Date record was first recorded
   * - **Definition:** Represents when this particular CarePlan record was created in the system, which is often a system-generated date.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private created?: DateTimeType | undefined;

  /**
   * CarePlan.author Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who is the designated responsible party
   * - **Definition:** When populated, the author is responsible for the care plan.  The care plan is attributed to the author.
   * - **Comment:** The author may also be a contributor.  For example, an organization can be an author, but not listed as a contributor.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *       'http://hl7.org/fhir/StructureDefinition/Device',
   *       'http://hl7.org/fhir/StructureDefinition/RelatedPerson',
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *       'http://hl7.org/fhir/StructureDefinition/CareTeam',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private author?: Reference | undefined;

  /**
   * CarePlan.contributor Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who provided the content of the care plan
   * - **Definition:** Identifies the individual(s) or organization who provided the contents of the care plan.
   * - **Comment:** Collaborative care plans may have multiple contributors.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *       'http://hl7.org/fhir/StructureDefinition/Device',
   *       'http://hl7.org/fhir/StructureDefinition/RelatedPerson',
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *       'http://hl7.org/fhir/StructureDefinition/CareTeam',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private contributor?: Reference[] | undefined;

  /**
   * CarePlan.careTeam Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who\'s involved in plan?
   * - **Definition:** Identifies all people and organizations who are expected to be involved in the care envisioned by this plan.
   * - **Requirements:** Allows representation of care teams, helps scope care plan.  In some cases may be a determiner of access permissions.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/CareTeam',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private careTeam?: Reference[] | undefined;

  /**
   * CarePlan.addresses Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Health issues this plan addresses
   * - **Definition:** Identifies the conditions/problems/concerns/diagnoses/etc. whose management and/or mitigation are handled by this plan.
   * - **Comment:** When the diagnosis is related to an allergy or intolerance, the Condition and AllergyIntolerance resources can both be used. However, to be actionable for decision support, using Condition alone is not sufficient as the allergy or intolerance condition needs to be represented as an AllergyIntolerance.
   * - **Requirements:** Links plan to the conditions it manages.  The element can identify risks addressed by the plan as well as active conditions.  (The Condition resource can include things like "at risk for hypertension" or "fall risk".)  Also scopes plans - multiple plans may exist addressing different concerns.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Condition',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private addresses?: Reference[] | undefined;

  /**
   * CarePlan.supportingInfo Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Information considered as part of plan
   * - **Definition:** Identifies portions of the patient\'s record that specifically influenced the formation of the plan.  These might include comorbidities, recent procedures, limitations, recent assessments, etc.
   * - **Comment:** Use "concern" to identify specific conditions addressed by the care plan.
   * - **Requirements:** Identifies barriers and other considerations associated with the care plan.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Resource',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private supportingInfo?: Reference[] | undefined;

  /**
   * CarePlan.goal Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Desired outcome of plan
   * - **Definition:** Describes the intended objective(s) of carrying out the care plan.
   * - **Comment:** Goal can be achieving a particular change or merely maintaining a current state or even slowing a decline.
   * - **Requirements:** Provides context for plan.  Allows plan effectiveness to be evaluated by clinicians.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Goal',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private goal?: Reference[] | undefined;

  /**
   * CarePlan.activity Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Action to occur as part of plan
   * - **Definition:** Identifies a planned action to occur as part of the plan.  For example, a medication to be used, lab tests to perform, self-monitoring, education, etc.
   * - **Requirements:** Allows systems to prompt for performance of planned activities, and validate plans against best practice.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private activity?: CarePlanActivityComponent[] | undefined;

  /**
   * CarePlan.note Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Comments about the plan
   * - **Definition:** General notes about the care plan not covered elsewhere.
   * - **Requirements:** Used to capture information that applies to the plan as a whole that doesn\'t fit into discrete elements.
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
      const optErrMsg = `Invalid CarePlan.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid CarePlan.identifier; Provided element is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid CarePlan.instantiatesCanonical; Provided value array has an element that is not an instance of CanonicalType.`;
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
      const optErrMsg = `Invalid CarePlan.instantiatesCanonical; Provided element is not an instance of CanonicalType.`;
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
        const optErrMsg = `Invalid CarePlan.instantiatesCanonical array item (${String(instantiatesCanonicalValue)})`;
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
      const optErrMsg = `Invalid CarePlan.instantiatesCanonical array item (${String(value)})`;
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
      const optErrMsg = `Invalid CarePlan.instantiatesUri; Provided value array has an element that is not an instance of UriType.`;
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
      const optErrMsg = `Invalid CarePlan.instantiatesUri; Provided element is not an instance of UriType.`;
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
        const optErrMsg = `Invalid CarePlan.instantiatesUri array item (${String(instantiatesUriValue)})`;
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
      const optErrMsg = `Invalid CarePlan.instantiatesUri array item (${String(value)})`;
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
   * @decorator `@ReferenceTargets('CarePlan.basedOn', ['CarePlan',])`
   *
   * @param value - the `basedOn` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('CarePlan.basedOn', [
    'CarePlan',
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
   * @decorator `@ReferenceTargets('CarePlan.basedOn', ['CarePlan',])`
   *
   * @param value - the `basedOn` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('CarePlan.basedOn', [
    'CarePlan',
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
   * @returns the `replaces` property value as a Reference array
   */
  public getReplaces(): Reference[] {
    return this.replaces ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `replaces` property.
   *
   * @decorator `@ReferenceTargets('CarePlan.replaces', ['CarePlan',])`
   *
   * @param value - the `replaces` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('CarePlan.replaces', [
    'CarePlan',
  ])
  public setReplaces(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.replaces = value;
    } else {
      this.replaces = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `replaces` array property.
   *
   * @decorator `@ReferenceTargets('CarePlan.replaces', ['CarePlan',])`
   *
   * @param value - the `replaces` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('CarePlan.replaces', [
    'CarePlan',
  ])
  public addReplaces(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initReplaces();
      this.replaces?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `replaces` property exists and has a value; `false` otherwise
   */
  public hasReplaces(): boolean {
    return isDefinedList<Reference>(this.replaces) && this.replaces.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `replaces` property
   */
  private initReplaces(): void {
    if (!this.hasReplaces()) {
      this.replaces = [] as Reference[];
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
   * @decorator `@ReferenceTargets('CarePlan.partOf', ['CarePlan',])`
   *
   * @param value - the `partOf` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('CarePlan.partOf', [
    'CarePlan',
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
   * @decorator `@ReferenceTargets('CarePlan.partOf', ['CarePlan',])`
   *
   * @param value - the `partOf` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('CarePlan.partOf', [
    'CarePlan',
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
   * @see CodeSystem Enumeration: {@link RequestStatusEnum }
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
   * @see CodeSystem Enumeration: {@link RequestStatusEnum }
   */
  public setStatusEnumType(enumType: EnumCodeType | undefined | null): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid CarePlan.status`;
      assertEnumCodeType<RequestStatusEnum>(enumType, RequestStatusEnum, errMsgPrefix);
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
   * @see CodeSystem Enumeration: {@link RequestStatusEnum }
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
   * @see CodeSystem Enumeration: {@link RequestStatusEnum }
   */
  public setStatusElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid CarePlan.status; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.status = new EnumCodeType(element, this.requestStatusEnum);
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
   * @see CodeSystem Enumeration: {@link RequestStatusEnum }
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
   * @see CodeSystem Enumeration: {@link RequestStatusEnum }
   */
  public setStatus(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid CarePlan.status (${String(value)})`;
      this.status = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.requestStatusEnum);
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
   * @returns the `intent` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link RequestIntentEnum }
   */
  public getIntentEnumType(): EnumCodeType | null {
    return this.intent;
  }

  /**
   * Assigns the provided EnumCodeType value to the `intent` property.
   *
   * @param enumType - the `intent` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link RequestIntentEnum }
   */
  public setIntentEnumType(enumType: EnumCodeType | undefined | null): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid CarePlan.intent`;
      assertEnumCodeType<RequestIntentEnum>(enumType, RequestIntentEnum, errMsgPrefix);
      this.intent = enumType;
    } else {
      this.intent = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `intent` property exists and has a value; `false` otherwise
   */
  public hasIntentEnumType(): boolean {
    return isDefined<EnumCodeType>(this.intent) && !this.intent.isEmpty() && this.intent.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `intent` property value as a CodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link RequestIntentEnum }
   */
  public getIntentElement(): CodeType | null {
    if (this.intent === null) {
      return null;
    }
    return this.intent as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `intent` property.
   *
   * @param element - the `intent` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link RequestIntentEnum }
   */
  public setIntentElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid CarePlan.intent; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.intent = new EnumCodeType(element, this.requestIntentEnum);
    } else {
      this.intent = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `intent` property exists and has a value; `false` otherwise
   */
  public hasIntentElement(): boolean {
    return this.hasIntentEnumType();
  }

  /**
   * @returns the `intent` property value as a fhirCode if defined; else null
   *
   * @see CodeSystem Enumeration: {@link RequestIntentEnum }
   */
  public getIntent(): fhirCode | null {
    if (this.intent === null) {
      return null;
    }
    return this.intent.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `intent` property.
   *
   * @param value - the `intent` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link RequestIntentEnum }
   */
  public setIntent(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid CarePlan.intent (${String(value)})`;
      this.intent = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.requestIntentEnum);
    } else {
      this.intent = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `intent` property exists and has a value; `false` otherwise
   */
  public hasIntent(): boolean {
    return this.hasIntentEnumType();
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
      const optErrMsg = `Invalid CarePlan.category; Provided value array has an element that is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid CarePlan.category; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid CarePlan.title; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid CarePlan.title (${String(value)})`;
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
      const optErrMsg = `Invalid CarePlan.description; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid CarePlan.description (${String(value)})`;
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
   * @returns the `subject` property value as a Reference object if defined; else an empty Reference object
   */
  public getSubject(): Reference {
    return this.subject ?? new Reference();
  }

  /**
   * Assigns the provided Subject object value to the `subject` property.
   *
   * @decorator `@ReferenceTargets('CarePlan.subject', ['Patient','Group',])`
   *
   * @param value - the `subject` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('CarePlan.subject', [
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
   * @decorator `@ReferenceTargets('CarePlan.encounter', ['Encounter',])`
   *
   * @param value - the `encounter` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('CarePlan.encounter', [
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
  public setPeriod(value: Period | undefined): this {
    if (isDefined<Period>(value)) {
      const optErrMsg = `Invalid CarePlan.period; Provided element is not an instance of Period.`;
      assertFhirType<Period>(value, Period, optErrMsg);
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
    return isDefined<Period>(this.period) && !this.period.isEmpty();
  }

  /**
   * @returns the `created` property value as a DateTimeType object if defined; else an empty DateTimeType object
   */
  public getCreatedElement(): DateTimeType {
    return this.created ?? new DateTimeType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `created` property.
   *
   * @param element - the `created` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCreatedElement(element: DateTimeType | undefined): this {
    if (isDefined<DateTimeType>(element)) {
      const optErrMsg = `Invalid CarePlan.created; Provided element is not an instance of DateTimeType.`;
      assertFhirType<DateTimeType>(element, DateTimeType, optErrMsg);
      this.created = element;
    } else {
      this.created = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `created` property exists and has a value; `false` otherwise
   */
  public hasCreatedElement(): boolean {
    return isDefined<DateTimeType>(this.created) && !this.created.isEmpty();
  }

  /**
   * @returns the `created` property value as a fhirDateTime if defined; else undefined
   */
  public getCreated(): fhirDateTime | undefined {
    return this.created?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `created` property.
   *
   * @param value - the `created` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCreated(value: fhirDateTime | undefined): this {
    if (isDefined<fhirDateTime>(value)) {
      const optErrMsg = `Invalid CarePlan.created (${String(value)})`;
      this.created = new DateTimeType(parseFhirPrimitiveData(value, fhirDateTimeSchema, optErrMsg));
    } else {
      this.created = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `created` property exists and has a value; `false` otherwise
   */
  public hasCreated(): boolean {
    return this.hasCreatedElement();
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
   * @decorator `@ReferenceTargets('CarePlan.author', ['Patient','Practitioner','PractitionerRole','Device','RelatedPerson','Organization','CareTeam',])`
   *
   * @param value - the `author` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('CarePlan.author', [
    'Patient',
  
    'Practitioner',
  
    'PractitionerRole',
  
    'Device',
  
    'RelatedPerson',
  
    'Organization',
  
    'CareTeam',
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
   * @returns the `contributor` property value as a Reference array
   */
  public getContributor(): Reference[] {
    return this.contributor ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `contributor` property.
   *
   * @decorator `@ReferenceTargets('CarePlan.contributor', ['Patient','Practitioner','PractitionerRole','Device','RelatedPerson','Organization','CareTeam',])`
   *
   * @param value - the `contributor` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('CarePlan.contributor', [
    'Patient',
  
    'Practitioner',
  
    'PractitionerRole',
  
    'Device',
  
    'RelatedPerson',
  
    'Organization',
  
    'CareTeam',
  ])
  public setContributor(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.contributor = value;
    } else {
      this.contributor = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `contributor` array property.
   *
   * @decorator `@ReferenceTargets('CarePlan.contributor', ['Patient','Practitioner','PractitionerRole','Device','RelatedPerson','Organization','CareTeam',])`
   *
   * @param value - the `contributor` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('CarePlan.contributor', [
    'Patient',
  
    'Practitioner',
  
    'PractitionerRole',
  
    'Device',
  
    'RelatedPerson',
  
    'Organization',
  
    'CareTeam',
  ])
  public addContributor(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initContributor();
      this.contributor?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `contributor` property exists and has a value; `false` otherwise
   */
  public hasContributor(): boolean {
    return isDefinedList<Reference>(this.contributor) && this.contributor.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `contributor` property
   */
  private initContributor(): void {
    if (!this.hasContributor()) {
      this.contributor = [] as Reference[];
    }
  }

  /**
   * @returns the `careTeam` property value as a Reference array
   */
  public getCareTeam(): Reference[] {
    return this.careTeam ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `careTeam` property.
   *
   * @decorator `@ReferenceTargets('CarePlan.careTeam', ['CareTeam',])`
   *
   * @param value - the `careTeam` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('CarePlan.careTeam', [
    'CareTeam',
  ])
  public setCareTeam(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.careTeam = value;
    } else {
      this.careTeam = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `careTeam` array property.
   *
   * @decorator `@ReferenceTargets('CarePlan.careTeam', ['CareTeam',])`
   *
   * @param value - the `careTeam` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('CarePlan.careTeam', [
    'CareTeam',
  ])
  public addCareTeam(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initCareTeam();
      this.careTeam?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `careTeam` property exists and has a value; `false` otherwise
   */
  public hasCareTeam(): boolean {
    return isDefinedList<Reference>(this.careTeam) && this.careTeam.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `careTeam` property
   */
  private initCareTeam(): void {
    if (!this.hasCareTeam()) {
      this.careTeam = [] as Reference[];
    }
  }

  /**
   * @returns the `addresses` property value as a Reference array
   */
  public getAddresses(): Reference[] {
    return this.addresses ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `addresses` property.
   *
   * @decorator `@ReferenceTargets('CarePlan.addresses', ['Condition',])`
   *
   * @param value - the `addresses` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('CarePlan.addresses', [
    'Condition',
  ])
  public setAddresses(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.addresses = value;
    } else {
      this.addresses = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `addresses` array property.
   *
   * @decorator `@ReferenceTargets('CarePlan.addresses', ['Condition',])`
   *
   * @param value - the `addresses` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('CarePlan.addresses', [
    'Condition',
  ])
  public addAddresses(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initAddresses();
      this.addresses?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `addresses` property exists and has a value; `false` otherwise
   */
  public hasAddresses(): boolean {
    return isDefinedList<Reference>(this.addresses) && this.addresses.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `addresses` property
   */
  private initAddresses(): void {
    if (!this.hasAddresses()) {
      this.addresses = [] as Reference[];
    }
  }

  /**
   * @returns the `supportingInfo` property value as a Reference array
   */
  public getSupportingInfo(): Reference[] {
    return this.supportingInfo ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `supportingInfo` property.
   *
   * @decorator `@ReferenceTargets('CarePlan.supportingInfo', ['Resource',])`
   *
   * @param value - the `supportingInfo` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('CarePlan.supportingInfo', [
    'Resource',
  ])
  public setSupportingInfo(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.supportingInfo = value;
    } else {
      this.supportingInfo = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `supportingInfo` array property.
   *
   * @decorator `@ReferenceTargets('CarePlan.supportingInfo', ['Resource',])`
   *
   * @param value - the `supportingInfo` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('CarePlan.supportingInfo', [
    'Resource',
  ])
  public addSupportingInfo(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initSupportingInfo();
      this.supportingInfo?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `supportingInfo` property exists and has a value; `false` otherwise
   */
  public hasSupportingInfo(): boolean {
    return isDefinedList<Reference>(this.supportingInfo) && this.supportingInfo.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `supportingInfo` property
   */
  private initSupportingInfo(): void {
    if (!this.hasSupportingInfo()) {
      this.supportingInfo = [] as Reference[];
    }
  }

  /**
   * @returns the `goal` property value as a Reference array
   */
  public getGoal(): Reference[] {
    return this.goal ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `goal` property.
   *
   * @decorator `@ReferenceTargets('CarePlan.goal', ['Goal',])`
   *
   * @param value - the `goal` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('CarePlan.goal', [
    'Goal',
  ])
  public setGoal(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.goal = value;
    } else {
      this.goal = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `goal` array property.
   *
   * @decorator `@ReferenceTargets('CarePlan.goal', ['Goal',])`
   *
   * @param value - the `goal` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('CarePlan.goal', [
    'Goal',
  ])
  public addGoal(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initGoal();
      this.goal?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `goal` property exists and has a value; `false` otherwise
   */
  public hasGoal(): boolean {
    return isDefinedList<Reference>(this.goal) && this.goal.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `goal` property
   */
  private initGoal(): void {
    if (!this.hasGoal()) {
      this.goal = [] as Reference[];
    }
  }

  /**
   * @returns the `activity` property value as a CarePlanActivityComponent array
   */
  public getActivity(): CarePlanActivityComponent[] {
    return this.activity ?? ([] as CarePlanActivityComponent[]);
  }

  /**
   * Assigns the provided CarePlanActivityComponent array value to the `activity` property.
   *
   * @param value - the `activity` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setActivity(value: CarePlanActivityComponent[] | undefined): this {
    if (isDefinedList<CarePlanActivityComponent>(value)) {
      const optErrMsg = `Invalid CarePlan.activity; Provided value array has an element that is not an instance of CarePlanActivityComponent.`;
      assertFhirTypeList<CarePlanActivityComponent>(value, CarePlanActivityComponent, optErrMsg);
      this.activity = value;
    } else {
      this.activity = undefined;
    }
    return this;
  }

  /**
   * Add the provided CarePlanActivityComponent value to the `activity` array property.
   *
   * @param value - the `activity` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addActivity(value: CarePlanActivityComponent | undefined): this {
    if (isDefined<CarePlanActivityComponent>(value)) {
      const optErrMsg = `Invalid CarePlan.activity; Provided element is not an instance of CarePlanActivityComponent.`;
      assertFhirType<CarePlanActivityComponent>(value, CarePlanActivityComponent, optErrMsg);
      this.initActivity();
      this.activity?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `activity` property exists and has a value; `false` otherwise
   */
  public hasActivity(): boolean {
    return isDefinedList<CarePlanActivityComponent>(this.activity) && this.activity.some((item: CarePlanActivityComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `activity` property
   */
  private initActivity(): void {
    if(!this.hasActivity()) {
      this.activity = [] as CarePlanActivityComponent[];
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
      const optErrMsg = `Invalid CarePlan.note; Provided value array has an element that is not an instance of Annotation.`;
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
      const optErrMsg = `Invalid CarePlan.note; Provided element is not an instance of Annotation.`;
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
    return 'CarePlan';
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
      this.replaces,
      this.partOf,
      this.status,
      this.intent,
      this.category,
      this.title,
      this.description,
      this.subject,
      this.encounter,
      this.period,
      this.created,
      this.author,
      this.contributor,
      this.careTeam,
      this.addresses,
      this.supportingInfo,
      this.goal,
      this.activity,
      this.note,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.status, this.intent, this.subject, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): CarePlan {
    const dest = new CarePlan();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: CarePlan): void {
    super.copyValues(dest);
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    const instantiatesCanonicalList = copyListValues<CanonicalType>(this.instantiatesCanonical);
    dest.instantiatesCanonical = instantiatesCanonicalList.length === 0 ? undefined : instantiatesCanonicalList;
    const instantiatesUriList = copyListValues<UriType>(this.instantiatesUri);
    dest.instantiatesUri = instantiatesUriList.length === 0 ? undefined : instantiatesUriList;
    const basedOnList = copyListValues<Reference>(this.basedOn);
    dest.basedOn = basedOnList.length === 0 ? undefined : basedOnList;
    const replacesList = copyListValues<Reference>(this.replaces);
    dest.replaces = replacesList.length === 0 ? undefined : replacesList;
    const partOfList = copyListValues<Reference>(this.partOf);
    dest.partOf = partOfList.length === 0 ? undefined : partOfList;
    dest.status = this.status ? this.status.copy() : null;
    dest.intent = this.intent ? this.intent.copy() : null;
    const categoryList = copyListValues<CodeableConcept>(this.category);
    dest.category = categoryList.length === 0 ? undefined : categoryList;
    dest.title = this.title?.copy();
    dest.description = this.description?.copy();
    dest.subject = this.subject ? this.subject.copy() : null;
    dest.encounter = this.encounter?.copy();
    dest.period = this.period?.copy();
    dest.created = this.created?.copy();
    dest.author = this.author?.copy();
    const contributorList = copyListValues<Reference>(this.contributor);
    dest.contributor = contributorList.length === 0 ? undefined : contributorList;
    const careTeamList = copyListValues<Reference>(this.careTeam);
    dest.careTeam = careTeamList.length === 0 ? undefined : careTeamList;
    const addressesList = copyListValues<Reference>(this.addresses);
    dest.addresses = addressesList.length === 0 ? undefined : addressesList;
    const supportingInfoList = copyListValues<Reference>(this.supportingInfo);
    dest.supportingInfo = supportingInfoList.length === 0 ? undefined : supportingInfoList;
    const goalList = copyListValues<Reference>(this.goal);
    dest.goal = goalList.length === 0 ? undefined : goalList;
    const activityList = copyListValues<CarePlanActivityComponent>(this.activity);
    dest.activity = activityList.length === 0 ? undefined : activityList;
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

    if (this.hasReplaces()) {
      setFhirComplexListJson(this.getReplaces(), 'replaces', jsonObj);
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

    if (this.hasIntentElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getIntentElement()!, 'intent', jsonObj);
    } else {
      jsonObj['intent'] = null;
    }

    if (this.hasCategory()) {
      setFhirComplexListJson(this.getCategory(), 'category', jsonObj);
    }

    if (this.hasTitleElement()) {
      setFhirPrimitiveJson<fhirString>(this.getTitleElement(), 'title', jsonObj);
    }

    if (this.hasDescriptionElement()) {
      setFhirPrimitiveJson<fhirString>(this.getDescriptionElement(), 'description', jsonObj);
    }

    if (this.hasSubject()) {
      setFhirComplexJson(this.getSubject(), 'subject', jsonObj);
    } else {
      jsonObj['subject'] = null;
    }

    if (this.hasEncounter()) {
      setFhirComplexJson(this.getEncounter(), 'encounter', jsonObj);
    }

    if (this.hasPeriod()) {
      setFhirComplexJson(this.getPeriod(), 'period', jsonObj);
    }

    if (this.hasCreatedElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getCreatedElement(), 'created', jsonObj);
    }

    if (this.hasAuthor()) {
      setFhirComplexJson(this.getAuthor(), 'author', jsonObj);
    }

    if (this.hasContributor()) {
      setFhirComplexListJson(this.getContributor(), 'contributor', jsonObj);
    }

    if (this.hasCareTeam()) {
      setFhirComplexListJson(this.getCareTeam(), 'careTeam', jsonObj);
    }

    if (this.hasAddresses()) {
      setFhirComplexListJson(this.getAddresses(), 'addresses', jsonObj);
    }

    if (this.hasSupportingInfo()) {
      setFhirComplexListJson(this.getSupportingInfo(), 'supportingInfo', jsonObj);
    }

    if (this.hasGoal()) {
      setFhirComplexListJson(this.getGoal(), 'goal', jsonObj);
    }

    if (this.hasActivity()) {
      setFhirBackboneElementListJson(this.getActivity(), 'activity', jsonObj);
    }

    if (this.hasNote()) {
      setFhirComplexListJson(this.getNote(), 'note', jsonObj);
    }

    return jsonObj;
  }
}

/**
 * CarePlanActivityComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Action to occur as part of plan
 * - **Definition:** Identifies a planned action to occur as part of the plan.  For example, a medication to be used, lab tests to perform, self-monitoring, education, etc.
 * - **Requirements:** Allows systems to prompt for performance of planned activities, and validate plans against best practice.
 *
 * @category Data Models: Resource
 * @see [FHIR CarePlan](http://hl7.org/fhir/StructureDefinition/CarePlan)
 */
export class CarePlanActivityComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `CarePlanActivityComponent` JSON to instantiate the CarePlanActivityComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `CarePlanActivityComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to CarePlanActivityComponent
   * @returns CarePlanActivityComponent data model or undefined for `CarePlanActivityComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): CarePlanActivityComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'CarePlanActivityComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new CarePlanActivityComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    fieldName = 'outcomeCodeableConcept';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addOutcomeCodeableConcept(datatype);
        }
      });
    }

    fieldName = 'outcomeReference';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addOutcomeReference(datatype);
        }
      });
  }

    fieldName = 'progress';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Annotation | undefined = Annotation.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addProgress(datatype);
        }
      });
    }

    fieldName = 'reference';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setReference(datatype);
    }

    fieldName = 'detail';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: CarePlanActivityDetailComponent | undefined = CarePlanActivityDetailComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setDetail(component);
    }

    return instance;
  }

  /**
   * CarePlan.activity.outcomeCodeableConcept Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Results of the activity
   * - **Definition:** Identifies the outcome at the point when the status of the activity is assessed.  For example, the outcome of an education activity could be patient understands (or not).
   * - **Comment:** Note that this should not duplicate the activity status (e.g. completed or in progress).
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private outcomeCodeableConcept?: CodeableConcept[] | undefined;

  /**
   * CarePlan.activity.outcomeReference Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Appointment, Encounter, Procedure, etc.
   * - **Definition:** Details of the outcome or action resulting from the activity.  The reference to an "event" resource, such as Procedure or Encounter or Observation, is the result/outcome of the activity itself.  The activity can be conveyed using CarePlan.activity.detail OR using the CarePlan.activity.reference (a reference to a "request" resource).
   * - **Comment:** The activity outcome is independent of the outcome of the related goal(s).  For example, if the goal is to achieve a target body weight of 150 lbs and an activity is defined to diet, then the activity outcome could be calories consumed whereas the goal outcome is an observation for the actual body weight measured.
   * - **Requirements:** Links plan to resulting actions.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Resource',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private outcomeReference?: Reference[] | undefined;

  /**
   * CarePlan.activity.progress Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Comments about the activity status/progress
   * - **Definition:** Notes about the adherence/status/progress of the activity.
   * - **Comment:** This element should NOT be used to describe the activity to be performed - that occurs either within the resource pointed to by activity.detail.reference or in activity.detail.description.
   * - **Requirements:** Can be used to capture information about adherence, progress, concerns, etc.
   * - **FHIR Type:** `Annotation`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private progress?: Annotation[] | undefined;

  /**
   * CarePlan.activity.reference Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Activity details defined in specific resource
   * - **Definition:** The details of the proposed activity represented in a specific resource.
   * - **Comment:** Standard extension exists ([resource-pertainsToGoal](https://hl7.org/fhir/extension-resource-pertainstogoal.html)) that allows goals to be referenced from any of the referenced resources in CarePlan.activity.reference.   The goal should be visible when the resource referenced by CarePlan.activity.reference is viewed independently from the CarePlan.  Requests that are pointed to by a CarePlan using this element should *not* point to this CarePlan using the "basedOn" element.  i.e. Requests that are part of a CarePlan are not "based on" the CarePlan.
   * - **Requirements:** Details in a form consistent with other applications and contexts of use.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Appointment',
   *       'http://hl7.org/fhir/StructureDefinition/CommunicationRequest',
   *       'http://hl7.org/fhir/StructureDefinition/DeviceRequest',
   *       'http://hl7.org/fhir/StructureDefinition/MedicationRequest',
   *       'http://hl7.org/fhir/StructureDefinition/NutritionOrder',
   *       'http://hl7.org/fhir/StructureDefinition/Task',
   *       'http://hl7.org/fhir/StructureDefinition/ServiceRequest',
   *       'http://hl7.org/fhir/StructureDefinition/VisionPrescription',
   *       'http://hl7.org/fhir/StructureDefinition/RequestGroup',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private reference?: Reference | undefined;

  /**
   * CarePlan.activity.detail Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** In-line definition of activity
   * - **Definition:** A simple summary of a planned activity suitable for a general care plan system (e.g. form driven) that doesn\'t know about specific resources such as procedure etc.
   * - **Requirements:** Details in a simple form for generic care plan systems.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private detail?: CarePlanActivityDetailComponent | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `outcomeCodeableConcept` property value as a CodeableConcept array
   */
  public getOutcomeCodeableConcept(): CodeableConcept[] {
    return this.outcomeCodeableConcept ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `outcomeCodeableConcept` property.
   *
   * @param value - the `outcomeCodeableConcept` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setOutcomeCodeableConcept(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid CarePlan.activity.outcomeCodeableConcept; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.outcomeCodeableConcept = value;
    } else {
      this.outcomeCodeableConcept = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `outcomeCodeableConcept` array property.
   *
   * @param value - the `outcomeCodeableConcept` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addOutcomeCodeableConcept(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid CarePlan.activity.outcomeCodeableConcept; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initOutcomeCodeableConcept();
      this.outcomeCodeableConcept?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `outcomeCodeableConcept` property exists and has a value; `false` otherwise
   */
  public hasOutcomeCodeableConcept(): boolean {
    return isDefinedList<CodeableConcept>(this.outcomeCodeableConcept) && this.outcomeCodeableConcept.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `outcomeCodeableConcept` property
   */
  private initOutcomeCodeableConcept(): void {
    if(!this.hasOutcomeCodeableConcept()) {
      this.outcomeCodeableConcept = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `outcomeReference` property value as a Reference array
   */
  public getOutcomeReference(): Reference[] {
    return this.outcomeReference ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `outcomeReference` property.
   *
   * @decorator `@ReferenceTargets('CarePlan.activity.outcomeReference', ['Resource',])`
   *
   * @param value - the `outcomeReference` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('CarePlan.activity.outcomeReference', [
    'Resource',
  ])
  public setOutcomeReference(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.outcomeReference = value;
    } else {
      this.outcomeReference = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `outcomeReference` array property.
   *
   * @decorator `@ReferenceTargets('CarePlan.activity.outcomeReference', ['Resource',])`
   *
   * @param value - the `outcomeReference` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('CarePlan.activity.outcomeReference', [
    'Resource',
  ])
  public addOutcomeReference(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initOutcomeReference();
      this.outcomeReference?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `outcomeReference` property exists and has a value; `false` otherwise
   */
  public hasOutcomeReference(): boolean {
    return isDefinedList<Reference>(this.outcomeReference) && this.outcomeReference.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `outcomeReference` property
   */
  private initOutcomeReference(): void {
    if (!this.hasOutcomeReference()) {
      this.outcomeReference = [] as Reference[];
    }
  }

  /**
   * @returns the `progress` property value as a Annotation array
   */
  public getProgress(): Annotation[] {
    return this.progress ?? ([] as Annotation[]);
  }

  /**
   * Assigns the provided Annotation array value to the `progress` property.
   *
   * @param value - the `progress` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setProgress(value: Annotation[] | undefined): this {
    if (isDefinedList<Annotation>(value)) {
      const optErrMsg = `Invalid CarePlan.activity.progress; Provided value array has an element that is not an instance of Annotation.`;
      assertFhirTypeList<Annotation>(value, Annotation, optErrMsg);
      this.progress = value;
    } else {
      this.progress = undefined;
    }
    return this;
  }

  /**
   * Add the provided Annotation value to the `progress` array property.
   *
   * @param value - the `progress` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addProgress(value: Annotation | undefined): this {
    if (isDefined<Annotation>(value)) {
      const optErrMsg = `Invalid CarePlan.activity.progress; Provided element is not an instance of Annotation.`;
      assertFhirType<Annotation>(value, Annotation, optErrMsg);
      this.initProgress();
      this.progress?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `progress` property exists and has a value; `false` otherwise
   */
  public hasProgress(): boolean {
    return isDefinedList<Annotation>(this.progress) && this.progress.some((item: Annotation) => !item.isEmpty());
  }

  /**
   * Initialize the `progress` property
   */
  private initProgress(): void {
    if(!this.hasProgress()) {
      this.progress = [] as Annotation[];
    }
  }

  /**
   * @returns the `reference` property value as a Reference object; else an empty Reference object
   */
  public getReference(): Reference {
    return this.reference ?? new Reference();
  }

  /**
   * Assigns the provided Reference object value to the `reference` property.
   *
   * @decorator `@ReferenceTargets('CarePlan.activity.reference', ['Appointment','CommunicationRequest','DeviceRequest','MedicationRequest','NutritionOrder','Task','ServiceRequest','VisionPrescription','RequestGroup',])`
   *
   * @param value - the `reference` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('CarePlan.activity.reference', [
    'Appointment',
  
    'CommunicationRequest',
  
    'DeviceRequest',
  
    'MedicationRequest',
  
    'NutritionOrder',
  
    'Task',
  
    'ServiceRequest',
  
    'VisionPrescription',
  
    'RequestGroup',
  ])
  public setReference(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.reference = value;
    } else {
      this.reference = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `reference` property exists and has a value; `false` otherwise
   */
  public hasReference(): boolean {
    return isDefined<Reference>(this.reference) && !this.reference.isEmpty();
  }

  /**
   * @returns the `detail` property value as a CarePlanActivityDetailComponent object if defined; else an empty CarePlanActivityDetailComponent object
   */
  public getDetail(): CarePlanActivityDetailComponent {
    return this.detail ?? new CarePlanActivityDetailComponent();
  }

  /**
   * Assigns the provided Detail object value to the `detail` property.
   *
   * @param value - the `detail` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDetail(value: CarePlanActivityDetailComponent | undefined): this {
    if (isDefined<CarePlanActivityDetailComponent>(value)) {
      const optErrMsg = `Invalid CarePlan.activity.detail; Provided element is not an instance of CarePlanActivityDetailComponent.`;
      assertFhirType<CarePlanActivityDetailComponent>(value, CarePlanActivityDetailComponent, optErrMsg);
      this.detail = value;
    } else {
      this.detail = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `detail` property exists and has a value; `false` otherwise
   */
  public hasDetail(): boolean {
    return isDefined<CarePlanActivityDetailComponent>(this.detail) && !this.detail.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'CarePlan.activity';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.outcomeCodeableConcept,
      this.outcomeReference,
      this.progress,
      this.reference,
      this.detail,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): CarePlanActivityComponent {
    const dest = new CarePlanActivityComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: CarePlanActivityComponent): void {
    super.copyValues(dest);
    const outcomeCodeableConceptList = copyListValues<CodeableConcept>(this.outcomeCodeableConcept);
    dest.outcomeCodeableConcept = outcomeCodeableConceptList.length === 0 ? undefined : outcomeCodeableConceptList;
    const outcomeReferenceList = copyListValues<Reference>(this.outcomeReference);
    dest.outcomeReference = outcomeReferenceList.length === 0 ? undefined : outcomeReferenceList;
    const progressList = copyListValues<Annotation>(this.progress);
    dest.progress = progressList.length === 0 ? undefined : progressList;
    dest.reference = this.reference?.copy();
    dest.detail = this.detail?.copy();
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

    if (this.hasOutcomeCodeableConcept()) {
      setFhirComplexListJson(this.getOutcomeCodeableConcept(), 'outcomeCodeableConcept', jsonObj);
    }

    if (this.hasOutcomeReference()) {
      setFhirComplexListJson(this.getOutcomeReference(), 'outcomeReference', jsonObj);
    }

    if (this.hasProgress()) {
      setFhirComplexListJson(this.getProgress(), 'progress', jsonObj);
    }

    if (this.hasReference()) {
      setFhirComplexJson(this.getReference(), 'reference', jsonObj);
    }

    if (this.hasDetail()) {
      setFhirBackboneElementJson(this.getDetail(), 'detail', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * CarePlanActivityDetailComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** In-line definition of activity
 * - **Definition:** A simple summary of a planned activity suitable for a general care plan system (e.g. form driven) that doesn\'t know about specific resources such as procedure etc.
 * - **Requirements:** Details in a simple form for generic care plan systems.
 *
 * @category Data Models: Resource
 * @see [FHIR CarePlan](http://hl7.org/fhir/StructureDefinition/CarePlan)
 */
export class CarePlanActivityDetailComponent extends BackboneElement implements IBackboneElement {
  constructor(status: EnumCodeType | CodeType | fhirCode | null = null) {
    super();

    this.resourceTypesEnum = new ResourceTypesEnum();
    this.carePlanActivityStatusEnum = new CarePlanActivityStatusEnum();

    this.status = constructorCodeValueAsEnumCodeType<CarePlanActivityStatusEnum>(
      status,
      CarePlanActivityStatusEnum,
      this.carePlanActivityStatusEnum,
      'CarePlan.activity.detail.status',
    );
  }

  /**
   * Parse the provided `CarePlanActivityDetailComponent` JSON to instantiate the CarePlanActivityDetailComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `CarePlanActivityDetailComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to CarePlanActivityDetailComponent
   * @returns CarePlanActivityDetailComponent data model or undefined for `CarePlanActivityDetailComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): CarePlanActivityDetailComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'CarePlanActivityDetailComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new CarePlanActivityDetailComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const classMetadata: DecoratorMetadataObject | null = CarePlanActivityDetailComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for CarePlanActivityDetailComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    fieldName = 'kind';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setKindElement(datatype);
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

    fieldName = 'code';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setCode(datatype);
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

    fieldName = 'goal';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addGoal(datatype);
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
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setStatusReason(datatype);
    }

    fieldName = 'doNotPerform';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setDoNotPerformElement(datatype);
    }

    fieldName = 'scheduled[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const scheduled: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setScheduled(scheduled);

    fieldName = 'location';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setLocation(datatype);
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

    fieldName = 'product[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const product: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setProduct(product);

    fieldName = 'dailyAmount';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Quantity | undefined = Quantity.parse(classJsonObj[fieldName]!, sourceField);
      instance.setDailyAmount(datatype);
    }

    fieldName = 'quantity';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Quantity | undefined = Quantity.parse(classJsonObj[fieldName]!, sourceField);
      instance.setQuantity(datatype);
    }

    fieldName = 'description';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setDescriptionElement(datatype);
    }

    return instance;
  }

  /**
   * FHIR CodeSystem: ResourceTypes
   *
   * @see {@link ResourceTypesEnum }
   */
  private readonly resourceTypesEnum: ResourceTypesEnum;

  /**
   * CarePlan.activity.detail.kind Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Appointment | CommunicationRequest | DeviceRequest | MedicationRequest | NutritionOrder | Task | ServiceRequest | VisionPrescription
   * - **Definition:** A description of the kind of resource the in-line definition of a care plan activity is representing.  The CarePlan.activity.detail is an in-line definition when a resource is not referenced using CarePlan.activity.reference.  For example, a MedicationRequest, a ServiceRequest, or a CommunicationRequest.
   * - **Requirements:** May determine what types of extensions are permitted.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link ResourceTypesEnum }
   */
  private kind?: EnumCodeType | undefined;

  /**
   * CarePlan.activity.detail.instantiatesCanonical Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Instantiates FHIR protocol or definition
   * - **Definition:** The URL pointing to a FHIR-defined protocol, guideline, questionnaire or other definition that is adhered to in whole or in part by this CarePlan activity.
   * - **Requirements:** Allows Questionnaires that the patient (or practitioner) should fill in to fulfill the care plan activity.
   * - **FHIR Type:** `canonical`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/PlanDefinition',
   *       'http://hl7.org/fhir/StructureDefinition/ActivityDefinition',
   *       'http://hl7.org/fhir/StructureDefinition/Questionnaire',
   *       'http://hl7.org/fhir/StructureDefinition/Measure',
   *       'http://hl7.org/fhir/StructureDefinition/OperationDefinition',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private instantiatesCanonical?: CanonicalType[] | undefined;

  /**
   * CarePlan.activity.detail.instantiatesUri Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Instantiates external protocol or definition
   * - **Definition:** The URL pointing to an externally maintained protocol, guideline, questionnaire or other definition that is adhered to in whole or in part by this CarePlan activity.
   * - **Comment:** This might be an HTML page, PDF, etc. or could just be a non-resolvable URI identifier.
   * - **Requirements:** Allows Questionnaires that the patient (or practitioner) should fill in to fulfill the care plan activity.
   * - **FHIR Type:** `uri`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private instantiatesUri?: UriType[] | undefined;

  /**
   * CarePlan.activity.detail.code Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Detail type of activity
   * - **Definition:** Detailed description of the type of planned activity; e.g. what lab test, what procedure, what kind of encounter.
   * - **Comment:** Tends to be less relevant for activities involving particular products.  Codes should not convey negation - use "prohibited" instead.
   * - **Requirements:** Allows matching performed to planned as well as validation against protocols.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private code?: CodeableConcept | undefined;

  /**
   * CarePlan.activity.detail.reasonCode Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Why activity should be done or why activity was prohibited
   * - **Definition:** Provides the rationale that drove the inclusion of this particular activity as part of the plan or the reason why the activity was prohibited.
   * - **Comment:** This could be a diagnosis code.  If a full condition record exists or additional detail is needed, use reasonCondition instead.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private reasonCode?: CodeableConcept[] | undefined;

  /**
   * CarePlan.activity.detail.reasonReference Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Why activity is needed
   * - **Definition:** Indicates another resource, such as the health condition(s), whose existence justifies this request and drove the inclusion of this particular activity as part of the plan.
   * - **Comment:** Conditions can be identified at the activity level that are not identified as reasons for the overall plan.
   * - **FHIR Type:** `Reference`
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
  private reasonReference?: Reference[] | undefined;

  /**
   * CarePlan.activity.detail.goal Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Goals this activity relates to
   * - **Definition:** Internal reference that identifies the goals that this activity is intended to contribute towards meeting.
   * - **Requirements:** So that participants know the link explicitly.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Goal',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private goal?: Reference[] | undefined;

  /**
   * FHIR CodeSystem: CarePlanActivityStatus
   *
   * @see {@link CarePlanActivityStatusEnum }
   */
  private readonly carePlanActivityStatusEnum: CarePlanActivityStatusEnum;

  /**
   * CarePlan.activity.detail.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** not-started | scheduled | in-progress | on-hold | completed | cancelled | stopped | unknown | entered-in-error
   * - **Definition:** Identifies what progress is being made for the specific activity.
   * - **Comment:** Some aspects of status can be inferred based on the resources linked in actionTaken.  Note that "status" is only as current as the plan was most recently updated.   The unknown code is not to be used to convey other statuses.  The unknown code should be used when one of the statuses applies, but the authoring system doesn\'t know the current state of the activity.
   * - **Requirements:** Indicates progress against the plan, whether the activity is still relevant for the plan.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** true
   * - **isModifierReason:** This element is labelled as a modifier because it is a status element that contains status entered-in-error which means that the activity should not be treated as valid
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link CarePlanActivityStatusEnum }
   */
  private status: EnumCodeType | null;

  /**
   * CarePlan.activity.detail.statusReason Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Reason for current status
   * - **Definition:** Provides reason why the activity isn\'t yet started, is on hold, was cancelled, etc.
   * - **Comment:** Will generally not be present if status is "complete".  Be sure to prompt to update this (or at least remove the existing value) if the status is changed.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private statusReason?: CodeableConcept | undefined;

  /**
   * CarePlan.activity.detail.doNotPerform Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** If true, activity is prohibiting action
   * - **Definition:** If true, indicates that the described activity is one that must NOT be engaged in when following the plan.  If false, or missing, indicates that the described activity is one that should be engaged in when following the plan.
   * - **Comment:** This element is labeled as a modifier because it marks an activity as an activity that is not to be performed.
   * - **Requirements:** Captures intention to not do something that may have been previously typical.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** true
   * - **isModifierReason:** If true this element negates the specified action. For example, instead of a request for a procedure, it is a request for the procedure to not occur.
   * - **isSummary:** false
   */
  private doNotPerform?: BooleanType | undefined;

  /**
   * CarePlan.activity.detail.scheduled[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('CarePlan.activity.detail.scheduled[x]', ['Timing','Period','string',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When activity is to occur
   * - **Definition:** The period, timing or frequency upon which the described activity is to occur.
   * - **Requirements:** Allows prompting for activities and detection of missed planned activities.
   * - **FHIR Types:**
   *     'Timing',
   *     'Period',
   *     'string',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('CarePlan.activity.detail.scheduled[x]',[
    'Timing',
    'Period',
    'string',
  ])
  private scheduled?: IDataType | undefined;

  /**
   * CarePlan.activity.detail.location Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Where it should happen
   * - **Definition:** Identifies the facility where the activity will occur; e.g. home, hospital, specific clinic, etc.
   * - **Comment:** May reference a specific clinical location or may identify a type of location.
   * - **Requirements:** Helps in planning of activity.
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
   * CarePlan.activity.detail.performer Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who will be responsible?
   * - **Definition:** Identifies who\'s expected to be involved in the activity.
   * - **Comment:** A performer MAY also be a participant in the care plan.
   * - **Requirements:** Helps in planning of activity.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *       'http://hl7.org/fhir/StructureDefinition/RelatedPerson',
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/CareTeam',
   *       'http://hl7.org/fhir/StructureDefinition/HealthcareService',
   *       'http://hl7.org/fhir/StructureDefinition/Device',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private performer?: Reference[] | undefined;

  /**
   * CarePlan.activity.detail.product[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('CarePlan.activity.detail.product[x]', ['CodeableConcept','Reference',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** What is to be administered/supplied
   * - **Definition:** Identifies the food, drug or other product to be consumed or supplied in the activity.
   * - **FHIR Types:**
   *     'CodeableConcept',
   *     'Reference',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('CarePlan.activity.detail.product[x]',[
    'CodeableConcept',
    'Reference',
  ])
  private product?: IDataType | undefined;

  /**
   * CarePlan.activity.detail.dailyAmount Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** How to consume/day?
   * - **Definition:** Identifies the quantity expected to be consumed in a given day.
   * - **Requirements:** Allows rough dose checking.
   * - **FHIR Type:** `Quantity`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private dailyAmount?: Quantity | undefined;

  /**
   * CarePlan.activity.detail.quantity Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** How much to administer/supply/consume
   * - **Definition:** Identifies the quantity expected to be supplied, administered or consumed by the subject.
   * - **FHIR Type:** `Quantity`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private quantity?: Quantity | undefined;

  /**
   * CarePlan.activity.detail.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Extra info describing activity to perform
   * - **Definition:** This provides a textual description of constraints on the intended activity occurrence, including relation to other activities.  It may also include objectives, pre-conditions and end-conditions.  Finally, it may convey specifics about the activity such as body site, method, route, etc.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private description?: StringType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `kind` property value as a EnumCodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link ResourceTypesEnum }
   */
  public getKindEnumType(): EnumCodeType | undefined {
    return this.kind;
  }

  /**
   * Assigns the provided EnumCodeType value to the `kind` property.
   *
   * @param enumType - the `kind` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code values
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link ResourceTypesEnum }
   */
  public setKindEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = 'Invalid CarePlan.activity.detail.kind';
      assertEnumCodeType<ResourceTypesEnum>(enumType, ResourceTypesEnum, errMsgPrefix);
      this.kind = enumType;
    } else {
      this.kind = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `kind` property exists and has a value; `false` otherwise
   */
  public hasKindEnumType(): boolean {
    return isDefined<EnumCodeType>(this.kind) && !this.kind.isEmpty() && this.kind.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `kind` property value as a CodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link ResourceTypesEnum }
   */
  public getKindElement(): CodeType | undefined {
    if (this.kind === undefined) {
      return undefined;
    }
    return this.kind as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `kind` property.
   *
   * @param element - the `kind` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link ResourceTypesEnum }
   */
  public setKindElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid CarePlan.activity.detail.kind; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.kind = new EnumCodeType(element, this.resourceTypesEnum);
    } else {
      this.kind = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `kind` property exists and has a value; `false` otherwise
   */
  public hasKindElement(): boolean {
    return this.hasKindEnumType();
  }

  /**
   * @returns the `kind` property value as a fhirCode if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link ResourceTypesEnum }
   */
  public getKind(): fhirCode | undefined {
    if (this.kind === undefined) {
      return undefined;
    }
    return this.kind.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `kind` property.
   *
   * @param value - the `kind` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link ResourceTypesEnum }
   */
  public setKind(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid CarePlan.activity.detail.kind; Provided value is not an instance of fhirCode.`;
      this.kind = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.resourceTypesEnum);
    } else {
      this.kind = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `kind` property exists and has a value; `false` otherwise
   */
  public hasKind(): boolean {
    return this.hasKindEnumType();
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
      const optErrMsg = `Invalid CarePlan.activity.detail.instantiatesCanonical; Provided value array has an element that is not an instance of CanonicalType.`;
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
      const optErrMsg = `Invalid CarePlan.activity.detail.instantiatesCanonical; Provided element is not an instance of CanonicalType.`;
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
        const optErrMsg = `Invalid CarePlan.activity.detail.instantiatesCanonical array item (${String(instantiatesCanonicalValue)})`;
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
      const optErrMsg = `Invalid CarePlan.activity.detail.instantiatesCanonical array item (${String(value)})`;
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
      const optErrMsg = `Invalid CarePlan.activity.detail.instantiatesUri; Provided value array has an element that is not an instance of UriType.`;
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
      const optErrMsg = `Invalid CarePlan.activity.detail.instantiatesUri; Provided element is not an instance of UriType.`;
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
        const optErrMsg = `Invalid CarePlan.activity.detail.instantiatesUri array item (${String(instantiatesUriValue)})`;
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
      const optErrMsg = `Invalid CarePlan.activity.detail.instantiatesUri array item (${String(value)})`;
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
      const optErrMsg = `Invalid CarePlan.activity.detail.code; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid CarePlan.activity.detail.reasonCode; Provided value array has an element that is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid CarePlan.activity.detail.reasonCode; Provided element is not an instance of CodeableConcept.`;
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
   * @decorator `@ReferenceTargets('CarePlan.activity.detail.reasonReference', ['Condition','Observation','DiagnosticReport','DocumentReference',])`
   *
   * @param value - the `reasonReference` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('CarePlan.activity.detail.reasonReference', [
    'Condition',
  
    'Observation',
  
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
   * @decorator `@ReferenceTargets('CarePlan.activity.detail.reasonReference', ['Condition','Observation','DiagnosticReport','DocumentReference',])`
   *
   * @param value - the `reasonReference` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('CarePlan.activity.detail.reasonReference', [
    'Condition',
  
    'Observation',
  
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
   * @returns the `goal` property value as a Reference array
   */
  public getGoal(): Reference[] {
    return this.goal ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `goal` property.
   *
   * @decorator `@ReferenceTargets('CarePlan.activity.detail.goal', ['Goal',])`
   *
   * @param value - the `goal` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('CarePlan.activity.detail.goal', [
    'Goal',
  ])
  public setGoal(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.goal = value;
    } else {
      this.goal = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `goal` array property.
   *
   * @decorator `@ReferenceTargets('CarePlan.activity.detail.goal', ['Goal',])`
   *
   * @param value - the `goal` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('CarePlan.activity.detail.goal', [
    'Goal',
  ])
  public addGoal(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initGoal();
      this.goal?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `goal` property exists and has a value; `false` otherwise
   */
  public hasGoal(): boolean {
    return isDefinedList<Reference>(this.goal) && this.goal.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `goal` property
   */
  private initGoal(): void {
    if (!this.hasGoal()) {
      this.goal = [] as Reference[];
    }
  }

  /**
   * @returns the `status` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link CarePlanActivityStatusEnum }
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
   * @see CodeSystem Enumeration: {@link CarePlanActivityStatusEnum }
   */
  public setStatusEnumType(enumType: EnumCodeType | undefined | null): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid CarePlan.activity.detail.status`;
      assertEnumCodeType<CarePlanActivityStatusEnum>(enumType, CarePlanActivityStatusEnum, errMsgPrefix);
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
   * @see CodeSystem Enumeration: {@link CarePlanActivityStatusEnum }
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
   * @see CodeSystem Enumeration: {@link CarePlanActivityStatusEnum }
   */
  public setStatusElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid CarePlan.activity.detail.status; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.status = new EnumCodeType(element, this.carePlanActivityStatusEnum);
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
   * @see CodeSystem Enumeration: {@link CarePlanActivityStatusEnum }
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
   * @see CodeSystem Enumeration: {@link CarePlanActivityStatusEnum }
   */
  public setStatus(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid CarePlan.activity.detail.status (${String(value)})`;
      this.status = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.carePlanActivityStatusEnum);
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
   * @returns the `statusReason` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getStatusReason(): CodeableConcept {
    return this.statusReason ?? new CodeableConcept();
  }

  /**
   * Assigns the provided StatusReason object value to the `statusReason` property.
   *
   * @param value - the `statusReason` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setStatusReason(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid CarePlan.activity.detail.statusReason; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.statusReason = value;
    } else {
      this.statusReason = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `statusReason` property exists and has a value; `false` otherwise
   */
  public hasStatusReason(): boolean {
    return isDefined<CodeableConcept>(this.statusReason) && !this.statusReason.isEmpty();
  }

  /**
   * @returns the `doNotPerform` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getDoNotPerformElement(): BooleanType {
    return this.doNotPerform ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `doNotPerform` property.
   *
   * @param element - the `doNotPerform` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDoNotPerformElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid CarePlan.activity.detail.doNotPerform; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.doNotPerform = element;
    } else {
      this.doNotPerform = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `doNotPerform` property exists and has a value; `false` otherwise
   */
  public hasDoNotPerformElement(): boolean {
    return isDefined<BooleanType>(this.doNotPerform) && !this.doNotPerform.isEmpty();
  }

  /**
   * @returns the `doNotPerform` property value as a fhirBoolean if defined; else undefined
   */
  public getDoNotPerform(): fhirBoolean | undefined {
    return this.doNotPerform?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `doNotPerform` property.
   *
   * @param value - the `doNotPerform` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDoNotPerform(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid CarePlan.activity.detail.doNotPerform (${String(value)})`;
      this.doNotPerform = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.doNotPerform = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `doNotPerform` property exists and has a value; `false` otherwise
   */
  public hasDoNotPerform(): boolean {
    return this.hasDoNotPerformElement();
  }

  /**
   * @returns the `scheduled` property value as a DataType object if defined; else undefined
   */
  public getScheduled(): IDataType | undefined {
    return this.scheduled;
  }

  /**
   * Assigns the provided DataType object value to the `scheduled` property.
   *
   * @decorator `@ChoiceDataTypes('CarePlan.activity.detail.scheduled[x]')`
   *
   * @param value - the `scheduled` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('CarePlan.activity.detail.scheduled[x]')
  public setScheduled(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.scheduled = value;
    } else {
      this.scheduled = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `scheduled` property exists and has a value; `false` otherwise
   */
  public hasScheduled(): boolean {
    return isDefined<IDataType>(this.scheduled) && !this.scheduled.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `scheduled` property value as a Timing object if defined; else undefined
   */
  public getScheduledTiming(): Timing | undefined {
    if (!isDefined<IDataType | undefined>(this.scheduled)) {
      return undefined;
    }
    if (!(this.scheduled instanceof Timing)) {
      throw new InvalidTypeError(
        `DataType mismatch for CarePlan.activity.detail.scheduled[x]: Expected Timing but encountered ${this.scheduled.fhirType()}`,
      );
    }
    return this.scheduled;
  }

  /**
   * @returns `true` if the `scheduled` property exists as a Timing and has a value; `false` otherwise
   */
  public hasScheduledTiming(): boolean {
    return this.hasScheduled() && this.scheduled instanceof Timing;
  }

  /**
   * @returns the `scheduled` property value as a Period object if defined; else undefined
   */
  public getScheduledPeriod(): Period | undefined {
    if (!isDefined<IDataType | undefined>(this.scheduled)) {
      return undefined;
    }
    if (!(this.scheduled instanceof Period)) {
      throw new InvalidTypeError(
        `DataType mismatch for CarePlan.activity.detail.scheduled[x]: Expected Period but encountered ${this.scheduled.fhirType()}`,
      );
    }
    return this.scheduled;
  }

  /**
   * @returns `true` if the `scheduled` property exists as a Period and has a value; `false` otherwise
   */
  public hasScheduledPeriod(): boolean {
    return this.hasScheduled() && this.scheduled instanceof Period;
  }

  /**
   * @returns the `scheduled` property value as a StringType object if defined; else undefined
   */
  public getScheduledStringType(): StringType | undefined {
    if (!isDefined<IDataType | undefined>(this.scheduled)) {
      return undefined;
    }
    if (!(this.scheduled instanceof StringType)) {
      throw new InvalidTypeError(
        `DataType mismatch for CarePlan.activity.detail.scheduled[x]: Expected StringType but encountered ${this.scheduled.fhirType()}`,
      );
    }
    return this.scheduled;
  }

  /**
   * @returns `true` if the `scheduled` property exists as a StringType and has a value; `false` otherwise
   */
  public hasScheduledStringType(): boolean {
    return this.hasScheduled() && this.scheduled instanceof StringType;
  }

  // End of choice datatype-specific "get"/"has" methods

  /**
   * @returns the `location` property value as a Reference object; else an empty Reference object
   */
  public getLocation(): Reference {
    return this.location ?? new Reference();
  }

  /**
   * Assigns the provided Location object value to the `location` property.
   *
   * @decorator `@ReferenceTargets('CarePlan.activity.detail.location', ['Location',])`
   *
   * @param value - the `location` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('CarePlan.activity.detail.location', [
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
   * @returns the `performer` property value as a Reference array
   */
  public getPerformer(): Reference[] {
    return this.performer ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `performer` property.
   *
   * @decorator `@ReferenceTargets('CarePlan.activity.detail.performer', ['Practitioner','PractitionerRole','Organization','RelatedPerson','Patient','CareTeam','HealthcareService','Device',])`
   *
   * @param value - the `performer` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('CarePlan.activity.detail.performer', [
    'Practitioner',
  
    'PractitionerRole',
  
    'Organization',
  
    'RelatedPerson',
  
    'Patient',
  
    'CareTeam',
  
    'HealthcareService',
  
    'Device',
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
   * @decorator `@ReferenceTargets('CarePlan.activity.detail.performer', ['Practitioner','PractitionerRole','Organization','RelatedPerson','Patient','CareTeam','HealthcareService','Device',])`
   *
   * @param value - the `performer` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('CarePlan.activity.detail.performer', [
    'Practitioner',
  
    'PractitionerRole',
  
    'Organization',
  
    'RelatedPerson',
  
    'Patient',
  
    'CareTeam',
  
    'HealthcareService',
  
    'Device',
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
   * @returns the `product` property value as a DataType object if defined; else undefined
   */
  public getProduct(): IDataType | undefined {
    return this.product;
  }

  /**
   * Assigns the provided DataType object value to the `product` property.
   *
   * @decorator `@ChoiceDataTypes('CarePlan.activity.detail.product[x]')`
   *
   * @param value - the `product` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('CarePlan.activity.detail.product[x]')
  public setProduct(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.product = value;
    } else {
      this.product = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `product` property exists and has a value; `false` otherwise
   */
  public hasProduct(): boolean {
    return isDefined<IDataType>(this.product) && !this.product.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `product` property value as a CodeableConcept object if defined; else undefined
   */
  public getProductCodeableConcept(): CodeableConcept | undefined {
    if (!isDefined<IDataType | undefined>(this.product)) {
      return undefined;
    }
    if (!(this.product instanceof CodeableConcept)) {
      throw new InvalidTypeError(
        `DataType mismatch for CarePlan.activity.detail.product[x]: Expected CodeableConcept but encountered ${this.product.fhirType()}`,
      );
    }
    return this.product;
  }

  /**
   * @returns `true` if the `product` property exists as a CodeableConcept and has a value; `false` otherwise
   */
  public hasProductCodeableConcept(): boolean {
    return this.hasProduct() && this.product instanceof CodeableConcept;
  }

  /**
   * @returns the `product` property value as a Reference object if defined; else undefined
   */
  public getProductReference(): Reference | undefined {
    if (!isDefined<IDataType | undefined>(this.product)) {
      return undefined;
    }
    if (!(this.product instanceof Reference)) {
      throw new InvalidTypeError(
        `DataType mismatch for CarePlan.activity.detail.product[x]: Expected Reference but encountered ${this.product.fhirType()}`,
      );
    }
    return this.product;
  }

  /**
   * @returns `true` if the `product` property exists as a Reference and has a value; `false` otherwise
   */
  public hasProductReference(): boolean {
    return this.hasProduct() && this.product instanceof Reference;
  }

  // End of choice datatype-specific "get"/"has" methods

  /**
   * @returns the `dailyAmount` property value as a Quantity object if defined; else an empty Quantity object
   */
  public getDailyAmount(): Quantity {
    return this.dailyAmount ?? new Quantity();
  }

  /**
   * Assigns the provided DailyAmount object value to the `dailyAmount` property.
   *
   * @param value - the `dailyAmount` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDailyAmount(value: Quantity | undefined): this {
    if (isDefined<Quantity>(value)) {
      const optErrMsg = `Invalid CarePlan.activity.detail.dailyAmount; Provided element is not an instance of Quantity.`;
      assertFhirType<Quantity>(value, Quantity, optErrMsg);
      this.dailyAmount = value;
    } else {
      this.dailyAmount = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `dailyAmount` property exists and has a value; `false` otherwise
   */
  public hasDailyAmount(): boolean {
    return isDefined<Quantity>(this.dailyAmount) && !this.dailyAmount.isEmpty();
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
      const optErrMsg = `Invalid CarePlan.activity.detail.quantity; Provided element is not an instance of Quantity.`;
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
      const optErrMsg = `Invalid CarePlan.activity.detail.description; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid CarePlan.activity.detail.description (${String(value)})`;
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

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'CarePlan.activity.detail';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.kind,
      this.instantiatesCanonical,
      this.instantiatesUri,
      this.code,
      this.reasonCode,
      this.reasonReference,
      this.goal,
      this.status,
      this.statusReason,
      this.doNotPerform,
      this.scheduled,
      this.location,
      this.performer,
      this.product,
      this.dailyAmount,
      this.quantity,
      this.description,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.status, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): CarePlanActivityDetailComponent {
    const dest = new CarePlanActivityDetailComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: CarePlanActivityDetailComponent): void {
    super.copyValues(dest);
    dest.kind = this.kind?.copy();
    const instantiatesCanonicalList = copyListValues<CanonicalType>(this.instantiatesCanonical);
    dest.instantiatesCanonical = instantiatesCanonicalList.length === 0 ? undefined : instantiatesCanonicalList;
    const instantiatesUriList = copyListValues<UriType>(this.instantiatesUri);
    dest.instantiatesUri = instantiatesUriList.length === 0 ? undefined : instantiatesUriList;
    dest.code = this.code?.copy();
    const reasonCodeList = copyListValues<CodeableConcept>(this.reasonCode);
    dest.reasonCode = reasonCodeList.length === 0 ? undefined : reasonCodeList;
    const reasonReferenceList = copyListValues<Reference>(this.reasonReference);
    dest.reasonReference = reasonReferenceList.length === 0 ? undefined : reasonReferenceList;
    const goalList = copyListValues<Reference>(this.goal);
    dest.goal = goalList.length === 0 ? undefined : goalList;
    dest.status = this.status ? this.status.copy() : null;
    dest.statusReason = this.statusReason?.copy();
    dest.doNotPerform = this.doNotPerform?.copy();
    dest.scheduled = this.scheduled?.copy() as IDataType;
    dest.location = this.location?.copy();
    const performerList = copyListValues<Reference>(this.performer);
    dest.performer = performerList.length === 0 ? undefined : performerList;
    dest.product = this.product?.copy() as IDataType;
    dest.dailyAmount = this.dailyAmount?.copy();
    dest.quantity = this.quantity?.copy();
    dest.description = this.description?.copy();
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

    if (this.hasKindElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getKindElement()!, 'kind', jsonObj);
    }

    if (this.hasInstantiatesCanonical()) {
      setFhirPrimitiveListJson(this.getInstantiatesCanonicalElement(), 'instantiatesCanonical', jsonObj);
    }

    if (this.hasInstantiatesUri()) {
      setFhirPrimitiveListJson(this.getInstantiatesUriElement(), 'instantiatesUri', jsonObj);
    }

    if (this.hasCode()) {
      setFhirComplexJson(this.getCode(), 'code', jsonObj);
    }

    if (this.hasReasonCode()) {
      setFhirComplexListJson(this.getReasonCode(), 'reasonCode', jsonObj);
    }

    if (this.hasReasonReference()) {
      setFhirComplexListJson(this.getReasonReference(), 'reasonReference', jsonObj);
    }

    if (this.hasGoal()) {
      setFhirComplexListJson(this.getGoal(), 'goal', jsonObj);
    }

    if (this.hasStatusElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getStatusElement()!, 'status', jsonObj);
    } else {
      jsonObj['status'] = null;
    }

    if (this.hasStatusReason()) {
      setFhirComplexJson(this.getStatusReason(), 'statusReason', jsonObj);
    }

    if (this.hasDoNotPerformElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getDoNotPerformElement(), 'doNotPerform', jsonObj);
    }

    if (this.hasScheduled()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getScheduled()!, 'scheduled', jsonObj);
    }

    if (this.hasLocation()) {
      setFhirComplexJson(this.getLocation(), 'location', jsonObj);
    }

    if (this.hasPerformer()) {
      setFhirComplexListJson(this.getPerformer(), 'performer', jsonObj);
    }

    if (this.hasProduct()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getProduct()!, 'product', jsonObj);
    }

    if (this.hasDailyAmount()) {
      setFhirComplexJson(this.getDailyAmount(), 'dailyAmount', jsonObj);
    }

    if (this.hasQuantity()) {
      setFhirComplexJson(this.getQuantity(), 'quantity', jsonObj);
    }

    if (this.hasDescriptionElement()) {
      setFhirPrimitiveJson<fhirString>(this.getDescriptionElement(), 'description', jsonObj);
    }

    return jsonObj;
  }
}
