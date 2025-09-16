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
 * RegulatedAuthorization Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/RegulatedAuthorization
 * StructureDefinition.name: RegulatedAuthorization
 * StructureDefinition.description: Regulatory approval, clearance or licencing related to a regulated product, treatment, facility or activity that is cited in a guidance, regulation, rule or legislative act. An example is Market Authorization relating to a Medicinal Product.
 * StructureDefinition.fhirVersion: 4.3.0
 *
 * For questions, suggestions, or bugs, please open an issue at [GitHub ts-fhir-datamodels/issues](https://github.com/Paqrat76/ts-fhir-datamodels/issues).
 *
 * @packageDocumentation
 */

import {
  BackboneElement,
  ChoiceDataTypes,
  ChoiceDataTypesMeta,
  DateTimeType,
  DomainResource,
  FhirParser,
  IBackboneElement,
  IDataType,
  IDomainResource,
  InvalidTypeError,
  JSON,
  MarkdownType,
  ReferenceTargets,
  assertFhirType,
  assertFhirTypeList,
  assertIsDefined,
  copyListValues,
  fhirDateTime,
  fhirDateTimeSchema,
  fhirMarkdown,
  fhirMarkdownSchema,
  getPrimitiveTypeJson,
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
  setPolymorphicValueJson,
} from '@paq-ts-fhir/fhir-core';
import { CodeableConcept, CodeableReference, Identifier, PARSABLE_DATATYPE_MAP, Period, Reference } from '../complex-types/complex-datatypes';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Symbol.metadata polyfill secret sauce for decorator metadata
(Symbol.metadata as any) ??= Symbol('Symbol.metadata');

/**
 * RegulatedAuthorization Class
 *
 * @remarks
 * Regulatory approval, clearance or licencing related to a regulated product, treatment, facility or activity that is cited in a guidance, regulation, rule or legislative act. An example is Market Authorization relating to a Medicinal Product.
 *
 * **FHIR Specification**
 * - **Short:** Regulatory approval, clearance or licencing related to a regulated product, treatment, facility or activity e.g. Market Authorization for a Medicinal Product
 * - **Definition:** Regulatory approval, clearance or licencing related to a regulated product, treatment, facility or activity that is cited in a guidance, regulation, rule or legislative act. An example is Market Authorization relating to a Medicinal Product.
 * - **FHIR Version:** 4.3.0
 *
 * @category Data Models: Resource
 * @see [FHIR RegulatedAuthorization](http://hl7.org/fhir/StructureDefinition/RegulatedAuthorization)
 */
export class RegulatedAuthorization extends DomainResource implements IDomainResource {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `RegulatedAuthorization` JSON to instantiate the RegulatedAuthorization data model.
   *
   * @param sourceJson - JSON representing FHIR `RegulatedAuthorization`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to RegulatedAuthorization
   * @returns RegulatedAuthorization data model or undefined for `RegulatedAuthorization`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): RegulatedAuthorization | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'RegulatedAuthorization';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new RegulatedAuthorization();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'RegulatedAuthorization');
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

    fieldName = 'subject';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addSubject(datatype);
          }
        });
      }
  }

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setType(datatype);
    }

    fieldName = 'description';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: MarkdownType | undefined = fhirParser.parseMarkdownType(dtJson, dtSiblingJson);
      instance.setDescriptionElement(datatype);
    }

    fieldName = 'region';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addRegion(datatype);
          }
        });
      }
    }

    fieldName = 'status';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setStatus(datatype);
    }

    fieldName = 'statusDate';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dtJson, dtSiblingJson);
      instance.setStatusDateElement(datatype);
    }

    fieldName = 'validityPeriod';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Period | undefined = Period.parse(classJsonObj[fieldName]!, sourceField);
      instance.setValidityPeriod(datatype);
    }

    fieldName = 'indication';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableReference | undefined = CodeableReference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setIndication(datatype);
    }

    fieldName = 'intendedUse';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setIntendedUse(datatype);
    }

    fieldName = 'basis';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addBasis(datatype);
          }
        });
      }
    }

    fieldName = 'holder';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setHolder(datatype);
    }

    fieldName = 'regulator';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setRegulator(datatype);
    }

    fieldName = 'case';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: RegulatedAuthorizationCaseComponent | undefined = RegulatedAuthorizationCaseComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setCase(component);
    }

    return instance;
  }

  /**
   * RegulatedAuthorization.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Business identifier for the authorization, typically assigned by the authorizing body
   * - **Definition:** Business identifier for the authorization, typically assigned by the authorizing body.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier[] | undefined;

  /**
   * RegulatedAuthorization.subject Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The product type, treatment, facility or activity that is being authorized
   * - **Definition:** The product type, treatment, facility or activity that is being authorized.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/MedicinalProductDefinition',
   *       'http://hl7.org/fhir/StructureDefinition/BiologicallyDerivedProduct',
   *       'http://hl7.org/fhir/StructureDefinition/NutritionProduct',
   *       'http://hl7.org/fhir/StructureDefinition/PackagedProductDefinition',
   *       'http://hl7.org/fhir/StructureDefinition/SubstanceDefinition',
   *       'http://hl7.org/fhir/StructureDefinition/DeviceDefinition',
   *       'http://hl7.org/fhir/StructureDefinition/ResearchStudy',
   *       'http://hl7.org/fhir/StructureDefinition/ActivityDefinition',
   *       'http://hl7.org/fhir/StructureDefinition/PlanDefinition',
   *       'http://hl7.org/fhir/StructureDefinition/ObservationDefinition',
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *       'http://hl7.org/fhir/StructureDefinition/Location',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private subject?: Reference[] | undefined;

  /**
   * RegulatedAuthorization.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Overall type of this authorization, for example drug marketing approval, orphan drug designation
   * - **Definition:** Overall type of this authorization, for example drug marketing approval, orphan drug designation.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private type_?: CodeableConcept | undefined;

  /**
   * RegulatedAuthorization.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** General textual supporting information
   * - **Definition:** General textual supporting information.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private description?: MarkdownType | undefined;

  /**
   * RegulatedAuthorization.region Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The territory in which the authorization has been granted
   * - **Definition:** The territory (e.g., country, jurisdiction etc.) in which the authorization has been granted.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private region?: CodeableConcept[] | undefined;

  /**
   * RegulatedAuthorization.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The status that is authorised e.g. approved. Intermediate states can be tracked with cases and applications
   * - **Definition:** The status that is authorised e.g. approved. Intermediate states and actions can be tracked with cases and applications.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private status?: CodeableConcept | undefined;

  /**
   * RegulatedAuthorization.statusDate Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The date at which the current status was assigned
   * - **Definition:** The date at which the current status was assigned.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private statusDate?: DateTimeType | undefined;

  /**
   * RegulatedAuthorization.validityPeriod Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The time period in which the regulatory approval etc. is in effect, e.g. a Marketing Authorization includes the date of authorization and/or expiration date
   * - **Definition:** The time period in which the regulatory approval, clearance or licencing is in effect. As an example, a Marketing Authorization includes the date of authorization and/or an expiration date.
   * - **FHIR Type:** `Period`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private validityPeriod?: Period | undefined;

  /**
   * RegulatedAuthorization.indication Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Condition for which the use of the regulated product applies
   * - **Definition:** Condition for which the use of the regulated product applies.
   * - **FHIR Type:** `CodeableReference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/ClinicalUseDefinition',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private indication?: CodeableReference | undefined;

  /**
   * RegulatedAuthorization.intendedUse Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The intended use of the product, e.g. prevention, treatment
   * - **Definition:** The intended use of the product, e.g. prevention, treatment, diagnosis.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private intendedUse?: CodeableConcept | undefined;

  /**
   * RegulatedAuthorization.basis Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The legal/regulatory framework or reasons under which this authorization is granted
   * - **Definition:** The legal or regulatory framework against which this authorization is granted, or other reasons for it.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private basis?: CodeableConcept[] | undefined;

  /**
   * RegulatedAuthorization.holder Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The organization that has been granted this authorization, by the regulator
   * - **Definition:** The organization that has been granted this authorization, by some authoritative body (the \'regulator\').
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private holder?: Reference | undefined;

  /**
   * RegulatedAuthorization.regulator Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The regulatory authority or authorizing body granting the authorization
   * - **Definition:** The regulatory authority or authorizing body granting the authorization. For example, European Medicines Agency (EMA), Food and Drug Administration (FDA), Health Canada (HC), etc.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private regulator?: Reference | undefined;

  /**
   * RegulatedAuthorization.case Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The case or regulatory procedure for granting or amending a regulated authorization. Note: This area is subject to ongoing review and the workgroup is seeking implementer feedback on its use (see link at bottom of page)
   * - **Definition:** The case or regulatory procedure for granting or amending a regulated authorization. An authorization is granted in response to submissions/applications by those seeking authorization. A case is the administrative process that deals with the application(s) that relate to this and assesses them. Note: This area is subject to ongoing review and the workgroup is seeking implementer feedback on its use (see link at bottom of page).
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private case_?: RegulatedAuthorizationCaseComponent | undefined;

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
      const optErrMsg = `Invalid RegulatedAuthorization.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid RegulatedAuthorization.identifier; Provided element is not an instance of Identifier.`;
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
   * @returns the `subject` property value as a Reference array
   */
  public getSubject(): Reference[] {
    return this.subject ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `subject` property.
   *
   * @decorator `@ReferenceTargets('RegulatedAuthorization.subject', ['MedicinalProductDefinition','BiologicallyDerivedProduct','NutritionProduct','PackagedProductDefinition','SubstanceDefinition','DeviceDefinition','ResearchStudy','ActivityDefinition','PlanDefinition','ObservationDefinition','Practitioner','Organization','Location',])`
   *
   * @param value - the `subject` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('RegulatedAuthorization.subject', [
    'MedicinalProductDefinition',
  
    'BiologicallyDerivedProduct',
  
    'NutritionProduct',
  
    'PackagedProductDefinition',
  
    'SubstanceDefinition',
  
    'DeviceDefinition',
  
    'ResearchStudy',
  
    'ActivityDefinition',
  
    'PlanDefinition',
  
    'ObservationDefinition',
  
    'Practitioner',
  
    'Organization',
  
    'Location',
  ])
  public setSubject(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.subject = value;
    } else {
      this.subject = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `subject` array property.
   *
   * @decorator `@ReferenceTargets('RegulatedAuthorization.subject', ['MedicinalProductDefinition','BiologicallyDerivedProduct','NutritionProduct','PackagedProductDefinition','SubstanceDefinition','DeviceDefinition','ResearchStudy','ActivityDefinition','PlanDefinition','ObservationDefinition','Practitioner','Organization','Location',])`
   *
   * @param value - the `subject` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('RegulatedAuthorization.subject', [
    'MedicinalProductDefinition',
  
    'BiologicallyDerivedProduct',
  
    'NutritionProduct',
  
    'PackagedProductDefinition',
  
    'SubstanceDefinition',
  
    'DeviceDefinition',
  
    'ResearchStudy',
  
    'ActivityDefinition',
  
    'PlanDefinition',
  
    'ObservationDefinition',
  
    'Practitioner',
  
    'Organization',
  
    'Location',
  ])
  public addSubject(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initSubject();
      this.subject?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `subject` property exists and has a value; `false` otherwise
   */
  public hasSubject(): boolean {
    return isDefinedList<Reference>(this.subject) && this.subject.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `subject` property
   */
  private initSubject(): void {
    if (!this.hasSubject()) {
      this.subject = [] as Reference[];
    }
  }

  /**
   * @returns the `type_` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getType(): CodeableConcept {
    return this.type_ ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Type object value to the `type_` property.
   *
   * @param value - the `type_` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setType(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid RegulatedAuthorization.type; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.type_ = value;
    } else {
      this.type_ = undefined;
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
      const optErrMsg = `Invalid RegulatedAuthorization.description; Provided element is not an instance of MarkdownType.`;
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
      const optErrMsg = `Invalid RegulatedAuthorization.description (${String(value)})`;
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
   * @returns the `region` property value as a CodeableConcept array
   */
  public getRegion(): CodeableConcept[] {
    return this.region ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `region` property.
   *
   * @param value - the `region` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setRegion(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid RegulatedAuthorization.region; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.region = value;
    } else {
      this.region = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `region` array property.
   *
   * @param value - the `region` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addRegion(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid RegulatedAuthorization.region; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initRegion();
      this.region?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `region` property exists and has a value; `false` otherwise
   */
  public hasRegion(): boolean {
    return isDefinedList<CodeableConcept>(this.region) && this.region.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `region` property
   */
  private initRegion(): void {
    if(!this.hasRegion()) {
      this.region = [] as CodeableConcept[];
    }
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
      const optErrMsg = `Invalid RegulatedAuthorization.status; Provided element is not an instance of CodeableConcept.`;
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

  /**
   * @returns the `statusDate` property value as a DateTimeType object if defined; else an empty DateTimeType object
   */
  public getStatusDateElement(): DateTimeType {
    return this.statusDate ?? new DateTimeType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `statusDate` property.
   *
   * @param element - the `statusDate` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setStatusDateElement(element: DateTimeType | undefined): this {
    if (isDefined<DateTimeType>(element)) {
      const optErrMsg = `Invalid RegulatedAuthorization.statusDate; Provided element is not an instance of DateTimeType.`;
      assertFhirType<DateTimeType>(element, DateTimeType, optErrMsg);
      this.statusDate = element;
    } else {
      this.statusDate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `statusDate` property exists and has a value; `false` otherwise
   */
  public hasStatusDateElement(): boolean {
    return isDefined<DateTimeType>(this.statusDate) && !this.statusDate.isEmpty();
  }

  /**
   * @returns the `statusDate` property value as a fhirDateTime if defined; else undefined
   */
  public getStatusDate(): fhirDateTime | undefined {
    return this.statusDate?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `statusDate` property.
   *
   * @param value - the `statusDate` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setStatusDate(value: fhirDateTime | undefined): this {
    if (isDefined<fhirDateTime>(value)) {
      const optErrMsg = `Invalid RegulatedAuthorization.statusDate (${String(value)})`;
      this.statusDate = new DateTimeType(parseFhirPrimitiveData(value, fhirDateTimeSchema, optErrMsg));
    } else {
      this.statusDate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `statusDate` property exists and has a value; `false` otherwise
   */
  public hasStatusDate(): boolean {
    return this.hasStatusDateElement();
  }

  /**
   * @returns the `validityPeriod` property value as a Period object if defined; else an empty Period object
   */
  public getValidityPeriod(): Period {
    return this.validityPeriod ?? new Period();
  }

  /**
   * Assigns the provided ValidityPeriod object value to the `validityPeriod` property.
   *
   * @param value - the `validityPeriod` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setValidityPeriod(value: Period | undefined): this {
    if (isDefined<Period>(value)) {
      const optErrMsg = `Invalid RegulatedAuthorization.validityPeriod; Provided element is not an instance of Period.`;
      assertFhirType<Period>(value, Period, optErrMsg);
      this.validityPeriod = value;
    } else {
      this.validityPeriod = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `validityPeriod` property exists and has a value; `false` otherwise
   */
  public hasValidityPeriod(): boolean {
    return isDefined<Period>(this.validityPeriod) && !this.validityPeriod.isEmpty();
  }

  /**
   * @returns the `indication` property value as a CodeableReference object if defined; else an empty CodeableReference object
   */
  public getIndication(): CodeableReference {
    return this.indication ?? new CodeableReference();
  }

  /**
   * Assigns the provided Indication object value to the `indication` property.
   *
   * @param value - the `indication` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setIndication(value: CodeableReference | undefined): this {
    if (isDefined<CodeableReference>(value)) {
      const optErrMsg = `Invalid RegulatedAuthorization.indication; Provided element is not an instance of CodeableReference.`;
      assertFhirType<CodeableReference>(value, CodeableReference, optErrMsg);
      this.indication = value;
    } else {
      this.indication = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `indication` property exists and has a value; `false` otherwise
   */
  public hasIndication(): boolean {
    return isDefined<CodeableReference>(this.indication) && !this.indication.isEmpty();
  }

  /**
   * @returns the `intendedUse` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getIntendedUse(): CodeableConcept {
    return this.intendedUse ?? new CodeableConcept();
  }

  /**
   * Assigns the provided IntendedUse object value to the `intendedUse` property.
   *
   * @param value - the `intendedUse` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setIntendedUse(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid RegulatedAuthorization.intendedUse; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.intendedUse = value;
    } else {
      this.intendedUse = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `intendedUse` property exists and has a value; `false` otherwise
   */
  public hasIntendedUse(): boolean {
    return isDefined<CodeableConcept>(this.intendedUse) && !this.intendedUse.isEmpty();
  }

  /**
   * @returns the `basis` property value as a CodeableConcept array
   */
  public getBasis(): CodeableConcept[] {
    return this.basis ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `basis` property.
   *
   * @param value - the `basis` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setBasis(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid RegulatedAuthorization.basis; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.basis = value;
    } else {
      this.basis = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `basis` array property.
   *
   * @param value - the `basis` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addBasis(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid RegulatedAuthorization.basis; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initBasis();
      this.basis?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `basis` property exists and has a value; `false` otherwise
   */
  public hasBasis(): boolean {
    return isDefinedList<CodeableConcept>(this.basis) && this.basis.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `basis` property
   */
  private initBasis(): void {
    if(!this.hasBasis()) {
      this.basis = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `holder` property value as a Reference object; else an empty Reference object
   */
  public getHolder(): Reference {
    return this.holder ?? new Reference();
  }

  /**
   * Assigns the provided Holder object value to the `holder` property.
   *
   * @decorator `@ReferenceTargets('RegulatedAuthorization.holder', ['Organization',])`
   *
   * @param value - the `holder` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('RegulatedAuthorization.holder', [
    'Organization',
  ])
  public setHolder(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.holder = value;
    } else {
      this.holder = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `holder` property exists and has a value; `false` otherwise
   */
  public hasHolder(): boolean {
    return isDefined<Reference>(this.holder) && !this.holder.isEmpty();
  }

  /**
   * @returns the `regulator` property value as a Reference object; else an empty Reference object
   */
  public getRegulator(): Reference {
    return this.regulator ?? new Reference();
  }

  /**
   * Assigns the provided Regulator object value to the `regulator` property.
   *
   * @decorator `@ReferenceTargets('RegulatedAuthorization.regulator', ['Organization',])`
   *
   * @param value - the `regulator` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('RegulatedAuthorization.regulator', [
    'Organization',
  ])
  public setRegulator(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.regulator = value;
    } else {
      this.regulator = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `regulator` property exists and has a value; `false` otherwise
   */
  public hasRegulator(): boolean {
    return isDefined<Reference>(this.regulator) && !this.regulator.isEmpty();
  }

  /**
   * @returns the `case_` property value as a RegulatedAuthorizationCaseComponent object if defined; else an empty RegulatedAuthorizationCaseComponent object
   */
  public getCase(): RegulatedAuthorizationCaseComponent {
    return this.case_ ?? new RegulatedAuthorizationCaseComponent();
  }

  /**
   * Assigns the provided Case object value to the `case_` property.
   *
   * @param value - the `case_` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCase(value: RegulatedAuthorizationCaseComponent | undefined): this {
    if (isDefined<RegulatedAuthorizationCaseComponent>(value)) {
      const optErrMsg = `Invalid RegulatedAuthorization.case; Provided element is not an instance of RegulatedAuthorizationCaseComponent.`;
      assertFhirType<RegulatedAuthorizationCaseComponent>(value, RegulatedAuthorizationCaseComponent, optErrMsg);
      this.case_ = value;
    } else {
      this.case_ = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `case_` property exists and has a value; `false` otherwise
   */
  public hasCase(): boolean {
    return isDefined<RegulatedAuthorizationCaseComponent>(this.case_) && !this.case_.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'RegulatedAuthorization';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identifier,
      this.subject,
      this.type_,
      this.description,
      this.region,
      this.status,
      this.statusDate,
      this.validityPeriod,
      this.indication,
      this.intendedUse,
      this.basis,
      this.holder,
      this.regulator,
      this.case_,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): RegulatedAuthorization {
    const dest = new RegulatedAuthorization();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: RegulatedAuthorization): void {
    super.copyValues(dest);
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    const subjectList = copyListValues<Reference>(this.subject);
    dest.subject = subjectList.length === 0 ? undefined : subjectList;
    dest.type_ = this.type_?.copy();
    dest.description = this.description?.copy();
    const regionList = copyListValues<CodeableConcept>(this.region);
    dest.region = regionList.length === 0 ? undefined : regionList;
    dest.status = this.status?.copy();
    dest.statusDate = this.statusDate?.copy();
    dest.validityPeriod = this.validityPeriod?.copy();
    dest.indication = this.indication?.copy();
    dest.intendedUse = this.intendedUse?.copy();
    const basisList = copyListValues<CodeableConcept>(this.basis);
    dest.basis = basisList.length === 0 ? undefined : basisList;
    dest.holder = this.holder?.copy();
    dest.regulator = this.regulator?.copy();
    dest.case_ = this.case_?.copy();
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

    if (this.hasSubject()) {
      setFhirComplexListJson(this.getSubject(), 'subject', jsonObj);
    }

    if (this.hasType()) {
      setFhirComplexJson(this.getType(), 'type', jsonObj);
    }

    if (this.hasDescriptionElement()) {
      setFhirPrimitiveJson<fhirMarkdown>(this.getDescriptionElement(), 'description', jsonObj);
    }

    if (this.hasRegion()) {
      setFhirComplexListJson(this.getRegion(), 'region', jsonObj);
    }

    if (this.hasStatus()) {
      setFhirComplexJson(this.getStatus(), 'status', jsonObj);
    }

    if (this.hasStatusDateElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getStatusDateElement(), 'statusDate', jsonObj);
    }

    if (this.hasValidityPeriod()) {
      setFhirComplexJson(this.getValidityPeriod(), 'validityPeriod', jsonObj);
    }

    if (this.hasIndication()) {
      setFhirComplexJson(this.getIndication(), 'indication', jsonObj);
    }

    if (this.hasIntendedUse()) {
      setFhirComplexJson(this.getIntendedUse(), 'intendedUse', jsonObj);
    }

    if (this.hasBasis()) {
      setFhirComplexListJson(this.getBasis(), 'basis', jsonObj);
    }

    if (this.hasHolder()) {
      setFhirComplexJson(this.getHolder(), 'holder', jsonObj);
    }

    if (this.hasRegulator()) {
      setFhirComplexJson(this.getRegulator(), 'regulator', jsonObj);
    }

    if (this.hasCase()) {
      setFhirBackboneElementJson(this.getCase(), 'case', jsonObj);
    }

    return jsonObj;
  }
}

/**
 * RegulatedAuthorizationCaseComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** The case or regulatory procedure for granting or amending a regulated authorization. Note: This area is subject to ongoing review and the workgroup is seeking implementer feedback on its use (see link at bottom of page)
 * - **Definition:** The case or regulatory procedure for granting or amending a regulated authorization. An authorization is granted in response to submissions/applications by those seeking authorization. A case is the administrative process that deals with the application(s) that relate to this and assesses them. Note: This area is subject to ongoing review and the workgroup is seeking implementer feedback on its use (see link at bottom of page).
 *
 * @category Data Models: Resource
 * @see [FHIR RegulatedAuthorization](http://hl7.org/fhir/StructureDefinition/RegulatedAuthorization)
 */
export class RegulatedAuthorizationCaseComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `RegulatedAuthorizationCaseComponent` JSON to instantiate the RegulatedAuthorizationCaseComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `RegulatedAuthorizationCaseComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to RegulatedAuthorizationCaseComponent
   * @returns RegulatedAuthorizationCaseComponent data model or undefined for `RegulatedAuthorizationCaseComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): RegulatedAuthorizationCaseComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'RegulatedAuthorizationCaseComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new RegulatedAuthorizationCaseComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    const classMetadata: DecoratorMetadataObject | null = RegulatedAuthorizationCaseComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for RegulatedAuthorizationCaseComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    fieldName = 'identifier';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Identifier | undefined = Identifier.parse(classJsonObj[fieldName]!, sourceField);
      instance.setIdentifier(datatype);
    }

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setType(datatype);
    }

    fieldName = 'status';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setStatus(datatype);
    }

    fieldName = 'date[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const date: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setDate(date);

    fieldName = 'application';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: RegulatedAuthorizationCaseComponent | undefined = RegulatedAuthorizationCaseComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addApplication(component);
          }
        });
      }
    }

    return instance;
  }

  /**
   * RegulatedAuthorization.case.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Identifier by which this case can be referenced
   * - **Definition:** Identifier by which this case can be referenced.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier | undefined;

  /**
   * RegulatedAuthorization.case.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The defining type of case
   * - **Definition:** The defining type of case.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private type_?: CodeableConcept | undefined;

  /**
   * RegulatedAuthorization.case.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The status associated with the case
   * - **Definition:** The status associated with the case.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private status?: CodeableConcept | undefined;

  /**
   * RegulatedAuthorization.case.date[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('RegulatedAuthorization.case.date[x]', ['Period','dateTime',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Relevant date for this case
   * - **Definition:** Relevant date for this case.
   * - **FHIR Types:**
   *     'Period',
   *     'dateTime',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  @ChoiceDataTypesMeta('RegulatedAuthorization.case.date[x]',[
    'Period',
    'dateTime',
  ])
  private date?: IDataType | undefined;

  /**
   * RegulatedAuthorization.case.application Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Applications submitted to obtain a regulated authorization. Steps within the longer running case or procedure
   * - **Definition:** A regulatory submission from an organization to a regulator, as part of an assessing case. Multiple applications may occur over time, with more or different information to support or modify the submission or the authorization. The applications can be considered as steps within the longer running case or procedure for this authorization process.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private application?: RegulatedAuthorizationCaseComponent[] | undefined;

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
      const optErrMsg = `Invalid RegulatedAuthorization.case.identifier; Provided element is not an instance of Identifier.`;
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
   * @returns the `type_` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getType(): CodeableConcept {
    return this.type_ ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Type object value to the `type_` property.
   *
   * @param value - the `type_` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setType(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid RegulatedAuthorization.case.type; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.type_ = value;
    } else {
      this.type_ = undefined;
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
      const optErrMsg = `Invalid RegulatedAuthorization.case.status; Provided element is not an instance of CodeableConcept.`;
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

  /**
   * @returns the `date` property value as a DataType object if defined; else undefined
   */
  public getDate(): IDataType | undefined {
    return this.date;
  }

  /**
   * Assigns the provided DataType object value to the `date` property.
   *
   * @decorator `@ChoiceDataTypes('RegulatedAuthorization.case.date[x]')`
   *
   * @param value - the `date` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('RegulatedAuthorization.case.date[x]')
  public setDate(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.date = value;
    } else {
      this.date = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `date` property exists and has a value; `false` otherwise
   */
  public hasDate(): boolean {
    return isDefined<IDataType>(this.date) && !this.date.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `date` property value as a Period object if defined; else undefined
   */
  public getDatePeriod(): Period | undefined {
    if (!isDefined<IDataType | undefined>(this.date)) {
      return undefined;
    }
    if (!(this.date instanceof Period)) {
      throw new InvalidTypeError(
        `DataType mismatch for RegulatedAuthorization.case.date[x]: Expected Period but encountered ${this.date.fhirType()}`,
      );
    }
    return this.date;
  }

  /**
   * @returns `true` if the `date` property exists as a Period and has a value; `false` otherwise
   */
  public hasDatePeriod(): boolean {
    return this.hasDate() && this.date instanceof Period;
  }

  /**
   * @returns the `date` property value as a DateTimeType object if defined; else undefined
   */
  public getDateDateTimeType(): DateTimeType | undefined {
    if (!isDefined<IDataType | undefined>(this.date)) {
      return undefined;
    }
    if (!(this.date instanceof DateTimeType)) {
      throw new InvalidTypeError(
        `DataType mismatch for RegulatedAuthorization.case.date[x]: Expected DateTimeType but encountered ${this.date.fhirType()}`,
      );
    }
    return this.date;
  }

  /**
   * @returns `true` if the `date` property exists as a DateTimeType and has a value; `false` otherwise
   */
  public hasDateDateTimeType(): boolean {
    return this.hasDate() && this.date instanceof DateTimeType;
  }

  // End of choice datatype-specific "get"/"has" methods

  /**
   * @returns the `application` property value as a RegulatedAuthorizationCaseComponent array
   */
  public getApplication(): RegulatedAuthorizationCaseComponent[] {
    return this.application ?? ([] as RegulatedAuthorizationCaseComponent[]);
  }

  /**
   * Assigns the provided RegulatedAuthorizationCaseComponent array value to the `application` property.
   *
   * @param value - the `application` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setApplication(value: RegulatedAuthorizationCaseComponent[] | undefined): this {
    if (isDefinedList<RegulatedAuthorizationCaseComponent>(value)) {
      const optErrMsg = `Invalid RegulatedAuthorization.case.application; Provided value array has an element that is not an instance of RegulatedAuthorizationCaseComponent.`;
      assertFhirTypeList<RegulatedAuthorizationCaseComponent>(value, RegulatedAuthorizationCaseComponent, optErrMsg);
      this.application = value;
    } else {
      this.application = undefined;
    }
    return this;
  }

  /**
   * Add the provided RegulatedAuthorizationCaseComponent value to the `application` array property.
   *
   * @param value - the `application` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addApplication(value: RegulatedAuthorizationCaseComponent | undefined): this {
    if (isDefined<RegulatedAuthorizationCaseComponent>(value)) {
      const optErrMsg = `Invalid RegulatedAuthorization.case.application; Provided element is not an instance of RegulatedAuthorizationCaseComponent.`;
      assertFhirType<RegulatedAuthorizationCaseComponent>(value, RegulatedAuthorizationCaseComponent, optErrMsg);
      this.initApplication();
      this.application?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `application` property exists and has a value; `false` otherwise
   */
  public hasApplication(): boolean {
    return isDefinedList<RegulatedAuthorizationCaseComponent>(this.application) && this.application.some((item: RegulatedAuthorizationCaseComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `application` property
   */
  private initApplication(): void {
    if(!this.hasApplication()) {
      this.application = [] as RegulatedAuthorizationCaseComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'RegulatedAuthorization.case';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identifier,
      this.type_,
      this.status,
      this.date,
      this.application,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): RegulatedAuthorizationCaseComponent {
    const dest = new RegulatedAuthorizationCaseComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: RegulatedAuthorizationCaseComponent): void {
    super.copyValues(dest);
    dest.identifier = this.identifier?.copy();
    dest.type_ = this.type_?.copy();
    dest.status = this.status?.copy();
    dest.date = this.date?.copy() as IDataType;
    const applicationList = copyListValues<RegulatedAuthorizationCaseComponent>(this.application);
    dest.application = applicationList.length === 0 ? undefined : applicationList;
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

    if (this.hasType()) {
      setFhirComplexJson(this.getType(), 'type', jsonObj);
    }

    if (this.hasStatus()) {
      setFhirComplexJson(this.getStatus(), 'status', jsonObj);
    }

    if (this.hasDate()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getDate()!, 'date', jsonObj);
    }

    if (this.hasApplication()) {
      setFhirBackboneElementListJson(this.getApplication(), 'application', jsonObj);
    }

    return jsonObj;
  }
}
