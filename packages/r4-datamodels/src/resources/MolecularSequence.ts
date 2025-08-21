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
 * StructureDefinition.description: Raw data describing a biological sequence.
 * StructureDefinition.fhirVersion: 4.0.1
 *
 * For questions, suggestions, or bugs, please open an issue at [GitHub ts-fhir-datamodels/issues](https://github.com/Paqrat76/ts-fhir-datamodels/issues).
 *
 * @packageDocumentation
 */

import { strict as assert } from 'node:assert';
import {
  BackboneElement,
  BooleanType,
  CodeType,
  DecimalType,
  DomainResource,
  EnumCodeType,
  FhirError,
  FhirParser,
  IBackboneElement,
  IDomainResource,
  INSTANCE_EMPTY_ERROR_MSG,
  IntegerType,
  JSON,
  PrimitiveType,
  PrimitiveTypeJson,
  REQUIRED_PROPERTIES_DO_NOT_EXIST,
  REQUIRED_PROPERTIES_REQD_IN_JSON,
  ReferenceTargets,
  StringType,
  UriType,
  assertEnumCodeType,
  assertFhirType,
  assertFhirTypeList,
  assertIsDefined,
  constructorCodeValueAsEnumCodeType,
  copyListValues,
  fhirBoolean,
  fhirBooleanSchema,
  fhirCode,
  fhirCodeSchema,
  fhirDecimal,
  fhirDecimalSchema,
  fhirInteger,
  fhirIntegerSchema,
  fhirString,
  fhirStringSchema,
  fhirUri,
  fhirUriSchema,
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
import { CodeableConcept, Identifier, PARSABLE_DATATYPE_MAP, Quantity, Reference } from '../complex-types/complex-datatypes';
import { OrientationTypeEnum } from '../code-systems/OrientationTypeEnum';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';
import { QualityTypeEnum } from '../code-systems/QualityTypeEnum';
import { RepositoryTypeEnum } from '../code-systems/RepositoryTypeEnum';
import { SequenceTypeEnum } from '../code-systems/SequenceTypeEnum';
import { StrandTypeEnum } from '../code-systems/StrandTypeEnum';

/**
 * MolecularSequence Class
 *
 * @remarks
 * Raw data describing a biological sequence.
 *
 * **FHIR Specification**
 * - **Short:** Information about a biological sequence
 * - **Definition:** Raw data describing a biological sequence.
 * - **FHIR Version:** 4.0.1
 *
 * @category Data Models: Resource
 * @see [FHIR MolecularSequence](http://hl7.org/fhir/StructureDefinition/MolecularSequence)
 */
export class MolecularSequence extends DomainResource implements IDomainResource {
  constructor(coordinateSystem: IntegerType | fhirInteger | null = null) {
    super();

    this.sequenceTypeEnum = new SequenceTypeEnum();

    this.coordinateSystem = null;
    if (isDefined<IntegerType | fhirInteger>(coordinateSystem)) {
      if (coordinateSystem instanceof PrimitiveType) {
        this.setCoordinateSystemElement(coordinateSystem);
      } else {
        this.setCoordinateSystem(coordinateSystem);
      }
    }
  }

  /**
   * Parse the provided `MolecularSequence` JSON to instantiate the MolecularSequence data model.
   *
   * @param sourceJson - JSON representing FHIR `MolecularSequence`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to MolecularSequence
   * @returns MolecularSequence data model or undefined for `MolecularSequence`
   * @throws {@link FhirError} if the provided JSON is missing required properties
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

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setTypeElement(datatype);
    }

    fieldName = 'coordinateSystem';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: IntegerType | undefined = fhirParser.parseIntegerType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setCoordinateSystemElement(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'patient';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setPatient(datatype);
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

    fieldName = 'quantity';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Quantity | undefined = Quantity.parse(classJsonObj[fieldName]!, sourceField);
      instance.setQuantity(datatype);
    }

    fieldName = 'referenceSeq';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: MolecularSequenceReferenceSeqComponent | undefined = MolecularSequenceReferenceSeqComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setReferenceSeq(component);
    }

    fieldName = 'variant';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: MolecularSequenceVariantComponent | undefined = MolecularSequenceVariantComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addVariant(component);
        }
      });
    }

    fieldName = 'observedSeq';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setObservedSeqElement(datatype);
    }

    fieldName = 'quality';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: MolecularSequenceQualityComponent | undefined = MolecularSequenceQualityComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addQuality(component);
        }
      });
    }

    fieldName = 'readCoverage';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: IntegerType | undefined = fhirParser.parseIntegerType(dtJson, dtSiblingJson);
      instance.setReadCoverageElement(datatype);
    }

    fieldName = 'repository';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: MolecularSequenceRepositoryComponent | undefined = MolecularSequenceRepositoryComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addRepository(component);
        }
      });
    }

    fieldName = 'pointer';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addPointer(datatype);
        }
      });
  }

    fieldName = 'structureVariant';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: MolecularSequenceStructureVariantComponent | undefined = MolecularSequenceStructureVariantComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addStructureVariant(component);
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
   * MolecularSequence.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Unique ID for this particular sequence. This is a FHIR-defined id
   * - **Definition:** A unique identifier for this particular sequence instance. This is a FHIR-defined id.
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
   * MolecularSequence.coordinateSystem Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Base number of coordinate system (0 for 0-based numbering or coordinates, inclusive start, exclusive end, 1 for 1-based numbering, inclusive start, inclusive end)
   * - **Definition:** Whether the sequence is numbered starting at 0 (0-based numbering or coordinates, inclusive start, exclusive end) or starting at 1 (1-based numbering, inclusive start and inclusive end).
   * - **FHIR Type:** `integer`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private coordinateSystem: IntegerType | null;

  /**
   * MolecularSequence.patient Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who and/or what this is about
   * - **Definition:** The patient whose sequencing results are described by this resource.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private patient?: Reference | undefined;

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
   * MolecularSequence.quantity Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The number of copies of the sequence of interest.  (RNASeq)
   * - **Definition:** The number of copies of the sequence of interest. (RNASeq).
   * - **FHIR Type:** `Quantity`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private quantity?: Quantity | undefined;

  /**
   * MolecularSequence.referenceSeq Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A sequence used as reference
   * - **Definition:** A sequence that is used as a reference to describe variants that are present in a sequence analyzed.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private referenceSeq?: MolecularSequenceReferenceSeqComponent | undefined;

  /**
   * MolecularSequence.variant Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Variant in sequence
   * - **Definition:** The definition of variant here originates from Sequence ontology ([variant_of](http://www.sequenceontology.org/browser/current_svn/term/variant_of)). This element can represent amino acid or nucleic sequence change(including insertion,deletion,SNP,etc.)  It can represent some complex mutation or segment variation with the assist of CIGAR string.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private variant?: MolecularSequenceVariantComponent[] | undefined;

  /**
   * MolecularSequence.observedSeq Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Sequence that was observed
   * - **Definition:** Sequence that was observed. It is the result marked by referenceSeq along with variant records on referenceSeq. This shall start from referenceSeq.windowStart and end by referenceSeq.windowEnd.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private observedSeq?: StringType | undefined;

  /**
   * MolecularSequence.quality Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** An set of value as quality of sequence
   * - **Definition:** An experimental feature attribute that defines the quality of the feature in a quantitative way, such as a phred quality score ([SO:0001686](http://www.sequenceontology.org/browser/current_svn/term/SO:0001686)).
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private quality?: MolecularSequenceQualityComponent[] | undefined;

  /**
   * MolecularSequence.readCoverage Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Average number of reads representing a given nucleotide in the reconstructed sequence
   * - **Definition:** Coverage (read depth or depth) is the average number of reads representing a given nucleotide in the reconstructed sequence.
   * - **FHIR Type:** `integer`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private readCoverage?: IntegerType | undefined;

  /**
   * MolecularSequence.repository Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** External repository which contains detailed report related with observedSeq in this resource
   * - **Definition:** Configurations of the external repository. The repository shall store target\'s observedSeq or records related with target\'s observedSeq.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private repository?: MolecularSequenceRepositoryComponent[] | undefined;

  /**
   * MolecularSequence.pointer Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Pointer to next atomic sequence
   * - **Definition:** Pointer to next atomic sequence which at most contains one variant.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/MolecularSequence',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private pointer?: Reference[] | undefined;

  /**
   * MolecularSequence.structureVariant Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Structural variant
   * - **Definition:** Information about chromosome structure variation.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private structureVariant?: MolecularSequenceStructureVariantComponent[] | undefined;

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
   * @returns the `coordinateSystem` property value as a IntegerType object if defined; else null
   */
  public getCoordinateSystemElement(): IntegerType | null {
    return this.coordinateSystem;
  }

  /**
   * Assigns the provided PrimitiveType value to the `coordinateSystem` property.
   *
   * @param element - the `coordinateSystem` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCoordinateSystemElement(element: IntegerType): this {
    assertIsDefined<IntegerType>(element, `MolecularSequence.coordinateSystem is required`);
    const optErrMsg = `Invalid MolecularSequence.coordinateSystem; Provided value is not an instance of IntegerType.`;
    assertFhirType<IntegerType>(element, IntegerType, optErrMsg);
    this.coordinateSystem = element;
    return this;
  }

  /**
   * @returns `true` if the `coordinateSystem` property exists and has a value; `false` otherwise
   */
  public hasCoordinateSystemElement(): boolean {
    return isDefined<IntegerType>(this.coordinateSystem) && !this.coordinateSystem.isEmpty();
  }

  /**
   * @returns the `coordinateSystem` property value as a fhirInteger if defined; else null
   */
  public getCoordinateSystem(): fhirInteger | null {
    if (this.coordinateSystem?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.coordinateSystem.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `coordinateSystem` property.
   *
   * @param value - the `coordinateSystem` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCoordinateSystem(value: fhirInteger): this {
    assertIsDefined<fhirInteger>(value, `MolecularSequence.coordinateSystem is required`);
    const optErrMsg = `Invalid MolecularSequence.coordinateSystem (${String(value)})`;
    this.coordinateSystem = new IntegerType(parseFhirPrimitiveData(value, fhirIntegerSchema, optErrMsg));
    return this;
  }

  /**
   * @returns `true` if the `coordinateSystem` property exists and has a value; `false` otherwise
   */
  public hasCoordinateSystem(): boolean {
    return this.hasCoordinateSystemElement();
  }

  /**
   * @returns the `patient` property value as a Reference object; else an empty Reference object
   */
  public getPatient(): Reference {
    return this.patient ?? new Reference();
  }

  /**
   * Assigns the provided Patient object value to the `patient` property.
   *
   * @decorator `@ReferenceTargets('MolecularSequence.patient', ['Patient',])`
   *
   * @param value - the `patient` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MolecularSequence.patient', [
    'Patient',
  ])
  public setPatient(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.patient = value;
    } else {
      this.patient = undefined;
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
   * @returns the `quantity` property value as a Quantity object if defined; else an empty Quantity object
   */
  public getQuantity(): Quantity {
    return this.quantity ?? new Quantity();
  }

  /**
   * Assigns the provided Quantity object value to the `quantity` property.
   *
   * @param value - the `quantity` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setQuantity(value: Quantity | undefined): this {
    if (isDefined<Quantity>(value)) {
      const optErrMsg = `Invalid MolecularSequence.quantity; Provided element is not an instance of Quantity.`;
      assertFhirType<Quantity>(value, Quantity, optErrMsg);
      this.quantity = value;
    } else {
      this.quantity = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `quantity` property exists and has a value; `false` otherwise
   */
  public hasQuantity(): boolean {
    return isDefined<Quantity>(this.quantity) && !this.quantity.isEmpty();
  }

  /**
   * @returns the `referenceSeq` property value as a MolecularSequenceReferenceSeqComponent object if defined; else an empty MolecularSequenceReferenceSeqComponent object
   */
  public getReferenceSeq(): MolecularSequenceReferenceSeqComponent {
    return this.referenceSeq ?? new MolecularSequenceReferenceSeqComponent();
  }

  /**
   * Assigns the provided ReferenceSeq object value to the `referenceSeq` property.
   *
   * @param value - the `referenceSeq` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setReferenceSeq(value: MolecularSequenceReferenceSeqComponent | undefined): this {
    if (isDefined<MolecularSequenceReferenceSeqComponent>(value)) {
      const optErrMsg = `Invalid MolecularSequence.referenceSeq; Provided element is not an instance of MolecularSequenceReferenceSeqComponent.`;
      assertFhirType<MolecularSequenceReferenceSeqComponent>(value, MolecularSequenceReferenceSeqComponent, optErrMsg);
      this.referenceSeq = value;
    } else {
      this.referenceSeq = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `referenceSeq` property exists and has a value; `false` otherwise
   */
  public hasReferenceSeq(): boolean {
    return isDefined<MolecularSequenceReferenceSeqComponent>(this.referenceSeq) && !this.referenceSeq.isEmpty();
  }

  /**
   * @returns the `variant` property value as a MolecularSequenceVariantComponent array
   */
  public getVariant(): MolecularSequenceVariantComponent[] {
    return this.variant ?? ([] as MolecularSequenceVariantComponent[]);
  }

  /**
   * Assigns the provided MolecularSequenceVariantComponent array value to the `variant` property.
   *
   * @param value - the `variant` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setVariant(value: MolecularSequenceVariantComponent[] | undefined): this {
    if (isDefinedList<MolecularSequenceVariantComponent>(value)) {
      const optErrMsg = `Invalid MolecularSequence.variant; Provided value array has an element that is not an instance of MolecularSequenceVariantComponent.`;
      assertFhirTypeList<MolecularSequenceVariantComponent>(value, MolecularSequenceVariantComponent, optErrMsg);
      this.variant = value;
    } else {
      this.variant = undefined;
    }
    return this;
  }

  /**
   * Add the provided MolecularSequenceVariantComponent value to the `variant` array property.
   *
   * @param value - the `variant` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addVariant(value: MolecularSequenceVariantComponent | undefined): this {
    if (isDefined<MolecularSequenceVariantComponent>(value)) {
      const optErrMsg = `Invalid MolecularSequence.variant; Provided element is not an instance of MolecularSequenceVariantComponent.`;
      assertFhirType<MolecularSequenceVariantComponent>(value, MolecularSequenceVariantComponent, optErrMsg);
      this.initVariant();
      this.variant?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `variant` property exists and has a value; `false` otherwise
   */
  public hasVariant(): boolean {
    return isDefinedList<MolecularSequenceVariantComponent>(this.variant) && this.variant.some((item: MolecularSequenceVariantComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `variant` property
   */
  private initVariant(): void {
    if(!this.hasVariant()) {
      this.variant = [] as MolecularSequenceVariantComponent[];
    }
  }

  /**
   * @returns the `observedSeq` property value as a StringType object if defined; else an empty StringType object
   */
  public getObservedSeqElement(): StringType {
    return this.observedSeq ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `observedSeq` property.
   *
   * @param element - the `observedSeq` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setObservedSeqElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid MolecularSequence.observedSeq; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.observedSeq = element;
    } else {
      this.observedSeq = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `observedSeq` property exists and has a value; `false` otherwise
   */
  public hasObservedSeqElement(): boolean {
    return isDefined<StringType>(this.observedSeq) && !this.observedSeq.isEmpty();
  }

  /**
   * @returns the `observedSeq` property value as a fhirString if defined; else undefined
   */
  public getObservedSeq(): fhirString | undefined {
    return this.observedSeq?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `observedSeq` property.
   *
   * @param value - the `observedSeq` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setObservedSeq(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid MolecularSequence.observedSeq (${String(value)})`;
      this.observedSeq = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.observedSeq = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `observedSeq` property exists and has a value; `false` otherwise
   */
  public hasObservedSeq(): boolean {
    return this.hasObservedSeqElement();
  }

  /**
   * @returns the `quality` property value as a MolecularSequenceQualityComponent array
   */
  public getQuality(): MolecularSequenceQualityComponent[] {
    return this.quality ?? ([] as MolecularSequenceQualityComponent[]);
  }

  /**
   * Assigns the provided MolecularSequenceQualityComponent array value to the `quality` property.
   *
   * @param value - the `quality` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setQuality(value: MolecularSequenceQualityComponent[] | undefined): this {
    if (isDefinedList<MolecularSequenceQualityComponent>(value)) {
      const optErrMsg = `Invalid MolecularSequence.quality; Provided value array has an element that is not an instance of MolecularSequenceQualityComponent.`;
      assertFhirTypeList<MolecularSequenceQualityComponent>(value, MolecularSequenceQualityComponent, optErrMsg);
      this.quality = value;
    } else {
      this.quality = undefined;
    }
    return this;
  }

  /**
   * Add the provided MolecularSequenceQualityComponent value to the `quality` array property.
   *
   * @param value - the `quality` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addQuality(value: MolecularSequenceQualityComponent | undefined): this {
    if (isDefined<MolecularSequenceQualityComponent>(value)) {
      const optErrMsg = `Invalid MolecularSequence.quality; Provided element is not an instance of MolecularSequenceQualityComponent.`;
      assertFhirType<MolecularSequenceQualityComponent>(value, MolecularSequenceQualityComponent, optErrMsg);
      this.initQuality();
      this.quality?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `quality` property exists and has a value; `false` otherwise
   */
  public hasQuality(): boolean {
    return isDefinedList<MolecularSequenceQualityComponent>(this.quality) && this.quality.some((item: MolecularSequenceQualityComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `quality` property
   */
  private initQuality(): void {
    if(!this.hasQuality()) {
      this.quality = [] as MolecularSequenceQualityComponent[];
    }
  }

  /**
   * @returns the `readCoverage` property value as a IntegerType object if defined; else an empty IntegerType object
   */
  public getReadCoverageElement(): IntegerType {
    return this.readCoverage ?? new IntegerType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `readCoverage` property.
   *
   * @param element - the `readCoverage` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setReadCoverageElement(element: IntegerType | undefined): this {
    if (isDefined<IntegerType>(element)) {
      const optErrMsg = `Invalid MolecularSequence.readCoverage; Provided element is not an instance of IntegerType.`;
      assertFhirType<IntegerType>(element, IntegerType, optErrMsg);
      this.readCoverage = element;
    } else {
      this.readCoverage = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `readCoverage` property exists and has a value; `false` otherwise
   */
  public hasReadCoverageElement(): boolean {
    return isDefined<IntegerType>(this.readCoverage) && !this.readCoverage.isEmpty();
  }

  /**
   * @returns the `readCoverage` property value as a fhirInteger if defined; else undefined
   */
  public getReadCoverage(): fhirInteger | undefined {
    return this.readCoverage?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `readCoverage` property.
   *
   * @param value - the `readCoverage` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setReadCoverage(value: fhirInteger | undefined): this {
    if (isDefined<fhirInteger>(value)) {
      const optErrMsg = `Invalid MolecularSequence.readCoverage (${String(value)})`;
      this.readCoverage = new IntegerType(parseFhirPrimitiveData(value, fhirIntegerSchema, optErrMsg));
    } else {
      this.readCoverage = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `readCoverage` property exists and has a value; `false` otherwise
   */
  public hasReadCoverage(): boolean {
    return this.hasReadCoverageElement();
  }

  /**
   * @returns the `repository` property value as a MolecularSequenceRepositoryComponent array
   */
  public getRepository(): MolecularSequenceRepositoryComponent[] {
    return this.repository ?? ([] as MolecularSequenceRepositoryComponent[]);
  }

  /**
   * Assigns the provided MolecularSequenceRepositoryComponent array value to the `repository` property.
   *
   * @param value - the `repository` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setRepository(value: MolecularSequenceRepositoryComponent[] | undefined): this {
    if (isDefinedList<MolecularSequenceRepositoryComponent>(value)) {
      const optErrMsg = `Invalid MolecularSequence.repository; Provided value array has an element that is not an instance of MolecularSequenceRepositoryComponent.`;
      assertFhirTypeList<MolecularSequenceRepositoryComponent>(value, MolecularSequenceRepositoryComponent, optErrMsg);
      this.repository = value;
    } else {
      this.repository = undefined;
    }
    return this;
  }

  /**
   * Add the provided MolecularSequenceRepositoryComponent value to the `repository` array property.
   *
   * @param value - the `repository` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addRepository(value: MolecularSequenceRepositoryComponent | undefined): this {
    if (isDefined<MolecularSequenceRepositoryComponent>(value)) {
      const optErrMsg = `Invalid MolecularSequence.repository; Provided element is not an instance of MolecularSequenceRepositoryComponent.`;
      assertFhirType<MolecularSequenceRepositoryComponent>(value, MolecularSequenceRepositoryComponent, optErrMsg);
      this.initRepository();
      this.repository?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `repository` property exists and has a value; `false` otherwise
   */
  public hasRepository(): boolean {
    return isDefinedList<MolecularSequenceRepositoryComponent>(this.repository) && this.repository.some((item: MolecularSequenceRepositoryComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `repository` property
   */
  private initRepository(): void {
    if(!this.hasRepository()) {
      this.repository = [] as MolecularSequenceRepositoryComponent[];
    }
  }

  /**
   * @returns the `pointer` property value as a Reference array
   */
  public getPointer(): Reference[] {
    return this.pointer ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `pointer` property.
   *
   * @decorator `@ReferenceTargets('MolecularSequence.pointer', ['MolecularSequence',])`
   *
   * @param value - the `pointer` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MolecularSequence.pointer', [
    'MolecularSequence',
  ])
  public setPointer(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.pointer = value;
    } else {
      this.pointer = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `pointer` array property.
   *
   * @decorator `@ReferenceTargets('MolecularSequence.pointer', ['MolecularSequence',])`
   *
   * @param value - the `pointer` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MolecularSequence.pointer', [
    'MolecularSequence',
  ])
  public addPointer(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initPointer();
      this.pointer?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `pointer` property exists and has a value; `false` otherwise
   */
  public hasPointer(): boolean {
    return isDefinedList<Reference>(this.pointer) && this.pointer.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `pointer` property
   */
  private initPointer(): void {
    if (!this.hasPointer()) {
      this.pointer = [] as Reference[];
    }
  }

  /**
   * @returns the `structureVariant` property value as a MolecularSequenceStructureVariantComponent array
   */
  public getStructureVariant(): MolecularSequenceStructureVariantComponent[] {
    return this.structureVariant ?? ([] as MolecularSequenceStructureVariantComponent[]);
  }

  /**
   * Assigns the provided MolecularSequenceStructureVariantComponent array value to the `structureVariant` property.
   *
   * @param value - the `structureVariant` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setStructureVariant(value: MolecularSequenceStructureVariantComponent[] | undefined): this {
    if (isDefinedList<MolecularSequenceStructureVariantComponent>(value)) {
      const optErrMsg = `Invalid MolecularSequence.structureVariant; Provided value array has an element that is not an instance of MolecularSequenceStructureVariantComponent.`;
      assertFhirTypeList<MolecularSequenceStructureVariantComponent>(value, MolecularSequenceStructureVariantComponent, optErrMsg);
      this.structureVariant = value;
    } else {
      this.structureVariant = undefined;
    }
    return this;
  }

  /**
   * Add the provided MolecularSequenceStructureVariantComponent value to the `structureVariant` array property.
   *
   * @param value - the `structureVariant` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addStructureVariant(value: MolecularSequenceStructureVariantComponent | undefined): this {
    if (isDefined<MolecularSequenceStructureVariantComponent>(value)) {
      const optErrMsg = `Invalid MolecularSequence.structureVariant; Provided element is not an instance of MolecularSequenceStructureVariantComponent.`;
      assertFhirType<MolecularSequenceStructureVariantComponent>(value, MolecularSequenceStructureVariantComponent, optErrMsg);
      this.initStructureVariant();
      this.structureVariant?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `structureVariant` property exists and has a value; `false` otherwise
   */
  public hasStructureVariant(): boolean {
    return isDefinedList<MolecularSequenceStructureVariantComponent>(this.structureVariant) && this.structureVariant.some((item: MolecularSequenceStructureVariantComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `structureVariant` property
   */
  private initStructureVariant(): void {
    if(!this.hasStructureVariant()) {
      this.structureVariant = [] as MolecularSequenceStructureVariantComponent[];
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
      this.coordinateSystem,
      this.patient,
      this.specimen,
      this.device,
      this.performer,
      this.quantity,
      this.referenceSeq,
      this.variant,
      this.observedSeq,
      this.quality,
      this.readCoverage,
      this.repository,
      this.pointer,
      this.structureVariant,
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
    dest.coordinateSystem = this.coordinateSystem ? this.coordinateSystem.copy() : null;
    dest.patient = this.patient?.copy();
    dest.specimen = this.specimen?.copy();
    dest.device = this.device?.copy();
    dest.performer = this.performer?.copy();
    dest.quantity = this.quantity?.copy();
    dest.referenceSeq = this.referenceSeq?.copy();
    const variantList = copyListValues<MolecularSequenceVariantComponent>(this.variant);
    dest.variant = variantList.length === 0 ? undefined : variantList;
    dest.observedSeq = this.observedSeq?.copy();
    const qualityList = copyListValues<MolecularSequenceQualityComponent>(this.quality);
    dest.quality = qualityList.length === 0 ? undefined : qualityList;
    dest.readCoverage = this.readCoverage?.copy();
    const repositoryList = copyListValues<MolecularSequenceRepositoryComponent>(this.repository);
    dest.repository = repositoryList.length === 0 ? undefined : repositoryList;
    const pointerList = copyListValues<Reference>(this.pointer);
    dest.pointer = pointerList.length === 0 ? undefined : pointerList;
    const structureVariantList = copyListValues<MolecularSequenceStructureVariantComponent>(this.structureVariant);
    dest.structureVariant = structureVariantList.length === 0 ? undefined : structureVariantList;
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

    if (this.hasTypeElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getTypeElement()!, 'type', jsonObj);
    }

    if (this.hasCoordinateSystemElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirInteger>(this.getCoordinateSystemElement()!, 'coordinateSystem', jsonObj);
    } else {
      missingReqdProperties.push(`MolecularSequence.coordinateSystem`);
    }

    if (this.hasPatient()) {
      setFhirComplexJson(this.getPatient(), 'patient', jsonObj);
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

    if (this.hasQuantity()) {
      setFhirComplexJson(this.getQuantity(), 'quantity', jsonObj);
    }

    if (this.hasReferenceSeq()) {
      setFhirBackboneElementJson(this.getReferenceSeq(), 'referenceSeq', jsonObj);
    }

    if (this.hasVariant()) {
      setFhirBackboneElementListJson(this.getVariant(), 'variant', jsonObj);
    }

    if (this.hasObservedSeqElement()) {
      setFhirPrimitiveJson<fhirString>(this.getObservedSeqElement(), 'observedSeq', jsonObj);
    }

    if (this.hasQuality()) {
      setFhirBackboneElementListJson(this.getQuality(), 'quality', jsonObj);
    }

    if (this.hasReadCoverageElement()) {
      setFhirPrimitiveJson<fhirInteger>(this.getReadCoverageElement(), 'readCoverage', jsonObj);
    }

    if (this.hasRepository()) {
      setFhirBackboneElementListJson(this.getRepository(), 'repository', jsonObj);
    }

    if (this.hasPointer()) {
      setFhirComplexListJson(this.getPointer(), 'pointer', jsonObj);
    }

    if (this.hasStructureVariant()) {
      setFhirBackboneElementListJson(this.getStructureVariant(), 'structureVariant', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}

/**
 * MolecularSequenceReferenceSeqComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** A sequence used as reference
 * - **Definition:** A sequence that is used as a reference to describe variants that are present in a sequence analyzed.
 *
 * @category Data Models: Resource
 * @see [FHIR MolecularSequence](http://hl7.org/fhir/StructureDefinition/MolecularSequence)
 */
export class MolecularSequenceReferenceSeqComponent extends BackboneElement implements IBackboneElement {
  constructor() {
    super();

    this.orientationTypeEnum = new OrientationTypeEnum();
    this.strandTypeEnum = new StrandTypeEnum();
  }

  /**
   * Parse the provided `MolecularSequenceReferenceSeqComponent` JSON to instantiate the MolecularSequenceReferenceSeqComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `MolecularSequenceReferenceSeqComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to MolecularSequenceReferenceSeqComponent
   * @returns MolecularSequenceReferenceSeqComponent data model or undefined for `MolecularSequenceReferenceSeqComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): MolecularSequenceReferenceSeqComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'MolecularSequenceReferenceSeqComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new MolecularSequenceReferenceSeqComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'chromosome';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setChromosome(datatype);
    }

    fieldName = 'genomeBuild';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setGenomeBuildElement(datatype);
    }

    fieldName = 'orientation';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setOrientationElement(datatype);
    }

    fieldName = 'referenceSeqId';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setReferenceSeqId(datatype);
    }

    fieldName = 'referenceSeqPointer';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setReferenceSeqPointer(datatype);
    }

    fieldName = 'referenceSeqString';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setReferenceSeqStringElement(datatype);
    }

    fieldName = 'strand';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setStrandElement(datatype);
    }

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

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * MolecularSequence.referenceSeq.chromosome Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Chromosome containing genetic finding
   * - **Definition:** Structural unit composed of a nucleic acid molecule which controls its own replication through the interaction of specific proteins at one or more origins of replication ([SO:0000340](http://www.sequenceontology.org/browser/current_svn/term/SO:0000340)).
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private chromosome?: CodeableConcept | undefined;

  /**
   * MolecularSequence.referenceSeq.genomeBuild Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The Genome Build used for reference, following GRCh build versions e.g. \'GRCh 37\'
   * - **Definition:** The Genome Build used for reference, following GRCh build versions e.g. \'GRCh 37\'.  Version number must be included if a versioned release of a primary build was used.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private genomeBuild?: StringType | undefined;

  /**
   * FHIR CodeSystem: OrientationType
   *
   * @see {@link OrientationTypeEnum }
   */
  private readonly orientationTypeEnum: OrientationTypeEnum;

  /**
   * MolecularSequence.referenceSeq.orientation Element
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
   * MolecularSequence.referenceSeq.referenceSeqId Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Reference identifier
   * - **Definition:** Reference identifier of reference sequence submitted to NCBI. It must match the type in the MolecularSequence.type field. For example, the prefix, "NG_" identifies reference sequence for genes, "NM_" for messenger RNA transcripts, and "NP_" for amino acid sequences.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private referenceSeqId?: CodeableConcept | undefined;

  /**
   * MolecularSequence.referenceSeq.referenceSeqPointer Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A pointer to another MolecularSequence entity as reference sequence
   * - **Definition:** A pointer to another MolecularSequence entity as reference sequence.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/MolecularSequence',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private referenceSeqPointer?: Reference | undefined;

  /**
   * MolecularSequence.referenceSeq.referenceSeqString Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A string to represent reference sequence
   * - **Definition:** A string like "ACGT".
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private referenceSeqString?: StringType | undefined;

  /**
   * FHIR CodeSystem: StrandType
   *
   * @see {@link StrandTypeEnum }
   */
  private readonly strandTypeEnum: StrandTypeEnum;

  /**
   * MolecularSequence.referenceSeq.strand Element
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

  /**
   * MolecularSequence.referenceSeq.windowStart Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Start position of the window on the  reference sequence
   * - **Definition:** Start position of the window on the reference sequence. If the coordinate system is either 0-based or 1-based, then start position is inclusive.
   * - **FHIR Type:** `integer`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private windowStart?: IntegerType | undefined;

  /**
   * MolecularSequence.referenceSeq.windowEnd Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** End position of the window on the reference sequence
   * - **Definition:** End position of the window on the reference sequence. If the coordinate system is 0-based then end is exclusive and does not include the last position. If the coordinate system is 1-base, then end is inclusive and includes the last position.
   * - **FHIR Type:** `integer`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private windowEnd?: IntegerType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

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
      const optErrMsg = `Invalid MolecularSequence.referenceSeq.chromosome; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `genomeBuild` property value as a StringType object if defined; else an empty StringType object
   */
  public getGenomeBuildElement(): StringType {
    return this.genomeBuild ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `genomeBuild` property.
   *
   * @param element - the `genomeBuild` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setGenomeBuildElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid MolecularSequence.referenceSeq.genomeBuild; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.genomeBuild = element;
    } else {
      this.genomeBuild = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `genomeBuild` property exists and has a value; `false` otherwise
   */
  public hasGenomeBuildElement(): boolean {
    return isDefined<StringType>(this.genomeBuild) && !this.genomeBuild.isEmpty();
  }

  /**
   * @returns the `genomeBuild` property value as a fhirString if defined; else undefined
   */
  public getGenomeBuild(): fhirString | undefined {
    return this.genomeBuild?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `genomeBuild` property.
   *
   * @param value - the `genomeBuild` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setGenomeBuild(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid MolecularSequence.referenceSeq.genomeBuild (${String(value)})`;
      this.genomeBuild = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.genomeBuild = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `genomeBuild` property exists and has a value; `false` otherwise
   */
  public hasGenomeBuild(): boolean {
    return this.hasGenomeBuildElement();
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
      const errMsgPrefix = 'Invalid MolecularSequence.referenceSeq.orientation';
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
      const optErrMsg = `Invalid MolecularSequence.referenceSeq.orientation; Provided element is not an instance of CodeType.`;
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
      const optErrMsg = `Invalid MolecularSequence.referenceSeq.orientation; Provided value is not an instance of fhirCode.`;
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
   * @returns the `referenceSeqId` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getReferenceSeqId(): CodeableConcept {
    return this.referenceSeqId ?? new CodeableConcept();
  }

  /**
   * Assigns the provided ReferenceSeqId object value to the `referenceSeqId` property.
   *
   * @param value - the `referenceSeqId` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setReferenceSeqId(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid MolecularSequence.referenceSeq.referenceSeqId; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.referenceSeqId = value;
    } else {
      this.referenceSeqId = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `referenceSeqId` property exists and has a value; `false` otherwise
   */
  public hasReferenceSeqId(): boolean {
    return isDefined<CodeableConcept>(this.referenceSeqId) && !this.referenceSeqId.isEmpty();
  }

  /**
   * @returns the `referenceSeqPointer` property value as a Reference object; else an empty Reference object
   */
  public getReferenceSeqPointer(): Reference {
    return this.referenceSeqPointer ?? new Reference();
  }

  /**
   * Assigns the provided ReferenceSeqPointer object value to the `referenceSeqPointer` property.
   *
   * @decorator `@ReferenceTargets('MolecularSequence.referenceSeq.referenceSeqPointer', ['MolecularSequence',])`
   *
   * @param value - the `referenceSeqPointer` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MolecularSequence.referenceSeq.referenceSeqPointer', [
    'MolecularSequence',
  ])
  public setReferenceSeqPointer(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.referenceSeqPointer = value;
    } else {
      this.referenceSeqPointer = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `referenceSeqPointer` property exists and has a value; `false` otherwise
   */
  public hasReferenceSeqPointer(): boolean {
    return isDefined<Reference>(this.referenceSeqPointer) && !this.referenceSeqPointer.isEmpty();
  }

  /**
   * @returns the `referenceSeqString` property value as a StringType object if defined; else an empty StringType object
   */
  public getReferenceSeqStringElement(): StringType {
    return this.referenceSeqString ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `referenceSeqString` property.
   *
   * @param element - the `referenceSeqString` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setReferenceSeqStringElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid MolecularSequence.referenceSeq.referenceSeqString; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.referenceSeqString = element;
    } else {
      this.referenceSeqString = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `referenceSeqString` property exists and has a value; `false` otherwise
   */
  public hasReferenceSeqStringElement(): boolean {
    return isDefined<StringType>(this.referenceSeqString) && !this.referenceSeqString.isEmpty();
  }

  /**
   * @returns the `referenceSeqString` property value as a fhirString if defined; else undefined
   */
  public getReferenceSeqString(): fhirString | undefined {
    return this.referenceSeqString?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `referenceSeqString` property.
   *
   * @param value - the `referenceSeqString` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setReferenceSeqString(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid MolecularSequence.referenceSeq.referenceSeqString (${String(value)})`;
      this.referenceSeqString = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.referenceSeqString = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `referenceSeqString` property exists and has a value; `false` otherwise
   */
  public hasReferenceSeqString(): boolean {
    return this.hasReferenceSeqStringElement();
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
      const errMsgPrefix = 'Invalid MolecularSequence.referenceSeq.strand';
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
      const optErrMsg = `Invalid MolecularSequence.referenceSeq.strand; Provided element is not an instance of CodeType.`;
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
      const optErrMsg = `Invalid MolecularSequence.referenceSeq.strand; Provided value is not an instance of fhirCode.`;
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
      const optErrMsg = `Invalid MolecularSequence.referenceSeq.windowStart; Provided element is not an instance of IntegerType.`;
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
      const optErrMsg = `Invalid MolecularSequence.referenceSeq.windowStart (${String(value)})`;
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
      const optErrMsg = `Invalid MolecularSequence.referenceSeq.windowEnd; Provided element is not an instance of IntegerType.`;
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
      const optErrMsg = `Invalid MolecularSequence.referenceSeq.windowEnd (${String(value)})`;
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

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'MolecularSequence.referenceSeq';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.chromosome,
      this.genomeBuild,
      this.orientation,
      this.referenceSeqId,
      this.referenceSeqPointer,
      this.referenceSeqString,
      this.strand,
      this.windowStart,
      this.windowEnd,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): MolecularSequenceReferenceSeqComponent {
    const dest = new MolecularSequenceReferenceSeqComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: MolecularSequenceReferenceSeqComponent): void {
    super.copyValues(dest);
    dest.chromosome = this.chromosome?.copy();
    dest.genomeBuild = this.genomeBuild?.copy();
    dest.orientation = this.orientation?.copy();
    dest.referenceSeqId = this.referenceSeqId?.copy();
    dest.referenceSeqPointer = this.referenceSeqPointer?.copy();
    dest.referenceSeqString = this.referenceSeqString?.copy();
    dest.strand = this.strand?.copy();
    dest.windowStart = this.windowStart?.copy();
    dest.windowEnd = this.windowEnd?.copy();
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

    if (this.hasChromosome()) {
      setFhirComplexJson(this.getChromosome(), 'chromosome', jsonObj);
    }

    if (this.hasGenomeBuildElement()) {
      setFhirPrimitiveJson<fhirString>(this.getGenomeBuildElement(), 'genomeBuild', jsonObj);
    }

    if (this.hasOrientationElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getOrientationElement()!, 'orientation', jsonObj);
    }

    if (this.hasReferenceSeqId()) {
      setFhirComplexJson(this.getReferenceSeqId(), 'referenceSeqId', jsonObj);
    }

    if (this.hasReferenceSeqPointer()) {
      setFhirComplexJson(this.getReferenceSeqPointer(), 'referenceSeqPointer', jsonObj);
    }

    if (this.hasReferenceSeqStringElement()) {
      setFhirPrimitiveJson<fhirString>(this.getReferenceSeqStringElement(), 'referenceSeqString', jsonObj);
    }

    if (this.hasStrandElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getStrandElement()!, 'strand', jsonObj);
    }

    if (this.hasWindowStartElement()) {
      setFhirPrimitiveJson<fhirInteger>(this.getWindowStartElement(), 'windowStart', jsonObj);
    }

    if (this.hasWindowEndElement()) {
      setFhirPrimitiveJson<fhirInteger>(this.getWindowEndElement(), 'windowEnd', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * MolecularSequenceVariantComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Variant in sequence
 * - **Definition:** The definition of variant here originates from Sequence ontology ([variant_of](http://www.sequenceontology.org/browser/current_svn/term/variant_of)). This element can represent amino acid or nucleic sequence change(including insertion,deletion,SNP,etc.)  It can represent some complex mutation or segment variation with the assist of CIGAR string.
 *
 * @category Data Models: Resource
 * @see [FHIR MolecularSequence](http://hl7.org/fhir/StructureDefinition/MolecularSequence)
 */
export class MolecularSequenceVariantComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `MolecularSequenceVariantComponent` JSON to instantiate the MolecularSequenceVariantComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `MolecularSequenceVariantComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to MolecularSequenceVariantComponent
   * @returns MolecularSequenceVariantComponent data model or undefined for `MolecularSequenceVariantComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): MolecularSequenceVariantComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'MolecularSequenceVariantComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new MolecularSequenceVariantComponent();

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

    fieldName = 'observedAllele';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setObservedAlleleElement(datatype);
    }

    fieldName = 'referenceAllele';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setReferenceAlleleElement(datatype);
    }

    fieldName = 'cigar';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setCigarElement(datatype);
    }

    fieldName = 'variantPointer';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setVariantPointer(datatype);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * MolecularSequence.variant.start Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Start position of the variant on the  reference sequence
   * - **Definition:** Start position of the variant on the  reference sequence. If the coordinate system is either 0-based or 1-based, then start position is inclusive.
   * - **FHIR Type:** `integer`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private start?: IntegerType | undefined;

  /**
   * MolecularSequence.variant.end Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** End position of the variant on the reference sequence
   * - **Definition:** End position of the variant on the reference sequence. If the coordinate system is 0-based then end is exclusive and does not include the last position. If the coordinate system is 1-base, then end is inclusive and includes the last position.
   * - **FHIR Type:** `integer`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private end?: IntegerType | undefined;

  /**
   * MolecularSequence.variant.observedAllele Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Allele that was observed
   * - **Definition:** An allele is one of a set of coexisting sequence variants of a gene ([SO:0001023](http://www.sequenceontology.org/browser/current_svn/term/SO:0001023)).  Nucleotide(s)/amino acids from start position of sequence to stop position of sequence on the positive (+) strand of the observed  sequence. When the sequence  type is DNA, it should be the sequence on the positive (+) strand. This will lay in the range between variant.start and variant.end.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private observedAllele?: StringType | undefined;

  /**
   * MolecularSequence.variant.referenceAllele Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Allele in the reference sequence
   * - **Definition:** An allele is one of a set of coexisting sequence variants of a gene ([SO:0001023](http://www.sequenceontology.org/browser/current_svn/term/SO:0001023)). Nucleotide(s)/amino acids from start position of sequence to stop position of sequence on the positive (+) strand of the reference sequence. When the sequence  type is DNA, it should be the sequence on the positive (+) strand. This will lay in the range between variant.start and variant.end.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private referenceAllele?: StringType | undefined;

  /**
   * MolecularSequence.variant.cigar Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Extended CIGAR string for aligning the sequence with reference bases
   * - **Definition:** Extended CIGAR string for aligning the sequence with reference bases. See detailed documentation [here](http://support.illumina.com/help/SequencingAnalysisWorkflow/Content/Vault/Informatics/Sequencing_Analysis/CASAVA/swSEQ_mCA_ExtendedCIGARFormat.htm).
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private cigar?: StringType | undefined;

  /**
   * MolecularSequence.variant.variantPointer Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Pointer to observed variant information
   * - **Definition:** A pointer to an Observation containing variant information.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Observation',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private variantPointer?: Reference | undefined;

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
      const optErrMsg = `Invalid MolecularSequence.variant.start; Provided element is not an instance of IntegerType.`;
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
      const optErrMsg = `Invalid MolecularSequence.variant.start (${String(value)})`;
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
      const optErrMsg = `Invalid MolecularSequence.variant.end; Provided element is not an instance of IntegerType.`;
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
      const optErrMsg = `Invalid MolecularSequence.variant.end (${String(value)})`;
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
   * @returns the `observedAllele` property value as a StringType object if defined; else an empty StringType object
   */
  public getObservedAlleleElement(): StringType {
    return this.observedAllele ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `observedAllele` property.
   *
   * @param element - the `observedAllele` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setObservedAlleleElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid MolecularSequence.variant.observedAllele; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.observedAllele = element;
    } else {
      this.observedAllele = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `observedAllele` property exists and has a value; `false` otherwise
   */
  public hasObservedAlleleElement(): boolean {
    return isDefined<StringType>(this.observedAllele) && !this.observedAllele.isEmpty();
  }

  /**
   * @returns the `observedAllele` property value as a fhirString if defined; else undefined
   */
  public getObservedAllele(): fhirString | undefined {
    return this.observedAllele?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `observedAllele` property.
   *
   * @param value - the `observedAllele` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setObservedAllele(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid MolecularSequence.variant.observedAllele (${String(value)})`;
      this.observedAllele = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.observedAllele = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `observedAllele` property exists and has a value; `false` otherwise
   */
  public hasObservedAllele(): boolean {
    return this.hasObservedAlleleElement();
  }

  /**
   * @returns the `referenceAllele` property value as a StringType object if defined; else an empty StringType object
   */
  public getReferenceAlleleElement(): StringType {
    return this.referenceAllele ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `referenceAllele` property.
   *
   * @param element - the `referenceAllele` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setReferenceAlleleElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid MolecularSequence.variant.referenceAllele; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.referenceAllele = element;
    } else {
      this.referenceAllele = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `referenceAllele` property exists and has a value; `false` otherwise
   */
  public hasReferenceAlleleElement(): boolean {
    return isDefined<StringType>(this.referenceAllele) && !this.referenceAllele.isEmpty();
  }

  /**
   * @returns the `referenceAllele` property value as a fhirString if defined; else undefined
   */
  public getReferenceAllele(): fhirString | undefined {
    return this.referenceAllele?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `referenceAllele` property.
   *
   * @param value - the `referenceAllele` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setReferenceAllele(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid MolecularSequence.variant.referenceAllele (${String(value)})`;
      this.referenceAllele = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.referenceAllele = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `referenceAllele` property exists and has a value; `false` otherwise
   */
  public hasReferenceAllele(): boolean {
    return this.hasReferenceAlleleElement();
  }

  /**
   * @returns the `cigar` property value as a StringType object if defined; else an empty StringType object
   */
  public getCigarElement(): StringType {
    return this.cigar ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `cigar` property.
   *
   * @param element - the `cigar` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCigarElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid MolecularSequence.variant.cigar; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.cigar = element;
    } else {
      this.cigar = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `cigar` property exists and has a value; `false` otherwise
   */
  public hasCigarElement(): boolean {
    return isDefined<StringType>(this.cigar) && !this.cigar.isEmpty();
  }

  /**
   * @returns the `cigar` property value as a fhirString if defined; else undefined
   */
  public getCigar(): fhirString | undefined {
    return this.cigar?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `cigar` property.
   *
   * @param value - the `cigar` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCigar(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid MolecularSequence.variant.cigar (${String(value)})`;
      this.cigar = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.cigar = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `cigar` property exists and has a value; `false` otherwise
   */
  public hasCigar(): boolean {
    return this.hasCigarElement();
  }

  /**
   * @returns the `variantPointer` property value as a Reference object; else an empty Reference object
   */
  public getVariantPointer(): Reference {
    return this.variantPointer ?? new Reference();
  }

  /**
   * Assigns the provided VariantPointer object value to the `variantPointer` property.
   *
   * @decorator `@ReferenceTargets('MolecularSequence.variant.variantPointer', ['Observation',])`
   *
   * @param value - the `variantPointer` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MolecularSequence.variant.variantPointer', [
    'Observation',
  ])
  public setVariantPointer(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.variantPointer = value;
    } else {
      this.variantPointer = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `variantPointer` property exists and has a value; `false` otherwise
   */
  public hasVariantPointer(): boolean {
    return isDefined<Reference>(this.variantPointer) && !this.variantPointer.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'MolecularSequence.variant';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.start,
      this.end,
      this.observedAllele,
      this.referenceAllele,
      this.cigar,
      this.variantPointer,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): MolecularSequenceVariantComponent {
    const dest = new MolecularSequenceVariantComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: MolecularSequenceVariantComponent): void {
    super.copyValues(dest);
    dest.start = this.start?.copy();
    dest.end = this.end?.copy();
    dest.observedAllele = this.observedAllele?.copy();
    dest.referenceAllele = this.referenceAllele?.copy();
    dest.cigar = this.cigar?.copy();
    dest.variantPointer = this.variantPointer?.copy();
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

    if (this.hasObservedAlleleElement()) {
      setFhirPrimitiveJson<fhirString>(this.getObservedAlleleElement(), 'observedAllele', jsonObj);
    }

    if (this.hasReferenceAlleleElement()) {
      setFhirPrimitiveJson<fhirString>(this.getReferenceAlleleElement(), 'referenceAllele', jsonObj);
    }

    if (this.hasCigarElement()) {
      setFhirPrimitiveJson<fhirString>(this.getCigarElement(), 'cigar', jsonObj);
    }

    if (this.hasVariantPointer()) {
      setFhirComplexJson(this.getVariantPointer(), 'variantPointer', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * MolecularSequenceQualityComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** An set of value as quality of sequence
 * - **Definition:** An experimental feature attribute that defines the quality of the feature in a quantitative way, such as a phred quality score ([SO:0001686](http://www.sequenceontology.org/browser/current_svn/term/SO:0001686)).
 *
 * @category Data Models: Resource
 * @see [FHIR MolecularSequence](http://hl7.org/fhir/StructureDefinition/MolecularSequence)
 */
export class MolecularSequenceQualityComponent extends BackboneElement implements IBackboneElement {
  constructor(type_: EnumCodeType | CodeType | fhirCode | null = null) {
    super();

    this.qualityTypeEnum = new QualityTypeEnum();

    this.type_ = constructorCodeValueAsEnumCodeType<QualityTypeEnum>(
      type_,
      QualityTypeEnum,
      this.qualityTypeEnum,
      'MolecularSequence.quality.type',
    );
  }

  /**
   * Parse the provided `MolecularSequenceQualityComponent` JSON to instantiate the MolecularSequenceQualityComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `MolecularSequenceQualityComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to MolecularSequenceQualityComponent
   * @returns MolecularSequenceQualityComponent data model or undefined for `MolecularSequenceQualityComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): MolecularSequenceQualityComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'MolecularSequenceQualityComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new MolecularSequenceQualityComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const missingReqdProperties: string[] = [];

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setTypeElement(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'standardSequence';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setStandardSequence(datatype);
    }

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

    fieldName = 'score';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Quantity | undefined = Quantity.parse(classJsonObj[fieldName]!, sourceField);
      instance.setScore(datatype);
    }

    fieldName = 'method';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setMethod(datatype);
    }

    fieldName = 'truthTP';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DecimalType | undefined = fhirParser.parseDecimalType(dtJson, dtSiblingJson);
      instance.setTruthTPElement(datatype);
    }

    fieldName = 'queryTP';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DecimalType | undefined = fhirParser.parseDecimalType(dtJson, dtSiblingJson);
      instance.setQueryTPElement(datatype);
    }

    fieldName = 'truthFN';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DecimalType | undefined = fhirParser.parseDecimalType(dtJson, dtSiblingJson);
      instance.setTruthFNElement(datatype);
    }

    fieldName = 'queryFP';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DecimalType | undefined = fhirParser.parseDecimalType(dtJson, dtSiblingJson);
      instance.setQueryFPElement(datatype);
    }

    fieldName = 'gtFP';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DecimalType | undefined = fhirParser.parseDecimalType(dtJson, dtSiblingJson);
      instance.setGtFPElement(datatype);
    }

    fieldName = 'precision';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DecimalType | undefined = fhirParser.parseDecimalType(dtJson, dtSiblingJson);
      instance.setPrecisionElement(datatype);
    }

    fieldName = 'recall';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DecimalType | undefined = fhirParser.parseDecimalType(dtJson, dtSiblingJson);
      instance.setRecallElement(datatype);
    }

    fieldName = 'fScore';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DecimalType | undefined = fhirParser.parseDecimalType(dtJson, dtSiblingJson);
      instance.setFScoreElement(datatype);
    }

    fieldName = 'roc';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: MolecularSequenceQualityRocComponent | undefined = MolecularSequenceQualityRocComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setRoc(component);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_REQD_IN_JSON} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * FHIR CodeSystem: QualityType
   *
   * @see {@link QualityTypeEnum }
   */
  private readonly qualityTypeEnum: QualityTypeEnum;

  /**
   * MolecularSequence.quality.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** indel | snp | unknown
   * - **Definition:** INDEL / SNP / Undefined variant.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link QualityTypeEnum }
   */
  private type_: EnumCodeType | null;

  /**
   * MolecularSequence.quality.standardSequence Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Standard sequence for comparison
   * - **Definition:** Gold standard sequence used for comparing against.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private standardSequence?: CodeableConcept | undefined;

  /**
   * MolecularSequence.quality.start Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Start position of the sequence
   * - **Definition:** Start position of the sequence. If the coordinate system is either 0-based or 1-based, then start position is inclusive.
   * - **FHIR Type:** `integer`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private start?: IntegerType | undefined;

  /**
   * MolecularSequence.quality.end Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** End position of the sequence
   * - **Definition:** End position of the sequence. If the coordinate system is 0-based then end is exclusive and does not include the last position. If the coordinate system is 1-base, then end is inclusive and includes the last position.
   * - **FHIR Type:** `integer`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private end?: IntegerType | undefined;

  /**
   * MolecularSequence.quality.score Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Quality score for the comparison
   * - **Definition:** The score of an experimentally derived feature such as a p-value ([SO:0001685](http://www.sequenceontology.org/browser/current_svn/term/SO:0001685)).
   * - **FHIR Type:** `Quantity`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private score?: Quantity | undefined;

  /**
   * MolecularSequence.quality.method Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Method to get quality
   * - **Definition:** Which method is used to get sequence quality.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private method?: CodeableConcept | undefined;

  /**
   * MolecularSequence.quality.truthTP Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** True positives from the perspective of the truth data
   * - **Definition:** True positives, from the perspective of the truth data, i.e. the number of sites in the Truth Call Set for which there are paths through the Query Call Set that are consistent with all of the alleles at this site, and for which there is an accurate genotype call for the event.
   * - **FHIR Type:** `decimal`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private truthTP?: DecimalType | undefined;

  /**
   * MolecularSequence.quality.queryTP Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** True positives from the perspective of the query data
   * - **Definition:** True positives, from the perspective of the query data, i.e. the number of sites in the Query Call Set for which there are paths through the Truth Call Set that are consistent with all of the alleles at this site, and for which there is an accurate genotype call for the event.
   * - **FHIR Type:** `decimal`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private queryTP?: DecimalType | undefined;

  /**
   * MolecularSequence.quality.truthFN Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** False negatives
   * - **Definition:** False negatives, i.e. the number of sites in the Truth Call Set for which there is no path through the Query Call Set that is consistent with all of the alleles at this site, or sites for which there is an inaccurate genotype call for the event. Sites with correct variant but incorrect genotype are counted here.
   * - **FHIR Type:** `decimal`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private truthFN?: DecimalType | undefined;

  /**
   * MolecularSequence.quality.queryFP Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** False positives
   * - **Definition:** False positives, i.e. the number of sites in the Query Call Set for which there is no path through the Truth Call Set that is consistent with this site. Sites with correct variant but incorrect genotype are counted here.
   * - **FHIR Type:** `decimal`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private queryFP?: DecimalType | undefined;

  /**
   * MolecularSequence.quality.gtFP Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** False positives where the non-REF alleles in the Truth and Query Call Sets match
   * - **Definition:** The number of false positives where the non-REF alleles in the Truth and Query Call Sets match (i.e. cases where the truth is 1/1 and the query is 0/1 or similar).
   * - **FHIR Type:** `decimal`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private gtFP?: DecimalType | undefined;

  /**
   * MolecularSequence.quality.precision Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Precision of comparison
   * - **Definition:** QUERY.TP / (QUERY.TP + QUERY.FP).
   * - **FHIR Type:** `decimal`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private precision?: DecimalType | undefined;

  /**
   * MolecularSequence.quality.recall Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Recall of comparison
   * - **Definition:** TRUTH.TP / (TRUTH.TP + TRUTH.FN).
   * - **FHIR Type:** `decimal`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private recall?: DecimalType | undefined;

  /**
   * MolecularSequence.quality.fScore Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** F-score
   * - **Definition:** Harmonic mean of Recall and Precision, computed as: 2 * precision * recall / (precision + recall).
   * - **FHIR Type:** `decimal`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private fScore?: DecimalType | undefined;

  /**
   * MolecularSequence.quality.roc Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Receiver Operator Characteristic (ROC) Curve
   * - **Definition:** Receiver Operator Characteristic (ROC) Curve  to give sensitivity/specificity tradeoff.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private roc?: MolecularSequenceQualityRocComponent | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `type_` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link QualityTypeEnum }
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
   * @see CodeSystem Enumeration: {@link QualityTypeEnum }
   */
  public setTypeEnumType(enumType: EnumCodeType): this {
    assertIsDefined<EnumCodeType>(enumType, `MolecularSequence.quality.type is required`);
    const errMsgPrefix = `Invalid MolecularSequence.quality.type`;
    assertEnumCodeType<QualityTypeEnum>(enumType, QualityTypeEnum, errMsgPrefix);
    this.type_ = enumType;
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
   * @see CodeSystem Enumeration: {@link QualityTypeEnum }
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
   * @see CodeSystem Enumeration: {@link QualityTypeEnum }
   */
  public setTypeElement(element: CodeType): this {
    assertIsDefined<CodeType>(element, `MolecularSequence.quality.type is required`);
    const optErrMsg = `Invalid MolecularSequence.quality.type; Provided value is not an instance of CodeType.`;
    assertFhirType<CodeType>(element, CodeType, optErrMsg);
    this.type_ = new EnumCodeType(element, this.qualityTypeEnum);
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
   * @see CodeSystem Enumeration: {@link QualityTypeEnum }
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
   * @see CodeSystem Enumeration: {@link QualityTypeEnum }
   */
  public setType(value: fhirCode): this {
    assertIsDefined<fhirCode>(value, `MolecularSequence.quality.type is required`);
    const optErrMsg = `Invalid MolecularSequence.quality.type (${String(value)})`;
    this.type_ = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.qualityTypeEnum);
    return this;
  }

  /**
   * @returns `true` if the `type_` property exists and has a value; `false` otherwise
   */
  public hasType(): boolean {
    return this.hasTypeEnumType();
  }

  /**
   * @returns the `standardSequence` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getStandardSequence(): CodeableConcept {
    return this.standardSequence ?? new CodeableConcept();
  }

  /**
   * Assigns the provided StandardSequence object value to the `standardSequence` property.
   *
   * @param value - the `standardSequence` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setStandardSequence(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid MolecularSequence.quality.standardSequence; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.standardSequence = value;
    } else {
      this.standardSequence = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `standardSequence` property exists and has a value; `false` otherwise
   */
  public hasStandardSequence(): boolean {
    return isDefined<CodeableConcept>(this.standardSequence) && !this.standardSequence.isEmpty();
  }

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
      const optErrMsg = `Invalid MolecularSequence.quality.start; Provided element is not an instance of IntegerType.`;
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
      const optErrMsg = `Invalid MolecularSequence.quality.start (${String(value)})`;
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
      const optErrMsg = `Invalid MolecularSequence.quality.end; Provided element is not an instance of IntegerType.`;
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
      const optErrMsg = `Invalid MolecularSequence.quality.end (${String(value)})`;
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
   * @returns the `score` property value as a Quantity object if defined; else an empty Quantity object
   */
  public getScore(): Quantity {
    return this.score ?? new Quantity();
  }

  /**
   * Assigns the provided Score object value to the `score` property.
   *
   * @param value - the `score` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setScore(value: Quantity | undefined): this {
    if (isDefined<Quantity>(value)) {
      const optErrMsg = `Invalid MolecularSequence.quality.score; Provided element is not an instance of Quantity.`;
      assertFhirType<Quantity>(value, Quantity, optErrMsg);
      this.score = value;
    } else {
      this.score = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `score` property exists and has a value; `false` otherwise
   */
  public hasScore(): boolean {
    return isDefined<Quantity>(this.score) && !this.score.isEmpty();
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
      const optErrMsg = `Invalid MolecularSequence.quality.method; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `truthTP` property value as a DecimalType object if defined; else an empty DecimalType object
   */
  public getTruthTPElement(): DecimalType {
    return this.truthTP ?? new DecimalType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `truthTP` property.
   *
   * @param element - the `truthTP` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setTruthTPElement(element: DecimalType | undefined): this {
    if (isDefined<DecimalType>(element)) {
      const optErrMsg = `Invalid MolecularSequence.quality.truthTP; Provided element is not an instance of DecimalType.`;
      assertFhirType<DecimalType>(element, DecimalType, optErrMsg);
      this.truthTP = element;
    } else {
      this.truthTP = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `truthTP` property exists and has a value; `false` otherwise
   */
  public hasTruthTPElement(): boolean {
    return isDefined<DecimalType>(this.truthTP) && !this.truthTP.isEmpty();
  }

  /**
   * @returns the `truthTP` property value as a fhirDecimal if defined; else undefined
   */
  public getTruthTP(): fhirDecimal | undefined {
    return this.truthTP?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `truthTP` property.
   *
   * @param value - the `truthTP` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setTruthTP(value: fhirDecimal | undefined): this {
    if (isDefined<fhirDecimal>(value)) {
      const optErrMsg = `Invalid MolecularSequence.quality.truthTP (${String(value)})`;
      this.truthTP = new DecimalType(parseFhirPrimitiveData(value, fhirDecimalSchema, optErrMsg));
    } else {
      this.truthTP = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `truthTP` property exists and has a value; `false` otherwise
   */
  public hasTruthTP(): boolean {
    return this.hasTruthTPElement();
  }

  /**
   * @returns the `queryTP` property value as a DecimalType object if defined; else an empty DecimalType object
   */
  public getQueryTPElement(): DecimalType {
    return this.queryTP ?? new DecimalType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `queryTP` property.
   *
   * @param element - the `queryTP` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setQueryTPElement(element: DecimalType | undefined): this {
    if (isDefined<DecimalType>(element)) {
      const optErrMsg = `Invalid MolecularSequence.quality.queryTP; Provided element is not an instance of DecimalType.`;
      assertFhirType<DecimalType>(element, DecimalType, optErrMsg);
      this.queryTP = element;
    } else {
      this.queryTP = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `queryTP` property exists and has a value; `false` otherwise
   */
  public hasQueryTPElement(): boolean {
    return isDefined<DecimalType>(this.queryTP) && !this.queryTP.isEmpty();
  }

  /**
   * @returns the `queryTP` property value as a fhirDecimal if defined; else undefined
   */
  public getQueryTP(): fhirDecimal | undefined {
    return this.queryTP?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `queryTP` property.
   *
   * @param value - the `queryTP` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setQueryTP(value: fhirDecimal | undefined): this {
    if (isDefined<fhirDecimal>(value)) {
      const optErrMsg = `Invalid MolecularSequence.quality.queryTP (${String(value)})`;
      this.queryTP = new DecimalType(parseFhirPrimitiveData(value, fhirDecimalSchema, optErrMsg));
    } else {
      this.queryTP = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `queryTP` property exists and has a value; `false` otherwise
   */
  public hasQueryTP(): boolean {
    return this.hasQueryTPElement();
  }

  /**
   * @returns the `truthFN` property value as a DecimalType object if defined; else an empty DecimalType object
   */
  public getTruthFNElement(): DecimalType {
    return this.truthFN ?? new DecimalType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `truthFN` property.
   *
   * @param element - the `truthFN` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setTruthFNElement(element: DecimalType | undefined): this {
    if (isDefined<DecimalType>(element)) {
      const optErrMsg = `Invalid MolecularSequence.quality.truthFN; Provided element is not an instance of DecimalType.`;
      assertFhirType<DecimalType>(element, DecimalType, optErrMsg);
      this.truthFN = element;
    } else {
      this.truthFN = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `truthFN` property exists and has a value; `false` otherwise
   */
  public hasTruthFNElement(): boolean {
    return isDefined<DecimalType>(this.truthFN) && !this.truthFN.isEmpty();
  }

  /**
   * @returns the `truthFN` property value as a fhirDecimal if defined; else undefined
   */
  public getTruthFN(): fhirDecimal | undefined {
    return this.truthFN?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `truthFN` property.
   *
   * @param value - the `truthFN` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setTruthFN(value: fhirDecimal | undefined): this {
    if (isDefined<fhirDecimal>(value)) {
      const optErrMsg = `Invalid MolecularSequence.quality.truthFN (${String(value)})`;
      this.truthFN = new DecimalType(parseFhirPrimitiveData(value, fhirDecimalSchema, optErrMsg));
    } else {
      this.truthFN = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `truthFN` property exists and has a value; `false` otherwise
   */
  public hasTruthFN(): boolean {
    return this.hasTruthFNElement();
  }

  /**
   * @returns the `queryFP` property value as a DecimalType object if defined; else an empty DecimalType object
   */
  public getQueryFPElement(): DecimalType {
    return this.queryFP ?? new DecimalType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `queryFP` property.
   *
   * @param element - the `queryFP` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setQueryFPElement(element: DecimalType | undefined): this {
    if (isDefined<DecimalType>(element)) {
      const optErrMsg = `Invalid MolecularSequence.quality.queryFP; Provided element is not an instance of DecimalType.`;
      assertFhirType<DecimalType>(element, DecimalType, optErrMsg);
      this.queryFP = element;
    } else {
      this.queryFP = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `queryFP` property exists and has a value; `false` otherwise
   */
  public hasQueryFPElement(): boolean {
    return isDefined<DecimalType>(this.queryFP) && !this.queryFP.isEmpty();
  }

  /**
   * @returns the `queryFP` property value as a fhirDecimal if defined; else undefined
   */
  public getQueryFP(): fhirDecimal | undefined {
    return this.queryFP?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `queryFP` property.
   *
   * @param value - the `queryFP` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setQueryFP(value: fhirDecimal | undefined): this {
    if (isDefined<fhirDecimal>(value)) {
      const optErrMsg = `Invalid MolecularSequence.quality.queryFP (${String(value)})`;
      this.queryFP = new DecimalType(parseFhirPrimitiveData(value, fhirDecimalSchema, optErrMsg));
    } else {
      this.queryFP = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `queryFP` property exists and has a value; `false` otherwise
   */
  public hasQueryFP(): boolean {
    return this.hasQueryFPElement();
  }

  /**
   * @returns the `gtFP` property value as a DecimalType object if defined; else an empty DecimalType object
   */
  public getGtFPElement(): DecimalType {
    return this.gtFP ?? new DecimalType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `gtFP` property.
   *
   * @param element - the `gtFP` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setGtFPElement(element: DecimalType | undefined): this {
    if (isDefined<DecimalType>(element)) {
      const optErrMsg = `Invalid MolecularSequence.quality.gtFP; Provided element is not an instance of DecimalType.`;
      assertFhirType<DecimalType>(element, DecimalType, optErrMsg);
      this.gtFP = element;
    } else {
      this.gtFP = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `gtFP` property exists and has a value; `false` otherwise
   */
  public hasGtFPElement(): boolean {
    return isDefined<DecimalType>(this.gtFP) && !this.gtFP.isEmpty();
  }

  /**
   * @returns the `gtFP` property value as a fhirDecimal if defined; else undefined
   */
  public getGtFP(): fhirDecimal | undefined {
    return this.gtFP?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `gtFP` property.
   *
   * @param value - the `gtFP` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setGtFP(value: fhirDecimal | undefined): this {
    if (isDefined<fhirDecimal>(value)) {
      const optErrMsg = `Invalid MolecularSequence.quality.gtFP (${String(value)})`;
      this.gtFP = new DecimalType(parseFhirPrimitiveData(value, fhirDecimalSchema, optErrMsg));
    } else {
      this.gtFP = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `gtFP` property exists and has a value; `false` otherwise
   */
  public hasGtFP(): boolean {
    return this.hasGtFPElement();
  }

  /**
   * @returns the `precision` property value as a DecimalType object if defined; else an empty DecimalType object
   */
  public getPrecisionElement(): DecimalType {
    return this.precision ?? new DecimalType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `precision` property.
   *
   * @param element - the `precision` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPrecisionElement(element: DecimalType | undefined): this {
    if (isDefined<DecimalType>(element)) {
      const optErrMsg = `Invalid MolecularSequence.quality.precision; Provided element is not an instance of DecimalType.`;
      assertFhirType<DecimalType>(element, DecimalType, optErrMsg);
      this.precision = element;
    } else {
      this.precision = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `precision` property exists and has a value; `false` otherwise
   */
  public hasPrecisionElement(): boolean {
    return isDefined<DecimalType>(this.precision) && !this.precision.isEmpty();
  }

  /**
   * @returns the `precision` property value as a fhirDecimal if defined; else undefined
   */
  public getPrecision(): fhirDecimal | undefined {
    return this.precision?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `precision` property.
   *
   * @param value - the `precision` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPrecision(value: fhirDecimal | undefined): this {
    if (isDefined<fhirDecimal>(value)) {
      const optErrMsg = `Invalid MolecularSequence.quality.precision (${String(value)})`;
      this.precision = new DecimalType(parseFhirPrimitiveData(value, fhirDecimalSchema, optErrMsg));
    } else {
      this.precision = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `precision` property exists and has a value; `false` otherwise
   */
  public hasPrecision(): boolean {
    return this.hasPrecisionElement();
  }

  /**
   * @returns the `recall` property value as a DecimalType object if defined; else an empty DecimalType object
   */
  public getRecallElement(): DecimalType {
    return this.recall ?? new DecimalType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `recall` property.
   *
   * @param element - the `recall` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setRecallElement(element: DecimalType | undefined): this {
    if (isDefined<DecimalType>(element)) {
      const optErrMsg = `Invalid MolecularSequence.quality.recall; Provided element is not an instance of DecimalType.`;
      assertFhirType<DecimalType>(element, DecimalType, optErrMsg);
      this.recall = element;
    } else {
      this.recall = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `recall` property exists and has a value; `false` otherwise
   */
  public hasRecallElement(): boolean {
    return isDefined<DecimalType>(this.recall) && !this.recall.isEmpty();
  }

  /**
   * @returns the `recall` property value as a fhirDecimal if defined; else undefined
   */
  public getRecall(): fhirDecimal | undefined {
    return this.recall?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `recall` property.
   *
   * @param value - the `recall` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setRecall(value: fhirDecimal | undefined): this {
    if (isDefined<fhirDecimal>(value)) {
      const optErrMsg = `Invalid MolecularSequence.quality.recall (${String(value)})`;
      this.recall = new DecimalType(parseFhirPrimitiveData(value, fhirDecimalSchema, optErrMsg));
    } else {
      this.recall = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `recall` property exists and has a value; `false` otherwise
   */
  public hasRecall(): boolean {
    return this.hasRecallElement();
  }

  /**
   * @returns the `fScore` property value as a DecimalType object if defined; else an empty DecimalType object
   */
  public getFScoreElement(): DecimalType {
    return this.fScore ?? new DecimalType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `fScore` property.
   *
   * @param element - the `fScore` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setFScoreElement(element: DecimalType | undefined): this {
    if (isDefined<DecimalType>(element)) {
      const optErrMsg = `Invalid MolecularSequence.quality.fScore; Provided element is not an instance of DecimalType.`;
      assertFhirType<DecimalType>(element, DecimalType, optErrMsg);
      this.fScore = element;
    } else {
      this.fScore = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `fScore` property exists and has a value; `false` otherwise
   */
  public hasFScoreElement(): boolean {
    return isDefined<DecimalType>(this.fScore) && !this.fScore.isEmpty();
  }

  /**
   * @returns the `fScore` property value as a fhirDecimal if defined; else undefined
   */
  public getFScore(): fhirDecimal | undefined {
    return this.fScore?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `fScore` property.
   *
   * @param value - the `fScore` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setFScore(value: fhirDecimal | undefined): this {
    if (isDefined<fhirDecimal>(value)) {
      const optErrMsg = `Invalid MolecularSequence.quality.fScore (${String(value)})`;
      this.fScore = new DecimalType(parseFhirPrimitiveData(value, fhirDecimalSchema, optErrMsg));
    } else {
      this.fScore = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `fScore` property exists and has a value; `false` otherwise
   */
  public hasFScore(): boolean {
    return this.hasFScoreElement();
  }

  /**
   * @returns the `roc` property value as a MolecularSequenceQualityRocComponent object if defined; else an empty MolecularSequenceQualityRocComponent object
   */
  public getRoc(): MolecularSequenceQualityRocComponent {
    return this.roc ?? new MolecularSequenceQualityRocComponent();
  }

  /**
   * Assigns the provided Roc object value to the `roc` property.
   *
   * @param value - the `roc` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setRoc(value: MolecularSequenceQualityRocComponent | undefined): this {
    if (isDefined<MolecularSequenceQualityRocComponent>(value)) {
      const optErrMsg = `Invalid MolecularSequence.quality.roc; Provided element is not an instance of MolecularSequenceQualityRocComponent.`;
      assertFhirType<MolecularSequenceQualityRocComponent>(value, MolecularSequenceQualityRocComponent, optErrMsg);
      this.roc = value;
    } else {
      this.roc = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `roc` property exists and has a value; `false` otherwise
   */
  public hasRoc(): boolean {
    return isDefined<MolecularSequenceQualityRocComponent>(this.roc) && !this.roc.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'MolecularSequence.quality';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.type_,
      this.standardSequence,
      this.start,
      this.end,
      this.score,
      this.method,
      this.truthTP,
      this.queryTP,
      this.truthFN,
      this.queryFP,
      this.gtFP,
      this.precision,
      this.recall,
      this.fScore,
      this.roc,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): MolecularSequenceQualityComponent {
    const dest = new MolecularSequenceQualityComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: MolecularSequenceQualityComponent): void {
    super.copyValues(dest);
    dest.type_ = this.type_ ? this.type_.copy() : null;
    dest.standardSequence = this.standardSequence?.copy();
    dest.start = this.start?.copy();
    dest.end = this.end?.copy();
    dest.score = this.score?.copy();
    dest.method = this.method?.copy();
    dest.truthTP = this.truthTP?.copy();
    dest.queryTP = this.queryTP?.copy();
    dest.truthFN = this.truthFN?.copy();
    dest.queryFP = this.queryFP?.copy();
    dest.gtFP = this.gtFP?.copy();
    dest.precision = this.precision?.copy();
    dest.recall = this.recall?.copy();
    dest.fScore = this.fScore?.copy();
    dest.roc = this.roc?.copy();
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

    if (this.hasTypeElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getTypeElement()!, 'type', jsonObj);
    } else {
      missingReqdProperties.push(`MolecularSequence.quality.type`);
    }

    if (this.hasStandardSequence()) {
      setFhirComplexJson(this.getStandardSequence(), 'standardSequence', jsonObj);
    }

    if (this.hasStartElement()) {
      setFhirPrimitiveJson<fhirInteger>(this.getStartElement(), 'start', jsonObj);
    }

    if (this.hasEndElement()) {
      setFhirPrimitiveJson<fhirInteger>(this.getEndElement(), 'end', jsonObj);
    }

    if (this.hasScore()) {
      setFhirComplexJson(this.getScore(), 'score', jsonObj);
    }

    if (this.hasMethod()) {
      setFhirComplexJson(this.getMethod(), 'method', jsonObj);
    }

    if (this.hasTruthTPElement()) {
      setFhirPrimitiveJson<fhirDecimal>(this.getTruthTPElement(), 'truthTP', jsonObj);
    }

    if (this.hasQueryTPElement()) {
      setFhirPrimitiveJson<fhirDecimal>(this.getQueryTPElement(), 'queryTP', jsonObj);
    }

    if (this.hasTruthFNElement()) {
      setFhirPrimitiveJson<fhirDecimal>(this.getTruthFNElement(), 'truthFN', jsonObj);
    }

    if (this.hasQueryFPElement()) {
      setFhirPrimitiveJson<fhirDecimal>(this.getQueryFPElement(), 'queryFP', jsonObj);
    }

    if (this.hasGtFPElement()) {
      setFhirPrimitiveJson<fhirDecimal>(this.getGtFPElement(), 'gtFP', jsonObj);
    }

    if (this.hasPrecisionElement()) {
      setFhirPrimitiveJson<fhirDecimal>(this.getPrecisionElement(), 'precision', jsonObj);
    }

    if (this.hasRecallElement()) {
      setFhirPrimitiveJson<fhirDecimal>(this.getRecallElement(), 'recall', jsonObj);
    }

    if (this.hasFScoreElement()) {
      setFhirPrimitiveJson<fhirDecimal>(this.getFScoreElement(), 'fScore', jsonObj);
    }

    if (this.hasRoc()) {
      setFhirBackboneElementJson(this.getRoc(), 'roc', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
/**
 * MolecularSequenceQualityRocComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Receiver Operator Characteristic (ROC) Curve
 * - **Definition:** Receiver Operator Characteristic (ROC) Curve  to give sensitivity/specificity tradeoff.
 *
 * @category Data Models: Resource
 * @see [FHIR MolecularSequence](http://hl7.org/fhir/StructureDefinition/MolecularSequence)
 */
export class MolecularSequenceQualityRocComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `MolecularSequenceQualityRocComponent` JSON to instantiate the MolecularSequenceQualityRocComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `MolecularSequenceQualityRocComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to MolecularSequenceQualityRocComponent
   * @returns MolecularSequenceQualityRocComponent data model or undefined for `MolecularSequenceQualityRocComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): MolecularSequenceQualityRocComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'MolecularSequenceQualityRocComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new MolecularSequenceQualityRocComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'score';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const dataJsonArray: PrimitiveTypeJson[] = getPrimitiveTypeListJson(
        classJsonObj,
        sourceField,
        fieldName,
        primitiveJsonType,
      );
      dataJsonArray.forEach((dataJson: PrimitiveTypeJson) => {
        const datatype: IntegerType | undefined = fhirParser.parseIntegerType(dataJson.dtJson, dataJson.dtSiblingJson);
        if (datatype !== undefined) {
          instance.addScoreElement(datatype);
        }
      });
    }

    fieldName = 'numTP';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const dataJsonArray: PrimitiveTypeJson[] = getPrimitiveTypeListJson(
        classJsonObj,
        sourceField,
        fieldName,
        primitiveJsonType,
      );
      dataJsonArray.forEach((dataJson: PrimitiveTypeJson) => {
        const datatype: IntegerType | undefined = fhirParser.parseIntegerType(dataJson.dtJson, dataJson.dtSiblingJson);
        if (datatype !== undefined) {
          instance.addNumTPElement(datatype);
        }
      });
    }

    fieldName = 'numFP';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const dataJsonArray: PrimitiveTypeJson[] = getPrimitiveTypeListJson(
        classJsonObj,
        sourceField,
        fieldName,
        primitiveJsonType,
      );
      dataJsonArray.forEach((dataJson: PrimitiveTypeJson) => {
        const datatype: IntegerType | undefined = fhirParser.parseIntegerType(dataJson.dtJson, dataJson.dtSiblingJson);
        if (datatype !== undefined) {
          instance.addNumFPElement(datatype);
        }
      });
    }

    fieldName = 'numFN';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const dataJsonArray: PrimitiveTypeJson[] = getPrimitiveTypeListJson(
        classJsonObj,
        sourceField,
        fieldName,
        primitiveJsonType,
      );
      dataJsonArray.forEach((dataJson: PrimitiveTypeJson) => {
        const datatype: IntegerType | undefined = fhirParser.parseIntegerType(dataJson.dtJson, dataJson.dtSiblingJson);
        if (datatype !== undefined) {
          instance.addNumFNElement(datatype);
        }
      });
    }

    fieldName = 'precision';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const dataJsonArray: PrimitiveTypeJson[] = getPrimitiveTypeListJson(
        classJsonObj,
        sourceField,
        fieldName,
        primitiveJsonType,
      );
      dataJsonArray.forEach((dataJson: PrimitiveTypeJson) => {
        const datatype: DecimalType | undefined = fhirParser.parseDecimalType(dataJson.dtJson, dataJson.dtSiblingJson);
        if (datatype !== undefined) {
          instance.addPrecisionElement(datatype);
        }
      });
    }

    fieldName = 'sensitivity';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const dataJsonArray: PrimitiveTypeJson[] = getPrimitiveTypeListJson(
        classJsonObj,
        sourceField,
        fieldName,
        primitiveJsonType,
      );
      dataJsonArray.forEach((dataJson: PrimitiveTypeJson) => {
        const datatype: DecimalType | undefined = fhirParser.parseDecimalType(dataJson.dtJson, dataJson.dtSiblingJson);
        if (datatype !== undefined) {
          instance.addSensitivityElement(datatype);
        }
      });
    }

    fieldName = 'fMeasure';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const dataJsonArray: PrimitiveTypeJson[] = getPrimitiveTypeListJson(
        classJsonObj,
        sourceField,
        fieldName,
        primitiveJsonType,
      );
      dataJsonArray.forEach((dataJson: PrimitiveTypeJson) => {
        const datatype: DecimalType | undefined = fhirParser.parseDecimalType(dataJson.dtJson, dataJson.dtSiblingJson);
        if (datatype !== undefined) {
          instance.addFMeasureElement(datatype);
        }
      });
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * MolecularSequence.quality.roc.score Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Genotype quality score
   * - **Definition:** Invidual data point representing the GQ (genotype quality) score threshold.
   * - **FHIR Type:** `integer`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private score?: IntegerType[] | undefined;

  /**
   * MolecularSequence.quality.roc.numTP Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Roc score true positive numbers
   * - **Definition:** The number of true positives if the GQ score threshold was set to "score" field value.
   * - **FHIR Type:** `integer`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private numTP?: IntegerType[] | undefined;

  /**
   * MolecularSequence.quality.roc.numFP Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Roc score false positive numbers
   * - **Definition:** The number of false positives if the GQ score threshold was set to "score" field value.
   * - **FHIR Type:** `integer`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private numFP?: IntegerType[] | undefined;

  /**
   * MolecularSequence.quality.roc.numFN Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Roc score false negative numbers
   * - **Definition:** The number of false negatives if the GQ score threshold was set to "score" field value.
   * - **FHIR Type:** `integer`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private numFN?: IntegerType[] | undefined;

  /**
   * MolecularSequence.quality.roc.precision Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Precision of the GQ score
   * - **Definition:** Calculated precision if the GQ score threshold was set to "score" field value.
   * - **FHIR Type:** `decimal`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private precision?: DecimalType[] | undefined;

  /**
   * MolecularSequence.quality.roc.sensitivity Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Sensitivity of the GQ score
   * - **Definition:** Calculated sensitivity if the GQ score threshold was set to "score" field value.
   * - **FHIR Type:** `decimal`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private sensitivity?: DecimalType[] | undefined;

  /**
   * MolecularSequence.quality.roc.fMeasure Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** FScore of the GQ score
   * - **Definition:** Calculated fScore if the GQ score threshold was set to "score" field value.
   * - **FHIR Type:** `decimal`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private fMeasure?: DecimalType[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `score` property value as a IntegerType array
   */
  public getScoreElement(): IntegerType[] {
    return this.score ?? ([] as IntegerType[]);
  }

  /**
   * Assigns the provided IntegerType array value to the `score` property.
   *
   * @param element - the `score` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setScoreElement(element: IntegerType[] | undefined): this {
    if (isDefinedList<IntegerType>(element)) {
      const optErrMsg = `Invalid MolecularSequence.quality.roc.score; Provided value array has an element that is not an instance of IntegerType.`;
      assertFhirTypeList<IntegerType>(element, IntegerType, optErrMsg);
      this.score = element;
    } else {
      this.score = undefined;
    }
    return this;
  }

  /**
   * Add the provided IntegerType value to the `score` array property.
   *
   * @param element - the `score` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addScoreElement(element: IntegerType | undefined): this {
    if (isDefined<IntegerType>(element)) {
      const optErrMsg = `Invalid MolecularSequence.quality.roc.score; Provided element is not an instance of IntegerType.`;
      assertFhirType<IntegerType>(element, IntegerType, optErrMsg);
      this.initScore();
      this.score?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `score` property exists and has a value; `false` otherwise
   */
  public hasScoreElement(): boolean {
    return isDefinedList<IntegerType>(this.score) && this.score.some((item: IntegerType) => !item.isEmpty());
  }

  /**
   * @returns the `score` property value as a fhirInteger array
   */
  public getScore(): fhirInteger[] {
    this.initScore();
    const scoreValues = [] as fhirInteger[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.score!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        scoreValues.push(value);
      }
    }
    return scoreValues;
  }

  /**
   * Assigns the provided primitive value array to the `score` property.
   *
   * @param value - the `score` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setScore(value: fhirInteger[] | undefined): this {
    if (isDefinedList<fhirInteger>(value)) {
      const scoreElements = [] as IntegerType[];
      for (const scoreValue of value) {
        const optErrMsg = `Invalid MolecularSequence.quality.roc.score array item (${String(scoreValue)})`;
        const element = new IntegerType(parseFhirPrimitiveData(scoreValue, fhirIntegerSchema, optErrMsg));
        scoreElements.push(element);
      }
      this.score = scoreElements;
    } else {
      this.score = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `score` array property.
   *
   * @param value - the `score` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addScore(value: fhirInteger | undefined): this {
    if (isDefined<fhirInteger>(value)) {
      const optErrMsg = `Invalid MolecularSequence.quality.roc.score array item (${String(value)})`;
      const element = new IntegerType(parseFhirPrimitiveData(value, fhirIntegerSchema, optErrMsg));
      this.initScore();
      this.addScoreElement(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `score` property exists and has a value; `false` otherwise
   */
  public hasScore(): boolean {
    return this.hasScoreElement();
  }

  /**
   * Initialize the `score` property
   */
  private initScore(): void {
    if (!this.hasScore()) {
      this.score = [] as IntegerType[];
    }
  }

  /**
   * @returns the `numTP` property value as a IntegerType array
   */
  public getNumTPElement(): IntegerType[] {
    return this.numTP ?? ([] as IntegerType[]);
  }

  /**
   * Assigns the provided IntegerType array value to the `numTP` property.
   *
   * @param element - the `numTP` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setNumTPElement(element: IntegerType[] | undefined): this {
    if (isDefinedList<IntegerType>(element)) {
      const optErrMsg = `Invalid MolecularSequence.quality.roc.numTP; Provided value array has an element that is not an instance of IntegerType.`;
      assertFhirTypeList<IntegerType>(element, IntegerType, optErrMsg);
      this.numTP = element;
    } else {
      this.numTP = undefined;
    }
    return this;
  }

  /**
   * Add the provided IntegerType value to the `numTP` array property.
   *
   * @param element - the `numTP` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addNumTPElement(element: IntegerType | undefined): this {
    if (isDefined<IntegerType>(element)) {
      const optErrMsg = `Invalid MolecularSequence.quality.roc.numTP; Provided element is not an instance of IntegerType.`;
      assertFhirType<IntegerType>(element, IntegerType, optErrMsg);
      this.initNumTP();
      this.numTP?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `numTP` property exists and has a value; `false` otherwise
   */
  public hasNumTPElement(): boolean {
    return isDefinedList<IntegerType>(this.numTP) && this.numTP.some((item: IntegerType) => !item.isEmpty());
  }

  /**
   * @returns the `numTP` property value as a fhirInteger array
   */
  public getNumTP(): fhirInteger[] {
    this.initNumTP();
    const numTPValues = [] as fhirInteger[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.numTP!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        numTPValues.push(value);
      }
    }
    return numTPValues;
  }

  /**
   * Assigns the provided primitive value array to the `numTP` property.
   *
   * @param value - the `numTP` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setNumTP(value: fhirInteger[] | undefined): this {
    if (isDefinedList<fhirInteger>(value)) {
      const numTPElements = [] as IntegerType[];
      for (const numTPValue of value) {
        const optErrMsg = `Invalid MolecularSequence.quality.roc.numTP array item (${String(numTPValue)})`;
        const element = new IntegerType(parseFhirPrimitiveData(numTPValue, fhirIntegerSchema, optErrMsg));
        numTPElements.push(element);
      }
      this.numTP = numTPElements;
    } else {
      this.numTP = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `numTP` array property.
   *
   * @param value - the `numTP` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addNumTP(value: fhirInteger | undefined): this {
    if (isDefined<fhirInteger>(value)) {
      const optErrMsg = `Invalid MolecularSequence.quality.roc.numTP array item (${String(value)})`;
      const element = new IntegerType(parseFhirPrimitiveData(value, fhirIntegerSchema, optErrMsg));
      this.initNumTP();
      this.addNumTPElement(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `numTP` property exists and has a value; `false` otherwise
   */
  public hasNumTP(): boolean {
    return this.hasNumTPElement();
  }

  /**
   * Initialize the `numTP` property
   */
  private initNumTP(): void {
    if (!this.hasNumTP()) {
      this.numTP = [] as IntegerType[];
    }
  }

  /**
   * @returns the `numFP` property value as a IntegerType array
   */
  public getNumFPElement(): IntegerType[] {
    return this.numFP ?? ([] as IntegerType[]);
  }

  /**
   * Assigns the provided IntegerType array value to the `numFP` property.
   *
   * @param element - the `numFP` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setNumFPElement(element: IntegerType[] | undefined): this {
    if (isDefinedList<IntegerType>(element)) {
      const optErrMsg = `Invalid MolecularSequence.quality.roc.numFP; Provided value array has an element that is not an instance of IntegerType.`;
      assertFhirTypeList<IntegerType>(element, IntegerType, optErrMsg);
      this.numFP = element;
    } else {
      this.numFP = undefined;
    }
    return this;
  }

  /**
   * Add the provided IntegerType value to the `numFP` array property.
   *
   * @param element - the `numFP` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addNumFPElement(element: IntegerType | undefined): this {
    if (isDefined<IntegerType>(element)) {
      const optErrMsg = `Invalid MolecularSequence.quality.roc.numFP; Provided element is not an instance of IntegerType.`;
      assertFhirType<IntegerType>(element, IntegerType, optErrMsg);
      this.initNumFP();
      this.numFP?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `numFP` property exists and has a value; `false` otherwise
   */
  public hasNumFPElement(): boolean {
    return isDefinedList<IntegerType>(this.numFP) && this.numFP.some((item: IntegerType) => !item.isEmpty());
  }

  /**
   * @returns the `numFP` property value as a fhirInteger array
   */
  public getNumFP(): fhirInteger[] {
    this.initNumFP();
    const numFPValues = [] as fhirInteger[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.numFP!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        numFPValues.push(value);
      }
    }
    return numFPValues;
  }

  /**
   * Assigns the provided primitive value array to the `numFP` property.
   *
   * @param value - the `numFP` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setNumFP(value: fhirInteger[] | undefined): this {
    if (isDefinedList<fhirInteger>(value)) {
      const numFPElements = [] as IntegerType[];
      for (const numFPValue of value) {
        const optErrMsg = `Invalid MolecularSequence.quality.roc.numFP array item (${String(numFPValue)})`;
        const element = new IntegerType(parseFhirPrimitiveData(numFPValue, fhirIntegerSchema, optErrMsg));
        numFPElements.push(element);
      }
      this.numFP = numFPElements;
    } else {
      this.numFP = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `numFP` array property.
   *
   * @param value - the `numFP` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addNumFP(value: fhirInteger | undefined): this {
    if (isDefined<fhirInteger>(value)) {
      const optErrMsg = `Invalid MolecularSequence.quality.roc.numFP array item (${String(value)})`;
      const element = new IntegerType(parseFhirPrimitiveData(value, fhirIntegerSchema, optErrMsg));
      this.initNumFP();
      this.addNumFPElement(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `numFP` property exists and has a value; `false` otherwise
   */
  public hasNumFP(): boolean {
    return this.hasNumFPElement();
  }

  /**
   * Initialize the `numFP` property
   */
  private initNumFP(): void {
    if (!this.hasNumFP()) {
      this.numFP = [] as IntegerType[];
    }
  }

  /**
   * @returns the `numFN` property value as a IntegerType array
   */
  public getNumFNElement(): IntegerType[] {
    return this.numFN ?? ([] as IntegerType[]);
  }

  /**
   * Assigns the provided IntegerType array value to the `numFN` property.
   *
   * @param element - the `numFN` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setNumFNElement(element: IntegerType[] | undefined): this {
    if (isDefinedList<IntegerType>(element)) {
      const optErrMsg = `Invalid MolecularSequence.quality.roc.numFN; Provided value array has an element that is not an instance of IntegerType.`;
      assertFhirTypeList<IntegerType>(element, IntegerType, optErrMsg);
      this.numFN = element;
    } else {
      this.numFN = undefined;
    }
    return this;
  }

  /**
   * Add the provided IntegerType value to the `numFN` array property.
   *
   * @param element - the `numFN` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addNumFNElement(element: IntegerType | undefined): this {
    if (isDefined<IntegerType>(element)) {
      const optErrMsg = `Invalid MolecularSequence.quality.roc.numFN; Provided element is not an instance of IntegerType.`;
      assertFhirType<IntegerType>(element, IntegerType, optErrMsg);
      this.initNumFN();
      this.numFN?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `numFN` property exists and has a value; `false` otherwise
   */
  public hasNumFNElement(): boolean {
    return isDefinedList<IntegerType>(this.numFN) && this.numFN.some((item: IntegerType) => !item.isEmpty());
  }

  /**
   * @returns the `numFN` property value as a fhirInteger array
   */
  public getNumFN(): fhirInteger[] {
    this.initNumFN();
    const numFNValues = [] as fhirInteger[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.numFN!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        numFNValues.push(value);
      }
    }
    return numFNValues;
  }

  /**
   * Assigns the provided primitive value array to the `numFN` property.
   *
   * @param value - the `numFN` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setNumFN(value: fhirInteger[] | undefined): this {
    if (isDefinedList<fhirInteger>(value)) {
      const numFNElements = [] as IntegerType[];
      for (const numFNValue of value) {
        const optErrMsg = `Invalid MolecularSequence.quality.roc.numFN array item (${String(numFNValue)})`;
        const element = new IntegerType(parseFhirPrimitiveData(numFNValue, fhirIntegerSchema, optErrMsg));
        numFNElements.push(element);
      }
      this.numFN = numFNElements;
    } else {
      this.numFN = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `numFN` array property.
   *
   * @param value - the `numFN` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addNumFN(value: fhirInteger | undefined): this {
    if (isDefined<fhirInteger>(value)) {
      const optErrMsg = `Invalid MolecularSequence.quality.roc.numFN array item (${String(value)})`;
      const element = new IntegerType(parseFhirPrimitiveData(value, fhirIntegerSchema, optErrMsg));
      this.initNumFN();
      this.addNumFNElement(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `numFN` property exists and has a value; `false` otherwise
   */
  public hasNumFN(): boolean {
    return this.hasNumFNElement();
  }

  /**
   * Initialize the `numFN` property
   */
  private initNumFN(): void {
    if (!this.hasNumFN()) {
      this.numFN = [] as IntegerType[];
    }
  }

  /**
   * @returns the `precision` property value as a DecimalType array
   */
  public getPrecisionElement(): DecimalType[] {
    return this.precision ?? ([] as DecimalType[]);
  }

  /**
   * Assigns the provided DecimalType array value to the `precision` property.
   *
   * @param element - the `precision` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPrecisionElement(element: DecimalType[] | undefined): this {
    if (isDefinedList<DecimalType>(element)) {
      const optErrMsg = `Invalid MolecularSequence.quality.roc.precision; Provided value array has an element that is not an instance of DecimalType.`;
      assertFhirTypeList<DecimalType>(element, DecimalType, optErrMsg);
      this.precision = element;
    } else {
      this.precision = undefined;
    }
    return this;
  }

  /**
   * Add the provided DecimalType value to the `precision` array property.
   *
   * @param element - the `precision` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addPrecisionElement(element: DecimalType | undefined): this {
    if (isDefined<DecimalType>(element)) {
      const optErrMsg = `Invalid MolecularSequence.quality.roc.precision; Provided element is not an instance of DecimalType.`;
      assertFhirType<DecimalType>(element, DecimalType, optErrMsg);
      this.initPrecision();
      this.precision?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `precision` property exists and has a value; `false` otherwise
   */
  public hasPrecisionElement(): boolean {
    return isDefinedList<DecimalType>(this.precision) && this.precision.some((item: DecimalType) => !item.isEmpty());
  }

  /**
   * @returns the `precision` property value as a fhirDecimal array
   */
  public getPrecision(): fhirDecimal[] {
    this.initPrecision();
    const precisionValues = [] as fhirDecimal[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.precision!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        precisionValues.push(value);
      }
    }
    return precisionValues;
  }

  /**
   * Assigns the provided primitive value array to the `precision` property.
   *
   * @param value - the `precision` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPrecision(value: fhirDecimal[] | undefined): this {
    if (isDefinedList<fhirDecimal>(value)) {
      const precisionElements = [] as DecimalType[];
      for (const precisionValue of value) {
        const optErrMsg = `Invalid MolecularSequence.quality.roc.precision array item (${String(precisionValue)})`;
        const element = new DecimalType(parseFhirPrimitiveData(precisionValue, fhirDecimalSchema, optErrMsg));
        precisionElements.push(element);
      }
      this.precision = precisionElements;
    } else {
      this.precision = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `precision` array property.
   *
   * @param value - the `precision` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addPrecision(value: fhirDecimal | undefined): this {
    if (isDefined<fhirDecimal>(value)) {
      const optErrMsg = `Invalid MolecularSequence.quality.roc.precision array item (${String(value)})`;
      const element = new DecimalType(parseFhirPrimitiveData(value, fhirDecimalSchema, optErrMsg));
      this.initPrecision();
      this.addPrecisionElement(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `precision` property exists and has a value; `false` otherwise
   */
  public hasPrecision(): boolean {
    return this.hasPrecisionElement();
  }

  /**
   * Initialize the `precision` property
   */
  private initPrecision(): void {
    if (!this.hasPrecision()) {
      this.precision = [] as DecimalType[];
    }
  }

  /**
   * @returns the `sensitivity` property value as a DecimalType array
   */
  public getSensitivityElement(): DecimalType[] {
    return this.sensitivity ?? ([] as DecimalType[]);
  }

  /**
   * Assigns the provided DecimalType array value to the `sensitivity` property.
   *
   * @param element - the `sensitivity` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSensitivityElement(element: DecimalType[] | undefined): this {
    if (isDefinedList<DecimalType>(element)) {
      const optErrMsg = `Invalid MolecularSequence.quality.roc.sensitivity; Provided value array has an element that is not an instance of DecimalType.`;
      assertFhirTypeList<DecimalType>(element, DecimalType, optErrMsg);
      this.sensitivity = element;
    } else {
      this.sensitivity = undefined;
    }
    return this;
  }

  /**
   * Add the provided DecimalType value to the `sensitivity` array property.
   *
   * @param element - the `sensitivity` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addSensitivityElement(element: DecimalType | undefined): this {
    if (isDefined<DecimalType>(element)) {
      const optErrMsg = `Invalid MolecularSequence.quality.roc.sensitivity; Provided element is not an instance of DecimalType.`;
      assertFhirType<DecimalType>(element, DecimalType, optErrMsg);
      this.initSensitivity();
      this.sensitivity?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `sensitivity` property exists and has a value; `false` otherwise
   */
  public hasSensitivityElement(): boolean {
    return isDefinedList<DecimalType>(this.sensitivity) && this.sensitivity.some((item: DecimalType) => !item.isEmpty());
  }

  /**
   * @returns the `sensitivity` property value as a fhirDecimal array
   */
  public getSensitivity(): fhirDecimal[] {
    this.initSensitivity();
    const sensitivityValues = [] as fhirDecimal[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.sensitivity!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        sensitivityValues.push(value);
      }
    }
    return sensitivityValues;
  }

  /**
   * Assigns the provided primitive value array to the `sensitivity` property.
   *
   * @param value - the `sensitivity` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSensitivity(value: fhirDecimal[] | undefined): this {
    if (isDefinedList<fhirDecimal>(value)) {
      const sensitivityElements = [] as DecimalType[];
      for (const sensitivityValue of value) {
        const optErrMsg = `Invalid MolecularSequence.quality.roc.sensitivity array item (${String(sensitivityValue)})`;
        const element = new DecimalType(parseFhirPrimitiveData(sensitivityValue, fhirDecimalSchema, optErrMsg));
        sensitivityElements.push(element);
      }
      this.sensitivity = sensitivityElements;
    } else {
      this.sensitivity = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `sensitivity` array property.
   *
   * @param value - the `sensitivity` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addSensitivity(value: fhirDecimal | undefined): this {
    if (isDefined<fhirDecimal>(value)) {
      const optErrMsg = `Invalid MolecularSequence.quality.roc.sensitivity array item (${String(value)})`;
      const element = new DecimalType(parseFhirPrimitiveData(value, fhirDecimalSchema, optErrMsg));
      this.initSensitivity();
      this.addSensitivityElement(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `sensitivity` property exists and has a value; `false` otherwise
   */
  public hasSensitivity(): boolean {
    return this.hasSensitivityElement();
  }

  /**
   * Initialize the `sensitivity` property
   */
  private initSensitivity(): void {
    if (!this.hasSensitivity()) {
      this.sensitivity = [] as DecimalType[];
    }
  }

  /**
   * @returns the `fMeasure` property value as a DecimalType array
   */
  public getFMeasureElement(): DecimalType[] {
    return this.fMeasure ?? ([] as DecimalType[]);
  }

  /**
   * Assigns the provided DecimalType array value to the `fMeasure` property.
   *
   * @param element - the `fMeasure` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setFMeasureElement(element: DecimalType[] | undefined): this {
    if (isDefinedList<DecimalType>(element)) {
      const optErrMsg = `Invalid MolecularSequence.quality.roc.fMeasure; Provided value array has an element that is not an instance of DecimalType.`;
      assertFhirTypeList<DecimalType>(element, DecimalType, optErrMsg);
      this.fMeasure = element;
    } else {
      this.fMeasure = undefined;
    }
    return this;
  }

  /**
   * Add the provided DecimalType value to the `fMeasure` array property.
   *
   * @param element - the `fMeasure` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addFMeasureElement(element: DecimalType | undefined): this {
    if (isDefined<DecimalType>(element)) {
      const optErrMsg = `Invalid MolecularSequence.quality.roc.fMeasure; Provided element is not an instance of DecimalType.`;
      assertFhirType<DecimalType>(element, DecimalType, optErrMsg);
      this.initFMeasure();
      this.fMeasure?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `fMeasure` property exists and has a value; `false` otherwise
   */
  public hasFMeasureElement(): boolean {
    return isDefinedList<DecimalType>(this.fMeasure) && this.fMeasure.some((item: DecimalType) => !item.isEmpty());
  }

  /**
   * @returns the `fMeasure` property value as a fhirDecimal array
   */
  public getFMeasure(): fhirDecimal[] {
    this.initFMeasure();
    const fMeasureValues = [] as fhirDecimal[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.fMeasure!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        fMeasureValues.push(value);
      }
    }
    return fMeasureValues;
  }

  /**
   * Assigns the provided primitive value array to the `fMeasure` property.
   *
   * @param value - the `fMeasure` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setFMeasure(value: fhirDecimal[] | undefined): this {
    if (isDefinedList<fhirDecimal>(value)) {
      const fMeasureElements = [] as DecimalType[];
      for (const fMeasureValue of value) {
        const optErrMsg = `Invalid MolecularSequence.quality.roc.fMeasure array item (${String(fMeasureValue)})`;
        const element = new DecimalType(parseFhirPrimitiveData(fMeasureValue, fhirDecimalSchema, optErrMsg));
        fMeasureElements.push(element);
      }
      this.fMeasure = fMeasureElements;
    } else {
      this.fMeasure = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `fMeasure` array property.
   *
   * @param value - the `fMeasure` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addFMeasure(value: fhirDecimal | undefined): this {
    if (isDefined<fhirDecimal>(value)) {
      const optErrMsg = `Invalid MolecularSequence.quality.roc.fMeasure array item (${String(value)})`;
      const element = new DecimalType(parseFhirPrimitiveData(value, fhirDecimalSchema, optErrMsg));
      this.initFMeasure();
      this.addFMeasureElement(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `fMeasure` property exists and has a value; `false` otherwise
   */
  public hasFMeasure(): boolean {
    return this.hasFMeasureElement();
  }

  /**
   * Initialize the `fMeasure` property
   */
  private initFMeasure(): void {
    if (!this.hasFMeasure()) {
      this.fMeasure = [] as DecimalType[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'MolecularSequence.quality.roc';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.score,
      this.numTP,
      this.numFP,
      this.numFN,
      this.precision,
      this.sensitivity,
      this.fMeasure,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): MolecularSequenceQualityRocComponent {
    const dest = new MolecularSequenceQualityRocComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: MolecularSequenceQualityRocComponent): void {
    super.copyValues(dest);
    const scoreList = copyListValues<IntegerType>(this.score);
    dest.score = scoreList.length === 0 ? undefined : scoreList;
    const numTPList = copyListValues<IntegerType>(this.numTP);
    dest.numTP = numTPList.length === 0 ? undefined : numTPList;
    const numFPList = copyListValues<IntegerType>(this.numFP);
    dest.numFP = numFPList.length === 0 ? undefined : numFPList;
    const numFNList = copyListValues<IntegerType>(this.numFN);
    dest.numFN = numFNList.length === 0 ? undefined : numFNList;
    const precisionList = copyListValues<DecimalType>(this.precision);
    dest.precision = precisionList.length === 0 ? undefined : precisionList;
    const sensitivityList = copyListValues<DecimalType>(this.sensitivity);
    dest.sensitivity = sensitivityList.length === 0 ? undefined : sensitivityList;
    const fMeasureList = copyListValues<DecimalType>(this.fMeasure);
    dest.fMeasure = fMeasureList.length === 0 ? undefined : fMeasureList;
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

    if (this.hasScore()) {
      setFhirPrimitiveListJson(this.getScoreElement(), 'score', jsonObj);
    }

    if (this.hasNumTP()) {
      setFhirPrimitiveListJson(this.getNumTPElement(), 'numTP', jsonObj);
    }

    if (this.hasNumFP()) {
      setFhirPrimitiveListJson(this.getNumFPElement(), 'numFP', jsonObj);
    }

    if (this.hasNumFN()) {
      setFhirPrimitiveListJson(this.getNumFNElement(), 'numFN', jsonObj);
    }

    if (this.hasPrecision()) {
      setFhirPrimitiveListJson(this.getPrecisionElement(), 'precision', jsonObj);
    }

    if (this.hasSensitivity()) {
      setFhirPrimitiveListJson(this.getSensitivityElement(), 'sensitivity', jsonObj);
    }

    if (this.hasFMeasure()) {
      setFhirPrimitiveListJson(this.getFMeasureElement(), 'fMeasure', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * MolecularSequenceRepositoryComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** External repository which contains detailed report related with observedSeq in this resource
 * - **Definition:** Configurations of the external repository. The repository shall store target\'s observedSeq or records related with target\'s observedSeq.
 *
 * @category Data Models: Resource
 * @see [FHIR MolecularSequence](http://hl7.org/fhir/StructureDefinition/MolecularSequence)
 */
export class MolecularSequenceRepositoryComponent extends BackboneElement implements IBackboneElement {
  constructor(type_: EnumCodeType | CodeType | fhirCode | null = null) {
    super();

    this.repositoryTypeEnum = new RepositoryTypeEnum();

    this.type_ = constructorCodeValueAsEnumCodeType<RepositoryTypeEnum>(
      type_,
      RepositoryTypeEnum,
      this.repositoryTypeEnum,
      'MolecularSequence.repository.type',
    );
  }

  /**
   * Parse the provided `MolecularSequenceRepositoryComponent` JSON to instantiate the MolecularSequenceRepositoryComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `MolecularSequenceRepositoryComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to MolecularSequenceRepositoryComponent
   * @returns MolecularSequenceRepositoryComponent data model or undefined for `MolecularSequenceRepositoryComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): MolecularSequenceRepositoryComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'MolecularSequenceRepositoryComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new MolecularSequenceRepositoryComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const missingReqdProperties: string[] = [];

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setTypeElement(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'url';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: UriType | undefined = fhirParser.parseUriType(dtJson, dtSiblingJson);
      instance.setUrlElement(datatype);
    }

    fieldName = 'name';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setNameElement(datatype);
    }

    fieldName = 'datasetId';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setDatasetIdElement(datatype);
    }

    fieldName = 'variantsetId';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setVariantsetIdElement(datatype);
    }

    fieldName = 'readsetId';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setReadsetIdElement(datatype);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_REQD_IN_JSON} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * FHIR CodeSystem: RepositoryType
   *
   * @see {@link RepositoryTypeEnum }
   */
  private readonly repositoryTypeEnum: RepositoryTypeEnum;

  /**
   * MolecularSequence.repository.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** directlink | openapi | login | oauth | other
   * - **Definition:** Click and see / RESTful API / Need login to see / RESTful API with authentication / Other ways to see resource.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link RepositoryTypeEnum }
   */
  private type_: EnumCodeType | null;

  /**
   * MolecularSequence.repository.url Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** URI of the repository
   * - **Definition:** URI of an external repository which contains further details about the genetics data.
   * - **FHIR Type:** `uri`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private url?: UriType | undefined;

  /**
   * MolecularSequence.repository.name Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Repository\'s name
   * - **Definition:** URI of an external repository which contains further details about the genetics data.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private name?: StringType | undefined;

  /**
   * MolecularSequence.repository.datasetId Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Id of the dataset that used to call for dataset in repository
   * - **Definition:** Id of the variant in this external repository. The server will understand how to use this id to call for more info about datasets in external repository.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private datasetId?: StringType | undefined;

  /**
   * MolecularSequence.repository.variantsetId Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Id of the variantset that used to call for variantset in repository
   * - **Definition:** Id of the variantset in this external repository. The server will understand how to use this id to call for more info about variantsets in external repository.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private variantsetId?: StringType | undefined;

  /**
   * MolecularSequence.repository.readsetId Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Id of the read
   * - **Definition:** Id of the read in this external repository.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private readsetId?: StringType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `type_` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link RepositoryTypeEnum }
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
   * @see CodeSystem Enumeration: {@link RepositoryTypeEnum }
   */
  public setTypeEnumType(enumType: EnumCodeType): this {
    assertIsDefined<EnumCodeType>(enumType, `MolecularSequence.repository.type is required`);
    const errMsgPrefix = `Invalid MolecularSequence.repository.type`;
    assertEnumCodeType<RepositoryTypeEnum>(enumType, RepositoryTypeEnum, errMsgPrefix);
    this.type_ = enumType;
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
   * @see CodeSystem Enumeration: {@link RepositoryTypeEnum }
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
   * @see CodeSystem Enumeration: {@link RepositoryTypeEnum }
   */
  public setTypeElement(element: CodeType): this {
    assertIsDefined<CodeType>(element, `MolecularSequence.repository.type is required`);
    const optErrMsg = `Invalid MolecularSequence.repository.type; Provided value is not an instance of CodeType.`;
    assertFhirType<CodeType>(element, CodeType, optErrMsg);
    this.type_ = new EnumCodeType(element, this.repositoryTypeEnum);
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
   * @see CodeSystem Enumeration: {@link RepositoryTypeEnum }
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
   * @see CodeSystem Enumeration: {@link RepositoryTypeEnum }
   */
  public setType(value: fhirCode): this {
    assertIsDefined<fhirCode>(value, `MolecularSequence.repository.type is required`);
    const optErrMsg = `Invalid MolecularSequence.repository.type (${String(value)})`;
    this.type_ = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.repositoryTypeEnum);
    return this;
  }

  /**
   * @returns `true` if the `type_` property exists and has a value; `false` otherwise
   */
  public hasType(): boolean {
    return this.hasTypeEnumType();
  }

  /**
   * @returns the `url` property value as a UriType object if defined; else an empty UriType object
   */
  public getUrlElement(): UriType {
    return this.url ?? new UriType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `url` property.
   *
   * @param element - the `url` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setUrlElement(element: UriType | undefined): this {
    if (isDefined<UriType>(element)) {
      const optErrMsg = `Invalid MolecularSequence.repository.url; Provided element is not an instance of UriType.`;
      assertFhirType<UriType>(element, UriType, optErrMsg);
      this.url = element;
    } else {
      this.url = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `url` property exists and has a value; `false` otherwise
   */
  public hasUrlElement(): boolean {
    return isDefined<UriType>(this.url) && !this.url.isEmpty();
  }

  /**
   * @returns the `url` property value as a fhirUri if defined; else undefined
   */
  public getUrl(): fhirUri | undefined {
    return this.url?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `url` property.
   *
   * @param value - the `url` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setUrl(value: fhirUri | undefined): this {
    if (isDefined<fhirUri>(value)) {
      const optErrMsg = `Invalid MolecularSequence.repository.url (${String(value)})`;
      this.url = new UriType(parseFhirPrimitiveData(value, fhirUriSchema, optErrMsg));
    } else {
      this.url = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `url` property exists and has a value; `false` otherwise
   */
  public hasUrl(): boolean {
    return this.hasUrlElement();
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
      const optErrMsg = `Invalid MolecularSequence.repository.name; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid MolecularSequence.repository.name (${String(value)})`;
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
   * @returns the `datasetId` property value as a StringType object if defined; else an empty StringType object
   */
  public getDatasetIdElement(): StringType {
    return this.datasetId ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `datasetId` property.
   *
   * @param element - the `datasetId` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDatasetIdElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid MolecularSequence.repository.datasetId; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.datasetId = element;
    } else {
      this.datasetId = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `datasetId` property exists and has a value; `false` otherwise
   */
  public hasDatasetIdElement(): boolean {
    return isDefined<StringType>(this.datasetId) && !this.datasetId.isEmpty();
  }

  /**
   * @returns the `datasetId` property value as a fhirString if defined; else undefined
   */
  public getDatasetId(): fhirString | undefined {
    return this.datasetId?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `datasetId` property.
   *
   * @param value - the `datasetId` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDatasetId(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid MolecularSequence.repository.datasetId (${String(value)})`;
      this.datasetId = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.datasetId = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `datasetId` property exists and has a value; `false` otherwise
   */
  public hasDatasetId(): boolean {
    return this.hasDatasetIdElement();
  }

  /**
   * @returns the `variantsetId` property value as a StringType object if defined; else an empty StringType object
   */
  public getVariantsetIdElement(): StringType {
    return this.variantsetId ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `variantsetId` property.
   *
   * @param element - the `variantsetId` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setVariantsetIdElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid MolecularSequence.repository.variantsetId; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.variantsetId = element;
    } else {
      this.variantsetId = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `variantsetId` property exists and has a value; `false` otherwise
   */
  public hasVariantsetIdElement(): boolean {
    return isDefined<StringType>(this.variantsetId) && !this.variantsetId.isEmpty();
  }

  /**
   * @returns the `variantsetId` property value as a fhirString if defined; else undefined
   */
  public getVariantsetId(): fhirString | undefined {
    return this.variantsetId?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `variantsetId` property.
   *
   * @param value - the `variantsetId` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setVariantsetId(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid MolecularSequence.repository.variantsetId (${String(value)})`;
      this.variantsetId = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.variantsetId = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `variantsetId` property exists and has a value; `false` otherwise
   */
  public hasVariantsetId(): boolean {
    return this.hasVariantsetIdElement();
  }

  /**
   * @returns the `readsetId` property value as a StringType object if defined; else an empty StringType object
   */
  public getReadsetIdElement(): StringType {
    return this.readsetId ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `readsetId` property.
   *
   * @param element - the `readsetId` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setReadsetIdElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid MolecularSequence.repository.readsetId; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.readsetId = element;
    } else {
      this.readsetId = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `readsetId` property exists and has a value; `false` otherwise
   */
  public hasReadsetIdElement(): boolean {
    return isDefined<StringType>(this.readsetId) && !this.readsetId.isEmpty();
  }

  /**
   * @returns the `readsetId` property value as a fhirString if defined; else undefined
   */
  public getReadsetId(): fhirString | undefined {
    return this.readsetId?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `readsetId` property.
   *
   * @param value - the `readsetId` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setReadsetId(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid MolecularSequence.repository.readsetId (${String(value)})`;
      this.readsetId = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.readsetId = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `readsetId` property exists and has a value; `false` otherwise
   */
  public hasReadsetId(): boolean {
    return this.hasReadsetIdElement();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'MolecularSequence.repository';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.type_,
      this.url,
      this.name,
      this.datasetId,
      this.variantsetId,
      this.readsetId,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): MolecularSequenceRepositoryComponent {
    const dest = new MolecularSequenceRepositoryComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: MolecularSequenceRepositoryComponent): void {
    super.copyValues(dest);
    dest.type_ = this.type_ ? this.type_.copy() : null;
    dest.url = this.url?.copy();
    dest.name = this.name?.copy();
    dest.datasetId = this.datasetId?.copy();
    dest.variantsetId = this.variantsetId?.copy();
    dest.readsetId = this.readsetId?.copy();
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

    if (this.hasTypeElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getTypeElement()!, 'type', jsonObj);
    } else {
      missingReqdProperties.push(`MolecularSequence.repository.type`);
    }

    if (this.hasUrlElement()) {
      setFhirPrimitiveJson<fhirUri>(this.getUrlElement(), 'url', jsonObj);
    }

    if (this.hasNameElement()) {
      setFhirPrimitiveJson<fhirString>(this.getNameElement(), 'name', jsonObj);
    }

    if (this.hasDatasetIdElement()) {
      setFhirPrimitiveJson<fhirString>(this.getDatasetIdElement(), 'datasetId', jsonObj);
    }

    if (this.hasVariantsetIdElement()) {
      setFhirPrimitiveJson<fhirString>(this.getVariantsetIdElement(), 'variantsetId', jsonObj);
    }

    if (this.hasReadsetIdElement()) {
      setFhirPrimitiveJson<fhirString>(this.getReadsetIdElement(), 'readsetId', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
/**
 * MolecularSequenceStructureVariantComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Structural variant
 * - **Definition:** Information about chromosome structure variation.
 *
 * @category Data Models: Resource
 * @see [FHIR MolecularSequence](http://hl7.org/fhir/StructureDefinition/MolecularSequence)
 */
export class MolecularSequenceStructureVariantComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `MolecularSequenceStructureVariantComponent` JSON to instantiate the MolecularSequenceStructureVariantComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `MolecularSequenceStructureVariantComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to MolecularSequenceStructureVariantComponent
   * @returns MolecularSequenceStructureVariantComponent data model or undefined for `MolecularSequenceStructureVariantComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): MolecularSequenceStructureVariantComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'MolecularSequenceStructureVariantComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new MolecularSequenceStructureVariantComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'variantType';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setVariantType(datatype);
    }

    fieldName = 'exact';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setExactElement(datatype);
    }

    fieldName = 'length';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: IntegerType | undefined = fhirParser.parseIntegerType(dtJson, dtSiblingJson);
      instance.setLengthElement(datatype);
    }

    fieldName = 'outer';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: MolecularSequenceStructureVariantOuterComponent | undefined = MolecularSequenceStructureVariantOuterComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setOuter(component);
    }

    fieldName = 'inner';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: MolecularSequenceStructureVariantInnerComponent | undefined = MolecularSequenceStructureVariantInnerComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setInner(component);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * MolecularSequence.structureVariant.variantType Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Structural variant change type
   * - **Definition:** Information about chromosome structure variation DNA change type.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private variantType?: CodeableConcept | undefined;

  /**
   * MolecularSequence.structureVariant.exact Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Does the structural variant have base pair resolution breakpoints?
   * - **Definition:** Used to indicate if the outer and inner start-end values have the same meaning.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private exact?: BooleanType | undefined;

  /**
   * MolecularSequence.structureVariant.length Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Structural variant length
   * - **Definition:** Length of the variant chromosome.
   * - **FHIR Type:** `integer`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private length?: IntegerType | undefined;

  /**
   * MolecularSequence.structureVariant.outer Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Structural variant outer
   * - **Definition:** Structural variant outer.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private outer?: MolecularSequenceStructureVariantOuterComponent | undefined;

  /**
   * MolecularSequence.structureVariant.inner Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Structural variant inner
   * - **Definition:** Structural variant inner.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private inner?: MolecularSequenceStructureVariantInnerComponent | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `variantType` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getVariantType(): CodeableConcept {
    return this.variantType ?? new CodeableConcept();
  }

  /**
   * Assigns the provided VariantType object value to the `variantType` property.
   *
   * @param value - the `variantType` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setVariantType(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid MolecularSequence.structureVariant.variantType; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.variantType = value;
    } else {
      this.variantType = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `variantType` property exists and has a value; `false` otherwise
   */
  public hasVariantType(): boolean {
    return isDefined<CodeableConcept>(this.variantType) && !this.variantType.isEmpty();
  }

  /**
   * @returns the `exact` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getExactElement(): BooleanType {
    return this.exact ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `exact` property.
   *
   * @param element - the `exact` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setExactElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid MolecularSequence.structureVariant.exact; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.exact = element;
    } else {
      this.exact = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `exact` property exists and has a value; `false` otherwise
   */
  public hasExactElement(): boolean {
    return isDefined<BooleanType>(this.exact) && !this.exact.isEmpty();
  }

  /**
   * @returns the `exact` property value as a fhirBoolean if defined; else undefined
   */
  public getExact(): fhirBoolean | undefined {
    return this.exact?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `exact` property.
   *
   * @param value - the `exact` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setExact(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid MolecularSequence.structureVariant.exact (${String(value)})`;
      this.exact = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.exact = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `exact` property exists and has a value; `false` otherwise
   */
  public hasExact(): boolean {
    return this.hasExactElement();
  }

  /**
   * @returns the `length` property value as a IntegerType object if defined; else an empty IntegerType object
   */
  public getLengthElement(): IntegerType {
    return this.length ?? new IntegerType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `length` property.
   *
   * @param element - the `length` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setLengthElement(element: IntegerType | undefined): this {
    if (isDefined<IntegerType>(element)) {
      const optErrMsg = `Invalid MolecularSequence.structureVariant.length; Provided element is not an instance of IntegerType.`;
      assertFhirType<IntegerType>(element, IntegerType, optErrMsg);
      this.length = element;
    } else {
      this.length = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `length` property exists and has a value; `false` otherwise
   */
  public hasLengthElement(): boolean {
    return isDefined<IntegerType>(this.length) && !this.length.isEmpty();
  }

  /**
   * @returns the `length` property value as a fhirInteger if defined; else undefined
   */
  public getLength(): fhirInteger | undefined {
    return this.length?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `length` property.
   *
   * @param value - the `length` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setLength(value: fhirInteger | undefined): this {
    if (isDefined<fhirInteger>(value)) {
      const optErrMsg = `Invalid MolecularSequence.structureVariant.length (${String(value)})`;
      this.length = new IntegerType(parseFhirPrimitiveData(value, fhirIntegerSchema, optErrMsg));
    } else {
      this.length = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `length` property exists and has a value; `false` otherwise
   */
  public hasLength(): boolean {
    return this.hasLengthElement();
  }

  /**
   * @returns the `outer` property value as a MolecularSequenceStructureVariantOuterComponent object if defined; else an empty MolecularSequenceStructureVariantOuterComponent object
   */
  public getOuter(): MolecularSequenceStructureVariantOuterComponent {
    return this.outer ?? new MolecularSequenceStructureVariantOuterComponent();
  }

  /**
   * Assigns the provided Outer object value to the `outer` property.
   *
   * @param value - the `outer` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setOuter(value: MolecularSequenceStructureVariantOuterComponent | undefined): this {
    if (isDefined<MolecularSequenceStructureVariantOuterComponent>(value)) {
      const optErrMsg = `Invalid MolecularSequence.structureVariant.outer; Provided element is not an instance of MolecularSequenceStructureVariantOuterComponent.`;
      assertFhirType<MolecularSequenceStructureVariantOuterComponent>(value, MolecularSequenceStructureVariantOuterComponent, optErrMsg);
      this.outer = value;
    } else {
      this.outer = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `outer` property exists and has a value; `false` otherwise
   */
  public hasOuter(): boolean {
    return isDefined<MolecularSequenceStructureVariantOuterComponent>(this.outer) && !this.outer.isEmpty();
  }

  /**
   * @returns the `inner` property value as a MolecularSequenceStructureVariantInnerComponent object if defined; else an empty MolecularSequenceStructureVariantInnerComponent object
   */
  public getInner(): MolecularSequenceStructureVariantInnerComponent {
    return this.inner ?? new MolecularSequenceStructureVariantInnerComponent();
  }

  /**
   * Assigns the provided Inner object value to the `inner` property.
   *
   * @param value - the `inner` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setInner(value: MolecularSequenceStructureVariantInnerComponent | undefined): this {
    if (isDefined<MolecularSequenceStructureVariantInnerComponent>(value)) {
      const optErrMsg = `Invalid MolecularSequence.structureVariant.inner; Provided element is not an instance of MolecularSequenceStructureVariantInnerComponent.`;
      assertFhirType<MolecularSequenceStructureVariantInnerComponent>(value, MolecularSequenceStructureVariantInnerComponent, optErrMsg);
      this.inner = value;
    } else {
      this.inner = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `inner` property exists and has a value; `false` otherwise
   */
  public hasInner(): boolean {
    return isDefined<MolecularSequenceStructureVariantInnerComponent>(this.inner) && !this.inner.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'MolecularSequence.structureVariant';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.variantType,
      this.exact,
      this.length,
      this.outer,
      this.inner,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): MolecularSequenceStructureVariantComponent {
    const dest = new MolecularSequenceStructureVariantComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: MolecularSequenceStructureVariantComponent): void {
    super.copyValues(dest);
    dest.variantType = this.variantType?.copy();
    dest.exact = this.exact?.copy();
    dest.length = this.length?.copy();
    dest.outer = this.outer?.copy();
    dest.inner = this.inner?.copy();
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

    if (this.hasVariantType()) {
      setFhirComplexJson(this.getVariantType(), 'variantType', jsonObj);
    }

    if (this.hasExactElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getExactElement(), 'exact', jsonObj);
    }

    if (this.hasLengthElement()) {
      setFhirPrimitiveJson<fhirInteger>(this.getLengthElement(), 'length', jsonObj);
    }

    if (this.hasOuter()) {
      setFhirBackboneElementJson(this.getOuter(), 'outer', jsonObj);
    }

    if (this.hasInner()) {
      setFhirBackboneElementJson(this.getInner(), 'inner', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * MolecularSequenceStructureVariantOuterComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Structural variant outer
 * - **Definition:** Structural variant outer.
 *
 * @category Data Models: Resource
 * @see [FHIR MolecularSequence](http://hl7.org/fhir/StructureDefinition/MolecularSequence)
 */
export class MolecularSequenceStructureVariantOuterComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `MolecularSequenceStructureVariantOuterComponent` JSON to instantiate the MolecularSequenceStructureVariantOuterComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `MolecularSequenceStructureVariantOuterComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to MolecularSequenceStructureVariantOuterComponent
   * @returns MolecularSequenceStructureVariantOuterComponent data model or undefined for `MolecularSequenceStructureVariantOuterComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): MolecularSequenceStructureVariantOuterComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'MolecularSequenceStructureVariantOuterComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new MolecularSequenceStructureVariantOuterComponent();

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

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * MolecularSequence.structureVariant.outer.start Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Structural variant outer start
   * - **Definition:** Structural variant outer start. If the coordinate system is either 0-based or 1-based, then start position is inclusive.
   * - **FHIR Type:** `integer`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private start?: IntegerType | undefined;

  /**
   * MolecularSequence.structureVariant.outer.end Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Structural variant outer end
   * - **Definition:** Structural variant outer end. If the coordinate system is 0-based then end is exclusive and does not include the last position. If the coordinate system is 1-base, then end is inclusive and includes the last position.
   * - **FHIR Type:** `integer`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private end?: IntegerType | undefined;

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
      const optErrMsg = `Invalid MolecularSequence.structureVariant.outer.start; Provided element is not an instance of IntegerType.`;
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
      const optErrMsg = `Invalid MolecularSequence.structureVariant.outer.start (${String(value)})`;
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
      const optErrMsg = `Invalid MolecularSequence.structureVariant.outer.end; Provided element is not an instance of IntegerType.`;
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
      const optErrMsg = `Invalid MolecularSequence.structureVariant.outer.end (${String(value)})`;
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

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'MolecularSequence.structureVariant.outer';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.start,
      this.end,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): MolecularSequenceStructureVariantOuterComponent {
    const dest = new MolecularSequenceStructureVariantOuterComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: MolecularSequenceStructureVariantOuterComponent): void {
    super.copyValues(dest);
    dest.start = this.start?.copy();
    dest.end = this.end?.copy();
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

    return jsonObj;
  }
}
/**
 * MolecularSequenceStructureVariantInnerComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Structural variant inner
 * - **Definition:** Structural variant inner.
 *
 * @category Data Models: Resource
 * @see [FHIR MolecularSequence](http://hl7.org/fhir/StructureDefinition/MolecularSequence)
 */
export class MolecularSequenceStructureVariantInnerComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `MolecularSequenceStructureVariantInnerComponent` JSON to instantiate the MolecularSequenceStructureVariantInnerComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `MolecularSequenceStructureVariantInnerComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to MolecularSequenceStructureVariantInnerComponent
   * @returns MolecularSequenceStructureVariantInnerComponent data model or undefined for `MolecularSequenceStructureVariantInnerComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): MolecularSequenceStructureVariantInnerComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'MolecularSequenceStructureVariantInnerComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new MolecularSequenceStructureVariantInnerComponent();

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

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * MolecularSequence.structureVariant.inner.start Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Structural variant inner start
   * - **Definition:** Structural variant inner start. If the coordinate system is either 0-based or 1-based, then start position is inclusive.
   * - **FHIR Type:** `integer`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private start?: IntegerType | undefined;

  /**
   * MolecularSequence.structureVariant.inner.end Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Structural variant inner end
   * - **Definition:** Structural variant inner end. If the coordinate system is 0-based then end is exclusive and does not include the last position. If the coordinate system is 1-base, then end is inclusive and includes the last position.
   * - **FHIR Type:** `integer`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private end?: IntegerType | undefined;

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
      const optErrMsg = `Invalid MolecularSequence.structureVariant.inner.start; Provided element is not an instance of IntegerType.`;
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
      const optErrMsg = `Invalid MolecularSequence.structureVariant.inner.start (${String(value)})`;
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
      const optErrMsg = `Invalid MolecularSequence.structureVariant.inner.end; Provided element is not an instance of IntegerType.`;
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
      const optErrMsg = `Invalid MolecularSequence.structureVariant.inner.end (${String(value)})`;
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

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'MolecularSequence.structureVariant.inner';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.start,
      this.end,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): MolecularSequenceStructureVariantInnerComponent {
    const dest = new MolecularSequenceStructureVariantInnerComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: MolecularSequenceStructureVariantInnerComponent): void {
    super.copyValues(dest);
    dest.start = this.start?.copy();
    dest.end = this.end?.copy();
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

    return jsonObj;
  }
}
