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
 * Transport Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/Transport
 * StructureDefinition.name: Transport
 * StructureDefinition.description: Record of transport.
 * StructureDefinition.fhirVersion: 5.0.0
 *
 * For questions, suggestions, or bugs, please open an issue at [GitHub ts-fhir-datamodels/issues](https://github.com/Paqrat76/ts-fhir-datamodels/issues).
 *
 * @packageDocumentation
 */

import {
  BackboneElement,
  Base64BinaryType,
  BooleanType,
  CanonicalType,
  ChoiceDataTypes,
  ChoiceDataTypesMeta,
  CodeType,
  DateTimeType,
  DateType,
  DecimalType,
  DomainResource,
  EnumCodeType,
  FhirParser,
  IBackboneElement,
  IDataType,
  IDomainResource,
  IdType,
  InstantType,
  Integer64Type,
  IntegerType,
  InvalidTypeError,
  JSON,
  MarkdownType,
  OidType,
  PositiveIntType,
  PrimitiveType,
  ReferenceTargets,
  StringType,
  TimeType,
  UnsignedIntType,
  UriType,
  UrlType,
  UuidType,
  assertEnumCodeType,
  assertFhirType,
  assertFhirTypeList,
  assertIsDefined,
  copyListValues,
  fhirCanonical,
  fhirCanonicalSchema,
  fhirCode,
  fhirCodeSchema,
  fhirDateTime,
  fhirDateTimeSchema,
  fhirPositiveInt,
  fhirPositiveIntSchema,
  fhirString,
  fhirStringSchema,
  fhirUri,
  fhirUriSchema,
  getPrimitiveTypeJson,
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
  setPolymorphicValueJson,
} from '@paq-ts-fhir/fhir-core';
import { Address, Age, Annotation, Attachment, Availability, CodeableConcept, CodeableReference, Coding, ContactDetail, ContactPoint, Count, DataRequirement, Distance, Dosage, Duration, Expression, ExtendedContactDetail, HumanName, Identifier, Meta, Money, PARSABLE_DATATYPE_MAP, ParameterDefinition, Period, Quantity, Range, Ratio, RatioRange, Reference, RelatedArtifact, SampledData, Signature, Timing, TriggerDefinition, UsageContext } from '../complex-types/complex-datatypes';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';
import { RequestPriorityEnum } from '../code-systems/RequestPriorityEnum';
import { TransportStatusEnum } from '../code-systems/TransportStatusEnum';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Symbol.metadata polyfill secret sauce for decorator metadata
(Symbol.metadata as any) ??= Symbol('Symbol.metadata');

/**
 * Transport Class
 *
 * @remarks
 * Record of transport.
 *
 * **FHIR Specification**
 * - **Short:** Delivery of item
 * - **Definition:** Record of transport of item.
 * - **FHIR Version:** 5.0.0
 *
 * @category Data Models: Resource
 * @see [FHIR Transport](http://hl7.org/fhir/StructureDefinition/Transport)
 */
export class Transport extends DomainResource implements IDomainResource {
  constructor(intent: CodeType | fhirCode | null = null, requestedLocation: Reference | null = null, currentLocation: Reference | null = null) {
    super();

    this.transportStatusEnum = new TransportStatusEnum();
    this.requestPriorityEnum = new RequestPriorityEnum();

    this.intent = null;
    if (isDefined<CodeType | fhirCode>(intent)) {
      if (intent instanceof PrimitiveType) {
        this.setIntentElement(intent);
      } else {
        this.setIntent(intent);
      }
    }

    this.requestedLocation = null;
    if (isDefined<Reference>(requestedLocation)) {
      this.setRequestedLocation(requestedLocation);
    }

    this.currentLocation = null;
    if (isDefined<Reference>(currentLocation)) {
      this.setCurrentLocation(currentLocation);
    }
  }

  /**
   * Parse the provided `Transport` JSON to instantiate the Transport data model.
   *
   * @param sourceJson - JSON representing FHIR `Transport`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to Transport
   * @returns Transport data model or undefined for `Transport`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): Transport | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'Transport';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new Transport();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'Transport');
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

    fieldName = 'instantiatesCanonical';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CanonicalType | undefined = fhirParser.parseCanonicalType(dtJson, dtSiblingJson);
      instance.setInstantiatesCanonicalElement(datatype);
    }

    fieldName = 'instantiatesUri';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: UriType | undefined = fhirParser.parseUriType(dtJson, dtSiblingJson);
      instance.setInstantiatesUriElement(datatype);
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

    fieldName = 'groupIdentifier';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Identifier | undefined = Identifier.parse(classJsonObj[fieldName]!, sourceField);
      instance.setGroupIdentifier(datatype);
    }

    fieldName = 'partOf';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addPartOf(datatype);
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
      instance.setStatusElement(datatype);
    }

    fieldName = 'statusReason';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setStatusReason(datatype);
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

    fieldName = 'code';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setCode(datatype);
    }

    fieldName = 'description';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setDescriptionElement(datatype);
    }

    fieldName = 'focus';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setFocus(datatype);
    }

    fieldName = 'for';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setFor(datatype);
    }

    fieldName = 'encounter';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setEncounter(datatype);
    }

    fieldName = 'completionTime';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dtJson, dtSiblingJson);
      instance.setCompletionTimeElement(datatype);
    }

    fieldName = 'authoredOn';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dtJson, dtSiblingJson);
      instance.setAuthoredOnElement(datatype);
    }

    fieldName = 'lastModified';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dtJson, dtSiblingJson);
      instance.setLastModifiedElement(datatype);
    }

    fieldName = 'requester';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setRequester(datatype);
    }

    fieldName = 'performerType';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addPerformerType(datatype);
          }
        });
      }
    }

    fieldName = 'owner';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setOwner(datatype);
    }

    fieldName = 'location';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setLocation(datatype);
    }

    fieldName = 'insurance';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addInsurance(datatype);
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

    fieldName = 'relevantHistory';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addRelevantHistory(datatype);
          }
        });
      }
  }

    fieldName = 'restriction';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: TransportRestrictionComponent | undefined = TransportRestrictionComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setRestriction(component);
    }

    fieldName = 'input';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: TransportInputComponent | undefined = TransportInputComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addInput(component);
          }
        });
      }
    }

    fieldName = 'output';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: TransportOutputComponent | undefined = TransportOutputComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addOutput(component);
          }
        });
      }
    }

    fieldName = 'requestedLocation';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setRequestedLocation(null);
      } else {
        instance.setRequestedLocation(datatype);
      }
    } else {
      instance.setRequestedLocation(null);
    }

    fieldName = 'currentLocation';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setCurrentLocation(null);
      } else {
        instance.setCurrentLocation(datatype);
      }
    } else {
      instance.setCurrentLocation(null);
    }

    fieldName = 'reason';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableReference | undefined = CodeableReference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setReason(datatype);
    }

    fieldName = 'history';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setHistory(datatype);
    }

    return instance;
  }

  /**
   * Transport.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** External identifier
   * - **Definition:** Identifier for the transport event that is used to identify it across multiple disparate systems.
   * - **Comment:** This identifier is typically assigned by the dispenser, and may be used to reference the delivery when exchanging information about it with other systems.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private identifier?: Identifier[] | undefined;

  /**
   * Transport.instantiatesCanonical Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Formal definition of transport
   * - **Definition:** The URL pointing to a *FHIR*-defined protocol, guideline, orderset or other definition that is adhered to in whole or in part by this Transport.
   * - **Requirements:** Enables a formal definition of how the transport is to be performed, enabling automation.
   * - **FHIR Type:** `canonical`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/ActivityDefinition',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private instantiatesCanonical?: CanonicalType | undefined;

  /**
   * Transport.instantiatesUri Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Formal definition of transport
   * - **Definition:** The URL pointing to an *externally* maintained  protocol, guideline, orderset or other definition that is adhered to in whole or in part by this Transport.
   * - **Requirements:** Enables a formal definition of how the transport is to be performed (e.g. using BPMN, BPEL, XPDL or other formal notation to be associated with a transport), enabling automation.
   * - **FHIR Type:** `uri`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private instantiatesUri?: UriType | undefined;

  /**
   * Transport.basedOn Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Request fulfilled by this transport
   * - **Definition:** BasedOn refers to a higher-level authorization that triggered the creation of the transport.  It references a "request" resource such as a ServiceRequest or Transport, which is distinct from the "request" resource the Transport is seeking to fulfill.  This latter resource is referenced by FocusOn.  For example, based on a ServiceRequest (= BasedOn), a transport is created to fulfill a procedureRequest ( = FocusOn ) to transport a specimen to the lab.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Resource',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private basedOn?: Reference[] | undefined;

  /**
   * Transport.groupIdentifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Requisition or grouper id
   * - **Definition:** A shared identifier common to multiple independent Request instances that were activated/authorized more or less simultaneously by a single author.  The presence of the same identifier on each request ties those requests together and may have business ramifications in terms of reporting of results, billing, etc.  E.g. a requisition number shared by a set of lab tests ordered together, or a prescription number shared by all meds ordered at one time.
   * - **Requirements:** Billing and/or reporting can be linked to whether multiple requests were created as a single unit.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private groupIdentifier?: Identifier | undefined;

  /**
   * Transport.partOf Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Part of referenced event
   * - **Definition:** A larger event of which this particular event is a component or step.
   * - **Comment:** Not to be used to link an event to an Encounter - use Event.context for that. [The allowed reference resources may be adjusted as appropriate for the event resource].
   * - **Requirements:** E.g. Drug administration as part of a procedure, procedure as part of observation, etc.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Transport',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private partOf?: Reference[] | undefined;

  /**
   * FHIR CodeSystem: TransportStatus
   *
   * @see {@link TransportStatusEnum }
   */
  private readonly transportStatusEnum: TransportStatusEnum;

  /**
   * Transport.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** in-progress | completed | abandoned | cancelled | planned | entered-in-error
   * - **Definition:** A code specifying the state of the transport event.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** true
   * - **isModifierReason:** This element is labelled as a modifier because it is a status element that contains status entered-in-error which means that the resource should not be treated as valid
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link TransportStatusEnum }
   */
  private status?: EnumCodeType | undefined;

  /**
   * Transport.statusReason Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Reason for current status
   * - **Definition:** An explanation as to why this transport is held, failed, was refused, etc.
   * - **Comment:** This applies to the current status.  Look at the history of the transport to see reasons for past statuses.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private statusReason?: CodeableConcept | undefined;

  /**
   * Transport.intent Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** unknown | proposal | plan | order | original-order | reflex-order | filler-order | instance-order | option
   * - **Definition:** Indicates the "level" of actionability associated with the Transport, i.e. i+R[9]Cs this a proposed transport, a planned transport, an actionable transport, etc.
   * - **Comment:** This element is immutable.  Proposed transports, planned transports, etc. must be distinct instances. In most cases, Transports will have an intent of "order".
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private intent: CodeType | null;

  /**
   * FHIR CodeSystem: RequestPriority
   *
   * @see {@link RequestPriorityEnum }
   */
  private readonly requestPriorityEnum: RequestPriorityEnum;

  /**
   * Transport.priority Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** routine | urgent | asap | stat
   * - **Definition:** Indicates how quickly the Transport should be addressed with respect to other requests.
   * - **Requirements:** Used to identify the service level expected while performing a transport.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link RequestPriorityEnum }
   */
  private priority?: EnumCodeType | undefined;

  /**
   * Transport.code Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Transport Type
   * - **Definition:** A name or code (or both) briefly describing what the transport involves.
   * - **Comment:** The title (eg "My Transports", "Outstanding Transports for Patient X") should go into the code.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private code?: CodeableConcept | undefined;

  /**
   * Transport.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Human-readable explanation of transport
   * - **Definition:** A free-text description of what is to be performed.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private description?: StringType | undefined;

  /**
   * Transport.focus Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** What transport is acting on
   * - **Definition:** The request being actioned or the resource being manipulated by this transport.
   * - **Comment:** If multiple resources need to be manipulated, use sub-transports.  (This ensures that status can be tracked independently for each referenced resource.).
   * - **Requirements:** Used to identify the thing to be done.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Resource',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private focus?: Reference | undefined;

  /**
   * Transport.for Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Beneficiary of the Transport
   * - **Definition:** The entity who benefits from the performance of the service specified in the transport (e.g., the patient).
   * - **Requirements:** Used to track transports outstanding for a beneficiary.  Do not use to track the transport owner or creator (see owner and creator respectively).  This can also affect access control.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Resource',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private for_?: Reference | undefined;

  /**
   * Transport.encounter Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Healthcare event during which this transport originated
   * - **Definition:** The healthcare event  (e.g. a patient and healthcare provider interaction) during which this transport was created.
   * - **Requirements:** For some transports it may be important to know the link between the encounter the transport originated within.
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
   * Transport.completionTime Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Completion time of the event (the occurrence)
   * - **Definition:** Identifies the completion time of the event (the occurrence).
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private completionTime?: DateTimeType | undefined;

  /**
   * Transport.authoredOn Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Transport Creation Date
   * - **Definition:** The date and time this transport was created.
   * - **Requirements:** Most often used along with lastUpdated to track duration of the transport to supporting monitoring and management.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private authoredOn?: DateTimeType | undefined;

  /**
   * Transport.lastModified Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Transport Last Modified Date
   * - **Definition:** The date and time of last modification to this transport.
   * - **Requirements:** Used along with history to track transport activity and time in a particular transport state.  This enables monitoring and management.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private lastModified?: DateTimeType | undefined;

  /**
   * Transport.requester Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who is asking for transport to be done
   * - **Definition:** The creator of the transport.
   * - **Requirements:** Identifies who created this transport.  May be used by access control mechanisms (e.g., to ensure that only the creator can cancel a transport).
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Device',
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
  private requester?: Reference | undefined;

  /**
   * Transport.performerType Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Requested performer
   * - **Definition:** The kind of participant that should perform the transport.
   * - **Requirements:** Use to distinguish transports on different activity queues.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private performerType?: CodeableConcept[] | undefined;

  /**
   * Transport.owner Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Responsible individual
   * - **Definition:** Individual organization or Device currently responsible for transport execution.
   * - **Comment:** Transports may be created with an owner not yet identified.
   * - **Requirements:** Identifies who is expected to perform this transport.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *       'http://hl7.org/fhir/StructureDefinition/CareTeam',
   *       'http://hl7.org/fhir/StructureDefinition/HealthcareService',
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/Device',
   *       'http://hl7.org/fhir/StructureDefinition/RelatedPerson',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private owner?: Reference | undefined;

  /**
   * Transport.location Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Where transport occurs
   * - **Definition:** Principal physical location where this transport is performed.
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
   * Transport.insurance Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Associated insurance coverage
   * - **Definition:** Insurance plans, coverage extensions, pre-authorizations and/or pre-determinations that may be relevant to the Transport.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Coverage',
   *       'http://hl7.org/fhir/StructureDefinition/ClaimResponse',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private insurance?: Reference[] | undefined;

  /**
   * Transport.note Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Comments made about the transport
   * - **Definition:** Free-text information captured about the transport as it progresses.
   * - **FHIR Type:** `Annotation`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private note?: Annotation[] | undefined;

  /**
   * Transport.relevantHistory Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Key events in history of the Transport
   * - **Definition:** Links to Provenance records for past versions of this Transport that identify key state transitions or updates that are likely to be relevant to a user looking at the current version of the transport.
   * - **Comment:** This element does not point to the Provenance associated with the *current* version of the resource - as it would be created after this version existed.  The Provenance for the current version can be retrieved with a _revinclude.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Provenance',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private relevantHistory?: Reference[] | undefined;

  /**
   * Transport.restriction Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Constraints on fulfillment transports
   * - **Definition:** If the Transport.focus is a request resource and the transport is seeking fulfillment (i.e. is asking for the request to be actioned), this element identifies any limitations on what parts of the referenced request should be actioned.
   * - **Requirements:** Sometimes when fulfillment is sought, you don\'t want full fulfillment.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private restriction?: TransportRestrictionComponent | undefined;

  /**
   * Transport.input Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Information used to perform transport
   * - **Definition:** Additional information that may be needed in the execution of the transport.
   * - **Requirements:** Resources and data used to perform the transport.  This data is used in the business logic of transport execution, and is stored separately because it varies between workflows.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private input?: TransportInputComponent[] | undefined;

  /**
   * Transport.output Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Information produced as part of transport
   * - **Definition:** Outputs produced by the Transport.
   * - **Requirements:** Resources and data produced during the execution the transport.  This data is generated by the business logic of transport execution, and is stored separately because it varies between workflows.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private output?: TransportOutputComponent[] | undefined;

  /**
   * Transport.requestedLocation Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The desired location
   * - **Definition:** The desired or final location for the transport.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Location',
   *     ]
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private requestedLocation: Reference | null;

  /**
   * Transport.currentLocation Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The entity current location
   * - **Definition:** The current location for the entity to be transported.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Location',
   *     ]
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private currentLocation: Reference | null;

  /**
   * Transport.reason Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Why transport is needed
   * - **Definition:** A resource reference indicating why this transport needs to be performed.
   * - **Comment:** Transports might be justified based on an Observation, a Condition, a past or planned procedure, etc. This should only be included if there is no focus or if it differs from the reason indicated on the focus.    Use the CodeableConcept text element in `Transport.reasonCode` if the data is free (uncoded) text.
   * - **FHIR Type:** `CodeableReference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Resource',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private reason?: CodeableReference | undefined;

  /**
   * Transport.history Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Parent (or preceding) transport
   * - **Definition:** The transport event prior to this one.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Transport',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private history?: Reference | undefined;

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
      const optErrMsg = `Invalid Transport.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid Transport.identifier; Provided element is not an instance of Identifier.`;
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
   * @returns the `instantiatesCanonical` property value as a CanonicalType object if defined; else an empty CanonicalType object
   */
  public getInstantiatesCanonicalElement(): CanonicalType {
    return this.instantiatesCanonical ?? new CanonicalType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `instantiatesCanonical` property.
   *
   * @param element - the `instantiatesCanonical` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setInstantiatesCanonicalElement(element: CanonicalType | undefined): this {
    if (isDefined<CanonicalType>(element)) {
      const optErrMsg = `Invalid Transport.instantiatesCanonical; Provided element is not an instance of CanonicalType.`;
      assertFhirType<CanonicalType>(element, CanonicalType, optErrMsg);
      this.instantiatesCanonical = element;
    } else {
      this.instantiatesCanonical = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `instantiatesCanonical` property exists and has a value; `false` otherwise
   */
  public hasInstantiatesCanonicalElement(): boolean {
    return isDefined<CanonicalType>(this.instantiatesCanonical) && !this.instantiatesCanonical.isEmpty();
  }

  /**
   * @returns the `instantiatesCanonical` property value as a fhirCanonical if defined; else undefined
   */
  public getInstantiatesCanonical(): fhirCanonical | undefined {
    return this.instantiatesCanonical?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `instantiatesCanonical` property.
   *
   * @param value - the `instantiatesCanonical` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setInstantiatesCanonical(value: fhirCanonical | undefined): this {
    if (isDefined<fhirCanonical>(value)) {
      const optErrMsg = `Invalid Transport.instantiatesCanonical (${String(value)})`;
      this.instantiatesCanonical = new CanonicalType(parseFhirPrimitiveData(value, fhirCanonicalSchema, optErrMsg));
    } else {
      this.instantiatesCanonical = undefined;
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
   * @returns the `instantiatesUri` property value as a UriType object if defined; else an empty UriType object
   */
  public getInstantiatesUriElement(): UriType {
    return this.instantiatesUri ?? new UriType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `instantiatesUri` property.
   *
   * @param element - the `instantiatesUri` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setInstantiatesUriElement(element: UriType | undefined): this {
    if (isDefined<UriType>(element)) {
      const optErrMsg = `Invalid Transport.instantiatesUri; Provided element is not an instance of UriType.`;
      assertFhirType<UriType>(element, UriType, optErrMsg);
      this.instantiatesUri = element;
    } else {
      this.instantiatesUri = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `instantiatesUri` property exists and has a value; `false` otherwise
   */
  public hasInstantiatesUriElement(): boolean {
    return isDefined<UriType>(this.instantiatesUri) && !this.instantiatesUri.isEmpty();
  }

  /**
   * @returns the `instantiatesUri` property value as a fhirUri if defined; else undefined
   */
  public getInstantiatesUri(): fhirUri | undefined {
    return this.instantiatesUri?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `instantiatesUri` property.
   *
   * @param value - the `instantiatesUri` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setInstantiatesUri(value: fhirUri | undefined): this {
    if (isDefined<fhirUri>(value)) {
      const optErrMsg = `Invalid Transport.instantiatesUri (${String(value)})`;
      this.instantiatesUri = new UriType(parseFhirPrimitiveData(value, fhirUriSchema, optErrMsg));
    } else {
      this.instantiatesUri = undefined;
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
   * @returns the `basedOn` property value as a Reference array
   */
  public getBasedOn(): Reference[] {
    return this.basedOn ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `basedOn` property.
   *
   * @decorator `@ReferenceTargets('Transport.basedOn', ['Resource',])`
   *
   * @param value - the `basedOn` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Transport.basedOn', [
    'Resource',
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
   * @decorator `@ReferenceTargets('Transport.basedOn', ['Resource',])`
   *
   * @param value - the `basedOn` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Transport.basedOn', [
    'Resource',
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
      const optErrMsg = `Invalid Transport.groupIdentifier; Provided element is not an instance of Identifier.`;
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
   * @returns the `partOf` property value as a Reference array
   */
  public getPartOf(): Reference[] {
    return this.partOf ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `partOf` property.
   *
   * @decorator `@ReferenceTargets('Transport.partOf', ['Transport',])`
   *
   * @param value - the `partOf` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Transport.partOf', [
    'Transport',
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
   * @decorator `@ReferenceTargets('Transport.partOf', ['Transport',])`
   *
   * @param value - the `partOf` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Transport.partOf', [
    'Transport',
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
   * @returns the `status` property value as a EnumCodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link TransportStatusEnum }
   */
  public getStatusEnumType(): EnumCodeType | undefined {
    return this.status;
  }

  /**
   * Assigns the provided EnumCodeType value to the `status` property.
   *
   * @param enumType - the `status` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code values
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link TransportStatusEnum }
   */
  public setStatusEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = 'Invalid Transport.status';
      assertEnumCodeType<TransportStatusEnum>(enumType, TransportStatusEnum, errMsgPrefix);
      this.status = enumType;
    } else {
      this.status = undefined;
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
   * @returns the `status` property value as a CodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link TransportStatusEnum }
   */
  public getStatusElement(): CodeType | undefined {
    if (this.status === undefined) {
      return undefined;
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
   * @see CodeSystem Enumeration: {@link TransportStatusEnum }
   */
  public setStatusElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid Transport.status; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.status = new EnumCodeType(element, this.transportStatusEnum);
    } else {
      this.status = undefined;
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
   * @returns the `status` property value as a fhirCode if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link TransportStatusEnum }
   */
  public getStatus(): fhirCode | undefined {
    if (this.status === undefined) {
      return undefined;
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
   * @see CodeSystem Enumeration: {@link TransportStatusEnum }
   */
  public setStatus(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid Transport.status; Provided value is not an instance of fhirCode.`;
      this.status = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.transportStatusEnum);
    } else {
      this.status = undefined;
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
      const optErrMsg = `Invalid Transport.statusReason; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `intent` property value as a CodeType object if defined; else an empty CodeType object
   */
  public getIntentElement(): CodeType {
    return this.intent ?? new CodeType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `intent` property.
   *
   * @param element - the `intent` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setIntentElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid Transport.intent; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.intent = element;
    } else {
      this.intent = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `intent` property exists and has a value; `false` otherwise
   */
  public hasIntentElement(): boolean {
    return isDefined<CodeType>(this.intent) && !this.intent.isEmpty();
  }

  /**
   * @returns the `intent` property value as a fhirCode if defined; else null
   */
  public getIntent(): fhirCode | null {
    if (this.intent?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.intent.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `intent` property.
   *
   * @param value - the `intent` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setIntent(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid Transport.intent (${String(value)})`;
      this.intent = new CodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg));
    } else {
      this.intent = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `intent` property exists and has a value; `false` otherwise
   */
  public hasIntent(): boolean {
    return this.hasIntentElement();
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
      const errMsgPrefix = 'Invalid Transport.priority';
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
      const optErrMsg = `Invalid Transport.priority; Provided element is not an instance of CodeType.`;
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
      const optErrMsg = `Invalid Transport.priority; Provided value is not an instance of fhirCode.`;
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
      const optErrMsg = `Invalid Transport.code; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid Transport.description; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid Transport.description (${String(value)})`;
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
   * @returns the `focus` property value as a Reference object; else an empty Reference object
   */
  public getFocus(): Reference {
    return this.focus ?? new Reference();
  }

  /**
   * Assigns the provided Focus object value to the `focus` property.
   *
   * @decorator `@ReferenceTargets('Transport.focus', ['Resource',])`
   *
   * @param value - the `focus` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Transport.focus', [
    'Resource',
  ])
  public setFocus(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.focus = value;
    } else {
      this.focus = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `focus` property exists and has a value; `false` otherwise
   */
  public hasFocus(): boolean {
    return isDefined<Reference>(this.focus) && !this.focus.isEmpty();
  }

  /**
   * @returns the `for_` property value as a Reference object; else an empty Reference object
   */
  public getFor(): Reference {
    return this.for_ ?? new Reference();
  }

  /**
   * Assigns the provided For object value to the `for_` property.
   *
   * @decorator `@ReferenceTargets('Transport.for', ['Resource',])`
   *
   * @param value - the `for_` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Transport.for', [
    'Resource',
  ])
  public setFor(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.for_ = value;
    } else {
      this.for_ = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `for_` property exists and has a value; `false` otherwise
   */
  public hasFor(): boolean {
    return isDefined<Reference>(this.for_) && !this.for_.isEmpty();
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
   * @decorator `@ReferenceTargets('Transport.encounter', ['Encounter',])`
   *
   * @param value - the `encounter` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Transport.encounter', [
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
   * @returns the `completionTime` property value as a DateTimeType object if defined; else an empty DateTimeType object
   */
  public getCompletionTimeElement(): DateTimeType {
    return this.completionTime ?? new DateTimeType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `completionTime` property.
   *
   * @param element - the `completionTime` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCompletionTimeElement(element: DateTimeType | undefined): this {
    if (isDefined<DateTimeType>(element)) {
      const optErrMsg = `Invalid Transport.completionTime; Provided element is not an instance of DateTimeType.`;
      assertFhirType<DateTimeType>(element, DateTimeType, optErrMsg);
      this.completionTime = element;
    } else {
      this.completionTime = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `completionTime` property exists and has a value; `false` otherwise
   */
  public hasCompletionTimeElement(): boolean {
    return isDefined<DateTimeType>(this.completionTime) && !this.completionTime.isEmpty();
  }

  /**
   * @returns the `completionTime` property value as a fhirDateTime if defined; else undefined
   */
  public getCompletionTime(): fhirDateTime | undefined {
    return this.completionTime?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `completionTime` property.
   *
   * @param value - the `completionTime` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCompletionTime(value: fhirDateTime | undefined): this {
    if (isDefined<fhirDateTime>(value)) {
      const optErrMsg = `Invalid Transport.completionTime (${String(value)})`;
      this.completionTime = new DateTimeType(parseFhirPrimitiveData(value, fhirDateTimeSchema, optErrMsg));
    } else {
      this.completionTime = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `completionTime` property exists and has a value; `false` otherwise
   */
  public hasCompletionTime(): boolean {
    return this.hasCompletionTimeElement();
  }

  /**
   * @returns the `authoredOn` property value as a DateTimeType object if defined; else an empty DateTimeType object
   */
  public getAuthoredOnElement(): DateTimeType {
    return this.authoredOn ?? new DateTimeType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `authoredOn` property.
   *
   * @param element - the `authoredOn` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAuthoredOnElement(element: DateTimeType | undefined): this {
    if (isDefined<DateTimeType>(element)) {
      const optErrMsg = `Invalid Transport.authoredOn; Provided element is not an instance of DateTimeType.`;
      assertFhirType<DateTimeType>(element, DateTimeType, optErrMsg);
      this.authoredOn = element;
    } else {
      this.authoredOn = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `authoredOn` property exists and has a value; `false` otherwise
   */
  public hasAuthoredOnElement(): boolean {
    return isDefined<DateTimeType>(this.authoredOn) && !this.authoredOn.isEmpty();
  }

  /**
   * @returns the `authoredOn` property value as a fhirDateTime if defined; else undefined
   */
  public getAuthoredOn(): fhirDateTime | undefined {
    return this.authoredOn?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `authoredOn` property.
   *
   * @param value - the `authoredOn` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAuthoredOn(value: fhirDateTime | undefined): this {
    if (isDefined<fhirDateTime>(value)) {
      const optErrMsg = `Invalid Transport.authoredOn (${String(value)})`;
      this.authoredOn = new DateTimeType(parseFhirPrimitiveData(value, fhirDateTimeSchema, optErrMsg));
    } else {
      this.authoredOn = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `authoredOn` property exists and has a value; `false` otherwise
   */
  public hasAuthoredOn(): boolean {
    return this.hasAuthoredOnElement();
  }

  /**
   * @returns the `lastModified` property value as a DateTimeType object if defined; else an empty DateTimeType object
   */
  public getLastModifiedElement(): DateTimeType {
    return this.lastModified ?? new DateTimeType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `lastModified` property.
   *
   * @param element - the `lastModified` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setLastModifiedElement(element: DateTimeType | undefined): this {
    if (isDefined<DateTimeType>(element)) {
      const optErrMsg = `Invalid Transport.lastModified; Provided element is not an instance of DateTimeType.`;
      assertFhirType<DateTimeType>(element, DateTimeType, optErrMsg);
      this.lastModified = element;
    } else {
      this.lastModified = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `lastModified` property exists and has a value; `false` otherwise
   */
  public hasLastModifiedElement(): boolean {
    return isDefined<DateTimeType>(this.lastModified) && !this.lastModified.isEmpty();
  }

  /**
   * @returns the `lastModified` property value as a fhirDateTime if defined; else undefined
   */
  public getLastModified(): fhirDateTime | undefined {
    return this.lastModified?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `lastModified` property.
   *
   * @param value - the `lastModified` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setLastModified(value: fhirDateTime | undefined): this {
    if (isDefined<fhirDateTime>(value)) {
      const optErrMsg = `Invalid Transport.lastModified (${String(value)})`;
      this.lastModified = new DateTimeType(parseFhirPrimitiveData(value, fhirDateTimeSchema, optErrMsg));
    } else {
      this.lastModified = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `lastModified` property exists and has a value; `false` otherwise
   */
  public hasLastModified(): boolean {
    return this.hasLastModifiedElement();
  }

  /**
   * @returns the `requester` property value as a Reference object; else an empty Reference object
   */
  public getRequester(): Reference {
    return this.requester ?? new Reference();
  }

  /**
   * Assigns the provided Requester object value to the `requester` property.
   *
   * @decorator `@ReferenceTargets('Transport.requester', ['Device','Organization','Patient','Practitioner','PractitionerRole','RelatedPerson',])`
   *
   * @param value - the `requester` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Transport.requester', [
    'Device',
  
    'Organization',
  
    'Patient',
  
    'Practitioner',
  
    'PractitionerRole',
  
    'RelatedPerson',
  ])
  public setRequester(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.requester = value;
    } else {
      this.requester = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `requester` property exists and has a value; `false` otherwise
   */
  public hasRequester(): boolean {
    return isDefined<Reference>(this.requester) && !this.requester.isEmpty();
  }

  /**
   * @returns the `performerType` property value as a CodeableConcept array
   */
  public getPerformerType(): CodeableConcept[] {
    return this.performerType ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `performerType` property.
   *
   * @param value - the `performerType` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPerformerType(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Transport.performerType; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.performerType = value;
    } else {
      this.performerType = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `performerType` array property.
   *
   * @param value - the `performerType` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addPerformerType(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Transport.performerType; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initPerformerType();
      this.performerType?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `performerType` property exists and has a value; `false` otherwise
   */
  public hasPerformerType(): boolean {
    return isDefinedList<CodeableConcept>(this.performerType) && this.performerType.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `performerType` property
   */
  private initPerformerType(): void {
    if(!this.hasPerformerType()) {
      this.performerType = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `owner` property value as a Reference object; else an empty Reference object
   */
  public getOwner(): Reference {
    return this.owner ?? new Reference();
  }

  /**
   * Assigns the provided Owner object value to the `owner` property.
   *
   * @decorator `@ReferenceTargets('Transport.owner', ['Practitioner','PractitionerRole','Organization','CareTeam','HealthcareService','Patient','Device','RelatedPerson',])`
   *
   * @param value - the `owner` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Transport.owner', [
    'Practitioner',
  
    'PractitionerRole',
  
    'Organization',
  
    'CareTeam',
  
    'HealthcareService',
  
    'Patient',
  
    'Device',
  
    'RelatedPerson',
  ])
  public setOwner(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.owner = value;
    } else {
      this.owner = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `owner` property exists and has a value; `false` otherwise
   */
  public hasOwner(): boolean {
    return isDefined<Reference>(this.owner) && !this.owner.isEmpty();
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
   * @decorator `@ReferenceTargets('Transport.location', ['Location',])`
   *
   * @param value - the `location` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Transport.location', [
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
   * @returns the `insurance` property value as a Reference array
   */
  public getInsurance(): Reference[] {
    return this.insurance ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `insurance` property.
   *
   * @decorator `@ReferenceTargets('Transport.insurance', ['Coverage','ClaimResponse',])`
   *
   * @param value - the `insurance` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Transport.insurance', [
    'Coverage',
  
    'ClaimResponse',
  ])
  public setInsurance(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.insurance = value;
    } else {
      this.insurance = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `insurance` array property.
   *
   * @decorator `@ReferenceTargets('Transport.insurance', ['Coverage','ClaimResponse',])`
   *
   * @param value - the `insurance` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Transport.insurance', [
    'Coverage',
  
    'ClaimResponse',
  ])
  public addInsurance(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initInsurance();
      this.insurance?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `insurance` property exists and has a value; `false` otherwise
   */
  public hasInsurance(): boolean {
    return isDefinedList<Reference>(this.insurance) && this.insurance.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `insurance` property
   */
  private initInsurance(): void {
    if (!this.hasInsurance()) {
      this.insurance = [] as Reference[];
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
      const optErrMsg = `Invalid Transport.note; Provided value array has an element that is not an instance of Annotation.`;
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
      const optErrMsg = `Invalid Transport.note; Provided element is not an instance of Annotation.`;
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
   * @returns the `relevantHistory` property value as a Reference array
   */
  public getRelevantHistory(): Reference[] {
    return this.relevantHistory ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `relevantHistory` property.
   *
   * @decorator `@ReferenceTargets('Transport.relevantHistory', ['Provenance',])`
   *
   * @param value - the `relevantHistory` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Transport.relevantHistory', [
    'Provenance',
  ])
  public setRelevantHistory(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.relevantHistory = value;
    } else {
      this.relevantHistory = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `relevantHistory` array property.
   *
   * @decorator `@ReferenceTargets('Transport.relevantHistory', ['Provenance',])`
   *
   * @param value - the `relevantHistory` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Transport.relevantHistory', [
    'Provenance',
  ])
  public addRelevantHistory(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initRelevantHistory();
      this.relevantHistory?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `relevantHistory` property exists and has a value; `false` otherwise
   */
  public hasRelevantHistory(): boolean {
    return isDefinedList<Reference>(this.relevantHistory) && this.relevantHistory.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `relevantHistory` property
   */
  private initRelevantHistory(): void {
    if (!this.hasRelevantHistory()) {
      this.relevantHistory = [] as Reference[];
    }
  }

  /**
   * @returns the `restriction` property value as a TransportRestrictionComponent object if defined; else an empty TransportRestrictionComponent object
   */
  public getRestriction(): TransportRestrictionComponent {
    return this.restriction ?? new TransportRestrictionComponent();
  }

  /**
   * Assigns the provided Restriction object value to the `restriction` property.
   *
   * @param value - the `restriction` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setRestriction(value: TransportRestrictionComponent | undefined): this {
    if (isDefined<TransportRestrictionComponent>(value)) {
      const optErrMsg = `Invalid Transport.restriction; Provided element is not an instance of TransportRestrictionComponent.`;
      assertFhirType<TransportRestrictionComponent>(value, TransportRestrictionComponent, optErrMsg);
      this.restriction = value;
    } else {
      this.restriction = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `restriction` property exists and has a value; `false` otherwise
   */
  public hasRestriction(): boolean {
    return isDefined<TransportRestrictionComponent>(this.restriction) && !this.restriction.isEmpty();
  }

  /**
   * @returns the `input` property value as a TransportInputComponent array
   */
  public getInput(): TransportInputComponent[] {
    return this.input ?? ([] as TransportInputComponent[]);
  }

  /**
   * Assigns the provided TransportInputComponent array value to the `input` property.
   *
   * @param value - the `input` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setInput(value: TransportInputComponent[] | undefined): this {
    if (isDefinedList<TransportInputComponent>(value)) {
      const optErrMsg = `Invalid Transport.input; Provided value array has an element that is not an instance of TransportInputComponent.`;
      assertFhirTypeList<TransportInputComponent>(value, TransportInputComponent, optErrMsg);
      this.input = value;
    } else {
      this.input = undefined;
    }
    return this;
  }

  /**
   * Add the provided TransportInputComponent value to the `input` array property.
   *
   * @param value - the `input` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addInput(value: TransportInputComponent | undefined): this {
    if (isDefined<TransportInputComponent>(value)) {
      const optErrMsg = `Invalid Transport.input; Provided element is not an instance of TransportInputComponent.`;
      assertFhirType<TransportInputComponent>(value, TransportInputComponent, optErrMsg);
      this.initInput();
      this.input?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `input` property exists and has a value; `false` otherwise
   */
  public hasInput(): boolean {
    return isDefinedList<TransportInputComponent>(this.input) && this.input.some((item: TransportInputComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `input` property
   */
  private initInput(): void {
    if(!this.hasInput()) {
      this.input = [] as TransportInputComponent[];
    }
  }

  /**
   * @returns the `output` property value as a TransportOutputComponent array
   */
  public getOutput(): TransportOutputComponent[] {
    return this.output ?? ([] as TransportOutputComponent[]);
  }

  /**
   * Assigns the provided TransportOutputComponent array value to the `output` property.
   *
   * @param value - the `output` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setOutput(value: TransportOutputComponent[] | undefined): this {
    if (isDefinedList<TransportOutputComponent>(value)) {
      const optErrMsg = `Invalid Transport.output; Provided value array has an element that is not an instance of TransportOutputComponent.`;
      assertFhirTypeList<TransportOutputComponent>(value, TransportOutputComponent, optErrMsg);
      this.output = value;
    } else {
      this.output = undefined;
    }
    return this;
  }

  /**
   * Add the provided TransportOutputComponent value to the `output` array property.
   *
   * @param value - the `output` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addOutput(value: TransportOutputComponent | undefined): this {
    if (isDefined<TransportOutputComponent>(value)) {
      const optErrMsg = `Invalid Transport.output; Provided element is not an instance of TransportOutputComponent.`;
      assertFhirType<TransportOutputComponent>(value, TransportOutputComponent, optErrMsg);
      this.initOutput();
      this.output?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `output` property exists and has a value; `false` otherwise
   */
  public hasOutput(): boolean {
    return isDefinedList<TransportOutputComponent>(this.output) && this.output.some((item: TransportOutputComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `output` property
   */
  private initOutput(): void {
    if(!this.hasOutput()) {
      this.output = [] as TransportOutputComponent[];
    }
  }

  /**
   * @returns the `requestedLocation` property value as a Reference object if defined; else an empty Reference object
   */
  public getRequestedLocation(): Reference {
    return this.requestedLocation ?? new Reference();
  }

  /**
   * Assigns the provided RequestedLocation object value to the `requestedLocation` property.
   *
   * @decorator `@ReferenceTargets('Transport.requestedLocation', ['Location',])`
   *
   * @param value - the `requestedLocation` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Transport.requestedLocation', [
    'Location',
  ])
  public setRequestedLocation(value: Reference | undefined | null): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.requestedLocation = value;
    } else {
      this.requestedLocation = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `requestedLocation` property exists and has a value; `false` otherwise
   */
  public hasRequestedLocation(): boolean {
    return isDefined<Reference>(this.requestedLocation) && !this.requestedLocation.isEmpty();
  }

  /**
   * @returns the `currentLocation` property value as a Reference object if defined; else an empty Reference object
   */
  public getCurrentLocation(): Reference {
    return this.currentLocation ?? new Reference();
  }

  /**
   * Assigns the provided CurrentLocation object value to the `currentLocation` property.
   *
   * @decorator `@ReferenceTargets('Transport.currentLocation', ['Location',])`
   *
   * @param value - the `currentLocation` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Transport.currentLocation', [
    'Location',
  ])
  public setCurrentLocation(value: Reference | undefined | null): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.currentLocation = value;
    } else {
      this.currentLocation = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `currentLocation` property exists and has a value; `false` otherwise
   */
  public hasCurrentLocation(): boolean {
    return isDefined<Reference>(this.currentLocation) && !this.currentLocation.isEmpty();
  }

  /**
   * @returns the `reason` property value as a CodeableReference object if defined; else an empty CodeableReference object
   */
  public getReason(): CodeableReference {
    return this.reason ?? new CodeableReference();
  }

  /**
   * Assigns the provided Reason object value to the `reason` property.
   *
   * @param value - the `reason` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setReason(value: CodeableReference | undefined): this {
    if (isDefined<CodeableReference>(value)) {
      const optErrMsg = `Invalid Transport.reason; Provided element is not an instance of CodeableReference.`;
      assertFhirType<CodeableReference>(value, CodeableReference, optErrMsg);
      this.reason = value;
    } else {
      this.reason = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `reason` property exists and has a value; `false` otherwise
   */
  public hasReason(): boolean {
    return isDefined<CodeableReference>(this.reason) && !this.reason.isEmpty();
  }

  /**
   * @returns the `history` property value as a Reference object; else an empty Reference object
   */
  public getHistory(): Reference {
    return this.history ?? new Reference();
  }

  /**
   * Assigns the provided History object value to the `history` property.
   *
   * @decorator `@ReferenceTargets('Transport.history', ['Transport',])`
   *
   * @param value - the `history` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Transport.history', [
    'Transport',
  ])
  public setHistory(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.history = value;
    } else {
      this.history = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `history` property exists and has a value; `false` otherwise
   */
  public hasHistory(): boolean {
    return isDefined<Reference>(this.history) && !this.history.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Transport';
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
      this.groupIdentifier,
      this.partOf,
      this.status,
      this.statusReason,
      this.intent,
      this.priority,
      this.code,
      this.description,
      this.focus,
      this.for_,
      this.encounter,
      this.completionTime,
      this.authoredOn,
      this.lastModified,
      this.requester,
      this.performerType,
      this.owner,
      this.location,
      this.insurance,
      this.note,
      this.relevantHistory,
      this.restriction,
      this.input,
      this.output,
      this.requestedLocation,
      this.currentLocation,
      this.reason,
      this.history,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.intent, this.requestedLocation, this.currentLocation, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): Transport {
    const dest = new Transport();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: Transport): void {
    super.copyValues(dest);
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    dest.instantiatesCanonical = this.instantiatesCanonical?.copy();
    dest.instantiatesUri = this.instantiatesUri?.copy();
    const basedOnList = copyListValues<Reference>(this.basedOn);
    dest.basedOn = basedOnList.length === 0 ? undefined : basedOnList;
    dest.groupIdentifier = this.groupIdentifier?.copy();
    const partOfList = copyListValues<Reference>(this.partOf);
    dest.partOf = partOfList.length === 0 ? undefined : partOfList;
    dest.status = this.status?.copy();
    dest.statusReason = this.statusReason?.copy();
    dest.intent = this.intent ? this.intent.copy() : null;
    dest.priority = this.priority?.copy();
    dest.code = this.code?.copy();
    dest.description = this.description?.copy();
    dest.focus = this.focus?.copy();
    dest.for_ = this.for_?.copy();
    dest.encounter = this.encounter?.copy();
    dest.completionTime = this.completionTime?.copy();
    dest.authoredOn = this.authoredOn?.copy();
    dest.lastModified = this.lastModified?.copy();
    dest.requester = this.requester?.copy();
    const performerTypeList = copyListValues<CodeableConcept>(this.performerType);
    dest.performerType = performerTypeList.length === 0 ? undefined : performerTypeList;
    dest.owner = this.owner?.copy();
    dest.location = this.location?.copy();
    const insuranceList = copyListValues<Reference>(this.insurance);
    dest.insurance = insuranceList.length === 0 ? undefined : insuranceList;
    const noteList = copyListValues<Annotation>(this.note);
    dest.note = noteList.length === 0 ? undefined : noteList;
    const relevantHistoryList = copyListValues<Reference>(this.relevantHistory);
    dest.relevantHistory = relevantHistoryList.length === 0 ? undefined : relevantHistoryList;
    dest.restriction = this.restriction?.copy();
    const inputList = copyListValues<TransportInputComponent>(this.input);
    dest.input = inputList.length === 0 ? undefined : inputList;
    const outputList = copyListValues<TransportOutputComponent>(this.output);
    dest.output = outputList.length === 0 ? undefined : outputList;
    dest.requestedLocation = this.requestedLocation ? this.requestedLocation.copy() : null;
    dest.currentLocation = this.currentLocation ? this.currentLocation.copy() : null;
    dest.reason = this.reason?.copy();
    dest.history = this.history?.copy();
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

    if (this.hasInstantiatesCanonicalElement()) {
      setFhirPrimitiveJson<fhirCanonical>(this.getInstantiatesCanonicalElement(), 'instantiatesCanonical', jsonObj);
    }

    if (this.hasInstantiatesUriElement()) {
      setFhirPrimitiveJson<fhirUri>(this.getInstantiatesUriElement(), 'instantiatesUri', jsonObj);
    }

    if (this.hasBasedOn()) {
      setFhirComplexListJson(this.getBasedOn(), 'basedOn', jsonObj);
    }

    if (this.hasGroupIdentifier()) {
      setFhirComplexJson(this.getGroupIdentifier(), 'groupIdentifier', jsonObj);
    }

    if (this.hasPartOf()) {
      setFhirComplexListJson(this.getPartOf(), 'partOf', jsonObj);
    }

    if (this.hasStatusElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getStatusElement()!, 'status', jsonObj);
    }

    if (this.hasStatusReason()) {
      setFhirComplexJson(this.getStatusReason(), 'statusReason', jsonObj);
    }

    if (this.hasIntentElement()) {
      setFhirPrimitiveJson<fhirCode>(this.getIntentElement(), 'intent', jsonObj);
    }

    if (this.hasPriorityElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getPriorityElement()!, 'priority', jsonObj);
    }

    if (this.hasCode()) {
      setFhirComplexJson(this.getCode(), 'code', jsonObj);
    }

    if (this.hasDescriptionElement()) {
      setFhirPrimitiveJson<fhirString>(this.getDescriptionElement(), 'description', jsonObj);
    }

    if (this.hasFocus()) {
      setFhirComplexJson(this.getFocus(), 'focus', jsonObj);
    }

    if (this.hasFor()) {
      setFhirComplexJson(this.getFor(), 'for', jsonObj);
    }

    if (this.hasEncounter()) {
      setFhirComplexJson(this.getEncounter(), 'encounter', jsonObj);
    }

    if (this.hasCompletionTimeElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getCompletionTimeElement(), 'completionTime', jsonObj);
    }

    if (this.hasAuthoredOnElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getAuthoredOnElement(), 'authoredOn', jsonObj);
    }

    if (this.hasLastModifiedElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getLastModifiedElement(), 'lastModified', jsonObj);
    }

    if (this.hasRequester()) {
      setFhirComplexJson(this.getRequester(), 'requester', jsonObj);
    }

    if (this.hasPerformerType()) {
      setFhirComplexListJson(this.getPerformerType(), 'performerType', jsonObj);
    }

    if (this.hasOwner()) {
      setFhirComplexJson(this.getOwner(), 'owner', jsonObj);
    }

    if (this.hasLocation()) {
      setFhirComplexJson(this.getLocation(), 'location', jsonObj);
    }

    if (this.hasInsurance()) {
      setFhirComplexListJson(this.getInsurance(), 'insurance', jsonObj);
    }

    if (this.hasNote()) {
      setFhirComplexListJson(this.getNote(), 'note', jsonObj);
    }

    if (this.hasRelevantHistory()) {
      setFhirComplexListJson(this.getRelevantHistory(), 'relevantHistory', jsonObj);
    }

    if (this.hasRestriction()) {
      setFhirBackboneElementJson(this.getRestriction(), 'restriction', jsonObj);
    }

    if (this.hasInput()) {
      setFhirBackboneElementListJson(this.getInput(), 'input', jsonObj);
    }

    if (this.hasOutput()) {
      setFhirBackboneElementListJson(this.getOutput(), 'output', jsonObj);
    }

    if (this.hasRequestedLocation()) {
      setFhirComplexJson(this.getRequestedLocation(), 'requestedLocation', jsonObj);
    }

    if (this.hasCurrentLocation()) {
      setFhirComplexJson(this.getCurrentLocation(), 'currentLocation', jsonObj);
    }

    if (this.hasReason()) {
      setFhirComplexJson(this.getReason(), 'reason', jsonObj);
    }

    if (this.hasHistory()) {
      setFhirComplexJson(this.getHistory(), 'history', jsonObj);
    }

    return jsonObj;
  }
}

/**
 * TransportRestrictionComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Constraints on fulfillment transports
 * - **Definition:** If the Transport.focus is a request resource and the transport is seeking fulfillment (i.e. is asking for the request to be actioned), this element identifies any limitations on what parts of the referenced request should be actioned.
 * - **Requirements:** Sometimes when fulfillment is sought, you don\'t want full fulfillment.
 *
 * @category Data Models: Resource
 * @see [FHIR Transport](http://hl7.org/fhir/StructureDefinition/Transport)
 */
export class TransportRestrictionComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `TransportRestrictionComponent` JSON to instantiate the TransportRestrictionComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `TransportRestrictionComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to TransportRestrictionComponent
   * @returns TransportRestrictionComponent data model or undefined for `TransportRestrictionComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): TransportRestrictionComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'TransportRestrictionComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new TransportRestrictionComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    fieldName = 'repetitions';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: PositiveIntType | undefined = fhirParser.parsePositiveIntType(dtJson, dtSiblingJson);
      instance.setRepetitionsElement(datatype);
    }

    fieldName = 'period';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Period | undefined = Period.parse(classJsonObj[fieldName]!, sourceField);
      instance.setPeriod(datatype);
    }

    fieldName = 'recipient';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addRecipient(datatype);
          }
        });
      }
  }

    return instance;
  }

  /**
   * Transport.restriction.repetitions Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** How many times to repeat
   * - **Definition:** Indicates the number of times the requested action should occur.
   * - **Requirements:** E.g. order that requests monthly lab tests, fulfillment is sought for 1.
   * - **FHIR Type:** `positiveInt`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private repetitions?: PositiveIntType | undefined;

  /**
   * Transport.restriction.period Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When fulfillment sought
   * - **Definition:** Over what time-period is fulfillment sought.
   * - **Comment:** Note that period.high is the due date representing the time by which the transport should be completed.
   * - **Requirements:** E.g. order that authorizes 1 year\'s services.  Fulfillment is sought for next 3 months.
   * - **FHIR Type:** `Period`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private period?: Period | undefined;

  /**
   * Transport.restriction.recipient Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** For whom is fulfillment sought?
   * - **Definition:** For requests that are targeted to more than one potential recipient/target, to identify who is fulfillment is sought for.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *       'http://hl7.org/fhir/StructureDefinition/RelatedPerson',
   *       'http://hl7.org/fhir/StructureDefinition/Group',
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private recipient?: Reference[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `repetitions` property value as a PositiveIntType object if defined; else an empty PositiveIntType object
   */
  public getRepetitionsElement(): PositiveIntType {
    return this.repetitions ?? new PositiveIntType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `repetitions` property.
   *
   * @param element - the `repetitions` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setRepetitionsElement(element: PositiveIntType | undefined): this {
    if (isDefined<PositiveIntType>(element)) {
      const optErrMsg = `Invalid Transport.restriction.repetitions; Provided element is not an instance of PositiveIntType.`;
      assertFhirType<PositiveIntType>(element, PositiveIntType, optErrMsg);
      this.repetitions = element;
    } else {
      this.repetitions = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `repetitions` property exists and has a value; `false` otherwise
   */
  public hasRepetitionsElement(): boolean {
    return isDefined<PositiveIntType>(this.repetitions) && !this.repetitions.isEmpty();
  }

  /**
   * @returns the `repetitions` property value as a fhirPositiveInt if defined; else undefined
   */
  public getRepetitions(): fhirPositiveInt | undefined {
    return this.repetitions?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `repetitions` property.
   *
   * @param value - the `repetitions` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setRepetitions(value: fhirPositiveInt | undefined): this {
    if (isDefined<fhirPositiveInt>(value)) {
      const optErrMsg = `Invalid Transport.restriction.repetitions (${String(value)})`;
      this.repetitions = new PositiveIntType(parseFhirPrimitiveData(value, fhirPositiveIntSchema, optErrMsg));
    } else {
      this.repetitions = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `repetitions` property exists and has a value; `false` otherwise
   */
  public hasRepetitions(): boolean {
    return this.hasRepetitionsElement();
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
      const optErrMsg = `Invalid Transport.restriction.period; Provided element is not an instance of Period.`;
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
   * @returns the `recipient` property value as a Reference array
   */
  public getRecipient(): Reference[] {
    return this.recipient ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `recipient` property.
   *
   * @decorator `@ReferenceTargets('Transport.restriction.recipient', ['Patient','Practitioner','PractitionerRole','RelatedPerson','Group','Organization',])`
   *
   * @param value - the `recipient` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Transport.restriction.recipient', [
    'Patient',
  
    'Practitioner',
  
    'PractitionerRole',
  
    'RelatedPerson',
  
    'Group',
  
    'Organization',
  ])
  public setRecipient(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.recipient = value;
    } else {
      this.recipient = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `recipient` array property.
   *
   * @decorator `@ReferenceTargets('Transport.restriction.recipient', ['Patient','Practitioner','PractitionerRole','RelatedPerson','Group','Organization',])`
   *
   * @param value - the `recipient` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Transport.restriction.recipient', [
    'Patient',
  
    'Practitioner',
  
    'PractitionerRole',
  
    'RelatedPerson',
  
    'Group',
  
    'Organization',
  ])
  public addRecipient(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initRecipient();
      this.recipient?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `recipient` property exists and has a value; `false` otherwise
   */
  public hasRecipient(): boolean {
    return isDefinedList<Reference>(this.recipient) && this.recipient.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `recipient` property
   */
  private initRecipient(): void {
    if (!this.hasRecipient()) {
      this.recipient = [] as Reference[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Transport.restriction';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.repetitions,
      this.period,
      this.recipient,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): TransportRestrictionComponent {
    const dest = new TransportRestrictionComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: TransportRestrictionComponent): void {
    super.copyValues(dest);
    dest.repetitions = this.repetitions?.copy();
    dest.period = this.period?.copy();
    const recipientList = copyListValues<Reference>(this.recipient);
    dest.recipient = recipientList.length === 0 ? undefined : recipientList;
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

    if (this.hasRepetitionsElement()) {
      setFhirPrimitiveJson<fhirPositiveInt>(this.getRepetitionsElement(), 'repetitions', jsonObj);
    }

    if (this.hasPeriod()) {
      setFhirComplexJson(this.getPeriod(), 'period', jsonObj);
    }

    if (this.hasRecipient()) {
      setFhirComplexListJson(this.getRecipient(), 'recipient', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * TransportInputComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Information used to perform transport
 * - **Definition:** Additional information that may be needed in the execution of the transport.
 * - **Requirements:** Resources and data used to perform the transport.  This data is used in the business logic of transport execution, and is stored separately because it varies between workflows.
 *
 * @category Data Models: Resource
 * @see [FHIR Transport](http://hl7.org/fhir/StructureDefinition/Transport)
 */
export class TransportInputComponent extends BackboneElement implements IBackboneElement {
  constructor(type_: CodeableConcept | null = null, value: IDataType | null = null) {
    super();

    this.type_ = null;
    if (isDefined<CodeableConcept>(type_)) {
      this.setType(type_);
    }

    this.value = null;
    if (isDefined<IDataType>(value)) {
      this.setValue(value);
    }

  }

  /**
   * Parse the provided `TransportInputComponent` JSON to instantiate the TransportInputComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `TransportInputComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to TransportInputComponent
   * @returns TransportInputComponent data model or undefined for `TransportInputComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): TransportInputComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'TransportInputComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new TransportInputComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    const classMetadata: DecoratorMetadataObject | null = TransportInputComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for TransportInputComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

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
   * Transport.input.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Label for the input
   * - **Definition:** A code or description indicating how the input is intended to be used as part of the transport execution.
   * - **Comment:** If referencing a BPMN workflow or Protocol, the "system" is the URL for the workflow definition and the code is the "name" of the required input.
   * - **Requirements:** Inputs are named to enable transport automation to bind data and pass it from one transport to the next.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private type_: CodeableConcept | null;

  /**
   * Transport.input.value[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('Transport.input.value[x]', ['base64Binary','boolean','canonical','code','date','dateTime','decimal','id','instant','integer','integer64','markdown','oid','positiveInt','string','time','unsignedInt','uri','url','uuid','Address','Age','Annotation','Attachment','CodeableConcept','CodeableReference','Coding','ContactPoint','Count','Distance','Duration','HumanName','Identifier','Money','Period','Quantity','Range','Ratio','RatioRange','Reference','SampledData','Signature','Timing','ContactDetail','DataRequirement','Expression','ParameterDefinition','RelatedArtifact','TriggerDefinition','UsageContext','Availability','ExtendedContactDetail','Dosage','Meta',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Content to use in performing the transport
   * - **Definition:** The value of the input parameter as a basic type.
   * - **FHIR Types:**
   *     'base64Binary',
   *     'boolean',
   *     'canonical',
   *     'code',
   *     'date',
   *     'dateTime',
   *     'decimal',
   *     'id',
   *     'instant',
   *     'integer',
   *     'integer64',
   *     'markdown',
   *     'oid',
   *     'positiveInt',
   *     'string',
   *     'time',
   *     'unsignedInt',
   *     'uri',
   *     'url',
   *     'uuid',
   *     'Address',
   *     'Age',
   *     'Annotation',
   *     'Attachment',
   *     'CodeableConcept',
   *     'CodeableReference',
   *     'Coding',
   *     'ContactPoint',
   *     'Count',
   *     'Distance',
   *     'Duration',
   *     'HumanName',
   *     'Identifier',
   *     'Money',
   *     'Period',
   *     'Quantity',
   *     'Range',
   *     'Ratio',
   *     'RatioRange',
   *     'Reference',
   *     'SampledData',
   *     'Signature',
   *     'Timing',
   *     'ContactDetail',
   *     'DataRequirement',
   *     'Expression',
   *     'ParameterDefinition',
   *     'RelatedArtifact',
   *     'TriggerDefinition',
   *     'UsageContext',
   *     'Availability',
   *     'ExtendedContactDetail',
   *     'Dosage',
   *     'Meta',
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('Transport.input.value[x]',[
    'base64Binary',
    'boolean',
    'canonical',
    'code',
    'date',
    'dateTime',
    'decimal',
    'id',
    'instant',
    'integer',
    'integer64',
    'markdown',
    'oid',
    'positiveInt',
    'string',
    'time',
    'unsignedInt',
    'uri',
    'url',
    'uuid',
    'Address',
    'Age',
    'Annotation',
    'Attachment',
    'CodeableConcept',
    'CodeableReference',
    'Coding',
    'ContactPoint',
    'Count',
    'Distance',
    'Duration',
    'HumanName',
    'Identifier',
    'Money',
    'Period',
    'Quantity',
    'Range',
    'Ratio',
    'RatioRange',
    'Reference',
    'SampledData',
    'Signature',
    'Timing',
    'ContactDetail',
    'DataRequirement',
    'Expression',
    'ParameterDefinition',
    'RelatedArtifact',
    'TriggerDefinition',
    'UsageContext',
    'Availability',
    'ExtendedContactDetail',
    'Dosage',
    'Meta',
  ])
  private value: IDataType | null;

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
      const optErrMsg = `Invalid Transport.input.type; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `value` property value as a DataType object; else null
   */
  public getValue(): IDataType | null {
    return this.value;
  }

  /**
   * Assigns the provided DataType object value to the `value` property.
   *
   * @decorator `@ChoiceDataTypes('Transport.input.value[x]')`
   *
   * @param value - the `value` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('Transport.input.value[x]')
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
   * @returns the `value` property value as a Base64BinaryType object if defined; else null
   */
  public getValueBase64BinaryType(): Base64BinaryType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Base64BinaryType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Transport.input.value[x]: Expected Base64BinaryType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Base64BinaryType and has a value; `false` otherwise
   */
  public hasValueBase64BinaryType(): boolean {
    return this.hasValue() && this.value instanceof Base64BinaryType;
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
        `DataType mismatch for Transport.input.value[x]: Expected BooleanType but encountered ${this.value.fhirType()}`,
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
   * @returns the `value` property value as a CanonicalType object if defined; else null
   */
  public getValueCanonicalType(): CanonicalType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof CanonicalType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Transport.input.value[x]: Expected CanonicalType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a CanonicalType and has a value; `false` otherwise
   */
  public hasValueCanonicalType(): boolean {
    return this.hasValue() && this.value instanceof CanonicalType;
  }

  /**
   * @returns the `value` property value as a CodeType object if defined; else null
   */
  public getValueCodeType(): CodeType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof CodeType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Transport.input.value[x]: Expected CodeType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a CodeType and has a value; `false` otherwise
   */
  public hasValueCodeType(): boolean {
    return this.hasValue() && this.value instanceof CodeType;
  }

  /**
   * @returns the `value` property value as a DateType object if defined; else null
   */
  public getValueDateType(): DateType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof DateType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Transport.input.value[x]: Expected DateType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a DateType and has a value; `false` otherwise
   */
  public hasValueDateType(): boolean {
    return this.hasValue() && this.value instanceof DateType;
  }

  /**
   * @returns the `value` property value as a DateTimeType object if defined; else null
   */
  public getValueDateTimeType(): DateTimeType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof DateTimeType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Transport.input.value[x]: Expected DateTimeType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a DateTimeType and has a value; `false` otherwise
   */
  public hasValueDateTimeType(): boolean {
    return this.hasValue() && this.value instanceof DateTimeType;
  }

  /**
   * @returns the `value` property value as a DecimalType object if defined; else null
   */
  public getValueDecimalType(): DecimalType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof DecimalType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Transport.input.value[x]: Expected DecimalType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a DecimalType and has a value; `false` otherwise
   */
  public hasValueDecimalType(): boolean {
    return this.hasValue() && this.value instanceof DecimalType;
  }

  /**
   * @returns the `value` property value as a IdType object if defined; else null
   */
  public getValueIdType(): IdType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof IdType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Transport.input.value[x]: Expected IdType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a IdType and has a value; `false` otherwise
   */
  public hasValueIdType(): boolean {
    return this.hasValue() && this.value instanceof IdType;
  }

  /**
   * @returns the `value` property value as a InstantType object if defined; else null
   */
  public getValueInstantType(): InstantType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof InstantType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Transport.input.value[x]: Expected InstantType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a InstantType and has a value; `false` otherwise
   */
  public hasValueInstantType(): boolean {
    return this.hasValue() && this.value instanceof InstantType;
  }

  /**
   * @returns the `value` property value as a IntegerType object if defined; else null
   */
  public getValueIntegerType(): IntegerType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof IntegerType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Transport.input.value[x]: Expected IntegerType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a IntegerType and has a value; `false` otherwise
   */
  public hasValueIntegerType(): boolean {
    return this.hasValue() && this.value instanceof IntegerType;
  }

  /**
   * @returns the `value` property value as a Integer64Type object if defined; else null
   */
  public getValueInteger64Type(): Integer64Type | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Integer64Type)) {
      throw new InvalidTypeError(
        `DataType mismatch for Transport.input.value[x]: Expected Integer64Type but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Integer64Type and has a value; `false` otherwise
   */
  public hasValueInteger64Type(): boolean {
    return this.hasValue() && this.value instanceof Integer64Type;
  }

  /**
   * @returns the `value` property value as a MarkdownType object if defined; else null
   */
  public getValueMarkdownType(): MarkdownType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof MarkdownType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Transport.input.value[x]: Expected MarkdownType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a MarkdownType and has a value; `false` otherwise
   */
  public hasValueMarkdownType(): boolean {
    return this.hasValue() && this.value instanceof MarkdownType;
  }

  /**
   * @returns the `value` property value as a OidType object if defined; else null
   */
  public getValueOidType(): OidType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof OidType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Transport.input.value[x]: Expected OidType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a OidType and has a value; `false` otherwise
   */
  public hasValueOidType(): boolean {
    return this.hasValue() && this.value instanceof OidType;
  }

  /**
   * @returns the `value` property value as a PositiveIntType object if defined; else null
   */
  public getValuePositiveIntType(): PositiveIntType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof PositiveIntType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Transport.input.value[x]: Expected PositiveIntType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a PositiveIntType and has a value; `false` otherwise
   */
  public hasValuePositiveIntType(): boolean {
    return this.hasValue() && this.value instanceof PositiveIntType;
  }

  /**
   * @returns the `value` property value as a StringType object if defined; else null
   */
  public getValueStringType(): StringType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof StringType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Transport.input.value[x]: Expected StringType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a StringType and has a value; `false` otherwise
   */
  public hasValueStringType(): boolean {
    return this.hasValue() && this.value instanceof StringType;
  }

  /**
   * @returns the `value` property value as a TimeType object if defined; else null
   */
  public getValueTimeType(): TimeType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof TimeType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Transport.input.value[x]: Expected TimeType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a TimeType and has a value; `false` otherwise
   */
  public hasValueTimeType(): boolean {
    return this.hasValue() && this.value instanceof TimeType;
  }

  /**
   * @returns the `value` property value as a UnsignedIntType object if defined; else null
   */
  public getValueUnsignedIntType(): UnsignedIntType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof UnsignedIntType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Transport.input.value[x]: Expected UnsignedIntType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a UnsignedIntType and has a value; `false` otherwise
   */
  public hasValueUnsignedIntType(): boolean {
    return this.hasValue() && this.value instanceof UnsignedIntType;
  }

  /**
   * @returns the `value` property value as a UriType object if defined; else null
   */
  public getValueUriType(): UriType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof UriType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Transport.input.value[x]: Expected UriType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a UriType and has a value; `false` otherwise
   */
  public hasValueUriType(): boolean {
    return this.hasValue() && this.value instanceof UriType;
  }

  /**
   * @returns the `value` property value as a UrlType object if defined; else null
   */
  public getValueUrlType(): UrlType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof UrlType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Transport.input.value[x]: Expected UrlType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a UrlType and has a value; `false` otherwise
   */
  public hasValueUrlType(): boolean {
    return this.hasValue() && this.value instanceof UrlType;
  }

  /**
   * @returns the `value` property value as a UuidType object if defined; else null
   */
  public getValueUuidType(): UuidType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof UuidType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Transport.input.value[x]: Expected UuidType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a UuidType and has a value; `false` otherwise
   */
  public hasValueUuidType(): boolean {
    return this.hasValue() && this.value instanceof UuidType;
  }

  /**
   * @returns the `value` property value as a Address object if defined; else null
   */
  public getValueAddress(): Address | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Address)) {
      throw new InvalidTypeError(
        `DataType mismatch for Transport.input.value[x]: Expected Address but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Address and has a value; `false` otherwise
   */
  public hasValueAddress(): boolean {
    return this.hasValue() && this.value instanceof Address;
  }

  /**
   * @returns the `value` property value as a Age object if defined; else null
   */
  public getValueAge(): Age | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Age)) {
      throw new InvalidTypeError(
        `DataType mismatch for Transport.input.value[x]: Expected Age but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Age and has a value; `false` otherwise
   */
  public hasValueAge(): boolean {
    return this.hasValue() && this.value instanceof Age;
  }

  /**
   * @returns the `value` property value as a Annotation object if defined; else null
   */
  public getValueAnnotation(): Annotation | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Annotation)) {
      throw new InvalidTypeError(
        `DataType mismatch for Transport.input.value[x]: Expected Annotation but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Annotation and has a value; `false` otherwise
   */
  public hasValueAnnotation(): boolean {
    return this.hasValue() && this.value instanceof Annotation;
  }

  /**
   * @returns the `value` property value as a Attachment object if defined; else null
   */
  public getValueAttachment(): Attachment | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Attachment)) {
      throw new InvalidTypeError(
        `DataType mismatch for Transport.input.value[x]: Expected Attachment but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Attachment and has a value; `false` otherwise
   */
  public hasValueAttachment(): boolean {
    return this.hasValue() && this.value instanceof Attachment;
  }

  /**
   * @returns the `value` property value as a CodeableConcept object if defined; else null
   */
  public getValueCodeableConcept(): CodeableConcept | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof CodeableConcept)) {
      throw new InvalidTypeError(
        `DataType mismatch for Transport.input.value[x]: Expected CodeableConcept but encountered ${this.value.fhirType()}`,
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
   * @returns the `value` property value as a CodeableReference object if defined; else null
   */
  public getValueCodeableReference(): CodeableReference | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof CodeableReference)) {
      throw new InvalidTypeError(
        `DataType mismatch for Transport.input.value[x]: Expected CodeableReference but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a CodeableReference and has a value; `false` otherwise
   */
  public hasValueCodeableReference(): boolean {
    return this.hasValue() && this.value instanceof CodeableReference;
  }

  /**
   * @returns the `value` property value as a Coding object if defined; else null
   */
  public getValueCoding(): Coding | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Coding)) {
      throw new InvalidTypeError(
        `DataType mismatch for Transport.input.value[x]: Expected Coding but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Coding and has a value; `false` otherwise
   */
  public hasValueCoding(): boolean {
    return this.hasValue() && this.value instanceof Coding;
  }

  /**
   * @returns the `value` property value as a ContactPoint object if defined; else null
   */
  public getValueContactPoint(): ContactPoint | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof ContactPoint)) {
      throw new InvalidTypeError(
        `DataType mismatch for Transport.input.value[x]: Expected ContactPoint but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a ContactPoint and has a value; `false` otherwise
   */
  public hasValueContactPoint(): boolean {
    return this.hasValue() && this.value instanceof ContactPoint;
  }

  /**
   * @returns the `value` property value as a Count object if defined; else null
   */
  public getValueCount(): Count | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Count)) {
      throw new InvalidTypeError(
        `DataType mismatch for Transport.input.value[x]: Expected Count but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Count and has a value; `false` otherwise
   */
  public hasValueCount(): boolean {
    return this.hasValue() && this.value instanceof Count;
  }

  /**
   * @returns the `value` property value as a Distance object if defined; else null
   */
  public getValueDistance(): Distance | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Distance)) {
      throw new InvalidTypeError(
        `DataType mismatch for Transport.input.value[x]: Expected Distance but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Distance and has a value; `false` otherwise
   */
  public hasValueDistance(): boolean {
    return this.hasValue() && this.value instanceof Distance;
  }

  /**
   * @returns the `value` property value as a Duration object if defined; else null
   */
  public getValueDuration(): Duration | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Duration)) {
      throw new InvalidTypeError(
        `DataType mismatch for Transport.input.value[x]: Expected Duration but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Duration and has a value; `false` otherwise
   */
  public hasValueDuration(): boolean {
    return this.hasValue() && this.value instanceof Duration;
  }

  /**
   * @returns the `value` property value as a HumanName object if defined; else null
   */
  public getValueHumanName(): HumanName | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof HumanName)) {
      throw new InvalidTypeError(
        `DataType mismatch for Transport.input.value[x]: Expected HumanName but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a HumanName and has a value; `false` otherwise
   */
  public hasValueHumanName(): boolean {
    return this.hasValue() && this.value instanceof HumanName;
  }

  /**
   * @returns the `value` property value as a Identifier object if defined; else null
   */
  public getValueIdentifier(): Identifier | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Identifier)) {
      throw new InvalidTypeError(
        `DataType mismatch for Transport.input.value[x]: Expected Identifier but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Identifier and has a value; `false` otherwise
   */
  public hasValueIdentifier(): boolean {
    return this.hasValue() && this.value instanceof Identifier;
  }

  /**
   * @returns the `value` property value as a Money object if defined; else null
   */
  public getValueMoney(): Money | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Money)) {
      throw new InvalidTypeError(
        `DataType mismatch for Transport.input.value[x]: Expected Money but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Money and has a value; `false` otherwise
   */
  public hasValueMoney(): boolean {
    return this.hasValue() && this.value instanceof Money;
  }

  /**
   * @returns the `value` property value as a Period object if defined; else null
   */
  public getValuePeriod(): Period | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Period)) {
      throw new InvalidTypeError(
        `DataType mismatch for Transport.input.value[x]: Expected Period but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Period and has a value; `false` otherwise
   */
  public hasValuePeriod(): boolean {
    return this.hasValue() && this.value instanceof Period;
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
        `DataType mismatch for Transport.input.value[x]: Expected Quantity but encountered ${this.value.fhirType()}`,
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
        `DataType mismatch for Transport.input.value[x]: Expected Range but encountered ${this.value.fhirType()}`,
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
   * @returns the `value` property value as a Ratio object if defined; else null
   */
  public getValueRatio(): Ratio | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Ratio)) {
      throw new InvalidTypeError(
        `DataType mismatch for Transport.input.value[x]: Expected Ratio but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Ratio and has a value; `false` otherwise
   */
  public hasValueRatio(): boolean {
    return this.hasValue() && this.value instanceof Ratio;
  }

  /**
   * @returns the `value` property value as a RatioRange object if defined; else null
   */
  public getValueRatioRange(): RatioRange | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof RatioRange)) {
      throw new InvalidTypeError(
        `DataType mismatch for Transport.input.value[x]: Expected RatioRange but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a RatioRange and has a value; `false` otherwise
   */
  public hasValueRatioRange(): boolean {
    return this.hasValue() && this.value instanceof RatioRange;
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
        `DataType mismatch for Transport.input.value[x]: Expected Reference but encountered ${this.value.fhirType()}`,
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

  /**
   * @returns the `value` property value as a SampledData object if defined; else null
   */
  public getValueSampledData(): SampledData | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof SampledData)) {
      throw new InvalidTypeError(
        `DataType mismatch for Transport.input.value[x]: Expected SampledData but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a SampledData and has a value; `false` otherwise
   */
  public hasValueSampledData(): boolean {
    return this.hasValue() && this.value instanceof SampledData;
  }

  /**
   * @returns the `value` property value as a Signature object if defined; else null
   */
  public getValueSignature(): Signature | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Signature)) {
      throw new InvalidTypeError(
        `DataType mismatch for Transport.input.value[x]: Expected Signature but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Signature and has a value; `false` otherwise
   */
  public hasValueSignature(): boolean {
    return this.hasValue() && this.value instanceof Signature;
  }

  /**
   * @returns the `value` property value as a Timing object if defined; else null
   */
  public getValueTiming(): Timing | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Timing)) {
      throw new InvalidTypeError(
        `DataType mismatch for Transport.input.value[x]: Expected Timing but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Timing and has a value; `false` otherwise
   */
  public hasValueTiming(): boolean {
    return this.hasValue() && this.value instanceof Timing;
  }

  /**
   * @returns the `value` property value as a ContactDetail object if defined; else null
   */
  public getValueContactDetail(): ContactDetail | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof ContactDetail)) {
      throw new InvalidTypeError(
        `DataType mismatch for Transport.input.value[x]: Expected ContactDetail but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a ContactDetail and has a value; `false` otherwise
   */
  public hasValueContactDetail(): boolean {
    return this.hasValue() && this.value instanceof ContactDetail;
  }

  /**
   * @returns the `value` property value as a DataRequirement object if defined; else null
   */
  public getValueDataRequirement(): DataRequirement | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof DataRequirement)) {
      throw new InvalidTypeError(
        `DataType mismatch for Transport.input.value[x]: Expected DataRequirement but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a DataRequirement and has a value; `false` otherwise
   */
  public hasValueDataRequirement(): boolean {
    return this.hasValue() && this.value instanceof DataRequirement;
  }

  /**
   * @returns the `value` property value as a Expression object if defined; else null
   */
  public getValueExpression(): Expression | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Expression)) {
      throw new InvalidTypeError(
        `DataType mismatch for Transport.input.value[x]: Expected Expression but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Expression and has a value; `false` otherwise
   */
  public hasValueExpression(): boolean {
    return this.hasValue() && this.value instanceof Expression;
  }

  /**
   * @returns the `value` property value as a ParameterDefinition object if defined; else null
   */
  public getValueParameterDefinition(): ParameterDefinition | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof ParameterDefinition)) {
      throw new InvalidTypeError(
        `DataType mismatch for Transport.input.value[x]: Expected ParameterDefinition but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a ParameterDefinition and has a value; `false` otherwise
   */
  public hasValueParameterDefinition(): boolean {
    return this.hasValue() && this.value instanceof ParameterDefinition;
  }

  /**
   * @returns the `value` property value as a RelatedArtifact object if defined; else null
   */
  public getValueRelatedArtifact(): RelatedArtifact | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof RelatedArtifact)) {
      throw new InvalidTypeError(
        `DataType mismatch for Transport.input.value[x]: Expected RelatedArtifact but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a RelatedArtifact and has a value; `false` otherwise
   */
  public hasValueRelatedArtifact(): boolean {
    return this.hasValue() && this.value instanceof RelatedArtifact;
  }

  /**
   * @returns the `value` property value as a TriggerDefinition object if defined; else null
   */
  public getValueTriggerDefinition(): TriggerDefinition | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof TriggerDefinition)) {
      throw new InvalidTypeError(
        `DataType mismatch for Transport.input.value[x]: Expected TriggerDefinition but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a TriggerDefinition and has a value; `false` otherwise
   */
  public hasValueTriggerDefinition(): boolean {
    return this.hasValue() && this.value instanceof TriggerDefinition;
  }

  /**
   * @returns the `value` property value as a UsageContext object if defined; else null
   */
  public getValueUsageContext(): UsageContext | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof UsageContext)) {
      throw new InvalidTypeError(
        `DataType mismatch for Transport.input.value[x]: Expected UsageContext but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a UsageContext and has a value; `false` otherwise
   */
  public hasValueUsageContext(): boolean {
    return this.hasValue() && this.value instanceof UsageContext;
  }

  /**
   * @returns the `value` property value as a Availability object if defined; else null
   */
  public getValueAvailability(): Availability | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Availability)) {
      throw new InvalidTypeError(
        `DataType mismatch for Transport.input.value[x]: Expected Availability but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Availability and has a value; `false` otherwise
   */
  public hasValueAvailability(): boolean {
    return this.hasValue() && this.value instanceof Availability;
  }

  /**
   * @returns the `value` property value as a ExtendedContactDetail object if defined; else null
   */
  public getValueExtendedContactDetail(): ExtendedContactDetail | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof ExtendedContactDetail)) {
      throw new InvalidTypeError(
        `DataType mismatch for Transport.input.value[x]: Expected ExtendedContactDetail but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a ExtendedContactDetail and has a value; `false` otherwise
   */
  public hasValueExtendedContactDetail(): boolean {
    return this.hasValue() && this.value instanceof ExtendedContactDetail;
  }

  /**
   * @returns the `value` property value as a Dosage object if defined; else null
   */
  public getValueDosage(): Dosage | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Dosage)) {
      throw new InvalidTypeError(
        `DataType mismatch for Transport.input.value[x]: Expected Dosage but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Dosage and has a value; `false` otherwise
   */
  public hasValueDosage(): boolean {
    return this.hasValue() && this.value instanceof Dosage;
  }

  /**
   * @returns the `value` property value as a Meta object if defined; else null
   */
  public getValueMeta(): Meta | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Meta)) {
      throw new InvalidTypeError(
        `DataType mismatch for Transport.input.value[x]: Expected Meta but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Meta and has a value; `false` otherwise
   */
  public hasValueMeta(): boolean {
    return this.hasValue() && this.value instanceof Meta;
  }

  // End of choice datatype-specific "get"/"has" methods

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Transport.input';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.type_,
      this.value,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.type_, this.value, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): TransportInputComponent {
    const dest = new TransportInputComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: TransportInputComponent): void {
    super.copyValues(dest);
    dest.type_ = this.type_ ? this.type_.copy() : null;
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

    if (this.hasType()) {
      setFhirComplexJson(this.getType(), 'type', jsonObj);
    }

    if (this.hasValue()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getValue()!, 'value', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * TransportOutputComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Information produced as part of transport
 * - **Definition:** Outputs produced by the Transport.
 * - **Requirements:** Resources and data produced during the execution the transport.  This data is generated by the business logic of transport execution, and is stored separately because it varies between workflows.
 *
 * @category Data Models: Resource
 * @see [FHIR Transport](http://hl7.org/fhir/StructureDefinition/Transport)
 */
export class TransportOutputComponent extends BackboneElement implements IBackboneElement {
  constructor(type_: CodeableConcept | null = null, value: IDataType | null = null) {
    super();

    this.type_ = null;
    if (isDefined<CodeableConcept>(type_)) {
      this.setType(type_);
    }

    this.value = null;
    if (isDefined<IDataType>(value)) {
      this.setValue(value);
    }

  }

  /**
   * Parse the provided `TransportOutputComponent` JSON to instantiate the TransportOutputComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `TransportOutputComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to TransportOutputComponent
   * @returns TransportOutputComponent data model or undefined for `TransportOutputComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): TransportOutputComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'TransportOutputComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new TransportOutputComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    const classMetadata: DecoratorMetadataObject | null = TransportOutputComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for TransportOutputComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

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
   * Transport.output.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Label for output
   * - **Definition:** The name of the Output parameter.
   * - **Requirements:** Outputs are named to enable transport automation to bind data and pass it from one transport to the next.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private type_: CodeableConcept | null;

  /**
   * Transport.output.value[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('Transport.output.value[x]', ['base64Binary','boolean','canonical','code','date','dateTime','decimal','id','instant','integer','integer64','markdown','oid','positiveInt','string','time','unsignedInt','uri','url','uuid','Address','Age','Annotation','Attachment','CodeableConcept','CodeableReference','Coding','ContactPoint','Count','Distance','Duration','HumanName','Identifier','Money','Period','Quantity','Range','Ratio','RatioRange','Reference','SampledData','Signature','Timing','ContactDetail','DataRequirement','Expression','ParameterDefinition','RelatedArtifact','TriggerDefinition','UsageContext','Availability','ExtendedContactDetail','Dosage','Meta',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Result of output
   * - **Definition:** The value of the Output parameter as a basic type.
   * - **Requirements:** Transport outputs can take any form.
   * - **FHIR Types:**
   *     'base64Binary',
   *     'boolean',
   *     'canonical',
   *     'code',
   *     'date',
   *     'dateTime',
   *     'decimal',
   *     'id',
   *     'instant',
   *     'integer',
   *     'integer64',
   *     'markdown',
   *     'oid',
   *     'positiveInt',
   *     'string',
   *     'time',
   *     'unsignedInt',
   *     'uri',
   *     'url',
   *     'uuid',
   *     'Address',
   *     'Age',
   *     'Annotation',
   *     'Attachment',
   *     'CodeableConcept',
   *     'CodeableReference',
   *     'Coding',
   *     'ContactPoint',
   *     'Count',
   *     'Distance',
   *     'Duration',
   *     'HumanName',
   *     'Identifier',
   *     'Money',
   *     'Period',
   *     'Quantity',
   *     'Range',
   *     'Ratio',
   *     'RatioRange',
   *     'Reference',
   *     'SampledData',
   *     'Signature',
   *     'Timing',
   *     'ContactDetail',
   *     'DataRequirement',
   *     'Expression',
   *     'ParameterDefinition',
   *     'RelatedArtifact',
   *     'TriggerDefinition',
   *     'UsageContext',
   *     'Availability',
   *     'ExtendedContactDetail',
   *     'Dosage',
   *     'Meta',
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('Transport.output.value[x]',[
    'base64Binary',
    'boolean',
    'canonical',
    'code',
    'date',
    'dateTime',
    'decimal',
    'id',
    'instant',
    'integer',
    'integer64',
    'markdown',
    'oid',
    'positiveInt',
    'string',
    'time',
    'unsignedInt',
    'uri',
    'url',
    'uuid',
    'Address',
    'Age',
    'Annotation',
    'Attachment',
    'CodeableConcept',
    'CodeableReference',
    'Coding',
    'ContactPoint',
    'Count',
    'Distance',
    'Duration',
    'HumanName',
    'Identifier',
    'Money',
    'Period',
    'Quantity',
    'Range',
    'Ratio',
    'RatioRange',
    'Reference',
    'SampledData',
    'Signature',
    'Timing',
    'ContactDetail',
    'DataRequirement',
    'Expression',
    'ParameterDefinition',
    'RelatedArtifact',
    'TriggerDefinition',
    'UsageContext',
    'Availability',
    'ExtendedContactDetail',
    'Dosage',
    'Meta',
  ])
  private value: IDataType | null;

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
      const optErrMsg = `Invalid Transport.output.type; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `value` property value as a DataType object; else null
   */
  public getValue(): IDataType | null {
    return this.value;
  }

  /**
   * Assigns the provided DataType object value to the `value` property.
   *
   * @decorator `@ChoiceDataTypes('Transport.output.value[x]')`
   *
   * @param value - the `value` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('Transport.output.value[x]')
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
   * @returns the `value` property value as a Base64BinaryType object if defined; else null
   */
  public getValueBase64BinaryType(): Base64BinaryType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Base64BinaryType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Transport.output.value[x]: Expected Base64BinaryType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Base64BinaryType and has a value; `false` otherwise
   */
  public hasValueBase64BinaryType(): boolean {
    return this.hasValue() && this.value instanceof Base64BinaryType;
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
        `DataType mismatch for Transport.output.value[x]: Expected BooleanType but encountered ${this.value.fhirType()}`,
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
   * @returns the `value` property value as a CanonicalType object if defined; else null
   */
  public getValueCanonicalType(): CanonicalType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof CanonicalType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Transport.output.value[x]: Expected CanonicalType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a CanonicalType and has a value; `false` otherwise
   */
  public hasValueCanonicalType(): boolean {
    return this.hasValue() && this.value instanceof CanonicalType;
  }

  /**
   * @returns the `value` property value as a CodeType object if defined; else null
   */
  public getValueCodeType(): CodeType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof CodeType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Transport.output.value[x]: Expected CodeType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a CodeType and has a value; `false` otherwise
   */
  public hasValueCodeType(): boolean {
    return this.hasValue() && this.value instanceof CodeType;
  }

  /**
   * @returns the `value` property value as a DateType object if defined; else null
   */
  public getValueDateType(): DateType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof DateType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Transport.output.value[x]: Expected DateType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a DateType and has a value; `false` otherwise
   */
  public hasValueDateType(): boolean {
    return this.hasValue() && this.value instanceof DateType;
  }

  /**
   * @returns the `value` property value as a DateTimeType object if defined; else null
   */
  public getValueDateTimeType(): DateTimeType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof DateTimeType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Transport.output.value[x]: Expected DateTimeType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a DateTimeType and has a value; `false` otherwise
   */
  public hasValueDateTimeType(): boolean {
    return this.hasValue() && this.value instanceof DateTimeType;
  }

  /**
   * @returns the `value` property value as a DecimalType object if defined; else null
   */
  public getValueDecimalType(): DecimalType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof DecimalType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Transport.output.value[x]: Expected DecimalType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a DecimalType and has a value; `false` otherwise
   */
  public hasValueDecimalType(): boolean {
    return this.hasValue() && this.value instanceof DecimalType;
  }

  /**
   * @returns the `value` property value as a IdType object if defined; else null
   */
  public getValueIdType(): IdType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof IdType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Transport.output.value[x]: Expected IdType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a IdType and has a value; `false` otherwise
   */
  public hasValueIdType(): boolean {
    return this.hasValue() && this.value instanceof IdType;
  }

  /**
   * @returns the `value` property value as a InstantType object if defined; else null
   */
  public getValueInstantType(): InstantType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof InstantType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Transport.output.value[x]: Expected InstantType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a InstantType and has a value; `false` otherwise
   */
  public hasValueInstantType(): boolean {
    return this.hasValue() && this.value instanceof InstantType;
  }

  /**
   * @returns the `value` property value as a IntegerType object if defined; else null
   */
  public getValueIntegerType(): IntegerType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof IntegerType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Transport.output.value[x]: Expected IntegerType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a IntegerType and has a value; `false` otherwise
   */
  public hasValueIntegerType(): boolean {
    return this.hasValue() && this.value instanceof IntegerType;
  }

  /**
   * @returns the `value` property value as a Integer64Type object if defined; else null
   */
  public getValueInteger64Type(): Integer64Type | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Integer64Type)) {
      throw new InvalidTypeError(
        `DataType mismatch for Transport.output.value[x]: Expected Integer64Type but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Integer64Type and has a value; `false` otherwise
   */
  public hasValueInteger64Type(): boolean {
    return this.hasValue() && this.value instanceof Integer64Type;
  }

  /**
   * @returns the `value` property value as a MarkdownType object if defined; else null
   */
  public getValueMarkdownType(): MarkdownType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof MarkdownType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Transport.output.value[x]: Expected MarkdownType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a MarkdownType and has a value; `false` otherwise
   */
  public hasValueMarkdownType(): boolean {
    return this.hasValue() && this.value instanceof MarkdownType;
  }

  /**
   * @returns the `value` property value as a OidType object if defined; else null
   */
  public getValueOidType(): OidType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof OidType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Transport.output.value[x]: Expected OidType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a OidType and has a value; `false` otherwise
   */
  public hasValueOidType(): boolean {
    return this.hasValue() && this.value instanceof OidType;
  }

  /**
   * @returns the `value` property value as a PositiveIntType object if defined; else null
   */
  public getValuePositiveIntType(): PositiveIntType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof PositiveIntType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Transport.output.value[x]: Expected PositiveIntType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a PositiveIntType and has a value; `false` otherwise
   */
  public hasValuePositiveIntType(): boolean {
    return this.hasValue() && this.value instanceof PositiveIntType;
  }

  /**
   * @returns the `value` property value as a StringType object if defined; else null
   */
  public getValueStringType(): StringType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof StringType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Transport.output.value[x]: Expected StringType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a StringType and has a value; `false` otherwise
   */
  public hasValueStringType(): boolean {
    return this.hasValue() && this.value instanceof StringType;
  }

  /**
   * @returns the `value` property value as a TimeType object if defined; else null
   */
  public getValueTimeType(): TimeType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof TimeType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Transport.output.value[x]: Expected TimeType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a TimeType and has a value; `false` otherwise
   */
  public hasValueTimeType(): boolean {
    return this.hasValue() && this.value instanceof TimeType;
  }

  /**
   * @returns the `value` property value as a UnsignedIntType object if defined; else null
   */
  public getValueUnsignedIntType(): UnsignedIntType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof UnsignedIntType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Transport.output.value[x]: Expected UnsignedIntType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a UnsignedIntType and has a value; `false` otherwise
   */
  public hasValueUnsignedIntType(): boolean {
    return this.hasValue() && this.value instanceof UnsignedIntType;
  }

  /**
   * @returns the `value` property value as a UriType object if defined; else null
   */
  public getValueUriType(): UriType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof UriType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Transport.output.value[x]: Expected UriType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a UriType and has a value; `false` otherwise
   */
  public hasValueUriType(): boolean {
    return this.hasValue() && this.value instanceof UriType;
  }

  /**
   * @returns the `value` property value as a UrlType object if defined; else null
   */
  public getValueUrlType(): UrlType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof UrlType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Transport.output.value[x]: Expected UrlType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a UrlType and has a value; `false` otherwise
   */
  public hasValueUrlType(): boolean {
    return this.hasValue() && this.value instanceof UrlType;
  }

  /**
   * @returns the `value` property value as a UuidType object if defined; else null
   */
  public getValueUuidType(): UuidType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof UuidType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Transport.output.value[x]: Expected UuidType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a UuidType and has a value; `false` otherwise
   */
  public hasValueUuidType(): boolean {
    return this.hasValue() && this.value instanceof UuidType;
  }

  /**
   * @returns the `value` property value as a Address object if defined; else null
   */
  public getValueAddress(): Address | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Address)) {
      throw new InvalidTypeError(
        `DataType mismatch for Transport.output.value[x]: Expected Address but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Address and has a value; `false` otherwise
   */
  public hasValueAddress(): boolean {
    return this.hasValue() && this.value instanceof Address;
  }

  /**
   * @returns the `value` property value as a Age object if defined; else null
   */
  public getValueAge(): Age | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Age)) {
      throw new InvalidTypeError(
        `DataType mismatch for Transport.output.value[x]: Expected Age but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Age and has a value; `false` otherwise
   */
  public hasValueAge(): boolean {
    return this.hasValue() && this.value instanceof Age;
  }

  /**
   * @returns the `value` property value as a Annotation object if defined; else null
   */
  public getValueAnnotation(): Annotation | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Annotation)) {
      throw new InvalidTypeError(
        `DataType mismatch for Transport.output.value[x]: Expected Annotation but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Annotation and has a value; `false` otherwise
   */
  public hasValueAnnotation(): boolean {
    return this.hasValue() && this.value instanceof Annotation;
  }

  /**
   * @returns the `value` property value as a Attachment object if defined; else null
   */
  public getValueAttachment(): Attachment | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Attachment)) {
      throw new InvalidTypeError(
        `DataType mismatch for Transport.output.value[x]: Expected Attachment but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Attachment and has a value; `false` otherwise
   */
  public hasValueAttachment(): boolean {
    return this.hasValue() && this.value instanceof Attachment;
  }

  /**
   * @returns the `value` property value as a CodeableConcept object if defined; else null
   */
  public getValueCodeableConcept(): CodeableConcept | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof CodeableConcept)) {
      throw new InvalidTypeError(
        `DataType mismatch for Transport.output.value[x]: Expected CodeableConcept but encountered ${this.value.fhirType()}`,
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
   * @returns the `value` property value as a CodeableReference object if defined; else null
   */
  public getValueCodeableReference(): CodeableReference | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof CodeableReference)) {
      throw new InvalidTypeError(
        `DataType mismatch for Transport.output.value[x]: Expected CodeableReference but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a CodeableReference and has a value; `false` otherwise
   */
  public hasValueCodeableReference(): boolean {
    return this.hasValue() && this.value instanceof CodeableReference;
  }

  /**
   * @returns the `value` property value as a Coding object if defined; else null
   */
  public getValueCoding(): Coding | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Coding)) {
      throw new InvalidTypeError(
        `DataType mismatch for Transport.output.value[x]: Expected Coding but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Coding and has a value; `false` otherwise
   */
  public hasValueCoding(): boolean {
    return this.hasValue() && this.value instanceof Coding;
  }

  /**
   * @returns the `value` property value as a ContactPoint object if defined; else null
   */
  public getValueContactPoint(): ContactPoint | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof ContactPoint)) {
      throw new InvalidTypeError(
        `DataType mismatch for Transport.output.value[x]: Expected ContactPoint but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a ContactPoint and has a value; `false` otherwise
   */
  public hasValueContactPoint(): boolean {
    return this.hasValue() && this.value instanceof ContactPoint;
  }

  /**
   * @returns the `value` property value as a Count object if defined; else null
   */
  public getValueCount(): Count | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Count)) {
      throw new InvalidTypeError(
        `DataType mismatch for Transport.output.value[x]: Expected Count but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Count and has a value; `false` otherwise
   */
  public hasValueCount(): boolean {
    return this.hasValue() && this.value instanceof Count;
  }

  /**
   * @returns the `value` property value as a Distance object if defined; else null
   */
  public getValueDistance(): Distance | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Distance)) {
      throw new InvalidTypeError(
        `DataType mismatch for Transport.output.value[x]: Expected Distance but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Distance and has a value; `false` otherwise
   */
  public hasValueDistance(): boolean {
    return this.hasValue() && this.value instanceof Distance;
  }

  /**
   * @returns the `value` property value as a Duration object if defined; else null
   */
  public getValueDuration(): Duration | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Duration)) {
      throw new InvalidTypeError(
        `DataType mismatch for Transport.output.value[x]: Expected Duration but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Duration and has a value; `false` otherwise
   */
  public hasValueDuration(): boolean {
    return this.hasValue() && this.value instanceof Duration;
  }

  /**
   * @returns the `value` property value as a HumanName object if defined; else null
   */
  public getValueHumanName(): HumanName | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof HumanName)) {
      throw new InvalidTypeError(
        `DataType mismatch for Transport.output.value[x]: Expected HumanName but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a HumanName and has a value; `false` otherwise
   */
  public hasValueHumanName(): boolean {
    return this.hasValue() && this.value instanceof HumanName;
  }

  /**
   * @returns the `value` property value as a Identifier object if defined; else null
   */
  public getValueIdentifier(): Identifier | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Identifier)) {
      throw new InvalidTypeError(
        `DataType mismatch for Transport.output.value[x]: Expected Identifier but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Identifier and has a value; `false` otherwise
   */
  public hasValueIdentifier(): boolean {
    return this.hasValue() && this.value instanceof Identifier;
  }

  /**
   * @returns the `value` property value as a Money object if defined; else null
   */
  public getValueMoney(): Money | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Money)) {
      throw new InvalidTypeError(
        `DataType mismatch for Transport.output.value[x]: Expected Money but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Money and has a value; `false` otherwise
   */
  public hasValueMoney(): boolean {
    return this.hasValue() && this.value instanceof Money;
  }

  /**
   * @returns the `value` property value as a Period object if defined; else null
   */
  public getValuePeriod(): Period | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Period)) {
      throw new InvalidTypeError(
        `DataType mismatch for Transport.output.value[x]: Expected Period but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Period and has a value; `false` otherwise
   */
  public hasValuePeriod(): boolean {
    return this.hasValue() && this.value instanceof Period;
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
        `DataType mismatch for Transport.output.value[x]: Expected Quantity but encountered ${this.value.fhirType()}`,
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
        `DataType mismatch for Transport.output.value[x]: Expected Range but encountered ${this.value.fhirType()}`,
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
   * @returns the `value` property value as a Ratio object if defined; else null
   */
  public getValueRatio(): Ratio | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Ratio)) {
      throw new InvalidTypeError(
        `DataType mismatch for Transport.output.value[x]: Expected Ratio but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Ratio and has a value; `false` otherwise
   */
  public hasValueRatio(): boolean {
    return this.hasValue() && this.value instanceof Ratio;
  }

  /**
   * @returns the `value` property value as a RatioRange object if defined; else null
   */
  public getValueRatioRange(): RatioRange | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof RatioRange)) {
      throw new InvalidTypeError(
        `DataType mismatch for Transport.output.value[x]: Expected RatioRange but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a RatioRange and has a value; `false` otherwise
   */
  public hasValueRatioRange(): boolean {
    return this.hasValue() && this.value instanceof RatioRange;
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
        `DataType mismatch for Transport.output.value[x]: Expected Reference but encountered ${this.value.fhirType()}`,
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

  /**
   * @returns the `value` property value as a SampledData object if defined; else null
   */
  public getValueSampledData(): SampledData | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof SampledData)) {
      throw new InvalidTypeError(
        `DataType mismatch for Transport.output.value[x]: Expected SampledData but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a SampledData and has a value; `false` otherwise
   */
  public hasValueSampledData(): boolean {
    return this.hasValue() && this.value instanceof SampledData;
  }

  /**
   * @returns the `value` property value as a Signature object if defined; else null
   */
  public getValueSignature(): Signature | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Signature)) {
      throw new InvalidTypeError(
        `DataType mismatch for Transport.output.value[x]: Expected Signature but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Signature and has a value; `false` otherwise
   */
  public hasValueSignature(): boolean {
    return this.hasValue() && this.value instanceof Signature;
  }

  /**
   * @returns the `value` property value as a Timing object if defined; else null
   */
  public getValueTiming(): Timing | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Timing)) {
      throw new InvalidTypeError(
        `DataType mismatch for Transport.output.value[x]: Expected Timing but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Timing and has a value; `false` otherwise
   */
  public hasValueTiming(): boolean {
    return this.hasValue() && this.value instanceof Timing;
  }

  /**
   * @returns the `value` property value as a ContactDetail object if defined; else null
   */
  public getValueContactDetail(): ContactDetail | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof ContactDetail)) {
      throw new InvalidTypeError(
        `DataType mismatch for Transport.output.value[x]: Expected ContactDetail but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a ContactDetail and has a value; `false` otherwise
   */
  public hasValueContactDetail(): boolean {
    return this.hasValue() && this.value instanceof ContactDetail;
  }

  /**
   * @returns the `value` property value as a DataRequirement object if defined; else null
   */
  public getValueDataRequirement(): DataRequirement | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof DataRequirement)) {
      throw new InvalidTypeError(
        `DataType mismatch for Transport.output.value[x]: Expected DataRequirement but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a DataRequirement and has a value; `false` otherwise
   */
  public hasValueDataRequirement(): boolean {
    return this.hasValue() && this.value instanceof DataRequirement;
  }

  /**
   * @returns the `value` property value as a Expression object if defined; else null
   */
  public getValueExpression(): Expression | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Expression)) {
      throw new InvalidTypeError(
        `DataType mismatch for Transport.output.value[x]: Expected Expression but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Expression and has a value; `false` otherwise
   */
  public hasValueExpression(): boolean {
    return this.hasValue() && this.value instanceof Expression;
  }

  /**
   * @returns the `value` property value as a ParameterDefinition object if defined; else null
   */
  public getValueParameterDefinition(): ParameterDefinition | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof ParameterDefinition)) {
      throw new InvalidTypeError(
        `DataType mismatch for Transport.output.value[x]: Expected ParameterDefinition but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a ParameterDefinition and has a value; `false` otherwise
   */
  public hasValueParameterDefinition(): boolean {
    return this.hasValue() && this.value instanceof ParameterDefinition;
  }

  /**
   * @returns the `value` property value as a RelatedArtifact object if defined; else null
   */
  public getValueRelatedArtifact(): RelatedArtifact | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof RelatedArtifact)) {
      throw new InvalidTypeError(
        `DataType mismatch for Transport.output.value[x]: Expected RelatedArtifact but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a RelatedArtifact and has a value; `false` otherwise
   */
  public hasValueRelatedArtifact(): boolean {
    return this.hasValue() && this.value instanceof RelatedArtifact;
  }

  /**
   * @returns the `value` property value as a TriggerDefinition object if defined; else null
   */
  public getValueTriggerDefinition(): TriggerDefinition | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof TriggerDefinition)) {
      throw new InvalidTypeError(
        `DataType mismatch for Transport.output.value[x]: Expected TriggerDefinition but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a TriggerDefinition and has a value; `false` otherwise
   */
  public hasValueTriggerDefinition(): boolean {
    return this.hasValue() && this.value instanceof TriggerDefinition;
  }

  /**
   * @returns the `value` property value as a UsageContext object if defined; else null
   */
  public getValueUsageContext(): UsageContext | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof UsageContext)) {
      throw new InvalidTypeError(
        `DataType mismatch for Transport.output.value[x]: Expected UsageContext but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a UsageContext and has a value; `false` otherwise
   */
  public hasValueUsageContext(): boolean {
    return this.hasValue() && this.value instanceof UsageContext;
  }

  /**
   * @returns the `value` property value as a Availability object if defined; else null
   */
  public getValueAvailability(): Availability | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Availability)) {
      throw new InvalidTypeError(
        `DataType mismatch for Transport.output.value[x]: Expected Availability but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Availability and has a value; `false` otherwise
   */
  public hasValueAvailability(): boolean {
    return this.hasValue() && this.value instanceof Availability;
  }

  /**
   * @returns the `value` property value as a ExtendedContactDetail object if defined; else null
   */
  public getValueExtendedContactDetail(): ExtendedContactDetail | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof ExtendedContactDetail)) {
      throw new InvalidTypeError(
        `DataType mismatch for Transport.output.value[x]: Expected ExtendedContactDetail but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a ExtendedContactDetail and has a value; `false` otherwise
   */
  public hasValueExtendedContactDetail(): boolean {
    return this.hasValue() && this.value instanceof ExtendedContactDetail;
  }

  /**
   * @returns the `value` property value as a Dosage object if defined; else null
   */
  public getValueDosage(): Dosage | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Dosage)) {
      throw new InvalidTypeError(
        `DataType mismatch for Transport.output.value[x]: Expected Dosage but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Dosage and has a value; `false` otherwise
   */
  public hasValueDosage(): boolean {
    return this.hasValue() && this.value instanceof Dosage;
  }

  /**
   * @returns the `value` property value as a Meta object if defined; else null
   */
  public getValueMeta(): Meta | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Meta)) {
      throw new InvalidTypeError(
        `DataType mismatch for Transport.output.value[x]: Expected Meta but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Meta and has a value; `false` otherwise
   */
  public hasValueMeta(): boolean {
    return this.hasValue() && this.value instanceof Meta;
  }

  // End of choice datatype-specific "get"/"has" methods

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Transport.output';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.type_,
      this.value,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.type_, this.value, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): TransportOutputComponent {
    const dest = new TransportOutputComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: TransportOutputComponent): void {
    super.copyValues(dest);
    dest.type_ = this.type_ ? this.type_.copy() : null;
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

    if (this.hasType()) {
      setFhirComplexJson(this.getType(), 'type', jsonObj);
    }

    if (this.hasValue()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getValue()!, 'value', jsonObj);
    }

    return jsonObj;
  }
}
