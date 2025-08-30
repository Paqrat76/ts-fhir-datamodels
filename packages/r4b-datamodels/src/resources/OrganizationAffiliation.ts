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
 * OrganizationAffiliation Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/OrganizationAffiliation
 * StructureDefinition.name: OrganizationAffiliation
 * StructureDefinition.description: Defines an affiliation/assotiation/relationship between 2 distinct oganizations, that is not a part-of relationship/sub-division relationship.
 * StructureDefinition.fhirVersion: 4.3.0
 *
 * For questions, suggestions, or bugs, please open an issue at [GitHub ts-fhir-datamodels/issues](https://github.com/Paqrat76/ts-fhir-datamodels/issues).
 *
 * @packageDocumentation
 */

import {
  BooleanType,
  DomainResource,
  FhirParser,
  IDomainResource,
  JSON,
  ReferenceTargets,
  assertFhirType,
  assertFhirTypeList,
  copyListValues,
  fhirBoolean,
  fhirBooleanSchema,
  getPrimitiveTypeJson,
  isDefined,
  isDefinedList,
  isElementEmpty,
  isEmpty,
  parseFhirPrimitiveData,
  setFhirComplexJson,
  setFhirComplexListJson,
  setFhirPrimitiveJson,
} from '@paq-ts-fhir/fhir-core';
import { CodeableConcept, ContactPoint, Identifier, PARSABLE_DATATYPE_MAP, Period, Reference } from '../complex-types/complex-datatypes';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';

/**
 * OrganizationAffiliation Class
 *
 * @remarks
 * Defines an affiliation/assotiation/relationship between 2 distinct oganizations, that is not a part-of relationship/sub-division relationship.
 *
 * Need to define relationships between organizations that are not sub-divisions of the same organization (part-of relationships).
 *
 * **FHIR Specification**
 * - **Short:** Defines an affiliation/assotiation/relationship between 2 distinct oganizations, that is not a part-of relationship/sub-division relationship
 * - **Definition:** Defines an affiliation/assotiation/relationship between 2 distinct oganizations, that is not a part-of relationship/sub-division relationship.
 * - **FHIR Version:** 4.3.0
 *
 * @category Data Models: Resource
 * @see [FHIR OrganizationAffiliation](http://hl7.org/fhir/StructureDefinition/OrganizationAffiliation)
 */
export class OrganizationAffiliation extends DomainResource implements IDomainResource {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `OrganizationAffiliation` JSON to instantiate the OrganizationAffiliation data model.
   *
   * @param sourceJson - JSON representing FHIR `OrganizationAffiliation`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to OrganizationAffiliation
   * @returns OrganizationAffiliation data model or undefined for `OrganizationAffiliation`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): OrganizationAffiliation | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'OrganizationAffiliation';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new OrganizationAffiliation();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'OrganizationAffiliation');
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

    fieldName = 'active';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setActiveElement(datatype);
    }

    fieldName = 'period';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Period | undefined = Period.parse(classJsonObj[fieldName]!, sourceField);
      instance.setPeriod(datatype);
    }

    fieldName = 'organization';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setOrganization(datatype);
    }

    fieldName = 'participatingOrganization';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setParticipatingOrganization(datatype);
    }

    fieldName = 'network';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addNetwork(datatype);
        }
      });
  }

    fieldName = 'code';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addCode(datatype);
        }
      });
    }

    fieldName = 'specialty';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addSpecialty(datatype);
        }
      });
    }

    fieldName = 'location';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addLocation(datatype);
        }
      });
  }

    fieldName = 'healthcareService';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addHealthcareService(datatype);
        }
      });
  }

    fieldName = 'telecom';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: ContactPoint | undefined = ContactPoint.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addTelecom(datatype);
        }
      });
    }

    fieldName = 'endpoint';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addEndpoint(datatype);
        }
      });
  }

    return instance;
  }

  /**
   * OrganizationAffiliation.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Business identifiers that are specific to this role
   * - **Definition:** Business identifiers that are specific to this role.
   * - **Requirements:** Often, specific identities are assigned for the agent.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier[] | undefined;

  /**
   * OrganizationAffiliation.active Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Whether this organization affiliation record is in active use
   * - **Definition:** Whether this organization affiliation record is in active use.
   * - **Comment:** If this value is false, you may refer to the period to see when the role was in active use. If there is no period specified, no inference can be made about when it was active.
   * - **Requirements:** Need to be able to mark an organization affiliation record as not to be used because it was created in error, or otherwise no longer in active use.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private active?: BooleanType | undefined;

  /**
   * OrganizationAffiliation.period Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The period during which the participatingOrganization is affiliated with the primary organization
   * - **Definition:** The period during which the participatingOrganization is affiliated with the primary organization.
   * - **Requirements:** An affiliation may be created ahead of time and only be active for a defined period of time. Once the affiliation is complete, the fact that it existed may still be required.
   * - **FHIR Type:** `Period`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private period?: Period | undefined;

  /**
   * OrganizationAffiliation.organization Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Organization where the role is available
   * - **Definition:** Organization where the role is available (primary organization/has members).
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private organization?: Reference | undefined;

  /**
   * OrganizationAffiliation.participatingOrganization Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Organization that provides/performs the role (e.g. providing services or is a member of)
   * - **Definition:** The Participating Organization provides/performs the role(s) defined by the code to the Primary Organization (e.g. providing services or is a member of).
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private participatingOrganization?: Reference | undefined;

  /**
   * OrganizationAffiliation.network Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Health insurance provider network in which the participatingOrganization provides the role\'s services (if defined) at the indicated locations (if defined)
   * - **Definition:** Health insurance provider network in which the participatingOrganization provides the role\'s services (if defined) at the indicated locations (if defined).
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private network?: Reference[] | undefined;

  /**
   * OrganizationAffiliation.code Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Definition of the role the participatingOrganization plays
   * - **Definition:** Definition of the role the participatingOrganization plays in the association.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private code?: CodeableConcept[] | undefined;

  /**
   * OrganizationAffiliation.specialty Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Specific specialty of the participatingOrganization in the context of the role
   * - **Definition:** Specific specialty of the participatingOrganization in the context of the role.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private specialty?: CodeableConcept[] | undefined;

  /**
   * OrganizationAffiliation.location Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The location(s) at which the role occurs
   * - **Definition:** The location(s) at which the role occurs.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Location',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private location?: Reference[] | undefined;

  /**
   * OrganizationAffiliation.healthcareService Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Healthcare services provided through the role
   * - **Definition:** Healthcare services provided through the role.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/HealthcareService',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private healthcareService?: Reference[] | undefined;

  /**
   * OrganizationAffiliation.telecom Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Contact details at the participatingOrganization relevant to this Affiliation
   * - **Definition:** Contact details at the participatingOrganization relevant to this Affiliation.
   * - **Requirements:** Sometimes a participating organization provides dedicated contacts to handle enquiries specifically for the role provided to the affiliated organization.
   * - **FHIR Type:** `ContactPoint`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private telecom?: ContactPoint[] | undefined;

  /**
   * OrganizationAffiliation.endpoint Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Technical endpoints providing access to services operated for this role
   * - **Definition:** Technical endpoints providing access to services operated for this role.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Endpoint',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private endpoint?: Reference[] | undefined;

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
      const optErrMsg = `Invalid OrganizationAffiliation.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid OrganizationAffiliation.identifier; Provided element is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid OrganizationAffiliation.active; Provided element is not an instance of BooleanType.`;
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
      const optErrMsg = `Invalid OrganizationAffiliation.active (${String(value)})`;
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
   * @returns the `period` property value as a Period object if defined; else an empty Period object
   */
  public getPeriod(): Period {
    return this.period ?? new Period();
  }

  /**
   * Assigns the provided Period object value to the `period` property.
   *
   * @param value - the `period` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPeriod(value: Period | undefined): this {
    if (isDefined<Period>(value)) {
      const optErrMsg = `Invalid OrganizationAffiliation.period; Provided element is not an instance of Period.`;
      assertFhirType<Period>(value, Period, optErrMsg);
      this.period = value;
    } else {
      this.period = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `period` property exists and has a value; `false` otherwise
   */
  public hasPeriod(): boolean {
    return isDefined<Period>(this.period) && !this.period.isEmpty();
  }

  /**
   * @returns the `organization` property value as a Reference object; else an empty Reference object
   */
  public getOrganization(): Reference {
    return this.organization ?? new Reference();
  }

  /**
   * Assigns the provided Organization object value to the `organization` property.
   *
   * @decorator `@ReferenceTargets('OrganizationAffiliation.organization', ['Organization',])`
   *
   * @param value - the `organization` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('OrganizationAffiliation.organization', [
    'Organization',
  ])
  public setOrganization(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.organization = value;
    } else {
      this.organization = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `organization` property exists and has a value; `false` otherwise
   */
  public hasOrganization(): boolean {
    return isDefined<Reference>(this.organization) && !this.organization.isEmpty();
  }

  /**
   * @returns the `participatingOrganization` property value as a Reference object; else an empty Reference object
   */
  public getParticipatingOrganization(): Reference {
    return this.participatingOrganization ?? new Reference();
  }

  /**
   * Assigns the provided ParticipatingOrganization object value to the `participatingOrganization` property.
   *
   * @decorator `@ReferenceTargets('OrganizationAffiliation.participatingOrganization', ['Organization',])`
   *
   * @param value - the `participatingOrganization` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('OrganizationAffiliation.participatingOrganization', [
    'Organization',
  ])
  public setParticipatingOrganization(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.participatingOrganization = value;
    } else {
      this.participatingOrganization = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `participatingOrganization` property exists and has a value; `false` otherwise
   */
  public hasParticipatingOrganization(): boolean {
    return isDefined<Reference>(this.participatingOrganization) && !this.participatingOrganization.isEmpty();
  }

  /**
   * @returns the `network` property value as a Reference array
   */
  public getNetwork(): Reference[] {
    return this.network ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `network` property.
   *
   * @decorator `@ReferenceTargets('OrganizationAffiliation.network', ['Organization',])`
   *
   * @param value - the `network` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('OrganizationAffiliation.network', [
    'Organization',
  ])
  public setNetwork(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.network = value;
    } else {
      this.network = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `network` array property.
   *
   * @decorator `@ReferenceTargets('OrganizationAffiliation.network', ['Organization',])`
   *
   * @param value - the `network` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('OrganizationAffiliation.network', [
    'Organization',
  ])
  public addNetwork(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initNetwork();
      this.network?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `network` property exists and has a value; `false` otherwise
   */
  public hasNetwork(): boolean {
    return isDefinedList<Reference>(this.network) && this.network.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `network` property
   */
  private initNetwork(): void {
    if (!this.hasNetwork()) {
      this.network = [] as Reference[];
    }
  }

  /**
   * @returns the `code` property value as a CodeableConcept array
   */
  public getCode(): CodeableConcept[] {
    return this.code ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `code` property.
   *
   * @param value - the `code` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCode(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid OrganizationAffiliation.code; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.code = value;
    } else {
      this.code = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `code` array property.
   *
   * @param value - the `code` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addCode(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid OrganizationAffiliation.code; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initCode();
      this.code?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `code` property exists and has a value; `false` otherwise
   */
  public hasCode(): boolean {
    return isDefinedList<CodeableConcept>(this.code) && this.code.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `code` property
   */
  private initCode(): void {
    if(!this.hasCode()) {
      this.code = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `specialty` property value as a CodeableConcept array
   */
  public getSpecialty(): CodeableConcept[] {
    return this.specialty ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `specialty` property.
   *
   * @param value - the `specialty` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSpecialty(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid OrganizationAffiliation.specialty; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.specialty = value;
    } else {
      this.specialty = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `specialty` array property.
   *
   * @param value - the `specialty` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addSpecialty(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid OrganizationAffiliation.specialty; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initSpecialty();
      this.specialty?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `specialty` property exists and has a value; `false` otherwise
   */
  public hasSpecialty(): boolean {
    return isDefinedList<CodeableConcept>(this.specialty) && this.specialty.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `specialty` property
   */
  private initSpecialty(): void {
    if(!this.hasSpecialty()) {
      this.specialty = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `location` property value as a Reference array
   */
  public getLocation(): Reference[] {
    return this.location ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `location` property.
   *
   * @decorator `@ReferenceTargets('OrganizationAffiliation.location', ['Location',])`
   *
   * @param value - the `location` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('OrganizationAffiliation.location', [
    'Location',
  ])
  public setLocation(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.location = value;
    } else {
      this.location = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `location` array property.
   *
   * @decorator `@ReferenceTargets('OrganizationAffiliation.location', ['Location',])`
   *
   * @param value - the `location` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('OrganizationAffiliation.location', [
    'Location',
  ])
  public addLocation(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initLocation();
      this.location?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `location` property exists and has a value; `false` otherwise
   */
  public hasLocation(): boolean {
    return isDefinedList<Reference>(this.location) && this.location.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `location` property
   */
  private initLocation(): void {
    if (!this.hasLocation()) {
      this.location = [] as Reference[];
    }
  }

  /**
   * @returns the `healthcareService` property value as a Reference array
   */
  public getHealthcareService(): Reference[] {
    return this.healthcareService ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `healthcareService` property.
   *
   * @decorator `@ReferenceTargets('OrganizationAffiliation.healthcareService', ['HealthcareService',])`
   *
   * @param value - the `healthcareService` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('OrganizationAffiliation.healthcareService', [
    'HealthcareService',
  ])
  public setHealthcareService(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.healthcareService = value;
    } else {
      this.healthcareService = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `healthcareService` array property.
   *
   * @decorator `@ReferenceTargets('OrganizationAffiliation.healthcareService', ['HealthcareService',])`
   *
   * @param value - the `healthcareService` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('OrganizationAffiliation.healthcareService', [
    'HealthcareService',
  ])
  public addHealthcareService(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initHealthcareService();
      this.healthcareService?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `healthcareService` property exists and has a value; `false` otherwise
   */
  public hasHealthcareService(): boolean {
    return isDefinedList<Reference>(this.healthcareService) && this.healthcareService.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `healthcareService` property
   */
  private initHealthcareService(): void {
    if (!this.hasHealthcareService()) {
      this.healthcareService = [] as Reference[];
    }
  }

  /**
   * @returns the `telecom` property value as a ContactPoint array
   */
  public getTelecom(): ContactPoint[] {
    return this.telecom ?? ([] as ContactPoint[]);
  }

  /**
   * Assigns the provided ContactPoint array value to the `telecom` property.
   *
   * @param value - the `telecom` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setTelecom(value: ContactPoint[] | undefined): this {
    if (isDefinedList<ContactPoint>(value)) {
      const optErrMsg = `Invalid OrganizationAffiliation.telecom; Provided value array has an element that is not an instance of ContactPoint.`;
      assertFhirTypeList<ContactPoint>(value, ContactPoint, optErrMsg);
      this.telecom = value;
    } else {
      this.telecom = undefined;
    }
    return this;
  }

  /**
   * Add the provided ContactPoint value to the `telecom` array property.
   *
   * @param value - the `telecom` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addTelecom(value: ContactPoint | undefined): this {
    if (isDefined<ContactPoint>(value)) {
      const optErrMsg = `Invalid OrganizationAffiliation.telecom; Provided element is not an instance of ContactPoint.`;
      assertFhirType<ContactPoint>(value, ContactPoint, optErrMsg);
      this.initTelecom();
      this.telecom?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `telecom` property exists and has a value; `false` otherwise
   */
  public hasTelecom(): boolean {
    return isDefinedList<ContactPoint>(this.telecom) && this.telecom.some((item: ContactPoint) => !item.isEmpty());
  }

  /**
   * Initialize the `telecom` property
   */
  private initTelecom(): void {
    if(!this.hasTelecom()) {
      this.telecom = [] as ContactPoint[];
    }
  }

  /**
   * @returns the `endpoint` property value as a Reference array
   */
  public getEndpoint(): Reference[] {
    return this.endpoint ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `endpoint` property.
   *
   * @decorator `@ReferenceTargets('OrganizationAffiliation.endpoint', ['Endpoint',])`
   *
   * @param value - the `endpoint` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('OrganizationAffiliation.endpoint', [
    'Endpoint',
  ])
  public setEndpoint(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.endpoint = value;
    } else {
      this.endpoint = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `endpoint` array property.
   *
   * @decorator `@ReferenceTargets('OrganizationAffiliation.endpoint', ['Endpoint',])`
   *
   * @param value - the `endpoint` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('OrganizationAffiliation.endpoint', [
    'Endpoint',
  ])
  public addEndpoint(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initEndpoint();
      this.endpoint?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `endpoint` property exists and has a value; `false` otherwise
   */
  public hasEndpoint(): boolean {
    return isDefinedList<Reference>(this.endpoint) && this.endpoint.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `endpoint` property
   */
  private initEndpoint(): void {
    if (!this.hasEndpoint()) {
      this.endpoint = [] as Reference[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'OrganizationAffiliation';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identifier,
      this.active,
      this.period,
      this.organization,
      this.participatingOrganization,
      this.network,
      this.code,
      this.specialty,
      this.location,
      this.healthcareService,
      this.telecom,
      this.endpoint,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): OrganizationAffiliation {
    const dest = new OrganizationAffiliation();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: OrganizationAffiliation): void {
    super.copyValues(dest);
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    dest.active = this.active?.copy();
    dest.period = this.period?.copy();
    dest.organization = this.organization?.copy();
    dest.participatingOrganization = this.participatingOrganization?.copy();
    const networkList = copyListValues<Reference>(this.network);
    dest.network = networkList.length === 0 ? undefined : networkList;
    const codeList = copyListValues<CodeableConcept>(this.code);
    dest.code = codeList.length === 0 ? undefined : codeList;
    const specialtyList = copyListValues<CodeableConcept>(this.specialty);
    dest.specialty = specialtyList.length === 0 ? undefined : specialtyList;
    const locationList = copyListValues<Reference>(this.location);
    dest.location = locationList.length === 0 ? undefined : locationList;
    const healthcareServiceList = copyListValues<Reference>(this.healthcareService);
    dest.healthcareService = healthcareServiceList.length === 0 ? undefined : healthcareServiceList;
    const telecomList = copyListValues<ContactPoint>(this.telecom);
    dest.telecom = telecomList.length === 0 ? undefined : telecomList;
    const endpointList = copyListValues<Reference>(this.endpoint);
    dest.endpoint = endpointList.length === 0 ? undefined : endpointList;
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

    if (this.hasPeriod()) {
      setFhirComplexJson(this.getPeriod(), 'period', jsonObj);
    }

    if (this.hasOrganization()) {
      setFhirComplexJson(this.getOrganization(), 'organization', jsonObj);
    }

    if (this.hasParticipatingOrganization()) {
      setFhirComplexJson(this.getParticipatingOrganization(), 'participatingOrganization', jsonObj);
    }

    if (this.hasNetwork()) {
      setFhirComplexListJson(this.getNetwork(), 'network', jsonObj);
    }

    if (this.hasCode()) {
      setFhirComplexListJson(this.getCode(), 'code', jsonObj);
    }

    if (this.hasSpecialty()) {
      setFhirComplexListJson(this.getSpecialty(), 'specialty', jsonObj);
    }

    if (this.hasLocation()) {
      setFhirComplexListJson(this.getLocation(), 'location', jsonObj);
    }

    if (this.hasHealthcareService()) {
      setFhirComplexListJson(this.getHealthcareService(), 'healthcareService', jsonObj);
    }

    if (this.hasTelecom()) {
      setFhirComplexListJson(this.getTelecom(), 'telecom', jsonObj);
    }

    if (this.hasEndpoint()) {
      setFhirComplexListJson(this.getEndpoint(), 'endpoint', jsonObj);
    }

    return jsonObj;
  }
}

