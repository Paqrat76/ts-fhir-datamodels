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
 * NutritionOrder Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/NutritionOrder
 * StructureDefinition.name: NutritionOrder
 * StructureDefinition.description: A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident.
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
import { Annotation, CodeableConcept, CodeableReference, Identifier, PARSABLE_DATATYPE_MAP, Quantity, Ratio, Reference, Timing } from '../complex-types/complex-datatypes';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';
import { RequestIntentEnum } from '../code-systems/RequestIntentEnum';
import { RequestPriorityEnum } from '../code-systems/RequestPriorityEnum';
import { RequestStatusEnum } from '../code-systems/RequestStatusEnum';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Symbol.metadata polyfill secret sauce for decorator metadata
(Symbol.metadata as any) ??= Symbol('Symbol.metadata');

/**
 * NutritionOrder Class
 *
 * @remarks
 * A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident.
 *
 * **FHIR Specification**
 * - **Short:** Diet, formula or nutritional supplement request
 * - **Definition:** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident.
 * - **Comment:** Referenced by an Order Request (workflow).
 * - **FHIR Version:** 5.0.0
 *
 * @category Data Models: Resource
 * @see [FHIR NutritionOrder](http://hl7.org/fhir/StructureDefinition/NutritionOrder)
 */
export class NutritionOrder extends DomainResource implements IDomainResource {
  constructor(status: EnumCodeType | CodeType | fhirCode | null = null, intent: EnumCodeType | CodeType | fhirCode | null = null, subject: Reference | null = null, dateTime: DateTimeType | fhirDateTime | null = null) {
    super();

    this.requestStatusEnum = new RequestStatusEnum();
    this.requestIntentEnum = new RequestIntentEnum();
    this.requestPriorityEnum = new RequestPriorityEnum();

    this.status = constructorCodeValueAsEnumCodeType<RequestStatusEnum>(
      status,
      RequestStatusEnum,
      this.requestStatusEnum,
      'NutritionOrder.status',
    );

    this.intent = constructorCodeValueAsEnumCodeType<RequestIntentEnum>(
      intent,
      RequestIntentEnum,
      this.requestIntentEnum,
      'NutritionOrder.intent',
    );

    this.subject = null;
    if (isDefined<Reference>(subject)) {
      this.setSubject(subject);
    }

    this.dateTime = null;
    if (isDefined<DateTimeType | fhirDateTime>(dateTime)) {
      if (dateTime instanceof PrimitiveType) {
        this.setDateTimeElement(dateTime);
      } else {
        this.setDateTime(dateTime);
      }
    }
  }

  /**
   * Parse the provided `NutritionOrder` JSON to instantiate the NutritionOrder data model.
   *
   * @param sourceJson - JSON representing FHIR `NutritionOrder`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to NutritionOrder
   * @returns NutritionOrder data model or undefined for `NutritionOrder`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): NutritionOrder | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'NutritionOrder';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new NutritionOrder();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'NutritionOrder');
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

    fieldName = 'instantiates';
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
          instance.addInstantiatesElement(datatype);
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

    fieldName = 'groupIdentifier';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Identifier | undefined = Identifier.parse(classJsonObj[fieldName]!, sourceField);
      instance.setGroupIdentifier(datatype);
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

    fieldName = 'priority';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setPriorityElement(datatype);
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

    fieldName = 'supportingInformation';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addSupportingInformation(datatype);
        }
      });
  }

    fieldName = 'dateTime';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setDateTime(null);
      } else {
        instance.setDateTimeElement(datatype);
      }
    } else {
      instance.setDateTime(null);
    }

    fieldName = 'orderer';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setOrderer(datatype);
    }

    fieldName = 'performer';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableReference | undefined = CodeableReference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addPerformer(datatype);
        }
      });
    }

    fieldName = 'allergyIntolerance';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addAllergyIntolerance(datatype);
        }
      });
  }

    fieldName = 'foodPreferenceModifier';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addFoodPreferenceModifier(datatype);
        }
      });
    }

    fieldName = 'excludeFoodModifier';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addExcludeFoodModifier(datatype);
        }
      });
    }

    fieldName = 'outsideFoodAllowed';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setOutsideFoodAllowedElement(datatype);
    }

    fieldName = 'oralDiet';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: NutritionOrderOralDietComponent | undefined = NutritionOrderOralDietComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setOralDiet(component);
    }

    fieldName = 'supplement';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: NutritionOrderSupplementComponent | undefined = NutritionOrderSupplementComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addSupplement(component);
        }
      });
    }

    fieldName = 'enteralFormula';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: NutritionOrderEnteralFormulaComponent | undefined = NutritionOrderEnteralFormulaComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setEnteralFormula(component);
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
   * NutritionOrder.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Identifiers assigned to this order
   * - **Definition:** Identifiers assigned to this order by the order sender or by the order receiver.
   * - **Comment:** The Identifier.type element can be to indicate filler vs. placer if needed.  This is explained in further detail [here](https://hl7.org/fhir/servicerequest.html#notes).
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private identifier?: Identifier[] | undefined;

  /**
   * NutritionOrder.instantiatesCanonical Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Instantiates FHIR protocol or definition
   * - **Definition:** The URL pointing to a FHIR-defined protocol, guideline, orderset or other definition that is adhered to in whole or in part by this NutritionOrder.
   * - **Comment:** Note: This is a business identifier, not a resource identifier (see [discussion](https://hl7.org/fhir/resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
   * - **FHIR Type:** `canonical`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/ActivityDefinition',
   *       'http://hl7.org/fhir/StructureDefinition/PlanDefinition',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private instantiatesCanonical?: CanonicalType[] | undefined;

  /**
   * NutritionOrder.instantiatesUri Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Instantiates external protocol or definition
   * - **Definition:** The URL pointing to an externally maintained protocol, guideline, orderset or other definition that is adhered to in whole or in part by this NutritionOrder.
   * - **Comment:** This might be an HTML page, PDF, etc. or could just be a non-resolvable URI identifier.
   * - **FHIR Type:** `uri`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private instantiatesUri?: UriType[] | undefined;

  /**
   * NutritionOrder.instantiates Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Instantiates protocol or definition
   * - **Definition:** The URL pointing to a protocol, guideline, orderset or other definition that is adhered to in whole or in part by this NutritionOrder.
   * - **FHIR Type:** `uri`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private instantiates?: UriType[] | undefined;

  /**
   * NutritionOrder.basedOn Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** What this order fulfills
   * - **Definition:** A plan or request that is fulfilled in whole or in part by this nutrition order.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/CarePlan',
   *       'http://hl7.org/fhir/StructureDefinition/NutritionOrder',
   *       'http://hl7.org/fhir/StructureDefinition/ServiceRequest',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private basedOn?: Reference[] | undefined;

  /**
   * NutritionOrder.groupIdentifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Composite Request ID
   * - **Definition:** A shared identifier common to all nutrition orders that were authorized more or less simultaneously by a single author, representing the composite or group identifier.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private groupIdentifier?: Identifier | undefined;

  /**
   * FHIR CodeSystem: RequestStatus
   *
   * @see {@link RequestStatusEnum }
   */
  private readonly requestStatusEnum: RequestStatusEnum;

  /**
   * NutritionOrder.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** draft | active | on-hold | revoked | completed | entered-in-error | unknown
   * - **Definition:** The workflow status of the nutrition order/request.
   * - **Comment:** Typically the system placing the order sets the status to "requested". Thereafter, the order is maintained by the receiver that updates the status as the request is handled.  This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
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
   * NutritionOrder.intent Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** proposal | plan | directive | order | original-order | reflex-order | filler-order | instance-order | option
   * - **Definition:** Indicates the level of authority/intentionality associated with the NutrionOrder and where the request fits into the workflow chain.
   * - **Comment:** When resources map to this element, they are free to define as many codes as necessary to cover their space and will map to "proposal, plan or order".  Can have multiple codes that map to one of these.  E.g. "original order", "encoded order", "reflex order" would all map to "order".  Expectation is that the set of codes is mutually exclusive or a strict all-encompassing hierarchy.
   * - **Requirements:** Proposals/recommendations, plans and orders all use the same structure and can exist in the same fulfillment chain.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** true
   * - **isModifierReason:** This element changes the interpretation of all descriptive attributes. For example &quot;the time the request is recommended to occur&quot; vs. &quot;the time the request is authorized to occur&quot; or &quot;who is recommended to perform the request&quot; vs. &quot;who is authorized to perform the request
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link RequestIntentEnum }
   */
  private intent: EnumCodeType | null;

  /**
   * FHIR CodeSystem: RequestPriority
   *
   * @see {@link RequestPriorityEnum }
   */
  private readonly requestPriorityEnum: RequestPriorityEnum;

  /**
   * NutritionOrder.priority Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** routine | urgent | asap | stat
   * - **Definition:** Indicates how quickly the Nutrition Order should be addressed with respect to other        requests.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link RequestPriorityEnum }
   */
  private priority?: EnumCodeType | undefined;

  /**
   * NutritionOrder.subject Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who requires the diet, formula or nutritional supplement
   * - **Definition:** The person or set of individuals who needs the nutrition order for an oral diet, nutritional supplement and/or enteral or formula feeding.
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
   * NutritionOrder.encounter Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The encounter associated with this nutrition order
   * - **Definition:** An encounter that provides additional information about the healthcare context in which this request is made.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Encounter',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private encounter?: Reference | undefined;

  /**
   * NutritionOrder.supportingInformation Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Information to support fulfilling of the nutrition order
   * - **Definition:** Information to support fulfilling (i.e. dispensing or administering) of the nutrition,        for example, patient height and weight).
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Resource',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private supportingInformation?: Reference[] | undefined;

  /**
   * NutritionOrder.dateTime Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Date and time the nutrition order was requested
   * - **Definition:** The date and time that this nutrition order was requested.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private dateTime: DateTimeType | null;

  /**
   * NutritionOrder.orderer Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who ordered the diet, formula or nutritional supplement
   * - **Definition:** The practitioner that holds legal responsibility for ordering the diet, nutritional supplement, or formula feedings.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private orderer?: Reference | undefined;

  /**
   * NutritionOrder.performer Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who is desired to perform the administration of what is being ordered
   * - **Definition:** The specified desired performer of the nutrition order.
   * - **FHIR Type:** `CodeableReference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/CareTeam',
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *       'http://hl7.org/fhir/StructureDefinition/RelatedPerson',
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private performer?: CodeableReference[] | undefined;

  /**
   * NutritionOrder.allergyIntolerance Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** List of the patient\'s food and nutrition-related allergies and intolerances
   * - **Definition:** A link to a record of allergies or intolerances  which should be included in the nutrition order.
   * - **Comment:** Information on a patient\'s food allergies and intolerances to inform healthcare personnel about the type of foods that the patient shouldn\'t receive or consume.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/AllergyIntolerance',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private allergyIntolerance?: Reference[] | undefined;

  /**
   * NutritionOrder.foodPreferenceModifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Order-specific modifier about the type of food that should be given
   * - **Definition:** This modifier is used to convey order-specific modifiers about the type of food that should be given. These can be derived from patient allergies, intolerances, or preferences such as Halal, Vegan or Kosher. This modifier applies to the entire nutrition order inclusive of the oral diet, nutritional supplements and enteral formula feedings.
   * - **Comment:** Information on a patient\'s food preferences that inform healthcare personnel about the food that the patient should receive or consume.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private foodPreferenceModifier?: CodeableConcept[] | undefined;

  /**
   * NutritionOrder.excludeFoodModifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Order-specific modifier about the type of food that should not be given
   * - **Definition:** This modifier is used to convey Order-specific modifier about the type of oral food or oral fluids that should not be given. These can be derived from patient allergies, intolerances, or preferences such as No Red Meat, No Soy or No Wheat or  Gluten-Free.  While it should not be necessary to repeat allergy or intolerance information captured in the referenced AllergyIntolerance resource in the excludeFoodModifier, this element may be used to convey additional specificity related to foods that should be eliminated from the patient\'s diet for any reason.  This modifier applies to the entire nutrition order inclusive of the oral diet, nutritional supplements and enteral formula feedings.
   * - **Comment:** Information on a patient\'s food allergies, intolerances and preferences to inform healthcare personnel about the type  of foods that the patient shouldn\'t receive or consume.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private excludeFoodModifier?: CodeableConcept[] | undefined;

  /**
   * NutritionOrder.outsideFoodAllowed Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Capture when a food item is brought in by the patient and/or family
   * - **Definition:** This modifier is used to convey whether a food item is allowed to be brought in by the patient and/or family.  If set to true, indicates that the receiving system does not need to supply the food item.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private outsideFoodAllowed?: BooleanType | undefined;

  /**
   * NutritionOrder.oralDiet Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Oral diet components
   * - **Definition:** Diet given orally in contrast to enteral (tube) feeding.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private oralDiet?: NutritionOrderOralDietComponent | undefined;

  /**
   * NutritionOrder.supplement Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Supplement components
   * - **Definition:** Oral nutritional products given in order to add further nutritional value to the patient\'s diet.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private supplement?: NutritionOrderSupplementComponent[] | undefined;

  /**
   * NutritionOrder.enteralFormula Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Enteral formula components
   * - **Definition:** Feeding provided through the gastrointestinal tract via a tube, catheter, or stoma that delivers nutrition distal to the oral cavity.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private enteralFormula?: NutritionOrderEnteralFormulaComponent | undefined;

  /**
   * NutritionOrder.note Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Comments
   * - **Definition:** Comments made about the {{title}} by the requester, performer, subject or other participants.
   * - **Comment:** This element SHALL NOT be used to supply free text instructions for the diet which are represented in the `.oralDiet.instruction`, `supplement.instruction`, or `enteralFormula.administrationInstruction` elements.
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
      const optErrMsg = `Invalid NutritionOrder.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid NutritionOrder.identifier; Provided element is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid NutritionOrder.instantiatesCanonical; Provided value array has an element that is not an instance of CanonicalType.`;
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
      const optErrMsg = `Invalid NutritionOrder.instantiatesCanonical; Provided element is not an instance of CanonicalType.`;
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
        const optErrMsg = `Invalid NutritionOrder.instantiatesCanonical array item (${String(instantiatesCanonicalValue)})`;
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
      const optErrMsg = `Invalid NutritionOrder.instantiatesCanonical array item (${String(value)})`;
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
      const optErrMsg = `Invalid NutritionOrder.instantiatesUri; Provided value array has an element that is not an instance of UriType.`;
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
      const optErrMsg = `Invalid NutritionOrder.instantiatesUri; Provided element is not an instance of UriType.`;
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
        const optErrMsg = `Invalid NutritionOrder.instantiatesUri array item (${String(instantiatesUriValue)})`;
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
      const optErrMsg = `Invalid NutritionOrder.instantiatesUri array item (${String(value)})`;
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
   * @returns the `instantiates` property value as a UriType array
   */
  public getInstantiatesElement(): UriType[] {
    return this.instantiates ?? ([] as UriType[]);
  }

