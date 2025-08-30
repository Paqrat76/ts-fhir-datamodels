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
 * AdministrableProductDefinition Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/AdministrableProductDefinition
 * StructureDefinition.name: AdministrableProductDefinition
 * StructureDefinition.description: A medicinal product in the final form which is suitable for administering to a patient (after any mixing of multiple components, dissolution etc. has been performed).
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
  DateType,
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
  setFhirBackboneElementListJson,
  setFhirComplexJson,
  setFhirComplexListJson,
  setFhirPrimitiveJson,
  setPolymorphicValueJson,
} from '@paq-ts-fhir/fhir-core';
import { Attachment, CodeableConcept, Duration, Identifier, PARSABLE_DATATYPE_MAP, Quantity, Ratio, Reference } from '../complex-types/complex-datatypes';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';
import { PublicationStatusEnum } from '../code-systems/PublicationStatusEnum';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Symbol.metadata polyfill secret sauce for decorator metadata
(Symbol.metadata as any) ??= Symbol('Symbol.metadata');

/**
 * AdministrableProductDefinition Class
 *
 * @remarks
 * A medicinal product in the final form which is suitable for administering to a patient (after any mixing of multiple components, dissolution etc. has been performed).
 *
 * **FHIR Specification**
 * - **Short:** A medicinal product in the final form, suitable for administration - after any mixing of multiple components
 * - **Definition:** A medicinal product in the final form which is suitable for administering to a patient (after any mixing of multiple components, dissolution etc. has been performed).
 * - **FHIR Version:** 4.3.0
 *
 * @category Data Models: Resource
 * @see [FHIR AdministrableProductDefinition](http://hl7.org/fhir/StructureDefinition/AdministrableProductDefinition)
 */
export class AdministrableProductDefinition extends DomainResource implements IDomainResource {
  constructor(status: EnumCodeType | CodeType | fhirCode | null = null, routeOfAdministration: AdministrableProductDefinitionRouteOfAdministrationComponent[] | null = null) {
    super();

    this.publicationStatusEnum = new PublicationStatusEnum();

    this.status = constructorCodeValueAsEnumCodeType<PublicationStatusEnum>(
      status,
      PublicationStatusEnum,
      this.publicationStatusEnum,
      'AdministrableProductDefinition.status',
    );

    this.routeOfAdministration = null;
    if (isDefinedList<AdministrableProductDefinitionRouteOfAdministrationComponent>(routeOfAdministration)) {
      this.setRouteOfAdministration(routeOfAdministration);
    }
  }

  /**
   * Parse the provided `AdministrableProductDefinition` JSON to instantiate the AdministrableProductDefinition data model.
   *
   * @param sourceJson - JSON representing FHIR `AdministrableProductDefinition`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to AdministrableProductDefinition
   * @returns AdministrableProductDefinition data model or undefined for `AdministrableProductDefinition`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): AdministrableProductDefinition | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'AdministrableProductDefinition';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new AdministrableProductDefinition();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'AdministrableProductDefinition');
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

    fieldName = 'status';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
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

    fieldName = 'formOf';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addFormOf(datatype);
        }
      });
  }

    fieldName = 'administrableDoseForm';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setAdministrableDoseForm(datatype);
    }

    fieldName = 'unitOfPresentation';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setUnitOfPresentation(datatype);
    }

    fieldName = 'producedFrom';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addProducedFrom(datatype);
        }
      });
  }

    fieldName = 'ingredient';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addIngredient(datatype);
        }
      });
    }

    fieldName = 'device';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setDevice(datatype);
    }

    fieldName = 'property';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: AdministrableProductDefinitionPropertyComponent | undefined = AdministrableProductDefinitionPropertyComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addProperty(component);
        }
      });
    }

    fieldName = 'routeOfAdministration';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: AdministrableProductDefinitionRouteOfAdministrationComponent | undefined = AdministrableProductDefinitionRouteOfAdministrationComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component === undefined) {
          instance.setRouteOfAdministration(null);
        } else {
          instance.addRouteOfAdministration(component);
        }
      });
    } else {
      instance.setRouteOfAdministration(null);
    }

    return instance;
  }

  /**
   * AdministrableProductDefinition.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** An identifier for the administrable product
   * - **Definition:** An identifier for the administrable product.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier[] | undefined;

  /**
   * FHIR CodeSystem: PublicationStatus
   *
   * @see {@link PublicationStatusEnum }
   */
  private readonly publicationStatusEnum: PublicationStatusEnum;

