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
 * VisionPrescription Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/VisionPrescription
 * StructureDefinition.name: VisionPrescription
 * StructureDefinition.description: An authorization for the provision of glasses and/or contact lenses to a patient.
 * StructureDefinition.fhirVersion: 4.0.1
 *
 * For questions, suggestions, or bugs, please open an issue at [GitHub ts-fhir-datamodels/issues](https://github.com/Paqrat76/ts-fhir-datamodels/issues).
 *
 * @packageDocumentation
 */

import {
  BackboneElement,
  CodeType,
  DateTimeType,
  DecimalType,
  DomainResource,
  EnumCodeType,
  FhirParser,
  IBackboneElement,
  IDomainResource,
  IntegerType,
  JSON,
  PrimitiveType,
  ReferenceTargets,
  StringType,
  assertEnumCodeType,
  assertFhirType,
  assertFhirTypeList,
  constructorCodeValueAsEnumCodeType,
  copyListValues,
  fhirCode,
  fhirCodeSchema,
  fhirDateTime,
  fhirDateTimeSchema,
  fhirDecimal,
  fhirDecimalSchema,
  fhirInteger,
  fhirIntegerSchema,
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
import { Annotation, CodeableConcept, Identifier, PARSABLE_DATATYPE_MAP, Quantity, Reference } from '../complex-types/complex-datatypes';
import { FmStatusEnum } from '../code-systems/FmStatusEnum';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';
import { VisionBaseCodesEnum } from '../code-systems/VisionBaseCodesEnum';
import { VisionEyeCodesEnum } from '../code-systems/VisionEyeCodesEnum';

/**
 * VisionPrescription Class
 *
 * @remarks
 * An authorization for the provision of glasses and/or contact lenses to a patient.
 *
 * **FHIR Specification**
 * - **Short:** Prescription for vision correction products for a patient
 * - **Definition:** An authorization for the provision of glasses and/or contact lenses to a patient.
 * - **FHIR Version:** 4.0.1
 *
 * @category Data Models: Resource
 * @see [FHIR VisionPrescription](http://hl7.org/fhir/StructureDefinition/VisionPrescription)
 */
export class VisionPrescription extends DomainResource implements IDomainResource {
  constructor(status: EnumCodeType | CodeType | fhirCode | null = null, created: DateTimeType | fhirDateTime | null = null, patient: Reference | null = null, dateWritten: DateTimeType | fhirDateTime | null = null, prescriber: Reference | null = null, lensSpecification: VisionPrescriptionLensSpecificationComponent[] | null = null) {
    super();

    this.fmStatusEnum = new FmStatusEnum();

    this.status = constructorCodeValueAsEnumCodeType<FmStatusEnum>(
      status,
      FmStatusEnum,
      this.fmStatusEnum,
      'VisionPrescription.status',
    );

    this.created = null;
    if (isDefined<DateTimeType | fhirDateTime>(created)) {
      if (created instanceof PrimitiveType) {
        this.setCreatedElement(created);
      } else {
        this.setCreated(created);
      }
    }

    this.patient = null;
    if (isDefined<Reference>(patient)) {
      this.setPatient(patient);
    }

    this.dateWritten = null;
    if (isDefined<DateTimeType | fhirDateTime>(dateWritten)) {
      if (dateWritten instanceof PrimitiveType) {
        this.setDateWrittenElement(dateWritten);
      } else {
        this.setDateWritten(dateWritten);
      }
    }

    this.prescriber = null;
    if (isDefined<Reference>(prescriber)) {
      this.setPrescriber(prescriber);
    }

    this.lensSpecification = null;
    if (isDefinedList<VisionPrescriptionLensSpecificationComponent>(lensSpecification)) {
      this.setLensSpecification(lensSpecification);
    }
  }

  /**
   * Parse the provided `VisionPrescription` JSON to instantiate the VisionPrescription data model.
   *
   * @param sourceJson - JSON representing FHIR `VisionPrescription`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to VisionPrescription
   * @returns VisionPrescription data model or undefined for `VisionPrescription`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): VisionPrescription | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'VisionPrescription';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new VisionPrescription();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'VisionPrescription');
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

    fieldName = 'patient';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setPatient(null);
      } else {
        instance.setPatient(datatype);
      }
    } else {
      instance.setPatient(null);
    }

    fieldName = 'encounter';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setEncounter(datatype);
    }

    fieldName = 'dateWritten';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setDateWritten(null);
      } else {
        instance.setDateWrittenElement(datatype);
      }
    } else {
      instance.setDateWritten(null);
    }

    fieldName = 'prescriber';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setPrescriber(null);
      } else {
        instance.setPrescriber(datatype);
      }
    } else {
      instance.setPrescriber(null);
    }

    fieldName = 'lensSpecification';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] === null) {
        instance.setLensSpecification(null);
      } else {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: VisionPrescriptionLensSpecificationComponent | undefined = VisionPrescriptionLensSpecificationComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component === undefined) {
            instance.setLensSpecification(null);
          } else {
            instance.addLensSpecification(component);
          }
        });
      }
    } else {
      instance.setLensSpecification(null);
    }

    return instance;
  }

  /**
   * VisionPrescription.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Business Identifier for vision prescription
   * - **Definition:** A unique identifier assigned to this vision prescription.
   * - **Requirements:** Allows vision prescriptions to be distinguished and referenced.
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
   * VisionPrescription.status Element
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
   * VisionPrescription.created Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Response creation date
   * - **Definition:** The date this resource was created.
   * - **Requirements:** Need to record a timestamp for use by both the recipient and the issuer.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private created: DateTimeType | null;

  /**
   * VisionPrescription.patient Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who prescription is for
   * - **Definition:** A resource reference to the person to whom the vision prescription applies.
   * - **Requirements:** Needed to identify the patient for whom the vision prescription has been issued.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *     ]
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private patient: Reference | null;

  /**
   * VisionPrescription.encounter Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Created during encounter / admission / stay
   * - **Definition:** A reference to a resource that identifies the particular occurrence of contact between patient and health care provider during which the prescription was issued.
   * - **Requirements:** Used in some jurisdictions to link clinical events to claim items.
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
   * VisionPrescription.dateWritten Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When prescription was authorized
   * - **Definition:** The date (and perhaps time) when the prescription was written.
   * - **Comment:** Jurisdictions determine the valid lifetime of a prescription. Typically vision prescriptions are valid for two years from the date written.
   * - **Requirements:** Need to record a timestamp for use by both the recipient and the issuer.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private dateWritten: DateTimeType | null;

  /**
   * VisionPrescription.prescriber Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who authorized the vision prescription
   * - **Definition:** The healthcare professional responsible for authorizing the prescription.
   * - **Requirements:** Need to record the authorizing practitioner.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *     ]
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private prescriber: Reference | null;

  /**
   * VisionPrescription.lensSpecification Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Vision lens authorization
   * - **Definition:** Contain the details of  the individual lens specifications and serves as the authorization for the fullfillment by certified professionals.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 1..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private lensSpecification: VisionPrescriptionLensSpecificationComponent[] | null;

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
      const optErrMsg = `Invalid VisionPrescription.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid VisionPrescription.identifier; Provided element is not an instance of Identifier.`;
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
  public setStatusEnumType(enumType: EnumCodeType | undefined | null): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid VisionPrescription.status`;
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
      const optErrMsg = `Invalid VisionPrescription.status; Provided value is not an instance of CodeType.`;
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
      const optErrMsg = `Invalid VisionPrescription.status (${String(value)})`;
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
      const optErrMsg = `Invalid VisionPrescription.created; Provided value is not an instance of DateTimeType.`;
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
      const optErrMsg = `Invalid VisionPrescription.created (${String(value)})`;
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
   * @returns the `patient` property value as a Reference object if defined; else an empty Reference object
   */
  public getPatient(): Reference {
    return this.patient ?? new Reference();
  }

  /**
   * Assigns the provided Patient object value to the `patient` property.
   *
   * @decorator `@ReferenceTargets('VisionPrescription.patient', ['Patient',])`
   *
   * @param value - the `patient` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('VisionPrescription.patient', [
    'Patient',
  ])
  public setPatient(value: Reference | undefined | null): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.patient = value;
    } else {
      this.patient = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `patient` property exists and has a value; `false` otherwise
   */
  public hasPatient(): boolean {
    return isDefined<Reference>(this.patient) && !this.patient.isEmpty();
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
   * @decorator `@ReferenceTargets('VisionPrescription.encounter', ['Encounter',])`
   *
   * @param value - the `encounter` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('VisionPrescription.encounter', [
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
   * @returns the `dateWritten` property value as a DateTimeType object if defined; else an empty DateTimeType object
   */
  public getDateWrittenElement(): DateTimeType {
    return this.dateWritten ?? new DateTimeType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `dateWritten` property.
   *
   * @param element - the `dateWritten` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDateWrittenElement(element: DateTimeType | undefined | null): this {
    if (isDefined<DateTimeType>(element)) {
      const optErrMsg = `Invalid VisionPrescription.dateWritten; Provided value is not an instance of DateTimeType.`;
      assertFhirType<DateTimeType>(element, DateTimeType, optErrMsg);
      this.dateWritten = element;
    } else {
      this.dateWritten = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `dateWritten` property exists and has a value; `false` otherwise
   */
  public hasDateWrittenElement(): boolean {
    return isDefined<DateTimeType>(this.dateWritten) && !this.dateWritten.isEmpty();
  }

  /**
   * @returns the `dateWritten` property value as a fhirDateTime if defined; else null
   */
  public getDateWritten(): fhirDateTime | null {
    if (this.dateWritten?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.dateWritten.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `dateWritten` property.
   *
   * @param value - the `dateWritten` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDateWritten(value: fhirDateTime | undefined | null): this {
    if (isDefined<fhirDateTime>(value)) {
      const optErrMsg = `Invalid VisionPrescription.dateWritten (${String(value)})`;
      this.dateWritten = new DateTimeType(parseFhirPrimitiveData(value, fhirDateTimeSchema, optErrMsg));
    } else {
      this.dateWritten = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `dateWritten` property exists and has a value; `false` otherwise
   */
  public hasDateWritten(): boolean {
    return this.hasDateWrittenElement();
  }

  /**
   * @returns the `prescriber` property value as a Reference object if defined; else an empty Reference object
   */
  public getPrescriber(): Reference {
    return this.prescriber ?? new Reference();
  }

  /**
   * Assigns the provided Prescriber object value to the `prescriber` property.
   *
   * @decorator `@ReferenceTargets('VisionPrescription.prescriber', ['Practitioner','PractitionerRole',])`
   *
   * @param value - the `prescriber` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('VisionPrescription.prescriber', [
    'Practitioner',
  
    'PractitionerRole',
  ])
  public setPrescriber(value: Reference | undefined | null): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.prescriber = value;
    } else {
      this.prescriber = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `prescriber` property exists and has a value; `false` otherwise
   */
  public hasPrescriber(): boolean {
    return isDefined<Reference>(this.prescriber) && !this.prescriber.isEmpty();
  }

  /**
   * @returns the `lensSpecification` property value as a VisionPrescriptionLensSpecificationComponent array
   */
  public getLensSpecification(): VisionPrescriptionLensSpecificationComponent[] {
    return this.lensSpecification ?? ([] as VisionPrescriptionLensSpecificationComponent[]);
  }

  /**
   * Assigns the provided VisionPrescriptionLensSpecificationComponent array value to the `lensSpecification` property.
   *
   * @param value - the `lensSpecification` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setLensSpecification(value: VisionPrescriptionLensSpecificationComponent[] | undefined | null): this {
    if (isDefinedList<VisionPrescriptionLensSpecificationComponent>(value)) {
      const optErrMsg = `Invalid VisionPrescription.lensSpecification; Provided value array has an element that is not an instance of VisionPrescriptionLensSpecificationComponent.`;
      assertFhirTypeList<VisionPrescriptionLensSpecificationComponent>(value, VisionPrescriptionLensSpecificationComponent, optErrMsg);
      this.lensSpecification = value;
    } else {
      this.lensSpecification = null;
    }
    return this;
  }

  /**
   * Add the provided VisionPrescriptionLensSpecificationComponent value to the `lensSpecification` array property.
   *
   * @param value - the `lensSpecification` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addLensSpecification(value: VisionPrescriptionLensSpecificationComponent | undefined): this {
    if (isDefined<VisionPrescriptionLensSpecificationComponent>(value)) {
      const optErrMsg = `Invalid VisionPrescription.lensSpecification; Provided element is not an instance of VisionPrescriptionLensSpecificationComponent.`;
      assertFhirType<VisionPrescriptionLensSpecificationComponent>(value, VisionPrescriptionLensSpecificationComponent, optErrMsg);
      this.initLensSpecification();
      this.lensSpecification?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `lensSpecification` property exists and has a value; `false` otherwise
   */
  public hasLensSpecification(): boolean {
    return isDefinedList<VisionPrescriptionLensSpecificationComponent>(this.lensSpecification) && this.lensSpecification.some((item: VisionPrescriptionLensSpecificationComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `lensSpecification` property
   */
  private initLensSpecification(): void {
    if(!this.hasLensSpecification()) {
      this.lensSpecification = [] as VisionPrescriptionLensSpecificationComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'VisionPrescription';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identifier,
      this.status,
      this.created,
      this.patient,
      this.encounter,
      this.dateWritten,
      this.prescriber,
      this.lensSpecification,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.status, this.created, this.patient, this.dateWritten, this.prescriber, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): VisionPrescription {
    const dest = new VisionPrescription();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: VisionPrescription): void {
    super.copyValues(dest);
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    dest.status = this.status ? this.status.copy() : null;
    dest.created = this.created ? this.created.copy() : null;
    dest.patient = this.patient ? this.patient.copy() : null;
    dest.encounter = this.encounter?.copy();
    dest.dateWritten = this.dateWritten ? this.dateWritten.copy() : null;
    dest.prescriber = this.prescriber ? this.prescriber.copy() : null;
    const lensSpecificationList = copyListValues<VisionPrescriptionLensSpecificationComponent>(this.lensSpecification);
    dest.lensSpecification = lensSpecificationList.length === 0 ? null : lensSpecificationList;
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

    if (this.hasCreatedElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getCreatedElement(), 'created', jsonObj);
    }

    if (this.hasPatient()) {
      setFhirComplexJson(this.getPatient(), 'patient', jsonObj);
    }

    if (this.hasEncounter()) {
      setFhirComplexJson(this.getEncounter(), 'encounter', jsonObj);
    }

    if (this.hasDateWrittenElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getDateWrittenElement(), 'dateWritten', jsonObj);
    }

    if (this.hasPrescriber()) {
      setFhirComplexJson(this.getPrescriber(), 'prescriber', jsonObj);
    }

    if (this.hasLensSpecification()) {
      setFhirBackboneElementListJson(this.getLensSpecification(), 'lensSpecification', jsonObj);
    }

    return jsonObj;
  }
}

/**
 * VisionPrescriptionLensSpecificationComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Vision lens authorization
 * - **Definition:** Contain the details of  the individual lens specifications and serves as the authorization for the fullfillment by certified professionals.
 *
 * @category Data Models: Resource
 * @see [FHIR VisionPrescription](http://hl7.org/fhir/StructureDefinition/VisionPrescription)
 */
export class VisionPrescriptionLensSpecificationComponent extends BackboneElement implements IBackboneElement {
  constructor(product: CodeableConcept | null = null, eye: EnumCodeType | CodeType | fhirCode | null = null) {
    super();

    this.visionEyeCodesEnum = new VisionEyeCodesEnum();

    this.product = null;
    if (isDefined<CodeableConcept>(product)) {
      this.setProduct(product);
    }

    this.eye = constructorCodeValueAsEnumCodeType<VisionEyeCodesEnum>(
      eye,
      VisionEyeCodesEnum,
      this.visionEyeCodesEnum,
      'VisionPrescription.lensSpecification.eye',
    );
  }

  /**
   * Parse the provided `VisionPrescriptionLensSpecificationComponent` JSON to instantiate the VisionPrescriptionLensSpecificationComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `VisionPrescriptionLensSpecificationComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to VisionPrescriptionLensSpecificationComponent
   * @returns VisionPrescriptionLensSpecificationComponent data model or undefined for `VisionPrescriptionLensSpecificationComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): VisionPrescriptionLensSpecificationComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'VisionPrescriptionLensSpecificationComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new VisionPrescriptionLensSpecificationComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'product';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setProduct(null);
      } else {
        instance.setProduct(datatype);
      }
    } else {
      instance.setProduct(null);
    }

    fieldName = 'eye';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setEye(null);
      } else {
        instance.setEyeElement(datatype);
      }
    } else {
      instance.setEye(null);
    }

    fieldName = 'sphere';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DecimalType | undefined = fhirParser.parseDecimalType(dtJson, dtSiblingJson);
      instance.setSphereElement(datatype);
    }

    fieldName = 'cylinder';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DecimalType | undefined = fhirParser.parseDecimalType(dtJson, dtSiblingJson);
      instance.setCylinderElement(datatype);
    }

    fieldName = 'axis';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: IntegerType | undefined = fhirParser.parseIntegerType(dtJson, dtSiblingJson);
      instance.setAxisElement(datatype);
    }

    fieldName = 'prism';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: VisionPrescriptionLensSpecificationPrismComponent | undefined = VisionPrescriptionLensSpecificationPrismComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addPrism(component);
          }
        });
      }
    }

    fieldName = 'add';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DecimalType | undefined = fhirParser.parseDecimalType(dtJson, dtSiblingJson);
      instance.setAddElement(datatype);
    }

    fieldName = 'power';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DecimalType | undefined = fhirParser.parseDecimalType(dtJson, dtSiblingJson);
      instance.setPowerElement(datatype);
    }

    fieldName = 'backCurve';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DecimalType | undefined = fhirParser.parseDecimalType(dtJson, dtSiblingJson);
      instance.setBackCurveElement(datatype);
    }

    fieldName = 'diameter';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DecimalType | undefined = fhirParser.parseDecimalType(dtJson, dtSiblingJson);
      instance.setDiameterElement(datatype);
    }

    fieldName = 'duration';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Quantity | undefined = Quantity.parse(classJsonObj[fieldName]!, sourceField);
      instance.setDuration(datatype);
    }

    fieldName = 'color';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setColorElement(datatype);
    }

    fieldName = 'brand';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setBrandElement(datatype);
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

    return instance;
  }

  /**
   * VisionPrescription.lensSpecification.product Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Product to be supplied
   * - **Definition:** Identifies the type of vision correction product which is required for the patient.
   * - **Requirements:** Need to identify whether glasses or contacts.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private product: CodeableConcept | null;

  /**
   * FHIR CodeSystem: VisionEyeCodes
   *
   * @see {@link VisionEyeCodesEnum }
   */
  private readonly visionEyeCodesEnum: VisionEyeCodesEnum;

  /**
   * VisionPrescription.lensSpecification.eye Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** right | left
   * - **Definition:** The eye for which the lens specification applies.
   * - **Comment:** May also appear as OD (oculus dexter) for the right eye and OS (oculus siniter) for the left eye.
   * - **Requirements:** Needed to identify which eye the lens specification applies to.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link VisionEyeCodesEnum }
   */
  private eye: EnumCodeType | null;

  /**
   * VisionPrescription.lensSpecification.sphere Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Power of the lens
   * - **Definition:** Lens power measured in dioptres (0.25 units).
   * - **Comment:** The value is negative for near-sighted and positive for far sighted. Often insurance will not cover a lens with power between +75 and -75.
   * - **Requirements:** Standard lens prescription measures.
   * - **FHIR Type:** `decimal`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private sphere?: DecimalType | undefined;

  /**
   * VisionPrescription.lensSpecification.cylinder Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Lens power for astigmatism
   * - **Definition:** Power adjustment for astigmatism measured in dioptres (0.25 units).
   * - **Requirements:** Standard lens prescription measures.
   * - **FHIR Type:** `decimal`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private cylinder?: DecimalType | undefined;

  /**
   * VisionPrescription.lensSpecification.axis Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Lens meridian which contain no power for astigmatism
   * - **Definition:** Adjustment for astigmatism measured in integer degrees.
   * - **Comment:** The limits are +180 and -180 degrees.
   * - **Requirements:** Standard lens prescription measures.
   * - **FHIR Type:** `integer`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private axis?: IntegerType | undefined;

  /**
   * VisionPrescription.lensSpecification.prism Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Eye alignment compensation
   * - **Definition:** Allows for adjustment on two axis.
   * - **Requirements:** Standard lens prescription measures.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private prism?: VisionPrescriptionLensSpecificationPrismComponent[] | undefined;

  /**
   * VisionPrescription.lensSpecification.add Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Added power for multifocal levels
   * - **Definition:** Power adjustment for multifocal lenses measured in dioptres (0.25 units).
   * - **Requirements:** Standard lens prescription measures.
   * - **FHIR Type:** `decimal`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private add?: DecimalType | undefined;

  /**
   * VisionPrescription.lensSpecification.power Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Contact lens power
   * - **Definition:** Contact lens power measured in dioptres (0.25 units).
   * - **Requirements:** Standard contact lens prescription measures.
   * - **FHIR Type:** `decimal`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private power?: DecimalType | undefined;

  /**
   * VisionPrescription.lensSpecification.backCurve Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Contact lens back curvature
   * - **Definition:** Back curvature measured in millimetres.
   * - **Requirements:** Standard contact lens prescription measures.
   * - **FHIR Type:** `decimal`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private backCurve?: DecimalType | undefined;

  /**
   * VisionPrescription.lensSpecification.diameter Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Contact lens diameter
   * - **Definition:** Contact lens diameter measured in millimetres.
   * - **Requirements:** Standard contact lens prescription measures.
   * - **FHIR Type:** `decimal`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private diameter?: DecimalType | undefined;

  /**
   * VisionPrescription.lensSpecification.duration Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Lens wear duration
   * - **Definition:** The recommended maximum wear period for the lens.
   * - **Requirements:** Standard contact lens prescription measures.
   * - **FHIR Type:** `Quantity`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private duration?: Quantity | undefined;

  /**
   * VisionPrescription.lensSpecification.color Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Color required
   * - **Definition:** Special color or pattern.
   * - **Requirements:** Standard contact lens prescription measures.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private color?: StringType | undefined;

  /**
   * VisionPrescription.lensSpecification.brand Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Brand required
   * - **Definition:** Brand recommendations or restrictions.
   * - **Requirements:** Standard lens prescription measures.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private brand?: StringType | undefined;

  /**
   * VisionPrescription.lensSpecification.note Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Notes for coatings
   * - **Definition:** Notes for special requirements such as coatings and lens materials.
   * - **Requirements:** Standard lens prescription measures.
   * - **FHIR Type:** `Annotation`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private note?: Annotation[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `product` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getProduct(): CodeableConcept {
    return this.product ?? new CodeableConcept();
  }

  /**
   * Assigns the provided CodeableConcept object value to the `product` property.
   *
   * @param value - the `product` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setProduct(value: CodeableConcept | undefined | null): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid VisionPrescription.lensSpecification.product; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.product = value;
    } else {
      this.product = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `product` property exists and has a value; `false` otherwise
   */
  public hasProduct(): boolean {
    return isDefined<CodeableConcept>(this.product) && !this.product.isEmpty();
  }

  /**
   * @returns the `eye` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link VisionEyeCodesEnum }
   */
  public getEyeEnumType(): EnumCodeType | null {
    return this.eye;
  }

  /**
   * Assigns the provided EnumCodeType value to the `eye` property.
   *
   * @param enumType - the `eye` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link VisionEyeCodesEnum }
   */
  public setEyeEnumType(enumType: EnumCodeType | undefined | null): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid VisionPrescription.lensSpecification.eye`;
      assertEnumCodeType<VisionEyeCodesEnum>(enumType, VisionEyeCodesEnum, errMsgPrefix);
      this.eye = enumType;
    } else {
      this.eye = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `eye` property exists and has a value; `false` otherwise
   */
  public hasEyeEnumType(): boolean {
    return isDefined<EnumCodeType>(this.eye) && !this.eye.isEmpty() && this.eye.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `eye` property value as a CodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link VisionEyeCodesEnum }
   */
  public getEyeElement(): CodeType | null {
    if (this.eye === null) {
      return null;
    }
    return this.eye as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `eye` property.
   *
   * @param element - the `eye` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link VisionEyeCodesEnum }
   */
  public setEyeElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid VisionPrescription.lensSpecification.eye; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.eye = new EnumCodeType(element, this.visionEyeCodesEnum);
    } else {
      this.eye = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `eye` property exists and has a value; `false` otherwise
   */
  public hasEyeElement(): boolean {
    return this.hasEyeEnumType();
  }

  /**
   * @returns the `eye` property value as a fhirCode if defined; else null
   *
   * @see CodeSystem Enumeration: {@link VisionEyeCodesEnum }
   */
  public getEye(): fhirCode | null {
    if (this.eye === null) {
      return null;
    }
    return this.eye.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `eye` property.
   *
   * @param value - the `eye` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link VisionEyeCodesEnum }
   */
  public setEye(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid VisionPrescription.lensSpecification.eye (${String(value)})`;
      this.eye = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.visionEyeCodesEnum);
    } else {
      this.eye = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `eye` property exists and has a value; `false` otherwise
   */
  public hasEye(): boolean {
    return this.hasEyeEnumType();
  }

  /**
   * @returns the `sphere` property value as a DecimalType object if defined; else an empty DecimalType object
   */
  public getSphereElement(): DecimalType {
    return this.sphere ?? new DecimalType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `sphere` property.
   *
   * @param element - the `sphere` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSphereElement(element: DecimalType | undefined): this {
    if (isDefined<DecimalType>(element)) {
      const optErrMsg = `Invalid VisionPrescription.lensSpecification.sphere; Provided element is not an instance of DecimalType.`;
      assertFhirType<DecimalType>(element, DecimalType, optErrMsg);
      this.sphere = element;
    } else {
      this.sphere = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `sphere` property exists and has a value; `false` otherwise
   */
  public hasSphereElement(): boolean {
    return isDefined<DecimalType>(this.sphere) && !this.sphere.isEmpty();
  }

  /**
   * @returns the `sphere` property value as a fhirDecimal if defined; else undefined
   */
  public getSphere(): fhirDecimal | undefined {
    return this.sphere?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `sphere` property.
   *
   * @param value - the `sphere` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSphere(value: fhirDecimal | undefined): this {
    if (isDefined<fhirDecimal>(value)) {
      const optErrMsg = `Invalid VisionPrescription.lensSpecification.sphere (${String(value)})`;
      this.sphere = new DecimalType(parseFhirPrimitiveData(value, fhirDecimalSchema, optErrMsg));
    } else {
      this.sphere = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `sphere` property exists and has a value; `false` otherwise
   */
  public hasSphere(): boolean {
    return this.hasSphereElement();
  }

  /**
   * @returns the `cylinder` property value as a DecimalType object if defined; else an empty DecimalType object
   */
  public getCylinderElement(): DecimalType {
    return this.cylinder ?? new DecimalType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `cylinder` property.
   *
   * @param element - the `cylinder` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCylinderElement(element: DecimalType | undefined): this {
    if (isDefined<DecimalType>(element)) {
      const optErrMsg = `Invalid VisionPrescription.lensSpecification.cylinder; Provided element is not an instance of DecimalType.`;
      assertFhirType<DecimalType>(element, DecimalType, optErrMsg);
      this.cylinder = element;
    } else {
      this.cylinder = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `cylinder` property exists and has a value; `false` otherwise
   */
  public hasCylinderElement(): boolean {
    return isDefined<DecimalType>(this.cylinder) && !this.cylinder.isEmpty();
  }

  /**
   * @returns the `cylinder` property value as a fhirDecimal if defined; else undefined
   */
  public getCylinder(): fhirDecimal | undefined {
    return this.cylinder?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `cylinder` property.
   *
   * @param value - the `cylinder` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCylinder(value: fhirDecimal | undefined): this {
    if (isDefined<fhirDecimal>(value)) {
      const optErrMsg = `Invalid VisionPrescription.lensSpecification.cylinder (${String(value)})`;
      this.cylinder = new DecimalType(parseFhirPrimitiveData(value, fhirDecimalSchema, optErrMsg));
    } else {
      this.cylinder = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `cylinder` property exists and has a value; `false` otherwise
   */
  public hasCylinder(): boolean {
    return this.hasCylinderElement();
  }

  /**
   * @returns the `axis` property value as a IntegerType object if defined; else an empty IntegerType object
   */
  public getAxisElement(): IntegerType {
    return this.axis ?? new IntegerType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `axis` property.
   *
   * @param element - the `axis` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAxisElement(element: IntegerType | undefined): this {
    if (isDefined<IntegerType>(element)) {
      const optErrMsg = `Invalid VisionPrescription.lensSpecification.axis; Provided element is not an instance of IntegerType.`;
      assertFhirType<IntegerType>(element, IntegerType, optErrMsg);
      this.axis = element;
    } else {
      this.axis = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `axis` property exists and has a value; `false` otherwise
   */
  public hasAxisElement(): boolean {
    return isDefined<IntegerType>(this.axis) && !this.axis.isEmpty();
  }

  /**
   * @returns the `axis` property value as a fhirInteger if defined; else undefined
   */
  public getAxis(): fhirInteger | undefined {
    return this.axis?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `axis` property.
   *
   * @param value - the `axis` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAxis(value: fhirInteger | undefined): this {
    if (isDefined<fhirInteger>(value)) {
      const optErrMsg = `Invalid VisionPrescription.lensSpecification.axis (${String(value)})`;
      this.axis = new IntegerType(parseFhirPrimitiveData(value, fhirIntegerSchema, optErrMsg));
    } else {
      this.axis = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `axis` property exists and has a value; `false` otherwise
   */
  public hasAxis(): boolean {
    return this.hasAxisElement();
  }

  /**
   * @returns the `prism` property value as a VisionPrescriptionLensSpecificationPrismComponent array
   */
  public getPrism(): VisionPrescriptionLensSpecificationPrismComponent[] {
    return this.prism ?? ([] as VisionPrescriptionLensSpecificationPrismComponent[]);
  }

  /**
   * Assigns the provided VisionPrescriptionLensSpecificationPrismComponent array value to the `prism` property.
   *
   * @param value - the `prism` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPrism(value: VisionPrescriptionLensSpecificationPrismComponent[] | undefined): this {
    if (isDefinedList<VisionPrescriptionLensSpecificationPrismComponent>(value)) {
      const optErrMsg = `Invalid VisionPrescription.lensSpecification.prism; Provided value array has an element that is not an instance of VisionPrescriptionLensSpecificationPrismComponent.`;
      assertFhirTypeList<VisionPrescriptionLensSpecificationPrismComponent>(value, VisionPrescriptionLensSpecificationPrismComponent, optErrMsg);
      this.prism = value;
    } else {
      this.prism = undefined;
    }
    return this;
  }

  /**
   * Add the provided VisionPrescriptionLensSpecificationPrismComponent value to the `prism` array property.
   *
   * @param value - the `prism` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addPrism(value: VisionPrescriptionLensSpecificationPrismComponent | undefined): this {
    if (isDefined<VisionPrescriptionLensSpecificationPrismComponent>(value)) {
      const optErrMsg = `Invalid VisionPrescription.lensSpecification.prism; Provided element is not an instance of VisionPrescriptionLensSpecificationPrismComponent.`;
      assertFhirType<VisionPrescriptionLensSpecificationPrismComponent>(value, VisionPrescriptionLensSpecificationPrismComponent, optErrMsg);
      this.initPrism();
      this.prism?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `prism` property exists and has a value; `false` otherwise
   */
  public hasPrism(): boolean {
    return isDefinedList<VisionPrescriptionLensSpecificationPrismComponent>(this.prism) && this.prism.some((item: VisionPrescriptionLensSpecificationPrismComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `prism` property
   */
  private initPrism(): void {
    if(!this.hasPrism()) {
      this.prism = [] as VisionPrescriptionLensSpecificationPrismComponent[];
    }
  }

  /**
   * @returns the `add` property value as a DecimalType object if defined; else an empty DecimalType object
   */
  public getAddElement(): DecimalType {
    return this.add ?? new DecimalType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `add` property.
   *
   * @param element - the `add` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAddElement(element: DecimalType | undefined): this {
    if (isDefined<DecimalType>(element)) {
      const optErrMsg = `Invalid VisionPrescription.lensSpecification.add; Provided element is not an instance of DecimalType.`;
      assertFhirType<DecimalType>(element, DecimalType, optErrMsg);
      this.add = element;
    } else {
      this.add = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `add` property exists and has a value; `false` otherwise
   */
  public hasAddElement(): boolean {
    return isDefined<DecimalType>(this.add) && !this.add.isEmpty();
  }

  /**
   * @returns the `add` property value as a fhirDecimal if defined; else undefined
   */
  public getAdd(): fhirDecimal | undefined {
    return this.add?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `add` property.
   *
   * @param value - the `add` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAdd(value: fhirDecimal | undefined): this {
    if (isDefined<fhirDecimal>(value)) {
      const optErrMsg = `Invalid VisionPrescription.lensSpecification.add (${String(value)})`;
      this.add = new DecimalType(parseFhirPrimitiveData(value, fhirDecimalSchema, optErrMsg));
    } else {
      this.add = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `add` property exists and has a value; `false` otherwise
   */
  public hasAdd(): boolean {
    return this.hasAddElement();
  }

  /**
   * @returns the `power` property value as a DecimalType object if defined; else an empty DecimalType object
   */
  public getPowerElement(): DecimalType {
    return this.power ?? new DecimalType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `power` property.
   *
   * @param element - the `power` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPowerElement(element: DecimalType | undefined): this {
    if (isDefined<DecimalType>(element)) {
      const optErrMsg = `Invalid VisionPrescription.lensSpecification.power; Provided element is not an instance of DecimalType.`;
      assertFhirType<DecimalType>(element, DecimalType, optErrMsg);
      this.power = element;
    } else {
      this.power = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `power` property exists and has a value; `false` otherwise
   */
  public hasPowerElement(): boolean {
    return isDefined<DecimalType>(this.power) && !this.power.isEmpty();
  }

  /**
   * @returns the `power` property value as a fhirDecimal if defined; else undefined
   */
  public getPower(): fhirDecimal | undefined {
    return this.power?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `power` property.
   *
   * @param value - the `power` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPower(value: fhirDecimal | undefined): this {
    if (isDefined<fhirDecimal>(value)) {
      const optErrMsg = `Invalid VisionPrescription.lensSpecification.power (${String(value)})`;
      this.power = new DecimalType(parseFhirPrimitiveData(value, fhirDecimalSchema, optErrMsg));
    } else {
      this.power = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `power` property exists and has a value; `false` otherwise
   */
  public hasPower(): boolean {
    return this.hasPowerElement();
  }

  /**
   * @returns the `backCurve` property value as a DecimalType object if defined; else an empty DecimalType object
   */
  public getBackCurveElement(): DecimalType {
    return this.backCurve ?? new DecimalType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `backCurve` property.
   *
   * @param element - the `backCurve` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setBackCurveElement(element: DecimalType | undefined): this {
    if (isDefined<DecimalType>(element)) {
      const optErrMsg = `Invalid VisionPrescription.lensSpecification.backCurve; Provided element is not an instance of DecimalType.`;
      assertFhirType<DecimalType>(element, DecimalType, optErrMsg);
      this.backCurve = element;
    } else {
      this.backCurve = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `backCurve` property exists and has a value; `false` otherwise
   */
  public hasBackCurveElement(): boolean {
    return isDefined<DecimalType>(this.backCurve) && !this.backCurve.isEmpty();
  }

  /**
   * @returns the `backCurve` property value as a fhirDecimal if defined; else undefined
   */
  public getBackCurve(): fhirDecimal | undefined {
    return this.backCurve?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `backCurve` property.
   *
   * @param value - the `backCurve` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setBackCurve(value: fhirDecimal | undefined): this {
    if (isDefined<fhirDecimal>(value)) {
      const optErrMsg = `Invalid VisionPrescription.lensSpecification.backCurve (${String(value)})`;
      this.backCurve = new DecimalType(parseFhirPrimitiveData(value, fhirDecimalSchema, optErrMsg));
    } else {
      this.backCurve = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `backCurve` property exists and has a value; `false` otherwise
   */
  public hasBackCurve(): boolean {
    return this.hasBackCurveElement();
  }

  /**
   * @returns the `diameter` property value as a DecimalType object if defined; else an empty DecimalType object
   */
  public getDiameterElement(): DecimalType {
    return this.diameter ?? new DecimalType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `diameter` property.
   *
   * @param element - the `diameter` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDiameterElement(element: DecimalType | undefined): this {
    if (isDefined<DecimalType>(element)) {
      const optErrMsg = `Invalid VisionPrescription.lensSpecification.diameter; Provided element is not an instance of DecimalType.`;
      assertFhirType<DecimalType>(element, DecimalType, optErrMsg);
      this.diameter = element;
    } else {
      this.diameter = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `diameter` property exists and has a value; `false` otherwise
   */
  public hasDiameterElement(): boolean {
    return isDefined<DecimalType>(this.diameter) && !this.diameter.isEmpty();
  }

  /**
   * @returns the `diameter` property value as a fhirDecimal if defined; else undefined
   */
  public getDiameter(): fhirDecimal | undefined {
    return this.diameter?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `diameter` property.
   *
   * @param value - the `diameter` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDiameter(value: fhirDecimal | undefined): this {
    if (isDefined<fhirDecimal>(value)) {
      const optErrMsg = `Invalid VisionPrescription.lensSpecification.diameter (${String(value)})`;
      this.diameter = new DecimalType(parseFhirPrimitiveData(value, fhirDecimalSchema, optErrMsg));
    } else {
      this.diameter = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `diameter` property exists and has a value; `false` otherwise
   */
  public hasDiameter(): boolean {
    return this.hasDiameterElement();
  }

  /**
   * @returns the `duration` property value as a Quantity object if defined; else an empty Quantity object
   */
  public getDuration(): Quantity {
    return this.duration ?? new Quantity();
  }

  /**
   * Assigns the provided Duration object value to the `duration` property.
   *
   * @param value - the `duration` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDuration(value: Quantity | undefined): this {
    if (isDefined<Quantity>(value)) {
      const optErrMsg = `Invalid VisionPrescription.lensSpecification.duration; Provided element is not an instance of Quantity.`;
      assertFhirType<Quantity>(value, Quantity, optErrMsg);
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
    return isDefined<Quantity>(this.duration) && !this.duration.isEmpty();
  }

  /**
   * @returns the `color` property value as a StringType object if defined; else an empty StringType object
   */
  public getColorElement(): StringType {
    return this.color ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `color` property.
   *
   * @param element - the `color` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setColorElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid VisionPrescription.lensSpecification.color; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.color = element;
    } else {
      this.color = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `color` property exists and has a value; `false` otherwise
   */
  public hasColorElement(): boolean {
    return isDefined<StringType>(this.color) && !this.color.isEmpty();
  }

  /**
   * @returns the `color` property value as a fhirString if defined; else undefined
   */
  public getColor(): fhirString | undefined {
    return this.color?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `color` property.
   *
   * @param value - the `color` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setColor(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid VisionPrescription.lensSpecification.color (${String(value)})`;
      this.color = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.color = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `color` property exists and has a value; `false` otherwise
   */
  public hasColor(): boolean {
    return this.hasColorElement();
  }

  /**
   * @returns the `brand` property value as a StringType object if defined; else an empty StringType object
   */
  public getBrandElement(): StringType {
    return this.brand ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `brand` property.
   *
   * @param element - the `brand` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setBrandElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid VisionPrescription.lensSpecification.brand; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.brand = element;
    } else {
      this.brand = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `brand` property exists and has a value; `false` otherwise
   */
  public hasBrandElement(): boolean {
    return isDefined<StringType>(this.brand) && !this.brand.isEmpty();
  }

  /**
   * @returns the `brand` property value as a fhirString if defined; else undefined
   */
  public getBrand(): fhirString | undefined {
    return this.brand?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `brand` property.
   *
   * @param value - the `brand` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setBrand(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid VisionPrescription.lensSpecification.brand (${String(value)})`;
      this.brand = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.brand = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `brand` property exists and has a value; `false` otherwise
   */
  public hasBrand(): boolean {
    return this.hasBrandElement();
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
      const optErrMsg = `Invalid VisionPrescription.lensSpecification.note; Provided value array has an element that is not an instance of Annotation.`;
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
      const optErrMsg = `Invalid VisionPrescription.lensSpecification.note; Provided element is not an instance of Annotation.`;
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
    return 'VisionPrescription.lensSpecification';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.product,
      this.eye,
      this.sphere,
      this.cylinder,
      this.axis,
      this.prism,
      this.add,
      this.power,
      this.backCurve,
      this.diameter,
      this.duration,
      this.color,
      this.brand,
      this.note,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.product, this.eye, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): VisionPrescriptionLensSpecificationComponent {
    const dest = new VisionPrescriptionLensSpecificationComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: VisionPrescriptionLensSpecificationComponent): void {
    super.copyValues(dest);
    dest.product = this.product ? this.product.copy() : null;
    dest.eye = this.eye ? this.eye.copy() : null;
    dest.sphere = this.sphere?.copy();
    dest.cylinder = this.cylinder?.copy();
    dest.axis = this.axis?.copy();
    const prismList = copyListValues<VisionPrescriptionLensSpecificationPrismComponent>(this.prism);
    dest.prism = prismList.length === 0 ? undefined : prismList;
    dest.add = this.add?.copy();
    dest.power = this.power?.copy();
    dest.backCurve = this.backCurve?.copy();
    dest.diameter = this.diameter?.copy();
    dest.duration = this.duration?.copy();
    dest.color = this.color?.copy();
    dest.brand = this.brand?.copy();
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

    if (this.hasProduct()) {
      setFhirComplexJson(this.getProduct(), 'product', jsonObj);
    }

    if (this.hasEyeElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getEyeElement()!, 'eye', jsonObj);
    }

    if (this.hasSphereElement()) {
      setFhirPrimitiveJson<fhirDecimal>(this.getSphereElement(), 'sphere', jsonObj);
    }

    if (this.hasCylinderElement()) {
      setFhirPrimitiveJson<fhirDecimal>(this.getCylinderElement(), 'cylinder', jsonObj);
    }

    if (this.hasAxisElement()) {
      setFhirPrimitiveJson<fhirInteger>(this.getAxisElement(), 'axis', jsonObj);
    }

    if (this.hasPrism()) {
      setFhirBackboneElementListJson(this.getPrism(), 'prism', jsonObj);
    }

    if (this.hasAddElement()) {
      setFhirPrimitiveJson<fhirDecimal>(this.getAddElement(), 'add', jsonObj);
    }

    if (this.hasPowerElement()) {
      setFhirPrimitiveJson<fhirDecimal>(this.getPowerElement(), 'power', jsonObj);
    }

    if (this.hasBackCurveElement()) {
      setFhirPrimitiveJson<fhirDecimal>(this.getBackCurveElement(), 'backCurve', jsonObj);
    }

    if (this.hasDiameterElement()) {
      setFhirPrimitiveJson<fhirDecimal>(this.getDiameterElement(), 'diameter', jsonObj);
    }

    if (this.hasDuration()) {
      setFhirComplexJson(this.getDuration(), 'duration', jsonObj);
    }

    if (this.hasColorElement()) {
      setFhirPrimitiveJson<fhirString>(this.getColorElement(), 'color', jsonObj);
    }

    if (this.hasBrandElement()) {
      setFhirPrimitiveJson<fhirString>(this.getBrandElement(), 'brand', jsonObj);
    }

    if (this.hasNote()) {
      setFhirComplexListJson(this.getNote(), 'note', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * VisionPrescriptionLensSpecificationPrismComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Eye alignment compensation
 * - **Definition:** Allows for adjustment on two axis.
 * - **Requirements:** Standard lens prescription measures.
 *
 * @category Data Models: Resource
 * @see [FHIR VisionPrescription](http://hl7.org/fhir/StructureDefinition/VisionPrescription)
 */
export class VisionPrescriptionLensSpecificationPrismComponent extends BackboneElement implements IBackboneElement {
  constructor(amount: DecimalType | fhirDecimal | null = null, base: EnumCodeType | CodeType | fhirCode | null = null) {
    super();

    this.visionBaseCodesEnum = new VisionBaseCodesEnum();

    this.amount = null;
    if (isDefined<DecimalType | fhirDecimal>(amount)) {
      if (amount instanceof PrimitiveType) {
        this.setAmountElement(amount);
      } else {
        this.setAmount(amount);
      }
    }

    this.base = constructorCodeValueAsEnumCodeType<VisionBaseCodesEnum>(
      base,
      VisionBaseCodesEnum,
      this.visionBaseCodesEnum,
      'VisionPrescription.lensSpecification.prism.base',
    );
  }

  /**
   * Parse the provided `VisionPrescriptionLensSpecificationPrismComponent` JSON to instantiate the VisionPrescriptionLensSpecificationPrismComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `VisionPrescriptionLensSpecificationPrismComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to VisionPrescriptionLensSpecificationPrismComponent
   * @returns VisionPrescriptionLensSpecificationPrismComponent data model or undefined for `VisionPrescriptionLensSpecificationPrismComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): VisionPrescriptionLensSpecificationPrismComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'VisionPrescriptionLensSpecificationPrismComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new VisionPrescriptionLensSpecificationPrismComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'amount';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DecimalType | undefined = fhirParser.parseDecimalType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setAmount(null);
      } else {
        instance.setAmountElement(datatype);
      }
    } else {
      instance.setAmount(null);
    }

    fieldName = 'base';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setBase(null);
      } else {
        instance.setBaseElement(datatype);
      }
    } else {
      instance.setBase(null);
    }

    return instance;
  }

  /**
   * VisionPrescription.lensSpecification.prism.amount Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Amount of adjustment
   * - **Definition:** Amount of prism to compensate for eye alignment in fractional units.
   * - **Requirements:** Standard lens prescription measures.
   * - **FHIR Type:** `decimal`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private amount: DecimalType | null;

  /**
   * FHIR CodeSystem: VisionBaseCodes
   *
   * @see {@link VisionBaseCodesEnum }
   */
  private readonly visionBaseCodesEnum: VisionBaseCodesEnum;

  /**
   * VisionPrescription.lensSpecification.prism.base Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** up | down | in | out
   * - **Definition:** The relative base, or reference lens edge, for the prism.
   * - **Requirements:** Standard lens prescription measures.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link VisionBaseCodesEnum }
   */
  private base: EnumCodeType | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `amount` property value as a DecimalType object if defined; else an empty DecimalType object
   */
  public getAmountElement(): DecimalType {
    return this.amount ?? new DecimalType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `amount` property.
   *
   * @param element - the `amount` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAmountElement(element: DecimalType | undefined | null): this {
    if (isDefined<DecimalType>(element)) {
      const optErrMsg = `Invalid VisionPrescription.lensSpecification.prism.amount; Provided value is not an instance of DecimalType.`;
      assertFhirType<DecimalType>(element, DecimalType, optErrMsg);
      this.amount = element;
    } else {
      this.amount = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `amount` property exists and has a value; `false` otherwise
   */
  public hasAmountElement(): boolean {
    return isDefined<DecimalType>(this.amount) && !this.amount.isEmpty();
  }

  /**
   * @returns the `amount` property value as a fhirDecimal if defined; else null
   */
  public getAmount(): fhirDecimal | null {
    if (this.amount?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.amount.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `amount` property.
   *
   * @param value - the `amount` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAmount(value: fhirDecimal | undefined | null): this {
    if (isDefined<fhirDecimal>(value)) {
      const optErrMsg = `Invalid VisionPrescription.lensSpecification.prism.amount (${String(value)})`;
      this.amount = new DecimalType(parseFhirPrimitiveData(value, fhirDecimalSchema, optErrMsg));
    } else {
      this.amount = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `amount` property exists and has a value; `false` otherwise
   */
  public hasAmount(): boolean {
    return this.hasAmountElement();
  }

  /**
   * @returns the `base` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link VisionBaseCodesEnum }
   */
  public getBaseEnumType(): EnumCodeType | null {
    return this.base;
  }

  /**
   * Assigns the provided EnumCodeType value to the `base` property.
   *
   * @param enumType - the `base` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link VisionBaseCodesEnum }
   */
  public setBaseEnumType(enumType: EnumCodeType | undefined | null): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid VisionPrescription.lensSpecification.prism.base`;
      assertEnumCodeType<VisionBaseCodesEnum>(enumType, VisionBaseCodesEnum, errMsgPrefix);
      this.base = enumType;
    } else {
      this.base = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `base` property exists and has a value; `false` otherwise
   */
  public hasBaseEnumType(): boolean {
    return isDefined<EnumCodeType>(this.base) && !this.base.isEmpty() && this.base.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `base` property value as a CodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link VisionBaseCodesEnum }
   */
  public getBaseElement(): CodeType | null {
    if (this.base === null) {
      return null;
    }
    return this.base as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `base` property.
   *
   * @param element - the `base` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link VisionBaseCodesEnum }
   */
  public setBaseElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid VisionPrescription.lensSpecification.prism.base; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.base = new EnumCodeType(element, this.visionBaseCodesEnum);
    } else {
      this.base = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `base` property exists and has a value; `false` otherwise
   */
  public hasBaseElement(): boolean {
    return this.hasBaseEnumType();
  }

  /**
   * @returns the `base` property value as a fhirCode if defined; else null
   *
   * @see CodeSystem Enumeration: {@link VisionBaseCodesEnum }
   */
  public getBase(): fhirCode | null {
    if (this.base === null) {
      return null;
    }
    return this.base.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `base` property.
   *
   * @param value - the `base` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link VisionBaseCodesEnum }
   */
  public setBase(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid VisionPrescription.lensSpecification.prism.base (${String(value)})`;
      this.base = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.visionBaseCodesEnum);
    } else {
      this.base = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `base` property exists and has a value; `false` otherwise
   */
  public hasBase(): boolean {
    return this.hasBaseEnumType();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'VisionPrescription.lensSpecification.prism';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.amount,
      this.base,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.amount, this.base, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): VisionPrescriptionLensSpecificationPrismComponent {
    const dest = new VisionPrescriptionLensSpecificationPrismComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: VisionPrescriptionLensSpecificationPrismComponent): void {
    super.copyValues(dest);
    dest.amount = this.amount ? this.amount.copy() : null;
    dest.base = this.base ? this.base.copy() : null;
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

    if (this.hasAmountElement()) {
      setFhirPrimitiveJson<fhirDecimal>(this.getAmountElement(), 'amount', jsonObj);
    }

    if (this.hasBaseElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getBaseElement()!, 'base', jsonObj);
    }

    return jsonObj;
  }
}
