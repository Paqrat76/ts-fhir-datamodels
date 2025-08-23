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
 * VerificationResult Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/VerificationResult
 * StructureDefinition.name: VerificationResult
 * StructureDefinition.description: Describes validation requirements, source(s), status and dates for one or more elements.
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
  PrimitiveTypeJson,
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
  getPrimitiveTypeListJson,
  isDefined,
  isDefinedList,
  isElementEmpty,
  isEmpty,
  parseFhirPrimitiveData,
  setFhirBackboneElementJson,
  setFhirBackboneElementListJson,
  setFhirComplexJson,
  setFhirComplexListJson,
  setFhirPrimitiveJson,
  setFhirPrimitiveListJson,
} from '@paq-ts-fhir/fhir-core';
import { CodeableConcept, PARSABLE_DATATYPE_MAP, Reference, Signature, Timing } from '../complex-types/complex-datatypes';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';
import { VerificationresultStatusEnum } from '../code-systems/VerificationresultStatusEnum';

/**
 * VerificationResult Class
 *
 * @remarks
 * Describes validation requirements, source(s), status and dates for one or more elements.
 *
 * **FHIR Specification**
 * - **Short:** Describes validation requirements, source(s), status and dates for one or more elements
 * - **Definition:** Describes validation requirements, source(s), status and dates for one or more elements.
 * - **FHIR Version:** 4.3.0
 *
 * @category Data Models: Resource
 * @see [FHIR VerificationResult](http://hl7.org/fhir/StructureDefinition/VerificationResult)
 */
export class VerificationResult extends DomainResource implements IDomainResource {
  constructor(status: EnumCodeType | CodeType | fhirCode | null = null) {
    super();

    this.verificationresultStatusEnum = new VerificationresultStatusEnum();

    this.status = constructorCodeValueAsEnumCodeType<VerificationresultStatusEnum>(
      status,
      VerificationresultStatusEnum,
      this.verificationresultStatusEnum,
      'VerificationResult.status',
    );
  }

  /**
   * Parse the provided `VerificationResult` JSON to instantiate the VerificationResult data model.
   *
   * @param sourceJson - JSON representing FHIR `VerificationResult`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to VerificationResult
   * @returns VerificationResult data model or undefined for `VerificationResult`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): VerificationResult | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'VerificationResult';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new VerificationResult();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'VerificationResult');
    fhirParser.processDomainResourceJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const missingReqdProperties: string[] = [];

    fieldName = 'target';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addTarget(datatype);
        }
      });
  }

    fieldName = 'targetLocation';
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
        const datatype: StringType | undefined = fhirParser.parseStringType(dataJson.dtJson, dataJson.dtSiblingJson);
        if (datatype !== undefined) {
          instance.addTargetLocationElement(datatype);
        }
      });
    }

    fieldName = 'need';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setNeed(datatype);
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

    fieldName = 'statusDate';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dtJson, dtSiblingJson);
      instance.setStatusDateElement(datatype);
    }

    fieldName = 'validationType';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setValidationType(datatype);
    }

    fieldName = 'validationProcess';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addValidationProcess(datatype);
        }
      });
    }

    fieldName = 'frequency';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Timing | undefined = Timing.parse(classJsonObj[fieldName]!, sourceField);
      instance.setFrequency(datatype);
    }

    fieldName = 'lastPerformed';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dtJson, dtSiblingJson);
      instance.setLastPerformedElement(datatype);
    }

    fieldName = 'nextScheduled';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateType | undefined = fhirParser.parseDateType(dtJson, dtSiblingJson);
      instance.setNextScheduledElement(datatype);
    }

    fieldName = 'failureAction';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setFailureAction(datatype);
    }

    fieldName = 'primarySource';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: VerificationResultPrimarySourceComponent | undefined = VerificationResultPrimarySourceComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addPrimarySource(component);
        }
      });
    }

    fieldName = 'attestation';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: VerificationResultAttestationComponent | undefined = VerificationResultAttestationComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setAttestation(component);
    }

    fieldName = 'validator';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: VerificationResultValidatorComponent | undefined = VerificationResultValidatorComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addValidator(component);
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
   * VerificationResult.target Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A resource that was validated
   * - **Definition:** A resource that was validated.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Resource',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private target?: Reference[] | undefined;

  /**
   * VerificationResult.targetLocation Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The fhirpath location(s) within the resource that was validated
   * - **Definition:** The fhirpath location(s) within the resource that was validated.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private targetLocation?: StringType[] | undefined;

  /**
   * VerificationResult.need Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** none | initial | periodic
   * - **Definition:** The frequency with which the target must be validated (none; initial; periodic).
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private need?: CodeableConcept | undefined;

  /**
   * FHIR CodeSystem: VerificationresultStatus
   *
   * @see {@link VerificationresultStatusEnum }
   */
  private readonly verificationresultStatusEnum: VerificationresultStatusEnum;

  /**
   * VerificationResult.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** attested | validated | in-process | req-revalid | val-fail | reval-fail
   * - **Definition:** The validation status of the target (attested; validated; in process; requires revalidation; validation failed; revalidation failed).
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link VerificationresultStatusEnum }
   */
  private status: EnumCodeType | null;

