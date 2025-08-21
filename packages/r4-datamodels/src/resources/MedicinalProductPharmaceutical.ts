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
 * MedicinalProductPharmaceutical Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/MedicinalProductPharmaceutical
 * StructureDefinition.name: MedicinalProductPharmaceutical
 * StructureDefinition.description: A pharmaceutical product described in terms of its composition and dose form.
 * StructureDefinition.fhirVersion: 4.0.1
 *
 * For questions, suggestions, or bugs, please open an issue at [GitHub ts-fhir-datamodels/issues](https://github.com/Paqrat76/ts-fhir-datamodels/issues).
 *
 * @packageDocumentation
 */

import { strict as assert } from 'node:assert';
import {
  BackboneElement,
  DomainResource,
  FhirError,
  FhirParser,
  IBackboneElement,
  IDomainResource,
  INSTANCE_EMPTY_ERROR_MSG,
  JSON,
  REQUIRED_PROPERTIES_DO_NOT_EXIST,
  REQUIRED_PROPERTIES_REQD_IN_JSON,
  ReferenceTargets,
  StringType,
  assertFhirType,
  assertFhirTypeList,
  assertIsDefined,
  assertIsDefinedList,
  copyListValues,
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
  setFhirComplexListJson,
  setFhirPrimitiveJson,
} from '@paq-ts-fhir/fhir-core';
import { CodeableConcept, Duration, Identifier, PARSABLE_DATATYPE_MAP, Quantity, Ratio, Reference } from '../complex-types/complex-datatypes';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';

/**
 * MedicinalProductPharmaceutical Class
 *
 * @remarks
 * A pharmaceutical product described in terms of its composition and dose form.
 *
 * **FHIR Specification**
 * - **Short:** A pharmaceutical product described in terms of its composition and dose form
 * - **Definition:** A pharmaceutical product described in terms of its composition and dose form.
 * - **FHIR Version:** 4.0.1
 *
 * @category Data Models: Resource
 * @see [FHIR MedicinalProductPharmaceutical](http://hl7.org/fhir/StructureDefinition/MedicinalProductPharmaceutical)
 */
export class MedicinalProductPharmaceutical extends DomainResource implements IDomainResource {
  constructor(administrableDoseForm: CodeableConcept | null = null, routeOfAdministration: MedicinalProductPharmaceuticalRouteOfAdministrationComponent[] | null = null) {
    super();

    this.administrableDoseForm = null;
    if (isDefined<CodeableConcept>(administrableDoseForm)) {
      this.setAdministrableDoseForm(administrableDoseForm);
    }

    this.routeOfAdministration = null;
    if (isDefinedList<MedicinalProductPharmaceuticalRouteOfAdministrationComponent>(routeOfAdministration)) {
      this.setRouteOfAdministration(routeOfAdministration);
    }
  }

  /**
   * Parse the provided `MedicinalProductPharmaceutical` JSON to instantiate the MedicinalProductPharmaceutical data model.
   *
   * @param sourceJson - JSON representing FHIR `MedicinalProductPharmaceutical`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to MedicinalProductPharmaceutical
   * @returns MedicinalProductPharmaceutical data model or undefined for `MedicinalProductPharmaceutical`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): MedicinalProductPharmaceutical | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'MedicinalProductPharmaceutical';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new MedicinalProductPharmaceutical();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'MedicinalProductPharmaceutical');
    fhirParser.processDomainResourceJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

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

    fieldName = 'administrableDoseForm';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setAdministrableDoseForm(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'unitOfPresentation';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setUnitOfPresentation(datatype);
    }

    fieldName = 'ingredient';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addIngredient(datatype);
        }
      });
  }

    fieldName = 'device';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addDevice(datatype);
        }
      });
  }

    fieldName = 'characteristics';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: MedicinalProductPharmaceuticalCharacteristicsComponent | undefined = MedicinalProductPharmaceuticalCharacteristicsComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addCharacteristics(component);
        }
      });
    }

    fieldName = 'routeOfAdministration';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: MedicinalProductPharmaceuticalRouteOfAdministrationComponent | undefined = MedicinalProductPharmaceuticalRouteOfAdministrationComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component === undefined) {
          missingReqdProperties.push(`${sourceField}[${String(idx)}]`);
        } else {
          instance.addRouteOfAdministration(component);
        }
      });
    } else {
      missingReqdProperties.push(sourceField);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_REQD_IN_JSON} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * MedicinalProductPharmaceutical.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** An identifier for the pharmaceutical medicinal product
   * - **Definition:** An identifier for the pharmaceutical medicinal product.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier[] | undefined;

  /**
   * MedicinalProductPharmaceutical.administrableDoseForm Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The administrable dose form, after necessary reconstitution
   * - **Definition:** The administrable dose form, after necessary reconstitution.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private administrableDoseForm: CodeableConcept | null;

  /**
   * MedicinalProductPharmaceutical.unitOfPresentation Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Todo
   * - **Definition:** Todo.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private unitOfPresentation?: CodeableConcept | undefined;

  /**
   * MedicinalProductPharmaceutical.ingredient Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Ingredient
   * - **Definition:** Ingredient.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/MedicinalProductIngredient',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private ingredient?: Reference[] | undefined;

  /**
   * MedicinalProductPharmaceutical.device Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Accompanying device
   * - **Definition:** Accompanying device.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/DeviceDefinition',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private device?: Reference[] | undefined;

  /**
   * MedicinalProductPharmaceutical.characteristics Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Characteristics e.g. a products onset of action
   * - **Definition:** Characteristics e.g. a products onset of action.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private characteristics?: MedicinalProductPharmaceuticalCharacteristicsComponent[] | undefined;

  /**
   * MedicinalProductPharmaceutical.routeOfAdministration Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The path by which the pharmaceutical product is taken into or makes contact with the body
   * - **Definition:** The path by which the pharmaceutical product is taken into or makes contact with the body.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 1..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private routeOfAdministration: MedicinalProductPharmaceuticalRouteOfAdministrationComponent[] | null;

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
      const optErrMsg = `Invalid MedicinalProductPharmaceutical.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid MedicinalProductPharmaceutical.identifier; Provided element is not an instance of Identifier.`;
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
   * @returns the `administrableDoseForm` property value as a CodeableConcept object if defined; else null
   */
  public getAdministrableDoseForm(): CodeableConcept | null {
    return this.administrableDoseForm;
  }

  /**
   * Assigns the provided CodeableConcept object value to the `administrableDoseForm` property.
   *
   * @param value - the `administrableDoseForm` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAdministrableDoseForm(value: CodeableConcept): this {
    assertIsDefined<CodeableConcept>(value, `MedicinalProductPharmaceutical.administrableDoseForm is required`);
    const optErrMsg = `Invalid MedicinalProductPharmaceutical.administrableDoseForm; Provided element is not an instance of CodeableConcept.`;
    assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
    this.administrableDoseForm = value;
    return this;
  }

  /**
   * @returns `true` if the `administrableDoseForm` property exists and has a value; `false` otherwise
   */
  public hasAdministrableDoseForm(): boolean {
    return isDefined<CodeableConcept>(this.administrableDoseForm) && !this.administrableDoseForm.isEmpty();
  }

  /**
   * @returns the `unitOfPresentation` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getUnitOfPresentation(): CodeableConcept {
    return this.unitOfPresentation ?? new CodeableConcept();
  }

  /**
   * Assigns the provided UnitOfPresentation object value to the `unitOfPresentation` property.
   *
   * @param value - the `unitOfPresentation` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setUnitOfPresentation(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid MedicinalProductPharmaceutical.unitOfPresentation; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.unitOfPresentation = value;
    } else {
      this.unitOfPresentation = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `unitOfPresentation` property exists and has a value; `false` otherwise
   */
  public hasUnitOfPresentation(): boolean {
    return isDefined<CodeableConcept>(this.unitOfPresentation) && !this.unitOfPresentation.isEmpty();
  }

  /**
   * @returns the `ingredient` property value as a Reference array
   */
  public getIngredient(): Reference[] {
    return this.ingredient ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `ingredient` property.
   *
   * @decorator `@ReferenceTargets('MedicinalProductPharmaceutical.ingredient', ['MedicinalProductIngredient',])`
   *
   * @param value - the `ingredient` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicinalProductPharmaceutical.ingredient', [
    'MedicinalProductIngredient',
  ])
  public setIngredient(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.ingredient = value;
    } else {
      this.ingredient = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `ingredient` array property.
   *
   * @decorator `@ReferenceTargets('MedicinalProductPharmaceutical.ingredient', ['MedicinalProductIngredient',])`
   *
   * @param value - the `ingredient` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicinalProductPharmaceutical.ingredient', [
    'MedicinalProductIngredient',
  ])
  public addIngredient(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initIngredient();
      this.ingredient?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `ingredient` property exists and has a value; `false` otherwise
   */
  public hasIngredient(): boolean {
    return isDefinedList<Reference>(this.ingredient) && this.ingredient.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `ingredient` property
   */
  private initIngredient(): void {
    if (!this.hasIngredient()) {
      this.ingredient = [] as Reference[];
    }
  }

  /**
   * @returns the `device` property value as a Reference array
   */
  public getDevice(): Reference[] {
    return this.device ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `device` property.
   *
   * @decorator `@ReferenceTargets('MedicinalProductPharmaceutical.device', ['DeviceDefinition',])`
   *
   * @param value - the `device` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicinalProductPharmaceutical.device', [
    'DeviceDefinition',
  ])
  public setDevice(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.device = value;
    } else {
      this.device = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `device` array property.
   *
   * @decorator `@ReferenceTargets('MedicinalProductPharmaceutical.device', ['DeviceDefinition',])`
   *
   * @param value - the `device` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicinalProductPharmaceutical.device', [
    'DeviceDefinition',
  ])
  public addDevice(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initDevice();
      this.device?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `device` property exists and has a value; `false` otherwise
   */
  public hasDevice(): boolean {
    return isDefinedList<Reference>(this.device) && this.device.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `device` property
   */
  private initDevice(): void {
    if (!this.hasDevice()) {
      this.device = [] as Reference[];
    }
  }

  /**
   * @returns the `characteristics` property value as a MedicinalProductPharmaceuticalCharacteristicsComponent array
   */
  public getCharacteristics(): MedicinalProductPharmaceuticalCharacteristicsComponent[] {
    return this.characteristics ?? ([] as MedicinalProductPharmaceuticalCharacteristicsComponent[]);
  }

  /**
   * Assigns the provided MedicinalProductPharmaceuticalCharacteristicsComponent array value to the `characteristics` property.
   *
   * @param value - the `characteristics` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCharacteristics(value: MedicinalProductPharmaceuticalCharacteristicsComponent[] | undefined): this {
    if (isDefinedList<MedicinalProductPharmaceuticalCharacteristicsComponent>(value)) {
      const optErrMsg = `Invalid MedicinalProductPharmaceutical.characteristics; Provided value array has an element that is not an instance of MedicinalProductPharmaceuticalCharacteristicsComponent.`;
      assertFhirTypeList<MedicinalProductPharmaceuticalCharacteristicsComponent>(value, MedicinalProductPharmaceuticalCharacteristicsComponent, optErrMsg);
      this.characteristics = value;
    } else {
      this.characteristics = undefined;
    }
    return this;
  }

  /**
   * Add the provided MedicinalProductPharmaceuticalCharacteristicsComponent value to the `characteristics` array property.
   *
   * @param value - the `characteristics` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addCharacteristics(value: MedicinalProductPharmaceuticalCharacteristicsComponent | undefined): this {
    if (isDefined<MedicinalProductPharmaceuticalCharacteristicsComponent>(value)) {
      const optErrMsg = `Invalid MedicinalProductPharmaceutical.characteristics; Provided element is not an instance of MedicinalProductPharmaceuticalCharacteristicsComponent.`;
      assertFhirType<MedicinalProductPharmaceuticalCharacteristicsComponent>(value, MedicinalProductPharmaceuticalCharacteristicsComponent, optErrMsg);
      this.initCharacteristics();
      this.characteristics?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `characteristics` property exists and has a value; `false` otherwise
   */
  public hasCharacteristics(): boolean {
    return isDefinedList<MedicinalProductPharmaceuticalCharacteristicsComponent>(this.characteristics) && this.characteristics.some((item: MedicinalProductPharmaceuticalCharacteristicsComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `characteristics` property
   */
  private initCharacteristics(): void {
    if(!this.hasCharacteristics()) {
      this.characteristics = [] as MedicinalProductPharmaceuticalCharacteristicsComponent[];
    }
  }

  /**
   * @returns the `routeOfAdministration` property value as a MedicinalProductPharmaceuticalRouteOfAdministrationComponent array
   */
  public getRouteOfAdministration(): MedicinalProductPharmaceuticalRouteOfAdministrationComponent[] {
    return this.routeOfAdministration ?? ([] as MedicinalProductPharmaceuticalRouteOfAdministrationComponent[]);
  }

  /**
   * Assigns the provided MedicinalProductPharmaceuticalRouteOfAdministrationComponent array value to the `routeOfAdministration` property.
   *
   * @param value - the `routeOfAdministration` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setRouteOfAdministration(value: MedicinalProductPharmaceuticalRouteOfAdministrationComponent[]): this {
    assertIsDefinedList<MedicinalProductPharmaceuticalRouteOfAdministrationComponent>(value, `MedicinalProductPharmaceutical.routeOfAdministration is required`);
    const optErrMsg = `Invalid MedicinalProductPharmaceutical.routeOfAdministration; Provided value array has an element that is not an instance of MedicinalProductPharmaceuticalRouteOfAdministrationComponent.`;
    assertFhirTypeList<MedicinalProductPharmaceuticalRouteOfAdministrationComponent>(value, MedicinalProductPharmaceuticalRouteOfAdministrationComponent, optErrMsg);
    this.routeOfAdministration = value;
    return this;
  }

  /**
   * Add the provided MedicinalProductPharmaceuticalRouteOfAdministrationComponent value to the `routeOfAdministration` array property.
   *
   * @param value - the `routeOfAdministration` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addRouteOfAdministration(value: MedicinalProductPharmaceuticalRouteOfAdministrationComponent | undefined): this {
    if (isDefined<MedicinalProductPharmaceuticalRouteOfAdministrationComponent>(value)) {
      const optErrMsg = `Invalid MedicinalProductPharmaceutical.routeOfAdministration; Provided element is not an instance of MedicinalProductPharmaceuticalRouteOfAdministrationComponent.`;
      assertFhirType<MedicinalProductPharmaceuticalRouteOfAdministrationComponent>(value, MedicinalProductPharmaceuticalRouteOfAdministrationComponent, optErrMsg);
      this.initRouteOfAdministration();
      this.routeOfAdministration?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `routeOfAdministration` property exists and has a value; `false` otherwise
   */
  public hasRouteOfAdministration(): boolean {
    return isDefinedList<MedicinalProductPharmaceuticalRouteOfAdministrationComponent>(this.routeOfAdministration) && this.routeOfAdministration.some((item: MedicinalProductPharmaceuticalRouteOfAdministrationComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `routeOfAdministration` property
   */
  private initRouteOfAdministration(): void {
    if(!this.hasRouteOfAdministration()) {
      this.routeOfAdministration = [] as MedicinalProductPharmaceuticalRouteOfAdministrationComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'MedicinalProductPharmaceutical';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identifier,
      this.administrableDoseForm,
      this.unitOfPresentation,
      this.ingredient,
      this.device,
      this.characteristics,
      this.routeOfAdministration,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): MedicinalProductPharmaceutical {
    const dest = new MedicinalProductPharmaceutical();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: MedicinalProductPharmaceutical): void {
    super.copyValues(dest);
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    dest.administrableDoseForm = this.administrableDoseForm ? this.administrableDoseForm.copy() : null;
    dest.unitOfPresentation = this.unitOfPresentation?.copy();
    const ingredientList = copyListValues<Reference>(this.ingredient);
    dest.ingredient = ingredientList.length === 0 ? undefined : ingredientList;
    const deviceList = copyListValues<Reference>(this.device);
    dest.device = deviceList.length === 0 ? undefined : deviceList;
    const characteristicsList = copyListValues<MedicinalProductPharmaceuticalCharacteristicsComponent>(this.characteristics);
    dest.characteristics = characteristicsList.length === 0 ? undefined : characteristicsList;
    const routeOfAdministrationList = copyListValues<MedicinalProductPharmaceuticalRouteOfAdministrationComponent>(this.routeOfAdministration);
    dest.routeOfAdministration = routeOfAdministrationList.length === 0 ? null : routeOfAdministrationList;
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

    if (this.hasAdministrableDoseForm()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getAdministrableDoseForm()!, 'administrableDoseForm', jsonObj);
    } else {
      missingReqdProperties.push(`MedicinalProductPharmaceutical.administrableDoseForm`);
    }

    if (this.hasUnitOfPresentation()) {
      setFhirComplexJson(this.getUnitOfPresentation(), 'unitOfPresentation', jsonObj);
    }

    if (this.hasIngredient()) {
      setFhirComplexListJson(this.getIngredient(), 'ingredient', jsonObj);
    }

    if (this.hasDevice()) {
      setFhirComplexListJson(this.getDevice(), 'device', jsonObj);
    }

    if (this.hasCharacteristics()) {
      setFhirBackboneElementListJson(this.getCharacteristics(), 'characteristics', jsonObj);
    }

    if (this.hasRouteOfAdministration()) {
      setFhirBackboneElementListJson(this.getRouteOfAdministration(), 'routeOfAdministration', jsonObj);
    } else {
      missingReqdProperties.push(`MedicinalProductPharmaceutical.routeOfAdministration`);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}

/**
 * MedicinalProductPharmaceuticalCharacteristicsComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Characteristics e.g. a products onset of action
 * - **Definition:** Characteristics e.g. a products onset of action.
 *
 * @category Data Models: Resource
 * @see [FHIR MedicinalProductPharmaceutical](http://hl7.org/fhir/StructureDefinition/MedicinalProductPharmaceutical)
 */
export class MedicinalProductPharmaceuticalCharacteristicsComponent extends BackboneElement implements IBackboneElement {
  constructor(code: CodeableConcept | null = null) {
    super();

    this.code = null;
    if (isDefined<CodeableConcept>(code)) {
      this.setCode(code);
    }
  }

  /**
   * Parse the provided `MedicinalProductPharmaceuticalCharacteristicsComponent` JSON to instantiate the MedicinalProductPharmaceuticalCharacteristicsComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `MedicinalProductPharmaceuticalCharacteristicsComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to MedicinalProductPharmaceuticalCharacteristicsComponent
   * @returns MedicinalProductPharmaceuticalCharacteristicsComponent data model or undefined for `MedicinalProductPharmaceuticalCharacteristicsComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): MedicinalProductPharmaceuticalCharacteristicsComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'MedicinalProductPharmaceuticalCharacteristicsComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new MedicinalProductPharmaceuticalCharacteristicsComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    const missingReqdProperties: string[] = [];

    fieldName = 'code';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setCode(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'status';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setStatus(datatype);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_REQD_IN_JSON} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * MedicinalProductPharmaceutical.characteristics.code Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A coded characteristic
   * - **Definition:** A coded characteristic.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private code: CodeableConcept | null;

  /**
   * MedicinalProductPharmaceutical.characteristics.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The status of characteristic e.g. assigned or pending
   * - **Definition:** The status of characteristic e.g. assigned or pending.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private status?: CodeableConcept | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `code` property value as a CodeableConcept object if defined; else null
   */
  public getCode(): CodeableConcept | null {
    return this.code;
  }

  /**
   * Assigns the provided CodeableConcept object value to the `code` property.
   *
   * @param value - the `code` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCode(value: CodeableConcept): this {
    assertIsDefined<CodeableConcept>(value, `MedicinalProductPharmaceutical.characteristics.code is required`);
    const optErrMsg = `Invalid MedicinalProductPharmaceutical.characteristics.code; Provided element is not an instance of CodeableConcept.`;
    assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
    this.code = value;
    return this;
  }

  /**
   * @returns `true` if the `code` property exists and has a value; `false` otherwise
   */
  public hasCode(): boolean {
    return isDefined<CodeableConcept>(this.code) && !this.code.isEmpty();
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
      const optErrMsg = `Invalid MedicinalProductPharmaceutical.characteristics.status; Provided element is not an instance of CodeableConcept.`;
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

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'MedicinalProductPharmaceutical.characteristics';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.code,
      this.status,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): MedicinalProductPharmaceuticalCharacteristicsComponent {
    const dest = new MedicinalProductPharmaceuticalCharacteristicsComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: MedicinalProductPharmaceuticalCharacteristicsComponent): void {
    super.copyValues(dest);
    dest.code = this.code ? this.code.copy() : null;
    dest.status = this.status?.copy();
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

    if (this.hasCode()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getCode()!, 'code', jsonObj);
    } else {
      missingReqdProperties.push(`MedicinalProductPharmaceutical.characteristics.code`);
    }

    if (this.hasStatus()) {
      setFhirComplexJson(this.getStatus(), 'status', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
/**
 * MedicinalProductPharmaceuticalRouteOfAdministrationComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** The path by which the pharmaceutical product is taken into or makes contact with the body
 * - **Definition:** The path by which the pharmaceutical product is taken into or makes contact with the body.
 *
 * @category Data Models: Resource
 * @see [FHIR MedicinalProductPharmaceutical](http://hl7.org/fhir/StructureDefinition/MedicinalProductPharmaceutical)
 */
export class MedicinalProductPharmaceuticalRouteOfAdministrationComponent extends BackboneElement implements IBackboneElement {
  constructor(code: CodeableConcept | null = null) {
    super();

    this.code = null;
    if (isDefined<CodeableConcept>(code)) {
      this.setCode(code);
    }
  }

  /**
   * Parse the provided `MedicinalProductPharmaceuticalRouteOfAdministrationComponent` JSON to instantiate the MedicinalProductPharmaceuticalRouteOfAdministrationComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `MedicinalProductPharmaceuticalRouteOfAdministrationComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to MedicinalProductPharmaceuticalRouteOfAdministrationComponent
   * @returns MedicinalProductPharmaceuticalRouteOfAdministrationComponent data model or undefined for `MedicinalProductPharmaceuticalRouteOfAdministrationComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): MedicinalProductPharmaceuticalRouteOfAdministrationComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'MedicinalProductPharmaceuticalRouteOfAdministrationComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new MedicinalProductPharmaceuticalRouteOfAdministrationComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    const missingReqdProperties: string[] = [];

    fieldName = 'code';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setCode(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'firstDose';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Quantity | undefined = Quantity.parse(classJsonObj[fieldName]!, sourceField);
      instance.setFirstDose(datatype);
    }

    fieldName = 'maxSingleDose';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Quantity | undefined = Quantity.parse(classJsonObj[fieldName]!, sourceField);
      instance.setMaxSingleDose(datatype);
    }

    fieldName = 'maxDosePerDay';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Quantity | undefined = Quantity.parse(classJsonObj[fieldName]!, sourceField);
      instance.setMaxDosePerDay(datatype);
    }

    fieldName = 'maxDosePerTreatmentPeriod';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Ratio | undefined = Ratio.parse(classJsonObj[fieldName]!, sourceField);
      instance.setMaxDosePerTreatmentPeriod(datatype);
    }

    fieldName = 'maxTreatmentPeriod';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Duration | undefined = Duration.parse(classJsonObj[fieldName]!, sourceField);
      instance.setMaxTreatmentPeriod(datatype);
    }

    fieldName = 'targetSpecies';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesComponent | undefined = MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addTargetSpecies(component);
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
   * MedicinalProductPharmaceutical.routeOfAdministration.code Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Coded expression for the route
   * - **Definition:** Coded expression for the route.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private code: CodeableConcept | null;

  /**
   * MedicinalProductPharmaceutical.routeOfAdministration.firstDose Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The first dose (dose quantity) administered in humans can be specified, for a product under investigation, using a numerical value and its unit of measurement
   * - **Definition:** The first dose (dose quantity) administered in humans can be specified, for a product under investigation, using a numerical value and its unit of measurement.
   * - **FHIR Type:** `Quantity`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private firstDose?: Quantity | undefined;

  /**
   * MedicinalProductPharmaceutical.routeOfAdministration.maxSingleDose Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The maximum single dose that can be administered as per the protocol of a clinical trial can be specified using a numerical value and its unit of measurement
   * - **Definition:** The maximum single dose that can be administered as per the protocol of a clinical trial can be specified using a numerical value and its unit of measurement.
   * - **FHIR Type:** `Quantity`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private maxSingleDose?: Quantity | undefined;

  /**
   * MedicinalProductPharmaceutical.routeOfAdministration.maxDosePerDay Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The maximum dose per day (maximum dose quantity to be administered in any one 24-h period) that can be administered as per the protocol referenced in the clinical trial authorisation
   * - **Definition:** The maximum dose per day (maximum dose quantity to be administered in any one 24-h period) that can be administered as per the protocol referenced in the clinical trial authorisation.
   * - **FHIR Type:** `Quantity`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private maxDosePerDay?: Quantity | undefined;

  /**
   * MedicinalProductPharmaceutical.routeOfAdministration.maxDosePerTreatmentPeriod Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The maximum dose per treatment period that can be administered as per the protocol referenced in the clinical trial authorisation
   * - **Definition:** The maximum dose per treatment period that can be administered as per the protocol referenced in the clinical trial authorisation.
   * - **FHIR Type:** `Ratio`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private maxDosePerTreatmentPeriod?: Ratio | undefined;

  /**
   * MedicinalProductPharmaceutical.routeOfAdministration.maxTreatmentPeriod Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The maximum treatment period during which an Investigational Medicinal Product can be administered as per the protocol referenced in the clinical trial authorisation
   * - **Definition:** The maximum treatment period during which an Investigational Medicinal Product can be administered as per the protocol referenced in the clinical trial authorisation.
   * - **FHIR Type:** `Duration`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private maxTreatmentPeriod?: Duration | undefined;

  /**
   * MedicinalProductPharmaceutical.routeOfAdministration.targetSpecies Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A species for which this route applies
   * - **Definition:** A species for which this route applies.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private targetSpecies?: MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesComponent[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `code` property value as a CodeableConcept object if defined; else null
   */
  public getCode(): CodeableConcept | null {
    return this.code;
  }

  /**
   * Assigns the provided CodeableConcept object value to the `code` property.
   *
   * @param value - the `code` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCode(value: CodeableConcept): this {
    assertIsDefined<CodeableConcept>(value, `MedicinalProductPharmaceutical.routeOfAdministration.code is required`);
    const optErrMsg = `Invalid MedicinalProductPharmaceutical.routeOfAdministration.code; Provided element is not an instance of CodeableConcept.`;
    assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
    this.code = value;
    return this;
  }

  /**
   * @returns `true` if the `code` property exists and has a value; `false` otherwise
   */
  public hasCode(): boolean {
    return isDefined<CodeableConcept>(this.code) && !this.code.isEmpty();
  }

  /**
   * @returns the `firstDose` property value as a Quantity object if defined; else an empty Quantity object
   */
  public getFirstDose(): Quantity {
    return this.firstDose ?? new Quantity();
  }

  /**
   * Assigns the provided FirstDose object value to the `firstDose` property.
   *
   * @param value - the `firstDose` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setFirstDose(value: Quantity | undefined): this {
    if (isDefined<Quantity>(value)) {
      const optErrMsg = `Invalid MedicinalProductPharmaceutical.routeOfAdministration.firstDose; Provided element is not an instance of Quantity.`;
      assertFhirType<Quantity>(value, Quantity, optErrMsg);
      this.firstDose = value;
    } else {
      this.firstDose = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `firstDose` property exists and has a value; `false` otherwise
   */
  public hasFirstDose(): boolean {
    return isDefined<Quantity>(this.firstDose) && !this.firstDose.isEmpty();
  }

  /**
   * @returns the `maxSingleDose` property value as a Quantity object if defined; else an empty Quantity object
   */
  public getMaxSingleDose(): Quantity {
    return this.maxSingleDose ?? new Quantity();
  }

  /**
   * Assigns the provided MaxSingleDose object value to the `maxSingleDose` property.
   *
   * @param value - the `maxSingleDose` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setMaxSingleDose(value: Quantity | undefined): this {
    if (isDefined<Quantity>(value)) {
      const optErrMsg = `Invalid MedicinalProductPharmaceutical.routeOfAdministration.maxSingleDose; Provided element is not an instance of Quantity.`;
      assertFhirType<Quantity>(value, Quantity, optErrMsg);
      this.maxSingleDose = value;
    } else {
      this.maxSingleDose = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `maxSingleDose` property exists and has a value; `false` otherwise
   */
  public hasMaxSingleDose(): boolean {
    return isDefined<Quantity>(this.maxSingleDose) && !this.maxSingleDose.isEmpty();
  }

  /**
   * @returns the `maxDosePerDay` property value as a Quantity object if defined; else an empty Quantity object
   */
  public getMaxDosePerDay(): Quantity {
    return this.maxDosePerDay ?? new Quantity();
  }

  /**
   * Assigns the provided MaxDosePerDay object value to the `maxDosePerDay` property.
   *
   * @param value - the `maxDosePerDay` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setMaxDosePerDay(value: Quantity | undefined): this {
    if (isDefined<Quantity>(value)) {
      const optErrMsg = `Invalid MedicinalProductPharmaceutical.routeOfAdministration.maxDosePerDay; Provided element is not an instance of Quantity.`;
      assertFhirType<Quantity>(value, Quantity, optErrMsg);
      this.maxDosePerDay = value;
    } else {
      this.maxDosePerDay = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `maxDosePerDay` property exists and has a value; `false` otherwise
   */
  public hasMaxDosePerDay(): boolean {
    return isDefined<Quantity>(this.maxDosePerDay) && !this.maxDosePerDay.isEmpty();
  }

  /**
   * @returns the `maxDosePerTreatmentPeriod` property value as a Ratio object if defined; else an empty Ratio object
   */
  public getMaxDosePerTreatmentPeriod(): Ratio {
    return this.maxDosePerTreatmentPeriod ?? new Ratio();
  }

  /**
   * Assigns the provided MaxDosePerTreatmentPeriod object value to the `maxDosePerTreatmentPeriod` property.
   *
   * @param value - the `maxDosePerTreatmentPeriod` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setMaxDosePerTreatmentPeriod(value: Ratio | undefined): this {
    if (isDefined<Ratio>(value)) {
      const optErrMsg = `Invalid MedicinalProductPharmaceutical.routeOfAdministration.maxDosePerTreatmentPeriod; Provided element is not an instance of Ratio.`;
      assertFhirType<Ratio>(value, Ratio, optErrMsg);
      this.maxDosePerTreatmentPeriod = value;
    } else {
      this.maxDosePerTreatmentPeriod = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `maxDosePerTreatmentPeriod` property exists and has a value; `false` otherwise
   */
  public hasMaxDosePerTreatmentPeriod(): boolean {
    return isDefined<Ratio>(this.maxDosePerTreatmentPeriod) && !this.maxDosePerTreatmentPeriod.isEmpty();
  }

  /**
   * @returns the `maxTreatmentPeriod` property value as a Duration object if defined; else an empty Duration object
   */
  public getMaxTreatmentPeriod(): Duration {
    return this.maxTreatmentPeriod ?? new Duration();
  }

  /**
   * Assigns the provided MaxTreatmentPeriod object value to the `maxTreatmentPeriod` property.
   *
   * @param value - the `maxTreatmentPeriod` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setMaxTreatmentPeriod(value: Duration | undefined): this {
    if (isDefined<Duration>(value)) {
      const optErrMsg = `Invalid MedicinalProductPharmaceutical.routeOfAdministration.maxTreatmentPeriod; Provided element is not an instance of Duration.`;
      assertFhirType<Duration>(value, Duration, optErrMsg);
      this.maxTreatmentPeriod = value;
    } else {
      this.maxTreatmentPeriod = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `maxTreatmentPeriod` property exists and has a value; `false` otherwise
   */
  public hasMaxTreatmentPeriod(): boolean {
    return isDefined<Duration>(this.maxTreatmentPeriod) && !this.maxTreatmentPeriod.isEmpty();
  }

  /**
   * @returns the `targetSpecies` property value as a MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesComponent array
   */
  public getTargetSpecies(): MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesComponent[] {
    return this.targetSpecies ?? ([] as MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesComponent[]);
  }

  /**
   * Assigns the provided MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesComponent array value to the `targetSpecies` property.
   *
   * @param value - the `targetSpecies` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setTargetSpecies(value: MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesComponent[] | undefined): this {
    if (isDefinedList<MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesComponent>(value)) {
      const optErrMsg = `Invalid MedicinalProductPharmaceutical.routeOfAdministration.targetSpecies; Provided value array has an element that is not an instance of MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesComponent.`;
      assertFhirTypeList<MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesComponent>(value, MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesComponent, optErrMsg);
      this.targetSpecies = value;
    } else {
      this.targetSpecies = undefined;
    }
    return this;
  }

  /**
   * Add the provided MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesComponent value to the `targetSpecies` array property.
   *
   * @param value - the `targetSpecies` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addTargetSpecies(value: MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesComponent | undefined): this {
    if (isDefined<MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesComponent>(value)) {
      const optErrMsg = `Invalid MedicinalProductPharmaceutical.routeOfAdministration.targetSpecies; Provided element is not an instance of MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesComponent.`;
      assertFhirType<MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesComponent>(value, MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesComponent, optErrMsg);
      this.initTargetSpecies();
      this.targetSpecies?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `targetSpecies` property exists and has a value; `false` otherwise
   */
  public hasTargetSpecies(): boolean {
    return isDefinedList<MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesComponent>(this.targetSpecies) && this.targetSpecies.some((item: MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `targetSpecies` property
   */
  private initTargetSpecies(): void {
    if(!this.hasTargetSpecies()) {
      this.targetSpecies = [] as MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'MedicinalProductPharmaceutical.routeOfAdministration';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.code,
      this.firstDose,
      this.maxSingleDose,
      this.maxDosePerDay,
      this.maxDosePerTreatmentPeriod,
      this.maxTreatmentPeriod,
      this.targetSpecies,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): MedicinalProductPharmaceuticalRouteOfAdministrationComponent {
    const dest = new MedicinalProductPharmaceuticalRouteOfAdministrationComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: MedicinalProductPharmaceuticalRouteOfAdministrationComponent): void {
    super.copyValues(dest);
    dest.code = this.code ? this.code.copy() : null;
    dest.firstDose = this.firstDose?.copy();
    dest.maxSingleDose = this.maxSingleDose?.copy();
    dest.maxDosePerDay = this.maxDosePerDay?.copy();
    dest.maxDosePerTreatmentPeriod = this.maxDosePerTreatmentPeriod?.copy();
    dest.maxTreatmentPeriod = this.maxTreatmentPeriod?.copy();
    const targetSpeciesList = copyListValues<MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesComponent>(this.targetSpecies);
    dest.targetSpecies = targetSpeciesList.length === 0 ? undefined : targetSpeciesList;
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

    if (this.hasCode()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getCode()!, 'code', jsonObj);
    } else {
      missingReqdProperties.push(`MedicinalProductPharmaceutical.routeOfAdministration.code`);
    }

    if (this.hasFirstDose()) {
      setFhirComplexJson(this.getFirstDose(), 'firstDose', jsonObj);
    }

    if (this.hasMaxSingleDose()) {
      setFhirComplexJson(this.getMaxSingleDose(), 'maxSingleDose', jsonObj);
    }

    if (this.hasMaxDosePerDay()) {
      setFhirComplexJson(this.getMaxDosePerDay(), 'maxDosePerDay', jsonObj);
    }

    if (this.hasMaxDosePerTreatmentPeriod()) {
      setFhirComplexJson(this.getMaxDosePerTreatmentPeriod(), 'maxDosePerTreatmentPeriod', jsonObj);
    }

    if (this.hasMaxTreatmentPeriod()) {
      setFhirComplexJson(this.getMaxTreatmentPeriod(), 'maxTreatmentPeriod', jsonObj);
    }

    if (this.hasTargetSpecies()) {
      setFhirBackboneElementListJson(this.getTargetSpecies(), 'targetSpecies', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
/**
 * MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** A species for which this route applies
 * - **Definition:** A species for which this route applies.
 *
 * @category Data Models: Resource
 * @see [FHIR MedicinalProductPharmaceutical](http://hl7.org/fhir/StructureDefinition/MedicinalProductPharmaceutical)
 */
export class MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesComponent extends BackboneElement implements IBackboneElement {
  constructor(code: CodeableConcept | null = null) {
    super();

    this.code = null;
    if (isDefined<CodeableConcept>(code)) {
      this.setCode(code);
    }
  }

  /**
   * Parse the provided `MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesComponent` JSON to instantiate the MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesComponent
   * @returns MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesComponent data model or undefined for `MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    const missingReqdProperties: string[] = [];

    fieldName = 'code';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setCode(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'withdrawalPeriod';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriodComponent | undefined = MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriodComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addWithdrawalPeriod(component);
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
   * MedicinalProductPharmaceutical.routeOfAdministration.targetSpecies.code Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Coded expression for the species
   * - **Definition:** Coded expression for the species.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private code: CodeableConcept | null;

  /**
   * MedicinalProductPharmaceutical.routeOfAdministration.targetSpecies.withdrawalPeriod Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A species specific time during which consumption of animal product is not appropriate
   * - **Definition:** A species specific time during which consumption of animal product is not appropriate.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private withdrawalPeriod?: MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriodComponent[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `code` property value as a CodeableConcept object if defined; else null
   */
  public getCode(): CodeableConcept | null {
    return this.code;
  }

  /**
   * Assigns the provided CodeableConcept object value to the `code` property.
   *
   * @param value - the `code` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCode(value: CodeableConcept): this {
    assertIsDefined<CodeableConcept>(value, `MedicinalProductPharmaceutical.routeOfAdministration.targetSpecies.code is required`);
    const optErrMsg = `Invalid MedicinalProductPharmaceutical.routeOfAdministration.targetSpecies.code; Provided element is not an instance of CodeableConcept.`;
    assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
    this.code = value;
    return this;
  }

  /**
   * @returns `true` if the `code` property exists and has a value; `false` otherwise
   */
  public hasCode(): boolean {
    return isDefined<CodeableConcept>(this.code) && !this.code.isEmpty();
  }

  /**
   * @returns the `withdrawalPeriod` property value as a MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriodComponent array
   */
  public getWithdrawalPeriod(): MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriodComponent[] {
    return this.withdrawalPeriod ?? ([] as MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriodComponent[]);
  }

  /**
   * Assigns the provided MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriodComponent array value to the `withdrawalPeriod` property.
   *
   * @param value - the `withdrawalPeriod` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setWithdrawalPeriod(value: MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriodComponent[] | undefined): this {
    if (isDefinedList<MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriodComponent>(value)) {
      const optErrMsg = `Invalid MedicinalProductPharmaceutical.routeOfAdministration.targetSpecies.withdrawalPeriod; Provided value array has an element that is not an instance of MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriodComponent.`;
      assertFhirTypeList<MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriodComponent>(value, MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriodComponent, optErrMsg);
      this.withdrawalPeriod = value;
    } else {
      this.withdrawalPeriod = undefined;
    }
    return this;
  }

  /**
   * Add the provided MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriodComponent value to the `withdrawalPeriod` array property.
   *
   * @param value - the `withdrawalPeriod` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addWithdrawalPeriod(value: MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriodComponent | undefined): this {
    if (isDefined<MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriodComponent>(value)) {
      const optErrMsg = `Invalid MedicinalProductPharmaceutical.routeOfAdministration.targetSpecies.withdrawalPeriod; Provided element is not an instance of MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriodComponent.`;
      assertFhirType<MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriodComponent>(value, MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriodComponent, optErrMsg);
      this.initWithdrawalPeriod();
      this.withdrawalPeriod?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `withdrawalPeriod` property exists and has a value; `false` otherwise
   */
  public hasWithdrawalPeriod(): boolean {
    return isDefinedList<MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriodComponent>(this.withdrawalPeriod) && this.withdrawalPeriod.some((item: MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriodComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `withdrawalPeriod` property
   */
  private initWithdrawalPeriod(): void {
    if(!this.hasWithdrawalPeriod()) {
      this.withdrawalPeriod = [] as MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriodComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'MedicinalProductPharmaceutical.routeOfAdministration.targetSpecies';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.code,
      this.withdrawalPeriod,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesComponent {
    const dest = new MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesComponent): void {
    super.copyValues(dest);
    dest.code = this.code ? this.code.copy() : null;
    const withdrawalPeriodList = copyListValues<MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriodComponent>(this.withdrawalPeriod);
    dest.withdrawalPeriod = withdrawalPeriodList.length === 0 ? undefined : withdrawalPeriodList;
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

    if (this.hasCode()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getCode()!, 'code', jsonObj);
    } else {
      missingReqdProperties.push(`MedicinalProductPharmaceutical.routeOfAdministration.targetSpecies.code`);
    }

    if (this.hasWithdrawalPeriod()) {
      setFhirBackboneElementListJson(this.getWithdrawalPeriod(), 'withdrawalPeriod', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
/**
 * MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriodComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** A species specific time during which consumption of animal product is not appropriate
 * - **Definition:** A species specific time during which consumption of animal product is not appropriate.
 *
 * @category Data Models: Resource
 * @see [FHIR MedicinalProductPharmaceutical](http://hl7.org/fhir/StructureDefinition/MedicinalProductPharmaceutical)
 */
export class MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriodComponent extends BackboneElement implements IBackboneElement {
  constructor(tissue: CodeableConcept | null = null, value: Quantity | null = null) {
    super();

    this.tissue = null;
    if (isDefined<CodeableConcept>(tissue)) {
      this.setTissue(tissue);
    }

    this.value = null;
    if (isDefined<Quantity>(value)) {
      this.setValue(value);
    }
  }

  /**
   * Parse the provided `MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriodComponent` JSON to instantiate the MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriodComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriodComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriodComponent
   * @returns MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriodComponent data model or undefined for `MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriodComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriodComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriodComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriodComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    const missingReqdProperties: string[] = [];

    fieldName = 'tissue';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setTissue(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'value';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Quantity | undefined = Quantity.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setValue(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'supportingInformation';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setSupportingInformationElement(datatype);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_REQD_IN_JSON} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * MedicinalProductPharmaceutical.routeOfAdministration.targetSpecies.withdrawalPeriod.tissue Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Coded expression for the type of tissue for which the withdrawal period applues, e.g. meat, milk
   * - **Definition:** Coded expression for the type of tissue for which the withdrawal period applues, e.g. meat, milk.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private tissue: CodeableConcept | null;

  /**
   * MedicinalProductPharmaceutical.routeOfAdministration.targetSpecies.withdrawalPeriod.value Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A value for the time
   * - **Definition:** A value for the time.
   * - **FHIR Type:** `Quantity`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private value: Quantity | null;

  /**
   * MedicinalProductPharmaceutical.routeOfAdministration.targetSpecies.withdrawalPeriod.supportingInformation Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Extra information about the withdrawal period
   * - **Definition:** Extra information about the withdrawal period.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private supportingInformation?: StringType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `tissue` property value as a CodeableConcept object if defined; else null
   */
  public getTissue(): CodeableConcept | null {
    return this.tissue;
  }

  /**
   * Assigns the provided CodeableConcept object value to the `tissue` property.
   *
   * @param value - the `tissue` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setTissue(value: CodeableConcept): this {
    assertIsDefined<CodeableConcept>(value, `MedicinalProductPharmaceutical.routeOfAdministration.targetSpecies.withdrawalPeriod.tissue is required`);
    const optErrMsg = `Invalid MedicinalProductPharmaceutical.routeOfAdministration.targetSpecies.withdrawalPeriod.tissue; Provided element is not an instance of CodeableConcept.`;
    assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
    this.tissue = value;
    return this;
  }

  /**
   * @returns `true` if the `tissue` property exists and has a value; `false` otherwise
   */
  public hasTissue(): boolean {
    return isDefined<CodeableConcept>(this.tissue) && !this.tissue.isEmpty();
  }

  /**
   * @returns the `value` property value as a Quantity object if defined; else null
   */
  public getValue(): Quantity | null {
    return this.value;
  }

  /**
   * Assigns the provided Quantity object value to the `value` property.
   *
   * @param value - the `value` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setValue(value: Quantity): this {
    assertIsDefined<Quantity>(value, `MedicinalProductPharmaceutical.routeOfAdministration.targetSpecies.withdrawalPeriod.value is required`);
    const optErrMsg = `Invalid MedicinalProductPharmaceutical.routeOfAdministration.targetSpecies.withdrawalPeriod.value; Provided element is not an instance of Quantity.`;
    assertFhirType<Quantity>(value, Quantity, optErrMsg);
    this.value = value;
    return this;
  }

  /**
   * @returns `true` if the `value` property exists and has a value; `false` otherwise
   */
  public hasValue(): boolean {
    return isDefined<Quantity>(this.value) && !this.value.isEmpty();
  }

  /**
   * @returns the `supportingInformation` property value as a StringType object if defined; else an empty StringType object
   */
  public getSupportingInformationElement(): StringType {
    return this.supportingInformation ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `supportingInformation` property.
   *
   * @param element - the `supportingInformation` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSupportingInformationElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid MedicinalProductPharmaceutical.routeOfAdministration.targetSpecies.withdrawalPeriod.supportingInformation; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.supportingInformation = element;
    } else {
      this.supportingInformation = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `supportingInformation` property exists and has a value; `false` otherwise
   */
  public hasSupportingInformationElement(): boolean {
    return isDefined<StringType>(this.supportingInformation) && !this.supportingInformation.isEmpty();
  }

  /**
   * @returns the `supportingInformation` property value as a fhirString if defined; else undefined
   */
  public getSupportingInformation(): fhirString | undefined {
    return this.supportingInformation?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `supportingInformation` property.
   *
   * @param value - the `supportingInformation` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSupportingInformation(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid MedicinalProductPharmaceutical.routeOfAdministration.targetSpecies.withdrawalPeriod.supportingInformation (${String(value)})`;
      this.supportingInformation = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.supportingInformation = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `supportingInformation` property exists and has a value; `false` otherwise
   */
  public hasSupportingInformation(): boolean {
    return this.hasSupportingInformationElement();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'MedicinalProductPharmaceutical.routeOfAdministration.targetSpecies.withdrawalPeriod';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.tissue,
      this.value,
      this.supportingInformation,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriodComponent {
    const dest = new MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriodComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriodComponent): void {
    super.copyValues(dest);
    dest.tissue = this.tissue ? this.tissue.copy() : null;
    dest.value = this.value ? this.value.copy() : null;
    dest.supportingInformation = this.supportingInformation?.copy();
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

    if (this.hasTissue()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getTissue()!, 'tissue', jsonObj);
    } else {
      missingReqdProperties.push(`MedicinalProductPharmaceutical.routeOfAdministration.targetSpecies.withdrawalPeriod.tissue`);
    }

    if (this.hasValue()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getValue()!, 'value', jsonObj);
    } else {
      missingReqdProperties.push(`MedicinalProductPharmaceutical.routeOfAdministration.targetSpecies.withdrawalPeriod.value`);
    }

    if (this.hasSupportingInformationElement()) {
      setFhirPrimitiveJson<fhirString>(this.getSupportingInformationElement(), 'supportingInformation', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
