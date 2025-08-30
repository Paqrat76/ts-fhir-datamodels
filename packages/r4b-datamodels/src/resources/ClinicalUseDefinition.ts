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
 * ClinicalUseDefinition Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/ClinicalUseDefinition
 * StructureDefinition.name: ClinicalUseDefinition
 * StructureDefinition.description: A single issue - either an indication, contraindication, interaction or an undesirable effect for a medicinal product, medication, device or procedure.
 * StructureDefinition.fhirVersion: 4.3.0
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
  DomainResource,
  EnumCodeType,
  FhirParser,
  IBackboneElement,
  IDataType,
  IDomainResource,
  InvalidTypeError,
  JSON,
  MarkdownType,
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
  fhirMarkdown,
  fhirMarkdownSchema,
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
import { ClinicalUseDefinitionTypeEnum } from '../code-systems/ClinicalUseDefinitionTypeEnum';
import { CodeableConcept, CodeableReference, Identifier, PARSABLE_DATATYPE_MAP, Range, Reference } from '../complex-types/complex-datatypes';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Symbol.metadata polyfill secret sauce for decorator metadata
(Symbol.metadata as any) ??= Symbol('Symbol.metadata');

/**
 * ClinicalUseDefinition Class
 *
 * @remarks
 * A single issue - either an indication, contraindication, interaction or an undesirable effect for a medicinal product, medication, device or procedure.
 *
 * **FHIR Specification**
 * - **Short:** A single issue - either an indication, contraindication, interaction or an undesirable effect for a medicinal product, medication, device or procedure
 * - **Definition:** A single issue - either an indication, contraindication, interaction or an undesirable effect for a medicinal product, medication, device or procedure.
 * - **FHIR Version:** 4.3.0
 *
 * @category Data Models: Resource
 * @see [FHIR ClinicalUseDefinition](http://hl7.org/fhir/StructureDefinition/ClinicalUseDefinition)
 */
export class ClinicalUseDefinition extends DomainResource implements IDomainResource {
  constructor(type_: EnumCodeType | CodeType | fhirCode | null = null) {
    super();

    this.clinicalUseDefinitionTypeEnum = new ClinicalUseDefinitionTypeEnum();

    this.type_ = constructorCodeValueAsEnumCodeType<ClinicalUseDefinitionTypeEnum>(
      type_,
      ClinicalUseDefinitionTypeEnum,
      this.clinicalUseDefinitionTypeEnum,
      'ClinicalUseDefinition.type',
    );
  }

  /**
   * Parse the provided `ClinicalUseDefinition` JSON to instantiate the ClinicalUseDefinition data model.
   *
   * @param sourceJson - JSON representing FHIR `ClinicalUseDefinition`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ClinicalUseDefinition
   * @returns ClinicalUseDefinition data model or undefined for `ClinicalUseDefinition`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): ClinicalUseDefinition | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ClinicalUseDefinition';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ClinicalUseDefinition();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'ClinicalUseDefinition');
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

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setType(null);
      } else {
        instance.setTypeElement(datatype);
      }
    } else {
      instance.setType(null);
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

    fieldName = 'subject';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addSubject(datatype);
        }
      });
  }

    fieldName = 'status';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setStatus(datatype);
    }

    fieldName = 'contraindication';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: ClinicalUseDefinitionContraindicationComponent | undefined = ClinicalUseDefinitionContraindicationComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setContraindication(component);
    }

    fieldName = 'indication';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: ClinicalUseDefinitionIndicationComponent | undefined = ClinicalUseDefinitionIndicationComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setIndication(component);
    }

    fieldName = 'interaction';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: ClinicalUseDefinitionInteractionComponent | undefined = ClinicalUseDefinitionInteractionComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setInteraction(component);
    }

    fieldName = 'population';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addPopulation(datatype);
        }
      });
  }

    fieldName = 'undesirableEffect';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: ClinicalUseDefinitionUndesirableEffectComponent | undefined = ClinicalUseDefinitionUndesirableEffectComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setUndesirableEffect(component);
    }

    fieldName = 'warning';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: ClinicalUseDefinitionWarningComponent | undefined = ClinicalUseDefinitionWarningComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setWarning(component);
    }

    return instance;
  }

  /**
   * ClinicalUseDefinition.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Business identifier for this issue
   * - **Definition:** Business identifier for this issue.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier[] | undefined;

  /**
   * FHIR CodeSystem: ClinicalUseDefinitionType
   *
   * @see {@link ClinicalUseDefinitionTypeEnum }
   */
  private readonly clinicalUseDefinitionTypeEnum: ClinicalUseDefinitionTypeEnum;

  /**
   * ClinicalUseDefinition.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** indication | contraindication | interaction | undesirable-effect | warning
   * - **Definition:** indication | contraindication | interaction | undesirable-effect | warning.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link ClinicalUseDefinitionTypeEnum }
   */
  private type_: EnumCodeType | null;

  /**
   * ClinicalUseDefinition.category Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A categorisation of the issue, primarily for dividing warnings into subject heading areas such as "Pregnancy", "Overdose"
   * - **Definition:** A categorisation of the issue, primarily for dividing warnings into subject heading areas such as "Pregnancy and Lactation", "Overdose", "Effects on Ability to Drive and Use Machines".
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private category?: CodeableConcept[] | undefined;

  /**
   * ClinicalUseDefinition.subject Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The medication or procedure for which this is an indication
   * - **Definition:** The medication or procedure for which this is an indication.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/MedicinalProductDefinition',
   *       'http://hl7.org/fhir/StructureDefinition/Medication',
   *       'http://hl7.org/fhir/StructureDefinition/ActivityDefinition',
   *       'http://hl7.org/fhir/StructureDefinition/PlanDefinition',
   *       'http://hl7.org/fhir/StructureDefinition/Device',
   *       'http://hl7.org/fhir/StructureDefinition/DeviceDefinition',
   *       'http://hl7.org/fhir/StructureDefinition/Substance',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private subject?: Reference[] | undefined;

  /**
   * ClinicalUseDefinition.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Whether this is a current issue or one that has been retired etc
   * - **Definition:** Whether this is a current issue or one that has been retired etc.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private status?: CodeableConcept | undefined;

  /**
   * ClinicalUseDefinition.contraindication Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Specifics for when this is a contraindication
   * - **Definition:** Specifics for when this is a contraindication.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private contraindication?: ClinicalUseDefinitionContraindicationComponent | undefined;

  /**
   * ClinicalUseDefinition.indication Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Specifics for when this is an indication
   * - **Definition:** Specifics for when this is an indication.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private indication?: ClinicalUseDefinitionIndicationComponent | undefined;

  /**
   * ClinicalUseDefinition.interaction Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Specifics for when this is an interaction
   * - **Definition:** Specifics for when this is an interaction.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private interaction?: ClinicalUseDefinitionInteractionComponent | undefined;

  /**
   * ClinicalUseDefinition.population Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The population group to which this applies
   * - **Definition:** The population group to which this applies.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Group',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private population?: Reference[] | undefined;

  /**
   * ClinicalUseDefinition.undesirableEffect Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A possible negative outcome from the use of this treatment
   * - **Definition:** Describe the possible undesirable effects (negative outcomes) from the use of the medicinal product as treatment.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private undesirableEffect?: ClinicalUseDefinitionUndesirableEffectComponent | undefined;

  /**
   * ClinicalUseDefinition.warning Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Critical environmental, health or physical risks or hazards. For example \'Do not operate heavy machinery\', \'May cause drowsiness\'
   * - **Definition:** A critical piece of information about environmental, health or physical risks or hazards that serve as caution to the user. For example \'Do not operate heavy machinery\', \'May cause drowsiness\', or \'Get medical advice/attention if you feel unwell\'.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private warning?: ClinicalUseDefinitionWarningComponent | undefined;

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
      const optErrMsg = `Invalid ClinicalUseDefinition.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid ClinicalUseDefinition.identifier; Provided element is not an instance of Identifier.`;
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
   * @returns the `type_` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link ClinicalUseDefinitionTypeEnum }
   */
  public getTypeEnumType(): EnumCodeType | null {
    return this.type_;
  }