  /**
   * VerificationResult.statusDate Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When the validation status was updated
   * - **Definition:** When the validation status was updated.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private statusDate?: DateTimeType | undefined;

  /**
   * VerificationResult.validationType Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** nothing | primary | multiple
   * - **Definition:** What the target is validated against (nothing; primary source; multiple sources).
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private validationType?: CodeableConcept | undefined;

  /**
   * VerificationResult.validationProcess Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The primary process by which the target is validated (edit check; value set; primary source; multiple sources; standalone; in context)
   * - **Definition:** The primary process by which the target is validated (edit check; value set; primary source; multiple sources; standalone; in context).
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private validationProcess?: CodeableConcept[] | undefined;

  /**
   * VerificationResult.frequency Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Frequency of revalidation
   * - **Definition:** Frequency of revalidation.
   * - **FHIR Type:** `Timing`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private frequency?: Timing | undefined;

  /**
   * VerificationResult.lastPerformed Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The date/time validation was last completed (including failed validations)
   * - **Definition:** The date/time validation was last completed (including failed validations).
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private lastPerformed?: DateTimeType | undefined;

  /**
   * VerificationResult.nextScheduled Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The date when target is next validated, if appropriate
   * - **Definition:** The date when target is next validated, if appropriate.
   * - **FHIR Type:** `date`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private nextScheduled?: DateType | undefined;

  /**
   * VerificationResult.failureAction Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** fatal | warn | rec-only | none
   * - **Definition:** The result if validation fails (fatal; warning; record only; none).
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private failureAction?: CodeableConcept | undefined;

  /**
   * VerificationResult.primarySource Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Information about the primary source(s) involved in validation
   * - **Definition:** Information about the primary source(s) involved in validation.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private primarySource?: VerificationResultPrimarySourceComponent[] | undefined;

  /**
   * VerificationResult.attestation Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Information about the entity attesting to information
   * - **Definition:** Information about the entity attesting to information.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private attestation?: VerificationResultAttestationComponent | undefined;

  /**
   * VerificationResult.validator Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Information about the entity validating information
   * - **Definition:** Information about the entity validating information.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private validator?: VerificationResultValidatorComponent[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `target` property value as a Reference array
   */
  public getTarget(): Reference[] {
    return this.target ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `target` property.
   *
   * @decorator `@ReferenceTargets('VerificationResult.target', ['Resource',])`
   *
   * @param value - the `target` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('VerificationResult.target', [
    'Resource',
  ])
  public setTarget(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.target = value;
    } else {
      this.target = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `target` array property.
   *
   * @decorator `@ReferenceTargets('VerificationResult.target', ['Resource',])`
   *
   * @param value - the `target` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('VerificationResult.target', [
    'Resource',
  ])
  public addTarget(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initTarget();
      this.target?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `target` property exists and has a value; `false` otherwise
   */
  public hasTarget(): boolean {
    return isDefinedList<Reference>(this.target) && this.target.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `target` property
   */
  private initTarget(): void {
    if (!this.hasTarget()) {
      this.target = [] as Reference[];
    }
  }

  /**
   * @returns the `targetLocation` property value as a StringType array
   */
  public getTargetLocationElement(): StringType[] {
    return this.targetLocation ?? ([] as StringType[]);
  }

  /**
   * Assigns the provided StringType array value to the `targetLocation` property.
   *
   * @param element - the `targetLocation` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setTargetLocationElement(element: StringType[] | undefined): this {
    if (isDefinedList<StringType>(element)) {
      const optErrMsg = `Invalid VerificationResult.targetLocation; Provided value array has an element that is not an instance of StringType.`;
      assertFhirTypeList<StringType>(element, StringType, optErrMsg);
      this.targetLocation = element;
    } else {
      this.targetLocation = undefined;
    }
    return this;
  }

  /**
   * Add the provided StringType value to the `targetLocation` array property.
   *
   * @param element - the `targetLocation` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addTargetLocationElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid VerificationResult.targetLocation; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.initTargetLocation();
      this.targetLocation?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `targetLocation` property exists and has a value; `false` otherwise
   */
  public hasTargetLocationElement(): boolean {
    return isDefinedList<StringType>(this.targetLocation) && this.targetLocation.some((item: StringType) => !item.isEmpty());
  }

  /**
   * @returns the `targetLocation` property value as a fhirString array
   */
  public getTargetLocation(): fhirString[] {
    this.initTargetLocation();
    const targetLocationValues = [] as fhirString[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.targetLocation!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        targetLocationValues.push(value);
      }
    }
    return targetLocationValues;
  }

  /**
   * Assigns the provided primitive value array to the `targetLocation` property.
   *
   * @param value - the `targetLocation` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setTargetLocation(value: fhirString[] | undefined): this {
    if (isDefinedList<fhirString>(value)) {
      const targetLocationElements = [] as StringType[];
      for (const targetLocationValue of value) {
        const optErrMsg = `Invalid VerificationResult.targetLocation array item (${String(targetLocationValue)})`;
        const element = new StringType(parseFhirPrimitiveData(targetLocationValue, fhirStringSchema, optErrMsg));
        targetLocationElements.push(element);
      }
      this.targetLocation = targetLocationElements;
    } else {
      this.targetLocation = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `targetLocation` array property.
   *
   * @param value - the `targetLocation` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addTargetLocation(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid VerificationResult.targetLocation array item (${String(value)})`;
      const element = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
      this.initTargetLocation();
      this.addTargetLocationElement(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `targetLocation` property exists and has a value; `false` otherwise
   */
  public hasTargetLocation(): boolean {
    return this.hasTargetLocationElement();
  }

  /**
   * Initialize the `targetLocation` property
   */
  private initTargetLocation(): void {
    if (!this.hasTargetLocation()) {
      this.targetLocation = [] as StringType[];
    }
  }

  /**
   * @returns the `need` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getNeed(): CodeableConcept {
    return this.need ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Need object value to the `need` property.
   *
   * @param value - the `need` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setNeed(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid VerificationResult.need; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.need = value;
    } else {
      this.need = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `need` property exists and has a value; `false` otherwise
   */
  public hasNeed(): boolean {
    return isDefined<CodeableConcept>(this.need) && !this.need.isEmpty();
  }

  /**
   * @returns the `status` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link VerificationresultStatusEnum }
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
   * @see CodeSystem Enumeration: {@link VerificationresultStatusEnum }
   */
  public setStatusEnumType(enumType: EnumCodeType): this {
    assertIsDefined<EnumCodeType>(enumType, `VerificationResult.status is required`);
    const errMsgPrefix = `Invalid VerificationResult.status`;
    assertEnumCodeType<VerificationresultStatusEnum>(enumType, VerificationresultStatusEnum, errMsgPrefix);
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
   * @see CodeSystem Enumeration: {@link VerificationresultStatusEnum }
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
   * @see CodeSystem Enumeration: {@link VerificationresultStatusEnum }
   */
  public setStatusElement(element: CodeType): this {
    assertIsDefined<CodeType>(element, `VerificationResult.status is required`);
    const optErrMsg = `Invalid VerificationResult.status; Provided value is not an instance of CodeType.`;
    assertFhirType<CodeType>(element, CodeType, optErrMsg);
    this.status = new EnumCodeType(element, this.verificationresultStatusEnum);
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
   * @see CodeSystem Enumeration: {@link VerificationresultStatusEnum }
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
   * @see CodeSystem Enumeration: {@link VerificationresultStatusEnum }
   */
  public setStatus(value: fhirCode): this {
    assertIsDefined<fhirCode>(value, `VerificationResult.status is required`);
    const optErrMsg = `Invalid VerificationResult.status (${String(value)})`;
    this.status = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.verificationresultStatusEnum);
    return this;
  }

  /**
   * @returns `true` if the `status` property exists and has a value; `false` otherwise
   */
  public hasStatus(): boolean {
    return this.hasStatusEnumType();
  }

  /**
   * @returns the `statusDate` property value as a DateTimeType object if defined; else an empty DateTimeType object
   */
  public getStatusDateElement(): DateTimeType {
    return this.statusDate ?? new DateTimeType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `statusDate` property.
   *
   * @param element - the `statusDate` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setStatusDateElement(element: DateTimeType | undefined): this {
    if (isDefined<DateTimeType>(element)) {
      const optErrMsg = `Invalid VerificationResult.statusDate; Provided element is not an instance of DateTimeType.`;
      assertFhirType<DateTimeType>(element, DateTimeType, optErrMsg);
      this.statusDate = element;
    } else {
      this.statusDate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `statusDate` property exists and has a value; `false` otherwise
   */
  public hasStatusDateElement(): boolean {
    return isDefined<DateTimeType>(this.statusDate) && !this.statusDate.isEmpty();
  }

  /**
   * @returns the `statusDate` property value as a fhirDateTime if defined; else undefined
   */
  public getStatusDate(): fhirDateTime | undefined {
    return this.statusDate?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `statusDate` property.
   *
   * @param value - the `statusDate` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setStatusDate(value: fhirDateTime | undefined): this {
    if (isDefined<fhirDateTime>(value)) {
      const optErrMsg = `Invalid VerificationResult.statusDate (${String(value)})`;
      this.statusDate = new DateTimeType(parseFhirPrimitiveData(value, fhirDateTimeSchema, optErrMsg));
    } else {
      this.statusDate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `statusDate` property exists and has a value; `false` otherwise
   */
  public hasStatusDate(): boolean {
    return this.hasStatusDateElement();
  }

  /**
   * @returns the `validationType` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getValidationType(): CodeableConcept {
    return this.validationType ?? new CodeableConcept();
  }

  /**
   * Assigns the provided ValidationType object value to the `validationType` property.
   *
   * @param value - the `validationType` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setValidationType(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid VerificationResult.validationType; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.validationType = value;
    } else {
      this.validationType = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `validationType` property exists and has a value; `false` otherwise
   */
  public hasValidationType(): boolean {
    return isDefined<CodeableConcept>(this.validationType) && !this.validationType.isEmpty();
  }

  /**
   * @returns the `validationProcess` property value as a CodeableConcept array
   */
  public getValidationProcess(): CodeableConcept[] {
    return this.validationProcess ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `validationProcess` property.
   *
   * @param value - the `validationProcess` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setValidationProcess(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid VerificationResult.validationProcess; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.validationProcess = value;
    } else {
      this.validationProcess = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `validationProcess` array property.
   *
   * @param value - the `validationProcess` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addValidationProcess(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid VerificationResult.validationProcess; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initValidationProcess();
      this.validationProcess?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `validationProcess` property exists and has a value; `false` otherwise
   */
  public hasValidationProcess(): boolean {
    return isDefinedList<CodeableConcept>(this.validationProcess) && this.validationProcess.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `validationProcess` property
   */
  private initValidationProcess(): void {
    if(!this.hasValidationProcess()) {
      this.validationProcess = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `frequency` property value as a Timing object if defined; else an empty Timing object
   */
  public getFrequency(): Timing {
    return this.frequency ?? new Timing();
  }

  /**
   * Assigns the provided Frequency object value to the `frequency` property.
   *
   * @param value - the `frequency` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setFrequency(value: Timing | undefined): this {
    if (isDefined<Timing>(value)) {
      const optErrMsg = `Invalid VerificationResult.frequency; Provided element is not an instance of Timing.`;
      assertFhirType<Timing>(value, Timing, optErrMsg);
      this.frequency = value;
    } else {
      this.frequency = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `frequency` property exists and has a value; `false` otherwise
   */
  public hasFrequency(): boolean {
    return isDefined<Timing>(this.frequency) && !this.frequency.isEmpty();
  }

  /**
   * @returns the `lastPerformed` property value as a DateTimeType object if defined; else an empty DateTimeType object
   */
  public getLastPerformedElement(): DateTimeType {
    return this.lastPerformed ?? new DateTimeType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `lastPerformed` property.
   *
   * @param element - the `lastPerformed` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setLastPerformedElement(element: DateTimeType | undefined): this {
    if (isDefined<DateTimeType>(element)) {
      const optErrMsg = `Invalid VerificationResult.lastPerformed; Provided element is not an instance of DateTimeType.`;
      assertFhirType<DateTimeType>(element, DateTimeType, optErrMsg);
      this.lastPerformed = element;
    } else {
      this.lastPerformed = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `lastPerformed` property exists and has a value; `false` otherwise
   */
  public hasLastPerformedElement(): boolean {
    return isDefined<DateTimeType>(this.lastPerformed) && !this.lastPerformed.isEmpty();
  }

  /**
   * @returns the `lastPerformed` property value as a fhirDateTime if defined; else undefined
   */
  public getLastPerformed(): fhirDateTime | undefined {
    return this.lastPerformed?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `lastPerformed` property.
   *
   * @param value - the `lastPerformed` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setLastPerformed(value: fhirDateTime | undefined): this {
    if (isDefined<fhirDateTime>(value)) {
      const optErrMsg = `Invalid VerificationResult.lastPerformed (${String(value)})`;
      this.lastPerformed = new DateTimeType(parseFhirPrimitiveData(value, fhirDateTimeSchema, optErrMsg));
    } else {
      this.lastPerformed = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `lastPerformed` property exists and has a value; `false` otherwise
   */
  public hasLastPerformed(): boolean {
    return this.hasLastPerformedElement();
  }

  /**
   * @returns the `nextScheduled` property value as a DateType object if defined; else an empty DateType object
   */
  public getNextScheduledElement(): DateType {
    return this.nextScheduled ?? new DateType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `nextScheduled` property.
   *
   * @param element - the `nextScheduled` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setNextScheduledElement(element: DateType | undefined): this {
    if (isDefined<DateType>(element)) {
      const optErrMsg = `Invalid VerificationResult.nextScheduled; Provided element is not an instance of DateType.`;
      assertFhirType<DateType>(element, DateType, optErrMsg);
      this.nextScheduled = element;
    } else {
      this.nextScheduled = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `nextScheduled` property exists and has a value; `false` otherwise
   */
  public hasNextScheduledElement(): boolean {
    return isDefined<DateType>(this.nextScheduled) && !this.nextScheduled.isEmpty();
  }

  /**
   * @returns the `nextScheduled` property value as a fhirDate if defined; else undefined
   */
  public getNextScheduled(): fhirDate | undefined {
    return this.nextScheduled?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `nextScheduled` property.
   *
   * @param value - the `nextScheduled` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setNextScheduled(value: fhirDate | undefined): this {
    if (isDefined<fhirDate>(value)) {
      const optErrMsg = `Invalid VerificationResult.nextScheduled (${String(value)})`;
      this.nextScheduled = new DateType(parseFhirPrimitiveData(value, fhirDateSchema, optErrMsg));
    } else {
      this.nextScheduled = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `nextScheduled` property exists and has a value; `false` otherwise
   */
  public hasNextScheduled(): boolean {
    return this.hasNextScheduledElement();
  }

  /**
   * @returns the `failureAction` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getFailureAction(): CodeableConcept {
    return this.failureAction ?? new CodeableConcept();
  }

  /**
   * Assigns the provided FailureAction object value to the `failureAction` property.
   *
   * @param value - the `failureAction` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setFailureAction(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid VerificationResult.failureAction; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.failureAction = value;
    } else {
      this.failureAction = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `failureAction` property exists and has a value; `false` otherwise
   */
  public hasFailureAction(): boolean {
    return isDefined<CodeableConcept>(this.failureAction) && !this.failureAction.isEmpty();
  }

  /**
   * @returns the `primarySource` property value as a VerificationResultPrimarySourceComponent array
   */
  public getPrimarySource(): VerificationResultPrimarySourceComponent[] {
    return this.primarySource ?? ([] as VerificationResultPrimarySourceComponent[]);
  }

  /**
   * Assigns the provided VerificationResultPrimarySourceComponent array value to the `primarySource` property.
   *
   * @param value - the `primarySource` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPrimarySource(value: VerificationResultPrimarySourceComponent[] | undefined): this {
    if (isDefinedList<VerificationResultPrimarySourceComponent>(value)) {
      const optErrMsg = `Invalid VerificationResult.primarySource; Provided value array has an element that is not an instance of VerificationResultPrimarySourceComponent.`;
      assertFhirTypeList<VerificationResultPrimarySourceComponent>(value, VerificationResultPrimarySourceComponent, optErrMsg);
      this.primarySource = value;
    } else {
      this.primarySource = undefined;
    }
    return this;
  }

  /**
   * Add the provided VerificationResultPrimarySourceComponent value to the `primarySource` array property.
   *
   * @param value - the `primarySource` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addPrimarySource(value: VerificationResultPrimarySourceComponent | undefined): this {
    if (isDefined<VerificationResultPrimarySourceComponent>(value)) {
      const optErrMsg = `Invalid VerificationResult.primarySource; Provided element is not an instance of VerificationResultPrimarySourceComponent.`;
      assertFhirType<VerificationResultPrimarySourceComponent>(value, VerificationResultPrimarySourceComponent, optErrMsg);
      this.initPrimarySource();
      this.primarySource?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `primarySource` property exists and has a value; `false` otherwise
   */
  public hasPrimarySource(): boolean {
    return isDefinedList<VerificationResultPrimarySourceComponent>(this.primarySource) && this.primarySource.some((item: VerificationResultPrimarySourceComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `primarySource` property
   */
  private initPrimarySource(): void {
    if(!this.hasPrimarySource()) {
      this.primarySource = [] as VerificationResultPrimarySourceComponent[];
    }
  }

  /**
   * @returns the `attestation` property value as a VerificationResultAttestationComponent object if defined; else an empty VerificationResultAttestationComponent object
   */
  public getAttestation(): VerificationResultAttestationComponent {
    return this.attestation ?? new VerificationResultAttestationComponent();
  }

  /**
   * Assigns the provided Attestation object value to the `attestation` property.
   *
   * @param value - the `attestation` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAttestation(value: VerificationResultAttestationComponent | undefined): this {
    if (isDefined<VerificationResultAttestationComponent>(value)) {
      const optErrMsg = `Invalid VerificationResult.attestation; Provided element is not an instance of VerificationResultAttestationComponent.`;
      assertFhirType<VerificationResultAttestationComponent>(value, VerificationResultAttestationComponent, optErrMsg);
      this.attestation = value;
    } else {
      this.attestation = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `attestation` property exists and has a value; `false` otherwise
   */
  public hasAttestation(): boolean {
    return isDefined<VerificationResultAttestationComponent>(this.attestation) && !this.attestation.isEmpty();
  }

  /**
   * @returns the `validator` property value as a VerificationResultValidatorComponent array
   */
  public getValidator(): VerificationResultValidatorComponent[] {
    return this.validator ?? ([] as VerificationResultValidatorComponent[]);
  }

  /**
   * Assigns the provided VerificationResultValidatorComponent array value to the `validator` property.
   *
   * @param value - the `validator` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setValidator(value: VerificationResultValidatorComponent[] | undefined): this {
    if (isDefinedList<VerificationResultValidatorComponent>(value)) {
      const optErrMsg = `Invalid VerificationResult.validator; Provided value array has an element that is not an instance of VerificationResultValidatorComponent.`;
      assertFhirTypeList<VerificationResultValidatorComponent>(value, VerificationResultValidatorComponent, optErrMsg);
      this.validator = value;
    } else {
      this.validator = undefined;
    }
    return this;
  }

  /**
   * Add the provided VerificationResultValidatorComponent value to the `validator` array property.
   *
   * @param value - the `validator` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addValidator(value: VerificationResultValidatorComponent | undefined): this {
    if (isDefined<VerificationResultValidatorComponent>(value)) {
      const optErrMsg = `Invalid VerificationResult.validator; Provided element is not an instance of VerificationResultValidatorComponent.`;
      assertFhirType<VerificationResultValidatorComponent>(value, VerificationResultValidatorComponent, optErrMsg);
      this.initValidator();
      this.validator?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `validator` property exists and has a value; `false` otherwise
   */
  public hasValidator(): boolean {
    return isDefinedList<VerificationResultValidatorComponent>(this.validator) && this.validator.some((item: VerificationResultValidatorComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `validator` property
   */
  private initValidator(): void {
    if(!this.hasValidator()) {
      this.validator = [] as VerificationResultValidatorComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'VerificationResult';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.target,
      this.targetLocation,
      this.need,
      this.status,
      this.statusDate,
      this.validationType,
      this.validationProcess,
      this.frequency,
      this.lastPerformed,
      this.nextScheduled,
      this.failureAction,
      this.primarySource,
      this.attestation,
      this.validator,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): VerificationResult {
    const dest = new VerificationResult();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: VerificationResult): void {
    super.copyValues(dest);
    const targetList = copyListValues<Reference>(this.target);
    dest.target = targetList.length === 0 ? undefined : targetList;
    const targetLocationList = copyListValues<StringType>(this.targetLocation);
    dest.targetLocation = targetLocationList.length === 0 ? undefined : targetLocationList;
    dest.need = this.need?.copy();
    dest.status = this.status ? this.status.copy() : null;
    dest.statusDate = this.statusDate?.copy();
    dest.validationType = this.validationType?.copy();
    const validationProcessList = copyListValues<CodeableConcept>(this.validationProcess);
    dest.validationProcess = validationProcessList.length === 0 ? undefined : validationProcessList;
    dest.frequency = this.frequency?.copy();
    dest.lastPerformed = this.lastPerformed?.copy();
    dest.nextScheduled = this.nextScheduled?.copy();
    dest.failureAction = this.failureAction?.copy();
    const primarySourceList = copyListValues<VerificationResultPrimarySourceComponent>(this.primarySource);
    dest.primarySource = primarySourceList.length === 0 ? undefined : primarySourceList;
    dest.attestation = this.attestation?.copy();
    const validatorList = copyListValues<VerificationResultValidatorComponent>(this.validator);
    dest.validator = validatorList.length === 0 ? undefined : validatorList;
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

    if (this.hasTarget()) {
      setFhirComplexListJson(this.getTarget(), 'target', jsonObj);
    }

    if (this.hasTargetLocation()) {
      setFhirPrimitiveListJson(this.getTargetLocationElement(), 'targetLocation', jsonObj);
    }

    if (this.hasNeed()) {
      setFhirComplexJson(this.getNeed(), 'need', jsonObj);
    }

    if (this.hasStatusElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getStatusElement()!, 'status', jsonObj);
    } else {
      missingReqdProperties.push(`VerificationResult.status`);
    }

    if (this.hasStatusDateElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getStatusDateElement(), 'statusDate', jsonObj);
    }

    if (this.hasValidationType()) {
      setFhirComplexJson(this.getValidationType(), 'validationType', jsonObj);
    }

    if (this.hasValidationProcess()) {
      setFhirComplexListJson(this.getValidationProcess(), 'validationProcess', jsonObj);
    }

    if (this.hasFrequency()) {
      setFhirComplexJson(this.getFrequency(), 'frequency', jsonObj);
    }

    if (this.hasLastPerformedElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getLastPerformedElement(), 'lastPerformed', jsonObj);
    }

    if (this.hasNextScheduledElement()) {
      setFhirPrimitiveJson<fhirDate>(this.getNextScheduledElement(), 'nextScheduled', jsonObj);
    }

    if (this.hasFailureAction()) {
      setFhirComplexJson(this.getFailureAction(), 'failureAction', jsonObj);
    }

    if (this.hasPrimarySource()) {
      setFhirBackboneElementListJson(this.getPrimarySource(), 'primarySource', jsonObj);
    }

    if (this.hasAttestation()) {
      setFhirBackboneElementJson(this.getAttestation(), 'attestation', jsonObj);
    }

    if (this.hasValidator()) {
      setFhirBackboneElementListJson(this.getValidator(), 'validator', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}

/**
 * VerificationResultPrimarySourceComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Information about the primary source(s) involved in validation
 * - **Definition:** Information about the primary source(s) involved in validation.
 *
 * @category Data Models: Resource
 * @see [FHIR VerificationResult](http://hl7.org/fhir/StructureDefinition/VerificationResult)
 */
export class VerificationResultPrimarySourceComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `VerificationResultPrimarySourceComponent` JSON to instantiate the VerificationResultPrimarySourceComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `VerificationResultPrimarySourceComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to VerificationResultPrimarySourceComponent
   * @returns VerificationResultPrimarySourceComponent data model or undefined for `VerificationResultPrimarySourceComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): VerificationResultPrimarySourceComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'VerificationResultPrimarySourceComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new VerificationResultPrimarySourceComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    fieldName = 'who';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setWho(datatype);
    }

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

    fieldName = 'communicationMethod';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addCommunicationMethod(datatype);
        }
      });
    }

    fieldName = 'validationStatus';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setValidationStatus(datatype);
    }

    fieldName = 'validationDate';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dtJson, dtSiblingJson);
      instance.setValidationDateElement(datatype);
    }

    fieldName = 'canPushUpdates';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setCanPushUpdates(datatype);
    }

    fieldName = 'pushTypeAvailable';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addPushTypeAvailable(datatype);
        }
      });
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * VerificationResult.primarySource.who Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Reference to the primary source
   * - **Definition:** Reference to the primary source.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private who?: Reference | undefined;

  /**
   * VerificationResult.primarySource.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Type of primary source (License Board; Primary Education; Continuing Education; Postal Service; Relationship owner; Registration Authority; legal source; issuing source; authoritative source)
   * - **Definition:** Type of primary source (License Board; Primary Education; Continuing Education; Postal Service; Relationship owner; Registration Authority; legal source; issuing source; authoritative source).
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private type_?: CodeableConcept[] | undefined;

  /**
   * VerificationResult.primarySource.communicationMethod Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Method for exchanging information with the primary source
   * - **Definition:** Method for communicating with the primary source (manual; API; Push).
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private communicationMethod?: CodeableConcept[] | undefined;

  /**
   * VerificationResult.primarySource.validationStatus Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** successful | failed | unknown
   * - **Definition:** Status of the validation of the target against the primary source (successful; failed; unknown).
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private validationStatus?: CodeableConcept | undefined;

  /**
   * VerificationResult.primarySource.validationDate Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When the target was validated against the primary source
   * - **Definition:** When the target was validated against the primary source.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private validationDate?: DateTimeType | undefined;

  /**
   * VerificationResult.primarySource.canPushUpdates Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** yes | no | undetermined
   * - **Definition:** Ability of the primary source to push updates/alerts (yes; no; undetermined).
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private canPushUpdates?: CodeableConcept | undefined;

  /**
   * VerificationResult.primarySource.pushTypeAvailable Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** specific | any | source
   * - **Definition:** Type of alerts/updates the primary source can send (specific requested changes; any changes; as defined by source).
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private pushTypeAvailable?: CodeableConcept[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `who` property value as a Reference object; else an empty Reference object
   */
  public getWho(): Reference {
    return this.who ?? new Reference();
  }

  /**
   * Assigns the provided Who object value to the `who` property.
   *
   * @decorator `@ReferenceTargets('VerificationResult.primarySource.who', ['Organization','Practitioner','PractitionerRole',])`
   *
   * @param value - the `who` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('VerificationResult.primarySource.who', [
    'Organization',
  
    'Practitioner',
  
    'PractitionerRole',
  ])
  public setWho(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.who = value;
    } else {
      this.who = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `who` property exists and has a value; `false` otherwise
   */
  public hasWho(): boolean {
    return isDefined<Reference>(this.who) && !this.who.isEmpty();
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
      const optErrMsg = `Invalid VerificationResult.primarySource.type; Provided value array has an element that is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid VerificationResult.primarySource.type; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `communicationMethod` property value as a CodeableConcept array
   */
  public getCommunicationMethod(): CodeableConcept[] {
    return this.communicationMethod ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `communicationMethod` property.
   *
   * @param value - the `communicationMethod` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCommunicationMethod(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid VerificationResult.primarySource.communicationMethod; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.communicationMethod = value;
    } else {
      this.communicationMethod = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `communicationMethod` array property.
   *
   * @param value - the `communicationMethod` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addCommunicationMethod(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid VerificationResult.primarySource.communicationMethod; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initCommunicationMethod();
      this.communicationMethod?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `communicationMethod` property exists and has a value; `false` otherwise
   */
  public hasCommunicationMethod(): boolean {
    return isDefinedList<CodeableConcept>(this.communicationMethod) && this.communicationMethod.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `communicationMethod` property
   */
  private initCommunicationMethod(): void {
    if(!this.hasCommunicationMethod()) {
      this.communicationMethod = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `validationStatus` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getValidationStatus(): CodeableConcept {
    return this.validationStatus ?? new CodeableConcept();
  }

  /**
   * Assigns the provided ValidationStatus object value to the `validationStatus` property.
   *
   * @param value - the `validationStatus` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setValidationStatus(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid VerificationResult.primarySource.validationStatus; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.validationStatus = value;
    } else {
      this.validationStatus = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `validationStatus` property exists and has a value; `false` otherwise
   */
  public hasValidationStatus(): boolean {
    return isDefined<CodeableConcept>(this.validationStatus) && !this.validationStatus.isEmpty();
  }

  /**
   * @returns the `validationDate` property value as a DateTimeType object if defined; else an empty DateTimeType object
   */
  public getValidationDateElement(): DateTimeType {
    return this.validationDate ?? new DateTimeType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `validationDate` property.
   *
   * @param element - the `validationDate` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setValidationDateElement(element: DateTimeType | undefined): this {
    if (isDefined<DateTimeType>(element)) {
      const optErrMsg = `Invalid VerificationResult.primarySource.validationDate; Provided element is not an instance of DateTimeType.`;
      assertFhirType<DateTimeType>(element, DateTimeType, optErrMsg);
      this.validationDate = element;
    } else {
      this.validationDate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `validationDate` property exists and has a value; `false` otherwise
   */
  public hasValidationDateElement(): boolean {
    return isDefined<DateTimeType>(this.validationDate) && !this.validationDate.isEmpty();
  }

  /**
   * @returns the `validationDate` property value as a fhirDateTime if defined; else undefined
   */
  public getValidationDate(): fhirDateTime | undefined {
    return this.validationDate?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `validationDate` property.
   *
   * @param value - the `validationDate` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setValidationDate(value: fhirDateTime | undefined): this {
    if (isDefined<fhirDateTime>(value)) {
      const optErrMsg = `Invalid VerificationResult.primarySource.validationDate (${String(value)})`;
      this.validationDate = new DateTimeType(parseFhirPrimitiveData(value, fhirDateTimeSchema, optErrMsg));
    } else {
      this.validationDate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `validationDate` property exists and has a value; `false` otherwise
   */
  public hasValidationDate(): boolean {
    return this.hasValidationDateElement();
  }

  /**
   * @returns the `canPushUpdates` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getCanPushUpdates(): CodeableConcept {
    return this.canPushUpdates ?? new CodeableConcept();
  }

  /**
   * Assigns the provided CanPushUpdates object value to the `canPushUpdates` property.
   *
   * @param value - the `canPushUpdates` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCanPushUpdates(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid VerificationResult.primarySource.canPushUpdates; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.canPushUpdates = value;
    } else {
      this.canPushUpdates = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `canPushUpdates` property exists and has a value; `false` otherwise
   */
  public hasCanPushUpdates(): boolean {
    return isDefined<CodeableConcept>(this.canPushUpdates) && !this.canPushUpdates.isEmpty();
  }

  /**
   * @returns the `pushTypeAvailable` property value as a CodeableConcept array
   */
  public getPushTypeAvailable(): CodeableConcept[] {
    return this.pushTypeAvailable ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `pushTypeAvailable` property.
   *
   * @param value - the `pushTypeAvailable` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPushTypeAvailable(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid VerificationResult.primarySource.pushTypeAvailable; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.pushTypeAvailable = value;
    } else {
      this.pushTypeAvailable = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `pushTypeAvailable` array property.
   *
   * @param value - the `pushTypeAvailable` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addPushTypeAvailable(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid VerificationResult.primarySource.pushTypeAvailable; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initPushTypeAvailable();
      this.pushTypeAvailable?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `pushTypeAvailable` property exists and has a value; `false` otherwise
   */
  public hasPushTypeAvailable(): boolean {
    return isDefinedList<CodeableConcept>(this.pushTypeAvailable) && this.pushTypeAvailable.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `pushTypeAvailable` property
   */
  private initPushTypeAvailable(): void {
    if(!this.hasPushTypeAvailable()) {
      this.pushTypeAvailable = [] as CodeableConcept[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'VerificationResult.primarySource';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.who,
      this.type_,
      this.communicationMethod,
      this.validationStatus,
      this.validationDate,
      this.canPushUpdates,
      this.pushTypeAvailable,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): VerificationResultPrimarySourceComponent {
    const dest = new VerificationResultPrimarySourceComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: VerificationResultPrimarySourceComponent): void {
    super.copyValues(dest);
    dest.who = this.who?.copy();
    const typeList = copyListValues<CodeableConcept>(this.type_);
    dest.type_ = typeList.length === 0 ? undefined : typeList;
    const communicationMethodList = copyListValues<CodeableConcept>(this.communicationMethod);
    dest.communicationMethod = communicationMethodList.length === 0 ? undefined : communicationMethodList;
    dest.validationStatus = this.validationStatus?.copy();
    dest.validationDate = this.validationDate?.copy();
    dest.canPushUpdates = this.canPushUpdates?.copy();
    const pushTypeAvailableList = copyListValues<CodeableConcept>(this.pushTypeAvailable);
    dest.pushTypeAvailable = pushTypeAvailableList.length === 0 ? undefined : pushTypeAvailableList;
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

    if (this.hasWho()) {
      setFhirComplexJson(this.getWho(), 'who', jsonObj);
    }

    if (this.hasType()) {
      setFhirComplexListJson(this.getType(), 'type', jsonObj);
    }

    if (this.hasCommunicationMethod()) {
      setFhirComplexListJson(this.getCommunicationMethod(), 'communicationMethod', jsonObj);
    }

    if (this.hasValidationStatus()) {
      setFhirComplexJson(this.getValidationStatus(), 'validationStatus', jsonObj);
    }

    if (this.hasValidationDateElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getValidationDateElement(), 'validationDate', jsonObj);
    }

    if (this.hasCanPushUpdates()) {
      setFhirComplexJson(this.getCanPushUpdates(), 'canPushUpdates', jsonObj);
    }

    if (this.hasPushTypeAvailable()) {
      setFhirComplexListJson(this.getPushTypeAvailable(), 'pushTypeAvailable', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * VerificationResultAttestationComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Information about the entity attesting to information
 * - **Definition:** Information about the entity attesting to information.
 *
 * @category Data Models: Resource
 * @see [FHIR VerificationResult](http://hl7.org/fhir/StructureDefinition/VerificationResult)
 */
export class VerificationResultAttestationComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `VerificationResultAttestationComponent` JSON to instantiate the VerificationResultAttestationComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `VerificationResultAttestationComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to VerificationResultAttestationComponent
   * @returns VerificationResultAttestationComponent data model or undefined for `VerificationResultAttestationComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): VerificationResultAttestationComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'VerificationResultAttestationComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new VerificationResultAttestationComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'who';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setWho(datatype);
    }

    fieldName = 'onBehalfOf';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setOnBehalfOf(datatype);
    }

    fieldName = 'communicationMethod';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setCommunicationMethod(datatype);
    }

    fieldName = 'date';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateType | undefined = fhirParser.parseDateType(dtJson, dtSiblingJson);
      instance.setDateElement(datatype);
    }

    fieldName = 'sourceIdentityCertificate';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setSourceIdentityCertificateElement(datatype);
    }

    fieldName = 'proxyIdentityCertificate';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setProxyIdentityCertificateElement(datatype);
    }

    fieldName = 'proxySignature';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Signature | undefined = Signature.parse(classJsonObj[fieldName]!, sourceField);
      instance.setProxySignature(datatype);
    }

    fieldName = 'sourceSignature';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Signature | undefined = Signature.parse(classJsonObj[fieldName]!, sourceField);
      instance.setSourceSignature(datatype);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * VerificationResult.attestation.who Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The individual or organization attesting to information
   * - **Definition:** The individual or organization attesting to information.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private who?: Reference | undefined;

  /**
   * VerificationResult.attestation.onBehalfOf Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When the who is asserting on behalf of another (organization or individual)
   * - **Definition:** When the who is asserting on behalf of another (organization or individual).
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private onBehalfOf?: Reference | undefined;

  /**
   * VerificationResult.attestation.communicationMethod Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The method by which attested information was submitted/retrieved
   * - **Definition:** The method by which attested information was submitted/retrieved (manual; API; Push).
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private communicationMethod?: CodeableConcept | undefined;

  /**
   * VerificationResult.attestation.date Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The date the information was attested to
   * - **Definition:** The date the information was attested to.
   * - **FHIR Type:** `date`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private date?: DateType | undefined;

  /**
   * VerificationResult.attestation.sourceIdentityCertificate Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A digital identity certificate associated with the attestation source
   * - **Definition:** A digital identity certificate associated with the attestation source.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private sourceIdentityCertificate?: StringType | undefined;

  /**
   * VerificationResult.attestation.proxyIdentityCertificate Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A digital identity certificate associated with the proxy entity submitting attested information on behalf of the attestation source
   * - **Definition:** A digital identity certificate associated with the proxy entity submitting attested information on behalf of the attestation source.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private proxyIdentityCertificate?: StringType | undefined;

  /**
   * VerificationResult.attestation.proxySignature Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Proxy signature
   * - **Definition:** Signed assertion by the proxy entity indicating that they have the right to submit attested information on behalf of the attestation source.
   * - **FHIR Type:** `Signature`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private proxySignature?: Signature | undefined;

  /**
   * VerificationResult.attestation.sourceSignature Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Attester signature
   * - **Definition:** Signed assertion by the attestation source that they have attested to the information.
   * - **FHIR Type:** `Signature`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private sourceSignature?: Signature | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `who` property value as a Reference object; else an empty Reference object
   */
  public getWho(): Reference {
    return this.who ?? new Reference();
  }

  /**
   * Assigns the provided Who object value to the `who` property.
   *
   * @decorator `@ReferenceTargets('VerificationResult.attestation.who', ['Practitioner','PractitionerRole','Organization',])`
   *
   * @param value - the `who` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('VerificationResult.attestation.who', [
    'Practitioner',
  
    'PractitionerRole',
  
    'Organization',
  ])
  public setWho(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.who = value;
    } else {
      this.who = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `who` property exists and has a value; `false` otherwise
   */
  public hasWho(): boolean {
    return isDefined<Reference>(this.who) && !this.who.isEmpty();
  }

  /**
   * @returns the `onBehalfOf` property value as a Reference object; else an empty Reference object
   */
  public getOnBehalfOf(): Reference {
    return this.onBehalfOf ?? new Reference();
  }

  /**
   * Assigns the provided OnBehalfOf object value to the `onBehalfOf` property.
   *
   * @decorator `@ReferenceTargets('VerificationResult.attestation.onBehalfOf', ['Organization','Practitioner','PractitionerRole',])`
   *
   * @param value - the `onBehalfOf` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('VerificationResult.attestation.onBehalfOf', [
    'Organization',
  
    'Practitioner',
  
    'PractitionerRole',
  ])
  public setOnBehalfOf(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.onBehalfOf = value;
    } else {
      this.onBehalfOf = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `onBehalfOf` property exists and has a value; `false` otherwise
   */
  public hasOnBehalfOf(): boolean {
    return isDefined<Reference>(this.onBehalfOf) && !this.onBehalfOf.isEmpty();
  }

  /**
   * @returns the `communicationMethod` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getCommunicationMethod(): CodeableConcept {
    return this.communicationMethod ?? new CodeableConcept();
  }

  /**
   * Assigns the provided CommunicationMethod object value to the `communicationMethod` property.
   *
   * @param value - the `communicationMethod` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCommunicationMethod(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid VerificationResult.attestation.communicationMethod; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.communicationMethod = value;
    } else {
      this.communicationMethod = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `communicationMethod` property exists and has a value; `false` otherwise
   */
  public hasCommunicationMethod(): boolean {
    return isDefined<CodeableConcept>(this.communicationMethod) && !this.communicationMethod.isEmpty();
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
      const optErrMsg = `Invalid VerificationResult.attestation.date; Provided element is not an instance of DateType.`;
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
      const optErrMsg = `Invalid VerificationResult.attestation.date (${String(value)})`;
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
   * @returns the `sourceIdentityCertificate` property value as a StringType object if defined; else an empty StringType object
   */
  public getSourceIdentityCertificateElement(): StringType {
    return this.sourceIdentityCertificate ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `sourceIdentityCertificate` property.
   *
   * @param element - the `sourceIdentityCertificate` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSourceIdentityCertificateElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid VerificationResult.attestation.sourceIdentityCertificate; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.sourceIdentityCertificate = element;
    } else {
      this.sourceIdentityCertificate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `sourceIdentityCertificate` property exists and has a value; `false` otherwise
   */
  public hasSourceIdentityCertificateElement(): boolean {
    return isDefined<StringType>(this.sourceIdentityCertificate) && !this.sourceIdentityCertificate.isEmpty();
  }

  /**
   * @returns the `sourceIdentityCertificate` property value as a fhirString if defined; else undefined
   */
  public getSourceIdentityCertificate(): fhirString | undefined {
    return this.sourceIdentityCertificate?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `sourceIdentityCertificate` property.
   *
   * @param value - the `sourceIdentityCertificate` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSourceIdentityCertificate(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid VerificationResult.attestation.sourceIdentityCertificate (${String(value)})`;
      this.sourceIdentityCertificate = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.sourceIdentityCertificate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `sourceIdentityCertificate` property exists and has a value; `false` otherwise
   */
  public hasSourceIdentityCertificate(): boolean {
    return this.hasSourceIdentityCertificateElement();
  }

  /**
   * @returns the `proxyIdentityCertificate` property value as a StringType object if defined; else an empty StringType object
   */
  public getProxyIdentityCertificateElement(): StringType {
    return this.proxyIdentityCertificate ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `proxyIdentityCertificate` property.
   *
   * @param element - the `proxyIdentityCertificate` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setProxyIdentityCertificateElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid VerificationResult.attestation.proxyIdentityCertificate; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.proxyIdentityCertificate = element;
    } else {
      this.proxyIdentityCertificate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `proxyIdentityCertificate` property exists and has a value; `false` otherwise
   */
  public hasProxyIdentityCertificateElement(): boolean {
    return isDefined<StringType>(this.proxyIdentityCertificate) && !this.proxyIdentityCertificate.isEmpty();
  }

  /**
   * @returns the `proxyIdentityCertificate` property value as a fhirString if defined; else undefined
   */
  public getProxyIdentityCertificate(): fhirString | undefined {
    return this.proxyIdentityCertificate?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `proxyIdentityCertificate` property.
   *
   * @param value - the `proxyIdentityCertificate` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setProxyIdentityCertificate(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid VerificationResult.attestation.proxyIdentityCertificate (${String(value)})`;
      this.proxyIdentityCertificate = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.proxyIdentityCertificate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `proxyIdentityCertificate` property exists and has a value; `false` otherwise
   */
  public hasProxyIdentityCertificate(): boolean {
    return this.hasProxyIdentityCertificateElement();
  }

  /**
   * @returns the `proxySignature` property value as a Signature object if defined; else an empty Signature object
   */
  public getProxySignature(): Signature {
    return this.proxySignature ?? new Signature();
  }

  /**
   * Assigns the provided ProxySignature object value to the `proxySignature` property.
   *
   * @param value - the `proxySignature` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setProxySignature(value: Signature | undefined): this {
    if (isDefined<Signature>(value)) {
      const optErrMsg = `Invalid VerificationResult.attestation.proxySignature; Provided element is not an instance of Signature.`;
      assertFhirType<Signature>(value, Signature, optErrMsg);
      this.proxySignature = value;
    } else {
      this.proxySignature = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `proxySignature` property exists and has a value; `false` otherwise
   */
  public hasProxySignature(): boolean {
    return isDefined<Signature>(this.proxySignature) && !this.proxySignature.isEmpty();
  }

  /**
   * @returns the `sourceSignature` property value as a Signature object if defined; else an empty Signature object
   */
  public getSourceSignature(): Signature {
    return this.sourceSignature ?? new Signature();
  }

  /**
   * Assigns the provided SourceSignature object value to the `sourceSignature` property.
   *
   * @param value - the `sourceSignature` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSourceSignature(value: Signature | undefined): this {
    if (isDefined<Signature>(value)) {
      const optErrMsg = `Invalid VerificationResult.attestation.sourceSignature; Provided element is not an instance of Signature.`;
      assertFhirType<Signature>(value, Signature, optErrMsg);
      this.sourceSignature = value;
    } else {
      this.sourceSignature = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `sourceSignature` property exists and has a value; `false` otherwise
   */
  public hasSourceSignature(): boolean {
    return isDefined<Signature>(this.sourceSignature) && !this.sourceSignature.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'VerificationResult.attestation';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.who,
      this.onBehalfOf,
      this.communicationMethod,
      this.date,
      this.sourceIdentityCertificate,
      this.proxyIdentityCertificate,
      this.proxySignature,
      this.sourceSignature,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): VerificationResultAttestationComponent {
    const dest = new VerificationResultAttestationComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: VerificationResultAttestationComponent): void {
    super.copyValues(dest);
    dest.who = this.who?.copy();
    dest.onBehalfOf = this.onBehalfOf?.copy();
    dest.communicationMethod = this.communicationMethod?.copy();
    dest.date = this.date?.copy();
    dest.sourceIdentityCertificate = this.sourceIdentityCertificate?.copy();
    dest.proxyIdentityCertificate = this.proxyIdentityCertificate?.copy();
    dest.proxySignature = this.proxySignature?.copy();
    dest.sourceSignature = this.sourceSignature?.copy();
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

    if (this.hasWho()) {
      setFhirComplexJson(this.getWho(), 'who', jsonObj);
    }

    if (this.hasOnBehalfOf()) {
      setFhirComplexJson(this.getOnBehalfOf(), 'onBehalfOf', jsonObj);
    }

    if (this.hasCommunicationMethod()) {
      setFhirComplexJson(this.getCommunicationMethod(), 'communicationMethod', jsonObj);
    }

    if (this.hasDateElement()) {
      setFhirPrimitiveJson<fhirDate>(this.getDateElement(), 'date', jsonObj);
    }

    if (this.hasSourceIdentityCertificateElement()) {
      setFhirPrimitiveJson<fhirString>(this.getSourceIdentityCertificateElement(), 'sourceIdentityCertificate', jsonObj);
    }

    if (this.hasProxyIdentityCertificateElement()) {
      setFhirPrimitiveJson<fhirString>(this.getProxyIdentityCertificateElement(), 'proxyIdentityCertificate', jsonObj);
    }

    if (this.hasProxySignature()) {
      setFhirComplexJson(this.getProxySignature(), 'proxySignature', jsonObj);
    }

    if (this.hasSourceSignature()) {
      setFhirComplexJson(this.getSourceSignature(), 'sourceSignature', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * VerificationResultValidatorComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Information about the entity validating information
 * - **Definition:** Information about the entity validating information.
 *
 * @category Data Models: Resource
 * @see [FHIR VerificationResult](http://hl7.org/fhir/StructureDefinition/VerificationResult)
 */
export class VerificationResultValidatorComponent extends BackboneElement implements IBackboneElement {
  constructor(organization: Reference | null = null) {
    super();

    this.organization = null;
    if (isDefined<Reference>(organization)) {
      this.setOrganization(organization);
    }
  }

  /**
   * Parse the provided `VerificationResultValidatorComponent` JSON to instantiate the VerificationResultValidatorComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `VerificationResultValidatorComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to VerificationResultValidatorComponent
   * @returns VerificationResultValidatorComponent data model or undefined for `VerificationResultValidatorComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): VerificationResultValidatorComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'VerificationResultValidatorComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new VerificationResultValidatorComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    const missingReqdProperties: string[] = [];

    fieldName = 'organization';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setOrganization(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'identityCertificate';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setIdentityCertificateElement(datatype);
    }

    fieldName = 'attestationSignature';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Signature | undefined = Signature.parse(classJsonObj[fieldName]!, sourceField);
      instance.setAttestationSignature(datatype);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_REQD_IN_JSON} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * VerificationResult.validator.organization Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Reference to the organization validating information
   * - **Definition:** Reference to the organization validating information.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *     ]
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private organization: Reference | null;

  /**
   * VerificationResult.validator.identityCertificate Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A digital identity certificate associated with the validator
   * - **Definition:** A digital identity certificate associated with the validator.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private identityCertificate?: StringType | undefined;

  /**
   * VerificationResult.validator.attestationSignature Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Validator signature
   * - **Definition:** Signed assertion by the validator that they have validated the information.
   * - **FHIR Type:** `Signature`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private attestationSignature?: Signature | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `organization` property value as a Reference object if defined; else null
   */
  public getOrganization(): Reference | null {
    return this.organization;
  }

  /**
   * Assigns the provided Organization object value to the `organization` property.
   *
   * @decorator `@ReferenceTargets('VerificationResult.validator.organization', ['Organization',])`
   *
   * @param value - the `organization` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('VerificationResult.validator.organization', [
    'Organization',
  ])
  public setOrganization(value: Reference): this {
    assertIsDefined<Reference>(value, `VerificationResult.validator.organization is required`);
    // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
    this.organization = value;
    return this;
  }

  /**
   * @returns `true` if the `organization` property exists and has a value; `false` otherwise
   */
  public hasOrganization(): boolean {
    return isDefined<Reference>(this.organization) && !this.organization.isEmpty();
  }

  /**
   * @returns the `identityCertificate` property value as a StringType object if defined; else an empty StringType object
   */
  public getIdentityCertificateElement(): StringType {
    return this.identityCertificate ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `identityCertificate` property.
   *
   * @param element - the `identityCertificate` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setIdentityCertificateElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid VerificationResult.validator.identityCertificate; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.identityCertificate = element;
    } else {
      this.identityCertificate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `identityCertificate` property exists and has a value; `false` otherwise
   */
  public hasIdentityCertificateElement(): boolean {
    return isDefined<StringType>(this.identityCertificate) && !this.identityCertificate.isEmpty();
  }

  /**
   * @returns the `identityCertificate` property value as a fhirString if defined; else undefined
   */
  public getIdentityCertificate(): fhirString | undefined {
    return this.identityCertificate?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `identityCertificate` property.
   *
   * @param value - the `identityCertificate` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setIdentityCertificate(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid VerificationResult.validator.identityCertificate (${String(value)})`;
      this.identityCertificate = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.identityCertificate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `identityCertificate` property exists and has a value; `false` otherwise
   */
  public hasIdentityCertificate(): boolean {
    return this.hasIdentityCertificateElement();
  }

  /**
   * @returns the `attestationSignature` property value as a Signature object if defined; else an empty Signature object
   */
  public getAttestationSignature(): Signature {
    return this.attestationSignature ?? new Signature();
  }

  /**
   * Assigns the provided AttestationSignature object value to the `attestationSignature` property.
   *
   * @param value - the `attestationSignature` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAttestationSignature(value: Signature | undefined): this {
    if (isDefined<Signature>(value)) {
      const optErrMsg = `Invalid VerificationResult.validator.attestationSignature; Provided element is not an instance of Signature.`;
      assertFhirType<Signature>(value, Signature, optErrMsg);
      this.attestationSignature = value;
    } else {
      this.attestationSignature = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `attestationSignature` property exists and has a value; `false` otherwise
   */
  public hasAttestationSignature(): boolean {
    return isDefined<Signature>(this.attestationSignature) && !this.attestationSignature.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'VerificationResult.validator';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.organization,
      this.identityCertificate,
      this.attestationSignature,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): VerificationResultValidatorComponent {
    const dest = new VerificationResultValidatorComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: VerificationResultValidatorComponent): void {
    super.copyValues(dest);
    dest.organization = this.organization ? this.organization.copy() : null;
    dest.identityCertificate = this.identityCertificate?.copy();
    dest.attestationSignature = this.attestationSignature?.copy();
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

    if (this.hasOrganization()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getOrganization()!, 'organization', jsonObj);
    } else {
      missingReqdProperties.push(`VerificationResult.validator.organization`);
    }

    if (this.hasIdentityCertificateElement()) {
      setFhirPrimitiveJson<fhirString>(this.getIdentityCertificateElement(), 'identityCertificate', jsonObj);
    }

    if (this.hasAttestationSignature()) {
      setFhirComplexJson(this.getAttestationSignature(), 'attestationSignature', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
