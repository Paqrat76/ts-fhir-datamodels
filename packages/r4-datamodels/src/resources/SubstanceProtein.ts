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
 * SubstanceProtein Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/SubstanceProtein
 * StructureDefinition.name: SubstanceProtein
 * StructureDefinition.description: A SubstanceProtein is defined as a single unit of a linear amino acid sequence, or a combination of subunits that are either covalently linked or have a defined invariant stoichiometric relationship. This includes all synthetic, recombinant and purified SubstanceProteins of defined sequence, whether the use is therapeutic or prophylactic. This set of elements will be used to describe albumins, coagulation factors, cytokines, growth factors, peptide/SubstanceProtein hormones, enzymes, toxins, toxoids, recombinant vaccines, and immunomodulators.
 * StructureDefinition.fhirVersion: 4.0.1
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
  PrimitiveTypeJson,
  StringType,
  assertFhirType,
  assertFhirTypeList,
  copyListValues,
  fhirInteger,
  fhirIntegerSchema,
  fhirString,
  fhirStringSchema,
  getPrimitiveTypeJson,
  getPrimitiveTypeListJson,
  isDefined,
  isDefinedList,
  isElementEmpty,
  isEmpty,
  parseFhirPrimitiveData,
  setFhirBackboneElementListJson,
  setFhirComplexJson,
  setFhirPrimitiveJson,
  setFhirPrimitiveListJson,
} from '@paq-ts-fhir/fhir-core';
import { Attachment, CodeableConcept, Identifier, PARSABLE_DATATYPE_MAP } from '../complex-types/complex-datatypes';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';

/**
 * SubstanceProtein Class
 *
 * @remarks
 * A SubstanceProtein is defined as a single unit of a linear amino acid sequence, or a combination of subunits that are either covalently linked or have a defined invariant stoichiometric relationship. This includes all synthetic, recombinant and purified SubstanceProteins of defined sequence, whether the use is therapeutic or prophylactic. This set of elements will be used to describe albumins, coagulation factors, cytokines, growth factors, peptide/SubstanceProtein hormones, enzymes, toxins, toxoids, recombinant vaccines, and immunomodulators.
 *
 * **FHIR Specification**
 * - **Short:** A SubstanceProtein is defined as a single unit of a linear amino acid sequence, or a combination of subunits that are either covalently linked or have a defined invariant stoichiometric relationship. This includes all synthetic, recombinant and purified SubstanceProteins of defined sequence, whether the use is therapeutic or prophylactic. This set of elements will be used to describe albumins, coagulation factors, cytokines, growth factors, peptide/SubstanceProtein hormones, enzymes, toxins, toxoids, recombinant vaccines, and immunomodulators
 * - **Definition:** A SubstanceProtein is defined as a single unit of a linear amino acid sequence, or a combination of subunits that are either covalently linked or have a defined invariant stoichiometric relationship. This includes all synthetic, recombinant and purified SubstanceProteins of defined sequence, whether the use is therapeutic or prophylactic. This set of elements will be used to describe albumins, coagulation factors, cytokines, growth factors, peptide/SubstanceProtein hormones, enzymes, toxins, toxoids, recombinant vaccines, and immunomodulators.
 * - **FHIR Version:** 4.0.1
 *
 * @category Data Models: Resource
 * @see [FHIR SubstanceProtein](http://hl7.org/fhir/StructureDefinition/SubstanceProtein)
 */
