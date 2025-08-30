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
 * Medication Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/Medication
 * StructureDefinition.name: Medication
 * StructureDefinition.description: This resource is primarily used for the identification and definition of a medication, including ingredients, for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use.
 * StructureDefinition.fhirVersion: 5.0.0
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
  InvalidTypeError,
  JSON,
  ReferenceTargets,
  StringType,
  assertEnumCodeType,
  assertFhirType,
  assertFhirTypeList,
  assertIsDefined,
  copyListValues,
  fhirBoolean,
  fhirBooleanSchema,
  fhirCode,
  fhirCodeSchema,
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
  setFhirBackboneElementJson,
  setFhirBackboneElementListJson,
  setFhirComplexJson,
  setFhirComplexListJson,
  setFhirPrimitiveJson,
  setPolymorphicValueJson,
} from '@paq-ts-fhir/fhir-core';
import { CodeableConcept, CodeableReference, Identifier, PARSABLE_DATATYPE_MAP, Quantity, Ratio, Reference } from '../complex-types/complex-datatypes';
import { MedicationStatusEnum } from '../code-systems/MedicationStatusEnum';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Symbol.metadata polyfill secret sauce for decorator metadata
(Symbol.metadata as any) ??= Symbol('Symbol.metadata');

/**
 * Medication Class
 *
 * @remarks
 * This resource is primarily used for the identification and definition of a medication, including ingredients, for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use.
 *
 * **FHIR Specification**
 * - **Short:** Definition of a Medication
 * - **Definition:** This resource is primarily used for the identification and definition of a medication, including ingredients, for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use.
 * - **FHIR Version:** 5.0.0
 *
 * @category Data Models: Resource
 * @see [FHIR Medication](http://hl7.org/fhir/StructureDefinition/Medication)
 */
export class Medication extends DomainResource implements IDomainResource {
  constructor() {
    super();

    this.medicationStatusEnum = new MedicationStatusEnum();
  }

  /**
   * Parse the provided `Medication` JSON to instantiate the Medication data model.
   *
   * @param sourceJson - JSON representing FHIR `Medication`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to Medication
   * @returns Medication data model or undefined for `Medication`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): Medication | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'Medication';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new Medication();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'Medication');
    fhirParser.processDomainResourceJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

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

    fieldName = 'code';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setCode(datatype);
    }

    fieldName = 'status';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setStatusElement(datatype);
    }

    fieldName = 'marketingAuthorizationHolder';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setMarketingAuthorizationHolder(datatype);
    }

    fieldName = 'doseForm';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setDoseForm(datatype);
    }

    fieldName = 'totalVolume';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Quantity | undefined = Quantity.parse(classJsonObj[fieldName]!, sourceField);
      instance.setTotalVolume(datatype);
    }

    fieldName = 'ingredient';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: MedicationIngredientComponent | undefined = MedicationIngredientComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addIngredient(component);
        }
      });
    }

    fieldName = 'batch';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: MedicationBatchComponent | undefined = MedicationBatchComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setBatch(component);
    }

    fieldName = 'definition';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setDefinition(datatype);
    }

    return instance;
  }

  /**
   * Medication.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Business identifier for this medication
   * - **Definition:** Business identifier for this medication.
   * - **Comment:** The serial number could be included as an identifier.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier[] | undefined;

  /**
   * Medication.code Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Codes that identify this medication
   * - **Definition:** A code (or set of codes) that specify this medication, or a textual description if no code is available. Usage note: This could be a standard medication code such as a code from RxNorm, SNOMED CT, IDMP etc. It could also be a national or local formulary code, optionally with translations to other code systems.
   * - **Comment:** Depending on the context of use, the code that was actually selected by the user (prescriber, dispenser, etc.) will have the coding.userSelected set to true.  As described in the coding datatype: "A coding may be marked as a "userSelected" if a user selected the particular coded value in a user interface (e.g. the user selects an item in a pick-list). If a user selected coding exists, it is the preferred choice for performing translations etc. Other codes can only be literal translations to alternative code systems, or codes at a lower level of granularity (e.g. a generic code for a vendor-specific primary one).
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private code?: CodeableConcept | undefined;

  /**
   * FHIR CodeSystem: MedicationStatus
   *
   * @see {@link MedicationStatusEnum }
   */
  private readonly medicationStatusEnum: MedicationStatusEnum;

