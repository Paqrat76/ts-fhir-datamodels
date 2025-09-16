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
 * SubstanceNucleicAcid Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/SubstanceNucleicAcid
 * StructureDefinition.name: SubstanceNucleicAcid
 * StructureDefinition.description: Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5\'-3\' direction.
 * StructureDefinition.fhirVersion: 5.0.0
 *
 * For questions, suggestions, or bugs, please open an issue at [GitHub ts-fhir-datamodels/issues](https://github.com/Paqrat76/ts-fhir-datamodels/issues).
 *
 * @packageDocumentation
 */

import {
  BackboneElement,
  DomainResource,
  FhirParser,
  IBackboneElement,
  IDomainResource,
  IntegerType,
  JSON,
  StringType,
  assertFhirType,
  assertFhirTypeList,
  copyListValues,
  fhirInteger,
  fhirIntegerSchema,
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
  setFhirPrimitiveJson,
} from '@paq-ts-fhir/fhir-core';
import { Attachment, CodeableConcept, Identifier, PARSABLE_DATATYPE_MAP } from '../complex-types/complex-datatypes';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';

/**
 * SubstanceNucleicAcid Class
 *
 * @remarks
 * Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5\'-3\' direction.
 *
 * **FHIR Specification**
 * - **Short:** Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5\'-3\' direction
 * - **Definition:** Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5\'-3\' direction.
 * - **FHIR Version:** 5.0.0
 *
 * @category Data Models: Resource
 * @see [FHIR SubstanceNucleicAcid](http://hl7.org/fhir/StructureDefinition/SubstanceNucleicAcid)
 */
export class SubstanceNucleicAcid extends DomainResource implements IDomainResource {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `SubstanceNucleicAcid` JSON to instantiate the SubstanceNucleicAcid data model.
   *
   * @param sourceJson - JSON representing FHIR `SubstanceNucleicAcid`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to SubstanceNucleicAcid
   * @returns SubstanceNucleicAcid data model or undefined for `SubstanceNucleicAcid`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): SubstanceNucleicAcid | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'SubstanceNucleicAcid';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new SubstanceNucleicAcid();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'SubstanceNucleicAcid');
    fhirParser.processDomainResourceJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'sequenceType';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setSequenceType(datatype);
    }

    fieldName = 'numberOfSubunits';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: IntegerType | undefined = fhirParser.parseIntegerType(dtJson, dtSiblingJson);
      instance.setNumberOfSubunitsElement(datatype);
    }

    fieldName = 'areaOfHybridisation';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setAreaOfHybridisationElement(datatype);
    }

    fieldName = 'oligoNucleotideType';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setOligoNucleotideType(datatype);
    }

    fieldName = 'subunit';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: SubstanceNucleicAcidSubunitComponent | undefined = SubstanceNucleicAcidSubunitComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addSubunit(component);
          }
        });
      }
    }

    return instance;
  }

  /**
   * SubstanceNucleicAcid.sequenceType Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The type of the sequence shall be specified based on a controlled vocabulary
   * - **Definition:** The type of the sequence shall be specified based on a controlled vocabulary.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private sequenceType?: CodeableConcept | undefined;

  /**
   * SubstanceNucleicAcid.numberOfSubunits Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The number of linear sequences of nucleotides linked through phosphodiester bonds shall be described. Subunits would be strands of nucleic acids that are tightly associated typically through Watson-Crick base pairing. NOTE: If not specified in the reference source, the assumption is that there is 1 subunit
   * - **Definition:** The number of linear sequences of nucleotides linked through phosphodiester bonds shall be described. Subunits would be strands of nucleic acids that are tightly associated typically through Watson-Crick base pairing. NOTE: If not specified in the reference source, the assumption is that there is 1 subunit.
   * - **FHIR Type:** `integer`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private numberOfSubunits?: IntegerType | undefined;

  /**
   * SubstanceNucleicAcid.areaOfHybridisation Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The area of hybridisation shall be described if applicable for double stranded RNA or DNA. The number associated with the subunit followed by the number associated to the residue shall be specified in increasing order. The underscore "" shall be used as separator as follows: "Subunitnumber Residue"
   * - **Definition:** The area of hybridisation shall be described if applicable for double stranded RNA or DNA. The number associated with the subunit followed by the number associated to the residue shall be specified in increasing order. The underscore "" shall be used as separator as follows: "Subunitnumber Residue".
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private areaOfHybridisation?: StringType | undefined;

  /**
   * SubstanceNucleicAcid.oligoNucleotideType Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** (TBC)
   * - **Definition:** (TBC).
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private oligoNucleotideType?: CodeableConcept | undefined;

  /**
   * SubstanceNucleicAcid.subunit Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Subunits are listed in order of decreasing length; sequences of the same length will be ordered by molecular weight; subunits that have identical sequences will be repeated multiple times
   * - **Definition:** Subunits are listed in order of decreasing length; sequences of the same length will be ordered by molecular weight; subunits that have identical sequences will be repeated multiple times.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private subunit?: SubstanceNucleicAcidSubunitComponent[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `sequenceType` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getSequenceType(): CodeableConcept {
    return this.sequenceType ?? new CodeableConcept();
  }

  /**
   * Assigns the provided SequenceType object value to the `sequenceType` property.
   *
   * @param value - the `sequenceType` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSequenceType(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid SubstanceNucleicAcid.sequenceType; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.sequenceType = value;
    } else {
      this.sequenceType = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `sequenceType` property exists and has a value; `false` otherwise
   */
  public hasSequenceType(): boolean {
    return isDefined<CodeableConcept>(this.sequenceType) && !this.sequenceType.isEmpty();
  }

  /**
   * @returns the `numberOfSubunits` property value as a IntegerType object if defined; else an empty IntegerType object
   */
  public getNumberOfSubunitsElement(): IntegerType {
    return this.numberOfSubunits ?? new IntegerType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `numberOfSubunits` property.
   *
   * @param element - the `numberOfSubunits` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setNumberOfSubunitsElement(element: IntegerType | undefined): this {
    if (isDefined<IntegerType>(element)) {
      const optErrMsg = `Invalid SubstanceNucleicAcid.numberOfSubunits; Provided element is not an instance of IntegerType.`;
      assertFhirType<IntegerType>(element, IntegerType, optErrMsg);
      this.numberOfSubunits = element;
    } else {
      this.numberOfSubunits = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `numberOfSubunits` property exists and has a value; `false` otherwise
   */
  public hasNumberOfSubunitsElement(): boolean {
    return isDefined<IntegerType>(this.numberOfSubunits) && !this.numberOfSubunits.isEmpty();
  }

  /**
   * @returns the `numberOfSubunits` property value as a fhirInteger if defined; else undefined
   */
  public getNumberOfSubunits(): fhirInteger | undefined {
    return this.numberOfSubunits?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `numberOfSubunits` property.
   *
   * @param value - the `numberOfSubunits` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setNumberOfSubunits(value: fhirInteger | undefined): this {
    if (isDefined<fhirInteger>(value)) {
      const optErrMsg = `Invalid SubstanceNucleicAcid.numberOfSubunits (${String(value)})`;
      this.numberOfSubunits = new IntegerType(parseFhirPrimitiveData(value, fhirIntegerSchema, optErrMsg));
    } else {
      this.numberOfSubunits = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `numberOfSubunits` property exists and has a value; `false` otherwise
   */
  public hasNumberOfSubunits(): boolean {
    return this.hasNumberOfSubunitsElement();
  }

  /**
   * @returns the `areaOfHybridisation` property value as a StringType object if defined; else an empty StringType object
   */
  public getAreaOfHybridisationElement(): StringType {
    return this.areaOfHybridisation ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `areaOfHybridisation` property.
   *
   * @param element - the `areaOfHybridisation` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAreaOfHybridisationElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid SubstanceNucleicAcid.areaOfHybridisation; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.areaOfHybridisation = element;
    } else {
      this.areaOfHybridisation = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `areaOfHybridisation` property exists and has a value; `false` otherwise
   */
  public hasAreaOfHybridisationElement(): boolean {
    return isDefined<StringType>(this.areaOfHybridisation) && !this.areaOfHybridisation.isEmpty();
  }

  /**
   * @returns the `areaOfHybridisation` property value as a fhirString if defined; else undefined
   */
  public getAreaOfHybridisation(): fhirString | undefined {
    return this.areaOfHybridisation?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `areaOfHybridisation` property.
   *
   * @param value - the `areaOfHybridisation` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAreaOfHybridisation(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid SubstanceNucleicAcid.areaOfHybridisation (${String(value)})`;
      this.areaOfHybridisation = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.areaOfHybridisation = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `areaOfHybridisation` property exists and has a value; `false` otherwise
   */
  public hasAreaOfHybridisation(): boolean {
    return this.hasAreaOfHybridisationElement();
  }

  /**
   * @returns the `oligoNucleotideType` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getOligoNucleotideType(): CodeableConcept {
    return this.oligoNucleotideType ?? new CodeableConcept();
  }

  /**
   * Assigns the provided OligoNucleotideType object value to the `oligoNucleotideType` property.
   *
   * @param value - the `oligoNucleotideType` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setOligoNucleotideType(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid SubstanceNucleicAcid.oligoNucleotideType; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.oligoNucleotideType = value;
    } else {
      this.oligoNucleotideType = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `oligoNucleotideType` property exists and has a value; `false` otherwise
   */
  public hasOligoNucleotideType(): boolean {
    return isDefined<CodeableConcept>(this.oligoNucleotideType) && !this.oligoNucleotideType.isEmpty();
  }

  /**
   * @returns the `subunit` property value as a SubstanceNucleicAcidSubunitComponent array
   */
  public getSubunit(): SubstanceNucleicAcidSubunitComponent[] {
    return this.subunit ?? ([] as SubstanceNucleicAcidSubunitComponent[]);
  }

  /**
   * Assigns the provided SubstanceNucleicAcidSubunitComponent array value to the `subunit` property.
   *
   * @param value - the `subunit` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSubunit(value: SubstanceNucleicAcidSubunitComponent[] | undefined): this {
    if (isDefinedList<SubstanceNucleicAcidSubunitComponent>(value)) {
      const optErrMsg = `Invalid SubstanceNucleicAcid.subunit; Provided value array has an element that is not an instance of SubstanceNucleicAcidSubunitComponent.`;
      assertFhirTypeList<SubstanceNucleicAcidSubunitComponent>(value, SubstanceNucleicAcidSubunitComponent, optErrMsg);
      this.subunit = value;
    } else {
      this.subunit = undefined;
    }
    return this;
  }

  /**
   * Add the provided SubstanceNucleicAcidSubunitComponent value to the `subunit` array property.
   *
   * @param value - the `subunit` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addSubunit(value: SubstanceNucleicAcidSubunitComponent | undefined): this {
    if (isDefined<SubstanceNucleicAcidSubunitComponent>(value)) {
      const optErrMsg = `Invalid SubstanceNucleicAcid.subunit; Provided element is not an instance of SubstanceNucleicAcidSubunitComponent.`;
      assertFhirType<SubstanceNucleicAcidSubunitComponent>(value, SubstanceNucleicAcidSubunitComponent, optErrMsg);
      this.initSubunit();
      this.subunit?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `subunit` property exists and has a value; `false` otherwise
   */
  public hasSubunit(): boolean {
    return isDefinedList<SubstanceNucleicAcidSubunitComponent>(this.subunit) && this.subunit.some((item: SubstanceNucleicAcidSubunitComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `subunit` property
   */
  private initSubunit(): void {
    if(!this.hasSubunit()) {
      this.subunit = [] as SubstanceNucleicAcidSubunitComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'SubstanceNucleicAcid';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.sequenceType,
      this.numberOfSubunits,
      this.areaOfHybridisation,
      this.oligoNucleotideType,
      this.subunit,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): SubstanceNucleicAcid {
    const dest = new SubstanceNucleicAcid();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: SubstanceNucleicAcid): void {
    super.copyValues(dest);
    dest.sequenceType = this.sequenceType?.copy();
    dest.numberOfSubunits = this.numberOfSubunits?.copy();
    dest.areaOfHybridisation = this.areaOfHybridisation?.copy();
    dest.oligoNucleotideType = this.oligoNucleotideType?.copy();
    const subunitList = copyListValues<SubstanceNucleicAcidSubunitComponent>(this.subunit);
    dest.subunit = subunitList.length === 0 ? undefined : subunitList;
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

    if (this.hasSequenceType()) {
      setFhirComplexJson(this.getSequenceType(), 'sequenceType', jsonObj);
    }

    if (this.hasNumberOfSubunitsElement()) {
      setFhirPrimitiveJson<fhirInteger>(this.getNumberOfSubunitsElement(), 'numberOfSubunits', jsonObj);
    }

    if (this.hasAreaOfHybridisationElement()) {
      setFhirPrimitiveJson<fhirString>(this.getAreaOfHybridisationElement(), 'areaOfHybridisation', jsonObj);
    }

    if (this.hasOligoNucleotideType()) {
      setFhirComplexJson(this.getOligoNucleotideType(), 'oligoNucleotideType', jsonObj);
    }

    if (this.hasSubunit()) {
      setFhirBackboneElementListJson(this.getSubunit(), 'subunit', jsonObj);
    }

    return jsonObj;
  }
}

/**
 * SubstanceNucleicAcidSubunitComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Subunits are listed in order of decreasing length; sequences of the same length will be ordered by molecular weight; subunits that have identical sequences will be repeated multiple times
 * - **Definition:** Subunits are listed in order of decreasing length; sequences of the same length will be ordered by molecular weight; subunits that have identical sequences will be repeated multiple times.
 *
 * @category Data Models: Resource
 * @see [FHIR SubstanceNucleicAcid](http://hl7.org/fhir/StructureDefinition/SubstanceNucleicAcid)
 */
export class SubstanceNucleicAcidSubunitComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `SubstanceNucleicAcidSubunitComponent` JSON to instantiate the SubstanceNucleicAcidSubunitComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `SubstanceNucleicAcidSubunitComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to SubstanceNucleicAcidSubunitComponent
   * @returns SubstanceNucleicAcidSubunitComponent data model or undefined for `SubstanceNucleicAcidSubunitComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): SubstanceNucleicAcidSubunitComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'SubstanceNucleicAcidSubunitComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new SubstanceNucleicAcidSubunitComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'subunit';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: IntegerType | undefined = fhirParser.parseIntegerType(dtJson, dtSiblingJson);
      instance.setSubunitElement(datatype);
    }

    fieldName = 'sequence';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setSequenceElement(datatype);
    }

    fieldName = 'length';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: IntegerType | undefined = fhirParser.parseIntegerType(dtJson, dtSiblingJson);
      instance.setLengthElement(datatype);
    }

    fieldName = 'sequenceAttachment';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Attachment | undefined = Attachment.parse(classJsonObj[fieldName]!, sourceField);
      instance.setSequenceAttachment(datatype);
    }

    fieldName = 'fivePrime';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setFivePrime(datatype);
    }

    fieldName = 'threePrime';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setThreePrime(datatype);
    }

    fieldName = 'linkage';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: SubstanceNucleicAcidSubunitLinkageComponent | undefined = SubstanceNucleicAcidSubunitLinkageComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addLinkage(component);
          }
        });
      }
    }

    fieldName = 'sugar';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: SubstanceNucleicAcidSubunitSugarComponent | undefined = SubstanceNucleicAcidSubunitSugarComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addSugar(component);
          }
        });
      }
    }

    return instance;
  }

  /**
   * SubstanceNucleicAcid.subunit.subunit Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Index of linear sequences of nucleic acids in order of decreasing length. Sequences of the same length will be ordered by molecular weight. Subunits that have identical sequences will be repeated and have sequential subscripts
   * - **Definition:** Index of linear sequences of nucleic acids in order of decreasing length. Sequences of the same length will be ordered by molecular weight. Subunits that have identical sequences will be repeated and have sequential subscripts.
   * - **FHIR Type:** `integer`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private subunit?: IntegerType | undefined;

  /**
   * SubstanceNucleicAcid.subunit.sequence Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Actual nucleotide sequence notation from 5\' to 3\' end using standard single letter codes. In addition to the base sequence, sugar and type of phosphate or non-phosphate linkage should also be captured
   * - **Definition:** Actual nucleotide sequence notation from 5\' to 3\' end using standard single letter codes. In addition to the base sequence, sugar and type of phosphate or non-phosphate linkage should also be captured.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private sequence?: StringType | undefined;

  /**
   * SubstanceNucleicAcid.subunit.length Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The length of the sequence shall be captured
   * - **Definition:** The length of the sequence shall be captured.
   * - **FHIR Type:** `integer`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private length?: IntegerType | undefined;

  /**
   * SubstanceNucleicAcid.subunit.sequenceAttachment Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** (TBC)
   * - **Definition:** (TBC).
   * - **FHIR Type:** `Attachment`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private sequenceAttachment?: Attachment | undefined;

  /**
   * SubstanceNucleicAcid.subunit.fivePrime Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The nucleotide present at the 5\' terminal shall be specified based on a controlled vocabulary. Since the sequence is represented from the 5\' to the 3\' end, the 5\' prime nucleotide is the letter at the first position in the sequence. A separate representation would be redundant
   * - **Definition:** The nucleotide present at the 5\' terminal shall be specified based on a controlled vocabulary. Since the sequence is represented from the 5\' to the 3\' end, the 5\' prime nucleotide is the letter at the first position in the sequence. A separate representation would be redundant.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private fivePrime?: CodeableConcept | undefined;

  /**
   * SubstanceNucleicAcid.subunit.threePrime Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The nucleotide present at the 3\' terminal shall be specified based on a controlled vocabulary. Since the sequence is represented from the 5\' to the 3\' end, the 5\' prime nucleotide is the letter at the last position in the sequence. A separate representation would be redundant
   * - **Definition:** The nucleotide present at the 3\' terminal shall be specified based on a controlled vocabulary. Since the sequence is represented from the 5\' to the 3\' end, the 5\' prime nucleotide is the letter at the last position in the sequence. A separate representation would be redundant.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private threePrime?: CodeableConcept | undefined;

  /**
   * SubstanceNucleicAcid.subunit.linkage Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The linkages between sugar residues will also be captured
   * - **Definition:** The linkages between sugar residues will also be captured.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private linkage?: SubstanceNucleicAcidSubunitLinkageComponent[] | undefined;

  /**
   * SubstanceNucleicAcid.subunit.sugar Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** 5.3.6.8.1 Sugar ID (Mandatory)
   * - **Definition:** 5.3.6.8.1 Sugar ID (Mandatory).
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private sugar?: SubstanceNucleicAcidSubunitSugarComponent[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `subunit` property value as a IntegerType object if defined; else an empty IntegerType object
   */
  public getSubunitElement(): IntegerType {
    return this.subunit ?? new IntegerType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `subunit` property.
   *
   * @param element - the `subunit` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSubunitElement(element: IntegerType | undefined): this {
    if (isDefined<IntegerType>(element)) {
      const optErrMsg = `Invalid SubstanceNucleicAcid.subunit.subunit; Provided element is not an instance of IntegerType.`;
      assertFhirType<IntegerType>(element, IntegerType, optErrMsg);
      this.subunit = element;
    } else {
      this.subunit = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `subunit` property exists and has a value; `false` otherwise
   */
  public hasSubunitElement(): boolean {
    return isDefined<IntegerType>(this.subunit) && !this.subunit.isEmpty();
  }

  /**
   * @returns the `subunit` property value as a fhirInteger if defined; else undefined
   */
  public getSubunit(): fhirInteger | undefined {
    return this.subunit?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `subunit` property.
   *
   * @param value - the `subunit` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSubunit(value: fhirInteger | undefined): this {
    if (isDefined<fhirInteger>(value)) {
      const optErrMsg = `Invalid SubstanceNucleicAcid.subunit.subunit (${String(value)})`;
      this.subunit = new IntegerType(parseFhirPrimitiveData(value, fhirIntegerSchema, optErrMsg));
    } else {
      this.subunit = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `subunit` property exists and has a value; `false` otherwise
   */
  public hasSubunit(): boolean {
    return this.hasSubunitElement();
  }

  /**
   * @returns the `sequence` property value as a StringType object if defined; else an empty StringType object
   */
  public getSequenceElement(): StringType {
    return this.sequence ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `sequence` property.
   *
   * @param element - the `sequence` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSequenceElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid SubstanceNucleicAcid.subunit.sequence; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
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
    return isDefined<StringType>(this.sequence) && !this.sequence.isEmpty();
  }

  /**
   * @returns the `sequence` property value as a fhirString if defined; else undefined
   */
  public getSequence(): fhirString | undefined {
    return this.sequence?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `sequence` property.
   *
   * @param value - the `sequence` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSequence(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid SubstanceNucleicAcid.subunit.sequence (${String(value)})`;
      this.sequence = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
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
      const optErrMsg = `Invalid SubstanceNucleicAcid.subunit.length; Provided element is not an instance of IntegerType.`;
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
      const optErrMsg = `Invalid SubstanceNucleicAcid.subunit.length (${String(value)})`;
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
   * @returns the `sequenceAttachment` property value as a Attachment object if defined; else an empty Attachment object
   */
  public getSequenceAttachment(): Attachment {
    return this.sequenceAttachment ?? new Attachment();
  }

  /**
   * Assigns the provided SequenceAttachment object value to the `sequenceAttachment` property.
   *
   * @param value - the `sequenceAttachment` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSequenceAttachment(value: Attachment | undefined): this {
    if (isDefined<Attachment>(value)) {
      const optErrMsg = `Invalid SubstanceNucleicAcid.subunit.sequenceAttachment; Provided element is not an instance of Attachment.`;
      assertFhirType<Attachment>(value, Attachment, optErrMsg);
      this.sequenceAttachment = value;
    } else {
      this.sequenceAttachment = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `sequenceAttachment` property exists and has a value; `false` otherwise
   */
  public hasSequenceAttachment(): boolean {
    return isDefined<Attachment>(this.sequenceAttachment) && !this.sequenceAttachment.isEmpty();
  }

  /**
   * @returns the `fivePrime` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getFivePrime(): CodeableConcept {
    return this.fivePrime ?? new CodeableConcept();
  }

  /**
   * Assigns the provided FivePrime object value to the `fivePrime` property.
   *
   * @param value - the `fivePrime` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setFivePrime(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid SubstanceNucleicAcid.subunit.fivePrime; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.fivePrime = value;
    } else {
      this.fivePrime = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `fivePrime` property exists and has a value; `false` otherwise
   */
  public hasFivePrime(): boolean {
    return isDefined<CodeableConcept>(this.fivePrime) && !this.fivePrime.isEmpty();
  }

  /**
   * @returns the `threePrime` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getThreePrime(): CodeableConcept {
    return this.threePrime ?? new CodeableConcept();
  }

  /**
   * Assigns the provided ThreePrime object value to the `threePrime` property.
   *
   * @param value - the `threePrime` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setThreePrime(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid SubstanceNucleicAcid.subunit.threePrime; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.threePrime = value;
    } else {
      this.threePrime = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `threePrime` property exists and has a value; `false` otherwise
   */
  public hasThreePrime(): boolean {
    return isDefined<CodeableConcept>(this.threePrime) && !this.threePrime.isEmpty();
  }

  /**
   * @returns the `linkage` property value as a SubstanceNucleicAcidSubunitLinkageComponent array
   */
  public getLinkage(): SubstanceNucleicAcidSubunitLinkageComponent[] {
    return this.linkage ?? ([] as SubstanceNucleicAcidSubunitLinkageComponent[]);
  }

  /**
   * Assigns the provided SubstanceNucleicAcidSubunitLinkageComponent array value to the `linkage` property.
   *
   * @param value - the `linkage` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setLinkage(value: SubstanceNucleicAcidSubunitLinkageComponent[] | undefined): this {
    if (isDefinedList<SubstanceNucleicAcidSubunitLinkageComponent>(value)) {
      const optErrMsg = `Invalid SubstanceNucleicAcid.subunit.linkage; Provided value array has an element that is not an instance of SubstanceNucleicAcidSubunitLinkageComponent.`;
      assertFhirTypeList<SubstanceNucleicAcidSubunitLinkageComponent>(value, SubstanceNucleicAcidSubunitLinkageComponent, optErrMsg);
      this.linkage = value;
    } else {
      this.linkage = undefined;
    }
    return this;
  }

  /**
   * Add the provided SubstanceNucleicAcidSubunitLinkageComponent value to the `linkage` array property.
   *
   * @param value - the `linkage` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addLinkage(value: SubstanceNucleicAcidSubunitLinkageComponent | undefined): this {
    if (isDefined<SubstanceNucleicAcidSubunitLinkageComponent>(value)) {
      const optErrMsg = `Invalid SubstanceNucleicAcid.subunit.linkage; Provided element is not an instance of SubstanceNucleicAcidSubunitLinkageComponent.`;
      assertFhirType<SubstanceNucleicAcidSubunitLinkageComponent>(value, SubstanceNucleicAcidSubunitLinkageComponent, optErrMsg);
      this.initLinkage();
      this.linkage?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `linkage` property exists and has a value; `false` otherwise
   */
  public hasLinkage(): boolean {
    return isDefinedList<SubstanceNucleicAcidSubunitLinkageComponent>(this.linkage) && this.linkage.some((item: SubstanceNucleicAcidSubunitLinkageComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `linkage` property
   */
  private initLinkage(): void {
    if(!this.hasLinkage()) {
      this.linkage = [] as SubstanceNucleicAcidSubunitLinkageComponent[];
    }
  }

  /**
   * @returns the `sugar` property value as a SubstanceNucleicAcidSubunitSugarComponent array
   */
  public getSugar(): SubstanceNucleicAcidSubunitSugarComponent[] {
    return this.sugar ?? ([] as SubstanceNucleicAcidSubunitSugarComponent[]);
  }

  /**
   * Assigns the provided SubstanceNucleicAcidSubunitSugarComponent array value to the `sugar` property.
   *
   * @param value - the `sugar` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSugar(value: SubstanceNucleicAcidSubunitSugarComponent[] | undefined): this {
    if (isDefinedList<SubstanceNucleicAcidSubunitSugarComponent>(value)) {
      const optErrMsg = `Invalid SubstanceNucleicAcid.subunit.sugar; Provided value array has an element that is not an instance of SubstanceNucleicAcidSubunitSugarComponent.`;
      assertFhirTypeList<SubstanceNucleicAcidSubunitSugarComponent>(value, SubstanceNucleicAcidSubunitSugarComponent, optErrMsg);
      this.sugar = value;
    } else {
      this.sugar = undefined;
    }
    return this;
  }

  /**
   * Add the provided SubstanceNucleicAcidSubunitSugarComponent value to the `sugar` array property.
   *
   * @param value - the `sugar` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addSugar(value: SubstanceNucleicAcidSubunitSugarComponent | undefined): this {
    if (isDefined<SubstanceNucleicAcidSubunitSugarComponent>(value)) {
      const optErrMsg = `Invalid SubstanceNucleicAcid.subunit.sugar; Provided element is not an instance of SubstanceNucleicAcidSubunitSugarComponent.`;
      assertFhirType<SubstanceNucleicAcidSubunitSugarComponent>(value, SubstanceNucleicAcidSubunitSugarComponent, optErrMsg);
      this.initSugar();
      this.sugar?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `sugar` property exists and has a value; `false` otherwise
   */
  public hasSugar(): boolean {
    return isDefinedList<SubstanceNucleicAcidSubunitSugarComponent>(this.sugar) && this.sugar.some((item: SubstanceNucleicAcidSubunitSugarComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `sugar` property
   */
  private initSugar(): void {
    if(!this.hasSugar()) {
      this.sugar = [] as SubstanceNucleicAcidSubunitSugarComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'SubstanceNucleicAcid.subunit';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.subunit,
      this.sequence,
      this.length,
      this.sequenceAttachment,
      this.fivePrime,
      this.threePrime,
      this.linkage,
      this.sugar,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): SubstanceNucleicAcidSubunitComponent {
    const dest = new SubstanceNucleicAcidSubunitComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: SubstanceNucleicAcidSubunitComponent): void {
    super.copyValues(dest);
    dest.subunit = this.subunit?.copy();
    dest.sequence = this.sequence?.copy();
    dest.length = this.length?.copy();
    dest.sequenceAttachment = this.sequenceAttachment?.copy();
    dest.fivePrime = this.fivePrime?.copy();
    dest.threePrime = this.threePrime?.copy();
    const linkageList = copyListValues<SubstanceNucleicAcidSubunitLinkageComponent>(this.linkage);
    dest.linkage = linkageList.length === 0 ? undefined : linkageList;
    const sugarList = copyListValues<SubstanceNucleicAcidSubunitSugarComponent>(this.sugar);
    dest.sugar = sugarList.length === 0 ? undefined : sugarList;
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

    if (this.hasSubunitElement()) {
      setFhirPrimitiveJson<fhirInteger>(this.getSubunitElement(), 'subunit', jsonObj);
    }

    if (this.hasSequenceElement()) {
      setFhirPrimitiveJson<fhirString>(this.getSequenceElement(), 'sequence', jsonObj);
    }

    if (this.hasLengthElement()) {
      setFhirPrimitiveJson<fhirInteger>(this.getLengthElement(), 'length', jsonObj);
    }

    if (this.hasSequenceAttachment()) {
      setFhirComplexJson(this.getSequenceAttachment(), 'sequenceAttachment', jsonObj);
    }

    if (this.hasFivePrime()) {
      setFhirComplexJson(this.getFivePrime(), 'fivePrime', jsonObj);
    }

    if (this.hasThreePrime()) {
      setFhirComplexJson(this.getThreePrime(), 'threePrime', jsonObj);
    }

    if (this.hasLinkage()) {
      setFhirBackboneElementListJson(this.getLinkage(), 'linkage', jsonObj);
    }

    if (this.hasSugar()) {
      setFhirBackboneElementListJson(this.getSugar(), 'sugar', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * SubstanceNucleicAcidSubunitLinkageComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** The linkages between sugar residues will also be captured
 * - **Definition:** The linkages between sugar residues will also be captured.
 *
 * @category Data Models: Resource
 * @see [FHIR SubstanceNucleicAcid](http://hl7.org/fhir/StructureDefinition/SubstanceNucleicAcid)
 */
export class SubstanceNucleicAcidSubunitLinkageComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `SubstanceNucleicAcidSubunitLinkageComponent` JSON to instantiate the SubstanceNucleicAcidSubunitLinkageComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `SubstanceNucleicAcidSubunitLinkageComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to SubstanceNucleicAcidSubunitLinkageComponent
   * @returns SubstanceNucleicAcidSubunitLinkageComponent data model or undefined for `SubstanceNucleicAcidSubunitLinkageComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): SubstanceNucleicAcidSubunitLinkageComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'SubstanceNucleicAcidSubunitLinkageComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new SubstanceNucleicAcidSubunitLinkageComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'connectivity';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setConnectivityElement(datatype);
    }

    fieldName = 'identifier';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Identifier | undefined = Identifier.parse(classJsonObj[fieldName]!, sourceField);
      instance.setIdentifier(datatype);
    }

    fieldName = 'name';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setNameElement(datatype);
    }

    fieldName = 'residueSite';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setResidueSiteElement(datatype);
    }

    return instance;
  }

  /**
   * SubstanceNucleicAcid.subunit.linkage.connectivity Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The entity that links the sugar residues together should also be captured for nearly all naturally occurring nucleic acid the linkage is a phosphate group. For many synthetic oligonucleotides phosphorothioate linkages are often seen. Linkage connectivity is assumed to be 3\'-5\'. If the linkage is either 3\'-3\' or 5\'-5\' this should be specified
   * - **Definition:** The entity that links the sugar residues together should also be captured for nearly all naturally occurring nucleic acid the linkage is a phosphate group. For many synthetic oligonucleotides phosphorothioate linkages are often seen. Linkage connectivity is assumed to be 3\'-5\'. If the linkage is either 3\'-3\' or 5\'-5\' this should be specified.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private connectivity?: StringType | undefined;

  /**
   * SubstanceNucleicAcid.subunit.linkage.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Each linkage will be registered as a fragment and have an ID
   * - **Definition:** Each linkage will be registered as a fragment and have an ID.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier | undefined;

  /**
   * SubstanceNucleicAcid.subunit.linkage.name Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Each linkage will be registered as a fragment and have at least one name. A single name shall be assigned to each linkage
   * - **Definition:** Each linkage will be registered as a fragment and have at least one name. A single name shall be assigned to each linkage.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private name?: StringType | undefined;

  /**
   * SubstanceNucleicAcid.subunit.linkage.residueSite Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Residues shall be captured as described in 5.3.6.8.3
   * - **Definition:** Residues shall be captured as described in 5.3.6.8.3.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private residueSite?: StringType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `connectivity` property value as a StringType object if defined; else an empty StringType object
   */
  public getConnectivityElement(): StringType {
    return this.connectivity ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `connectivity` property.
   *
   * @param element - the `connectivity` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setConnectivityElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid SubstanceNucleicAcid.subunit.linkage.connectivity; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.connectivity = element;
    } else {
      this.connectivity = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `connectivity` property exists and has a value; `false` otherwise
   */
  public hasConnectivityElement(): boolean {
    return isDefined<StringType>(this.connectivity) && !this.connectivity.isEmpty();
  }

  /**
   * @returns the `connectivity` property value as a fhirString if defined; else undefined
   */
  public getConnectivity(): fhirString | undefined {
    return this.connectivity?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `connectivity` property.
   *
   * @param value - the `connectivity` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setConnectivity(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid SubstanceNucleicAcid.subunit.linkage.connectivity (${String(value)})`;
      this.connectivity = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.connectivity = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `connectivity` property exists and has a value; `false` otherwise
   */
  public hasConnectivity(): boolean {
    return this.hasConnectivityElement();
  }

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
      const optErrMsg = `Invalid SubstanceNucleicAcid.subunit.linkage.identifier; Provided element is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid SubstanceNucleicAcid.subunit.linkage.name; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid SubstanceNucleicAcid.subunit.linkage.name (${String(value)})`;
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
   * @returns the `residueSite` property value as a StringType object if defined; else an empty StringType object
   */
  public getResidueSiteElement(): StringType {
    return this.residueSite ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `residueSite` property.
   *
   * @param element - the `residueSite` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setResidueSiteElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid SubstanceNucleicAcid.subunit.linkage.residueSite; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.residueSite = element;
    } else {
      this.residueSite = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `residueSite` property exists and has a value; `false` otherwise
   */
  public hasResidueSiteElement(): boolean {
    return isDefined<StringType>(this.residueSite) && !this.residueSite.isEmpty();
  }

  /**
   * @returns the `residueSite` property value as a fhirString if defined; else undefined
   */
  public getResidueSite(): fhirString | undefined {
    return this.residueSite?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `residueSite` property.
   *
   * @param value - the `residueSite` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setResidueSite(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid SubstanceNucleicAcid.subunit.linkage.residueSite (${String(value)})`;
      this.residueSite = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.residueSite = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `residueSite` property exists and has a value; `false` otherwise
   */
  public hasResidueSite(): boolean {
    return this.hasResidueSiteElement();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'SubstanceNucleicAcid.subunit.linkage';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.connectivity,
      this.identifier,
      this.name,
      this.residueSite,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): SubstanceNucleicAcidSubunitLinkageComponent {
    const dest = new SubstanceNucleicAcidSubunitLinkageComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: SubstanceNucleicAcidSubunitLinkageComponent): void {
    super.copyValues(dest);
    dest.connectivity = this.connectivity?.copy();
    dest.identifier = this.identifier?.copy();
    dest.name = this.name?.copy();
    dest.residueSite = this.residueSite?.copy();
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

    if (this.hasConnectivityElement()) {
      setFhirPrimitiveJson<fhirString>(this.getConnectivityElement(), 'connectivity', jsonObj);
    }

    if (this.hasIdentifier()) {
      setFhirComplexJson(this.getIdentifier(), 'identifier', jsonObj);
    }

    if (this.hasNameElement()) {
      setFhirPrimitiveJson<fhirString>(this.getNameElement(), 'name', jsonObj);
    }

    if (this.hasResidueSiteElement()) {
      setFhirPrimitiveJson<fhirString>(this.getResidueSiteElement(), 'residueSite', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * SubstanceNucleicAcidSubunitSugarComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** 5.3.6.8.1 Sugar ID (Mandatory)
 * - **Definition:** 5.3.6.8.1 Sugar ID (Mandatory).
 *
 * @category Data Models: Resource
 * @see [FHIR SubstanceNucleicAcid](http://hl7.org/fhir/StructureDefinition/SubstanceNucleicAcid)
 */
export class SubstanceNucleicAcidSubunitSugarComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `SubstanceNucleicAcidSubunitSugarComponent` JSON to instantiate the SubstanceNucleicAcidSubunitSugarComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `SubstanceNucleicAcidSubunitSugarComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to SubstanceNucleicAcidSubunitSugarComponent
   * @returns SubstanceNucleicAcidSubunitSugarComponent data model or undefined for `SubstanceNucleicAcidSubunitSugarComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): SubstanceNucleicAcidSubunitSugarComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'SubstanceNucleicAcidSubunitSugarComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new SubstanceNucleicAcidSubunitSugarComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'identifier';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Identifier | undefined = Identifier.parse(classJsonObj[fieldName]!, sourceField);
      instance.setIdentifier(datatype);
    }

    fieldName = 'name';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setNameElement(datatype);
    }

    fieldName = 'residueSite';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setResidueSiteElement(datatype);
    }

    return instance;
  }

  /**
   * SubstanceNucleicAcid.subunit.sugar.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The Substance ID of the sugar or sugar-like component that make up the nucleotide
   * - **Definition:** The Substance ID of the sugar or sugar-like component that make up the nucleotide.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier | undefined;

  /**
   * SubstanceNucleicAcid.subunit.sugar.name Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The name of the sugar or sugar-like component that make up the nucleotide
   * - **Definition:** The name of the sugar or sugar-like component that make up the nucleotide.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private name?: StringType | undefined;

  /**
   * SubstanceNucleicAcid.subunit.sugar.residueSite Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The residues that contain a given sugar will be captured. The order of given residues will be captured in the 5\'-3\'direction consistent with the base sequences listed above
   * - **Definition:** The residues that contain a given sugar will be captured. The order of given residues will be captured in the 5\'-3\'direction consistent with the base sequences listed above.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private residueSite?: StringType | undefined;

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
      const optErrMsg = `Invalid SubstanceNucleicAcid.subunit.sugar.identifier; Provided element is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid SubstanceNucleicAcid.subunit.sugar.name; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid SubstanceNucleicAcid.subunit.sugar.name (${String(value)})`;
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
   * @returns the `residueSite` property value as a StringType object if defined; else an empty StringType object
   */
  public getResidueSiteElement(): StringType {
    return this.residueSite ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `residueSite` property.
   *
   * @param element - the `residueSite` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setResidueSiteElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid SubstanceNucleicAcid.subunit.sugar.residueSite; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.residueSite = element;
    } else {
      this.residueSite = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `residueSite` property exists and has a value; `false` otherwise
   */
  public hasResidueSiteElement(): boolean {
    return isDefined<StringType>(this.residueSite) && !this.residueSite.isEmpty();
  }

  /**
   * @returns the `residueSite` property value as a fhirString if defined; else undefined
   */
  public getResidueSite(): fhirString | undefined {
    return this.residueSite?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `residueSite` property.
   *
   * @param value - the `residueSite` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setResidueSite(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid SubstanceNucleicAcid.subunit.sugar.residueSite (${String(value)})`;
      this.residueSite = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.residueSite = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `residueSite` property exists and has a value; `false` otherwise
   */
  public hasResidueSite(): boolean {
    return this.hasResidueSiteElement();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'SubstanceNucleicAcid.subunit.sugar';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identifier,
      this.name,
      this.residueSite,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): SubstanceNucleicAcidSubunitSugarComponent {
    const dest = new SubstanceNucleicAcidSubunitSugarComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: SubstanceNucleicAcidSubunitSugarComponent): void {
    super.copyValues(dest);
    dest.identifier = this.identifier?.copy();
    dest.name = this.name?.copy();
    dest.residueSite = this.residueSite?.copy();
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
      setFhirComplexJson(this.getIdentifier(), 'identifier', jsonObj);
    }

    if (this.hasNameElement()) {
      setFhirPrimitiveJson<fhirString>(this.getNameElement(), 'name', jsonObj);
    }

    if (this.hasResidueSiteElement()) {
      setFhirPrimitiveJson<fhirString>(this.getResidueSiteElement(), 'residueSite', jsonObj);
    }

    return jsonObj;
  }
}
