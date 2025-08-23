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
 * Invoice Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/Invoice
 * StructureDefinition.name: Invoice
 * StructureDefinition.description: Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose.
 * StructureDefinition.fhirVersion: 5.0.0
 *
 * For questions, suggestions, or bugs, please open an issue at [GitHub ts-fhir-datamodels/issues](https://github.com/Paqrat76/ts-fhir-datamodels/issues).
 *
 * @packageDocumentation
 */

import { strict as assert } from 'node:assert';
import {
  BackboneElement,
  ChoiceDataTypes,
  ChoiceDataTypesMeta,
  CodeType,
  DateTimeType,
  DateType,
  DomainResource,
  EnumCodeType,
  FhirError,
  FhirParser,
  IBackboneElement,
  IDataType,
  IDomainResource,
  INSTANCE_EMPTY_ERROR_MSG,
  InvalidTypeError,
  JSON,
  MarkdownType,
  PositiveIntType,
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
  fhirDateTime,
  fhirDateTimeSchema,
  fhirMarkdown,
  fhirMarkdownSchema,
  fhirPositiveInt,
  fhirPositiveIntSchema,
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
  setPolymorphicValueJson,
} from '@paq-ts-fhir/fhir-core';
import { Annotation, CodeableConcept, Identifier, MonetaryComponent, Money, PARSABLE_DATATYPE_MAP, Period, Reference } from '../complex-types/complex-datatypes';
import { InvoiceStatusEnum } from '../code-systems/InvoiceStatusEnum';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Symbol.metadata polyfill secret sauce for decorator metadata
(Symbol.metadata as any) ??= Symbol('Symbol.metadata');

/**
 * Invoice Class
 *
 * @remarks
 * Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose.
 *
 * **FHIR Specification**
 * - **Short:** Invoice containing ChargeItems from an Account
 * - **Definition:** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose.
 * - **FHIR Version:** 5.0.0
 *
 * @category Data Models: Resource
 * @see [FHIR Invoice](http://hl7.org/fhir/StructureDefinition/Invoice)
 */
export class Invoice extends DomainResource implements IDomainResource {
  constructor(status: EnumCodeType | CodeType | fhirCode | null = null) {
    super();

    this.invoiceStatusEnum = new InvoiceStatusEnum();

    this.status = constructorCodeValueAsEnumCodeType<InvoiceStatusEnum>(
      status,
      InvoiceStatusEnum,
      this.invoiceStatusEnum,
      'Invoice.status',
    );
  }

  /**
   * Parse the provided `Invoice` JSON to instantiate the Invoice data model.
   *
   * @param sourceJson - JSON representing FHIR `Invoice`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to Invoice
   * @returns Invoice data model or undefined for `Invoice`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): Invoice | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'Invoice';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new Invoice();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'Invoice');
    fhirParser.processDomainResourceJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const classMetadata: DecoratorMetadataObject | null = Invoice[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for Invoice`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

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

    fieldName = 'cancelledReason';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setCancelledReasonElement(datatype);
    }

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setType(datatype);
    }

    fieldName = 'subject';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setSubject(datatype);
    }

    fieldName = 'recipient';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setRecipient(datatype);
    }

    fieldName = 'date';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dtJson, dtSiblingJson);
      instance.setDateElement(datatype);
    }

    fieldName = 'creation';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dtJson, dtSiblingJson);
      instance.setCreationElement(datatype);
    }

    fieldName = 'period[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const period: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setPeriod(period);

    fieldName = 'participant';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: InvoiceParticipantComponent | undefined = InvoiceParticipantComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addParticipant(component);
        }
      });
    }

    fieldName = 'issuer';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setIssuer(datatype);
    }

    fieldName = 'account';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setAccount(datatype);
    }

    fieldName = 'lineItem';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: InvoiceLineItemComponent | undefined = InvoiceLineItemComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addLineItem(component);
        }
      });
    }

    fieldName = 'totalPriceComponent';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: MonetaryComponent | undefined = MonetaryComponent.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addTotalPriceComponent(datatype);
        }
      });
    }

    fieldName = 'totalNet';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Money | undefined = Money.parse(classJsonObj[fieldName]!, sourceField);
      instance.setTotalNet(datatype);
    }

    fieldName = 'totalGross';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Money | undefined = Money.parse(classJsonObj[fieldName]!, sourceField);
      instance.setTotalGross(datatype);
    }

    fieldName = 'paymentTerms';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: MarkdownType | undefined = fhirParser.parseMarkdownType(dtJson, dtSiblingJson);
      instance.setPaymentTermsElement(datatype);
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

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_REQD_IN_JSON} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * Invoice.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Business Identifier for item
   * - **Definition:** Identifier of this Invoice, often used for reference in correspondence about this invoice or for tracking of payments.
   * - **Requirements:** Allows Identification of this Invoice instance.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier[] | undefined;

  /**
   * FHIR CodeSystem: InvoiceStatus
   *
   * @see {@link InvoiceStatusEnum }
   */
  private readonly invoiceStatusEnum: InvoiceStatusEnum;

  /**
   * Invoice.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** draft | issued | balanced | cancelled | entered-in-error
   * - **Definition:** The current state of the Invoice.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** true
   * - **isModifierReason:** This element is labelled as a modifier because it is a status element that contains status entered-in-error which means that the resource should not be treated as valid
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link InvoiceStatusEnum }
   */
  private status: EnumCodeType | null;

  /**
   * Invoice.cancelledReason Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Reason for cancellation of this Invoice
   * - **Definition:** In case of Invoice cancellation a reason must be given (entered in error, superseded by corrected invoice etc.).
   * - **Comment:** Derived Profiles may choose to add invariants requiring this field to be populated if either priceOverride or factorOverride have been filled.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private cancelledReason?: StringType | undefined;

  /**
   * Invoice.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Type of Invoice
   * - **Definition:** Type of Invoice depending on domain, realm an usage (e.g. internal/external, dental, preliminary).
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private type_?: CodeableConcept | undefined;

  /**
   * Invoice.subject Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Recipient(s) of goods and services
   * - **Definition:** The individual or set of individuals receiving the goods and services billed in this invoice.
   * - **Requirements:** Links the event to the Patient context.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/Group',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private subject?: Reference | undefined;

  /**
   * Invoice.recipient Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Recipient of this invoice
   * - **Definition:** The individual or Organization responsible for balancing of this invoice.
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
  private recipient?: Reference | undefined;

  /**
   * Invoice.date Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** DEPRICATED
   * - **Definition:** Depricared by the element below.
   * - **Requirements:** Required to suppress the Data Type VirtualServiceDetail: ERROR: Invoice::date: Expression \'Invoice.date\' has illegal path.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private date?: DateTimeType | undefined;

  /**
   * Invoice.creation Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When posted
   * - **Definition:** Date/time(s) of when this Invoice was posted.
   * - **Comment:** The list of types may be constrained as appropriate for the type of charge item.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private creation?: DateTimeType | undefined;

  /**
   * Invoice.period[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('Invoice.period[x]', ['date','Period',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Billing date or period
   * - **Definition:** Date/time(s) range of services included in this invoice.
   * - **FHIR Types:**
   *     'date',
   *     'Period',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  @ChoiceDataTypesMeta('Invoice.period[x]',[
    'date',
    'Period',
  ])
  private period?: IDataType | undefined;

  /**
   * Invoice.participant Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Participant in creation of this Invoice
   * - **Definition:** Indicates who or what performed or participated in the charged service.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private participant?: InvoiceParticipantComponent[] | undefined;

  /**
   * Invoice.issuer Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Issuing Organization of Invoice
   * - **Definition:** The organizationissuing the Invoice.
   * - **Comment:** Practitioners and Devices can be associated with multiple organizations. It has to be made clear, on behalf of which Organization the services have been rendered.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private issuer?: Reference | undefined;

  /**
   * Invoice.account Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Account that is being balanced
   * - **Definition:** Account which is supposed to be balanced with this Invoice.
   * - **Comment:** Systems posting the ChargeItems might not always be able to determine, which accounts the Items need to be places into. It is up to the potprocessing Financial System to apply internal rules to decide based on the Encounter/EpisodeOfCare/Patient/Coverage context and the type of ChargeItem, which Account is appropriate.
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
   * Invoice.lineItem Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Line items of this Invoice
   * - **Definition:** Each line item represents one charge for goods and services rendered. Details such.ofType(date), code and amount are found in the referenced ChargeItem resource.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private lineItem?: InvoiceLineItemComponent[] | undefined;

  /**
   * Invoice.totalPriceComponent Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Components of Invoice total
   * - **Definition:** The total amount for the Invoice may be calculated as the sum of the line items with surcharges/deductions that apply in certain conditions.  The priceComponent element can be used to offer transparency to the recipient of the Invoice of how the total price was calculated.
   * - **FHIR Type:** `MonetaryComponent`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private totalPriceComponent?: MonetaryComponent[] | undefined;

  /**
   * Invoice.totalNet Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Net total of this Invoice
   * - **Definition:** Invoice total , taxes excluded.
   * - **Comment:** There is no reason to carry the price in the instance of a ChargeItem unless circumstances require a manual override. The list prices or are usually defined in a back catalogue of the billing codes  (see ChargeItem.definition). Derived profiles may require a ChargeItem.overrideReason to be provided if either factor or price are manually overridden.
   * - **FHIR Type:** `Money`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private totalNet?: Money | undefined;

  /**
   * Invoice.totalGross Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Gross total of this Invoice
   * - **Definition:** Invoice total, tax included.
   * - **Comment:** There is no reason to carry the price in the instance of a ChargeItem unless circumstances require a manual override. The list prices or are usually defined in a back catalogue of the billing codes  (see ChargeItem.definition). Derived profiles may require a ChargeItem.overrideReason to be provided if either factor or price are manually overridden.
   * - **FHIR Type:** `Money`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private totalGross?: Money | undefined;

  /**
   * Invoice.paymentTerms Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Payment details
   * - **Definition:** Payment details such as banking details, period of payment, deductibles, methods of payment.
   * - **Comment:** Derived Profiles may chose to add invariants requiring this field to be populated if either priceOverride or factorOverride have been filled.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private paymentTerms?: MarkdownType | undefined;

  /**
   * Invoice.note Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Comments made about the invoice
   * - **Definition:** Comments made about the invoice by the issuer, subject, or other participants.
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
      const optErrMsg = `Invalid Invoice.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid Invoice.identifier; Provided element is not an instance of Identifier.`;
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
   * @see CodeSystem Enumeration: {@link InvoiceStatusEnum }
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
   * @see CodeSystem Enumeration: {@link InvoiceStatusEnum }
   */
  public setStatusEnumType(enumType: EnumCodeType): this {
    assertIsDefined<EnumCodeType>(enumType, `Invoice.status is required`);
    const errMsgPrefix = `Invalid Invoice.status`;
    assertEnumCodeType<InvoiceStatusEnum>(enumType, InvoiceStatusEnum, errMsgPrefix);
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
   * @see CodeSystem Enumeration: {@link InvoiceStatusEnum }
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
   * @see CodeSystem Enumeration: {@link InvoiceStatusEnum }
   */
  public setStatusElement(element: CodeType): this {
    assertIsDefined<CodeType>(element, `Invoice.status is required`);
    const optErrMsg = `Invalid Invoice.status; Provided value is not an instance of CodeType.`;
    assertFhirType<CodeType>(element, CodeType, optErrMsg);
    this.status = new EnumCodeType(element, this.invoiceStatusEnum);
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
   * @see CodeSystem Enumeration: {@link InvoiceStatusEnum }
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
   * @see CodeSystem Enumeration: {@link InvoiceStatusEnum }
   */
  public setStatus(value: fhirCode): this {
    assertIsDefined<fhirCode>(value, `Invoice.status is required`);
    const optErrMsg = `Invalid Invoice.status (${String(value)})`;
    this.status = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.invoiceStatusEnum);
    return this;
  }

  /**
   * @returns `true` if the `status` property exists and has a value; `false` otherwise
   */
  public hasStatus(): boolean {
    return this.hasStatusEnumType();
  }

  /**
   * @returns the `cancelledReason` property value as a StringType object if defined; else an empty StringType object
   */
  public getCancelledReasonElement(): StringType {
    return this.cancelledReason ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `cancelledReason` property.
   *
   * @param element - the `cancelledReason` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCancelledReasonElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid Invoice.cancelledReason; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.cancelledReason = element;
    } else {
      this.cancelledReason = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `cancelledReason` property exists and has a value; `false` otherwise
   */
  public hasCancelledReasonElement(): boolean {
    return isDefined<StringType>(this.cancelledReason) && !this.cancelledReason.isEmpty();
  }

  /**
   * @returns the `cancelledReason` property value as a fhirString if defined; else undefined
   */
  public getCancelledReason(): fhirString | undefined {
    return this.cancelledReason?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `cancelledReason` property.
   *
   * @param value - the `cancelledReason` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCancelledReason(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid Invoice.cancelledReason (${String(value)})`;
      this.cancelledReason = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.cancelledReason = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `cancelledReason` property exists and has a value; `false` otherwise
   */
  public hasCancelledReason(): boolean {
    return this.hasCancelledReasonElement();
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
      const optErrMsg = `Invalid Invoice.type; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `subject` property value as a Reference object; else an empty Reference object
   */
  public getSubject(): Reference {
    return this.subject ?? new Reference();
  }

  /**
   * Assigns the provided Subject object value to the `subject` property.
   *
   * @decorator `@ReferenceTargets('Invoice.subject', ['Patient','Group',])`
   *
   * @param value - the `subject` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Invoice.subject', [
    'Patient',
  
    'Group',
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
   * @returns the `recipient` property value as a Reference object; else an empty Reference object
   */
  public getRecipient(): Reference {
    return this.recipient ?? new Reference();
  }

  /**
   * Assigns the provided Recipient object value to the `recipient` property.
   *
   * @decorator `@ReferenceTargets('Invoice.recipient', ['Organization','Patient','RelatedPerson',])`
   *
   * @param value - the `recipient` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Invoice.recipient', [
    'Organization',
  
    'Patient',
  
    'RelatedPerson',
  ])
  public setRecipient(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.recipient = value;
    } else {
      this.recipient = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `recipient` property exists and has a value; `false` otherwise
   */
  public hasRecipient(): boolean {
    return isDefined<Reference>(this.recipient) && !this.recipient.isEmpty();
  }

  /**
   * @returns the `date` property value as a DateTimeType object if defined; else an empty DateTimeType object
   */
  public getDateElement(): DateTimeType {
    return this.date ?? new DateTimeType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `date` property.
   *
   * @param element - the `date` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDateElement(element: DateTimeType | undefined): this {
    if (isDefined<DateTimeType>(element)) {
      const optErrMsg = `Invalid Invoice.date; Provided element is not an instance of DateTimeType.`;
      assertFhirType<DateTimeType>(element, DateTimeType, optErrMsg);
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
    return isDefined<DateTimeType>(this.date) && !this.date.isEmpty();
  }

  /**
   * @returns the `date` property value as a fhirDateTime if defined; else undefined
   */
  public getDate(): fhirDateTime | undefined {
    return this.date?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `date` property.
   *
   * @param value - the `date` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDate(value: fhirDateTime | undefined): this {
    if (isDefined<fhirDateTime>(value)) {
      const optErrMsg = `Invalid Invoice.date (${String(value)})`;
      this.date = new DateTimeType(parseFhirPrimitiveData(value, fhirDateTimeSchema, optErrMsg));
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
   * @returns the `creation` property value as a DateTimeType object if defined; else an empty DateTimeType object
   */
  public getCreationElement(): DateTimeType {
    return this.creation ?? new DateTimeType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `creation` property.
   *
   * @param element - the `creation` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCreationElement(element: DateTimeType | undefined): this {
    if (isDefined<DateTimeType>(element)) {
      const optErrMsg = `Invalid Invoice.creation; Provided element is not an instance of DateTimeType.`;
      assertFhirType<DateTimeType>(element, DateTimeType, optErrMsg);
      this.creation = element;
    } else {
      this.creation = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `creation` property exists and has a value; `false` otherwise
   */
  public hasCreationElement(): boolean {
    return isDefined<DateTimeType>(this.creation) && !this.creation.isEmpty();
  }

  /**
   * @returns the `creation` property value as a fhirDateTime if defined; else undefined
   */
  public getCreation(): fhirDateTime | undefined {
    return this.creation?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `creation` property.
   *
   * @param value - the `creation` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCreation(value: fhirDateTime | undefined): this {
    if (isDefined<fhirDateTime>(value)) {
      const optErrMsg = `Invalid Invoice.creation (${String(value)})`;
      this.creation = new DateTimeType(parseFhirPrimitiveData(value, fhirDateTimeSchema, optErrMsg));
    } else {
      this.creation = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `creation` property exists and has a value; `false` otherwise
   */
  public hasCreation(): boolean {
    return this.hasCreationElement();
  }

  /**
   * @returns the `period` property value as a DataType object if defined; else undefined
   */
  public getPeriod(): IDataType | undefined {
    return this.period;
  }

  /**
   * Assigns the provided DataType object value to the `period` property.
   *
   * @decorator `@ChoiceDataTypes('Invoice.period[x]')`
   *
   * @param value - the `period` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('Invoice.period[x]')
  public setPeriod(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
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
    return isDefined<IDataType>(this.period) && !this.period.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `period` property value as a DateType object if defined; else undefined
   */
  public getPeriodDateType(): DateType | undefined {
    if (!isDefined<IDataType | undefined>(this.period)) {
      return undefined;
    }
    if (!(this.period instanceof DateType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Invoice.period[x]: Expected DateType but encountered ${this.period.fhirType()}`,
      );
    }
    return this.period;
  }

  /**
   * @returns `true` if the `period` property exists as a DateType and has a value; `false` otherwise
   */
  public hasPeriodDateType(): boolean {
    return this.hasPeriod() && this.period instanceof DateType;
  }

  /**
   * @returns the `period` property value as a Period object if defined; else undefined
   */
  public getPeriodPeriod(): Period | undefined {
    if (!isDefined<IDataType | undefined>(this.period)) {
      return undefined;
    }
    if (!(this.period instanceof Period)) {
      throw new InvalidTypeError(
        `DataType mismatch for Invoice.period[x]: Expected Period but encountered ${this.period.fhirType()}`,
      );
    }
    return this.period;
  }

  /**
   * @returns `true` if the `period` property exists as a Period and has a value; `false` otherwise
   */
  public hasPeriodPeriod(): boolean {
    return this.hasPeriod() && this.period instanceof Period;
  }

  // End of choice datatype-specific "get"/"has" methods

  /**
   * @returns the `participant` property value as a InvoiceParticipantComponent array
   */
  public getParticipant(): InvoiceParticipantComponent[] {
    return this.participant ?? ([] as InvoiceParticipantComponent[]);
  }

  /**
   * Assigns the provided InvoiceParticipantComponent array value to the `participant` property.
   *
   * @param value - the `participant` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setParticipant(value: InvoiceParticipantComponent[] | undefined): this {
    if (isDefinedList<InvoiceParticipantComponent>(value)) {
      const optErrMsg = `Invalid Invoice.participant; Provided value array has an element that is not an instance of InvoiceParticipantComponent.`;
      assertFhirTypeList<InvoiceParticipantComponent>(value, InvoiceParticipantComponent, optErrMsg);
      this.participant = value;
    } else {
      this.participant = undefined;
    }
    return this;
  }

  /**
   * Add the provided InvoiceParticipantComponent value to the `participant` array property.
   *
   * @param value - the `participant` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addParticipant(value: InvoiceParticipantComponent | undefined): this {
    if (isDefined<InvoiceParticipantComponent>(value)) {
      const optErrMsg = `Invalid Invoice.participant; Provided element is not an instance of InvoiceParticipantComponent.`;
      assertFhirType<InvoiceParticipantComponent>(value, InvoiceParticipantComponent, optErrMsg);
      this.initParticipant();
      this.participant?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `participant` property exists and has a value; `false` otherwise
   */
  public hasParticipant(): boolean {
    return isDefinedList<InvoiceParticipantComponent>(this.participant) && this.participant.some((item: InvoiceParticipantComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `participant` property
   */
  private initParticipant(): void {
    if(!this.hasParticipant()) {
      this.participant = [] as InvoiceParticipantComponent[];
    }
  }

  /**
   * @returns the `issuer` property value as a Reference object; else an empty Reference object
   */
  public getIssuer(): Reference {
    return this.issuer ?? new Reference();
  }

  /**
   * Assigns the provided Issuer object value to the `issuer` property.
   *
   * @decorator `@ReferenceTargets('Invoice.issuer', ['Organization',])`
   *
   * @param value - the `issuer` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Invoice.issuer', [
    'Organization',
  ])
  public setIssuer(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.issuer = value;
    } else {
      this.issuer = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `issuer` property exists and has a value; `false` otherwise
   */
  public hasIssuer(): boolean {
    return isDefined<Reference>(this.issuer) && !this.issuer.isEmpty();
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
   * @decorator `@ReferenceTargets('Invoice.account', ['Account',])`
   *
   * @param value - the `account` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Invoice.account', [
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
   * @returns the `lineItem` property value as a InvoiceLineItemComponent array
   */
  public getLineItem(): InvoiceLineItemComponent[] {
    return this.lineItem ?? ([] as InvoiceLineItemComponent[]);
  }

  /**
   * Assigns the provided InvoiceLineItemComponent array value to the `lineItem` property.
   *
   * @param value - the `lineItem` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setLineItem(value: InvoiceLineItemComponent[] | undefined): this {
    if (isDefinedList<InvoiceLineItemComponent>(value)) {
      const optErrMsg = `Invalid Invoice.lineItem; Provided value array has an element that is not an instance of InvoiceLineItemComponent.`;
      assertFhirTypeList<InvoiceLineItemComponent>(value, InvoiceLineItemComponent, optErrMsg);
      this.lineItem = value;
    } else {
      this.lineItem = undefined;
    }
    return this;
  }

  /**
   * Add the provided InvoiceLineItemComponent value to the `lineItem` array property.
   *
   * @param value - the `lineItem` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addLineItem(value: InvoiceLineItemComponent | undefined): this {
    if (isDefined<InvoiceLineItemComponent>(value)) {
      const optErrMsg = `Invalid Invoice.lineItem; Provided element is not an instance of InvoiceLineItemComponent.`;
      assertFhirType<InvoiceLineItemComponent>(value, InvoiceLineItemComponent, optErrMsg);
      this.initLineItem();
      this.lineItem?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `lineItem` property exists and has a value; `false` otherwise
   */
  public hasLineItem(): boolean {
    return isDefinedList<InvoiceLineItemComponent>(this.lineItem) && this.lineItem.some((item: InvoiceLineItemComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `lineItem` property
   */
  private initLineItem(): void {
    if(!this.hasLineItem()) {
      this.lineItem = [] as InvoiceLineItemComponent[];
    }
  }

  /**
   * @returns the `totalPriceComponent` property value as a MonetaryComponent array
   */
  public getTotalPriceComponent(): MonetaryComponent[] {
    return this.totalPriceComponent ?? ([] as MonetaryComponent[]);
  }

  /**
   * Assigns the provided MonetaryComponent array value to the `totalPriceComponent` property.
   *
   * @param value - the `totalPriceComponent` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setTotalPriceComponent(value: MonetaryComponent[] | undefined): this {
    if (isDefinedList<MonetaryComponent>(value)) {
      const optErrMsg = `Invalid Invoice.totalPriceComponent; Provided value array has an element that is not an instance of MonetaryComponent.`;
      assertFhirTypeList<MonetaryComponent>(value, MonetaryComponent, optErrMsg);
      this.totalPriceComponent = value;
    } else {
      this.totalPriceComponent = undefined;
    }
    return this;
  }

  /**
   * Add the provided MonetaryComponent value to the `totalPriceComponent` array property.
   *
   * @param value - the `totalPriceComponent` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addTotalPriceComponent(value: MonetaryComponent | undefined): this {
    if (isDefined<MonetaryComponent>(value)) {
      const optErrMsg = `Invalid Invoice.totalPriceComponent; Provided element is not an instance of MonetaryComponent.`;
      assertFhirType<MonetaryComponent>(value, MonetaryComponent, optErrMsg);
      this.initTotalPriceComponent();
      this.totalPriceComponent?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `totalPriceComponent` property exists and has a value; `false` otherwise
   */
  public hasTotalPriceComponent(): boolean {
    return isDefinedList<MonetaryComponent>(this.totalPriceComponent) && this.totalPriceComponent.some((item: MonetaryComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `totalPriceComponent` property
   */
  private initTotalPriceComponent(): void {
    if(!this.hasTotalPriceComponent()) {
      this.totalPriceComponent = [] as MonetaryComponent[];
    }
  }

  /**
   * @returns the `totalNet` property value as a Money object if defined; else an empty Money object
   */
  public getTotalNet(): Money {
    return this.totalNet ?? new Money();
  }

  /**
   * Assigns the provided TotalNet object value to the `totalNet` property.
   *
   * @param value - the `totalNet` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setTotalNet(value: Money | undefined): this {
    if (isDefined<Money>(value)) {
      const optErrMsg = `Invalid Invoice.totalNet; Provided element is not an instance of Money.`;
      assertFhirType<Money>(value, Money, optErrMsg);
      this.totalNet = value;
    } else {
      this.totalNet = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `totalNet` property exists and has a value; `false` otherwise
   */
  public hasTotalNet(): boolean {
    return isDefined<Money>(this.totalNet) && !this.totalNet.isEmpty();
  }

  /**
   * @returns the `totalGross` property value as a Money object if defined; else an empty Money object
   */
  public getTotalGross(): Money {
    return this.totalGross ?? new Money();
  }

  /**
   * Assigns the provided TotalGross object value to the `totalGross` property.
   *
   * @param value - the `totalGross` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setTotalGross(value: Money | undefined): this {
    if (isDefined<Money>(value)) {
      const optErrMsg = `Invalid Invoice.totalGross; Provided element is not an instance of Money.`;
      assertFhirType<Money>(value, Money, optErrMsg);
      this.totalGross = value;
    } else {
      this.totalGross = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `totalGross` property exists and has a value; `false` otherwise
   */
  public hasTotalGross(): boolean {
    return isDefined<Money>(this.totalGross) && !this.totalGross.isEmpty();
  }

  /**
   * @returns the `paymentTerms` property value as a MarkdownType object if defined; else an empty MarkdownType object
   */
  public getPaymentTermsElement(): MarkdownType {
    return this.paymentTerms ?? new MarkdownType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `paymentTerms` property.
   *
   * @param element - the `paymentTerms` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPaymentTermsElement(element: MarkdownType | undefined): this {
    if (isDefined<MarkdownType>(element)) {
      const optErrMsg = `Invalid Invoice.paymentTerms; Provided element is not an instance of MarkdownType.`;
      assertFhirType<MarkdownType>(element, MarkdownType, optErrMsg);
      this.paymentTerms = element;
    } else {
      this.paymentTerms = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `paymentTerms` property exists and has a value; `false` otherwise
   */
  public hasPaymentTermsElement(): boolean {
    return isDefined<MarkdownType>(this.paymentTerms) && !this.paymentTerms.isEmpty();
  }

  /**
   * @returns the `paymentTerms` property value as a fhirMarkdown if defined; else undefined
   */
  public getPaymentTerms(): fhirMarkdown | undefined {
    return this.paymentTerms?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `paymentTerms` property.
   *
   * @param value - the `paymentTerms` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPaymentTerms(value: fhirMarkdown | undefined): this {
    if (isDefined<fhirMarkdown>(value)) {
      const optErrMsg = `Invalid Invoice.paymentTerms (${String(value)})`;
      this.paymentTerms = new MarkdownType(parseFhirPrimitiveData(value, fhirMarkdownSchema, optErrMsg));
    } else {
      this.paymentTerms = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `paymentTerms` property exists and has a value; `false` otherwise
   */
  public hasPaymentTerms(): boolean {
    return this.hasPaymentTermsElement();
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
      const optErrMsg = `Invalid Invoice.note; Provided value array has an element that is not an instance of Annotation.`;
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
      const optErrMsg = `Invalid Invoice.note; Provided element is not an instance of Annotation.`;
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
    return 'Invoice';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identifier,
      this.status,
      this.cancelledReason,
      this.type_,
      this.subject,
      this.recipient,
      this.date,
      this.creation,
      this.period,
      this.participant,
      this.issuer,
      this.account,
      this.lineItem,
      this.totalPriceComponent,
      this.totalNet,
      this.totalGross,
      this.paymentTerms,
      this.note,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): Invoice {
    const dest = new Invoice();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: Invoice): void {
    super.copyValues(dest);
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    dest.status = this.status ? this.status.copy() : null;
    dest.cancelledReason = this.cancelledReason?.copy();
    dest.type_ = this.type_?.copy();
    dest.subject = this.subject?.copy();
    dest.recipient = this.recipient?.copy();
    dest.date = this.date?.copy();
    dest.creation = this.creation?.copy();
    dest.period = this.period?.copy() as IDataType;
    const participantList = copyListValues<InvoiceParticipantComponent>(this.participant);
    dest.participant = participantList.length === 0 ? undefined : participantList;
    dest.issuer = this.issuer?.copy();
    dest.account = this.account?.copy();
    const lineItemList = copyListValues<InvoiceLineItemComponent>(this.lineItem);
    dest.lineItem = lineItemList.length === 0 ? undefined : lineItemList;
    const totalPriceComponentList = copyListValues<MonetaryComponent>(this.totalPriceComponent);
    dest.totalPriceComponent = totalPriceComponentList.length === 0 ? undefined : totalPriceComponentList;
    dest.totalNet = this.totalNet?.copy();
    dest.totalGross = this.totalGross?.copy();
    dest.paymentTerms = this.paymentTerms?.copy();
    const noteList = copyListValues<Annotation>(this.note);
    dest.note = noteList.length === 0 ? undefined : noteList;
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
      missingReqdProperties.push(`Invoice.status`);
    }

    if (this.hasCancelledReasonElement()) {
      setFhirPrimitiveJson<fhirString>(this.getCancelledReasonElement(), 'cancelledReason', jsonObj);
    }

    if (this.hasType()) {
      setFhirComplexJson(this.getType(), 'type', jsonObj);
    }

    if (this.hasSubject()) {
      setFhirComplexJson(this.getSubject(), 'subject', jsonObj);
    }

    if (this.hasRecipient()) {
      setFhirComplexJson(this.getRecipient(), 'recipient', jsonObj);
    }

    if (this.hasDateElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getDateElement(), 'date', jsonObj);
    }

    if (this.hasCreationElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getCreationElement(), 'creation', jsonObj);
    }

    if (this.hasPeriod()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getPeriod()!, 'period', jsonObj);
    }

    if (this.hasParticipant()) {
      setFhirBackboneElementListJson(this.getParticipant(), 'participant', jsonObj);
    }

    if (this.hasIssuer()) {
      setFhirComplexJson(this.getIssuer(), 'issuer', jsonObj);
    }

    if (this.hasAccount()) {
      setFhirComplexJson(this.getAccount(), 'account', jsonObj);
    }

    if (this.hasLineItem()) {
      setFhirBackboneElementListJson(this.getLineItem(), 'lineItem', jsonObj);
    }

    if (this.hasTotalPriceComponent()) {
      setFhirComplexListJson(this.getTotalPriceComponent(), 'totalPriceComponent', jsonObj);
    }

    if (this.hasTotalNet()) {
      setFhirComplexJson(this.getTotalNet(), 'totalNet', jsonObj);
    }

    if (this.hasTotalGross()) {
      setFhirComplexJson(this.getTotalGross(), 'totalGross', jsonObj);
    }

    if (this.hasPaymentTermsElement()) {
      setFhirPrimitiveJson<fhirMarkdown>(this.getPaymentTermsElement(), 'paymentTerms', jsonObj);
    }

    if (this.hasNote()) {
      setFhirComplexListJson(this.getNote(), 'note', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}

/**
 * InvoiceParticipantComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Participant in creation of this Invoice
 * - **Definition:** Indicates who or what performed or participated in the charged service.
 *
 * @category Data Models: Resource
 * @see [FHIR Invoice](http://hl7.org/fhir/StructureDefinition/Invoice)
 */
export class InvoiceParticipantComponent extends BackboneElement implements IBackboneElement {
  constructor(actor: Reference | null = null) {
    super();

    this.actor = null;
    if (isDefined<Reference>(actor)) {
      this.setActor(actor);
    }
  }

  /**
   * Parse the provided `InvoiceParticipantComponent` JSON to instantiate the InvoiceParticipantComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `InvoiceParticipantComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to InvoiceParticipantComponent
   * @returns InvoiceParticipantComponent data model or undefined for `InvoiceParticipantComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): InvoiceParticipantComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'InvoiceParticipantComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new InvoiceParticipantComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    const missingReqdProperties: string[] = [];

    fieldName = 'role';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setRole(datatype);
    }

    fieldName = 'actor';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setActor(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_REQD_IN_JSON} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * Invoice.participant.role Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Type of involvement in creation of this Invoice
   * - **Definition:** Describes the type of involvement (e.g. transcriptionist, creator etc.). If the invoice has been created automatically, the Participant may be a billing engine or another kind of device.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private role?: CodeableConcept | undefined;

  /**
   * Invoice.participant.actor Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Individual who was involved
   * - **Definition:** The device, practitioner, etc. who performed or participated in the service.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
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
   * @returns the `role` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getRole(): CodeableConcept {
    return this.role ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Role object value to the `role` property.
   *
   * @param value - the `role` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setRole(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Invoice.participant.role; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.role = value;
    } else {
      this.role = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `role` property exists and has a value; `false` otherwise
   */
  public hasRole(): boolean {
    return isDefined<CodeableConcept>(this.role) && !this.role.isEmpty();
  }

  /**
   * @returns the `actor` property value as a Reference object if defined; else null
   */
  public getActor(): Reference | null {
    return this.actor;
  }

  /**
   * Assigns the provided Actor object value to the `actor` property.
   *
   * @decorator `@ReferenceTargets('Invoice.participant.actor', ['Practitioner','Organization','Patient','PractitionerRole','Device','RelatedPerson',])`
   *
   * @param value - the `actor` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Invoice.participant.actor', [
    'Practitioner',
  
    'Organization',
  
    'Patient',
  
    'PractitionerRole',
  
    'Device',
  
    'RelatedPerson',
  ])
  public setActor(value: Reference): this {
    assertIsDefined<Reference>(value, `Invoice.participant.actor is required`);
    // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
    this.actor = value;
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
    return 'Invoice.participant';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.role,
      this.actor,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): InvoiceParticipantComponent {
    const dest = new InvoiceParticipantComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: InvoiceParticipantComponent): void {
    super.copyValues(dest);
    dest.role = this.role?.copy();
    dest.actor = this.actor ? this.actor.copy() : null;
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

    if (this.hasRole()) {
      setFhirComplexJson(this.getRole(), 'role', jsonObj);
    }

    if (this.hasActor()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getActor()!, 'actor', jsonObj);
    } else {
      missingReqdProperties.push(`Invoice.participant.actor`);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
/**
 * InvoiceLineItemComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Line items of this Invoice
 * - **Definition:** Each line item represents one charge for goods and services rendered. Details such.ofType(date), code and amount are found in the referenced ChargeItem resource.
 *
 * @category Data Models: Resource
 * @see [FHIR Invoice](http://hl7.org/fhir/StructureDefinition/Invoice)
 */
export class InvoiceLineItemComponent extends BackboneElement implements IBackboneElement {
  constructor(chargeItem: IDataType | null = null) {
    super();

    this.chargeItem = null;
    if (isDefined<IDataType>(chargeItem)) {
      this.setChargeItem(chargeItem);
    }

  }

  /**
   * Parse the provided `InvoiceLineItemComponent` JSON to instantiate the InvoiceLineItemComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `InvoiceLineItemComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to InvoiceLineItemComponent
   * @returns InvoiceLineItemComponent data model or undefined for `InvoiceLineItemComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): InvoiceLineItemComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'InvoiceLineItemComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new InvoiceLineItemComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    const classMetadata: DecoratorMetadataObject | null = InvoiceLineItemComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for InvoiceLineItemComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    const missingReqdProperties: string[] = [];

    fieldName = 'sequence';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: PositiveIntType | undefined = fhirParser.parsePositiveIntType(dtJson, dtSiblingJson);
      instance.setSequenceElement(datatype);
    }

    fieldName = 'serviced[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const serviced: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setServiced(serviced);

    fieldName = 'chargeItem[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const chargeItem: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    if (chargeItem === undefined) {
      missingReqdProperties.push(sourceField);
    } else {
      instance.setChargeItem(chargeItem);
    }

    fieldName = 'priceComponent';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: MonetaryComponent | undefined = MonetaryComponent.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addPriceComponent(datatype);
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
   * Invoice.lineItem.sequence Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Sequence number of line item
   * - **Definition:** Sequence in which the items appear on the invoice.
   * - **FHIR Type:** `positiveInt`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private sequence?: PositiveIntType | undefined;

  /**
   * Invoice.lineItem.serviced[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('Invoice.lineItem.serviced[x]', ['date','Period',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Service data or period
   * - **Definition:** Date/time(s) range when this service was delivered or completed.
   * - **FHIR Types:**
   *     'date',
   *     'Period',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('Invoice.lineItem.serviced[x]',[
    'date',
    'Period',
  ])
  private serviced?: IDataType | undefined;

  /**
   * Invoice.lineItem.chargeItem[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('Invoice.lineItem.chargeItem[x]', ['Reference','CodeableConcept',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Reference to ChargeItem containing details of this line item or an inline billing code
   * - **Definition:** The ChargeItem contains information such as the billing code, date, amount etc. If no further details are required for the lineItem, inline billing codes can be added using the CodeableConcept data type instead of the Reference.
   * - **FHIR Types:**
   *     'Reference',
   *     'CodeableConcept',
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('Invoice.lineItem.chargeItem[x]',[
    'Reference',
    'CodeableConcept',
  ])
  private chargeItem: IDataType | null;

  /**
   * Invoice.lineItem.priceComponent Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Components of total line item price
   * - **Definition:** The price for a ChargeItem may be calculated as a base price with surcharges/deductions that apply in certain conditions. A ChargeItemDefinition resource that defines the prices, factors and conditions that apply to a billing code is currently under development. The priceComponent element can be used to offer transparency to the recipient of the Invoice as to how the prices have been calculated.
   * - **FHIR Type:** `MonetaryComponent`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private priceComponent?: MonetaryComponent[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `sequence` property value as a PositiveIntType object if defined; else an empty PositiveIntType object
   */
  public getSequenceElement(): PositiveIntType {
    return this.sequence ?? new PositiveIntType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `sequence` property.
   *
   * @param element - the `sequence` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSequenceElement(element: PositiveIntType | undefined): this {
    if (isDefined<PositiveIntType>(element)) {
      const optErrMsg = `Invalid Invoice.lineItem.sequence; Provided element is not an instance of PositiveIntType.`;
      assertFhirType<PositiveIntType>(element, PositiveIntType, optErrMsg);
      this.sequence = element;
    } else {
      this.sequence = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `sequence` property exists and has a value; `false` otherwise
   */
  public hasSequenceElement(): boolean {
    return isDefined<PositiveIntType>(this.sequence) && !this.sequence.isEmpty();
  }

  /**
   * @returns the `sequence` property value as a fhirPositiveInt if defined; else undefined
   */
  public getSequence(): fhirPositiveInt | undefined {
    return this.sequence?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `sequence` property.
   *
   * @param value - the `sequence` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSequence(value: fhirPositiveInt | undefined): this {
    if (isDefined<fhirPositiveInt>(value)) {
      const optErrMsg = `Invalid Invoice.lineItem.sequence (${String(value)})`;
      this.sequence = new PositiveIntType(parseFhirPrimitiveData(value, fhirPositiveIntSchema, optErrMsg));
    } else {
      this.sequence = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `sequence` property exists and has a value; `false` otherwise
   */
  public hasSequence(): boolean {
    return this.hasSequenceElement();
  }

  /**
   * @returns the `serviced` property value as a DataType object if defined; else undefined
   */
  public getServiced(): IDataType | undefined {
    return this.serviced;
  }

  /**
   * Assigns the provided DataType object value to the `serviced` property.
   *
   * @decorator `@ChoiceDataTypes('Invoice.lineItem.serviced[x]')`
   *
   * @param value - the `serviced` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('Invoice.lineItem.serviced[x]')
  public setServiced(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.serviced = value;
    } else {
      this.serviced = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `serviced` property exists and has a value; `false` otherwise
   */
  public hasServiced(): boolean {
    return isDefined<IDataType>(this.serviced) && !this.serviced.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `serviced` property value as a DateType object if defined; else undefined
   */
  public getServicedDateType(): DateType | undefined {
    if (!isDefined<IDataType | undefined>(this.serviced)) {
      return undefined;
    }
    if (!(this.serviced instanceof DateType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Invoice.lineItem.serviced[x]: Expected DateType but encountered ${this.serviced.fhirType()}`,
      );
    }
    return this.serviced;
  }

  /**
   * @returns `true` if the `serviced` property exists as a DateType and has a value; `false` otherwise
   */
  public hasServicedDateType(): boolean {
    return this.hasServiced() && this.serviced instanceof DateType;
  }

  /**
   * @returns the `serviced` property value as a Period object if defined; else undefined
   */
  public getServicedPeriod(): Period | undefined {
    if (!isDefined<IDataType | undefined>(this.serviced)) {
      return undefined;
    }
    if (!(this.serviced instanceof Period)) {
      throw new InvalidTypeError(
        `DataType mismatch for Invoice.lineItem.serviced[x]: Expected Period but encountered ${this.serviced.fhirType()}`,
      );
    }
    return this.serviced;
  }

  /**
   * @returns `true` if the `serviced` property exists as a Period and has a value; `false` otherwise
   */
  public hasServicedPeriod(): boolean {
    return this.hasServiced() && this.serviced instanceof Period;
  }

  // End of choice datatype-specific "get"/"has" methods

  /**
   * @returns the `chargeItem` property value as a DataType object; else null
   */
  public getChargeItem(): IDataType | null {
    return this.chargeItem;
  }

  /**
   * Assigns the provided DataType object value to the `chargeItem` property.
   *
   * @decorator `@ChoiceDataTypes('Invoice.lineItem.chargeItem[x]')`
   *
   * @param value - the `chargeItem` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('Invoice.lineItem.chargeItem[x]')
  public setChargeItem(value: IDataType): this {
    assertIsDefined<IDataType>(value, `Invoice.lineItem.chargeItem[x] is required`);
    // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
    this.chargeItem = value;
    return this;
  }

  /**
   * @returns `true` if the `chargeItem` property exists and has a value; `false` otherwise
   */
  public hasChargeItem(): boolean {
    return isDefined<IDataType>(this.chargeItem) && !this.chargeItem.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `chargeItem` property value as a Reference object if defined; else null
   */
  public getChargeItemReference(): Reference | null {
    if (!isDefined<IDataType>(this.chargeItem)) {
      return null;
    }
    if (!(this.chargeItem instanceof Reference)) {
      throw new InvalidTypeError(
        `DataType mismatch for Invoice.lineItem.chargeItem[x]: Expected Reference but encountered ${this.chargeItem.fhirType()}`,
      );
    }
    return this.chargeItem;
  }

  /**
   * @returns `true` if the `` property exists as a Reference and has a value; `false` otherwise
   */
  public hasChargeItemReference(): boolean {
    return this.hasChargeItem() && this.chargeItem instanceof Reference;
  }

  /**
   * @returns the `chargeItem` property value as a CodeableConcept object if defined; else null
   */
  public getChargeItemCodeableConcept(): CodeableConcept | null {
    if (!isDefined<IDataType>(this.chargeItem)) {
      return null;
    }
    if (!(this.chargeItem instanceof CodeableConcept)) {
      throw new InvalidTypeError(
        `DataType mismatch for Invoice.lineItem.chargeItem[x]: Expected CodeableConcept but encountered ${this.chargeItem.fhirType()}`,
      );
    }
    return this.chargeItem;
  }

  /**
   * @returns `true` if the `` property exists as a CodeableConcept and has a value; `false` otherwise
   */
  public hasChargeItemCodeableConcept(): boolean {
    return this.hasChargeItem() && this.chargeItem instanceof CodeableConcept;
  }

  // End of choice datatype-specific "get"/"has" methods

  /**
   * @returns the `priceComponent` property value as a MonetaryComponent array
   */
  public getPriceComponent(): MonetaryComponent[] {
    return this.priceComponent ?? ([] as MonetaryComponent[]);
  }

  /**
   * Assigns the provided MonetaryComponent array value to the `priceComponent` property.
   *
   * @param value - the `priceComponent` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPriceComponent(value: MonetaryComponent[] | undefined): this {
    if (isDefinedList<MonetaryComponent>(value)) {
      const optErrMsg = `Invalid Invoice.lineItem.priceComponent; Provided value array has an element that is not an instance of MonetaryComponent.`;
      assertFhirTypeList<MonetaryComponent>(value, MonetaryComponent, optErrMsg);
      this.priceComponent = value;
    } else {
      this.priceComponent = undefined;
    }
    return this;
  }

  /**
   * Add the provided MonetaryComponent value to the `priceComponent` array property.
   *
   * @param value - the `priceComponent` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addPriceComponent(value: MonetaryComponent | undefined): this {
    if (isDefined<MonetaryComponent>(value)) {
      const optErrMsg = `Invalid Invoice.lineItem.priceComponent; Provided element is not an instance of MonetaryComponent.`;
      assertFhirType<MonetaryComponent>(value, MonetaryComponent, optErrMsg);
      this.initPriceComponent();
      this.priceComponent?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `priceComponent` property exists and has a value; `false` otherwise
   */
  public hasPriceComponent(): boolean {
    return isDefinedList<MonetaryComponent>(this.priceComponent) && this.priceComponent.some((item: MonetaryComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `priceComponent` property
   */
  private initPriceComponent(): void {
    if(!this.hasPriceComponent()) {
      this.priceComponent = [] as MonetaryComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Invoice.lineItem';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.sequence,
      this.serviced,
      this.chargeItem,
      this.priceComponent,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): InvoiceLineItemComponent {
    const dest = new InvoiceLineItemComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: InvoiceLineItemComponent): void {
    super.copyValues(dest);
    dest.sequence = this.sequence?.copy();
    dest.serviced = this.serviced?.copy() as IDataType;
    dest.chargeItem = this.chargeItem ? this.chargeItem.copy() as IDataType : null;
    const priceComponentList = copyListValues<MonetaryComponent>(this.priceComponent);
    dest.priceComponent = priceComponentList.length === 0 ? undefined : priceComponentList;
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

    if (this.hasSequenceElement()) {
      setFhirPrimitiveJson<fhirPositiveInt>(this.getSequenceElement(), 'sequence', jsonObj);
    }

    if (this.hasServiced()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getServiced()!, 'serviced', jsonObj);
    }

    if (this.hasChargeItem()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getChargeItem()!, 'chargeItem', jsonObj);
    } else {
      missingReqdProperties.push(`Invoice.lineItem.chargeItem[x]`);
    }

    if (this.hasPriceComponent()) {
      setFhirComplexListJson(this.getPriceComponent(), 'priceComponent', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