  /**
   * Medication.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** active | inactive | entered-in-error
   * - **Definition:** A code to indicate if the medication is in active use.
   * - **Comment:** This status is intended to identify if the medication in a local system is in active use within a drug database or inventory.  For example, a pharmacy system may create a new drug file record for a compounded product "ABC Hospital Special Cream" with an active status.  At some point in the future, it may be determined that the drug record was created with an error and the status is changed to "entered in error".   This status is not intended to specify if a medication is part of a particular formulary.  It is possible that the drug record may be referenced by multiple formularies or catalogues and each of those entries would have a separate status.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** true
   * - **isModifierReason:** This element changes the interpretation of all descriptive attributes.
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link MedicationStatusEnum }
   */
  private status?: EnumCodeType | undefined;

  /**
   * Medication.marketingAuthorizationHolder Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Organization that has authorization to market medication
   * - **Definition:** The company or other legal entity that has authorization, from the appropriate drug regulatory authority,  to market a medicine in one or more jurisdictions.  Typically abbreviated MAH.Note:  The MAH may manufacture the product and may also contract the manufacturing of the product to one or more companies (organizations).
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private marketingAuthorizationHolder?: Reference | undefined;

  /**
   * Medication.doseForm Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** powder | tablets | capsule +
   * - **Definition:** Describes the form of the item.  Powder; tablets; capsule.
   * - **Comment:** When Medication is referenced from MedicationRequest, this is the ordered form.  When Medication is referenced within MedicationDispense, this is the dispensed form.  When Medication is referenced within MedicationAdministration, this is administered form.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private doseForm?: CodeableConcept | undefined;

  /**
   * Medication.totalVolume Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When the specified product code does not infer a package size, this is the specific amount of drug in the product
   * - **Definition:** When the specified product code does not infer a package size, this is the specific amount of drug in the product.  For example, when specifying a product that has the same strength (For example, Insulin glargine 100 unit per mL solution for injection), this attribute provides additional clarification of the package amount (For example, 3 mL, 10mL, etc.).
   * - **FHIR Type:** `Quantity`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private totalVolume?: Quantity | undefined;

  /**
   * Medication.ingredient Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Active or inactive ingredient
   * - **Definition:** Identifies a particular constituent of interest in the product.
   * - **Comment:** The ingredients need not be a complete list.  If an ingredient is not specified, this does not indicate whether an ingredient is present or absent.  If an ingredient is specified it does not mean that all ingredients are specified.  It is possible to specify both inactive and active ingredients.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private ingredient?: MedicationIngredientComponent[] | undefined;

  /**
   * Medication.batch Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Details about packaged medications
   * - **Definition:** Information that only applies to packages (not products).
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private batch?: MedicationBatchComponent | undefined;

  /**
   * Medication.definition Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Knowledge about this medication
   * - **Definition:** A reference to a knowledge resource that provides more information about this medication.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/MedicationKnowledge',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private definition?: Reference | undefined;

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
      const optErrMsg = `Invalid Medication.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid Medication.identifier; Provided element is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid Medication.code; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `status` property value as a EnumCodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link MedicationStatusEnum }
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
   * @see CodeSystem Enumeration: {@link MedicationStatusEnum }
   */
  public setStatusEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = 'Invalid Medication.status';
      assertEnumCodeType<MedicationStatusEnum>(enumType, MedicationStatusEnum, errMsgPrefix);
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
   * @see CodeSystem Enumeration: {@link MedicationStatusEnum }
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
   * @see CodeSystem Enumeration: {@link MedicationStatusEnum }
   */
  public setStatusElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid Medication.status; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.status = new EnumCodeType(element, this.medicationStatusEnum);
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
   * @see CodeSystem Enumeration: {@link MedicationStatusEnum }
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
   * @see CodeSystem Enumeration: {@link MedicationStatusEnum }
   */
  public setStatus(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid Medication.status; Provided value is not an instance of fhirCode.`;
      this.status = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.medicationStatusEnum);
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
   * @returns the `marketingAuthorizationHolder` property value as a Reference object; else an empty Reference object
   */
  public getMarketingAuthorizationHolder(): Reference {
    return this.marketingAuthorizationHolder ?? new Reference();
  }

  /**
   * Assigns the provided MarketingAuthorizationHolder object value to the `marketingAuthorizationHolder` property.
   *
   * @decorator `@ReferenceTargets('Medication.marketingAuthorizationHolder', ['Organization',])`
   *
   * @param value - the `marketingAuthorizationHolder` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Medication.marketingAuthorizationHolder', [
    'Organization',
  ])
  public setMarketingAuthorizationHolder(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.marketingAuthorizationHolder = value;
    } else {
      this.marketingAuthorizationHolder = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `marketingAuthorizationHolder` property exists and has a value; `false` otherwise
   */
  public hasMarketingAuthorizationHolder(): boolean {
    return isDefined<Reference>(this.marketingAuthorizationHolder) && !this.marketingAuthorizationHolder.isEmpty();
  }

  /**
   * @returns the `doseForm` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getDoseForm(): CodeableConcept {
    return this.doseForm ?? new CodeableConcept();
  }

  /**
   * Assigns the provided DoseForm object value to the `doseForm` property.
   *
   * @param value - the `doseForm` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDoseForm(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Medication.doseForm; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.doseForm = value;
    } else {
      this.doseForm = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `doseForm` property exists and has a value; `false` otherwise
   */
  public hasDoseForm(): boolean {
    return isDefined<CodeableConcept>(this.doseForm) && !this.doseForm.isEmpty();
  }

  /**
   * @returns the `totalVolume` property value as a Quantity object if defined; else an empty Quantity object
   */
  public getTotalVolume(): Quantity {
    return this.totalVolume ?? new Quantity();
  }

  /**
   * Assigns the provided TotalVolume object value to the `totalVolume` property.
   *
   * @param value - the `totalVolume` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setTotalVolume(value: Quantity | undefined): this {
    if (isDefined<Quantity>(value)) {
      const optErrMsg = `Invalid Medication.totalVolume; Provided element is not an instance of Quantity.`;
      assertFhirType<Quantity>(value, Quantity, optErrMsg);
      this.totalVolume = value;
    } else {
      this.totalVolume = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `totalVolume` property exists and has a value; `false` otherwise
   */
  public hasTotalVolume(): boolean {
    return isDefined<Quantity>(this.totalVolume) && !this.totalVolume.isEmpty();
  }

  /**
   * @returns the `ingredient` property value as a MedicationIngredientComponent array
   */
  public getIngredient(): MedicationIngredientComponent[] {
    return this.ingredient ?? ([] as MedicationIngredientComponent[]);
  }

  /**
   * Assigns the provided MedicationIngredientComponent array value to the `ingredient` property.
   *
   * @param value - the `ingredient` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setIngredient(value: MedicationIngredientComponent[] | undefined): this {
    if (isDefinedList<MedicationIngredientComponent>(value)) {
      const optErrMsg = `Invalid Medication.ingredient; Provided value array has an element that is not an instance of MedicationIngredientComponent.`;
      assertFhirTypeList<MedicationIngredientComponent>(value, MedicationIngredientComponent, optErrMsg);
      this.ingredient = value;
    } else {
      this.ingredient = undefined;
    }
    return this;
  }

  /**
   * Add the provided MedicationIngredientComponent value to the `ingredient` array property.
   *
   * @param value - the `ingredient` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addIngredient(value: MedicationIngredientComponent | undefined): this {
    if (isDefined<MedicationIngredientComponent>(value)) {
      const optErrMsg = `Invalid Medication.ingredient; Provided element is not an instance of MedicationIngredientComponent.`;
      assertFhirType<MedicationIngredientComponent>(value, MedicationIngredientComponent, optErrMsg);
      this.initIngredient();
      this.ingredient?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `ingredient` property exists and has a value; `false` otherwise
   */
  public hasIngredient(): boolean {
    return isDefinedList<MedicationIngredientComponent>(this.ingredient) && this.ingredient.some((item: MedicationIngredientComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `ingredient` property
   */
  private initIngredient(): void {
    if(!this.hasIngredient()) {
      this.ingredient = [] as MedicationIngredientComponent[];
    }
  }

  /**
   * @returns the `batch` property value as a MedicationBatchComponent object if defined; else an empty MedicationBatchComponent object
   */
  public getBatch(): MedicationBatchComponent {
    return this.batch ?? new MedicationBatchComponent();
  }

  /**
   * Assigns the provided Batch object value to the `batch` property.
   *
   * @param value - the `batch` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setBatch(value: MedicationBatchComponent | undefined): this {
    if (isDefined<MedicationBatchComponent>(value)) {
      const optErrMsg = `Invalid Medication.batch; Provided element is not an instance of MedicationBatchComponent.`;
      assertFhirType<MedicationBatchComponent>(value, MedicationBatchComponent, optErrMsg);
      this.batch = value;
    } else {
      this.batch = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `batch` property exists and has a value; `false` otherwise
   */
  public hasBatch(): boolean {
    return isDefined<MedicationBatchComponent>(this.batch) && !this.batch.isEmpty();
  }

  /**
   * @returns the `definition` property value as a Reference object; else an empty Reference object
   */
  public getDefinition(): Reference {
    return this.definition ?? new Reference();
  }

  /**
   * Assigns the provided Definition object value to the `definition` property.
   *
   * @decorator `@ReferenceTargets('Medication.definition', ['MedicationKnowledge',])`
   *
   * @param value - the `definition` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Medication.definition', [
    'MedicationKnowledge',
  ])
  public setDefinition(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.definition = value;
    } else {
      this.definition = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `definition` property exists and has a value; `false` otherwise
   */
  public hasDefinition(): boolean {
    return isDefined<Reference>(this.definition) && !this.definition.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Medication';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identifier,
      this.code,
      this.status,
      this.marketingAuthorizationHolder,
      this.doseForm,
      this.totalVolume,
      this.ingredient,
      this.batch,
      this.definition,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): Medication {
    const dest = new Medication();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: Medication): void {
    super.copyValues(dest);
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    dest.code = this.code?.copy();
    dest.status = this.status?.copy();
    dest.marketingAuthorizationHolder = this.marketingAuthorizationHolder?.copy();
    dest.doseForm = this.doseForm?.copy();
    dest.totalVolume = this.totalVolume?.copy();
    const ingredientList = copyListValues<MedicationIngredientComponent>(this.ingredient);
    dest.ingredient = ingredientList.length === 0 ? undefined : ingredientList;
    dest.batch = this.batch?.copy();
    dest.definition = this.definition?.copy();
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

    if (this.hasCode()) {
      setFhirComplexJson(this.getCode(), 'code', jsonObj);
    }

    if (this.hasStatusElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getStatusElement()!, 'status', jsonObj);
    }

    if (this.hasMarketingAuthorizationHolder()) {
      setFhirComplexJson(this.getMarketingAuthorizationHolder(), 'marketingAuthorizationHolder', jsonObj);
    }

    if (this.hasDoseForm()) {
      setFhirComplexJson(this.getDoseForm(), 'doseForm', jsonObj);
    }

    if (this.hasTotalVolume()) {
      setFhirComplexJson(this.getTotalVolume(), 'totalVolume', jsonObj);
    }

    if (this.hasIngredient()) {
      setFhirBackboneElementListJson(this.getIngredient(), 'ingredient', jsonObj);
    }

    if (this.hasBatch()) {
      setFhirBackboneElementJson(this.getBatch(), 'batch', jsonObj);
    }

    if (this.hasDefinition()) {
      setFhirComplexJson(this.getDefinition(), 'definition', jsonObj);
    }

    return jsonObj;
  }
}

/**
 * MedicationIngredientComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Active or inactive ingredient
 * - **Definition:** Identifies a particular constituent of interest in the product.
 * - **Comment:** The ingredients need not be a complete list.  If an ingredient is not specified, this does not indicate whether an ingredient is present or absent.  If an ingredient is specified it does not mean that all ingredients are specified.  It is possible to specify both inactive and active ingredients.
 *
 * @category Data Models: Resource
 * @see [FHIR Medication](http://hl7.org/fhir/StructureDefinition/Medication)
 */
export class MedicationIngredientComponent extends BackboneElement implements IBackboneElement {
  constructor(item: CodeableReference | null = null) {
    super();

    this.item = null;
    if (isDefined<CodeableReference>(item)) {
      this.setItem(item);
    }
  }

  /**
   * Parse the provided `MedicationIngredientComponent` JSON to instantiate the MedicationIngredientComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `MedicationIngredientComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to MedicationIngredientComponent
   * @returns MedicationIngredientComponent data model or undefined for `MedicationIngredientComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): MedicationIngredientComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'MedicationIngredientComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new MedicationIngredientComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    const classMetadata: DecoratorMetadataObject | null = MedicationIngredientComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for MedicationIngredientComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    fieldName = 'item';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableReference | undefined = CodeableReference.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setItem(null);
      } else {
        instance.setItem(datatype);
      }
    } else {
      instance.setItem(null);
    }

    fieldName = 'isActive';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setIsActiveElement(datatype);
    }

    fieldName = 'strength[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const strength: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setStrength(strength);

    return instance;
  }

  /**
   * Medication.ingredient.item Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The ingredient (substance or medication) that the ingredient.strength relates to
   * - **Definition:** The ingredient (substance or medication) that the ingredient.strength relates to.  This is represented as a concept from a code system or described in another resource (Substance or Medication).
   * - **Requirements:** The ingredient may reference a substance (for example, amoxicillin) or another medication (for example in the case of a compounded product, Glaxal Base).
   * - **FHIR Type:** `CodeableReference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Substance',
   *       'http://hl7.org/fhir/StructureDefinition/Medication',
   *     ]
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private item: CodeableReference | null;

