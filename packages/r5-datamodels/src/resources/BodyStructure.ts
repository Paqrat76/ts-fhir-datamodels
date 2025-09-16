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
 * BodyStructure Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/BodyStructure
 * StructureDefinition.name: BodyStructure
 * StructureDefinition.description: Record details about an anatomical structure.  This resource may be used when a coded concept does not provide the necessary detail needed for the use case.
 * StructureDefinition.fhirVersion: 5.0.0
 *
 * For questions, suggestions, or bugs, please open an issue at [GitHub ts-fhir-datamodels/issues](https://github.com/Paqrat76/ts-fhir-datamodels/issues).
 *
 * @packageDocumentation
 */

import {
  BackboneElement,
  BooleanType,
  DomainResource,
  FhirParser,
  IBackboneElement,
  IDomainResource,
  JSON,
  MarkdownType,
  ReferenceTargets,
  assertFhirType,
  assertFhirTypeList,
  copyListValues,
  fhirBoolean,
  fhirBooleanSchema,
  fhirMarkdown,
  fhirMarkdownSchema,
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
import { Attachment, CodeableConcept, CodeableReference, Identifier, PARSABLE_DATATYPE_MAP, Quantity, Reference } from '../complex-types/complex-datatypes';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';

/**
 * BodyStructure Class
 *
 * @remarks
 * Record details about an anatomical structure.  This resource may be used when a coded concept does not provide the necessary detail needed for the use case.
 *
 * **FHIR Specification**
 * - **Short:** Specific and identified anatomical structure
 * - **Definition:** Record details about an anatomical structure.  This resource may be used when a coded concept does not provide the necessary detail needed for the use case.
 * - **FHIR Version:** 5.0.0
 *
 * @category Data Models: Resource
 * @see [FHIR BodyStructure](http://hl7.org/fhir/StructureDefinition/BodyStructure)
 */
export class BodyStructure extends DomainResource implements IDomainResource {
  constructor(includedStructure: BodyStructureIncludedStructureComponent[] | null = null, patient: Reference | null = null) {
    super();

    this.includedStructure = null;
    if (isDefinedList<BodyStructureIncludedStructureComponent>(includedStructure)) {
      this.setIncludedStructure(includedStructure);
    }

    this.patient = null;
    if (isDefined<Reference>(patient)) {
      this.setPatient(patient);
    }
  }

  /**
   * Parse the provided `BodyStructure` JSON to instantiate the BodyStructure data model.
   *
   * @param sourceJson - JSON representing FHIR `BodyStructure`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to BodyStructure
   * @returns BodyStructure data model or undefined for `BodyStructure`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): BodyStructure | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'BodyStructure';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new BodyStructure();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'BodyStructure');
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

    fieldName = 'active';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setActiveElement(datatype);
    }

    fieldName = 'morphology';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setMorphology(datatype);
    }

    fieldName = 'includedStructure';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] === null) {
        instance.setIncludedStructure(null);
      } else {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: BodyStructureIncludedStructureComponent | undefined = BodyStructureIncludedStructureComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component === undefined) {
            instance.setIncludedStructure(null);
          } else {
            instance.addIncludedStructure(component);
          }
        });
      }
    } else {
      instance.setIncludedStructure(null);
    }

    fieldName = 'excludedStructure';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: BodyStructureIncludedStructureComponent | undefined = BodyStructureIncludedStructureComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addExcludedStructure(component);
          }
        });
      }
    }

    fieldName = 'description';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: MarkdownType | undefined = fhirParser.parseMarkdownType(dtJson, dtSiblingJson);
      instance.setDescriptionElement(datatype);
    }

    fieldName = 'image';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Attachment | undefined = Attachment.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addImage(datatype);
          }
        });
      }
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

    return instance;
  }

  /**
   * BodyStructure.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Bodystructure identifier
   * - **Definition:** Identifier for this instance of the anatomical structure.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier[] | undefined;

  /**
   * BodyStructure.active Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Whether this record is in active use
   * - **Definition:** Whether this body site is in active use.
   * - **Comment:** This element is labeled as a modifier because it may be used to mark that the resource was created in error.
   * - **Requirements:** Need to be able to mark a body site entry as not to be used because it was created in error.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** true
   * - **isModifierReason:** This element is labelled as a modifier because it is a status element that can indicate that a record should not be treated as valid
   * - **isSummary:** true
   */
  private active?: BooleanType | undefined;

  /**
   * BodyStructure.morphology Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Kind of Structure
   * - **Definition:** The kind of structure being represented by the body structure at `BodyStructure.location`.  This can define both normal and abnormal morphologies.
   * - **Comment:** The minimum cardinality of 0 supports the use case of specifying a location without defining a morphology.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private morphology?: CodeableConcept | undefined;

  /**
   * BodyStructure.includedStructure Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Included anatomic location(s)
   * - **Definition:** The anatomical location(s) or region(s) of the specimen, lesion, or body structure.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 1..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private includedStructure: BodyStructureIncludedStructureComponent[] | null;

  /**
   * BodyStructure.excludedStructure Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Excluded anatomic locations(s)
   * - **Definition:** The anatomical location(s) or region(s) not occupied or represented by the specimen, lesion, or body structure.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private excludedStructure?: BodyStructureIncludedStructureComponent[] | undefined;

  /**
   * BodyStructure.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Text description
   * - **Definition:** A summary, characterization or explanation of the body structure.
   * - **Comment:** This description could include any visual markings used to orientate the viewer e.g. external reference points, special sutures, ink markings.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private description?: MarkdownType | undefined;

  /**
   * BodyStructure.image Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Attached images
   * - **Definition:** Image or images used to identify a location.
   * - **FHIR Type:** `Attachment`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private image?: Attachment[] | undefined;

  /**
   * BodyStructure.patient Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who this is about
   * - **Definition:** The person to which the body site belongs.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *     ]
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private patient: Reference | null;

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
      const optErrMsg = `Invalid BodyStructure.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid BodyStructure.identifier; Provided element is not an instance of Identifier.`;
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
   * @returns the `active` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getActiveElement(): BooleanType {
    return this.active ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `active` property.
   *
   * @param element - the `active` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setActiveElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid BodyStructure.active; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.active = element;
    } else {
      this.active = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `active` property exists and has a value; `false` otherwise
   */
  public hasActiveElement(): boolean {
    return isDefined<BooleanType>(this.active) && !this.active.isEmpty();
  }

  /**
   * @returns the `active` property value as a fhirBoolean if defined; else undefined
   */
  public getActive(): fhirBoolean | undefined {
    return this.active?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `active` property.
   *
   * @param value - the `active` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setActive(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid BodyStructure.active (${String(value)})`;
      this.active = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.active = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `active` property exists and has a value; `false` otherwise
   */
  public hasActive(): boolean {
    return this.hasActiveElement();
  }

  /**
   * @returns the `morphology` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getMorphology(): CodeableConcept {
    return this.morphology ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Morphology object value to the `morphology` property.
   *
   * @param value - the `morphology` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setMorphology(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid BodyStructure.morphology; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.morphology = value;
    } else {
      this.morphology = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `morphology` property exists and has a value; `false` otherwise
   */
  public hasMorphology(): boolean {
    return isDefined<CodeableConcept>(this.morphology) && !this.morphology.isEmpty();
  }

  /**
   * @returns the `includedStructure` property value as a BodyStructureIncludedStructureComponent array
   */
  public getIncludedStructure(): BodyStructureIncludedStructureComponent[] {
    return this.includedStructure ?? ([] as BodyStructureIncludedStructureComponent[]);
  }

  /**
   * Assigns the provided BodyStructureIncludedStructureComponent array value to the `includedStructure` property.
   *
   * @param value - the `includedStructure` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setIncludedStructure(value: BodyStructureIncludedStructureComponent[] | undefined | null): this {
    if (isDefinedList<BodyStructureIncludedStructureComponent>(value)) {
      const optErrMsg = `Invalid BodyStructure.includedStructure; Provided value array has an element that is not an instance of BodyStructureIncludedStructureComponent.`;
      assertFhirTypeList<BodyStructureIncludedStructureComponent>(value, BodyStructureIncludedStructureComponent, optErrMsg);
      this.includedStructure = value;
    } else {
      this.includedStructure = null;
    }
    return this;
  }

  /**
   * Add the provided BodyStructureIncludedStructureComponent value to the `includedStructure` array property.
   *
   * @param value - the `includedStructure` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addIncludedStructure(value: BodyStructureIncludedStructureComponent | undefined): this {
    if (isDefined<BodyStructureIncludedStructureComponent>(value)) {
      const optErrMsg = `Invalid BodyStructure.includedStructure; Provided element is not an instance of BodyStructureIncludedStructureComponent.`;
      assertFhirType<BodyStructureIncludedStructureComponent>(value, BodyStructureIncludedStructureComponent, optErrMsg);
      this.initIncludedStructure();
      this.includedStructure?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `includedStructure` property exists and has a value; `false` otherwise
   */
  public hasIncludedStructure(): boolean {
    return isDefinedList<BodyStructureIncludedStructureComponent>(this.includedStructure) && this.includedStructure.some((item: BodyStructureIncludedStructureComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `includedStructure` property
   */
  private initIncludedStructure(): void {
    if(!this.hasIncludedStructure()) {
      this.includedStructure = [] as BodyStructureIncludedStructureComponent[];
    }
  }

  /**
   * @returns the `excludedStructure` property value as a BodyStructureIncludedStructureComponent array
   */
  public getExcludedStructure(): BodyStructureIncludedStructureComponent[] {
    return this.excludedStructure ?? ([] as BodyStructureIncludedStructureComponent[]);
  }

  /**
   * Assigns the provided BodyStructureIncludedStructureComponent array value to the `excludedStructure` property.
   *
   * @param value - the `excludedStructure` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setExcludedStructure(value: BodyStructureIncludedStructureComponent[] | undefined): this {
    if (isDefinedList<BodyStructureIncludedStructureComponent>(value)) {
      const optErrMsg = `Invalid BodyStructure.excludedStructure; Provided value array has an element that is not an instance of BodyStructureIncludedStructureComponent.`;
      assertFhirTypeList<BodyStructureIncludedStructureComponent>(value, BodyStructureIncludedStructureComponent, optErrMsg);
      this.excludedStructure = value;
    } else {
      this.excludedStructure = undefined;
    }
    return this;
  }

  /**
   * Add the provided BodyStructureIncludedStructureComponent value to the `excludedStructure` array property.
   *
   * @param value - the `excludedStructure` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addExcludedStructure(value: BodyStructureIncludedStructureComponent | undefined): this {
    if (isDefined<BodyStructureIncludedStructureComponent>(value)) {
      const optErrMsg = `Invalid BodyStructure.excludedStructure; Provided element is not an instance of BodyStructureIncludedStructureComponent.`;
      assertFhirType<BodyStructureIncludedStructureComponent>(value, BodyStructureIncludedStructureComponent, optErrMsg);
      this.initExcludedStructure();
      this.excludedStructure?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `excludedStructure` property exists and has a value; `false` otherwise
   */
  public hasExcludedStructure(): boolean {
    return isDefinedList<BodyStructureIncludedStructureComponent>(this.excludedStructure) && this.excludedStructure.some((item: BodyStructureIncludedStructureComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `excludedStructure` property
   */
  private initExcludedStructure(): void {
    if(!this.hasExcludedStructure()) {
      this.excludedStructure = [] as BodyStructureIncludedStructureComponent[];
    }
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
      const optErrMsg = `Invalid BodyStructure.description; Provided element is not an instance of MarkdownType.`;
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
      const optErrMsg = `Invalid BodyStructure.description (${String(value)})`;
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
   * @returns the `image` property value as a Attachment array
   */
  public getImage(): Attachment[] {
    return this.image ?? ([] as Attachment[]);
  }

  /**
   * Assigns the provided Attachment array value to the `image` property.
   *
   * @param value - the `image` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setImage(value: Attachment[] | undefined): this {
    if (isDefinedList<Attachment>(value)) {
      const optErrMsg = `Invalid BodyStructure.image; Provided value array has an element that is not an instance of Attachment.`;
      assertFhirTypeList<Attachment>(value, Attachment, optErrMsg);
      this.image = value;
    } else {
      this.image = undefined;
    }
    return this;
  }

  /**
   * Add the provided Attachment value to the `image` array property.
   *
   * @param value - the `image` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addImage(value: Attachment | undefined): this {
    if (isDefined<Attachment>(value)) {
      const optErrMsg = `Invalid BodyStructure.image; Provided element is not an instance of Attachment.`;
      assertFhirType<Attachment>(value, Attachment, optErrMsg);
      this.initImage();
      this.image?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `image` property exists and has a value; `false` otherwise
   */
  public hasImage(): boolean {
    return isDefinedList<Attachment>(this.image) && this.image.some((item: Attachment) => !item.isEmpty());
  }

  /**
   * Initialize the `image` property
   */
  private initImage(): void {
    if(!this.hasImage()) {
      this.image = [] as Attachment[];
    }
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
   * @decorator `@ReferenceTargets('BodyStructure.patient', ['Patient',])`
   *
   * @param value - the `patient` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('BodyStructure.patient', [
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

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'BodyStructure';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identifier,
      this.active,
      this.morphology,
      this.includedStructure,
      this.excludedStructure,
      this.description,
      this.image,
      this.patient,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.patient, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): BodyStructure {
    const dest = new BodyStructure();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: BodyStructure): void {
    super.copyValues(dest);
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    dest.active = this.active?.copy();
    dest.morphology = this.morphology?.copy();
    const includedStructureList = copyListValues<BodyStructureIncludedStructureComponent>(this.includedStructure);
    dest.includedStructure = includedStructureList.length === 0 ? null : includedStructureList;
    const excludedStructureList = copyListValues<BodyStructureIncludedStructureComponent>(this.excludedStructure);
    dest.excludedStructure = excludedStructureList.length === 0 ? undefined : excludedStructureList;
    dest.description = this.description?.copy();
    const imageList = copyListValues<Attachment>(this.image);
    dest.image = imageList.length === 0 ? undefined : imageList;
    dest.patient = this.patient ? this.patient.copy() : null;
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

    if (this.hasActiveElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getActiveElement(), 'active', jsonObj);
    }

    if (this.hasMorphology()) {
      setFhirComplexJson(this.getMorphology(), 'morphology', jsonObj);
    }

    if (this.hasIncludedStructure()) {
      setFhirBackboneElementListJson(this.getIncludedStructure(), 'includedStructure', jsonObj);
    }

    if (this.hasExcludedStructure()) {
      setFhirBackboneElementListJson(this.getExcludedStructure(), 'excludedStructure', jsonObj);
    }

    if (this.hasDescriptionElement()) {
      setFhirPrimitiveJson<fhirMarkdown>(this.getDescriptionElement(), 'description', jsonObj);
    }

    if (this.hasImage()) {
      setFhirComplexListJson(this.getImage(), 'image', jsonObj);
    }

    if (this.hasPatient()) {
      setFhirComplexJson(this.getPatient(), 'patient', jsonObj);
    }

    return jsonObj;
  }
}

/**
 * BodyStructureIncludedStructureComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Included anatomic location(s)
 * - **Definition:** The anatomical location(s) or region(s) of the specimen, lesion, or body structure.
 *
 * @category Data Models: Resource
 * @see [FHIR BodyStructure](http://hl7.org/fhir/StructureDefinition/BodyStructure)
 */
export class BodyStructureIncludedStructureComponent extends BackboneElement implements IBackboneElement {
  constructor(structure: CodeableConcept | null = null) {
    super();

    this.structure = null;
    if (isDefined<CodeableConcept>(structure)) {
      this.setStructure(structure);
    }
  }

  /**
   * Parse the provided `BodyStructureIncludedStructureComponent` JSON to instantiate the BodyStructureIncludedStructureComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `BodyStructureIncludedStructureComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to BodyStructureIncludedStructureComponent
   * @returns BodyStructureIncludedStructureComponent data model or undefined for `BodyStructureIncludedStructureComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): BodyStructureIncludedStructureComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'BodyStructureIncludedStructureComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new BodyStructureIncludedStructureComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    fieldName = 'structure';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setStructure(null);
      } else {
        instance.setStructure(datatype);
      }
    } else {
      instance.setStructure(null);
    }

    fieldName = 'laterality';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setLaterality(datatype);
    }

    fieldName = 'bodyLandmarkOrientation';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: BodyStructureIncludedStructureBodyLandmarkOrientationComponent | undefined = BodyStructureIncludedStructureBodyLandmarkOrientationComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addBodyLandmarkOrientation(component);
          }
        });
      }
    }

    fieldName = 'spatialReference';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addSpatialReference(datatype);
          }
        });
      }
  }

    fieldName = 'qualifier';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addQualifier(datatype);
          }
        });
      }
    }

    return instance;
  }

  /**
   * BodyStructure.includedStructure.structure Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Code that represents the included structure
   * - **Definition:** Code that represents the included structure.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private structure: CodeableConcept | null;

  /**
   * BodyStructure.includedStructure.laterality Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Code that represents the included structure laterality
   * - **Definition:** Code that represents the included structure laterality.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private laterality?: CodeableConcept | undefined;

  /**
   * BodyStructure.includedStructure.bodyLandmarkOrientation Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Landmark relative location
   * - **Definition:** Body locations in relation to a specific body landmark (tatoo, scar, other body structure).
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private bodyLandmarkOrientation?: BodyStructureIncludedStructureBodyLandmarkOrientationComponent[] | undefined;

  /**
   * BodyStructure.includedStructure.spatialReference Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Cartesian reference for structure
   * - **Definition:** XY or XYZ-coordinate orientation for structure.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/ImagingSelection',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private spatialReference?: Reference[] | undefined;

  /**
   * BodyStructure.includedStructure.qualifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Code that represents the included structure qualifier
   * - **Definition:** Code that represents the included structure qualifier.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private qualifier?: CodeableConcept[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `structure` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getStructure(): CodeableConcept {
    return this.structure ?? new CodeableConcept();
  }

  /**
   * Assigns the provided CodeableConcept object value to the `structure` property.
   *
   * @param value - the `structure` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setStructure(value: CodeableConcept | undefined | null): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid BodyStructure.includedStructure.structure; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.structure = value;
    } else {
      this.structure = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `structure` property exists and has a value; `false` otherwise
   */
  public hasStructure(): boolean {
    return isDefined<CodeableConcept>(this.structure) && !this.structure.isEmpty();
  }

  /**
   * @returns the `laterality` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getLaterality(): CodeableConcept {
    return this.laterality ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Laterality object value to the `laterality` property.
   *
   * @param value - the `laterality` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setLaterality(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid BodyStructure.includedStructure.laterality; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.laterality = value;
    } else {
      this.laterality = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `laterality` property exists and has a value; `false` otherwise
   */
  public hasLaterality(): boolean {
    return isDefined<CodeableConcept>(this.laterality) && !this.laterality.isEmpty();
  }

  /**
   * @returns the `bodyLandmarkOrientation` property value as a BodyStructureIncludedStructureBodyLandmarkOrientationComponent array
   */
  public getBodyLandmarkOrientation(): BodyStructureIncludedStructureBodyLandmarkOrientationComponent[] {
    return this.bodyLandmarkOrientation ?? ([] as BodyStructureIncludedStructureBodyLandmarkOrientationComponent[]);
  }

  /**
   * Assigns the provided BodyStructureIncludedStructureBodyLandmarkOrientationComponent array value to the `bodyLandmarkOrientation` property.
   *
   * @param value - the `bodyLandmarkOrientation` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setBodyLandmarkOrientation(value: BodyStructureIncludedStructureBodyLandmarkOrientationComponent[] | undefined): this {
    if (isDefinedList<BodyStructureIncludedStructureBodyLandmarkOrientationComponent>(value)) {
      const optErrMsg = `Invalid BodyStructure.includedStructure.bodyLandmarkOrientation; Provided value array has an element that is not an instance of BodyStructureIncludedStructureBodyLandmarkOrientationComponent.`;
      assertFhirTypeList<BodyStructureIncludedStructureBodyLandmarkOrientationComponent>(value, BodyStructureIncludedStructureBodyLandmarkOrientationComponent, optErrMsg);
      this.bodyLandmarkOrientation = value;
    } else {
      this.bodyLandmarkOrientation = undefined;
    }
    return this;
  }

  /**
   * Add the provided BodyStructureIncludedStructureBodyLandmarkOrientationComponent value to the `bodyLandmarkOrientation` array property.
   *
   * @param value - the `bodyLandmarkOrientation` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addBodyLandmarkOrientation(value: BodyStructureIncludedStructureBodyLandmarkOrientationComponent | undefined): this {
    if (isDefined<BodyStructureIncludedStructureBodyLandmarkOrientationComponent>(value)) {
      const optErrMsg = `Invalid BodyStructure.includedStructure.bodyLandmarkOrientation; Provided element is not an instance of BodyStructureIncludedStructureBodyLandmarkOrientationComponent.`;
      assertFhirType<BodyStructureIncludedStructureBodyLandmarkOrientationComponent>(value, BodyStructureIncludedStructureBodyLandmarkOrientationComponent, optErrMsg);
      this.initBodyLandmarkOrientation();
      this.bodyLandmarkOrientation?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `bodyLandmarkOrientation` property exists and has a value; `false` otherwise
   */
  public hasBodyLandmarkOrientation(): boolean {
    return isDefinedList<BodyStructureIncludedStructureBodyLandmarkOrientationComponent>(this.bodyLandmarkOrientation) && this.bodyLandmarkOrientation.some((item: BodyStructureIncludedStructureBodyLandmarkOrientationComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `bodyLandmarkOrientation` property
   */
  private initBodyLandmarkOrientation(): void {
    if(!this.hasBodyLandmarkOrientation()) {
      this.bodyLandmarkOrientation = [] as BodyStructureIncludedStructureBodyLandmarkOrientationComponent[];
    }
  }

  /**
   * @returns the `spatialReference` property value as a Reference array
   */
  public getSpatialReference(): Reference[] {
    return this.spatialReference ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `spatialReference` property.
   *
   * @decorator `@ReferenceTargets('BodyStructure.includedStructure.spatialReference', ['ImagingSelection',])`
   *
   * @param value - the `spatialReference` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('BodyStructure.includedStructure.spatialReference', [
    'ImagingSelection',
  ])
  public setSpatialReference(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.spatialReference = value;
    } else {
      this.spatialReference = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `spatialReference` array property.
   *
   * @decorator `@ReferenceTargets('BodyStructure.includedStructure.spatialReference', ['ImagingSelection',])`
   *
   * @param value - the `spatialReference` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('BodyStructure.includedStructure.spatialReference', [
    'ImagingSelection',
  ])
  public addSpatialReference(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initSpatialReference();
      this.spatialReference?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `spatialReference` property exists and has a value; `false` otherwise
   */
  public hasSpatialReference(): boolean {
    return isDefinedList<Reference>(this.spatialReference) && this.spatialReference.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `spatialReference` property
   */
  private initSpatialReference(): void {
    if (!this.hasSpatialReference()) {
      this.spatialReference = [] as Reference[];
    }
  }

  /**
   * @returns the `qualifier` property value as a CodeableConcept array
   */
  public getQualifier(): CodeableConcept[] {
    return this.qualifier ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `qualifier` property.
   *
   * @param value - the `qualifier` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setQualifier(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid BodyStructure.includedStructure.qualifier; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.qualifier = value;
    } else {
      this.qualifier = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `qualifier` array property.
   *
   * @param value - the `qualifier` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addQualifier(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid BodyStructure.includedStructure.qualifier; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initQualifier();
      this.qualifier?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `qualifier` property exists and has a value; `false` otherwise
   */
  public hasQualifier(): boolean {
    return isDefinedList<CodeableConcept>(this.qualifier) && this.qualifier.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `qualifier` property
   */
  private initQualifier(): void {
    if(!this.hasQualifier()) {
      this.qualifier = [] as CodeableConcept[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'BodyStructure.includedStructure';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.structure,
      this.laterality,
      this.bodyLandmarkOrientation,
      this.spatialReference,
      this.qualifier,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.structure, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): BodyStructureIncludedStructureComponent {
    const dest = new BodyStructureIncludedStructureComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: BodyStructureIncludedStructureComponent): void {
    super.copyValues(dest);
    dest.structure = this.structure ? this.structure.copy() : null;
    dest.laterality = this.laterality?.copy();
    const bodyLandmarkOrientationList = copyListValues<BodyStructureIncludedStructureBodyLandmarkOrientationComponent>(this.bodyLandmarkOrientation);
    dest.bodyLandmarkOrientation = bodyLandmarkOrientationList.length === 0 ? undefined : bodyLandmarkOrientationList;
    const spatialReferenceList = copyListValues<Reference>(this.spatialReference);
    dest.spatialReference = spatialReferenceList.length === 0 ? undefined : spatialReferenceList;
    const qualifierList = copyListValues<CodeableConcept>(this.qualifier);
    dest.qualifier = qualifierList.length === 0 ? undefined : qualifierList;
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

    if (this.hasStructure()) {
      setFhirComplexJson(this.getStructure(), 'structure', jsonObj);
    }

    if (this.hasLaterality()) {
      setFhirComplexJson(this.getLaterality(), 'laterality', jsonObj);
    }

    if (this.hasBodyLandmarkOrientation()) {
      setFhirBackboneElementListJson(this.getBodyLandmarkOrientation(), 'bodyLandmarkOrientation', jsonObj);
    }

    if (this.hasSpatialReference()) {
      setFhirComplexListJson(this.getSpatialReference(), 'spatialReference', jsonObj);
    }

    if (this.hasQualifier()) {
      setFhirComplexListJson(this.getQualifier(), 'qualifier', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * BodyStructureIncludedStructureBodyLandmarkOrientationComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Landmark relative location
 * - **Definition:** Body locations in relation to a specific body landmark (tatoo, scar, other body structure).
 *
 * @category Data Models: Resource
 * @see [FHIR BodyStructure](http://hl7.org/fhir/StructureDefinition/BodyStructure)
 */
export class BodyStructureIncludedStructureBodyLandmarkOrientationComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `BodyStructureIncludedStructureBodyLandmarkOrientationComponent` JSON to instantiate the BodyStructureIncludedStructureBodyLandmarkOrientationComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `BodyStructureIncludedStructureBodyLandmarkOrientationComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to BodyStructureIncludedStructureBodyLandmarkOrientationComponent
   * @returns BodyStructureIncludedStructureBodyLandmarkOrientationComponent data model or undefined for `BodyStructureIncludedStructureBodyLandmarkOrientationComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): BodyStructureIncludedStructureBodyLandmarkOrientationComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'BodyStructureIncludedStructureBodyLandmarkOrientationComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new BodyStructureIncludedStructureBodyLandmarkOrientationComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    fieldName = 'landmarkDescription';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addLandmarkDescription(datatype);
          }
        });
      }
    }

    fieldName = 'clockFacePosition';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addClockFacePosition(datatype);
          }
        });
      }
    }

    fieldName = 'distanceFromLandmark';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: BodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmarkComponent | undefined = BodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmarkComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addDistanceFromLandmark(component);
          }
        });
      }
    }

    fieldName = 'surfaceOrientation';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addSurfaceOrientation(datatype);
          }
        });
      }
    }

    return instance;
  }

  /**
   * BodyStructure.includedStructure.bodyLandmarkOrientation.landmarkDescription Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Body ]andmark description
   * - **Definition:** A description of a landmark on the body used as a reference to locate something else.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private landmarkDescription?: CodeableConcept[] | undefined;

  /**
   * BodyStructure.includedStructure.bodyLandmarkOrientation.clockFacePosition Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Clockface orientation
   * - **Definition:** An description of the direction away from a landmark something is located based on a radial clock dial.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private clockFacePosition?: CodeableConcept[] | undefined;

  /**
   * BodyStructure.includedStructure.bodyLandmarkOrientation.distanceFromLandmark Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Landmark relative location
   * - **Definition:** The distance in centimeters a certain observation is made from a body landmark.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private distanceFromLandmark?: BodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmarkComponent[] | undefined;

  /**
   * BodyStructure.includedStructure.bodyLandmarkOrientation.surfaceOrientation Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Relative landmark surface orientation
   * - **Definition:** The surface area a body location is in relation to a landmark.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private surfaceOrientation?: CodeableConcept[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `landmarkDescription` property value as a CodeableConcept array
   */
  public getLandmarkDescription(): CodeableConcept[] {
    return this.landmarkDescription ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `landmarkDescription` property.
   *
   * @param value - the `landmarkDescription` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setLandmarkDescription(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid BodyStructure.includedStructure.bodyLandmarkOrientation.landmarkDescription; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.landmarkDescription = value;
    } else {
      this.landmarkDescription = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `landmarkDescription` array property.
   *
   * @param value - the `landmarkDescription` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addLandmarkDescription(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid BodyStructure.includedStructure.bodyLandmarkOrientation.landmarkDescription; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initLandmarkDescription();
      this.landmarkDescription?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `landmarkDescription` property exists and has a value; `false` otherwise
   */
  public hasLandmarkDescription(): boolean {
    return isDefinedList<CodeableConcept>(this.landmarkDescription) && this.landmarkDescription.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `landmarkDescription` property
   */
  private initLandmarkDescription(): void {
    if(!this.hasLandmarkDescription()) {
      this.landmarkDescription = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `clockFacePosition` property value as a CodeableConcept array
   */
  public getClockFacePosition(): CodeableConcept[] {
    return this.clockFacePosition ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `clockFacePosition` property.
   *
   * @param value - the `clockFacePosition` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setClockFacePosition(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid BodyStructure.includedStructure.bodyLandmarkOrientation.clockFacePosition; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.clockFacePosition = value;
    } else {
      this.clockFacePosition = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `clockFacePosition` array property.
   *
   * @param value - the `clockFacePosition` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addClockFacePosition(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid BodyStructure.includedStructure.bodyLandmarkOrientation.clockFacePosition; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initClockFacePosition();
      this.clockFacePosition?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `clockFacePosition` property exists and has a value; `false` otherwise
   */
  public hasClockFacePosition(): boolean {
    return isDefinedList<CodeableConcept>(this.clockFacePosition) && this.clockFacePosition.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `clockFacePosition` property
   */
  private initClockFacePosition(): void {
    if(!this.hasClockFacePosition()) {
      this.clockFacePosition = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `distanceFromLandmark` property value as a BodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmarkComponent array
   */
  public getDistanceFromLandmark(): BodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmarkComponent[] {
    return this.distanceFromLandmark ?? ([] as BodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmarkComponent[]);
  }

  /**
   * Assigns the provided BodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmarkComponent array value to the `distanceFromLandmark` property.
   *
   * @param value - the `distanceFromLandmark` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDistanceFromLandmark(value: BodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmarkComponent[] | undefined): this {
    if (isDefinedList<BodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmarkComponent>(value)) {
      const optErrMsg = `Invalid BodyStructure.includedStructure.bodyLandmarkOrientation.distanceFromLandmark; Provided value array has an element that is not an instance of BodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmarkComponent.`;
      assertFhirTypeList<BodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmarkComponent>(value, BodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmarkComponent, optErrMsg);
      this.distanceFromLandmark = value;
    } else {
      this.distanceFromLandmark = undefined;
    }
    return this;
  }

  /**
   * Add the provided BodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmarkComponent value to the `distanceFromLandmark` array property.
   *
   * @param value - the `distanceFromLandmark` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addDistanceFromLandmark(value: BodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmarkComponent | undefined): this {
    if (isDefined<BodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmarkComponent>(value)) {
      const optErrMsg = `Invalid BodyStructure.includedStructure.bodyLandmarkOrientation.distanceFromLandmark; Provided element is not an instance of BodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmarkComponent.`;
      assertFhirType<BodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmarkComponent>(value, BodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmarkComponent, optErrMsg);
      this.initDistanceFromLandmark();
      this.distanceFromLandmark?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `distanceFromLandmark` property exists and has a value; `false` otherwise
   */
  public hasDistanceFromLandmark(): boolean {
    return isDefinedList<BodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmarkComponent>(this.distanceFromLandmark) && this.distanceFromLandmark.some((item: BodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmarkComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `distanceFromLandmark` property
   */
  private initDistanceFromLandmark(): void {
    if(!this.hasDistanceFromLandmark()) {
      this.distanceFromLandmark = [] as BodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmarkComponent[];
    }
  }

  /**
   * @returns the `surfaceOrientation` property value as a CodeableConcept array
   */
  public getSurfaceOrientation(): CodeableConcept[] {
    return this.surfaceOrientation ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `surfaceOrientation` property.
   *
   * @param value - the `surfaceOrientation` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSurfaceOrientation(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid BodyStructure.includedStructure.bodyLandmarkOrientation.surfaceOrientation; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.surfaceOrientation = value;
    } else {
      this.surfaceOrientation = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `surfaceOrientation` array property.
   *
   * @param value - the `surfaceOrientation` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addSurfaceOrientation(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid BodyStructure.includedStructure.bodyLandmarkOrientation.surfaceOrientation; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initSurfaceOrientation();
      this.surfaceOrientation?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `surfaceOrientation` property exists and has a value; `false` otherwise
   */
  public hasSurfaceOrientation(): boolean {
    return isDefinedList<CodeableConcept>(this.surfaceOrientation) && this.surfaceOrientation.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `surfaceOrientation` property
   */
  private initSurfaceOrientation(): void {
    if(!this.hasSurfaceOrientation()) {
      this.surfaceOrientation = [] as CodeableConcept[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'BodyStructure.includedStructure.bodyLandmarkOrientation';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.landmarkDescription,
      this.clockFacePosition,
      this.distanceFromLandmark,
      this.surfaceOrientation,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): BodyStructureIncludedStructureBodyLandmarkOrientationComponent {
    const dest = new BodyStructureIncludedStructureBodyLandmarkOrientationComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: BodyStructureIncludedStructureBodyLandmarkOrientationComponent): void {
    super.copyValues(dest);
    const landmarkDescriptionList = copyListValues<CodeableConcept>(this.landmarkDescription);
    dest.landmarkDescription = landmarkDescriptionList.length === 0 ? undefined : landmarkDescriptionList;
    const clockFacePositionList = copyListValues<CodeableConcept>(this.clockFacePosition);
    dest.clockFacePosition = clockFacePositionList.length === 0 ? undefined : clockFacePositionList;
    const distanceFromLandmarkList = copyListValues<BodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmarkComponent>(this.distanceFromLandmark);
    dest.distanceFromLandmark = distanceFromLandmarkList.length === 0 ? undefined : distanceFromLandmarkList;
    const surfaceOrientationList = copyListValues<CodeableConcept>(this.surfaceOrientation);
    dest.surfaceOrientation = surfaceOrientationList.length === 0 ? undefined : surfaceOrientationList;
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

    if (this.hasLandmarkDescription()) {
      setFhirComplexListJson(this.getLandmarkDescription(), 'landmarkDescription', jsonObj);
    }

    if (this.hasClockFacePosition()) {
      setFhirComplexListJson(this.getClockFacePosition(), 'clockFacePosition', jsonObj);
    }

    if (this.hasDistanceFromLandmark()) {
      setFhirBackboneElementListJson(this.getDistanceFromLandmark(), 'distanceFromLandmark', jsonObj);
    }

    if (this.hasSurfaceOrientation()) {
      setFhirComplexListJson(this.getSurfaceOrientation(), 'surfaceOrientation', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * BodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmarkComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Landmark relative location
 * - **Definition:** The distance in centimeters a certain observation is made from a body landmark.
 *
 * @category Data Models: Resource
 * @see [FHIR BodyStructure](http://hl7.org/fhir/StructureDefinition/BodyStructure)
 */
export class BodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmarkComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `BodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmarkComponent` JSON to instantiate the BodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmarkComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `BodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmarkComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to BodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmarkComponent
   * @returns BodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmarkComponent data model or undefined for `BodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmarkComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): BodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmarkComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'BodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmarkComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new BodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmarkComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    fieldName = 'device';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: CodeableReference | undefined = CodeableReference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addDevice(datatype);
          }
        });
      }
    }

    fieldName = 'value';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Quantity | undefined = Quantity.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addValue(datatype);
          }
        });
      }
    }

    return instance;
  }

  /**
   * BodyStructure.includedStructure.bodyLandmarkOrientation.distanceFromLandmark.device Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Measurement device
   * - **Definition:** An instrument, tool, analyzer, etc. used in the measurement.
   * - **FHIR Type:** `CodeableReference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Device',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private device?: CodeableReference[] | undefined;

  /**
   * BodyStructure.includedStructure.bodyLandmarkOrientation.distanceFromLandmark.value Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Measured distance from body landmark
   * - **Definition:** The measured distance (e.g., in cm) from a body landmark.
   * - **FHIR Type:** `Quantity`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private value?: Quantity[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `device` property value as a CodeableReference array
   */
  public getDevice(): CodeableReference[] {
    return this.device ?? ([] as CodeableReference[]);
  }

  /**
   * Assigns the provided CodeableReference array value to the `device` property.
   *
   * @param value - the `device` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDevice(value: CodeableReference[] | undefined): this {
    if (isDefinedList<CodeableReference>(value)) {
      const optErrMsg = `Invalid BodyStructure.includedStructure.bodyLandmarkOrientation.distanceFromLandmark.device; Provided value array has an element that is not an instance of CodeableReference.`;
      assertFhirTypeList<CodeableReference>(value, CodeableReference, optErrMsg);
      this.device = value;
    } else {
      this.device = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableReference value to the `device` array property.
   *
   * @param value - the `device` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addDevice(value: CodeableReference | undefined): this {
    if (isDefined<CodeableReference>(value)) {
      const optErrMsg = `Invalid BodyStructure.includedStructure.bodyLandmarkOrientation.distanceFromLandmark.device; Provided element is not an instance of CodeableReference.`;
      assertFhirType<CodeableReference>(value, CodeableReference, optErrMsg);
      this.initDevice();
      this.device?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `device` property exists and has a value; `false` otherwise
   */
  public hasDevice(): boolean {
    return isDefinedList<CodeableReference>(this.device) && this.device.some((item: CodeableReference) => !item.isEmpty());
  }

  /**
   * Initialize the `device` property
   */
  private initDevice(): void {
    if(!this.hasDevice()) {
      this.device = [] as CodeableReference[];
    }
  }

  /**
   * @returns the `value` property value as a Quantity array
   */
  public getValue(): Quantity[] {
    return this.value ?? ([] as Quantity[]);
  }

  /**
   * Assigns the provided Quantity array value to the `value` property.
   *
   * @param value - the `value` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setValue(value: Quantity[] | undefined): this {
    if (isDefinedList<Quantity>(value)) {
      const optErrMsg = `Invalid BodyStructure.includedStructure.bodyLandmarkOrientation.distanceFromLandmark.value; Provided value array has an element that is not an instance of Quantity.`;
      assertFhirTypeList<Quantity>(value, Quantity, optErrMsg);
      this.value = value;
    } else {
      this.value = undefined;
    }
    return this;
  }

  /**
   * Add the provided Quantity value to the `value` array property.
   *
   * @param value - the `value` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addValue(value: Quantity | undefined): this {
    if (isDefined<Quantity>(value)) {
      const optErrMsg = `Invalid BodyStructure.includedStructure.bodyLandmarkOrientation.distanceFromLandmark.value; Provided element is not an instance of Quantity.`;
      assertFhirType<Quantity>(value, Quantity, optErrMsg);
      this.initValue();
      this.value?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `value` property exists and has a value; `false` otherwise
   */
  public hasValue(): boolean {
    return isDefinedList<Quantity>(this.value) && this.value.some((item: Quantity) => !item.isEmpty());
  }

  /**
   * Initialize the `value` property
   */
  private initValue(): void {
    if(!this.hasValue()) {
      this.value = [] as Quantity[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'BodyStructure.includedStructure.bodyLandmarkOrientation.distanceFromLandmark';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.device,
      this.value,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): BodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmarkComponent {
    const dest = new BodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmarkComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: BodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmarkComponent): void {
    super.copyValues(dest);
    const deviceList = copyListValues<CodeableReference>(this.device);
    dest.device = deviceList.length === 0 ? undefined : deviceList;
    const valueList = copyListValues<Quantity>(this.value);
    dest.value = valueList.length === 0 ? undefined : valueList;
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

    if (this.hasDevice()) {
      setFhirComplexListJson(this.getDevice(), 'device', jsonObj);
    }

    if (this.hasValue()) {
      setFhirComplexListJson(this.getValue(), 'value', jsonObj);
    }

    return jsonObj;
  }
}