  /**
   * AdministrableProductDefinition.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** draft | active | retired | unknown
   * - **Definition:** The status of this administrable product. Enables tracking the life-cycle of the content.
   * - **Comment:** Allows filtering of administrable products that are appropriate for use versus not.
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
   * AdministrableProductDefinition.formOf Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** References a product from which one or more of the constituent parts of that product can be prepared and used as described by this administrable product
   * - **Definition:** References a product from which one or more of the constituent parts of that product can be prepared and used as described by this administrable product.  If this administrable product describes the administration of a crushed tablet, the \'formOf\' would be the product representing a distribution containing tablets and possibly also a cream.  This is distinct from the \'producedFrom\' which refers to the specific components of the product that are used in this preparation, rather than the product as a whole.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/MedicinalProductDefinition',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private formOf?: Reference[] | undefined;

  /**
   * AdministrableProductDefinition.administrableDoseForm Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The dose form of the final product after necessary reconstitution or processing
   * - **Definition:** The dose form of the final product after necessary reconstitution or processing. Contrasts to the manufactured dose form (see ManufacturedItemDefinition). If the manufactured form was \'powder for solution for injection\', the administrable dose form could be \'solution for injection\' (once mixed with another item having manufactured form \'solvent for solution for injection\').
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private administrableDoseForm?: CodeableConcept | undefined;

  /**
   * AdministrableProductDefinition.unitOfPresentation Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The presentation type in which this item is given to a patient. e.g. for a spray - \'puff\'
   * - **Definition:** The presentation type in which this item is given to a patient. e.g. for a spray - \'puff\' (as in \'contains 100 mcg per puff\'), or for a liquid - \'vial\' (as in \'contains 5 ml per vial\').
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private unitOfPresentation?: CodeableConcept | undefined;

  /**
   * AdministrableProductDefinition.producedFrom Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Indicates the specific manufactured items that are part of the \'formOf\' product that are used in the preparation of this specific administrable form
   * - **Definition:** Indicates the specific manufactured items that are part of the \'formOf\' product that are used in the preparation of this specific administrable form.  In some cases, an administrable form might use all of the items from the overall product (or there might only be one item), while in other cases, an administrable form might use only a subset of the items available in the overall product.  For example, an administrable form might involve combining a liquid and a powder available as part of an overall product, but not involve applying the also supplied cream.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/ManufacturedItemDefinition',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private producedFrom?: Reference[] | undefined;

  /**
   * AdministrableProductDefinition.ingredient Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The ingredients of this administrable medicinal product. This is only needed if the ingredients are not specified either using ManufacturedItemDefiniton, or using by incoming references from the Ingredient resource
   * - **Definition:** The ingredients of this administrable medicinal product. This is only needed if the ingredients are not specified either using ManufacturedItemDefiniton (via AdministrableProductDefinition.producedFrom) to state which component items are used to make this, or using by incoming references from the Ingredient resource, to state in detail which substances exist within this. This element allows a basic coded ingredient to be used.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private ingredient?: CodeableConcept[] | undefined;

  /**
   * AdministrableProductDefinition.device Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A device that is integral to the medicinal product, in effect being considered as an "ingredient" of the medicinal product
   * - **Definition:** A device that is integral to the medicinal product, in effect being considered as an "ingredient" of the medicinal product. This is not intended for devices that are just co-packaged.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/DeviceDefinition',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private device?: Reference | undefined;

  /**
   * AdministrableProductDefinition.property Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Characteristics e.g. a product\'s onset of action
   * - **Definition:** Characteristics e.g. a product\'s onset of action.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private property?: AdministrableProductDefinitionPropertyComponent[] | undefined;

  /**
   * AdministrableProductDefinition.routeOfAdministration Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The path by which the product is taken into or makes contact with the body
   * - **Definition:** The path by which the product is taken into or makes contact with the body. In some regions this is referred to as the licenced or approved route. RouteOfAdministration cannot be used when the \'formOf\' product already uses MedicinalProductDefinition.route (and vice versa).
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 1..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private routeOfAdministration: AdministrableProductDefinitionRouteOfAdministrationComponent[] | null;

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
      const optErrMsg = `Invalid AdministrableProductDefinition.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid AdministrableProductDefinition.identifier; Provided element is not an instance of Identifier.`;
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
      const errMsgPrefix = `Invalid AdministrableProductDefinition.status`;
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
      const optErrMsg = `Invalid AdministrableProductDefinition.status; Provided value is not an instance of CodeType.`;
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
      const optErrMsg = `Invalid AdministrableProductDefinition.status (${String(value)})`;
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
   * @returns the `formOf` property value as a Reference array
   */
  public getFormOf(): Reference[] {
    return this.formOf ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `formOf` property.
   *
   * @decorator `@ReferenceTargets('AdministrableProductDefinition.formOf', ['MedicinalProductDefinition',])`
   *
   * @param value - the `formOf` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('AdministrableProductDefinition.formOf', [
    'MedicinalProductDefinition',
  ])
  public setFormOf(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.formOf = value;
    } else {
      this.formOf = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `formOf` array property.
   *
   * @decorator `@ReferenceTargets('AdministrableProductDefinition.formOf', ['MedicinalProductDefinition',])`
   *
   * @param value - the `formOf` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('AdministrableProductDefinition.formOf', [
    'MedicinalProductDefinition',
  ])
  public addFormOf(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initFormOf();
      this.formOf?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `formOf` property exists and has a value; `false` otherwise
   */
  public hasFormOf(): boolean {
    return isDefinedList<Reference>(this.formOf) && this.formOf.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `formOf` property
   */
  private initFormOf(): void {
    if (!this.hasFormOf()) {
      this.formOf = [] as Reference[];
    }
  }

  /**
   * @returns the `administrableDoseForm` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getAdministrableDoseForm(): CodeableConcept {
    return this.administrableDoseForm ?? new CodeableConcept();
  }

  /**
   * Assigns the provided AdministrableDoseForm object value to the `administrableDoseForm` property.
   *
   * @param value - the `administrableDoseForm` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAdministrableDoseForm(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid AdministrableProductDefinition.administrableDoseForm; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.administrableDoseForm = value;
    } else {
      this.administrableDoseForm = undefined;
    }
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
      const optErrMsg = `Invalid AdministrableProductDefinition.unitOfPresentation; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `producedFrom` property value as a Reference array
   */
  public getProducedFrom(): Reference[] {
    return this.producedFrom ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `producedFrom` property.
   *
   * @decorator `@ReferenceTargets('AdministrableProductDefinition.producedFrom', ['ManufacturedItemDefinition',])`
   *
   * @param value - the `producedFrom` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('AdministrableProductDefinition.producedFrom', [
    'ManufacturedItemDefinition',
  ])
  public setProducedFrom(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.producedFrom = value;
    } else {
      this.producedFrom = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `producedFrom` array property.
   *
   * @decorator `@ReferenceTargets('AdministrableProductDefinition.producedFrom', ['ManufacturedItemDefinition',])`
   *
   * @param value - the `producedFrom` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('AdministrableProductDefinition.producedFrom', [
    'ManufacturedItemDefinition',
  ])
  public addProducedFrom(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initProducedFrom();
      this.producedFrom?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `producedFrom` property exists and has a value; `false` otherwise
   */
  public hasProducedFrom(): boolean {
    return isDefinedList<Reference>(this.producedFrom) && this.producedFrom.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `producedFrom` property
   */
  private initProducedFrom(): void {
    if (!this.hasProducedFrom()) {
      this.producedFrom = [] as Reference[];
    }
  }

  /**
   * @returns the `ingredient` property value as a CodeableConcept array
   */
  public getIngredient(): CodeableConcept[] {
    return this.ingredient ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `ingredient` property.
   *
   * @param value - the `ingredient` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setIngredient(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid AdministrableProductDefinition.ingredient; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.ingredient = value;
    } else {
      this.ingredient = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `ingredient` array property.
   *
   * @param value - the `ingredient` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addIngredient(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid AdministrableProductDefinition.ingredient; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initIngredient();
      this.ingredient?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `ingredient` property exists and has a value; `false` otherwise
   */
  public hasIngredient(): boolean {
    return isDefinedList<CodeableConcept>(this.ingredient) && this.ingredient.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `ingredient` property
   */
  private initIngredient(): void {
    if(!this.hasIngredient()) {
      this.ingredient = [] as CodeableConcept[];
    }
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
   * @decorator `@ReferenceTargets('AdministrableProductDefinition.device', ['DeviceDefinition',])`
   *
   * @param value - the `device` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('AdministrableProductDefinition.device', [
    'DeviceDefinition',
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
   * @returns the `property` property value as a AdministrableProductDefinitionPropertyComponent array
   */
  public getProperty(): AdministrableProductDefinitionPropertyComponent[] {
    return this.property ?? ([] as AdministrableProductDefinitionPropertyComponent[]);
  }

  /**
   * Assigns the provided AdministrableProductDefinitionPropertyComponent array value to the `property` property.
   *
   * @param value - the `property` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setProperty(value: AdministrableProductDefinitionPropertyComponent[] | undefined): this {
    if (isDefinedList<AdministrableProductDefinitionPropertyComponent>(value)) {
      const optErrMsg = `Invalid AdministrableProductDefinition.property; Provided value array has an element that is not an instance of AdministrableProductDefinitionPropertyComponent.`;
      assertFhirTypeList<AdministrableProductDefinitionPropertyComponent>(value, AdministrableProductDefinitionPropertyComponent, optErrMsg);
      this.property = value;
    } else {
      this.property = undefined;
    }
    return this;
  }

  /**
   * Add the provided AdministrableProductDefinitionPropertyComponent value to the `property` array property.
   *
   * @param value - the `property` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addProperty(value: AdministrableProductDefinitionPropertyComponent | undefined): this {
    if (isDefined<AdministrableProductDefinitionPropertyComponent>(value)) {
      const optErrMsg = `Invalid AdministrableProductDefinition.property; Provided element is not an instance of AdministrableProductDefinitionPropertyComponent.`;
      assertFhirType<AdministrableProductDefinitionPropertyComponent>(value, AdministrableProductDefinitionPropertyComponent, optErrMsg);
      this.initProperty();
      this.property?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `property` property exists and has a value; `false` otherwise
   */
  public hasProperty(): boolean {
    return isDefinedList<AdministrableProductDefinitionPropertyComponent>(this.property) && this.property.some((item: AdministrableProductDefinitionPropertyComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `property` property
   */
  private initProperty(): void {
    if(!this.hasProperty()) {
      this.property = [] as AdministrableProductDefinitionPropertyComponent[];
    }
  }

  /**
   * @returns the `routeOfAdministration` property value as a AdministrableProductDefinitionRouteOfAdministrationComponent array
   */
  public getRouteOfAdministration(): AdministrableProductDefinitionRouteOfAdministrationComponent[] {
    return this.routeOfAdministration ?? ([] as AdministrableProductDefinitionRouteOfAdministrationComponent[]);
  }

  /**
   * Assigns the provided AdministrableProductDefinitionRouteOfAdministrationComponent array value to the `routeOfAdministration` property.
   *
   * @param value - the `routeOfAdministration` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setRouteOfAdministration(value: AdministrableProductDefinitionRouteOfAdministrationComponent[] | undefined | null): this {
    if (isDefinedList<AdministrableProductDefinitionRouteOfAdministrationComponent>(value)) {
      const optErrMsg = `Invalid AdministrableProductDefinition.routeOfAdministration; Provided value array has an element that is not an instance of AdministrableProductDefinitionRouteOfAdministrationComponent.`;
      assertFhirTypeList<AdministrableProductDefinitionRouteOfAdministrationComponent>(value, AdministrableProductDefinitionRouteOfAdministrationComponent, optErrMsg);
      this.routeOfAdministration = value;
    } else {
      this.routeOfAdministration = null;
    }
    return this;
  }

  /**
   * Add the provided AdministrableProductDefinitionRouteOfAdministrationComponent value to the `routeOfAdministration` array property.
   *
   * @param value - the `routeOfAdministration` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addRouteOfAdministration(value: AdministrableProductDefinitionRouteOfAdministrationComponent | undefined): this {
    if (isDefined<AdministrableProductDefinitionRouteOfAdministrationComponent>(value)) {
      const optErrMsg = `Invalid AdministrableProductDefinition.routeOfAdministration; Provided element is not an instance of AdministrableProductDefinitionRouteOfAdministrationComponent.`;
      assertFhirType<AdministrableProductDefinitionRouteOfAdministrationComponent>(value, AdministrableProductDefinitionRouteOfAdministrationComponent, optErrMsg);
      this.initRouteOfAdministration();
      this.routeOfAdministration?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `routeOfAdministration` property exists and has a value; `false` otherwise
   */
  public hasRouteOfAdministration(): boolean {
    return isDefinedList<AdministrableProductDefinitionRouteOfAdministrationComponent>(this.routeOfAdministration) && this.routeOfAdministration.some((item: AdministrableProductDefinitionRouteOfAdministrationComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `routeOfAdministration` property
   */
  private initRouteOfAdministration(): void {
    if(!this.hasRouteOfAdministration()) {
      this.routeOfAdministration = [] as AdministrableProductDefinitionRouteOfAdministrationComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'AdministrableProductDefinition';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identifier,
      this.status,
      this.formOf,
      this.administrableDoseForm,
      this.unitOfPresentation,
      this.producedFrom,
      this.ingredient,
      this.device,
      this.property,
      this.routeOfAdministration,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.status, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): AdministrableProductDefinition {
    const dest = new AdministrableProductDefinition();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: AdministrableProductDefinition): void {
    super.copyValues(dest);
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    dest.status = this.status ? this.status.copy() : null;
    const formOfList = copyListValues<Reference>(this.formOf);
    dest.formOf = formOfList.length === 0 ? undefined : formOfList;
    dest.administrableDoseForm = this.administrableDoseForm?.copy();
    dest.unitOfPresentation = this.unitOfPresentation?.copy();
    const producedFromList = copyListValues<Reference>(this.producedFrom);
    dest.producedFrom = producedFromList.length === 0 ? undefined : producedFromList;
    const ingredientList = copyListValues<CodeableConcept>(this.ingredient);
    dest.ingredient = ingredientList.length === 0 ? undefined : ingredientList;
    dest.device = this.device?.copy();
    const propertyList = copyListValues<AdministrableProductDefinitionPropertyComponent>(this.property);
    dest.property = propertyList.length === 0 ? undefined : propertyList;
    const routeOfAdministrationList = copyListValues<AdministrableProductDefinitionRouteOfAdministrationComponent>(this.routeOfAdministration);
    dest.routeOfAdministration = routeOfAdministrationList.length === 0 ? null : routeOfAdministrationList;
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
    } else {
      jsonObj['status'] = null;
    }

    if (this.hasFormOf()) {
      setFhirComplexListJson(this.getFormOf(), 'formOf', jsonObj);
    }

    if (this.hasAdministrableDoseForm()) {
      setFhirComplexJson(this.getAdministrableDoseForm(), 'administrableDoseForm', jsonObj);
    }

    if (this.hasUnitOfPresentation()) {
      setFhirComplexJson(this.getUnitOfPresentation(), 'unitOfPresentation', jsonObj);
    }

    if (this.hasProducedFrom()) {
      setFhirComplexListJson(this.getProducedFrom(), 'producedFrom', jsonObj);
    }

    if (this.hasIngredient()) {
      setFhirComplexListJson(this.getIngredient(), 'ingredient', jsonObj);
    }

    if (this.hasDevice()) {
      setFhirComplexJson(this.getDevice(), 'device', jsonObj);
    }

    if (this.hasProperty()) {
      setFhirBackboneElementListJson(this.getProperty(), 'property', jsonObj);
    }

    if (this.hasRouteOfAdministration()) {
      setFhirBackboneElementListJson(this.getRouteOfAdministration(), 'routeOfAdministration', jsonObj);
    } else {
      jsonObj['routeOfAdministration'] = null;
    }

    return jsonObj;
  }
}

/**
 * AdministrableProductDefinitionPropertyComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Characteristics e.g. a product\'s onset of action
 * - **Definition:** Characteristics e.g. a product\'s onset of action.
 *
 * @category Data Models: Resource
 * @see [FHIR AdministrableProductDefinition](http://hl7.org/fhir/StructureDefinition/AdministrableProductDefinition)
 */
export class AdministrableProductDefinitionPropertyComponent extends BackboneElement implements IBackboneElement {
  constructor(type_: CodeableConcept | null = null) {
    super();

    this.type_ = null;
    if (isDefined<CodeableConcept>(type_)) {
      this.setType(type_);
    }
  }

  /**
   * Parse the provided `AdministrableProductDefinitionPropertyComponent` JSON to instantiate the AdministrableProductDefinitionPropertyComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `AdministrableProductDefinitionPropertyComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to AdministrableProductDefinitionPropertyComponent
   * @returns AdministrableProductDefinitionPropertyComponent data model or undefined for `AdministrableProductDefinitionPropertyComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): AdministrableProductDefinitionPropertyComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'AdministrableProductDefinitionPropertyComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new AdministrableProductDefinitionPropertyComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    const classMetadata: DecoratorMetadataObject | null = AdministrableProductDefinitionPropertyComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for AdministrableProductDefinitionPropertyComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setType(null);
      } else {
        instance.setType(datatype);
      }
    } else {
      instance.setType(null);
    }

    fieldName = 'value[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const value: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setValue(value);

    fieldName = 'status';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setStatus(datatype);
    }

    return instance;
  }

  /**
   * AdministrableProductDefinition.property.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A code expressing the type of characteristic
   * - **Definition:** A code expressing the type of characteristic.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private type_: CodeableConcept | null;

  /**
   * AdministrableProductDefinition.property.value[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('AdministrableProductDefinition.property.value[x]', ['CodeableConcept','Quantity','date','boolean','Attachment',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A value for the characteristic
   * - **Definition:** A value for the characteristic.
   * - **FHIR Types:**
   *     'CodeableConcept',
   *     'Quantity',
   *     'date',
   *     'boolean',
   *     'Attachment',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  @ChoiceDataTypesMeta('AdministrableProductDefinition.property.value[x]',[
    'CodeableConcept',
    'Quantity',
    'date',
    'boolean',
    'Attachment',
  ])
  private value?: IDataType | undefined;

  /**
   * AdministrableProductDefinition.property.status Element
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
   * @returns the `type_` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getType(): CodeableConcept {
    return this.type_ ?? new CodeableConcept();
  }

  /**
   * Assigns the provided CodeableConcept object value to the `type_` property.
   *
   * @param value - the `type_` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setType(value: CodeableConcept | undefined | null): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid AdministrableProductDefinition.property.type; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.type_ = value;
    } else {
      this.type_ = null;
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
   * @returns the `value` property value as a DataType object if defined; else undefined
   */
  public getValue(): IDataType | undefined {
    return this.value;
  }

  /**
   * Assigns the provided DataType object value to the `value` property.
   *
   * @decorator `@ChoiceDataTypes('AdministrableProductDefinition.property.value[x]')`
   *
   * @param value - the `value` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('AdministrableProductDefinition.property.value[x]')
  public setValue(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.value = value;
    } else {
      this.value = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `value` property exists and has a value; `false` otherwise
   */
  public hasValue(): boolean {
    return isDefined<IDataType>(this.value) && !this.value.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `value` property value as a CodeableConcept object if defined; else undefined
   */
  public getValueCodeableConcept(): CodeableConcept | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof CodeableConcept)) {
      throw new InvalidTypeError(
        `DataType mismatch for AdministrableProductDefinition.property.value[x]: Expected CodeableConcept but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `value` property exists as a CodeableConcept and has a value; `false` otherwise
   */
  public hasValueCodeableConcept(): boolean {
    return this.hasValue() && this.value instanceof CodeableConcept;
  }

  /**
   * @returns the `value` property value as a Quantity object if defined; else undefined
   */
  public getValueQuantity(): Quantity | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof Quantity)) {
      throw new InvalidTypeError(
        `DataType mismatch for AdministrableProductDefinition.property.value[x]: Expected Quantity but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `value` property exists as a Quantity and has a value; `false` otherwise
   */
  public hasValueQuantity(): boolean {
    return this.hasValue() && this.value instanceof Quantity;
  }

  /**
   * @returns the `value` property value as a DateType object if defined; else undefined
   */
  public getValueDateType(): DateType | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof DateType)) {
      throw new InvalidTypeError(
        `DataType mismatch for AdministrableProductDefinition.property.value[x]: Expected DateType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `value` property exists as a DateType and has a value; `false` otherwise
   */
  public hasValueDateType(): boolean {
    return this.hasValue() && this.value instanceof DateType;
  }

  /**
   * @returns the `value` property value as a BooleanType object if defined; else undefined
   */
  public getValueBooleanType(): BooleanType | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof BooleanType)) {
      throw new InvalidTypeError(
        `DataType mismatch for AdministrableProductDefinition.property.value[x]: Expected BooleanType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `value` property exists as a BooleanType and has a value; `false` otherwise
   */
  public hasValueBooleanType(): boolean {
    return this.hasValue() && this.value instanceof BooleanType;
  }

  /**
   * @returns the `value` property value as a Attachment object if defined; else undefined
   */
  public getValueAttachment(): Attachment | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof Attachment)) {
      throw new InvalidTypeError(
        `DataType mismatch for AdministrableProductDefinition.property.value[x]: Expected Attachment but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `value` property exists as a Attachment and has a value; `false` otherwise
   */
  public hasValueAttachment(): boolean {
    return this.hasValue() && this.value instanceof Attachment;
  }

  // End of choice datatype-specific "get"/"has" methods

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
      const optErrMsg = `Invalid AdministrableProductDefinition.property.status; Provided element is not an instance of CodeableConcept.`;
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
    return 'AdministrableProductDefinition.property';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.type_,
      this.value,
      this.status,
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
  public override copy(): AdministrableProductDefinitionPropertyComponent {
    const dest = new AdministrableProductDefinitionPropertyComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: AdministrableProductDefinitionPropertyComponent): void {
    super.copyValues(dest);
    dest.type_ = this.type_ ? this.type_.copy() : null;
    dest.value = this.value?.copy() as IDataType;
    dest.status = this.status?.copy();
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

    if (this.hasType()) {
      setFhirComplexJson(this.getType(), 'type', jsonObj);
    } else {
      jsonObj['type'] = null;
    }

    if (this.hasValue()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getValue()!, 'value', jsonObj);
    }

    if (this.hasStatus()) {
      setFhirComplexJson(this.getStatus(), 'status', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * AdministrableProductDefinitionRouteOfAdministrationComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** The path by which the product is taken into or makes contact with the body
 * - **Definition:** The path by which the product is taken into or makes contact with the body. In some regions this is referred to as the licenced or approved route. RouteOfAdministration cannot be used when the \'formOf\' product already uses MedicinalProductDefinition.route (and vice versa).
 *
 * @category Data Models: Resource
 * @see [FHIR AdministrableProductDefinition](http://hl7.org/fhir/StructureDefinition/AdministrableProductDefinition)
 */
export class AdministrableProductDefinitionRouteOfAdministrationComponent extends BackboneElement implements IBackboneElement {
  constructor(code: CodeableConcept | null = null) {
    super();

    this.code = null;
    if (isDefined<CodeableConcept>(code)) {
      this.setCode(code);
    }
  }

  /**
   * Parse the provided `AdministrableProductDefinitionRouteOfAdministrationComponent` JSON to instantiate the AdministrableProductDefinitionRouteOfAdministrationComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `AdministrableProductDefinitionRouteOfAdministrationComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to AdministrableProductDefinitionRouteOfAdministrationComponent
   * @returns AdministrableProductDefinitionRouteOfAdministrationComponent data model or undefined for `AdministrableProductDefinitionRouteOfAdministrationComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): AdministrableProductDefinitionRouteOfAdministrationComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'AdministrableProductDefinitionRouteOfAdministrationComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new AdministrableProductDefinitionRouteOfAdministrationComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    fieldName = 'code';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setCode(null);
      } else {
        instance.setCode(datatype);
      }
    } else {
      instance.setCode(null);
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
        const component: AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesComponent | undefined = AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addTargetSpecies(component);
        }
      });
    }

    return instance;
  }

  /**
   * AdministrableProductDefinition.routeOfAdministration.code Element
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
   * AdministrableProductDefinition.routeOfAdministration.firstDose Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The first dose (dose quantity) administered can be specified for the product
   * - **Definition:** The first dose (dose quantity) administered can be specified for the product, using a numerical value and its unit of measurement.
   * - **FHIR Type:** `Quantity`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private firstDose?: Quantity | undefined;

  /**
   * AdministrableProductDefinition.routeOfAdministration.maxSingleDose Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The maximum single dose that can be administered
   * - **Definition:** The maximum single dose that can be administered, specified using a numerical value and its unit of measurement.
   * - **FHIR Type:** `Quantity`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private maxSingleDose?: Quantity | undefined;

  /**
   * AdministrableProductDefinition.routeOfAdministration.maxDosePerDay Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The maximum dose quantity to be administered in any one 24-h period
   * - **Definition:** The maximum dose per day (maximum dose quantity to be administered in any one 24-h period) that can be administered.
   * - **FHIR Type:** `Quantity`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private maxDosePerDay?: Quantity | undefined;

  /**
   * AdministrableProductDefinition.routeOfAdministration.maxDosePerTreatmentPeriod Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The maximum dose per treatment period that can be administered
   * - **Definition:** The maximum dose per treatment period that can be administered.
   * - **FHIR Type:** `Ratio`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private maxDosePerTreatmentPeriod?: Ratio | undefined;

  /**
   * AdministrableProductDefinition.routeOfAdministration.maxTreatmentPeriod Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The maximum treatment period during which the product can be administered
   * - **Definition:** The maximum treatment period during which the product can be administered.
   * - **FHIR Type:** `Duration`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private maxTreatmentPeriod?: Duration | undefined;

  /**
   * AdministrableProductDefinition.routeOfAdministration.targetSpecies Element
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
  private targetSpecies?: AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesComponent[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `code` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getCode(): CodeableConcept {
    return this.code ?? new CodeableConcept();
  }

  /**
   * Assigns the provided CodeableConcept object value to the `code` property.
   *
   * @param value - the `code` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCode(value: CodeableConcept | undefined | null): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid AdministrableProductDefinition.routeOfAdministration.code; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
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
      const optErrMsg = `Invalid AdministrableProductDefinition.routeOfAdministration.firstDose; Provided element is not an instance of Quantity.`;
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
      const optErrMsg = `Invalid AdministrableProductDefinition.routeOfAdministration.maxSingleDose; Provided element is not an instance of Quantity.`;
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
      const optErrMsg = `Invalid AdministrableProductDefinition.routeOfAdministration.maxDosePerDay; Provided element is not an instance of Quantity.`;
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
      const optErrMsg = `Invalid AdministrableProductDefinition.routeOfAdministration.maxDosePerTreatmentPeriod; Provided element is not an instance of Ratio.`;
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
      const optErrMsg = `Invalid AdministrableProductDefinition.routeOfAdministration.maxTreatmentPeriod; Provided element is not an instance of Duration.`;
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
   * @returns the `targetSpecies` property value as a AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesComponent array
   */
  public getTargetSpecies(): AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesComponent[] {
    return this.targetSpecies ?? ([] as AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesComponent[]);
  }

  /**
   * Assigns the provided AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesComponent array value to the `targetSpecies` property.
   *
   * @param value - the `targetSpecies` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setTargetSpecies(value: AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesComponent[] | undefined): this {
    if (isDefinedList<AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesComponent>(value)) {
      const optErrMsg = `Invalid AdministrableProductDefinition.routeOfAdministration.targetSpecies; Provided value array has an element that is not an instance of AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesComponent.`;
      assertFhirTypeList<AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesComponent>(value, AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesComponent, optErrMsg);
      this.targetSpecies = value;
    } else {
      this.targetSpecies = undefined;
    }
    return this;
  }

  /**
   * Add the provided AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesComponent value to the `targetSpecies` array property.
   *
   * @param value - the `targetSpecies` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addTargetSpecies(value: AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesComponent | undefined): this {
    if (isDefined<AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesComponent>(value)) {
      const optErrMsg = `Invalid AdministrableProductDefinition.routeOfAdministration.targetSpecies; Provided element is not an instance of AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesComponent.`;
      assertFhirType<AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesComponent>(value, AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesComponent, optErrMsg);
      this.initTargetSpecies();
      this.targetSpecies?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `targetSpecies` property exists and has a value; `false` otherwise
   */
  public hasTargetSpecies(): boolean {
    return isDefinedList<AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesComponent>(this.targetSpecies) && this.targetSpecies.some((item: AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `targetSpecies` property
   */
  private initTargetSpecies(): void {
    if(!this.hasTargetSpecies()) {
      this.targetSpecies = [] as AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'AdministrableProductDefinition.routeOfAdministration';
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
  public override copy(): AdministrableProductDefinitionRouteOfAdministrationComponent {
    const dest = new AdministrableProductDefinitionRouteOfAdministrationComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: AdministrableProductDefinitionRouteOfAdministrationComponent): void {
    super.copyValues(dest);
    dest.code = this.code ? this.code.copy() : null;
    dest.firstDose = this.firstDose?.copy();
    dest.maxSingleDose = this.maxSingleDose?.copy();
    dest.maxDosePerDay = this.maxDosePerDay?.copy();
    dest.maxDosePerTreatmentPeriod = this.maxDosePerTreatmentPeriod?.copy();
    dest.maxTreatmentPeriod = this.maxTreatmentPeriod?.copy();
    const targetSpeciesList = copyListValues<AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesComponent>(this.targetSpecies);
    dest.targetSpecies = targetSpeciesList.length === 0 ? undefined : targetSpeciesList;
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

    return jsonObj;
  }
}
/**
 * AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** A species for which this route applies
 * - **Definition:** A species for which this route applies.
 *
 * @category Data Models: Resource
 * @see [FHIR AdministrableProductDefinition](http://hl7.org/fhir/StructureDefinition/AdministrableProductDefinition)
 */
export class AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesComponent extends BackboneElement implements IBackboneElement {
  constructor(code: CodeableConcept | null = null) {
    super();

    this.code = null;
    if (isDefined<CodeableConcept>(code)) {
      this.setCode(code);
    }
  }

  /**
   * Parse the provided `AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesComponent` JSON to instantiate the AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesComponent
   * @returns AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesComponent data model or undefined for `AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    fieldName = 'code';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setCode(null);
      } else {
        instance.setCode(datatype);
      }
    } else {
      instance.setCode(null);
    }

    fieldName = 'withdrawalPeriod';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriodComponent | undefined = AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriodComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addWithdrawalPeriod(component);
        }
      });
    }

    return instance;
  }

  /**
   * AdministrableProductDefinition.routeOfAdministration.targetSpecies.code Element
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
   * AdministrableProductDefinition.routeOfAdministration.targetSpecies.withdrawalPeriod Element
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
  private withdrawalPeriod?: AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriodComponent[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `code` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getCode(): CodeableConcept {
    return this.code ?? new CodeableConcept();
  }

  /**
   * Assigns the provided CodeableConcept object value to the `code` property.
   *
   * @param value - the `code` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCode(value: CodeableConcept | undefined | null): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid AdministrableProductDefinition.routeOfAdministration.targetSpecies.code; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
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
    return isDefined<CodeableConcept>(this.code) && !this.code.isEmpty();
  }

  /**
   * @returns the `withdrawalPeriod` property value as a AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriodComponent array
   */
  public getWithdrawalPeriod(): AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriodComponent[] {
    return this.withdrawalPeriod ?? ([] as AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriodComponent[]);
  }

  /**
   * Assigns the provided AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriodComponent array value to the `withdrawalPeriod` property.
   *
   * @param value - the `withdrawalPeriod` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setWithdrawalPeriod(value: AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriodComponent[] | undefined): this {
    if (isDefinedList<AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriodComponent>(value)) {
      const optErrMsg = `Invalid AdministrableProductDefinition.routeOfAdministration.targetSpecies.withdrawalPeriod; Provided value array has an element that is not an instance of AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriodComponent.`;
      assertFhirTypeList<AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriodComponent>(value, AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriodComponent, optErrMsg);
      this.withdrawalPeriod = value;
    } else {
      this.withdrawalPeriod = undefined;
    }
    return this;
  }

  /**
   * Add the provided AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriodComponent value to the `withdrawalPeriod` array property.
   *
   * @param value - the `withdrawalPeriod` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addWithdrawalPeriod(value: AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriodComponent | undefined): this {
    if (isDefined<AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriodComponent>(value)) {
      const optErrMsg = `Invalid AdministrableProductDefinition.routeOfAdministration.targetSpecies.withdrawalPeriod; Provided element is not an instance of AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriodComponent.`;
      assertFhirType<AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriodComponent>(value, AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriodComponent, optErrMsg);
      this.initWithdrawalPeriod();
      this.withdrawalPeriod?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `withdrawalPeriod` property exists and has a value; `false` otherwise
   */
  public hasWithdrawalPeriod(): boolean {
    return isDefinedList<AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriodComponent>(this.withdrawalPeriod) && this.withdrawalPeriod.some((item: AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriodComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `withdrawalPeriod` property
   */
  private initWithdrawalPeriod(): void {
    if(!this.hasWithdrawalPeriod()) {
      this.withdrawalPeriod = [] as AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriodComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'AdministrableProductDefinition.routeOfAdministration.targetSpecies';
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
  public override copy(): AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesComponent {
    const dest = new AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesComponent): void {
    super.copyValues(dest);
    dest.code = this.code ? this.code.copy() : null;
    const withdrawalPeriodList = copyListValues<AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriodComponent>(this.withdrawalPeriod);
    dest.withdrawalPeriod = withdrawalPeriodList.length === 0 ? undefined : withdrawalPeriodList;
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

    if (this.hasWithdrawalPeriod()) {
      setFhirBackboneElementListJson(this.getWithdrawalPeriod(), 'withdrawalPeriod', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriodComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** A species specific time during which consumption of animal product is not appropriate
 * - **Definition:** A species specific time during which consumption of animal product is not appropriate.
 *
 * @category Data Models: Resource
 * @see [FHIR AdministrableProductDefinition](http://hl7.org/fhir/StructureDefinition/AdministrableProductDefinition)
 */
export class AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriodComponent extends BackboneElement implements IBackboneElement {
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
   * Parse the provided `AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriodComponent` JSON to instantiate the AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriodComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriodComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriodComponent
   * @returns AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriodComponent data model or undefined for `AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriodComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriodComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriodComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriodComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    fieldName = 'tissue';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setTissue(null);
      } else {
        instance.setTissue(datatype);
      }
    } else {
      instance.setTissue(null);
    }

    fieldName = 'value';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Quantity | undefined = Quantity.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setValue(null);
      } else {
        instance.setValue(datatype);
      }
    } else {
      instance.setValue(null);
    }

    fieldName = 'supportingInformation';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setSupportingInformationElement(datatype);
    }

    return instance;
  }

  /**
   * AdministrableProductDefinition.routeOfAdministration.targetSpecies.withdrawalPeriod.tissue Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The type of tissue for which the withdrawal period applies, e.g. meat, milk
   * - **Definition:** Coded expression for the type of tissue for which the withdrawal period applies, e.g. meat, milk.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private tissue: CodeableConcept | null;

  /**
   * AdministrableProductDefinition.routeOfAdministration.targetSpecies.withdrawalPeriod.value Element
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
   * AdministrableProductDefinition.routeOfAdministration.targetSpecies.withdrawalPeriod.supportingInformation Element
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
   * @returns the `tissue` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getTissue(): CodeableConcept {
    return this.tissue ?? new CodeableConcept();
  }

  /**
   * Assigns the provided CodeableConcept object value to the `tissue` property.
   *
   * @param value - the `tissue` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setTissue(value: CodeableConcept | undefined | null): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid AdministrableProductDefinition.routeOfAdministration.targetSpecies.withdrawalPeriod.tissue; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.tissue = value;
    } else {
      this.tissue = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `tissue` property exists and has a value; `false` otherwise
   */
  public hasTissue(): boolean {
    return isDefined<CodeableConcept>(this.tissue) && !this.tissue.isEmpty();
  }

  /**
   * @returns the `value` property value as a Quantity object if defined; else an empty Quantity object
   */
  public getValue(): Quantity {
    return this.value ?? new Quantity();
  }

  /**
   * Assigns the provided Quantity object value to the `value` property.
   *
   * @param value - the `value` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setValue(value: Quantity | undefined | null): this {
    if (isDefined<Quantity>(value)) {
      const optErrMsg = `Invalid AdministrableProductDefinition.routeOfAdministration.targetSpecies.withdrawalPeriod.value; Provided element is not an instance of Quantity.`;
      assertFhirType<Quantity>(value, Quantity, optErrMsg);
      this.value = value;
    } else {
      this.value = null;
    }
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
      const optErrMsg = `Invalid AdministrableProductDefinition.routeOfAdministration.targetSpecies.withdrawalPeriod.supportingInformation; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid AdministrableProductDefinition.routeOfAdministration.targetSpecies.withdrawalPeriod.supportingInformation (${String(value)})`;
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
    return 'AdministrableProductDefinition.routeOfAdministration.targetSpecies.withdrawalPeriod';
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
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.tissue, this.value, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriodComponent {
    const dest = new AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriodComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriodComponent): void {
    super.copyValues(dest);
    dest.tissue = this.tissue ? this.tissue.copy() : null;
    dest.value = this.value ? this.value.copy() : null;
    dest.supportingInformation = this.supportingInformation?.copy();
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

    if (this.hasTissue()) {
      setFhirComplexJson(this.getTissue(), 'tissue', jsonObj);
    } else {
      jsonObj['tissue'] = null;
    }

    if (this.hasValue()) {
      setFhirComplexJson(this.getValue(), 'value', jsonObj);
    } else {
      jsonObj['value'] = null;
    }

    if (this.hasSupportingInformationElement()) {
      setFhirPrimitiveJson<fhirString>(this.getSupportingInformationElement(), 'supportingInformation', jsonObj);
    }

    return jsonObj;
  }
}