export class SubstanceProtein extends DomainResource implements IDomainResource {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `SubstanceProtein` JSON to instantiate the SubstanceProtein data model.
   *
   * @param sourceJson - JSON representing FHIR `SubstanceProtein`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to SubstanceProtein
   * @returns SubstanceProtein data model or undefined for `SubstanceProtein`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): SubstanceProtein | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'SubstanceProtein';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new SubstanceProtein();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'SubstanceProtein');
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

    fieldName = 'disulfideLinkage';
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
          instance.addDisulfideLinkageElement(datatype);
        }
      });
    }

    fieldName = 'subunit';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: SubstanceProteinSubunitComponent | undefined = SubstanceProteinSubunitComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addSubunit(component);
        }
      });
    }

    return instance;
  }

  /**
   * SubstanceProtein.sequenceType Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The SubstanceProtein descriptive elements will only be used when a complete or partial amino acid sequence is available or derivable from a nucleic acid sequence
   * - **Definition:** The SubstanceProtein descriptive elements will only be used when a complete or partial amino acid sequence is available or derivable from a nucleic acid sequence.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private sequenceType?: CodeableConcept | undefined;

  /**
   * SubstanceProtein.numberOfSubunits Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Number of linear sequences of amino acids linked through peptide bonds. The number of subunits constituting the SubstanceProtein shall be described. It is possible that the number of subunits can be variable
   * - **Definition:** Number of linear sequences of amino acids linked through peptide bonds. The number of subunits constituting the SubstanceProtein shall be described. It is possible that the number of subunits can be variable.
   * - **FHIR Type:** `integer`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private numberOfSubunits?: IntegerType | undefined;

  /**
   * SubstanceProtein.disulfideLinkage Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The disulphide bond between two cysteine residues either on the same subunit or on two different subunits shall be described. The position of the disulfide bonds in the SubstanceProtein shall be listed in increasing order of subunit number and position within subunit followed by the abbreviation of the amino acids involved. The disulfide linkage positions shall actually contain the amino acid Cysteine at the respective positions
   * - **Definition:** The disulphide bond between two cysteine residues either on the same subunit or on two different subunits shall be described. The position of the disulfide bonds in the SubstanceProtein shall be listed in increasing order of subunit number and position within subunit followed by the abbreviation of the amino acids involved. The disulfide linkage positions shall actually contain the amino acid Cysteine at the respective positions.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private disulfideLinkage?: StringType[] | undefined;

  /**
   * SubstanceProtein.subunit Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** This subclause refers to the description of each subunit constituting the SubstanceProtein. A subunit is a linear sequence of amino acids linked through peptide bonds. The Subunit information shall be provided when the finished SubstanceProtein is a complex of multiple sequences; subunits are not used to delineate domains within a single sequence. Subunits are listed in order of decreasing length; sequences of the same length will be ordered by decreasing molecular weight; subunits that have identical sequences will be repeated multiple times
   * - **Definition:** This subclause refers to the description of each subunit constituting the SubstanceProtein. A subunit is a linear sequence of amino acids linked through peptide bonds. The Subunit information shall be provided when the finished SubstanceProtein is a complex of multiple sequences; subunits are not used to delineate domains within a single sequence. Subunits are listed in order of decreasing length; sequences of the same length will be ordered by decreasing molecular weight; subunits that have identical sequences will be repeated multiple times.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private subunit?: SubstanceProteinSubunitComponent[] | undefined;

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
      const optErrMsg = `Invalid SubstanceProtein.sequenceType; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid SubstanceProtein.numberOfSubunits; Provided element is not an instance of IntegerType.`;
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
      const optErrMsg = `Invalid SubstanceProtein.numberOfSubunits (${String(value)})`;
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
   * @returns the `disulfideLinkage` property value as a StringType array
   */
  public getDisulfideLinkageElement(): StringType[] {
    return this.disulfideLinkage ?? ([] as StringType[]);
  }

  /**
   * Assigns the provided StringType array value to the `disulfideLinkage` property.
   *
   * @param element - the `disulfideLinkage` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDisulfideLinkageElement(element: StringType[] | undefined): this {
    if (isDefinedList<StringType>(element)) {
      const optErrMsg = `Invalid SubstanceProtein.disulfideLinkage; Provided value array has an element that is not an instance of StringType.`;
      assertFhirTypeList<StringType>(element, StringType, optErrMsg);
      this.disulfideLinkage = element;
    } else {
      this.disulfideLinkage = undefined;
    }
    return this;
  }

  /**
   * Add the provided StringType value to the `disulfideLinkage` array property.
   *
   * @param element - the `disulfideLinkage` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addDisulfideLinkageElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid SubstanceProtein.disulfideLinkage; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.initDisulfideLinkage();
      this.disulfideLinkage?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `disulfideLinkage` property exists and has a value; `false` otherwise
   */
  public hasDisulfideLinkageElement(): boolean {
    return isDefinedList<StringType>(this.disulfideLinkage) && this.disulfideLinkage.some((item: StringType) => !item.isEmpty());
  }

  /**
   * @returns the `disulfideLinkage` property value as a fhirString array
   */
  public getDisulfideLinkage(): fhirString[] {
    this.initDisulfideLinkage();
    const disulfideLinkageValues = [] as fhirString[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.disulfideLinkage!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        disulfideLinkageValues.push(value);
      }
    }
    return disulfideLinkageValues;
  }

  /**
   * Assigns the provided primitive value array to the `disulfideLinkage` property.
   *
   * @param value - the `disulfideLinkage` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDisulfideLinkage(value: fhirString[] | undefined): this {
    if (isDefinedList<fhirString>(value)) {
      const disulfideLinkageElements = [] as StringType[];
      for (const disulfideLinkageValue of value) {
        const optErrMsg = `Invalid SubstanceProtein.disulfideLinkage array item (${String(disulfideLinkageValue)})`;
        const element = new StringType(parseFhirPrimitiveData(disulfideLinkageValue, fhirStringSchema, optErrMsg));
        disulfideLinkageElements.push(element);
      }
      this.disulfideLinkage = disulfideLinkageElements;
    } else {
      this.disulfideLinkage = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `disulfideLinkage` array property.
   *
   * @param value - the `disulfideLinkage` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addDisulfideLinkage(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid SubstanceProtein.disulfideLinkage array item (${String(value)})`;
      const element = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
      this.initDisulfideLinkage();
      this.addDisulfideLinkageElement(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `disulfideLinkage` property exists and has a value; `false` otherwise
   */
  public hasDisulfideLinkage(): boolean {
    return this.hasDisulfideLinkageElement();
  }

  /**
   * Initialize the `disulfideLinkage` property
   */
  private initDisulfideLinkage(): void {
    if (!this.hasDisulfideLinkage()) {
      this.disulfideLinkage = [] as StringType[];
    }
  }

  /**
   * @returns the `subunit` property value as a SubstanceProteinSubunitComponent array
   */
  public getSubunit(): SubstanceProteinSubunitComponent[] {
    return this.subunit ?? ([] as SubstanceProteinSubunitComponent[]);
  }

  /**
   * Assigns the provided SubstanceProteinSubunitComponent array value to the `subunit` property.
   *
   * @param value - the `subunit` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSubunit(value: SubstanceProteinSubunitComponent[] | undefined): this {
    if (isDefinedList<SubstanceProteinSubunitComponent>(value)) {
      const optErrMsg = `Invalid SubstanceProtein.subunit; Provided value array has an element that is not an instance of SubstanceProteinSubunitComponent.`;
      assertFhirTypeList<SubstanceProteinSubunitComponent>(value, SubstanceProteinSubunitComponent, optErrMsg);
      this.subunit = value;
    } else {
      this.subunit = undefined;
    }
    return this;
  }

  /**
   * Add the provided SubstanceProteinSubunitComponent value to the `subunit` array property.
   *
   * @param value - the `subunit` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addSubunit(value: SubstanceProteinSubunitComponent | undefined): this {
    if (isDefined<SubstanceProteinSubunitComponent>(value)) {
      const optErrMsg = `Invalid SubstanceProtein.subunit; Provided element is not an instance of SubstanceProteinSubunitComponent.`;
      assertFhirType<SubstanceProteinSubunitComponent>(value, SubstanceProteinSubunitComponent, optErrMsg);
      this.initSubunit();
      this.subunit?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `subunit` property exists and has a value; `false` otherwise
   */
  public hasSubunit(): boolean {
    return isDefinedList<SubstanceProteinSubunitComponent>(this.subunit) && this.subunit.some((item: SubstanceProteinSubunitComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `subunit` property
   */
  private initSubunit(): void {
    if(!this.hasSubunit()) {
      this.subunit = [] as SubstanceProteinSubunitComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'SubstanceProtein';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.sequenceType,
      this.numberOfSubunits,
      this.disulfideLinkage,
      this.subunit,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): SubstanceProtein {
    const dest = new SubstanceProtein();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: SubstanceProtein): void {
    super.copyValues(dest);
    dest.sequenceType = this.sequenceType?.copy();
    dest.numberOfSubunits = this.numberOfSubunits?.copy();
    const disulfideLinkageList = copyListValues<StringType>(this.disulfideLinkage);
    dest.disulfideLinkage = disulfideLinkageList.length === 0 ? undefined : disulfideLinkageList;
    const subunitList = copyListValues<SubstanceProteinSubunitComponent>(this.subunit);
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

    if (this.hasDisulfideLinkage()) {
      setFhirPrimitiveListJson(this.getDisulfideLinkageElement(), 'disulfideLinkage', jsonObj);
    }

    if (this.hasSubunit()) {
      setFhirBackboneElementListJson(this.getSubunit(), 'subunit', jsonObj);
    }

    return jsonObj;
  }
}

/**
 * SubstanceProteinSubunitComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** This subclause refers to the description of each subunit constituting the SubstanceProtein. A subunit is a linear sequence of amino acids linked through peptide bonds. The Subunit information shall be provided when the finished SubstanceProtein is a complex of multiple sequences; subunits are not used to delineate domains within a single sequence. Subunits are listed in order of decreasing length; sequences of the same length will be ordered by decreasing molecular weight; subunits that have identical sequences will be repeated multiple times
 * - **Definition:** This subclause refers to the description of each subunit constituting the SubstanceProtein. A subunit is a linear sequence of amino acids linked through peptide bonds. The Subunit information shall be provided when the finished SubstanceProtein is a complex of multiple sequences; subunits are not used to delineate domains within a single sequence. Subunits are listed in order of decreasing length; sequences of the same length will be ordered by decreasing molecular weight; subunits that have identical sequences will be repeated multiple times.
 *
 * @category Data Models: Resource
 * @see [FHIR SubstanceProtein](http://hl7.org/fhir/StructureDefinition/SubstanceProtein)
 */
export class SubstanceProteinSubunitComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `SubstanceProteinSubunitComponent` JSON to instantiate the SubstanceProteinSubunitComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `SubstanceProteinSubunitComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to SubstanceProteinSubunitComponent
   * @returns SubstanceProteinSubunitComponent data model or undefined for `SubstanceProteinSubunitComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): SubstanceProteinSubunitComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'SubstanceProteinSubunitComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new SubstanceProteinSubunitComponent();

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

    fieldName = 'nTerminalModificationId';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Identifier | undefined = Identifier.parse(classJsonObj[fieldName]!, sourceField);
      instance.setNTerminalModificationId(datatype);
    }

    fieldName = 'nTerminalModification';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setNTerminalModificationElement(datatype);
    }

    fieldName = 'cTerminalModificationId';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Identifier | undefined = Identifier.parse(classJsonObj[fieldName]!, sourceField);
      instance.setCTerminalModificationId(datatype);
    }

    fieldName = 'cTerminalModification';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setCTerminalModificationElement(datatype);
    }

    return instance;
  }

  /**
   * SubstanceProtein.subunit.subunit Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Index of primary sequences of amino acids linked through peptide bonds in order of decreasing length. Sequences of the same length will be ordered by molecular weight. Subunits that have identical sequences will be repeated and have sequential subscripts
   * - **Definition:** Index of primary sequences of amino acids linked through peptide bonds in order of decreasing length. Sequences of the same length will be ordered by molecular weight. Subunits that have identical sequences will be repeated and have sequential subscripts.
   * - **FHIR Type:** `integer`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private subunit?: IntegerType | undefined;

  /**
   * SubstanceProtein.subunit.sequence Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The sequence information shall be provided enumerating the amino acids from N- to C-terminal end using standard single-letter amino acid codes. Uppercase shall be used for L-amino acids and lowercase for D-amino acids. Transcribed SubstanceProteins will always be described using the translated sequence; for synthetic peptide containing amino acids that are not represented with a single letter code an X should be used within the sequence. The modified amino acids will be distinguished by their position in the sequence
   * - **Definition:** The sequence information shall be provided enumerating the amino acids from N- to C-terminal end using standard single-letter amino acid codes. Uppercase shall be used for L-amino acids and lowercase for D-amino acids. Transcribed SubstanceProteins will always be described using the translated sequence; for synthetic peptide containing amino acids that are not represented with a single letter code an X should be used within the sequence. The modified amino acids will be distinguished by their position in the sequence.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private sequence?: StringType | undefined;

  /**
   * SubstanceProtein.subunit.length Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Length of linear sequences of amino acids contained in the subunit
   * - **Definition:** Length of linear sequences of amino acids contained in the subunit.
   * - **FHIR Type:** `integer`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private length?: IntegerType | undefined;

  /**
   * SubstanceProtein.subunit.sequenceAttachment Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The sequence information shall be provided enumerating the amino acids from N- to C-terminal end using standard single-letter amino acid codes. Uppercase shall be used for L-amino acids and lowercase for D-amino acids. Transcribed SubstanceProteins will always be described using the translated sequence; for synthetic peptide containing amino acids that are not represented with a single letter code an X should be used within the sequence. The modified amino acids will be distinguished by their position in the sequence
   * - **Definition:** The sequence information shall be provided enumerating the amino acids from N- to C-terminal end using standard single-letter amino acid codes. Uppercase shall be used for L-amino acids and lowercase for D-amino acids. Transcribed SubstanceProteins will always be described using the translated sequence; for synthetic peptide containing amino acids that are not represented with a single letter code an X should be used within the sequence. The modified amino acids will be distinguished by their position in the sequence.
   * - **FHIR Type:** `Attachment`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private sequenceAttachment?: Attachment | undefined;

  /**
   * SubstanceProtein.subunit.nTerminalModificationId Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Unique identifier for molecular fragment modification based on the ISO 11238 Substance ID
   * - **Definition:** Unique identifier for molecular fragment modification based on the ISO 11238 Substance ID.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private nTerminalModificationId?: Identifier | undefined;

  /**
   * SubstanceProtein.subunit.nTerminalModification Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The name of the fragment modified at the N-terminal of the SubstanceProtein shall be specified
   * - **Definition:** The name of the fragment modified at the N-terminal of the SubstanceProtein shall be specified.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private nTerminalModification?: StringType | undefined;

  /**
   * SubstanceProtein.subunit.cTerminalModificationId Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Unique identifier for molecular fragment modification based on the ISO 11238 Substance ID
   * - **Definition:** Unique identifier for molecular fragment modification based on the ISO 11238 Substance ID.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private cTerminalModificationId?: Identifier | undefined;

  /**
   * SubstanceProtein.subunit.cTerminalModification Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The modification at the C-terminal shall be specified
   * - **Definition:** The modification at the C-terminal shall be specified.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private cTerminalModification?: StringType | undefined;

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
      const optErrMsg = `Invalid SubstanceProtein.subunit.subunit; Provided element is not an instance of IntegerType.`;
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
      const optErrMsg = `Invalid SubstanceProtein.subunit.subunit (${String(value)})`;
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
      const optErrMsg = `Invalid SubstanceProtein.subunit.sequence; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid SubstanceProtein.subunit.sequence (${String(value)})`;
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
      const optErrMsg = `Invalid SubstanceProtein.subunit.length; Provided element is not an instance of IntegerType.`;
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
      const optErrMsg = `Invalid SubstanceProtein.subunit.length (${String(value)})`;
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
      const optErrMsg = `Invalid SubstanceProtein.subunit.sequenceAttachment; Provided element is not an instance of Attachment.`;
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
   * @returns the `nTerminalModificationId` property value as a Identifier object if defined; else an empty Identifier object
   */
  public getNTerminalModificationId(): Identifier {
    return this.nTerminalModificationId ?? new Identifier();
  }

  /**
   * Assigns the provided NTerminalModificationId object value to the `nTerminalModificationId` property.
   *
   * @param value - the `nTerminalModificationId` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setNTerminalModificationId(value: Identifier | undefined): this {
    if (isDefined<Identifier>(value)) {
      const optErrMsg = `Invalid SubstanceProtein.subunit.nTerminalModificationId; Provided element is not an instance of Identifier.`;
      assertFhirType<Identifier>(value, Identifier, optErrMsg);
      this.nTerminalModificationId = value;
    } else {
      this.nTerminalModificationId = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `nTerminalModificationId` property exists and has a value; `false` otherwise
   */
  public hasNTerminalModificationId(): boolean {
    return isDefined<Identifier>(this.nTerminalModificationId) && !this.nTerminalModificationId.isEmpty();
  }

  /**
   * @returns the `nTerminalModification` property value as a StringType object if defined; else an empty StringType object
   */
  public getNTerminalModificationElement(): StringType {
    return this.nTerminalModification ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `nTerminalModification` property.
   *
   * @param element - the `nTerminalModification` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setNTerminalModificationElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid SubstanceProtein.subunit.nTerminalModification; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.nTerminalModification = element;
    } else {
      this.nTerminalModification = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `nTerminalModification` property exists and has a value; `false` otherwise
   */
  public hasNTerminalModificationElement(): boolean {
    return isDefined<StringType>(this.nTerminalModification) && !this.nTerminalModification.isEmpty();
  }

  /**
   * @returns the `nTerminalModification` property value as a fhirString if defined; else undefined
   */
  public getNTerminalModification(): fhirString | undefined {
    return this.nTerminalModification?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `nTerminalModification` property.
   *
   * @param value - the `nTerminalModification` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setNTerminalModification(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid SubstanceProtein.subunit.nTerminalModification (${String(value)})`;
      this.nTerminalModification = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.nTerminalModification = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `nTerminalModification` property exists and has a value; `false` otherwise
   */
  public hasNTerminalModification(): boolean {
    return this.hasNTerminalModificationElement();
  }

  /**
   * @returns the `cTerminalModificationId` property value as a Identifier object if defined; else an empty Identifier object
   */
  public getCTerminalModificationId(): Identifier {
    return this.cTerminalModificationId ?? new Identifier();
  }

  /**
   * Assigns the provided CTerminalModificationId object value to the `cTerminalModificationId` property.
   *
   * @param value - the `cTerminalModificationId` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCTerminalModificationId(value: Identifier | undefined): this {
    if (isDefined<Identifier>(value)) {
      const optErrMsg = `Invalid SubstanceProtein.subunit.cTerminalModificationId; Provided element is not an instance of Identifier.`;
      assertFhirType<Identifier>(value, Identifier, optErrMsg);
      this.cTerminalModificationId = value;
    } else {
      this.cTerminalModificationId = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `cTerminalModificationId` property exists and has a value; `false` otherwise
   */
  public hasCTerminalModificationId(): boolean {
    return isDefined<Identifier>(this.cTerminalModificationId) && !this.cTerminalModificationId.isEmpty();
  }

  /**
   * @returns the `cTerminalModification` property value as a StringType object if defined; else an empty StringType object
   */
  public getCTerminalModificationElement(): StringType {
    return this.cTerminalModification ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `cTerminalModification` property.
   *
   * @param element - the `cTerminalModification` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCTerminalModificationElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid SubstanceProtein.subunit.cTerminalModification; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.cTerminalModification = element;
    } else {
      this.cTerminalModification = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `cTerminalModification` property exists and has a value; `false` otherwise
   */
  public hasCTerminalModificationElement(): boolean {
    return isDefined<StringType>(this.cTerminalModification) && !this.cTerminalModification.isEmpty();
  }

  /**
   * @returns the `cTerminalModification` property value as a fhirString if defined; else undefined
   */
  public getCTerminalModification(): fhirString | undefined {
    return this.cTerminalModification?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `cTerminalModification` property.
   *
   * @param value - the `cTerminalModification` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCTerminalModification(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid SubstanceProtein.subunit.cTerminalModification (${String(value)})`;
      this.cTerminalModification = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.cTerminalModification = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `cTerminalModification` property exists and has a value; `false` otherwise
   */
  public hasCTerminalModification(): boolean {
    return this.hasCTerminalModificationElement();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'SubstanceProtein.subunit';
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
      this.nTerminalModificationId,
      this.nTerminalModification,
      this.cTerminalModificationId,
      this.cTerminalModification,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): SubstanceProteinSubunitComponent {
    const dest = new SubstanceProteinSubunitComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: SubstanceProteinSubunitComponent): void {
    super.copyValues(dest);
    dest.subunit = this.subunit?.copy();
    dest.sequence = this.sequence?.copy();
    dest.length = this.length?.copy();
    dest.sequenceAttachment = this.sequenceAttachment?.copy();
    dest.nTerminalModificationId = this.nTerminalModificationId?.copy();
    dest.nTerminalModification = this.nTerminalModification?.copy();
    dest.cTerminalModificationId = this.cTerminalModificationId?.copy();
    dest.cTerminalModification = this.cTerminalModification?.copy();
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

    if (this.hasNTerminalModificationId()) {
      setFhirComplexJson(this.getNTerminalModificationId(), 'nTerminalModificationId', jsonObj);
    }

    if (this.hasNTerminalModificationElement()) {
      setFhirPrimitiveJson<fhirString>(this.getNTerminalModificationElement(), 'nTerminalModification', jsonObj);
    }

    if (this.hasCTerminalModificationId()) {
      setFhirComplexJson(this.getCTerminalModificationId(), 'cTerminalModificationId', jsonObj);
    }

    if (this.hasCTerminalModificationElement()) {
      setFhirPrimitiveJson<fhirString>(this.getCTerminalModificationElement(), 'cTerminalModification', jsonObj);
    }

    return jsonObj;
  }
}