  /**
   * Medication.ingredient.isActive Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Active ingredient indicator
   * - **Definition:** Indication of whether this ingredient affects the therapeutic action of the drug.
   * - **Requirements:** True indicates that the ingredient affects the therapeutic action of the drug (i.e. active).  False indicates that the ingredient does not affect the therapeutic action of the drug (i.e. inactive).
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private isActive?: BooleanType | undefined;

  /**
   * Medication.ingredient.strength[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('Medication.ingredient.strength[x]', ['Ratio','CodeableConcept','Quantity',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Quantity of ingredient present
   * - **Definition:** Specifies how many (or how much) of the items there are in this Medication.  For example, 250 mg per tablet.  This is expressed as a ratio where the numerator is 250mg and the denominator is 1 tablet but can also be expressed a quantity when the denominator is assumed to be 1 tablet.
   * - **FHIR Types:**
   *     'Ratio',
   *     'CodeableConcept',
   *     'Quantity',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('Medication.ingredient.strength[x]',[
    'Ratio',
    'CodeableConcept',
    'Quantity',
  ])
  private strength?: IDataType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `item` property value as a CodeableReference object if defined; else an empty CodeableReference object
   */
  public getItem(): CodeableReference {
    return this.item ?? new CodeableReference();
  }

  /**
   * Assigns the provided CodeableReference object value to the `item` property.
   *
   * @param value - the `item` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setItem(value: CodeableReference | undefined | null): this {
    if (isDefined<CodeableReference>(value)) {
      const optErrMsg = `Invalid Medication.ingredient.item; Provided element is not an instance of CodeableReference.`;
      assertFhirType<CodeableReference>(value, CodeableReference, optErrMsg);
      this.item = value;
    } else {
      this.item = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `item` property exists and has a value; `false` otherwise
   */
  public hasItem(): boolean {
    return isDefined<CodeableReference>(this.item) && !this.item.isEmpty();
  }

