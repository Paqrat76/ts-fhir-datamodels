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
 * Consent Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/Consent
 * StructureDefinition.name: Consent
 * StructureDefinition.description: A record of a healthcare consumer\'s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time.
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
  DateTimeType,
  DomainResource,
  EnumCodeType,
  FhirParser,
  IBackboneElement,
  IDataType,
  IDomainResource,
  InvalidTypeError,
  JSON,
  PrimitiveType,
  ReferenceTargets,
  UriType,
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
  fhirDateTime,
  fhirDateTimeSchema,
  fhirUri,
  fhirUriSchema,
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
import { Attachment, CodeableConcept, Coding, Identifier, PARSABLE_DATATYPE_MAP, Period, Reference } from '../complex-types/complex-datatypes';
import { ConsentDataMeaningEnum } from '../code-systems/ConsentDataMeaningEnum';
import { ConsentProvisionTypeEnum } from '../code-systems/ConsentProvisionTypeEnum';
import { ConsentStateCodesEnum } from '../code-systems/ConsentStateCodesEnum';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Symbol.metadata polyfill secret sauce for decorator metadata
(Symbol.metadata as any) ??= Symbol('Symbol.metadata');

/**
 * Consent Class
 *
 * @remarks
 * A record of a healthcare consumer\'s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time.
 *
 * **FHIR Specification**
 * - **Short:** A healthcare consumer\'s  choices to permit or deny recipients or roles to perform actions for specific purposes and periods of time
 * - **Definition:** A record of a healthcare consumer\'s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time.
 * - **Comment:** Broadly, there are 3 key areas of consent for patients: Consent around sharing information (aka Privacy Consent Directive - Authorization to Collect, Use, or Disclose information), consent for specific treatment, or kinds of treatment, and general advance care directives.
 * - **FHIR Version:** 4.3.0
 *
 * @category Data Models: Resource
 * @see [FHIR Consent](http://hl7.org/fhir/StructureDefinition/Consent)
 */
export class Consent extends DomainResource implements IDomainResource {
  constructor(status: EnumCodeType | CodeType | fhirCode | null = null, scope: CodeableConcept | null = null, category: CodeableConcept[] | null = null) {
    super();

    this.consentStateCodesEnum = new ConsentStateCodesEnum();

    this.status = constructorCodeValueAsEnumCodeType<ConsentStateCodesEnum>(
      status,
      ConsentStateCodesEnum,
      this.consentStateCodesEnum,
      'Consent.status',
    );

    this.scope = null;
    if (isDefined<CodeableConcept>(scope)) {
      this.setScope(scope);
    }

    this.category = null;
    if (isDefinedList<CodeableConcept>(category)) {
      this.setCategory(category);
    }
  }

  /**
   * Parse the provided `Consent` JSON to instantiate the Consent data model.
   *
   * @param sourceJson - JSON representing FHIR `Consent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to Consent
   * @returns Consent data model or undefined for `Consent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): Consent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'Consent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new Consent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'Consent');
    fhirParser.processDomainResourceJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const classMetadata: DecoratorMetadataObject | null = Consent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for Consent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

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

    fieldName = 'scope';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setScope(null);
      } else {
        instance.setScope(datatype);
      }
    } else {
      instance.setScope(null);
    }

    fieldName = 'category';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] === null) {
        instance.setCategory(null);
      } else {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype === undefined) {
            instance.setCategory(null);
          } else {
            instance.addCategory(datatype);
          }
        });
      }
    } else {
      instance.setCategory(null);
    }

    fieldName = 'patient';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setPatient(datatype);
    }

    fieldName = 'dateTime';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dtJson, dtSiblingJson);
      instance.setDateTimeElement(datatype);
    }

    fieldName = 'performer';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addPerformer(datatype);
          }
        });
      }
  }

    fieldName = 'organization';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addOrganization(datatype);
          }
        });
      }
  }

    fieldName = 'source[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const source: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setSource(source);

    fieldName = 'policy';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: ConsentPolicyComponent | undefined = ConsentPolicyComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addPolicy(component);
          }
        });
      }
    }

    fieldName = 'policyRule';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setPolicyRule(datatype);
    }

    fieldName = 'verification';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: ConsentVerificationComponent | undefined = ConsentVerificationComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addVerification(component);
          }
        });
      }
    }

    fieldName = 'provision';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: ConsentProvisionComponent | undefined = ConsentProvisionComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setProvision(component);
    }

    return instance;
  }

  /**
   * Consent.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Identifier for this record (external references)
   * - **Definition:** Unique identifier for this copy of the Consent Statement.
   * - **Comment:** This identifier identifies this copy of the consent. Where this identifier is also used elsewhere as the identifier for a consent record (e.g. a CDA consent document) then the consent details are expected to be the same.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier[] | undefined;

  /**
   * FHIR CodeSystem: ConsentStateCodes
   *
   * @see {@link ConsentStateCodesEnum }
   */
  private readonly consentStateCodesEnum: ConsentStateCodesEnum;

  /**
   * Consent.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** draft | proposed | active | rejected | inactive | entered-in-error
   * - **Definition:** Indicates the current state of this consent.
   * - **Comment:** This element is labeled as a modifier because the status contains the codes rejected and entered-in-error that mark the Consent as not currently valid.
   * - **Requirements:** The Consent Directive that is pointed to might be in various lifecycle states, e.g., a revoked Consent Directive.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** true
   * - **isModifierReason:** This element is labelled as a modifier because it is a status element that contains status entered-in-error which means that the resource should not be treated as valid
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link ConsentStateCodesEnum }
   */
  private status: EnumCodeType | null;

  /**
   * Consent.scope Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Which of the four areas this resource covers (extensible)
   * - **Definition:** A selector of the type of consent being presented: ADR, Privacy, Treatment, Research.  This list is now extensible.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** true
   * - **isModifierReason:** Allows changes to codes based on scope selection
   * - **isSummary:** true
   */
  private scope: CodeableConcept | null;

