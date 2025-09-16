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
 * Permission Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/Permission
 * StructureDefinition.name: Permission
 * StructureDefinition.description: Permission resource holds access rules for a given data and context.
 * StructureDefinition.fhirVersion: 5.0.0
 *
 * For questions, suggestions, or bugs, please open an issue at [GitHub ts-fhir-datamodels/issues](https://github.com/Paqrat76/ts-fhir-datamodels/issues).
 *
 * @packageDocumentation
 */

import {
  BackboneElement,
  CodeType,
  DateTimeType,
  DomainResource,
  EnumCodeType,
  FhirParser,
  IBackboneElement,
  IDomainResource,
  JSON,
  PrimitiveTypeJson,
  ReferenceTargets,
  assertEnumCodeType,
  assertFhirType,
  assertFhirTypeList,
  constructorCodeValueAsEnumCodeType,
  copyListValues,
  fhirCode,
  fhirCodeSchema,
  fhirDateTime,
  fhirDateTimeSchema,
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
} from '@paq-ts-fhir/fhir-core';
import { CodeableConcept, Coding, Expression, PARSABLE_DATATYPE_MAP, Period, Reference } from '../complex-types/complex-datatypes';
import { ConsentDataMeaningEnum } from '../code-systems/ConsentDataMeaningEnum';
import { ConsentProvisionTypeEnum } from '../code-systems/ConsentProvisionTypeEnum';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';
import { PermissionRuleCombiningEnum } from '../code-systems/PermissionRuleCombiningEnum';
import { PermissionStatusEnum } from '../code-systems/PermissionStatusEnum';

/**
 * Permission Class
 *
 * @remarks
 * Permission resource holds access rules for a given data and context.
 *
 * **FHIR Specification**
 * - **Short:** Access Rules
 * - **Definition:** Permission resource holds access rules for a given data and context.
 * - **FHIR Version:** 5.0.0
 *
 * @category Data Models: Resource
 * @see [FHIR Permission](http://hl7.org/fhir/StructureDefinition/Permission)
 */
export class Permission extends DomainResource implements IDomainResource {
  constructor(status: EnumCodeType | CodeType | fhirCode | null = null, combining: EnumCodeType | CodeType | fhirCode | null = null) {
    super();

    this.permissionStatusEnum = new PermissionStatusEnum();
    this.permissionRuleCombiningEnum = new PermissionRuleCombiningEnum();

    this.status = constructorCodeValueAsEnumCodeType<PermissionStatusEnum>(
      status,
      PermissionStatusEnum,
      this.permissionStatusEnum,
      'Permission.status',
    );

    this.combining = constructorCodeValueAsEnumCodeType<PermissionRuleCombiningEnum>(
      combining,
      PermissionRuleCombiningEnum,
      this.permissionRuleCombiningEnum,
      'Permission.combining',
    );
  }

  /**
   * Parse the provided `Permission` JSON to instantiate the Permission data model.
   *
   * @param sourceJson - JSON representing FHIR `Permission`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to Permission
   * @returns Permission data model or undefined for `Permission`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): Permission | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'Permission';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new Permission();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'Permission');
    fhirParser.processDomainResourceJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

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

    fieldName = 'asserter';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setAsserter(datatype);
    }

    fieldName = 'date';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        const dataJsonArray: PrimitiveTypeJson[] = getPrimitiveTypeListJson(
          classJsonObj,
          sourceField,
          fieldName,
          primitiveJsonType,
        );
        dataJsonArray.forEach((dataJson: PrimitiveTypeJson) => {
          const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dataJson.dtJson, dataJson.dtSiblingJson);
          if (datatype !== undefined) {
            instance.addDateElement(datatype);
          }
        });
      }
    }

    fieldName = 'validity';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Period | undefined = Period.parse(classJsonObj[fieldName]!, sourceField);
      instance.setValidity(datatype);
    }

    fieldName = 'justification';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: PermissionJustificationComponent | undefined = PermissionJustificationComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setJustification(component);
    }

    fieldName = 'combining';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setCombining(null);
      } else {
        instance.setCombiningElement(datatype);
      }
    } else {
      instance.setCombining(null);
    }

    fieldName = 'rule';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: PermissionRuleComponent | undefined = PermissionRuleComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addRule(component);
          }
        });
      }
    }

    return instance;
  }

  /**
   * FHIR CodeSystem: PermissionStatus
   *
   * @see {@link PermissionStatusEnum }
   */
  private readonly permissionStatusEnum: PermissionStatusEnum;

  /**
   * Permission.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** active | entered-in-error | draft | rejected
   * - **Definition:** Status.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link PermissionStatusEnum }
   */
  private status: EnumCodeType | null;

  /**
   * Permission.asserter Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The person or entity that asserts the permission
   * - **Definition:** The person or entity that asserts the permission.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *       'http://hl7.org/fhir/StructureDefinition/CareTeam',
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/RelatedPerson',
   *       'http://hl7.org/fhir/StructureDefinition/HealthcareService',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private asserter?: Reference | undefined;

  /**
   * Permission.date Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The date that permission was asserted
   * - **Definition:** The date that permission was asserted.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private date?: DateTimeType[] | undefined;

  /**
   * Permission.validity Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The period in which the permission is active
   * - **Definition:** The period in which the permission is active.
   * - **FHIR Type:** `Period`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private validity?: Period | undefined;

  /**
   * Permission.justification Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The asserted justification for using the data
   * - **Definition:** The asserted justification for using the data.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private justification?: PermissionJustificationComponent | undefined;

  /**
   * FHIR CodeSystem: PermissionRuleCombining
   *
   * @see {@link PermissionRuleCombiningEnum }
   */
  private readonly permissionRuleCombiningEnum: PermissionRuleCombiningEnum;

  /**
   * Permission.combining Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** deny-overrides | permit-overrides | ordered-deny-overrides | ordered-permit-overrides | deny-unless-permit | permit-unless-deny
   * - **Definition:** Defines a procedure for arriving at an access decision given the set of rules.
   * - **Comment:** see [XACML Combining Rules](http://docs.oasis-open.org/xacml/3.0/xacml-3.0-core-spec-cos01-en.html#_Toc325047267)
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** true
   * - **isModifierReason:** Defines how the rules are to be combined.
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link PermissionRuleCombiningEnum }
   */
  private combining: EnumCodeType | null;

  /**
   * Permission.rule Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Constraints to the Permission
   * - **Definition:** A set of rules.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private rule?: PermissionRuleComponent[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `status` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link PermissionStatusEnum }
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
   * @see CodeSystem Enumeration: {@link PermissionStatusEnum }
   */
  public setStatusEnumType(enumType: EnumCodeType | undefined | null): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid Permission.status`;
      assertEnumCodeType<PermissionStatusEnum>(enumType, PermissionStatusEnum, errMsgPrefix);
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
   * @see CodeSystem Enumeration: {@link PermissionStatusEnum }
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
   * @see CodeSystem Enumeration: {@link PermissionStatusEnum }
   */
  public setStatusElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid Permission.status; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.status = new EnumCodeType(element, this.permissionStatusEnum);
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
   * @see CodeSystem Enumeration: {@link PermissionStatusEnum }
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
   * @see CodeSystem Enumeration: {@link PermissionStatusEnum }
   */
  public setStatus(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid Permission.status (${String(value)})`;
      this.status = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.permissionStatusEnum);
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
   * @returns the `asserter` property value as a Reference object; else an empty Reference object
   */
  public getAsserter(): Reference {
    return this.asserter ?? new Reference();
  }

  /**
   * Assigns the provided Asserter object value to the `asserter` property.
   *
   * @decorator `@ReferenceTargets('Permission.asserter', ['Practitioner','PractitionerRole','Organization','CareTeam','Patient','RelatedPerson','HealthcareService',])`
   *
   * @param value - the `asserter` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Permission.asserter', [
    'Practitioner',
  
    'PractitionerRole',
  
    'Organization',
  
    'CareTeam',
  
    'Patient',
  
    'RelatedPerson',
  
    'HealthcareService',
  ])
  public setAsserter(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.asserter = value;
    } else {
      this.asserter = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `asserter` property exists and has a value; `false` otherwise
   */
  public hasAsserter(): boolean {
    return isDefined<Reference>(this.asserter) && !this.asserter.isEmpty();
  }

  /**
   * @returns the `date` property value as a DateTimeType array
   */
  public getDateElement(): DateTimeType[] {
    return this.date ?? ([] as DateTimeType[]);
  }

  /**
   * Assigns the provided DateTimeType array value to the `date` property.
   *
   * @param element - the `date` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDateElement(element: DateTimeType[] | undefined): this {
    if (isDefinedList<DateTimeType>(element)) {
      const optErrMsg = `Invalid Permission.date; Provided value array has an element that is not an instance of DateTimeType.`;
      assertFhirTypeList<DateTimeType>(element, DateTimeType, optErrMsg);
      this.date = element;
    } else {
      this.date = undefined;
    }
    return this;
  }

  /**
   * Add the provided DateTimeType value to the `date` array property.
   *
   * @param element - the `date` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addDateElement(element: DateTimeType | undefined): this {
    if (isDefined<DateTimeType>(element)) {
      const optErrMsg = `Invalid Permission.date; Provided element is not an instance of DateTimeType.`;
      assertFhirType<DateTimeType>(element, DateTimeType, optErrMsg);
      this.initDate();
      this.date?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `date` property exists and has a value; `false` otherwise
   */
  public hasDateElement(): boolean {
    return isDefinedList<DateTimeType>(this.date) && this.date.some((item: DateTimeType) => !item.isEmpty());
  }

  /**
   * @returns the `date` property value as a fhirDateTime array
   */
  public getDate(): fhirDateTime[] {
    this.initDate();
    const dateValues = [] as fhirDateTime[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.date!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        dateValues.push(value);
      }
    }
    return dateValues;
  }

  /**
   * Assigns the provided primitive value array to the `date` property.
   *
   * @param value - the `date` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDate(value: fhirDateTime[] | undefined): this {
    if (isDefinedList<fhirDateTime>(value)) {
      const dateElements = [] as DateTimeType[];
      for (const dateValue of value) {
        const optErrMsg = `Invalid Permission.date array item (${String(dateValue)})`;
        const element = new DateTimeType(parseFhirPrimitiveData(dateValue, fhirDateTimeSchema, optErrMsg));
        dateElements.push(element);
      }
      this.date = dateElements;
    } else {
      this.date = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `date` array property.
   *
   * @param value - the `date` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addDate(value: fhirDateTime | undefined): this {
    if (isDefined<fhirDateTime>(value)) {
      const optErrMsg = `Invalid Permission.date array item (${String(value)})`;
      const element = new DateTimeType(parseFhirPrimitiveData(value, fhirDateTimeSchema, optErrMsg));
      this.initDate();
      this.addDateElement(element);
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
   * Initialize the `date` property
   */
  private initDate(): void {
    if (!this.hasDate()) {
      this.date = [] as DateTimeType[];
    }
  }

  /**
   * @returns the `validity` property value as a Period object if defined; else an empty Period object
   */
  public getValidity(): Period {
    return this.validity ?? new Period();
  }

  /**
   * Assigns the provided Validity object value to the `validity` property.
   *
   * @param value - the `validity` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setValidity(value: Period | undefined): this {
    if (isDefined<Period>(value)) {
      const optErrMsg = `Invalid Permission.validity; Provided element is not an instance of Period.`;
      assertFhirType<Period>(value, Period, optErrMsg);
      this.validity = value;
    } else {
      this.validity = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `validity` property exists and has a value; `false` otherwise
   */
  public hasValidity(): boolean {
    return isDefined<Period>(this.validity) && !this.validity.isEmpty();
  }

  /**
   * @returns the `justification` property value as a PermissionJustificationComponent object if defined; else an empty PermissionJustificationComponent object
   */
  public getJustification(): PermissionJustificationComponent {
    return this.justification ?? new PermissionJustificationComponent();
  }

  /**
   * Assigns the provided Justification object value to the `justification` property.
   *
   * @param value - the `justification` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setJustification(value: PermissionJustificationComponent | undefined): this {
    if (isDefined<PermissionJustificationComponent>(value)) {
      const optErrMsg = `Invalid Permission.justification; Provided element is not an instance of PermissionJustificationComponent.`;
      assertFhirType<PermissionJustificationComponent>(value, PermissionJustificationComponent, optErrMsg);
      this.justification = value;
    } else {
      this.justification = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `justification` property exists and has a value; `false` otherwise
   */
  public hasJustification(): boolean {
    return isDefined<PermissionJustificationComponent>(this.justification) && !this.justification.isEmpty();
  }

  /**
   * @returns the `combining` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link PermissionRuleCombiningEnum }
   */
  public getCombiningEnumType(): EnumCodeType | null {
    return this.combining;
  }

  /**
   * Assigns the provided EnumCodeType value to the `combining` property.
   *
   * @param enumType - the `combining` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link PermissionRuleCombiningEnum }
   */
  public setCombiningEnumType(enumType: EnumCodeType | undefined | null): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid Permission.combining`;
      assertEnumCodeType<PermissionRuleCombiningEnum>(enumType, PermissionRuleCombiningEnum, errMsgPrefix);
      this.combining = enumType;
    } else {
      this.combining = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `combining` property exists and has a value; `false` otherwise
   */
  public hasCombiningEnumType(): boolean {
    return isDefined<EnumCodeType>(this.combining) && !this.combining.isEmpty() && this.combining.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `combining` property value as a CodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link PermissionRuleCombiningEnum }
   */
  public getCombiningElement(): CodeType | null {
    if (this.combining === null) {
      return null;
    }
    return this.combining as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `combining` property.
   *
   * @param element - the `combining` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link PermissionRuleCombiningEnum }
   */
  public setCombiningElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid Permission.combining; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.combining = new EnumCodeType(element, this.permissionRuleCombiningEnum);
    } else {
      this.combining = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `combining` property exists and has a value; `false` otherwise
   */
  public hasCombiningElement(): boolean {
    return this.hasCombiningEnumType();
  }

  /**
   * @returns the `combining` property value as a fhirCode if defined; else null
   *
   * @see CodeSystem Enumeration: {@link PermissionRuleCombiningEnum }
   */
  public getCombining(): fhirCode | null {
    if (this.combining === null) {
      return null;
    }
    return this.combining.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `combining` property.
   *
   * @param value - the `combining` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link PermissionRuleCombiningEnum }
   */
  public setCombining(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid Permission.combining (${String(value)})`;
      this.combining = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.permissionRuleCombiningEnum);
    } else {
      this.combining = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `combining` property exists and has a value; `false` otherwise
   */
  public hasCombining(): boolean {
    return this.hasCombiningEnumType();
  }

  /**
   * @returns the `rule` property value as a PermissionRuleComponent array
   */
  public getRule(): PermissionRuleComponent[] {
    return this.rule ?? ([] as PermissionRuleComponent[]);
  }

  /**
   * Assigns the provided PermissionRuleComponent array value to the `rule` property.
   *
   * @param value - the `rule` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setRule(value: PermissionRuleComponent[] | undefined): this {
    if (isDefinedList<PermissionRuleComponent>(value)) {
      const optErrMsg = `Invalid Permission.rule; Provided value array has an element that is not an instance of PermissionRuleComponent.`;
      assertFhirTypeList<PermissionRuleComponent>(value, PermissionRuleComponent, optErrMsg);
      this.rule = value;
    } else {
      this.rule = undefined;
    }
    return this;
  }

  /**
   * Add the provided PermissionRuleComponent value to the `rule` array property.
   *
   * @param value - the `rule` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addRule(value: PermissionRuleComponent | undefined): this {
    if (isDefined<PermissionRuleComponent>(value)) {
      const optErrMsg = `Invalid Permission.rule; Provided element is not an instance of PermissionRuleComponent.`;
      assertFhirType<PermissionRuleComponent>(value, PermissionRuleComponent, optErrMsg);
      this.initRule();
      this.rule?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `rule` property exists and has a value; `false` otherwise
   */
  public hasRule(): boolean {
    return isDefinedList<PermissionRuleComponent>(this.rule) && this.rule.some((item: PermissionRuleComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `rule` property
   */
  private initRule(): void {
    if(!this.hasRule()) {
      this.rule = [] as PermissionRuleComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Permission';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.status,
      this.asserter,
      this.date,
      this.validity,
      this.justification,
      this.combining,
      this.rule,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.status, this.combining, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): Permission {
    const dest = new Permission();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: Permission): void {
    super.copyValues(dest);
    dest.status = this.status ? this.status.copy() : null;
    dest.asserter = this.asserter?.copy();
    const dateList = copyListValues<DateTimeType>(this.date);
    dest.date = dateList.length === 0 ? undefined : dateList;
    dest.validity = this.validity?.copy();
    dest.justification = this.justification?.copy();
    dest.combining = this.combining ? this.combining.copy() : null;
    const ruleList = copyListValues<PermissionRuleComponent>(this.rule);
    dest.rule = ruleList.length === 0 ? undefined : ruleList;
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

    if (this.hasStatusElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getStatusElement()!, 'status', jsonObj);
    }

    if (this.hasAsserter()) {
      setFhirComplexJson(this.getAsserter(), 'asserter', jsonObj);
    }

    if (this.hasDate()) {
      setFhirPrimitiveListJson(this.getDateElement(), 'date', jsonObj);
    }

    if (this.hasValidity()) {
      setFhirComplexJson(this.getValidity(), 'validity', jsonObj);
    }

    if (this.hasJustification()) {
      setFhirBackboneElementJson(this.getJustification(), 'justification', jsonObj);
    }

    if (this.hasCombiningElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getCombiningElement()!, 'combining', jsonObj);
    }

    if (this.hasRule()) {
      setFhirBackboneElementListJson(this.getRule(), 'rule', jsonObj);
    }

    return jsonObj;
  }
}

/**
 * PermissionJustificationComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** The asserted justification for using the data
 * - **Definition:** The asserted justification for using the data.
 *
 * @category Data Models: Resource
 * @see [FHIR Permission](http://hl7.org/fhir/StructureDefinition/Permission)
 */
export class PermissionJustificationComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `PermissionJustificationComponent` JSON to instantiate the PermissionJustificationComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `PermissionJustificationComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to PermissionJustificationComponent
   * @returns PermissionJustificationComponent data model or undefined for `PermissionJustificationComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): PermissionJustificationComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'PermissionJustificationComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new PermissionJustificationComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    fieldName = 'basis';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addBasis(datatype);
          }
        });
      }
    }

    fieldName = 'evidence';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addEvidence(datatype);
          }
        });
      }
  }

    return instance;
  }

  /**
   * Permission.justification.basis Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The regulatory grounds upon which this Permission builds
   * - **Definition:** This would be a codeableconcept, or a coding, which can be constrained to , for example, the 6 grounds for processing in GDPR.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private basis?: CodeableConcept[] | undefined;

  /**
   * Permission.justification.evidence Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Justifing rational
   * - **Definition:** Justifing rational.
   * - **Comment:** While any resource may be used, DocumentReference, Consent, PlanDefinition, and Contract would be most frequent
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Resource',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private evidence?: Reference[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `basis` property value as a CodeableConcept array
   */
  public getBasis(): CodeableConcept[] {
    return this.basis ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `basis` property.
   *
   * @param value - the `basis` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setBasis(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Permission.justification.basis; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.basis = value;
    } else {
      this.basis = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `basis` array property.
   *
   * @param value - the `basis` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addBasis(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Permission.justification.basis; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initBasis();
      this.basis?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `basis` property exists and has a value; `false` otherwise
   */
  public hasBasis(): boolean {
    return isDefinedList<CodeableConcept>(this.basis) && this.basis.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `basis` property
   */
  private initBasis(): void {
    if(!this.hasBasis()) {
      this.basis = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `evidence` property value as a Reference array
   */
  public getEvidence(): Reference[] {
    return this.evidence ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `evidence` property.
   *
   * @decorator `@ReferenceTargets('Permission.justification.evidence', ['Resource',])`
   *
   * @param value - the `evidence` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Permission.justification.evidence', [
    'Resource',
  ])
  public setEvidence(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.evidence = value;
    } else {
      this.evidence = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `evidence` array property.
   *
   * @decorator `@ReferenceTargets('Permission.justification.evidence', ['Resource',])`
   *
   * @param value - the `evidence` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Permission.justification.evidence', [
    'Resource',
  ])
  public addEvidence(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initEvidence();
      this.evidence?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `evidence` property exists and has a value; `false` otherwise
   */
  public hasEvidence(): boolean {
    return isDefinedList<Reference>(this.evidence) && this.evidence.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `evidence` property
   */
  private initEvidence(): void {
    if (!this.hasEvidence()) {
      this.evidence = [] as Reference[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Permission.justification';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.basis,
      this.evidence,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): PermissionJustificationComponent {
    const dest = new PermissionJustificationComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: PermissionJustificationComponent): void {
    super.copyValues(dest);
    const basisList = copyListValues<CodeableConcept>(this.basis);
    dest.basis = basisList.length === 0 ? undefined : basisList;
    const evidenceList = copyListValues<Reference>(this.evidence);
    dest.evidence = evidenceList.length === 0 ? undefined : evidenceList;
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

    if (this.hasBasis()) {
      setFhirComplexListJson(this.getBasis(), 'basis', jsonObj);
    }

    if (this.hasEvidence()) {
      setFhirComplexListJson(this.getEvidence(), 'evidence', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * PermissionRuleComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Constraints to the Permission
 * - **Definition:** A set of rules.
 *
 * @category Data Models: Resource
 * @see [FHIR Permission](http://hl7.org/fhir/StructureDefinition/Permission)
 */
export class PermissionRuleComponent extends BackboneElement implements IBackboneElement {
  constructor() {
    super();

    this.consentProvisionTypeEnum = new ConsentProvisionTypeEnum();
  }

  /**
   * Parse the provided `PermissionRuleComponent` JSON to instantiate the PermissionRuleComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `PermissionRuleComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to PermissionRuleComponent
   * @returns PermissionRuleComponent data model or undefined for `PermissionRuleComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): PermissionRuleComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'PermissionRuleComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new PermissionRuleComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setTypeElement(datatype);
    }

    fieldName = 'data';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: PermissionRuleDataComponent | undefined = PermissionRuleDataComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addData(component);
          }
        });
      }
    }

    fieldName = 'activity';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: PermissionRuleActivityComponent | undefined = PermissionRuleActivityComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addActivity(component);
          }
        });
      }
    }

    fieldName = 'limit';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addLimit(datatype);
          }
        });
      }
    }

    return instance;
  }

  /**
   * FHIR CodeSystem: ConsentProvisionType
   *
   * @see {@link ConsentProvisionTypeEnum }
   */
  private readonly consentProvisionTypeEnum: ConsentProvisionTypeEnum;

  /**
   * Permission.rule.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** deny | permit
   * - **Definition:** deny | permit.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** true
   * - **isModifierReason:** Sets the context for the meaning of the rules.
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link ConsentProvisionTypeEnum }
   */
  private type_?: EnumCodeType | undefined;

  /**
   * Permission.rule.data Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The selection criteria to identify data that is within scope of this provision
   * - **Definition:** A description or definition of which activities are allowed to be done on the data.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private data?: PermissionRuleDataComponent[] | undefined;

  /**
   * Permission.rule.activity Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A description or definition of which activities are allowed to be done on the data
   * - **Definition:** A description or definition of which activities are allowed to be done on the data.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private activity?: PermissionRuleActivityComponent[] | undefined;

  /**
   * Permission.rule.limit Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** What limits apply to the use of the data
   * - **Definition:** What limits apply to the use of the data.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private limit?: CodeableConcept[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `type_` property value as a EnumCodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link ConsentProvisionTypeEnum }
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
   * @see CodeSystem Enumeration: {@link ConsentProvisionTypeEnum }
   */
  public setTypeEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = 'Invalid Permission.rule.type';
      assertEnumCodeType<ConsentProvisionTypeEnum>(enumType, ConsentProvisionTypeEnum, errMsgPrefix);
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
   * @see CodeSystem Enumeration: {@link ConsentProvisionTypeEnum }
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
   * @see CodeSystem Enumeration: {@link ConsentProvisionTypeEnum }
   */
  public setTypeElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid Permission.rule.type; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.type_ = new EnumCodeType(element, this.consentProvisionTypeEnum);
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
   * @see CodeSystem Enumeration: {@link ConsentProvisionTypeEnum }
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
   * @see CodeSystem Enumeration: {@link ConsentProvisionTypeEnum }
   */
  public setType(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid Permission.rule.type; Provided value is not an instance of fhirCode.`;
      this.type_ = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.consentProvisionTypeEnum);
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
   * @returns the `data` property value as a PermissionRuleDataComponent array
   */
  public getData(): PermissionRuleDataComponent[] {
    return this.data ?? ([] as PermissionRuleDataComponent[]);
  }

  /**
   * Assigns the provided PermissionRuleDataComponent array value to the `data` property.
   *
   * @param value - the `data` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setData(value: PermissionRuleDataComponent[] | undefined): this {
    if (isDefinedList<PermissionRuleDataComponent>(value)) {
      const optErrMsg = `Invalid Permission.rule.data; Provided value array has an element that is not an instance of PermissionRuleDataComponent.`;
      assertFhirTypeList<PermissionRuleDataComponent>(value, PermissionRuleDataComponent, optErrMsg);
      this.data = value;
    } else {
      this.data = undefined;
    }
    return this;
  }

  /**
   * Add the provided PermissionRuleDataComponent value to the `data` array property.
   *
   * @param value - the `data` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addData(value: PermissionRuleDataComponent | undefined): this {
    if (isDefined<PermissionRuleDataComponent>(value)) {
      const optErrMsg = `Invalid Permission.rule.data; Provided element is not an instance of PermissionRuleDataComponent.`;
      assertFhirType<PermissionRuleDataComponent>(value, PermissionRuleDataComponent, optErrMsg);
      this.initData();
      this.data?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `data` property exists and has a value; `false` otherwise
   */
  public hasData(): boolean {
    return isDefinedList<PermissionRuleDataComponent>(this.data) && this.data.some((item: PermissionRuleDataComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `data` property
   */
  private initData(): void {
    if(!this.hasData()) {
      this.data = [] as PermissionRuleDataComponent[];
    }
  }

  /**
   * @returns the `activity` property value as a PermissionRuleActivityComponent array
   */
  public getActivity(): PermissionRuleActivityComponent[] {
    return this.activity ?? ([] as PermissionRuleActivityComponent[]);
  }

  /**
   * Assigns the provided PermissionRuleActivityComponent array value to the `activity` property.
   *
   * @param value - the `activity` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setActivity(value: PermissionRuleActivityComponent[] | undefined): this {
    if (isDefinedList<PermissionRuleActivityComponent>(value)) {
      const optErrMsg = `Invalid Permission.rule.activity; Provided value array has an element that is not an instance of PermissionRuleActivityComponent.`;
      assertFhirTypeList<PermissionRuleActivityComponent>(value, PermissionRuleActivityComponent, optErrMsg);
      this.activity = value;
    } else {
      this.activity = undefined;
    }
    return this;
  }

  /**
   * Add the provided PermissionRuleActivityComponent value to the `activity` array property.
   *
   * @param value - the `activity` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addActivity(value: PermissionRuleActivityComponent | undefined): this {
    if (isDefined<PermissionRuleActivityComponent>(value)) {
      const optErrMsg = `Invalid Permission.rule.activity; Provided element is not an instance of PermissionRuleActivityComponent.`;
      assertFhirType<PermissionRuleActivityComponent>(value, PermissionRuleActivityComponent, optErrMsg);
      this.initActivity();
      this.activity?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `activity` property exists and has a value; `false` otherwise
   */
  public hasActivity(): boolean {
    return isDefinedList<PermissionRuleActivityComponent>(this.activity) && this.activity.some((item: PermissionRuleActivityComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `activity` property
   */
  private initActivity(): void {
    if(!this.hasActivity()) {
      this.activity = [] as PermissionRuleActivityComponent[];
    }
  }

  /**
   * @returns the `limit` property value as a CodeableConcept array
   */
  public getLimit(): CodeableConcept[] {
    return this.limit ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `limit` property.
   *
   * @param value - the `limit` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setLimit(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Permission.rule.limit; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.limit = value;
    } else {
      this.limit = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `limit` array property.
   *
   * @param value - the `limit` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addLimit(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Permission.rule.limit; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initLimit();
      this.limit?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `limit` property exists and has a value; `false` otherwise
   */
  public hasLimit(): boolean {
    return isDefinedList<CodeableConcept>(this.limit) && this.limit.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `limit` property
   */
  private initLimit(): void {
    if(!this.hasLimit()) {
      this.limit = [] as CodeableConcept[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Permission.rule';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.type_,
      this.data,
      this.activity,
      this.limit,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): PermissionRuleComponent {
    const dest = new PermissionRuleComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: PermissionRuleComponent): void {
    super.copyValues(dest);
    dest.type_ = this.type_?.copy();
    const dataList = copyListValues<PermissionRuleDataComponent>(this.data);
    dest.data = dataList.length === 0 ? undefined : dataList;
    const activityList = copyListValues<PermissionRuleActivityComponent>(this.activity);
    dest.activity = activityList.length === 0 ? undefined : activityList;
    const limitList = copyListValues<CodeableConcept>(this.limit);
    dest.limit = limitList.length === 0 ? undefined : limitList;
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

    if (this.hasData()) {
      setFhirBackboneElementListJson(this.getData(), 'data', jsonObj);
    }

    if (this.hasActivity()) {
      setFhirBackboneElementListJson(this.getActivity(), 'activity', jsonObj);
    }

    if (this.hasLimit()) {
      setFhirComplexListJson(this.getLimit(), 'limit', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * PermissionRuleDataComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** The selection criteria to identify data that is within scope of this provision
 * - **Definition:** A description or definition of which activities are allowed to be done on the data.
 *
 * @category Data Models: Resource
 * @see [FHIR Permission](http://hl7.org/fhir/StructureDefinition/Permission)
 */
export class PermissionRuleDataComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `PermissionRuleDataComponent` JSON to instantiate the PermissionRuleDataComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `PermissionRuleDataComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to PermissionRuleDataComponent
   * @returns PermissionRuleDataComponent data model or undefined for `PermissionRuleDataComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): PermissionRuleDataComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'PermissionRuleDataComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new PermissionRuleDataComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    fieldName = 'resource';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: PermissionRuleDataResourceComponent | undefined = PermissionRuleDataResourceComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addResource(component);
          }
        });
      }
    }

    fieldName = 'security';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Coding | undefined = Coding.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addSecurity(datatype);
          }
        });
      }
    }

    fieldName = 'period';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Period | undefined = Period.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addPeriod(datatype);
          }
        });
      }
    }

    fieldName = 'expression';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Expression | undefined = Expression.parse(classJsonObj[fieldName]!, sourceField);
      instance.setExpression(datatype);
    }

    return instance;
  }

  /**
   * Permission.rule.data.resource Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Explicit FHIR Resource references
   * - **Definition:** Explicit FHIR Resource references.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private resource?: PermissionRuleDataResourceComponent[] | undefined;

  /**
   * Permission.rule.data.security Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Security tag code on .meta.security
   * - **Definition:** The data in scope are those with the given codes present in that data .meta.security element.
   * - **Comment:** Note the ConfidentialityCode vocabulary indicates the highest value, thus a security label of "R" then it applies to all resources that are labeled "R" or lower. E.g. for Confidentiality, it\'s a high water mark. For other kinds of security labels, subsumption logic applies. When the purpose of use tag is on the data, access request purpose of use shall not conflict.
   * - **FHIR Type:** `Coding`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private security?: Coding[] | undefined;

  /**
   * Permission.rule.data.period Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Timeframe encompasing data create/update
   * - **Definition:** Clinical or Operational Relevant period of time that bounds the data controlled by this rule.
   * - **Comment:** This has a different sense to the .validity.
   * - **FHIR Type:** `Period`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private period?: Period[] | undefined;

  /**
   * Permission.rule.data.expression Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Expression identifying the data
   * - **Definition:** Used when other data selection elements are insufficient.
   * - **FHIR Type:** `Expression`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private expression?: Expression | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `resource` property value as a PermissionRuleDataResourceComponent array
   */
  public getResource(): PermissionRuleDataResourceComponent[] {
    return this.resource ?? ([] as PermissionRuleDataResourceComponent[]);
  }

  /**
   * Assigns the provided PermissionRuleDataResourceComponent array value to the `resource` property.
   *
   * @param value - the `resource` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setResource(value: PermissionRuleDataResourceComponent[] | undefined): this {
    if (isDefinedList<PermissionRuleDataResourceComponent>(value)) {
      const optErrMsg = `Invalid Permission.rule.data.resource; Provided value array has an element that is not an instance of PermissionRuleDataResourceComponent.`;
      assertFhirTypeList<PermissionRuleDataResourceComponent>(value, PermissionRuleDataResourceComponent, optErrMsg);
      this.resource = value;
    } else {
      this.resource = undefined;
    }
    return this;
  }

  /**
   * Add the provided PermissionRuleDataResourceComponent value to the `resource` array property.
   *
   * @param value - the `resource` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addResource(value: PermissionRuleDataResourceComponent | undefined): this {
    if (isDefined<PermissionRuleDataResourceComponent>(value)) {
      const optErrMsg = `Invalid Permission.rule.data.resource; Provided element is not an instance of PermissionRuleDataResourceComponent.`;
      assertFhirType<PermissionRuleDataResourceComponent>(value, PermissionRuleDataResourceComponent, optErrMsg);
      this.initResource();
      this.resource?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `resource` property exists and has a value; `false` otherwise
   */
  public hasResource(): boolean {
    return isDefinedList<PermissionRuleDataResourceComponent>(this.resource) && this.resource.some((item: PermissionRuleDataResourceComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `resource` property
   */
  private initResource(): void {
    if(!this.hasResource()) {
      this.resource = [] as PermissionRuleDataResourceComponent[];
    }
  }

  /**
   * @returns the `security` property value as a Coding array
   */
  public getSecurity(): Coding[] {
    return this.security ?? ([] as Coding[]);
  }

  /**
   * Assigns the provided Coding array value to the `security` property.
   *
   * @param value - the `security` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSecurity(value: Coding[] | undefined): this {
    if (isDefinedList<Coding>(value)) {
      const optErrMsg = `Invalid Permission.rule.data.security; Provided value array has an element that is not an instance of Coding.`;
      assertFhirTypeList<Coding>(value, Coding, optErrMsg);
      this.security = value;
    } else {
      this.security = undefined;
    }
    return this;
  }

  /**
   * Add the provided Coding value to the `security` array property.
   *
   * @param value - the `security` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addSecurity(value: Coding | undefined): this {
    if (isDefined<Coding>(value)) {
      const optErrMsg = `Invalid Permission.rule.data.security; Provided element is not an instance of Coding.`;
      assertFhirType<Coding>(value, Coding, optErrMsg);
      this.initSecurity();
      this.security?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `security` property exists and has a value; `false` otherwise
   */
  public hasSecurity(): boolean {
    return isDefinedList<Coding>(this.security) && this.security.some((item: Coding) => !item.isEmpty());
  }

  /**
   * Initialize the `security` property
   */
  private initSecurity(): void {
    if(!this.hasSecurity()) {
      this.security = [] as Coding[];
    }
  }

  /**
   * @returns the `period` property value as a Period array
   */
  public getPeriod(): Period[] {
    return this.period ?? ([] as Period[]);
  }

  /**
   * Assigns the provided Period array value to the `period` property.
   *
   * @param value - the `period` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPeriod(value: Period[] | undefined): this {
    if (isDefinedList<Period>(value)) {
      const optErrMsg = `Invalid Permission.rule.data.period; Provided value array has an element that is not an instance of Period.`;
      assertFhirTypeList<Period>(value, Period, optErrMsg);
      this.period = value;
    } else {
      this.period = undefined;
    }
    return this;
  }

  /**
   * Add the provided Period value to the `period` array property.
   *
   * @param value - the `period` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addPeriod(value: Period | undefined): this {
    if (isDefined<Period>(value)) {
      const optErrMsg = `Invalid Permission.rule.data.period; Provided element is not an instance of Period.`;
      assertFhirType<Period>(value, Period, optErrMsg);
      this.initPeriod();
      this.period?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `period` property exists and has a value; `false` otherwise
   */
  public hasPeriod(): boolean {
    return isDefinedList<Period>(this.period) && this.period.some((item: Period) => !item.isEmpty());
  }

  /**
   * Initialize the `period` property
   */
  private initPeriod(): void {
    if(!this.hasPeriod()) {
      this.period = [] as Period[];
    }
  }

  /**
   * @returns the `expression` property value as a Expression object if defined; else an empty Expression object
   */
  public getExpression(): Expression {
    return this.expression ?? new Expression();
  }

  /**
   * Assigns the provided Expression object value to the `expression` property.
   *
   * @param value - the `expression` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setExpression(value: Expression | undefined): this {
    if (isDefined<Expression>(value)) {
      const optErrMsg = `Invalid Permission.rule.data.expression; Provided element is not an instance of Expression.`;
      assertFhirType<Expression>(value, Expression, optErrMsg);
      this.expression = value;
    } else {
      this.expression = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `expression` property exists and has a value; `false` otherwise
   */
  public hasExpression(): boolean {
    return isDefined<Expression>(this.expression) && !this.expression.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Permission.rule.data';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.resource,
      this.security,
      this.period,
      this.expression,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): PermissionRuleDataComponent {
    const dest = new PermissionRuleDataComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: PermissionRuleDataComponent): void {
    super.copyValues(dest);
    const resourceList = copyListValues<PermissionRuleDataResourceComponent>(this.resource);
    dest.resource = resourceList.length === 0 ? undefined : resourceList;
    const securityList = copyListValues<Coding>(this.security);
    dest.security = securityList.length === 0 ? undefined : securityList;
    const periodList = copyListValues<Period>(this.period);
    dest.period = periodList.length === 0 ? undefined : periodList;
    dest.expression = this.expression?.copy();
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

    if (this.hasResource()) {
      setFhirBackboneElementListJson(this.getResource(), 'resource', jsonObj);
    }

    if (this.hasSecurity()) {
      setFhirComplexListJson(this.getSecurity(), 'security', jsonObj);
    }

    if (this.hasPeriod()) {
      setFhirComplexListJson(this.getPeriod(), 'period', jsonObj);
    }

    if (this.hasExpression()) {
      setFhirComplexJson(this.getExpression(), 'expression', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * PermissionRuleDataResourceComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Explicit FHIR Resource references
 * - **Definition:** Explicit FHIR Resource references.
 *
 * @category Data Models: Resource
 * @see [FHIR Permission](http://hl7.org/fhir/StructureDefinition/Permission)
 */
export class PermissionRuleDataResourceComponent extends BackboneElement implements IBackboneElement {
  constructor(meaning: EnumCodeType | CodeType | fhirCode | null = null, reference: Reference | null = null) {
    super();

    this.consentDataMeaningEnum = new ConsentDataMeaningEnum();

    this.meaning = constructorCodeValueAsEnumCodeType<ConsentDataMeaningEnum>(
      meaning,
      ConsentDataMeaningEnum,
      this.consentDataMeaningEnum,
      'Permission.rule.data.resource.meaning',
    );

    this.reference = null;
    if (isDefined<Reference>(reference)) {
      this.setReference(reference);
    }
  }

  /**
   * Parse the provided `PermissionRuleDataResourceComponent` JSON to instantiate the PermissionRuleDataResourceComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `PermissionRuleDataResourceComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to PermissionRuleDataResourceComponent
   * @returns PermissionRuleDataResourceComponent data model or undefined for `PermissionRuleDataResourceComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): PermissionRuleDataResourceComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'PermissionRuleDataResourceComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new PermissionRuleDataResourceComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    fieldName = 'meaning';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setMeaning(null);
      } else {
        instance.setMeaningElement(datatype);
      }
    } else {
      instance.setMeaning(null);
    }

    fieldName = 'reference';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setReference(null);
      } else {
        instance.setReference(datatype);
      }
    } else {
      instance.setReference(null);
    }

    return instance;
  }

  /**
   * FHIR CodeSystem: ConsentDataMeaning
   *
   * @see {@link ConsentDataMeaningEnum }
   */
  private readonly consentDataMeaningEnum: ConsentDataMeaningEnum;

  /**
   * Permission.rule.data.resource.meaning Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** instance | related | dependents | authoredby
   * - **Definition:** How the resource reference is interpreted when testing consent restrictions.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link ConsentDataMeaningEnum }
   */
  private meaning: EnumCodeType | null;

  /**
   * Permission.rule.data.resource.reference Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The actual data reference
   * - **Definition:** A reference to a specific resource that defines which resources are covered by this consent.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Resource',
   *     ]
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private reference: Reference | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `meaning` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link ConsentDataMeaningEnum }
   */
  public getMeaningEnumType(): EnumCodeType | null {
    return this.meaning;
  }

  /**
   * Assigns the provided EnumCodeType value to the `meaning` property.
   *
   * @param enumType - the `meaning` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link ConsentDataMeaningEnum }
   */
  public setMeaningEnumType(enumType: EnumCodeType | undefined | null): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid Permission.rule.data.resource.meaning`;
      assertEnumCodeType<ConsentDataMeaningEnum>(enumType, ConsentDataMeaningEnum, errMsgPrefix);
      this.meaning = enumType;
    } else {
      this.meaning = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `meaning` property exists and has a value; `false` otherwise
   */
  public hasMeaningEnumType(): boolean {
    return isDefined<EnumCodeType>(this.meaning) && !this.meaning.isEmpty() && this.meaning.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `meaning` property value as a CodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link ConsentDataMeaningEnum }
   */
  public getMeaningElement(): CodeType | null {
    if (this.meaning === null) {
      return null;
    }
    return this.meaning as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `meaning` property.
   *
   * @param element - the `meaning` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link ConsentDataMeaningEnum }
   */
  public setMeaningElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid Permission.rule.data.resource.meaning; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.meaning = new EnumCodeType(element, this.consentDataMeaningEnum);
    } else {
      this.meaning = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `meaning` property exists and has a value; `false` otherwise
   */
  public hasMeaningElement(): boolean {
    return this.hasMeaningEnumType();
  }

  /**
   * @returns the `meaning` property value as a fhirCode if defined; else null
   *
   * @see CodeSystem Enumeration: {@link ConsentDataMeaningEnum }
   */
  public getMeaning(): fhirCode | null {
    if (this.meaning === null) {
      return null;
    }
    return this.meaning.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `meaning` property.
   *
   * @param value - the `meaning` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link ConsentDataMeaningEnum }
   */
  public setMeaning(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid Permission.rule.data.resource.meaning (${String(value)})`;
      this.meaning = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.consentDataMeaningEnum);
    } else {
      this.meaning = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `meaning` property exists and has a value; `false` otherwise
   */
  public hasMeaning(): boolean {
    return this.hasMeaningEnumType();
  }

  /**
   * @returns the `reference` property value as a Reference object if defined; else an empty Reference object
   */
  public getReference(): Reference {
    return this.reference ?? new Reference();
  }

  /**
   * Assigns the provided Reference object value to the `reference` property.
   *
   * @decorator `@ReferenceTargets('Permission.rule.data.resource.reference', ['Resource',])`
   *
   * @param value - the `reference` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Permission.rule.data.resource.reference', [
    'Resource',
  ])
  public setReference(value: Reference | undefined | null): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.reference = value;
    } else {
      this.reference = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `reference` property exists and has a value; `false` otherwise
   */
  public hasReference(): boolean {
    return isDefined<Reference>(this.reference) && !this.reference.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Permission.rule.data.resource';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.meaning,
      this.reference,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.meaning, this.reference, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): PermissionRuleDataResourceComponent {
    const dest = new PermissionRuleDataResourceComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: PermissionRuleDataResourceComponent): void {
    super.copyValues(dest);
    dest.meaning = this.meaning ? this.meaning.copy() : null;
    dest.reference = this.reference ? this.reference.copy() : null;
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

    if (this.hasMeaningElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getMeaningElement()!, 'meaning', jsonObj);
    }

    if (this.hasReference()) {
      setFhirComplexJson(this.getReference(), 'reference', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * PermissionRuleActivityComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** A description or definition of which activities are allowed to be done on the data
 * - **Definition:** A description or definition of which activities are allowed to be done on the data.
 *
 * @category Data Models: Resource
 * @see [FHIR Permission](http://hl7.org/fhir/StructureDefinition/Permission)
 */
export class PermissionRuleActivityComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `PermissionRuleActivityComponent` JSON to instantiate the PermissionRuleActivityComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `PermissionRuleActivityComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to PermissionRuleActivityComponent
   * @returns PermissionRuleActivityComponent data model or undefined for `PermissionRuleActivityComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): PermissionRuleActivityComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'PermissionRuleActivityComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new PermissionRuleActivityComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    fieldName = 'actor';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addActor(datatype);
          }
        });
      }
  }

    fieldName = 'action';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addAction(datatype);
          }
        });
      }
    }

    fieldName = 'purpose';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addPurpose(datatype);
          }
        });
      }
    }

    return instance;
  }

  /**
   * Permission.rule.activity.actor Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Authorized actor(s)
   * - **Definition:** The actor(s) authorized for the defined activity.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Device',
   *       'http://hl7.org/fhir/StructureDefinition/Group',
   *       'http://hl7.org/fhir/StructureDefinition/CareTeam',
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/RelatedPerson',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private actor?: Reference[] | undefined;

  /**
   * Permission.rule.activity.action Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Actions controlled by this rule
   * - **Definition:** Actions controlled by this Rule.
   * - **Comment:** Note that this is the direct action (not the grounds for the action covered in the purpose element). At present, the only action in the understood and tested scope of this resource is \'read\'.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private action?: CodeableConcept[] | undefined;

  /**
   * Permission.rule.activity.purpose Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The purpose for which the permission is given
   * - **Definition:** The purpose for which the permission is given.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private purpose?: CodeableConcept[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `actor` property value as a Reference array
   */
  public getActor(): Reference[] {
    return this.actor ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `actor` property.
   *
   * @decorator `@ReferenceTargets('Permission.rule.activity.actor', ['Device','Group','CareTeam','Organization','Patient','Practitioner','RelatedPerson','PractitionerRole',])`
   *
   * @param value - the `actor` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Permission.rule.activity.actor', [
    'Device',
  
    'Group',
  
    'CareTeam',
  
    'Organization',
  
    'Patient',
  
    'Practitioner',
  
    'RelatedPerson',
  
    'PractitionerRole',
  ])
  public setActor(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.actor = value;
    } else {
      this.actor = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `actor` array property.
   *
   * @decorator `@ReferenceTargets('Permission.rule.activity.actor', ['Device','Group','CareTeam','Organization','Patient','Practitioner','RelatedPerson','PractitionerRole',])`
   *
   * @param value - the `actor` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Permission.rule.activity.actor', [
    'Device',
  
    'Group',
  
    'CareTeam',
  
    'Organization',
  
    'Patient',
  
    'Practitioner',
  
    'RelatedPerson',
  
    'PractitionerRole',
  ])
  public addActor(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initActor();
      this.actor?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `actor` property exists and has a value; `false` otherwise
   */
  public hasActor(): boolean {
    return isDefinedList<Reference>(this.actor) && this.actor.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `actor` property
   */
  private initActor(): void {
    if (!this.hasActor()) {
      this.actor = [] as Reference[];
    }
  }

  /**
   * @returns the `action` property value as a CodeableConcept array
   */
  public getAction(): CodeableConcept[] {
    return this.action ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `action` property.
   *
   * @param value - the `action` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAction(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Permission.rule.activity.action; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.action = value;
    } else {
      this.action = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `action` array property.
   *
   * @param value - the `action` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addAction(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Permission.rule.activity.action; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initAction();
      this.action?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `action` property exists and has a value; `false` otherwise
   */
  public hasAction(): boolean {
    return isDefinedList<CodeableConcept>(this.action) && this.action.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `action` property
   */
  private initAction(): void {
    if(!this.hasAction()) {
      this.action = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `purpose` property value as a CodeableConcept array
   */
  public getPurpose(): CodeableConcept[] {
    return this.purpose ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `purpose` property.
   *
   * @param value - the `purpose` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPurpose(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Permission.rule.activity.purpose; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.purpose = value;
    } else {
      this.purpose = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `purpose` array property.
   *
   * @param value - the `purpose` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addPurpose(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Permission.rule.activity.purpose; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initPurpose();
      this.purpose?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `purpose` property exists and has a value; `false` otherwise
   */
  public hasPurpose(): boolean {
    return isDefinedList<CodeableConcept>(this.purpose) && this.purpose.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `purpose` property
   */
  private initPurpose(): void {
    if(!this.hasPurpose()) {
      this.purpose = [] as CodeableConcept[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Permission.rule.activity';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.actor,
      this.action,
      this.purpose,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): PermissionRuleActivityComponent {
    const dest = new PermissionRuleActivityComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: PermissionRuleActivityComponent): void {
    super.copyValues(dest);
    const actorList = copyListValues<Reference>(this.actor);
    dest.actor = actorList.length === 0 ? undefined : actorList;
    const actionList = copyListValues<CodeableConcept>(this.action);
    dest.action = actionList.length === 0 ? undefined : actionList;
    const purposeList = copyListValues<CodeableConcept>(this.purpose);
    dest.purpose = purposeList.length === 0 ? undefined : purposeList;
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

    if (this.hasActor()) {
      setFhirComplexListJson(this.getActor(), 'actor', jsonObj);
    }

    if (this.hasAction()) {
      setFhirComplexListJson(this.getAction(), 'action', jsonObj);
    }

    if (this.hasPurpose()) {
      setFhirComplexListJson(this.getPurpose(), 'purpose', jsonObj);
    }

    return jsonObj;
  }
}
