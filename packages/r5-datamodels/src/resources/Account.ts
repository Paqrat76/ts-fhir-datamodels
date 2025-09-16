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
 * Account Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/Account
 * StructureDefinition.name: Account
 * StructureDefinition.description: A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc.
 * StructureDefinition.fhirVersion: 5.0.0
 *
 * For questions, suggestions, or bugs, please open an issue at [GitHub ts-fhir-datamodels/issues](https://github.com/Paqrat76/ts-fhir-datamodels/issues).
 *
 * @packageDocumentation
 */

import {
  BackboneElement,
  BooleanType,
  CodeType,
  DateTimeType,
  DomainResource,
  EnumCodeType,
  FhirParser,
  IBackboneElement,
  IDomainResource,
  InstantType,
  JSON,
  MarkdownType,
  PositiveIntType,
  ReferenceTargets,
  StringType,
  assertEnumCodeType,
  assertFhirType,
  assertFhirTypeList,
  constructorCodeValueAsEnumCodeType,
  copyListValues,
  fhirBoolean,
  fhirBooleanSchema,
  fhirCode,
  fhirCodeSchema,
  fhirDateTime,
  fhirDateTimeSchema,
  fhirInstant,
  fhirInstantSchema,
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
  isRequiredElementEmpty,
  parseFhirPrimitiveData,
  setFhirBackboneElementListJson,
  setFhirComplexJson,
  setFhirComplexListJson,
  setFhirPrimitiveJson,
} from '@paq-ts-fhir/fhir-core';
import { AccountStatusEnum } from '../code-systems/AccountStatusEnum';
import { CodeableConcept, CodeableReference, Identifier, Money, PARSABLE_DATATYPE_MAP, Period, Reference } from '../complex-types/complex-datatypes';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';

/**
 * Account Class
 *
 * @remarks
 * A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc.
 *
 * **FHIR Specification**
 * - **Short:** Tracks balance, charges, for patient or cost center
 * - **Definition:** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc.
 * - **FHIR Version:** 5.0.0
 *
 * @category Data Models: Resource
 * @see [FHIR Account](http://hl7.org/fhir/StructureDefinition/Account)
 */
export class Account extends DomainResource implements IDomainResource {
  constructor(status: EnumCodeType | CodeType | fhirCode | null = null) {
    super();

    this.accountStatusEnum = new AccountStatusEnum();

    this.status = constructorCodeValueAsEnumCodeType<AccountStatusEnum>(
      status,
      AccountStatusEnum,
      this.accountStatusEnum,
      'Account.status',
    );
  }

  /**
   * Parse the provided `Account` JSON to instantiate the Account data model.
   *
   * @param sourceJson - JSON representing FHIR `Account`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to Account
   * @returns Account data model or undefined for `Account`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): Account | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'Account';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new Account();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'Account');
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

    fieldName = 'billingStatus';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setBillingStatus(datatype);
    }

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setType(datatype);
    }

    fieldName = 'name';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setNameElement(datatype);
    }

    fieldName = 'subject';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addSubject(datatype);
          }
        });
      }
  }

    fieldName = 'servicePeriod';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Period | undefined = Period.parse(classJsonObj[fieldName]!, sourceField);
      instance.setServicePeriod(datatype);
    }

    fieldName = 'coverage';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: AccountCoverageComponent | undefined = AccountCoverageComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addCoverage(component);
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

    fieldName = 'description';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: MarkdownType | undefined = fhirParser.parseMarkdownType(dtJson, dtSiblingJson);
      instance.setDescriptionElement(datatype);
    }

    fieldName = 'guarantor';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: AccountGuarantorComponent | undefined = AccountGuarantorComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addGuarantor(component);
          }
        });
      }
    }

    fieldName = 'diagnosis';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: AccountDiagnosisComponent | undefined = AccountDiagnosisComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addDiagnosis(component);
          }
        });
      }
    }

    fieldName = 'procedure';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: AccountProcedureComponent | undefined = AccountProcedureComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addProcedure(component);
          }
        });
      }
    }

    fieldName = 'relatedAccount';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: AccountRelatedAccountComponent | undefined = AccountRelatedAccountComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addRelatedAccount(component);
          }
        });
      }
    }

    fieldName = 'currency';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setCurrency(datatype);
    }

    fieldName = 'balance';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: AccountBalanceComponent | undefined = AccountBalanceComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addBalance(component);
          }
        });
      }
    }

    fieldName = 'calculatedAt';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: InstantType | undefined = fhirParser.parseInstantType(dtJson, dtSiblingJson);
      instance.setCalculatedAtElement(datatype);
    }

    return instance;
  }

  /**
   * Account.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Account number
   * - **Definition:** Unique identifier used to reference the account.  Might or might not be intended for human use (e.g. credit card number).
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier[] | undefined;

  /**
   * FHIR CodeSystem: AccountStatus
   *
   * @see {@link AccountStatusEnum }
   */
  private readonly accountStatusEnum: AccountStatusEnum;

  /**
   * Account.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** active | inactive | entered-in-error | on-hold | unknown
   * - **Definition:** Indicates whether the account is presently used/usable or not.
   * - **Comment:** This element is labeled as a modifier because the status contains the codes inactive and entered-in-error that mark the Account as not currently valid.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** true
   * - **isModifierReason:** This element is labelled as a modifier because it is a status element that contains status entered-in-error which means that the resource should not be treated as valid
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link AccountStatusEnum }
   */
  private status: EnumCodeType | null;

  /**
   * Account.billingStatus Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Tracks the lifecycle of the account through the billing process
   * - **Definition:** The BillingStatus tracks the lifecycle of the account through the billing process. It indicates how transactions are treated when they are allocated to the account.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private billingStatus?: CodeableConcept | undefined;

  /**
   * Account.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** E.g. patient, expense, depreciation
   * - **Definition:** Categorizes the account for reporting and searching purposes.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private type_?: CodeableConcept | undefined;

  /**
   * Account.name Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Human-readable label
   * - **Definition:** Name used for the account when displaying it to humans in reports, etc.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private name?: StringType | undefined;

  /**
   * Account.subject Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The entity that caused the expenses
   * - **Definition:** Identifies the entity which incurs the expenses. While the immediate recipients of services or goods might be entities related to the subject, the expenses were ultimately incurred by the subject of the Account.
   * - **Comment:** Accounts can be applied to non-patients for tracking other non-patient related activities, such as group services (patients not tracked, and costs charged to another body), or might not be allocated.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/Device',
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *       'http://hl7.org/fhir/StructureDefinition/Location',
   *       'http://hl7.org/fhir/StructureDefinition/HealthcareService',
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private subject?: Reference[] | undefined;

  /**
   * Account.servicePeriod Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Transaction window
   * - **Definition:** The date range of services associated with this account.
   * - **Comment:** It is possible for transactions to be posted outside the service period, as long as the service was provided within the defined service period.
   * - **FHIR Type:** `Period`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private servicePeriod?: Period | undefined;

  /**
   * Account.coverage Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The party(s) that are responsible for covering the payment of this account, and what order should they be applied to the account
   * - **Definition:** The party(s) that are responsible for covering the payment of this account, and what order should they be applied to the account.
   * - **Comment:** Typically. this may be some form of insurance, internal charges, or self-pay. Local or jurisdictional business rules may determine which coverage covers which types of billable items charged to the account, and in which order. Where the order is important, a local/jurisdictional extension may be defined to specify the order for the type of charge.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private coverage?: AccountCoverageComponent[] | undefined;

  /**
   * Account.owner Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Entity managing the Account
   * - **Definition:** Indicates the service area, hospital, department, etc. with responsibility for managing the Account.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private owner?: Reference | undefined;

  /**
   * Account.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Explanation of purpose/use
   * - **Definition:** Provides additional information about what the account tracks and how it is used.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private description?: MarkdownType | undefined;

  /**
   * Account.guarantor Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The parties ultimately responsible for balancing the Account
   * - **Definition:** The parties responsible for balancing the account if other payment options fall short.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private guarantor?: AccountGuarantorComponent[] | undefined;

  /**
   * Account.diagnosis Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The list of diagnoses relevant to this account
   * - **Definition:** When using an account for billing a specific Encounter the set of diagnoses that are relevant for billing are stored here on the account where they are able to be sequenced appropriately prior to processing to produce claim(s).
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private diagnosis?: AccountDiagnosisComponent[] | undefined;

  /**
   * Account.procedure Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The list of procedures relevant to this account
   * - **Definition:** When using an account for billing a specific Encounter the set of procedures that are relevant for billing are stored here on the account where they are able to be sequenced appropriately prior to processing to produce claim(s).
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private procedure?: AccountProcedureComponent[] | undefined;

  /**
   * Account.relatedAccount Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Other associated accounts related to this account
   * - **Definition:** Other associated accounts related to this account.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private relatedAccount?: AccountRelatedAccountComponent[] | undefined;

  /**
   * Account.currency Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The base or default currency
   * - **Definition:** The default currency for the account.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private currency?: CodeableConcept | undefined;

  /**
   * Account.balance Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Calculated account balance(s)
   * - **Definition:** The calculated account balances - these are calculated and processed by the finance system. The balances with a `term` that is not current are usually generated/updated by an invoicing or similar process.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private balance?: AccountBalanceComponent[] | undefined;

  /**
   * Account.calculatedAt Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Time the balance amount was calculated
   * - **Definition:** Time the balance amount was calculated.
   * - **Comment:** The total(s) are not typically updated using the restful API but more often by back-end processes included in a typical finance system.
   * - **FHIR Type:** `instant`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private calculatedAt?: InstantType | undefined;

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
      const optErrMsg = `Invalid Account.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid Account.identifier; Provided element is not an instance of Identifier.`;
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
   * @see CodeSystem Enumeration: {@link AccountStatusEnum }
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
   * @see CodeSystem Enumeration: {@link AccountStatusEnum }
   */
  public setStatusEnumType(enumType: EnumCodeType | undefined | null): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid Account.status`;
      assertEnumCodeType<AccountStatusEnum>(enumType, AccountStatusEnum, errMsgPrefix);
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
   * @see CodeSystem Enumeration: {@link AccountStatusEnum }
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
   * @see CodeSystem Enumeration: {@link AccountStatusEnum }
   */
  public setStatusElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid Account.status; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.status = new EnumCodeType(element, this.accountStatusEnum);
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
   * @see CodeSystem Enumeration: {@link AccountStatusEnum }
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
   * @see CodeSystem Enumeration: {@link AccountStatusEnum }
   */
  public setStatus(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid Account.status (${String(value)})`;
      this.status = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.accountStatusEnum);
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
   * @returns the `billingStatus` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getBillingStatus(): CodeableConcept {
    return this.billingStatus ?? new CodeableConcept();
  }

  /**
   * Assigns the provided BillingStatus object value to the `billingStatus` property.
   *
   * @param value - the `billingStatus` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setBillingStatus(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Account.billingStatus; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.billingStatus = value;
    } else {
      this.billingStatus = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `billingStatus` property exists and has a value; `false` otherwise
   */
  public hasBillingStatus(): boolean {
    return isDefined<CodeableConcept>(this.billingStatus) && !this.billingStatus.isEmpty();
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
      const optErrMsg = `Invalid Account.type; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `name` property value as a StringType object if defined; else an empty StringType object
   */
  public getNameElement(): StringType {
    return this.name ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `name` property.
   *
   * @param element - the `name` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setNameElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid Account.name; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.name = element;
    } else {
      this.name = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `name` property exists and has a value; `false` otherwise
   */
  public hasNameElement(): boolean {
    return isDefined<StringType>(this.name) && !this.name.isEmpty();
  }

  /**
   * @returns the `name` property value as a fhirString if defined; else undefined
   */
  public getName(): fhirString | undefined {
    return this.name?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `name` property.
   *
   * @param value - the `name` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setName(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid Account.name (${String(value)})`;
      this.name = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.name = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `name` property exists and has a value; `false` otherwise
   */
  public hasName(): boolean {
    return this.hasNameElement();
  }

  /**
   * @returns the `subject` property value as a Reference array
   */
  public getSubject(): Reference[] {
    return this.subject ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `subject` property.
   *
   * @decorator `@ReferenceTargets('Account.subject', ['Patient','Device','Practitioner','PractitionerRole','Location','HealthcareService','Organization',])`
   *
   * @param value - the `subject` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Account.subject', [
    'Patient',
  
    'Device',
  
    'Practitioner',
  
    'PractitionerRole',
  
    'Location',
  
    'HealthcareService',
  
    'Organization',
  ])
  public setSubject(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.subject = value;
    } else {
      this.subject = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `subject` array property.
   *
   * @decorator `@ReferenceTargets('Account.subject', ['Patient','Device','Practitioner','PractitionerRole','Location','HealthcareService','Organization',])`
   *
   * @param value - the `subject` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Account.subject', [
    'Patient',
  
    'Device',
  
    'Practitioner',
  
    'PractitionerRole',
  
    'Location',
  
    'HealthcareService',
  
    'Organization',
  ])
  public addSubject(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initSubject();
      this.subject?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `subject` property exists and has a value; `false` otherwise
   */
  public hasSubject(): boolean {
    return isDefinedList<Reference>(this.subject) && this.subject.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `subject` property
   */
  private initSubject(): void {
    if (!this.hasSubject()) {
      this.subject = [] as Reference[];
    }
  }

  /**
   * @returns the `servicePeriod` property value as a Period object if defined; else an empty Period object
   */
  public getServicePeriod(): Period {
    return this.servicePeriod ?? new Period();
  }

  /**
   * Assigns the provided ServicePeriod object value to the `servicePeriod` property.
   *
   * @param value - the `servicePeriod` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setServicePeriod(value: Period | undefined): this {
    if (isDefined<Period>(value)) {
      const optErrMsg = `Invalid Account.servicePeriod; Provided element is not an instance of Period.`;
      assertFhirType<Period>(value, Period, optErrMsg);
      this.servicePeriod = value;
    } else {
      this.servicePeriod = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `servicePeriod` property exists and has a value; `false` otherwise
   */
  public hasServicePeriod(): boolean {
    return isDefined<Period>(this.servicePeriod) && !this.servicePeriod.isEmpty();
  }

  /**
   * @returns the `coverage` property value as a AccountCoverageComponent array
   */
  public getCoverage(): AccountCoverageComponent[] {
    return this.coverage ?? ([] as AccountCoverageComponent[]);
  }

  /**
   * Assigns the provided AccountCoverageComponent array value to the `coverage` property.
   *
   * @param value - the `coverage` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCoverage(value: AccountCoverageComponent[] | undefined): this {
    if (isDefinedList<AccountCoverageComponent>(value)) {
      const optErrMsg = `Invalid Account.coverage; Provided value array has an element that is not an instance of AccountCoverageComponent.`;
      assertFhirTypeList<AccountCoverageComponent>(value, AccountCoverageComponent, optErrMsg);
      this.coverage = value;
    } else {
      this.coverage = undefined;
    }
    return this;
  }

  /**
   * Add the provided AccountCoverageComponent value to the `coverage` array property.
   *
   * @param value - the `coverage` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addCoverage(value: AccountCoverageComponent | undefined): this {
    if (isDefined<AccountCoverageComponent>(value)) {
      const optErrMsg = `Invalid Account.coverage; Provided element is not an instance of AccountCoverageComponent.`;
      assertFhirType<AccountCoverageComponent>(value, AccountCoverageComponent, optErrMsg);
      this.initCoverage();
      this.coverage?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `coverage` property exists and has a value; `false` otherwise
   */
  public hasCoverage(): boolean {
    return isDefinedList<AccountCoverageComponent>(this.coverage) && this.coverage.some((item: AccountCoverageComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `coverage` property
   */
  private initCoverage(): void {
    if(!this.hasCoverage()) {
      this.coverage = [] as AccountCoverageComponent[];
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
   * @decorator `@ReferenceTargets('Account.owner', ['Organization',])`
   *
   * @param value - the `owner` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Account.owner', [
    'Organization',
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
   * @returns the `description` property value as a MarkdownType object if defined; else an empty MarkdownType object
   */
  public getDescriptionElement(): MarkdownType {
    return this.description ?? new MarkdownType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `description` property.
   *
   * @param element - the `description` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDescriptionElement(element: MarkdownType | undefined): this {
    if (isDefined<MarkdownType>(element)) {
      const optErrMsg = `Invalid Account.description; Provided element is not an instance of MarkdownType.`;
      assertFhirType<MarkdownType>(element, MarkdownType, optErrMsg);
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
    return isDefined<MarkdownType>(this.description) && !this.description.isEmpty();
  }

  /**
   * @returns the `description` property value as a fhirMarkdown if defined; else undefined
   */
  public getDescription(): fhirMarkdown | undefined {
    return this.description?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `description` property.
   *
   * @param value - the `description` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDescription(value: fhirMarkdown | undefined): this {
    if (isDefined<fhirMarkdown>(value)) {
      const optErrMsg = `Invalid Account.description (${String(value)})`;
      this.description = new MarkdownType(parseFhirPrimitiveData(value, fhirMarkdownSchema, optErrMsg));
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
   * @returns the `guarantor` property value as a AccountGuarantorComponent array
   */
  public getGuarantor(): AccountGuarantorComponent[] {
    return this.guarantor ?? ([] as AccountGuarantorComponent[]);
  }

  /**
   * Assigns the provided AccountGuarantorComponent array value to the `guarantor` property.
   *
   * @param value - the `guarantor` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setGuarantor(value: AccountGuarantorComponent[] | undefined): this {
    if (isDefinedList<AccountGuarantorComponent>(value)) {
      const optErrMsg = `Invalid Account.guarantor; Provided value array has an element that is not an instance of AccountGuarantorComponent.`;
      assertFhirTypeList<AccountGuarantorComponent>(value, AccountGuarantorComponent, optErrMsg);
      this.guarantor = value;
    } else {
      this.guarantor = undefined;
    }
    return this;
  }

  /**
   * Add the provided AccountGuarantorComponent value to the `guarantor` array property.
   *
   * @param value - the `guarantor` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addGuarantor(value: AccountGuarantorComponent | undefined): this {
    if (isDefined<AccountGuarantorComponent>(value)) {
      const optErrMsg = `Invalid Account.guarantor; Provided element is not an instance of AccountGuarantorComponent.`;
      assertFhirType<AccountGuarantorComponent>(value, AccountGuarantorComponent, optErrMsg);
      this.initGuarantor();
      this.guarantor?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `guarantor` property exists and has a value; `false` otherwise
   */
  public hasGuarantor(): boolean {
    return isDefinedList<AccountGuarantorComponent>(this.guarantor) && this.guarantor.some((item: AccountGuarantorComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `guarantor` property
   */
  private initGuarantor(): void {
    if(!this.hasGuarantor()) {
      this.guarantor = [] as AccountGuarantorComponent[];
    }
  }

  /**
   * @returns the `diagnosis` property value as a AccountDiagnosisComponent array
   */
  public getDiagnosis(): AccountDiagnosisComponent[] {
    return this.diagnosis ?? ([] as AccountDiagnosisComponent[]);
  }

  /**
   * Assigns the provided AccountDiagnosisComponent array value to the `diagnosis` property.
   *
   * @param value - the `diagnosis` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDiagnosis(value: AccountDiagnosisComponent[] | undefined): this {
    if (isDefinedList<AccountDiagnosisComponent>(value)) {
      const optErrMsg = `Invalid Account.diagnosis; Provided value array has an element that is not an instance of AccountDiagnosisComponent.`;
      assertFhirTypeList<AccountDiagnosisComponent>(value, AccountDiagnosisComponent, optErrMsg);
      this.diagnosis = value;
    } else {
      this.diagnosis = undefined;
    }
    return this;
  }

  /**
   * Add the provided AccountDiagnosisComponent value to the `diagnosis` array property.
   *
   * @param value - the `diagnosis` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addDiagnosis(value: AccountDiagnosisComponent | undefined): this {
    if (isDefined<AccountDiagnosisComponent>(value)) {
      const optErrMsg = `Invalid Account.diagnosis; Provided element is not an instance of AccountDiagnosisComponent.`;
      assertFhirType<AccountDiagnosisComponent>(value, AccountDiagnosisComponent, optErrMsg);
      this.initDiagnosis();
      this.diagnosis?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `diagnosis` property exists and has a value; `false` otherwise
   */
  public hasDiagnosis(): boolean {
    return isDefinedList<AccountDiagnosisComponent>(this.diagnosis) && this.diagnosis.some((item: AccountDiagnosisComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `diagnosis` property
   */
  private initDiagnosis(): void {
    if(!this.hasDiagnosis()) {
      this.diagnosis = [] as AccountDiagnosisComponent[];
    }
  }

  /**
   * @returns the `procedure` property value as a AccountProcedureComponent array
   */
  public getProcedure(): AccountProcedureComponent[] {
    return this.procedure ?? ([] as AccountProcedureComponent[]);
  }

  /**
   * Assigns the provided AccountProcedureComponent array value to the `procedure` property.
   *
   * @param value - the `procedure` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setProcedure(value: AccountProcedureComponent[] | undefined): this {
    if (isDefinedList<AccountProcedureComponent>(value)) {
      const optErrMsg = `Invalid Account.procedure; Provided value array has an element that is not an instance of AccountProcedureComponent.`;
      assertFhirTypeList<AccountProcedureComponent>(value, AccountProcedureComponent, optErrMsg);
      this.procedure = value;
    } else {
      this.procedure = undefined;
    }
    return this;
  }

  /**
   * Add the provided AccountProcedureComponent value to the `procedure` array property.
   *
   * @param value - the `procedure` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addProcedure(value: AccountProcedureComponent | undefined): this {
    if (isDefined<AccountProcedureComponent>(value)) {
      const optErrMsg = `Invalid Account.procedure; Provided element is not an instance of AccountProcedureComponent.`;
      assertFhirType<AccountProcedureComponent>(value, AccountProcedureComponent, optErrMsg);
      this.initProcedure();
      this.procedure?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `procedure` property exists and has a value; `false` otherwise
   */
  public hasProcedure(): boolean {
    return isDefinedList<AccountProcedureComponent>(this.procedure) && this.procedure.some((item: AccountProcedureComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `procedure` property
   */
  private initProcedure(): void {
    if(!this.hasProcedure()) {
      this.procedure = [] as AccountProcedureComponent[];
    }
  }

  /**
   * @returns the `relatedAccount` property value as a AccountRelatedAccountComponent array
   */
  public getRelatedAccount(): AccountRelatedAccountComponent[] {
    return this.relatedAccount ?? ([] as AccountRelatedAccountComponent[]);
  }

  /**
   * Assigns the provided AccountRelatedAccountComponent array value to the `relatedAccount` property.
   *
   * @param value - the `relatedAccount` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setRelatedAccount(value: AccountRelatedAccountComponent[] | undefined): this {
    if (isDefinedList<AccountRelatedAccountComponent>(value)) {
      const optErrMsg = `Invalid Account.relatedAccount; Provided value array has an element that is not an instance of AccountRelatedAccountComponent.`;
      assertFhirTypeList<AccountRelatedAccountComponent>(value, AccountRelatedAccountComponent, optErrMsg);
      this.relatedAccount = value;
    } else {
      this.relatedAccount = undefined;
    }
    return this;
  }

  /**
   * Add the provided AccountRelatedAccountComponent value to the `relatedAccount` array property.
   *
   * @param value - the `relatedAccount` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addRelatedAccount(value: AccountRelatedAccountComponent | undefined): this {
    if (isDefined<AccountRelatedAccountComponent>(value)) {
      const optErrMsg = `Invalid Account.relatedAccount; Provided element is not an instance of AccountRelatedAccountComponent.`;
      assertFhirType<AccountRelatedAccountComponent>(value, AccountRelatedAccountComponent, optErrMsg);
      this.initRelatedAccount();
      this.relatedAccount?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `relatedAccount` property exists and has a value; `false` otherwise
   */
  public hasRelatedAccount(): boolean {
    return isDefinedList<AccountRelatedAccountComponent>(this.relatedAccount) && this.relatedAccount.some((item: AccountRelatedAccountComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `relatedAccount` property
   */
  private initRelatedAccount(): void {
    if(!this.hasRelatedAccount()) {
      this.relatedAccount = [] as AccountRelatedAccountComponent[];
    }
  }

  /**
   * @returns the `currency` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getCurrency(): CodeableConcept {
    return this.currency ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Currency object value to the `currency` property.
   *
   * @param value - the `currency` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCurrency(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Account.currency; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.currency = value;
    } else {
      this.currency = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `currency` property exists and has a value; `false` otherwise
   */
  public hasCurrency(): boolean {
    return isDefined<CodeableConcept>(this.currency) && !this.currency.isEmpty();
  }

  /**
   * @returns the `balance` property value as a AccountBalanceComponent array
   */
  public getBalance(): AccountBalanceComponent[] {
    return this.balance ?? ([] as AccountBalanceComponent[]);
  }

  /**
   * Assigns the provided AccountBalanceComponent array value to the `balance` property.
   *
   * @param value - the `balance` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setBalance(value: AccountBalanceComponent[] | undefined): this {
    if (isDefinedList<AccountBalanceComponent>(value)) {
      const optErrMsg = `Invalid Account.balance; Provided value array has an element that is not an instance of AccountBalanceComponent.`;
      assertFhirTypeList<AccountBalanceComponent>(value, AccountBalanceComponent, optErrMsg);
      this.balance = value;
    } else {
      this.balance = undefined;
    }
    return this;
  }

  /**
   * Add the provided AccountBalanceComponent value to the `balance` array property.
   *
   * @param value - the `balance` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addBalance(value: AccountBalanceComponent | undefined): this {
    if (isDefined<AccountBalanceComponent>(value)) {
      const optErrMsg = `Invalid Account.balance; Provided element is not an instance of AccountBalanceComponent.`;
      assertFhirType<AccountBalanceComponent>(value, AccountBalanceComponent, optErrMsg);
      this.initBalance();
      this.balance?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `balance` property exists and has a value; `false` otherwise
   */
  public hasBalance(): boolean {
    return isDefinedList<AccountBalanceComponent>(this.balance) && this.balance.some((item: AccountBalanceComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `balance` property
   */
  private initBalance(): void {
    if(!this.hasBalance()) {
      this.balance = [] as AccountBalanceComponent[];
    }
  }

  /**
   * @returns the `calculatedAt` property value as a InstantType object if defined; else an empty InstantType object
   */
  public getCalculatedAtElement(): InstantType {
    return this.calculatedAt ?? new InstantType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `calculatedAt` property.
   *
   * @param element - the `calculatedAt` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCalculatedAtElement(element: InstantType | undefined): this {
    if (isDefined<InstantType>(element)) {
      const optErrMsg = `Invalid Account.calculatedAt; Provided element is not an instance of InstantType.`;
      assertFhirType<InstantType>(element, InstantType, optErrMsg);
      this.calculatedAt = element;
    } else {
      this.calculatedAt = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `calculatedAt` property exists and has a value; `false` otherwise
   */
  public hasCalculatedAtElement(): boolean {
    return isDefined<InstantType>(this.calculatedAt) && !this.calculatedAt.isEmpty();
  }

  /**
   * @returns the `calculatedAt` property value as a fhirInstant if defined; else undefined
   */
  public getCalculatedAt(): fhirInstant | undefined {
    return this.calculatedAt?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `calculatedAt` property.
   *
   * @param value - the `calculatedAt` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCalculatedAt(value: fhirInstant | undefined): this {
    if (isDefined<fhirInstant>(value)) {
      const optErrMsg = `Invalid Account.calculatedAt (${String(value)})`;
      this.calculatedAt = new InstantType(parseFhirPrimitiveData(value, fhirInstantSchema, optErrMsg));
    } else {
      this.calculatedAt = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `calculatedAt` property exists and has a value; `false` otherwise
   */
  public hasCalculatedAt(): boolean {
    return this.hasCalculatedAtElement();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Account';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identifier,
      this.status,
      this.billingStatus,
      this.type_,
      this.name,
      this.subject,
      this.servicePeriod,
      this.coverage,
      this.owner,
      this.description,
      this.guarantor,
      this.diagnosis,
      this.procedure,
      this.relatedAccount,
      this.currency,
      this.balance,
      this.calculatedAt,
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
  public override copy(): Account {
    const dest = new Account();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: Account): void {
    super.copyValues(dest);
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    dest.status = this.status ? this.status.copy() : null;
    dest.billingStatus = this.billingStatus?.copy();
    dest.type_ = this.type_?.copy();
    dest.name = this.name?.copy();
    const subjectList = copyListValues<Reference>(this.subject);
    dest.subject = subjectList.length === 0 ? undefined : subjectList;
    dest.servicePeriod = this.servicePeriod?.copy();
    const coverageList = copyListValues<AccountCoverageComponent>(this.coverage);
    dest.coverage = coverageList.length === 0 ? undefined : coverageList;
    dest.owner = this.owner?.copy();
    dest.description = this.description?.copy();
    const guarantorList = copyListValues<AccountGuarantorComponent>(this.guarantor);
    dest.guarantor = guarantorList.length === 0 ? undefined : guarantorList;
    const diagnosisList = copyListValues<AccountDiagnosisComponent>(this.diagnosis);
    dest.diagnosis = diagnosisList.length === 0 ? undefined : diagnosisList;
    const procedureList = copyListValues<AccountProcedureComponent>(this.procedure);
    dest.procedure = procedureList.length === 0 ? undefined : procedureList;
    const relatedAccountList = copyListValues<AccountRelatedAccountComponent>(this.relatedAccount);
    dest.relatedAccount = relatedAccountList.length === 0 ? undefined : relatedAccountList;
    dest.currency = this.currency?.copy();
    const balanceList = copyListValues<AccountBalanceComponent>(this.balance);
    dest.balance = balanceList.length === 0 ? undefined : balanceList;
    dest.calculatedAt = this.calculatedAt?.copy();
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
    }

    if (this.hasBillingStatus()) {
      setFhirComplexJson(this.getBillingStatus(), 'billingStatus', jsonObj);
    }

    if (this.hasType()) {
      setFhirComplexJson(this.getType(), 'type', jsonObj);
    }

    if (this.hasNameElement()) {
      setFhirPrimitiveJson<fhirString>(this.getNameElement(), 'name', jsonObj);
    }

    if (this.hasSubject()) {
      setFhirComplexListJson(this.getSubject(), 'subject', jsonObj);
    }

    if (this.hasServicePeriod()) {
      setFhirComplexJson(this.getServicePeriod(), 'servicePeriod', jsonObj);
    }

    if (this.hasCoverage()) {
      setFhirBackboneElementListJson(this.getCoverage(), 'coverage', jsonObj);
    }

    if (this.hasOwner()) {
      setFhirComplexJson(this.getOwner(), 'owner', jsonObj);
    }

    if (this.hasDescriptionElement()) {
      setFhirPrimitiveJson<fhirMarkdown>(this.getDescriptionElement(), 'description', jsonObj);
    }

    if (this.hasGuarantor()) {
      setFhirBackboneElementListJson(this.getGuarantor(), 'guarantor', jsonObj);
    }

    if (this.hasDiagnosis()) {
      setFhirBackboneElementListJson(this.getDiagnosis(), 'diagnosis', jsonObj);
    }

    if (this.hasProcedure()) {
      setFhirBackboneElementListJson(this.getProcedure(), 'procedure', jsonObj);
    }

    if (this.hasRelatedAccount()) {
      setFhirBackboneElementListJson(this.getRelatedAccount(), 'relatedAccount', jsonObj);
    }

    if (this.hasCurrency()) {
      setFhirComplexJson(this.getCurrency(), 'currency', jsonObj);
    }

    if (this.hasBalance()) {
      setFhirBackboneElementListJson(this.getBalance(), 'balance', jsonObj);
    }

    if (this.hasCalculatedAtElement()) {
      setFhirPrimitiveJson<fhirInstant>(this.getCalculatedAtElement(), 'calculatedAt', jsonObj);
    }

    return jsonObj;
  }
}

/**
 * AccountCoverageComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** The party(s) that are responsible for covering the payment of this account, and what order should they be applied to the account
 * - **Definition:** The party(s) that are responsible for covering the payment of this account, and what order should they be applied to the account.
 * - **Comment:** Typically. this may be some form of insurance, internal charges, or self-pay. Local or jurisdictional business rules may determine which coverage covers which types of billable items charged to the account, and in which order. Where the order is important, a local/jurisdictional extension may be defined to specify the order for the type of charge.
 *
 * @category Data Models: Resource
 * @see [FHIR Account](http://hl7.org/fhir/StructureDefinition/Account)
 */
export class AccountCoverageComponent extends BackboneElement implements IBackboneElement {
  constructor(coverage: Reference | null = null) {
    super();

    this.coverage = null;
    if (isDefined<Reference>(coverage)) {
      this.setCoverage(coverage);
    }
  }

  /**
   * Parse the provided `AccountCoverageComponent` JSON to instantiate the AccountCoverageComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `AccountCoverageComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to AccountCoverageComponent
   * @returns AccountCoverageComponent data model or undefined for `AccountCoverageComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): AccountCoverageComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'AccountCoverageComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new AccountCoverageComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    fieldName = 'coverage';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setCoverage(null);
      } else {
        instance.setCoverage(datatype);
      }
    } else {
      instance.setCoverage(null);
    }

    fieldName = 'priority';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: PositiveIntType | undefined = fhirParser.parsePositiveIntType(dtJson, dtSiblingJson);
      instance.setPriorityElement(datatype);
    }

    return instance;
  }

  /**
   * Account.coverage.coverage Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The party(s), such as insurances, that may contribute to the payment of this account
   * - **Definition:** The party(s) that contribute to payment (or part of) of the charges applied to this account (including self-pay). A coverage may only be responsible for specific types of charges, and the sequence of the coverages in the account could be important when processing billing.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Coverage',
   *     ]
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private coverage: Reference | null;

  /**
   * Account.coverage.priority Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The priority of the coverage in the context of this account
   * - **Definition:** The priority of the coverage in the context of this account.
   * - **Comment:** It is common in some jurisdictions for there to be multiple coverages allocated to an account, and a sequence is required to order the settling of the account (often with insurance claiming).
   * - **FHIR Type:** `positiveInt`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private priority?: PositiveIntType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `coverage` property value as a Reference object if defined; else an empty Reference object
   */
  public getCoverage(): Reference {
    return this.coverage ?? new Reference();
  }

  /**
   * Assigns the provided Coverage object value to the `coverage` property.
   *
   * @decorator `@ReferenceTargets('Account.coverage.coverage', ['Coverage',])`
   *
   * @param value - the `coverage` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Account.coverage.coverage', [
    'Coverage',
  ])
  public setCoverage(value: Reference | undefined | null): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.coverage = value;
    } else {
      this.coverage = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `coverage` property exists and has a value; `false` otherwise
   */
  public hasCoverage(): boolean {
    return isDefined<Reference>(this.coverage) && !this.coverage.isEmpty();
  }

  /**
   * @returns the `priority` property value as a PositiveIntType object if defined; else an empty PositiveIntType object
   */
  public getPriorityElement(): PositiveIntType {
    return this.priority ?? new PositiveIntType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `priority` property.
   *
   * @param element - the `priority` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPriorityElement(element: PositiveIntType | undefined): this {
    if (isDefined<PositiveIntType>(element)) {
      const optErrMsg = `Invalid Account.coverage.priority; Provided element is not an instance of PositiveIntType.`;
      assertFhirType<PositiveIntType>(element, PositiveIntType, optErrMsg);
      this.priority = element;
    } else {
      this.priority = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `priority` property exists and has a value; `false` otherwise
   */
  public hasPriorityElement(): boolean {
    return isDefined<PositiveIntType>(this.priority) && !this.priority.isEmpty();
  }

  /**
   * @returns the `priority` property value as a fhirPositiveInt if defined; else undefined
   */
  public getPriority(): fhirPositiveInt | undefined {
    return this.priority?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `priority` property.
   *
   * @param value - the `priority` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPriority(value: fhirPositiveInt | undefined): this {
    if (isDefined<fhirPositiveInt>(value)) {
      const optErrMsg = `Invalid Account.coverage.priority (${String(value)})`;
      this.priority = new PositiveIntType(parseFhirPrimitiveData(value, fhirPositiveIntSchema, optErrMsg));
    } else {
      this.priority = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `priority` property exists and has a value; `false` otherwise
   */
  public hasPriority(): boolean {
    return this.hasPriorityElement();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Account.coverage';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.coverage,
      this.priority,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.coverage, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): AccountCoverageComponent {
    const dest = new AccountCoverageComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: AccountCoverageComponent): void {
    super.copyValues(dest);
    dest.coverage = this.coverage ? this.coverage.copy() : null;
    dest.priority = this.priority?.copy();
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

    if (this.hasCoverage()) {
      setFhirComplexJson(this.getCoverage(), 'coverage', jsonObj);
    }

    if (this.hasPriorityElement()) {
      setFhirPrimitiveJson<fhirPositiveInt>(this.getPriorityElement(), 'priority', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * AccountGuarantorComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** The parties ultimately responsible for balancing the Account
 * - **Definition:** The parties responsible for balancing the account if other payment options fall short.
 *
 * @category Data Models: Resource
 * @see [FHIR Account](http://hl7.org/fhir/StructureDefinition/Account)
 */
export class AccountGuarantorComponent extends BackboneElement implements IBackboneElement {
  constructor(party: Reference | null = null) {
    super();

    this.party = null;
    if (isDefined<Reference>(party)) {
      this.setParty(party);
    }
  }

  /**
   * Parse the provided `AccountGuarantorComponent` JSON to instantiate the AccountGuarantorComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `AccountGuarantorComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to AccountGuarantorComponent
   * @returns AccountGuarantorComponent data model or undefined for `AccountGuarantorComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): AccountGuarantorComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'AccountGuarantorComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new AccountGuarantorComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    fieldName = 'party';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setParty(null);
      } else {
        instance.setParty(datatype);
      }
    } else {
      instance.setParty(null);
    }

    fieldName = 'onHold';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setOnHoldElement(datatype);
    }

    fieldName = 'period';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Period | undefined = Period.parse(classJsonObj[fieldName]!, sourceField);
      instance.setPeriod(datatype);
    }

    return instance;
  }

  /**
   * Account.guarantor.party Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Responsible entity
   * - **Definition:** The entity who is responsible.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/RelatedPerson',
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *     ]
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private party: Reference | null;

  /**
   * Account.guarantor.onHold Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Credit or other hold applied
   * - **Definition:** A guarantor may be placed on credit hold or otherwise have their role temporarily suspended.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private onHold?: BooleanType | undefined;

  /**
   * Account.guarantor.period Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Guarantee account during
   * - **Definition:** The timeframe during which the guarantor accepts responsibility for the account.
   * - **FHIR Type:** `Period`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private period?: Period | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `party` property value as a Reference object if defined; else an empty Reference object
   */
  public getParty(): Reference {
    return this.party ?? new Reference();
  }

  /**
   * Assigns the provided Party object value to the `party` property.
   *
   * @decorator `@ReferenceTargets('Account.guarantor.party', ['Patient','RelatedPerson','Organization',])`
   *
   * @param value - the `party` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Account.guarantor.party', [
    'Patient',
  
    'RelatedPerson',
  
    'Organization',
  ])
  public setParty(value: Reference | undefined | null): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.party = value;
    } else {
      this.party = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `party` property exists and has a value; `false` otherwise
   */
  public hasParty(): boolean {
    return isDefined<Reference>(this.party) && !this.party.isEmpty();
  }

  /**
   * @returns the `onHold` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getOnHoldElement(): BooleanType {
    return this.onHold ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `onHold` property.
   *
   * @param element - the `onHold` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setOnHoldElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid Account.guarantor.onHold; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.onHold = element;
    } else {
      this.onHold = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `onHold` property exists and has a value; `false` otherwise
   */
  public hasOnHoldElement(): boolean {
    return isDefined<BooleanType>(this.onHold) && !this.onHold.isEmpty();
  }

  /**
   * @returns the `onHold` property value as a fhirBoolean if defined; else undefined
   */
  public getOnHold(): fhirBoolean | undefined {
    return this.onHold?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `onHold` property.
   *
   * @param value - the `onHold` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setOnHold(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid Account.guarantor.onHold (${String(value)})`;
      this.onHold = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.onHold = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `onHold` property exists and has a value; `false` otherwise
   */
  public hasOnHold(): boolean {
    return this.hasOnHoldElement();
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
      const optErrMsg = `Invalid Account.guarantor.period; Provided element is not an instance of Period.`;
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

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Account.guarantor';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.party,
      this.onHold,
      this.period,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.party, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): AccountGuarantorComponent {
    const dest = new AccountGuarantorComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: AccountGuarantorComponent): void {
    super.copyValues(dest);
    dest.party = this.party ? this.party.copy() : null;
    dest.onHold = this.onHold?.copy();
    dest.period = this.period?.copy();
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

    if (this.hasParty()) {
      setFhirComplexJson(this.getParty(), 'party', jsonObj);
    }

    if (this.hasOnHoldElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getOnHoldElement(), 'onHold', jsonObj);
    }

    if (this.hasPeriod()) {
      setFhirComplexJson(this.getPeriod(), 'period', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * AccountDiagnosisComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** The list of diagnoses relevant to this account
 * - **Definition:** When using an account for billing a specific Encounter the set of diagnoses that are relevant for billing are stored here on the account where they are able to be sequenced appropriately prior to processing to produce claim(s).
 *
 * @category Data Models: Resource
 * @see [FHIR Account](http://hl7.org/fhir/StructureDefinition/Account)
 */
export class AccountDiagnosisComponent extends BackboneElement implements IBackboneElement {
  constructor(condition: CodeableReference | null = null) {
    super();

    this.condition = null;
    if (isDefined<CodeableReference>(condition)) {
      this.setCondition(condition);
    }
  }

  /**
   * Parse the provided `AccountDiagnosisComponent` JSON to instantiate the AccountDiagnosisComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `AccountDiagnosisComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to AccountDiagnosisComponent
   * @returns AccountDiagnosisComponent data model or undefined for `AccountDiagnosisComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): AccountDiagnosisComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'AccountDiagnosisComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new AccountDiagnosisComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'sequence';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: PositiveIntType | undefined = fhirParser.parsePositiveIntType(dtJson, dtSiblingJson);
      instance.setSequenceElement(datatype);
    }

    fieldName = 'condition';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableReference | undefined = CodeableReference.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setCondition(null);
      } else {
        instance.setCondition(datatype);
      }
    } else {
      instance.setCondition(null);
    }

    fieldName = 'dateOfDiagnosis';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dtJson, dtSiblingJson);
      instance.setDateOfDiagnosisElement(datatype);
    }

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addType(datatype);
          }
        });
      }
    }

    fieldName = 'onAdmission';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setOnAdmissionElement(datatype);
    }

    fieldName = 'packageCode';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addPackageCode(datatype);
          }
        });
      }
    }

    return instance;
  }

  /**
   * Account.diagnosis.sequence Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Ranking of the diagnosis (for each type)
   * - **Definition:** Ranking of the diagnosis (for each type).
   * - **FHIR Type:** `positiveInt`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private sequence?: PositiveIntType | undefined;

  /**
   * Account.diagnosis.condition Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The diagnosis relevant to the account
   * - **Definition:** The diagnosis relevant to the account.
   * - **FHIR Type:** `CodeableReference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Condition',
   *     ]
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private condition: CodeableReference | null;

  /**
   * Account.diagnosis.dateOfDiagnosis Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Date of the diagnosis (when coded diagnosis)
   * - **Definition:** Ranking of the diagnosis (for each type).
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private dateOfDiagnosis?: DateTimeType | undefined;

  /**
   * Account.diagnosis.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Type that this diagnosis has relevant to the account (e.g. admission, billing, discharge ...)
   * - **Definition:** Type that this diagnosis has relevant to the account (e.g. admission, billing, discharge ...).
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private type_?: CodeableConcept[] | undefined;

  /**
   * Account.diagnosis.onAdmission Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Diagnosis present on Admission
   * - **Definition:** Was the Diagnosis present on Admission in the related Encounter.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private onAdmission?: BooleanType | undefined;

  /**
   * Account.diagnosis.packageCode Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Package Code specific for billing
   * - **Definition:** The package code can be used to group diagnoses that may be priced or delivered as a single product. Such as DRGs.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private packageCode?: CodeableConcept[] | undefined;

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
      const optErrMsg = `Invalid Account.diagnosis.sequence; Provided element is not an instance of PositiveIntType.`;
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
      const optErrMsg = `Invalid Account.diagnosis.sequence (${String(value)})`;
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
   * @returns the `condition` property value as a CodeableReference object if defined; else an empty CodeableReference object
   */
  public getCondition(): CodeableReference {
    return this.condition ?? new CodeableReference();
  }

  /**
   * Assigns the provided CodeableReference object value to the `condition` property.
   *
   * @param value - the `condition` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCondition(value: CodeableReference | undefined | null): this {
    if (isDefined<CodeableReference>(value)) {
      const optErrMsg = `Invalid Account.diagnosis.condition; Provided element is not an instance of CodeableReference.`;
      assertFhirType<CodeableReference>(value, CodeableReference, optErrMsg);
      this.condition = value;
    } else {
      this.condition = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `condition` property exists and has a value; `false` otherwise
   */
  public hasCondition(): boolean {
    return isDefined<CodeableReference>(this.condition) && !this.condition.isEmpty();
  }

  /**
   * @returns the `dateOfDiagnosis` property value as a DateTimeType object if defined; else an empty DateTimeType object
   */
  public getDateOfDiagnosisElement(): DateTimeType {
    return this.dateOfDiagnosis ?? new DateTimeType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `dateOfDiagnosis` property.
   *
   * @param element - the `dateOfDiagnosis` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDateOfDiagnosisElement(element: DateTimeType | undefined): this {
    if (isDefined<DateTimeType>(element)) {
      const optErrMsg = `Invalid Account.diagnosis.dateOfDiagnosis; Provided element is not an instance of DateTimeType.`;
      assertFhirType<DateTimeType>(element, DateTimeType, optErrMsg);
      this.dateOfDiagnosis = element;
    } else {
      this.dateOfDiagnosis = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `dateOfDiagnosis` property exists and has a value; `false` otherwise
   */
  public hasDateOfDiagnosisElement(): boolean {
    return isDefined<DateTimeType>(this.dateOfDiagnosis) && !this.dateOfDiagnosis.isEmpty();
  }

  /**
   * @returns the `dateOfDiagnosis` property value as a fhirDateTime if defined; else undefined
   */
  public getDateOfDiagnosis(): fhirDateTime | undefined {
    return this.dateOfDiagnosis?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `dateOfDiagnosis` property.
   *
   * @param value - the `dateOfDiagnosis` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDateOfDiagnosis(value: fhirDateTime | undefined): this {
    if (isDefined<fhirDateTime>(value)) {
      const optErrMsg = `Invalid Account.diagnosis.dateOfDiagnosis (${String(value)})`;
      this.dateOfDiagnosis = new DateTimeType(parseFhirPrimitiveData(value, fhirDateTimeSchema, optErrMsg));
    } else {
      this.dateOfDiagnosis = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `dateOfDiagnosis` property exists and has a value; `false` otherwise
   */
  public hasDateOfDiagnosis(): boolean {
    return this.hasDateOfDiagnosisElement();
  }

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
      const optErrMsg = `Invalid Account.diagnosis.type; Provided value array has an element that is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid Account.diagnosis.type; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `onAdmission` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getOnAdmissionElement(): BooleanType {
    return this.onAdmission ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `onAdmission` property.
   *
   * @param element - the `onAdmission` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setOnAdmissionElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid Account.diagnosis.onAdmission; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.onAdmission = element;
    } else {
      this.onAdmission = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `onAdmission` property exists and has a value; `false` otherwise
   */
  public hasOnAdmissionElement(): boolean {
    return isDefined<BooleanType>(this.onAdmission) && !this.onAdmission.isEmpty();
  }

  /**
   * @returns the `onAdmission` property value as a fhirBoolean if defined; else undefined
   */
  public getOnAdmission(): fhirBoolean | undefined {
    return this.onAdmission?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `onAdmission` property.
   *
   * @param value - the `onAdmission` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setOnAdmission(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid Account.diagnosis.onAdmission (${String(value)})`;
      this.onAdmission = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.onAdmission = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `onAdmission` property exists and has a value; `false` otherwise
   */
  public hasOnAdmission(): boolean {
    return this.hasOnAdmissionElement();
  }

  /**
   * @returns the `packageCode` property value as a CodeableConcept array
   */
  public getPackageCode(): CodeableConcept[] {
    return this.packageCode ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `packageCode` property.
   *
   * @param value - the `packageCode` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPackageCode(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Account.diagnosis.packageCode; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.packageCode = value;
    } else {
      this.packageCode = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `packageCode` array property.
   *
   * @param value - the `packageCode` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addPackageCode(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Account.diagnosis.packageCode; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initPackageCode();
      this.packageCode?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `packageCode` property exists and has a value; `false` otherwise
   */
  public hasPackageCode(): boolean {
    return isDefinedList<CodeableConcept>(this.packageCode) && this.packageCode.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `packageCode` property
   */
  private initPackageCode(): void {
    if(!this.hasPackageCode()) {
      this.packageCode = [] as CodeableConcept[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Account.diagnosis';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.sequence,
      this.condition,
      this.dateOfDiagnosis,
      this.type_,
      this.onAdmission,
      this.packageCode,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.condition, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): AccountDiagnosisComponent {
    const dest = new AccountDiagnosisComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: AccountDiagnosisComponent): void {
    super.copyValues(dest);
    dest.sequence = this.sequence?.copy();
    dest.condition = this.condition ? this.condition.copy() : null;
    dest.dateOfDiagnosis = this.dateOfDiagnosis?.copy();
    const typeList = copyListValues<CodeableConcept>(this.type_);
    dest.type_ = typeList.length === 0 ? undefined : typeList;
    dest.onAdmission = this.onAdmission?.copy();
    const packageCodeList = copyListValues<CodeableConcept>(this.packageCode);
    dest.packageCode = packageCodeList.length === 0 ? undefined : packageCodeList;
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

    if (this.hasSequenceElement()) {
      setFhirPrimitiveJson<fhirPositiveInt>(this.getSequenceElement(), 'sequence', jsonObj);
    }

    if (this.hasCondition()) {
      setFhirComplexJson(this.getCondition(), 'condition', jsonObj);
    }

    if (this.hasDateOfDiagnosisElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getDateOfDiagnosisElement(), 'dateOfDiagnosis', jsonObj);
    }

    if (this.hasType()) {
      setFhirComplexListJson(this.getType(), 'type', jsonObj);
    }

    if (this.hasOnAdmissionElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getOnAdmissionElement(), 'onAdmission', jsonObj);
    }

    if (this.hasPackageCode()) {
      setFhirComplexListJson(this.getPackageCode(), 'packageCode', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * AccountProcedureComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** The list of procedures relevant to this account
 * - **Definition:** When using an account for billing a specific Encounter the set of procedures that are relevant for billing are stored here on the account where they are able to be sequenced appropriately prior to processing to produce claim(s).
 *
 * @category Data Models: Resource
 * @see [FHIR Account](http://hl7.org/fhir/StructureDefinition/Account)
 */
export class AccountProcedureComponent extends BackboneElement implements IBackboneElement {
  constructor(code: CodeableReference | null = null) {
    super();

    this.code = null;
    if (isDefined<CodeableReference>(code)) {
      this.setCode(code);
    }
  }

  /**
   * Parse the provided `AccountProcedureComponent` JSON to instantiate the AccountProcedureComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `AccountProcedureComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to AccountProcedureComponent
   * @returns AccountProcedureComponent data model or undefined for `AccountProcedureComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): AccountProcedureComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'AccountProcedureComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new AccountProcedureComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'sequence';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: PositiveIntType | undefined = fhirParser.parsePositiveIntType(dtJson, dtSiblingJson);
      instance.setSequenceElement(datatype);
    }

    fieldName = 'code';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableReference | undefined = CodeableReference.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setCode(null);
      } else {
        instance.setCode(datatype);
      }
    } else {
      instance.setCode(null);
    }

    fieldName = 'dateOfService';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dtJson, dtSiblingJson);
      instance.setDateOfServiceElement(datatype);
    }

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addType(datatype);
          }
        });
      }
    }

    fieldName = 'packageCode';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addPackageCode(datatype);
          }
        });
      }
    }

    fieldName = 'device';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addDevice(datatype);
          }
        });
      }
  }

    return instance;
  }

  /**
   * Account.procedure.sequence Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Ranking of the procedure (for each type)
   * - **Definition:** Ranking of the procedure (for each type).
   * - **FHIR Type:** `positiveInt`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private sequence?: PositiveIntType | undefined;

  /**
   * Account.procedure.code Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The procedure relevant to the account
   * - **Definition:** The procedure relevant to the account.
   * - **FHIR Type:** `CodeableReference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Procedure',
   *     ]
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private code: CodeableReference | null;

  /**
   * Account.procedure.dateOfService Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Date of the procedure (when coded procedure)
   * - **Definition:** Date of the procedure when using a coded procedure. If using a reference to a procedure, then the date on the procedure should be used.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private dateOfService?: DateTimeType | undefined;

  /**
   * Account.procedure.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** How this procedure value should be used in charging the account
   * - **Definition:** How this procedure value should be used in charging the account.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private type_?: CodeableConcept[] | undefined;

  /**
   * Account.procedure.packageCode Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Package Code specific for billing
   * - **Definition:** The package code can be used to group procedures that may be priced or delivered as a single product. Such as DRGs.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private packageCode?: CodeableConcept[] | undefined;

  /**
   * Account.procedure.device Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Any devices that were associated with the procedure
   * - **Definition:** Any devices that were associated with the procedure relevant to the account.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Device',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private device?: Reference[] | undefined;

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
      const optErrMsg = `Invalid Account.procedure.sequence; Provided element is not an instance of PositiveIntType.`;
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
      const optErrMsg = `Invalid Account.procedure.sequence (${String(value)})`;
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
   * @returns the `code` property value as a CodeableReference object if defined; else an empty CodeableReference object
   */
  public getCode(): CodeableReference {
    return this.code ?? new CodeableReference();
  }

  /**
   * Assigns the provided CodeableReference object value to the `code` property.
   *
   * @param value - the `code` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCode(value: CodeableReference | undefined | null): this {
    if (isDefined<CodeableReference>(value)) {
      const optErrMsg = `Invalid Account.procedure.code; Provided element is not an instance of CodeableReference.`;
      assertFhirType<CodeableReference>(value, CodeableReference, optErrMsg);
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
    return isDefined<CodeableReference>(this.code) && !this.code.isEmpty();
  }

  /**
   * @returns the `dateOfService` property value as a DateTimeType object if defined; else an empty DateTimeType object
   */
  public getDateOfServiceElement(): DateTimeType {
    return this.dateOfService ?? new DateTimeType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `dateOfService` property.
   *
   * @param element - the `dateOfService` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDateOfServiceElement(element: DateTimeType | undefined): this {
    if (isDefined<DateTimeType>(element)) {
      const optErrMsg = `Invalid Account.procedure.dateOfService; Provided element is not an instance of DateTimeType.`;
      assertFhirType<DateTimeType>(element, DateTimeType, optErrMsg);
      this.dateOfService = element;
    } else {
      this.dateOfService = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `dateOfService` property exists and has a value; `false` otherwise
   */
  public hasDateOfServiceElement(): boolean {
    return isDefined<DateTimeType>(this.dateOfService) && !this.dateOfService.isEmpty();
  }

  /**
   * @returns the `dateOfService` property value as a fhirDateTime if defined; else undefined
   */
  public getDateOfService(): fhirDateTime | undefined {
    return this.dateOfService?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `dateOfService` property.
   *
   * @param value - the `dateOfService` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDateOfService(value: fhirDateTime | undefined): this {
    if (isDefined<fhirDateTime>(value)) {
      const optErrMsg = `Invalid Account.procedure.dateOfService (${String(value)})`;
      this.dateOfService = new DateTimeType(parseFhirPrimitiveData(value, fhirDateTimeSchema, optErrMsg));
    } else {
      this.dateOfService = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `dateOfService` property exists and has a value; `false` otherwise
   */
  public hasDateOfService(): boolean {
    return this.hasDateOfServiceElement();
  }

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
      const optErrMsg = `Invalid Account.procedure.type; Provided value array has an element that is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid Account.procedure.type; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `packageCode` property value as a CodeableConcept array
   */
  public getPackageCode(): CodeableConcept[] {
    return this.packageCode ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `packageCode` property.
   *
   * @param value - the `packageCode` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPackageCode(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Account.procedure.packageCode; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.packageCode = value;
    } else {
      this.packageCode = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `packageCode` array property.
   *
   * @param value - the `packageCode` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addPackageCode(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Account.procedure.packageCode; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initPackageCode();
      this.packageCode?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `packageCode` property exists and has a value; `false` otherwise
   */
  public hasPackageCode(): boolean {
    return isDefinedList<CodeableConcept>(this.packageCode) && this.packageCode.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `packageCode` property
   */
  private initPackageCode(): void {
    if(!this.hasPackageCode()) {
      this.packageCode = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `device` property value as a Reference array
   */
  public getDevice(): Reference[] {
    return this.device ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `device` property.
   *
   * @decorator `@ReferenceTargets('Account.procedure.device', ['Device',])`
   *
   * @param value - the `device` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Account.procedure.device', [
    'Device',
  ])
  public setDevice(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.device = value;
    } else {
      this.device = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `device` array property.
   *
   * @decorator `@ReferenceTargets('Account.procedure.device', ['Device',])`
   *
   * @param value - the `device` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Account.procedure.device', [
    'Device',
  ])
  public addDevice(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initDevice();
      this.device?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `device` property exists and has a value; `false` otherwise
   */
  public hasDevice(): boolean {
    return isDefinedList<Reference>(this.device) && this.device.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `device` property
   */
  private initDevice(): void {
    if (!this.hasDevice()) {
      this.device = [] as Reference[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Account.procedure';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.sequence,
      this.code,
      this.dateOfService,
      this.type_,
      this.packageCode,
      this.device,
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
  public override copy(): AccountProcedureComponent {
    const dest = new AccountProcedureComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: AccountProcedureComponent): void {
    super.copyValues(dest);
    dest.sequence = this.sequence?.copy();
    dest.code = this.code ? this.code.copy() : null;
    dest.dateOfService = this.dateOfService?.copy();
    const typeList = copyListValues<CodeableConcept>(this.type_);
    dest.type_ = typeList.length === 0 ? undefined : typeList;
    const packageCodeList = copyListValues<CodeableConcept>(this.packageCode);
    dest.packageCode = packageCodeList.length === 0 ? undefined : packageCodeList;
    const deviceList = copyListValues<Reference>(this.device);
    dest.device = deviceList.length === 0 ? undefined : deviceList;
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

    if (this.hasSequenceElement()) {
      setFhirPrimitiveJson<fhirPositiveInt>(this.getSequenceElement(), 'sequence', jsonObj);
    }

    if (this.hasCode()) {
      setFhirComplexJson(this.getCode(), 'code', jsonObj);
    }

    if (this.hasDateOfServiceElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getDateOfServiceElement(), 'dateOfService', jsonObj);
    }

    if (this.hasType()) {
      setFhirComplexListJson(this.getType(), 'type', jsonObj);
    }

    if (this.hasPackageCode()) {
      setFhirComplexListJson(this.getPackageCode(), 'packageCode', jsonObj);
    }

    if (this.hasDevice()) {
      setFhirComplexListJson(this.getDevice(), 'device', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * AccountRelatedAccountComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Other associated accounts related to this account
 * - **Definition:** Other associated accounts related to this account.
 *
 * @category Data Models: Resource
 * @see [FHIR Account](http://hl7.org/fhir/StructureDefinition/Account)
 */
export class AccountRelatedAccountComponent extends BackboneElement implements IBackboneElement {
  constructor(account: Reference | null = null) {
    super();

    this.account = null;
    if (isDefined<Reference>(account)) {
      this.setAccount(account);
    }
  }

  /**
   * Parse the provided `AccountRelatedAccountComponent` JSON to instantiate the AccountRelatedAccountComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `AccountRelatedAccountComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to AccountRelatedAccountComponent
   * @returns AccountRelatedAccountComponent data model or undefined for `AccountRelatedAccountComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): AccountRelatedAccountComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'AccountRelatedAccountComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new AccountRelatedAccountComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    fieldName = 'relationship';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setRelationship(datatype);
    }

    fieldName = 'account';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setAccount(null);
      } else {
        instance.setAccount(datatype);
      }
    } else {
      instance.setAccount(null);
    }

    return instance;
  }

  /**
   * Account.relatedAccount.relationship Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Relationship of the associated Account
   * - **Definition:** Relationship of the associated Account.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private relationship?: CodeableConcept | undefined;

  /**
   * Account.relatedAccount.account Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Reference to an associated Account
   * - **Definition:** Reference to an associated Account.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Account',
   *     ]
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private account: Reference | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `relationship` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getRelationship(): CodeableConcept {
    return this.relationship ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Relationship object value to the `relationship` property.
   *
   * @param value - the `relationship` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setRelationship(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Account.relatedAccount.relationship; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.relationship = value;
    } else {
      this.relationship = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `relationship` property exists and has a value; `false` otherwise
   */
  public hasRelationship(): boolean {
    return isDefined<CodeableConcept>(this.relationship) && !this.relationship.isEmpty();
  }

  /**
   * @returns the `account` property value as a Reference object if defined; else an empty Reference object
   */
  public getAccount(): Reference {
    return this.account ?? new Reference();
  }

  /**
   * Assigns the provided Account object value to the `account` property.
   *
   * @decorator `@ReferenceTargets('Account.relatedAccount.account', ['Account',])`
   *
   * @param value - the `account` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Account.relatedAccount.account', [
    'Account',
  ])
  public setAccount(value: Reference | undefined | null): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.account = value;
    } else {
      this.account = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `account` property exists and has a value; `false` otherwise
   */
  public hasAccount(): boolean {
    return isDefined<Reference>(this.account) && !this.account.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Account.relatedAccount';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.relationship,
      this.account,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.account, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): AccountRelatedAccountComponent {
    const dest = new AccountRelatedAccountComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: AccountRelatedAccountComponent): void {
    super.copyValues(dest);
    dest.relationship = this.relationship?.copy();
    dest.account = this.account ? this.account.copy() : null;
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

    if (this.hasRelationship()) {
      setFhirComplexJson(this.getRelationship(), 'relationship', jsonObj);
    }

    if (this.hasAccount()) {
      setFhirComplexJson(this.getAccount(), 'account', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * AccountBalanceComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Calculated account balance(s)
 * - **Definition:** The calculated account balances - these are calculated and processed by the finance system. The balances with a `term` that is not current are usually generated/updated by an invoicing or similar process.
 *
 * @category Data Models: Resource
 * @see [FHIR Account](http://hl7.org/fhir/StructureDefinition/Account)
 */
export class AccountBalanceComponent extends BackboneElement implements IBackboneElement {
  constructor(amount: Money | null = null) {
    super();

    this.amount = null;
    if (isDefined<Money>(amount)) {
      this.setAmount(amount);
    }
  }

  /**
   * Parse the provided `AccountBalanceComponent` JSON to instantiate the AccountBalanceComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `AccountBalanceComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to AccountBalanceComponent
   * @returns AccountBalanceComponent data model or undefined for `AccountBalanceComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): AccountBalanceComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'AccountBalanceComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new AccountBalanceComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    fieldName = 'aggregate';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setAggregate(datatype);
    }

    fieldName = 'term';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setTerm(datatype);
    }

    fieldName = 'estimate';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setEstimateElement(datatype);
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

    return instance;
  }

  /**
   * Account.balance.aggregate Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who is expected to pay this part of the balance
   * - **Definition:** Who is expected to pay this part of the balance.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private aggregate?: CodeableConcept | undefined;

  /**
   * Account.balance.term Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** current | 30 | 60 | 90 | 120
   * - **Definition:** The term of the account balances - The balance value is the amount that was outstanding for this age.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private term?: CodeableConcept | undefined;

  /**
   * Account.balance.estimate Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Estimated balance
   * - **Definition:** The amount is only an estimated value - this is likely common for `current` term balances, but not with known terms (that were generated by a backend process).
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private estimate?: BooleanType | undefined;

  /**
   * Account.balance.amount Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Calculated amount
   * - **Definition:** The actual balance value calculated for the age defined in the term property.
   * - **FHIR Type:** `Money`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private amount: Money | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `aggregate` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getAggregate(): CodeableConcept {
    return this.aggregate ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Aggregate object value to the `aggregate` property.
   *
   * @param value - the `aggregate` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAggregate(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Account.balance.aggregate; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.aggregate = value;
    } else {
      this.aggregate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `aggregate` property exists and has a value; `false` otherwise
   */
  public hasAggregate(): boolean {
    return isDefined<CodeableConcept>(this.aggregate) && !this.aggregate.isEmpty();
  }

  /**
   * @returns the `term` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getTerm(): CodeableConcept {
    return this.term ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Term object value to the `term` property.
   *
   * @param value - the `term` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setTerm(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Account.balance.term; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.term = value;
    } else {
      this.term = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `term` property exists and has a value; `false` otherwise
   */
  public hasTerm(): boolean {
    return isDefined<CodeableConcept>(this.term) && !this.term.isEmpty();
  }

  /**
   * @returns the `estimate` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getEstimateElement(): BooleanType {
    return this.estimate ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `estimate` property.
   *
   * @param element - the `estimate` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setEstimateElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid Account.balance.estimate; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.estimate = element;
    } else {
      this.estimate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `estimate` property exists and has a value; `false` otherwise
   */
  public hasEstimateElement(): boolean {
    return isDefined<BooleanType>(this.estimate) && !this.estimate.isEmpty();
  }

  /**
   * @returns the `estimate` property value as a fhirBoolean if defined; else undefined
   */
  public getEstimate(): fhirBoolean | undefined {
    return this.estimate?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `estimate` property.
   *
   * @param value - the `estimate` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setEstimate(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid Account.balance.estimate (${String(value)})`;
      this.estimate = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.estimate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `estimate` property exists and has a value; `false` otherwise
   */
  public hasEstimate(): boolean {
    return this.hasEstimateElement();
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
      const optErrMsg = `Invalid Account.balance.amount; Provided element is not an instance of Money.`;
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

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Account.balance';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.aggregate,
      this.term,
      this.estimate,
      this.amount,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.amount, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): AccountBalanceComponent {
    const dest = new AccountBalanceComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: AccountBalanceComponent): void {
    super.copyValues(dest);
    dest.aggregate = this.aggregate?.copy();
    dest.term = this.term?.copy();
    dest.estimate = this.estimate?.copy();
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

    if (this.hasAggregate()) {
      setFhirComplexJson(this.getAggregate(), 'aggregate', jsonObj);
    }

    if (this.hasTerm()) {
      setFhirComplexJson(this.getTerm(), 'term', jsonObj);
    }

    if (this.hasEstimateElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getEstimateElement(), 'estimate', jsonObj);
    }

    if (this.hasAmount()) {
      setFhirComplexJson(this.getAmount(), 'amount', jsonObj);
    }

    return jsonObj;
  }
}
