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
 * Provenance Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/Provenance
 * StructureDefinition.name: Provenance
 * StructureDefinition.description: Provenance of a resource is a record that describes entities and processes involved in producing and delivering or otherwise influencing that resource. Provenance provides a critical foundation for assessing authenticity, enabling trust, and allowing reproducibility. Provenance assertions are a form of contextual metadata and can themselves become important records with their own provenance. Provenance statement indicates clinical significance in terms of confidence in authenticity, reliability, and trustworthiness, integrity, and stage in lifecycle (e.g. Document Completion - has the artifact been legally authenticated), all of which may impact security, privacy, and trust policies.
 * StructureDefinition.fhirVersion: 4.0.1
 *
 * For questions, suggestions, or bugs, please open an issue at [GitHub ts-fhir-datamodels/issues](https://github.com/Paqrat76/ts-fhir-datamodels/issues).
 *
 * @packageDocumentation
 */

import {
  BackboneElement,
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
  InstantType,
  InvalidTypeError,
  JSON,
  PrimitiveType,
  PrimitiveTypeJson,
  ReferenceTargets,
  UriType,
  assertEnumCodeType,
  assertFhirType,
  assertFhirTypeList,
  assertIsDefined,
  constructorCodeValueAsEnumCodeType,
  copyListValues,
  fhirCode,
  fhirCodeSchema,
  fhirInstant,
  fhirInstantSchema,
  fhirUri,
  fhirUriSchema,
  getPrimitiveTypeJson,
  getPrimitiveTypeListJson,
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
  setFhirPrimitiveListJson,
  setPolymorphicValueJson,
} from '@paq-ts-fhir/fhir-core';
import { CodeableConcept, PARSABLE_DATATYPE_MAP, Period, Reference, Signature } from '../complex-types/complex-datatypes';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';
import { ProvenanceEntityRoleEnum } from '../code-systems/ProvenanceEntityRoleEnum';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Symbol.metadata polyfill secret sauce for decorator metadata
(Symbol.metadata as any) ??= Symbol('Symbol.metadata');

/**
 * Provenance Class
 *
 * @remarks
 * Provenance of a resource is a record that describes entities and processes involved in producing and delivering or otherwise influencing that resource. Provenance provides a critical foundation for assessing authenticity, enabling trust, and allowing reproducibility. Provenance assertions are a form of contextual metadata and can themselves become important records with their own provenance. Provenance statement indicates clinical significance in terms of confidence in authenticity, reliability, and trustworthiness, integrity, and stage in lifecycle (e.g. Document Completion - has the artifact been legally authenticated), all of which may impact security, privacy, and trust policies.
 *
 * **FHIR Specification**
 * - **Short:** Who, What, When for a set of resources
 * - **Definition:** Provenance of a resource is a record that describes entities and processes involved in producing and delivering or otherwise influencing that resource. Provenance provides a critical foundation for assessing authenticity, enabling trust, and allowing reproducibility. Provenance assertions are a form of contextual metadata and can themselves become important records with their own provenance. Provenance statement indicates clinical significance in terms of confidence in authenticity, reliability, and trustworthiness, integrity, and stage in lifecycle (e.g. Document Completion - has the artifact been legally authenticated), all of which may impact security, privacy, and trust policies.
 * - **Comment:** Some parties may be duplicated between the target resource and its provenance.  For instance, the prescriber is usually (but not always) the author of the prescription resource. This resource is defined with close consideration for W3C Provenance.
 * - **FHIR Version:** 4.0.1
 *
 * @category Data Models: Resource
 * @see [FHIR Provenance](http://hl7.org/fhir/StructureDefinition/Provenance)
 */
export class Provenance extends DomainResource implements IDomainResource {
  constructor(target: Reference[] | null = null, recorded: InstantType | fhirInstant | null = null, agent: ProvenanceAgentComponent[] | null = null) {
    super();

    this.target = null;
    if (isDefinedList<Reference>(target)) {
      this.setTarget(target);
    }

    this.recorded = null;
    if (isDefined<InstantType | fhirInstant>(recorded)) {
      if (recorded instanceof PrimitiveType) {
        this.setRecordedElement(recorded);
      } else {
        this.setRecorded(recorded);
      }
    }

    this.agent = null;
    if (isDefinedList<ProvenanceAgentComponent>(agent)) {
      this.setAgent(agent);
    }
  }

  /**
   * Parse the provided `Provenance` JSON to instantiate the Provenance data model.
   *
   * @param sourceJson - JSON representing FHIR `Provenance`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to Provenance
   * @returns Provenance data model or undefined for `Provenance`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): Provenance | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'Provenance';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new Provenance();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'Provenance');
    fhirParser.processDomainResourceJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const classMetadata: DecoratorMetadataObject | null = Provenance[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for Provenance`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    fieldName = 'target';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype === undefined) {
          instance.setTarget(null);
        } else {
          instance.addTarget(datatype);
        }
      });
    } else {
      instance.setTarget(null);
    }

    fieldName = 'occurred[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const occurred: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setOccurred(occurred);

    fieldName = 'recorded';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: InstantType | undefined = fhirParser.parseInstantType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setRecorded(null);
      } else {
        instance.setRecordedElement(datatype);
      }
    } else {
      instance.setRecorded(null);
    }

    fieldName = 'policy';
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
        const datatype: UriType | undefined = fhirParser.parseUriType(dataJson.dtJson, dataJson.dtSiblingJson);
        if (datatype !== undefined) {
          instance.addPolicyElement(datatype);
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

    fieldName = 'reason';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addReason(datatype);
        }
      });
    }

    fieldName = 'activity';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setActivity(datatype);
    }

    fieldName = 'agent';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: ProvenanceAgentComponent | undefined = ProvenanceAgentComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component === undefined) {
          instance.setAgent(null);
        } else {
          instance.addAgent(component);
        }
      });
    } else {
      instance.setAgent(null);
    }

    fieldName = 'entity';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: ProvenanceEntityComponent | undefined = ProvenanceEntityComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addEntity(component);
        }
      });
    }

    fieldName = 'signature';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Signature | undefined = Signature.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addSignature(datatype);
        }
      });
    }

    return instance;
  }

  /**
   * Provenance.target Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Target Reference(s) (usually version specific)
   * - **Definition:** The Reference(s) that were generated or updated by  the activity described in this resource. A provenance can point to more than one target if multiple resources were created/updated by the same activity.
   * - **Comment:** Target references are usually version specific, but might not be, if a version has not been assigned or if the provenance information is part of the set of resources being maintained (i.e. a document). When using the RESTful API, the identity of the resource might not be known (especially not the version specific one); the client may either submit the resource first, and then the provenance, or it may submit both using a single transaction. See the notes on transaction for further discussion.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Resource',
   *     ]
   * - **Cardinality:** 1..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private target: Reference[] | null;

  /**
   * Provenance.occurred[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('Provenance.occurred[x]', ['Period','dateTime',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When the activity occurred
   * - **Definition:** The period during which the activity occurred.
   * - **Comment:** The period can be a little arbitrary; where possible, the time should correspond to human assessment of the activity time.
   * - **FHIR Types:**
   *     'Period',
   *     'dateTime',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('Provenance.occurred[x]',[
    'Period',
    'dateTime',
  ])
  private occurred?: IDataType | undefined;

  /**
   * Provenance.recorded Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When the activity was recorded / updated
   * - **Definition:** The instant of time at which the activity was recorded.
   * - **Comment:** This can be a little different from the time stamp on the resource if there is a delay between recording the event and updating the provenance and target resource.
   * - **FHIR Type:** `instant`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private recorded: InstantType | null;

  /**
   * Provenance.policy Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Policy or plan the activity was defined by
   * - **Definition:** Policy or plan the activity was defined by. Typically, a single activity may have multiple applicable policy documents, such as patient consent, guarantor funding, etc.
   * - **Comment:** For example: Where an OAuth token authorizes, the unique identifier from the OAuth token is placed into the policy element Where a policy engine (e.g. XACML) holds policy logic, the unique policy identifier is placed into the policy element.
   * - **FHIR Type:** `uri`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private policy?: UriType[] | undefined;

  /**
   * Provenance.location Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Where the activity occurred, if relevant
   * - **Definition:** Where the activity occurred, if relevant.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Location',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private location?: Reference | undefined;

  /**
   * Provenance.reason Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Reason the activity is occurring
   * - **Definition:** The reason that the activity was taking place.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private reason?: CodeableConcept[] | undefined;

  /**
   * Provenance.activity Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Activity that occurred
   * - **Definition:** An activity is something that occurs over a period of time and acts upon or with entities; it may include consuming, processing, transforming, modifying, relocating, using, or generating entities.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private activity?: CodeableConcept | undefined;

  /**
   * Provenance.agent Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Actor involved
   * - **Definition:** An actor taking a role in an activity  for which it can be assigned some degree of responsibility for the activity taking place.
   * - **Comment:** Several agents may be associated (i.e. has some responsibility for an activity) with an activity and vice-versa.
   * - **Requirements:** An agent can be a person, an organization, software, device, or other entities that may be ascribed responsibility.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 1..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private agent: ProvenanceAgentComponent[] | null;

  /**
   * Provenance.entity Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** An entity used in this activity
   * - **Definition:** An entity used in this activity.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private entity?: ProvenanceEntityComponent[] | undefined;

  /**
   * Provenance.signature Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Signature on target
   * - **Definition:** A digital signature on the target Reference(s). The signer should match a Provenance.agent. The purpose of the signature is indicated.
   * - **FHIR Type:** `Signature`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private signature?: Signature[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `target` property value as a Reference array
   */
  public getTarget(): Reference[] {
    return this.target ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `target` property.
   *
   * @decorator `@ReferenceTargets('Provenance.target', ['Resource',])`
   *
   * @param value - the `target` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Provenance.target', [
    'Resource',
  ])
  public setTarget(value: Reference[] | undefined | null): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.target = value;
    } else {
      this.target = null;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `target` array property.
   *
   * @decorator `@ReferenceTargets('Provenance.target', ['Resource',])`
   *
   * @param value - the `target` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Provenance.target', [
    'Resource',
  ])
  public addTarget(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initTarget();
      this.target?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `target` property exists and has a value; `false` otherwise
   */
  public hasTarget(): boolean {
    return isDefinedList<Reference>(this.target) && this.target.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `target` property
   */
  private initTarget(): void {
    if (!this.hasTarget()) {
      this.target = [] as Reference[];
    }
  }

  /**
   * @returns the `occurred` property value as a DataType object if defined; else undefined
   */
  public getOccurred(): IDataType | undefined {
    return this.occurred;
  }

  /**
   * Assigns the provided DataType object value to the `occurred` property.
   *
   * @decorator `@ChoiceDataTypes('Provenance.occurred[x]')`
   *
   * @param value - the `occurred` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('Provenance.occurred[x]')
  public setOccurred(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.occurred = value;
    } else {
      this.occurred = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `occurred` property exists and has a value; `false` otherwise
   */
  public hasOccurred(): boolean {
    return isDefined<IDataType>(this.occurred) && !this.occurred.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `occurred` property value as a Period object if defined; else undefined
   */
  public getOccurredPeriod(): Period | undefined {
    if (!isDefined<IDataType | undefined>(this.occurred)) {
      return undefined;
    }
    if (!(this.occurred instanceof Period)) {
      throw new InvalidTypeError(
        `DataType mismatch for Provenance.occurred[x]: Expected Period but encountered ${this.occurred.fhirType()}`,
      );
    }
    return this.occurred;
  }

  /**
   * @returns `true` if the `occurred` property exists as a Period and has a value; `false` otherwise
   */
  public hasOccurredPeriod(): boolean {
    return this.hasOccurred() && this.occurred instanceof Period;
  }

  /**
   * @returns the `occurred` property value as a DateTimeType object if defined; else undefined
   */
  public getOccurredDateTimeType(): DateTimeType | undefined {
    if (!isDefined<IDataType | undefined>(this.occurred)) {
      return undefined;
    }
    if (!(this.occurred instanceof DateTimeType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Provenance.occurred[x]: Expected DateTimeType but encountered ${this.occurred.fhirType()}`,
      );
    }
    return this.occurred;
  }

  /**
   * @returns `true` if the `occurred` property exists as a DateTimeType and has a value; `false` otherwise
   */
  public hasOccurredDateTimeType(): boolean {
    return this.hasOccurred() && this.occurred instanceof DateTimeType;
  }

  // End of choice datatype-specific "get"/"has" methods

  /**
   * @returns the `recorded` property value as a InstantType object if defined; else an empty InstantType object
   */
  public getRecordedElement(): InstantType {
    return this.recorded ?? new InstantType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `recorded` property.
   *
   * @param element - the `recorded` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setRecordedElement(element: InstantType | undefined | null): this {
    if (isDefined<InstantType>(element)) {
      const optErrMsg = `Invalid Provenance.recorded; Provided value is not an instance of InstantType.`;
      assertFhirType<InstantType>(element, InstantType, optErrMsg);
      this.recorded = element;
    } else {
      this.recorded = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `recorded` property exists and has a value; `false` otherwise
   */
  public hasRecordedElement(): boolean {
    return isDefined<InstantType>(this.recorded) && !this.recorded.isEmpty();
  }

  /**
   * @returns the `recorded` property value as a fhirInstant if defined; else null
   */
  public getRecorded(): fhirInstant | null {
    if (this.recorded?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.recorded.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `recorded` property.
   *
   * @param value - the `recorded` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setRecorded(value: fhirInstant | undefined | null): this {
    if (isDefined<fhirInstant>(value)) {
      const optErrMsg = `Invalid Provenance.recorded (${String(value)})`;
      this.recorded = new InstantType(parseFhirPrimitiveData(value, fhirInstantSchema, optErrMsg));
    } else {
      this.recorded = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `recorded` property exists and has a value; `false` otherwise
   */
  public hasRecorded(): boolean {
    return this.hasRecordedElement();
  }

  /**
   * @returns the `policy` property value as a UriType array
   */
  public getPolicyElement(): UriType[] {
    return this.policy ?? ([] as UriType[]);
  }

  /**
   * Assigns the provided UriType array value to the `policy` property.
   *
   * @param element - the `policy` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPolicyElement(element: UriType[] | undefined): this {
    if (isDefinedList<UriType>(element)) {
      const optErrMsg = `Invalid Provenance.policy; Provided value array has an element that is not an instance of UriType.`;
      assertFhirTypeList<UriType>(element, UriType, optErrMsg);
      this.policy = element;
    } else {
      this.policy = undefined;
    }
    return this;
  }

  /**
   * Add the provided UriType value to the `policy` array property.
   *
   * @param element - the `policy` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addPolicyElement(element: UriType | undefined): this {
    if (isDefined<UriType>(element)) {
      const optErrMsg = `Invalid Provenance.policy; Provided element is not an instance of UriType.`;
      assertFhirType<UriType>(element, UriType, optErrMsg);
      this.initPolicy();
      this.policy?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `policy` property exists and has a value; `false` otherwise
   */
  public hasPolicyElement(): boolean {
    return isDefinedList<UriType>(this.policy) && this.policy.some((item: UriType) => !item.isEmpty());
  }

  /**
   * @returns the `policy` property value as a fhirUri array
   */
  public getPolicy(): fhirUri[] {
    this.initPolicy();
    const policyValues = [] as fhirUri[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.policy!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        policyValues.push(value);
      }
    }
    return policyValues;
  }

  /**
   * Assigns the provided primitive value array to the `policy` property.
   *
   * @param value - the `policy` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPolicy(value: fhirUri[] | undefined): this {
    if (isDefinedList<fhirUri>(value)) {
      const policyElements = [] as UriType[];
      for (const policyValue of value) {
        const optErrMsg = `Invalid Provenance.policy array item (${String(policyValue)})`;
        const element = new UriType(parseFhirPrimitiveData(policyValue, fhirUriSchema, optErrMsg));
        policyElements.push(element);
      }
      this.policy = policyElements;
    } else {
      this.policy = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `policy` array property.
   *
   * @param value - the `policy` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addPolicy(value: fhirUri | undefined): this {
    if (isDefined<fhirUri>(value)) {
      const optErrMsg = `Invalid Provenance.policy array item (${String(value)})`;
      const element = new UriType(parseFhirPrimitiveData(value, fhirUriSchema, optErrMsg));
      this.initPolicy();
      this.addPolicyElement(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `policy` property exists and has a value; `false` otherwise
   */
  public hasPolicy(): boolean {
    return this.hasPolicyElement();
  }

  /**
   * Initialize the `policy` property
   */
  private initPolicy(): void {
    if (!this.hasPolicy()) {
      this.policy = [] as UriType[];
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
   * @decorator `@ReferenceTargets('Provenance.location', ['Location',])`
   *
   * @param value - the `location` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Provenance.location', [
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
   * @returns the `reason` property value as a CodeableConcept array
   */
  public getReason(): CodeableConcept[] {
    return this.reason ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `reason` property.
   *
   * @param value - the `reason` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setReason(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Provenance.reason; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.reason = value;
    } else {
      this.reason = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `reason` array property.
   *
   * @param value - the `reason` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addReason(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Provenance.reason; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initReason();
      this.reason?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `reason` property exists and has a value; `false` otherwise
   */
  public hasReason(): boolean {
    return isDefinedList<CodeableConcept>(this.reason) && this.reason.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `reason` property
   */
  private initReason(): void {
    if(!this.hasReason()) {
      this.reason = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `activity` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getActivity(): CodeableConcept {
    return this.activity ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Activity object value to the `activity` property.
   *
   * @param value - the `activity` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setActivity(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Provenance.activity; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.activity = value;
    } else {
      this.activity = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `activity` property exists and has a value; `false` otherwise
   */
  public hasActivity(): boolean {
    return isDefined<CodeableConcept>(this.activity) && !this.activity.isEmpty();
  }

  /**
   * @returns the `agent` property value as a ProvenanceAgentComponent array
   */
  public getAgent(): ProvenanceAgentComponent[] {
    return this.agent ?? ([] as ProvenanceAgentComponent[]);
  }

  /**
   * Assigns the provided ProvenanceAgentComponent array value to the `agent` property.
   *
   * @param value - the `agent` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAgent(value: ProvenanceAgentComponent[] | undefined | null): this {
    if (isDefinedList<ProvenanceAgentComponent>(value)) {
      const optErrMsg = `Invalid Provenance.agent; Provided value array has an element that is not an instance of ProvenanceAgentComponent.`;
      assertFhirTypeList<ProvenanceAgentComponent>(value, ProvenanceAgentComponent, optErrMsg);
      this.agent = value;
    } else {
      this.agent = null;
    }
    return this;
  }

  /**
   * Add the provided ProvenanceAgentComponent value to the `agent` array property.
   *
   * @param value - the `agent` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addAgent(value: ProvenanceAgentComponent | undefined): this {
    if (isDefined<ProvenanceAgentComponent>(value)) {
      const optErrMsg = `Invalid Provenance.agent; Provided element is not an instance of ProvenanceAgentComponent.`;
      assertFhirType<ProvenanceAgentComponent>(value, ProvenanceAgentComponent, optErrMsg);
      this.initAgent();
      this.agent?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `agent` property exists and has a value; `false` otherwise
   */
  public hasAgent(): boolean {
    return isDefinedList<ProvenanceAgentComponent>(this.agent) && this.agent.some((item: ProvenanceAgentComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `agent` property
   */
  private initAgent(): void {
    if(!this.hasAgent()) {
      this.agent = [] as ProvenanceAgentComponent[];
    }
  }

  /**
   * @returns the `entity` property value as a ProvenanceEntityComponent array
   */
  public getEntity(): ProvenanceEntityComponent[] {
    return this.entity ?? ([] as ProvenanceEntityComponent[]);
  }

  /**
   * Assigns the provided ProvenanceEntityComponent array value to the `entity` property.
   *
   * @param value - the `entity` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setEntity(value: ProvenanceEntityComponent[] | undefined): this {
    if (isDefinedList<ProvenanceEntityComponent>(value)) {
      const optErrMsg = `Invalid Provenance.entity; Provided value array has an element that is not an instance of ProvenanceEntityComponent.`;
      assertFhirTypeList<ProvenanceEntityComponent>(value, ProvenanceEntityComponent, optErrMsg);
      this.entity = value;
    } else {
      this.entity = undefined;
    }
    return this;
  }

  /**
   * Add the provided ProvenanceEntityComponent value to the `entity` array property.
   *
   * @param value - the `entity` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addEntity(value: ProvenanceEntityComponent | undefined): this {
    if (isDefined<ProvenanceEntityComponent>(value)) {
      const optErrMsg = `Invalid Provenance.entity; Provided element is not an instance of ProvenanceEntityComponent.`;
      assertFhirType<ProvenanceEntityComponent>(value, ProvenanceEntityComponent, optErrMsg);
      this.initEntity();
      this.entity?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `entity` property exists and has a value; `false` otherwise
   */
  public hasEntity(): boolean {
    return isDefinedList<ProvenanceEntityComponent>(this.entity) && this.entity.some((item: ProvenanceEntityComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `entity` property
   */
  private initEntity(): void {
    if(!this.hasEntity()) {
      this.entity = [] as ProvenanceEntityComponent[];
    }
  }

  /**
   * @returns the `signature` property value as a Signature array
   */
  public getSignature(): Signature[] {
    return this.signature ?? ([] as Signature[]);
  }

  /**
   * Assigns the provided Signature array value to the `signature` property.
   *
   * @param value - the `signature` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSignature(value: Signature[] | undefined): this {
    if (isDefinedList<Signature>(value)) {
      const optErrMsg = `Invalid Provenance.signature; Provided value array has an element that is not an instance of Signature.`;
      assertFhirTypeList<Signature>(value, Signature, optErrMsg);
      this.signature = value;
    } else {
      this.signature = undefined;
    }
    return this;
  }

  /**
   * Add the provided Signature value to the `signature` array property.
   *
   * @param value - the `signature` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addSignature(value: Signature | undefined): this {
    if (isDefined<Signature>(value)) {
      const optErrMsg = `Invalid Provenance.signature; Provided element is not an instance of Signature.`;
      assertFhirType<Signature>(value, Signature, optErrMsg);
      this.initSignature();
      this.signature?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `signature` property exists and has a value; `false` otherwise
   */
  public hasSignature(): boolean {
    return isDefinedList<Signature>(this.signature) && this.signature.some((item: Signature) => !item.isEmpty());
  }

  /**
   * Initialize the `signature` property
   */
  private initSignature(): void {
    if(!this.hasSignature()) {
      this.signature = [] as Signature[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Provenance';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.target,
      this.occurred,
      this.recorded,
      this.policy,
      this.location,
      this.reason,
      this.activity,
      this.agent,
      this.entity,
      this.signature,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.recorded, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): Provenance {
    const dest = new Provenance();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: Provenance): void {
    super.copyValues(dest);
    const targetList = copyListValues<Reference>(this.target);
    dest.target = targetList.length === 0 ? null : targetList;
    dest.occurred = this.occurred?.copy() as IDataType;
    dest.recorded = this.recorded ? this.recorded.copy() : null;
    const policyList = copyListValues<UriType>(this.policy);
    dest.policy = policyList.length === 0 ? undefined : policyList;
    dest.location = this.location?.copy();
    const reasonList = copyListValues<CodeableConcept>(this.reason);
    dest.reason = reasonList.length === 0 ? undefined : reasonList;
    dest.activity = this.activity?.copy();
    const agentList = copyListValues<ProvenanceAgentComponent>(this.agent);
    dest.agent = agentList.length === 0 ? null : agentList;
    const entityList = copyListValues<ProvenanceEntityComponent>(this.entity);
    dest.entity = entityList.length === 0 ? undefined : entityList;
    const signatureList = copyListValues<Signature>(this.signature);
    dest.signature = signatureList.length === 0 ? undefined : signatureList;
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

    if (this.hasTarget()) {
      setFhirComplexListJson(this.getTarget(), 'target', jsonObj);
    } else {
      jsonObj['target'] = null;
    }

    if (this.hasOccurred()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getOccurred()!, 'occurred', jsonObj);
    }

    if (this.hasRecordedElement()) {
      setFhirPrimitiveJson<fhirInstant>(this.getRecordedElement(), 'recorded', jsonObj);
    } else {
      jsonObj['recorded'] = null;
    }

    if (this.hasPolicy()) {
      setFhirPrimitiveListJson(this.getPolicyElement(), 'policy', jsonObj);
    }

    if (this.hasLocation()) {
      setFhirComplexJson(this.getLocation(), 'location', jsonObj);
    }

    if (this.hasReason()) {
      setFhirComplexListJson(this.getReason(), 'reason', jsonObj);
    }

    if (this.hasActivity()) {
      setFhirComplexJson(this.getActivity(), 'activity', jsonObj);
    }

    if (this.hasAgent()) {
      setFhirBackboneElementListJson(this.getAgent(), 'agent', jsonObj);
    } else {
      jsonObj['agent'] = null;
    }

    if (this.hasEntity()) {
      setFhirBackboneElementListJson(this.getEntity(), 'entity', jsonObj);
    }

    if (this.hasSignature()) {
      setFhirComplexListJson(this.getSignature(), 'signature', jsonObj);
    }

    return jsonObj;
  }
}

/**
 * ProvenanceAgentComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Actor involved
 * - **Definition:** An actor taking a role in an activity  for which it can be assigned some degree of responsibility for the activity taking place.
 * - **Comment:** Several agents may be associated (i.e. has some responsibility for an activity) with an activity and vice-versa.
 * - **Requirements:** An agent can be a person, an organization, software, device, or other entities that may be ascribed responsibility.
 *
 * @category Data Models: Resource
 * @see [FHIR Provenance](http://hl7.org/fhir/StructureDefinition/Provenance)
 */
export class ProvenanceAgentComponent extends BackboneElement implements IBackboneElement {
  constructor(who: Reference | null = null) {
    super();

    this.who = null;
    if (isDefined<Reference>(who)) {
      this.setWho(who);
    }
  }

  /**
   * Parse the provided `ProvenanceAgentComponent` JSON to instantiate the ProvenanceAgentComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ProvenanceAgentComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ProvenanceAgentComponent
   * @returns ProvenanceAgentComponent data model or undefined for `ProvenanceAgentComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ProvenanceAgentComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ProvenanceAgentComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ProvenanceAgentComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setType(datatype);
    }

    fieldName = 'role';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addRole(datatype);
        }
      });
    }

    fieldName = 'who';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setWho(null);
      } else {
        instance.setWho(datatype);
      }
    } else {
      instance.setWho(null);
    }

    fieldName = 'onBehalfOf';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setOnBehalfOf(datatype);
    }

    return instance;
  }

  /**
   * Provenance.agent.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** How the agent participated
   * - **Definition:** The participation the agent had with respect to the activity.
   * - **Comment:** For example: author, performer, enterer, attester, etc.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private type_?: CodeableConcept | undefined;

  /**
   * Provenance.agent.role Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** What the agents role was
   * - **Definition:** The function of the agent with respect to the activity. The security role enabling the agent with respect to the activity.
   * - **Comment:** For example: doctor, nurse, clerk, etc.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private role?: CodeableConcept[] | undefined;

  /**
   * Provenance.agent.who Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who participated
   * - **Definition:** The individual, device or organization that participated in the event.
   * - **Comment:** whoIdentity should be used when the agent is not a Resource type.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *       'http://hl7.org/fhir/StructureDefinition/RelatedPerson',
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/Device',
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *     ]
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private who: Reference | null;

  /**
   * Provenance.agent.onBehalfOf Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who the agent is representing
   * - **Definition:** The individual, device, or organization for whom the change was made.
   * - **Comment:** onBehalfOfIdentity should be used when the agent is not a Resource type.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *       'http://hl7.org/fhir/StructureDefinition/RelatedPerson',
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/Device',
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private onBehalfOf?: Reference | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

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
      const optErrMsg = `Invalid Provenance.agent.type; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `role` property value as a CodeableConcept array
   */
  public getRole(): CodeableConcept[] {
    return this.role ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `role` property.
   *
   * @param value - the `role` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setRole(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Provenance.agent.role; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.role = value;
    } else {
      this.role = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `role` array property.
   *
   * @param value - the `role` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addRole(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Provenance.agent.role; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initRole();
      this.role?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `role` property exists and has a value; `false` otherwise
   */
  public hasRole(): boolean {
    return isDefinedList<CodeableConcept>(this.role) && this.role.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `role` property
   */
  private initRole(): void {
    if(!this.hasRole()) {
      this.role = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `who` property value as a Reference object if defined; else an empty Reference object
   */
  public getWho(): Reference {
    return this.who ?? new Reference();
  }

  /**
   * Assigns the provided Who object value to the `who` property.
   *
   * @decorator `@ReferenceTargets('Provenance.agent.who', ['Practitioner','PractitionerRole','RelatedPerson','Patient','Device','Organization',])`
   *
   * @param value - the `who` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Provenance.agent.who', [
    'Practitioner',
  
    'PractitionerRole',
  
    'RelatedPerson',
  
    'Patient',
  
    'Device',
  
    'Organization',
  ])
  public setWho(value: Reference | undefined | null): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.who = value;
    } else {
      this.who = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `who` property exists and has a value; `false` otherwise
   */
  public hasWho(): boolean {
    return isDefined<Reference>(this.who) && !this.who.isEmpty();
  }

  /**
   * @returns the `onBehalfOf` property value as a Reference object; else an empty Reference object
   */
  public getOnBehalfOf(): Reference {
    return this.onBehalfOf ?? new Reference();
  }

  /**
   * Assigns the provided OnBehalfOf object value to the `onBehalfOf` property.
   *
   * @decorator `@ReferenceTargets('Provenance.agent.onBehalfOf', ['Practitioner','PractitionerRole','RelatedPerson','Patient','Device','Organization',])`
   *
   * @param value - the `onBehalfOf` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Provenance.agent.onBehalfOf', [
    'Practitioner',
  
    'PractitionerRole',
  
    'RelatedPerson',
  
    'Patient',
  
    'Device',
  
    'Organization',
  ])
  public setOnBehalfOf(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.onBehalfOf = value;
    } else {
      this.onBehalfOf = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `onBehalfOf` property exists and has a value; `false` otherwise
   */
  public hasOnBehalfOf(): boolean {
    return isDefined<Reference>(this.onBehalfOf) && !this.onBehalfOf.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Provenance.agent';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.type_,
      this.role,
      this.who,
      this.onBehalfOf,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.who, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ProvenanceAgentComponent {
    const dest = new ProvenanceAgentComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ProvenanceAgentComponent): void {
    super.copyValues(dest);
    dest.type_ = this.type_?.copy();
    const roleList = copyListValues<CodeableConcept>(this.role);
    dest.role = roleList.length === 0 ? undefined : roleList;
    dest.who = this.who ? this.who.copy() : null;
    dest.onBehalfOf = this.onBehalfOf?.copy();
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

    if (this.hasRole()) {
      setFhirComplexListJson(this.getRole(), 'role', jsonObj);
    }

    if (this.hasWho()) {
      setFhirComplexJson(this.getWho(), 'who', jsonObj);
    } else {
      jsonObj['who'] = null;
    }

    if (this.hasOnBehalfOf()) {
      setFhirComplexJson(this.getOnBehalfOf(), 'onBehalfOf', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * ProvenanceEntityComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** An entity used in this activity
 * - **Definition:** An entity used in this activity.
 *
 * @category Data Models: Resource
 * @see [FHIR Provenance](http://hl7.org/fhir/StructureDefinition/Provenance)
 */
export class ProvenanceEntityComponent extends BackboneElement implements IBackboneElement {
  constructor(role: EnumCodeType | CodeType | fhirCode | null = null, what: Reference | null = null) {
    super();

    this.provenanceEntityRoleEnum = new ProvenanceEntityRoleEnum();

    this.role = constructorCodeValueAsEnumCodeType<ProvenanceEntityRoleEnum>(
      role,
      ProvenanceEntityRoleEnum,
      this.provenanceEntityRoleEnum,
      'Provenance.entity.role',
    );

    this.what = null;
    if (isDefined<Reference>(what)) {
      this.setWhat(what);
    }
  }

  /**
   * Parse the provided `ProvenanceEntityComponent` JSON to instantiate the ProvenanceEntityComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ProvenanceEntityComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ProvenanceEntityComponent
   * @returns ProvenanceEntityComponent data model or undefined for `ProvenanceEntityComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ProvenanceEntityComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ProvenanceEntityComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ProvenanceEntityComponent();

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
      if (datatype === undefined) {
        instance.setRole(null);
      } else {
        instance.setRoleElement(datatype);
      }
    } else {
      instance.setRole(null);
    }

    fieldName = 'what';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setWhat(null);
      } else {
        instance.setWhat(datatype);
      }
    } else {
      instance.setWhat(null);
    }

    fieldName = 'agent';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: ProvenanceAgentComponent | undefined = ProvenanceAgentComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addAgent(component);
        }
      });
    }

    return instance;
  }

  /**
   * FHIR CodeSystem: ProvenanceEntityRole
   *
   * @see {@link ProvenanceEntityRoleEnum }
   */
  private readonly provenanceEntityRoleEnum: ProvenanceEntityRoleEnum;

  /**
   * Provenance.entity.role Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** derivation | revision | quotation | source | removal
   * - **Definition:** How the entity was used during the activity.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link ProvenanceEntityRoleEnum }
   */
  private role: EnumCodeType | null;

  /**
   * Provenance.entity.what Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Identity of entity
   * - **Definition:** Identity of the  Entity used. May be a logical or physical uri and maybe absolute or relative.
   * - **Comment:** whatIdentity should be used for entities that are not a Resource type.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Resource',
   *     ]
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private what: Reference | null;

  /**
   * Provenance.entity.agent Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Entity is attributed to this agent
   * - **Definition:** The entity is attributed to an agent to express the agent\'s responsibility for that entity, possibly along with other agents. This description can be understood as shorthand for saying that the agent was responsible for the activity which generated the entity.
   * - **Comment:** A usecase where one Provenance.entity.agent is used where the Entity that was used in the creation/updating of the Target, is not in the context of the same custodianship as the Target, and thus the meaning of Provenance.entity.agent is to say that the entity referenced is managed elsewhere and that this Agent provided access to it.  This would be similar to where the Entity being referenced is managed outside FHIR, such as through HL7 v2, v3, or XDS. This might be where the Entity being referenced is managed in another FHIR resource server. Thus it explains the Provenance of that Entity\'s use in the context of this Provenance activity.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private agent?: ProvenanceAgentComponent[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `role` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link ProvenanceEntityRoleEnum }
   */
  public getRoleEnumType(): EnumCodeType | null {
    return this.role;
  }

  /**
   * Assigns the provided EnumCodeType value to the `role` property.
   *
   * @param enumType - the `role` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link ProvenanceEntityRoleEnum }
   */
  public setRoleEnumType(enumType: EnumCodeType | undefined | null): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid Provenance.entity.role`;
      assertEnumCodeType<ProvenanceEntityRoleEnum>(enumType, ProvenanceEntityRoleEnum, errMsgPrefix);
      this.role = enumType;
    } else {
      this.role = null;
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
   * @returns the `role` property value as a CodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link ProvenanceEntityRoleEnum }
   */
  public getRoleElement(): CodeType | null {
    if (this.role === null) {
      return null;
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
   * @see CodeSystem Enumeration: {@link ProvenanceEntityRoleEnum }
   */
  public setRoleElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid Provenance.entity.role; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.role = new EnumCodeType(element, this.provenanceEntityRoleEnum);
    } else {
      this.role = null;
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
   * @returns the `role` property value as a fhirCode if defined; else null
   *
   * @see CodeSystem Enumeration: {@link ProvenanceEntityRoleEnum }
   */
  public getRole(): fhirCode | null {
    if (this.role === null) {
      return null;
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
   * @see CodeSystem Enumeration: {@link ProvenanceEntityRoleEnum }
   */
  public setRole(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid Provenance.entity.role (${String(value)})`;
      this.role = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.provenanceEntityRoleEnum);
    } else {
      this.role = null;
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
   * @returns the `what` property value as a Reference object if defined; else an empty Reference object
   */
  public getWhat(): Reference {
    return this.what ?? new Reference();
  }

  /**
   * Assigns the provided What object value to the `what` property.
   *
   * @decorator `@ReferenceTargets('Provenance.entity.what', ['Resource',])`
   *
   * @param value - the `what` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Provenance.entity.what', [
    'Resource',
  ])
  public setWhat(value: Reference | undefined | null): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.what = value;
    } else {
      this.what = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `what` property exists and has a value; `false` otherwise
   */
  public hasWhat(): boolean {
    return isDefined<Reference>(this.what) && !this.what.isEmpty();
  }

  /**
   * @returns the `agent` property value as a ProvenanceAgentComponent array
   */
  public getAgent(): ProvenanceAgentComponent[] {
    return this.agent ?? ([] as ProvenanceAgentComponent[]);
  }

  /**
   * Assigns the provided ProvenanceAgentComponent array value to the `agent` property.
   *
   * @param value - the `agent` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAgent(value: ProvenanceAgentComponent[] | undefined): this {
    if (isDefinedList<ProvenanceAgentComponent>(value)) {
      const optErrMsg = `Invalid Provenance.entity.agent; Provided value array has an element that is not an instance of ProvenanceAgentComponent.`;
      assertFhirTypeList<ProvenanceAgentComponent>(value, ProvenanceAgentComponent, optErrMsg);
      this.agent = value;
    } else {
      this.agent = undefined;
    }
    return this;
  }

  /**
   * Add the provided ProvenanceAgentComponent value to the `agent` array property.
   *
   * @param value - the `agent` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addAgent(value: ProvenanceAgentComponent | undefined): this {
    if (isDefined<ProvenanceAgentComponent>(value)) {
      const optErrMsg = `Invalid Provenance.entity.agent; Provided element is not an instance of ProvenanceAgentComponent.`;
      assertFhirType<ProvenanceAgentComponent>(value, ProvenanceAgentComponent, optErrMsg);
      this.initAgent();
      this.agent?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `agent` property exists and has a value; `false` otherwise
   */
  public hasAgent(): boolean {
    return isDefinedList<ProvenanceAgentComponent>(this.agent) && this.agent.some((item: ProvenanceAgentComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `agent` property
   */
  private initAgent(): void {
    if(!this.hasAgent()) {
      this.agent = [] as ProvenanceAgentComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Provenance.entity';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.role,
      this.what,
      this.agent,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.role, this.what, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ProvenanceEntityComponent {
    const dest = new ProvenanceEntityComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ProvenanceEntityComponent): void {
    super.copyValues(dest);
    dest.role = this.role ? this.role.copy() : null;
    dest.what = this.what ? this.what.copy() : null;
    const agentList = copyListValues<ProvenanceAgentComponent>(this.agent);
    dest.agent = agentList.length === 0 ? undefined : agentList;
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
    } else {
      jsonObj['role'] = null;
    }

    if (this.hasWhat()) {
      setFhirComplexJson(this.getWhat(), 'what', jsonObj);
    } else {
      jsonObj['what'] = null;
    }

    if (this.hasAgent()) {
      setFhirBackboneElementListJson(this.getAgent(), 'agent', jsonObj);
    }

    return jsonObj;
  }
}
