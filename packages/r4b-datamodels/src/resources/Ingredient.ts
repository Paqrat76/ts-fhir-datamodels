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
 * Ingredient Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/Ingredient
 * StructureDefinition.name: Ingredient
 * StructureDefinition.description: An ingredient of a manufactured item or pharmaceutical product.
 * StructureDefinition.fhirVersion: 4.3.0
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
  constructorCodeValueAsEnumCodeType,
  copyListValues,
  fhirBoolean,
  fhirBooleanSchema,
  fhirCode,
  fhirCodeSchema,
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
import { CodeableConcept, CodeableReference, Identifier, PARSABLE_DATATYPE_MAP, Ratio, RatioRange, Reference } from '../complex-types/complex-datatypes';
import { IngredientManufacturerRoleEnum } from '../code-systems/IngredientManufacturerRoleEnum';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';
import { PublicationStatusEnum } from '../code-systems/PublicationStatusEnum';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Symbol.metadata polyfill secret sauce for decorator metadata
(Symbol.metadata as any) ??= Symbol('Symbol.metadata');

/**
 * Ingredient Class
 *
 * @remarks
 * An ingredient of a manufactured item or pharmaceutical product.
 *
 * **FHIR Specification**
 * - **Short:** An ingredient of a manufactured item or pharmaceutical product
 * - **Definition:** An ingredient of a manufactured item or pharmaceutical product.
 * - **FHIR Version:** 4.3.0
 *
 * @category Data Models: Resource
 * @see [FHIR Ingredient](http://hl7.org/fhir/StructureDefinition/Ingredient)
 */
export class Ingredient extends DomainResource implements IDomainResource {
  constructor(status: EnumCodeType | CodeType | fhirCode | null = null, role: CodeableConcept | null = null, substance: IngredientSubstanceComponent | null = null) {
    super();

    this.publicationStatusEnum = new PublicationStatusEnum();

    this.status = constructorCodeValueAsEnumCodeType<PublicationStatusEnum>(
      status,
      PublicationStatusEnum,
      this.publicationStatusEnum,
      'Ingredient.status',
    );

    this.role = null;
    if (isDefined<CodeableConcept>(role)) {
      this.setRole(role);
    }

    this.substance = null;
    if (isDefined<IngredientSubstanceComponent>(substance)) {
      this.setSubstance(substance);
    }
  }

  /**
   * Parse the provided `Ingredient` JSON to instantiate the Ingredient data model.
   *
   * @param sourceJson - JSON representing FHIR `Ingredient`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to Ingredient
   * @returns Ingredient data model or undefined for `Ingredient`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): Ingredient | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'Ingredient';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new Ingredient();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'Ingredient');
    fhirParser.processDomainResourceJson(instance, classJsonObj);

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

    fieldName = 'for';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addFor(datatype);
        }
      });
  }

    fieldName = 'role';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setRole(null);
      } else {
        instance.setRole(datatype);
      }
    } else {
      instance.setRole(null);
    }

    fieldName = 'function';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addFunction(datatype);
        }
      });
    }

    fieldName = 'allergenicIndicator';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setAllergenicIndicatorElement(datatype);
    }

    fieldName = 'manufacturer';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: IngredientManufacturerComponent | undefined = IngredientManufacturerComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addManufacturer(component);
        }
      });
    }

    fieldName = 'substance';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: IngredientSubstanceComponent | undefined = IngredientSubstanceComponent.parse(classJsonObj[fieldName]!, sourceField);
      if (component === undefined) {
        instance.setSubstance(null);
      } else {
        instance.setSubstance(component);
      }
    } else {
      instance.setSubstance(null);
    }

    return instance;
  }

  /**
   * Ingredient.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** An identifier or code by which the ingredient can be referenced
   * - **Definition:** The identifier(s) of this Ingredient that are assigned by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier | undefined;

  /**
   * FHIR CodeSystem: PublicationStatus
   *
   * @see {@link PublicationStatusEnum }
   */
  private readonly publicationStatusEnum: PublicationStatusEnum;

  /**
   * Ingredient.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** draft | active | retired | unknown
   * - **Definition:** The status of this ingredient. Enables tracking the life-cycle of the content.
   * - **Comment:** Allows filtering of ingredient that are appropriate for use versus not.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** true
   * - **isModifierReason:** This is labeled as &quot;Is Modifier&quot; because applications should not use a retired {{title}} without due consideration
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link PublicationStatusEnum }
   */
  private status: EnumCodeType | null;