  /**
   * Assigns the provided EnumCodeType value to the `type_` property.
   *
   * @param enumType - the `type_` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link ClinicalUseDefinitionTypeEnum }
   */
  public setTypeEnumType(enumType: EnumCodeType | undefined | null): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid ClinicalUseDefinition.type`;
      assertEnumCodeType<ClinicalUseDefinitionTypeEnum>(enumType, ClinicalUseDefinitionTypeEnum, errMsgPrefix);
      this.type_ = enumType;
    } else {
      this.type_ = null;
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
   * @returns the `type_` property value as a CodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link ClinicalUseDefinitionTypeEnum }
   */
  public getTypeElement(): CodeType | null {
    if (this.type_ === null) {
      return null;
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
   * @see CodeSystem Enumeration: {@link ClinicalUseDefinitionTypeEnum }
   */
  public setTypeElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid ClinicalUseDefinition.type; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.type_ = new EnumCodeType(element, this.clinicalUseDefinitionTypeEnum);
    } else {
      this.type_ = null;
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
   * @returns the `type_` property value as a fhirCode if defined; else null
   *
   * @see CodeSystem Enumeration: {@link ClinicalUseDefinitionTypeEnum }
   */
  public getType(): fhirCode | null {
    if (this.type_ === null) {
      return null;
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
   * @see CodeSystem Enumeration: {@link ClinicalUseDefinitionTypeEnum }
   */
  public setType(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid ClinicalUseDefinition.type (${String(value)})`;
      this.type_ = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.clinicalUseDefinitionTypeEnum);
    } else {
      this.type_ = null;
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
      const optErrMsg = `Invalid ClinicalUseDefinition.category; Provided value array has an element that is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid ClinicalUseDefinition.category; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `subject` property value as a Reference array
   */
  public getSubject(): Reference[] {
    return this.subject ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `subject` property.
   *
   * @decorator `@ReferenceTargets('ClinicalUseDefinition.subject', ['MedicinalProductDefinition','Medication','ActivityDefinition','PlanDefinition','Device','DeviceDefinition','Substance',])`
   *
   * @param value - the `subject` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ClinicalUseDefinition.subject', [
    'MedicinalProductDefinition',
  
    'Medication',
  
    'ActivityDefinition',
  
    'PlanDefinition',
  
    'Device',
  
    'DeviceDefinition',
  
    'Substance',
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
   * @decorator `@ReferenceTargets('ClinicalUseDefinition.subject', ['MedicinalProductDefinition','Medication','ActivityDefinition','PlanDefinition','Device','DeviceDefinition','Substance',])`
   *
   * @param value - the `subject` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ClinicalUseDefinition.subject', [
    'MedicinalProductDefinition',
  
    'Medication',
  
    'ActivityDefinition',
  
    'PlanDefinition',
  
    'Device',
  
    'DeviceDefinition',
  
    'Substance',
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
   * @returns the `status` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getStatus(): CodeableConcept {
    return this.status ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Status object value to the `status` property.
   *
   * @param value - the `status` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setStatus(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid ClinicalUseDefinition.status; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.status = value;
    } else {
      this.status = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `status` property exists and has a value; `false` otherwise
   */
  public hasStatus(): boolean {
    return isDefined<CodeableConcept>(this.status) && !this.status.isEmpty();
  }

  /**
   * @returns the `contraindication` property value as a ClinicalUseDefinitionContraindicationComponent object if defined; else an empty ClinicalUseDefinitionContraindicationComponent object
   */
  public getContraindication(): ClinicalUseDefinitionContraindicationComponent {
    return this.contraindication ?? new ClinicalUseDefinitionContraindicationComponent();
  }

  /**
   * Assigns the provided Contraindication object value to the `contraindication` property.
   *
   * @param value - the `contraindication` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setContraindication(value: ClinicalUseDefinitionContraindicationComponent | undefined): this {
    if (isDefined<ClinicalUseDefinitionContraindicationComponent>(value)) {
      const optErrMsg = `Invalid ClinicalUseDefinition.contraindication; Provided element is not an instance of ClinicalUseDefinitionContraindicationComponent.`;
      assertFhirType<ClinicalUseDefinitionContraindicationComponent>(value, ClinicalUseDefinitionContraindicationComponent, optErrMsg);
      this.contraindication = value;
    } else {
      this.contraindication = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `contraindication` property exists and has a value; `false` otherwise
   */
  public hasContraindication(): boolean {
    return isDefined<ClinicalUseDefinitionContraindicationComponent>(this.contraindication) && !this.contraindication.isEmpty();
  }

  /**
   * @returns the `indication` property value as a ClinicalUseDefinitionIndicationComponent object if defined; else an empty ClinicalUseDefinitionIndicationComponent object
   */
  public getIndication(): ClinicalUseDefinitionIndicationComponent {
    return this.indication ?? new ClinicalUseDefinitionIndicationComponent();
  }

  /**
   * Assigns the provided Indication object value to the `indication` property.
   *
   * @param value - the `indication` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setIndication(value: ClinicalUseDefinitionIndicationComponent | undefined): this {
    if (isDefined<ClinicalUseDefinitionIndicationComponent>(value)) {
      const optErrMsg = `Invalid ClinicalUseDefinition.indication; Provided element is not an instance of ClinicalUseDefinitionIndicationComponent.`;
      assertFhirType<ClinicalUseDefinitionIndicationComponent>(value, ClinicalUseDefinitionIndicationComponent, optErrMsg);
      this.indication = value;
    } else {
      this.indication = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `indication` property exists and has a value; `false` otherwise
   */
  public hasIndication(): boolean {
    return isDefined<ClinicalUseDefinitionIndicationComponent>(this.indication) && !this.indication.isEmpty();
  }

  /**
   * @returns the `interaction` property value as a ClinicalUseDefinitionInteractionComponent object if defined; else an empty ClinicalUseDefinitionInteractionComponent object
   */
  public getInteraction(): ClinicalUseDefinitionInteractionComponent {
    return this.interaction ?? new ClinicalUseDefinitionInteractionComponent();
  }

  /**
   * Assigns the provided Interaction object value to the `interaction` property.
   *
   * @param value - the `interaction` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setInteraction(value: ClinicalUseDefinitionInteractionComponent | undefined): this {
    if (isDefined<ClinicalUseDefinitionInteractionComponent>(value)) {
      const optErrMsg = `Invalid ClinicalUseDefinition.interaction; Provided element is not an instance of ClinicalUseDefinitionInteractionComponent.`;
      assertFhirType<ClinicalUseDefinitionInteractionComponent>(value, ClinicalUseDefinitionInteractionComponent, optErrMsg);
      this.interaction = value;
    } else {
      this.interaction = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `interaction` property exists and has a value; `false` otherwise
   */
  public hasInteraction(): boolean {
    return isDefined<ClinicalUseDefinitionInteractionComponent>(this.interaction) && !this.interaction.isEmpty();
  }

  /**
   * @returns the `population` property value as a Reference array
   */
  public getPopulation(): Reference[] {
    return this.population ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `population` property.
   *
   * @decorator `@ReferenceTargets('ClinicalUseDefinition.population', ['Group',])`
   *
   * @param value - the `population` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ClinicalUseDefinition.population', [
    'Group',
  ])
  public setPopulation(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.population = value;
    } else {
      this.population = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `population` array property.
   *
   * @decorator `@ReferenceTargets('ClinicalUseDefinition.population', ['Group',])`
   *
   * @param value - the `population` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ClinicalUseDefinition.population', [
    'Group',
  ])
  public addPopulation(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initPopulation();
      this.population?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `population` property exists and has a value; `false` otherwise
   */
  public hasPopulation(): boolean {
    return isDefinedList<Reference>(this.population) && this.population.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `population` property
   */
  private initPopulation(): void {
    if (!this.hasPopulation()) {
      this.population = [] as Reference[];
    }
  }

  /**
   * @returns the `undesirableEffect` property value as a ClinicalUseDefinitionUndesirableEffectComponent object if defined; else an empty ClinicalUseDefinitionUndesirableEffectComponent object
   */
  public getUndesirableEffect(): ClinicalUseDefinitionUndesirableEffectComponent {
    return this.undesirableEffect ?? new ClinicalUseDefinitionUndesirableEffectComponent();
  }

  /**
   * Assigns the provided UndesirableEffect object value to the `undesirableEffect` property.
   *
   * @param value - the `undesirableEffect` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setUndesirableEffect(value: ClinicalUseDefinitionUndesirableEffectComponent | undefined): this {
    if (isDefined<ClinicalUseDefinitionUndesirableEffectComponent>(value)) {
      const optErrMsg = `Invalid ClinicalUseDefinition.undesirableEffect; Provided element is not an instance of ClinicalUseDefinitionUndesirableEffectComponent.`;
      assertFhirType<ClinicalUseDefinitionUndesirableEffectComponent>(value, ClinicalUseDefinitionUndesirableEffectComponent, optErrMsg);
      this.undesirableEffect = value;
    } else {
      this.undesirableEffect = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `undesirableEffect` property exists and has a value; `false` otherwise
   */
  public hasUndesirableEffect(): boolean {
    return isDefined<ClinicalUseDefinitionUndesirableEffectComponent>(this.undesirableEffect) && !this.undesirableEffect.isEmpty();
  }

  /**
   * @returns the `warning` property value as a ClinicalUseDefinitionWarningComponent object if defined; else an empty ClinicalUseDefinitionWarningComponent object
   */
  public getWarning(): ClinicalUseDefinitionWarningComponent {
    return this.warning ?? new ClinicalUseDefinitionWarningComponent();
  }

  /**
   * Assigns the provided Warning object value to the `warning` property.
   *
   * @param value - the `warning` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setWarning(value: ClinicalUseDefinitionWarningComponent | undefined): this {
    if (isDefined<ClinicalUseDefinitionWarningComponent>(value)) {
      const optErrMsg = `Invalid ClinicalUseDefinition.warning; Provided element is not an instance of ClinicalUseDefinitionWarningComponent.`;
      assertFhirType<ClinicalUseDefinitionWarningComponent>(value, ClinicalUseDefinitionWarningComponent, optErrMsg);
      this.warning = value;
    } else {
      this.warning = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `warning` property exists and has a value; `false` otherwise
   */
  public hasWarning(): boolean {
    return isDefined<ClinicalUseDefinitionWarningComponent>(this.warning) && !this.warning.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'ClinicalUseDefinition';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identifier,
      this.type_,
      this.category,
      this.subject,
      this.status,
      this.contraindication,
      this.indication,
      this.interaction,
      this.population,
      this.undesirableEffect,
      this.warning,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.type_, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ClinicalUseDefinition {
    const dest = new ClinicalUseDefinition();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ClinicalUseDefinition): void {
    super.copyValues(dest);
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    dest.type_ = this.type_ ? this.type_.copy() : null;
    const categoryList = copyListValues<CodeableConcept>(this.category);
    dest.category = categoryList.length === 0 ? undefined : categoryList;
    const subjectList = copyListValues<Reference>(this.subject);
    dest.subject = subjectList.length === 0 ? undefined : subjectList;
    dest.status = this.status?.copy();
    dest.contraindication = this.contraindication?.copy();
    dest.indication = this.indication?.copy();
    dest.interaction = this.interaction?.copy();
    const populationList = copyListValues<Reference>(this.population);
    dest.population = populationList.length === 0 ? undefined : populationList;
    dest.undesirableEffect = this.undesirableEffect?.copy();
    dest.warning = this.warning?.copy();
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

    if (this.hasTypeElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getTypeElement()!, 'type', jsonObj);
    } else {
      jsonObj['type'] = null;
    }

    if (this.hasCategory()) {
      setFhirComplexListJson(this.getCategory(), 'category', jsonObj);
    }

    if (this.hasSubject()) {
      setFhirComplexListJson(this.getSubject(), 'subject', jsonObj);
    }

    if (this.hasStatus()) {
      setFhirComplexJson(this.getStatus(), 'status', jsonObj);
    }

    if (this.hasContraindication()) {
      setFhirBackboneElementJson(this.getContraindication(), 'contraindication', jsonObj);
    }

    if (this.hasIndication()) {
      setFhirBackboneElementJson(this.getIndication(), 'indication', jsonObj);
    }

    if (this.hasInteraction()) {
      setFhirBackboneElementJson(this.getInteraction(), 'interaction', jsonObj);
    }

    if (this.hasPopulation()) {
      setFhirComplexListJson(this.getPopulation(), 'population', jsonObj);
    }

    if (this.hasUndesirableEffect()) {
      setFhirBackboneElementJson(this.getUndesirableEffect(), 'undesirableEffect', jsonObj);
    }

    if (this.hasWarning()) {
      setFhirBackboneElementJson(this.getWarning(), 'warning', jsonObj);
    }

    return jsonObj;
  }
}

/**
 * ClinicalUseDefinitionContraindicationComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Specifics for when this is a contraindication
 * - **Definition:** Specifics for when this is a contraindication.
 *
 * @category Data Models: Resource
 * @see [FHIR ClinicalUseDefinition](http://hl7.org/fhir/StructureDefinition/ClinicalUseDefinition)
 */
export class ClinicalUseDefinitionContraindicationComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `ClinicalUseDefinitionContraindicationComponent` JSON to instantiate the ClinicalUseDefinitionContraindicationComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ClinicalUseDefinitionContraindicationComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ClinicalUseDefinitionContraindicationComponent
   * @returns ClinicalUseDefinitionContraindicationComponent data model or undefined for `ClinicalUseDefinitionContraindicationComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ClinicalUseDefinitionContraindicationComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ClinicalUseDefinitionContraindicationComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ClinicalUseDefinitionContraindicationComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    fieldName = 'diseaseSymptomProcedure';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableReference | undefined = CodeableReference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setDiseaseSymptomProcedure(datatype);
    }

    fieldName = 'diseaseStatus';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableReference | undefined = CodeableReference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setDiseaseStatus(datatype);
    }

    fieldName = 'comorbidity';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableReference | undefined = CodeableReference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addComorbidity(datatype);
        }
      });
    }

    fieldName = 'indication';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addIndication(datatype);
        }
      });
  }

    fieldName = 'otherTherapy';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: ClinicalUseDefinitionContraindicationOtherTherapyComponent | undefined = ClinicalUseDefinitionContraindicationOtherTherapyComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addOtherTherapy(component);
        }
      });
    }

    return instance;
  }

  /**
   * ClinicalUseDefinition.contraindication.diseaseSymptomProcedure Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The situation that is being documented as contraindicating against this item
   * - **Definition:** The situation that is being documented as contraindicating against this item.
   * - **FHIR Type:** `CodeableReference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/ObservationDefinition',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private diseaseSymptomProcedure?: CodeableReference | undefined;

  /**
   * ClinicalUseDefinition.contraindication.diseaseStatus Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The status of the disease or symptom for the contraindication
   * - **Definition:** The status of the disease or symptom for the contraindication, for example "chronic" or "metastatic".
   * - **FHIR Type:** `CodeableReference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/ObservationDefinition',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private diseaseStatus?: CodeableReference | undefined;

  /**
   * ClinicalUseDefinition.contraindication.comorbidity Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A comorbidity (concurrent condition) or coinfection
   * - **Definition:** A comorbidity (concurrent condition) or coinfection.
   * - **FHIR Type:** `CodeableReference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/ObservationDefinition',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private comorbidity?: CodeableReference[] | undefined;

  /**
   * ClinicalUseDefinition.contraindication.indication Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The indication which this is a contraidication for
   * - **Definition:** The indication which this is a contraidication for.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/ClinicalUseDefinition',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private indication?: Reference[] | undefined;

  /**
   * ClinicalUseDefinition.contraindication.otherTherapy Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Information about use of the product in relation to other therapies described as part of the contraindication
   * - **Definition:** Information about the use of the medicinal product in relation to other therapies described as part of the contraindication.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private otherTherapy?: ClinicalUseDefinitionContraindicationOtherTherapyComponent[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `diseaseSymptomProcedure` property value as a CodeableReference object if defined; else an empty CodeableReference object
   */
  public getDiseaseSymptomProcedure(): CodeableReference {
    return this.diseaseSymptomProcedure ?? new CodeableReference();
  }

  /**
   * Assigns the provided DiseaseSymptomProcedure object value to the `diseaseSymptomProcedure` property.
   *
   * @param value - the `diseaseSymptomProcedure` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDiseaseSymptomProcedure(value: CodeableReference | undefined): this {
    if (isDefined<CodeableReference>(value)) {
      const optErrMsg = `Invalid ClinicalUseDefinition.contraindication.diseaseSymptomProcedure; Provided element is not an instance of CodeableReference.`;
      assertFhirType<CodeableReference>(value, CodeableReference, optErrMsg);
      this.diseaseSymptomProcedure = value;
    } else {
      this.diseaseSymptomProcedure = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `diseaseSymptomProcedure` property exists and has a value; `false` otherwise
   */
  public hasDiseaseSymptomProcedure(): boolean {
    return isDefined<CodeableReference>(this.diseaseSymptomProcedure) && !this.diseaseSymptomProcedure.isEmpty();
  }

  /**
   * @returns the `diseaseStatus` property value as a CodeableReference object if defined; else an empty CodeableReference object
   */
  public getDiseaseStatus(): CodeableReference {
    return this.diseaseStatus ?? new CodeableReference();
  }

  /**
   * Assigns the provided DiseaseStatus object value to the `diseaseStatus` property.
   *
   * @param value - the `diseaseStatus` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDiseaseStatus(value: CodeableReference | undefined): this {
    if (isDefined<CodeableReference>(value)) {
      const optErrMsg = `Invalid ClinicalUseDefinition.contraindication.diseaseStatus; Provided element is not an instance of CodeableReference.`;
      assertFhirType<CodeableReference>(value, CodeableReference, optErrMsg);
      this.diseaseStatus = value;
    } else {
      this.diseaseStatus = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `diseaseStatus` property exists and has a value; `false` otherwise
   */
  public hasDiseaseStatus(): boolean {
    return isDefined<CodeableReference>(this.diseaseStatus) && !this.diseaseStatus.isEmpty();
  }

  /**
   * @returns the `comorbidity` property value as a CodeableReference array
   */
  public getComorbidity(): CodeableReference[] {
    return this.comorbidity ?? ([] as CodeableReference[]);
  }

  /**
   * Assigns the provided CodeableReference array value to the `comorbidity` property.
   *
   * @param value - the `comorbidity` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setComorbidity(value: CodeableReference[] | undefined): this {
    if (isDefinedList<CodeableReference>(value)) {
      const optErrMsg = `Invalid ClinicalUseDefinition.contraindication.comorbidity; Provided value array has an element that is not an instance of CodeableReference.`;
      assertFhirTypeList<CodeableReference>(value, CodeableReference, optErrMsg);
      this.comorbidity = value;
    } else {
      this.comorbidity = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableReference value to the `comorbidity` array property.
   *
   * @param value - the `comorbidity` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addComorbidity(value: CodeableReference | undefined): this {
    if (isDefined<CodeableReference>(value)) {
      const optErrMsg = `Invalid ClinicalUseDefinition.contraindication.comorbidity; Provided element is not an instance of CodeableReference.`;
      assertFhirType<CodeableReference>(value, CodeableReference, optErrMsg);
      this.initComorbidity();
      this.comorbidity?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `comorbidity` property exists and has a value; `false` otherwise
   */
  public hasComorbidity(): boolean {
    return isDefinedList<CodeableReference>(this.comorbidity) && this.comorbidity.some((item: CodeableReference) => !item.isEmpty());
  }

  /**
   * Initialize the `comorbidity` property
   */
  private initComorbidity(): void {
    if(!this.hasComorbidity()) {
      this.comorbidity = [] as CodeableReference[];
    }
  }

  /**
   * @returns the `indication` property value as a Reference array
   */
  public getIndication(): Reference[] {
    return this.indication ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `indication` property.
   *
   * @decorator `@ReferenceTargets('ClinicalUseDefinition.contraindication.indication', ['ClinicalUseDefinition',])`
   *
   * @param value - the `indication` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ClinicalUseDefinition.contraindication.indication', [
    'ClinicalUseDefinition',
  ])
  public setIndication(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.indication = value;
    } else {
      this.indication = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `indication` array property.
   *
   * @decorator `@ReferenceTargets('ClinicalUseDefinition.contraindication.indication', ['ClinicalUseDefinition',])`
   *
   * @param value - the `indication` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ClinicalUseDefinition.contraindication.indication', [
    'ClinicalUseDefinition',
  ])
  public addIndication(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initIndication();
      this.indication?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `indication` property exists and has a value; `false` otherwise
   */
  public hasIndication(): boolean {
    return isDefinedList<Reference>(this.indication) && this.indication.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `indication` property
   */
  private initIndication(): void {
    if (!this.hasIndication()) {
      this.indication = [] as Reference[];
    }
  }

  /**
   * @returns the `otherTherapy` property value as a ClinicalUseDefinitionContraindicationOtherTherapyComponent array
   */
  public getOtherTherapy(): ClinicalUseDefinitionContraindicationOtherTherapyComponent[] {
    return this.otherTherapy ?? ([] as ClinicalUseDefinitionContraindicationOtherTherapyComponent[]);
  }

  /**
   * Assigns the provided ClinicalUseDefinitionContraindicationOtherTherapyComponent array value to the `otherTherapy` property.
   *
   * @param value - the `otherTherapy` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setOtherTherapy(value: ClinicalUseDefinitionContraindicationOtherTherapyComponent[] | undefined): this {
    if (isDefinedList<ClinicalUseDefinitionContraindicationOtherTherapyComponent>(value)) {
      const optErrMsg = `Invalid ClinicalUseDefinition.contraindication.otherTherapy; Provided value array has an element that is not an instance of ClinicalUseDefinitionContraindicationOtherTherapyComponent.`;
      assertFhirTypeList<ClinicalUseDefinitionContraindicationOtherTherapyComponent>(value, ClinicalUseDefinitionContraindicationOtherTherapyComponent, optErrMsg);
      this.otherTherapy = value;
    } else {
      this.otherTherapy = undefined;
    }
    return this;
  }

  /**
   * Add the provided ClinicalUseDefinitionContraindicationOtherTherapyComponent value to the `otherTherapy` array property.
   *
   * @param value - the `otherTherapy` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addOtherTherapy(value: ClinicalUseDefinitionContraindicationOtherTherapyComponent | undefined): this {
    if (isDefined<ClinicalUseDefinitionContraindicationOtherTherapyComponent>(value)) {
      const optErrMsg = `Invalid ClinicalUseDefinition.contraindication.otherTherapy; Provided element is not an instance of ClinicalUseDefinitionContraindicationOtherTherapyComponent.`;
      assertFhirType<ClinicalUseDefinitionContraindicationOtherTherapyComponent>(value, ClinicalUseDefinitionContraindicationOtherTherapyComponent, optErrMsg);
      this.initOtherTherapy();
      this.otherTherapy?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `otherTherapy` property exists and has a value; `false` otherwise
   */
  public hasOtherTherapy(): boolean {
    return isDefinedList<ClinicalUseDefinitionContraindicationOtherTherapyComponent>(this.otherTherapy) && this.otherTherapy.some((item: ClinicalUseDefinitionContraindicationOtherTherapyComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `otherTherapy` property
   */
  private initOtherTherapy(): void {
    if(!this.hasOtherTherapy()) {
      this.otherTherapy = [] as ClinicalUseDefinitionContraindicationOtherTherapyComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'ClinicalUseDefinition.contraindication';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.diseaseSymptomProcedure,
      this.diseaseStatus,
      this.comorbidity,
      this.indication,
      this.otherTherapy,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ClinicalUseDefinitionContraindicationComponent {
    const dest = new ClinicalUseDefinitionContraindicationComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ClinicalUseDefinitionContraindicationComponent): void {
    super.copyValues(dest);
    dest.diseaseSymptomProcedure = this.diseaseSymptomProcedure?.copy();
    dest.diseaseStatus = this.diseaseStatus?.copy();
    const comorbidityList = copyListValues<CodeableReference>(this.comorbidity);
    dest.comorbidity = comorbidityList.length === 0 ? undefined : comorbidityList;
    const indicationList = copyListValues<Reference>(this.indication);
    dest.indication = indicationList.length === 0 ? undefined : indicationList;
    const otherTherapyList = copyListValues<ClinicalUseDefinitionContraindicationOtherTherapyComponent>(this.otherTherapy);
    dest.otherTherapy = otherTherapyList.length === 0 ? undefined : otherTherapyList;
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

    if (this.hasDiseaseSymptomProcedure()) {
      setFhirComplexJson(this.getDiseaseSymptomProcedure(), 'diseaseSymptomProcedure', jsonObj);
    }

    if (this.hasDiseaseStatus()) {
      setFhirComplexJson(this.getDiseaseStatus(), 'diseaseStatus', jsonObj);
    }

    if (this.hasComorbidity()) {
      setFhirComplexListJson(this.getComorbidity(), 'comorbidity', jsonObj);
    }

    if (this.hasIndication()) {
      setFhirComplexListJson(this.getIndication(), 'indication', jsonObj);
    }

    if (this.hasOtherTherapy()) {
      setFhirBackboneElementListJson(this.getOtherTherapy(), 'otherTherapy', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * ClinicalUseDefinitionContraindicationOtherTherapyComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Information about use of the product in relation to other therapies described as part of the contraindication
 * - **Definition:** Information about the use of the medicinal product in relation to other therapies described as part of the contraindication.
 *
 * @category Data Models: Resource
 * @see [FHIR ClinicalUseDefinition](http://hl7.org/fhir/StructureDefinition/ClinicalUseDefinition)
 */
export class ClinicalUseDefinitionContraindicationOtherTherapyComponent extends BackboneElement implements IBackboneElement {
  constructor(relationshipType: CodeableConcept | null = null, therapy: CodeableReference | null = null) {
    super();

    this.relationshipType = null;
    if (isDefined<CodeableConcept>(relationshipType)) {
      this.setRelationshipType(relationshipType);
    }

    this.therapy = null;
    if (isDefined<CodeableReference>(therapy)) {
      this.setTherapy(therapy);
    }
  }

  /**
   * Parse the provided `ClinicalUseDefinitionContraindicationOtherTherapyComponent` JSON to instantiate the ClinicalUseDefinitionContraindicationOtherTherapyComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ClinicalUseDefinitionContraindicationOtherTherapyComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ClinicalUseDefinitionContraindicationOtherTherapyComponent
   * @returns ClinicalUseDefinitionContraindicationOtherTherapyComponent data model or undefined for `ClinicalUseDefinitionContraindicationOtherTherapyComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ClinicalUseDefinitionContraindicationOtherTherapyComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ClinicalUseDefinitionContraindicationOtherTherapyComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ClinicalUseDefinitionContraindicationOtherTherapyComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    fieldName = 'relationshipType';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setRelationshipType(null);
      } else {
        instance.setRelationshipType(datatype);
      }
    } else {
      instance.setRelationshipType(null);
    }

    fieldName = 'therapy';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableReference | undefined = CodeableReference.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setTherapy(null);
      } else {
        instance.setTherapy(datatype);
      }
    } else {
      instance.setTherapy(null);
    }

    return instance;
  }

  /**
   * ClinicalUseDefinition.contraindication.otherTherapy.relationshipType Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The type of relationship between the product indication/contraindication and another therapy
   * - **Definition:** The type of relationship between the medicinal product indication or contraindication and another therapy.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private relationshipType: CodeableConcept | null;

  /**
   * ClinicalUseDefinition.contraindication.otherTherapy.therapy Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Reference to a specific medication as part of an indication or contraindication
   * - **Definition:** Reference to a specific medication (active substance, medicinal product or class of products) as part of an indication or contraindication.
   * - **FHIR Type:** `CodeableReference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/MedicinalProductDefinition',
   *       'http://hl7.org/fhir/StructureDefinition/Medication',
   *       'http://hl7.org/fhir/StructureDefinition/Substance',
   *       'http://hl7.org/fhir/StructureDefinition/SubstanceDefinition',
   *       'http://hl7.org/fhir/StructureDefinition/ActivityDefinition',
   *     ]
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private therapy: CodeableReference | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `relationshipType` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getRelationshipType(): CodeableConcept {
    return this.relationshipType ?? new CodeableConcept();
  }

  /**
   * Assigns the provided CodeableConcept object value to the `relationshipType` property.
   *
   * @param value - the `relationshipType` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setRelationshipType(value: CodeableConcept | undefined | null): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid ClinicalUseDefinition.contraindication.otherTherapy.relationshipType; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.relationshipType = value;
    } else {
      this.relationshipType = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `relationshipType` property exists and has a value; `false` otherwise
   */
  public hasRelationshipType(): boolean {
    return isDefined<CodeableConcept>(this.relationshipType) && !this.relationshipType.isEmpty();
  }

  /**
   * @returns the `therapy` property value as a CodeableReference object if defined; else an empty CodeableReference object
   */
  public getTherapy(): CodeableReference {
    return this.therapy ?? new CodeableReference();
  }

  /**
   * Assigns the provided CodeableReference object value to the `therapy` property.
   *
   * @param value - the `therapy` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setTherapy(value: CodeableReference | undefined | null): this {
    if (isDefined<CodeableReference>(value)) {
      const optErrMsg = `Invalid ClinicalUseDefinition.contraindication.otherTherapy.therapy; Provided element is not an instance of CodeableReference.`;
      assertFhirType<CodeableReference>(value, CodeableReference, optErrMsg);
      this.therapy = value;
    } else {
      this.therapy = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `therapy` property exists and has a value; `false` otherwise
   */
  public hasTherapy(): boolean {
    return isDefined<CodeableReference>(this.therapy) && !this.therapy.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'ClinicalUseDefinition.contraindication.otherTherapy';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.relationshipType,
      this.therapy,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.relationshipType, this.therapy, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ClinicalUseDefinitionContraindicationOtherTherapyComponent {
    const dest = new ClinicalUseDefinitionContraindicationOtherTherapyComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ClinicalUseDefinitionContraindicationOtherTherapyComponent): void {
    super.copyValues(dest);
    dest.relationshipType = this.relationshipType ? this.relationshipType.copy() : null;
    dest.therapy = this.therapy ? this.therapy.copy() : null;
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

    if (this.hasRelationshipType()) {
      setFhirComplexJson(this.getRelationshipType(), 'relationshipType', jsonObj);
    } else {
      jsonObj['relationshipType'] = null;
    }

    if (this.hasTherapy()) {
      setFhirComplexJson(this.getTherapy(), 'therapy', jsonObj);
    } else {
      jsonObj['therapy'] = null;
    }

    return jsonObj;
  }
}
/**
 * ClinicalUseDefinitionIndicationComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Specifics for when this is an indication
 * - **Definition:** Specifics for when this is an indication.
 *
 * @category Data Models: Resource
 * @see [FHIR ClinicalUseDefinition](http://hl7.org/fhir/StructureDefinition/ClinicalUseDefinition)
 */
export class ClinicalUseDefinitionIndicationComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `ClinicalUseDefinitionIndicationComponent` JSON to instantiate the ClinicalUseDefinitionIndicationComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ClinicalUseDefinitionIndicationComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ClinicalUseDefinitionIndicationComponent
   * @returns ClinicalUseDefinitionIndicationComponent data model or undefined for `ClinicalUseDefinitionIndicationComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ClinicalUseDefinitionIndicationComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ClinicalUseDefinitionIndicationComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ClinicalUseDefinitionIndicationComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    const classMetadata: DecoratorMetadataObject | null = ClinicalUseDefinitionIndicationComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for ClinicalUseDefinitionIndicationComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    fieldName = 'diseaseSymptomProcedure';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableReference | undefined = CodeableReference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setDiseaseSymptomProcedure(datatype);
    }

    fieldName = 'diseaseStatus';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableReference | undefined = CodeableReference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setDiseaseStatus(datatype);
    }

    fieldName = 'comorbidity';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableReference | undefined = CodeableReference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addComorbidity(datatype);
        }
      });
    }

    fieldName = 'intendedEffect';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableReference | undefined = CodeableReference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setIntendedEffect(datatype);
    }

    fieldName = 'duration[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const duration: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setDuration(duration);

    fieldName = 'undesirableEffect';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addUndesirableEffect(datatype);
        }
      });
  }

    fieldName = 'otherTherapy';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: ClinicalUseDefinitionContraindicationOtherTherapyComponent | undefined = ClinicalUseDefinitionContraindicationOtherTherapyComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addOtherTherapy(component);
        }
      });
    }

    return instance;
  }

  /**
   * ClinicalUseDefinition.indication.diseaseSymptomProcedure Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The situation that is being documented as an indicaton for this item
   * - **Definition:** The situation that is being documented as an indicaton for this item.
   * - **FHIR Type:** `CodeableReference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/ObservationDefinition',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private diseaseSymptomProcedure?: CodeableReference | undefined;

  /**
   * ClinicalUseDefinition.indication.diseaseStatus Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The status of the disease or symptom for the indication
   * - **Definition:** The status of the disease or symptom for the indication, for example "chronic" or "metastatic".
   * - **FHIR Type:** `CodeableReference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/ObservationDefinition',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private diseaseStatus?: CodeableReference | undefined;

  /**
   * ClinicalUseDefinition.indication.comorbidity Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A comorbidity or coinfection as part of the indication
   * - **Definition:** A comorbidity (concurrent condition) or coinfection as part of the indication.
   * - **FHIR Type:** `CodeableReference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/ObservationDefinition',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private comorbidity?: CodeableReference[] | undefined;

  /**
   * ClinicalUseDefinition.indication.intendedEffect Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The intended effect, aim or strategy to be achieved
   * - **Definition:** The intended effect, aim or strategy to be achieved.
   * - **FHIR Type:** `CodeableReference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/ObservationDefinition',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private intendedEffect?: CodeableReference | undefined;

  /**
   * ClinicalUseDefinition.indication.duration[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('ClinicalUseDefinition.indication.duration[x]', ['Range','string',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Timing or duration information
   * - **Definition:** Timing or duration information, that may be associated with use with the indicated condition e.g. Adult patients suffering from myocardial infarction (from a few days until less than 35 days), ischaemic stroke (from 7 days until less than 6 months).
   * - **FHIR Types:**
   *     'Range',
   *     'string',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  @ChoiceDataTypesMeta('ClinicalUseDefinition.indication.duration[x]',[
    'Range',
    'string',
  ])
  private duration?: IDataType | undefined;

  /**
   * ClinicalUseDefinition.indication.undesirableEffect Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** An unwanted side effect or negative outcome of the subject of this resource when being used for this indication
   * - **Definition:** An unwanted side effect or negative outcome that may happen if you use the drug (or other subject of this resource) for this indication.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/ClinicalUseDefinition',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private undesirableEffect?: Reference[] | undefined;

  /**
   * ClinicalUseDefinition.indication.otherTherapy Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The use of the medicinal product in relation to other therapies described as part of the indication
   * - **Definition:** Information about the use of the medicinal product in relation to other therapies described as part of the indication.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private otherTherapy?: ClinicalUseDefinitionContraindicationOtherTherapyComponent[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `diseaseSymptomProcedure` property value as a CodeableReference object if defined; else an empty CodeableReference object
   */
  public getDiseaseSymptomProcedure(): CodeableReference {
    return this.diseaseSymptomProcedure ?? new CodeableReference();
  }

  /**
   * Assigns the provided DiseaseSymptomProcedure object value to the `diseaseSymptomProcedure` property.
   *
   * @param value - the `diseaseSymptomProcedure` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDiseaseSymptomProcedure(value: CodeableReference | undefined): this {
    if (isDefined<CodeableReference>(value)) {
      const optErrMsg = `Invalid ClinicalUseDefinition.indication.diseaseSymptomProcedure; Provided element is not an instance of CodeableReference.`;
      assertFhirType<CodeableReference>(value, CodeableReference, optErrMsg);
      this.diseaseSymptomProcedure = value;
    } else {
      this.diseaseSymptomProcedure = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `diseaseSymptomProcedure` property exists and has a value; `false` otherwise
   */
  public hasDiseaseSymptomProcedure(): boolean {
    return isDefined<CodeableReference>(this.diseaseSymptomProcedure) && !this.diseaseSymptomProcedure.isEmpty();
  }

  /**
   * @returns the `diseaseStatus` property value as a CodeableReference object if defined; else an empty CodeableReference object
   */
  public getDiseaseStatus(): CodeableReference {
    return this.diseaseStatus ?? new CodeableReference();
  }

  /**
   * Assigns the provided DiseaseStatus object value to the `diseaseStatus` property.
   *
   * @param value - the `diseaseStatus` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDiseaseStatus(value: CodeableReference | undefined): this {
    if (isDefined<CodeableReference>(value)) {
      const optErrMsg = `Invalid ClinicalUseDefinition.indication.diseaseStatus; Provided element is not an instance of CodeableReference.`;
      assertFhirType<CodeableReference>(value, CodeableReference, optErrMsg);
      this.diseaseStatus = value;
    } else {
      this.diseaseStatus = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `diseaseStatus` property exists and has a value; `false` otherwise
   */
  public hasDiseaseStatus(): boolean {
    return isDefined<CodeableReference>(this.diseaseStatus) && !this.diseaseStatus.isEmpty();
  }

  /**
   * @returns the `comorbidity` property value as a CodeableReference array
   */
  public getComorbidity(): CodeableReference[] {
    return this.comorbidity ?? ([] as CodeableReference[]);
  }

  /**
   * Assigns the provided CodeableReference array value to the `comorbidity` property.
   *
   * @param value - the `comorbidity` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setComorbidity(value: CodeableReference[] | undefined): this {
    if (isDefinedList<CodeableReference>(value)) {
      const optErrMsg = `Invalid ClinicalUseDefinition.indication.comorbidity; Provided value array has an element that is not an instance of CodeableReference.`;
      assertFhirTypeList<CodeableReference>(value, CodeableReference, optErrMsg);
      this.comorbidity = value;
    } else {
      this.comorbidity = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableReference value to the `comorbidity` array property.
   *
   * @param value - the `comorbidity` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addComorbidity(value: CodeableReference | undefined): this {
    if (isDefined<CodeableReference>(value)) {
      const optErrMsg = `Invalid ClinicalUseDefinition.indication.comorbidity; Provided element is not an instance of CodeableReference.`;
      assertFhirType<CodeableReference>(value, CodeableReference, optErrMsg);
      this.initComorbidity();
      this.comorbidity?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `comorbidity` property exists and has a value; `false` otherwise
   */
  public hasComorbidity(): boolean {
    return isDefinedList<CodeableReference>(this.comorbidity) && this.comorbidity.some((item: CodeableReference) => !item.isEmpty());
  }

  /**
   * Initialize the `comorbidity` property
   */
  private initComorbidity(): void {
    if(!this.hasComorbidity()) {
      this.comorbidity = [] as CodeableReference[];
    }
  }

  /**
   * @returns the `intendedEffect` property value as a CodeableReference object if defined; else an empty CodeableReference object
   */
  public getIntendedEffect(): CodeableReference {
    return this.intendedEffect ?? new CodeableReference();
  }

  /**
   * Assigns the provided IntendedEffect object value to the `intendedEffect` property.
   *
   * @param value - the `intendedEffect` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setIntendedEffect(value: CodeableReference | undefined): this {
    if (isDefined<CodeableReference>(value)) {
      const optErrMsg = `Invalid ClinicalUseDefinition.indication.intendedEffect; Provided element is not an instance of CodeableReference.`;
      assertFhirType<CodeableReference>(value, CodeableReference, optErrMsg);
      this.intendedEffect = value;
    } else {
      this.intendedEffect = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `intendedEffect` property exists and has a value; `false` otherwise
   */
  public hasIntendedEffect(): boolean {
    return isDefined<CodeableReference>(this.intendedEffect) && !this.intendedEffect.isEmpty();
  }

  /**
   * @returns the `duration` property value as a DataType object if defined; else undefined
   */
  public getDuration(): IDataType | undefined {
    return this.duration;
  }

  /**
   * Assigns the provided DataType object value to the `duration` property.
   *
   * @decorator `@ChoiceDataTypes('ClinicalUseDefinition.indication.duration[x]')`
   *
   * @param value - the `duration` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('ClinicalUseDefinition.indication.duration[x]')
  public setDuration(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.duration = value;
    } else {
      this.duration = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `duration` property exists and has a value; `false` otherwise
   */
  public hasDuration(): boolean {
    return isDefined<IDataType>(this.duration) && !this.duration.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `duration` property value as a Range object if defined; else undefined
   */
  public getDurationRange(): Range | undefined {
    if (!isDefined<IDataType | undefined>(this.duration)) {
      return undefined;
    }
    if (!(this.duration instanceof Range)) {
      throw new InvalidTypeError(
        `DataType mismatch for ClinicalUseDefinition.indication.duration[x]: Expected Range but encountered ${this.duration.fhirType()}`,
      );
    }
    return this.duration;
  }

  /**
   * @returns `true` if the `duration` property exists as a Range and has a value; `false` otherwise
   */
  public hasDurationRange(): boolean {
    return this.hasDuration() && this.duration instanceof Range;
  }

  /**
   * @returns the `duration` property value as a StringType object if defined; else undefined
   */
  public getDurationStringType(): StringType | undefined {
    if (!isDefined<IDataType | undefined>(this.duration)) {
      return undefined;
    }
    if (!(this.duration instanceof StringType)) {
      throw new InvalidTypeError(
        `DataType mismatch for ClinicalUseDefinition.indication.duration[x]: Expected StringType but encountered ${this.duration.fhirType()}`,
      );
    }
    return this.duration;
  }

  /**
   * @returns `true` if the `duration` property exists as a StringType and has a value; `false` otherwise
   */
  public hasDurationStringType(): boolean {
    return this.hasDuration() && this.duration instanceof StringType;
  }

  // End of choice datatype-specific "get"/"has" methods

  /**
   * @returns the `undesirableEffect` property value as a Reference array
   */
  public getUndesirableEffect(): Reference[] {
    return this.undesirableEffect ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `undesirableEffect` property.
   *
   * @decorator `@ReferenceTargets('ClinicalUseDefinition.indication.undesirableEffect', ['ClinicalUseDefinition',])`
   *
   * @param value - the `undesirableEffect` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ClinicalUseDefinition.indication.undesirableEffect', [
    'ClinicalUseDefinition',
  ])
  public setUndesirableEffect(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.undesirableEffect = value;
    } else {
      this.undesirableEffect = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `undesirableEffect` array property.
   *
   * @decorator `@ReferenceTargets('ClinicalUseDefinition.indication.undesirableEffect', ['ClinicalUseDefinition',])`
   *
   * @param value - the `undesirableEffect` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ClinicalUseDefinition.indication.undesirableEffect', [
    'ClinicalUseDefinition',
  ])
  public addUndesirableEffect(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initUndesirableEffect();
      this.undesirableEffect?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `undesirableEffect` property exists and has a value; `false` otherwise
   */
  public hasUndesirableEffect(): boolean {
    return isDefinedList<Reference>(this.undesirableEffect) && this.undesirableEffect.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `undesirableEffect` property
   */
  private initUndesirableEffect(): void {
    if (!this.hasUndesirableEffect()) {
      this.undesirableEffect = [] as Reference[];
    }
  }

  /**
   * @returns the `otherTherapy` property value as a ClinicalUseDefinitionContraindicationOtherTherapyComponent array
   */
  public getOtherTherapy(): ClinicalUseDefinitionContraindicationOtherTherapyComponent[] {
    return this.otherTherapy ?? ([] as ClinicalUseDefinitionContraindicationOtherTherapyComponent[]);
  }

  /**
   * Assigns the provided ClinicalUseDefinitionContraindicationOtherTherapyComponent array value to the `otherTherapy` property.
   *
   * @param value - the `otherTherapy` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setOtherTherapy(value: ClinicalUseDefinitionContraindicationOtherTherapyComponent[] | undefined): this {
    if (isDefinedList<ClinicalUseDefinitionContraindicationOtherTherapyComponent>(value)) {
      const optErrMsg = `Invalid ClinicalUseDefinition.indication.otherTherapy; Provided value array has an element that is not an instance of ClinicalUseDefinitionContraindicationOtherTherapyComponent.`;
      assertFhirTypeList<ClinicalUseDefinitionContraindicationOtherTherapyComponent>(value, ClinicalUseDefinitionContraindicationOtherTherapyComponent, optErrMsg);
      this.otherTherapy = value;
    } else {
      this.otherTherapy = undefined;
    }
    return this;
  }

  /**
   * Add the provided ClinicalUseDefinitionContraindicationOtherTherapyComponent value to the `otherTherapy` array property.
   *
   * @param value - the `otherTherapy` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addOtherTherapy(value: ClinicalUseDefinitionContraindicationOtherTherapyComponent | undefined): this {
    if (isDefined<ClinicalUseDefinitionContraindicationOtherTherapyComponent>(value)) {
      const optErrMsg = `Invalid ClinicalUseDefinition.indication.otherTherapy; Provided element is not an instance of ClinicalUseDefinitionContraindicationOtherTherapyComponent.`;
      assertFhirType<ClinicalUseDefinitionContraindicationOtherTherapyComponent>(value, ClinicalUseDefinitionContraindicationOtherTherapyComponent, optErrMsg);
      this.initOtherTherapy();
      this.otherTherapy?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `otherTherapy` property exists and has a value; `false` otherwise
   */
  public hasOtherTherapy(): boolean {
    return isDefinedList<ClinicalUseDefinitionContraindicationOtherTherapyComponent>(this.otherTherapy) && this.otherTherapy.some((item: ClinicalUseDefinitionContraindicationOtherTherapyComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `otherTherapy` property
   */
  private initOtherTherapy(): void {
    if(!this.hasOtherTherapy()) {
      this.otherTherapy = [] as ClinicalUseDefinitionContraindicationOtherTherapyComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'ClinicalUseDefinition.indication';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.diseaseSymptomProcedure,
      this.diseaseStatus,
      this.comorbidity,
      this.intendedEffect,
      this.duration,
      this.undesirableEffect,
      this.otherTherapy,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ClinicalUseDefinitionIndicationComponent {
    const dest = new ClinicalUseDefinitionIndicationComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ClinicalUseDefinitionIndicationComponent): void {
    super.copyValues(dest);
    dest.diseaseSymptomProcedure = this.diseaseSymptomProcedure?.copy();
    dest.diseaseStatus = this.diseaseStatus?.copy();
    const comorbidityList = copyListValues<CodeableReference>(this.comorbidity);
    dest.comorbidity = comorbidityList.length === 0 ? undefined : comorbidityList;
    dest.intendedEffect = this.intendedEffect?.copy();
    dest.duration = this.duration?.copy() as IDataType;
    const undesirableEffectList = copyListValues<Reference>(this.undesirableEffect);
    dest.undesirableEffect = undesirableEffectList.length === 0 ? undefined : undesirableEffectList;
    const otherTherapyList = copyListValues<ClinicalUseDefinitionContraindicationOtherTherapyComponent>(this.otherTherapy);
    dest.otherTherapy = otherTherapyList.length === 0 ? undefined : otherTherapyList;
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

    if (this.hasDiseaseSymptomProcedure()) {
      setFhirComplexJson(this.getDiseaseSymptomProcedure(), 'diseaseSymptomProcedure', jsonObj);
    }

    if (this.hasDiseaseStatus()) {
      setFhirComplexJson(this.getDiseaseStatus(), 'diseaseStatus', jsonObj);
    }

    if (this.hasComorbidity()) {
      setFhirComplexListJson(this.getComorbidity(), 'comorbidity', jsonObj);
    }

    if (this.hasIntendedEffect()) {
      setFhirComplexJson(this.getIntendedEffect(), 'intendedEffect', jsonObj);
    }

    if (this.hasDuration()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getDuration()!, 'duration', jsonObj);
    }

    if (this.hasUndesirableEffect()) {
      setFhirComplexListJson(this.getUndesirableEffect(), 'undesirableEffect', jsonObj);
    }

    if (this.hasOtherTherapy()) {
      setFhirBackboneElementListJson(this.getOtherTherapy(), 'otherTherapy', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * ClinicalUseDefinitionInteractionComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Specifics for when this is an interaction
 * - **Definition:** Specifics for when this is an interaction.
 *
 * @category Data Models: Resource
 * @see [FHIR ClinicalUseDefinition](http://hl7.org/fhir/StructureDefinition/ClinicalUseDefinition)
 */
export class ClinicalUseDefinitionInteractionComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `ClinicalUseDefinitionInteractionComponent` JSON to instantiate the ClinicalUseDefinitionInteractionComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ClinicalUseDefinitionInteractionComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ClinicalUseDefinitionInteractionComponent
   * @returns ClinicalUseDefinitionInteractionComponent data model or undefined for `ClinicalUseDefinitionInteractionComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ClinicalUseDefinitionInteractionComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ClinicalUseDefinitionInteractionComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ClinicalUseDefinitionInteractionComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    fieldName = 'interactant';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: ClinicalUseDefinitionInteractionInteractantComponent | undefined = ClinicalUseDefinitionInteractionInteractantComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addInteractant(component);
        }
      });
    }

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setType(datatype);
    }

    fieldName = 'effect';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableReference | undefined = CodeableReference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setEffect(datatype);
    }

    fieldName = 'incidence';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setIncidence(datatype);
    }

    fieldName = 'management';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addManagement(datatype);
        }
      });
    }

    return instance;
  }

  /**
   * ClinicalUseDefinition.interaction.interactant Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The specific medication, food, substance or laboratory test that interacts
   * - **Definition:** The specific medication, food, substance or laboratory test that interacts.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private interactant?: ClinicalUseDefinitionInteractionInteractantComponent[] | undefined;

  /**
   * ClinicalUseDefinition.interaction.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The type of the interaction e.g. drug-drug interaction, drug-lab test interaction
   * - **Definition:** The type of the interaction e.g. drug-drug interaction, drug-food interaction, drug-lab test interaction.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private type_?: CodeableConcept | undefined;

  /**
   * ClinicalUseDefinition.interaction.effect Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The effect of the interaction, for example "reduced gastric absorption of primary medication"
   * - **Definition:** The effect of the interaction, for example "reduced gastric absorption of primary medication".
   * - **FHIR Type:** `CodeableReference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/ObservationDefinition',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private effect?: CodeableReference | undefined;

  /**
   * ClinicalUseDefinition.interaction.incidence Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The incidence of the interaction, e.g. theoretical, observed
   * - **Definition:** The incidence of the interaction, e.g. theoretical, observed.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private incidence?: CodeableConcept | undefined;

  /**
   * ClinicalUseDefinition.interaction.management Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Actions for managing the interaction
   * - **Definition:** Actions for managing the interaction.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private management?: CodeableConcept[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `interactant` property value as a ClinicalUseDefinitionInteractionInteractantComponent array
   */
  public getInteractant(): ClinicalUseDefinitionInteractionInteractantComponent[] {
    return this.interactant ?? ([] as ClinicalUseDefinitionInteractionInteractantComponent[]);
  }

  /**
   * Assigns the provided ClinicalUseDefinitionInteractionInteractantComponent array value to the `interactant` property.
   *
   * @param value - the `interactant` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setInteractant(value: ClinicalUseDefinitionInteractionInteractantComponent[] | undefined): this {
    if (isDefinedList<ClinicalUseDefinitionInteractionInteractantComponent>(value)) {
      const optErrMsg = `Invalid ClinicalUseDefinition.interaction.interactant; Provided value array has an element that is not an instance of ClinicalUseDefinitionInteractionInteractantComponent.`;
      assertFhirTypeList<ClinicalUseDefinitionInteractionInteractantComponent>(value, ClinicalUseDefinitionInteractionInteractantComponent, optErrMsg);
      this.interactant = value;
    } else {
      this.interactant = undefined;
    }
    return this;
  }

  /**
   * Add the provided ClinicalUseDefinitionInteractionInteractantComponent value to the `interactant` array property.
   *
   * @param value - the `interactant` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addInteractant(value: ClinicalUseDefinitionInteractionInteractantComponent | undefined): this {
    if (isDefined<ClinicalUseDefinitionInteractionInteractantComponent>(value)) {
      const optErrMsg = `Invalid ClinicalUseDefinition.interaction.interactant; Provided element is not an instance of ClinicalUseDefinitionInteractionInteractantComponent.`;
      assertFhirType<ClinicalUseDefinitionInteractionInteractantComponent>(value, ClinicalUseDefinitionInteractionInteractantComponent, optErrMsg);
      this.initInteractant();
      this.interactant?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `interactant` property exists and has a value; `false` otherwise
   */
  public hasInteractant(): boolean {
    return isDefinedList<ClinicalUseDefinitionInteractionInteractantComponent>(this.interactant) && this.interactant.some((item: ClinicalUseDefinitionInteractionInteractantComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `interactant` property
   */
  private initInteractant(): void {
    if(!this.hasInteractant()) {
      this.interactant = [] as ClinicalUseDefinitionInteractionInteractantComponent[];
    }
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
      const optErrMsg = `Invalid ClinicalUseDefinition.interaction.type; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `effect` property value as a CodeableReference object if defined; else an empty CodeableReference object
   */
  public getEffect(): CodeableReference {
    return this.effect ?? new CodeableReference();
  }

  /**
   * Assigns the provided Effect object value to the `effect` property.
   *
   * @param value - the `effect` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setEffect(value: CodeableReference | undefined): this {
    if (isDefined<CodeableReference>(value)) {
      const optErrMsg = `Invalid ClinicalUseDefinition.interaction.effect; Provided element is not an instance of CodeableReference.`;
      assertFhirType<CodeableReference>(value, CodeableReference, optErrMsg);
      this.effect = value;
    } else {
      this.effect = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `effect` property exists and has a value; `false` otherwise
   */
  public hasEffect(): boolean {
    return isDefined<CodeableReference>(this.effect) && !this.effect.isEmpty();
  }

  /**
   * @returns the `incidence` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getIncidence(): CodeableConcept {
    return this.incidence ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Incidence object value to the `incidence` property.
   *
   * @param value - the `incidence` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setIncidence(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid ClinicalUseDefinition.interaction.incidence; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.incidence = value;
    } else {
      this.incidence = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `incidence` property exists and has a value; `false` otherwise
   */
  public hasIncidence(): boolean {
    return isDefined<CodeableConcept>(this.incidence) && !this.incidence.isEmpty();
  }

  /**
   * @returns the `management` property value as a CodeableConcept array
   */
  public getManagement(): CodeableConcept[] {
    return this.management ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `management` property.
   *
   * @param value - the `management` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setManagement(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid ClinicalUseDefinition.interaction.management; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.management = value;
    } else {
      this.management = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `management` array property.
   *
   * @param value - the `management` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addManagement(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid ClinicalUseDefinition.interaction.management; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initManagement();
      this.management?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `management` property exists and has a value; `false` otherwise
   */
  public hasManagement(): boolean {
    return isDefinedList<CodeableConcept>(this.management) && this.management.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `management` property
   */
  private initManagement(): void {
    if(!this.hasManagement()) {
      this.management = [] as CodeableConcept[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'ClinicalUseDefinition.interaction';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.interactant,
      this.type_,
      this.effect,
      this.incidence,
      this.management,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ClinicalUseDefinitionInteractionComponent {
    const dest = new ClinicalUseDefinitionInteractionComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ClinicalUseDefinitionInteractionComponent): void {
    super.copyValues(dest);
    const interactantList = copyListValues<ClinicalUseDefinitionInteractionInteractantComponent>(this.interactant);
    dest.interactant = interactantList.length === 0 ? undefined : interactantList;
    dest.type_ = this.type_?.copy();
    dest.effect = this.effect?.copy();
    dest.incidence = this.incidence?.copy();
    const managementList = copyListValues<CodeableConcept>(this.management);
    dest.management = managementList.length === 0 ? undefined : managementList;
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

    if (this.hasInteractant()) {
      setFhirBackboneElementListJson(this.getInteractant(), 'interactant', jsonObj);
    }

    if (this.hasType()) {
      setFhirComplexJson(this.getType(), 'type', jsonObj);
    }

    if (this.hasEffect()) {
      setFhirComplexJson(this.getEffect(), 'effect', jsonObj);
    }

    if (this.hasIncidence()) {
      setFhirComplexJson(this.getIncidence(), 'incidence', jsonObj);
    }

    if (this.hasManagement()) {
      setFhirComplexListJson(this.getManagement(), 'management', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * ClinicalUseDefinitionInteractionInteractantComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** The specific medication, food, substance or laboratory test that interacts
 * - **Definition:** The specific medication, food, substance or laboratory test that interacts.
 *
 * @category Data Models: Resource
 * @see [FHIR ClinicalUseDefinition](http://hl7.org/fhir/StructureDefinition/ClinicalUseDefinition)
 */
export class ClinicalUseDefinitionInteractionInteractantComponent extends BackboneElement implements IBackboneElement {
  constructor(item: IDataType | null = null) {
    super();

    this.item = null;
    if (isDefined<IDataType>(item)) {
      this.setItem(item);
    }

  }

  /**
   * Parse the provided `ClinicalUseDefinitionInteractionInteractantComponent` JSON to instantiate the ClinicalUseDefinitionInteractionInteractantComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ClinicalUseDefinitionInteractionInteractantComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ClinicalUseDefinitionInteractionInteractantComponent
   * @returns ClinicalUseDefinitionInteractionInteractantComponent data model or undefined for `ClinicalUseDefinitionInteractionInteractantComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ClinicalUseDefinitionInteractionInteractantComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ClinicalUseDefinitionInteractionInteractantComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ClinicalUseDefinitionInteractionInteractantComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    const classMetadata: DecoratorMetadataObject | null = ClinicalUseDefinitionInteractionInteractantComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for ClinicalUseDefinitionInteractionInteractantComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    fieldName = 'item[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const item: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    if (item === undefined) {
      instance.setItem(null);
    } else {
      instance.setItem(item);
    }

    return instance;
  }

  /**
   * ClinicalUseDefinition.interaction.interactant.item[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('ClinicalUseDefinition.interaction.interactant.item[x]', ['Reference','CodeableConcept',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The specific medication, food or laboratory test that interacts
   * - **Definition:** The specific medication, food or laboratory test that interacts.
   * - **FHIR Types:**
   *     'Reference',
   *     'CodeableConcept',
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  @ChoiceDataTypesMeta('ClinicalUseDefinition.interaction.interactant.item[x]',[
    'Reference',
    'CodeableConcept',
  ])
  private item: IDataType | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `item` property value as a DataType object; else null
   */
  public getItem(): IDataType | null {
    return this.item;
  }

  /**
   * Assigns the provided DataType object value to the `item` property.
   *
   * @decorator `@ChoiceDataTypes('ClinicalUseDefinition.interaction.interactant.item[x]')`
   *
   * @param value - the `item` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('ClinicalUseDefinition.interaction.interactant.item[x]')
  public setItem(value: IDataType | undefined | null): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
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
    return isDefined<IDataType>(this.item) && !this.item.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `item` property value as a Reference object if defined; else null
   */
  public getItemReference(): Reference | null {
    if (!isDefined<IDataType>(this.item)) {
      return null;
    }
    if (!(this.item instanceof Reference)) {
      throw new InvalidTypeError(
        `DataType mismatch for ClinicalUseDefinition.interaction.interactant.item[x]: Expected Reference but encountered ${this.item.fhirType()}`,
      );
    }
    return this.item;
  }

  /**
   * @returns `true` if the `` property exists as a Reference and has a value; `false` otherwise
   */
  public hasItemReference(): boolean {
    return this.hasItem() && this.item instanceof Reference;
  }

  /**
   * @returns the `item` property value as a CodeableConcept object if defined; else null
   */
  public getItemCodeableConcept(): CodeableConcept | null {
    if (!isDefined<IDataType>(this.item)) {
      return null;
    }
    if (!(this.item instanceof CodeableConcept)) {
      throw new InvalidTypeError(
        `DataType mismatch for ClinicalUseDefinition.interaction.interactant.item[x]: Expected CodeableConcept but encountered ${this.item.fhirType()}`,
      );
    }
    return this.item;
  }

  /**
   * @returns `true` if the `` property exists as a CodeableConcept and has a value; `false` otherwise
   */
  public hasItemCodeableConcept(): boolean {
    return this.hasItem() && this.item instanceof CodeableConcept;
  }

  // End of choice datatype-specific "get"/"has" methods

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'ClinicalUseDefinition.interaction.interactant';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.item,
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
  public override copy(): ClinicalUseDefinitionInteractionInteractantComponent {
    const dest = new ClinicalUseDefinitionInteractionInteractantComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ClinicalUseDefinitionInteractionInteractantComponent): void {
    super.copyValues(dest);
    dest.item = this.item ? this.item.copy() as IDataType : null;
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
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getItem()!, 'item', jsonObj);
    } else {
      jsonObj['item'] = null;
    }

    return jsonObj;
  }
}
/**
 * ClinicalUseDefinitionUndesirableEffectComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** A possible negative outcome from the use of this treatment
 * - **Definition:** Describe the possible undesirable effects (negative outcomes) from the use of the medicinal product as treatment.
 *
 * @category Data Models: Resource
 * @see [FHIR ClinicalUseDefinition](http://hl7.org/fhir/StructureDefinition/ClinicalUseDefinition)
 */
export class ClinicalUseDefinitionUndesirableEffectComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `ClinicalUseDefinitionUndesirableEffectComponent` JSON to instantiate the ClinicalUseDefinitionUndesirableEffectComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ClinicalUseDefinitionUndesirableEffectComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ClinicalUseDefinitionUndesirableEffectComponent
   * @returns ClinicalUseDefinitionUndesirableEffectComponent data model or undefined for `ClinicalUseDefinitionUndesirableEffectComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ClinicalUseDefinitionUndesirableEffectComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ClinicalUseDefinitionUndesirableEffectComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ClinicalUseDefinitionUndesirableEffectComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    fieldName = 'symptomConditionEffect';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableReference | undefined = CodeableReference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setSymptomConditionEffect(datatype);
    }

    fieldName = 'classification';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setClassification(datatype);
    }

    fieldName = 'frequencyOfOccurrence';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setFrequencyOfOccurrence(datatype);
    }

    return instance;
  }

  /**
   * ClinicalUseDefinition.undesirableEffect.symptomConditionEffect Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The situation in which the undesirable effect may manifest
   * - **Definition:** The situation in which the undesirable effect may manifest.
   * - **FHIR Type:** `CodeableReference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/ObservationDefinition',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private symptomConditionEffect?: CodeableReference | undefined;

  /**
   * ClinicalUseDefinition.undesirableEffect.classification Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** High level classification of the effect
   * - **Definition:** High level classification of the effect.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private classification?: CodeableConcept | undefined;

  /**
   * ClinicalUseDefinition.undesirableEffect.frequencyOfOccurrence Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** How often the effect is seen
   * - **Definition:** How often the effect is seen.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private frequencyOfOccurrence?: CodeableConcept | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `symptomConditionEffect` property value as a CodeableReference object if defined; else an empty CodeableReference object
   */
  public getSymptomConditionEffect(): CodeableReference {
    return this.symptomConditionEffect ?? new CodeableReference();
  }

  /**
   * Assigns the provided SymptomConditionEffect object value to the `symptomConditionEffect` property.
   *
   * @param value - the `symptomConditionEffect` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSymptomConditionEffect(value: CodeableReference | undefined): this {
    if (isDefined<CodeableReference>(value)) {
      const optErrMsg = `Invalid ClinicalUseDefinition.undesirableEffect.symptomConditionEffect; Provided element is not an instance of CodeableReference.`;
      assertFhirType<CodeableReference>(value, CodeableReference, optErrMsg);
      this.symptomConditionEffect = value;
    } else {
      this.symptomConditionEffect = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `symptomConditionEffect` property exists and has a value; `false` otherwise
   */
  public hasSymptomConditionEffect(): boolean {
    return isDefined<CodeableReference>(this.symptomConditionEffect) && !this.symptomConditionEffect.isEmpty();
  }

  /**
   * @returns the `classification` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getClassification(): CodeableConcept {
    return this.classification ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Classification object value to the `classification` property.
   *
   * @param value - the `classification` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setClassification(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid ClinicalUseDefinition.undesirableEffect.classification; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.classification = value;
    } else {
      this.classification = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `classification` property exists and has a value; `false` otherwise
   */
  public hasClassification(): boolean {
    return isDefined<CodeableConcept>(this.classification) && !this.classification.isEmpty();
  }

  /**
   * @returns the `frequencyOfOccurrence` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getFrequencyOfOccurrence(): CodeableConcept {
    return this.frequencyOfOccurrence ?? new CodeableConcept();
  }

  /**
   * Assigns the provided FrequencyOfOccurrence object value to the `frequencyOfOccurrence` property.
   *
   * @param value - the `frequencyOfOccurrence` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setFrequencyOfOccurrence(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid ClinicalUseDefinition.undesirableEffect.frequencyOfOccurrence; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.frequencyOfOccurrence = value;
    } else {
      this.frequencyOfOccurrence = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `frequencyOfOccurrence` property exists and has a value; `false` otherwise
   */
  public hasFrequencyOfOccurrence(): boolean {
    return isDefined<CodeableConcept>(this.frequencyOfOccurrence) && !this.frequencyOfOccurrence.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'ClinicalUseDefinition.undesirableEffect';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.symptomConditionEffect,
      this.classification,
      this.frequencyOfOccurrence,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ClinicalUseDefinitionUndesirableEffectComponent {
    const dest = new ClinicalUseDefinitionUndesirableEffectComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ClinicalUseDefinitionUndesirableEffectComponent): void {
    super.copyValues(dest);
    dest.symptomConditionEffect = this.symptomConditionEffect?.copy();
    dest.classification = this.classification?.copy();
    dest.frequencyOfOccurrence = this.frequencyOfOccurrence?.copy();
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

    if (this.hasSymptomConditionEffect()) {
      setFhirComplexJson(this.getSymptomConditionEffect(), 'symptomConditionEffect', jsonObj);
    }

    if (this.hasClassification()) {
      setFhirComplexJson(this.getClassification(), 'classification', jsonObj);
    }

    if (this.hasFrequencyOfOccurrence()) {
      setFhirComplexJson(this.getFrequencyOfOccurrence(), 'frequencyOfOccurrence', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * ClinicalUseDefinitionWarningComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Critical environmental, health or physical risks or hazards. For example \'Do not operate heavy machinery\', \'May cause drowsiness\'
 * - **Definition:** A critical piece of information about environmental, health or physical risks or hazards that serve as caution to the user. For example \'Do not operate heavy machinery\', \'May cause drowsiness\', or \'Get medical advice/attention if you feel unwell\'.
 *
 * @category Data Models: Resource
 * @see [FHIR ClinicalUseDefinition](http://hl7.org/fhir/StructureDefinition/ClinicalUseDefinition)
 */
export class ClinicalUseDefinitionWarningComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `ClinicalUseDefinitionWarningComponent` JSON to instantiate the ClinicalUseDefinitionWarningComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ClinicalUseDefinitionWarningComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ClinicalUseDefinitionWarningComponent
   * @returns ClinicalUseDefinitionWarningComponent data model or undefined for `ClinicalUseDefinitionWarningComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ClinicalUseDefinitionWarningComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ClinicalUseDefinitionWarningComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ClinicalUseDefinitionWarningComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    fieldName = 'description';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: MarkdownType | undefined = fhirParser.parseMarkdownType(dtJson, dtSiblingJson);
      instance.setDescriptionElement(datatype);
    }

    fieldName = 'code';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setCode(datatype);
    }

    return instance;
  }

  /**
   * ClinicalUseDefinition.warning.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A textual definition of this warning, with formatting
   * - **Definition:** A textual definition of this warning, with formatting.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private description?: MarkdownType | undefined;

  /**
   * ClinicalUseDefinition.warning.code Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A coded or unformatted textual definition of this warning
   * - **Definition:** A coded or unformatted textual definition of this warning.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private code?: CodeableConcept | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

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
      const optErrMsg = `Invalid ClinicalUseDefinition.warning.description; Provided element is not an instance of MarkdownType.`;
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
      const optErrMsg = `Invalid ClinicalUseDefinition.warning.description (${String(value)})`;
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
      const optErrMsg = `Invalid ClinicalUseDefinition.warning.code; Provided element is not an instance of CodeableConcept.`;
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

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'ClinicalUseDefinition.warning';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.description,
      this.code,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ClinicalUseDefinitionWarningComponent {
    const dest = new ClinicalUseDefinitionWarningComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ClinicalUseDefinitionWarningComponent): void {
    super.copyValues(dest);
    dest.description = this.description?.copy();
    dest.code = this.code?.copy();
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

    if (this.hasDescriptionElement()) {
      setFhirPrimitiveJson<fhirMarkdown>(this.getDescriptionElement(), 'description', jsonObj);
    }

    if (this.hasCode()) {
      setFhirComplexJson(this.getCode(), 'code', jsonObj);
    }

    return jsonObj;
  }
}
