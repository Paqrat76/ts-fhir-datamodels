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
 * StructureDefinition.fhirVersion: 4.3.0
 *
 * For questions, suggestions, or bugs, please open an issue at [GitHub ts-fhir-datamodels/issues](https://github.com/Paqrat76/ts-fhir-datamodels/issues).
 *
 * @packageDocumentation
 */

import { strict as assert } from 'node:assert';
import {
  BackboneElement,
  CodeType,
  DateTimeType,
  DateType,
  DomainResource,
  EnumCodeType,
  FhirError,
  FhirParser,
  IBackboneElement,
  IDomainResource,
  INSTANCE_EMPTY_ERROR_MSG,
  JSON,
  PrimitiveType,
  REQUIRED_PROPERTIES_DO_NOT_EXIST,
  REQUIRED_PROPERTIES_REQD_IN_JSON,
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
  parseFhirPrimitiveData,
  setFhirBackboneElementListJson,
  setFhirComplexJson,
  setFhirComplexListJson,
  setFhirPrimitiveJson,
} from '@paq-ts-fhir/fhir-core';
import { CodeableConcept, Identifier, Money, PARSABLE_DATATYPE_MAP, Period, Reference } from '../complex-types/complex-datatypes';
import { FmStatusEnum } from '../code-systems/FmStatusEnum';
import { NoteTypeEnum } from '../code-systems/NoteTypeEnum';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';
import { RemittanceOutcomeEnum } from '../code-systems/RemittanceOutcomeEnum';

/**
 * PaymentReconciliation Class
 *
 * @remarks
 * This resource provides the details including amount of a payment and allocates the payment items being paid.
 *
 * **FHIR Specification**
 * - **Short:** PaymentReconciliation resource
 * - **Definition:** This resource provides the details including amount of a payment and allocates the payment items being paid.
 * - **FHIR Version:** 4.3.0
 *
 * @category Data Models: Resource
 * @see [FHIR PaymentReconciliation](http://hl7.org/fhir/StructureDefinition/PaymentReconciliation)
 */
export class PaymentReconciliation extends DomainResource implements IDomainResource {
  constructor(status: EnumCodeType | CodeType | fhirCode | null = null, created: DateTimeType | fhirDateTime | null = null, paymentDate: DateType | fhirDate | null = null, paymentAmount: Money | null = null) {
    super();

    this.fmStatusEnum = new FmStatusEnum();
    this.remittanceOutcomeEnum = new RemittanceOutcomeEnum();

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

    this.paymentDate = null;
    if (isDefined<DateType | fhirDate>(paymentDate)) {
      if (paymentDate instanceof PrimitiveType) {
        this.setPaymentDateElement(paymentDate);
      } else {
        this.setPaymentDate(paymentDate);
      }
    }

    this.paymentAmount = null;
    if (isDefined<Money>(paymentAmount)) {
      this.setPaymentAmount(paymentAmount);
    }
  }

  /**
   * Parse the provided `PaymentReconciliation` JSON to instantiate the PaymentReconciliation data model.
   *
   * @param sourceJson - JSON representing FHIR `PaymentReconciliation`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to PaymentReconciliation
   * @returns PaymentReconciliation data model or undefined for `PaymentReconciliation`
   * @throws {@link FhirError} if the provided JSON is missing required properties
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

    const missingReqdProperties: string[] = [];

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
        missingReqdProperties.push(sourceField);
      } else {
        instance.setStatusElement(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
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
        missingReqdProperties.push(sourceField);
      } else {
        instance.setCreatedElement(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
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

    fieldName = 'paymentDate';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateType | undefined = fhirParser.parseDateType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setPaymentDateElement(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'paymentAmount';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Money | undefined = Money.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setPaymentAmount(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'paymentIdentifier';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Identifier | undefined = Identifier.parse(classJsonObj[fieldName]!, sourceField);
      instance.setPaymentIdentifier(datatype);
    }

    fieldName = 'detail';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: PaymentReconciliationDetailComponent | undefined = PaymentReconciliationDetailComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addDetail(component);
        }
      });
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
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: PaymentReconciliationProcessNoteComponent | undefined = PaymentReconciliationProcessNoteComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addProcessNote(component);
        }
      });
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_REQD_IN_JSON} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
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
   * FHIR CodeSystem: RemittanceOutcome
   *
   * @see {@link RemittanceOutcomeEnum }
   */
  private readonly remittanceOutcomeEnum: RemittanceOutcomeEnum;

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
   * @see CodeSystem Enumeration: {@link RemittanceOutcomeEnum }
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
   * PaymentReconciliation.paymentDate Element
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
  private paymentDate: DateType | null;

  /**
   * PaymentReconciliation.paymentAmount Element
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
  private paymentAmount: Money | null;

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
   * PaymentReconciliation.detail Element
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
  private detail?: PaymentReconciliationDetailComponent[] | undefined;

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
  public setStatusEnumType(enumType: EnumCodeType): this {
    assertIsDefined<EnumCodeType>(enumType, `PaymentReconciliation.status is required`);
    const errMsgPrefix = `Invalid PaymentReconciliation.status`;
    assertEnumCodeType<FmStatusEnum>(enumType, FmStatusEnum, errMsgPrefix);
    this.status = enumType;
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
  public setStatusElement(element: CodeType): this {
    assertIsDefined<CodeType>(element, `PaymentReconciliation.status is required`);
    const optErrMsg = `Invalid PaymentReconciliation.status; Provided value is not an instance of CodeType.`;
    assertFhirType<CodeType>(element, CodeType, optErrMsg);
    this.status = new EnumCodeType(element, this.fmStatusEnum);
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
  public setStatus(value: fhirCode): this {
    assertIsDefined<fhirCode>(value, `PaymentReconciliation.status is required`);
    const optErrMsg = `Invalid PaymentReconciliation.status (${String(value)})`;
    this.status = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.fmStatusEnum);
    return this;
  }

  /**
   * @returns `true` if the `status` property exists and has a value; `false` otherwise
   */
  public hasStatus(): boolean {
    return this.hasStatusEnumType();
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
   * @returns the `created` property value as a DateTimeType object if defined; else null
   */
  public getCreatedElement(): DateTimeType | null {
    return this.created;
  }

  /**
   * Assigns the provided PrimitiveType value to the `created` property.
   *
   * @param element - the `created` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCreatedElement(element: DateTimeType): this {
    assertIsDefined<DateTimeType>(element, `PaymentReconciliation.created is required`);
    const optErrMsg = `Invalid PaymentReconciliation.created; Provided value is not an instance of DateTimeType.`;
    assertFhirType<DateTimeType>(element, DateTimeType, optErrMsg);
    this.created = element;
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
  public setCreated(value: fhirDateTime): this {
    assertIsDefined<fhirDateTime>(value, `PaymentReconciliation.created is required`);
    const optErrMsg = `Invalid PaymentReconciliation.created (${String(value)})`;
    this.created = new DateTimeType(parseFhirPrimitiveData(value, fhirDateTimeSchema, optErrMsg));
    return this;
  }

  /**
   * @returns `true` if the `created` property exists and has a value; `false` otherwise
   */
  public hasCreated(): boolean {
    return this.hasCreatedElement();
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
   * @decorator `@ReferenceTargets('PaymentReconciliation.paymentIssuer', ['Organization',])`
   *
   * @param value - the `paymentIssuer` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('PaymentReconciliation.paymentIssuer', [
    'Organization',
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
   * @see CodeSystem Enumeration: {@link RemittanceOutcomeEnum }
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
   * @see CodeSystem Enumeration: {@link RemittanceOutcomeEnum }
   */
  public setOutcomeEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = 'Invalid PaymentReconciliation.outcome';
      assertEnumCodeType<RemittanceOutcomeEnum>(enumType, RemittanceOutcomeEnum, errMsgPrefix);
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
   * @see CodeSystem Enumeration: {@link RemittanceOutcomeEnum }
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
   * @see CodeSystem Enumeration: {@link RemittanceOutcomeEnum }
   */
  public setOutcomeElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid PaymentReconciliation.outcome; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.outcome = new EnumCodeType(element, this.remittanceOutcomeEnum);
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
   * @see CodeSystem Enumeration: {@link RemittanceOutcomeEnum }
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
   * @see CodeSystem Enumeration: {@link RemittanceOutcomeEnum }
   */
  public setOutcome(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid PaymentReconciliation.outcome; Provided value is not an instance of fhirCode.`;
      this.outcome = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.remittanceOutcomeEnum);
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
   * @returns the `paymentDate` property value as a DateType object if defined; else null
   */
  public getPaymentDateElement(): DateType | null {
    return this.paymentDate;
  }

  /**
   * Assigns the provided PrimitiveType value to the `paymentDate` property.
   *
   * @param element - the `paymentDate` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPaymentDateElement(element: DateType): this {
    assertIsDefined<DateType>(element, `PaymentReconciliation.paymentDate is required`);
    const optErrMsg = `Invalid PaymentReconciliation.paymentDate; Provided value is not an instance of DateType.`;
    assertFhirType<DateType>(element, DateType, optErrMsg);
    this.paymentDate = element;
    return this;
  }

  /**
   * @returns `true` if the `paymentDate` property exists and has a value; `false` otherwise
   */
  public hasPaymentDateElement(): boolean {
    return isDefined<DateType>(this.paymentDate) && !this.paymentDate.isEmpty();
  }

  /**
   * @returns the `paymentDate` property value as a fhirDate if defined; else null
   */
  public getPaymentDate(): fhirDate | null {
    if (this.paymentDate?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.paymentDate.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `paymentDate` property.
   *
   * @param value - the `paymentDate` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPaymentDate(value: fhirDate): this {
    assertIsDefined<fhirDate>(value, `PaymentReconciliation.paymentDate is required`);
    const optErrMsg = `Invalid PaymentReconciliation.paymentDate (${String(value)})`;
    this.paymentDate = new DateType(parseFhirPrimitiveData(value, fhirDateSchema, optErrMsg));
    return this;
  }

  /**
   * @returns `true` if the `paymentDate` property exists and has a value; `false` otherwise
   */
  public hasPaymentDate(): boolean {
    return this.hasPaymentDateElement();
  }

  /**
   * @returns the `paymentAmount` property value as a Money object if defined; else null
   */
  public getPaymentAmount(): Money | null {
    return this.paymentAmount;
  }

  /**
   * Assigns the provided Money object value to the `paymentAmount` property.
   *
   * @param value - the `paymentAmount` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPaymentAmount(value: Money): this {
    assertIsDefined<Money>(value, `PaymentReconciliation.paymentAmount is required`);
    const optErrMsg = `Invalid PaymentReconciliation.paymentAmount; Provided element is not an instance of Money.`;
    assertFhirType<Money>(value, Money, optErrMsg);
    this.paymentAmount = value;
    return this;
  }

  /**
   * @returns `true` if the `paymentAmount` property exists and has a value; `false` otherwise
   */
  public hasPaymentAmount(): boolean {
    return isDefined<Money>(this.paymentAmount) && !this.paymentAmount.isEmpty();
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
   * @returns the `detail` property value as a PaymentReconciliationDetailComponent array
   */
  public getDetail(): PaymentReconciliationDetailComponent[] {
    return this.detail ?? ([] as PaymentReconciliationDetailComponent[]);
  }

  /**
   * Assigns the provided PaymentReconciliationDetailComponent array value to the `detail` property.
   *
   * @param value - the `detail` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDetail(value: PaymentReconciliationDetailComponent[] | undefined): this {
    if (isDefinedList<PaymentReconciliationDetailComponent>(value)) {
      const optErrMsg = `Invalid PaymentReconciliation.detail; Provided value array has an element that is not an instance of PaymentReconciliationDetailComponent.`;
      assertFhirTypeList<PaymentReconciliationDetailComponent>(value, PaymentReconciliationDetailComponent, optErrMsg);
      this.detail = value;
    } else {
      this.detail = undefined;
    }
    return this;
  }

  /**
   * Add the provided PaymentReconciliationDetailComponent value to the `detail` array property.
   *
   * @param value - the `detail` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addDetail(value: PaymentReconciliationDetailComponent | undefined): this {
    if (isDefined<PaymentReconciliationDetailComponent>(value)) {
      const optErrMsg = `Invalid PaymentReconciliation.detail; Provided element is not an instance of PaymentReconciliationDetailComponent.`;
      assertFhirType<PaymentReconciliationDetailComponent>(value, PaymentReconciliationDetailComponent, optErrMsg);
      this.initDetail();
      this.detail?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `detail` property exists and has a value; `false` otherwise
   */
  public hasDetail(): boolean {
    return isDefinedList<PaymentReconciliationDetailComponent>(this.detail) && this.detail.some((item: PaymentReconciliationDetailComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `detail` property
   */
  private initDetail(): void {
    if(!this.hasDetail()) {
      this.detail = [] as PaymentReconciliationDetailComponent[];
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
      this.status,
      this.period,
      this.created,
      this.paymentIssuer,
      this.request,
      this.requestor,
      this.outcome,
      this.disposition,
      this.paymentDate,
      this.paymentAmount,
      this.paymentIdentifier,
      this.detail,
      this.formCode,
      this.processNote,
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
    dest.status = this.status ? this.status.copy() : null;
    dest.period = this.period?.copy();
    dest.created = this.created ? this.created.copy() : null;
    dest.paymentIssuer = this.paymentIssuer?.copy();
    dest.request = this.request?.copy();
    dest.requestor = this.requestor?.copy();
    dest.outcome = this.outcome?.copy();
    dest.disposition = this.disposition?.copy();
    dest.paymentDate = this.paymentDate ? this.paymentDate.copy() : null;
    dest.paymentAmount = this.paymentAmount ? this.paymentAmount.copy() : null;
    dest.paymentIdentifier = this.paymentIdentifier?.copy();
    const detailList = copyListValues<PaymentReconciliationDetailComponent>(this.detail);
    dest.detail = detailList.length === 0 ? undefined : detailList;
    dest.formCode = this.formCode?.copy();
    const processNoteList = copyListValues<PaymentReconciliationProcessNoteComponent>(this.processNote);
    dest.processNote = processNoteList.length === 0 ? undefined : processNoteList;
  }

  /**
   * @returns the JSON value or undefined if the instance is empty
   * @throws {@link FhirError} if the instance is missing required properties
   */
  public override toJSON(): JSON.Value | undefined {
    // Required class properties exist (have a min cardinality > 0); therefore, do not check for this.isEmpty()!

    let jsonObj = super.toJSON() as JSON.Object | undefined;
    jsonObj ??= {} as JSON.Object;

    const missingReqdProperties: string[] = [];

    if (this.hasIdentifier()) {
      setFhirComplexListJson(this.getIdentifier(), 'identifier', jsonObj);
    }

    if (this.hasStatusElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getStatusElement()!, 'status', jsonObj);
    } else {
      missingReqdProperties.push(`PaymentReconciliation.status`);
    }

    if (this.hasPeriod()) {
      setFhirComplexJson(this.getPeriod(), 'period', jsonObj);
    }

    if (this.hasCreatedElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirDateTime>(this.getCreatedElement()!, 'created', jsonObj);
    } else {
      missingReqdProperties.push(`PaymentReconciliation.created`);
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

    if (this.hasPaymentDateElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirDate>(this.getPaymentDateElement()!, 'paymentDate', jsonObj);
    } else {
      missingReqdProperties.push(`PaymentReconciliation.paymentDate`);
    }

    if (this.hasPaymentAmount()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getPaymentAmount()!, 'paymentAmount', jsonObj);
    } else {
      missingReqdProperties.push(`PaymentReconciliation.paymentAmount`);
    }

    if (this.hasPaymentIdentifier()) {
      setFhirComplexJson(this.getPaymentIdentifier(), 'paymentIdentifier', jsonObj);
    }

    if (this.hasDetail()) {
      setFhirBackboneElementListJson(this.getDetail(), 'detail', jsonObj);
    }

    if (this.hasFormCode()) {
      setFhirComplexJson(this.getFormCode(), 'formCode', jsonObj);
    }

    if (this.hasProcessNote()) {
      setFhirBackboneElementListJson(this.getProcessNote(), 'processNote', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}

/**
 * PaymentReconciliationDetailComponent Class
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
export class PaymentReconciliationDetailComponent extends BackboneElement implements IBackboneElement {
  constructor(type_: CodeableConcept | null = null) {
    super();

    this.type_ = null;
    if (isDefined<CodeableConcept>(type_)) {
      this.setType(type_);
    }
  }

  /**
   * Parse the provided `PaymentReconciliationDetailComponent` JSON to instantiate the PaymentReconciliationDetailComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `PaymentReconciliationDetailComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to PaymentReconciliationDetailComponent
   * @returns PaymentReconciliationDetailComponent data model or undefined for `PaymentReconciliationDetailComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): PaymentReconciliationDetailComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'PaymentReconciliationDetailComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new PaymentReconciliationDetailComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    const missingReqdProperties: string[] = [];

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

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setType(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'request';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setRequest(datatype);
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

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_REQD_IN_JSON} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * PaymentReconciliation.detail.identifier Element
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
   * PaymentReconciliation.detail.predecessor Element
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
   * PaymentReconciliation.detail.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Category of payment
   * - **Definition:** Code to indicate the nature of the payment.
   * - **Comment:** For example: payment, adjustment, funds advance, etc.
   * - **Requirements:** Needed to provide context for the amount.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private type_: CodeableConcept | null;

  /**
   * PaymentReconciliation.detail.request Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Request giving rise to the payment
   * - **Definition:** A resource, such as a Claim, the evaluation of which could lead to payment.
   * - **Requirements:** Needed to provide a linkage  to the original request.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Resource',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private request?: Reference | undefined;

  /**
   * PaymentReconciliation.detail.submitter Element
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
   * PaymentReconciliation.detail.response Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Response committing to a payment
   * - **Definition:** A resource, such as a ClaimResponse, which contains a commitment to payment.
   * - **Requirements:** Needed to provide a linkage to the payment commitment.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Resource',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private response?: Reference | undefined;

  /**
   * PaymentReconciliation.detail.date Element
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
   * PaymentReconciliation.detail.responsible Element
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
   * PaymentReconciliation.detail.payee Element
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
   * PaymentReconciliation.detail.amount Element
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
      const optErrMsg = `Invalid PaymentReconciliation.detail.identifier; Provided element is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid PaymentReconciliation.detail.predecessor; Provided element is not an instance of Identifier.`;
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
   * @returns the `type_` property value as a CodeableConcept object if defined; else null
   */
  public getType(): CodeableConcept | null {
    return this.type_;
  }

  /**
   * Assigns the provided CodeableConcept object value to the `type_` property.
   *
   * @param value - the `type_` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setType(value: CodeableConcept): this {
    assertIsDefined<CodeableConcept>(value, `PaymentReconciliation.detail.type is required`);
    const optErrMsg = `Invalid PaymentReconciliation.detail.type; Provided element is not an instance of CodeableConcept.`;
    assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
    this.type_ = value;
    return this;
  }

  /**
   * @returns `true` if the `type_` property exists and has a value; `false` otherwise
   */
  public hasType(): boolean {
    return isDefined<CodeableConcept>(this.type_) && !this.type_.isEmpty();
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
   * @decorator `@ReferenceTargets('PaymentReconciliation.detail.request', ['Resource',])`
   *
   * @param value - the `request` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('PaymentReconciliation.detail.request', [
    'Resource',
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
   * @returns the `submitter` property value as a Reference object; else an empty Reference object
   */
  public getSubmitter(): Reference {
    return this.submitter ?? new Reference();
  }

  /**
   * Assigns the provided Submitter object value to the `submitter` property.
   *
   * @decorator `@ReferenceTargets('PaymentReconciliation.detail.submitter', ['Practitioner','PractitionerRole','Organization',])`
   *
   * @param value - the `submitter` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('PaymentReconciliation.detail.submitter', [
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
   * @decorator `@ReferenceTargets('PaymentReconciliation.detail.response', ['Resource',])`
   *
   * @param value - the `response` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('PaymentReconciliation.detail.response', [
    'Resource',
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
      const optErrMsg = `Invalid PaymentReconciliation.detail.date; Provided element is not an instance of DateType.`;
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
      const optErrMsg = `Invalid PaymentReconciliation.detail.date (${String(value)})`;
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
   * @decorator `@ReferenceTargets('PaymentReconciliation.detail.responsible', ['PractitionerRole',])`
   *
   * @param value - the `responsible` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('PaymentReconciliation.detail.responsible', [
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
   * @decorator `@ReferenceTargets('PaymentReconciliation.detail.payee', ['Practitioner','PractitionerRole','Organization',])`
   *
   * @param value - the `payee` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('PaymentReconciliation.detail.payee', [
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
      const optErrMsg = `Invalid PaymentReconciliation.detail.amount; Provided element is not an instance of Money.`;
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
    return 'PaymentReconciliation.detail';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identifier,
      this.predecessor,
      this.type_,
      this.request,
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
  public override copy(): PaymentReconciliationDetailComponent {
    const dest = new PaymentReconciliationDetailComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: PaymentReconciliationDetailComponent): void {
    super.copyValues(dest);
    dest.identifier = this.identifier?.copy();
    dest.predecessor = this.predecessor?.copy();
    dest.type_ = this.type_ ? this.type_.copy() : null;
    dest.request = this.request?.copy();
    dest.submitter = this.submitter?.copy();
    dest.response = this.response?.copy();
    dest.date = this.date?.copy();
    dest.responsible = this.responsible?.copy();
    dest.payee = this.payee?.copy();
    dest.amount = this.amount?.copy();
  }

  /**
   * @returns the JSON value or undefined if the instance is empty
   * @throws {@link FhirError} if the instance is missing required properties
   */
  public override toJSON(): JSON.Value | undefined {
    // Required class properties exist (have a min cardinality > 0); therefore, do not check for this.isEmpty()!

    let jsonObj = super.toJSON() as JSON.Object | undefined;
    jsonObj ??= {} as JSON.Object;

    const missingReqdProperties: string[] = [];

    if (this.hasIdentifier()) {
      setFhirComplexJson(this.getIdentifier(), 'identifier', jsonObj);
    }

    if (this.hasPredecessor()) {
      setFhirComplexJson(this.getPredecessor(), 'predecessor', jsonObj);
    }

    if (this.hasType()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getType()!, 'type', jsonObj);
    } else {
      missingReqdProperties.push(`PaymentReconciliation.detail.type`);
    }

    if (this.hasRequest()) {
      setFhirComplexJson(this.getRequest(), 'request', jsonObj);
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

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
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

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
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
