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
 * MolecularSequence Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/MolecularSequence
 * StructureDefinition.name: MolecularSequence
 * StructureDefinition.description: Representation of a molecular sequence.
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
  DomainResource,
  EnumCodeType,
  FhirParser,
  IBackboneElement,
  IDataType,
  IDomainResource,
  IntegerType,
  InvalidTypeError,
  JSON,
  ReferenceTargets,
  StringType,
  assertEnumCodeType,
  assertFhirType,
  assertFhirTypeList,
  assertIsDefined,
  copyListValues,
  fhirCode,
  fhirCodeSchema,
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
  setFhirBackboneElementJson,
  setFhirBackboneElementListJson,
  setFhirComplexJson,
  setFhirComplexListJson,
  setFhirPrimitiveJson,
  setPolymorphicValueJson,
} from '@paq-ts-fhir/fhir-core';
import { Attachment, CodeableConcept, Identifier, PARSABLE_DATATYPE_MAP, Range, Reference } from '../complex-types/complex-datatypes';
import { OrientationTypeEnum } from '../code-systems/OrientationTypeEnum';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';
import { SequenceTypeEnum } from '../code-systems/SequenceTypeEnum';
import { StrandTypeEnum } from '../code-systems/StrandTypeEnum';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Symbol.metadata polyfill secret sauce for decorator metadata
(Symbol.metadata as any) ??= Symbol('Symbol.metadata');

/**
 * MolecularSequence Class
 *
 * @remarks
 * Representation of a molecular sequence.
 *
 * **FHIR Specification**
 * - **Short:** Representation of a molecular sequence
 * - **Definition:** Representation of a molecular sequence.
 * - **FHIR Version:** 5.0.0
 *
 * @category Data Models: Resource
 * @see [FHIR MolecularSequence](http://hl7.org/fhir/StructureDefinition/MolecularSequence)
 */
export class MolecularSequence extends DomainResource implements IDomainResource {
  constructor() {
    super();

    this.sequenceTypeEnum = new SequenceTypeEnum();
  }

  /**
   * Parse the provided `MolecularSequence` JSON to instantiate the MolecularSequence data model.
   *
   * @param sourceJson - JSON representing FHIR `MolecularSequence`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to MolecularSequence
   * @returns MolecularSequence data model or undefined for `MolecularSequence`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): MolecularSequence | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'MolecularSequence';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new MolecularSequence();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'MolecularSequence');
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
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setTypeElement(datatype);
    }

    fieldName = 'subject';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setSubject(datatype);
    }

    fieldName = 'focus';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addFocus(datatype);
          }
        });
      }
  }

    fieldName = 'specimen';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setSpecimen(datatype);
    }

    fieldName = 'device';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setDevice(datatype);
    }

    fieldName = 'performer';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setPerformer(datatype);
    }

    fieldName = 'literal';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setLiteralElement(datatype);
    }

    fieldName = 'formatted';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Attachment | undefined = Attachment.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addFormatted(datatype);
          }
        });
      }
    }

    fieldName = 'relative';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: MolecularSequenceRelativeComponent | undefined = MolecularSequenceRelativeComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addRelative(component);
          }
        });
      }
    }

    return instance;
  }

  /**
   * MolecularSequence.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Unique ID for this particular sequence
   * - **Definition:** A unique identifier for this particular sequence instance.
   * - **Requirements:** Allows sequences to be distinguished and referenced.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier[] | undefined;

  /**
   * FHIR CodeSystem: SequenceType
   *
   * @see {@link SequenceTypeEnum }
   */
  private readonly sequenceTypeEnum: SequenceTypeEnum;

  /**
   * MolecularSequence.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** aa | dna | rna
   * - **Definition:** Amino Acid Sequence/ DNA Sequence / RNA Sequence.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link SequenceTypeEnum }
   */
  private type_?: EnumCodeType | undefined;