  /**
   * Ingredient.for Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The product which this ingredient is a constituent part of
   * - **Definition:** The product which this ingredient is a constituent part of.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/MedicinalProductDefinition',
   *       'http://hl7.org/fhir/StructureDefinition/AdministrableProductDefinition',
   *       'http://hl7.org/fhir/StructureDefinition/ManufacturedItemDefinition',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private for_?: Reference[] | undefined;

  /**
   * Ingredient.role Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Purpose of the ingredient within the product, e.g. active, inactive
   * - **Definition:** A classification of the ingredient identifying its purpose within the product, e.g. active, inactive.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private role: CodeableConcept | null;

  /**
   * Ingredient.function Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Precise action within the drug product, e.g. antioxidant, alkalizing agent
   * - **Definition:** A classification of the ingredient identifying its precise purpose(s) in the drug product. This extends the Ingredient.role to add more detail. Example: antioxidant, alkalizing agent.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private function_?: CodeableConcept[] | undefined;

  /**
   * Ingredient.allergenicIndicator Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** If the ingredient is a known or suspected allergen
   * - **Definition:** If the ingredient is a known or suspected allergen. Note that this is a property of the substance, so if a reference to a SubstanceDefinition is used to decribe that (rather than just a code), the allergen information should go there, not here.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private allergenicIndicator?: BooleanType | undefined;

  /**
   * Ingredient.manufacturer Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** An organization that manufactures this ingredient
   * - **Definition:** The organization(s) that manufacture this ingredient. Can be used to indicate:         1) Organizations we are aware of that manufacture this ingredient         2) Specific Manufacturer(s) currently being used         3) Set of organisations allowed to manufacture this ingredient for this product         Users must be clear on the application of context relevant to their use case.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private manufacturer?: IngredientManufacturerComponent[] | undefined;

  /**
   * Ingredient.substance Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The substance that comprises this ingredient
   * - **Definition:** The substance that comprises this ingredient.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private substance: IngredientSubstanceComponent | null;

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
      const optErrMsg = `Invalid Ingredient.identifier; Provided element is not an instance of Identifier.`;
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
   * @returns the `status` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link PublicationStatusEnum }
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
   * @see CodeSystem Enumeration: {@link PublicationStatusEnum }
   */
  public setStatusEnumType(enumType: EnumCodeType | undefined | null): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid Ingredient.status`;
      assertEnumCodeType<PublicationStatusEnum>(enumType, PublicationStatusEnum, errMsgPrefix);
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
   * @see CodeSystem Enumeration: {@link PublicationStatusEnum }
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
   * @see CodeSystem Enumeration: {@link PublicationStatusEnum }
   */
  public setStatusElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid Ingredient.status; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.status = new EnumCodeType(element, this.publicationStatusEnum);
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
   * @see CodeSystem Enumeration: {@link PublicationStatusEnum }
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
   * @see CodeSystem Enumeration: {@link PublicationStatusEnum }
   */
  public setStatus(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid Ingredient.status (${String(value)})`;
      this.status = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.publicationStatusEnum);
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
   * @returns the `for_` property value as a Reference array
   */
  public getFor(): Reference[] {
    return this.for_ ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `for_` property.
   *
   * @decorator `@ReferenceTargets('Ingredient.for', ['MedicinalProductDefinition','AdministrableProductDefinition','ManufacturedItemDefinition',])`
   *
   * @param value - the `for` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Ingredient.for', [
    'MedicinalProductDefinition',
  
    'AdministrableProductDefinition',
  
    'ManufacturedItemDefinition',
  ])
  public setFor(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.for_ = value;
    } else {
      this.for_ = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `for_` array property.
   *
   * @decorator `@ReferenceTargets('Ingredient.for', ['MedicinalProductDefinition','AdministrableProductDefinition','ManufacturedItemDefinition',])`
   *
   * @param value - the `for_` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Ingredient.for', [
    'MedicinalProductDefinition',
  
    'AdministrableProductDefinition',
  
    'ManufacturedItemDefinition',
  ])
  public addFor(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initFor();
      this.for_?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `for_` property exists and has a value; `false` otherwise
   */
  public hasFor(): boolean {
    return isDefinedList<Reference>(this.for_) && this.for_.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `for_` property
   */
  private initFor(): void {
    if (!this.hasFor()) {
      this.for_ = [] as Reference[];
    }
  }

  /**
   * @returns the `role` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getRole(): CodeableConcept {
    return this.role ?? new CodeableConcept();
  }

  /**
   * Assigns the provided CodeableConcept object value to the `role` property.
   *
   * @param value - the `role` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setRole(value: CodeableConcept | undefined | null): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Ingredient.role; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.role = value;
    } else {
      this.role = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `role` property exists and has a value; `false` otherwise
   */
  public hasRole(): boolean {
    return isDefined<CodeableConcept>(this.role) && !this.role.isEmpty();
  }

  /**
   * @returns the `function_` property value as a CodeableConcept array
   */
  public getFunction(): CodeableConcept[] {
    return this.function_ ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `function_` property.
   *
   * @param value - the `function_` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setFunction(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Ingredient.function; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.function_ = value;
    } else {
      this.function_ = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `function_` array property.
   *
   * @param value - the `function_` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addFunction(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Ingredient.function; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initFunction();
      this.function_?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `function_` property exists and has a value; `false` otherwise
   */
  public hasFunction(): boolean {
    return isDefinedList<CodeableConcept>(this.function_) && this.function_.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `function_` property
   */
  private initFunction(): void {
    if(!this.hasFunction()) {
      this.function_ = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `allergenicIndicator` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getAllergenicIndicatorElement(): BooleanType {
    return this.allergenicIndicator ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `allergenicIndicator` property.
   *
   * @param element - the `allergenicIndicator` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAllergenicIndicatorElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid Ingredient.allergenicIndicator; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.allergenicIndicator = element;
    } else {
      this.allergenicIndicator = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `allergenicIndicator` property exists and has a value; `false` otherwise
   */
  public hasAllergenicIndicatorElement(): boolean {
    return isDefined<BooleanType>(this.allergenicIndicator) && !this.allergenicIndicator.isEmpty();
  }

  /**
   * @returns the `allergenicIndicator` property value as a fhirBoolean if defined; else undefined
   */
  public getAllergenicIndicator(): fhirBoolean | undefined {
    return this.allergenicIndicator?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `allergenicIndicator` property.
   *
   * @param value - the `allergenicIndicator` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAllergenicIndicator(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid Ingredient.allergenicIndicator (${String(value)})`;
      this.allergenicIndicator = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.allergenicIndicator = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `allergenicIndicator` property exists and has a value; `false` otherwise
   */
  public hasAllergenicIndicator(): boolean {
    return this.hasAllergenicIndicatorElement();
  }

  /**
   * @returns the `manufacturer` property value as a IngredientManufacturerComponent array
   */
  public getManufacturer(): IngredientManufacturerComponent[] {
    return this.manufacturer ?? ([] as IngredientManufacturerComponent[]);
  }

  /**
   * Assigns the provided IngredientManufacturerComponent array value to the `manufacturer` property.
   *
   * @param value - the `manufacturer` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setManufacturer(value: IngredientManufacturerComponent[] | undefined): this {
    if (isDefinedList<IngredientManufacturerComponent>(value)) {
      const optErrMsg = `Invalid Ingredient.manufacturer; Provided value array has an element that is not an instance of IngredientManufacturerComponent.`;
      assertFhirTypeList<IngredientManufacturerComponent>(value, IngredientManufacturerComponent, optErrMsg);
      this.manufacturer = value;
    } else {
      this.manufacturer = undefined;
    }
    return this;
  }

  /**
   * Add the provided IngredientManufacturerComponent value to the `manufacturer` array property.
   *
   * @param value - the `manufacturer` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addManufacturer(value: IngredientManufacturerComponent | undefined): this {
    if (isDefined<IngredientManufacturerComponent>(value)) {
      const optErrMsg = `Invalid Ingredient.manufacturer; Provided element is not an instance of IngredientManufacturerComponent.`;
      assertFhirType<IngredientManufacturerComponent>(value, IngredientManufacturerComponent, optErrMsg);
      this.initManufacturer();
      this.manufacturer?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `manufacturer` property exists and has a value; `false` otherwise
   */
  public hasManufacturer(): boolean {
    return isDefinedList<IngredientManufacturerComponent>(this.manufacturer) && this.manufacturer.some((item: IngredientManufacturerComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `manufacturer` property
   */
  private initManufacturer(): void {
    if(!this.hasManufacturer()) {
      this.manufacturer = [] as IngredientManufacturerComponent[];
    }
  }

  /**
   * @returns the `substance` property value as a IngredientSubstanceComponent object if defined; else an empty IngredientSubstanceComponent object
   */
  public getSubstance(): IngredientSubstanceComponent {
    return this.substance ?? new IngredientSubstanceComponent();
  }

  /**
   * Assigns the provided IngredientSubstanceComponent object value to the `substance` property.
   *
   * @param value - the `substance` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSubstance(value: IngredientSubstanceComponent | undefined | null): this {
    if (isDefined<IngredientSubstanceComponent>(value)) {
      const optErrMsg = `Invalid Ingredient.substance; Provided element is not an instance of IngredientSubstanceComponent.`;
      assertFhirType<IngredientSubstanceComponent>(value, IngredientSubstanceComponent, optErrMsg);
      this.substance = value;
    } else {
      this.substance = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `substance` property exists and has a value; `false` otherwise
   */
  public hasSubstance(): boolean {
    return isDefined<IngredientSubstanceComponent>(this.substance) && !this.substance.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Ingredient';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identifier,
      this.status,
      this.for_,
      this.role,
      this.function_,
      this.allergenicIndicator,
      this.manufacturer,
      this.substance,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.status, this.role, this.substance, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): Ingredient {
    const dest = new Ingredient();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: Ingredient): void {
    super.copyValues(dest);
    dest.identifier = this.identifier?.copy();
    dest.status = this.status ? this.status.copy() : null;
    const forList = copyListValues<Reference>(this.for_);
    dest.for_ = forList.length === 0 ? undefined : forList;
    dest.role = this.role ? this.role.copy() : null;
    const functionList = copyListValues<CodeableConcept>(this.function_);
    dest.function_ = functionList.length === 0 ? undefined : functionList;
    dest.allergenicIndicator = this.allergenicIndicator?.copy();
    const manufacturerList = copyListValues<IngredientManufacturerComponent>(this.manufacturer);
    dest.manufacturer = manufacturerList.length === 0 ? undefined : manufacturerList;
    dest.substance = this.substance ? this.substance.copy() : null;
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

    if (this.hasStatusElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getStatusElement()!, 'status', jsonObj);
    } else {
      jsonObj['status'] = null;
    }

    if (this.hasFor()) {
      setFhirComplexListJson(this.getFor(), 'for', jsonObj);
    }

    if (this.hasRole()) {
      setFhirComplexJson(this.getRole(), 'role', jsonObj);
    } else {
      jsonObj['role'] = null;
    }

    if (this.hasFunction()) {
      setFhirComplexListJson(this.getFunction(), 'function', jsonObj);
    }

    if (this.hasAllergenicIndicatorElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getAllergenicIndicatorElement(), 'allergenicIndicator', jsonObj);
    }

    if (this.hasManufacturer()) {
      setFhirBackboneElementListJson(this.getManufacturer(), 'manufacturer', jsonObj);
    }

    if (this.hasSubstance()) {
      setFhirBackboneElementJson(this.getSubstance(), 'substance', jsonObj);
    } else {
      jsonObj['substance'] = null;
    }

    return jsonObj;
  }
}

/**
 * IngredientManufacturerComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** An organization that manufactures this ingredient
 * - **Definition:** The organization(s) that manufacture this ingredient. Can be used to indicate:         1) Organizations we are aware of that manufacture this ingredient         2) Specific Manufacturer(s) currently being used         3) Set of organisations allowed to manufacture this ingredient for this product         Users must be clear on the application of context relevant to their use case.
 *
 * @category Data Models: Resource
 * @see [FHIR Ingredient](http://hl7.org/fhir/StructureDefinition/Ingredient)
 */
export class IngredientManufacturerComponent extends BackboneElement implements IBackboneElement {
  constructor(manufacturer: Reference | null = null) {
    super();

    this.ingredientManufacturerRoleEnum = new IngredientManufacturerRoleEnum();

    this.manufacturer = null;
    if (isDefined<Reference>(manufacturer)) {
      this.setManufacturer(manufacturer);
    }
  }

  /**
   * Parse the provided `IngredientManufacturerComponent` JSON to instantiate the IngredientManufacturerComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `IngredientManufacturerComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to IngredientManufacturerComponent
   * @returns IngredientManufacturerComponent data model or undefined for `IngredientManufacturerComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): IngredientManufacturerComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'IngredientManufacturerComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new IngredientManufacturerComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    fieldName = 'role';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setRoleElement(datatype);
    }

    fieldName = 'manufacturer';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setManufacturer(null);
      } else {
        instance.setManufacturer(datatype);
      }
    } else {
      instance.setManufacturer(null);
    }

    return instance;
  }

  /**
   * FHIR CodeSystem: IngredientManufacturerRole
   *
   * @see {@link IngredientManufacturerRoleEnum }
   */
  private readonly ingredientManufacturerRoleEnum: IngredientManufacturerRoleEnum;

  /**
   * Ingredient.manufacturer.role Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** allowed | possible | actual
   * - **Definition:** The way in which this manufacturer is associated with the ingredient. For example whether it is a possible one (others allowed), or an exclusive authorized one for this ingredient. Note that this is not the manufacturing process role.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link IngredientManufacturerRoleEnum }
   */
  private role?: EnumCodeType | undefined;

  /**
   * Ingredient.manufacturer.manufacturer Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** An organization that manufactures this ingredient
   * - **Definition:** An organization that manufactures this ingredient.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *     ]
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private manufacturer: Reference | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `role` property value as a EnumCodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link IngredientManufacturerRoleEnum }
   */
  public getRoleEnumType(): EnumCodeType | undefined {
    return this.role;
  }

  /**
   * Assigns the provided EnumCodeType value to the `role` property.
   *
   * @param enumType - the `role` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code values
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link IngredientManufacturerRoleEnum }
   */
  public setRoleEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = 'Invalid Ingredient.manufacturer.role';
      assertEnumCodeType<IngredientManufacturerRoleEnum>(enumType, IngredientManufacturerRoleEnum, errMsgPrefix);
      this.role = enumType;
    } else {
      this.role = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `role` property exists and has a value; `false` otherwise
   */
  public hasRoleEnumType(): boolean {
    return isDefined<EnumCodeType>(this.role) && !this.role.isEmpty() && this.role.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `role` property value as a CodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link IngredientManufacturerRoleEnum }
   */
  public getRoleElement(): CodeType | undefined {
    if (this.role === undefined) {
      return undefined;
    }
    return this.role as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `role` property.
   *
   * @param element - the `role` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link IngredientManufacturerRoleEnum }
   */
  public setRoleElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid Ingredient.manufacturer.role; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.role = new EnumCodeType(element, this.ingredientManufacturerRoleEnum);
    } else {
      this.role = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `role` property exists and has a value; `false` otherwise
   */
  public hasRoleElement(): boolean {
    return this.hasRoleEnumType();
  }

  /**
   * @returns the `role` property value as a fhirCode if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link IngredientManufacturerRoleEnum }
   */
  public getRole(): fhirCode | undefined {
    if (this.role === undefined) {
      return undefined;
    }
    return this.role.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `role` property.
   *
   * @param value - the `role` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link IngredientManufacturerRoleEnum }
   */
  public setRole(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid Ingredient.manufacturer.role; Provided value is not an instance of fhirCode.`;
      this.role = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.ingredientManufacturerRoleEnum);
    } else {
      this.role = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `role` property exists and has a value; `false` otherwise
   */
  public hasRole(): boolean {
    return this.hasRoleEnumType();
  }

  /**
   * @returns the `manufacturer` property value as a Reference object if defined; else an empty Reference object
   */
  public getManufacturer(): Reference {
    return this.manufacturer ?? new Reference();
  }

  /**
   * Assigns the provided Manufacturer object value to the `manufacturer` property.
   *
   * @decorator `@ReferenceTargets('Ingredient.manufacturer.manufacturer', ['Organization',])`
   *
   * @param value - the `manufacturer` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Ingredient.manufacturer.manufacturer', [
    'Organization',
  ])
  public setManufacturer(value: Reference | undefined | null): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.manufacturer = value;
    } else {
      this.manufacturer = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `manufacturer` property exists and has a value; `false` otherwise
   */
  public hasManufacturer(): boolean {
    return isDefined<Reference>(this.manufacturer) && !this.manufacturer.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Ingredient.manufacturer';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.role,
      this.manufacturer,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.manufacturer, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): IngredientManufacturerComponent {
    const dest = new IngredientManufacturerComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: IngredientManufacturerComponent): void {
    super.copyValues(dest);
    dest.role = this.role?.copy();
    dest.manufacturer = this.manufacturer ? this.manufacturer.copy() : null;
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

    if (this.hasRoleElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getRoleElement()!, 'role', jsonObj);
    }

    if (this.hasManufacturer()) {
      setFhirComplexJson(this.getManufacturer(), 'manufacturer', jsonObj);
    } else {
      jsonObj['manufacturer'] = null;
    }

    return jsonObj;
  }
}
/**
 * IngredientSubstanceComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** The substance that comprises this ingredient
 * - **Definition:** The substance that comprises this ingredient.
 *
 * @category Data Models: Resource
 * @see [FHIR Ingredient](http://hl7.org/fhir/StructureDefinition/Ingredient)
 */
export class IngredientSubstanceComponent extends BackboneElement implements IBackboneElement {
  constructor(code: CodeableReference | null = null) {
    super();

    this.code = null;
    if (isDefined<CodeableReference>(code)) {
      this.setCode(code);
    }
  }

  /**
   * Parse the provided `IngredientSubstanceComponent` JSON to instantiate the IngredientSubstanceComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `IngredientSubstanceComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to IngredientSubstanceComponent
   * @returns IngredientSubstanceComponent data model or undefined for `IngredientSubstanceComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): IngredientSubstanceComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'IngredientSubstanceComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new IngredientSubstanceComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    fieldName = 'code';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableReference | undefined = CodeableReference.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setCode(null);
      } else {
        instance.setCode(datatype);
      }
    } else {
      instance.setCode(null);
    }

    fieldName = 'strength';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: IngredientSubstanceStrengthComponent | undefined = IngredientSubstanceStrengthComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addStrength(component);
        }
      });
    }

    return instance;
  }

  /**
   * Ingredient.substance.code Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A code or full resource that represents the ingredient substance
   * - **Definition:** A code or full resource that represents the ingredient\'s substance.
   * - **FHIR Type:** `CodeableReference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/SubstanceDefinition',
   *     ]
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private code: CodeableReference | null;

  /**
   * Ingredient.substance.strength Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The quantity of substance, per presentation, or per volume or mass, and type of quantity
   * - **Definition:** The quantity of substance in the unit of presentation, or in the volume (or mass) of the single pharmaceutical product or manufactured item. The allowed repetitions do not represent different strengths, but are different representations - mathematically equivalent - of a single strength.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private strength?: IngredientSubstanceStrengthComponent[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `code` property value as a CodeableReference object if defined; else an empty CodeableReference object
   */
  public getCode(): CodeableReference {
    return this.code ?? new CodeableReference();
  }

  /**
   * Assigns the provided CodeableReference object value to the `code` property.
   *
   * @param value - the `code` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCode(value: CodeableReference | undefined | null): this {
    if (isDefined<CodeableReference>(value)) {
      const optErrMsg = `Invalid Ingredient.substance.code; Provided element is not an instance of CodeableReference.`;
      assertFhirType<CodeableReference>(value, CodeableReference, optErrMsg);
      this.code = value;
    } else {
      this.code = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `code` property exists and has a value; `false` otherwise
   */
  public hasCode(): boolean {
    return isDefined<CodeableReference>(this.code) && !this.code.isEmpty();
  }

  /**
   * @returns the `strength` property value as a IngredientSubstanceStrengthComponent array
   */
  public getStrength(): IngredientSubstanceStrengthComponent[] {
    return this.strength ?? ([] as IngredientSubstanceStrengthComponent[]);
  }

  /**
   * Assigns the provided IngredientSubstanceStrengthComponent array value to the `strength` property.
   *
   * @param value - the `strength` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setStrength(value: IngredientSubstanceStrengthComponent[] | undefined): this {
    if (isDefinedList<IngredientSubstanceStrengthComponent>(value)) {
      const optErrMsg = `Invalid Ingredient.substance.strength; Provided value array has an element that is not an instance of IngredientSubstanceStrengthComponent.`;
      assertFhirTypeList<IngredientSubstanceStrengthComponent>(value, IngredientSubstanceStrengthComponent, optErrMsg);
      this.strength = value;
    } else {
      this.strength = undefined;
    }
    return this;
  }

  /**
   * Add the provided IngredientSubstanceStrengthComponent value to the `strength` array property.
   *
   * @param value - the `strength` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addStrength(value: IngredientSubstanceStrengthComponent | undefined): this {
    if (isDefined<IngredientSubstanceStrengthComponent>(value)) {
      const optErrMsg = `Invalid Ingredient.substance.strength; Provided element is not an instance of IngredientSubstanceStrengthComponent.`;
      assertFhirType<IngredientSubstanceStrengthComponent>(value, IngredientSubstanceStrengthComponent, optErrMsg);
      this.initStrength();
      this.strength?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `strength` property exists and has a value; `false` otherwise
   */
  public hasStrength(): boolean {
    return isDefinedList<IngredientSubstanceStrengthComponent>(this.strength) && this.strength.some((item: IngredientSubstanceStrengthComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `strength` property
   */
  private initStrength(): void {
    if(!this.hasStrength()) {
      this.strength = [] as IngredientSubstanceStrengthComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Ingredient.substance';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.code,
      this.strength,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.code, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): IngredientSubstanceComponent {
    const dest = new IngredientSubstanceComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: IngredientSubstanceComponent): void {
    super.copyValues(dest);
    dest.code = this.code ? this.code.copy() : null;
    const strengthList = copyListValues<IngredientSubstanceStrengthComponent>(this.strength);
    dest.strength = strengthList.length === 0 ? undefined : strengthList;
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

    if (this.hasCode()) {
      setFhirComplexJson(this.getCode(), 'code', jsonObj);
    } else {
      jsonObj['code'] = null;
    }

    if (this.hasStrength()) {
      setFhirBackboneElementListJson(this.getStrength(), 'strength', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * IngredientSubstanceStrengthComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** The quantity of substance, per presentation, or per volume or mass, and type of quantity
 * - **Definition:** The quantity of substance in the unit of presentation, or in the volume (or mass) of the single pharmaceutical product or manufactured item. The allowed repetitions do not represent different strengths, but are different representations - mathematically equivalent - of a single strength.
 *
 * @category Data Models: Resource
 * @see [FHIR Ingredient](http://hl7.org/fhir/StructureDefinition/Ingredient)
 */
export class IngredientSubstanceStrengthComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `IngredientSubstanceStrengthComponent` JSON to instantiate the IngredientSubstanceStrengthComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `IngredientSubstanceStrengthComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to IngredientSubstanceStrengthComponent
   * @returns IngredientSubstanceStrengthComponent data model or undefined for `IngredientSubstanceStrengthComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): IngredientSubstanceStrengthComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'IngredientSubstanceStrengthComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new IngredientSubstanceStrengthComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const classMetadata: DecoratorMetadataObject | null = IngredientSubstanceStrengthComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for IngredientSubstanceStrengthComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    fieldName = 'presentation[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const presentation: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setPresentation(presentation);

    fieldName = 'textPresentation';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setTextPresentationElement(datatype);
    }

    fieldName = 'concentration[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const concentration: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setConcentration(concentration);

    fieldName = 'textConcentration';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setTextConcentrationElement(datatype);
    }

    fieldName = 'measurementPoint';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setMeasurementPointElement(datatype);
    }

    fieldName = 'country';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addCountry(datatype);
        }
      });
    }

    fieldName = 'referenceStrength';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: IngredientSubstanceStrengthReferenceStrengthComponent | undefined = IngredientSubstanceStrengthReferenceStrengthComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addReferenceStrength(component);
        }
      });
    }

    return instance;
  }

  /**
   * Ingredient.substance.strength.presentation[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('Ingredient.substance.strength.presentation[x]', ['Ratio','RatioRange',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The quantity of substance in the unit of presentation
   * - **Definition:** The quantity of substance in the unit of presentation, or in the volume (or mass) of the single pharmaceutical product or manufactured item. Unit of presentation refers to the quantity that the item occurs in e.g. a strength per tablet size, perhaps \'per 20mg\' (the size of the tablet). It is not generally normalized as a unitary unit, which would be \'per mg\').
   * - **FHIR Types:**
   *     'Ratio',
   *     'RatioRange',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  @ChoiceDataTypesMeta('Ingredient.substance.strength.presentation[x]',[
    'Ratio',
    'RatioRange',
  ])
  private presentation?: IDataType | undefined;

  /**
   * Ingredient.substance.strength.textPresentation Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Text of either the whole presentation strength or a part of it (rest being in Strength.presentation as a ratio)
   * - **Definition:** A textual represention of either the whole of the presentation strength or a part of it - with the rest being in Strength.presentation as a ratio.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private textPresentation?: StringType | undefined;

  /**
   * Ingredient.substance.strength.concentration[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('Ingredient.substance.strength.concentration[x]', ['Ratio','RatioRange',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The strength per unitary volume (or mass)
   * - **Definition:** The strength per unitary volume (or mass).
   * - **FHIR Types:**
   *     'Ratio',
   *     'RatioRange',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  @ChoiceDataTypesMeta('Ingredient.substance.strength.concentration[x]',[
    'Ratio',
    'RatioRange',
  ])
  private concentration?: IDataType | undefined;

  /**
   * Ingredient.substance.strength.textConcentration Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Text of either the whole concentration strength or a part of it (rest being in Strength.concentration as a ratio)
   * - **Definition:** A textual represention of either the whole of the concentration strength or a part of it - with the rest being in Strength.concentration as a ratio.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private textConcentration?: StringType | undefined;

  /**
   * Ingredient.substance.strength.measurementPoint Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When strength is measured at a particular point or distance
   * - **Definition:** For when strength is measured at a particular point or distance. There are products where strength is measured at a particular point. For example, the strength of the ingredient in some inhalers is measured at a particular position relative to the point of aerosolization.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private measurementPoint?: StringType | undefined;

  /**
   * Ingredient.substance.strength.country Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Where the strength range applies
   * - **Definition:** The country or countries for which the strength range applies.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private country?: CodeableConcept[] | undefined;

  /**
   * Ingredient.substance.strength.referenceStrength Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Strength expressed in terms of a reference substance
   * - **Definition:** Strength expressed in terms of a reference substance. For when the ingredient strength is additionally expressed as equivalent to the strength of some other closely related substance (e.g. salt vs. base). Reference strength represents the strength (quantitative composition) of the active moiety of the active substance. There are situations when the active substance and active moiety are different, therefore both a strength and a reference strength are needed.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private referenceStrength?: IngredientSubstanceStrengthReferenceStrengthComponent[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `presentation` property value as a DataType object if defined; else undefined
   */
  public getPresentation(): IDataType | undefined {
    return this.presentation;
  }

  /**
   * Assigns the provided DataType object value to the `presentation` property.
   *
   * @decorator `@ChoiceDataTypes('Ingredient.substance.strength.presentation[x]')`
   *
   * @param value - the `presentation` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('Ingredient.substance.strength.presentation[x]')
  public setPresentation(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.presentation = value;
    } else {
      this.presentation = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `presentation` property exists and has a value; `false` otherwise
   */
  public hasPresentation(): boolean {
    return isDefined<IDataType>(this.presentation) && !this.presentation.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `presentation` property value as a Ratio object if defined; else undefined
   */
  public getPresentationRatio(): Ratio | undefined {
    if (!isDefined<IDataType | undefined>(this.presentation)) {
      return undefined;
    }
    if (!(this.presentation instanceof Ratio)) {
      throw new InvalidTypeError(
        `DataType mismatch for Ingredient.substance.strength.presentation[x]: Expected Ratio but encountered ${this.presentation.fhirType()}`,
      );
    }
    return this.presentation;
  }

  /**
   * @returns `true` if the `presentation` property exists as a Ratio and has a value; `false` otherwise
   */
  public hasPresentationRatio(): boolean {
    return this.hasPresentation() && this.presentation instanceof Ratio;
  }

  /**
   * @returns the `presentation` property value as a RatioRange object if defined; else undefined
   */
  public getPresentationRatioRange(): RatioRange | undefined {
    if (!isDefined<IDataType | undefined>(this.presentation)) {
      return undefined;
    }
    if (!(this.presentation instanceof RatioRange)) {
      throw new InvalidTypeError(
        `DataType mismatch for Ingredient.substance.strength.presentation[x]: Expected RatioRange but encountered ${this.presentation.fhirType()}`,
      );
    }
    return this.presentation;
  }

  /**
   * @returns `true` if the `presentation` property exists as a RatioRange and has a value; `false` otherwise
   */
  public hasPresentationRatioRange(): boolean {
    return this.hasPresentation() && this.presentation instanceof RatioRange;
  }

  // End of choice datatype-specific "get"/"has" methods

  /**
   * @returns the `textPresentation` property value as a StringType object if defined; else an empty StringType object
   */
  public getTextPresentationElement(): StringType {
    return this.textPresentation ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `textPresentation` property.
   *
   * @param element - the `textPresentation` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setTextPresentationElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid Ingredient.substance.strength.textPresentation; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.textPresentation = element;
    } else {
      this.textPresentation = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `textPresentation` property exists and has a value; `false` otherwise
   */
  public hasTextPresentationElement(): boolean {
    return isDefined<StringType>(this.textPresentation) && !this.textPresentation.isEmpty();
  }

  /**
   * @returns the `textPresentation` property value as a fhirString if defined; else undefined
   */
  public getTextPresentation(): fhirString | undefined {
    return this.textPresentation?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `textPresentation` property.
   *
   * @param value - the `textPresentation` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setTextPresentation(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid Ingredient.substance.strength.textPresentation (${String(value)})`;
      this.textPresentation = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.textPresentation = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `textPresentation` property exists and has a value; `false` otherwise
   */
  public hasTextPresentation(): boolean {
    return this.hasTextPresentationElement();
  }

  /**
   * @returns the `concentration` property value as a DataType object if defined; else undefined
   */
  public getConcentration(): IDataType | undefined {
    return this.concentration;
  }

  /**
   * Assigns the provided DataType object value to the `concentration` property.
   *
   * @decorator `@ChoiceDataTypes('Ingredient.substance.strength.concentration[x]')`
   *
   * @param value - the `concentration` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('Ingredient.substance.strength.concentration[x]')
  public setConcentration(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.concentration = value;
    } else {
      this.concentration = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `concentration` property exists and has a value; `false` otherwise
   */
  public hasConcentration(): boolean {
    return isDefined<IDataType>(this.concentration) && !this.concentration.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `concentration` property value as a Ratio object if defined; else undefined
   */
  public getConcentrationRatio(): Ratio | undefined {
    if (!isDefined<IDataType | undefined>(this.concentration)) {
      return undefined;
    }
    if (!(this.concentration instanceof Ratio)) {
      throw new InvalidTypeError(
        `DataType mismatch for Ingredient.substance.strength.concentration[x]: Expected Ratio but encountered ${this.concentration.fhirType()}`,
      );
    }
    return this.concentration;
  }

  /**
   * @returns `true` if the `concentration` property exists as a Ratio and has a value; `false` otherwise
   */
  public hasConcentrationRatio(): boolean {
    return this.hasConcentration() && this.concentration instanceof Ratio;
  }

  /**
   * @returns the `concentration` property value as a RatioRange object if defined; else undefined
   */
  public getConcentrationRatioRange(): RatioRange | undefined {
    if (!isDefined<IDataType | undefined>(this.concentration)) {
      return undefined;
    }
    if (!(this.concentration instanceof RatioRange)) {
      throw new InvalidTypeError(
        `DataType mismatch for Ingredient.substance.strength.concentration[x]: Expected RatioRange but encountered ${this.concentration.fhirType()}`,
      );
    }
    return this.concentration;
  }

  /**
   * @returns `true` if the `concentration` property exists as a RatioRange and has a value; `false` otherwise
   */
  public hasConcentrationRatioRange(): boolean {
    return this.hasConcentration() && this.concentration instanceof RatioRange;
  }

  // End of choice datatype-specific "get"/"has" methods

  /**
   * @returns the `textConcentration` property value as a StringType object if defined; else an empty StringType object
   */
  public getTextConcentrationElement(): StringType {
    return this.textConcentration ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `textConcentration` property.
   *
   * @param element - the `textConcentration` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setTextConcentrationElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid Ingredient.substance.strength.textConcentration; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.textConcentration = element;
    } else {
      this.textConcentration = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `textConcentration` property exists and has a value; `false` otherwise
   */
  public hasTextConcentrationElement(): boolean {
    return isDefined<StringType>(this.textConcentration) && !this.textConcentration.isEmpty();
  }

  /**
   * @returns the `textConcentration` property value as a fhirString if defined; else undefined
   */
  public getTextConcentration(): fhirString | undefined {
    return this.textConcentration?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `textConcentration` property.
   *
   * @param value - the `textConcentration` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setTextConcentration(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid Ingredient.substance.strength.textConcentration (${String(value)})`;
      this.textConcentration = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.textConcentration = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `textConcentration` property exists and has a value; `false` otherwise
   */
  public hasTextConcentration(): boolean {
    return this.hasTextConcentrationElement();
  }

  /**
   * @returns the `measurementPoint` property value as a StringType object if defined; else an empty StringType object
   */
  public getMeasurementPointElement(): StringType {
    return this.measurementPoint ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `measurementPoint` property.
   *
   * @param element - the `measurementPoint` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setMeasurementPointElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid Ingredient.substance.strength.measurementPoint; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.measurementPoint = element;
    } else {
      this.measurementPoint = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `measurementPoint` property exists and has a value; `false` otherwise
   */
  public hasMeasurementPointElement(): boolean {
    return isDefined<StringType>(this.measurementPoint) && !this.measurementPoint.isEmpty();
  }

  /**
   * @returns the `measurementPoint` property value as a fhirString if defined; else undefined
   */
  public getMeasurementPoint(): fhirString | undefined {
    return this.measurementPoint?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `measurementPoint` property.
   *
   * @param value - the `measurementPoint` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setMeasurementPoint(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid Ingredient.substance.strength.measurementPoint (${String(value)})`;
      this.measurementPoint = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.measurementPoint = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `measurementPoint` property exists and has a value; `false` otherwise
   */
  public hasMeasurementPoint(): boolean {
    return this.hasMeasurementPointElement();
  }

  /**
   * @returns the `country` property value as a CodeableConcept array
   */
  public getCountry(): CodeableConcept[] {
    return this.country ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `country` property.
   *
   * @param value - the `country` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCountry(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Ingredient.substance.strength.country; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.country = value;
    } else {
      this.country = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `country` array property.
   *
   * @param value - the `country` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addCountry(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Ingredient.substance.strength.country; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initCountry();
      this.country?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `country` property exists and has a value; `false` otherwise
   */
  public hasCountry(): boolean {
    return isDefinedList<CodeableConcept>(this.country) && this.country.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `country` property
   */
  private initCountry(): void {
    if(!this.hasCountry()) {
      this.country = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `referenceStrength` property value as a IngredientSubstanceStrengthReferenceStrengthComponent array
   */
  public getReferenceStrength(): IngredientSubstanceStrengthReferenceStrengthComponent[] {
    return this.referenceStrength ?? ([] as IngredientSubstanceStrengthReferenceStrengthComponent[]);
  }

  /**
   * Assigns the provided IngredientSubstanceStrengthReferenceStrengthComponent array value to the `referenceStrength` property.
   *
   * @param value - the `referenceStrength` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setReferenceStrength(value: IngredientSubstanceStrengthReferenceStrengthComponent[] | undefined): this {
    if (isDefinedList<IngredientSubstanceStrengthReferenceStrengthComponent>(value)) {
      const optErrMsg = `Invalid Ingredient.substance.strength.referenceStrength; Provided value array has an element that is not an instance of IngredientSubstanceStrengthReferenceStrengthComponent.`;
      assertFhirTypeList<IngredientSubstanceStrengthReferenceStrengthComponent>(value, IngredientSubstanceStrengthReferenceStrengthComponent, optErrMsg);
      this.referenceStrength = value;
    } else {
      this.referenceStrength = undefined;
    }
    return this;
  }

  /**
   * Add the provided IngredientSubstanceStrengthReferenceStrengthComponent value to the `referenceStrength` array property.
   *
   * @param value - the `referenceStrength` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addReferenceStrength(value: IngredientSubstanceStrengthReferenceStrengthComponent | undefined): this {
    if (isDefined<IngredientSubstanceStrengthReferenceStrengthComponent>(value)) {
      const optErrMsg = `Invalid Ingredient.substance.strength.referenceStrength; Provided element is not an instance of IngredientSubstanceStrengthReferenceStrengthComponent.`;
      assertFhirType<IngredientSubstanceStrengthReferenceStrengthComponent>(value, IngredientSubstanceStrengthReferenceStrengthComponent, optErrMsg);
      this.initReferenceStrength();
      this.referenceStrength?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `referenceStrength` property exists and has a value; `false` otherwise
   */
  public hasReferenceStrength(): boolean {
    return isDefinedList<IngredientSubstanceStrengthReferenceStrengthComponent>(this.referenceStrength) && this.referenceStrength.some((item: IngredientSubstanceStrengthReferenceStrengthComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `referenceStrength` property
   */
  private initReferenceStrength(): void {
    if(!this.hasReferenceStrength()) {
      this.referenceStrength = [] as IngredientSubstanceStrengthReferenceStrengthComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Ingredient.substance.strength';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.presentation,
      this.textPresentation,
      this.concentration,
      this.textConcentration,
      this.measurementPoint,
      this.country,
      this.referenceStrength,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): IngredientSubstanceStrengthComponent {
    const dest = new IngredientSubstanceStrengthComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: IngredientSubstanceStrengthComponent): void {
    super.copyValues(dest);
    dest.presentation = this.presentation?.copy() as IDataType;
    dest.textPresentation = this.textPresentation?.copy();
    dest.concentration = this.concentration?.copy() as IDataType;
    dest.textConcentration = this.textConcentration?.copy();
    dest.measurementPoint = this.measurementPoint?.copy();
    const countryList = copyListValues<CodeableConcept>(this.country);
    dest.country = countryList.length === 0 ? undefined : countryList;
    const referenceStrengthList = copyListValues<IngredientSubstanceStrengthReferenceStrengthComponent>(this.referenceStrength);
    dest.referenceStrength = referenceStrengthList.length === 0 ? undefined : referenceStrengthList;
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

    if (this.hasPresentation()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getPresentation()!, 'presentation', jsonObj);
    }

    if (this.hasTextPresentationElement()) {
      setFhirPrimitiveJson<fhirString>(this.getTextPresentationElement(), 'textPresentation', jsonObj);
    }

    if (this.hasConcentration()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getConcentration()!, 'concentration', jsonObj);
    }

    if (this.hasTextConcentrationElement()) {
      setFhirPrimitiveJson<fhirString>(this.getTextConcentrationElement(), 'textConcentration', jsonObj);
    }

    if (this.hasMeasurementPointElement()) {
      setFhirPrimitiveJson<fhirString>(this.getMeasurementPointElement(), 'measurementPoint', jsonObj);
    }

    if (this.hasCountry()) {
      setFhirComplexListJson(this.getCountry(), 'country', jsonObj);
    }

    if (this.hasReferenceStrength()) {
      setFhirBackboneElementListJson(this.getReferenceStrength(), 'referenceStrength', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * IngredientSubstanceStrengthReferenceStrengthComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Strength expressed in terms of a reference substance
 * - **Definition:** Strength expressed in terms of a reference substance. For when the ingredient strength is additionally expressed as equivalent to the strength of some other closely related substance (e.g. salt vs. base). Reference strength represents the strength (quantitative composition) of the active moiety of the active substance. There are situations when the active substance and active moiety are different, therefore both a strength and a reference strength are needed.
 *
 * @category Data Models: Resource
 * @see [FHIR Ingredient](http://hl7.org/fhir/StructureDefinition/Ingredient)
 */
export class IngredientSubstanceStrengthReferenceStrengthComponent extends BackboneElement implements IBackboneElement {
  constructor(strength: IDataType | null = null) {
    super();

    this.strength = null;
    if (isDefined<IDataType>(strength)) {
      this.setStrength(strength);
    }

  }

  /**
   * Parse the provided `IngredientSubstanceStrengthReferenceStrengthComponent` JSON to instantiate the IngredientSubstanceStrengthReferenceStrengthComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `IngredientSubstanceStrengthReferenceStrengthComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to IngredientSubstanceStrengthReferenceStrengthComponent
   * @returns IngredientSubstanceStrengthReferenceStrengthComponent data model or undefined for `IngredientSubstanceStrengthReferenceStrengthComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): IngredientSubstanceStrengthReferenceStrengthComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'IngredientSubstanceStrengthReferenceStrengthComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new IngredientSubstanceStrengthReferenceStrengthComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    const classMetadata: DecoratorMetadataObject | null = IngredientSubstanceStrengthReferenceStrengthComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for IngredientSubstanceStrengthReferenceStrengthComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    fieldName = 'substance';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableReference | undefined = CodeableReference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setSubstance(datatype);
    }

    fieldName = 'strength[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const strength: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    if (strength === undefined) {
      instance.setStrength(null);
    } else {
      instance.setStrength(strength);
    }

    fieldName = 'measurementPoint';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setMeasurementPointElement(datatype);
    }

    fieldName = 'country';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addCountry(datatype);
        }
      });
    }

    return instance;
  }

  /**
   * Ingredient.substance.strength.referenceStrength.substance Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Relevant reference substance
   * - **Definition:** Relevant reference substance.
   * - **FHIR Type:** `CodeableReference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/SubstanceDefinition',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private substance?: CodeableReference | undefined;

  /**
   * Ingredient.substance.strength.referenceStrength.strength[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('Ingredient.substance.strength.referenceStrength.strength[x]', ['Ratio','RatioRange',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Strength expressed in terms of a reference substance
   * - **Definition:** Strength expressed in terms of a reference substance.
   * - **FHIR Types:**
   *     'Ratio',
   *     'RatioRange',
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  @ChoiceDataTypesMeta('Ingredient.substance.strength.referenceStrength.strength[x]',[
    'Ratio',
    'RatioRange',
  ])
  private strength: IDataType | null;

  /**
   * Ingredient.substance.strength.referenceStrength.measurementPoint Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When strength is measured at a particular point or distance
   * - **Definition:** For when strength is measured at a particular point or distance.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private measurementPoint?: StringType | undefined;

  /**
   * Ingredient.substance.strength.referenceStrength.country Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Where the strength range applies
   * - **Definition:** The country or countries for which the strength range applies.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private country?: CodeableConcept[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `substance` property value as a CodeableReference object if defined; else an empty CodeableReference object
   */
  public getSubstance(): CodeableReference {
    return this.substance ?? new CodeableReference();
  }

  /**
   * Assigns the provided Substance object value to the `substance` property.
   *
   * @param value - the `substance` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSubstance(value: CodeableReference | undefined): this {
    if (isDefined<CodeableReference>(value)) {
      const optErrMsg = `Invalid Ingredient.substance.strength.referenceStrength.substance; Provided element is not an instance of CodeableReference.`;
      assertFhirType<CodeableReference>(value, CodeableReference, optErrMsg);
      this.substance = value;
    } else {
      this.substance = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `substance` property exists and has a value; `false` otherwise
   */
  public hasSubstance(): boolean {
    return isDefined<CodeableReference>(this.substance) && !this.substance.isEmpty();
  }

  /**
   * @returns the `strength` property value as a DataType object; else null
   */
  public getStrength(): IDataType | null {
    return this.strength;
  }

  /**
   * Assigns the provided DataType object value to the `strength` property.
   *
   * @decorator `@ChoiceDataTypes('Ingredient.substance.strength.referenceStrength.strength[x]')`
   *
   * @param value - the `strength` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('Ingredient.substance.strength.referenceStrength.strength[x]')
  public setStrength(value: IDataType | undefined | null): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.strength = value;
    } else {
      this.strength = null;
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
   * @returns the `strength` property value as a Ratio object if defined; else null
   */
  public getStrengthRatio(): Ratio | null {
    if (!isDefined<IDataType>(this.strength)) {
      return null;
    }
    if (!(this.strength instanceof Ratio)) {
      throw new InvalidTypeError(
        `DataType mismatch for Ingredient.substance.strength.referenceStrength.strength[x]: Expected Ratio but encountered ${this.strength.fhirType()}`,
      );
    }
    return this.strength;
  }

  /**
   * @returns `true` if the `` property exists as a Ratio and has a value; `false` otherwise
   */
  public hasStrengthRatio(): boolean {
    return this.hasStrength() && this.strength instanceof Ratio;
  }

  /**
   * @returns the `strength` property value as a RatioRange object if defined; else null
   */
  public getStrengthRatioRange(): RatioRange | null {
    if (!isDefined<IDataType>(this.strength)) {
      return null;
    }
    if (!(this.strength instanceof RatioRange)) {
      throw new InvalidTypeError(
        `DataType mismatch for Ingredient.substance.strength.referenceStrength.strength[x]: Expected RatioRange but encountered ${this.strength.fhirType()}`,
      );
    }
    return this.strength;
  }

  /**
   * @returns `true` if the `` property exists as a RatioRange and has a value; `false` otherwise
   */
  public hasStrengthRatioRange(): boolean {
    return this.hasStrength() && this.strength instanceof RatioRange;
  }

  // End of choice datatype-specific "get"/"has" methods

  /**
   * @returns the `measurementPoint` property value as a StringType object if defined; else an empty StringType object
   */
  public getMeasurementPointElement(): StringType {
    return this.measurementPoint ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `measurementPoint` property.
   *
   * @param element - the `measurementPoint` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setMeasurementPointElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid Ingredient.substance.strength.referenceStrength.measurementPoint; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.measurementPoint = element;
    } else {
      this.measurementPoint = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `measurementPoint` property exists and has a value; `false` otherwise
   */
  public hasMeasurementPointElement(): boolean {
    return isDefined<StringType>(this.measurementPoint) && !this.measurementPoint.isEmpty();
  }

  /**
   * @returns the `measurementPoint` property value as a fhirString if defined; else undefined
   */
  public getMeasurementPoint(): fhirString | undefined {
    return this.measurementPoint?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `measurementPoint` property.
   *
   * @param value - the `measurementPoint` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setMeasurementPoint(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid Ingredient.substance.strength.referenceStrength.measurementPoint (${String(value)})`;
      this.measurementPoint = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.measurementPoint = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `measurementPoint` property exists and has a value; `false` otherwise
   */
  public hasMeasurementPoint(): boolean {
    return this.hasMeasurementPointElement();
  }

  /**
   * @returns the `country` property value as a CodeableConcept array
   */
  public getCountry(): CodeableConcept[] {
    return this.country ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `country` property.
   *
   * @param value - the `country` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCountry(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Ingredient.substance.strength.referenceStrength.country; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.country = value;
    } else {
      this.country = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `country` array property.
   *
   * @param value - the `country` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addCountry(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Ingredient.substance.strength.referenceStrength.country; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initCountry();
      this.country?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `country` property exists and has a value; `false` otherwise
   */
  public hasCountry(): boolean {
    return isDefinedList<CodeableConcept>(this.country) && this.country.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `country` property
   */
  private initCountry(): void {
    if(!this.hasCountry()) {
      this.country = [] as CodeableConcept[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Ingredient.substance.strength.referenceStrength';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.substance,
      this.strength,
      this.measurementPoint,
      this.country,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.strength, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): IngredientSubstanceStrengthReferenceStrengthComponent {
    const dest = new IngredientSubstanceStrengthReferenceStrengthComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: IngredientSubstanceStrengthReferenceStrengthComponent): void {
    super.copyValues(dest);
    dest.substance = this.substance?.copy();
    dest.strength = this.strength ? this.strength.copy() as IDataType : null;
    dest.measurementPoint = this.measurementPoint?.copy();
    const countryList = copyListValues<CodeableConcept>(this.country);
    dest.country = countryList.length === 0 ? undefined : countryList;
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

    if (this.hasSubstance()) {
      setFhirComplexJson(this.getSubstance(), 'substance', jsonObj);
    }

    if (this.hasStrength()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getStrength()!, 'strength', jsonObj);
    } else {
      jsonObj['strength'] = null;
    }

    if (this.hasMeasurementPointElement()) {
      setFhirPrimitiveJson<fhirString>(this.getMeasurementPointElement(), 'measurementPoint', jsonObj);
    }

    if (this.hasCountry()) {
      setFhirComplexListJson(this.getCountry(), 'country', jsonObj);
    }

    return jsonObj;
  }
}
