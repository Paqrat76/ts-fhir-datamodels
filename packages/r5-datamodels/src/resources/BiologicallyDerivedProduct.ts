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
 * BiologicallyDerivedProduct Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/BiologicallyDerivedProduct
 * StructureDefinition.name: BiologicallyDerivedProduct
 * StructureDefinition.description: A biological material originating from a biological entity intended to be transplanted or infused into another (possibly the same) biological entity.
 * StructureDefinition.fhirVersion: 5.0.0
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
  DateTimeType,
  DomainResource,
  FhirParser,
  IBackboneElement,
  IDataType,
  IDomainResource,
  IntegerType,
  InvalidTypeError,
  JSON,
  ReferenceTargets,
  StringType,
  assertFhirType,
  assertFhirTypeList,
  assertIsDefined,
  copyListValues,
  fhirDateTime,
  fhirDateTimeSchema,
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
import { Attachment, CodeableConcept, Coding, Identifier, PARSABLE_DATATYPE_MAP, Period, Quantity, Range, Ratio, Reference } from '../complex-types/complex-datatypes';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Symbol.metadata polyfill secret sauce for decorator metadata
(Symbol.metadata as any) ??= Symbol('Symbol.metadata');

/**
 * BiologicallyDerivedProduct Class
 *
 * @remarks
 * A biological material originating from a biological entity intended to be transplanted or infused into another (possibly the same) biological entity.
 *
 * **FHIR Specification**
 * - **Short:** This resource reflects an instance of a biologically derived product
 * - **Definition:** This resource reflects an instance of a biologically derived product. A material substance originating from a biological entity intended to be transplanted or infused into another (possibly the same) biological entity.
 * - **Comment:** Substances include, but are not limited to: whole blood, bone marrow, organs, and manipulated blood cells.
 * - **FHIR Version:** 5.0.0
 *
 * @category Data Models: Resource
 * @see [FHIR BiologicallyDerivedProduct](http://hl7.org/fhir/StructureDefinition/BiologicallyDerivedProduct)
 */