  /**
   * Assigns the provided UriType array value to the `instantiates` property.
   *
   * @param element - the `instantiates` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setInstantiatesElement(element: UriType[] | undefined): this {
    if (isDefinedList<UriType>(element)) {
      const optErrMsg = `Invalid NutritionOrder.instantiates; Provided value array has an element that is not an instance of UriType.`;
      assertFhirTypeList<UriType>(element, UriType, optErrMsg);
      this.instantiates = element;
    } else {
      this.instantiates = undefined;
    }
    return this;
  }

  /**
   * Add the provided UriType value to the `instantiates` array property.
   *
   * @param element - the `instantiates` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addInstantiatesElement(element: UriType | undefined): this {
    if (isDefined<UriType>(element)) {
      const optErrMsg = `Invalid NutritionOrder.instantiates; Provided element is not an instance of UriType.`;
      assertFhirType<UriType>(element, UriType, optErrMsg);
      this.initInstantiates();
      this.instantiates?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `instantiates` property exists and has a value; `false` otherwise
   */
  public hasInstantiatesElement(): boolean {
    return isDefinedList<UriType>(this.instantiates) && this.instantiates.some((item: UriType) => !item.isEmpty());
  }

  /**
   * @returns the `instantiates` property value as a fhirUri array
   */
  public getInstantiates(): fhirUri[] {
    this.initInstantiates();
    const instantiatesValues = [] as fhirUri[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.instantiates!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        instantiatesValues.push(value);
      }
    }
    return instantiatesValues;
  }

  /**
   * Assigns the provided primitive value array to the `instantiates` property.
   *
   * @param value - the `instantiates` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setInstantiates(value: fhirUri[] | undefined): this {
    if (isDefinedList<fhirUri>(value)) {
      const instantiatesElements = [] as UriType[];
      for (const instantiatesValue of value) {
        const optErrMsg = `Invalid NutritionOrder.instantiates array item (${String(instantiatesValue)})`;
        const element = new UriType(parseFhirPrimitiveData(instantiatesValue, fhirUriSchema, optErrMsg));
        instantiatesElements.push(element);
      }
      this.instantiates = instantiatesElements;
    } else {
      this.instantiates = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `instantiates` array property.
   *
   * @param value - the `instantiates` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addInstantiates(value: fhirUri | undefined): this {
    if (isDefined<fhirUri>(value)) {
      const optErrMsg = `Invalid NutritionOrder.instantiates array item (${String(value)})`;
      const element = new UriType(parseFhirPrimitiveData(value, fhirUriSchema, optErrMsg));
      this.initInstantiates();
      this.addInstantiatesElement(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `instantiates` property exists and has a value; `false` otherwise
   */
  public hasInstantiates(): boolean {
    return this.hasInstantiatesElement();
  }

  /**
   * Initialize the `instantiates` property
   */
  private initInstantiates(): void {
    if (!this.hasInstantiates()) {
      this.instantiates = [] as UriType[];
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
   * @decorator `@ReferenceTargets('NutritionOrder.basedOn', ['CarePlan','NutritionOrder','ServiceRequest',])`
   *
   * @param value - the `basedOn` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('NutritionOrder.basedOn', [
    'CarePlan',
  
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
   * @decorator `@ReferenceTargets('NutritionOrder.basedOn', ['CarePlan','NutritionOrder','ServiceRequest',])`
   *
   * @param value - the `basedOn` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('NutritionOrder.basedOn', [
    'CarePlan',
  
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
   * @returns the `groupIdentifier` property value as a Identifier object if defined; else an empty Identifier object
   */
  public getGroupIdentifier(): Identifier {
    return this.groupIdentifier ?? new Identifier();
  }

  /**
   * Assigns the provided GroupIdentifier object value to the `groupIdentifier` property.
   *
   * @param value - the `groupIdentifier` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setGroupIdentifier(value: Identifier | undefined): this {
    if (isDefined<Identifier>(value)) {
      const optErrMsg = `Invalid NutritionOrder.groupIdentifier; Provided element is not an instance of Identifier.`;
      assertFhirType<Identifier>(value, Identifier, optErrMsg);
      this.groupIdentifier = value;
    } else {
      this.groupIdentifier = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `groupIdentifier` property exists and has a value; `false` otherwise
   */
  public hasGroupIdentifier(): boolean {
    return isDefined<Identifier>(this.groupIdentifier) && !this.groupIdentifier.isEmpty();
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
      const errMsgPrefix = `Invalid NutritionOrder.status`;
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
      const optErrMsg = `Invalid NutritionOrder.status; Provided value is not an instance of CodeType.`;
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
      const optErrMsg = `Invalid NutritionOrder.status (${String(value)})`;
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
      const errMsgPrefix = `Invalid NutritionOrder.intent`;
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
      const optErrMsg = `Invalid NutritionOrder.intent; Provided value is not an instance of CodeType.`;
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
      const optErrMsg = `Invalid NutritionOrder.intent (${String(value)})`;
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
   * @returns the `priority` property value as a EnumCodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link RequestPriorityEnum }
   */
  public getPriorityEnumType(): EnumCodeType | undefined {
    return this.priority;
  }

  /**
   * Assigns the provided EnumCodeType value to the `priority` property.
   *
   * @param enumType - the `priority` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code values
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link RequestPriorityEnum }
   */
  public setPriorityEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = 'Invalid NutritionOrder.priority';
      assertEnumCodeType<RequestPriorityEnum>(enumType, RequestPriorityEnum, errMsgPrefix);
      this.priority = enumType;
    } else {
      this.priority = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `priority` property exists and has a value; `false` otherwise
   */
  public hasPriorityEnumType(): boolean {
    return isDefined<EnumCodeType>(this.priority) && !this.priority.isEmpty() && this.priority.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `priority` property value as a CodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link RequestPriorityEnum }
   */
  public getPriorityElement(): CodeType | undefined {
    if (this.priority === undefined) {
      return undefined;
    }
    return this.priority as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `priority` property.
   *
   * @param element - the `priority` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link RequestPriorityEnum }
   */
  public setPriorityElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid NutritionOrder.priority; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.priority = new EnumCodeType(element, this.requestPriorityEnum);
    } else {
      this.priority = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `priority` property exists and has a value; `false` otherwise
   */
  public hasPriorityElement(): boolean {
    return this.hasPriorityEnumType();
  }

  /**
   * @returns the `priority` property value as a fhirCode if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link RequestPriorityEnum }
   */
  public getPriority(): fhirCode | undefined {
    if (this.priority === undefined) {
      return undefined;
    }
    return this.priority.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `priority` property.
   *
   * @param value - the `priority` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link RequestPriorityEnum }
   */
  public setPriority(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid NutritionOrder.priority; Provided value is not an instance of fhirCode.`;
      this.priority = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.requestPriorityEnum);
    } else {
      this.priority = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `priority` property exists and has a value; `false` otherwise
   */
  public hasPriority(): boolean {
    return this.hasPriorityEnumType();
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
   * @decorator `@ReferenceTargets('NutritionOrder.subject', ['Patient','Group',])`
   *
   * @param value - the `subject` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('NutritionOrder.subject', [
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
   * @decorator `@ReferenceTargets('NutritionOrder.encounter', ['Encounter',])`
   *
   * @param value - the `encounter` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('NutritionOrder.encounter', [
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
   * @returns the `supportingInformation` property value as a Reference array
   */
  public getSupportingInformation(): Reference[] {
    return this.supportingInformation ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `supportingInformation` property.
   *
   * @decorator `@ReferenceTargets('NutritionOrder.supportingInformation', ['Resource',])`
   *
   * @param value - the `supportingInformation` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('NutritionOrder.supportingInformation', [
    'Resource',
  ])
  public setSupportingInformation(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.supportingInformation = value;
    } else {
      this.supportingInformation = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `supportingInformation` array property.
   *
   * @decorator `@ReferenceTargets('NutritionOrder.supportingInformation', ['Resource',])`
   *
   * @param value - the `supportingInformation` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('NutritionOrder.supportingInformation', [
    'Resource',
  ])
  public addSupportingInformation(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initSupportingInformation();
      this.supportingInformation?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `supportingInformation` property exists and has a value; `false` otherwise
   */
  public hasSupportingInformation(): boolean {
    return isDefinedList<Reference>(this.supportingInformation) && this.supportingInformation.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `supportingInformation` property
   */
  private initSupportingInformation(): void {
    if (!this.hasSupportingInformation()) {
      this.supportingInformation = [] as Reference[];
    }
  }

  /**
   * @returns the `dateTime` property value as a DateTimeType object if defined; else an empty DateTimeType object
   */
  public getDateTimeElement(): DateTimeType {
    return this.dateTime ?? new DateTimeType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `dateTime` property.
   *
   * @param element - the `dateTime` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDateTimeElement(element: DateTimeType | undefined | null): this {
    if (isDefined<DateTimeType>(element)) {
      const optErrMsg = `Invalid NutritionOrder.dateTime; Provided value is not an instance of DateTimeType.`;
      assertFhirType<DateTimeType>(element, DateTimeType, optErrMsg);
      this.dateTime = element;
    } else {
      this.dateTime = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `dateTime` property exists and has a value; `false` otherwise
   */
  public hasDateTimeElement(): boolean {
    return isDefined<DateTimeType>(this.dateTime) && !this.dateTime.isEmpty();
  }

  /**
   * @returns the `dateTime` property value as a fhirDateTime if defined; else null
   */
  public getDateTime(): fhirDateTime | null {
    if (this.dateTime?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.dateTime.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `dateTime` property.
   *
   * @param value - the `dateTime` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDateTime(value: fhirDateTime | undefined | null): this {
    if (isDefined<fhirDateTime>(value)) {
      const optErrMsg = `Invalid NutritionOrder.dateTime (${String(value)})`;
      this.dateTime = new DateTimeType(parseFhirPrimitiveData(value, fhirDateTimeSchema, optErrMsg));
    } else {
      this.dateTime = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `dateTime` property exists and has a value; `false` otherwise
   */
  public hasDateTime(): boolean {
    return this.hasDateTimeElement();
  }

  /**
   * @returns the `orderer` property value as a Reference object; else an empty Reference object
   */
  public getOrderer(): Reference {
    return this.orderer ?? new Reference();
  }

  /**
   * Assigns the provided Orderer object value to the `orderer` property.
   *
   * @decorator `@ReferenceTargets('NutritionOrder.orderer', ['Practitioner','PractitionerRole',])`
   *
   * @param value - the `orderer` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('NutritionOrder.orderer', [
    'Practitioner',
  
    'PractitionerRole',
  ])
  public setOrderer(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.orderer = value;
    } else {
      this.orderer = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `orderer` property exists and has a value; `false` otherwise
   */
  public hasOrderer(): boolean {
    return isDefined<Reference>(this.orderer) && !this.orderer.isEmpty();
  }

  /**
   * @returns the `performer` property value as a CodeableReference array
   */
  public getPerformer(): CodeableReference[] {
    return this.performer ?? ([] as CodeableReference[]);
  }

  /**
   * Assigns the provided CodeableReference array value to the `performer` property.
   *
   * @param value - the `performer` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPerformer(value: CodeableReference[] | undefined): this {
    if (isDefinedList<CodeableReference>(value)) {
      const optErrMsg = `Invalid NutritionOrder.performer; Provided value array has an element that is not an instance of CodeableReference.`;
      assertFhirTypeList<CodeableReference>(value, CodeableReference, optErrMsg);
      this.performer = value;
    } else {
      this.performer = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableReference value to the `performer` array property.
   *
   * @param value - the `performer` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addPerformer(value: CodeableReference | undefined): this {
    if (isDefined<CodeableReference>(value)) {
      const optErrMsg = `Invalid NutritionOrder.performer; Provided element is not an instance of CodeableReference.`;
      assertFhirType<CodeableReference>(value, CodeableReference, optErrMsg);
      this.initPerformer();
      this.performer?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `performer` property exists and has a value; `false` otherwise
   */
  public hasPerformer(): boolean {
    return isDefinedList<CodeableReference>(this.performer) && this.performer.some((item: CodeableReference) => !item.isEmpty());
  }

  /**
   * Initialize the `performer` property
   */
  private initPerformer(): void {
    if(!this.hasPerformer()) {
      this.performer = [] as CodeableReference[];
    }
  }

  /**
   * @returns the `allergyIntolerance` property value as a Reference array
   */
  public getAllergyIntolerance(): Reference[] {
    return this.allergyIntolerance ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `allergyIntolerance` property.
   *
   * @decorator `@ReferenceTargets('NutritionOrder.allergyIntolerance', ['AllergyIntolerance',])`
   *
   * @param value - the `allergyIntolerance` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('NutritionOrder.allergyIntolerance', [
    'AllergyIntolerance',
  ])
  public setAllergyIntolerance(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.allergyIntolerance = value;
    } else {
      this.allergyIntolerance = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `allergyIntolerance` array property.
   *
   * @decorator `@ReferenceTargets('NutritionOrder.allergyIntolerance', ['AllergyIntolerance',])`
   *
   * @param value - the `allergyIntolerance` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('NutritionOrder.allergyIntolerance', [
    'AllergyIntolerance',
  ])
  public addAllergyIntolerance(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initAllergyIntolerance();
      this.allergyIntolerance?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `allergyIntolerance` property exists and has a value; `false` otherwise
   */
  public hasAllergyIntolerance(): boolean {
    return isDefinedList<Reference>(this.allergyIntolerance) && this.allergyIntolerance.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `allergyIntolerance` property
   */
  private initAllergyIntolerance(): void {
    if (!this.hasAllergyIntolerance()) {
      this.allergyIntolerance = [] as Reference[];
    }
  }

  /**
   * @returns the `foodPreferenceModifier` property value as a CodeableConcept array
   */
  public getFoodPreferenceModifier(): CodeableConcept[] {
    return this.foodPreferenceModifier ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `foodPreferenceModifier` property.
   *
   * @param value - the `foodPreferenceModifier` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setFoodPreferenceModifier(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid NutritionOrder.foodPreferenceModifier; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.foodPreferenceModifier = value;
    } else {
      this.foodPreferenceModifier = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `foodPreferenceModifier` array property.
   *
   * @param value - the `foodPreferenceModifier` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addFoodPreferenceModifier(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid NutritionOrder.foodPreferenceModifier; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initFoodPreferenceModifier();
      this.foodPreferenceModifier?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `foodPreferenceModifier` property exists and has a value; `false` otherwise
   */
  public hasFoodPreferenceModifier(): boolean {
    return isDefinedList<CodeableConcept>(this.foodPreferenceModifier) && this.foodPreferenceModifier.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `foodPreferenceModifier` property
   */
  private initFoodPreferenceModifier(): void {
    if(!this.hasFoodPreferenceModifier()) {
      this.foodPreferenceModifier = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `excludeFoodModifier` property value as a CodeableConcept array
   */
  public getExcludeFoodModifier(): CodeableConcept[] {
    return this.excludeFoodModifier ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `excludeFoodModifier` property.
   *
   * @param value - the `excludeFoodModifier` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setExcludeFoodModifier(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid NutritionOrder.excludeFoodModifier; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.excludeFoodModifier = value;
    } else {
      this.excludeFoodModifier = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `excludeFoodModifier` array property.
   *
   * @param value - the `excludeFoodModifier` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addExcludeFoodModifier(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid NutritionOrder.excludeFoodModifier; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initExcludeFoodModifier();
      this.excludeFoodModifier?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `excludeFoodModifier` property exists and has a value; `false` otherwise
   */
  public hasExcludeFoodModifier(): boolean {
    return isDefinedList<CodeableConcept>(this.excludeFoodModifier) && this.excludeFoodModifier.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `excludeFoodModifier` property
   */
  private initExcludeFoodModifier(): void {
    if(!this.hasExcludeFoodModifier()) {
      this.excludeFoodModifier = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `outsideFoodAllowed` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getOutsideFoodAllowedElement(): BooleanType {
    return this.outsideFoodAllowed ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `outsideFoodAllowed` property.
   *
   * @param element - the `outsideFoodAllowed` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setOutsideFoodAllowedElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid NutritionOrder.outsideFoodAllowed; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.outsideFoodAllowed = element;
    } else {
      this.outsideFoodAllowed = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `outsideFoodAllowed` property exists and has a value; `false` otherwise
   */
  public hasOutsideFoodAllowedElement(): boolean {
    return isDefined<BooleanType>(this.outsideFoodAllowed) && !this.outsideFoodAllowed.isEmpty();
  }

  /**
   * @returns the `outsideFoodAllowed` property value as a fhirBoolean if defined; else undefined
   */
  public getOutsideFoodAllowed(): fhirBoolean | undefined {
    return this.outsideFoodAllowed?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `outsideFoodAllowed` property.
   *
   * @param value - the `outsideFoodAllowed` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setOutsideFoodAllowed(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid NutritionOrder.outsideFoodAllowed (${String(value)})`;
      this.outsideFoodAllowed = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.outsideFoodAllowed = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `outsideFoodAllowed` property exists and has a value; `false` otherwise
   */
  public hasOutsideFoodAllowed(): boolean {
    return this.hasOutsideFoodAllowedElement();
  }

  /**
   * @returns the `oralDiet` property value as a NutritionOrderOralDietComponent object if defined; else an empty NutritionOrderOralDietComponent object
   */
  public getOralDiet(): NutritionOrderOralDietComponent {
    return this.oralDiet ?? new NutritionOrderOralDietComponent();
  }

  /**
   * Assigns the provided OralDiet object value to the `oralDiet` property.
   *
   * @param value - the `oralDiet` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setOralDiet(value: NutritionOrderOralDietComponent | undefined): this {
    if (isDefined<NutritionOrderOralDietComponent>(value)) {
      const optErrMsg = `Invalid NutritionOrder.oralDiet; Provided element is not an instance of NutritionOrderOralDietComponent.`;
      assertFhirType<NutritionOrderOralDietComponent>(value, NutritionOrderOralDietComponent, optErrMsg);
      this.oralDiet = value;
    } else {
      this.oralDiet = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `oralDiet` property exists and has a value; `false` otherwise
   */
  public hasOralDiet(): boolean {
    return isDefined<NutritionOrderOralDietComponent>(this.oralDiet) && !this.oralDiet.isEmpty();
  }

  /**
   * @returns the `supplement` property value as a NutritionOrderSupplementComponent array
   */
  public getSupplement(): NutritionOrderSupplementComponent[] {
    return this.supplement ?? ([] as NutritionOrderSupplementComponent[]);
  }

  /**
   * Assigns the provided NutritionOrderSupplementComponent array value to the `supplement` property.
   *
   * @param value - the `supplement` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSupplement(value: NutritionOrderSupplementComponent[] | undefined): this {
    if (isDefinedList<NutritionOrderSupplementComponent>(value)) {
      const optErrMsg = `Invalid NutritionOrder.supplement; Provided value array has an element that is not an instance of NutritionOrderSupplementComponent.`;
      assertFhirTypeList<NutritionOrderSupplementComponent>(value, NutritionOrderSupplementComponent, optErrMsg);
      this.supplement = value;
    } else {
      this.supplement = undefined;
    }
    return this;
  }

  /**
   * Add the provided NutritionOrderSupplementComponent value to the `supplement` array property.
   *
   * @param value - the `supplement` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addSupplement(value: NutritionOrderSupplementComponent | undefined): this {
    if (isDefined<NutritionOrderSupplementComponent>(value)) {
      const optErrMsg = `Invalid NutritionOrder.supplement; Provided element is not an instance of NutritionOrderSupplementComponent.`;
      assertFhirType<NutritionOrderSupplementComponent>(value, NutritionOrderSupplementComponent, optErrMsg);
      this.initSupplement();
      this.supplement?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `supplement` property exists and has a value; `false` otherwise
   */
  public hasSupplement(): boolean {
    return isDefinedList<NutritionOrderSupplementComponent>(this.supplement) && this.supplement.some((item: NutritionOrderSupplementComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `supplement` property
   */
  private initSupplement(): void {
    if(!this.hasSupplement()) {
      this.supplement = [] as NutritionOrderSupplementComponent[];
    }
  }

  /**
   * @returns the `enteralFormula` property value as a NutritionOrderEnteralFormulaComponent object if defined; else an empty NutritionOrderEnteralFormulaComponent object
   */
  public getEnteralFormula(): NutritionOrderEnteralFormulaComponent {
    return this.enteralFormula ?? new NutritionOrderEnteralFormulaComponent();
  }

  /**
   * Assigns the provided EnteralFormula object value to the `enteralFormula` property.
   *
   * @param value - the `enteralFormula` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setEnteralFormula(value: NutritionOrderEnteralFormulaComponent | undefined): this {
    if (isDefined<NutritionOrderEnteralFormulaComponent>(value)) {
      const optErrMsg = `Invalid NutritionOrder.enteralFormula; Provided element is not an instance of NutritionOrderEnteralFormulaComponent.`;
      assertFhirType<NutritionOrderEnteralFormulaComponent>(value, NutritionOrderEnteralFormulaComponent, optErrMsg);
      this.enteralFormula = value;
    } else {
      this.enteralFormula = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `enteralFormula` property exists and has a value; `false` otherwise
   */
  public hasEnteralFormula(): boolean {
    return isDefined<NutritionOrderEnteralFormulaComponent>(this.enteralFormula) && !this.enteralFormula.isEmpty();
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
      const optErrMsg = `Invalid NutritionOrder.note; Provided value array has an element that is not an instance of Annotation.`;
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
      const optErrMsg = `Invalid NutritionOrder.note; Provided element is not an instance of Annotation.`;
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
    return 'NutritionOrder';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identifier,
      this.instantiatesCanonical,
      this.instantiatesUri,
      this.instantiates,
      this.basedOn,
      this.groupIdentifier,
      this.status,
      this.intent,
      this.priority,
      this.subject,
      this.encounter,
      this.supportingInformation,
      this.dateTime,
      this.orderer,
      this.performer,
      this.allergyIntolerance,
      this.foodPreferenceModifier,
      this.excludeFoodModifier,
      this.outsideFoodAllowed,
      this.oralDiet,
      this.supplement,
      this.enteralFormula,
      this.note,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.status, this.intent, this.subject, this.dateTime, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): NutritionOrder {
    const dest = new NutritionOrder();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: NutritionOrder): void {
    super.copyValues(dest);
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    const instantiatesCanonicalList = copyListValues<CanonicalType>(this.instantiatesCanonical);
    dest.instantiatesCanonical = instantiatesCanonicalList.length === 0 ? undefined : instantiatesCanonicalList;
    const instantiatesUriList = copyListValues<UriType>(this.instantiatesUri);
    dest.instantiatesUri = instantiatesUriList.length === 0 ? undefined : instantiatesUriList;
    const instantiatesList = copyListValues<UriType>(this.instantiates);
    dest.instantiates = instantiatesList.length === 0 ? undefined : instantiatesList;
    const basedOnList = copyListValues<Reference>(this.basedOn);
    dest.basedOn = basedOnList.length === 0 ? undefined : basedOnList;
    dest.groupIdentifier = this.groupIdentifier?.copy();
    dest.status = this.status ? this.status.copy() : null;
    dest.intent = this.intent ? this.intent.copy() : null;
    dest.priority = this.priority?.copy();
    dest.subject = this.subject ? this.subject.copy() : null;
    dest.encounter = this.encounter?.copy();
    const supportingInformationList = copyListValues<Reference>(this.supportingInformation);
    dest.supportingInformation = supportingInformationList.length === 0 ? undefined : supportingInformationList;
    dest.dateTime = this.dateTime ? this.dateTime.copy() : null;
    dest.orderer = this.orderer?.copy();
    const performerList = copyListValues<CodeableReference>(this.performer);
    dest.performer = performerList.length === 0 ? undefined : performerList;
    const allergyIntoleranceList = copyListValues<Reference>(this.allergyIntolerance);
    dest.allergyIntolerance = allergyIntoleranceList.length === 0 ? undefined : allergyIntoleranceList;
    const foodPreferenceModifierList = copyListValues<CodeableConcept>(this.foodPreferenceModifier);
    dest.foodPreferenceModifier = foodPreferenceModifierList.length === 0 ? undefined : foodPreferenceModifierList;
    const excludeFoodModifierList = copyListValues<CodeableConcept>(this.excludeFoodModifier);
    dest.excludeFoodModifier = excludeFoodModifierList.length === 0 ? undefined : excludeFoodModifierList;
    dest.outsideFoodAllowed = this.outsideFoodAllowed?.copy();
    dest.oralDiet = this.oralDiet?.copy();
    const supplementList = copyListValues<NutritionOrderSupplementComponent>(this.supplement);
    dest.supplement = supplementList.length === 0 ? undefined : supplementList;
    dest.enteralFormula = this.enteralFormula?.copy();
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

    if (this.hasInstantiates()) {
      setFhirPrimitiveListJson(this.getInstantiatesElement(), 'instantiates', jsonObj);
    }

    if (this.hasBasedOn()) {
      setFhirComplexListJson(this.getBasedOn(), 'basedOn', jsonObj);
    }

    if (this.hasGroupIdentifier()) {
      setFhirComplexJson(this.getGroupIdentifier(), 'groupIdentifier', jsonObj);
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

    if (this.hasPriorityElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getPriorityElement()!, 'priority', jsonObj);
    }

    if (this.hasSubject()) {
      setFhirComplexJson(this.getSubject(), 'subject', jsonObj);
    } else {
      jsonObj['subject'] = null;
    }

    if (this.hasEncounter()) {
      setFhirComplexJson(this.getEncounter(), 'encounter', jsonObj);
    }

    if (this.hasSupportingInformation()) {
      setFhirComplexListJson(this.getSupportingInformation(), 'supportingInformation', jsonObj);
    }

    if (this.hasDateTimeElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getDateTimeElement(), 'dateTime', jsonObj);
    } else {
      jsonObj['dateTime'] = null;
    }

    if (this.hasOrderer()) {
      setFhirComplexJson(this.getOrderer(), 'orderer', jsonObj);
    }

    if (this.hasPerformer()) {
      setFhirComplexListJson(this.getPerformer(), 'performer', jsonObj);
    }

    if (this.hasAllergyIntolerance()) {
      setFhirComplexListJson(this.getAllergyIntolerance(), 'allergyIntolerance', jsonObj);
    }

    if (this.hasFoodPreferenceModifier()) {
      setFhirComplexListJson(this.getFoodPreferenceModifier(), 'foodPreferenceModifier', jsonObj);
    }

    if (this.hasExcludeFoodModifier()) {
      setFhirComplexListJson(this.getExcludeFoodModifier(), 'excludeFoodModifier', jsonObj);
    }

    if (this.hasOutsideFoodAllowedElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getOutsideFoodAllowedElement(), 'outsideFoodAllowed', jsonObj);
    }

    if (this.hasOralDiet()) {
      setFhirBackboneElementJson(this.getOralDiet(), 'oralDiet', jsonObj);
    }

    if (this.hasSupplement()) {
      setFhirBackboneElementListJson(this.getSupplement(), 'supplement', jsonObj);
    }

    if (this.hasEnteralFormula()) {
      setFhirBackboneElementJson(this.getEnteralFormula(), 'enteralFormula', jsonObj);
    }

    if (this.hasNote()) {
      setFhirComplexListJson(this.getNote(), 'note', jsonObj);
    }

    return jsonObj;
  }
}

/**
 * NutritionOrderOralDietComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Oral diet components
 * - **Definition:** Diet given orally in contrast to enteral (tube) feeding.
 *
 * @category Data Models: Resource
 * @see [FHIR NutritionOrder](http://hl7.org/fhir/StructureDefinition/NutritionOrder)
 */
export class NutritionOrderOralDietComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `NutritionOrderOralDietComponent` JSON to instantiate the NutritionOrderOralDietComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `NutritionOrderOralDietComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to NutritionOrderOralDietComponent
   * @returns NutritionOrderOralDietComponent data model or undefined for `NutritionOrderOralDietComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): NutritionOrderOralDietComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'NutritionOrderOralDietComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new NutritionOrderOralDietComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addType(datatype);
        }
      });
    }

    fieldName = 'schedule';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: NutritionOrderOralDietScheduleComponent | undefined = NutritionOrderOralDietScheduleComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setSchedule(component);
    }

    fieldName = 'nutrient';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: NutritionOrderOralDietNutrientComponent | undefined = NutritionOrderOralDietNutrientComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addNutrient(component);
        }
      });
    }

    fieldName = 'texture';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: NutritionOrderOralDietTextureComponent | undefined = NutritionOrderOralDietTextureComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addTexture(component);
        }
      });
    }

    fieldName = 'fluidConsistencyType';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addFluidConsistencyType(datatype);
        }
      });
    }

    fieldName = 'instruction';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setInstructionElement(datatype);
    }

    return instance;
  }

  /**
   * NutritionOrder.oralDiet.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Type of oral diet or diet restrictions that describe what can be consumed orally
   * - **Definition:** The kind of diet or dietary restriction such as fiber restricted diet or diabetic diet.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private type_?: CodeableConcept[] | undefined;

  /**
   * NutritionOrder.oralDiet.schedule Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Scheduling information for oral diets
   * - **Definition:** Schedule information for an oral diet.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private schedule?: NutritionOrderOralDietScheduleComponent | undefined;

  /**
   * NutritionOrder.oralDiet.nutrient Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Required  nutrient modifications
   * - **Definition:** Class that defines the quantity and type of nutrient modifications (for example carbohydrate, fiber or sodium) required for the oral diet.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private nutrient?: NutritionOrderOralDietNutrientComponent[] | undefined;

  /**
   * NutritionOrder.oralDiet.texture Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Required  texture modifications
   * - **Definition:** Class that describes any texture modifications required for the patient to safely consume various types of solid foods.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private texture?: NutritionOrderOralDietTextureComponent[] | undefined;

  /**
   * NutritionOrder.oralDiet.fluidConsistencyType Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The required consistency of fluids and liquids provided to the patient
   * - **Definition:** The required consistency (e.g. honey-thick, nectar-thick, thin, thickened.) of liquids or fluids served to the patient.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private fluidConsistencyType?: CodeableConcept[] | undefined;

  /**
   * NutritionOrder.oralDiet.instruction Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Instructions or additional information about the oral diet
   * - **Definition:** Free text or additional instructions or information pertaining to the oral diet.
   * - **Comment:** Free text dosage instructions can be used for cases where the instructions are too complex to code.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private instruction?: StringType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `type_` property value as a CodeableConcept array
   */
  public getType(): CodeableConcept[] {
    return this.type_ ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `type_` property.
   *
   * @param value - the `type_` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setType(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid NutritionOrder.oralDiet.type; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.type_ = value;
    } else {
      this.type_ = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `type_` array property.
   *
   * @param value - the `type_` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addType(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid NutritionOrder.oralDiet.type; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initType();
      this.type_?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `type_` property exists and has a value; `false` otherwise
   */
  public hasType(): boolean {
    return isDefinedList<CodeableConcept>(this.type_) && this.type_.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `type_` property
   */
  private initType(): void {
    if(!this.hasType()) {
      this.type_ = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `schedule` property value as a NutritionOrderOralDietScheduleComponent object if defined; else an empty NutritionOrderOralDietScheduleComponent object
   */
  public getSchedule(): NutritionOrderOralDietScheduleComponent {
    return this.schedule ?? new NutritionOrderOralDietScheduleComponent();
  }

  /**
   * Assigns the provided Schedule object value to the `schedule` property.
   *
   * @param value - the `schedule` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSchedule(value: NutritionOrderOralDietScheduleComponent | undefined): this {
    if (isDefined<NutritionOrderOralDietScheduleComponent>(value)) {
      const optErrMsg = `Invalid NutritionOrder.oralDiet.schedule; Provided element is not an instance of NutritionOrderOralDietScheduleComponent.`;
      assertFhirType<NutritionOrderOralDietScheduleComponent>(value, NutritionOrderOralDietScheduleComponent, optErrMsg);
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
    return isDefined<NutritionOrderOralDietScheduleComponent>(this.schedule) && !this.schedule.isEmpty();
  }

  /**
   * @returns the `nutrient` property value as a NutritionOrderOralDietNutrientComponent array
   */
  public getNutrient(): NutritionOrderOralDietNutrientComponent[] {
    return this.nutrient ?? ([] as NutritionOrderOralDietNutrientComponent[]);
  }

  /**
   * Assigns the provided NutritionOrderOralDietNutrientComponent array value to the `nutrient` property.
   *
   * @param value - the `nutrient` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setNutrient(value: NutritionOrderOralDietNutrientComponent[] | undefined): this {
    if (isDefinedList<NutritionOrderOralDietNutrientComponent>(value)) {
      const optErrMsg = `Invalid NutritionOrder.oralDiet.nutrient; Provided value array has an element that is not an instance of NutritionOrderOralDietNutrientComponent.`;
      assertFhirTypeList<NutritionOrderOralDietNutrientComponent>(value, NutritionOrderOralDietNutrientComponent, optErrMsg);
      this.nutrient = value;
    } else {
      this.nutrient = undefined;
    }
    return this;
  }

  /**
   * Add the provided NutritionOrderOralDietNutrientComponent value to the `nutrient` array property.
   *
   * @param value - the `nutrient` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addNutrient(value: NutritionOrderOralDietNutrientComponent | undefined): this {
    if (isDefined<NutritionOrderOralDietNutrientComponent>(value)) {
      const optErrMsg = `Invalid NutritionOrder.oralDiet.nutrient; Provided element is not an instance of NutritionOrderOralDietNutrientComponent.`;
      assertFhirType<NutritionOrderOralDietNutrientComponent>(value, NutritionOrderOralDietNutrientComponent, optErrMsg);
      this.initNutrient();
      this.nutrient?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `nutrient` property exists and has a value; `false` otherwise
   */
  public hasNutrient(): boolean {
    return isDefinedList<NutritionOrderOralDietNutrientComponent>(this.nutrient) && this.nutrient.some((item: NutritionOrderOralDietNutrientComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `nutrient` property
   */
  private initNutrient(): void {
    if(!this.hasNutrient()) {
      this.nutrient = [] as NutritionOrderOralDietNutrientComponent[];
    }
  }

  /**
   * @returns the `texture` property value as a NutritionOrderOralDietTextureComponent array
   */
  public getTexture(): NutritionOrderOralDietTextureComponent[] {
    return this.texture ?? ([] as NutritionOrderOralDietTextureComponent[]);
  }

  /**
   * Assigns the provided NutritionOrderOralDietTextureComponent array value to the `texture` property.
   *
   * @param value - the `texture` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setTexture(value: NutritionOrderOralDietTextureComponent[] | undefined): this {
    if (isDefinedList<NutritionOrderOralDietTextureComponent>(value)) {
      const optErrMsg = `Invalid NutritionOrder.oralDiet.texture; Provided value array has an element that is not an instance of NutritionOrderOralDietTextureComponent.`;
      assertFhirTypeList<NutritionOrderOralDietTextureComponent>(value, NutritionOrderOralDietTextureComponent, optErrMsg);
      this.texture = value;
    } else {
      this.texture = undefined;
    }
    return this;
  }

  /**
   * Add the provided NutritionOrderOralDietTextureComponent value to the `texture` array property.
   *
   * @param value - the `texture` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addTexture(value: NutritionOrderOralDietTextureComponent | undefined): this {
    if (isDefined<NutritionOrderOralDietTextureComponent>(value)) {
      const optErrMsg = `Invalid NutritionOrder.oralDiet.texture; Provided element is not an instance of NutritionOrderOralDietTextureComponent.`;
      assertFhirType<NutritionOrderOralDietTextureComponent>(value, NutritionOrderOralDietTextureComponent, optErrMsg);
      this.initTexture();
      this.texture?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `texture` property exists and has a value; `false` otherwise
   */
  public hasTexture(): boolean {
    return isDefinedList<NutritionOrderOralDietTextureComponent>(this.texture) && this.texture.some((item: NutritionOrderOralDietTextureComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `texture` property
   */
  private initTexture(): void {
    if(!this.hasTexture()) {
      this.texture = [] as NutritionOrderOralDietTextureComponent[];
    }
  }

  /**
   * @returns the `fluidConsistencyType` property value as a CodeableConcept array
   */
  public getFluidConsistencyType(): CodeableConcept[] {
    return this.fluidConsistencyType ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `fluidConsistencyType` property.
   *
   * @param value - the `fluidConsistencyType` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setFluidConsistencyType(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid NutritionOrder.oralDiet.fluidConsistencyType; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.fluidConsistencyType = value;
    } else {
      this.fluidConsistencyType = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `fluidConsistencyType` array property.
   *
   * @param value - the `fluidConsistencyType` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addFluidConsistencyType(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid NutritionOrder.oralDiet.fluidConsistencyType; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initFluidConsistencyType();
      this.fluidConsistencyType?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `fluidConsistencyType` property exists and has a value; `false` otherwise
   */
  public hasFluidConsistencyType(): boolean {
    return isDefinedList<CodeableConcept>(this.fluidConsistencyType) && this.fluidConsistencyType.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `fluidConsistencyType` property
   */
  private initFluidConsistencyType(): void {
    if(!this.hasFluidConsistencyType()) {
      this.fluidConsistencyType = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `instruction` property value as a StringType object if defined; else an empty StringType object
   */
  public getInstructionElement(): StringType {
    return this.instruction ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `instruction` property.
   *
   * @param element - the `instruction` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setInstructionElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid NutritionOrder.oralDiet.instruction; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.instruction = element;
    } else {
      this.instruction = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `instruction` property exists and has a value; `false` otherwise
   */
  public hasInstructionElement(): boolean {
    return isDefined<StringType>(this.instruction) && !this.instruction.isEmpty();
  }

  /**
   * @returns the `instruction` property value as a fhirString if defined; else undefined
   */
  public getInstruction(): fhirString | undefined {
    return this.instruction?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `instruction` property.
   *
   * @param value - the `instruction` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setInstruction(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid NutritionOrder.oralDiet.instruction (${String(value)})`;
      this.instruction = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.instruction = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `instruction` property exists and has a value; `false` otherwise
   */
  public hasInstruction(): boolean {
    return this.hasInstructionElement();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'NutritionOrder.oralDiet';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.type_,
      this.schedule,
      this.nutrient,
      this.texture,
      this.fluidConsistencyType,
      this.instruction,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): NutritionOrderOralDietComponent {
    const dest = new NutritionOrderOralDietComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: NutritionOrderOralDietComponent): void {
    super.copyValues(dest);
    const typeList = copyListValues<CodeableConcept>(this.type_);
    dest.type_ = typeList.length === 0 ? undefined : typeList;
    dest.schedule = this.schedule?.copy();
    const nutrientList = copyListValues<NutritionOrderOralDietNutrientComponent>(this.nutrient);
    dest.nutrient = nutrientList.length === 0 ? undefined : nutrientList;
    const textureList = copyListValues<NutritionOrderOralDietTextureComponent>(this.texture);
    dest.texture = textureList.length === 0 ? undefined : textureList;
    const fluidConsistencyTypeList = copyListValues<CodeableConcept>(this.fluidConsistencyType);
    dest.fluidConsistencyType = fluidConsistencyTypeList.length === 0 ? undefined : fluidConsistencyTypeList;
    dest.instruction = this.instruction?.copy();
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
      setFhirComplexListJson(this.getType(), 'type', jsonObj);
    }

    if (this.hasSchedule()) {
      setFhirBackboneElementJson(this.getSchedule(), 'schedule', jsonObj);
    }

    if (this.hasNutrient()) {
      setFhirBackboneElementListJson(this.getNutrient(), 'nutrient', jsonObj);
    }

    if (this.hasTexture()) {
      setFhirBackboneElementListJson(this.getTexture(), 'texture', jsonObj);
    }

    if (this.hasFluidConsistencyType()) {
      setFhirComplexListJson(this.getFluidConsistencyType(), 'fluidConsistencyType', jsonObj);
    }

    if (this.hasInstructionElement()) {
      setFhirPrimitiveJson<fhirString>(this.getInstructionElement(), 'instruction', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * NutritionOrderOralDietScheduleComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Scheduling information for oral diets
 * - **Definition:** Schedule information for an oral diet.
 *
 * @category Data Models: Resource
 * @see [FHIR NutritionOrder](http://hl7.org/fhir/StructureDefinition/NutritionOrder)
 */
export class NutritionOrderOralDietScheduleComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `NutritionOrderOralDietScheduleComponent` JSON to instantiate the NutritionOrderOralDietScheduleComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `NutritionOrderOralDietScheduleComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to NutritionOrderOralDietScheduleComponent
   * @returns NutritionOrderOralDietScheduleComponent data model or undefined for `NutritionOrderOralDietScheduleComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): NutritionOrderOralDietScheduleComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'NutritionOrderOralDietScheduleComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new NutritionOrderOralDietScheduleComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    fieldName = 'timing';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Timing | undefined = Timing.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addTiming(datatype);
        }
      });
    }

    fieldName = 'asNeeded';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setAsNeededElement(datatype);
    }

    fieldName = 'asNeededFor';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setAsNeededFor(datatype);
    }

    return instance;
  }

  /**
   * NutritionOrder.oralDiet.schedule.timing Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Scheduled frequency of diet
   * - **Definition:** The time period and frequency at which the diet should be given.  The diet should be given for the combination of all schedules if more than one schedule is present.
   * - **FHIR Type:** `Timing`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private timing?: Timing[] | undefined;

  /**
   * NutritionOrder.oralDiet.schedule.asNeeded Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Take \'as needed\'
   * - **Definition:** Indicates whether the product is only taken when needed within a specific dosing schedule.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private asNeeded?: BooleanType | undefined;

  /**
   * NutritionOrder.oralDiet.schedule.asNeededFor Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Take \'as needed\' for x
   * - **Definition:** Indicates whether the product is only taken based on a precondition for taking the product.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private asNeededFor?: CodeableConcept | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `timing` property value as a Timing array
   */
  public getTiming(): Timing[] {
    return this.timing ?? ([] as Timing[]);
  }

  /**
   * Assigns the provided Timing array value to the `timing` property.
   *
   * @param value - the `timing` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setTiming(value: Timing[] | undefined): this {
    if (isDefinedList<Timing>(value)) {
      const optErrMsg = `Invalid NutritionOrder.oralDiet.schedule.timing; Provided value array has an element that is not an instance of Timing.`;
      assertFhirTypeList<Timing>(value, Timing, optErrMsg);
      this.timing = value;
    } else {
      this.timing = undefined;
    }
    return this;
  }

  /**
   * Add the provided Timing value to the `timing` array property.
   *
   * @param value - the `timing` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addTiming(value: Timing | undefined): this {
    if (isDefined<Timing>(value)) {
      const optErrMsg = `Invalid NutritionOrder.oralDiet.schedule.timing; Provided element is not an instance of Timing.`;
      assertFhirType<Timing>(value, Timing, optErrMsg);
      this.initTiming();
      this.timing?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `timing` property exists and has a value; `false` otherwise
   */
  public hasTiming(): boolean {
    return isDefinedList<Timing>(this.timing) && this.timing.some((item: Timing) => !item.isEmpty());
  }

  /**
   * Initialize the `timing` property
   */
  private initTiming(): void {
    if(!this.hasTiming()) {
      this.timing = [] as Timing[];
    }
  }

  /**
   * @returns the `asNeeded` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getAsNeededElement(): BooleanType {
    return this.asNeeded ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `asNeeded` property.
   *
   * @param element - the `asNeeded` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAsNeededElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid NutritionOrder.oralDiet.schedule.asNeeded; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.asNeeded = element;
    } else {
      this.asNeeded = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `asNeeded` property exists and has a value; `false` otherwise
   */
  public hasAsNeededElement(): boolean {
    return isDefined<BooleanType>(this.asNeeded) && !this.asNeeded.isEmpty();
  }

  /**
   * @returns the `asNeeded` property value as a fhirBoolean if defined; else undefined
   */
  public getAsNeeded(): fhirBoolean | undefined {
    return this.asNeeded?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `asNeeded` property.
   *
   * @param value - the `asNeeded` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAsNeeded(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid NutritionOrder.oralDiet.schedule.asNeeded (${String(value)})`;
      this.asNeeded = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.asNeeded = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `asNeeded` property exists and has a value; `false` otherwise
   */
  public hasAsNeeded(): boolean {
    return this.hasAsNeededElement();
  }

  /**
   * @returns the `asNeededFor` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getAsNeededFor(): CodeableConcept {
    return this.asNeededFor ?? new CodeableConcept();
  }

  /**
   * Assigns the provided AsNeededFor object value to the `asNeededFor` property.
   *
   * @param value - the `asNeededFor` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAsNeededFor(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid NutritionOrder.oralDiet.schedule.asNeededFor; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.asNeededFor = value;
    } else {
      this.asNeededFor = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `asNeededFor` property exists and has a value; `false` otherwise
   */
  public hasAsNeededFor(): boolean {
    return isDefined<CodeableConcept>(this.asNeededFor) && !this.asNeededFor.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'NutritionOrder.oralDiet.schedule';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.timing,
      this.asNeeded,
      this.asNeededFor,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): NutritionOrderOralDietScheduleComponent {
    const dest = new NutritionOrderOralDietScheduleComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: NutritionOrderOralDietScheduleComponent): void {
    super.copyValues(dest);
    const timingList = copyListValues<Timing>(this.timing);
    dest.timing = timingList.length === 0 ? undefined : timingList;
    dest.asNeeded = this.asNeeded?.copy();
    dest.asNeededFor = this.asNeededFor?.copy();
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

    if (this.hasTiming()) {
      setFhirComplexListJson(this.getTiming(), 'timing', jsonObj);
    }

    if (this.hasAsNeededElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getAsNeededElement(), 'asNeeded', jsonObj);
    }

    if (this.hasAsNeededFor()) {
      setFhirComplexJson(this.getAsNeededFor(), 'asNeededFor', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * NutritionOrderOralDietNutrientComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Required  nutrient modifications
 * - **Definition:** Class that defines the quantity and type of nutrient modifications (for example carbohydrate, fiber or sodium) required for the oral diet.
 *
 * @category Data Models: Resource
 * @see [FHIR NutritionOrder](http://hl7.org/fhir/StructureDefinition/NutritionOrder)
 */
export class NutritionOrderOralDietNutrientComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `NutritionOrderOralDietNutrientComponent` JSON to instantiate the NutritionOrderOralDietNutrientComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `NutritionOrderOralDietNutrientComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to NutritionOrderOralDietNutrientComponent
   * @returns NutritionOrderOralDietNutrientComponent data model or undefined for `NutritionOrderOralDietNutrientComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): NutritionOrderOralDietNutrientComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'NutritionOrderOralDietNutrientComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new NutritionOrderOralDietNutrientComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    fieldName = 'modifier';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setModifier(datatype);
    }

    fieldName = 'amount';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Quantity | undefined = Quantity.parse(classJsonObj[fieldName]!, sourceField);
      instance.setAmount(datatype);
    }

    return instance;
  }

  /**
   * NutritionOrder.oralDiet.nutrient.modifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Type of nutrient that is being modified
   * - **Definition:** The nutrient that is being modified such as carbohydrate or sodium.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private modifier?: CodeableConcept | undefined;

  /**
   * NutritionOrder.oralDiet.nutrient.amount Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Quantity of the specified nutrient
   * - **Definition:** The quantity of the specified nutrient to include in diet.
   * - **FHIR Type:** `Quantity`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private amount?: Quantity | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `modifier` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getModifier(): CodeableConcept {
    return this.modifier ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Modifier object value to the `modifier` property.
   *
   * @param value - the `modifier` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setModifier(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid NutritionOrder.oralDiet.nutrient.modifier; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.modifier = value;
    } else {
      this.modifier = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `modifier` property exists and has a value; `false` otherwise
   */
  public hasModifier(): boolean {
    return isDefined<CodeableConcept>(this.modifier) && !this.modifier.isEmpty();
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
      const optErrMsg = `Invalid NutritionOrder.oralDiet.nutrient.amount; Provided element is not an instance of Quantity.`;
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

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'NutritionOrder.oralDiet.nutrient';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.modifier,
      this.amount,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): NutritionOrderOralDietNutrientComponent {
    const dest = new NutritionOrderOralDietNutrientComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: NutritionOrderOralDietNutrientComponent): void {
    super.copyValues(dest);
    dest.modifier = this.modifier?.copy();
    dest.amount = this.amount?.copy();
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

    if (this.hasModifier()) {
      setFhirComplexJson(this.getModifier(), 'modifier', jsonObj);
    }

    if (this.hasAmount()) {
      setFhirComplexJson(this.getAmount(), 'amount', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * NutritionOrderOralDietTextureComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Required  texture modifications
 * - **Definition:** Class that describes any texture modifications required for the patient to safely consume various types of solid foods.
 *
 * @category Data Models: Resource
 * @see [FHIR NutritionOrder](http://hl7.org/fhir/StructureDefinition/NutritionOrder)
 */
export class NutritionOrderOralDietTextureComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `NutritionOrderOralDietTextureComponent` JSON to instantiate the NutritionOrderOralDietTextureComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `NutritionOrderOralDietTextureComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to NutritionOrderOralDietTextureComponent
   * @returns NutritionOrderOralDietTextureComponent data model or undefined for `NutritionOrderOralDietTextureComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): NutritionOrderOralDietTextureComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'NutritionOrderOralDietTextureComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new NutritionOrderOralDietTextureComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    fieldName = 'modifier';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setModifier(datatype);
    }

    fieldName = 'foodType';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setFoodType(datatype);
    }

    return instance;
  }

  /**
   * NutritionOrder.oralDiet.texture.modifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Code to indicate how to alter the texture of the foods, e.g. pureed
   * - **Definition:** Any texture modifications (for solid foods) that should be made, e.g. easy to chew, chopped, ground, and pureed.
   * - **Comment:** Coupled with the foodType (Meat).
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private modifier?: CodeableConcept | undefined;

  /**
   * NutritionOrder.oralDiet.texture.foodType Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Concepts that are used to identify an entity that is ingested for nutritional purposes
   * - **Definition:** The food type(s) (e.g. meats, all foods)  that the texture modification applies to.  This could be all foods types.
   * - **Comment:** Coupled with the `texture.modifier`; could be (All Foods).
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private foodType?: CodeableConcept | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `modifier` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getModifier(): CodeableConcept {
    return this.modifier ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Modifier object value to the `modifier` property.
   *
   * @param value - the `modifier` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setModifier(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid NutritionOrder.oralDiet.texture.modifier; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.modifier = value;
    } else {
      this.modifier = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `modifier` property exists and has a value; `false` otherwise
   */
  public hasModifier(): boolean {
    return isDefined<CodeableConcept>(this.modifier) && !this.modifier.isEmpty();
  }

  /**
   * @returns the `foodType` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getFoodType(): CodeableConcept {
    return this.foodType ?? new CodeableConcept();
  }

  /**
   * Assigns the provided FoodType object value to the `foodType` property.
   *
   * @param value - the `foodType` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setFoodType(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid NutritionOrder.oralDiet.texture.foodType; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.foodType = value;
    } else {
      this.foodType = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `foodType` property exists and has a value; `false` otherwise
   */
  public hasFoodType(): boolean {
    return isDefined<CodeableConcept>(this.foodType) && !this.foodType.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'NutritionOrder.oralDiet.texture';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.modifier,
      this.foodType,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): NutritionOrderOralDietTextureComponent {
    const dest = new NutritionOrderOralDietTextureComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: NutritionOrderOralDietTextureComponent): void {
    super.copyValues(dest);
    dest.modifier = this.modifier?.copy();
    dest.foodType = this.foodType?.copy();
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

    if (this.hasModifier()) {
      setFhirComplexJson(this.getModifier(), 'modifier', jsonObj);
    }

    if (this.hasFoodType()) {
      setFhirComplexJson(this.getFoodType(), 'foodType', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * NutritionOrderSupplementComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Supplement components
 * - **Definition:** Oral nutritional products given in order to add further nutritional value to the patient\'s diet.
 *
 * @category Data Models: Resource
 * @see [FHIR NutritionOrder](http://hl7.org/fhir/StructureDefinition/NutritionOrder)
 */
export class NutritionOrderSupplementComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `NutritionOrderSupplementComponent` JSON to instantiate the NutritionOrderSupplementComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `NutritionOrderSupplementComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to NutritionOrderSupplementComponent
   * @returns NutritionOrderSupplementComponent data model or undefined for `NutritionOrderSupplementComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): NutritionOrderSupplementComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'NutritionOrderSupplementComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new NutritionOrderSupplementComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableReference | undefined = CodeableReference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setType(datatype);
    }

    fieldName = 'productName';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setProductNameElement(datatype);
    }

    fieldName = 'schedule';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: NutritionOrderSupplementScheduleComponent | undefined = NutritionOrderSupplementScheduleComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setSchedule(component);
    }

    fieldName = 'quantity';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Quantity | undefined = Quantity.parse(classJsonObj[fieldName]!, sourceField);
      instance.setQuantity(datatype);
    }

    fieldName = 'instruction';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setInstructionElement(datatype);
    }

    return instance;
  }

  /**
   * NutritionOrder.supplement.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Type of supplement product requested
   * - **Definition:** The kind of nutritional supplement product required such as a high protein or pediatric clear liquid supplement.
   * - **FHIR Type:** `CodeableReference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/NutritionProduct',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private type_?: CodeableReference | undefined;

  /**
   * NutritionOrder.supplement.productName Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Product or brand name of the nutritional supplement
   * - **Definition:** The product or brand name of the nutritional supplement such as "Acme Protein Shake".
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private productName?: StringType | undefined;

  /**
   * NutritionOrder.supplement.schedule Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Scheduling information for supplements
   * - **Definition:** Schedule information for a supplement.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private schedule?: NutritionOrderSupplementScheduleComponent | undefined;

  /**
   * NutritionOrder.supplement.quantity Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Amount of the nutritional supplement
   * - **Definition:** The amount of the nutritional supplement to be given.
   * - **FHIR Type:** `Quantity`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private quantity?: Quantity | undefined;

  /**
   * NutritionOrder.supplement.instruction Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Instructions or additional information about the oral supplement
   * - **Definition:** Free text or additional instructions or information pertaining to the oral supplement.
   * - **Comment:** Free text dosage instructions can be used for cases where the instructions are too complex to code.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private instruction?: StringType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `type_` property value as a CodeableReference object if defined; else an empty CodeableReference object
   */
  public getType(): CodeableReference {
    return this.type_ ?? new CodeableReference();
  }

  /**
   * Assigns the provided Type object value to the `type_` property.
   *
   * @param value - the `type_` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setType(value: CodeableReference | undefined): this {
    if (isDefined<CodeableReference>(value)) {
      const optErrMsg = `Invalid NutritionOrder.supplement.type; Provided element is not an instance of CodeableReference.`;
      assertFhirType<CodeableReference>(value, CodeableReference, optErrMsg);
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
    return isDefined<CodeableReference>(this.type_) && !this.type_.isEmpty();
  }

  /**
   * @returns the `productName` property value as a StringType object if defined; else an empty StringType object
   */
  public getProductNameElement(): StringType {
    return this.productName ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `productName` property.
   *
   * @param element - the `productName` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setProductNameElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid NutritionOrder.supplement.productName; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.productName = element;
    } else {
      this.productName = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `productName` property exists and has a value; `false` otherwise
   */
  public hasProductNameElement(): boolean {
    return isDefined<StringType>(this.productName) && !this.productName.isEmpty();
  }

  /**
   * @returns the `productName` property value as a fhirString if defined; else undefined
   */
  public getProductName(): fhirString | undefined {
    return this.productName?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `productName` property.
   *
   * @param value - the `productName` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setProductName(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid NutritionOrder.supplement.productName (${String(value)})`;
      this.productName = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.productName = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `productName` property exists and has a value; `false` otherwise
   */
  public hasProductName(): boolean {
    return this.hasProductNameElement();
  }

  /**
   * @returns the `schedule` property value as a NutritionOrderSupplementScheduleComponent object if defined; else an empty NutritionOrderSupplementScheduleComponent object
   */
  public getSchedule(): NutritionOrderSupplementScheduleComponent {
    return this.schedule ?? new NutritionOrderSupplementScheduleComponent();
  }

  /**
   * Assigns the provided Schedule object value to the `schedule` property.
   *
   * @param value - the `schedule` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSchedule(value: NutritionOrderSupplementScheduleComponent | undefined): this {
    if (isDefined<NutritionOrderSupplementScheduleComponent>(value)) {
      const optErrMsg = `Invalid NutritionOrder.supplement.schedule; Provided element is not an instance of NutritionOrderSupplementScheduleComponent.`;
      assertFhirType<NutritionOrderSupplementScheduleComponent>(value, NutritionOrderSupplementScheduleComponent, optErrMsg);
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
    return isDefined<NutritionOrderSupplementScheduleComponent>(this.schedule) && !this.schedule.isEmpty();
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
      const optErrMsg = `Invalid NutritionOrder.supplement.quantity; Provided element is not an instance of Quantity.`;
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
   * @returns the `instruction` property value as a StringType object if defined; else an empty StringType object
   */
  public getInstructionElement(): StringType {
    return this.instruction ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `instruction` property.
   *
   * @param element - the `instruction` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setInstructionElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid NutritionOrder.supplement.instruction; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.instruction = element;
    } else {
      this.instruction = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `instruction` property exists and has a value; `false` otherwise
   */
  public hasInstructionElement(): boolean {
    return isDefined<StringType>(this.instruction) && !this.instruction.isEmpty();
  }

  /**
   * @returns the `instruction` property value as a fhirString if defined; else undefined
   */
  public getInstruction(): fhirString | undefined {
    return this.instruction?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `instruction` property.
   *
   * @param value - the `instruction` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setInstruction(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid NutritionOrder.supplement.instruction (${String(value)})`;
      this.instruction = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.instruction = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `instruction` property exists and has a value; `false` otherwise
   */
  public hasInstruction(): boolean {
    return this.hasInstructionElement();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'NutritionOrder.supplement';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.type_,
      this.productName,
      this.schedule,
      this.quantity,
      this.instruction,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): NutritionOrderSupplementComponent {
    const dest = new NutritionOrderSupplementComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: NutritionOrderSupplementComponent): void {
    super.copyValues(dest);
    dest.type_ = this.type_?.copy();
    dest.productName = this.productName?.copy();
    dest.schedule = this.schedule?.copy();
    dest.quantity = this.quantity?.copy();
    dest.instruction = this.instruction?.copy();
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

    if (this.hasProductNameElement()) {
      setFhirPrimitiveJson<fhirString>(this.getProductNameElement(), 'productName', jsonObj);
    }

    if (this.hasSchedule()) {
      setFhirBackboneElementJson(this.getSchedule(), 'schedule', jsonObj);
    }

    if (this.hasQuantity()) {
      setFhirComplexJson(this.getQuantity(), 'quantity', jsonObj);
    }

    if (this.hasInstructionElement()) {
      setFhirPrimitiveJson<fhirString>(this.getInstructionElement(), 'instruction', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * NutritionOrderSupplementScheduleComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Scheduling information for supplements
 * - **Definition:** Schedule information for a supplement.
 *
 * @category Data Models: Resource
 * @see [FHIR NutritionOrder](http://hl7.org/fhir/StructureDefinition/NutritionOrder)
 */
export class NutritionOrderSupplementScheduleComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `NutritionOrderSupplementScheduleComponent` JSON to instantiate the NutritionOrderSupplementScheduleComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `NutritionOrderSupplementScheduleComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to NutritionOrderSupplementScheduleComponent
   * @returns NutritionOrderSupplementScheduleComponent data model or undefined for `NutritionOrderSupplementScheduleComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): NutritionOrderSupplementScheduleComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'NutritionOrderSupplementScheduleComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new NutritionOrderSupplementScheduleComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    fieldName = 'timing';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Timing | undefined = Timing.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addTiming(datatype);
        }
      });
    }

    fieldName = 'asNeeded';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setAsNeededElement(datatype);
    }

    fieldName = 'asNeededFor';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setAsNeededFor(datatype);
    }

    return instance;
  }

  /**
   * NutritionOrder.supplement.schedule.timing Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Scheduled frequency of diet
   * - **Definition:** The time period and frequency at which the supplement should be given.  The supplement should be given for the combination of all schedules if more than one schedule is present.
   * - **FHIR Type:** `Timing`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private timing?: Timing[] | undefined;

  /**
   * NutritionOrder.supplement.schedule.asNeeded Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Take \'as needed\'
   * - **Definition:** Indicates whether the supplement is only taken when needed within a specific dosing schedule.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private asNeeded?: BooleanType | undefined;

  /**
   * NutritionOrder.supplement.schedule.asNeededFor Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Take \'as needed\' for x
   * - **Definition:** Indicates whether the supplement is only taken based on a precondition for taking the supplement.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private asNeededFor?: CodeableConcept | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `timing` property value as a Timing array
   */
  public getTiming(): Timing[] {
    return this.timing ?? ([] as Timing[]);
  }

  /**
   * Assigns the provided Timing array value to the `timing` property.
   *
   * @param value - the `timing` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setTiming(value: Timing[] | undefined): this {
    if (isDefinedList<Timing>(value)) {
      const optErrMsg = `Invalid NutritionOrder.supplement.schedule.timing; Provided value array has an element that is not an instance of Timing.`;
      assertFhirTypeList<Timing>(value, Timing, optErrMsg);
      this.timing = value;
    } else {
      this.timing = undefined;
    }
    return this;
  }

  /**
   * Add the provided Timing value to the `timing` array property.
   *
   * @param value - the `timing` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addTiming(value: Timing | undefined): this {
    if (isDefined<Timing>(value)) {
      const optErrMsg = `Invalid NutritionOrder.supplement.schedule.timing; Provided element is not an instance of Timing.`;
      assertFhirType<Timing>(value, Timing, optErrMsg);
      this.initTiming();
      this.timing?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `timing` property exists and has a value; `false` otherwise
   */
  public hasTiming(): boolean {
    return isDefinedList<Timing>(this.timing) && this.timing.some((item: Timing) => !item.isEmpty());
  }

  /**
   * Initialize the `timing` property
   */
  private initTiming(): void {
    if(!this.hasTiming()) {
      this.timing = [] as Timing[];
    }
  }

  /**
   * @returns the `asNeeded` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getAsNeededElement(): BooleanType {
    return this.asNeeded ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `asNeeded` property.
   *
   * @param element - the `asNeeded` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAsNeededElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid NutritionOrder.supplement.schedule.asNeeded; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.asNeeded = element;
    } else {
      this.asNeeded = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `asNeeded` property exists and has a value; `false` otherwise
   */
  public hasAsNeededElement(): boolean {
    return isDefined<BooleanType>(this.asNeeded) && !this.asNeeded.isEmpty();
  }

  /**
   * @returns the `asNeeded` property value as a fhirBoolean if defined; else undefined
   */
  public getAsNeeded(): fhirBoolean | undefined {
    return this.asNeeded?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `asNeeded` property.
   *
   * @param value - the `asNeeded` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAsNeeded(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid NutritionOrder.supplement.schedule.asNeeded (${String(value)})`;
      this.asNeeded = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.asNeeded = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `asNeeded` property exists and has a value; `false` otherwise
   */
  public hasAsNeeded(): boolean {
    return this.hasAsNeededElement();
  }

  /**
   * @returns the `asNeededFor` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getAsNeededFor(): CodeableConcept {
    return this.asNeededFor ?? new CodeableConcept();
  }

  /**
   * Assigns the provided AsNeededFor object value to the `asNeededFor` property.
   *
   * @param value - the `asNeededFor` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAsNeededFor(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid NutritionOrder.supplement.schedule.asNeededFor; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.asNeededFor = value;
    } else {
      this.asNeededFor = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `asNeededFor` property exists and has a value; `false` otherwise
   */
  public hasAsNeededFor(): boolean {
    return isDefined<CodeableConcept>(this.asNeededFor) && !this.asNeededFor.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'NutritionOrder.supplement.schedule';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.timing,
      this.asNeeded,
      this.asNeededFor,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): NutritionOrderSupplementScheduleComponent {
    const dest = new NutritionOrderSupplementScheduleComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: NutritionOrderSupplementScheduleComponent): void {
    super.copyValues(dest);
    const timingList = copyListValues<Timing>(this.timing);
    dest.timing = timingList.length === 0 ? undefined : timingList;
    dest.asNeeded = this.asNeeded?.copy();
    dest.asNeededFor = this.asNeededFor?.copy();
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

    if (this.hasTiming()) {
      setFhirComplexListJson(this.getTiming(), 'timing', jsonObj);
    }

    if (this.hasAsNeededElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getAsNeededElement(), 'asNeeded', jsonObj);
    }

    if (this.hasAsNeededFor()) {
      setFhirComplexJson(this.getAsNeededFor(), 'asNeededFor', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * NutritionOrderEnteralFormulaComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Enteral formula components
 * - **Definition:** Feeding provided through the gastrointestinal tract via a tube, catheter, or stoma that delivers nutrition distal to the oral cavity.
 *
 * @category Data Models: Resource
 * @see [FHIR NutritionOrder](http://hl7.org/fhir/StructureDefinition/NutritionOrder)
 */
export class NutritionOrderEnteralFormulaComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `NutritionOrderEnteralFormulaComponent` JSON to instantiate the NutritionOrderEnteralFormulaComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `NutritionOrderEnteralFormulaComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to NutritionOrderEnteralFormulaComponent
   * @returns NutritionOrderEnteralFormulaComponent data model or undefined for `NutritionOrderEnteralFormulaComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): NutritionOrderEnteralFormulaComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'NutritionOrderEnteralFormulaComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new NutritionOrderEnteralFormulaComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'baseFormulaType';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableReference | undefined = CodeableReference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setBaseFormulaType(datatype);
    }

    fieldName = 'baseFormulaProductName';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setBaseFormulaProductNameElement(datatype);
    }

    fieldName = 'deliveryDevice';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableReference | undefined = CodeableReference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addDeliveryDevice(datatype);
        }
      });
    }

    fieldName = 'additive';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: NutritionOrderEnteralFormulaAdditiveComponent | undefined = NutritionOrderEnteralFormulaAdditiveComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addAdditive(component);
        }
      });
    }

    fieldName = 'caloricDensity';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Quantity | undefined = Quantity.parse(classJsonObj[fieldName]!, sourceField);
      instance.setCaloricDensity(datatype);
    }

    fieldName = 'routeOfAdministration';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setRouteOfAdministration(datatype);
    }

    fieldName = 'administration';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: NutritionOrderEnteralFormulaAdministrationComponent | undefined = NutritionOrderEnteralFormulaAdministrationComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addAdministration(component);
        }
      });
    }

    fieldName = 'maxVolumeToDeliver';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Quantity | undefined = Quantity.parse(classJsonObj[fieldName]!, sourceField);
      instance.setMaxVolumeToDeliver(datatype);
    }

    fieldName = 'administrationInstruction';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: MarkdownType | undefined = fhirParser.parseMarkdownType(dtJson, dtSiblingJson);
      instance.setAdministrationInstructionElement(datatype);
    }

    return instance;
  }

  /**
   * NutritionOrder.enteralFormula.baseFormulaType Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Type of enteral or infant formula
   * - **Definition:** The type of enteral or infant formula such as an adult standard formula with fiber or a soy-based infant formula.
   * - **FHIR Type:** `CodeableReference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/NutritionProduct',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private baseFormulaType?: CodeableReference | undefined;

  /**
   * NutritionOrder.enteralFormula.baseFormulaProductName Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Product or brand name of the enteral or infant formula
   * - **Definition:** The product or brand name of the enteral or infant formula product such as "ACME Adult Standard Formula".
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private baseFormulaProductName?: StringType | undefined;

  /**
   * NutritionOrder.enteralFormula.deliveryDevice Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Intended type of device for the administration
   * - **Definition:** The intended type of device that is to be used for the administration of the enteral formula.
   * - **FHIR Type:** `CodeableReference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/DeviceDefinition',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private deliveryDevice?: CodeableReference[] | undefined;

  /**
   * NutritionOrder.enteralFormula.additive Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Components to add to the feeding
   * - **Definition:** Indicates modular components to be provided in addition or mixed with the base formula.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private additive?: NutritionOrderEnteralFormulaAdditiveComponent[] | undefined;

  /**
   * NutritionOrder.enteralFormula.caloricDensity Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Amount of energy per specified volume that is required
   * - **Definition:** The amount of energy (calories) that the formula should provide per specified volume, typically per mL or fluid oz.  For example, an infant may require a formula that provides 24 calories per fluid ounce or an adult may require an enteral formula that provides 1.5 calorie/mL.
   * - **FHIR Type:** `Quantity`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private caloricDensity?: Quantity | undefined;

  /**
   * NutritionOrder.enteralFormula.routeOfAdministration Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** How the formula should enter the patient\'s gastrointestinal tract
   * - **Definition:** The route or physiological path of administration into the patient\'s gastrointestinal  tract for purposes of providing the formula feeding, e.g. nasogastric tube.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private routeOfAdministration?: CodeableConcept | undefined;

  /**
   * NutritionOrder.enteralFormula.administration Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Formula feeding instruction as structured data
   * - **Definition:** Formula administration instructions as structured data.  This repeating structure allows for changing the administration rate or volume over time for both bolus and continuous feeding.  An example of this would be an instruction to increase the rate of continuous feeding every 2 hours.
   * - **Comment:** See implementation notes below for further discussion on how to order continuous vs bolus enteral feeding using this resource.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private administration?: NutritionOrderEnteralFormulaAdministrationComponent[] | undefined;

  /**
   * NutritionOrder.enteralFormula.maxVolumeToDeliver Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Upper limit on formula volume per unit of time
   * - **Definition:** The maximum total quantity of formula that may be administered to a subject over the period of time, e.g. 1440 mL over 24 hours.
   * - **FHIR Type:** `Quantity`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private maxVolumeToDeliver?: Quantity | undefined;

  /**
   * NutritionOrder.enteralFormula.administrationInstruction Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Formula feeding instructions expressed as text
   * - **Definition:** Free text formula administration, feeding instructions or additional instructions or information.
   * - **Comment:** Free text dosage instructions can be used for cases where the instructions are too complex to code.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private administrationInstruction?: MarkdownType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `baseFormulaType` property value as a CodeableReference object if defined; else an empty CodeableReference object
   */
  public getBaseFormulaType(): CodeableReference {
    return this.baseFormulaType ?? new CodeableReference();
  }

  /**
   * Assigns the provided BaseFormulaType object value to the `baseFormulaType` property.
   *
   * @param value - the `baseFormulaType` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setBaseFormulaType(value: CodeableReference | undefined): this {
    if (isDefined<CodeableReference>(value)) {
      const optErrMsg = `Invalid NutritionOrder.enteralFormula.baseFormulaType; Provided element is not an instance of CodeableReference.`;
      assertFhirType<CodeableReference>(value, CodeableReference, optErrMsg);
      this.baseFormulaType = value;
    } else {
      this.baseFormulaType = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `baseFormulaType` property exists and has a value; `false` otherwise
   */
  public hasBaseFormulaType(): boolean {
    return isDefined<CodeableReference>(this.baseFormulaType) && !this.baseFormulaType.isEmpty();
  }

  /**
   * @returns the `baseFormulaProductName` property value as a StringType object if defined; else an empty StringType object
   */
  public getBaseFormulaProductNameElement(): StringType {
    return this.baseFormulaProductName ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `baseFormulaProductName` property.
   *
   * @param element - the `baseFormulaProductName` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setBaseFormulaProductNameElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid NutritionOrder.enteralFormula.baseFormulaProductName; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.baseFormulaProductName = element;
    } else {
      this.baseFormulaProductName = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `baseFormulaProductName` property exists and has a value; `false` otherwise
   */
  public hasBaseFormulaProductNameElement(): boolean {
    return isDefined<StringType>(this.baseFormulaProductName) && !this.baseFormulaProductName.isEmpty();
  }

  /**
   * @returns the `baseFormulaProductName` property value as a fhirString if defined; else undefined
   */
  public getBaseFormulaProductName(): fhirString | undefined {
    return this.baseFormulaProductName?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `baseFormulaProductName` property.
   *
   * @param value - the `baseFormulaProductName` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setBaseFormulaProductName(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid NutritionOrder.enteralFormula.baseFormulaProductName (${String(value)})`;
      this.baseFormulaProductName = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.baseFormulaProductName = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `baseFormulaProductName` property exists and has a value; `false` otherwise
   */
  public hasBaseFormulaProductName(): boolean {
    return this.hasBaseFormulaProductNameElement();
  }

  /**
   * @returns the `deliveryDevice` property value as a CodeableReference array
   */
  public getDeliveryDevice(): CodeableReference[] {
    return this.deliveryDevice ?? ([] as CodeableReference[]);
  }

  /**
   * Assigns the provided CodeableReference array value to the `deliveryDevice` property.
   *
   * @param value - the `deliveryDevice` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDeliveryDevice(value: CodeableReference[] | undefined): this {
    if (isDefinedList<CodeableReference>(value)) {
      const optErrMsg = `Invalid NutritionOrder.enteralFormula.deliveryDevice; Provided value array has an element that is not an instance of CodeableReference.`;
      assertFhirTypeList<CodeableReference>(value, CodeableReference, optErrMsg);
      this.deliveryDevice = value;
    } else {
      this.deliveryDevice = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableReference value to the `deliveryDevice` array property.
   *
   * @param value - the `deliveryDevice` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addDeliveryDevice(value: CodeableReference | undefined): this {
    if (isDefined<CodeableReference>(value)) {
      const optErrMsg = `Invalid NutritionOrder.enteralFormula.deliveryDevice; Provided element is not an instance of CodeableReference.`;
      assertFhirType<CodeableReference>(value, CodeableReference, optErrMsg);
      this.initDeliveryDevice();
      this.deliveryDevice?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `deliveryDevice` property exists and has a value; `false` otherwise
   */
  public hasDeliveryDevice(): boolean {
    return isDefinedList<CodeableReference>(this.deliveryDevice) && this.deliveryDevice.some((item: CodeableReference) => !item.isEmpty());
  }

  /**
   * Initialize the `deliveryDevice` property
   */
  private initDeliveryDevice(): void {
    if(!this.hasDeliveryDevice()) {
      this.deliveryDevice = [] as CodeableReference[];
    }
  }

  /**
   * @returns the `additive` property value as a NutritionOrderEnteralFormulaAdditiveComponent array
   */
  public getAdditive(): NutritionOrderEnteralFormulaAdditiveComponent[] {
    return this.additive ?? ([] as NutritionOrderEnteralFormulaAdditiveComponent[]);
  }

  /**
   * Assigns the provided NutritionOrderEnteralFormulaAdditiveComponent array value to the `additive` property.
   *
   * @param value - the `additive` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAdditive(value: NutritionOrderEnteralFormulaAdditiveComponent[] | undefined): this {
    if (isDefinedList<NutritionOrderEnteralFormulaAdditiveComponent>(value)) {
      const optErrMsg = `Invalid NutritionOrder.enteralFormula.additive; Provided value array has an element that is not an instance of NutritionOrderEnteralFormulaAdditiveComponent.`;
      assertFhirTypeList<NutritionOrderEnteralFormulaAdditiveComponent>(value, NutritionOrderEnteralFormulaAdditiveComponent, optErrMsg);
      this.additive = value;
    } else {
      this.additive = undefined;
    }
    return this;
  }

  /**
   * Add the provided NutritionOrderEnteralFormulaAdditiveComponent value to the `additive` array property.
   *
   * @param value - the `additive` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addAdditive(value: NutritionOrderEnteralFormulaAdditiveComponent | undefined): this {
    if (isDefined<NutritionOrderEnteralFormulaAdditiveComponent>(value)) {
      const optErrMsg = `Invalid NutritionOrder.enteralFormula.additive; Provided element is not an instance of NutritionOrderEnteralFormulaAdditiveComponent.`;
      assertFhirType<NutritionOrderEnteralFormulaAdditiveComponent>(value, NutritionOrderEnteralFormulaAdditiveComponent, optErrMsg);
      this.initAdditive();
      this.additive?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `additive` property exists and has a value; `false` otherwise
   */
  public hasAdditive(): boolean {
    return isDefinedList<NutritionOrderEnteralFormulaAdditiveComponent>(this.additive) && this.additive.some((item: NutritionOrderEnteralFormulaAdditiveComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `additive` property
   */
  private initAdditive(): void {
    if(!this.hasAdditive()) {
      this.additive = [] as NutritionOrderEnteralFormulaAdditiveComponent[];
    }
  }

  /**
   * @returns the `caloricDensity` property value as a Quantity object if defined; else an empty Quantity object
   */
  public getCaloricDensity(): Quantity {
    return this.caloricDensity ?? new Quantity();
  }

  /**
   * Assigns the provided CaloricDensity object value to the `caloricDensity` property.
   *
   * @param value - the `caloricDensity` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCaloricDensity(value: Quantity | undefined): this {
    if (isDefined<Quantity>(value)) {
      const optErrMsg = `Invalid NutritionOrder.enteralFormula.caloricDensity; Provided element is not an instance of Quantity.`;
      assertFhirType<Quantity>(value, Quantity, optErrMsg);
      this.caloricDensity = value;
    } else {
      this.caloricDensity = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `caloricDensity` property exists and has a value; `false` otherwise
   */
  public hasCaloricDensity(): boolean {
    return isDefined<Quantity>(this.caloricDensity) && !this.caloricDensity.isEmpty();
  }

  /**
   * @returns the `routeOfAdministration` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getRouteOfAdministration(): CodeableConcept {
    return this.routeOfAdministration ?? new CodeableConcept();
  }

  /**
   * Assigns the provided RouteOfAdministration object value to the `routeOfAdministration` property.
   *
   * @param value - the `routeOfAdministration` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setRouteOfAdministration(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid NutritionOrder.enteralFormula.routeOfAdministration; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.routeOfAdministration = value;
    } else {
      this.routeOfAdministration = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `routeOfAdministration` property exists and has a value; `false` otherwise
   */
  public hasRouteOfAdministration(): boolean {
    return isDefined<CodeableConcept>(this.routeOfAdministration) && !this.routeOfAdministration.isEmpty();
  }

  /**
   * @returns the `administration` property value as a NutritionOrderEnteralFormulaAdministrationComponent array
   */
  public getAdministration(): NutritionOrderEnteralFormulaAdministrationComponent[] {
    return this.administration ?? ([] as NutritionOrderEnteralFormulaAdministrationComponent[]);
  }

  /**
   * Assigns the provided NutritionOrderEnteralFormulaAdministrationComponent array value to the `administration` property.
   *
   * @param value - the `administration` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAdministration(value: NutritionOrderEnteralFormulaAdministrationComponent[] | undefined): this {
    if (isDefinedList<NutritionOrderEnteralFormulaAdministrationComponent>(value)) {
      const optErrMsg = `Invalid NutritionOrder.enteralFormula.administration; Provided value array has an element that is not an instance of NutritionOrderEnteralFormulaAdministrationComponent.`;
      assertFhirTypeList<NutritionOrderEnteralFormulaAdministrationComponent>(value, NutritionOrderEnteralFormulaAdministrationComponent, optErrMsg);
      this.administration = value;
    } else {
      this.administration = undefined;
    }
    return this;
  }

  /**
   * Add the provided NutritionOrderEnteralFormulaAdministrationComponent value to the `administration` array property.
   *
   * @param value - the `administration` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addAdministration(value: NutritionOrderEnteralFormulaAdministrationComponent | undefined): this {
    if (isDefined<NutritionOrderEnteralFormulaAdministrationComponent>(value)) {
      const optErrMsg = `Invalid NutritionOrder.enteralFormula.administration; Provided element is not an instance of NutritionOrderEnteralFormulaAdministrationComponent.`;
      assertFhirType<NutritionOrderEnteralFormulaAdministrationComponent>(value, NutritionOrderEnteralFormulaAdministrationComponent, optErrMsg);
      this.initAdministration();
      this.administration?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `administration` property exists and has a value; `false` otherwise
   */
  public hasAdministration(): boolean {
    return isDefinedList<NutritionOrderEnteralFormulaAdministrationComponent>(this.administration) && this.administration.some((item: NutritionOrderEnteralFormulaAdministrationComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `administration` property
   */
  private initAdministration(): void {
    if(!this.hasAdministration()) {
      this.administration = [] as NutritionOrderEnteralFormulaAdministrationComponent[];
    }
  }

  /**
   * @returns the `maxVolumeToDeliver` property value as a Quantity object if defined; else an empty Quantity object
   */
  public getMaxVolumeToDeliver(): Quantity {
    return this.maxVolumeToDeliver ?? new Quantity();
  }

  /**
   * Assigns the provided MaxVolumeToDeliver object value to the `maxVolumeToDeliver` property.
   *
   * @param value - the `maxVolumeToDeliver` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setMaxVolumeToDeliver(value: Quantity | undefined): this {
    if (isDefined<Quantity>(value)) {
      const optErrMsg = `Invalid NutritionOrder.enteralFormula.maxVolumeToDeliver; Provided element is not an instance of Quantity.`;
      assertFhirType<Quantity>(value, Quantity, optErrMsg);
      this.maxVolumeToDeliver = value;
    } else {
      this.maxVolumeToDeliver = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `maxVolumeToDeliver` property exists and has a value; `false` otherwise
   */
  public hasMaxVolumeToDeliver(): boolean {
    return isDefined<Quantity>(this.maxVolumeToDeliver) && !this.maxVolumeToDeliver.isEmpty();
  }

  /**
   * @returns the `administrationInstruction` property value as a MarkdownType object if defined; else an empty MarkdownType object
   */
  public getAdministrationInstructionElement(): MarkdownType {
    return this.administrationInstruction ?? new MarkdownType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `administrationInstruction` property.
   *
   * @param element - the `administrationInstruction` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAdministrationInstructionElement(element: MarkdownType | undefined): this {
    if (isDefined<MarkdownType>(element)) {
      const optErrMsg = `Invalid NutritionOrder.enteralFormula.administrationInstruction; Provided element is not an instance of MarkdownType.`;
      assertFhirType<MarkdownType>(element, MarkdownType, optErrMsg);
      this.administrationInstruction = element;
    } else {
      this.administrationInstruction = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `administrationInstruction` property exists and has a value; `false` otherwise
   */
  public hasAdministrationInstructionElement(): boolean {
    return isDefined<MarkdownType>(this.administrationInstruction) && !this.administrationInstruction.isEmpty();
  }

  /**
   * @returns the `administrationInstruction` property value as a fhirMarkdown if defined; else undefined
   */
  public getAdministrationInstruction(): fhirMarkdown | undefined {
    return this.administrationInstruction?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `administrationInstruction` property.
   *
   * @param value - the `administrationInstruction` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAdministrationInstruction(value: fhirMarkdown | undefined): this {
    if (isDefined<fhirMarkdown>(value)) {
      const optErrMsg = `Invalid NutritionOrder.enteralFormula.administrationInstruction (${String(value)})`;
      this.administrationInstruction = new MarkdownType(parseFhirPrimitiveData(value, fhirMarkdownSchema, optErrMsg));
    } else {
      this.administrationInstruction = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `administrationInstruction` property exists and has a value; `false` otherwise
   */
  public hasAdministrationInstruction(): boolean {
    return this.hasAdministrationInstructionElement();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'NutritionOrder.enteralFormula';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.baseFormulaType,
      this.baseFormulaProductName,
      this.deliveryDevice,
      this.additive,
      this.caloricDensity,
      this.routeOfAdministration,
      this.administration,
      this.maxVolumeToDeliver,
      this.administrationInstruction,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): NutritionOrderEnteralFormulaComponent {
    const dest = new NutritionOrderEnteralFormulaComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: NutritionOrderEnteralFormulaComponent): void {
    super.copyValues(dest);
    dest.baseFormulaType = this.baseFormulaType?.copy();
    dest.baseFormulaProductName = this.baseFormulaProductName?.copy();
    const deliveryDeviceList = copyListValues<CodeableReference>(this.deliveryDevice);
    dest.deliveryDevice = deliveryDeviceList.length === 0 ? undefined : deliveryDeviceList;
    const additiveList = copyListValues<NutritionOrderEnteralFormulaAdditiveComponent>(this.additive);
    dest.additive = additiveList.length === 0 ? undefined : additiveList;
    dest.caloricDensity = this.caloricDensity?.copy();
    dest.routeOfAdministration = this.routeOfAdministration?.copy();
    const administrationList = copyListValues<NutritionOrderEnteralFormulaAdministrationComponent>(this.administration);
    dest.administration = administrationList.length === 0 ? undefined : administrationList;
    dest.maxVolumeToDeliver = this.maxVolumeToDeliver?.copy();
    dest.administrationInstruction = this.administrationInstruction?.copy();
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

    if (this.hasBaseFormulaType()) {
      setFhirComplexJson(this.getBaseFormulaType(), 'baseFormulaType', jsonObj);
    }

    if (this.hasBaseFormulaProductNameElement()) {
      setFhirPrimitiveJson<fhirString>(this.getBaseFormulaProductNameElement(), 'baseFormulaProductName', jsonObj);
    }

    if (this.hasDeliveryDevice()) {
      setFhirComplexListJson(this.getDeliveryDevice(), 'deliveryDevice', jsonObj);
    }

    if (this.hasAdditive()) {
      setFhirBackboneElementListJson(this.getAdditive(), 'additive', jsonObj);
    }

    if (this.hasCaloricDensity()) {
      setFhirComplexJson(this.getCaloricDensity(), 'caloricDensity', jsonObj);
    }

    if (this.hasRouteOfAdministration()) {
      setFhirComplexJson(this.getRouteOfAdministration(), 'routeOfAdministration', jsonObj);
    }

    if (this.hasAdministration()) {
      setFhirBackboneElementListJson(this.getAdministration(), 'administration', jsonObj);
    }

    if (this.hasMaxVolumeToDeliver()) {
      setFhirComplexJson(this.getMaxVolumeToDeliver(), 'maxVolumeToDeliver', jsonObj);
    }

    if (this.hasAdministrationInstructionElement()) {
      setFhirPrimitiveJson<fhirMarkdown>(this.getAdministrationInstructionElement(), 'administrationInstruction', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * NutritionOrderEnteralFormulaAdditiveComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Components to add to the feeding
 * - **Definition:** Indicates modular components to be provided in addition or mixed with the base formula.
 *
 * @category Data Models: Resource
 * @see [FHIR NutritionOrder](http://hl7.org/fhir/StructureDefinition/NutritionOrder)
 */
export class NutritionOrderEnteralFormulaAdditiveComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `NutritionOrderEnteralFormulaAdditiveComponent` JSON to instantiate the NutritionOrderEnteralFormulaAdditiveComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `NutritionOrderEnteralFormulaAdditiveComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to NutritionOrderEnteralFormulaAdditiveComponent
   * @returns NutritionOrderEnteralFormulaAdditiveComponent data model or undefined for `NutritionOrderEnteralFormulaAdditiveComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): NutritionOrderEnteralFormulaAdditiveComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'NutritionOrderEnteralFormulaAdditiveComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new NutritionOrderEnteralFormulaAdditiveComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableReference | undefined = CodeableReference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setType(datatype);
    }

    fieldName = 'productName';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setProductNameElement(datatype);
    }

    fieldName = 'quantity';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Quantity | undefined = Quantity.parse(classJsonObj[fieldName]!, sourceField);
      instance.setQuantity(datatype);
    }

    return instance;
  }

  /**
   * NutritionOrder.enteralFormula.additive.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Type of modular component to add to the feeding
   * - **Definition:** Indicates the type of modular component such as protein, carbohydrate, fat or fiber to be provided in addition to or mixed with the base formula.
   * - **FHIR Type:** `CodeableReference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/NutritionProduct',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private type_?: CodeableReference | undefined;

  /**
   * NutritionOrder.enteralFormula.additive.productName Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Product or brand name of the modular additive
   * - **Definition:** The product or brand name of the type of modular component to be added to the formula.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private productName?: StringType | undefined;

  /**
   * NutritionOrder.enteralFormula.additive.quantity Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Amount of additive to be given or mixed in
   * - **Definition:** The amount of additive to be given in addition or to be mixed in with the base formula.
   * - **FHIR Type:** `Quantity`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private quantity?: Quantity | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `type_` property value as a CodeableReference object if defined; else an empty CodeableReference object
   */
  public getType(): CodeableReference {
    return this.type_ ?? new CodeableReference();
  }

  /**
   * Assigns the provided Type object value to the `type_` property.
   *
   * @param value - the `type_` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setType(value: CodeableReference | undefined): this {
    if (isDefined<CodeableReference>(value)) {
      const optErrMsg = `Invalid NutritionOrder.enteralFormula.additive.type; Provided element is not an instance of CodeableReference.`;
      assertFhirType<CodeableReference>(value, CodeableReference, optErrMsg);
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
    return isDefined<CodeableReference>(this.type_) && !this.type_.isEmpty();
  }

  /**
   * @returns the `productName` property value as a StringType object if defined; else an empty StringType object
   */
  public getProductNameElement(): StringType {
    return this.productName ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `productName` property.
   *
   * @param element - the `productName` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setProductNameElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid NutritionOrder.enteralFormula.additive.productName; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.productName = element;
    } else {
      this.productName = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `productName` property exists and has a value; `false` otherwise
   */
  public hasProductNameElement(): boolean {
    return isDefined<StringType>(this.productName) && !this.productName.isEmpty();
  }

  /**
   * @returns the `productName` property value as a fhirString if defined; else undefined
   */
  public getProductName(): fhirString | undefined {
    return this.productName?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `productName` property.
   *
   * @param value - the `productName` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setProductName(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid NutritionOrder.enteralFormula.additive.productName (${String(value)})`;
      this.productName = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.productName = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `productName` property exists and has a value; `false` otherwise
   */
  public hasProductName(): boolean {
    return this.hasProductNameElement();
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
      const optErrMsg = `Invalid NutritionOrder.enteralFormula.additive.quantity; Provided element is not an instance of Quantity.`;
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

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'NutritionOrder.enteralFormula.additive';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.type_,
      this.productName,
      this.quantity,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): NutritionOrderEnteralFormulaAdditiveComponent {
    const dest = new NutritionOrderEnteralFormulaAdditiveComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: NutritionOrderEnteralFormulaAdditiveComponent): void {
    super.copyValues(dest);
    dest.type_ = this.type_?.copy();
    dest.productName = this.productName?.copy();
    dest.quantity = this.quantity?.copy();
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

    if (this.hasProductNameElement()) {
      setFhirPrimitiveJson<fhirString>(this.getProductNameElement(), 'productName', jsonObj);
    }

    if (this.hasQuantity()) {
      setFhirComplexJson(this.getQuantity(), 'quantity', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * NutritionOrderEnteralFormulaAdministrationComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Formula feeding instruction as structured data
 * - **Definition:** Formula administration instructions as structured data.  This repeating structure allows for changing the administration rate or volume over time for both bolus and continuous feeding.  An example of this would be an instruction to increase the rate of continuous feeding every 2 hours.
 * - **Comment:** See implementation notes below for further discussion on how to order continuous vs bolus enteral feeding using this resource.
 *
 * @category Data Models: Resource
 * @see [FHIR NutritionOrder](http://hl7.org/fhir/StructureDefinition/NutritionOrder)
 */
export class NutritionOrderEnteralFormulaAdministrationComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `NutritionOrderEnteralFormulaAdministrationComponent` JSON to instantiate the NutritionOrderEnteralFormulaAdministrationComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `NutritionOrderEnteralFormulaAdministrationComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to NutritionOrderEnteralFormulaAdministrationComponent
   * @returns NutritionOrderEnteralFormulaAdministrationComponent data model or undefined for `NutritionOrderEnteralFormulaAdministrationComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): NutritionOrderEnteralFormulaAdministrationComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'NutritionOrderEnteralFormulaAdministrationComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new NutritionOrderEnteralFormulaAdministrationComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    const classMetadata: DecoratorMetadataObject | null = NutritionOrderEnteralFormulaAdministrationComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for NutritionOrderEnteralFormulaAdministrationComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    fieldName = 'schedule';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: NutritionOrderEnteralFormulaAdministrationScheduleComponent | undefined = NutritionOrderEnteralFormulaAdministrationScheduleComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setSchedule(component);
    }

    fieldName = 'quantity';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Quantity | undefined = Quantity.parse(classJsonObj[fieldName]!, sourceField);
      instance.setQuantity(datatype);
    }

    fieldName = 'rate[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const rate: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setRate(rate);

    return instance;
  }

  /**
   * NutritionOrder.enteralFormula.administration.schedule Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Scheduling information for enteral formula products
   * - **Definition:** Schedule information for an enteral formula.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private schedule?: NutritionOrderEnteralFormulaAdministrationScheduleComponent | undefined;

  /**
   * NutritionOrder.enteralFormula.administration.quantity Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The volume of formula to provide
   * - **Definition:** The volume of formula to provide to the patient per the specified administration schedule.
   * - **FHIR Type:** `Quantity`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private quantity?: Quantity | undefined;

  /**
   * NutritionOrder.enteralFormula.administration.rate[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('NutritionOrder.enteralFormula.administration.rate[x]', ['Quantity','Ratio',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Speed with which the formula is provided per period of time
   * - **Definition:** The rate of administration of formula via a feeding pump, e.g. 60 mL per hour, according to the specified schedule.
   * - **Comment:** Ratio is used when the quantity value in the denominator is not "1", otherwise use Quantity. For example, the Ratio datatype is used for "200 mL/4 hrs" versus the Quantity datatype for "50 mL/hr".
   * - **FHIR Types:**
   *     'Quantity',
   *     'Ratio',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('NutritionOrder.enteralFormula.administration.rate[x]',[
    'Quantity',
    'Ratio',
  ])
  private rate?: IDataType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `schedule` property value as a NutritionOrderEnteralFormulaAdministrationScheduleComponent object if defined; else an empty NutritionOrderEnteralFormulaAdministrationScheduleComponent object
   */
  public getSchedule(): NutritionOrderEnteralFormulaAdministrationScheduleComponent {
    return this.schedule ?? new NutritionOrderEnteralFormulaAdministrationScheduleComponent();
  }

  /**
   * Assigns the provided Schedule object value to the `schedule` property.
   *
   * @param value - the `schedule` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSchedule(value: NutritionOrderEnteralFormulaAdministrationScheduleComponent | undefined): this {
    if (isDefined<NutritionOrderEnteralFormulaAdministrationScheduleComponent>(value)) {
      const optErrMsg = `Invalid NutritionOrder.enteralFormula.administration.schedule; Provided element is not an instance of NutritionOrderEnteralFormulaAdministrationScheduleComponent.`;
      assertFhirType<NutritionOrderEnteralFormulaAdministrationScheduleComponent>(value, NutritionOrderEnteralFormulaAdministrationScheduleComponent, optErrMsg);
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
    return isDefined<NutritionOrderEnteralFormulaAdministrationScheduleComponent>(this.schedule) && !this.schedule.isEmpty();
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
      const optErrMsg = `Invalid NutritionOrder.enteralFormula.administration.quantity; Provided element is not an instance of Quantity.`;
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
   * @returns the `rate` property value as a DataType object if defined; else undefined
   */
  public getRate(): IDataType | undefined {
    return this.rate;
  }

  /**
   * Assigns the provided DataType object value to the `rate` property.
   *
   * @decorator `@ChoiceDataTypes('NutritionOrder.enteralFormula.administration.rate[x]')`
   *
   * @param value - the `rate` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('NutritionOrder.enteralFormula.administration.rate[x]')
  public setRate(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
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
    return isDefined<IDataType>(this.rate) && !this.rate.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `rate` property value as a Quantity object if defined; else undefined
   */
  public getRateQuantity(): Quantity | undefined {
    if (!isDefined<IDataType | undefined>(this.rate)) {
      return undefined;
    }
    if (!(this.rate instanceof Quantity)) {
      throw new InvalidTypeError(
        `DataType mismatch for NutritionOrder.enteralFormula.administration.rate[x]: Expected Quantity but encountered ${this.rate.fhirType()}`,
      );
    }
    return this.rate;
  }

  /**
   * @returns `true` if the `rate` property exists as a Quantity and has a value; `false` otherwise
   */
  public hasRateQuantity(): boolean {
    return this.hasRate() && this.rate instanceof Quantity;
  }

  /**
   * @returns the `rate` property value as a Ratio object if defined; else undefined
   */
  public getRateRatio(): Ratio | undefined {
    if (!isDefined<IDataType | undefined>(this.rate)) {
      return undefined;
    }
    if (!(this.rate instanceof Ratio)) {
      throw new InvalidTypeError(
        `DataType mismatch for NutritionOrder.enteralFormula.administration.rate[x]: Expected Ratio but encountered ${this.rate.fhirType()}`,
      );
    }
    return this.rate;
  }

  /**
   * @returns `true` if the `rate` property exists as a Ratio and has a value; `false` otherwise
   */
  public hasRateRatio(): boolean {
    return this.hasRate() && this.rate instanceof Ratio;
  }

  // End of choice datatype-specific "get"/"has" methods

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'NutritionOrder.enteralFormula.administration';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.schedule,
      this.quantity,
      this.rate,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): NutritionOrderEnteralFormulaAdministrationComponent {
    const dest = new NutritionOrderEnteralFormulaAdministrationComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: NutritionOrderEnteralFormulaAdministrationComponent): void {
    super.copyValues(dest);
    dest.schedule = this.schedule?.copy();
    dest.quantity = this.quantity?.copy();
    dest.rate = this.rate?.copy() as IDataType;
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

    if (this.hasSchedule()) {
      setFhirBackboneElementJson(this.getSchedule(), 'schedule', jsonObj);
    }

    if (this.hasQuantity()) {
      setFhirComplexJson(this.getQuantity(), 'quantity', jsonObj);
    }

    if (this.hasRate()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getRate()!, 'rate', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * NutritionOrderEnteralFormulaAdministrationScheduleComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Scheduling information for enteral formula products
 * - **Definition:** Schedule information for an enteral formula.
 *
 * @category Data Models: Resource
 * @see [FHIR NutritionOrder](http://hl7.org/fhir/StructureDefinition/NutritionOrder)
 */
export class NutritionOrderEnteralFormulaAdministrationScheduleComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `NutritionOrderEnteralFormulaAdministrationScheduleComponent` JSON to instantiate the NutritionOrderEnteralFormulaAdministrationScheduleComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `NutritionOrderEnteralFormulaAdministrationScheduleComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to NutritionOrderEnteralFormulaAdministrationScheduleComponent
   * @returns NutritionOrderEnteralFormulaAdministrationScheduleComponent data model or undefined for `NutritionOrderEnteralFormulaAdministrationScheduleComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): NutritionOrderEnteralFormulaAdministrationScheduleComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'NutritionOrderEnteralFormulaAdministrationScheduleComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new NutritionOrderEnteralFormulaAdministrationScheduleComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    fieldName = 'timing';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Timing | undefined = Timing.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addTiming(datatype);
        }
      });
    }

    fieldName = 'asNeeded';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setAsNeededElement(datatype);
    }

    fieldName = 'asNeededFor';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setAsNeededFor(datatype);
    }

    return instance;
  }

  /**
   * NutritionOrder.enteralFormula.administration.schedule.timing Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Scheduled frequency of enteral formula
   * - **Definition:** The time period and frequency at which the enteral formula should be given.  The enteral formula should be given for the combination of all schedules if more than one schedule is present.
   * - **FHIR Type:** `Timing`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private timing?: Timing[] | undefined;

  /**
   * NutritionOrder.enteralFormula.administration.schedule.asNeeded Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Take \'as needed\'
   * - **Definition:** Indicates whether the enteral formula is only taken when needed within a specific dosing schedule.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private asNeeded?: BooleanType | undefined;

  /**
   * NutritionOrder.enteralFormula.administration.schedule.asNeededFor Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Take \'as needed\' for x
   * - **Definition:** Indicates whether the enteral formula is only taken based on a precondition for taking the enteral formula.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private asNeededFor?: CodeableConcept | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `timing` property value as a Timing array
   */
  public getTiming(): Timing[] {
    return this.timing ?? ([] as Timing[]);
  }

  /**
   * Assigns the provided Timing array value to the `timing` property.
   *
   * @param value - the `timing` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setTiming(value: Timing[] | undefined): this {
    if (isDefinedList<Timing>(value)) {
      const optErrMsg = `Invalid NutritionOrder.enteralFormula.administration.schedule.timing; Provided value array has an element that is not an instance of Timing.`;
      assertFhirTypeList<Timing>(value, Timing, optErrMsg);
      this.timing = value;
    } else {
      this.timing = undefined;
    }
    return this;
  }

  /**
   * Add the provided Timing value to the `timing` array property.
   *
   * @param value - the `timing` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addTiming(value: Timing | undefined): this {
    if (isDefined<Timing>(value)) {
      const optErrMsg = `Invalid NutritionOrder.enteralFormula.administration.schedule.timing; Provided element is not an instance of Timing.`;
      assertFhirType<Timing>(value, Timing, optErrMsg);
      this.initTiming();
      this.timing?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `timing` property exists and has a value; `false` otherwise
   */
  public hasTiming(): boolean {
    return isDefinedList<Timing>(this.timing) && this.timing.some((item: Timing) => !item.isEmpty());
  }

  /**
   * Initialize the `timing` property
   */
  private initTiming(): void {
    if(!this.hasTiming()) {
      this.timing = [] as Timing[];
    }
  }

  /**
   * @returns the `asNeeded` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getAsNeededElement(): BooleanType {
    return this.asNeeded ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `asNeeded` property.
   *
   * @param element - the `asNeeded` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAsNeededElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid NutritionOrder.enteralFormula.administration.schedule.asNeeded; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.asNeeded = element;
    } else {
      this.asNeeded = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `asNeeded` property exists and has a value; `false` otherwise
   */
  public hasAsNeededElement(): boolean {
    return isDefined<BooleanType>(this.asNeeded) && !this.asNeeded.isEmpty();
  }

  /**
   * @returns the `asNeeded` property value as a fhirBoolean if defined; else undefined
   */
  public getAsNeeded(): fhirBoolean | undefined {
    return this.asNeeded?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `asNeeded` property.
   *
   * @param value - the `asNeeded` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAsNeeded(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid NutritionOrder.enteralFormula.administration.schedule.asNeeded (${String(value)})`;
      this.asNeeded = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.asNeeded = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `asNeeded` property exists and has a value; `false` otherwise
   */
  public hasAsNeeded(): boolean {
    return this.hasAsNeededElement();
  }

  /**
   * @returns the `asNeededFor` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getAsNeededFor(): CodeableConcept {
    return this.asNeededFor ?? new CodeableConcept();
  }

  /**
   * Assigns the provided AsNeededFor object value to the `asNeededFor` property.
   *
   * @param value - the `asNeededFor` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAsNeededFor(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid NutritionOrder.enteralFormula.administration.schedule.asNeededFor; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.asNeededFor = value;
    } else {
      this.asNeededFor = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `asNeededFor` property exists and has a value; `false` otherwise
   */
  public hasAsNeededFor(): boolean {
    return isDefined<CodeableConcept>(this.asNeededFor) && !this.asNeededFor.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'NutritionOrder.enteralFormula.administration.schedule';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.timing,
      this.asNeeded,
      this.asNeededFor,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): NutritionOrderEnteralFormulaAdministrationScheduleComponent {
    const dest = new NutritionOrderEnteralFormulaAdministrationScheduleComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: NutritionOrderEnteralFormulaAdministrationScheduleComponent): void {
    super.copyValues(dest);
    const timingList = copyListValues<Timing>(this.timing);
    dest.timing = timingList.length === 0 ? undefined : timingList;
    dest.asNeeded = this.asNeeded?.copy();
    dest.asNeededFor = this.asNeededFor?.copy();
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

    if (this.hasTiming()) {
      setFhirComplexListJson(this.getTiming(), 'timing', jsonObj);
    }

    if (this.hasAsNeededElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getAsNeededElement(), 'asNeeded', jsonObj);
    }

    if (this.hasAsNeededFor()) {
      setFhirComplexJson(this.getAsNeededFor(), 'asNeededFor', jsonObj);
    }

    return jsonObj;
  }
}