  /**
   * @returns the `isActive` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getIsActiveElement(): BooleanType {
    return this.isActive ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `isActive` property.
   *
   * @param element - the `isActive` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setIsActiveElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid Medication.ingredient.isActive; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.isActive = element;
    } else {
      this.isActive = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `isActive` property exists and has a value; `false` otherwise
   */
  public hasIsActiveElement(): boolean {
    return isDefined<BooleanType>(this.isActive) && !this.isActive.isEmpty();
  }

  /**
   * @returns the `isActive` property value as a fhirBoolean if defined; else undefined
   */
  public getIsActive(): fhirBoolean | undefined {
    return this.isActive?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `isActive` property.
   *
   * @param value - the `isActive` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setIsActive(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid Medication.ingredient.isActive (${String(value)})`;
      this.isActive = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.isActive = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `isActive` property exists and has a value; `false` otherwise
   */
  public hasIsActive(): boolean {
    return this.hasIsActiveElement();
  }

  /**
   * @returns the `strength` property value as a DataType object if defined; else undefined
   */
  public getStrength(): IDataType | undefined {
    return this.strength;
  }

  /**
   * Assigns the provided DataType object value to the `strength` property.
   *
   * @decorator `@ChoiceDataTypes('Medication.ingredient.strength[x]')`
   *
   * @param value - the `strength` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('Medication.ingredient.strength[x]')
  public setStrength(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.strength = value;
    } else {
      this.strength = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `strength` property exists and has a value; `false` otherwise
   */
  public hasStrength(): boolean {
    return isDefined<IDataType>(this.strength) && !this.strength.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `strength` property value as a Ratio object if defined; else undefined
   */
  public getStrengthRatio(): Ratio | undefined {
    if (!isDefined<IDataType | undefined>(this.strength)) {
      return undefined;
    }
    if (!(this.strength instanceof Ratio)) {
      throw new InvalidTypeError(
        `DataType mismatch for Medication.ingredient.strength[x]: Expected Ratio but encountered ${this.strength.fhirType()}`,
      );
    }
    return this.strength;
  }

  /**
   * @returns `true` if the `strength` property exists as a Ratio and has a value; `false` otherwise
   */
  public hasStrengthRatio(): boolean {
    return this.hasStrength() && this.strength instanceof Ratio;
  }

  /**
   * @returns the `strength` property value as a CodeableConcept object if defined; else undefined
   */
  public getStrengthCodeableConcept(): CodeableConcept | undefined {
    if (!isDefined<IDataType | undefined>(this.strength)) {
      return undefined;
    }
    if (!(this.strength instanceof CodeableConcept)) {
      throw new InvalidTypeError(
        `DataType mismatch for Medication.ingredient.strength[x]: Expected CodeableConcept but encountered ${this.strength.fhirType()}`,
      );
    }
    return this.strength;
  }

  /**
   * @returns `true` if the `strength` property exists as a CodeableConcept and has a value; `false` otherwise
   */
  public hasStrengthCodeableConcept(): boolean {
    return this.hasStrength() && this.strength instanceof CodeableConcept;
  }

  /**
   * @returns the `strength` property value as a Quantity object if defined; else undefined
   */
  public getStrengthQuantity(): Quantity | undefined {
    if (!isDefined<IDataType | undefined>(this.strength)) {
      return undefined;
    }
    if (!(this.strength instanceof Quantity)) {
      throw new InvalidTypeError(
        `DataType mismatch for Medication.ingredient.strength[x]: Expected Quantity but encountered ${this.strength.fhirType()}`,
      );
    }
    return this.strength;
  }

  /**
   * @returns `true` if the `strength` property exists as a Quantity and has a value; `false` otherwise
   */
  public hasStrengthQuantity(): boolean {
    return this.hasStrength() && this.strength instanceof Quantity;
  }

  // End of choice datatype-specific "get"/"has" methods

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Medication.ingredient';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.item,
      this.isActive,
      this.strength,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.item, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): MedicationIngredientComponent {
    const dest = new MedicationIngredientComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: MedicationIngredientComponent): void {
    super.copyValues(dest);
    dest.item = this.item ? this.item.copy() : null;
    dest.isActive = this.isActive?.copy();
    dest.strength = this.strength?.copy() as IDataType;
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

    if (this.hasItem()) {
      setFhirComplexJson(this.getItem(), 'item', jsonObj);
    } else {
      jsonObj['item'] = null;
    }

    if (this.hasIsActiveElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getIsActiveElement(), 'isActive', jsonObj);
    }

    if (this.hasStrength()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getStrength()!, 'strength', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * MedicationBatchComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Details about packaged medications
 * - **Definition:** Information that only applies to packages (not products).
 *
 * @category Data Models: Resource
 * @see [FHIR Medication](http://hl7.org/fhir/StructureDefinition/Medication)
 */
export class MedicationBatchComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `MedicationBatchComponent` JSON to instantiate the MedicationBatchComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `MedicationBatchComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to MedicationBatchComponent
   * @returns MedicationBatchComponent data model or undefined for `MedicationBatchComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): MedicationBatchComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'MedicationBatchComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new MedicationBatchComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'lotNumber';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setLotNumberElement(datatype);
    }

    fieldName = 'expirationDate';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dtJson, dtSiblingJson);
      instance.setExpirationDateElement(datatype);
    }

    return instance;
  }

  /**
   * Medication.batch.lotNumber Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Identifier assigned to batch
   * - **Definition:** The assigned lot number of a batch of the specified product.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private lotNumber?: StringType | undefined;

  /**
   * Medication.batch.expirationDate Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When batch will expire
   * - **Definition:** When this specific batch of product will expire.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private expirationDate?: DateTimeType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `lotNumber` property value as a StringType object if defined; else an empty StringType object
   */
  public getLotNumberElement(): StringType {
    return this.lotNumber ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `lotNumber` property.
   *
   * @param element - the `lotNumber` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setLotNumberElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid Medication.batch.lotNumber; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.lotNumber = element;
    } else {
      this.lotNumber = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `lotNumber` property exists and has a value; `false` otherwise
   */
  public hasLotNumberElement(): boolean {
    return isDefined<StringType>(this.lotNumber) && !this.lotNumber.isEmpty();
  }

  /**
   * @returns the `lotNumber` property value as a fhirString if defined; else undefined
   */
  public getLotNumber(): fhirString | undefined {
    return this.lotNumber?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `lotNumber` property.
   *
   * @param value - the `lotNumber` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setLotNumber(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid Medication.batch.lotNumber (${String(value)})`;
      this.lotNumber = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.lotNumber = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `lotNumber` property exists and has a value; `false` otherwise
   */
  public hasLotNumber(): boolean {
    return this.hasLotNumberElement();
  }

  /**
   * @returns the `expirationDate` property value as a DateTimeType object if defined; else an empty DateTimeType object
   */
  public getExpirationDateElement(): DateTimeType {
    return this.expirationDate ?? new DateTimeType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `expirationDate` property.
   *
   * @param element - the `expirationDate` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setExpirationDateElement(element: DateTimeType | undefined): this {
    if (isDefined<DateTimeType>(element)) {
      const optErrMsg = `Invalid Medication.batch.expirationDate; Provided element is not an instance of DateTimeType.`;
      assertFhirType<DateTimeType>(element, DateTimeType, optErrMsg);
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
    return isDefined<DateTimeType>(this.expirationDate) && !this.expirationDate.isEmpty();
  }

  /**
   * @returns the `expirationDate` property value as a fhirDateTime if defined; else undefined
   */
  public getExpirationDate(): fhirDateTime | undefined {
    return this.expirationDate?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `expirationDate` property.
   *
   * @param value - the `expirationDate` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setExpirationDate(value: fhirDateTime | undefined): this {
    if (isDefined<fhirDateTime>(value)) {
      const optErrMsg = `Invalid Medication.batch.expirationDate (${String(value)})`;
      this.expirationDate = new DateTimeType(parseFhirPrimitiveData(value, fhirDateTimeSchema, optErrMsg));
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

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Medication.batch';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.lotNumber,
      this.expirationDate,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): MedicationBatchComponent {
    const dest = new MedicationBatchComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: MedicationBatchComponent): void {
    super.copyValues(dest);
    dest.lotNumber = this.lotNumber?.copy();
    dest.expirationDate = this.expirationDate?.copy();
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

    if (this.hasLotNumberElement()) {
      setFhirPrimitiveJson<fhirString>(this.getLotNumberElement(), 'lotNumber', jsonObj);
    }

    if (this.hasExpirationDateElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getExpirationDateElement(), 'expirationDate', jsonObj);
    }

    return jsonObj;
  }
}
