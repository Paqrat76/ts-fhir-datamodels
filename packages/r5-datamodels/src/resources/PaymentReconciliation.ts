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
 * PaymentReconciliation Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/PaymentReconciliation
 * StructureDefinition.name: PaymentReconciliation
 * StructureDefinition.description: This resource provides the details including amount of a payment and allocates the payment items being paid.
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
  DateType,
  DomainResource,
  EnumCodeType,
  FhirParser,
  IBackboneElement,
  IDataType,
  IDomainResource,
  InvalidTypeError,
  JSON,
  PositiveIntType,
  PrimitiveType,
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
  fhirDate,
  fhirDateSchema,
  fhirDateTime,
  fhirDateTimeSchema,
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
import { CodeableConcept, Identifier, Money, PARSABLE_DATATYPE_MAP, Period, Reference } from '../complex-types/complex-datatypes';
import { FmStatusEnum } from '../code-systems/FmStatusEnum';
import { NoteTypeEnum } from '../code-systems/NoteTypeEnum';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';
import { PaymentOutcomeEnum } from '../code-systems/PaymentOutcomeEnum';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Symbol.metadata polyfill secret sauce for decorator metadata
(Symbol.metadata as any) ??= Symbol('Symbol.metadata');

/**
 * PaymentReconciliation Class
 *
 * @remarks
 * This resource provides the details including amount of a payment and allocates the payment items being paid.
 *
 * **FHIR Specification**
 * - **Short:** PaymentReconciliation resource
 * - **Definition:** This resource provides the details including amount of a payment and allocates the payment items being paid.
 * - **FHIR Version:** 5.0.0
 *
 * @category Data Models: Resource
 * @see [FHIR PaymentReconciliation](http://hl7.org/fhir/StructureDefinition/PaymentReconciliation)
 */
export class PaymentReconciliation extends DomainResource implements IDomainResource {
  constructor(type_: CodeableConcept | null = null, status: EnumCodeType | CodeType | fhirCode | null = null, created: DateTimeType | fhirDateTime | null = null, date: DateType | fhirDate | null = null, amount: Money | null = null) {
    super();

    this.fmStatusEnum = new FmStatusEnum();
    this.paymentOutcomeEnum = new PaymentOutcomeEnum();

    this.type_ = null;
    if (isDefined<CodeableConcept>(type_)) {
      this.setType(type_);
    }

    this.status = constructorCodeValueAsEnumCodeType<FmStatusEnum>(
      status,
      FmStatusEnum,
      this.fmStatusEnum,
      'PaymentReconciliation.status',
    );

    this.created = null;
    if (isDefined<DateTimeType | fhirDateTime>(created)) {
      if (created instanceof PrimitiveType) {
        this.setCreatedElement(created);
      } else {
        this.setCreated(created);
      }
    }

    this.date = null;
    if (isDefined<DateType | fhirDate>(date)) {
      if (date instanceof PrimitiveType) {
        this.setDateElement(date);
      } else {
        this.setDate(date);
      }
    }

    this.amount = null;
    if (isDefined<Money>(amount)) {
      this.setAmount(amount);
    }
  }

  /**
   * Parse the provided `PaymentReconciliation` JSON to instantiate the PaymentReconciliation data model.
   *
   * @param sourceJson - JSON representing FHIR `PaymentReconciliation`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to PaymentReconciliation
   * @returns PaymentReconciliation data model or undefined for `PaymentReconciliation`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): PaymentReconciliation | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'PaymentReconciliation';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new PaymentReconciliation();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'PaymentReconciliation');
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

    fieldName = 'kind';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setKind(datatype);
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
      if (datatype === undefined) {
        instance.setCreated(null);
      } else {
        instance.setCreatedElement(datatype);
      }
    } else {
      instance.setCreated(null);
    }

    fieldName = 'enterer';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setEnterer(datatype);
    }

    fieldName = 'issuerType';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setIssuerType(datatype);
    }

    fieldName = 'paymentIssuer';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setPaymentIssuer(datatype);
    }

    fieldName = 'request';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setRequest(datatype);
    }

    fieldName = 'requestor';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setRequestor(datatype);
    }

    fieldName = 'outcome';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setOutcomeElement(datatype);
    }

    fieldName = 'disposition';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setDispositionElement(datatype);
    }

    fieldName = 'date';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateType | undefined = fhirParser.parseDateType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setDate(null);
      } else {
        instance.setDateElement(datatype);
      }
    } else {
      instance.setDate(null);
    }

    fieldName = 'location';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setLocation(datatype);
    }

    fieldName = 'method';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setMethod(datatype);
    }

    fieldName = 'cardBrand';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setCardBrandElement(datatype);
    }

    fieldName = 'accountNumber';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setAccountNumberElement(datatype);
    }

    fieldName = 'expirationDate';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateType | undefined = fhirParser.parseDateType(dtJson, dtSiblingJson);
      instance.setExpirationDateElement(datatype);
    }

    fieldName = 'processor';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setProcessorElement(datatype);
    }

    fieldName = 'referenceNumber';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setReferenceNumberElement(datatype);
    }

    fieldName = 'authorization';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setAuthorizationElement(datatype);
    }

    fieldName = 'tenderedAmount';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Money | undefined = Money.parse(classJsonObj[fieldName]!, sourceField);
      instance.setTenderedAmount(datatype);
    }

    fieldName = 'returnedAmount';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Money | undefined = Money.parse(classJsonObj[fieldName]!, sourceField);
      instance.setReturnedAmount(datatype);
    }

    fieldName = 'amount';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Money | undefined = Money.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setAmount(null);
      } else {
        instance.setAmount(datatype);
      }
    } else {
      instance.setAmount(null);
    }

    fieldName = 'paymentIdentifier';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Identifier | undefined = Identifier.parse(classJsonObj[fieldName]!, sourceField);
      instance.setPaymentIdentifier(datatype);
    }

    fieldName = 'allocation';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: PaymentReconciliationAllocationComponent | undefined = PaymentReconciliationAllocationComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addAllocation(component);
          }
        });
      }
    }

    fieldName = 'formCode';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setFormCode(datatype);
    }

    fieldName = 'processNote';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: PaymentReconciliationProcessNoteComponent | undefined = PaymentReconciliationProcessNoteComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addProcessNote(component);
          }
        });
      }
    }

    return instance;
  }

  /**
   * PaymentReconciliation.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Business Identifier for a payment reconciliation
   * - **Definition:** A unique identifier assigned to this payment reconciliation.
   * - **Requirements:** Allows payment reconciliations to be distinguished and referenced.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private identifier?: Identifier[] | undefined;

  /**
   * PaymentReconciliation.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Category of payment
   * - **Definition:** Code to indicate the nature of the payment such as payment, adjustment.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private type_: CodeableConcept | null;

  /**
   * FHIR CodeSystem: FmStatus
   *
   * @see {@link FmStatusEnum }
   */
  private readonly fmStatusEnum: FmStatusEnum;

  /**
   * PaymentReconciliation.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** active | cancelled | draft | entered-in-error
   * - **Definition:** The status of the resource instance.
   * - **Comment:** This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   * - **Requirements:** Need to track the status of the resource as \'draft\' resources may undergo further edits while \'active\' resources are immutable and may only have their status changed to \'cancelled\'.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** true
   * - **isModifierReason:** This element is labelled as a modifier because it is a status element that contains status entered-in-error which means that the resource should not be treated as valid
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link FmStatusEnum }
   */
  private status: EnumCodeType | null;

  /**
   * PaymentReconciliation.kind Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Workflow originating payment
   * - **Definition:** The workflow or activity which gave rise to or during which the payment ocurred such as a kiosk, deposit on account, periodic payment etc.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private kind?: CodeableConcept | undefined;

  /**
   * PaymentReconciliation.period Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Period covered
   * - **Definition:** The period of time for which payments have been gathered into this bulk payment for settlement.
   * - **Requirements:** Needed to allow receivers to monitor and reconcile payment issuer schedules.
   * - **FHIR Type:** `Period`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private period?: Period | undefined;

  /**
   * PaymentReconciliation.created Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Creation date
   * - **Definition:** The date when the resource was created.
   * - **Requirements:** Need to record a timestamp for use by both the recipient and the issuer.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private created: DateTimeType | null;

  /**
   * PaymentReconciliation.enterer Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who entered the payment
   * - **Definition:** Payment enterer if not the actual payment issuer.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private enterer?: Reference | undefined;

  /**
   * PaymentReconciliation.issuerType Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Nature of the source
   * - **Definition:** The type of the source such as patient or insurance.
   * - **Requirements:** Providers may need to identify the source to know to which sub-ledger to apply the payment.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private issuerType?: CodeableConcept | undefined;

  /**
   * PaymentReconciliation.paymentIssuer Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Party generating payment
   * - **Definition:** The party who generated the payment.
   * - **Comment:** This party is also responsible for the reconciliation.
   * - **Requirements:** Need to identify the party resonsible for the payment and this resource.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/RelatedPerson',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private paymentIssuer?: Reference | undefined;

  /**
   * PaymentReconciliation.request Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Reference to requesting resource
   * - **Definition:** Original request resource reference.
   * - **Requirements:** Needed to allow the response to be linked to the request.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Task',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private request?: Reference | undefined;

  /**
   * PaymentReconciliation.requestor Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Responsible practitioner
   * - **Definition:** The practitioner who is responsible for the services rendered to the patient.
   * - **Requirements:** Need to identify the party responsible for the request.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private requestor?: Reference | undefined;

  /**
   * FHIR CodeSystem: PaymentOutcome
   *
   * @see {@link PaymentOutcomeEnum }
   */
  private readonly paymentOutcomeEnum: PaymentOutcomeEnum;

