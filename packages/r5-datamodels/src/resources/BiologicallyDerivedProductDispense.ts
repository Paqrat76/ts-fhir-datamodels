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
 * BiologicallyDerivedProductDispense Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/BiologicallyDerivedProductDispense
 * StructureDefinition.name: BiologicallyDerivedProductDispense
 * StructureDefinition.description: A record of dispensation of a biologically derived product.
 * StructureDefinition.fhirVersion: 5.0.0
 *
 * For questions, suggestions, or bugs, please open an issue at [GitHub ts-fhir-datamodels/issues](https://github.com/Paqrat76/ts-fhir-datamodels/issues).
 *
 * @packageDocumentation
 */

import { strict as assert } from 'node:assert';
import {
  BackboneElement,
  CodeType,
  DateTimeType,
  DomainResource,
  EnumCodeType,
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
  assertEnumCodeType,
  assertFhirType,
  assertFhirTypeList,
  assertIsDefined,
  constructorCodeValueAsEnumCodeType,
  copyListValues,
  fhirCode,
  fhirCodeSchema,
  fhirDateTime,
  fhirDateTimeSchema,
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
import { Annotation, CodeableConcept, Identifier, PARSABLE_DATATYPE_MAP, Quantity, Reference } from '../complex-types/complex-datatypes';
import { BiologicallyderivedproductdispenseStatusEnum } from '../code-systems/BiologicallyderivedproductdispenseStatusEnum';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';

/**
 * BiologicallyDerivedProductDispense Class
 *
 * @remarks
 * A record of dispensation of a biologically derived product.
 *
 * **FHIR Specification**
 * - **Short:** A record of dispensation of a biologically derived product
 * - **Definition:** This resource reflects an instance of a biologically derived product dispense. The supply or dispense of a biologically derived product from the supply organization or department (e.g. hospital transfusion laboratory) to the clinical team responsible for clinical application.
 * - **FHIR Version:** 5.0.0
 *
 * @category Data Models: Resource
 * @see [FHIR BiologicallyDerivedProductDispense](http://hl7.org/fhir/StructureDefinition/BiologicallyDerivedProductDispense)
 */
export class BiologicallyDerivedProductDispense extends DomainResource implements IDomainResource {
  constructor(status: EnumCodeType | CodeType | fhirCode | null = null, product: Reference | null = null, patient: Reference | null = null) {
    super();

    this.biologicallyderivedproductdispenseStatusEnum = new BiologicallyderivedproductdispenseStatusEnum();

    this.status = constructorCodeValueAsEnumCodeType<BiologicallyderivedproductdispenseStatusEnum>(
      status,
      BiologicallyderivedproductdispenseStatusEnum,
      this.biologicallyderivedproductdispenseStatusEnum,
      'BiologicallyDerivedProductDispense.status',
    );

    this.product = null;
    if (isDefined<Reference>(product)) {
      this.setProduct(product);
    }

    this.patient = null;
    if (isDefined<Reference>(patient)) {
      this.setPatient(patient);
    }
  }

  /**
   * Parse the provided `BiologicallyDerivedProductDispense` JSON to instantiate the BiologicallyDerivedProductDispense data model.
   *
   * @param sourceJson - JSON representing FHIR `BiologicallyDerivedProductDispense`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to BiologicallyDerivedProductDispense
   * @returns BiologicallyDerivedProductDispense data model or undefined for `BiologicallyDerivedProductDispense`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): BiologicallyDerivedProductDispense | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'BiologicallyDerivedProductDispense';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new BiologicallyDerivedProductDispense();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'BiologicallyDerivedProductDispense');
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

    fieldName = 'basedOn';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addBasedOn(datatype);
        }
      });
  }

    fieldName = 'partOf';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addPartOf(datatype);
        }
      });
  }

    fieldName = 'status';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setStatusElement(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'originRelationshipType';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setOriginRelationshipType(datatype);
    }

    fieldName = 'product';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setProduct(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'patient';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setPatient(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'matchStatus';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setMatchStatus(datatype);
    }

    fieldName = 'performer';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: BiologicallyDerivedProductDispensePerformerComponent | undefined = BiologicallyDerivedProductDispensePerformerComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addPerformer(component);
        }
      });
    }

    fieldName = 'location';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setLocation(datatype);
    }

    fieldName = 'quantity';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Quantity | undefined = Quantity.parse(classJsonObj[fieldName]!, sourceField);
      instance.setQuantity(datatype);
    }

    fieldName = 'preparedDate';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dtJson, dtSiblingJson);
      instance.setPreparedDateElement(datatype);
    }

    fieldName = 'whenHandedOver';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dtJson, dtSiblingJson);
      instance.setWhenHandedOverElement(datatype);
    }

    fieldName = 'destination';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setDestination(datatype);
    }

    fieldName = 'note';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Annotation | undefined = Annotation.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addNote(datatype);
        }
      });
    }

    fieldName = 'usageInstruction';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setUsageInstructionElement(datatype);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_REQD_IN_JSON} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * BiologicallyDerivedProductDispense.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Business identifier for this dispense
   * - **Definition:** Unique instance identifiers assigned to a biologically derived product dispense. Note: This is a business identifier, not a resource identifier.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier[] | undefined;

  /**
   * BiologicallyDerivedProductDispense.basedOn Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The order or request that this dispense is fulfilling
   * - **Definition:** The order or request that the dispense is fulfilling. This is a reference to a ServiceRequest resource.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/ServiceRequest',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private basedOn?: Reference[] | undefined;

  /**
   * BiologicallyDerivedProductDispense.partOf Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Short description
   * - **Definition:** A larger event of which this particular event is a component.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/BiologicallyDerivedProductDispense',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private partOf?: Reference[] | undefined;

  /**
   * FHIR CodeSystem: BiologicallyderivedproductdispenseStatus
   *
   * @see {@link BiologicallyderivedproductdispenseStatusEnum }
   */
  private readonly biologicallyderivedproductdispenseStatusEnum: BiologicallyderivedproductdispenseStatusEnum;

  /**
   * BiologicallyDerivedProductDispense.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** preparation | in-progress | allocated | issued | unfulfilled | returned | entered-in-error | unknown
   * - **Definition:** A code specifying the state of the dispense event.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link BiologicallyderivedproductdispenseStatusEnum }
   */
  private status: EnumCodeType | null;

  /**
   * BiologicallyDerivedProductDispense.originRelationshipType Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Relationship between the donor and intended recipient
   * - **Definition:** Indicates the relationship between the donor of the biologically derived product and the intended recipient.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private originRelationshipType?: CodeableConcept | undefined;

  /**
   * BiologicallyDerivedProductDispense.product Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The BiologicallyDerivedProduct that is dispensed
   * - **Definition:** A link to a resource identifying the biologically derived product that is being dispensed.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/BiologicallyDerivedProduct',
   *     ]
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private product: Reference | null;

  /**
   * BiologicallyDerivedProductDispense.patient Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The intended recipient of the dispensed product
   * - **Definition:** A link to a resource representing the patient that the product is dispensed for.
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
   * BiologicallyDerivedProductDispense.matchStatus Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Indicates the type of matching associated with the dispense
   * - **Definition:** Indicates the type of matching associated with the dispense.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private matchStatus?: CodeableConcept | undefined;

  /**
   * BiologicallyDerivedProductDispense.performer Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Indicates who or what performed an action
   * - **Definition:** Indicates who or what performed an action.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private performer?: BiologicallyDerivedProductDispensePerformerComponent[] | undefined;

  /**
   * BiologicallyDerivedProductDispense.location Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Where the dispense occurred
   * - **Definition:** The physical location where the dispense was performed.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Location',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private location?: Reference | undefined;

  /**
   * BiologicallyDerivedProductDispense.quantity Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Amount dispensed
   * - **Definition:** The amount of product in the dispense. Quantity will depend on the product being dispensed. Examples are: volume; cell count; concentration.
   * - **FHIR Type:** `Quantity`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private quantity?: Quantity | undefined;

  /**
   * BiologicallyDerivedProductDispense.preparedDate Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When product was selected/matched
   * - **Definition:** When the product was selected/ matched.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private preparedDate?: DateTimeType | undefined;

  /**
   * BiologicallyDerivedProductDispense.whenHandedOver Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When the product was dispatched
   * - **Definition:** When the product was dispatched for clinical use.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private whenHandedOver?: DateTimeType | undefined;

  /**
   * BiologicallyDerivedProductDispense.destination Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Where the product was dispatched to
   * - **Definition:** Link to a resource identifying the physical location that the product was dispatched to.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Location',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private destination?: Reference | undefined;

  /**
   * BiologicallyDerivedProductDispense.note Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Additional notes
   * - **Definition:** Additional notes.
   * - **FHIR Type:** `Annotation`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private note?: Annotation[] | undefined;

  /**
   * BiologicallyDerivedProductDispense.usageInstruction Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Specific instructions for use
   * - **Definition:** Specific instructions for use.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private usageInstruction?: StringType | undefined;

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
      const optErrMsg = `Invalid BiologicallyDerivedProductDispense.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid BiologicallyDerivedProductDispense.identifier; Provided element is not an instance of Identifier.`;
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
   * @returns the `basedOn` property value as a Reference array
   */
  public getBasedOn(): Reference[] {
    return this.basedOn ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `basedOn` property.
   *
   * @decorator `@ReferenceTargets('BiologicallyDerivedProductDispense.basedOn', ['ServiceRequest',])`
   *
   * @param value - the `basedOn` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('BiologicallyDerivedProductDispense.basedOn', [
    'ServiceRequest',
  ])
  public setBasedOn(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.basedOn = value;
    } else {
      this.basedOn = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `basedOn` array property.
   *
   * @decorator `@ReferenceTargets('BiologicallyDerivedProductDispense.basedOn', ['ServiceRequest',])`
   *
   * @param value - the `basedOn` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('BiologicallyDerivedProductDispense.basedOn', [
    'ServiceRequest',
  ])
  public addBasedOn(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initBasedOn();
      this.basedOn?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `basedOn` property exists and has a value; `false` otherwise
   */
  public hasBasedOn(): boolean {
    return isDefinedList<Reference>(this.basedOn) && this.basedOn.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `basedOn` property
   */
  private initBasedOn(): void {
    if (!this.hasBasedOn()) {
      this.basedOn = [] as Reference[];
    }
  }

  /**
   * @returns the `partOf` property value as a Reference array
   */
  public getPartOf(): Reference[] {
    return this.partOf ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `partOf` property.
   *
   * @decorator `@ReferenceTargets('BiologicallyDerivedProductDispense.partOf', ['BiologicallyDerivedProductDispense',])`
   *
   * @param value - the `partOf` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('BiologicallyDerivedProductDispense.partOf', [
    'BiologicallyDerivedProductDispense',
  ])
  public setPartOf(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.partOf = value;
    } else {
      this.partOf = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `partOf` array property.
   *
   * @decorator `@ReferenceTargets('BiologicallyDerivedProductDispense.partOf', ['BiologicallyDerivedProductDispense',])`
   *
   * @param value - the `partOf` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('BiologicallyDerivedProductDispense.partOf', [
    'BiologicallyDerivedProductDispense',
  ])
  public addPartOf(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initPartOf();
      this.partOf?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `partOf` property exists and has a value; `false` otherwise
   */
  public hasPartOf(): boolean {
    return isDefinedList<Reference>(this.partOf) && this.partOf.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `partOf` property
   */
  private initPartOf(): void {
    if (!this.hasPartOf()) {
      this.partOf = [] as Reference[];
    }
  }

  /**
   * @returns the `status` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link BiologicallyderivedproductdispenseStatusEnum }
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
   * @see CodeSystem Enumeration: {@link BiologicallyderivedproductdispenseStatusEnum }
   */
  public setStatusEnumType(enumType: EnumCodeType): this {
    assertIsDefined<EnumCodeType>(enumType, `BiologicallyDerivedProductDispense.status is required`);
    const errMsgPrefix = `Invalid BiologicallyDerivedProductDispense.status`;
    assertEnumCodeType<BiologicallyderivedproductdispenseStatusEnum>(enumType, BiologicallyderivedproductdispenseStatusEnum, errMsgPrefix);
    this.status = enumType;
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
   * @see CodeSystem Enumeration: {@link BiologicallyderivedproductdispenseStatusEnum }
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
   * @see CodeSystem Enumeration: {@link BiologicallyderivedproductdispenseStatusEnum }
   */
  public setStatusElement(element: CodeType): this {
    assertIsDefined<CodeType>(element, `BiologicallyDerivedProductDispense.status is required`);
    const optErrMsg = `Invalid BiologicallyDerivedProductDispense.status; Provided value is not an instance of CodeType.`;
    assertFhirType<CodeType>(element, CodeType, optErrMsg);
    this.status = new EnumCodeType(element, this.biologicallyderivedproductdispenseStatusEnum);
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
   * @see CodeSystem Enumeration: {@link BiologicallyderivedproductdispenseStatusEnum }
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
   * @see CodeSystem Enumeration: {@link BiologicallyderivedproductdispenseStatusEnum }
   */
  public setStatus(value: fhirCode): this {
    assertIsDefined<fhirCode>(value, `BiologicallyDerivedProductDispense.status is required`);
    const optErrMsg = `Invalid BiologicallyDerivedProductDispense.status (${String(value)})`;
    this.status = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.biologicallyderivedproductdispenseStatusEnum);
    return this;
  }

  /**
   * @returns `true` if the `status` property exists and has a value; `false` otherwise
   */
  public hasStatus(): boolean {
    return this.hasStatusEnumType();
  }

  /**
   * @returns the `originRelationshipType` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getOriginRelationshipType(): CodeableConcept {
    return this.originRelationshipType ?? new CodeableConcept();
  }

  /**
   * Assigns the provided OriginRelationshipType object value to the `originRelationshipType` property.
   *
   * @param value - the `originRelationshipType` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setOriginRelationshipType(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid BiologicallyDerivedProductDispense.originRelationshipType; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.originRelationshipType = value;
    } else {
      this.originRelationshipType = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `originRelationshipType` property exists and has a value; `false` otherwise
   */
  public hasOriginRelationshipType(): boolean {
    return isDefined<CodeableConcept>(this.originRelationshipType) && !this.originRelationshipType.isEmpty();
  }

  /**
   * @returns the `product` property value as a Reference object if defined; else null
   */
  public getProduct(): Reference | null {
    return this.product;
  }

  /**
   * Assigns the provided Product object value to the `product` property.
   *
   * @decorator `@ReferenceTargets('BiologicallyDerivedProductDispense.product', ['BiologicallyDerivedProduct',])`
   *
   * @param value - the `product` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('BiologicallyDerivedProductDispense.product', [
    'BiologicallyDerivedProduct',
  ])
  public setProduct(value: Reference): this {
    assertIsDefined<Reference>(value, `BiologicallyDerivedProductDispense.product is required`);
    // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
    this.product = value;
    return this;
  }

  /**
   * @returns `true` if the `product` property exists and has a value; `false` otherwise
   */
  public hasProduct(): boolean {
    return isDefined<Reference>(this.product) && !this.product.isEmpty();
  }

  /**
   * @returns the `patient` property value as a Reference object if defined; else null
   */
  public getPatient(): Reference | null {
    return this.patient;
  }

  /**
   * Assigns the provided Patient object value to the `patient` property.
   *
   * @decorator `@ReferenceTargets('BiologicallyDerivedProductDispense.patient', ['Patient',])`
   *
   * @param value - the `patient` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('BiologicallyDerivedProductDispense.patient', [
    'Patient',
  ])
  public setPatient(value: Reference): this {
    assertIsDefined<Reference>(value, `BiologicallyDerivedProductDispense.patient is required`);
    // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
    this.patient = value;
    return this;
  }

  /**
   * @returns `true` if the `patient` property exists and has a value; `false` otherwise
   */
  public hasPatient(): boolean {
    return isDefined<Reference>(this.patient) && !this.patient.isEmpty();
  }

  /**
   * @returns the `matchStatus` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getMatchStatus(): CodeableConcept {
    return this.matchStatus ?? new CodeableConcept();
  }

  /**
   * Assigns the provided MatchStatus object value to the `matchStatus` property.
   *
   * @param value - the `matchStatus` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setMatchStatus(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid BiologicallyDerivedProductDispense.matchStatus; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.matchStatus = value;
    } else {
      this.matchStatus = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `matchStatus` property exists and has a value; `false` otherwise
   */
  public hasMatchStatus(): boolean {
    return isDefined<CodeableConcept>(this.matchStatus) && !this.matchStatus.isEmpty();
  }

  /**
   * @returns the `performer` property value as a BiologicallyDerivedProductDispensePerformerComponent array
   */
  public getPerformer(): BiologicallyDerivedProductDispensePerformerComponent[] {
    return this.performer ?? ([] as BiologicallyDerivedProductDispensePerformerComponent[]);
  }

  /**
   * Assigns the provided BiologicallyDerivedProductDispensePerformerComponent array value to the `performer` property.
   *
   * @param value - the `performer` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPerformer(value: BiologicallyDerivedProductDispensePerformerComponent[] | undefined): this {
    if (isDefinedList<BiologicallyDerivedProductDispensePerformerComponent>(value)) {
      const optErrMsg = `Invalid BiologicallyDerivedProductDispense.performer; Provided value array has an element that is not an instance of BiologicallyDerivedProductDispensePerformerComponent.`;
      assertFhirTypeList<BiologicallyDerivedProductDispensePerformerComponent>(value, BiologicallyDerivedProductDispensePerformerComponent, optErrMsg);
      this.performer = value;
    } else {
      this.performer = undefined;
    }
    return this;
  }

  /**
   * Add the provided BiologicallyDerivedProductDispensePerformerComponent value to the `performer` array property.
   *
   * @param value - the `performer` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addPerformer(value: BiologicallyDerivedProductDispensePerformerComponent | undefined): this {
    if (isDefined<BiologicallyDerivedProductDispensePerformerComponent>(value)) {
      const optErrMsg = `Invalid BiologicallyDerivedProductDispense.performer; Provided element is not an instance of BiologicallyDerivedProductDispensePerformerComponent.`;
      assertFhirType<BiologicallyDerivedProductDispensePerformerComponent>(value, BiologicallyDerivedProductDispensePerformerComponent, optErrMsg);
      this.initPerformer();
      this.performer?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `performer` property exists and has a value; `false` otherwise
   */
  public hasPerformer(): boolean {
    return isDefinedList<BiologicallyDerivedProductDispensePerformerComponent>(this.performer) && this.performer.some((item: BiologicallyDerivedProductDispensePerformerComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `performer` property
   */
  private initPerformer(): void {
    if(!this.hasPerformer()) {
      this.performer = [] as BiologicallyDerivedProductDispensePerformerComponent[];
    }
  }

  /**
   * @returns the `location` property value as a Reference object; else an empty Reference object
   */
  public getLocation(): Reference {
    return this.location ?? new Reference();
  }

  /**
   * Assigns the provided Location object value to the `location` property.
   *
   * @decorator `@ReferenceTargets('BiologicallyDerivedProductDispense.location', ['Location',])`
   *
   * @param value - the `location` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('BiologicallyDerivedProductDispense.location', [
    'Location',
  ])
  public setLocation(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.location = value;
    } else {
      this.location = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `location` property exists and has a value; `false` otherwise
   */
  public hasLocation(): boolean {
    return isDefined<Reference>(this.location) && !this.location.isEmpty();
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
      const optErrMsg = `Invalid BiologicallyDerivedProductDispense.quantity; Provided element is not an instance of Quantity.`;
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
   * @returns the `preparedDate` property value as a DateTimeType object if defined; else an empty DateTimeType object
   */
  public getPreparedDateElement(): DateTimeType {
    return this.preparedDate ?? new DateTimeType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `preparedDate` property.
   *
   * @param element - the `preparedDate` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPreparedDateElement(element: DateTimeType | undefined): this {
    if (isDefined<DateTimeType>(element)) {
      const optErrMsg = `Invalid BiologicallyDerivedProductDispense.preparedDate; Provided element is not an instance of DateTimeType.`;
      assertFhirType<DateTimeType>(element, DateTimeType, optErrMsg);
      this.preparedDate = element;
    } else {
      this.preparedDate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `preparedDate` property exists and has a value; `false` otherwise
   */
  public hasPreparedDateElement(): boolean {
    return isDefined<DateTimeType>(this.preparedDate) && !this.preparedDate.isEmpty();
  }

  /**
   * @returns the `preparedDate` property value as a fhirDateTime if defined; else undefined
   */
  public getPreparedDate(): fhirDateTime | undefined {
    return this.preparedDate?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `preparedDate` property.
   *
   * @param value - the `preparedDate` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPreparedDate(value: fhirDateTime | undefined): this {
    if (isDefined<fhirDateTime>(value)) {
      const optErrMsg = `Invalid BiologicallyDerivedProductDispense.preparedDate (${String(value)})`;
      this.preparedDate = new DateTimeType(parseFhirPrimitiveData(value, fhirDateTimeSchema, optErrMsg));
    } else {
      this.preparedDate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `preparedDate` property exists and has a value; `false` otherwise
   */
  public hasPreparedDate(): boolean {
    return this.hasPreparedDateElement();
  }

  /**
   * @returns the `whenHandedOver` property value as a DateTimeType object if defined; else an empty DateTimeType object
   */
  public getWhenHandedOverElement(): DateTimeType {
    return this.whenHandedOver ?? new DateTimeType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `whenHandedOver` property.
   *
   * @param element - the `whenHandedOver` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setWhenHandedOverElement(element: DateTimeType | undefined): this {
    if (isDefined<DateTimeType>(element)) {
      const optErrMsg = `Invalid BiologicallyDerivedProductDispense.whenHandedOver; Provided element is not an instance of DateTimeType.`;
      assertFhirType<DateTimeType>(element, DateTimeType, optErrMsg);
      this.whenHandedOver = element;
    } else {
      this.whenHandedOver = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `whenHandedOver` property exists and has a value; `false` otherwise
   */
  public hasWhenHandedOverElement(): boolean {
    return isDefined<DateTimeType>(this.whenHandedOver) && !this.whenHandedOver.isEmpty();
  }

  /**
   * @returns the `whenHandedOver` property value as a fhirDateTime if defined; else undefined
   */
  public getWhenHandedOver(): fhirDateTime | undefined {
    return this.whenHandedOver?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `whenHandedOver` property.
   *
   * @param value - the `whenHandedOver` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setWhenHandedOver(value: fhirDateTime | undefined): this {
    if (isDefined<fhirDateTime>(value)) {
      const optErrMsg = `Invalid BiologicallyDerivedProductDispense.whenHandedOver (${String(value)})`;
      this.whenHandedOver = new DateTimeType(parseFhirPrimitiveData(value, fhirDateTimeSchema, optErrMsg));
    } else {
      this.whenHandedOver = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `whenHandedOver` property exists and has a value; `false` otherwise
   */
  public hasWhenHandedOver(): boolean {
    return this.hasWhenHandedOverElement();
  }

  /**
   * @returns the `destination` property value as a Reference object; else an empty Reference object
   */
  public getDestination(): Reference {
    return this.destination ?? new Reference();
  }

  /**
   * Assigns the provided Destination object value to the `destination` property.
   *
   * @decorator `@ReferenceTargets('BiologicallyDerivedProductDispense.destination', ['Location',])`
   *
   * @param value - the `destination` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('BiologicallyDerivedProductDispense.destination', [
    'Location',
  ])
  public setDestination(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.destination = value;
    } else {
      this.destination = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `destination` property exists and has a value; `false` otherwise
   */
  public hasDestination(): boolean {
    return isDefined<Reference>(this.destination) && !this.destination.isEmpty();
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
      const optErrMsg = `Invalid BiologicallyDerivedProductDispense.note; Provided value array has an element that is not an instance of Annotation.`;
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
      const optErrMsg = `Invalid BiologicallyDerivedProductDispense.note; Provided element is not an instance of Annotation.`;
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

  /**
   * @returns the `usageInstruction` property value as a StringType object if defined; else an empty StringType object
   */
  public getUsageInstructionElement(): StringType {
    return this.usageInstruction ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `usageInstruction` property.
   *
   * @param element - the `usageInstruction` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setUsageInstructionElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid BiologicallyDerivedProductDispense.usageInstruction; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.usageInstruction = element;
    } else {
      this.usageInstruction = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `usageInstruction` property exists and has a value; `false` otherwise
   */
  public hasUsageInstructionElement(): boolean {
    return isDefined<StringType>(this.usageInstruction) && !this.usageInstruction.isEmpty();
  }

  /**
   * @returns the `usageInstruction` property value as a fhirString if defined; else undefined
   */
  public getUsageInstruction(): fhirString | undefined {
    return this.usageInstruction?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `usageInstruction` property.
   *
   * @param value - the `usageInstruction` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setUsageInstruction(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid BiologicallyDerivedProductDispense.usageInstruction (${String(value)})`;
      this.usageInstruction = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.usageInstruction = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `usageInstruction` property exists and has a value; `false` otherwise
   */
  public hasUsageInstruction(): boolean {
    return this.hasUsageInstructionElement();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'BiologicallyDerivedProductDispense';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identifier,
      this.basedOn,
      this.partOf,
      this.status,
      this.originRelationshipType,
      this.product,
      this.patient,
      this.matchStatus,
      this.performer,
      this.location,
      this.quantity,
      this.preparedDate,
      this.whenHandedOver,
      this.destination,
      this.note,
      this.usageInstruction,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): BiologicallyDerivedProductDispense {
    const dest = new BiologicallyDerivedProductDispense();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: BiologicallyDerivedProductDispense): void {
    super.copyValues(dest);
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    const basedOnList = copyListValues<Reference>(this.basedOn);
    dest.basedOn = basedOnList.length === 0 ? undefined : basedOnList;
    const partOfList = copyListValues<Reference>(this.partOf);
    dest.partOf = partOfList.length === 0 ? undefined : partOfList;
    dest.status = this.status ? this.status.copy() : null;
    dest.originRelationshipType = this.originRelationshipType?.copy();
    dest.product = this.product ? this.product.copy() : null;
    dest.patient = this.patient ? this.patient.copy() : null;
    dest.matchStatus = this.matchStatus?.copy();
    const performerList = copyListValues<BiologicallyDerivedProductDispensePerformerComponent>(this.performer);
    dest.performer = performerList.length === 0 ? undefined : performerList;
    dest.location = this.location?.copy();
    dest.quantity = this.quantity?.copy();
    dest.preparedDate = this.preparedDate?.copy();
    dest.whenHandedOver = this.whenHandedOver?.copy();
    dest.destination = this.destination?.copy();
    const noteList = copyListValues<Annotation>(this.note);
    dest.note = noteList.length === 0 ? undefined : noteList;
    dest.usageInstruction = this.usageInstruction?.copy();
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

    if (this.hasBasedOn()) {
      setFhirComplexListJson(this.getBasedOn(), 'basedOn', jsonObj);
    }

    if (this.hasPartOf()) {
      setFhirComplexListJson(this.getPartOf(), 'partOf', jsonObj);
    }

    if (this.hasStatusElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getStatusElement()!, 'status', jsonObj);
    } else {
      missingReqdProperties.push(`BiologicallyDerivedProductDispense.status`);
    }

    if (this.hasOriginRelationshipType()) {
      setFhirComplexJson(this.getOriginRelationshipType(), 'originRelationshipType', jsonObj);
    }

    if (this.hasProduct()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getProduct()!, 'product', jsonObj);
    } else {
      missingReqdProperties.push(`BiologicallyDerivedProductDispense.product`);
    }

    if (this.hasPatient()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getPatient()!, 'patient', jsonObj);
    } else {
      missingReqdProperties.push(`BiologicallyDerivedProductDispense.patient`);
    }

    if (this.hasMatchStatus()) {
      setFhirComplexJson(this.getMatchStatus(), 'matchStatus', jsonObj);
    }

    if (this.hasPerformer()) {
      setFhirBackboneElementListJson(this.getPerformer(), 'performer', jsonObj);
    }

    if (this.hasLocation()) {
      setFhirComplexJson(this.getLocation(), 'location', jsonObj);
    }

    if (this.hasQuantity()) {
      setFhirComplexJson(this.getQuantity(), 'quantity', jsonObj);
    }

    if (this.hasPreparedDateElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getPreparedDateElement(), 'preparedDate', jsonObj);
    }

    if (this.hasWhenHandedOverElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getWhenHandedOverElement(), 'whenHandedOver', jsonObj);
    }

    if (this.hasDestination()) {
      setFhirComplexJson(this.getDestination(), 'destination', jsonObj);
    }

    if (this.hasNote()) {
      setFhirComplexListJson(this.getNote(), 'note', jsonObj);
    }

    if (this.hasUsageInstructionElement()) {
      setFhirPrimitiveJson<fhirString>(this.getUsageInstructionElement(), 'usageInstruction', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}

/**
 * BiologicallyDerivedProductDispensePerformerComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Indicates who or what performed an action
 * - **Definition:** Indicates who or what performed an action.
 *
 * @category Data Models: Resource
 * @see [FHIR BiologicallyDerivedProductDispense](http://hl7.org/fhir/StructureDefinition/BiologicallyDerivedProductDispense)
 */
export class BiologicallyDerivedProductDispensePerformerComponent extends BackboneElement implements IBackboneElement {
  constructor(actor: Reference | null = null) {
    super();

    this.actor = null;
    if (isDefined<Reference>(actor)) {
      this.setActor(actor);
    }
  }

  /**
   * Parse the provided `BiologicallyDerivedProductDispensePerformerComponent` JSON to instantiate the BiologicallyDerivedProductDispensePerformerComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `BiologicallyDerivedProductDispensePerformerComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to BiologicallyDerivedProductDispensePerformerComponent
   * @returns BiologicallyDerivedProductDispensePerformerComponent data model or undefined for `BiologicallyDerivedProductDispensePerformerComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): BiologicallyDerivedProductDispensePerformerComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'BiologicallyDerivedProductDispensePerformerComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new BiologicallyDerivedProductDispensePerformerComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    const missingReqdProperties: string[] = [];

    fieldName = 'function';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setFunction(datatype);
    }

    fieldName = 'actor';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setActor(datatype);
      }
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
   * BiologicallyDerivedProductDispense.performer.function Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Identifies the function of the performer during the dispense
   * - **Definition:** Identifies the function of the performer during the dispense.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private function_?: CodeableConcept | undefined;

  /**
   * BiologicallyDerivedProductDispense.performer.actor Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who performed the action
   * - **Definition:** Identifies the person responsible for the action.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *     ]
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private actor: Reference | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `function_` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getFunction(): CodeableConcept {
    return this.function_ ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Function object value to the `function_` property.
   *
   * @param value - the `function_` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setFunction(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid BiologicallyDerivedProductDispense.performer.function; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.function_ = value;
    } else {
      this.function_ = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `function_` property exists and has a value; `false` otherwise
   */
  public hasFunction(): boolean {
    return isDefined<CodeableConcept>(this.function_) && !this.function_.isEmpty();
  }

  /**
   * @returns the `actor` property value as a Reference object if defined; else null
   */
  public getActor(): Reference | null {
    return this.actor;
  }

  /**
   * Assigns the provided Actor object value to the `actor` property.
   *
   * @decorator `@ReferenceTargets('BiologicallyDerivedProductDispense.performer.actor', ['Practitioner',])`
   *
   * @param value - the `actor` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('BiologicallyDerivedProductDispense.performer.actor', [
    'Practitioner',
  ])
  public setActor(value: Reference): this {
    assertIsDefined<Reference>(value, `BiologicallyDerivedProductDispense.performer.actor is required`);
    // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
    this.actor = value;
    return this;
  }

  /**
   * @returns `true` if the `actor` property exists and has a value; `false` otherwise
   */
  public hasActor(): boolean {
    return isDefined<Reference>(this.actor) && !this.actor.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'BiologicallyDerivedProductDispense.performer';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.function_,
      this.actor,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): BiologicallyDerivedProductDispensePerformerComponent {
    const dest = new BiologicallyDerivedProductDispensePerformerComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: BiologicallyDerivedProductDispensePerformerComponent): void {
    super.copyValues(dest);
    dest.function_ = this.function_?.copy();
    dest.actor = this.actor ? this.actor.copy() : null;
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

    if (this.hasFunction()) {
      setFhirComplexJson(this.getFunction(), 'function', jsonObj);
    }

    if (this.hasActor()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getActor()!, 'actor', jsonObj);
    } else {
      missingReqdProperties.push(`BiologicallyDerivedProductDispense.performer.actor`);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