  /**
   * Consent.category Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Classification of the consent statement - for indexing/retrieval
   * - **Definition:** A classification of the type of consents found in the statement. This element supports indexing and retrieval of consent statements.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private category: CodeableConcept[] | null;

  /**
   * Consent.patient Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who the consent applies to
   * - **Definition:** The patient/healthcare consumer to whom this consent applies.
   * - **Comment:** Commonly, the patient the consent pertains to is the author, but for young and old people, it may be some other person.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private patient?: Reference | undefined;

  /**
   * Consent.dateTime Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When this Consent was created or indexed
   * - **Definition:** When this  Consent was issued / created / indexed.
   * - **Comment:** This is not the time of the original consent, but the time that this statement was made or derived.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private dateTime?: DateTimeType | undefined;

  /**
   * Consent.performer Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who is agreeing to the policy and rules
   * - **Definition:** Either the Grantor, which is the entity responsible for granting the rights listed in a Consent Directive or the Grantee, which is the entity responsible for complying with the Consent Directive, including any obligations or limitations on authorizations and enforcement of prohibitions.
   * - **Comment:** Commonly, the patient the consent pertains to is the consentor, but particularly for young and old people, it may be some other person - e.g. a legal guardian.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/RelatedPerson',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private performer?: Reference[] | undefined;

  /**
   * Consent.organization Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Custodian of the consent
   * - **Definition:** The organization that manages the consent, and the framework within which it is executed.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private organization?: Reference[] | undefined;

  /**
   * Consent.source[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('Consent.source[x]', ['Attachment','Reference',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Source from which this consent is taken
   * - **Definition:** The source on which this consent statement is based. The source might be a scanned original paper form, or a reference to a consent that links back to such a source, a reference to a document repository (e.g. XDS) that stores the original consent document.
   * - **Comment:** The source can be contained inline (Attachment), referenced directly (Consent), referenced in a consent repository (DocumentReference), or simply by an identifier (Identifier), e.g. a CDA document id.
   * - **FHIR Types:**
   *     'Attachment',
   *     'Reference',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  @ChoiceDataTypesMeta('Consent.source[x]',[
    'Attachment',
    'Reference',
  ])
  private source?: IDataType | undefined;

  /**
   * Consent.policy Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Policies covered by this consent
   * - **Definition:** The references to the policies that are included in this consent scope. Policies may be organizational, but are often defined jurisdictionally, or in law.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private policy?: ConsentPolicyComponent[] | undefined;

  /**
   * Consent.policyRule Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Regulation that this consents to
   * - **Definition:** A reference to the specific base computable regulation or policy.
   * - **Comment:** If the policyRule is absent, computable consent would need to be constructed from the elements of the Consent resource.
   * - **Requirements:** Might be a unique identifier of a policy set in XACML, or other rules engine.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private policyRule?: CodeableConcept | undefined;

  /**
   * Consent.verification Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Consent Verified by patient or family
   * - **Definition:** Whether a treatment instruction (e.g. artificial respiration yes or no) was verified with the patient, his/her family or another authorized person.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private verification?: ConsentVerificationComponent[] | undefined;

  /**
   * Consent.provision Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Constraints to the base Consent.policyRule
   * - **Definition:** An exception to the base policy of this consent. An exception can be an addition or removal of access permissions.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private provision?: ConsentProvisionComponent | undefined;

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
      const optErrMsg = `Invalid Consent.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid Consent.identifier; Provided element is not an instance of Identifier.`;
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
   * @see CodeSystem Enumeration: {@link ConsentStateCodesEnum }
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
   * @see CodeSystem Enumeration: {@link ConsentStateCodesEnum }
   */
  public setStatusEnumType(enumType: EnumCodeType | undefined | null): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid Consent.status`;
      assertEnumCodeType<ConsentStateCodesEnum>(enumType, ConsentStateCodesEnum, errMsgPrefix);
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
   * @see CodeSystem Enumeration: {@link ConsentStateCodesEnum }
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
   * @see CodeSystem Enumeration: {@link ConsentStateCodesEnum }
   */
  public setStatusElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid Consent.status; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.status = new EnumCodeType(element, this.consentStateCodesEnum);
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
   * @see CodeSystem Enumeration: {@link ConsentStateCodesEnum }
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
   * @see CodeSystem Enumeration: {@link ConsentStateCodesEnum }
   */
  public setStatus(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid Consent.status (${String(value)})`;
      this.status = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.consentStateCodesEnum);
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
   * @returns the `scope` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getScope(): CodeableConcept {
    return this.scope ?? new CodeableConcept();
  }

  /**
   * Assigns the provided CodeableConcept object value to the `scope` property.
   *
   * @param value - the `scope` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setScope(value: CodeableConcept | undefined | null): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Consent.scope; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.scope = value;
    } else {
      this.scope = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `scope` property exists and has a value; `false` otherwise
   */
  public hasScope(): boolean {
    return isDefined<CodeableConcept>(this.scope) && !this.scope.isEmpty();
  }

  /**
   * @returns the `category` property value as a CodeableConcept array
   */
  public getCategory(): CodeableConcept[] {
    return this.category ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `category` property.
   *
   * @param value - the `category` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCategory(value: CodeableConcept[] | undefined | null): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Consent.category; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.category = value;
    } else {
      this.category = null;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `category` array property.
   *
   * @param value - the `category` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addCategory(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Consent.category; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initCategory();
      this.category?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `category` property exists and has a value; `false` otherwise
   */
  public hasCategory(): boolean {
    return isDefinedList<CodeableConcept>(this.category) && this.category.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `category` property
   */
  private initCategory(): void {
    if(!this.hasCategory()) {
      this.category = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `patient` property value as a Reference object; else an empty Reference object
   */
  public getPatient(): Reference {
    return this.patient ?? new Reference();
  }

  /**
   * Assigns the provided Patient object value to the `patient` property.
   *
   * @decorator `@ReferenceTargets('Consent.patient', ['Patient',])`
   *
   * @param value - the `patient` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Consent.patient', [
    'Patient',
  ])
  public setPatient(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.patient = value;
    } else {
      this.patient = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `patient` property exists and has a value; `false` otherwise
   */
  public hasPatient(): boolean {
    return isDefined<Reference>(this.patient) && !this.patient.isEmpty();
  }

  /**
   * @returns the `dateTime` property value as a DateTimeType object if defined; else an empty DateTimeType object
   */
  public getDateTimeElement(): DateTimeType {
    return this.dateTime ?? new DateTimeType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `dateTime` property.
   *
   * @param element - the `dateTime` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDateTimeElement(element: DateTimeType | undefined): this {
    if (isDefined<DateTimeType>(element)) {
      const optErrMsg = `Invalid Consent.dateTime; Provided element is not an instance of DateTimeType.`;
      assertFhirType<DateTimeType>(element, DateTimeType, optErrMsg);
      this.dateTime = element;
    } else {
      this.dateTime = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `dateTime` property exists and has a value; `false` otherwise
   */
  public hasDateTimeElement(): boolean {
    return isDefined<DateTimeType>(this.dateTime) && !this.dateTime.isEmpty();
  }

  /**
   * @returns the `dateTime` property value as a fhirDateTime if defined; else undefined
   */
  public getDateTime(): fhirDateTime | undefined {
    return this.dateTime?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `dateTime` property.
   *
   * @param value - the `dateTime` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDateTime(value: fhirDateTime | undefined): this {
    if (isDefined<fhirDateTime>(value)) {
      const optErrMsg = `Invalid Consent.dateTime (${String(value)})`;
      this.dateTime = new DateTimeType(parseFhirPrimitiveData(value, fhirDateTimeSchema, optErrMsg));
    } else {
      this.dateTime = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `dateTime` property exists and has a value; `false` otherwise
   */
  public hasDateTime(): boolean {
    return this.hasDateTimeElement();
  }

  /**
   * @returns the `performer` property value as a Reference array
   */
  public getPerformer(): Reference[] {
    return this.performer ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `performer` property.
   *
   * @decorator `@ReferenceTargets('Consent.performer', ['Organization','Patient','Practitioner','RelatedPerson','PractitionerRole',])`
   *
   * @param value - the `performer` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Consent.performer', [
    'Organization',
  
    'Patient',
  
    'Practitioner',
  
    'RelatedPerson',
  
    'PractitionerRole',
  ])
  public setPerformer(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.performer = value;
    } else {
      this.performer = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `performer` array property.
   *
   * @decorator `@ReferenceTargets('Consent.performer', ['Organization','Patient','Practitioner','RelatedPerson','PractitionerRole',])`
   *
   * @param value - the `performer` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Consent.performer', [
    'Organization',
  
    'Patient',
  
    'Practitioner',
  
    'RelatedPerson',
  
    'PractitionerRole',
  ])
  public addPerformer(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initPerformer();
      this.performer?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `performer` property exists and has a value; `false` otherwise
   */
  public hasPerformer(): boolean {
    return isDefinedList<Reference>(this.performer) && this.performer.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `performer` property
   */
  private initPerformer(): void {
    if (!this.hasPerformer()) {
      this.performer = [] as Reference[];
    }
  }

  /**
   * @returns the `organization` property value as a Reference array
   */
  public getOrganization(): Reference[] {
    return this.organization ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `organization` property.
   *
   * @decorator `@ReferenceTargets('Consent.organization', ['Organization',])`
   *
   * @param value - the `organization` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Consent.organization', [
    'Organization',
  ])
  public setOrganization(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.organization = value;
    } else {
      this.organization = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `organization` array property.
   *
   * @decorator `@ReferenceTargets('Consent.organization', ['Organization',])`
   *
   * @param value - the `organization` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Consent.organization', [
    'Organization',
  ])
  public addOrganization(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initOrganization();
      this.organization?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `organization` property exists and has a value; `false` otherwise
   */
  public hasOrganization(): boolean {
    return isDefinedList<Reference>(this.organization) && this.organization.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `organization` property
   */
  private initOrganization(): void {
    if (!this.hasOrganization()) {
      this.organization = [] as Reference[];
    }
  }

  /**
   * @returns the `source` property value as a DataType object if defined; else undefined
   */
  public getSource(): IDataType | undefined {
    return this.source;
  }

  /**
   * Assigns the provided DataType object value to the `source` property.
   *
   * @decorator `@ChoiceDataTypes('Consent.source[x]')`
   *
   * @param value - the `source` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('Consent.source[x]')
  public setSource(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
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
    return isDefined<IDataType>(this.source) && !this.source.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `source` property value as a Attachment object if defined; else undefined
   */
  public getSourceAttachment(): Attachment | undefined {
    if (!isDefined<IDataType | undefined>(this.source)) {
      return undefined;
    }
    if (!(this.source instanceof Attachment)) {
      throw new InvalidTypeError(
        `DataType mismatch for Consent.source[x]: Expected Attachment but encountered ${this.source.fhirType()}`,
      );
    }
    return this.source;
  }

  /**
   * @returns `true` if the `source` property exists as a Attachment and has a value; `false` otherwise
   */
  public hasSourceAttachment(): boolean {
    return this.hasSource() && this.source instanceof Attachment;
  }

  /**
   * @returns the `source` property value as a Reference object if defined; else undefined
   */
  public getSourceReference(): Reference | undefined {
    if (!isDefined<IDataType | undefined>(this.source)) {
      return undefined;
    }
    if (!(this.source instanceof Reference)) {
      throw new InvalidTypeError(
        `DataType mismatch for Consent.source[x]: Expected Reference but encountered ${this.source.fhirType()}`,
      );
    }
    return this.source;
  }

  /**
   * @returns `true` if the `source` property exists as a Reference and has a value; `false` otherwise
   */
  public hasSourceReference(): boolean {
    return this.hasSource() && this.source instanceof Reference;
  }

  // End of choice datatype-specific "get"/"has" methods

  /**
   * @returns the `policy` property value as a ConsentPolicyComponent array
   */
  public getPolicy(): ConsentPolicyComponent[] {
    return this.policy ?? ([] as ConsentPolicyComponent[]);
  }

  /**
   * Assigns the provided ConsentPolicyComponent array value to the `policy` property.
   *
   * @param value - the `policy` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPolicy(value: ConsentPolicyComponent[] | undefined): this {
    if (isDefinedList<ConsentPolicyComponent>(value)) {
      const optErrMsg = `Invalid Consent.policy; Provided value array has an element that is not an instance of ConsentPolicyComponent.`;
      assertFhirTypeList<ConsentPolicyComponent>(value, ConsentPolicyComponent, optErrMsg);
      this.policy = value;
    } else {
      this.policy = undefined;
    }
    return this;
  }

  /**
   * Add the provided ConsentPolicyComponent value to the `policy` array property.
   *
   * @param value - the `policy` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addPolicy(value: ConsentPolicyComponent | undefined): this {
    if (isDefined<ConsentPolicyComponent>(value)) {
      const optErrMsg = `Invalid Consent.policy; Provided element is not an instance of ConsentPolicyComponent.`;
      assertFhirType<ConsentPolicyComponent>(value, ConsentPolicyComponent, optErrMsg);
      this.initPolicy();
      this.policy?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `policy` property exists and has a value; `false` otherwise
   */
  public hasPolicy(): boolean {
    return isDefinedList<ConsentPolicyComponent>(this.policy) && this.policy.some((item: ConsentPolicyComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `policy` property
   */
  private initPolicy(): void {
    if(!this.hasPolicy()) {
      this.policy = [] as ConsentPolicyComponent[];
    }
  }

  /**
   * @returns the `policyRule` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getPolicyRule(): CodeableConcept {
    return this.policyRule ?? new CodeableConcept();
  }

  /**
   * Assigns the provided PolicyRule object value to the `policyRule` property.
   *
   * @param value - the `policyRule` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPolicyRule(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Consent.policyRule; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.policyRule = value;
    } else {
      this.policyRule = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `policyRule` property exists and has a value; `false` otherwise
   */
  public hasPolicyRule(): boolean {
    return isDefined<CodeableConcept>(this.policyRule) && !this.policyRule.isEmpty();
  }

  /**
   * @returns the `verification` property value as a ConsentVerificationComponent array
   */
  public getVerification(): ConsentVerificationComponent[] {
    return this.verification ?? ([] as ConsentVerificationComponent[]);
  }

  /**
   * Assigns the provided ConsentVerificationComponent array value to the `verification` property.
   *
   * @param value - the `verification` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setVerification(value: ConsentVerificationComponent[] | undefined): this {
    if (isDefinedList<ConsentVerificationComponent>(value)) {
      const optErrMsg = `Invalid Consent.verification; Provided value array has an element that is not an instance of ConsentVerificationComponent.`;
      assertFhirTypeList<ConsentVerificationComponent>(value, ConsentVerificationComponent, optErrMsg);
      this.verification = value;
    } else {
      this.verification = undefined;
    }
    return this;
  }

  /**
   * Add the provided ConsentVerificationComponent value to the `verification` array property.
   *
   * @param value - the `verification` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addVerification(value: ConsentVerificationComponent | undefined): this {
    if (isDefined<ConsentVerificationComponent>(value)) {
      const optErrMsg = `Invalid Consent.verification; Provided element is not an instance of ConsentVerificationComponent.`;
      assertFhirType<ConsentVerificationComponent>(value, ConsentVerificationComponent, optErrMsg);
      this.initVerification();
      this.verification?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `verification` property exists and has a value; `false` otherwise
   */
  public hasVerification(): boolean {
    return isDefinedList<ConsentVerificationComponent>(this.verification) && this.verification.some((item: ConsentVerificationComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `verification` property
   */
  private initVerification(): void {
    if(!this.hasVerification()) {
      this.verification = [] as ConsentVerificationComponent[];
    }
  }

  /**
   * @returns the `provision` property value as a ConsentProvisionComponent object if defined; else an empty ConsentProvisionComponent object
   */
  public getProvision(): ConsentProvisionComponent {
    return this.provision ?? new ConsentProvisionComponent();
  }

  /**
   * Assigns the provided Provision object value to the `provision` property.
   *
   * @param value - the `provision` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setProvision(value: ConsentProvisionComponent | undefined): this {
    if (isDefined<ConsentProvisionComponent>(value)) {
      const optErrMsg = `Invalid Consent.provision; Provided element is not an instance of ConsentProvisionComponent.`;
      assertFhirType<ConsentProvisionComponent>(value, ConsentProvisionComponent, optErrMsg);
      this.provision = value;
    } else {
      this.provision = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `provision` property exists and has a value; `false` otherwise
   */
  public hasProvision(): boolean {
    return isDefined<ConsentProvisionComponent>(this.provision) && !this.provision.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Consent';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identifier,
      this.status,
      this.scope,
      this.category,
      this.patient,
      this.dateTime,
      this.performer,
      this.organization,
      this.source,
      this.policy,
      this.policyRule,
      this.verification,
      this.provision,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.status, this.scope, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): Consent {
    const dest = new Consent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: Consent): void {
    super.copyValues(dest);
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    dest.status = this.status ? this.status.copy() : null;
    dest.scope = this.scope ? this.scope.copy() : null;
    const categoryList = copyListValues<CodeableConcept>(this.category);
    dest.category = categoryList.length === 0 ? null : categoryList;
    dest.patient = this.patient?.copy();
    dest.dateTime = this.dateTime?.copy();
    const performerList = copyListValues<Reference>(this.performer);
    dest.performer = performerList.length === 0 ? undefined : performerList;
    const organizationList = copyListValues<Reference>(this.organization);
    dest.organization = organizationList.length === 0 ? undefined : organizationList;
    dest.source = this.source?.copy() as IDataType;
    const policyList = copyListValues<ConsentPolicyComponent>(this.policy);
    dest.policy = policyList.length === 0 ? undefined : policyList;
    dest.policyRule = this.policyRule?.copy();
    const verificationList = copyListValues<ConsentVerificationComponent>(this.verification);
    dest.verification = verificationList.length === 0 ? undefined : verificationList;
    dest.provision = this.provision?.copy();
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
    }

    if (this.hasScope()) {
      setFhirComplexJson(this.getScope(), 'scope', jsonObj);
    }

    if (this.hasCategory()) {
      setFhirComplexListJson(this.getCategory(), 'category', jsonObj);
    }

    if (this.hasPatient()) {
      setFhirComplexJson(this.getPatient(), 'patient', jsonObj);
    }

    if (this.hasDateTimeElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getDateTimeElement(), 'dateTime', jsonObj);
    }

    if (this.hasPerformer()) {
      setFhirComplexListJson(this.getPerformer(), 'performer', jsonObj);
    }

    if (this.hasOrganization()) {
      setFhirComplexListJson(this.getOrganization(), 'organization', jsonObj);
    }

    if (this.hasSource()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getSource()!, 'source', jsonObj);
    }

    if (this.hasPolicy()) {
      setFhirBackboneElementListJson(this.getPolicy(), 'policy', jsonObj);
    }

    if (this.hasPolicyRule()) {
      setFhirComplexJson(this.getPolicyRule(), 'policyRule', jsonObj);
    }

    if (this.hasVerification()) {
      setFhirBackboneElementListJson(this.getVerification(), 'verification', jsonObj);
    }

    if (this.hasProvision()) {
      setFhirBackboneElementJson(this.getProvision(), 'provision', jsonObj);
    }

    return jsonObj;
  }
}

/**
 * ConsentPolicyComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Policies covered by this consent
 * - **Definition:** The references to the policies that are included in this consent scope. Policies may be organizational, but are often defined jurisdictionally, or in law.
 *
 * @category Data Models: Resource
 * @see [FHIR Consent](http://hl7.org/fhir/StructureDefinition/Consent)
 */
export class ConsentPolicyComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `ConsentPolicyComponent` JSON to instantiate the ConsentPolicyComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ConsentPolicyComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ConsentPolicyComponent
   * @returns ConsentPolicyComponent data model or undefined for `ConsentPolicyComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ConsentPolicyComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ConsentPolicyComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ConsentPolicyComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'authority';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: UriType | undefined = fhirParser.parseUriType(dtJson, dtSiblingJson);
      instance.setAuthorityElement(datatype);
    }

    fieldName = 'uri';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: UriType | undefined = fhirParser.parseUriType(dtJson, dtSiblingJson);
      instance.setUriElement(datatype);
    }

    return instance;
  }

  /**
   * Consent.policy.authority Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Enforcement source for policy
   * - **Definition:** Entity or Organization having regulatory jurisdiction or accountability for  enforcing policies pertaining to Consent Directives.
   * - **FHIR Type:** `uri`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private authority?: UriType | undefined;

  /**
   * Consent.policy.uri Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Specific policy covered by this consent
   * - **Definition:** The references to the policies that are included in this consent scope. Policies may be organizational, but are often defined jurisdictionally, or in law.
   * - **Comment:** This element is for discoverability / documentation and does not modify or qualify the policy rules.
   * - **FHIR Type:** `uri`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private uri?: UriType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `authority` property value as a UriType object if defined; else an empty UriType object
   */
  public getAuthorityElement(): UriType {
    return this.authority ?? new UriType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `authority` property.
   *
   * @param element - the `authority` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAuthorityElement(element: UriType | undefined): this {
    if (isDefined<UriType>(element)) {
      const optErrMsg = `Invalid Consent.policy.authority; Provided element is not an instance of UriType.`;
      assertFhirType<UriType>(element, UriType, optErrMsg);
      this.authority = element;
    } else {
      this.authority = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `authority` property exists and has a value; `false` otherwise
   */
  public hasAuthorityElement(): boolean {
    return isDefined<UriType>(this.authority) && !this.authority.isEmpty();
  }

  /**
   * @returns the `authority` property value as a fhirUri if defined; else undefined
   */
  public getAuthority(): fhirUri | undefined {
    return this.authority?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `authority` property.
   *
   * @param value - the `authority` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAuthority(value: fhirUri | undefined): this {
    if (isDefined<fhirUri>(value)) {
      const optErrMsg = `Invalid Consent.policy.authority (${String(value)})`;
      this.authority = new UriType(parseFhirPrimitiveData(value, fhirUriSchema, optErrMsg));
    } else {
      this.authority = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `authority` property exists and has a value; `false` otherwise
   */
  public hasAuthority(): boolean {
    return this.hasAuthorityElement();
  }

  /**
   * @returns the `uri` property value as a UriType object if defined; else an empty UriType object
   */
  public getUriElement(): UriType {
    return this.uri ?? new UriType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `uri` property.
   *
   * @param element - the `uri` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setUriElement(element: UriType | undefined): this {
    if (isDefined<UriType>(element)) {
      const optErrMsg = `Invalid Consent.policy.uri; Provided element is not an instance of UriType.`;
      assertFhirType<UriType>(element, UriType, optErrMsg);
      this.uri = element;
    } else {
      this.uri = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `uri` property exists and has a value; `false` otherwise
   */
  public hasUriElement(): boolean {
    return isDefined<UriType>(this.uri) && !this.uri.isEmpty();
  }

  /**
   * @returns the `uri` property value as a fhirUri if defined; else undefined
   */
  public getUri(): fhirUri | undefined {
    return this.uri?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `uri` property.
   *
   * @param value - the `uri` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setUri(value: fhirUri | undefined): this {
    if (isDefined<fhirUri>(value)) {
      const optErrMsg = `Invalid Consent.policy.uri (${String(value)})`;
      this.uri = new UriType(parseFhirPrimitiveData(value, fhirUriSchema, optErrMsg));
    } else {
      this.uri = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `uri` property exists and has a value; `false` otherwise
   */
  public hasUri(): boolean {
    return this.hasUriElement();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Consent.policy';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.authority,
      this.uri,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ConsentPolicyComponent {
    const dest = new ConsentPolicyComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ConsentPolicyComponent): void {
    super.copyValues(dest);
    dest.authority = this.authority?.copy();
    dest.uri = this.uri?.copy();
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

    if (this.hasAuthorityElement()) {
      setFhirPrimitiveJson<fhirUri>(this.getAuthorityElement(), 'authority', jsonObj);
    }

    if (this.hasUriElement()) {
      setFhirPrimitiveJson<fhirUri>(this.getUriElement(), 'uri', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * ConsentVerificationComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Consent Verified by patient or family
 * - **Definition:** Whether a treatment instruction (e.g. artificial respiration yes or no) was verified with the patient, his/her family or another authorized person.
 *
 * @category Data Models: Resource
 * @see [FHIR Consent](http://hl7.org/fhir/StructureDefinition/Consent)
 */
export class ConsentVerificationComponent extends BackboneElement implements IBackboneElement {
  constructor(verified: BooleanType | fhirBoolean | null = null) {
    super();

    this.verified = null;
    if (isDefined<BooleanType | fhirBoolean>(verified)) {
      if (verified instanceof PrimitiveType) {
        this.setVerifiedElement(verified);
      } else {
        this.setVerified(verified);
      }
    }
  }

  /**
   * Parse the provided `ConsentVerificationComponent` JSON to instantiate the ConsentVerificationComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ConsentVerificationComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ConsentVerificationComponent
   * @returns ConsentVerificationComponent data model or undefined for `ConsentVerificationComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ConsentVerificationComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ConsentVerificationComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ConsentVerificationComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'verified';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setVerified(null);
      } else {
        instance.setVerifiedElement(datatype);
      }
    } else {
      instance.setVerified(null);
    }

    fieldName = 'verifiedWith';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setVerifiedWith(datatype);
    }

    fieldName = 'verificationDate';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dtJson, dtSiblingJson);
      instance.setVerificationDateElement(datatype);
    }

    return instance;
  }

  /**
   * Consent.verification.verified Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Has been verified
   * - **Definition:** Has the instruction been verified.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private verified: BooleanType | null;

  /**
   * Consent.verification.verifiedWith Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Person who verified
   * - **Definition:** Who verified the instruction (Patient, Relative or other Authorized Person).
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/RelatedPerson',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private verifiedWith?: Reference | undefined;

  /**
   * Consent.verification.verificationDate Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When consent verified
   * - **Definition:** Date verification was collected.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private verificationDate?: DateTimeType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `verified` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getVerifiedElement(): BooleanType {
    return this.verified ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `verified` property.
   *
   * @param element - the `verified` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setVerifiedElement(element: BooleanType | undefined | null): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid Consent.verification.verified; Provided value is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.verified = element;
    } else {
      this.verified = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `verified` property exists and has a value; `false` otherwise
   */
  public hasVerifiedElement(): boolean {
    return isDefined<BooleanType>(this.verified) && !this.verified.isEmpty();
  }

  /**
   * @returns the `verified` property value as a fhirBoolean if defined; else null
   */
  public getVerified(): fhirBoolean | null {
    if (this.verified?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.verified.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `verified` property.
   *
   * @param value - the `verified` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setVerified(value: fhirBoolean | undefined | null): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid Consent.verification.verified (${String(value)})`;
      this.verified = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.verified = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `verified` property exists and has a value; `false` otherwise
   */
  public hasVerified(): boolean {
    return this.hasVerifiedElement();
  }

  /**
   * @returns the `verifiedWith` property value as a Reference object; else an empty Reference object
   */
  public getVerifiedWith(): Reference {
    return this.verifiedWith ?? new Reference();
  }

  /**
   * Assigns the provided VerifiedWith object value to the `verifiedWith` property.
   *
   * @decorator `@ReferenceTargets('Consent.verification.verifiedWith', ['Patient','RelatedPerson',])`
   *
   * @param value - the `verifiedWith` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Consent.verification.verifiedWith', [
    'Patient',
  
    'RelatedPerson',
  ])
  public setVerifiedWith(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.verifiedWith = value;
    } else {
      this.verifiedWith = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `verifiedWith` property exists and has a value; `false` otherwise
   */
  public hasVerifiedWith(): boolean {
    return isDefined<Reference>(this.verifiedWith) && !this.verifiedWith.isEmpty();
  }

  /**
   * @returns the `verificationDate` property value as a DateTimeType object if defined; else an empty DateTimeType object
   */
  public getVerificationDateElement(): DateTimeType {
    return this.verificationDate ?? new DateTimeType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `verificationDate` property.
   *
   * @param element - the `verificationDate` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setVerificationDateElement(element: DateTimeType | undefined): this {
    if (isDefined<DateTimeType>(element)) {
      const optErrMsg = `Invalid Consent.verification.verificationDate; Provided element is not an instance of DateTimeType.`;
      assertFhirType<DateTimeType>(element, DateTimeType, optErrMsg);
      this.verificationDate = element;
    } else {
      this.verificationDate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `verificationDate` property exists and has a value; `false` otherwise
   */
  public hasVerificationDateElement(): boolean {
    return isDefined<DateTimeType>(this.verificationDate) && !this.verificationDate.isEmpty();
  }

  /**
   * @returns the `verificationDate` property value as a fhirDateTime if defined; else undefined
   */
  public getVerificationDate(): fhirDateTime | undefined {
    return this.verificationDate?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `verificationDate` property.
   *
   * @param value - the `verificationDate` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setVerificationDate(value: fhirDateTime | undefined): this {
    if (isDefined<fhirDateTime>(value)) {
      const optErrMsg = `Invalid Consent.verification.verificationDate (${String(value)})`;
      this.verificationDate = new DateTimeType(parseFhirPrimitiveData(value, fhirDateTimeSchema, optErrMsg));
    } else {
      this.verificationDate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `verificationDate` property exists and has a value; `false` otherwise
   */
  public hasVerificationDate(): boolean {
    return this.hasVerificationDateElement();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Consent.verification';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.verified,
      this.verifiedWith,
      this.verificationDate,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.verified, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ConsentVerificationComponent {
    const dest = new ConsentVerificationComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ConsentVerificationComponent): void {
    super.copyValues(dest);
    dest.verified = this.verified ? this.verified.copy() : null;
    dest.verifiedWith = this.verifiedWith?.copy();
    dest.verificationDate = this.verificationDate?.copy();
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

    if (this.hasVerifiedElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getVerifiedElement(), 'verified', jsonObj);
    }

    if (this.hasVerifiedWith()) {
      setFhirComplexJson(this.getVerifiedWith(), 'verifiedWith', jsonObj);
    }

    if (this.hasVerificationDateElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getVerificationDateElement(), 'verificationDate', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * ConsentProvisionComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Constraints to the base Consent.policyRule
 * - **Definition:** An exception to the base policy of this consent. An exception can be an addition or removal of access permissions.
 *
 * @category Data Models: Resource
 * @see [FHIR Consent](http://hl7.org/fhir/StructureDefinition/Consent)
 */
export class ConsentProvisionComponent extends BackboneElement implements IBackboneElement {
  constructor() {
    super();

    this.consentProvisionTypeEnum = new ConsentProvisionTypeEnum();
  }

  /**
   * Parse the provided `ConsentProvisionComponent` JSON to instantiate the ConsentProvisionComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ConsentProvisionComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ConsentProvisionComponent
   * @returns ConsentProvisionComponent data model or undefined for `ConsentProvisionComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ConsentProvisionComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ConsentProvisionComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ConsentProvisionComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setTypeElement(datatype);
    }

    fieldName = 'period';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Period | undefined = Period.parse(classJsonObj[fieldName]!, sourceField);
      instance.setPeriod(datatype);
    }

    fieldName = 'actor';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: ConsentProvisionActorComponent | undefined = ConsentProvisionActorComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addActor(component);
          }
        });
      }
    }

    fieldName = 'action';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addAction(datatype);
          }
        });
      }
    }

    fieldName = 'securityLabel';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Coding | undefined = Coding.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addSecurityLabel(datatype);
          }
        });
      }
    }

    fieldName = 'purpose';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Coding | undefined = Coding.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addPurpose(datatype);
          }
        });
      }
    }

    fieldName = 'class';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Coding | undefined = Coding.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addClass(datatype);
          }
        });
      }
    }

    fieldName = 'code';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addCode(datatype);
          }
        });
      }
    }

    fieldName = 'dataPeriod';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Period | undefined = Period.parse(classJsonObj[fieldName]!, sourceField);
      instance.setDataPeriod(datatype);
    }

    fieldName = 'data';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: ConsentProvisionDataComponent | undefined = ConsentProvisionDataComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addData(component);
          }
        });
      }
    }

    fieldName = 'provision';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: ConsentProvisionComponent | undefined = ConsentProvisionComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addProvision(component);
          }
        });
      }
    }

    return instance;
  }

  /**
   * FHIR CodeSystem: ConsentProvisionType
   *
   * @see {@link ConsentProvisionTypeEnum }
   */
  private readonly consentProvisionTypeEnum: ConsentProvisionTypeEnum;

  /**
   * Consent.provision.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** deny | permit
   * - **Definition:** Action  to take - permit or deny - when the rule conditions are met.  Not permitted in root rule, required in all nested rules.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link ConsentProvisionTypeEnum }
   */
  private type_?: EnumCodeType | undefined;

  /**
   * Consent.provision.period Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Timeframe for this rule
   * - **Definition:** The timeframe in this rule is valid.
   * - **FHIR Type:** `Period`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private period?: Period | undefined;

  /**
   * Consent.provision.actor Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who|what controlled by this rule (or group, by role)
   * - **Definition:** Who or what is controlled by this rule. Use group to identify a set of actors by some property they share (e.g. \'admitting officers\').
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private actor?: ConsentProvisionActorComponent[] | undefined;

  /**
   * Consent.provision.action Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Actions controlled by this rule
   * - **Definition:** Actions controlled by this Rule.
   * - **Comment:** Note that this is the direct action (not the grounds for the action covered in the purpose element). At present, the only action in the understood and tested scope of this resource is \'read\'.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private action?: CodeableConcept[] | undefined;

  /**
   * Consent.provision.securityLabel Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Security Labels that define affected resources
   * - **Definition:** A security label, comprised of 0..* security label fields (Privacy tags), which define which resources are controlled by this exception.
   * - **Comment:** If the consent specifies a security label of "R" then it applies to all resources that are labeled "R" or lower. E.g. for Confidentiality, it\'s a high water mark. For other kinds of security labels, subsumption logic applies. When the purpose of use tag is on the data, access request purpose of use shall not conflict.
   * - **FHIR Type:** `Coding`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private securityLabel?: Coding[] | undefined;

  /**
   * Consent.provision.purpose Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Context of activities covered by this rule
   * - **Definition:** The context of the activities a user is taking - why the user is accessing the data - that are controlled by this rule.
   * - **Comment:** When the purpose of use tag is on the data, access request purpose of use shall not conflict.
   * - **FHIR Type:** `Coding`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private purpose?: Coding[] | undefined;

  /**
   * Consent.provision.class Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** e.g. Resource Type, Profile, CDA, etc.
   * - **Definition:** The class of information covered by this rule. The type can be a FHIR resource type, a profile on a type, or a CDA document, or some other type that indicates what sort of information the consent relates to.
   * - **Comment:** Multiple types are or\'ed together. The intention of the contentType element is that the codes refer to profiles or document types defined in a standard or an implementation guide somewhere.
   * - **FHIR Type:** `Coding`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private class_?: Coding[] | undefined;

  /**
   * Consent.provision.code Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** e.g. LOINC or SNOMED CT code, etc. in the content
   * - **Definition:** If this code is found in an instance, then the rule applies.
   * - **Comment:** Typical use of this is a Document code with class = CDA.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private code?: CodeableConcept[] | undefined;

  /**
   * Consent.provision.dataPeriod Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Timeframe for data controlled by this rule
   * - **Definition:** Clinical or Operational Relevant period of time that bounds the data controlled by this rule.
   * - **Comment:** This has a different sense to the Consent.period - that is when the consent agreement holds. This is the time period of the data that is controlled by the agreement.
   * - **FHIR Type:** `Period`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private dataPeriod?: Period | undefined;

  /**
   * Consent.provision.data Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Data controlled by this rule
   * - **Definition:** The resources controlled by this rule if specific resources are referenced.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private data?: ConsentProvisionDataComponent[] | undefined;

  /**
   * Consent.provision.provision Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Nested Exception Rules
   * - **Definition:** Rules which provide exceptions to the base rule or subrules.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private provision?: ConsentProvisionComponent[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `type_` property value as a EnumCodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link ConsentProvisionTypeEnum }
   */
  public getTypeEnumType(): EnumCodeType | undefined {
    return this.type_;
  }

  /**
   * Assigns the provided EnumCodeType value to the `type_` property.
   *
   * @param enumType - the `type_` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code values
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link ConsentProvisionTypeEnum }
   */
  public setTypeEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = 'Invalid Consent.provision.type';
      assertEnumCodeType<ConsentProvisionTypeEnum>(enumType, ConsentProvisionTypeEnum, errMsgPrefix);
      this.type_ = enumType;
    } else {
      this.type_ = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `type_` property exists and has a value; `false` otherwise
   */
  public hasTypeEnumType(): boolean {
    return isDefined<EnumCodeType>(this.type_) && !this.type_.isEmpty() && this.type_.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `type_` property value as a CodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link ConsentProvisionTypeEnum }
   */
  public getTypeElement(): CodeType | undefined {
    if (this.type_ === undefined) {
      return undefined;
    }
    return this.type_ as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `type_` property.
   *
   * @param element - the `type_` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link ConsentProvisionTypeEnum }
   */
  public setTypeElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid Consent.provision.type; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.type_ = new EnumCodeType(element, this.consentProvisionTypeEnum);
    } else {
      this.type_ = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `type_` property exists and has a value; `false` otherwise
   */
  public hasTypeElement(): boolean {
    return this.hasTypeEnumType();
  }

  /**
   * @returns the `type_` property value as a fhirCode if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link ConsentProvisionTypeEnum }
   */
  public getType(): fhirCode | undefined {
    if (this.type_ === undefined) {
      return undefined;
    }
    return this.type_.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `type_` property.
   *
   * @param value - the `type_` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link ConsentProvisionTypeEnum }
   */
  public setType(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid Consent.provision.type; Provided value is not an instance of fhirCode.`;
      this.type_ = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.consentProvisionTypeEnum);
    } else {
      this.type_ = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `type_` property exists and has a value; `false` otherwise
   */
  public hasType(): boolean {
    return this.hasTypeEnumType();
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
      const optErrMsg = `Invalid Consent.provision.period; Provided element is not an instance of Period.`;
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
   * @returns the `actor` property value as a ConsentProvisionActorComponent array
   */
  public getActor(): ConsentProvisionActorComponent[] {
    return this.actor ?? ([] as ConsentProvisionActorComponent[]);
  }

  /**
   * Assigns the provided ConsentProvisionActorComponent array value to the `actor` property.
   *
   * @param value - the `actor` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setActor(value: ConsentProvisionActorComponent[] | undefined): this {
    if (isDefinedList<ConsentProvisionActorComponent>(value)) {
      const optErrMsg = `Invalid Consent.provision.actor; Provided value array has an element that is not an instance of ConsentProvisionActorComponent.`;
      assertFhirTypeList<ConsentProvisionActorComponent>(value, ConsentProvisionActorComponent, optErrMsg);
      this.actor = value;
    } else {
      this.actor = undefined;
    }
    return this;
  }

  /**
   * Add the provided ConsentProvisionActorComponent value to the `actor` array property.
   *
   * @param value - the `actor` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addActor(value: ConsentProvisionActorComponent | undefined): this {
    if (isDefined<ConsentProvisionActorComponent>(value)) {
      const optErrMsg = `Invalid Consent.provision.actor; Provided element is not an instance of ConsentProvisionActorComponent.`;
      assertFhirType<ConsentProvisionActorComponent>(value, ConsentProvisionActorComponent, optErrMsg);
      this.initActor();
      this.actor?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `actor` property exists and has a value; `false` otherwise
   */
  public hasActor(): boolean {
    return isDefinedList<ConsentProvisionActorComponent>(this.actor) && this.actor.some((item: ConsentProvisionActorComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `actor` property
   */
  private initActor(): void {
    if(!this.hasActor()) {
      this.actor = [] as ConsentProvisionActorComponent[];
    }
  }

  /**
   * @returns the `action` property value as a CodeableConcept array
   */
  public getAction(): CodeableConcept[] {
    return this.action ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `action` property.
   *
   * @param value - the `action` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAction(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Consent.provision.action; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.action = value;
    } else {
      this.action = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `action` array property.
   *
   * @param value - the `action` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addAction(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Consent.provision.action; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initAction();
      this.action?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `action` property exists and has a value; `false` otherwise
   */
  public hasAction(): boolean {
    return isDefinedList<CodeableConcept>(this.action) && this.action.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `action` property
   */
  private initAction(): void {
    if(!this.hasAction()) {
      this.action = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `securityLabel` property value as a Coding array
   */
  public getSecurityLabel(): Coding[] {
    return this.securityLabel ?? ([] as Coding[]);
  }

  /**
   * Assigns the provided Coding array value to the `securityLabel` property.
   *
   * @param value - the `securityLabel` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSecurityLabel(value: Coding[] | undefined): this {
    if (isDefinedList<Coding>(value)) {
      const optErrMsg = `Invalid Consent.provision.securityLabel; Provided value array has an element that is not an instance of Coding.`;
      assertFhirTypeList<Coding>(value, Coding, optErrMsg);
      this.securityLabel = value;
    } else {
      this.securityLabel = undefined;
    }
    return this;
  }

  /**
   * Add the provided Coding value to the `securityLabel` array property.
   *
   * @param value - the `securityLabel` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addSecurityLabel(value: Coding | undefined): this {
    if (isDefined<Coding>(value)) {
      const optErrMsg = `Invalid Consent.provision.securityLabel; Provided element is not an instance of Coding.`;
      assertFhirType<Coding>(value, Coding, optErrMsg);
      this.initSecurityLabel();
      this.securityLabel?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `securityLabel` property exists and has a value; `false` otherwise
   */
  public hasSecurityLabel(): boolean {
    return isDefinedList<Coding>(this.securityLabel) && this.securityLabel.some((item: Coding) => !item.isEmpty());
  }

  /**
   * Initialize the `securityLabel` property
   */
  private initSecurityLabel(): void {
    if(!this.hasSecurityLabel()) {
      this.securityLabel = [] as Coding[];
    }
  }

  /**
   * @returns the `purpose` property value as a Coding array
   */
  public getPurpose(): Coding[] {
    return this.purpose ?? ([] as Coding[]);
  }

  /**
   * Assigns the provided Coding array value to the `purpose` property.
   *
   * @param value - the `purpose` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPurpose(value: Coding[] | undefined): this {
    if (isDefinedList<Coding>(value)) {
      const optErrMsg = `Invalid Consent.provision.purpose; Provided value array has an element that is not an instance of Coding.`;
      assertFhirTypeList<Coding>(value, Coding, optErrMsg);
      this.purpose = value;
    } else {
      this.purpose = undefined;
    }
    return this;
  }

  /**
   * Add the provided Coding value to the `purpose` array property.
   *
   * @param value - the `purpose` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addPurpose(value: Coding | undefined): this {
    if (isDefined<Coding>(value)) {
      const optErrMsg = `Invalid Consent.provision.purpose; Provided element is not an instance of Coding.`;
      assertFhirType<Coding>(value, Coding, optErrMsg);
      this.initPurpose();
      this.purpose?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `purpose` property exists and has a value; `false` otherwise
   */
  public hasPurpose(): boolean {
    return isDefinedList<Coding>(this.purpose) && this.purpose.some((item: Coding) => !item.isEmpty());
  }

  /**
   * Initialize the `purpose` property
   */
  private initPurpose(): void {
    if(!this.hasPurpose()) {
      this.purpose = [] as Coding[];
    }
  }

  /**
   * @returns the `class_` property value as a Coding array
   */
  public getClass(): Coding[] {
    return this.class_ ?? ([] as Coding[]);
  }

  /**
   * Assigns the provided Coding array value to the `class_` property.
   *
   * @param value - the `class_` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setClass(value: Coding[] | undefined): this {
    if (isDefinedList<Coding>(value)) {
      const optErrMsg = `Invalid Consent.provision.class; Provided value array has an element that is not an instance of Coding.`;
      assertFhirTypeList<Coding>(value, Coding, optErrMsg);
      this.class_ = value;
    } else {
      this.class_ = undefined;
    }
    return this;
  }

  /**
   * Add the provided Coding value to the `class_` array property.
   *
   * @param value - the `class_` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addClass(value: Coding | undefined): this {
    if (isDefined<Coding>(value)) {
      const optErrMsg = `Invalid Consent.provision.class; Provided element is not an instance of Coding.`;
      assertFhirType<Coding>(value, Coding, optErrMsg);
      this.initClass();
      this.class_?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `class_` property exists and has a value; `false` otherwise
   */
  public hasClass(): boolean {
    return isDefinedList<Coding>(this.class_) && this.class_.some((item: Coding) => !item.isEmpty());
  }

  /**
   * Initialize the `class_` property
   */
  private initClass(): void {
    if(!this.hasClass()) {
      this.class_ = [] as Coding[];
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
      const optErrMsg = `Invalid Consent.provision.code; Provided value array has an element that is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid Consent.provision.code; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `dataPeriod` property value as a Period object if defined; else an empty Period object
   */
  public getDataPeriod(): Period {
    return this.dataPeriod ?? new Period();
  }

  /**
   * Assigns the provided DataPeriod object value to the `dataPeriod` property.
   *
   * @param value - the `dataPeriod` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDataPeriod(value: Period | undefined): this {
    if (isDefined<Period>(value)) {
      const optErrMsg = `Invalid Consent.provision.dataPeriod; Provided element is not an instance of Period.`;
      assertFhirType<Period>(value, Period, optErrMsg);
      this.dataPeriod = value;
    } else {
      this.dataPeriod = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `dataPeriod` property exists and has a value; `false` otherwise
   */
  public hasDataPeriod(): boolean {
    return isDefined<Period>(this.dataPeriod) && !this.dataPeriod.isEmpty();
  }

  /**
   * @returns the `data` property value as a ConsentProvisionDataComponent array
   */
  public getData(): ConsentProvisionDataComponent[] {
    return this.data ?? ([] as ConsentProvisionDataComponent[]);
  }

  /**
   * Assigns the provided ConsentProvisionDataComponent array value to the `data` property.
   *
   * @param value - the `data` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setData(value: ConsentProvisionDataComponent[] | undefined): this {
    if (isDefinedList<ConsentProvisionDataComponent>(value)) {
      const optErrMsg = `Invalid Consent.provision.data; Provided value array has an element that is not an instance of ConsentProvisionDataComponent.`;
      assertFhirTypeList<ConsentProvisionDataComponent>(value, ConsentProvisionDataComponent, optErrMsg);
      this.data = value;
    } else {
      this.data = undefined;
    }
    return this;
  }

  /**
   * Add the provided ConsentProvisionDataComponent value to the `data` array property.
   *
   * @param value - the `data` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addData(value: ConsentProvisionDataComponent | undefined): this {
    if (isDefined<ConsentProvisionDataComponent>(value)) {
      const optErrMsg = `Invalid Consent.provision.data; Provided element is not an instance of ConsentProvisionDataComponent.`;
      assertFhirType<ConsentProvisionDataComponent>(value, ConsentProvisionDataComponent, optErrMsg);
      this.initData();
      this.data?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `data` property exists and has a value; `false` otherwise
   */
  public hasData(): boolean {
    return isDefinedList<ConsentProvisionDataComponent>(this.data) && this.data.some((item: ConsentProvisionDataComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `data` property
   */
  private initData(): void {
    if(!this.hasData()) {
      this.data = [] as ConsentProvisionDataComponent[];
    }
  }

  /**
   * @returns the `provision` property value as a ConsentProvisionComponent array
   */
  public getProvision(): ConsentProvisionComponent[] {
    return this.provision ?? ([] as ConsentProvisionComponent[]);
  }

  /**
   * Assigns the provided ConsentProvisionComponent array value to the `provision` property.
   *
   * @param value - the `provision` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setProvision(value: ConsentProvisionComponent[] | undefined): this {
    if (isDefinedList<ConsentProvisionComponent>(value)) {
      const optErrMsg = `Invalid Consent.provision.provision; Provided value array has an element that is not an instance of ConsentProvisionComponent.`;
      assertFhirTypeList<ConsentProvisionComponent>(value, ConsentProvisionComponent, optErrMsg);
      this.provision = value;
    } else {
      this.provision = undefined;
    }
    return this;
  }

  /**
   * Add the provided ConsentProvisionComponent value to the `provision` array property.
   *
   * @param value - the `provision` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addProvision(value: ConsentProvisionComponent | undefined): this {
    if (isDefined<ConsentProvisionComponent>(value)) {
      const optErrMsg = `Invalid Consent.provision.provision; Provided element is not an instance of ConsentProvisionComponent.`;
      assertFhirType<ConsentProvisionComponent>(value, ConsentProvisionComponent, optErrMsg);
      this.initProvision();
      this.provision?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `provision` property exists and has a value; `false` otherwise
   */
  public hasProvision(): boolean {
    return isDefinedList<ConsentProvisionComponent>(this.provision) && this.provision.some((item: ConsentProvisionComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `provision` property
   */
  private initProvision(): void {
    if(!this.hasProvision()) {
      this.provision = [] as ConsentProvisionComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Consent.provision';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.type_,
      this.period,
      this.actor,
      this.action,
      this.securityLabel,
      this.purpose,
      this.class_,
      this.code,
      this.dataPeriod,
      this.data,
      this.provision,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ConsentProvisionComponent {
    const dest = new ConsentProvisionComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ConsentProvisionComponent): void {
    super.copyValues(dest);
    dest.type_ = this.type_?.copy();
    dest.period = this.period?.copy();
    const actorList = copyListValues<ConsentProvisionActorComponent>(this.actor);
    dest.actor = actorList.length === 0 ? undefined : actorList;
    const actionList = copyListValues<CodeableConcept>(this.action);
    dest.action = actionList.length === 0 ? undefined : actionList;
    const securityLabelList = copyListValues<Coding>(this.securityLabel);
    dest.securityLabel = securityLabelList.length === 0 ? undefined : securityLabelList;
    const purposeList = copyListValues<Coding>(this.purpose);
    dest.purpose = purposeList.length === 0 ? undefined : purposeList;
    const classList = copyListValues<Coding>(this.class_);
    dest.class_ = classList.length === 0 ? undefined : classList;
    const codeList = copyListValues<CodeableConcept>(this.code);
    dest.code = codeList.length === 0 ? undefined : codeList;
    dest.dataPeriod = this.dataPeriod?.copy();
    const dataList = copyListValues<ConsentProvisionDataComponent>(this.data);
    dest.data = dataList.length === 0 ? undefined : dataList;
    const provisionList = copyListValues<ConsentProvisionComponent>(this.provision);
    dest.provision = provisionList.length === 0 ? undefined : provisionList;
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

    if (this.hasTypeElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getTypeElement()!, 'type', jsonObj);
    }

    if (this.hasPeriod()) {
      setFhirComplexJson(this.getPeriod(), 'period', jsonObj);
    }

    if (this.hasActor()) {
      setFhirBackboneElementListJson(this.getActor(), 'actor', jsonObj);
    }

    if (this.hasAction()) {
      setFhirComplexListJson(this.getAction(), 'action', jsonObj);
    }

    if (this.hasSecurityLabel()) {
      setFhirComplexListJson(this.getSecurityLabel(), 'securityLabel', jsonObj);
    }

    if (this.hasPurpose()) {
      setFhirComplexListJson(this.getPurpose(), 'purpose', jsonObj);
    }

    if (this.hasClass()) {
      setFhirComplexListJson(this.getClass(), 'class', jsonObj);
    }

    if (this.hasCode()) {
      setFhirComplexListJson(this.getCode(), 'code', jsonObj);
    }

    if (this.hasDataPeriod()) {
      setFhirComplexJson(this.getDataPeriod(), 'dataPeriod', jsonObj);
    }

    if (this.hasData()) {
      setFhirBackboneElementListJson(this.getData(), 'data', jsonObj);
    }

    if (this.hasProvision()) {
      setFhirBackboneElementListJson(this.getProvision(), 'provision', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * ConsentProvisionActorComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Who|what controlled by this rule (or group, by role)
 * - **Definition:** Who or what is controlled by this rule. Use group to identify a set of actors by some property they share (e.g. \'admitting officers\').
 *
 * @category Data Models: Resource
 * @see [FHIR Consent](http://hl7.org/fhir/StructureDefinition/Consent)
 */
export class ConsentProvisionActorComponent extends BackboneElement implements IBackboneElement {
  constructor(role: CodeableConcept | null = null, reference: Reference | null = null) {
    super();

    this.role = null;
    if (isDefined<CodeableConcept>(role)) {
      this.setRole(role);
    }

    this.reference = null;
    if (isDefined<Reference>(reference)) {
      this.setReference(reference);
    }
  }

  /**
   * Parse the provided `ConsentProvisionActorComponent` JSON to instantiate the ConsentProvisionActorComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ConsentProvisionActorComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ConsentProvisionActorComponent
   * @returns ConsentProvisionActorComponent data model or undefined for `ConsentProvisionActorComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ConsentProvisionActorComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ConsentProvisionActorComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ConsentProvisionActorComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

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

    fieldName = 'reference';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setReference(null);
      } else {
        instance.setReference(datatype);
      }
    } else {
      instance.setReference(null);
    }

    return instance;
  }

  /**
   * Consent.provision.actor.role Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** How the actor is involved
   * - **Definition:** How the individual is involved in the resources content that is described in the exception.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private role: CodeableConcept | null;

  /**
   * Consent.provision.actor.reference Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Resource for the actor (or group, by role)
   * - **Definition:** The resource that identifies the actor. To identify actors by type, use group to identify a set of actors by some property they share (e.g. \'admitting officers\').
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Device',
   *       'http://hl7.org/fhir/StructureDefinition/Group',
   *       'http://hl7.org/fhir/StructureDefinition/CareTeam',
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/RelatedPerson',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *     ]
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private reference: Reference | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

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
      const optErrMsg = `Invalid Consent.provision.actor.role; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `reference` property value as a Reference object if defined; else an empty Reference object
   */
  public getReference(): Reference {
    return this.reference ?? new Reference();
  }

  /**
   * Assigns the provided Reference object value to the `reference` property.
   *
   * @decorator `@ReferenceTargets('Consent.provision.actor.reference', ['Device','Group','CareTeam','Organization','Patient','Practitioner','RelatedPerson','PractitionerRole',])`
   *
   * @param value - the `reference` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Consent.provision.actor.reference', [
    'Device',
  
    'Group',
  
    'CareTeam',
  
    'Organization',
  
    'Patient',
  
    'Practitioner',
  
    'RelatedPerson',
  
    'PractitionerRole',
  ])
  public setReference(value: Reference | undefined | null): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.reference = value;
    } else {
      this.reference = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `reference` property exists and has a value; `false` otherwise
   */
  public hasReference(): boolean {
    return isDefined<Reference>(this.reference) && !this.reference.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Consent.provision.actor';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.role,
      this.reference,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.role, this.reference, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ConsentProvisionActorComponent {
    const dest = new ConsentProvisionActorComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ConsentProvisionActorComponent): void {
    super.copyValues(dest);
    dest.role = this.role ? this.role.copy() : null;
    dest.reference = this.reference ? this.reference.copy() : null;
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

    if (this.hasRole()) {
      setFhirComplexJson(this.getRole(), 'role', jsonObj);
    }

    if (this.hasReference()) {
      setFhirComplexJson(this.getReference(), 'reference', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * ConsentProvisionDataComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Data controlled by this rule
 * - **Definition:** The resources controlled by this rule if specific resources are referenced.
 *
 * @category Data Models: Resource
 * @see [FHIR Consent](http://hl7.org/fhir/StructureDefinition/Consent)
 */
export class ConsentProvisionDataComponent extends BackboneElement implements IBackboneElement {
  constructor(meaning: EnumCodeType | CodeType | fhirCode | null = null, reference: Reference | null = null) {
    super();

    this.consentDataMeaningEnum = new ConsentDataMeaningEnum();

    this.meaning = constructorCodeValueAsEnumCodeType<ConsentDataMeaningEnum>(
      meaning,
      ConsentDataMeaningEnum,
      this.consentDataMeaningEnum,
      'Consent.provision.data.meaning',
    );

    this.reference = null;
    if (isDefined<Reference>(reference)) {
      this.setReference(reference);
    }
  }

  /**
   * Parse the provided `ConsentProvisionDataComponent` JSON to instantiate the ConsentProvisionDataComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ConsentProvisionDataComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ConsentProvisionDataComponent
   * @returns ConsentProvisionDataComponent data model or undefined for `ConsentProvisionDataComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ConsentProvisionDataComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ConsentProvisionDataComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ConsentProvisionDataComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    fieldName = 'meaning';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setMeaning(null);
      } else {
        instance.setMeaningElement(datatype);
      }
    } else {
      instance.setMeaning(null);
    }

    fieldName = 'reference';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setReference(null);
      } else {
        instance.setReference(datatype);
      }
    } else {
      instance.setReference(null);
    }

    return instance;
  }

  /**
   * FHIR CodeSystem: ConsentDataMeaning
   *
   * @see {@link ConsentDataMeaningEnum }
   */
  private readonly consentDataMeaningEnum: ConsentDataMeaningEnum;

  /**
   * Consent.provision.data.meaning Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** instance | related | dependents | authoredby
   * - **Definition:** How the resource reference is interpreted when testing consent restrictions.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link ConsentDataMeaningEnum }
   */
  private meaning: EnumCodeType | null;

  /**
   * Consent.provision.data.reference Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The actual data reference
   * - **Definition:** A reference to a specific resource that defines which resources are covered by this consent.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Resource',
   *     ]
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private reference: Reference | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `meaning` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link ConsentDataMeaningEnum }
   */
  public getMeaningEnumType(): EnumCodeType | null {
    return this.meaning;
  }

  /**
   * Assigns the provided EnumCodeType value to the `meaning` property.
   *
   * @param enumType - the `meaning` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link ConsentDataMeaningEnum }
   */
  public setMeaningEnumType(enumType: EnumCodeType | undefined | null): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid Consent.provision.data.meaning`;
      assertEnumCodeType<ConsentDataMeaningEnum>(enumType, ConsentDataMeaningEnum, errMsgPrefix);
      this.meaning = enumType;
    } else {
      this.meaning = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `meaning` property exists and has a value; `false` otherwise
   */
  public hasMeaningEnumType(): boolean {
    return isDefined<EnumCodeType>(this.meaning) && !this.meaning.isEmpty() && this.meaning.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `meaning` property value as a CodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link ConsentDataMeaningEnum }
   */
  public getMeaningElement(): CodeType | null {
    if (this.meaning === null) {
      return null;
    }
    return this.meaning as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `meaning` property.
   *
   * @param element - the `meaning` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link ConsentDataMeaningEnum }
   */
  public setMeaningElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid Consent.provision.data.meaning; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.meaning = new EnumCodeType(element, this.consentDataMeaningEnum);
    } else {
      this.meaning = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `meaning` property exists and has a value; `false` otherwise
   */
  public hasMeaningElement(): boolean {
    return this.hasMeaningEnumType();
  }

  /**
   * @returns the `meaning` property value as a fhirCode if defined; else null
   *
   * @see CodeSystem Enumeration: {@link ConsentDataMeaningEnum }
   */
  public getMeaning(): fhirCode | null {
    if (this.meaning === null) {
      return null;
    }
    return this.meaning.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `meaning` property.
   *
   * @param value - the `meaning` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link ConsentDataMeaningEnum }
   */
  public setMeaning(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid Consent.provision.data.meaning (${String(value)})`;
      this.meaning = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.consentDataMeaningEnum);
    } else {
      this.meaning = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `meaning` property exists and has a value; `false` otherwise
   */
  public hasMeaning(): boolean {
    return this.hasMeaningEnumType();
  }

  /**
   * @returns the `reference` property value as a Reference object if defined; else an empty Reference object
   */
  public getReference(): Reference {
    return this.reference ?? new Reference();
  }

  /**
   * Assigns the provided Reference object value to the `reference` property.
   *
   * @decorator `@ReferenceTargets('Consent.provision.data.reference', ['Resource',])`
   *
   * @param value - the `reference` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Consent.provision.data.reference', [
    'Resource',
  ])
  public setReference(value: Reference | undefined | null): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.reference = value;
    } else {
      this.reference = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `reference` property exists and has a value; `false` otherwise
   */
  public hasReference(): boolean {
    return isDefined<Reference>(this.reference) && !this.reference.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Consent.provision.data';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.meaning,
      this.reference,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.meaning, this.reference, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ConsentProvisionDataComponent {
    const dest = new ConsentProvisionDataComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ConsentProvisionDataComponent): void {
    super.copyValues(dest);
    dest.meaning = this.meaning ? this.meaning.copy() : null;
    dest.reference = this.reference ? this.reference.copy() : null;
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

    if (this.hasMeaningElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getMeaningElement()!, 'meaning', jsonObj);
    }

    if (this.hasReference()) {
      setFhirComplexJson(this.getReference(), 'reference', jsonObj);
    }

    return jsonObj;
  }
}