  /**
   * MolecularSequence.subject Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Subject this sequence is associated too
   * - **Definition:** Indicates the subject this sequence is associated too.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/Group',
   *       'http://hl7.org/fhir/StructureDefinition/Substance',
   *       'http://hl7.org/fhir/StructureDefinition/BiologicallyDerivedProduct',
   *       'http://hl7.org/fhir/StructureDefinition/NutritionProduct',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private subject?: Reference | undefined;

  /**
   * MolecularSequence.focus Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** What the molecular sequence is about, when it is not about the subject of record
   * - **Definition:** The actual focus of a molecular sequence when it is not the patient of record representing something or someone associated with the patient such as a spouse, parent, child, or sibling. For example, in trio testing, the subject would be the child (proband) and the focus would be the parent.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Resource',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private focus?: Reference[] | undefined;

  /**
   * MolecularSequence.specimen Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Specimen used for sequencing
   * - **Definition:** Specimen used for sequencing.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Specimen',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private specimen?: Reference | undefined;

  /**
   * MolecularSequence.device Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The method for sequencing
   * - **Definition:** The method for sequencing, for example, chip information.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Device',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private device?: Reference | undefined;

  /**
   * MolecularSequence.performer Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who should be responsible for test result
   * - **Definition:** The organization or lab that should be responsible for this result.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private performer?: Reference | undefined;

  /**
   * MolecularSequence.literal Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Sequence that was observed
   * - **Definition:** Sequence that was observed.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private literal?: StringType | undefined;

  /**
   * MolecularSequence.formatted Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Embedded file or a link (URL) which contains content to represent the sequence
   * - **Definition:** Sequence that was observed as file content. Can be an actual file contents, or referenced by a URL to an external system.
   * - **FHIR Type:** `Attachment`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private formatted?: Attachment[] | undefined;

  /**
   * MolecularSequence.relative Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A sequence defined relative to another sequence
   * - **Definition:** A sequence defined relative to another sequence.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private relative?: MolecularSequenceRelativeComponent[] | undefined;

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
      const optErrMsg = `Invalid MolecularSequence.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid MolecularSequence.identifier; Provided element is not an instance of Identifier.`;
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
   * @returns the `type_` property value as a EnumCodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link SequenceTypeEnum }
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
   * @see CodeSystem Enumeration: {@link SequenceTypeEnum }
   */
  public setTypeEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = 'Invalid MolecularSequence.type';
      assertEnumCodeType<SequenceTypeEnum>(enumType, SequenceTypeEnum, errMsgPrefix);
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
   * @see CodeSystem Enumeration: {@link SequenceTypeEnum }
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
   * @see CodeSystem Enumeration: {@link SequenceTypeEnum }
   */
  public setTypeElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid MolecularSequence.type; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.type_ = new EnumCodeType(element, this.sequenceTypeEnum);
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
   * @see CodeSystem Enumeration: {@link SequenceTypeEnum }
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
   * @see CodeSystem Enumeration: {@link SequenceTypeEnum }
   */
  public setType(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid MolecularSequence.type; Provided value is not an instance of fhirCode.`;
      this.type_ = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.sequenceTypeEnum);
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
   * @returns the `subject` property value as a Reference object; else an empty Reference object
   */
  public getSubject(): Reference {
    return this.subject ?? new Reference();
  }

  /**
   * Assigns the provided Subject object value to the `subject` property.
   *
   * @decorator `@ReferenceTargets('MolecularSequence.subject', ['Patient','Group','Substance','BiologicallyDerivedProduct','NutritionProduct',])`
   *
   * @param value - the `subject` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MolecularSequence.subject', [
    'Patient',
  
    'Group',
  
    'Substance',
  
    'BiologicallyDerivedProduct',
  
    'NutritionProduct',
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
   * @returns the `focus` property value as a Reference array
   */
  public getFocus(): Reference[] {
    return this.focus ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `focus` property.
   *
   * @decorator `@ReferenceTargets('MolecularSequence.focus', ['Resource',])`
   *
   * @param value - the `focus` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MolecularSequence.focus', [
    'Resource',
  ])
  public setFocus(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.focus = value;
    } else {
      this.focus = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `focus` array property.
   *
   * @decorator `@ReferenceTargets('MolecularSequence.focus', ['Resource',])`
   *
   * @param value - the `focus` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MolecularSequence.focus', [
    'Resource',
  ])
  public addFocus(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initFocus();
      this.focus?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `focus` property exists and has a value; `false` otherwise
   */
  public hasFocus(): boolean {
    return isDefinedList<Reference>(this.focus) && this.focus.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `focus` property
   */
  private initFocus(): void {
    if (!this.hasFocus()) {
      this.focus = [] as Reference[];
    }
  }

  /**
   * @returns the `specimen` property value as a Reference object; else an empty Reference object
   */
  public getSpecimen(): Reference {
    return this.specimen ?? new Reference();
  }

  /**
   * Assigns the provided Specimen object value to the `specimen` property.
   *
   * @decorator `@ReferenceTargets('MolecularSequence.specimen', ['Specimen',])`
   *
   * @param value - the `specimen` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MolecularSequence.specimen', [
    'Specimen',
  ])
  public setSpecimen(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.specimen = value;
    } else {
      this.specimen = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `specimen` property exists and has a value; `false` otherwise
   */
  public hasSpecimen(): boolean {
    return isDefined<Reference>(this.specimen) && !this.specimen.isEmpty();
  }

  /**
   * @returns the `device` property value as a Reference object; else an empty Reference object
   */
  public getDevice(): Reference {
    return this.device ?? new Reference();
  }

  /**
   * Assigns the provided Device object value to the `device` property.
   *
   * @decorator `@ReferenceTargets('MolecularSequence.device', ['Device',])`
   *
   * @param value - the `device` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MolecularSequence.device', [
    'Device',
  ])
  public setDevice(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.device = value;
    } else {
      this.device = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `device` property exists and has a value; `false` otherwise
   */
  public hasDevice(): boolean {
    return isDefined<Reference>(this.device) && !this.device.isEmpty();
  }

  /**
   * @returns the `performer` property value as a Reference object; else an empty Reference object
   */
  public getPerformer(): Reference {
    return this.performer ?? new Reference();
  }

  /**
   * Assigns the provided Performer object value to the `performer` property.
   *
   * @decorator `@ReferenceTargets('MolecularSequence.performer', ['Organization',])`
   *
   * @param value - the `performer` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MolecularSequence.performer', [
    'Organization',
  ])
  public setPerformer(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.performer = value;
    } else {
      this.performer = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `performer` property exists and has a value; `false` otherwise
   */
  public hasPerformer(): boolean {
    return isDefined<Reference>(this.performer) && !this.performer.isEmpty();
  }

  /**
   * @returns the `literal` property value as a StringType object if defined; else an empty StringType object
   */
  public getLiteralElement(): StringType {
    return this.literal ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `literal` property.
   *
   * @param element - the `literal` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setLiteralElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid MolecularSequence.literal; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.literal = element;
    } else {
      this.literal = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `literal` property exists and has a value; `false` otherwise
   */
  public hasLiteralElement(): boolean {
    return isDefined<StringType>(this.literal) && !this.literal.isEmpty();
  }

  /**
   * @returns the `literal` property value as a fhirString if defined; else undefined
   */
  public getLiteral(): fhirString | undefined {
    return this.literal?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `literal` property.
   *
   * @param value - the `literal` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setLiteral(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid MolecularSequence.literal (${String(value)})`;
      this.literal = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.literal = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `literal` property exists and has a value; `false` otherwise
   */
  public hasLiteral(): boolean {
    return this.hasLiteralElement();
  }

  /**
   * @returns the `formatted` property value as a Attachment array
   */
  public getFormatted(): Attachment[] {
    return this.formatted ?? ([] as Attachment[]);
  }

  /**
   * Assigns the provided Attachment array value to the `formatted` property.
   *
   * @param value - the `formatted` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setFormatted(value: Attachment[] | undefined): this {
    if (isDefinedList<Attachment>(value)) {
      const optErrMsg = `Invalid MolecularSequence.formatted; Provided value array has an element that is not an instance of Attachment.`;
      assertFhirTypeList<Attachment>(value, Attachment, optErrMsg);
      this.formatted = value;
    } else {
      this.formatted = undefined;
    }
    return this;
  }

  /**
   * Add the provided Attachment value to the `formatted` array property.
   *
   * @param value - the `formatted` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addFormatted(value: Attachment | undefined): this {
    if (isDefined<Attachment>(value)) {
      const optErrMsg = `Invalid MolecularSequence.formatted; Provided element is not an instance of Attachment.`;
      assertFhirType<Attachment>(value, Attachment, optErrMsg);
      this.initFormatted();
      this.formatted?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `formatted` property exists and has a value; `false` otherwise
   */
  public hasFormatted(): boolean {
    return isDefinedList<Attachment>(this.formatted) && this.formatted.some((item: Attachment) => !item.isEmpty());
  }

  /**
   * Initialize the `formatted` property
   */
  private initFormatted(): void {
    if(!this.hasFormatted()) {
      this.formatted = [] as Attachment[];
    }
  }

  /**
   * @returns the `relative` property value as a MolecularSequenceRelativeComponent array
   */
  public getRelative(): MolecularSequenceRelativeComponent[] {
    return this.relative ?? ([] as MolecularSequenceRelativeComponent[]);
  }

  /**
   * Assigns the provided MolecularSequenceRelativeComponent array value to the `relative` property.
   *
   * @param value - the `relative` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setRelative(value: MolecularSequenceRelativeComponent[] | undefined): this {
    if (isDefinedList<MolecularSequenceRelativeComponent>(value)) {
      const optErrMsg = `Invalid MolecularSequence.relative; Provided value array has an element that is not an instance of MolecularSequenceRelativeComponent.`;
      assertFhirTypeList<MolecularSequenceRelativeComponent>(value, MolecularSequenceRelativeComponent, optErrMsg);
      this.relative = value;
    } else {
      this.relative = undefined;
    }
    return this;
  }

  /**
   * Add the provided MolecularSequenceRelativeComponent value to the `relative` array property.
   *
   * @param value - the `relative` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addRelative(value: MolecularSequenceRelativeComponent | undefined): this {
    if (isDefined<MolecularSequenceRelativeComponent>(value)) {
      const optErrMsg = `Invalid MolecularSequence.relative; Provided element is not an instance of MolecularSequenceRelativeComponent.`;
      assertFhirType<MolecularSequenceRelativeComponent>(value, MolecularSequenceRelativeComponent, optErrMsg);
      this.initRelative();
      this.relative?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `relative` property exists and has a value; `false` otherwise
   */
  public hasRelative(): boolean {
    return isDefinedList<MolecularSequenceRelativeComponent>(this.relative) && this.relative.some((item: MolecularSequenceRelativeComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `relative` property
   */
  private initRelative(): void {
    if(!this.hasRelative()) {
      this.relative = [] as MolecularSequenceRelativeComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'MolecularSequence';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identifier,
      this.type_,
      this.subject,
      this.focus,
      this.specimen,
      this.device,
      this.performer,
      this.literal,
      this.formatted,
      this.relative,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): MolecularSequence {
    const dest = new MolecularSequence();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: MolecularSequence): void {
    super.copyValues(dest);
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    dest.type_ = this.type_?.copy();
    dest.subject = this.subject?.copy();
    const focusList = copyListValues<Reference>(this.focus);
    dest.focus = focusList.length === 0 ? undefined : focusList;
    dest.specimen = this.specimen?.copy();
    dest.device = this.device?.copy();
    dest.performer = this.performer?.copy();
    dest.literal = this.literal?.copy();
    const formattedList = copyListValues<Attachment>(this.formatted);
    dest.formatted = formattedList.length === 0 ? undefined : formattedList;
    const relativeList = copyListValues<MolecularSequenceRelativeComponent>(this.relative);
    dest.relative = relativeList.length === 0 ? undefined : relativeList;
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
    }

    if (this.hasSubject()) {
      setFhirComplexJson(this.getSubject(), 'subject', jsonObj);
    }

    if (this.hasFocus()) {
      setFhirComplexListJson(this.getFocus(), 'focus', jsonObj);
    }

    if (this.hasSpecimen()) {
      setFhirComplexJson(this.getSpecimen(), 'specimen', jsonObj);
    }

    if (this.hasDevice()) {
      setFhirComplexJson(this.getDevice(), 'device', jsonObj);
    }

    if (this.hasPerformer()) {
      setFhirComplexJson(this.getPerformer(), 'performer', jsonObj);
    }

    if (this.hasLiteralElement()) {
      setFhirPrimitiveJson<fhirString>(this.getLiteralElement(), 'literal', jsonObj);
    }

    if (this.hasFormatted()) {
      setFhirComplexListJson(this.getFormatted(), 'formatted', jsonObj);
    }

    if (this.hasRelative()) {
      setFhirBackboneElementListJson(this.getRelative(), 'relative', jsonObj);
    }

    return jsonObj;
  }
}

/**
 * MolecularSequenceRelativeComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** A sequence defined relative to another sequence
 * - **Definition:** A sequence defined relative to another sequence.
 *
 * @category Data Models: Resource
 * @see [FHIR MolecularSequence](http://hl7.org/fhir/StructureDefinition/MolecularSequence)
 */
export class MolecularSequenceRelativeComponent extends BackboneElement implements IBackboneElement {
  constructor(coordinateSystem: CodeableConcept | null = null) {
    super();

    this.coordinateSystem = null;
    if (isDefined<CodeableConcept>(coordinateSystem)) {
      this.setCoordinateSystem(coordinateSystem);
    }
  }

  /**
   * Parse the provided `MolecularSequenceRelativeComponent` JSON to instantiate the MolecularSequenceRelativeComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `MolecularSequenceRelativeComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to MolecularSequenceRelativeComponent
   * @returns MolecularSequenceRelativeComponent data model or undefined for `MolecularSequenceRelativeComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): MolecularSequenceRelativeComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'MolecularSequenceRelativeComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new MolecularSequenceRelativeComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    fieldName = 'coordinateSystem';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setCoordinateSystem(null);
      } else {
        instance.setCoordinateSystem(datatype);
      }
    } else {
      instance.setCoordinateSystem(null);
    }

    fieldName = 'ordinalPosition';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: IntegerType | undefined = fhirParser.parseIntegerType(dtJson, dtSiblingJson);
      instance.setOrdinalPositionElement(datatype);
    }

    fieldName = 'sequenceRange';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Range | undefined = Range.parse(classJsonObj[fieldName]!, sourceField);
      instance.setSequenceRange(datatype);
    }

    fieldName = 'startingSequence';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: MolecularSequenceRelativeStartingSequenceComponent | undefined = MolecularSequenceRelativeStartingSequenceComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setStartingSequence(component);
    }

    fieldName = 'edit';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: MolecularSequenceRelativeEditComponent | undefined = MolecularSequenceRelativeEditComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addEdit(component);
          }
        });
      }
    }

    return instance;
  }

  /**
   * MolecularSequence.relative.coordinateSystem Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Ways of identifying nucleotides or amino acids within a sequence
   * - **Definition:** These are different ways of identifying nucleotides or amino acids within a sequence. Different databases and file types may use different systems. For detail definitions, see https://loinc.org/92822-6/ for more detail.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private coordinateSystem: CodeableConcept | null;

  /**
   * MolecularSequence.relative.ordinalPosition Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Indicates the order in which the sequence should be considered when putting multiple \'relative\' elements together
   * - **Definition:** Indicates the order in which the sequence should be considered when putting multiple \'relative\' elements together.
   * - **FHIR Type:** `integer`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private ordinalPosition?: IntegerType | undefined;

  /**
   * MolecularSequence.relative.sequenceRange Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Indicates the nucleotide range in the composed sequence when multiple \'relative\' elements are used together
   * - **Definition:** Indicates the nucleotide range in the composed sequence when multiple \'relative\' elements are used together.
   * - **FHIR Type:** `Range`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private sequenceRange?: Range | undefined;

  /**
   * MolecularSequence.relative.startingSequence Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A sequence used as starting sequence
   * - **Definition:** A sequence that is used as a starting sequence to describe variants that are present in a sequence analyzed.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private startingSequence?: MolecularSequenceRelativeStartingSequenceComponent | undefined;

  /**
   * MolecularSequence.relative.edit Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Changes in sequence from the starting sequence
   * - **Definition:** Changes in sequence from the starting sequence.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private edit?: MolecularSequenceRelativeEditComponent[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `coordinateSystem` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getCoordinateSystem(): CodeableConcept {
    return this.coordinateSystem ?? new CodeableConcept();
  }

  /**
   * Assigns the provided CodeableConcept object value to the `coordinateSystem` property.
   *
   * @param value - the `coordinateSystem` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCoordinateSystem(value: CodeableConcept | undefined | null): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid MolecularSequence.relative.coordinateSystem; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.coordinateSystem = value;
    } else {
      this.coordinateSystem = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `coordinateSystem` property exists and has a value; `false` otherwise
   */
  public hasCoordinateSystem(): boolean {
    return isDefined<CodeableConcept>(this.coordinateSystem) && !this.coordinateSystem.isEmpty();
  }

  /**
   * @returns the `ordinalPosition` property value as a IntegerType object if defined; else an empty IntegerType object
   */
  public getOrdinalPositionElement(): IntegerType {
    return this.ordinalPosition ?? new IntegerType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `ordinalPosition` property.
   *
   * @param element - the `ordinalPosition` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setOrdinalPositionElement(element: IntegerType | undefined): this {
    if (isDefined<IntegerType>(element)) {
      const optErrMsg = `Invalid MolecularSequence.relative.ordinalPosition; Provided element is not an instance of IntegerType.`;
      assertFhirType<IntegerType>(element, IntegerType, optErrMsg);
      this.ordinalPosition = element;
    } else {
      this.ordinalPosition = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `ordinalPosition` property exists and has a value; `false` otherwise
   */
  public hasOrdinalPositionElement(): boolean {
    return isDefined<IntegerType>(this.ordinalPosition) && !this.ordinalPosition.isEmpty();
  }

  /**
   * @returns the `ordinalPosition` property value as a fhirInteger if defined; else undefined
   */
  public getOrdinalPosition(): fhirInteger | undefined {
    return this.ordinalPosition?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `ordinalPosition` property.
   *
   * @param value - the `ordinalPosition` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setOrdinalPosition(value: fhirInteger | undefined): this {
    if (isDefined<fhirInteger>(value)) {
      const optErrMsg = `Invalid MolecularSequence.relative.ordinalPosition (${String(value)})`;
      this.ordinalPosition = new IntegerType(parseFhirPrimitiveData(value, fhirIntegerSchema, optErrMsg));
    } else {
      this.ordinalPosition = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `ordinalPosition` property exists and has a value; `false` otherwise
   */
  public hasOrdinalPosition(): boolean {
    return this.hasOrdinalPositionElement();
  }

  /**
   * @returns the `sequenceRange` property value as a Range object if defined; else an empty Range object
   */
  public getSequenceRange(): Range {
    return this.sequenceRange ?? new Range();
  }

  /**
   * Assigns the provided SequenceRange object value to the `sequenceRange` property.
   *
   * @param value - the `sequenceRange` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSequenceRange(value: Range | undefined): this {
    if (isDefined<Range>(value)) {
      const optErrMsg = `Invalid MolecularSequence.relative.sequenceRange; Provided element is not an instance of Range.`;
      assertFhirType<Range>(value, Range, optErrMsg);
      this.sequenceRange = value;
    } else {
      this.sequenceRange = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `sequenceRange` property exists and has a value; `false` otherwise
   */
  public hasSequenceRange(): boolean {
    return isDefined<Range>(this.sequenceRange) && !this.sequenceRange.isEmpty();
  }

  /**
   * @returns the `startingSequence` property value as a MolecularSequenceRelativeStartingSequenceComponent object if defined; else an empty MolecularSequenceRelativeStartingSequenceComponent object
   */
  public getStartingSequence(): MolecularSequenceRelativeStartingSequenceComponent {
    return this.startingSequence ?? new MolecularSequenceRelativeStartingSequenceComponent();
  }

  /**
   * Assigns the provided StartingSequence object value to the `startingSequence` property.
   *
   * @param value - the `startingSequence` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setStartingSequence(value: MolecularSequenceRelativeStartingSequenceComponent | undefined): this {
    if (isDefined<MolecularSequenceRelativeStartingSequenceComponent>(value)) {
      const optErrMsg = `Invalid MolecularSequence.relative.startingSequence; Provided element is not an instance of MolecularSequenceRelativeStartingSequenceComponent.`;
      assertFhirType<MolecularSequenceRelativeStartingSequenceComponent>(value, MolecularSequenceRelativeStartingSequenceComponent, optErrMsg);
      this.startingSequence = value;
    } else {
      this.startingSequence = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `startingSequence` property exists and has a value; `false` otherwise
   */
  public hasStartingSequence(): boolean {
    return isDefined<MolecularSequenceRelativeStartingSequenceComponent>(this.startingSequence) && !this.startingSequence.isEmpty();
  }

  /**
   * @returns the `edit` property value as a MolecularSequenceRelativeEditComponent array
   */
  public getEdit(): MolecularSequenceRelativeEditComponent[] {
    return this.edit ?? ([] as MolecularSequenceRelativeEditComponent[]);
  }

  /**
   * Assigns the provided MolecularSequenceRelativeEditComponent array value to the `edit` property.
   *
   * @param value - the `edit` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setEdit(value: MolecularSequenceRelativeEditComponent[] | undefined): this {
    if (isDefinedList<MolecularSequenceRelativeEditComponent>(value)) {
      const optErrMsg = `Invalid MolecularSequence.relative.edit; Provided value array has an element that is not an instance of MolecularSequenceRelativeEditComponent.`;
      assertFhirTypeList<MolecularSequenceRelativeEditComponent>(value, MolecularSequenceRelativeEditComponent, optErrMsg);
      this.edit = value;
    } else {
      this.edit = undefined;
    }
    return this;
  }

  /**
   * Add the provided MolecularSequenceRelativeEditComponent value to the `edit` array property.
   *
   * @param value - the `edit` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addEdit(value: MolecularSequenceRelativeEditComponent | undefined): this {
    if (isDefined<MolecularSequenceRelativeEditComponent>(value)) {
      const optErrMsg = `Invalid MolecularSequence.relative.edit; Provided element is not an instance of MolecularSequenceRelativeEditComponent.`;
      assertFhirType<MolecularSequenceRelativeEditComponent>(value, MolecularSequenceRelativeEditComponent, optErrMsg);
      this.initEdit();
      this.edit?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `edit` property exists and has a value; `false` otherwise
   */
  public hasEdit(): boolean {
    return isDefinedList<MolecularSequenceRelativeEditComponent>(this.edit) && this.edit.some((item: MolecularSequenceRelativeEditComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `edit` property
   */
  private initEdit(): void {
    if(!this.hasEdit()) {
      this.edit = [] as MolecularSequenceRelativeEditComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'MolecularSequence.relative';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.coordinateSystem,
      this.ordinalPosition,
      this.sequenceRange,
      this.startingSequence,
      this.edit,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.coordinateSystem, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): MolecularSequenceRelativeComponent {
    const dest = new MolecularSequenceRelativeComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: MolecularSequenceRelativeComponent): void {
    super.copyValues(dest);
    dest.coordinateSystem = this.coordinateSystem ? this.coordinateSystem.copy() : null;
    dest.ordinalPosition = this.ordinalPosition?.copy();
    dest.sequenceRange = this.sequenceRange?.copy();
    dest.startingSequence = this.startingSequence?.copy();
    const editList = copyListValues<MolecularSequenceRelativeEditComponent>(this.edit);
    dest.edit = editList.length === 0 ? undefined : editList;
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

    if (this.hasCoordinateSystem()) {
      setFhirComplexJson(this.getCoordinateSystem(), 'coordinateSystem', jsonObj);
    }

    if (this.hasOrdinalPositionElement()) {
      setFhirPrimitiveJson<fhirInteger>(this.getOrdinalPositionElement(), 'ordinalPosition', jsonObj);
    }

    if (this.hasSequenceRange()) {
      setFhirComplexJson(this.getSequenceRange(), 'sequenceRange', jsonObj);
    }

    if (this.hasStartingSequence()) {
      setFhirBackboneElementJson(this.getStartingSequence(), 'startingSequence', jsonObj);
    }

    if (this.hasEdit()) {
      setFhirBackboneElementListJson(this.getEdit(), 'edit', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * MolecularSequenceRelativeStartingSequenceComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** A sequence used as starting sequence
 * - **Definition:** A sequence that is used as a starting sequence to describe variants that are present in a sequence analyzed.
 *
 * @category Data Models: Resource
 * @see [FHIR MolecularSequence](http://hl7.org/fhir/StructureDefinition/MolecularSequence)
 */
export class MolecularSequenceRelativeStartingSequenceComponent extends BackboneElement implements IBackboneElement {
  constructor() {
    super();

    this.orientationTypeEnum = new OrientationTypeEnum();
    this.strandTypeEnum = new StrandTypeEnum();
  }

  /**
   * Parse the provided `MolecularSequenceRelativeStartingSequenceComponent` JSON to instantiate the MolecularSequenceRelativeStartingSequenceComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `MolecularSequenceRelativeStartingSequenceComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to MolecularSequenceRelativeStartingSequenceComponent
   * @returns MolecularSequenceRelativeStartingSequenceComponent data model or undefined for `MolecularSequenceRelativeStartingSequenceComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): MolecularSequenceRelativeStartingSequenceComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'MolecularSequenceRelativeStartingSequenceComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new MolecularSequenceRelativeStartingSequenceComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const classMetadata: DecoratorMetadataObject | null = MolecularSequenceRelativeStartingSequenceComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for MolecularSequenceRelativeStartingSequenceComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    fieldName = 'genomeAssembly';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setGenomeAssembly(datatype);
    }

    fieldName = 'chromosome';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setChromosome(datatype);
    }

    fieldName = 'sequence[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const sequence: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setSequence(sequence);

    fieldName = 'windowStart';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: IntegerType | undefined = fhirParser.parseIntegerType(dtJson, dtSiblingJson);
      instance.setWindowStartElement(datatype);
    }

    fieldName = 'windowEnd';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: IntegerType | undefined = fhirParser.parseIntegerType(dtJson, dtSiblingJson);
      instance.setWindowEndElement(datatype);
    }

    fieldName = 'orientation';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setOrientationElement(datatype);
    }

    fieldName = 'strand';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setStrandElement(datatype);
    }

    return instance;
  }

  /**
   * MolecularSequence.relative.startingSequence.genomeAssembly Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The genome assembly used for starting sequence, e.g. GRCh38
   * - **Definition:** The genome assembly used for starting sequence, e.g. GRCh38.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private genomeAssembly?: CodeableConcept | undefined;

  /**
   * MolecularSequence.relative.startingSequence.chromosome Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Chromosome Identifier
   * - **Definition:** Structural unit composed of a nucleic acid molecule which controls its own replication through the interaction of specific proteins at one or more origins of replication ([SO:0000340](http://www.sequenceontology.org/browser/current_svn/term/SO:0000340)).
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private chromosome?: CodeableConcept | undefined;

  /**
   * MolecularSequence.relative.startingSequence.sequence[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('MolecularSequence.relative.startingSequence.sequence[x]', ['CodeableConcept','string','Reference',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The reference sequence that represents the starting sequence
   * - **Definition:** The reference sequence that represents the starting sequence.
   * - **Comment:** A starting sequence may be represented in one of three ways:   1.  CodeableConcept, using NCBI, LRG or other appropriate code systems   1.  a simple string of IUPAC codes   1.  a reference to another MolecularSequence resource.
   * - **FHIR Types:**
   *     'CodeableConcept',
   *     'string',
   *     'Reference',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  @ChoiceDataTypesMeta('MolecularSequence.relative.startingSequence.sequence[x]',[
    'CodeableConcept',
    'string',
    'Reference',
  ])
  private sequence?: IDataType | undefined;

  /**
   * MolecularSequence.relative.startingSequence.windowStart Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Start position of the window on the starting sequence
   * - **Definition:** Start position of the window on the starting sequence. This value should honor the rules of the coordinateSystem.
   * - **FHIR Type:** `integer`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private windowStart?: IntegerType | undefined;

  /**
   * MolecularSequence.relative.startingSequence.windowEnd Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** End position of the window on the starting sequence
   * - **Definition:** End position of the window on the starting sequence. This value should honor the rules of the  coordinateSystem.
   * - **FHIR Type:** `integer`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private windowEnd?: IntegerType | undefined;

  /**
   * FHIR CodeSystem: OrientationType
   *
   * @see {@link OrientationTypeEnum }
   */
  private readonly orientationTypeEnum: OrientationTypeEnum;

  /**
   * MolecularSequence.relative.startingSequence.orientation Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** sense | antisense
   * - **Definition:** A relative reference to a DNA strand based on gene orientation. The strand that contains the open reading frame of the gene is the "sense" strand, and the opposite complementary strand is the "antisense" strand.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link OrientationTypeEnum }
   */
  private orientation?: EnumCodeType | undefined;

  /**
   * FHIR CodeSystem: StrandType
   *
   * @see {@link StrandTypeEnum }
   */
  private readonly strandTypeEnum: StrandTypeEnum;

  /**
   * MolecularSequence.relative.startingSequence.strand Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** watson | crick
   * - **Definition:** An absolute reference to a strand. The Watson strand is the strand whose 5\'-end is on the short arm of the chromosome, and the Crick strand as the one whose 5\'-end is on the long arm.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link StrandTypeEnum }
   */
  private strand?: EnumCodeType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `genomeAssembly` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getGenomeAssembly(): CodeableConcept {
    return this.genomeAssembly ?? new CodeableConcept();
  }

  /**
   * Assigns the provided GenomeAssembly object value to the `genomeAssembly` property.
   *
   * @param value - the `genomeAssembly` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setGenomeAssembly(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid MolecularSequence.relative.startingSequence.genomeAssembly; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.genomeAssembly = value;
    } else {
      this.genomeAssembly = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `genomeAssembly` property exists and has a value; `false` otherwise
   */
  public hasGenomeAssembly(): boolean {
    return isDefined<CodeableConcept>(this.genomeAssembly) && !this.genomeAssembly.isEmpty();
  }

  /**
   * @returns the `chromosome` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getChromosome(): CodeableConcept {
    return this.chromosome ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Chromosome object value to the `chromosome` property.
   *
   * @param value - the `chromosome` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setChromosome(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid MolecularSequence.relative.startingSequence.chromosome; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.chromosome = value;
    } else {
      this.chromosome = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `chromosome` property exists and has a value; `false` otherwise
   */
  public hasChromosome(): boolean {
    return isDefined<CodeableConcept>(this.chromosome) && !this.chromosome.isEmpty();
  }

  /**
   * @returns the `sequence` property value as a DataType object if defined; else undefined
   */
  public getSequence(): IDataType | undefined {
    return this.sequence;
  }

  /**
   * Assigns the provided DataType object value to the `sequence` property.
   *
   * @decorator `@ChoiceDataTypes('MolecularSequence.relative.startingSequence.sequence[x]')`
   *
   * @param value - the `sequence` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('MolecularSequence.relative.startingSequence.sequence[x]')
  public setSequence(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.sequence = value;
    } else {
      this.sequence = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `sequence` property exists and has a value; `false` otherwise
   */
  public hasSequence(): boolean {
    return isDefined<IDataType>(this.sequence) && !this.sequence.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `sequence` property value as a CodeableConcept object if defined; else undefined
   */
  public getSequenceCodeableConcept(): CodeableConcept | undefined {
    if (!isDefined<IDataType | undefined>(this.sequence)) {
      return undefined;
    }
    if (!(this.sequence instanceof CodeableConcept)) {
      throw new InvalidTypeError(
        `DataType mismatch for MolecularSequence.relative.startingSequence.sequence[x]: Expected CodeableConcept but encountered ${this.sequence.fhirType()}`,
      );
    }
    return this.sequence;
  }

  /**
   * @returns `true` if the `sequence` property exists as a CodeableConcept and has a value; `false` otherwise
   */
  public hasSequenceCodeableConcept(): boolean {
    return this.hasSequence() && this.sequence instanceof CodeableConcept;
  }

  /**
   * @returns the `sequence` property value as a StringType object if defined; else undefined
   */
  public getSequenceStringType(): StringType | undefined {
    if (!isDefined<IDataType | undefined>(this.sequence)) {
      return undefined;
    }
    if (!(this.sequence instanceof StringType)) {
      throw new InvalidTypeError(
        `DataType mismatch for MolecularSequence.relative.startingSequence.sequence[x]: Expected StringType but encountered ${this.sequence.fhirType()}`,
      );
    }
    return this.sequence;
  }

  /**
   * @returns `true` if the `sequence` property exists as a StringType and has a value; `false` otherwise
   */
  public hasSequenceStringType(): boolean {
    return this.hasSequence() && this.sequence instanceof StringType;
  }

  /**
   * @returns the `sequence` property value as a Reference object if defined; else undefined
   */
  public getSequenceReference(): Reference | undefined {
    if (!isDefined<IDataType | undefined>(this.sequence)) {
      return undefined;
    }
    if (!(this.sequence instanceof Reference)) {
      throw new InvalidTypeError(
        `DataType mismatch for MolecularSequence.relative.startingSequence.sequence[x]: Expected Reference but encountered ${this.sequence.fhirType()}`,
      );
    }
    return this.sequence;
  }

  /**
   * @returns `true` if the `sequence` property exists as a Reference and has a value; `false` otherwise
   */
  public hasSequenceReference(): boolean {
    return this.hasSequence() && this.sequence instanceof Reference;
  }

  // End of choice datatype-specific "get"/"has" methods

  /**
   * @returns the `windowStart` property value as a IntegerType object if defined; else an empty IntegerType object
   */
  public getWindowStartElement(): IntegerType {
    return this.windowStart ?? new IntegerType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `windowStart` property.
   *
   * @param element - the `windowStart` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setWindowStartElement(element: IntegerType | undefined): this {
    if (isDefined<IntegerType>(element)) {
      const optErrMsg = `Invalid MolecularSequence.relative.startingSequence.windowStart; Provided element is not an instance of IntegerType.`;
      assertFhirType<IntegerType>(element, IntegerType, optErrMsg);
      this.windowStart = element;
    } else {
      this.windowStart = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `windowStart` property exists and has a value; `false` otherwise
   */
  public hasWindowStartElement(): boolean {
    return isDefined<IntegerType>(this.windowStart) && !this.windowStart.isEmpty();
  }

  /**
   * @returns the `windowStart` property value as a fhirInteger if defined; else undefined
   */
  public getWindowStart(): fhirInteger | undefined {
    return this.windowStart?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `windowStart` property.
   *
   * @param value - the `windowStart` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setWindowStart(value: fhirInteger | undefined): this {
    if (isDefined<fhirInteger>(value)) {
      const optErrMsg = `Invalid MolecularSequence.relative.startingSequence.windowStart (${String(value)})`;
      this.windowStart = new IntegerType(parseFhirPrimitiveData(value, fhirIntegerSchema, optErrMsg));
    } else {
      this.windowStart = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `windowStart` property exists and has a value; `false` otherwise
   */
  public hasWindowStart(): boolean {
    return this.hasWindowStartElement();
  }

  /**
   * @returns the `windowEnd` property value as a IntegerType object if defined; else an empty IntegerType object
   */
  public getWindowEndElement(): IntegerType {
    return this.windowEnd ?? new IntegerType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `windowEnd` property.
   *
   * @param element - the `windowEnd` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setWindowEndElement(element: IntegerType | undefined): this {
    if (isDefined<IntegerType>(element)) {
      const optErrMsg = `Invalid MolecularSequence.relative.startingSequence.windowEnd; Provided element is not an instance of IntegerType.`;
      assertFhirType<IntegerType>(element, IntegerType, optErrMsg);
      this.windowEnd = element;
    } else {
      this.windowEnd = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `windowEnd` property exists and has a value; `false` otherwise
   */
  public hasWindowEndElement(): boolean {
    return isDefined<IntegerType>(this.windowEnd) && !this.windowEnd.isEmpty();
  }

  /**
   * @returns the `windowEnd` property value as a fhirInteger if defined; else undefined
   */
  public getWindowEnd(): fhirInteger | undefined {
    return this.windowEnd?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `windowEnd` property.
   *
   * @param value - the `windowEnd` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setWindowEnd(value: fhirInteger | undefined): this {
    if (isDefined<fhirInteger>(value)) {
      const optErrMsg = `Invalid MolecularSequence.relative.startingSequence.windowEnd (${String(value)})`;
      this.windowEnd = new IntegerType(parseFhirPrimitiveData(value, fhirIntegerSchema, optErrMsg));
    } else {
      this.windowEnd = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `windowEnd` property exists and has a value; `false` otherwise
   */
  public hasWindowEnd(): boolean {
    return this.hasWindowEndElement();
  }

  /**
   * @returns the `orientation` property value as a EnumCodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link OrientationTypeEnum }
   */
  public getOrientationEnumType(): EnumCodeType | undefined {
    return this.orientation;
  }

  /**
   * Assigns the provided EnumCodeType value to the `orientation` property.
   *
   * @param enumType - the `orientation` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code values
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link OrientationTypeEnum }
   */
  public setOrientationEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = 'Invalid MolecularSequence.relative.startingSequence.orientation';
      assertEnumCodeType<OrientationTypeEnum>(enumType, OrientationTypeEnum, errMsgPrefix);
      this.orientation = enumType;
    } else {
      this.orientation = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `orientation` property exists and has a value; `false` otherwise
   */
  public hasOrientationEnumType(): boolean {
    return isDefined<EnumCodeType>(this.orientation) && !this.orientation.isEmpty() && this.orientation.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `orientation` property value as a CodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link OrientationTypeEnum }
   */
  public getOrientationElement(): CodeType | undefined {
    if (this.orientation === undefined) {
      return undefined;
    }
    return this.orientation as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `orientation` property.
   *
   * @param element - the `orientation` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link OrientationTypeEnum }
   */
  public setOrientationElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid MolecularSequence.relative.startingSequence.orientation; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.orientation = new EnumCodeType(element, this.orientationTypeEnum);
    } else {
      this.orientation = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `orientation` property exists and has a value; `false` otherwise
   */
  public hasOrientationElement(): boolean {
    return this.hasOrientationEnumType();
  }

  /**
   * @returns the `orientation` property value as a fhirCode if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link OrientationTypeEnum }
   */
  public getOrientation(): fhirCode | undefined {
    if (this.orientation === undefined) {
      return undefined;
    }
    return this.orientation.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `orientation` property.
   *
   * @param value - the `orientation` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link OrientationTypeEnum }
   */
  public setOrientation(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid MolecularSequence.relative.startingSequence.orientation; Provided value is not an instance of fhirCode.`;
      this.orientation = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.orientationTypeEnum);
    } else {
      this.orientation = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `orientation` property exists and has a value; `false` otherwise
   */
  public hasOrientation(): boolean {
    return this.hasOrientationEnumType();
  }

  /**
   * @returns the `strand` property value as a EnumCodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link StrandTypeEnum }
   */
  public getStrandEnumType(): EnumCodeType | undefined {
    return this.strand;
  }

  /**
   * Assigns the provided EnumCodeType value to the `strand` property.
   *
   * @param enumType - the `strand` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code values
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link StrandTypeEnum }
   */
  public setStrandEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = 'Invalid MolecularSequence.relative.startingSequence.strand';
      assertEnumCodeType<StrandTypeEnum>(enumType, StrandTypeEnum, errMsgPrefix);
      this.strand = enumType;
    } else {
      this.strand = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `strand` property exists and has a value; `false` otherwise
   */
  public hasStrandEnumType(): boolean {
    return isDefined<EnumCodeType>(this.strand) && !this.strand.isEmpty() && this.strand.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `strand` property value as a CodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link StrandTypeEnum }
   */
  public getStrandElement(): CodeType | undefined {
    if (this.strand === undefined) {
      return undefined;
    }
    return this.strand as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `strand` property.
   *
   * @param element - the `strand` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link StrandTypeEnum }
   */
  public setStrandElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid MolecularSequence.relative.startingSequence.strand; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.strand = new EnumCodeType(element, this.strandTypeEnum);
    } else {
      this.strand = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `strand` property exists and has a value; `false` otherwise
   */
  public hasStrandElement(): boolean {
    return this.hasStrandEnumType();
  }

  /**
   * @returns the `strand` property value as a fhirCode if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link StrandTypeEnum }
   */
  public getStrand(): fhirCode | undefined {
    if (this.strand === undefined) {
      return undefined;
    }
    return this.strand.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `strand` property.
   *
   * @param value - the `strand` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link StrandTypeEnum }
   */
  public setStrand(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid MolecularSequence.relative.startingSequence.strand; Provided value is not an instance of fhirCode.`;
      this.strand = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.strandTypeEnum);
    } else {
      this.strand = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `strand` property exists and has a value; `false` otherwise
   */
  public hasStrand(): boolean {
    return this.hasStrandEnumType();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'MolecularSequence.relative.startingSequence';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.genomeAssembly,
      this.chromosome,
      this.sequence,
      this.windowStart,
      this.windowEnd,
      this.orientation,
      this.strand,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): MolecularSequenceRelativeStartingSequenceComponent {
    const dest = new MolecularSequenceRelativeStartingSequenceComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: MolecularSequenceRelativeStartingSequenceComponent): void {
    super.copyValues(dest);
    dest.genomeAssembly = this.genomeAssembly?.copy();
    dest.chromosome = this.chromosome?.copy();
    dest.sequence = this.sequence?.copy() as IDataType;
    dest.windowStart = this.windowStart?.copy();
    dest.windowEnd = this.windowEnd?.copy();
    dest.orientation = this.orientation?.copy();
    dest.strand = this.strand?.copy();
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

    if (this.hasGenomeAssembly()) {
      setFhirComplexJson(this.getGenomeAssembly(), 'genomeAssembly', jsonObj);
    }

    if (this.hasChromosome()) {
      setFhirComplexJson(this.getChromosome(), 'chromosome', jsonObj);
    }

    if (this.hasSequence()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getSequence()!, 'sequence', jsonObj);
    }

    if (this.hasWindowStartElement()) {
      setFhirPrimitiveJson<fhirInteger>(this.getWindowStartElement(), 'windowStart', jsonObj);
    }

    if (this.hasWindowEndElement()) {
      setFhirPrimitiveJson<fhirInteger>(this.getWindowEndElement(), 'windowEnd', jsonObj);
    }

    if (this.hasOrientationElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getOrientationElement()!, 'orientation', jsonObj);
    }

    if (this.hasStrandElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getStrandElement()!, 'strand', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * MolecularSequenceRelativeEditComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Changes in sequence from the starting sequence
 * - **Definition:** Changes in sequence from the starting sequence.
 *
 * @category Data Models: Resource
 * @see [FHIR MolecularSequence](http://hl7.org/fhir/StructureDefinition/MolecularSequence)
 */
export class MolecularSequenceRelativeEditComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `MolecularSequenceRelativeEditComponent` JSON to instantiate the MolecularSequenceRelativeEditComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `MolecularSequenceRelativeEditComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to MolecularSequenceRelativeEditComponent
   * @returns MolecularSequenceRelativeEditComponent data model or undefined for `MolecularSequenceRelativeEditComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): MolecularSequenceRelativeEditComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'MolecularSequenceRelativeEditComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new MolecularSequenceRelativeEditComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'start';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: IntegerType | undefined = fhirParser.parseIntegerType(dtJson, dtSiblingJson);
      instance.setStartElement(datatype);
    }

    fieldName = 'end';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: IntegerType | undefined = fhirParser.parseIntegerType(dtJson, dtSiblingJson);
      instance.setEndElement(datatype);
    }

    fieldName = 'replacementSequence';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setReplacementSequenceElement(datatype);
    }

    fieldName = 'replacedSequence';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setReplacedSequenceElement(datatype);
    }

    return instance;
  }

  /**
   * MolecularSequence.relative.edit.start Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Start position of the edit on the starting sequence
   * - **Definition:** Start position of the edit on the starting sequence. If the coordinate system is either 0-based or 1-based, then start position is inclusive.
   * - **FHIR Type:** `integer`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private start?: IntegerType | undefined;

  /**
   * MolecularSequence.relative.edit.end Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** End position of the edit on the starting sequence
   * - **Definition:** End position of the edit on the starting sequence. If the coordinate system is 0-based then end is exclusive and does not include the last position. If the coordinate system is 1-base, then end is inclusive and includes the last position.
   * - **FHIR Type:** `integer`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private end?: IntegerType | undefined;

  /**
   * MolecularSequence.relative.edit.replacementSequence Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Allele that was observed
   * - **Definition:** Allele that was observed. Nucleotide(s)/amino acids from start position of sequence to stop position of sequence on the positive (+) strand of the observed sequence. When the sequence type is DNA, it should be the sequence on the positive (+) strand. This will lay in the range between variant.start and variant.end.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private replacementSequence?: StringType | undefined;

  /**
   * MolecularSequence.relative.edit.replacedSequence Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Allele in the starting sequence
   * - **Definition:** Allele in the starting sequence. Nucleotide(s)/amino acids from start position of sequence to stop position of sequence on the positive (+) strand of the starting sequence. When the sequence  type is DNA, it should be the sequence on the positive (+) strand. This will lay in the range between variant.start and variant.end.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private replacedSequence?: StringType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `start` property value as a IntegerType object if defined; else an empty IntegerType object
   */
  public getStartElement(): IntegerType {
    return this.start ?? new IntegerType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `start` property.
   *
   * @param element - the `start` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setStartElement(element: IntegerType | undefined): this {
    if (isDefined<IntegerType>(element)) {
      const optErrMsg = `Invalid MolecularSequence.relative.edit.start; Provided element is not an instance of IntegerType.`;
      assertFhirType<IntegerType>(element, IntegerType, optErrMsg);
      this.start = element;
    } else {
      this.start = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `start` property exists and has a value; `false` otherwise
   */
  public hasStartElement(): boolean {
    return isDefined<IntegerType>(this.start) && !this.start.isEmpty();
  }

  /**
   * @returns the `start` property value as a fhirInteger if defined; else undefined
   */
  public getStart(): fhirInteger | undefined {
    return this.start?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `start` property.
   *
   * @param value - the `start` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setStart(value: fhirInteger | undefined): this {
    if (isDefined<fhirInteger>(value)) {
      const optErrMsg = `Invalid MolecularSequence.relative.edit.start (${String(value)})`;
      this.start = new IntegerType(parseFhirPrimitiveData(value, fhirIntegerSchema, optErrMsg));
    } else {
      this.start = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `start` property exists and has a value; `false` otherwise
   */
  public hasStart(): boolean {
    return this.hasStartElement();
  }

  /**
   * @returns the `end` property value as a IntegerType object if defined; else an empty IntegerType object
   */
  public getEndElement(): IntegerType {
    return this.end ?? new IntegerType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `end` property.
   *
   * @param element - the `end` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setEndElement(element: IntegerType | undefined): this {
    if (isDefined<IntegerType>(element)) {
      const optErrMsg = `Invalid MolecularSequence.relative.edit.end; Provided element is not an instance of IntegerType.`;
      assertFhirType<IntegerType>(element, IntegerType, optErrMsg);
      this.end = element;
    } else {
      this.end = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `end` property exists and has a value; `false` otherwise
   */
  public hasEndElement(): boolean {
    return isDefined<IntegerType>(this.end) && !this.end.isEmpty();
  }

  /**
   * @returns the `end` property value as a fhirInteger if defined; else undefined
   */
  public getEnd(): fhirInteger | undefined {
    return this.end?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `end` property.
   *
   * @param value - the `end` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setEnd(value: fhirInteger | undefined): this {
    if (isDefined<fhirInteger>(value)) {
      const optErrMsg = `Invalid MolecularSequence.relative.edit.end (${String(value)})`;
      this.end = new IntegerType(parseFhirPrimitiveData(value, fhirIntegerSchema, optErrMsg));
    } else {
      this.end = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `end` property exists and has a value; `false` otherwise
   */
  public hasEnd(): boolean {
    return this.hasEndElement();
  }

  /**
   * @returns the `replacementSequence` property value as a StringType object if defined; else an empty StringType object
   */
  public getReplacementSequenceElement(): StringType {
    return this.replacementSequence ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `replacementSequence` property.
   *
   * @param element - the `replacementSequence` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setReplacementSequenceElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid MolecularSequence.relative.edit.replacementSequence; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.replacementSequence = element;
    } else {
      this.replacementSequence = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `replacementSequence` property exists and has a value; `false` otherwise
   */
  public hasReplacementSequenceElement(): boolean {
    return isDefined<StringType>(this.replacementSequence) && !this.replacementSequence.isEmpty();
  }

  /**
   * @returns the `replacementSequence` property value as a fhirString if defined; else undefined
   */
  public getReplacementSequence(): fhirString | undefined {
    return this.replacementSequence?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `replacementSequence` property.
   *
   * @param value - the `replacementSequence` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setReplacementSequence(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid MolecularSequence.relative.edit.replacementSequence (${String(value)})`;
      this.replacementSequence = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.replacementSequence = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `replacementSequence` property exists and has a value; `false` otherwise
   */
  public hasReplacementSequence(): boolean {
    return this.hasReplacementSequenceElement();
  }

  /**
   * @returns the `replacedSequence` property value as a StringType object if defined; else an empty StringType object
   */
  public getReplacedSequenceElement(): StringType {
    return this.replacedSequence ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `replacedSequence` property.
   *
   * @param element - the `replacedSequence` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setReplacedSequenceElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid MolecularSequence.relative.edit.replacedSequence; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.replacedSequence = element;
    } else {
      this.replacedSequence = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `replacedSequence` property exists and has a value; `false` otherwise
   */
  public hasReplacedSequenceElement(): boolean {
    return isDefined<StringType>(this.replacedSequence) && !this.replacedSequence.isEmpty();
  }

  /**
   * @returns the `replacedSequence` property value as a fhirString if defined; else undefined
   */
  public getReplacedSequence(): fhirString | undefined {
    return this.replacedSequence?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `replacedSequence` property.
   *
   * @param value - the `replacedSequence` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setReplacedSequence(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid MolecularSequence.relative.edit.replacedSequence (${String(value)})`;
      this.replacedSequence = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.replacedSequence = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `replacedSequence` property exists and has a value; `false` otherwise
   */
  public hasReplacedSequence(): boolean {
    return this.hasReplacedSequenceElement();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'MolecularSequence.relative.edit';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.start,
      this.end,
      this.replacementSequence,
      this.replacedSequence,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): MolecularSequenceRelativeEditComponent {
    const dest = new MolecularSequenceRelativeEditComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: MolecularSequenceRelativeEditComponent): void {
    super.copyValues(dest);
    dest.start = this.start?.copy();
    dest.end = this.end?.copy();
    dest.replacementSequence = this.replacementSequence?.copy();
    dest.replacedSequence = this.replacedSequence?.copy();
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

    if (this.hasStartElement()) {
      setFhirPrimitiveJson<fhirInteger>(this.getStartElement(), 'start', jsonObj);
    }

    if (this.hasEndElement()) {
      setFhirPrimitiveJson<fhirInteger>(this.getEndElement(), 'end', jsonObj);
    }

    if (this.hasReplacementSequenceElement()) {
      setFhirPrimitiveJson<fhirString>(this.getReplacementSequenceElement(), 'replacementSequence', jsonObj);
    }

    if (this.hasReplacedSequenceElement()) {
      setFhirPrimitiveJson<fhirString>(this.getReplacedSequenceElement(), 'replacedSequence', jsonObj);
    }

    return jsonObj;
  }
}