  /**
   * PaymentReconciliation.outcome Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** queued | complete | error | partial
   * - **Definition:** The outcome of a request for a reconciliation.
   * - **Comment:** The resource may be used to indicate that: the request has been held (queued) for processing; that it has been processed and errors found (error); that no errors were found and that some of the adjudication has been undertaken (partial) or that all of the adjudication has been undertaken (complete).
   * - **Requirements:** To advise the requestor of an overall processing outcome.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link PaymentOutcomeEnum }
   */
  private outcome?: EnumCodeType | undefined;

  /**
   * PaymentReconciliation.disposition Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Disposition message
   * - **Definition:** A human readable description of the status of the request for the reconciliation.
   * - **Requirements:** Provided for user display.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private disposition?: StringType | undefined;

  /**
   * PaymentReconciliation.date Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When payment issued
   * - **Definition:** The date of payment as indicated on the financial instrument.
   * - **Requirements:** To advise the payee when payment can be expected.
   * - **FHIR Type:** `date`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private date: DateType | null;

  /**
   * PaymentReconciliation.location Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Where payment collected
   * - **Definition:** The location of the site or device for electronic transfers or physical location for cash payments.
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
   * PaymentReconciliation.method Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Payment instrument
   * - **Definition:** The means of payment such as check, card cash, or electronic funds transfer.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private method?: CodeableConcept | undefined;

  /**
   * PaymentReconciliation.cardBrand Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Type of card
   * - **Definition:** The card brand such as debit, Visa, Amex etc. used if a card is the method of payment.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private cardBrand?: StringType | undefined;

  /**
   * PaymentReconciliation.accountNumber Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Digits for verification
   * - **Definition:** A portion of the account number, often the last 4 digits, used for verification not charging purposes.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private accountNumber?: StringType | undefined;

  /**
   * PaymentReconciliation.expirationDate Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Expiration year-month
   * - **Definition:** The year and month (YYYY-MM) when the instrument, typically card, expires.
   * - **FHIR Type:** `date`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private expirationDate?: DateType | undefined;

  /**
   * PaymentReconciliation.processor Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Processor name
   * - **Definition:** The name of the card processor, etf processor, bank for checks.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private processor?: StringType | undefined;

  /**
   * PaymentReconciliation.referenceNumber Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Check number or payment reference
   * - **Definition:** The check number, eft reference, car processor reference.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private referenceNumber?: StringType | undefined;

  /**
   * PaymentReconciliation.authorization Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Authorization number
   * - **Definition:** An alphanumeric issued by the processor to confirm the successful issuance of payment.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private authorization?: StringType | undefined;

  /**
   * PaymentReconciliation.tenderedAmount Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Amount offered by the issuer
   * - **Definition:** The amount offered by the issuer, typically applies to cash when the issuer provides an amount in bank note denominations equal to or excess of the amount actually being paid.
   * - **FHIR Type:** `Money`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private tenderedAmount?: Money | undefined;

  /**
   * PaymentReconciliation.returnedAmount Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Amount returned by the receiver
   * - **Definition:** The amount returned by the receiver which is excess to the amount payable, often referred to as \'change\'.
   * - **FHIR Type:** `Money`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private returnedAmount?: Money | undefined;

  /**
   * PaymentReconciliation.amount Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Total amount of Payment
   * - **Definition:** Total payment amount as indicated on the financial instrument.
   * - **Requirements:** Needed to provide the actual payment amount.
   * - **FHIR Type:** `Money`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private amount: Money | null;

  /**
   * PaymentReconciliation.paymentIdentifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Business identifier for the payment
   * - **Definition:** Issuer\'s unique identifier for the payment instrument.
   * - **Comment:** For example: EFT number or check number.
   * - **Requirements:** Enable the receiver to reconcile when payment is received.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private paymentIdentifier?: Identifier | undefined;

  /**
   * PaymentReconciliation.allocation Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Settlement particulars
   * - **Definition:** Distribution of the payment amount for a previously acknowledged payable.
   * - **Requirements:** Needed to show how the payment amount is distributed across the payables.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private allocation?: PaymentReconciliationAllocationComponent[] | undefined;

  /**
   * PaymentReconciliation.formCode Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Printed form identifier
   * - **Definition:** A code for the form to be used for printing the content.
   * - **Comment:** May be needed to identify specific jurisdictional forms.
   * - **Requirements:** Needed to specify the specific form used for producing output for this response.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private formCode?: CodeableConcept | undefined;

  /**
   * PaymentReconciliation.processNote Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Note concerning processing
   * - **Definition:** A note that describes or explains the processing in a human readable form.
   * - **Requirements:** Provides the specific textual explanations associated with the processing.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private processNote?: PaymentReconciliationProcessNoteComponent[] | undefined;

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
      const optErrMsg = `Invalid PaymentReconciliation.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid PaymentReconciliation.identifier; Provided element is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid PaymentReconciliation.type; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `status` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link FmStatusEnum }
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
   * @see CodeSystem Enumeration: {@link FmStatusEnum }
   */
  public setStatusEnumType(enumType: EnumCodeType | undefined | null): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid PaymentReconciliation.status`;
      assertEnumCodeType<FmStatusEnum>(enumType, FmStatusEnum, errMsgPrefix);
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
   * @see CodeSystem Enumeration: {@link FmStatusEnum }
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
   * @see CodeSystem Enumeration: {@link FmStatusEnum }
   */
  public setStatusElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid PaymentReconciliation.status; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.status = new EnumCodeType(element, this.fmStatusEnum);
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
   * @see CodeSystem Enumeration: {@link FmStatusEnum }
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
   * @see CodeSystem Enumeration: {@link FmStatusEnum }
   */
  public setStatus(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid PaymentReconciliation.status (${String(value)})`;
      this.status = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.fmStatusEnum);
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
   * @returns the `kind` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getKind(): CodeableConcept {
    return this.kind ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Kind object value to the `kind` property.
   *
   * @param value - the `kind` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setKind(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid PaymentReconciliation.kind; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.kind = value;
    } else {
      this.kind = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `kind` property exists and has a value; `false` otherwise
   */
  public hasKind(): boolean {
    return isDefined<CodeableConcept>(this.kind) && !this.kind.isEmpty();
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
      const optErrMsg = `Invalid PaymentReconciliation.period; Provided element is not an instance of Period.`;
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
  public setCreatedElement(element: DateTimeType | undefined | null): this {
    if (isDefined<DateTimeType>(element)) {
      const optErrMsg = `Invalid PaymentReconciliation.created; Provided value is not an instance of DateTimeType.`;
      assertFhirType<DateTimeType>(element, DateTimeType, optErrMsg);
      this.created = element;
    } else {
      this.created = null;
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
   * @returns the `created` property value as a fhirDateTime if defined; else null
   */
  public getCreated(): fhirDateTime | null {
    if (this.created?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.created.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `created` property.
   *
   * @param value - the `created` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCreated(value: fhirDateTime | undefined | null): this {
    if (isDefined<fhirDateTime>(value)) {
      const optErrMsg = `Invalid PaymentReconciliation.created (${String(value)})`;
      this.created = new DateTimeType(parseFhirPrimitiveData(value, fhirDateTimeSchema, optErrMsg));
    } else {
      this.created = null;
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
   * @returns the `enterer` property value as a Reference object; else an empty Reference object
   */
  public getEnterer(): Reference {
    return this.enterer ?? new Reference();
  }

  /**
   * Assigns the provided Enterer object value to the `enterer` property.
   *
   * @decorator `@ReferenceTargets('PaymentReconciliation.enterer', ['Practitioner','PractitionerRole','Organization',])`
   *
   * @param value - the `enterer` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('PaymentReconciliation.enterer', [
    'Practitioner',
  
    'PractitionerRole',
  
    'Organization',
  ])
  public setEnterer(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.enterer = value;
    } else {
      this.enterer = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `enterer` property exists and has a value; `false` otherwise
   */
  public hasEnterer(): boolean {
    return isDefined<Reference>(this.enterer) && !this.enterer.isEmpty();
  }

  /**
   * @returns the `issuerType` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getIssuerType(): CodeableConcept {
    return this.issuerType ?? new CodeableConcept();
  }

  /**
   * Assigns the provided IssuerType object value to the `issuerType` property.
   *
   * @param value - the `issuerType` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setIssuerType(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid PaymentReconciliation.issuerType; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.issuerType = value;
    } else {
      this.issuerType = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `issuerType` property exists and has a value; `false` otherwise
   */
  public hasIssuerType(): boolean {
    return isDefined<CodeableConcept>(this.issuerType) && !this.issuerType.isEmpty();
  }

  /**
   * @returns the `paymentIssuer` property value as a Reference object; else an empty Reference object
   */
  public getPaymentIssuer(): Reference {
    return this.paymentIssuer ?? new Reference();
  }

  /**
   * Assigns the provided PaymentIssuer object value to the `paymentIssuer` property.
   *
   * @decorator `@ReferenceTargets('PaymentReconciliation.paymentIssuer', ['Organization','Patient','RelatedPerson',])`
   *
   * @param value - the `paymentIssuer` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('PaymentReconciliation.paymentIssuer', [
    'Organization',
  
    'Patient',
  
    'RelatedPerson',
  ])
  public setPaymentIssuer(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.paymentIssuer = value;
    } else {
      this.paymentIssuer = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `paymentIssuer` property exists and has a value; `false` otherwise
   */
  public hasPaymentIssuer(): boolean {
    return isDefined<Reference>(this.paymentIssuer) && !this.paymentIssuer.isEmpty();
  }

  /**
   * @returns the `request` property value as a Reference object; else an empty Reference object
   */
  public getRequest(): Reference {
    return this.request ?? new Reference();
  }

  /**
   * Assigns the provided Request object value to the `request` property.
   *
   * @decorator `@ReferenceTargets('PaymentReconciliation.request', ['Task',])`
   *
   * @param value - the `request` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('PaymentReconciliation.request', [
    'Task',
  ])
  public setRequest(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.request = value;
    } else {
      this.request = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `request` property exists and has a value; `false` otherwise
   */
  public hasRequest(): boolean {
    return isDefined<Reference>(this.request) && !this.request.isEmpty();
  }

  /**
   * @returns the `requestor` property value as a Reference object; else an empty Reference object
   */
  public getRequestor(): Reference {
    return this.requestor ?? new Reference();
  }

  /**
   * Assigns the provided Requestor object value to the `requestor` property.
   *
   * @decorator `@ReferenceTargets('PaymentReconciliation.requestor', ['Practitioner','PractitionerRole','Organization',])`
   *
   * @param value - the `requestor` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('PaymentReconciliation.requestor', [
    'Practitioner',
  
    'PractitionerRole',
  
    'Organization',
  ])
  public setRequestor(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.requestor = value;
    } else {
      this.requestor = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `requestor` property exists and has a value; `false` otherwise
   */
  public hasRequestor(): boolean {
    return isDefined<Reference>(this.requestor) && !this.requestor.isEmpty();
  }

  /**
   * @returns the `outcome` property value as a EnumCodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link PaymentOutcomeEnum }
   */
  public getOutcomeEnumType(): EnumCodeType | undefined {
    return this.outcome;
  }

  /**
   * Assigns the provided EnumCodeType value to the `outcome` property.
   *
   * @param enumType - the `outcome` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code values
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link PaymentOutcomeEnum }
   */
  public setOutcomeEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = 'Invalid PaymentReconciliation.outcome';
      assertEnumCodeType<PaymentOutcomeEnum>(enumType, PaymentOutcomeEnum, errMsgPrefix);
      this.outcome = enumType;
    } else {
      this.outcome = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `outcome` property exists and has a value; `false` otherwise
   */
  public hasOutcomeEnumType(): boolean {
    return isDefined<EnumCodeType>(this.outcome) && !this.outcome.isEmpty() && this.outcome.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `outcome` property value as a CodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link PaymentOutcomeEnum }
   */
  public getOutcomeElement(): CodeType | undefined {
    if (this.outcome === undefined) {
      return undefined;
    }
    return this.outcome as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `outcome` property.
   *
   * @param element - the `outcome` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link PaymentOutcomeEnum }
   */
  public setOutcomeElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid PaymentReconciliation.outcome; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.outcome = new EnumCodeType(element, this.paymentOutcomeEnum);
    } else {
      this.outcome = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `outcome` property exists and has a value; `false` otherwise
   */
  public hasOutcomeElement(): boolean {
    return this.hasOutcomeEnumType();
  }

  /**
   * @returns the `outcome` property value as a fhirCode if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link PaymentOutcomeEnum }
   */
  public getOutcome(): fhirCode | undefined {
    if (this.outcome === undefined) {
      return undefined;
    }
    return this.outcome.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `outcome` property.
   *
   * @param value - the `outcome` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link PaymentOutcomeEnum }
   */
  public setOutcome(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid PaymentReconciliation.outcome; Provided value is not an instance of fhirCode.`;
      this.outcome = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.paymentOutcomeEnum);
    } else {
      this.outcome = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `outcome` property exists and has a value; `false` otherwise
   */
  public hasOutcome(): boolean {
    return this.hasOutcomeEnumType();
  }

  /**
   * @returns the `disposition` property value as a StringType object if defined; else an empty StringType object
   */
  public getDispositionElement(): StringType {
    return this.disposition ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `disposition` property.
   *
   * @param element - the `disposition` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDispositionElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid PaymentReconciliation.disposition; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.disposition = element;
    } else {
      this.disposition = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `disposition` property exists and has a value; `false` otherwise
   */
  public hasDispositionElement(): boolean {
    return isDefined<StringType>(this.disposition) && !this.disposition.isEmpty();
  }

  /**
   * @returns the `disposition` property value as a fhirString if defined; else undefined
   */
  public getDisposition(): fhirString | undefined {
    return this.disposition?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `disposition` property.
   *
   * @param value - the `disposition` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDisposition(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid PaymentReconciliation.disposition (${String(value)})`;
      this.disposition = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.disposition = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `disposition` property exists and has a value; `false` otherwise
   */
  public hasDisposition(): boolean {
    return this.hasDispositionElement();
  }

  /**
   * @returns the `date` property value as a DateType object if defined; else an empty DateType object
   */
  public getDateElement(): DateType {
    return this.date ?? new DateType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `date` property.
   *
   * @param element - the `date` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDateElement(element: DateType | undefined | null): this {
    if (isDefined<DateType>(element)) {
      const optErrMsg = `Invalid PaymentReconciliation.date; Provided value is not an instance of DateType.`;
      assertFhirType<DateType>(element, DateType, optErrMsg);
      this.date = element;
    } else {
      this.date = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `date` property exists and has a value; `false` otherwise
   */
  public hasDateElement(): boolean {
    return isDefined<DateType>(this.date) && !this.date.isEmpty();
  }

  /**
   * @returns the `date` property value as a fhirDate if defined; else null
   */
  public getDate(): fhirDate | null {
    if (this.date?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.date.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `date` property.
   *
   * @param value - the `date` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDate(value: fhirDate | undefined | null): this {
    if (isDefined<fhirDate>(value)) {
      const optErrMsg = `Invalid PaymentReconciliation.date (${String(value)})`;
      this.date = new DateType(parseFhirPrimitiveData(value, fhirDateSchema, optErrMsg));
    } else {
      this.date = null;
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
   * @returns the `location` property value as a Reference object; else an empty Reference object
   */
  public getLocation(): Reference {
    return this.location ?? new Reference();
  }

  /**
   * Assigns the provided Location object value to the `location` property.
   *
   * @decorator `@ReferenceTargets('PaymentReconciliation.location', ['Location',])`
   *
   * @param value - the `location` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('PaymentReconciliation.location', [
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
      const optErrMsg = `Invalid PaymentReconciliation.method; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `cardBrand` property value as a StringType object if defined; else an empty StringType object
   */
  public getCardBrandElement(): StringType {
    return this.cardBrand ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `cardBrand` property.
   *
   * @param element - the `cardBrand` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCardBrandElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid PaymentReconciliation.cardBrand; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.cardBrand = element;
    } else {
      this.cardBrand = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `cardBrand` property exists and has a value; `false` otherwise
   */
  public hasCardBrandElement(): boolean {
    return isDefined<StringType>(this.cardBrand) && !this.cardBrand.isEmpty();
  }

  /**
   * @returns the `cardBrand` property value as a fhirString if defined; else undefined
   */
  public getCardBrand(): fhirString | undefined {
    return this.cardBrand?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `cardBrand` property.
   *
   * @param value - the `cardBrand` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCardBrand(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid PaymentReconciliation.cardBrand (${String(value)})`;
      this.cardBrand = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.cardBrand = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `cardBrand` property exists and has a value; `false` otherwise
   */
  public hasCardBrand(): boolean {
    return this.hasCardBrandElement();
  }

  /**
   * @returns the `accountNumber` property value as a StringType object if defined; else an empty StringType object
   */
  public getAccountNumberElement(): StringType {
    return this.accountNumber ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `accountNumber` property.
   *
   * @param element - the `accountNumber` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAccountNumberElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid PaymentReconciliation.accountNumber; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.accountNumber = element;
    } else {
      this.accountNumber = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `accountNumber` property exists and has a value; `false` otherwise
   */
  public hasAccountNumberElement(): boolean {
    return isDefined<StringType>(this.accountNumber) && !this.accountNumber.isEmpty();
  }

  /**
   * @returns the `accountNumber` property value as a fhirString if defined; else undefined
   */
  public getAccountNumber(): fhirString | undefined {
    return this.accountNumber?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `accountNumber` property.
   *
   * @param value - the `accountNumber` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAccountNumber(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid PaymentReconciliation.accountNumber (${String(value)})`;
      this.accountNumber = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.accountNumber = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `accountNumber` property exists and has a value; `false` otherwise
   */
  public hasAccountNumber(): boolean {
    return this.hasAccountNumberElement();
  }

  /**
   * @returns the `expirationDate` property value as a DateType object if defined; else an empty DateType object
   */
  public getExpirationDateElement(): DateType {
    return this.expirationDate ?? new DateType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `expirationDate` property.
   *
   * @param element - the `expirationDate` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setExpirationDateElement(element: DateType | undefined): this {
    if (isDefined<DateType>(element)) {
      const optErrMsg = `Invalid PaymentReconciliation.expirationDate; Provided element is not an instance of DateType.`;
      assertFhirType<DateType>(element, DateType, optErrMsg);
      this.expirationDate = element;
    } else {
      this.expirationDate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `expirationDate` property exists and has a value; `false` otherwise
   */
  public hasExpirationDateElement(): boolean {
    return isDefined<DateType>(this.expirationDate) && !this.expirationDate.isEmpty();
  }

  /**
   * @returns the `expirationDate` property value as a fhirDate if defined; else undefined
   */
  public getExpirationDate(): fhirDate | undefined {
    return this.expirationDate?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `expirationDate` property.
   *
   * @param value - the `expirationDate` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setExpirationDate(value: fhirDate | undefined): this {
    if (isDefined<fhirDate>(value)) {
      const optErrMsg = `Invalid PaymentReconciliation.expirationDate (${String(value)})`;
      this.expirationDate = new DateType(parseFhirPrimitiveData(value, fhirDateSchema, optErrMsg));
    } else {
      this.expirationDate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `expirationDate` property exists and has a value; `false` otherwise
   */
  public hasExpirationDate(): boolean {
    return this.hasExpirationDateElement();
  }

  /**
   * @returns the `processor` property value as a StringType object if defined; else an empty StringType object
   */
  public getProcessorElement(): StringType {
    return this.processor ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `processor` property.
   *
   * @param element - the `processor` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setProcessorElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid PaymentReconciliation.processor; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.processor = element;
    } else {
      this.processor = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `processor` property exists and has a value; `false` otherwise
   */
  public hasProcessorElement(): boolean {
    return isDefined<StringType>(this.processor) && !this.processor.isEmpty();
  }

  /**
   * @returns the `processor` property value as a fhirString if defined; else undefined
   */
  public getProcessor(): fhirString | undefined {
    return this.processor?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `processor` property.
   *
   * @param value - the `processor` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setProcessor(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid PaymentReconciliation.processor (${String(value)})`;
      this.processor = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.processor = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `processor` property exists and has a value; `false` otherwise
   */
  public hasProcessor(): boolean {
    return this.hasProcessorElement();
  }

  /**
   * @returns the `referenceNumber` property value as a StringType object if defined; else an empty StringType object
   */
  public getReferenceNumberElement(): StringType {
    return this.referenceNumber ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `referenceNumber` property.
   *
   * @param element - the `referenceNumber` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setReferenceNumberElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid PaymentReconciliation.referenceNumber; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.referenceNumber = element;
    } else {
      this.referenceNumber = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `referenceNumber` property exists and has a value; `false` otherwise
   */
  public hasReferenceNumberElement(): boolean {
    return isDefined<StringType>(this.referenceNumber) && !this.referenceNumber.isEmpty();
  }

  /**
   * @returns the `referenceNumber` property value as a fhirString if defined; else undefined
   */
  public getReferenceNumber(): fhirString | undefined {
    return this.referenceNumber?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `referenceNumber` property.
   *
   * @param value - the `referenceNumber` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setReferenceNumber(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid PaymentReconciliation.referenceNumber (${String(value)})`;
      this.referenceNumber = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.referenceNumber = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `referenceNumber` property exists and has a value; `false` otherwise
   */
  public hasReferenceNumber(): boolean {
    return this.hasReferenceNumberElement();
  }

  /**
   * @returns the `authorization` property value as a StringType object if defined; else an empty StringType object
   */
  public getAuthorizationElement(): StringType {
    return this.authorization ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `authorization` property.
   *
   * @param element - the `authorization` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAuthorizationElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid PaymentReconciliation.authorization; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.authorization = element;
    } else {
      this.authorization = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `authorization` property exists and has a value; `false` otherwise
   */
  public hasAuthorizationElement(): boolean {
    return isDefined<StringType>(this.authorization) && !this.authorization.isEmpty();
  }

  /**
   * @returns the `authorization` property value as a fhirString if defined; else undefined
   */
  public getAuthorization(): fhirString | undefined {
    return this.authorization?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `authorization` property.
   *
   * @param value - the `authorization` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAuthorization(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid PaymentReconciliation.authorization (${String(value)})`;
      this.authorization = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.authorization = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `authorization` property exists and has a value; `false` otherwise
   */
  public hasAuthorization(): boolean {
    return this.hasAuthorizationElement();
  }

  /**
   * @returns the `tenderedAmount` property value as a Money object if defined; else an empty Money object
   */
  public getTenderedAmount(): Money {
    return this.tenderedAmount ?? new Money();
  }

  /**
   * Assigns the provided TenderedAmount object value to the `tenderedAmount` property.
   *
   * @param value - the `tenderedAmount` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setTenderedAmount(value: Money | undefined): this {
    if (isDefined<Money>(value)) {
      const optErrMsg = `Invalid PaymentReconciliation.tenderedAmount; Provided element is not an instance of Money.`;
      assertFhirType<Money>(value, Money, optErrMsg);
      this.tenderedAmount = value;
    } else {
      this.tenderedAmount = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `tenderedAmount` property exists and has a value; `false` otherwise
   */
  public hasTenderedAmount(): boolean {
    return isDefined<Money>(this.tenderedAmount) && !this.tenderedAmount.isEmpty();
  }

  /**
   * @returns the `returnedAmount` property value as a Money object if defined; else an empty Money object
   */
  public getReturnedAmount(): Money {
    return this.returnedAmount ?? new Money();
  }

  /**
   * Assigns the provided ReturnedAmount object value to the `returnedAmount` property.
   *
   * @param value - the `returnedAmount` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setReturnedAmount(value: Money | undefined): this {
    if (isDefined<Money>(value)) {
      const optErrMsg = `Invalid PaymentReconciliation.returnedAmount; Provided element is not an instance of Money.`;
      assertFhirType<Money>(value, Money, optErrMsg);
      this.returnedAmount = value;
    } else {
      this.returnedAmount = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `returnedAmount` property exists and has a value; `false` otherwise
   */
  public hasReturnedAmount(): boolean {
    return isDefined<Money>(this.returnedAmount) && !this.returnedAmount.isEmpty();
  }

  /**
   * @returns the `amount` property value as a Money object if defined; else an empty Money object
   */
  public getAmount(): Money {
    return this.amount ?? new Money();
  }

  /**
   * Assigns the provided Money object value to the `amount` property.
   *
   * @param value - the `amount` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAmount(value: Money | undefined | null): this {
    if (isDefined<Money>(value)) {
      const optErrMsg = `Invalid PaymentReconciliation.amount; Provided element is not an instance of Money.`;
      assertFhirType<Money>(value, Money, optErrMsg);
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
    return isDefined<Money>(this.amount) && !this.amount.isEmpty();
  }

  /**
   * @returns the `paymentIdentifier` property value as a Identifier object if defined; else an empty Identifier object
   */
  public getPaymentIdentifier(): Identifier {
    return this.paymentIdentifier ?? new Identifier();
  }

  /**
   * Assigns the provided PaymentIdentifier object value to the `paymentIdentifier` property.
   *
   * @param value - the `paymentIdentifier` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPaymentIdentifier(value: Identifier | undefined): this {
    if (isDefined<Identifier>(value)) {
      const optErrMsg = `Invalid PaymentReconciliation.paymentIdentifier; Provided element is not an instance of Identifier.`;
      assertFhirType<Identifier>(value, Identifier, optErrMsg);
      this.paymentIdentifier = value;
    } else {
      this.paymentIdentifier = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `paymentIdentifier` property exists and has a value; `false` otherwise
   */
  public hasPaymentIdentifier(): boolean {
    return isDefined<Identifier>(this.paymentIdentifier) && !this.paymentIdentifier.isEmpty();
  }

  /**
   * @returns the `allocation` property value as a PaymentReconciliationAllocationComponent array
   */
  public getAllocation(): PaymentReconciliationAllocationComponent[] {
    return this.allocation ?? ([] as PaymentReconciliationAllocationComponent[]);
  }

  /**
   * Assigns the provided PaymentReconciliationAllocationComponent array value to the `allocation` property.
   *
   * @param value - the `allocation` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAllocation(value: PaymentReconciliationAllocationComponent[] | undefined): this {
    if (isDefinedList<PaymentReconciliationAllocationComponent>(value)) {
      const optErrMsg = `Invalid PaymentReconciliation.allocation; Provided value array has an element that is not an instance of PaymentReconciliationAllocationComponent.`;
      assertFhirTypeList<PaymentReconciliationAllocationComponent>(value, PaymentReconciliationAllocationComponent, optErrMsg);
      this.allocation = value;
    } else {
      this.allocation = undefined;
    }
    return this;
  }

  /**
   * Add the provided PaymentReconciliationAllocationComponent value to the `allocation` array property.
   *
   * @param value - the `allocation` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addAllocation(value: PaymentReconciliationAllocationComponent | undefined): this {
    if (isDefined<PaymentReconciliationAllocationComponent>(value)) {
      const optErrMsg = `Invalid PaymentReconciliation.allocation; Provided element is not an instance of PaymentReconciliationAllocationComponent.`;
      assertFhirType<PaymentReconciliationAllocationComponent>(value, PaymentReconciliationAllocationComponent, optErrMsg);
      this.initAllocation();
      this.allocation?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `allocation` property exists and has a value; `false` otherwise
   */
  public hasAllocation(): boolean {
    return isDefinedList<PaymentReconciliationAllocationComponent>(this.allocation) && this.allocation.some((item: PaymentReconciliationAllocationComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `allocation` property
   */
  private initAllocation(): void {
    if(!this.hasAllocation()) {
      this.allocation = [] as PaymentReconciliationAllocationComponent[];
    }
  }

  /**
   * @returns the `formCode` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getFormCode(): CodeableConcept {
    return this.formCode ?? new CodeableConcept();
  }

  /**
   * Assigns the provided FormCode object value to the `formCode` property.
   *
   * @param value - the `formCode` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setFormCode(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid PaymentReconciliation.formCode; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.formCode = value;
    } else {
      this.formCode = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `formCode` property exists and has a value; `false` otherwise
   */
  public hasFormCode(): boolean {
    return isDefined<CodeableConcept>(this.formCode) && !this.formCode.isEmpty();
  }

  /**
   * @returns the `processNote` property value as a PaymentReconciliationProcessNoteComponent array
   */
  public getProcessNote(): PaymentReconciliationProcessNoteComponent[] {
    return this.processNote ?? ([] as PaymentReconciliationProcessNoteComponent[]);
  }

  /**
   * Assigns the provided PaymentReconciliationProcessNoteComponent array value to the `processNote` property.
   *
   * @param value - the `processNote` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setProcessNote(value: PaymentReconciliationProcessNoteComponent[] | undefined): this {
    if (isDefinedList<PaymentReconciliationProcessNoteComponent>(value)) {
      const optErrMsg = `Invalid PaymentReconciliation.processNote; Provided value array has an element that is not an instance of PaymentReconciliationProcessNoteComponent.`;
      assertFhirTypeList<PaymentReconciliationProcessNoteComponent>(value, PaymentReconciliationProcessNoteComponent, optErrMsg);
      this.processNote = value;
    } else {
      this.processNote = undefined;
    }
    return this;
  }

  /**
   * Add the provided PaymentReconciliationProcessNoteComponent value to the `processNote` array property.
   *
   * @param value - the `processNote` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addProcessNote(value: PaymentReconciliationProcessNoteComponent | undefined): this {
    if (isDefined<PaymentReconciliationProcessNoteComponent>(value)) {
      const optErrMsg = `Invalid PaymentReconciliation.processNote; Provided element is not an instance of PaymentReconciliationProcessNoteComponent.`;
      assertFhirType<PaymentReconciliationProcessNoteComponent>(value, PaymentReconciliationProcessNoteComponent, optErrMsg);
      this.initProcessNote();
      this.processNote?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `processNote` property exists and has a value; `false` otherwise
   */
  public hasProcessNote(): boolean {
    return isDefinedList<PaymentReconciliationProcessNoteComponent>(this.processNote) && this.processNote.some((item: PaymentReconciliationProcessNoteComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `processNote` property
   */
  private initProcessNote(): void {
    if(!this.hasProcessNote()) {
      this.processNote = [] as PaymentReconciliationProcessNoteComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'PaymentReconciliation';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identifier,
      this.type_,
      this.status,
      this.kind,
      this.period,
      this.created,
      this.enterer,
      this.issuerType,
      this.paymentIssuer,
      this.request,
      this.requestor,
      this.outcome,
      this.disposition,
      this.date,
      this.location,
      this.method,
      this.cardBrand,
      this.accountNumber,
      this.expirationDate,
      this.processor,
      this.referenceNumber,
      this.authorization,
      this.tenderedAmount,
      this.returnedAmount,
      this.amount,
      this.paymentIdentifier,
      this.allocation,
      this.formCode,
      this.processNote,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.type_, this.status, this.created, this.date, this.amount, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): PaymentReconciliation {
    const dest = new PaymentReconciliation();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: PaymentReconciliation): void {
    super.copyValues(dest);
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    dest.type_ = this.type_ ? this.type_.copy() : null;
    dest.status = this.status ? this.status.copy() : null;
    dest.kind = this.kind?.copy();
    dest.period = this.period?.copy();
    dest.created = this.created ? this.created.copy() : null;
    dest.enterer = this.enterer?.copy();
    dest.issuerType = this.issuerType?.copy();
    dest.paymentIssuer = this.paymentIssuer?.copy();
    dest.request = this.request?.copy();
    dest.requestor = this.requestor?.copy();
    dest.outcome = this.outcome?.copy();
    dest.disposition = this.disposition?.copy();
    dest.date = this.date ? this.date.copy() : null;
    dest.location = this.location?.copy();
    dest.method = this.method?.copy();
    dest.cardBrand = this.cardBrand?.copy();
    dest.accountNumber = this.accountNumber?.copy();
    dest.expirationDate = this.expirationDate?.copy();
    dest.processor = this.processor?.copy();
    dest.referenceNumber = this.referenceNumber?.copy();
    dest.authorization = this.authorization?.copy();
    dest.tenderedAmount = this.tenderedAmount?.copy();
    dest.returnedAmount = this.returnedAmount?.copy();
    dest.amount = this.amount ? this.amount.copy() : null;
    dest.paymentIdentifier = this.paymentIdentifier?.copy();
    const allocationList = copyListValues<PaymentReconciliationAllocationComponent>(this.allocation);
    dest.allocation = allocationList.length === 0 ? undefined : allocationList;
    dest.formCode = this.formCode?.copy();
    const processNoteList = copyListValues<PaymentReconciliationProcessNoteComponent>(this.processNote);
    dest.processNote = processNoteList.length === 0 ? undefined : processNoteList;
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

    if (this.hasType()) {
      setFhirComplexJson(this.getType(), 'type', jsonObj);
    }

    if (this.hasStatusElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getStatusElement()!, 'status', jsonObj);
    }

    if (this.hasKind()) {
      setFhirComplexJson(this.getKind(), 'kind', jsonObj);
    }

    if (this.hasPeriod()) {
      setFhirComplexJson(this.getPeriod(), 'period', jsonObj);
    }

    if (this.hasCreatedElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getCreatedElement(), 'created', jsonObj);
    }

    if (this.hasEnterer()) {
      setFhirComplexJson(this.getEnterer(), 'enterer', jsonObj);
    }

    if (this.hasIssuerType()) {
      setFhirComplexJson(this.getIssuerType(), 'issuerType', jsonObj);
    }

    if (this.hasPaymentIssuer()) {
      setFhirComplexJson(this.getPaymentIssuer(), 'paymentIssuer', jsonObj);
    }

    if (this.hasRequest()) {
      setFhirComplexJson(this.getRequest(), 'request', jsonObj);
    }

    if (this.hasRequestor()) {
      setFhirComplexJson(this.getRequestor(), 'requestor', jsonObj);
    }

    if (this.hasOutcomeElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getOutcomeElement()!, 'outcome', jsonObj);
    }

    if (this.hasDispositionElement()) {
      setFhirPrimitiveJson<fhirString>(this.getDispositionElement(), 'disposition', jsonObj);
    }

    if (this.hasDateElement()) {
      setFhirPrimitiveJson<fhirDate>(this.getDateElement(), 'date', jsonObj);
    }

    if (this.hasLocation()) {
      setFhirComplexJson(this.getLocation(), 'location', jsonObj);
    }

    if (this.hasMethod()) {
      setFhirComplexJson(this.getMethod(), 'method', jsonObj);
    }

    if (this.hasCardBrandElement()) {
      setFhirPrimitiveJson<fhirString>(this.getCardBrandElement(), 'cardBrand', jsonObj);
    }

    if (this.hasAccountNumberElement()) {
      setFhirPrimitiveJson<fhirString>(this.getAccountNumberElement(), 'accountNumber', jsonObj);
    }

    if (this.hasExpirationDateElement()) {
      setFhirPrimitiveJson<fhirDate>(this.getExpirationDateElement(), 'expirationDate', jsonObj);
    }

    if (this.hasProcessorElement()) {
      setFhirPrimitiveJson<fhirString>(this.getProcessorElement(), 'processor', jsonObj);
    }

    if (this.hasReferenceNumberElement()) {
      setFhirPrimitiveJson<fhirString>(this.getReferenceNumberElement(), 'referenceNumber', jsonObj);
    }

    if (this.hasAuthorizationElement()) {
      setFhirPrimitiveJson<fhirString>(this.getAuthorizationElement(), 'authorization', jsonObj);
    }

    if (this.hasTenderedAmount()) {
      setFhirComplexJson(this.getTenderedAmount(), 'tenderedAmount', jsonObj);
    }

    if (this.hasReturnedAmount()) {
      setFhirComplexJson(this.getReturnedAmount(), 'returnedAmount', jsonObj);
    }

    if (this.hasAmount()) {
      setFhirComplexJson(this.getAmount(), 'amount', jsonObj);
    }

    if (this.hasPaymentIdentifier()) {
      setFhirComplexJson(this.getPaymentIdentifier(), 'paymentIdentifier', jsonObj);
    }

    if (this.hasAllocation()) {
      setFhirBackboneElementListJson(this.getAllocation(), 'allocation', jsonObj);
    }

    if (this.hasFormCode()) {
      setFhirComplexJson(this.getFormCode(), 'formCode', jsonObj);
    }

    if (this.hasProcessNote()) {
      setFhirBackboneElementListJson(this.getProcessNote(), 'processNote', jsonObj);
    }

    return jsonObj;
  }
}

/**
 * PaymentReconciliationAllocationComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Settlement particulars
 * - **Definition:** Distribution of the payment amount for a previously acknowledged payable.
 * - **Requirements:** Needed to show how the payment amount is distributed across the payables.
 *
 * @category Data Models: Resource
 * @see [FHIR PaymentReconciliation](http://hl7.org/fhir/StructureDefinition/PaymentReconciliation)
 */
export class PaymentReconciliationAllocationComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `PaymentReconciliationAllocationComponent` JSON to instantiate the PaymentReconciliationAllocationComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `PaymentReconciliationAllocationComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to PaymentReconciliationAllocationComponent
   * @returns PaymentReconciliationAllocationComponent data model or undefined for `PaymentReconciliationAllocationComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): PaymentReconciliationAllocationComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'PaymentReconciliationAllocationComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new PaymentReconciliationAllocationComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    const classMetadata: DecoratorMetadataObject | null = PaymentReconciliationAllocationComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for PaymentReconciliationAllocationComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    fieldName = 'identifier';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Identifier | undefined = Identifier.parse(classJsonObj[fieldName]!, sourceField);
      instance.setIdentifier(datatype);
    }

    fieldName = 'predecessor';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Identifier | undefined = Identifier.parse(classJsonObj[fieldName]!, sourceField);
      instance.setPredecessor(datatype);
    }

    fieldName = 'target';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setTarget(datatype);
    }

    fieldName = 'targetItem[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const targetItem: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setTargetItem(targetItem);

    fieldName = 'encounter';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setEncounter(datatype);
    }

    fieldName = 'account';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setAccount(datatype);
    }

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setType(datatype);
    }

    fieldName = 'submitter';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setSubmitter(datatype);
    }

    fieldName = 'response';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setResponse(datatype);
    }

    fieldName = 'date';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateType | undefined = fhirParser.parseDateType(dtJson, dtSiblingJson);
      instance.setDateElement(datatype);
    }

    fieldName = 'responsible';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setResponsible(datatype);
    }

    fieldName = 'payee';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setPayee(datatype);
    }

    fieldName = 'amount';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Money | undefined = Money.parse(classJsonObj[fieldName]!, sourceField);
      instance.setAmount(datatype);
    }

    return instance;
  }

  /**
   * PaymentReconciliation.allocation.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Business identifier of the payment detail
   * - **Definition:** Unique identifier for the current payment item for the referenced payable.
   * - **Requirements:** Needed for reconciliation of payments.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private identifier?: Identifier | undefined;

  /**
   * PaymentReconciliation.allocation.predecessor Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Business identifier of the prior payment detail
   * - **Definition:** Unique identifier for the prior payment item for the referenced payable.
   * - **Requirements:** Needed for reconciliation of payments.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private predecessor?: Identifier | undefined;

  /**
   * PaymentReconciliation.allocation.target Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Subject of the payment
   * - **Definition:** Specific resource to which the payment/adjustment/advance applies.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Claim',
   *       'http://hl7.org/fhir/StructureDefinition/Account',
   *       'http://hl7.org/fhir/StructureDefinition/Invoice',
   *       'http://hl7.org/fhir/StructureDefinition/ChargeItem',
   *       'http://hl7.org/fhir/StructureDefinition/Encounter',
   *       'http://hl7.org/fhir/StructureDefinition/Contract',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private target?: Reference | undefined;

  /**
   * PaymentReconciliation.allocation.targetItem[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('PaymentReconciliation.allocation.targetItem[x]', ['string','Identifier','positiveInt',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Sub-element of the subject
   * - **Definition:**  Identifies the claim line item, encounter or other sub-element being paid. Note payment may be partial, that is not match the then outstanding balance or amount incurred.
   * - **FHIR Types:**
   *     'string',
   *     'Identifier',
   *     'positiveInt',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('PaymentReconciliation.allocation.targetItem[x]',[
    'string',
    'Identifier',
    'positiveInt',
  ])
  private targetItem?: IDataType | undefined;

  /**
   * PaymentReconciliation.allocation.encounter Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Applied-to encounter
   * - **Definition:** The Encounter to which this payment applies, may be completed by the receiver, used for search.
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
   * PaymentReconciliation.allocation.account Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Applied-to account
   * - **Definition:** The Account to which this payment applies, may be completed by the receiver, used for search.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Account',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private account?: Reference | undefined;

  /**
   * PaymentReconciliation.allocation.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Category of payment
   * - **Definition:** Code to indicate the nature of the payment.
   * - **Comment:** For example: payment, adjustment, funds advance, etc.
   * - **Requirements:** Needed to provide context for the amount.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private type_?: CodeableConcept | undefined;

  /**
   * PaymentReconciliation.allocation.submitter Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Submitter of the request
   * - **Definition:** The party which submitted the claim or financial transaction.
   * - **Requirements:** Needed for audit and validation.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private submitter?: Reference | undefined;

  /**
   * PaymentReconciliation.allocation.response Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Response committing to a payment
   * - **Definition:** A resource, such as a ClaimResponse, which contains a commitment to payment.
   * - **Requirements:** Needed to provide a linkage to the payment commitment.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/ClaimResponse',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private response?: Reference | undefined;

  /**
   * PaymentReconciliation.allocation.date Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Date of commitment to pay
   * - **Definition:** The date from the response resource containing a commitment to pay.
   * - **Requirements:** Needed for audit and validation.
   * - **FHIR Type:** `date`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private date?: DateType | undefined;

  /**
   * PaymentReconciliation.allocation.responsible Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Contact for the response
   * - **Definition:** A reference to the individual who is responsible for inquiries regarding the response and its payment.
   * - **Requirements:** To provide contact information.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private responsible?: Reference | undefined;

  /**
   * PaymentReconciliation.allocation.payee Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Recipient of the payment
   * - **Definition:** The party which is receiving the payment.
   * - **Requirements:** Needed for audit and validation.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private payee?: Reference | undefined;

  /**
   * PaymentReconciliation.allocation.amount Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Amount allocated to this payable
   * - **Definition:** The monetary amount allocated from the total payment to the payable.
   * - **Requirements:** Needed to explain the distribution of the payment to the payables.
   * - **FHIR Type:** `Money`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private amount?: Money | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `identifier` property value as a Identifier object if defined; else an empty Identifier object
   */
  public getIdentifier(): Identifier {
    return this.identifier ?? new Identifier();
  }

  /**
   * Assigns the provided Identifier object value to the `identifier` property.
   *
   * @param value - the `identifier` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setIdentifier(value: Identifier | undefined): this {
    if (isDefined<Identifier>(value)) {
      const optErrMsg = `Invalid PaymentReconciliation.allocation.identifier; Provided element is not an instance of Identifier.`;
      assertFhirType<Identifier>(value, Identifier, optErrMsg);
      this.identifier = value;
    } else {
      this.identifier = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `identifier` property exists and has a value; `false` otherwise
   */
  public hasIdentifier(): boolean {
    return isDefined<Identifier>(this.identifier) && !this.identifier.isEmpty();
  }

  /**
   * @returns the `predecessor` property value as a Identifier object if defined; else an empty Identifier object
   */
  public getPredecessor(): Identifier {
    return this.predecessor ?? new Identifier();
  }

  /**
   * Assigns the provided Predecessor object value to the `predecessor` property.
   *
   * @param value - the `predecessor` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPredecessor(value: Identifier | undefined): this {
    if (isDefined<Identifier>(value)) {
      const optErrMsg = `Invalid PaymentReconciliation.allocation.predecessor; Provided element is not an instance of Identifier.`;
      assertFhirType<Identifier>(value, Identifier, optErrMsg);
      this.predecessor = value;
    } else {
      this.predecessor = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `predecessor` property exists and has a value; `false` otherwise
   */
  public hasPredecessor(): boolean {
    return isDefined<Identifier>(this.predecessor) && !this.predecessor.isEmpty();
  }

  /**
   * @returns the `target` property value as a Reference object; else an empty Reference object
   */
  public getTarget(): Reference {
    return this.target ?? new Reference();
  }

  /**
   * Assigns the provided Target object value to the `target` property.
   *
   * @decorator `@ReferenceTargets('PaymentReconciliation.allocation.target', ['Claim','Account','Invoice','ChargeItem','Encounter','Contract',])`
   *
   * @param value - the `target` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('PaymentReconciliation.allocation.target', [
    'Claim',
  
    'Account',
  
    'Invoice',
  
    'ChargeItem',
  
    'Encounter',
  
    'Contract',
  ])
  public setTarget(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.target = value;
    } else {
      this.target = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `target` property exists and has a value; `false` otherwise
   */
  public hasTarget(): boolean {
    return isDefined<Reference>(this.target) && !this.target.isEmpty();
  }

  /**
   * @returns the `targetItem` property value as a DataType object if defined; else undefined
   */
  public getTargetItem(): IDataType | undefined {
    return this.targetItem;
  }

  /**
   * Assigns the provided DataType object value to the `targetItem` property.
   *
   * @decorator `@ChoiceDataTypes('PaymentReconciliation.allocation.targetItem[x]')`
   *
   * @param value - the `targetItem` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('PaymentReconciliation.allocation.targetItem[x]')
  public setTargetItem(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.targetItem = value;
    } else {
      this.targetItem = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `targetItem` property exists and has a value; `false` otherwise
   */
  public hasTargetItem(): boolean {
    return isDefined<IDataType>(this.targetItem) && !this.targetItem.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `targetItem` property value as a StringType object if defined; else undefined
   */
  public getTargetItemStringType(): StringType | undefined {
    if (!isDefined<IDataType | undefined>(this.targetItem)) {
      return undefined;
    }
    if (!(this.targetItem instanceof StringType)) {
      throw new InvalidTypeError(
        `DataType mismatch for PaymentReconciliation.allocation.targetItem[x]: Expected StringType but encountered ${this.targetItem.fhirType()}`,
      );
    }
    return this.targetItem;
  }

  /**
   * @returns `true` if the `targetItem` property exists as a StringType and has a value; `false` otherwise
   */
  public hasTargetItemStringType(): boolean {
    return this.hasTargetItem() && this.targetItem instanceof StringType;
  }

  /**
   * @returns the `targetItem` property value as a Identifier object if defined; else undefined
   */
  public getTargetItemIdentifier(): Identifier | undefined {
    if (!isDefined<IDataType | undefined>(this.targetItem)) {
      return undefined;
    }
    if (!(this.targetItem instanceof Identifier)) {
      throw new InvalidTypeError(
        `DataType mismatch for PaymentReconciliation.allocation.targetItem[x]: Expected Identifier but encountered ${this.targetItem.fhirType()}`,
      );
    }
    return this.targetItem;
  }

  /**
   * @returns `true` if the `targetItem` property exists as a Identifier and has a value; `false` otherwise
   */
  public hasTargetItemIdentifier(): boolean {
    return this.hasTargetItem() && this.targetItem instanceof Identifier;
  }

  /**
   * @returns the `targetItem` property value as a PositiveIntType object if defined; else undefined
   */
  public getTargetItemPositiveIntType(): PositiveIntType | undefined {
    if (!isDefined<IDataType | undefined>(this.targetItem)) {
      return undefined;
    }
    if (!(this.targetItem instanceof PositiveIntType)) {
      throw new InvalidTypeError(
        `DataType mismatch for PaymentReconciliation.allocation.targetItem[x]: Expected PositiveIntType but encountered ${this.targetItem.fhirType()}`,
      );
    }
    return this.targetItem;
  }

  /**
   * @returns `true` if the `targetItem` property exists as a PositiveIntType and has a value; `false` otherwise
   */
  public hasTargetItemPositiveIntType(): boolean {
    return this.hasTargetItem() && this.targetItem instanceof PositiveIntType;
  }

  // End of choice datatype-specific "get"/"has" methods

  /**
   * @returns the `encounter` property value as a Reference object; else an empty Reference object
   */
  public getEncounter(): Reference {
    return this.encounter ?? new Reference();
  }

  /**
   * Assigns the provided Encounter object value to the `encounter` property.
   *
   * @decorator `@ReferenceTargets('PaymentReconciliation.allocation.encounter', ['Encounter',])`
   *
   * @param value - the `encounter` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('PaymentReconciliation.allocation.encounter', [
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
   * @returns the `account` property value as a Reference object; else an empty Reference object
   */
  public getAccount(): Reference {
    return this.account ?? new Reference();
  }

  /**
   * Assigns the provided Account object value to the `account` property.
   *
   * @decorator `@ReferenceTargets('PaymentReconciliation.allocation.account', ['Account',])`
   *
   * @param value - the `account` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('PaymentReconciliation.allocation.account', [
    'Account',
  ])
  public setAccount(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.account = value;
    } else {
      this.account = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `account` property exists and has a value; `false` otherwise
   */
  public hasAccount(): boolean {
    return isDefined<Reference>(this.account) && !this.account.isEmpty();
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
      const optErrMsg = `Invalid PaymentReconciliation.allocation.type; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `submitter` property value as a Reference object; else an empty Reference object
   */
  public getSubmitter(): Reference {
    return this.submitter ?? new Reference();
  }

  /**
   * Assigns the provided Submitter object value to the `submitter` property.
   *
   * @decorator `@ReferenceTargets('PaymentReconciliation.allocation.submitter', ['Practitioner','PractitionerRole','Organization',])`
   *
   * @param value - the `submitter` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('PaymentReconciliation.allocation.submitter', [
    'Practitioner',
  
    'PractitionerRole',
  
    'Organization',
  ])
  public setSubmitter(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.submitter = value;
    } else {
      this.submitter = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `submitter` property exists and has a value; `false` otherwise
   */
  public hasSubmitter(): boolean {
    return isDefined<Reference>(this.submitter) && !this.submitter.isEmpty();
  }

  /**
   * @returns the `response` property value as a Reference object; else an empty Reference object
   */
  public getResponse(): Reference {
    return this.response ?? new Reference();
  }

  /**
   * Assigns the provided Response object value to the `response` property.
   *
   * @decorator `@ReferenceTargets('PaymentReconciliation.allocation.response', ['ClaimResponse',])`
   *
   * @param value - the `response` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('PaymentReconciliation.allocation.response', [
    'ClaimResponse',
  ])
  public setResponse(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.response = value;
    } else {
      this.response = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `response` property exists and has a value; `false` otherwise
   */
  public hasResponse(): boolean {
    return isDefined<Reference>(this.response) && !this.response.isEmpty();
  }

  /**
   * @returns the `date` property value as a DateType object if defined; else an empty DateType object
   */
  public getDateElement(): DateType {
    return this.date ?? new DateType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `date` property.
   *
   * @param element - the `date` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDateElement(element: DateType | undefined): this {
    if (isDefined<DateType>(element)) {
      const optErrMsg = `Invalid PaymentReconciliation.allocation.date; Provided element is not an instance of DateType.`;
      assertFhirType<DateType>(element, DateType, optErrMsg);
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
    return isDefined<DateType>(this.date) && !this.date.isEmpty();
  }

  /**
   * @returns the `date` property value as a fhirDate if defined; else undefined
   */
  public getDate(): fhirDate | undefined {
    return this.date?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `date` property.
   *
   * @param value - the `date` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDate(value: fhirDate | undefined): this {
    if (isDefined<fhirDate>(value)) {
      const optErrMsg = `Invalid PaymentReconciliation.allocation.date (${String(value)})`;
      this.date = new DateType(parseFhirPrimitiveData(value, fhirDateSchema, optErrMsg));
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
   * @returns the `responsible` property value as a Reference object; else an empty Reference object
   */
  public getResponsible(): Reference {
    return this.responsible ?? new Reference();
  }

  /**
   * Assigns the provided Responsible object value to the `responsible` property.
   *
   * @decorator `@ReferenceTargets('PaymentReconciliation.allocation.responsible', ['PractitionerRole',])`
   *
   * @param value - the `responsible` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('PaymentReconciliation.allocation.responsible', [
    'PractitionerRole',
  ])
  public setResponsible(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.responsible = value;
    } else {
      this.responsible = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `responsible` property exists and has a value; `false` otherwise
   */
  public hasResponsible(): boolean {
    return isDefined<Reference>(this.responsible) && !this.responsible.isEmpty();
  }

  /**
   * @returns the `payee` property value as a Reference object; else an empty Reference object
   */
  public getPayee(): Reference {
    return this.payee ?? new Reference();
  }

  /**
   * Assigns the provided Payee object value to the `payee` property.
   *
   * @decorator `@ReferenceTargets('PaymentReconciliation.allocation.payee', ['Practitioner','PractitionerRole','Organization',])`
   *
   * @param value - the `payee` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('PaymentReconciliation.allocation.payee', [
    'Practitioner',
  
    'PractitionerRole',
  
    'Organization',
  ])
  public setPayee(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.payee = value;
    } else {
      this.payee = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `payee` property exists and has a value; `false` otherwise
   */
  public hasPayee(): boolean {
    return isDefined<Reference>(this.payee) && !this.payee.isEmpty();
  }

  /**
   * @returns the `amount` property value as a Money object if defined; else an empty Money object
   */
  public getAmount(): Money {
    return this.amount ?? new Money();
  }

  /**
   * Assigns the provided Amount object value to the `amount` property.
   *
   * @param value - the `amount` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAmount(value: Money | undefined): this {
    if (isDefined<Money>(value)) {
      const optErrMsg = `Invalid PaymentReconciliation.allocation.amount; Provided element is not an instance of Money.`;
      assertFhirType<Money>(value, Money, optErrMsg);
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
    return isDefined<Money>(this.amount) && !this.amount.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'PaymentReconciliation.allocation';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identifier,
      this.predecessor,
      this.target,
      this.targetItem,
      this.encounter,
      this.account,
      this.type_,
      this.submitter,
      this.response,
      this.date,
      this.responsible,
      this.payee,
      this.amount,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): PaymentReconciliationAllocationComponent {
    const dest = new PaymentReconciliationAllocationComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: PaymentReconciliationAllocationComponent): void {
    super.copyValues(dest);
    dest.identifier = this.identifier?.copy();
    dest.predecessor = this.predecessor?.copy();
    dest.target = this.target?.copy();
    dest.targetItem = this.targetItem?.copy() as IDataType;
    dest.encounter = this.encounter?.copy();
    dest.account = this.account?.copy();
    dest.type_ = this.type_?.copy();
    dest.submitter = this.submitter?.copy();
    dest.response = this.response?.copy();
    dest.date = this.date?.copy();
    dest.responsible = this.responsible?.copy();
    dest.payee = this.payee?.copy();
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

    if (this.hasIdentifier()) {
      setFhirComplexJson(this.getIdentifier(), 'identifier', jsonObj);
    }

    if (this.hasPredecessor()) {
      setFhirComplexJson(this.getPredecessor(), 'predecessor', jsonObj);
    }

    if (this.hasTarget()) {
      setFhirComplexJson(this.getTarget(), 'target', jsonObj);
    }

    if (this.hasTargetItem()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getTargetItem()!, 'targetItem', jsonObj);
    }

    if (this.hasEncounter()) {
      setFhirComplexJson(this.getEncounter(), 'encounter', jsonObj);
    }

    if (this.hasAccount()) {
      setFhirComplexJson(this.getAccount(), 'account', jsonObj);
    }

    if (this.hasType()) {
      setFhirComplexJson(this.getType(), 'type', jsonObj);
    }

    if (this.hasSubmitter()) {
      setFhirComplexJson(this.getSubmitter(), 'submitter', jsonObj);
    }

    if (this.hasResponse()) {
      setFhirComplexJson(this.getResponse(), 'response', jsonObj);
    }

    if (this.hasDateElement()) {
      setFhirPrimitiveJson<fhirDate>(this.getDateElement(), 'date', jsonObj);
    }

    if (this.hasResponsible()) {
      setFhirComplexJson(this.getResponsible(), 'responsible', jsonObj);
    }

    if (this.hasPayee()) {
      setFhirComplexJson(this.getPayee(), 'payee', jsonObj);
    }

    if (this.hasAmount()) {
      setFhirComplexJson(this.getAmount(), 'amount', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * PaymentReconciliationProcessNoteComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Note concerning processing
 * - **Definition:** A note that describes or explains the processing in a human readable form.
 * - **Requirements:** Provides the specific textual explanations associated with the processing.
 *
 * @category Data Models: Resource
 * @see [FHIR PaymentReconciliation](http://hl7.org/fhir/StructureDefinition/PaymentReconciliation)
 */
export class PaymentReconciliationProcessNoteComponent extends BackboneElement implements IBackboneElement {
  constructor() {
    super();

    this.noteTypeEnum = new NoteTypeEnum();
  }

  /**
   * Parse the provided `PaymentReconciliationProcessNoteComponent` JSON to instantiate the PaymentReconciliationProcessNoteComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `PaymentReconciliationProcessNoteComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to PaymentReconciliationProcessNoteComponent
   * @returns PaymentReconciliationProcessNoteComponent data model or undefined for `PaymentReconciliationProcessNoteComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): PaymentReconciliationProcessNoteComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'PaymentReconciliationProcessNoteComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new PaymentReconciliationProcessNoteComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setTypeElement(datatype);
    }

    fieldName = 'text';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setTextElement(datatype);
    }

    return instance;
  }

  /**
   * FHIR CodeSystem: NoteType
   *
   * @see {@link NoteTypeEnum }
   */
  private readonly noteTypeEnum: NoteTypeEnum;

  /**
   * PaymentReconciliation.processNote.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** display | print | printoper
   * - **Definition:** The business purpose of the note text.
   * - **Requirements:** To convey the expectation for when the text is used.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link NoteTypeEnum }
   */
  private type_?: EnumCodeType | undefined;

  /**
   * PaymentReconciliation.processNote.text Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Note explanatory text
   * - **Definition:** The explanation or description associated with the processing.
   * - **Requirements:** Required to provide human readable explanation.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private text?: StringType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `type_` property value as a EnumCodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link NoteTypeEnum }
   */
  public getTypeEnumType(): EnumCodeType | undefined {
    return this.type_;
  }

  /**
   * Assigns the provided EnumCodeType value to the `type_` property.
   *
   * @param enumType - the `type_` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code values
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link NoteTypeEnum }
   */
  public setTypeEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = 'Invalid PaymentReconciliation.processNote.type';
      assertEnumCodeType<NoteTypeEnum>(enumType, NoteTypeEnum, errMsgPrefix);
      this.type_ = enumType;
    } else {
      this.type_ = undefined;
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
   * @returns the `type_` property value as a CodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link NoteTypeEnum }
   */
  public getTypeElement(): CodeType | undefined {
    if (this.type_ === undefined) {
      return undefined;
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
   * @see CodeSystem Enumeration: {@link NoteTypeEnum }
   */
  public setTypeElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid PaymentReconciliation.processNote.type; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.type_ = new EnumCodeType(element, this.noteTypeEnum);
    } else {
      this.type_ = undefined;
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
   * @returns the `type_` property value as a fhirCode if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link NoteTypeEnum }
   */
  public getType(): fhirCode | undefined {
    if (this.type_ === undefined) {
      return undefined;
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
   * @see CodeSystem Enumeration: {@link NoteTypeEnum }
   */
  public setType(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid PaymentReconciliation.processNote.type; Provided value is not an instance of fhirCode.`;
      this.type_ = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.noteTypeEnum);
    } else {
      this.type_ = undefined;
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
      const optErrMsg = `Invalid PaymentReconciliation.processNote.text; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid PaymentReconciliation.processNote.text (${String(value)})`;
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
    return 'PaymentReconciliation.processNote';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.type_,
      this.text,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): PaymentReconciliationProcessNoteComponent {
    const dest = new PaymentReconciliationProcessNoteComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: PaymentReconciliationProcessNoteComponent): void {
    super.copyValues(dest);
    dest.type_ = this.type_?.copy();
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

    if (this.hasTypeElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getTypeElement()!, 'type', jsonObj);
    }

    if (this.hasTextElement()) {
      setFhirPrimitiveJson<fhirString>(this.getTextElement(), 'text', jsonObj);
    }

    return jsonObj;
  }
}