export class BiologicallyDerivedProduct extends DomainResource implements IDomainResource {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `BiologicallyDerivedProduct` JSON to instantiate the BiologicallyDerivedProduct data model.
   *
   * @param sourceJson - JSON representing FHIR `BiologicallyDerivedProduct`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to BiologicallyDerivedProduct
   * @returns BiologicallyDerivedProduct data model or undefined for `BiologicallyDerivedProduct`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): BiologicallyDerivedProduct | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'BiologicallyDerivedProduct';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new BiologicallyDerivedProduct();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'BiologicallyDerivedProduct');
    fhirParser.processDomainResourceJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'productCategory';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Coding | undefined = Coding.parse(classJsonObj[fieldName]!, sourceField);
      instance.setProductCategory(datatype);
    }

    fieldName = 'productCode';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setProductCode(datatype);
    }

    fieldName = 'parent';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addParent(datatype);
          }
        });
      }
  }

    fieldName = 'request';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addRequest(datatype);
          }
        });
      }
  }

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

    fieldName = 'biologicalSourceEvent';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Identifier | undefined = Identifier.parse(classJsonObj[fieldName]!, sourceField);
      instance.setBiologicalSourceEvent(datatype);
    }

    fieldName = 'processingFacility';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addProcessingFacility(datatype);
          }
        });
      }
  }

    fieldName = 'division';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setDivisionElement(datatype);
    }

    fieldName = 'productStatus';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Coding | undefined = Coding.parse(classJsonObj[fieldName]!, sourceField);
      instance.setProductStatus(datatype);
    }

    fieldName = 'expirationDate';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dtJson, dtSiblingJson);
      instance.setExpirationDateElement(datatype);
    }

    fieldName = 'collection';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: BiologicallyDerivedProductCollectionComponent | undefined = BiologicallyDerivedProductCollectionComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setCollection(component);
    }

    fieldName = 'storageTempRequirements';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Range | undefined = Range.parse(classJsonObj[fieldName]!, sourceField);
      instance.setStorageTempRequirements(datatype);
    }

    fieldName = 'property';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: BiologicallyDerivedProductPropertyComponent | undefined = BiologicallyDerivedProductPropertyComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addProperty(component);
          }
        });
      }
    }

    return instance;
  }

  /**
   * BiologicallyDerivedProduct.productCategory Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** organ | tissue | fluid | cells | biologicalAgent
   * - **Definition:** Broad category of this product.
   * - **FHIR Type:** `Coding`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private productCategory?: Coding | undefined;

  /**
   * BiologicallyDerivedProduct.productCode Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A code that identifies the kind of this biologically derived product
   * - **Definition:** A codified value that systematically supports characterization and classification of medical products of human origin inclusive of processing conditions such as additives, volumes and handling conditions.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private productCode?: CodeableConcept | undefined;

  /**
   * BiologicallyDerivedProduct.parent Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The parent biologically-derived product
   * - **Definition:** Parent product (if any) for this biologically-derived product.
   * - **Comment:** For products that have multiple collections. For example Peripheral Blood Stem Cells may be collected over several days from a single donor and the donation split into in multiple containers which must be linked to the parent donation.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/BiologicallyDerivedProduct',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private parent?: Reference[] | undefined;

  /**
   * BiologicallyDerivedProduct.request Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Request to obtain and/or infuse this product
   * - **Definition:** Request to obtain and/or infuse this biologically derived product.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/ServiceRequest',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private request?: Reference[] | undefined;

  /**
   * BiologicallyDerivedProduct.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Instance identifier
   * - **Definition:** Unique instance identifiers assigned to a biologically derived product. Note: This is a business identifier, not a resource identifier.
   * - **Comment:** This identifier should uniquely identify the product instance in the business domain.  Ideally it should be a globally unique identifier under the control of an ISO/IEC 15459 Issuing Agency.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier[] | undefined;

  /**
   * BiologicallyDerivedProduct.biologicalSourceEvent Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** An identifier that supports traceability to the event during which material in this product from one or more biological entities was obtained or pooled
   * - **Definition:** An identifier that supports traceability to the event during which material in this product from one or more biological entities was obtained or pooled.
   * - **Comment:** Necessary to support mandatory requirements for traceability from donor/source to recipient and vice versa, while also satisfying donor anonymity requirements. The element is defined consistently across BiologicallyDerivedProduct, NutritionProduct, and Device.  The identifier references an event that links to a single biological entity such as a blood donor, or to multiple biological entities (e.g. when the product is an embryo or a pooled platelet product).  A single biologicalSourceEvent identifier may appear on multiple products of many types derived from a single donation event or source extraction.  As an example, a single donation event may provide 2 kidneys and a liver for organ transplantation, 2 corneas for eye surgery, heart valves and arterial tissue for cardiovascular surgery, multiple skin grafts, tendons, multiple shaped bone grafts and a large number of bone putty/paste products; and each of them may be assigned to the same biological source event identifier.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private biologicalSourceEvent?: Identifier | undefined;

  /**
   * BiologicallyDerivedProduct.processingFacility Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Processing facilities responsible for the labeling and distribution of this biologically derived product
   * - **Definition:** Processing facilities responsible for the labeling and distribution of this biologically derived product.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private processingFacility?: Reference[] | undefined;

  /**
   * BiologicallyDerivedProduct.division Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A unique identifier for an aliquot of a product
   * - **Definition:** A unique identifier for an aliquot of a product.  Used to distinguish individual aliquots of a product carrying the same biologicalSource and productCode identifiers.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private division?: StringType | undefined;

  /**
   * BiologicallyDerivedProduct.productStatus Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** available | unavailable
   * - **Definition:** Whether the product is currently available.
   * - **FHIR Type:** `Coding`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private productStatus?: Coding | undefined;

  /**
   * BiologicallyDerivedProduct.expirationDate Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Date, and where relevant time, of expiration
   * - **Definition:** Date, and where relevant time, of expiration.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private expirationDate?: DateTimeType | undefined;

  /**
   * BiologicallyDerivedProduct.collection Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** How this product was collected
   * - **Definition:** How this product was collected.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private collection?: BiologicallyDerivedProductCollectionComponent | undefined;

  /**
   * BiologicallyDerivedProduct.storageTempRequirements Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Product storage temperature requirements
   * - **Definition:** The temperature requirements for storage of the biologically-derived product.
   * - **Comment:** May be extracted from information held in the Product Description Code.
   * - **FHIR Type:** `Range`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private storageTempRequirements?: Range | undefined;

  /**
   * BiologicallyDerivedProduct.property Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A property that is specific to this BiologicallyDerviedProduct instance
   * - **Definition:** A property that is specific to this BiologicallyDerviedProduct instance.
   * - **Comment:** Property can be used to provide information on a wide range of additional information specific to a particular biologicallyDerivedProduct.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private property?: BiologicallyDerivedProductPropertyComponent[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `productCategory` property value as a Coding object if defined; else an empty Coding object
   */
  public getProductCategory(): Coding {
    return this.productCategory ?? new Coding();
  }

  /**
   * Assigns the provided ProductCategory object value to the `productCategory` property.
   *
   * @param value - the `productCategory` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setProductCategory(value: Coding | undefined): this {
    if (isDefined<Coding>(value)) {
      const optErrMsg = `Invalid BiologicallyDerivedProduct.productCategory; Provided element is not an instance of Coding.`;
      assertFhirType<Coding>(value, Coding, optErrMsg);
      this.productCategory = value;
    } else {
      this.productCategory = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `productCategory` property exists and has a value; `false` otherwise
   */
  public hasProductCategory(): boolean {
    return isDefined<Coding>(this.productCategory) && !this.productCategory.isEmpty();
  }

  /**
   * @returns the `productCode` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getProductCode(): CodeableConcept {
    return this.productCode ?? new CodeableConcept();
  }

  /**
   * Assigns the provided ProductCode object value to the `productCode` property.
   *
   * @param value - the `productCode` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setProductCode(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid BiologicallyDerivedProduct.productCode; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.productCode = value;
    } else {
      this.productCode = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `productCode` property exists and has a value; `false` otherwise
   */
  public hasProductCode(): boolean {
    return isDefined<CodeableConcept>(this.productCode) && !this.productCode.isEmpty();
  }

  /**
   * @returns the `parent` property value as a Reference array
   */
  public getParent(): Reference[] {
    return this.parent ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `parent` property.
   *
   * @decorator `@ReferenceTargets('BiologicallyDerivedProduct.parent', ['BiologicallyDerivedProduct',])`
   *
   * @param value - the `parent` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('BiologicallyDerivedProduct.parent', [
    'BiologicallyDerivedProduct',
  ])
  public setParent(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.parent = value;
    } else {
      this.parent = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `parent` array property.
   *
   * @decorator `@ReferenceTargets('BiologicallyDerivedProduct.parent', ['BiologicallyDerivedProduct',])`
   *
   * @param value - the `parent` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('BiologicallyDerivedProduct.parent', [
    'BiologicallyDerivedProduct',
  ])
  public addParent(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initParent();
      this.parent?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `parent` property exists and has a value; `false` otherwise
   */
  public hasParent(): boolean {
    return isDefinedList<Reference>(this.parent) && this.parent.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `parent` property
   */
  private initParent(): void {
    if (!this.hasParent()) {
      this.parent = [] as Reference[];
    }
  }

  /**
   * @returns the `request` property value as a Reference array
   */
  public getRequest(): Reference[] {
    return this.request ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `request` property.
   *
   * @decorator `@ReferenceTargets('BiologicallyDerivedProduct.request', ['ServiceRequest',])`
   *
   * @param value - the `request` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('BiologicallyDerivedProduct.request', [
    'ServiceRequest',
  ])
  public setRequest(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.request = value;
    } else {
      this.request = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `request` array property.
   *
   * @decorator `@ReferenceTargets('BiologicallyDerivedProduct.request', ['ServiceRequest',])`
   *
   * @param value - the `request` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('BiologicallyDerivedProduct.request', [
    'ServiceRequest',
  ])
  public addRequest(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initRequest();
      this.request?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `request` property exists and has a value; `false` otherwise
   */
  public hasRequest(): boolean {
    return isDefinedList<Reference>(this.request) && this.request.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `request` property
   */
  private initRequest(): void {
    if (!this.hasRequest()) {
      this.request = [] as Reference[];
    }
  }

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
      const optErrMsg = `Invalid BiologicallyDerivedProduct.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid BiologicallyDerivedProduct.identifier; Provided element is not an instance of Identifier.`;
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
   * @returns the `biologicalSourceEvent` property value as a Identifier object if defined; else an empty Identifier object
   */
  public getBiologicalSourceEvent(): Identifier {
    return this.biologicalSourceEvent ?? new Identifier();
  }

  /**
   * Assigns the provided BiologicalSourceEvent object value to the `biologicalSourceEvent` property.
   *
   * @param value - the `biologicalSourceEvent` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setBiologicalSourceEvent(value: Identifier | undefined): this {
    if (isDefined<Identifier>(value)) {
      const optErrMsg = `Invalid BiologicallyDerivedProduct.biologicalSourceEvent; Provided element is not an instance of Identifier.`;
      assertFhirType<Identifier>(value, Identifier, optErrMsg);
      this.biologicalSourceEvent = value;
    } else {
      this.biologicalSourceEvent = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `biologicalSourceEvent` property exists and has a value; `false` otherwise
   */
  public hasBiologicalSourceEvent(): boolean {
    return isDefined<Identifier>(this.biologicalSourceEvent) && !this.biologicalSourceEvent.isEmpty();
  }

  /**
   * @returns the `processingFacility` property value as a Reference array
   */
  public getProcessingFacility(): Reference[] {
    return this.processingFacility ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `processingFacility` property.
   *
   * @decorator `@ReferenceTargets('BiologicallyDerivedProduct.processingFacility', ['Organization',])`
   *
   * @param value - the `processingFacility` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('BiologicallyDerivedProduct.processingFacility', [
    'Organization',
  ])
  public setProcessingFacility(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.processingFacility = value;
    } else {
      this.processingFacility = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `processingFacility` array property.
   *
   * @decorator `@ReferenceTargets('BiologicallyDerivedProduct.processingFacility', ['Organization',])`
   *
   * @param value - the `processingFacility` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('BiologicallyDerivedProduct.processingFacility', [
    'Organization',
  ])
  public addProcessingFacility(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initProcessingFacility();
      this.processingFacility?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `processingFacility` property exists and has a value; `false` otherwise
   */
  public hasProcessingFacility(): boolean {
    return isDefinedList<Reference>(this.processingFacility) && this.processingFacility.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `processingFacility` property
   */
  private initProcessingFacility(): void {
    if (!this.hasProcessingFacility()) {
      this.processingFacility = [] as Reference[];
    }
  }

  /**
   * @returns the `division` property value as a StringType object if defined; else an empty StringType object
   */
  public getDivisionElement(): StringType {
    return this.division ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `division` property.
   *
   * @param element - the `division` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDivisionElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid BiologicallyDerivedProduct.division; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.division = element;
    } else {
      this.division = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `division` property exists and has a value; `false` otherwise
   */
  public hasDivisionElement(): boolean {
    return isDefined<StringType>(this.division) && !this.division.isEmpty();
  }

  /**
   * @returns the `division` property value as a fhirString if defined; else undefined
   */
  public getDivision(): fhirString | undefined {
    return this.division?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `division` property.
   *
   * @param value - the `division` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDivision(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid BiologicallyDerivedProduct.division (${String(value)})`;
      this.division = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.division = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `division` property exists and has a value; `false` otherwise
   */
  public hasDivision(): boolean {
    return this.hasDivisionElement();
  }

  /**
   * @returns the `productStatus` property value as a Coding object if defined; else an empty Coding object
   */
  public getProductStatus(): Coding {
    return this.productStatus ?? new Coding();
  }

  /**
   * Assigns the provided ProductStatus object value to the `productStatus` property.
   *
   * @param value - the `productStatus` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setProductStatus(value: Coding | undefined): this {
    if (isDefined<Coding>(value)) {
      const optErrMsg = `Invalid BiologicallyDerivedProduct.productStatus; Provided element is not an instance of Coding.`;
      assertFhirType<Coding>(value, Coding, optErrMsg);
      this.productStatus = value;
    } else {
      this.productStatus = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `productStatus` property exists and has a value; `false` otherwise
   */
  public hasProductStatus(): boolean {
    return isDefined<Coding>(this.productStatus) && !this.productStatus.isEmpty();
  }

  /**
   * @returns the `expirationDate` property value as a DateTimeType object if defined; else an empty DateTimeType object
   */
  public getExpirationDateElement(): DateTimeType {
    return this.expirationDate ?? new DateTimeType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `expirationDate` property.
   *
   * @param element - the `expirationDate` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setExpirationDateElement(element: DateTimeType | undefined): this {
    if (isDefined<DateTimeType>(element)) {
      const optErrMsg = `Invalid BiologicallyDerivedProduct.expirationDate; Provided element is not an instance of DateTimeType.`;
      assertFhirType<DateTimeType>(element, DateTimeType, optErrMsg);
      this.expirationDate = element;
    } else {
      this.expirationDate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `expirationDate` property exists and has a value; `false` otherwise
   */
  public hasExpirationDateElement(): boolean {
    return isDefined<DateTimeType>(this.expirationDate) && !this.expirationDate.isEmpty();
  }

  /**
   * @returns the `expirationDate` property value as a fhirDateTime if defined; else undefined
   */
  public getExpirationDate(): fhirDateTime | undefined {
    return this.expirationDate?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `expirationDate` property.
   *
   * @param value - the `expirationDate` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setExpirationDate(value: fhirDateTime | undefined): this {
    if (isDefined<fhirDateTime>(value)) {
      const optErrMsg = `Invalid BiologicallyDerivedProduct.expirationDate (${String(value)})`;
      this.expirationDate = new DateTimeType(parseFhirPrimitiveData(value, fhirDateTimeSchema, optErrMsg));
    } else {
      this.expirationDate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `expirationDate` property exists and has a value; `false` otherwise
   */
  public hasExpirationDate(): boolean {
    return this.hasExpirationDateElement();
  }

  /**
   * @returns the `collection` property value as a BiologicallyDerivedProductCollectionComponent object if defined; else an empty BiologicallyDerivedProductCollectionComponent object
   */
  public getCollection(): BiologicallyDerivedProductCollectionComponent {
    return this.collection ?? new BiologicallyDerivedProductCollectionComponent();
  }

  /**
   * Assigns the provided Collection object value to the `collection` property.
   *
   * @param value - the `collection` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCollection(value: BiologicallyDerivedProductCollectionComponent | undefined): this {
    if (isDefined<BiologicallyDerivedProductCollectionComponent>(value)) {
      const optErrMsg = `Invalid BiologicallyDerivedProduct.collection; Provided element is not an instance of BiologicallyDerivedProductCollectionComponent.`;
      assertFhirType<BiologicallyDerivedProductCollectionComponent>(value, BiologicallyDerivedProductCollectionComponent, optErrMsg);
      this.collection = value;
    } else {
      this.collection = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `collection` property exists and has a value; `false` otherwise
   */
  public hasCollection(): boolean {
    return isDefined<BiologicallyDerivedProductCollectionComponent>(this.collection) && !this.collection.isEmpty();
  }

  /**
   * @returns the `storageTempRequirements` property value as a Range object if defined; else an empty Range object
   */
  public getStorageTempRequirements(): Range {
    return this.storageTempRequirements ?? new Range();
  }

  /**
   * Assigns the provided StorageTempRequirements object value to the `storageTempRequirements` property.
   *
   * @param value - the `storageTempRequirements` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setStorageTempRequirements(value: Range | undefined): this {
    if (isDefined<Range>(value)) {
      const optErrMsg = `Invalid BiologicallyDerivedProduct.storageTempRequirements; Provided element is not an instance of Range.`;
      assertFhirType<Range>(value, Range, optErrMsg);
      this.storageTempRequirements = value;
    } else {
      this.storageTempRequirements = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `storageTempRequirements` property exists and has a value; `false` otherwise
   */
  public hasStorageTempRequirements(): boolean {
    return isDefined<Range>(this.storageTempRequirements) && !this.storageTempRequirements.isEmpty();
  }

  /**
   * @returns the `property` property value as a BiologicallyDerivedProductPropertyComponent array
   */
  public getProperty(): BiologicallyDerivedProductPropertyComponent[] {
    return this.property ?? ([] as BiologicallyDerivedProductPropertyComponent[]);
  }

  /**
   * Assigns the provided BiologicallyDerivedProductPropertyComponent array value to the `property` property.
   *
   * @param value - the `property` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setProperty(value: BiologicallyDerivedProductPropertyComponent[] | undefined): this {
    if (isDefinedList<BiologicallyDerivedProductPropertyComponent>(value)) {
      const optErrMsg = `Invalid BiologicallyDerivedProduct.property; Provided value array has an element that is not an instance of BiologicallyDerivedProductPropertyComponent.`;
      assertFhirTypeList<BiologicallyDerivedProductPropertyComponent>(value, BiologicallyDerivedProductPropertyComponent, optErrMsg);
      this.property = value;
    } else {
      this.property = undefined;
    }
    return this;
  }

  /**
   * Add the provided BiologicallyDerivedProductPropertyComponent value to the `property` array property.
   *
   * @param value - the `property` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addProperty(value: BiologicallyDerivedProductPropertyComponent | undefined): this {
    if (isDefined<BiologicallyDerivedProductPropertyComponent>(value)) {
      const optErrMsg = `Invalid BiologicallyDerivedProduct.property; Provided element is not an instance of BiologicallyDerivedProductPropertyComponent.`;
      assertFhirType<BiologicallyDerivedProductPropertyComponent>(value, BiologicallyDerivedProductPropertyComponent, optErrMsg);
      this.initProperty();
      this.property?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `property` property exists and has a value; `false` otherwise
   */
  public hasProperty(): boolean {
    return isDefinedList<BiologicallyDerivedProductPropertyComponent>(this.property) && this.property.some((item: BiologicallyDerivedProductPropertyComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `property` property
   */
  private initProperty(): void {
    if(!this.hasProperty()) {
      this.property = [] as BiologicallyDerivedProductPropertyComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'BiologicallyDerivedProduct';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.productCategory,
      this.productCode,
      this.parent,
      this.request,
      this.identifier,
      this.biologicalSourceEvent,
      this.processingFacility,
      this.division,
      this.productStatus,
      this.expirationDate,
      this.collection,
      this.storageTempRequirements,
      this.property,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): BiologicallyDerivedProduct {
    const dest = new BiologicallyDerivedProduct();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: BiologicallyDerivedProduct): void {
    super.copyValues(dest);
    dest.productCategory = this.productCategory?.copy();
    dest.productCode = this.productCode?.copy();
    const parentList = copyListValues<Reference>(this.parent);
    dest.parent = parentList.length === 0 ? undefined : parentList;
    const requestList = copyListValues<Reference>(this.request);
    dest.request = requestList.length === 0 ? undefined : requestList;
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    dest.biologicalSourceEvent = this.biologicalSourceEvent?.copy();
    const processingFacilityList = copyListValues<Reference>(this.processingFacility);
    dest.processingFacility = processingFacilityList.length === 0 ? undefined : processingFacilityList;
    dest.division = this.division?.copy();
    dest.productStatus = this.productStatus?.copy();
    dest.expirationDate = this.expirationDate?.copy();
    dest.collection = this.collection?.copy();
    dest.storageTempRequirements = this.storageTempRequirements?.copy();
    const propertyList = copyListValues<BiologicallyDerivedProductPropertyComponent>(this.property);
    dest.property = propertyList.length === 0 ? undefined : propertyList;
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

    if (this.hasProductCategory()) {
      setFhirComplexJson(this.getProductCategory(), 'productCategory', jsonObj);
    }

    if (this.hasProductCode()) {
      setFhirComplexJson(this.getProductCode(), 'productCode', jsonObj);
    }

    if (this.hasParent()) {
      setFhirComplexListJson(this.getParent(), 'parent', jsonObj);
    }

    if (this.hasRequest()) {
      setFhirComplexListJson(this.getRequest(), 'request', jsonObj);
    }

    if (this.hasIdentifier()) {
      setFhirComplexListJson(this.getIdentifier(), 'identifier', jsonObj);
    }

    if (this.hasBiologicalSourceEvent()) {
      setFhirComplexJson(this.getBiologicalSourceEvent(), 'biologicalSourceEvent', jsonObj);
    }

    if (this.hasProcessingFacility()) {
      setFhirComplexListJson(this.getProcessingFacility(), 'processingFacility', jsonObj);
    }

    if (this.hasDivisionElement()) {
      setFhirPrimitiveJson<fhirString>(this.getDivisionElement(), 'division', jsonObj);
    }

    if (this.hasProductStatus()) {
      setFhirComplexJson(this.getProductStatus(), 'productStatus', jsonObj);
    }

    if (this.hasExpirationDateElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getExpirationDateElement(), 'expirationDate', jsonObj);
    }

    if (this.hasCollection()) {
      setFhirBackboneElementJson(this.getCollection(), 'collection', jsonObj);
    }

    if (this.hasStorageTempRequirements()) {
      setFhirComplexJson(this.getStorageTempRequirements(), 'storageTempRequirements', jsonObj);
    }

    if (this.hasProperty()) {
      setFhirBackboneElementListJson(this.getProperty(), 'property', jsonObj);
    }

    return jsonObj;
  }
}

/**
 * BiologicallyDerivedProductCollectionComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** How this product was collected
 * - **Definition:** How this product was collected.
 *
 * @category Data Models: Resource
 * @see [FHIR BiologicallyDerivedProduct](http://hl7.org/fhir/StructureDefinition/BiologicallyDerivedProduct)
 */
export class BiologicallyDerivedProductCollectionComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `BiologicallyDerivedProductCollectionComponent` JSON to instantiate the BiologicallyDerivedProductCollectionComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `BiologicallyDerivedProductCollectionComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to BiologicallyDerivedProductCollectionComponent
   * @returns BiologicallyDerivedProductCollectionComponent data model or undefined for `BiologicallyDerivedProductCollectionComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): BiologicallyDerivedProductCollectionComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'BiologicallyDerivedProductCollectionComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new BiologicallyDerivedProductCollectionComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    const classMetadata: DecoratorMetadataObject | null = BiologicallyDerivedProductCollectionComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for BiologicallyDerivedProductCollectionComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    fieldName = 'collector';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setCollector(datatype);
    }

    fieldName = 'source';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setSource(datatype);
    }

    fieldName = 'collected[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const collected: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setCollected(collected);

    return instance;
  }

  /**
   * BiologicallyDerivedProduct.collection.collector Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Individual performing collection
   * - **Definition:** Healthcare professional who is performing the collection.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private collector?: Reference | undefined;

  /**
   * BiologicallyDerivedProduct.collection.source Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The patient who underwent the medical procedure to collect the product or the organization that facilitated the collection
   * - **Definition:** The patient or entity, such as a hospital or vendor in the case of a processed/manipulated/manufactured product, providing the product.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private source?: Reference | undefined;

  /**
   * BiologicallyDerivedProduct.collection.collected[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('BiologicallyDerivedProduct.collection.collected[x]', ['dateTime','Period',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Time of product collection
   * - **Definition:** Time of product collection.
   * - **FHIR Types:**
   *     'dateTime',
   *     'Period',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('BiologicallyDerivedProduct.collection.collected[x]',[
    'dateTime',
    'Period',
  ])
  private collected?: IDataType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `collector` property value as a Reference object; else an empty Reference object
   */
  public getCollector(): Reference {
    return this.collector ?? new Reference();
  }

  /**
   * Assigns the provided Collector object value to the `collector` property.
   *
   * @decorator `@ReferenceTargets('BiologicallyDerivedProduct.collection.collector', ['Practitioner','PractitionerRole',])`
   *
   * @param value - the `collector` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('BiologicallyDerivedProduct.collection.collector', [
    'Practitioner',
  
    'PractitionerRole',
  ])
  public setCollector(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.collector = value;
    } else {
      this.collector = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `collector` property exists and has a value; `false` otherwise
   */
  public hasCollector(): boolean {
    return isDefined<Reference>(this.collector) && !this.collector.isEmpty();
  }

  /**
   * @returns the `source` property value as a Reference object; else an empty Reference object
   */
  public getSource(): Reference {
    return this.source ?? new Reference();
  }

  /**
   * Assigns the provided Source object value to the `source` property.
   *
   * @decorator `@ReferenceTargets('BiologicallyDerivedProduct.collection.source', ['Patient','Organization',])`
   *
   * @param value - the `source` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('BiologicallyDerivedProduct.collection.source', [
    'Patient',
  
    'Organization',
  ])
  public setSource(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.source = value;
    } else {
      this.source = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `source` property exists and has a value; `false` otherwise
   */
  public hasSource(): boolean {
    return isDefined<Reference>(this.source) && !this.source.isEmpty();
  }

  /**
   * @returns the `collected` property value as a DataType object if defined; else undefined
   */
  public getCollected(): IDataType | undefined {
    return this.collected;
  }

  /**
   * Assigns the provided DataType object value to the `collected` property.
   *
   * @decorator `@ChoiceDataTypes('BiologicallyDerivedProduct.collection.collected[x]')`
   *
   * @param value - the `collected` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('BiologicallyDerivedProduct.collection.collected[x]')
  public setCollected(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.collected = value;
    } else {
      this.collected = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `collected` property exists and has a value; `false` otherwise
   */
  public hasCollected(): boolean {
    return isDefined<IDataType>(this.collected) && !this.collected.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `collected` property value as a DateTimeType object if defined; else undefined
   */
  public getCollectedDateTimeType(): DateTimeType | undefined {
    if (!isDefined<IDataType | undefined>(this.collected)) {
      return undefined;
    }
    if (!(this.collected instanceof DateTimeType)) {
      throw new InvalidTypeError(
        `DataType mismatch for BiologicallyDerivedProduct.collection.collected[x]: Expected DateTimeType but encountered ${this.collected.fhirType()}`,
      );
    }
    return this.collected;
  }

  /**
   * @returns `true` if the `collected` property exists as a DateTimeType and has a value; `false` otherwise
   */
  public hasCollectedDateTimeType(): boolean {
    return this.hasCollected() && this.collected instanceof DateTimeType;
  }

  /**
   * @returns the `collected` property value as a Period object if defined; else undefined
   */
  public getCollectedPeriod(): Period | undefined {
    if (!isDefined<IDataType | undefined>(this.collected)) {
      return undefined;
    }
    if (!(this.collected instanceof Period)) {
      throw new InvalidTypeError(
        `DataType mismatch for BiologicallyDerivedProduct.collection.collected[x]: Expected Period but encountered ${this.collected.fhirType()}`,
      );
    }
    return this.collected;
  }

  /**
   * @returns `true` if the `collected` property exists as a Period and has a value; `false` otherwise
   */
  public hasCollectedPeriod(): boolean {
    return this.hasCollected() && this.collected instanceof Period;
  }

  // End of choice datatype-specific "get"/"has" methods

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'BiologicallyDerivedProduct.collection';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.collector,
      this.source,
      this.collected,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): BiologicallyDerivedProductCollectionComponent {
    const dest = new BiologicallyDerivedProductCollectionComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: BiologicallyDerivedProductCollectionComponent): void {
    super.copyValues(dest);
    dest.collector = this.collector?.copy();
    dest.source = this.source?.copy();
    dest.collected = this.collected?.copy() as IDataType;
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

    if (this.hasCollector()) {
      setFhirComplexJson(this.getCollector(), 'collector', jsonObj);
    }

    if (this.hasSource()) {
      setFhirComplexJson(this.getSource(), 'source', jsonObj);
    }

    if (this.hasCollected()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getCollected()!, 'collected', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * BiologicallyDerivedProductPropertyComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** A property that is specific to this BiologicallyDerviedProduct instance
 * - **Definition:** A property that is specific to this BiologicallyDerviedProduct instance.
 * - **Comment:** Property can be used to provide information on a wide range of additional information specific to a particular biologicallyDerivedProduct.
 *
 * @category Data Models: Resource
 * @see [FHIR BiologicallyDerivedProduct](http://hl7.org/fhir/StructureDefinition/BiologicallyDerivedProduct)
 */
export class BiologicallyDerivedProductPropertyComponent extends BackboneElement implements IBackboneElement {
  constructor(type_: CodeableConcept | null = null, value: IDataType | null = null) {
    super();

    this.type_ = null;
    if (isDefined<CodeableConcept>(type_)) {
      this.setType(type_);
    }

    this.value = null;
    if (isDefined<IDataType>(value)) {
      this.setValue(value);
    }

  }

  /**
   * Parse the provided `BiologicallyDerivedProductPropertyComponent` JSON to instantiate the BiologicallyDerivedProductPropertyComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `BiologicallyDerivedProductPropertyComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to BiologicallyDerivedProductPropertyComponent
   * @returns BiologicallyDerivedProductPropertyComponent data model or undefined for `BiologicallyDerivedProductPropertyComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): BiologicallyDerivedProductPropertyComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'BiologicallyDerivedProductPropertyComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new BiologicallyDerivedProductPropertyComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    const classMetadata: DecoratorMetadataObject | null = BiologicallyDerivedProductPropertyComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for BiologicallyDerivedProductPropertyComponent`;
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
    if (value === undefined) {
      instance.setValue(null);
    } else {
      instance.setValue(value);
    }

    return instance;
  }

  /**
   * BiologicallyDerivedProduct.property.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Code that specifies the property
   * - **Definition:** Code that specifies the property. It should reference an established coding system.
   * - **Comment:** The element is identified by name and system URI in the type. Some types may have multiple occurrences.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private type_: CodeableConcept | null;

  /**
   * BiologicallyDerivedProduct.property.value[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('BiologicallyDerivedProduct.property.value[x]', ['boolean','integer','CodeableConcept','Period','Quantity','Range','Ratio','string','Attachment',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Property values
   * - **Definition:** Property values.
   * - **Comment:** The value should be provided as a boolean, integer, CodeableConcept, period, quantity, range, ratio, or attachment. The description can be a string only when these others are not available. The type of value will depend on the property type and is specified in ST-027.
   * - **FHIR Types:**
   *     'boolean',
   *     'integer',
   *     'CodeableConcept',
   *     'Period',
   *     'Quantity',
   *     'Range',
   *     'Ratio',
   *     'string',
   *     'Attachment',
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('BiologicallyDerivedProduct.property.value[x]',[
    'boolean',
    'integer',
    'CodeableConcept',
    'Period',
    'Quantity',
    'Range',
    'Ratio',
    'string',
    'Attachment',
  ])
  private value: IDataType | null;

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
      const optErrMsg = `Invalid BiologicallyDerivedProduct.property.type; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `value` property value as a DataType object; else null
   */
  public getValue(): IDataType | null {
    return this.value;
  }

  /**
   * Assigns the provided DataType object value to the `value` property.
   *
   * @decorator `@ChoiceDataTypes('BiologicallyDerivedProduct.property.value[x]')`
   *
   * @param value - the `value` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('BiologicallyDerivedProduct.property.value[x]')
  public setValue(value: IDataType | undefined | null): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
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
    return isDefined<IDataType>(this.value) && !this.value.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `value` property value as a BooleanType object if defined; else null
   */
  public getValueBooleanType(): BooleanType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof BooleanType)) {
      throw new InvalidTypeError(
        `DataType mismatch for BiologicallyDerivedProduct.property.value[x]: Expected BooleanType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a BooleanType and has a value; `false` otherwise
   */
  public hasValueBooleanType(): boolean {
    return this.hasValue() && this.value instanceof BooleanType;
  }

  /**
   * @returns the `value` property value as a IntegerType object if defined; else null
   */
  public getValueIntegerType(): IntegerType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof IntegerType)) {
      throw new InvalidTypeError(
        `DataType mismatch for BiologicallyDerivedProduct.property.value[x]: Expected IntegerType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a IntegerType and has a value; `false` otherwise
   */
  public hasValueIntegerType(): boolean {
    return this.hasValue() && this.value instanceof IntegerType;
  }

  /**
   * @returns the `value` property value as a CodeableConcept object if defined; else null
   */
  public getValueCodeableConcept(): CodeableConcept | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof CodeableConcept)) {
      throw new InvalidTypeError(
        `DataType mismatch for BiologicallyDerivedProduct.property.value[x]: Expected CodeableConcept but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a CodeableConcept and has a value; `false` otherwise
   */
  public hasValueCodeableConcept(): boolean {
    return this.hasValue() && this.value instanceof CodeableConcept;
  }

  /**
   * @returns the `value` property value as a Period object if defined; else null
   */
  public getValuePeriod(): Period | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Period)) {
      throw new InvalidTypeError(
        `DataType mismatch for BiologicallyDerivedProduct.property.value[x]: Expected Period but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Period and has a value; `false` otherwise
   */
  public hasValuePeriod(): boolean {
    return this.hasValue() && this.value instanceof Period;
  }

  /**
   * @returns the `value` property value as a Quantity object if defined; else null
   */
  public getValueQuantity(): Quantity | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Quantity)) {
      throw new InvalidTypeError(
        `DataType mismatch for BiologicallyDerivedProduct.property.value[x]: Expected Quantity but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Quantity and has a value; `false` otherwise
   */
  public hasValueQuantity(): boolean {
    return this.hasValue() && this.value instanceof Quantity;
  }

  /**
   * @returns the `value` property value as a Range object if defined; else null
   */
  public getValueRange(): Range | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Range)) {
      throw new InvalidTypeError(
        `DataType mismatch for BiologicallyDerivedProduct.property.value[x]: Expected Range but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Range and has a value; `false` otherwise
   */
  public hasValueRange(): boolean {
    return this.hasValue() && this.value instanceof Range;
  }

  /**
   * @returns the `value` property value as a Ratio object if defined; else null
   */
  public getValueRatio(): Ratio | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Ratio)) {
      throw new InvalidTypeError(
        `DataType mismatch for BiologicallyDerivedProduct.property.value[x]: Expected Ratio but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Ratio and has a value; `false` otherwise
   */
  public hasValueRatio(): boolean {
    return this.hasValue() && this.value instanceof Ratio;
  }

  /**
   * @returns the `value` property value as a StringType object if defined; else null
   */
  public getValueStringType(): StringType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof StringType)) {
      throw new InvalidTypeError(
        `DataType mismatch for BiologicallyDerivedProduct.property.value[x]: Expected StringType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a StringType and has a value; `false` otherwise
   */
  public hasValueStringType(): boolean {
    return this.hasValue() && this.value instanceof StringType;
  }

  /**
   * @returns the `value` property value as a Attachment object if defined; else null
   */
  public getValueAttachment(): Attachment | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Attachment)) {
      throw new InvalidTypeError(
        `DataType mismatch for BiologicallyDerivedProduct.property.value[x]: Expected Attachment but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Attachment and has a value; `false` otherwise
   */
  public hasValueAttachment(): boolean {
    return this.hasValue() && this.value instanceof Attachment;
  }

  // End of choice datatype-specific "get"/"has" methods

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'BiologicallyDerivedProduct.property';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.type_,
      this.value,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.type_, this.value, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): BiologicallyDerivedProductPropertyComponent {
    const dest = new BiologicallyDerivedProductPropertyComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: BiologicallyDerivedProductPropertyComponent): void {
    super.copyValues(dest);
    dest.type_ = this.type_ ? this.type_.copy() : null;
    dest.value = this.value ? this.value.copy() as IDataType : null;
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
    }

    if (this.hasValue()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getValue()!, 'value', jsonObj);
    }

    return jsonObj;
  }
}
